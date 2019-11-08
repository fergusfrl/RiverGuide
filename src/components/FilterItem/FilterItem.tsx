import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

// Material UI Components
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

// Material UI Icons
import TickIcon from "@material-ui/icons/Check";

const useStyles = makeStyles(() =>
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

const FilterChip = ({ display, value, isSelected, toggleItem }: any) => {
  const classes = useStyles();

  function handleClick(value: number) {
    toggleItem(value);
  }

  return isSelected ? (
    <Chip
      icon={<TickIcon />}
      label={display}
      className={classes.chip}
      onClick={() => handleClick(value)}
      color="primary"
    />
  ) : (
    <Chip
      label={display}
      className={classes.chip}
      onClick={() => handleClick(value)}
    />
  );
};

const FilterItem = ({
  name,
  values,
  activeValues,
  clearFilters,
  toggleItem
}: any) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.filter}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <FormLabel>{name}</FormLabel>
        </Grid>
      </Grid>

      <div className={classes.chipContainer}>
        {values.map((value: any, index: number) => (
          <FilterChip
            key={`filter-chip-${name}-${index}`}
            display={value.display}
            value={value.value}
            isSelected={activeValues.includes(value.value)}
            toggleItem={toggleItem}
          />
        ))}
        <Button
          className={classes.clearButton}
          onClick={() => clearFilters(name)}
          size="small"
          color="primary"
        >
          Clear
        </Button>
      </div>
    </FormControl>
  );
};

export default FilterItem;
