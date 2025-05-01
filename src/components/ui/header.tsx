import Link from 'next/link';

export default function Header() {
    return (
        <div className="flex gap-10 border-b-1 border-b-gray-800 px-[15px] py-[15px] items-center">
            {/* Website Name + Logo */}
            <Link href="/" className="font-bold">alexs_nextjs_sandbox</Link>

            {/* Navigation */}
            <div className="flex gap-5"> 
                <Link href='/about'>about</Link>
                <Link href='/contact'>contact</Link>
            </div>
        </div>
    );
}