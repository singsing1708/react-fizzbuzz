import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import PanToolIcon from '@material-ui/icons/PanTool';


const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const GamePanel = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (

      <Card>
        <CardContent>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justify="center"

          >
            <Grid
              item
              md={6}
              xs={6}
            >
              <TextField
                fullWidth
                label="Your Number"
                name="usernumber"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
            >
              <Button
                color="primary"
                variant="contained"
                startIcon={<PanToolIcon/>}
              >
                Clap
              </Button>
            </Grid>

          </Grid>
        </CardContent>
        <Divider />

      </Card>
  );
};

GamePanel.propTypes = {
  className: PropTypes.string
};

export default GamePanel;
