import React from 'react'
import IconData from "./IconData";
import { Grid ,Paper} from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  clipPath: "polygon(50% 0, 100% 37%, 82% 100%, 18% 100%, 0% 38%)",
  fontWeight: 600,
  marginBottom: "10px",
  paddingTop: "25px",
  height: "70px",
  width: "70px",
  backgroundColor: "white",

  color: theme.palette.text.secondary,
}));

const IconMapComponent = () => {
  return (
    <>
         {IconData.map((item) => {
              return (
                <Grid item lg={3} xs={3}>
                  <Item>{item.icon}</Item>
                  <h5>{item.title}</h5>
                </Grid>
              );
            })}
    </>
  )
}

export default IconMapComponent;