export default function SelectedPlayerShow({ select, removeSelected }) {
    const {img, name, battingStyle} = select;
  return (
    <div className="w-full flex justify-between items-center border border-gray-200 rounded-xl p-2 md:p-3 lg:p-4">
        {/* player details */}
        <div className="flex gap-2 md:gap-3 items-center">
            {/* img section */}
            <div>
                <img src={img} className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl object-cover" alt="selected player" />
            </div>
            {/* players data */}
            <div className="">
                <h2 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800">{name}</h2>
                <p className="text-xs md:text-sm lg:text-base font-thin md:font-normal md:mt-1 ">{battingStyle}</p>
            </div>
        </div>
        {/* Remove Button */}
        <div onClick={()=>removeSelected(select)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 hover:stroke-red-500 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
        </div>
    </div>
  )
}
