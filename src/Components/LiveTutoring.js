import { Container, Grid, Box, Paper } from "@mui/material";
import React from "react";
import CustomeButton from "./CustomeButton";
import Heading from "./Heading";
import "./goals.scss";

import IconMapComponent from "./IconMapComponent";
const LiveTutoring = () => {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "#dfdc27",
          padding: "50px 10px 10px 0px",
          display: "flex",
        }}
      >
        <Grid
          item
          lg={6}
          xs={12}
          md={6}
          sx={{
            padding: "50px",
            paddingLeft: "100px",
            lineHeight: "20px",
          }}
        >
          <div
            style={{
              textAlign: "left",
            }}
            className="main_Grid"
          >
            <Heading
              heading2="Live Tutoring"
              heading3="This is the best course tutors that will be the next
              generation training session begin now."
              heading6=" The Majority has suffer alternation in some form by injected humour,or 
              randomised words which dont look even slightly believable.
              "
            />
          </div>
          <Grid
            sx={{
              margin: "50px 10px",
              backgroundColor: "white",
              display: "inline-block",
            }}
          >
            <CustomeButton name="view our best courses" />
          </Grid>
        </Grid>

        <Grid
          container
          item
          lg={6}
          md={6}
          xs={12}
          sx={{
            display: "flex",
            maxHeight: "280px",

            justifyContent: "left",
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
              padding: "10px",

              height: "150px",
            }}
          >
            <IconMapComponent />
          </Grid>

          <Grid
            sx={{
              lineHeight: "20px",
              padding: "10px",
              marginTop: "10px",
            }}
            item
            lg={8}
            md={8}
            xs={12}
          >
            <h6>
              The Majority has suffer alternation in some form by injected
              humour,or randomised words which dont look even slightly
              believable.This is the best course tutors that will be the next
              generation training session begin now
            </h6>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LiveTutoring;
