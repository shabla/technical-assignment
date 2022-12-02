import React, { useState } from "react";
import {
  TextField,
  makeStyles,
  createStyles,
  Button,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@material-ui/core";

export interface PackageBuyFormProps {
  packageId?: number;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
    },
  })
);

export const PackageBuyForm = ({
  packageId,
}: PackageBuyFormProps): React.ReactElement => {
  const classes = useStyles();
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number>();
  const [gender, setGender] = useState<string>("");

  // If the app would contain more forms, or more complicated forms, it might be worth it using a form management
  // library (ie. formik) and/or a data validation library (ie. validatejs)
  const isFormValid = (): boolean => {
    return (
      email.length > 0 && age !== undefined && !isNaN(age) && gender.length > 0
    );
  };

  //
  return (
    <form
      className={classes.root}
      autoComplete="off"
      action="http://www.example.com"
    >
      {/* Include the selected package id in the form fields as an hidden value. Could include more or different values
      depending on the destination. */}
      <input type="hidden" name="packageId" value={packageId} />

      <Grid container>
        <Grid item md={3} />
        <Grid item container spacing={2} direction="column" md={6}>
          <Grid item>
            <Typography component="h2" variant="h4">
              Purchase Package
            </Typography>
          </Grid>

          <Grid item>
            <TextField
              name="email"
              type="email"
              variant="outlined"
              label="E-mail"
              fullWidth
              required
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </Grid>

          <Grid container item direction="row" spacing={2}>
            <Grid item>
              <TextField
                name="age"
                type="number"
                variant="outlined"
                label="Age"
                fullWidth
                required
                inputProps={{ min: 1, max: 120 }}
                onChange={(e) => setAge(parseInt(e.currentTarget.value, 10))}
              />
            </Grid>

            <Grid item>
              <FormControl component="fieldset" required>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.currentTarget.value)}
                  row
                >
                  <FormControlLabel
                    value="female"
                    label="Female"
                    control={<Radio />}
                  />
                  <FormControlLabel
                    value="male"
                    label="Male"
                    control={<Radio />}
                  />
                  <FormControlLabel
                    value="other"
                    label="Other"
                    control={<Radio />}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid item>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disableElevation
              disabled={!isFormValid()}
              fullWidth
              size="large"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
        <Grid item md={3} />
      </Grid>
    </form>
  );
};
