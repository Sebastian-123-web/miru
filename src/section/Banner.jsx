
export const Banner = () => {
  return (
    <div className="w-full h-[400px] bg-[#d4c9bb] overflow-hidden relative">
        <hr className="absolute top-2 bg-white w-full h-1" />
        <hr className="absolute bottom-2 bg-white w-full h-1" />
        <div className="w-[1024px] h-full m-auto grid grid-cols-2">
            <div className="flex flex-col justify-center items-star">
                <div className="relative">
                    <div className="absolute -top-4 -left-4 w-20 h-10 border-t border-l border-[#362c248b]"></div>
                    <div className="absolute -top-6 -left-6 w-24 h-14 border-t border-l border-[#362c248b]"></div>

                    {/* <div className="absolute -bottom-4 -right-4 w-20 h-10 border-b border-r border-[#362c248b]"></div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-14 border-b border-r border-[#362c248b]"></div> */}
                    <div className="absolute -bottom-4 -left-4 w-20 h-10 border-b border-l border-[#362c248b]"></div>
                    <div className="absolute -bottom-6 -left-6 w-28 h-16 border-b border-l border-[#362c248b]"></div>

                    <h1 className="text-5xl font-sirenik text-[#362c24] pl-7 pt-4 pb-4">Tu base perfecta</h1>
                    <h1 className="text-5xl font-sirenik text-[#362c24] pl-7 pb-7">para cualquier look!</h1>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center relative">
                <div className="w-[420px] h-[420px] absolute -bottom-24 bg-white outline-white rounded-full outline outline-offset-[6px] outline-[3px]"></div>
                <img src="/ropa6-Photoroom.png" alt="" className="absolute rotate-[30deg] bottom-[-200px]" />
            </div>
        </div>
    </div>
  )
}
