import Image from "next/image";
import Link from 'next/link';
import Button from '@/components/ui/button';
import AlertButton from '@/components/ui/alertButton';

export default function About() {
  return (
    <main className="flex-1 grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="grid gap-5">
            <div className="heading1 text-center">
                Home
            </div>
            <div className="paragraph1 text-center">
                This is the homepage of Alex's Next.js project sandbox.
            </div>
            <div className="flex gap-5 items-center justify-center">
              <Button className="bg-gradient-to-r from-blue-500 bg-blue-600 rounded-lg" text="About" link="/about"></Button>
              <AlertButton className="bg-gradient-to-r from-orange-500 bg-orange-600 rounded-4xl" text='Contact' alertMessage="Click the contact link instead."></AlertButton>
            </div>
        </div>
    </main>
  );
}
