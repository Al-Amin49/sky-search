import { Store } from "pullstate";

type Travelers = { adult: number; child: number; infant: number };

export type FlightSearchState= {
  journeyType: string;
  travelers: Travelers;
  cabinClass: string;
  flightType: string;
  baggageOption: string;
  departure: string;
  arrival: string;
  departureDate: Date | null;
}

export const FlightSearchStore = new Store<FlightSearchState>({
  journeyType: "OneWay",
  travelers: { adult: 1, child: 0, infant: 0 },
  cabinClass: "Economy",
  flightType: "any",
  baggageOption: "any",
  departure: "",
  arrival: "",
  departureDate: null,
});
