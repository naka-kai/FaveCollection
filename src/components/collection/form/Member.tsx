import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { MemberType } from "../../../data/data";
import axios from "axios";

const Member = () => {
  const [selectedMember, setSelectedMember] = useState("");
  const [members, setMembers] = useState<MemberType[]>([]);

  // メンバー変更時
  const handleMemberChange = (event: SelectChangeEvent) => {
    setSelectedMember(event.target.value as string);
  };

  useEffect(() => {
    axios.get("http://localhost:3003/members").then((response) => {
      console.log(response.data.members);
      const { members } = response.data;
      setMembers(members);
    });
  }, []);

  return (
    <div className="my-5">
      <FormControl fullWidth>
        <InputLabel id="member">メンバー</InputLabel>
        <Select
          labelId="member"
          id="member"
          value={selectedMember}
          label="member"
          onChange={handleMemberChange}
        >
          {members.map((member) => (
            <MenuItem
              key={member.member_num}
              value={member.member_num}
              sx={{ color: member.color }}
            >
              {member.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Member;
