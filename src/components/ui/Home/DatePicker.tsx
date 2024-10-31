/* ts-ignore */
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type TDatePickerProps = {
    selectedDate?: Date | null ;
    onDateChange: (date: Date | undefined  ) => void;
  };
const DatePicker = ({ selectedDate, onDateChange }:TDatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !selectedDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
          selected={selectedDate  }
          onSelect={onDateChange}
          initialFocus
          className="bg-gray-100 rounded-md" 
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
