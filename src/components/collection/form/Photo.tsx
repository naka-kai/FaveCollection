import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { PhotoType, TourOptionType } from "../../../data/itemData";

type PhotoProps = {
  setSelectedPhoto: React.Dispatch<React.SetStateAction<string | null>>;
  selectedTour: TourOptionType | null;
  selectedPhoto: string | null;
};

const Photo: React.FC<PhotoProps> = ({
  setSelectedPhoto,
  selectedTour,
  selectedPhoto,
}) => {
  // 写真変更時
  const handlePhotoChange = (event: SelectChangeEvent) => {
    setSelectedPhoto(event.target.value as string);
  };

  // 選択されたツアーに基づく写真の取得
  const photoOptions: PhotoType[] = selectedTour?.photos || [];

  return (
    <div className="my-5">
      <FormControl fullWidth>
        <InputLabel id="photo-label">写真セット</InputLabel>
        <Select
          labelId="photo-label"
          id="photo"
          value={selectedPhoto || ""}
          label="写真セット"
          onChange={handlePhotoChange}
          disabled={!selectedTour} // ツアーが選択されていない場合は無効にする
        >
          {photoOptions.map((photo, index) => (
            <MenuItem key={index} value={photo.title}>
              {photo.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Photo;
