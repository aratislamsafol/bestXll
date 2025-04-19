import PlayerSection from "../PlayerSection/PlayerSection";

export default function Main({loadData, handleSelected, selected}) {
    return (
        <div>
            {/* heading */}
            <div className="flex justify-between items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-22">
                <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Available Players</h2>
                {/* group button */}
                <div className="inline-flex rounded-md shadow-xs" role="group">
                    <button type="button" className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:bg-[#E7FE29]">
                        Available
                    </button>

                    <button type="button" className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:bg-[#E7FE29] ">
                        Selected {selected.length}
                    </button>
                </div>
            </div>

            <PlayerSection loadData={loadData} handleSelected={handleSelected}></PlayerSection>
        </div>
    )
}
