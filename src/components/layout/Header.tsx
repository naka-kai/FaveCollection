import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Home from "../../pages/Home";
import Collection from "../../pages/Collection";
import WishList from "../../pages/WishList";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <div
          style={{
            position: "fixed",
            top: "0",
            width: "100%",
            zIndex: "99",
            backgroundColor: "white",
          }}
        >
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="HOME" {...a11yProps(0)} />
            <Tab label="コレクション" {...a11yProps(1)} />
            <Tab label="欲しい物リスト" {...a11yProps(2)} />
          </Tabs>
        </div>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Home />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Collection />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <WishList />
      </CustomTabPanel>
    </Box>
  );
}
