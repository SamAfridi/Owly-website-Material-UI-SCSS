import { Card, Grid, CardContent, Box, Paper } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import monoGramright from "../images/award-img.png";
import monoGramleft from "../images/award-img2.png";
import Award from "../images/Award1.png";
import award from "../images/images-Awad.png";
import starAward from "../images/star-Award.png";
import student from "../images/student.jpg";
import student2 from "../images/student2.jpg";
import Carousel from "react-elastic-carousel";
import "./goals.scss";
import Heading  from './Heading';

const breakPoints = [
  { width: 1, itemsToShow: 2 },

   { width: 500, itemsToShow: 2 },
   { width: 768, itemsToShow: 2 },
   { width: 1200, itemsToShow: 2 },
];

const Goals = () => {
  return (
    <>
      <Grid
        container
        padding={5}
        sx={{
          backgroundColor: "#dfdc27",
        }}
      >
        <Grid item lg={6} md={12} className="main_Grid">
            <Heading 
              heading2='We Reach Our Goals'
              heading3 ='We Have the Best Portfolios'
              heading6=' There are many veriation of passage of lorem Ipsum available, But
              the majority 
              have suffered alternation in some form, by injected humour,or
              randomised words
               whichb dont look even slightly believable'
            />
          <Box
            sx={{
              display: "flex",
              marginTop: "50px",
            }}
            
          >
            <Grid item lg={4} xs={4}  className="main_Grid_award">
              <img style={{ maxWidth: "180px" }} src={Award} alt="image" />
              <h5>Summer Joinee</h5>
              <p>Best Creative Excellence Award</p>
            </Grid>
            <Grid item lg={4} xs={4}  className="main_Grid_award">
              <img src={award} alt="image" />
              <h5>2022</h5>
              <p>Top Achiever Credit Award</p>
            </Grid>
            <Grid item lg={4} xs={4}   className="main_Grid_award">
              <img src={starAward} alt="image" />
              <h5>High School</h5>
              <p>Wisdom Valley Award</p>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          xs={12}
          sx={{
            marginTop: "30px",

            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Grid
            className="Ranked_div"
            sx={{
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "50px", height: "70" }}
              src={monoGramleft}
              alt="monoGram"
            />
            <div className="Ranked_div_text">
              <h3>Top Ranked Students are from here</h3>
              <p>Students we turtored excelled the best in Exam</p>
            </div>

            <img src={monoGramright} alt="monoGram" />
          </Grid>

          <Grid
            item
            lg={12}
            md={12}
            xs={12}
            sx={{
              display: "flex",

              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              marginTop: "30px",
              padding: "20px 10px",
            }}
          >
            <Carousel breakPoints={breakPoints}
              className='carousel'
            >
              <Paper  elevation={3}>
                <img className="Card_img" src={student} alt="studentImage" />

                <Typography className="typoGraphy" component="div">
                  Nathan Drake
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1st Rank
                </Typography>
              </Paper>
              <Paper  elevation={3}>
                <img className="Card_img" src={student2} alt="studentImage" />

                <Typography className="typoGraphy" component="div">
                  Imoh Potene
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  3rd Rank
                </Typography>
              </Paper>

              <Paper  elevation={3}>
                <img className="Card_img" src={student} alt="studentImage" />

                <Typography className="typoGraphy" component="div">
                  Nathan Drake
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1st Rank
                </Typography>
              </Paper>
              <Paper  elevation={3}>
                <img className="Card_img" src={student2} alt="studentImage" />

                <Typography className="typoGraphy" component="div">
                  Imoh Potene
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  3rd Rank
                </Typography>
              </Paper>
            </Carousel>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Goals;
