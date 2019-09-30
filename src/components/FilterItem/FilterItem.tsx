import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// Material UI Components
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

// Material UI Icons
import TickIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filter: {
      margin: "1em"
    },
    chipContainer: {
      display: "flex",
      flexWrap: "wrap"
    },
    chip: {
      margin: ".7em .7em 0 0"
    },
    clearButton: {
      marginTop: ".8em"
    }
  })
);

const FilterChip = ({ value }: any) => {
  const [isSelected, setIsSelected] = React.useState(false);
  const classes = useStyles();

  function toggleSelected() {
    setIsSelected(prev => !prev);
  }

  return isSelected ? (
    <Chip
      icon={<TickIcon />}
      label={value}
      className={classes.chip}
      onClick={toggleSelected}
      color="primary"
    />
  ) : (
    <Chip label={value} className={classes.chip} onClick={toggleSelected} />
  );
};

const FilterItem = ({ name, values }: any) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.filter}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <FormLabel>{name}</FormLabel>
        </Grid>
        <Grid item></Grid>
      </Grid>

      <div className={classes.chipContainer}>
        {values.map((value: string) => (
          <FilterChip key={`filter-chip-${value}`} value={`Class ${value}`} />
        ))}
        <Button className={classes.clearButton} size="small" color="primary">
          Clear
        </Button>
      </div>
    </FormControl>
  );
};

export default FilterItem;
