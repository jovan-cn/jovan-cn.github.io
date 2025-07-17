import clsx from "clsx";
import React from "react";
import { getAllQuotes } from "@/app/lib/data"
import { IQuote } from "@/app/types/quote";
import Header from "@/app/component/header";
import Clock from "@/app/component/clock";
import Todo from "@/app/component/todo";
import Quotes from "@/app/component/quotes";
import Social from "@/app/component/social";


export default async function Home() {
  const quotes: IQuote[] = await getAllQuotes();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="mx-auto my-8 px-8">
        <HomeSegment>
          <Clock />
        </HomeSegment>

        <HomeSegment>
          <Quotes quotes={quotes} />
        </HomeSegment>

        <HomeSegment>
          <Social />
        </HomeSegment>

        <HomeSegment>
          <Todo />
        </HomeSegment>
      </section>
    </div>
  );
}


function HomeSegment({ children } : { children?: React.ReactNode}) {
  return (
    <div className="w-full flex justify-center items-center mb-24 min-h-40">
      <div className="w-full sm:w-96">
        {children}
      </div>
    </div>
  )
}