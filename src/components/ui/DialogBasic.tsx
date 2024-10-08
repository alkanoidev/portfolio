import { Dialog, Transition } from "@headlessui/react";
import { Fragment, type ReactElement } from "react";
import TextButton from "./buttons/TextButton";
import classNames from "utils/classNames";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  body: string;
  icon?: ReactElement;
  children?: ReactElement[] | ReactElement;
};

export default function DialogBasic({
  isOpen,
  setIsOpen,
  title,
  body,
  icon,
  children,
}: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-black fixed inset-0 bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={classNames(
                  "w-full max-w-xs transform rounded-3xl p-6 text-left align-middle shadow-xl transition-all",
                  "bg-surface-light text-on-surface-light dark:bg-surface-dark dark:text-on-surface-dark",
                )}
              >
                {icon}
                {children}

                <Dialog.Title
                  as="h3"
                  className="mt-4 text-center text-xl font-medium leading-6"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-4">
                  <p className="text-base text-on-surface-light/90 dark:text-on-surface-dark/50">
                    {body}
                  </p>
                </div>

                <div className="ml-auto mt-6 max-w-fit">
                  <TextButton title="Close" onClick={() => setIsOpen(false)} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
