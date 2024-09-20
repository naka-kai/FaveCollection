import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Fab, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { itemData } from "../../data/data";
import { useEffect, useState } from "react";
import Create from "./Create";
import { AnimatePresence, motion } from "framer-motion";

export default function Index() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const cols = isSmDown ? 2 : isMdDown ? 3 : 4; // 何列表示させるかレスポンシブ対応

  const [showCreate, setShowCreate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleFabClick = () => {
    navigate("/collection/create");
  };

  const handleClose = () => {
    navigate("/collection");
  };

  useEffect(() => {
    if (location.pathname === "/collection/create") {
      setShowCreate(true);
    } else {
      setShowCreate(false);
    }
  }, [location.pathname]);

  return (
    <div>
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
                subtitle={item.tour}
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
      <div className="fixed bottom-20 right-5">
        <Fab
          style={{ backgroundColor: "#f9a8d4", color: "white" }}
          aria-label="add"
          onClick={handleFabClick}
        >
          <AddIcon />
        </Fab>
      </div>

      <AnimatePresence>
        {showCreate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex justify-center items-center"
          >
            <Create onClose={handleClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
