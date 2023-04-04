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
      id="contact-section"
    >
      <div className="w-full max-w-5xl rounded-3xl">
        <h1 className="section-title text-5xl font-bold">Contact</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 sm:gap-4 w-full mt-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="sm:flex w-full gap-4 block">
            <input
              className={classNames(
                "bg-deep-primary px-8 py-8 rounded-3xl transition w-full",
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
                "bg-deep-primary px-8 py-8 rounded-3xl transition w-full",
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
          <p className="flex flex-col gap-2">
            <textarea
              placeholder="Message"
              className={classNames(
                "bg-deep-primary px-8 py-8 rounded-3xl transition resize-none",
                "focus:ring-4 focus:ring-sky-900 focus:outline-none focus:placeholder:text-transparent"
              )}
              name="message"
              value={formValues?.message}
              onChange={handleChange}
              rows={6}
              required
            />
          </p>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center flex-wrap gap-3">
              <SecondaryButton href="https://www.linkedin.com/in/filip-ivanovic-60ab98242">
                LinkedIn
              </SecondaryButton>
              <SecondaryButton href="https://github.com/alkanoidev">
                GitHub
              </SecondaryButton>
              <h1 className="text-lg">alkanoidev@gmail.com</h1>
            </div>
            <div>
              <PrimaryButton>Submit</PrimaryButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
