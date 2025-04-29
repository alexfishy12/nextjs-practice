import Image from "next/image";

export default function Contact() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div>
            <div className="flex gap-5">
                <a href="/" className="text-gray-400 flex gap-3">
                    <div>Home</div><div>&gt;</div>
                </a>
                <a href="/about">Contact</a>
            </div>
            <div className="heading1 text-center">
                Contact
            </div>
            <div className="paragraph1 text-center">
                <div>
                  me@fisherbit.llc
                </div>
                <div>
                  +1 (908) 300-0314
                </div>
            </div>
        </div>
    </div>
  );
}
