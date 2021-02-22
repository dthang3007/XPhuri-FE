import React from "react";
import {
  Avatar,
  Divider,
  Grid,
  makeStyles,
  Typography,
  Box,
  TextField,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#ABB4DB",
  },
  avatar: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    margin: theme.spacing(4, "auto"),
  },
  paper: {
    margin: "auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(8),
  },
}));

export const PlayerScreen = () => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <Paper ariant="outlined" className={classes.paper} square>
        <Typography component="h1" variant="h5" align="center">
          Information Player
        </Typography>
        <Avatar
          si
          alt="avatar"
          src="https://img.nhandan.com.vn/Files/Images/2020/09/08/1599506307_085988_noticia_normal-1599536668171.jpg"
          className={classes.avatar}
        />

        <form className={classes.form}>
          <TextField
            label="Name"
            defaultValue="Hello World"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Position"
            defaultValue="Hello World"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Grid sm="8">
            <TextField
              label="Age"
              defaultValue="Hello World"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Height"
              defaultValue="Hello World"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Weight"
              defaultValue="Hello World"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};
