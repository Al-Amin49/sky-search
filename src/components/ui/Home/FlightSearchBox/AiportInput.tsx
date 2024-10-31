import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


type TAirportInputProps = {
    label: string;
    value: string;
    setValue: (value: string) => void;
  }
  
  type TSuggestion ={
    code: string;
    search_contents: string;
  }
  
const AirportInput = ({ label, value, setValue }:TAirportInputProps) => {
  const [suggestions, setSuggestions] = useState<TSuggestion[]>([]);

  const fetchSuggestions = async (query:string) => {
    const response = await fetch(`https://api.innotraveltech.com/tools/airport-autosuggetion-data?q=${query}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          apikey: "S10514518643297168545",
          secretecode: "S6lpaDO5tkEhE2GJxlxnIEVpmAHPO3jZIXN",
        },
      });
    const data = await response.json();
    console.log('data', data)
    setSuggestions(data);
  };

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    fetchSuggestions(e.target.value);
  };

  return (
    <div>
      <Label>{label}</Label>
      <Input
        placeholder={`Enter ${label.toLowerCase()}`}
        value={value}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <div className="absolute bg-white border border-gray-300 rounded shadow-lg mt-1 max-h-60 overflow-y-auto w-full z-10">
          {suggestions.map((suggestion) => (
            <div key={suggestion.code} onClick={() => setValue(suggestion.search_contents)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              {suggestion.search_contents}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AirportInput;
