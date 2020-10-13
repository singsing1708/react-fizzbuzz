import React from 'react';
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


const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const GameBoard = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

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
      title: 'Computer1',
      value: "-",
      icon: TabletIcon,
      color: colors.red[600]
    },
    {
      title: 'Computer1',
      value: "-",
      icon: PhoneIcon,
      color: colors.orange[600]
    },
    {
      title: 'Computer1',
      value: "-",
      icon: PhoneIcon,
      color: colors.teal[600]
    }
  ];

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
          <GamePanel/>
        </Box>
      </CardContent>
    </Card>
  );
};

GameBoard.propTypes = {
  className: PropTypes.string
};

export default GameBoard;
