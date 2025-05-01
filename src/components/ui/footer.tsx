import Link from 'next/link';

export default function Footer() {
    return (
        <div className="flex gap-10 px-[15px] py-[15px] border-t-1 border-t-gray-900 text-gray-500 items-center justify-center font-mono">
            {/* Website Name + Logo */}
            <Link href="/" className="font-bold">alexs_nextjs_sandbox</Link>

            {/* App Navigation */}
            <div className="flex flex-col gap-2">
                <div className="font-mono text-gray-600">APP</div>
                <div className="flex gap-2">
                    <Link href='/about'>about</Link>
                    <Link href='/contact'>contact</Link>
                </div>
            </div>

            {/* Company Resources */}
            <div className="flex flex-col gap-2">
                <div className="font-mono text-gray-600">COMPANY</div>
                <div className="flex gap-2">
                    <Link href='https://www.alexjfisher.com' target="_blank">alexjfisher.com</Link>
                    <Link href='https://www.fisherbit.llc' target="_blank">fisherbit.llc</Link>
                </div>
            </div>

            {/* Community Resources */}
            <div className="flex flex-col gap-2">
                <div className="font-mono text-gray-600">COMMUNITY</div>
                <div className="flex gap-2">
                    <Link href='https://x.com/alexjfisher0330' target="_blank">x</Link>
                    <Link href='https://www.instagram.com/alexjfisher01/' target="_blank">instagram</Link>
                </div>
            </div>
        </div>
    );
}