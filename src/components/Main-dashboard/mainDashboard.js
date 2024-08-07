import { Box, Container, Divider, Grid, Rating } from "@mui/material";
import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Gauge, gaugeClasses } from "@mui/x-charts";
import CustomBarChart from "../Charts/BarChart";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CustomTable from "../CustomTable/Table";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function MainDashboard() {
  const orderInfo = [
    {
      title: "Total order",
      stats: "75",
      logo: <ShoppingBagIcon sx={{ color: "#4063FB" }} />,
      color: "#293267",
      revenueStatColor: "green",
      revenue: "increase",
      revenueStats: "3",
    },
    {
      title: "Total Delivered",
      stats: "70",
      logo: <DeliveryDiningIcon sx={{ color: "#04C98D" }} />,
      color: "#155045",
      revenueStatColor: "red",
      revenue: "decrease",
      revenueStats: "3",
    },
    {
      title: "Total Cancelled",
      stats: "05",
      logo: <UnsubscribeIcon sx={{ color: "#F05C5D" }} />,
      color: "#5E3236",
      revenueStatColor: "green",
      revenue: "increase",
      revenueStats: "3",
    },
    {
      title: "Total Revenue",
      stats: "$12K",
      logo: <MonetizationOnIcon sx={{ color: "#EA42A1" }} />,
      color: "#5B294A",
      revenueStatColor: "red",
      revenue: "decrease",
      revenueStats: "3",
    },
  ];
  return (
    <Container maxWidth="xl" className="main-container">
      <div className="main-dashboard">
        <h2 className="heading">Dashboard</h2>
        <Box mt={3} className="section1">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={8} className="grid1">
              <Grid container spacing={2}>
                {orderInfo.map((item) => {
                  return (
                    <Grid item xs={6} sm={6} md={3} className="grid-item">
                      <Box className="order-info-box">
                        <Box
                          className="logo-box"
                          sx={{ background: item.color }}
                        >
                          {item.logo}
                        </Box>
                        <p>{item.title}</p>
                        <Box className="footer-box" mt={1}>
                          <h1>{item.stats}</h1>
                          <p style={{ color: item.revenueStatColor }}>
                            {item.revenueStats}%
                          </p>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="grid2">
              <Box className="profit-block">
                <Box className="stats-box">
                  <p className="title">Net Profit</p>
                  <p className="stats">$6759.25</p>
                  <p className="revenue">3%</p>
                </Box>
                <Box className="gauge-chart">
                  <Gauge width={100} height={100} value={60} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="section2" mt={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={8} className="grid3">
              <Box className="bar-charts">
                <CustomBarChart />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="grid4">
              <Box className="goals-box">
                <Box className="goal">
                  <Box className="box1">
                    <Box className="logo-box logo-box1">
                      <AdsClickIcon />
                    </Box>
                    <p>Goals</p>
                  </Box>
                  <Box className="action-logo">
                    <ExpandCircleDownIcon />
                  </Box>
                </Box>
                <Box className="goal" mt={4}>
                  <Box className="box1">
                    <Box className="logo-box logo-box2">
                      <LunchDiningIcon />
                    </Box>
                    <p>Popular Dishes</p>
                  </Box>
                  <Box className="action-logo">
                    <ExpandCircleDownIcon />
                  </Box>
                </Box>
                <Box className="goal" mt={4}>
                  <Box className="box1">
                    <Box className="logo-box logo-box3">
                      <RestaurantMenuIcon />
                    </Box>
                    <p>Menu</p>
                  </Box>
                  <Box className="action-logo">
                    <ExpandCircleDownIcon />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="section3" mt={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={8} className="grid5">
              <Box className="table-box">
                <h3>Recent Orders</h3>
                <Box mt={2}>
                  <CustomTable />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} className="grid6">
              <Box className="Reviews-box">
                <h3>Customer's Feedback</h3>
                <Box className="review-section" mt={3}>
                  <Box className="review">
                    <Box className="heading">
                      <AccountCircleIcon />
                      <p>Jenny Wilson</p>
                    </Box>
                    <Box mt={1}>
                      <Rating name="size-medium" defaultValue={4} />
                    </Box>
                    <Box mt={1}>
                      <p className="feedback">
                        The food here is absolutely delicious! Every dish we
                        tried was bursting with flavor and cooked to perfection.
                      </p>
                    </Box>
                  </Box>
                  <Divider/>
                  <Box className="review">
                    <Box className="heading">
                      <AccountCircleIcon />
                      <p>Jenny Wilson</p>
                    </Box>
                    <Box mt={1}>
                      <Rating name="size-medium" defaultValue={4} />
                    </Box>
                    <Box mt={1}>
                      <p className="feedback">
                        The food here is absolutely delicious! Every dish we
                        tried was bursting with flavor and cooked to perfection.
                      </p>
                    </Box>
                  </Box>
                  <Divider/>
                  <Box className="review">
                    <Box className="heading">
                      <AccountCircleIcon />
                      <p>Jenny Wilson</p>
                    </Box>
                    <Box mt={1}>
                      <Rating name="size-medium" defaultValue={4} />
                    </Box>
                    <Box mt={1}>
                      <p className="feedback">
                        The food here is absolutely delicious! Every dish we
                        tried was bursting with flavor and cooked to perfection.
                      </p>
                    </Box>
                  </Box>
                  <Divider/>
                  <Box className="review">
                    <Box className="heading">
                      <AccountCircleIcon />
                      <p>Jenny Wilson</p>
                    </Box>
                    <Box mt={1}>
                      <Rating name="size-medium" defaultValue={4} />
                    </Box>
                    <Box mt={1}>
                      <p className="feedback">
                        The food here is absolutely delicious! Every dish we
                        tried was bursting with flavor and cooked to perfection.
                      </p>
                    </Box>
                  </Box>
                  <Divider/>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
}

export default MainDashboard;
