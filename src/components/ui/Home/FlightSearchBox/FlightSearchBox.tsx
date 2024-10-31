import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import DatePicker from "../DatePicker";

import JourneyType from "./JourneyType";
import Traveler from "./Traveler";
import CabinClass from "./CabinClass";
import AirportInput from "./AiportInput";

const FlightSearchBox = () => {
  const [journeyType, setJourneyType] = useState("OneWay");
  const [travelers, setTravelers] = useState({ adult: 1, child: 0, infant: 0 });
  const [cabinClass, setCabinClass] = useState("Economy");
  const [flightType, setFlightType] = useState("any");
  const [baggageOption, setBaggageOption] = useState("any");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");


  const handleSearch = () => {
    console.log({
      journey_type: journeyType,
      segment: [
        {
          departure_airport: departure,
          arrival_airport: arrival,
          departure_date: departureDate,
        },
      ],
      travelers_adult: travelers.adult,
      travelers_child: travelers.child,
      travelers_infants: travelers.infant,
      booking_class: cabinClass,
      non_stop_flight: flightType,
      baggage_option: baggageOption,
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-12 border border-gray-500 bg-white rounded-lg shadow-md absolute md:bottom-1 right-0 left-0  md:fixed mb-10 ">
      {/* Journey Type, Travelers, Cabin Class */}
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <JourneyType journeyType={journeyType} setJourneyType={setJourneyType}/>
       
       <Traveler travelers={travelers} setTravelers={setTravelers}></Traveler>
      <CabinClass cabinClass={cabinClass} setCabinClass={setCabinClass}></CabinClass>
      </div>

      {/* Flight Type & Baggage Option */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label>Flight Type</Label>
          <Select
            value={flightType}
            onValueChange={(value) => setFlightType(value)}
          >
            <SelectTrigger>Choose Flight Type</SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Flight</SelectItem>
              <SelectItem value="non-stop">Non-Stop Flight</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Baggage Option</Label>
          <Select
            value={baggageOption}
            onValueChange={(value) => setBaggageOption(value)}
          >
            <SelectTrigger>Choose Baggage Option</SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Baggage</SelectItem>
              <SelectItem value="only-baggage">Only Baggage</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Departure & Arrival Inputs */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
      <AirportInput label="Departure" value={departure} setValue={setDeparture} />
      <AirportInput label="Arrival" value={arrival} setValue={setArrival} />
      </div>

      {/* Date Picker & Search Button */}
      <div className="grid md:grid-cols-2 gap-4 items-end">
        <div className="flex flex-col gap-2">
          <Label>Departure Date</Label>
          <DatePicker
            selectedDate={departureDate}
            onDateChange={(date) => setDepartureDate(date)}
          />
        </div>
        <Button
          className="w-full bg-green-500 text-white"
          onClick={handleSearch}
        >
          Search Flights
        </Button>
      </div>
    </div>
  );
};

export default FlightSearchBox;
