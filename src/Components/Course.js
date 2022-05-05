import React from "react";
import { Grid, Paper } from "@mui/material";
import img from "../images/2nd-img.png";
import LaptopIcon from "@mui/icons-material/Laptop";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TheatersIcon from "@mui/icons-material/Theaters";
import CreateIcon from "@mui/icons-material/Create";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { Box } from "@mui/system";
import YellowHeading from "./YellowHeading";
import "./course.scss";

const Course = () => {
  return (
    <>
      <Grid container sx={{ marginTop: "50px" }}>
        <Grid item lg={7}>
          <Grid
            sx={{
              textAlign: "center",
              padding: "5px",
              
            }}
          >
           <YellowHeading 
              heading2='  Conceptualizing Courses Easy way'
              heading6=' There are many veriation of passage of lorem Ipsum available, But
              the majority 
              have suffered alternation in some form, by injected humour,or
              randomised words
               whichb dont look even slightly believable'
            />
          </Grid>
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 260,
                height: 128,
              },
            }}
          >
            <Paper item lg={4} elevation={1}>
              <div className="courses">
                <LaptopIcon className="courses_Icon" />
                <h6>Better Evaluation od Students</h6>
              </div>
            </Paper>
            <Paper item lg={4} elevation={1}>
              <div className="courses">
                <MenuBookIcon className="courses_Icon" />
                <h6>Best Strategies for Struggling Students</h6>
              </div>
            </Paper>
            <Paper item lg={4} elevation={1}>
              <div className="courses">
                <TheatersIcon className="courses_Icon" />
                <h6>A Comlpete Media Training Kit</h6>
              </div>
            </Paper>
            <Paper item lg={4} elevation={1}>
              <div className="courses">
                <CreateIcon className="courses_Icon" />
                <h6>Practical Example Creative Learning</h6>
              </div>
            </Paper>
            <Paper item lg={4} elevation={1}>
              <div className="courses">
                <TravelExploreIcon className="courses_Icon" />
                <h6>Helping All around the World with Concepts</h6>
              </div>
            </Paper>
            <Paper item lg={4} elevation={1}>
              <div className="courses">
                <TextSnippetIcon className="courses_Icon" />
                <h6>Comprehensive study Expertise </h6>
              </div>
            </Paper>
          </Box>
        </Grid>

        <Grid
          item
          lg={5}
          md={12}
          xs={12}
          sx={{
            textAlign: "center",
          }}
        >
          <img className="courses_image" src={img} alt="image" />
        </Grid>
      </Grid>
    </>
  );
};

export default Course;
