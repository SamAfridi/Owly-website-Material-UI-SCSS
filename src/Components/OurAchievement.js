import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import StarIcon from "@mui/icons-material/Star";
import { Grid, Paper, Box } from "@mui/material";
import "./OurAchievement.scss";
import Heading from "./Heading";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";


const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  mx: 6,
  border: 1,
  width: "11rem",
  height: "11rem",
  outline: "2px dashed black",
  outlineOffset: "10px",
};

const OurAchievement = () => {
  const data = [
    {
      icon: <FeedOutlinedIcon />,
      id: 522,
      title: "Certification",
      desc: "Discuss with the tutee the amount of time necessary to complete each part of their task",
    },
    {
      icon: <EmojiEventsOutlinedIcon />,
      id: 23,
      title: "Award",
      desc: "Discuss with the tutee the amount of time necessary to complete each part of their task",
    },
    {
      icon: <WorkspacePremiumOutlinedIcon />,
      id: 190,
      title: "Self Developed Courses",
      desc: "Discuss with the tutee the amount of time necessary to complete each part of their task",
    },
  ];
  return (
    <>
      <Grid
        className="bgColor"
        container
        sx={{
          justifyContent: "center",
          marginTop: "30px",
          position: "relative",
        }}
      >
        <Grid
          item
          lg={5}
          sx={{
            textAlign: "center",
            margin: "100px 0px",
          }}
        >
          <LightModeIcon className="LightModeIcon" />
          <br />

          <div>
            <h2>Our Achievements</h2>
          </div>

          <br />

          <StarIcon className="starIcon" />
          <StarIcon className="starIcon" />
          <StarIcon className="starIcon" />
          <StarIcon className="starIcon" />
          <StarIcon className="starIcon" />

          <Grid
            sx={{
              marginTop: "-30px",
            }}
          >
            <Heading
              heading3="One of Highest Rated Course Tutor"
              heading6=" There are many veriation of passage of lorem Ipsum available, But
                            the majority 
                            have suffered alternation in some form, by injected humour,or
                            randomised words
                            whichb dont look even slightly believable"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        item
        lg={12}
        sx={{
          border: "1px solid red",
          justifyContent: "center",

          margin: "auto",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Grid
            className="gridData"
            item
            lg={3}
            xs={8}
            md={3}
            sx={{
              top: -100,
              left: "13%",
            }}
          >
            <Box sx={{ ...commonStyles, borderRadius: "50%" }}>
              <FeedOutlinedIcon className="Icon" />
            </Box>
            <h1>522</h1>
            <p>Certification</p>
            <br />
            <p>
              Discuss with the tutee the amount of time necessary to complete
              each part of their task
            </p>
          </Grid>
          <Grid
            className="gridData"
            item
            lg={3}
            xs={8}
            md={3}
            sx={{
              top: -100,
            }}
          >
            <Box sx={{ ...commonStyles, borderRadius: "50%" }}>
              <EmojiEventsOutlinedIcon className="Icon" />
            </Box>
            <h1>23</h1>
            <p>Award</p>
            <br />
            <p>
              Discuss with the tutee the amount of time necessary to complete
              each part of their task
            </p>
          </Grid>
          <Grid
            className="gridData"
            item
            lg={3}
            xs={8}
            md={3}
            sx={{
              top: -100,
              right: "13%",
            }}
          >
            <Box sx={{ ...commonStyles, borderRadius: "50%" }}>
              <WorkspacePremiumOutlinedIcon className="Icon" />
            </Box>
            <h1>190</h1>
            <p>Self Developed Courses</p>
            <br />
            <p>
              Discuss with the tutee the amount of time necessary to complete
              each part of their task
            </p>
          </Grid>
        </Grid>

        {/* );
        })} */}
      </Grid>
    </>
  );
};

export default OurAchievement;
