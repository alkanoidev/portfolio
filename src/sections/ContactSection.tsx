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
      className="h-full flex flex-col justify-center items-center gap-10 mt-4"
      id="contact-section"
    >
      <div className="w-full max-w-5xl rounded-3xl bg-deep-primary h-[500px] p-6">
        <h1 className="section-title text-5xl font-bold">Contact</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 sm:gap-10 w-full mt-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="sm:flex gap-5 block">
            <p className="flex flex-col gap-2">
              <label>name:</label>
              <input
                className={classNames(
                  "bg-gray-800 px-3 py-2 rounded-lg hover:ring-2 hover:ring-zinc-300 hover:ring-offset-4 hover:ring-offset-black",
                  "focus:ring-2 focus:ring-zinc-300 focus:ring-offset-4 focus:ring-offset-black focus:outline-none transition"
                )}
                type="text"
                name="name"
                value={formValues?.name}
                onChange={handleChange}
                required
              />
            </p>
            <p className="flex flex-col gap-2">
              <label>email:</label>
              <input
                className={classNames(
                  "bg-gray-800 px-3 py-2 rounded-lg hover:ring-2 hover:ring-zinc-300 hover:ring-offset-4 hover:ring-offset-black",
                  "focus:ring-2 focus:ring-zinc-300 focus:ring-offset-4 focus:ring-offset-black focus:outline-none transition"
                )}
                type="email"
                name="email"
                value={formValues?.email}
                onChange={handleChange}
                required
              />
            </p>
          </div>
          <p className="flex flex-col gap-2">
            <label>message:</label>
            <textarea
              className={classNames(
                "bg-gray-800 px-3 py-2 rounded-lg hover:ring-2 hover:ring-zinc-300 hover:ring-offset-4 hover:ring-offset-black",
                "focus:ring-2 focus:ring-zinc-300 focus:ring-offset-4 focus:ring-offset-black focus:outline-none transition"
              )}
              name="message"
              value={formValues?.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </p>
          <div className="flex items-center justify-between">
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
