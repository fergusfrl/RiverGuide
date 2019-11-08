import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

// Material UI Components
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() =>
  createStyles({
    filter: {
      margin: "1em"
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    clearButton: {
      marginTop: ".8em"
    }
  })
);

const FilterRange = ({ name }: any) => {
  const classes = useStyles();
  const [values, setValues] = React.useState([1, 12]);

  const handleChange = (event: any, newValue: any) => {
    setValues(newValue);
  };

  const formatSliderValue = (value: any) => `${value}h`;

  return (
    <FormControl className={classes.filter}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <FormLabel>{name}</FormLabel>
        </Grid>
      </Grid>
      <Slider
        value={values}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={formatSliderValue}
        min={1}
        max={12}
      />
      {/* <Button
        className={classes.clearButton}
        onClick={() => console.log("test")}
        size="small"
        color="primary"
      >
        Reset
      </Button> */}
    </FormControl>
  );
};

export default FilterRange;
