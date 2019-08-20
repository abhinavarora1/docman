import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Chip from '@material-ui/core/Chip';

import {
    FormControl,
    InputLabel,
    Input,
    Button,
    TextField,
    Container,
    Grid
  } from "@material-ui/core";

import Modal from "./textFieldDialog";
import useModal from './useModal';

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
  }));
 

function  DesignerForm({ addTodo }) {
  const [value, setValue] = useState(false);
  const {isShowing, toggle} = useModal();
  const classes = useStyles();
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }; 

   return (
    <Container maxWidth="sm">
    <form onSubmit={handleSubmit}>
    <div className={classes.root}>
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify="space-between">
            <Grid item>
              <Chip label="xs=12" />
            </Grid>
            <Grid item>
              <Chip label="sm=6" />
            </Grid>
            <Grid item>
              <Chip label="md=3" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify="space-between">
            <Grid item>
              <Chip label="xs=12" />
            </Grid>
            <Grid item>
              <Chip label="sm=6" />
            </Grid>
            <Grid item>
              <Chip label="md=3" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify="space-between">
            <Grid item>
              <Chip label="xs=12" />
              <TextField> </TextField>
              <TextField> </TextField>
              <TextField> </TextField>
              <TextField> </TextField>
              <TextField> </TextField>
              <Grid><span> Test</span></Grid><Grid><TextField> </TextField></Grid>
            </Grid>
            <Grid item>
              <Chip label="sm=6" />
            </Grid>
            <Grid item>
              <Chip label="md=3" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify="space-between">
            <Grid item>
              <Chip label="xs=12" />
            </Grid>
            <Grid item>
              <Chip label="sm=6" />
            </Grid>
            <Grid item>
              <Chip label="md=3" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
    </div>
    <Grid container spacing={4}>
    <Grid item xs={12} sm={6} md={3}>
    <Button variant="outlined" className={classes.button}
   
    onClick={ toggle }>
        Add Text
      </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Button variant="outlined" className={classes.button}>
        Add Select
      </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Button variant="outlined" className={classes.button}>
        Add Date
      </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Button variant="outlined" className={classes.button}>
        Add Rule
      </Button>
      </Grid>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
      </Grid>
      
    </form>
    </Container>
  );
}
  export default DesignerForm;