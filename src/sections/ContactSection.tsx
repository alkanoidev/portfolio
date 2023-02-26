import IconButton from "components/buttons/IconButton";
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
      className="h-full flex flex-col justify-center min-h-screen items-center gap-10 mt-32"
      id="contact-section"
    >
      <h1 className="section-title text-5xl font-bold">Contact</h1>
      <div className="bg-deep-blue w-full max-w-5xl rounded-3xl h-[500px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 sm:gap-10 w-full p-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="sm:flex gap-5 block">
            <p className="flex flex-col gap-2">
              <label>name:</label>
              <input
                className={classNames(
                  "bg-off-dark px-3 py-2 rounded-lg hover:ring-2 hover:ring-white hover:ring-offset-4 hover:ring-offset-black",
                  "focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black focus:outline-none transition"
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
                  "bg-off-dark px-3 py-2 rounded-lg hover:ring-2 hover:ring-white hover:ring-offset-4 hover:ring-offset-black",
                  "focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black focus:outline-none transition"
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
                "bg-off-dark px-3 py-2 rounded-lg hover:ring-2 hover:ring-white hover:ring-offset-4 hover:ring-offset-black",
                "focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black focus:outline-none transition"
              )}
              name="message"
              value={formValues?.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <IconButton href="https://www.linkedin.com/in/filip-ivanovic-60ab98242">
                linkedin
              </IconButton>
              <IconButton href="https://github.com/alkanoidev">
                github
              </IconButton>
              <h1 className="text-lg">alkanoidev@gmail.com</h1>
            </div>
            <div>
              <SecondaryButton classes="w-full bg-white text-black hover:ring-2 hover:ring-white hover:ring-offset-4 hover:ring-offset-black">
                Submit
              </SecondaryButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
