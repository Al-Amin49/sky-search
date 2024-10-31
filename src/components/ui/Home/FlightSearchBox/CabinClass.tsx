import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FlightSearchStore } from "@/pullstate/store";


const CabinClass = () => {
    const cabinType = FlightSearchStore.useState((s) => s.cabinClass);
    return(
        
            <div>
              <Label>Cabin Class</Label>
              <Select value={cabinType} 
               onValueChange={(value) =>
                FlightSearchStore.update((s) => { s.cabinClass = value })
              }
              >
                <SelectTrigger>Choose Cabin Class</SelectTrigger>
                <SelectContent>
                  <SelectItem value="Economy">Economy</SelectItem>
                  <SelectItem value="Premium-Economy">Premium Economy</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="First-Class">First Class</SelectItem>
                </SelectContent>
              </Select>
            </div>
          
          
    )
}
export default CabinClass;
