import { Tab, Transition } from "@headlessui/react";
import { ReactElement, useState } from "react";
import classNames from "utils/classNames";

type Props = {
  tabs: {
    id: number;
    title: string;
    component: ReactElement;
    icon: ReactElement;
  }[];
};

export default function Tabs({ tabs }: Props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
      <Tab.List className="rounded-full bg-deep-blue w-full">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            className={({ selected }) =>
              classNames(
                "rounded-full px-6 py-3 w-1/2 transition",
                "hover:bg-secondary/40 focus:outline-secondary focus:outline",
                selected ? "bg-secondary/50" : "bg-none"
              )
            }
          >
            <div className="flex items-center justify-center gap-4">
              {tab.icon}
              {tab.title}
            </div>
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="h-[calc(100%-40px)] mt-3">
        {tabs.map((tab) => (
          <Tab.Panel
            className="bg-deep-blue p-6 rounded-3xl h-full"
            key={tab.id}
          >
            <Transition
              appear
              show={tabIndex == tab.id}
              enter="transition-all duration-500"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="transition-all duration-500"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              {tab.component}
            </Transition>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
