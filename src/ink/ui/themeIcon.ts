import gsap from 'gsap';
import type { Theme } from './theme';

export interface MorphOptions {
  duration: number;
  ease: string;
  timeScale: number;
  /** Seconds after which the button chrome (bg / border / colour) switches theme. */
  chromeDelay?: number;
  /** Starting chrome colours (computed before the DOM theme flipped). */
  chromeFrom?: ChromeColors;
}

export interface ChromeColors {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

/**
 * The theme button. It lives above the ink overlay (it is hidden in the snapshots),
 * so its colours are held at the old theme until the ink reaches it.
 */
export class ThemeIcon {
  private readonly button: HTMLElement;
  private timeline: gsap.core.Timeline | null = null;

  constructor(button: HTMLElement) {
    this.button = button;
  }

  kill(): void {
    this.timeline?.kill();
    this.timeline = null;
  }

  setTimeScale(scale: number): void {
    this.timeline?.timeScale(scale);
  }

  /** Current chrome colours as rendered (call before flipping the theme). */
  readChrome(): ChromeColors {
    const cs = getComputedStyle(this.button);
    return { backgroundColor: cs.backgroundColor, borderColor: cs.borderTopColor, color: cs.color };
  }

  /** Jump to a theme without animating. */
  set(_theme: Theme): void {
    this.timeline?.kill();
    this.timeline = null;
    gsap.set(this.button, { clearProps: 'backgroundColor,borderColor,color' });
  }

  /** Animate the button colours to the new theme. */
  morphTo(_theme: Theme, opts: MorphOptions): void {
    this.timeline?.kill();
    const tl = gsap.timeline({ defaults: { duration: opts.duration, ease: opts.ease } });

    if (opts.chromeFrom) {
      // Hold the old colours (the live DOM already has the new theme), then hand over to
      // the stylesheet as the ink arrives.
      Object.assign(this.button.style, opts.chromeFrom);
      const delay = opts.chromeDelay ?? 0;
      const swap = Math.min(0.18, opts.duration * 0.15);
      tl.to(
        this.button,
        {
          backgroundColor: () => this.targetChrome().backgroundColor,
          borderColor: () => this.targetChrome().borderColor,
          color: () => this.targetChrome().color,
          duration: swap,
          ease: 'power1.out',
          onComplete: () => {
            gsap.set(this.button, { clearProps: 'backgroundColor,borderColor,color' });
          },
        },
        delay,
      );
    } else {
      gsap.set(this.button, { clearProps: 'backgroundColor,borderColor,color' });
    }

    tl.timeScale(opts.timeScale);
    this.timeline = tl;
  }

  /** Stylesheet colours for the current (already flipped) theme. */
  private targetChrome(): ChromeColors {
    const saved = this.button.getAttribute('style') ?? '';
    this.button.style.removeProperty('background-color');
    this.button.style.removeProperty('border-color');
    this.button.style.removeProperty('color');
    const target = this.readChrome();
    this.button.setAttribute('style', saved);
    return target;
  }
}