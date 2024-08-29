import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { itemData } from "../../data/itemData";

export default function Index() {
  const theme = useTheme();

  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  // 何列表示させるかレスポンシブ対応
  const cols = isSmDown ? 2 : isMdDown ? 3 : 4;

  return (
    <ImageList
      sx={{
        width: "calc(100% - 60px)",
        height: "auto",
        margin: "70px auto 30px",
        boxSizing: "border-box",
      }}
      cols={cols}
      gap={20}
    >
      {itemData.map((item, index) => (
        <ImageListItem
          key={item.img}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Link to={`/collection/${Number(index + 1)}`}>
            <img
              srcSet={`${item.img}?fit=contain&auto=format&dpr=2 2x`}
              src={`${item.img}?fit=contain&auto=format`}
              alt={item.title}
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.tag}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
