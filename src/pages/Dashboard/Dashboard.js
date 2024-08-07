import React from "react";
import Header from "../../components/Header/header";
import { Box, Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/sidebar";
import { Outlet } from "react-router-dom";
import CustomDrawer from "../../components/Drawer/Drawer";

function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };


  return (
    <div className="Dashboard">
      <Header toggleDrawer={toggleDrawer}/>
      <div className="main">
        <Grid container>
          <Grid item sm={1} className="sidebar-grid">
            <Sidebar />
          </Grid>
          <Grid sm={11} className="main-grid">
            <Outlet />
          </Grid>
        </Grid>
      </div>
      <Box className="drawer">
        <CustomDrawer open={open} toggleDrawer={toggleDrawer}/>
      </Box>
    </div>
  );
}

export default Dashboard;
