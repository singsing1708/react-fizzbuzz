import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  makeStyles,
  useTheme
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import TabletIcon from '@material-ui/icons/Tablet';
import GamePanel from './GamePanel';
import CPUPlayer from './CPUPlayer';
import DisplayNumber from './DisplayNumber'

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  currentNumer: {
    position: 'absolute',
    left: '0',
    right: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    textAlign: 'center',
    marginTop: '10rem',
    fontSize: '4rem'
  }

}));

const GameBoard = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const numberOfPlayer = 4;

  const [currentNumber, setCurrentNumber] = useState(0);

  const data = {
    datasets: [
      {
          data: [100, 100, 100, 100],
        backgroundColor: [
          colors.indigo[500],
          colors.red[500],
          colors.orange[500],
          colors.teal[500]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Computer1', 'Computer2', 'Computer3', "Computer4"]
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: 'Computer1',
      value: "-",
      icon: LaptopMacIcon,
      color: colors.indigo[500]
    },
    {
      title: 'Computer2',
      value: "-",
      icon: TabletIcon,
      color: colors.red[600]
    },
    {
      title: 'Computer3',
      value: "-",
      icon: PhoneIcon,
      color: colors.orange[600]
    },
    {
      title: 'Computer4',
      value: "-",
      icon: PhoneIcon,
      color: colors.teal[600]
    }
  ];

  function userClap() {
    setCurrentNumber(currentNumber + 1);
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Divider />
      <CardContent>
        <Box
          height={400}
          position="relative"
        >
          <DisplayNumber
            className={classes.currentNumer}
            currentNumber={currentNumber}
          />
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              p={1}
              textAlign="center"
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                {value}

              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          p={1}
          textAlign="center"
        >
          <GamePanel
            onUserClap={userClap}
          />
        </Box>
      </CardContent>
      <CPUPlayer/>
      <CPUPlayer/>
      <CPUPlayer/>
    </Card>

  );
};

GameBoard.propTypes = {
  className: PropTypes.string
};

export default GameBoard;
