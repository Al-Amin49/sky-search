
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
import { FlightSearchStore } from "@/pullstate/store";

const FlightSearchBox = () => {
  const flightState = FlightSearchStore.useState();
  const flightType = FlightSearchStore.useState((s) => s.flightType);
  const baggageType= FlightSearchStore.useState((s)=>s.baggageOption);
  const departureType= FlightSearchStore.useState((s)=>s.departure);
  const arrivalType= FlightSearchStore.useState((s)=>s.arrival);
  const departureDateType= FlightSearchStore.useState((s)=>s.departureDate)


  const handleSearch = () => {
    console.log({
      journey_type: flightState.journeyType,
      segment: [
        {
          departure_airport: flightState.departure,
          arrival_airport: flightState.arrival,
          departure_date: flightState.departureDate,
        },
      ],
      travelers_adult: flightState.travelers.adult,
      travelers_child: flightState.travelers.child,
      travelers_infants: flightState.travelers.infant,
      booking_class: flightState.cabinClass,
      non_stop_flight: flightState.flightType,
      baggage_option: flightState.baggageOption,
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-12 border border-gray-500 bg-white rounded-lg shadow-md absolute md:bottom-1 right-0 left-0  md:fixed mb-10 ">
      {/* Journey Type, Travelers, Cabin Class */}
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <JourneyType/>
       
       <Traveler ></Traveler>
      <CabinClass></CabinClass>
      </div>

      {/* Flight Type & Baggage Option */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label>Flight Type</Label>
          <Select
            value={flightType}
            onValueChange={(value) =>
              FlightSearchStore.update((s) => { s.flightType = value })
            }
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
            value={baggageType}
            onValueChange={(value) =>
              FlightSearchStore.update((s) => { s.baggageOption = value })
            }
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
      <AirportInput label="Departure" value={departureType} 
    setValue={(newValue) =>
      FlightSearchStore.update((s) => { s.departure = newValue })
    }
       />
      <AirportInput label="Arrival" value={arrivalType}
      setValue={(newValue) =>
        FlightSearchStore.update((s) => { s.arrival=newValue })
      }
        />
      </div>

      {/* Date Picker & Search Button */}
      <div className="grid md:grid-cols-2 gap-4 items-end">
        <div className="flex flex-col gap-2">
          <Label>Departure Date</Label>
          <DatePicker
            selectedDate={departureDateType}
            onDateChange={(date) => FlightSearchStore.update((s) => { s.departureDate = date })}
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
