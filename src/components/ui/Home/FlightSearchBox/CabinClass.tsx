import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Label } from "@/components/ui/label";


const CabinClass = ({ cabinClass, setCabinClass }) => (
  <div>
    <Label>Cabin Class</Label>
    <Select value={cabinClass} onValueChange={setCabinClass}>
      <SelectTrigger>Choose Cabin Class</SelectTrigger>
      <SelectContent>
        <SelectItem value="Economy">Economy</SelectItem>
        <SelectItem value="Premium-Economy">Premium Economy</SelectItem>
        <SelectItem value="Business">Business</SelectItem>
        <SelectItem value="First-Class">First Class</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

export default CabinClass;
