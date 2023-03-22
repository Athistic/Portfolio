import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

export const WeatherAppImage = styled(Typography)({});

export const WeatherAppCelsius = styled(Typography)({
  fontWeight: "bold",
});

export const WeatherAppDescription = styled(Typography)({
  fontWeight: "bold",
});

export const WeatherAppForm = styled(Typography)({
  display: "grid",
  gridTemplateColumns: "50% 50%",
  gridTemplateRows: "100px 100px 100px 100px",
  justifyItems: "center",
  alignItems: "center",
  height: "500px",
  width: "300px",
  backgroundImage: "linear-gradient(to top right,black,navy,black)",
  color: "white",
  margin: "0px 0px 0px 650px",
});
