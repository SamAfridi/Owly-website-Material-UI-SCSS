import { Grid, Button } from "@mui/material";
import React from "react";
import img from "../images/background-img.png";

const Haider = () => {
  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        backgroundColor: "#dfdc27",
      }}
    >
      <Grid mt={5} item lg={2} xs={12}>
        <ol>
          <li
            style={{
              padding: "5px",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            About Me
          </li>
          <li
            style={{
              padding: "5px",
            }}
          >
            Bio
          </li>
          <li
            style={{
              padding: "5px",
            }}
          >
            Skills
          </li>
        </ol>
      </Grid>
      <Grid mt={5} item lg={4} xs={12} md={4}>
        <img src={img} alt="background-img" />
      </Grid>
      <Grid
        mt={5}
        item
        lg={5}
        md={5}
        xs={12}
        sx={{
          padding: "10px 50px",
        }}
      >
        <h1 style={{ padding: "10px" }}>
          I'm{" "}
          <span style={{ color: "white", borderBottom: "2px solid white" }}>
            John Doe
          </span>
        </h1>
        <h5>Dictating the Words of Wisdom as we interpret</h5>
        <Button variant="contained" color="inherit" sx={{ marginTop: "15px" }}>
          Let's Learn
        </Button>
      </Grid>
    </Grid>
  );
};

export default Haider;
