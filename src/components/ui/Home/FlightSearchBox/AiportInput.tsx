import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type TAirportInputProps = {
  label: string;
  value: string;
  setValue: (value: string) => void;
};

type TSuggestion = {
  code: string;
  search_contents: string;
};

const AirportInput: FC<TAirportInputProps> = ({ label, value, setValue }) => {
  const [suggestions, setSuggestions] = useState<TSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  const fetchSuggestions = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.innotraveltech.com/tools/airport-autosuggetion-data?q=${query}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            apikey: "S10514518643297168545",
            secretecode: "S6lpaDO5tkEhE2GJxlxnIEVpmAHPO3jZIXN",
          },
        }
      );
      const data = await response.json();
      setSuggestions(data);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setValue(query);
    if (query.length > 1) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    setShowSuggestions(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={inputRef} className="relative">
      <Label>{label}</Label>
      <Input
        placeholder={`Enter ${label.toLowerCase()}`}
        value={value}
        onChange={handleInputChange}
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute bg-white border border-gray-300 rounded shadow-lg mt-1 max-h-screen overflow-y-auto w-full min-w-[200px] z-10">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.code}
              onClick={() => handleSuggestionClick(suggestion.search_contents)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion.search_contents}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AirportInput;
