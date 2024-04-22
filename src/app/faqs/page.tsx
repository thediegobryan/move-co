import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { PlusIcon } from "@radix-ui/react-icons";
const faqs = [
  {
    question: "What if I realize I need more totes while I am packing?",
    answer:
      "Don’t sweat it! It’s as simple as calling us and letting us know. Any additional order of fewer than 25 totes will have a $30 delivery fee in addition to the additional tote charge. Any extra totes delivered, will be picked up at the same time and location of your original order.",
  },
  {
    question: "Does someone have to be home when they are dropped-off?",
    answer:
      "Yes. We require someone over the age of 18 to accept the totes. You are renting our equipment, so the order will be confirmed and signature will be required.",
  },
  {
    question: "Can I keep them longer if I need more time?",
    answer:
      "You can extend your rental term at anytime within your rental period as long as it’s not within 24 hours of your pick-up date. Send us an email info@totesmoveco.com to make an arrangement.",
  },
  {
    question: "Can I use them if I want to hire a moving company?",
    answer:
      "Absolutely! You won’t have to pay inflated cardboard box prices from your moving company, or pay your movers by the hour to assemble cardboard boxes before they start packing. We’ll drop everything off before the movers arrive, allowing your movers to start packing and moving right away – saving you on the hourly labor rate",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Please email your cancellation request and order number to info@totesmoveco.com. We understand moving plans can change for a number of reasons. If you would like to cancel an order, it must be done 48 hours prior to your scheduled delivery date to receive a full refund. If an order cancellation is made within 24 hours prior to the delivery date a 25% fee of the selected rental package billed to your credit card. If an order is canceled at the time of the delivery a 50% fee of the selected rental package billed to your credit card.",
  },
];

export default function Page() {
  return (
    <div className="text-center">
      <section className="my-12">
        <h1 className="text-6xl font-bold my-2">
          FAQs<span className="text-accent text-6xl">.</span>
        </h1>
        <h3 className="text-xl">You&apos;re not alone</h3>
      </section>
      <div className="bg-zinc-200 py-5">
        <div className="flex flex-col items-start mx-auto max-w-[1000px]">
          {faqs.map(({ question, answer }) => (
            <>
              <Collapsible className="flex flex-col justify-center items-start mx-2 my-3 text-left">
                <CollapsibleTrigger className="bg-zinc-50 shadow-md rounded-xl px-5 py-3 flex gap-3">
                  <PlusIcon className="w-6 h-6" />
                  <p className="text-left">{question}</p>
                </CollapsibleTrigger>
                <CollapsibleContent className="transistion p-4">
                  {answer}
                </CollapsibleContent>
              </Collapsible>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
