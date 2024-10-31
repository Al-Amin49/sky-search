import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DatePicker from "./DatePicker";
import PassengerSelector from "./PassengerSelector";

const FlightSearchBox = () => {
  const [journeyType, setJourneyType] = useState("OneWay");
  const [travelers, setTravelers] = useState({ adult: 1, child: 0, infant: 0 });
  const [cabinClass, setCabinClass] = useState("Economy");
  const [flightType, setFlightType] = useState("any");
  const [baggageOption, setBaggageOption] = useState("any");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [showPassengerSelector, setShowPassengerSelector] = useState(false);

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
    <div className="max-w-4xl mx-auto py-6 px-12 border border-gray-500 bg-white rounded-lg shadow-md absolute md:bottom-1 right-0 left-0   ">
      {/* Journey Type, Travelers, Cabin Class */}
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div>
          <Label>Journey Type</Label>
          <Select value={journeyType} onValueChange={(value) => setJourneyType(value)}>
            <SelectTrigger>Choose Journey Type</SelectTrigger>
            <SelectContent>
              <SelectItem value="OneWay">One Way</SelectItem>
              <SelectItem value="RoundTrip">Round Trip</SelectItem>
              <SelectItem value="MultiCity">Multi City</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Travelers</Label>
          <Button onClick={() => setShowPassengerSelector(!showPassengerSelector)} className="relative">
            {`Adult: ${travelers.adult}, Child: ${travelers.child}, Infant: ${travelers.infant}`}
          </Button>
          {showPassengerSelector && (
            <div className="absolute mt-2 left-0 right-0 z-10 flex items-center justify-center">
              <div className="bg-white p-4 shadow-lg rounded-lg">
                <PassengerSelector travelers={travelers} setTravelers={setTravelers} />
                <Button
                  className="mt-4"
                  onClick={() => setShowPassengerSelector(false)}
                >
                  Done
                </Button>
              </div>
            </div>
          )}
        </div>
        <div>
          <Label>Cabin Class</Label>
          <Select value={cabinClass} onValueChange={(value) => setCabinClass(value)}>
            <SelectTrigger>Choose Cabin Class</SelectTrigger>
            <SelectContent>
              <SelectItem value="Economy">Economy</SelectItem>
              <SelectItem value="Premium-Economy">Premium Economy</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
              <SelectItem value="First-Class">First Class</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Flight Type & Baggage Option */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label>Flight Type</Label>
          <Select value={flightType} onValueChange={(value) => setFlightType(value)}>
            <SelectTrigger>Choose Flight Type</SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Flight</SelectItem>
              <SelectItem value="non-stop">Non-Stop Flight</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Baggage Option</Label>
          <Select value={baggageOption} onValueChange={(value) => setBaggageOption(value)}>
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
        <div>
          <Label>Departure</Label>
          <Input
            placeholder="Enter departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>
        <div>
          <Label>Arrival</Label>
          <Input
            placeholder="Enter arrival"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          />
        </div>
      </div>

      {/* Date Picker & Search Button */}
      <div className="grid md:grid-cols-2 gap-4 items-end">
        <div className="flex flex-col gap-2">
          <Label>Departure Date</Label>
          <DatePicker selectedDate={departureDate} onDateChange={(date) => setDepartureDate(date)} />
        </div>
        <Button className="w-full bg-green-500 text-white" onClick={handleSearch}>
          Search Flights
        </Button>
      </div>
    </div>
  );
};

export default FlightSearchBox;
