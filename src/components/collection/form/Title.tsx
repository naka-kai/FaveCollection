import { TextField } from "@mui/material";

const Title = () => {
  return (
    <div className="my-5">
      <TextField
        id="title"
        label="タイトル"
        variant="outlined"
        className="w-full"
      />
    </div>
  );
};

export default Title;
