import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FlightSearchStore } from "@/pullstate/store";



const JourneyType = () => {
    const journeyType = FlightSearchStore.useState((s) => s.journeyType);
    return (
  <div>
    <Label>Journey Type</Label>
    <Select value={journeyType}
     onValueChange={(value) =>
        FlightSearchStore.update((s) => { s.journeyType = value })
      }
    >
      <SelectTrigger>Choose Journey Type</SelectTrigger>
      <SelectContent>
        <SelectItem value="OneWay">One Way</SelectItem>
        <SelectItem value="RoundTrip">Round Trip</SelectItem>
        <SelectItem value="MultiCity">Multi City</SelectItem>
      </SelectContent>
    </Select>
  </div>
    )
}

export default JourneyType;
