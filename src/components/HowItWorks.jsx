import img from "../assets/howitworksimg.png"

export default function HowItWorks() {
  return (
    <div className="space-y-[60px] text-center bg-[#fff] p-[100px] ">
      
      <h1 className="text-[40px] font-bold font-sora">How it works</h1>

      <div className="font-inter flex gap-x-[83px]">
        
      <div className="text-center flex flex-col justify-center items-center">
        <p className="text-[#fff] bg-primary-500 font-bold w-fit py-[14px] px-[22px] rounded-full mb-8">1</p>
        <p className="text-[28px] font-semibold mb-4">Record Screen</p>
        <p className=" text-[#616163] text-xl font-normal font-workSans leading-[30.26px] mb-7">Click the &ldquo;Start Recording&ldquo; button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
        <img src={img} alt="image" className="w-[358px] h-[270px] object-contain"/>
        </div>
        
        <div className="text-center flex flex-col justify-center items-center">
        <p className="text-[#fff] bg-primary-500 font-bold w-fit py-[14px] px-[22px] rounded-full mb-8">2</p>
        <p className="text-[28px] font-semibold mb-4">Share Your Recording</p>
        <p className=" text-[#616163] text-xl font-normal font-workSans leading-[30.26px] mb-7">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
        <img src={img} alt="image" className="w-[358px] h-[270px] object-contain"/>
        </div>
        
        <div className="text-center flex flex-col justify-center items-center">
        <p className="text-[#fff] bg-primary-500 font-bold w-fit py-[14px] px-[22px] rounded-full mb-8">3</p>
        <p className="text-[28px] font-semibold mb-4">Learn Effortlessly</p>
        <p className=" text-[#616163] text-xl font-normal font-workSans leading-[30.26px] mb-7">Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
        <img src={img} alt="image" className="w-[358px] h-[270px] object-contain"/>
      </div>
    </div>
    </div>
    
  )
}
