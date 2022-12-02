import React from "react";
import {
  Typography,
  Paper,
  makeStyles,
  createStyles,
  Box,
} from "@material-ui/core";

import { InsurancePackage } from "../models/InsurancePackage";
import { formatCurrency } from "../utils/formatCurrency";

export interface PackageCardProps {
  value: InsurancePackage;
  isSelected: boolean;
  onSelected: (value: InsurancePackage) => void;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      flex: "1 1 auto",
      "&:hover": {
        cursor: "pointer",
      },
      "&.selected": {
        outline: `3px solid ${theme.palette.primary.main}`,
      },
    },
    name: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.default,
    },
    desc: {
      padding: theme.spacing(2),
      flex: "1 1 auto",
    },
    priceContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: theme.spacing(1),
      padding: theme.spacing(1),
    },
    price: {
      color: theme.palette.primary.dark,
    },
  })
);

export const PackageCard = ({
  value,
  isSelected,
  onSelected,
}: PackageCardProps): React.ReactElement => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.root + (isSelected ? " selected" : "")}
      onClick={(e) => onSelected(value)}
      elevation={isSelected ? 7 : 2}
    >
      <Typography
        component="header"
        variant="h5"
        className={classes.name}
        align="center"
      >
        {value.insurerName}
      </Typography>

      <Typography component="main" variant="body1" className={classes.desc}>
        {value.description}
      </Typography>

      <Box className={classes.priceContainer}>
        <Typography component="span" variant="h3" className={classes.price}>
          {formatCurrency(value.monthlyPrice)}
        </Typography>
        <Typography component="span" variant="body1">
          / month
        </Typography>
      </Box>
    </Paper>
  );
};
