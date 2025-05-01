import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex-1 min-w-full grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div>
            <div className="flex gap-3">
                <Link href="/" className="text-gray-400 flex gap-3">
                    <div>Home</div><div>&gt;</div>
                </Link>
                <Link href="/about">Contact</Link>
            </div>
            <div className="heading1 text-center">
                Contact
            </div>
            <div className="paragraph1 text-center">
                <div>
                  <span className="font-bold">Email: </span>me@fisherbit.llc
                </div>
                <div>
                  <span className="font-bold">Phone Number: </span>+1 (908) 300-0314
                </div>
            </div>
        </div>
    </main>
  );
}
