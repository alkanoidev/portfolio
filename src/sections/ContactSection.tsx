import IconButton from "components/buttons/IconButton";
import PrimaryButton from "components/buttons/PrimaryButton";
import SecondaryButton from "components/buttons/SecondaryButton";
import { useState } from "react";
import classNames from "utils/classNames";

type FormValuesProps = {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
};

export default function ContactSection() {
  const [formValues, setFormValues] = useState<FormValuesProps | null>({
    name: "",
    email: "",
    message: "",
  });
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.currentTarget;
    setFormValues((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contact", ...formValues }),
    // })
    //   .then(() => {
    //     // navigate("/contact/success");
    //   })
    //   .catch((error) => {});
  };

  return (
    <div
      className="h-full flex flex-col justify-center items-center gap-10 mt-52 sm:px-0 px-2 mb-4"
      id="contact"
    >
      <div className="w-full max-w-5xl">
        <div className="bg-deep-sky w-full rounded-3xl p-8 space-y-4 ring-4 ring-deep-sky">
          <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
          <p className="text-2xl sm:text-3xl text-zinc-400">
            I would love to hear from you and discuss any potential
            opportunities or collaborations.
          </p>
          <div className="flex gap-4 items-center pt-10">
            <IconButton
              href="https://www.linkedin.com/in/filip-ivanovic-60ab98242"
              title="LinkedIn"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-white group-hover:fill-black transition"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              }
            />
            <IconButton
              href="https://github.com/alkanoidev"
              title="GitHub"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-white group-hover:fill-black transition"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              }
            />
            <SecondaryButton
              href="mailto:alkanoidev@gmail.com"
              title="alkanoidev@gmail.com"
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 sm:gap-4 w-full mt-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="sm:inline-flex w-full sm:space-x-4 space-x-0 block sm:space-y-0 space-y-6">
            <input
              className={classNames(
                "bg-deep-sky p-8 rounded-3xl transition w-full text-lg",
                "ring-4 ring-gray-800",
                "focus:ring-4 focus:ring-sky-900 focus:outline-none focus:placeholder:text-transparent"
              )}
              type="text"
              name="name"
              value={formValues?.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              className={classNames(
                "bg-deep-sky p-8 rounded-3xl transition w-full text-lg",
                "ring-4 ring-gray-800",
                "focus:ring-4 focus:ring-sky-900 focus:outline-none focus:placeholder:text-transparent"
              )}
              type="email"
              name="email"
              placeholder="Email"
              value={formValues?.email}
              onChange={handleChange}
              required
            />
          </div>
          <div
            className={classNames(
              "w-full relative z-0 bg-deep-sky pb-20 rounded-3xl transition",
              isTextareaFocused
                ? "border-4 border-sky-900 outline-none"
                : "border-4 border-gray-800"
            )}
          >
            <textarea
              className={classNames(
                "bg-deep-sky p-8 rounded-3xl transition resize-none text-lg w-full focus:placeholder:text-transparent mb-1",
                "focus:outline-none"
              )}
              name="message"
              placeholder="Message"
              value={formValues?.message}
              onChange={handleChange}
              onFocus={() => setIsTextareaFocused(true)}
              onBlur={() => setIsTextareaFocused(false)}
              rows={6}
              required
            />
            <div
              className={classNames(
                "absolute -right-1 -bottom-1 z-10 bg-dark rounded-tl-3xl p-4 transition",
                isTextareaFocused
                  ? "border-t-4 border-l-4 border-t-sky-900 border-l-sky-900 border-r-4 border-b-4 border-r-dark border-b-dark"
                  : "border-t-4 border-t-gray-800 border-l-4 border-l-gray-800 border-b-4 border-b-dark border-r-4 border-r-dark"
              )}
            >
              <PrimaryButton
                title="Send"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
