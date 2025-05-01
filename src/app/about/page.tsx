import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex-1 grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div>
            <div className="flex gap-3">
                <Link href="/" className="text-gray-400 flex gap-3">
                    <div>Home</div><div>&gt;</div>
                </Link>
                <Link href="/about">About</Link>
            </div>
            <div className="heading1 text-center">
                About
            </div>
            <div className="paragraph1 text-center">
                This is a project sandbox used to complete a 30-minute per day 30 day challenge to improve my Next.js skills. By the end of the 30 days, I'll be 90% better than people who "tried Next.js once".
            </div>
        </div>
    </main>
  );
}
