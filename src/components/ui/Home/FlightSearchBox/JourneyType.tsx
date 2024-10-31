import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Label } from "@/components/ui/label";



type TJourneyTypeProps= {
    journeyType: string;
    setJourneyType: (value: string) => void;
  }
const JourneyType = ({ journeyType, setJourneyType }:TJourneyTypeProps) => (
  <div>
    <Label>Journey Type</Label>
    <Select value={journeyType} onValueChange={setJourneyType}>
      <SelectTrigger>Choose Journey Type</SelectTrigger>
      <SelectContent>
        <SelectItem value="OneWay">One Way</SelectItem>
        <SelectItem value="RoundTrip">Round Trip</SelectItem>
        <SelectItem value="MultiCity">Multi City</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

export default JourneyType;
