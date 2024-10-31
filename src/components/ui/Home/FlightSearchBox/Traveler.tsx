import { useState } from "react";
import { Label } from "@/components/ui/label";

import { MdArrowDropDown } from "react-icons/md";
import PassengerSelector, { TTravelers } from "../PassengerSelector";


type TTravelerProps= {
    travelers: { adult: number; child: number; infant: number };
    setTravelers: React.Dispatch<React.SetStateAction<TTravelers>>

  }
const Traveler = ({ travelers, setTravelers }:TTravelerProps) => {
  const [showSelector, setShowSelector] = useState(false);

  return (
    <div className="flex flex-col">
      <Label>Travelers</Label>
      <div
        onClick={() => setShowSelector(!showSelector)}
        className="relative flex items-center justify-between px-3 py-2 text-sm bg-gray-100 border rounded cursor-pointer shadow-sm hover:bg-gray-200"
      >
        {`Passengers: ${travelers.adult + travelers.child + travelers.infant}`}
        <MdArrowDropDown className="w-5 h-5 ml-2 text-gray-500" />
      </div>
      {showSelector && (
        <div className="absolute mt-2 left-0 right-0 z-10 flex items-center justify-center">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <PassengerSelector travelers={travelers} setTravelers={setTravelers} />
            <button className="mt-4" onClick={() => setShowSelector(false)}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Traveler;
