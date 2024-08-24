import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const getValueFromPath = (path: string) => {
    switch (path) {
      case "/collection":
        return 1;
      case "/wishlist":
        return 2;
      default:
        return 0;
    }
  };

  const value = getValueFromPath(location.pathname);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    switch (newValue) {
      case 1:
        navigate("/collection");
        break;
      case 2:
        navigate("/wishlist");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <div className="fixed top-0 z-50 w-full bg-white">
          <Tabs value={value} onChange={handleTabChange} centered>
            <Tab label="HOME" {...a11yProps(0)} />
            <Tab label="コレクション" {...a11yProps(1)} />
            <Tab label="欲しい物リスト" {...a11yProps(2)} />
          </Tabs>
        </div>
      </Box>
    </Box>
  );
}
