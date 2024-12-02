import Image from "next/image";
import Logo from "@/images/logo-transparent.png";
import { Button } from "@/components/ui/button";
import { Quicksand } from "next/font/google";
import Link from "next/link";
import StoryWriter from "@/components/StoryWriter";
import { Blockquote, BlockquoteAuthor } from "@/components/BlockQuote";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="flex-1 grid grid-cols-1 lg:grid-cols-1">
        <div className="flex flex-col justify-center items-center order-1 lg:-order-1 pb-10">
          <Blockquote className={quicksand.className}>
            I am not African because I was born in Africa but because Africa was
            born in me.
            <BlockquoteAuthor>Kwame Nkrumah</BlockquoteAuthor>
          </Blockquote>
          <Image src={Logo} height={400} alt="Logo" />
          <div className="flex flex-row space-x-10">
            <Button
              asChild
              variant="gooeyLeft"
              className="px-20 border bg-white rounded p-10 text-xl"
            >
              <Link href="/stories">Explore Story Library</Link>
            </Button>
          </div>
        </div>
        {/* <StoryWriter /> */}
      </section>
    </main>
  );
}
