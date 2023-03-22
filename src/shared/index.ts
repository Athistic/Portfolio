import styled from "@emotion/styled";
import { Typography, AppBar, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField/TextField";

export const PageHeader = styled(Typography)({
  color: "blue",
  fontSize: "3rem",
  margin: "80px 0px 0px 0px",
  textShadow: "1px 1px 10px black",
});

export const CustomNav = styled(AppBar)({
  background: "linear-gradient(to top left,navy,black)",
  height: 50,
  fontWeight: "bold",
  "& a": {
    textDecoration: "none",
    float: "right",
    color: "white",
    margin: "0px 20px 0px 0px",
    "&:hover": {
      color: "orange",
    },
  },
});

export const CustomButton = styled(Button)({
  fontWeight: "bold",
  "&:hover": {
    color: "green",
    fontWeight: "bold",
  },
});

export const CustomGridContainer = styled(Grid)({
  display: "grid",
  gridTemplateColumns: "33% 34% 33%",
  height: "900px",
  "& > :nth-child(2)": {
    margin: "200px 0px 0px 0px",
  },
  "& > :nth-child(3)": {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    height: "35%",
    width: "100%",
    gridTemplateRows: "180px",
  },
});

export const GridImageContainer = styled(Typography)({
  height: "100%",
  width: "100%",
  margin: "150px 0px 0px 0px",
  boxSizing: "border-box",
});

export const GridImage = styled(Grid)({
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.2)",
  },
});

export const CustomTextfield = styled(TextField)({
  color: "green",
  padding: "1px",
});
