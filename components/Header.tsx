import { BookOpen, FilePen } from "lucide-react";
import Link from "next/link";
// import fredericka from "@/app/layout";
import { Fredericka_the_Great } from "next/font/google";

const fredericka = Fredericka_the_Great({
  subsets: ["latin"],
  weight: "400",
});

function Header() {
  return (
    <header className="relative p-16 text-center">
      <Link href="/" prefetch={false} className={fredericka.className}>
        <h1 className={`${fredericka.className} text-6xl font-black`}>
          Story-Story
        </h1>
        <div className="flex justify-center whitespace-nowrap white space-x-5 text-3xl lg:text-5xl">
          <h2>Once upon a time, </h2>
          <div className="relative">
            <div className="absolute bg-amber-400/70 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1" />
            <p className="relative text-white">Time-Time!</p>
          </div>
        </div>
      </Link>
      <div className="flex space-x-2 absolute -top-5 right-5">
        <Link href="/">
          <FilePen className="w-8 h-8 lg:w-10 mx-auto text-amber-400/70 mt-10 border border-amber-400/70 p-2 rounded-md hover:opacity-50 cursor-pointer" />
        </Link>
        <Link href="/stories">
          <BookOpen className="w-8 h-8 lg:w-10 mx-auto text-amber-400/70 mt-10 border border-amber-400/70 p-2 rounded-md hover:opacity-50 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
