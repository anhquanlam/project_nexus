import Image from 'next/image'
import Link from 'next/link'

export default function SendingPage() {
    return (
        <div className="relative bg-[#F4F8FE]">
            <div className="flex items-center justify-between px-[20px] pt-[20px] md:pl-[359px] md:pr-[363px] pb-[25px]">
                <div className="flex items-center">
                    <img
                        src="/image/logo_pionero.png"
                        alt="Pionero Logo"
                        width={37}
                        height={36}
                        className="object-contain md:w-[63px] md:w-[63px] "
                    />
                </div>

                <div className="flex cursor-pointer items-center space-x-1 text-gray-600">
                    <span>English</span>
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-screen gap-[25px]">
            <img
                        src="/image/Loading.png"
                        alt="Loading"
                        width={126}
                        height={137}
                        className="object-contain"
                    />
                <p className="font-normal text-4xl leading-12 text-center md:font-normal md:text-4xl md:leading-12 md:text-center text-[#7792C0]">Sending ...</p>
            </div>
        </div>
    )
}

