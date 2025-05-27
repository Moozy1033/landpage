import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className='bg-[#FDFDFD]'>
        <div className='lg:flex hidden justify-between px-[60px] md:py-5 items-center'>
          <div className='flex items-center space-x-[60px] '>
            <p className='font-bold text-xl'>MAC</p>
            <ul className='space-x-5 font-medium list-none flex text-base '>
              <select className='' name="" id="">
                <option value="">Service</option>
              </select>
              <select className='' name="" id="">
                <option value="">Agency</option>
              </select>
              <select className='' name="" id="">
                <option value="">Case Study</option>
              </select>
              <select className='' name="" id="">
                <option value="">Resources</option>
              </select>
              <li>Contact</li>
            </ul>
          </div>
          <div className='flex space-x-3 items-center'>
            <button className='py-1.5 rounded-full text-base font-medium px-6 border border-black'>Get Started</button>
            <button className='rounded-full bg-black px-[9px] py-2 '>
              <Image src="/images/notification.svg" alt="Notification" width={18} height={0} />
            </button>
          </div>
        </div>
        {/* Small screen nav */}
        <div className='px-6 flex lg:hidden md:px-[60px] justify-between py-5'>
          <p className='font-bold text-xl'>MAC</p>
          <Image src="/images/hamburger.svg" alt="Hamburger" width={30} height={0} />
        </div>
      </nav>

      <section className='bg-[#FDFDFD]  '>
        <div className="px-6 md:px-[60px]  lg:text-left lg:flex lg:gap-10 justify-between">
        <div className='pt-4'>
          <p className='lg:text-5xl text-4xl font-semibold text-center lg:text-start'>Stay ahead of the <span className='hidden lg:inline'><br /></span> curve with our  <span className="hidden lg:inline"><br /></span> forward-thinking</p>
          <p className='text-sm pt-6 text-gray-500 text-center lg:text-start'>An award-winning SEO agency with disciplines in digital marketing, <span className="hidden lg:inline"><br /></span>  design and website development. focus on understanding you.</p>
          <div className='flex justify-center lg:justify-start items-center gap-10 pt-8'>
            <button className='text-white bg-black rounded-full py-2 px-5 text-sm font-medium flex gap-5'>
              Schedule call
              <Image src="/images/arrow-right.svg" alt="Hamburger" width={20} height={0} />
            </button>
            <p className='underline font-medium text-sm'>View Case Study</p>
          </div>
          <div className='flex justify-between pt-12'>
            <p className='text-[13px] font-medium'>Trusted by the world&apos;s <br /> biggest brand</p>
            <div className='flex space-x-4 items-center'>
              <p className='flex items-center text-[#8b9397] font-medium'>afterpay <Image className="pt-1" src="/images/afterpay.svg" width={20} height={0} alt=""/> </p>
              <Image src="/images/basecamp.svg" alt="Hamburger" width={70} height={0} />
              <p className='flex items-center gap-1 text-[#8b9397] font-medium'>maze <Image className='pt-1' src="/images/maze.svg" width={20} height={0} alt=""/> </p>
            </div>
          </div>
        </div>
        <div className='pt-9'>
          <div className='flex lg:gap-3 md:gap-7 gap-2'>
            <div className='relative'>
              <div className='py-[100px] lg:px-[110px] px-[92px] md:px-[150px]  bg-[#C8C8C8] rounded-tl-[100%] rounded-lg'></div>
              <div className="absolute -top-4 right-6 bg-black p-4 rounded-full shadow-md">
                <Image src="/images/graph-arrow.svg" alt="Hamburger" width={26} height={0} />
              </div>
            </div>
            <div className='rounded-lg bg-[#F0F0F0] pt-7 md:px-8 px-3'>
              <div className='flex'>
                <p className='lg:text-6xl  text-4xl font-bold'>230</p>
                <p className='lg:text-6xl text-4xl font-bold'>+</p>
              </div>
              <p className='md:text-sm text-[12px]  text-gray-600 pt-3'>Some big companies  that <span className="hidden lg:inline"><br /></span>  we work with,  and trust us <span className="hidden lg:inline"><br /></span>  very much</p>
              <div className=''>
                <hr className='bg-black py-[2px] mt-5 mb-2' />
              </div>
            </div>
          </div>
          <div className='w-full bg-black flex  rounded-xl justify-between px-5 lg:pt-5 pt-5 mt-5'>
            <div className='lg:pb-3 md:pb-4'>
              <div className='flex items-center space-x-3 pt-4 md:pt-6 lg:pt-0'>
                <div className='bg-white h-[2px] w-[30px] md:w-[40px] border-0'></div>
                <p className='text-white font-medium text-[10px] md:text-[14px] lg:text-[12px] lg:pt-0'>Drive More Traffic and Sales</p>
              </div>
              <p className='text-white font-semibold text-base md:text-[27px] leading-tight pt-3 md:pt-6 lg:pt-3 pb-4'>Drive more traffic <span className="hidden lg:inline"><br /></span>  and product sales</p>
            </div>
            <div className='flex space-x-2 items-end'>
              <div className='bg-[#bae289] w-8 md:w-10 h-[50px] md:h-[60px]'></div>
              <div className='bg-[#99cf63] w-8 md:w-10 h-19 md:h-24'></div>
              <div className='bg-[#77b248] w-8 md:w-10 h-full'></div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
