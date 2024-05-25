import { Box, Checkbox, FormControlLabel, FormControl, FormLabel, FormGroup, FormHelperText } from "@mui/material"
import { useState } from "react";
import { BookmarkBorder } from "@mui/icons-material";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MUICheckbox = () => {
  const[acceptTnC, setAcceptTnC] = useState(false);
  console.log({ acceptTnC });
  
  const[skills, setSkills] = useState<string[]>([]);
  console.log({ skills });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  }

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sIndex = skills.indexOf(event.target.value);
    if(sIndex === -1){
        setSkills([...skills, event.target.value]);
    }else{
        setSkills(skills.filter((skill) => skill !== event?.target.value));
    }
  }

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox
              checked={acceptTnC}
              size="small"
              color="secondary"
              onChange={handleChange}
            />
          }
        />
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>

      {/* Checkbox group */}
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  value={"JavaScript"}
                  checked={skills.includes("Javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="React"
              control={
                <Checkbox
                  value={"React"}
                  checked={skills.includes("React")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="Python"
              control={
                <Checkbox
                  value={"Python"}
                  checked={skills.includes("Python")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MUICheckbox