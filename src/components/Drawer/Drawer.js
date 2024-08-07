import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";

export default function CustomDrawer({ open, toggleDrawer }) {
  // const [open, setOpen] = React.useState(false);

  // const toggleDrawer = (newOpen) => {
  //   setOpen(newOpen);
  // };

  // let drawerOpen = localStorage.getItem("open");
  // React.useEffect(() => {
  //   if (drawerOpen && drawerOpen == "true") {
  //     setOpen(true);
  //   }
  // },[drawerOpen]);

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <div className="logo" style={{padding:"20px"}}>
        <FlutterDashIcon sx={{ width: "50px", height: "50px", color:"#7194fd" }} />
      </div>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AnalyticsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Analytics"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InventoryOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"To do"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountBalanceWalletOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Transactions"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Log Out"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
