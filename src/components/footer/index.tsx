import Link from 'next/link'
import Image from 'next/image'

export default function AppFooter() {
  return (
    <footer className="bg-[#121D52] text-white py-8 md:py-[100px] px-6 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col gap-[20px] md:flex-row md:gap-[75px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-2">
            <Image src="/image/logo_footer.png" width={40} height={45} alt="Pionero" className="h-10" />
          </div>
          <div className="space-y-2">
            <p className="flex items-center font-medium text-base leading-6">
              <Image src="/image/icon_phone.png" width={0} height={0} alt="Pionero" className="h-[20px]" />
              <span>094 1302662</span>
            </p>
            <p className="flex items-center font-medium text-base leading-6">
              <Image src="/image/icon_mail.png" width={0} height={0} alt="Pionero" className="h-[20px]" />
              <Link href="/" className="hover:underline">contact@en.pionero.io</Link>
            </p>
          </div>
        </div>
        {/* Thông tin văn phòng */}
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-medium text-xl leading-7">Japan Office</h3>
          <p className="font-normal text-base leading-6">
            7F/8F, Kanda Higashiyama Building, 2-1 Kanda Tamachi, Chiyoda-ku, Tokyo, Japan.
          </p>
          <p className="font-normal text-base leading-6">03-6555-2366</p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-medium text-xl leading-7">Vietnam Office</h3>
          <p className="font-normal text-base leading-6">
            Room 808, Toyota Building, 315 Truong Chinh Street, Khuong Mai Ward, Thanh Xuan District, Hanoi, Vietnam.
          </p>
          <p className="font-normal text-base leading-6">(+84) 941-302-662</p>
        </div>
        <div className="flex flex-col gap-[28px] ">
          <h3 className="font-normal text-2xl leading-9">Social</h3>
          <div className="flex flex-row gap-[24px]">
            <Image src="/image/icon_fb.png" width={36} height={0} alt="facebook" className="w-[36px]" />
            <Image src="/image/icon_linkedln.png" width={36} height={0} alt="linkedlv" className="w-[36px]" />
            <Image src="/image/icon_X.png" width={34} height={0} alt="x" className="w-[34px]" />
          </div>
        </div>

      </div>
      <p className="mt-[20px] md:mt-[40px] md:pl-[24%] font-medium text-base leading-6 text-[#7792C0]">
        © 2024 Pionero Joint Stock Company.
      </p>
    </footer>
  )
}
