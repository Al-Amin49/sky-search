import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export type TTravelers= {
  adult: number;
  child: number;
  infant: number;
}

type PassengerSelectorProps ={
  travelers: TTravelers;
  setTravelers: React.Dispatch<React.SetStateAction<TTravelers>>;
}

const PassengerSelector: React.FC<PassengerSelectorProps> = ({ travelers, setTravelers }) => {
  const increment = (type: keyof TTravelers) => {
    setTravelers((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const decrement = (type: keyof TTravelers) => {
    setTravelers((prev) => ({
      ...prev,
      [type]: prev[type] > 0 ? prev[type] - 1 : 0,
    }));
  };

  const renderPassengerCounter = (label: string, count: number, type: keyof TTravelers) => (
    <div className="flex justify-between items-center mb-4">
      <span className="text-lg font-medium">{label}</span>
      <div className="flex items-center space-x-4 bg-gray-100 rounded-full px-4 py-2">
        <AiOutlineMinus
          onClick={() => decrement(type)}
          className="cursor-pointer text-gray-500 hover:text-gray-700"
          size={20}
        />
        <span className="text-xl font-semibold">{count}</span>
        <AiOutlinePlus
          onClick={() => increment(type)}
          className="cursor-pointer text-gray-500 hover:text-gray-700"
          size={20}
        />
      </div>
    </div>
  );

  return (
    <div className="p-6 border rounded-lg w-80 bg-white shadow-lg">
      {renderPassengerCounter("Adult", travelers.adult, "adult")}
      {renderPassengerCounter("Child", travelers.child, "child")}
      {renderPassengerCounter("Infant", travelers.infant, "infant")}
    </div>
  );
};

export default PassengerSelector;
