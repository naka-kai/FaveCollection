import { Autocomplete, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { TourOptionType, TourType } from "../../../data/data";
import { useEffect, useState } from "react";
import axios from "axios";

const GroupHeader = styled("div")(() => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: "white",
  backgroundColor: "#f9a8d4",
}));

const GroupItems = styled("ul")({
  padding: 0,
});

type TourNameProps = {
  setSelectedTour: React.Dispatch<React.SetStateAction<TourOptionType | null>>;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<string | null>>;
  selectedTour: TourOptionType | null;
};

const TourName: React.FC<TourNameProps> = ({
  setSelectedTour,
  setSelectedPhoto,
  selectedTour,
}) => {
  const [tours, setTours] = useState<TourType[]>([]);

  // ツアー変更時
  const handleTourChange = (
    event: React.SyntheticEvent,
    value: TourOptionType | null
  ) => {
    setSelectedTour(value);
    setSelectedPhoto(null); // ツアーが変更されたら、写真をリセット
  };

  useEffect(() => {
    axios.get("http://localhost:3003/tours").then((response) => {
      console.log(response.data.tours);
      const { tours } = response.data;
      setTours(tours);
    });
  }, []);

  // ツアーオプションの生成
  const tourOptions: TourOptionType[] = tours.map((tour) => {
    const firstLetter = tour.tour_title[0].toUpperCase();
    return {
      ...tour,
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
    };
  });

  return (
    <div className="my-5">
      <Autocomplete
        id="tour"
        options={tourOptions.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.tour_title}
        isOptionEqualToValue={(option, value) =>
          option.tour_title === value.tour_title
        }
        sx={{ width: "100%" }}
        renderInput={(params) => <TextField {...params} label="ツアー名" />}
        renderGroup={(params) => (
          <li key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems>{params.children}</GroupItems>
          </li>
        )}
        onChange={handleTourChange}
        value={selectedTour}
      />
    </div>
  );
};

export default TourName;
