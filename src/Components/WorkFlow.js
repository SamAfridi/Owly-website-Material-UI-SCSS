import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "./workFlow.scss";
import CustomeButton  from './CustomeButton';
import { Container, Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({

  padding: theme.spacing(1),
  textAlign: "center",
  fontSize: "50px",
  fontWeight: 600,
  margin: "20px 0px 20px 20px",
  paddingTop: "25px",
  border: "2px solid black",
  borderRadius: "50%",
  height: "130px",
  width: "130px",
  backgroundColor: "yellow",
  outline: "2px dashed black",
  outlineOffset: "10px",

  color: theme.palette.text.secondary,
}));

const WorkFlow = () => {
  const data = [
    {
      id: 1,
      title: "Identify the Task",
      desc: "Encourage the tutee to initiate and identify the focus of the session",
    },
    {
      id: 2,
      title: "Breaking the Taska into Parts",
      desc: "Provide opportunity for the tutee to break the task into manageable pieces",
    },
    {
      id: 3,
      title: "Setting in Agenda",
      desc: "Discuss with the tutee the amount of time necessary to complete each part of their task",
    },
    {
      id: 4,
      title: "Tutee Summary of Though Process",
      desc: "Have the tutee summarize the process of addressing this type of task",
    },
  ];
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "80px",
      }}
    >
      <Grid
        sx={{
          textAlign: "center",
          margin: "10px",
        }}
      >
        <h2 className="heading">Our Course WorkFlow</h2>
      </Grid>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          marginTop: "60px",
          justifyContent: "center",
        }}
      >
        {data.map((item) => {
          return (
            <Grid className="Circual_Data" item sm={6} xs={6} lg={3} md={4}>
              <Item>{item.id}</Item>
              <div
                style={{
                  width: "200px",
                }}
              >
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <Grid
        sx={{
          textAlign: "center",
          margin: "50px 10px",
        }}
      >
        <CustomeButton name="view workflow" />
      </Grid>
    </Container>
  );
};
export default WorkFlow;
