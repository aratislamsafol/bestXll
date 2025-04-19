import { useState } from "react";
import PlayerSection from "../PlayerSection/PlayerSection";
import SecelectedPlayer from '../SecelectedPlayer/SecelectedPlayer';

export default function Main({loadData, handleSelected, removeSelected, selected}) {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="pb-60 sm:pb-50 md:pb-60 lg:pb-65 xl:pb-70">
            {/* heading */}
            <div className="flex justify-between items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-22">
                <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Available Players</h2>
                {/* group button */}
                <div className="inline-flex rounded-md shadow-xs" role="group">
                    <button type="button" className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:bg-[#E7FE29]" onClick={()=>handleTabChange('tab1')}>
                        Available
                    </button>

                    <button type="button" className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:bg-[#E7FE29]" onClick={()=>handleTabChange('tab2')} >
                        Selected {selected.length}
                    </button>
                </div>
            </div>

            {activeTab === 'tab1' ? <PlayerSection loadData={loadData} handleSelected={handleSelected}></PlayerSection> :<SecelectedPlayer removeSelected={removeSelected} handleTabChange={handleTabChange} selected={selected}/>}
        </div>
    )
}
