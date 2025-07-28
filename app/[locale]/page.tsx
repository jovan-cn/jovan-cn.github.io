import React from "react";
import { getAllData } from "@/app/lib/data"
import { IQuote } from "@/app/types/quote";
import Header from "@/app/component/header";
import Clock from "@/app/component/clock";
import Quotes from "@/app/component/quotes";
import Social from "@/app/component/social";
import Todo from "../component/todo";
import { getLocale } from "next-intl/server";



export default async function Home() {
  const locale = await getLocale();
  const quotes: IQuote[] = await getAllData("quotes", locale);

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