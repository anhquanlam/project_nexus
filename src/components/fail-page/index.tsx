import Image from 'next/image'
import Link from 'next/link'

export default function ThanksPage() {
    return (
        <div className="relative bg-[#F4F8FE]">
            <Image src="/image/PioneroBackground.png" alt="PioneroBackground" width={0} height={0} className="absolute bottom-0 right-0 top-[40%] w-[300px] h-auto z-0 md:top-[10%] md:w-[450px]" />
            <Image src="/image/Polygon 1.png" alt="Polygon"  width={0} height={0} className="absolute top-[60%] md:top-[40%] left-[10%] w-[50px] md:w-[106px]" />
            <Image src="/image/Ellipse 1.png" alt="Ellipse"  width={0} height={0} className="absolute top-[80%] left-[5%] md:left-[30%] w-[40px] md:w-[80px]"/>
            <div className="flex items-center justify-between px-[20px] pt-[20px] md:pl-[359px] md:pr-[363px] pb-[25px]">
                <div className="flex items-center">
                    <Image
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
            <div className="flex flex-col items-center px-[20px] pt-[153.5px] pb-[430.5px] text-center">
                <Image
                    src="/image/StickX.png"
                    alt="Stick X"
                    width={80}
                    height={80}
                    className="object-contain pb-[24px]"
                />
                <div className="pb-[24px] font-semibold text-4xl leading-tight text-center md:text-6xl md:leading-[80px] px-[17px]">
                    <p>A problem<br /> occurred</p>
                </div>
                <div className="font-medium text-base leading-5 text-center ">
                    <Link href="/" className="text-[#2E60CF] hover:underline">
                        Please evaluate again
                    </Link>
                </div>
            </div>
        </div>
    )
}
