import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { membersInfo } from "../../../data/itemData";

const Member = () => {
  const [member, setMember] = useState("");

  // メンバー変更時
  const handleMemberChange = (event: SelectChangeEvent) => {
    setMember(event.target.value as string);
  };

  return (
    <div className="my-5">
      <FormControl fullWidth>
        <InputLabel id="member">メンバー</InputLabel>
        <Select
          labelId="member"
          id="member"
          value={member}
          label="member"
          onChange={handleMemberChange}
        >
          {membersInfo.map((memberInfo) => (
            <MenuItem
              key={memberInfo.num}
              value={memberInfo.num}
              sx={{ color: memberInfo.color }}
            >
              {memberInfo.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Member;
