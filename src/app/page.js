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
            <div className='flex justify-between pt-15'>
              <p className='text-[13px] font-medium'>Trusted by the world&apos;s <br /> biggest brand</p>
              <div className='flex space-x-4 items-center'>
                <p className='flex items-center text-[#8b9397] font-medium'>afterpay <Image className="pt-1" src="/images/afterpay.svg" width={20} height={0} alt="" /> </p>
                <Image src="/images/basecamp.svg" alt="Hamburger" width={70} height={0} />
                <p className='flex items-center gap-1 text-[#8b9397] font-medium'>maze <Image className='pt-1' src="/images/maze.svg" width={20} height={0} alt="" /> </p>
              </div>
            </div>
            <div>
              <p className="md:text-3xl text-2xl font-semibold pt-20 text-center lg:text-start">Provide the best service with <span className="hidden lg:inline"><br /></span>out of the box ideas</p>
            </div>
          </div>
          <div className='pt-9'>
            <div className='flex lg:gap-3 md:gap-7 gap-5'>
              <div className='relative w-1/2'>
                <div className='py-[100px] lg:px-[110px] px-[92px] md:px-[150px]  bg-[#C8C8C8] rounded-tl-[100%] rounded-lg'></div>
                <div className="absolute -top-4 right-6 bg-black p-4 rounded-full shadow-md">
                  <Image src="/images/graph-arrow.svg" alt="Hamburger" width={26} height={0} />
                </div>
              </div>
              <div className='rounded-lg bg-[#F0F0F0] pt-7 md:px-7 px-3 w-1/2'>
                <div className='flex'>
                  <p className='lg:text-6xl  text-4xl font-bold'>230</p>
                  <p className='lg:text-6xl text-4xl font-bold'>+</p>
                </div>
                <p className='md:text-sm text-[12px]  text-gray-600 pt-3'>Some big companies  that <span className="hidden lg:inline"><br /></span>  we work with,  and trust us <span className="hidden lg:inline"><br /></span> very much</p>
                <div className=''>
                  <hr className='bg-black py-[2px] mt-5 mb-2' />
                </div>
              </div>
            </div>
            <div className='bg-black flex rounded-xl gap-3 justify-between px-5 lg:pt-5 pt-5 lg:mt-5 mt-12'>
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
            <div>
              <p className="text-[13px] text-gray-500 text-center md:text-start pt-12 md:pt-18 px-1">We are passionate team of digital marketing enthusiasts dedicated to <span className="hidden lg:inline"><br /></span> helping business succeed in the digital world. With years of experience <span className="hidden lg:inline"><br /></span> and a deep understanding of the ever-evolving online landscape, we stay <span className="hidden lg:inline"><br /></span> at the forefront of industry trends and technologies.</p>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-[60px] pt-13 pb-10 flex flex-col md:flex-row gap-5">
          <div className="rounded-2xl bg-black md:w-1/2 lg:w-1/3 px-8 py-3">
            <div className="flex gap-1">
              <p className="text-5xl text-white font-bold">920 </p>
              <p className="text-green-500 font-bold text-4xl pt-1">+ </p>
            </div>
            <p className="text-gray-300 text-[12px]">Project finish with superbly</p>
            <div className="flex gap-1 pt-13">
              <div className="rounded-full py-7 px-7 border border-gray-500 bg-neutral-300"></div>
              <div className="rounded-full py-7 px-7 border border-gray-500 bg-neutral-300"></div>
              <div className="rounded-full py-7 px-7 border border-gray-500 bg-neutral-300"></div>
              <div className="rounded-full py-7 px-7 border border-gray-500 bg-neutral-300"></div>
              <p className="text-5xl text-white font-semibold pt-1">+</p>
            </div>
          </div>
          <div className="rounded-2xl w-full md:w-1/2 px-8 bg-gray-300 lg:w-2/3 flex justify-center items-center relative">
            <p className="text-white  text-2xl lg:text-4xl py-15 tracking-widest font-semibold">HOW WE WORK</p>
            <div className="absolute -bottom-2 -right-4 ">
              <button className="rounded-full bg-lime-400 py-5 px-5 lg:py-8 lg:px-8 border-6 border-white">
                <Image src="/images/play.svg" alt="Hamburger" width={26} height={0} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FDFDFD]">
        <div className="rounded-lg bg-black mx-6 px-6 py-8 text-center">
          <p className="text-white text-xl md:text-3xl font-semibold">Real-worlds example of how we helped companies  achieve their marketing objectives</p>
          <div className="flex flex-col md:flex-row gap-3 py-10 justify-center">
            <button className="rounded-full md:w-56 border border-white py-2.5 px-10 text-white font-semibold text-sm">All Work [20] </button>
            <button className="rounded-full md:w-56 border border-none py-2.5 px-10 text-white bg-lime-400 font-semibold text-sm">UI/UX Design [10] </button>
            <button className="rounded-full md:w-56 border border-white py-2.5 px-10 text-white font-semibold text-sm">Digital Markerting [5] </button>
            <button className="rounded-full md:w-56 border border-white py-2.5 px-10 text-white font-semibold text-sm">Branding [5] </button>
          </div>
          <div className="flex flex-col md:pt-7 md:flex-row items-center  lg:justify-between gap-6">
            {/* Left Circle */}
            <div className="lg:w-70 lg:h-70 md:w-75 md:h-65 w-65 h-65 rounded-full bg-gray-300 flex items-center justify-center border-4 border-gray-400">
              <button className="bg-lime-400 text-black text-sm font-medium py-10 px-4 rounded-full">
                See Details
              </button>
            </div>
            <div className="w-72 h-64 bg-gray-300 rounded-2xl p-4 flex flex-col justify-between text-white">
              <p className="text-sm text-gray-100 border-t border-gray-100 pt-1">Ai Corporation. 2023</p>
              <p className="text-lg font-semibold">Ai Wave – Ai Chatbot Mobile App</p>
            </div>
            <div className="w-72 h-64 bg-gray-300 rounded-2xl p-4 flex flex-col justify-between text-white">
              <p className="text-sm text-gray-100 border-t border-gray-100 pt-1">Lancer Corporation. 2023</p>
              <p className="text-lg font-semibold">App Lancer – Freelance Mobile App</p>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-[60px] pt-12 text-center md:text-left">
          <p className="font-semibold text-xl">&quot;They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.&quot;</p>
          <div className="flex flex-col md:flex-row items-center gap-5 justify-between pt-8">
            <div className="flex items-center gap-3">
              <div className="rounded-full w-14 h-14 bg-gray-300"></div>
              <div className="text-start">
                <p className="text-base font-semibold ">Michael Kaizer</p>
                <p className="text-[12px] font-semibold text-gray-400">CEO of Basecamp Corp</p>
              </div>
            </div>
            {/* Div 2 */}
            <div className="flex items-center gap-4 py-6 ">
              {/* Left Arrow Button */}
              <button className="w-18 h-11 rounded-full border border-black flex items-center justify-center">
                <Image src="/images/arrow-left.svg" alt="Hamburger" width={20} height={0} />
              </button>

              {/* Indicator */}
              <div className="flex items-end gap-1">
                <span className="font-bold underline text-black text-sm">01</span>
                <span className="text-gray-400 text-sm">/05</span>
              </div>

              {/* Right Arrow Button */}
              <button className="w-18 h-11 rounded-full bg-black text-white flex items-center justify-center">
                <Image src="/images/arrow-right1.svg" alt="Hamburger" width={20} height={0} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
