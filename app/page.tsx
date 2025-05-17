import clsx from "clsx";
import FAQ from "@/app/component/faq";

export default function Home() {

  return (
    <div className={clsx("flex flex-col items-center")}>
      <FAQ />
    </div>
  );
}