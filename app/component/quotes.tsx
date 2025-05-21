'use client'
import { useEffect, useState } from "react";
import { IQuote } from "../types/quote"

export default function Quotes({
  quotes
} : {
  quotes: IQuote[]
}) {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const idx = Math.floor(Math.random() * quotes.length);
      setIndex(idx);
    }, 1000 * 10);

    return () => clearInterval(timer);
  }, [index])

  if (quotes.length === 0) {
    return null;
  }

  return (
    <>
      <div className="w-96 sm:w-full text-center text-xl sm:text-2xl pb-8">
        {quotes[index].content}
      </div>
      <div className="text-center text-md">
        {'--'} {quotes[index].meta.author}
      </div>
    </>
  )
}