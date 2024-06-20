
import { Box } from "@mui/material";
import { DateRangePicker, DateRange } from "@mui/x-date-pickers-pro"
import { useState } from "react";

const MUIDateRangePicker = () => {
  const[value, setValue] = useState<DateRange<Date>>([null, null]);
  console.log({ value });
    
  return (
    <Box width={"500px"}>
      <DateRangePicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </Box>
  );
}

export default MUIDateRangePicker;