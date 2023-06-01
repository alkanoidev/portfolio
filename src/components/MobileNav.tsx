import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import classNames from "utils/classNames";
import TextButton from "./buttons/TextButton";

export default function MobileNav() {
  return (
    <Menu as="div" className="relative inline-block text-left md:hidden">
      <Menu.Button
        id="openDropdown"
        aria-label="Open Mobile Nav"
        className={classNames(
          "py-3 px-3 transition rounded-lg ring-4",
          "dark:ring-outline-dark ring-outline-light focus:outline-none",
          // hover
          "hover:bg-surface-light dark:hover:bg-surface-dark",
          "focus:bg-surface-light dark:focus:bg-surface-dark"
        )}
      >
        {({ open }) =>
          open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )
        }
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-44 z-20 origin-top-right rounded-2xl bg-surface-light dark:bg-surface-dark shadow-lg focus:outline-none">
          <div className="p-1 flex items-center flex-col">
            <Menu.Item>
              <a
                aria-label="Projects"
                href="#projects"
                className={`group px-2 py-2 text-base font-semibold text-on-surface-light dark:text-on-surface-dark`}
              >
                Projects
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                aria-label="About"
                href="#about"
                className={`group px-2 py-2 text-base font-semibold text-on-surface-light dark:text-on-surface-dark`}
              >
                About
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                aria-label="Blog"
                href="https://filipblog.netlify.app"
                className={`group px-2 py-2 text-base font-semibold text-on-surface-light dark:text-on-surface-dark`}
              >
                Blog
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                aria-label="Contact"
                href="#contact"
                className={`group px-2 py-2 text-base font-semibold text-on-surface-light dark:text-on-surface-dark`}
              >
                Contact
              </a>
            </Menu.Item>
            <div className="flex items-center my-2 gap-4">
              <Menu.Item>
                <a
                  href="https://www.linkedin.com/in/filip-ivanovic-60ab98242/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-on-surface-light dark:fill-on-surface-dark"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  aria-label="GitHub"
                  href="https://github.com/alkanoidev"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 fill-on-surface-light dark:fill-on-surface-dark"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                    ></path>
                  </svg>
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  aria-label="Mail alkanoidev@gmail.com"
                  href="mailto:alkanoidev@gmail.com"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-on-surface-light dark:fill-on-surface-dark"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </a>
              </Menu.Item>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
