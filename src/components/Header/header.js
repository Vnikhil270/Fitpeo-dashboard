import React from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import avatar from "../../assets/avatar.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function Header({toggleDrawer}) {
  return (
    <header className="Header">
      <div className="section1">
        <div className="menu" onClick={toggleDrawer}>
          <MenuOutlinedIcon />
        </div>
        <div className="logo">
          <FlutterDashIcon />
        </div>
        <div className="search-box">
          <FormControl sx={{ width: "25ch" }} size="small" variant="outlined">
            <OutlinedInput
              placeholder="Search"
              startAdornment={
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="start"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </div>
      <div className="section2">
        <Box className="icon-group">
          <Box className="icons">
            <MailOutlineOutlinedIcon />
          </Box>
          <Box className="icons">
            <SettingsOutlinedIcon />
          </Box>
          <Box className="icons">
            <NotificationsNoneOutlinedIcon />
          </Box>
        </Box>
        <Box>
          <img src={avatar} alt="User-image" />
        </Box>
      </div>
    </header>
  );
}

export default Header;
