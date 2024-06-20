
import { Stack } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { SetStateAction, useState } from "react";


const MUIPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  
  console.log({ selectedDate });
  console.log({ selectedTime: selectedTime && selectedTime.toLocaleTimeString() });
  console.log({ selectedDateTime });
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        value={selectedDate}
        onChange={(newValue: SetStateAction<Date | null>) => {
          setSelectedDate(newValue);
        }}
      />

      {/* Time picker */}
      <TimePicker
        label="Time Picker"
        value={selectedTime}
        onChange={(newValue: SetStateAction<Date | null>) => {
          setSelectedTime(newValue);
        }}
      />

      {/* DateTime picker */}
      <DateTimePicker
        label="Date-Time Picker"
        value={selectedDateTime}
        onChange={(newValue: SetStateAction<Date | null>) => {
          setSelectedDateTime(newValue);
        }}
      />
    </Stack>
  );
};

export default MUIPicker