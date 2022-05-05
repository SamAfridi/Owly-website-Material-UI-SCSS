import { Grid, Paper } from "@mui/material";
import React from "react";
import YellowHeading from "./YellowHeading";
import CustomeButton from "./CustomeButton";
import IconData from "./IconData";
import "./Skill.scss";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  clipPath: "polygon(50% 0, 100% 37%, 82% 100%, 18% 100%, 0% 38%)",
  fontWeight: 600,
  height: "40px",
  width: "40px",
  backgroundColor: "white",

  color: theme.palette.text.secondary,
}));
const Skill = () => {
  return (
    <>
      <Grid
        container
        sx={{
          marginTop: "10px",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          lg={5}
          md={6}
          sx={{
            textAlign: "center",
            padding: "10px",
          }}
        >
          <YellowHeading
            heading2="  Conceptualizing Courses Easy way"
            heading6=" There are many veriation of passage of lorem Ipsum available, But
              the majority 
              have suffered alternation in some form, by injected humour,or
              randomised words
               whichb dont look even slightly believable
               There are many veriation of passage of lorem Ipsum available, But
              the majority 
              have suffered alternation in some form, by injected humour,or
              randomised words
               whichb dont look even slightly believable 
               There are many veriation of passage of lorem Ipsum available, But
              the majority 
              have suffered alternation in some form, by injected humour,or
              randomised words
               whichb dont look even slightly believable
               There are many veriation of passage of lorem Ipsum available, But
              the majority 
              have suffered alternation in some form, by injected humour,or
              randomised words
               whichb dont look even slightly believable"
          />
          <Grid className="skillBtn" iD="bgColor">
            <CustomeButton name="What we Teach" />
          </Grid>
          <Grid className="skillBtn">
            <CustomeButton name="How we Teach" />
          </Grid>
        </Grid>
        <Grid item lg={6} xs={12} md={6}>
          <Grid className="Right-Circle">
            <Grid
              item
              lg={10}
              xs={8}
              sx={{
                margin: "60px 0px 0px 80px",
              }}
            >
              {IconData.map((item) => {
                return (
                  <Grid item lg={8} xs={8} className="Right-Circle-Icon">
                    <Item>{item.icon}</Item>
                    <h5
                      style={{
                        margin: "auto 5px",
                        fontSize: "11px",
                      }}
                    >
                      {item.title}
                    </h5>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Skill;
