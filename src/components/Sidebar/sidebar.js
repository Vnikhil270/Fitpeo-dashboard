import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Box, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate()
  const navLinks = [
    {
      title: "Dashboard",
      logo: <HomeIcon />,
      redirect: "/",
    },
    {
      title: "Analytics",
      logo: <AnalyticsOutlinedIcon />,
      redirect: "/analytics",
    },
    {
      title: "To do",
      logo: <InventoryOutlinedIcon />,
      redirect: "/to-do",
    },
    {
      title: "Transactions",
      logo: <AccountBalanceWalletOutlinedIcon />,
      redirect: "/transaction",
    },
  ];

  const handleRedirect=(link)=>{
    navigate(link);
  }

  const path = window.location.pathname;
  console.log(path)

  return (
    <div className="Sidebar">
        {navLinks.map((links) => {
          return (
            <Box className={`nav-box ${path===links.redirect?"selected-nav":""}`} onClick={()=>handleRedirect(links.redirect)}>
              <Tooltip title={links.title} placement="right">
                {links.logo}
              </Tooltip>
            </Box>
          );
        })}
    </div>
  );
}

export default Sidebar;
