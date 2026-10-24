import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// 1. Create a free form at formspree.io (use the same email below)
//    and paste its URL here. This is what fixes the "didn't send" error.
const FORM_URL = "https://formspree.io/f/YOUR_FORM_ID";

// 2. Update your own links
const EMAIL = "dhnanjayrajeshsharma@gmail.com";
const GITHUB = "https://github.com/dhananjayshrama";
const LINKEDIN = "https://www.linkedin.com/in/your-id";

const sans = "font-['Segoe_UI','Open_Sans',sans-serif]";
const display = "font-['Montserrat','Segoe_UI',sans-serif]";
const script = "font-['Mrs_Saint_Delafield',cursive]";

const iconLink =
  "hover:opacity-55 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#150f10]";

// simple input: solid white, square corners, no shadow
const field =
  "peer w-full rounded-none border border-[#150f10]/30 bg-white px-4 pb-2 pt-6 text-[1rem] text-[#150f10] transition " +
  "placeholder:text-transparent " +
  "focus-visible:outline-none focus-visible:border-[#150f10] " +
  sans;

// label that sits inside the box and floats up on focus or when filled
const floatLabel =
  "pointer-events-none absolute left-4 top-4 origin-left text-[0.95rem] text-[#150f10]/55 transition-all duration-200 " +
  "peer-focus:top-2 peer-focus:text-[0.7rem] peer-focus:font-semibold peer-focus:text-[#150f10] " +
  "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[0.7rem] " +
  "peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-[#150f10] " +
  sans;

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        // shows the real reason in the browser console (F12) while testing
        const data = await res.json().catch(() => ({}));
        console.error("Formspree error:", res.status, data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-white px-4 py-16 text-[#150f10] lg:px-8 lg:py-24"
    >
      {/* fonts, kept here so this stays a single file (skip if already loaded) */}
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&family=Mrs+Saint+Delafield&display=swap");`}</style>

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT: plain white box (no outer border) */}
        <div className="order-2 flex flex-col justify-center self-start bg-white px-6 py-8 lg:order-1 lg:py-10 lg:pl-14 lg:pr-[clamp(5rem,8vw,8rem)]">
          <p className={`mb-6 max-w-[32rem] text-[1rem] leading-relaxed ${sans}`}>
            Looking for internships, junior MERN roles or freelance work? Tell me
            what you&rsquo;re building and I&rsquo;ll reply by email.
          </p>

          <form onSubmit={handleSubmit} className="flex max-w-[32rem] flex-col gap-4">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder=" "
                required
                className={field}
              />
              <label htmlFor="name" className={floatLabel}>
                Your name
              </label>
            </div>

            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder=" "
                required
                className={field}
              />
              <label htmlFor="email" className={floatLabel}>
                Your email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="3"
                placeholder=" "
                required
                className={`${field} resize-y`}
              />
              <label htmlFor="message" className={floatLabel}>
                Your message
              </label>
            </div>

            {/* spam trap: real visitors never see or fill this */}
            <input
              type="text"
              name="_gotcha"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-px w-px opacity-0"
            />

            <div className="mt-1 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className={`cursor-pointer rounded-none border border-[#150f10] bg-[#150f10] px-8 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:enabled:bg-transparent hover:enabled:text-[#150f10] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#150f10] disabled:cursor-wait disabled:opacity-60 ${display}`}
              >
                {status === "sending" ? "Sending" : "Send message"}
              </button>

              <p role="status" aria-live="polite" className={`m-0 text-[0.9rem] ${sans}`}>
                {status === "success" && "Message sent. I'll get back to you soon."}
                {status === "error" &&
                  `The message didn't send. Try again, or email ${EMAIL} directly.`}
              </p>
            </div>
          </form>
        </div>

        {/* RIGHT: headline, social icons, signature */}
        <div className="relative z-10 order-1 mb-10 flex flex-col items-start pt-4 lg:order-2 lg:mb-0 lg:items-end">
          <h2
            className={`m-0 whitespace-nowrap text-left text-[14.5vw] font-black uppercase leading-[0.88] tracking-[-0.03em] lg:text-right lg:text-[clamp(2.6rem,8.5vw,8.5rem)] ${display}`}
          >
            Let&rsquo;s
            <br />
            work
            <br />
            together
          </h2>

          <div className="mt-10 flex w-full max-w-[260px] justify-between border-t border-[#150f10] pt-5 text-[1.85rem] leading-none">
            <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLink}>
              <FaGithub />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconLink}>
              <FaLinkedin />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email" className={iconLink}>
              <FaEnvelope />
            </a>
          </div>

          <p className={`mt-8 text-[2.25rem] leading-none ${script}`}>Made by Danny</p>
        </div>
      </div>
    </section>
  );
}