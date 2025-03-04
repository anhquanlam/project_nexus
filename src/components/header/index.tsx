import Image from 'next/image'
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

export default function AppHeader() {
  const [selected, setSelected] = useState("English");

  return (
    <header className="relative bg-[#F4F8FE]">
      <div className="flex items-center justify-between md:pl-[359px] md:pr-[363px] px-[20px] pt-[20px] pb-[25px] md:pb-[43px]">
        <div className="flex items-center">
          <Image
            src="/image/logo_pionero.png"
            alt="Pionero Logo"
            width={37}
            height={36}
            className="object-contain md:w-[63px] "
          />
        </div>

        <div className="flex cursor-pointer items-center space-x-1 text-gray-600">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="flex items-center gap-1 px-3 py-2 text-gray-700">
              {selected} <span>▼</span>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end" className="bg-white shadow-md rounded-md">
              {["English", "Vietnamese", "Japanese"].map((lang) => (
                <DropdownMenu.Item key={lang} className="p-2 hover:bg-gray-100" onClick={() => setSelected(lang)}>
                  {lang}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
      <div className="md:flex md:pl-[450px] md:pr-[364px] md:flex-row md:gap-[75px]">
        <div className="max-md:px-[20px] pb-[31px] md:pb-[41px]">
          <Image
            src="/image/network.png"
            alt="network"
            width={207}
            height={207}
            className="md:w-[419px] md:h-[419px] opacity-80 pt-[182px] ml-[-140px] absolute inset-0 z-0 md:top-[16%] md:left-[23%]"
          />
          <Image
            src="/image/image_header.png"
            alt="Handshake"
            width={362}
            height={240}
            className="mx-auto rounded-md object-cover !rounded-[20px] relative z-10 md:!w-[451px] md:!h-[336px]"
          />
          <Image src="/image/Polygon 1.png" alt="Polygon"  width={0} height={0} className="absolute md:top-[65%] left-[53%] md:w-[106px] max-md:!hidden" />
          <Image src="/image/Ellipse 1.png" alt="Ellipse"  width={0} height={0} className="absolute top-[70%] md:left-[64%] w-[40px] md:w-[80px] max-md:!hidden" />
        </div>
        <div className="max-md:px-[20px] max-md:pb-[28px] text-center md:w-[580px] md:pt-[44px]">
          <h1 className="text-left font-poppins font-bold text-[29px] leading-[36.25px] md:text-[48px] md:leading-[60px] text-[#1D4996] pb-[13px] md:pb-[17px] w-max">
            We want your feedback
          </h1>
          <p className="!text-left font-normal text-[16px] leading-[20px] md:text-[20px] md:leading-[25px] md:text-center">
            Please let us know your thoughts on this project as well <br className = "max-md:hidden"/> as your
            impressions of the members participating in it.
          </p>
        </div>
      </div>
    </header>
  )
}
