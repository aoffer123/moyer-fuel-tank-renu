"use client";

import { useState } from "react";

type FAQGroup = {
  title: string;
  questions: {
    q: string;
    a: string[];
  }[];
};

export function FAQTabs({ groups }: { groups: FAQGroup[] }) {
  const [activeTab, setActiveTab] = useState(groups[0]?.title ?? "");

  const activeGroup = groups.find((group) => group.title === activeTab);

  if (!activeGroup) return null;

  function selectTab(title: string, button: HTMLButtonElement) {
    setActiveTab(title);

    // On mobile the category row scrolls sideways, so keep the tapped chip in view
    button.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <div className="mt-8 grid gap-6 sm:mt-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
      {/* CATEGORIES: swipeable chip row on mobile, sidebar on desktop */}
      <aside className="min-w-0">
        <p className="mb-2 text-sm font-semibold text-near-black">Categories</p>

        <nav
          aria-label="FAQ categories"
          className="
            -mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            sm:-mx-6 sm:px-6
            lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0
          "
        >
          {groups.map((group) => {
            const isActive = activeTab === group.title;

            return (
              <button
                key={group.title}
                type="button"
                onClick={(e) => selectTab(group.title, e.currentTarget)}
                aria-pressed={isActive}
                className={`
                  shrink-0 snap-start whitespace-nowrap
                  rounded-full border px-4 py-2.5
                  font-body text-sm
                  transition-colors duration-200
                  lg:whitespace-normal lg:rounded-none lg:border-0 lg:border-l-4 lg:py-3 lg:text-left

                  ${
                    isActive
                      ? "border-moyer-gold bg-moyer-gold font-semibold text-near-black lg:bg-concrete"
                      : "border-light-gray bg-white text-medium-gray hover:text-near-black lg:border-transparent lg:bg-transparent lg:hover:bg-concrete/50"
                  }
                `}
              >
                {group.title}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* QUESTIONS FOR THE ACTIVE CATEGORY */}
      <div key={activeTab} className="min-w-0">
        <h2 className="font-head text-2xl font-bold text-near-black sm:text-3xl">
          {activeGroup.title}
        </h2>

        <p className="mt-2 font-body text-sm text-medium-gray">
          Tap a question to see the answer.
        </p>

        <div className="mt-5 space-y-3 sm:mt-8">
          {activeGroup.questions.map((question) => (
            <details
              key={question.q}
              className="
                group overflow-hidden
                rounded-lg border border-light-gray
                bg-white
                open:border-moyer-gold
                open:shadow-sm
              "
            >
              <summary
                className="
                  flex min-h-14 cursor-pointer list-none
                  items-center justify-between gap-3
                  px-4 py-4 sm:gap-4 sm:px-5 sm:py-5
                  font-head text-lg leading-snug text-near-black sm:text-xl
                  [&::-webkit-details-marker]:hidden
                "
              >
                <span>{question.q}</span>

                {/* Plus turns into an X when open */}
                <span
                  aria-hidden="true"
                  className="
                    flex h-8 w-8 shrink-0
                    items-center justify-center
                    rounded-full bg-moyer-gold
                    text-lg font-bold text-near-black
                    transition-transform duration-200
                    group-open:rotate-45
                  "
                >
                  +
                </span>
              </summary>

              <div className="space-y-3 px-4 pb-5 sm:px-5 sm:pb-6">
                {question.a.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-body text-[0.95rem] leading-7 text-medium-gray sm:text-sm"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
