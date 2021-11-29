import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
// import styles from './Box.module.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  display:"inline-block",
  padding: "0.75%",
  width: "8rem",
  margin: "0.75rem",
  height: "80px"
}));

const darkTheme = createTheme();

const Box = (props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Item color="primary" elevation={5}>{props.children}</Item>
    </ThemeProvider>
  );
};

export default Box;
