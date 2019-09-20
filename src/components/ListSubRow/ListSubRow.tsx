import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// Material UI Components
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(6)
    }
  })
);

const ListSubRow = ({ values }: any) => {
  const classes = useStyles();
  return (
    <>
      {values.map((item: any, index: number) => (
        <div key={`${item.name}-${index}`}>
          <ListSubheader>{item.name}</ListSubheader>
          {item.value.map((row: string, index: number) => (
            <ListItem
              key={`${row}-${index}`}
              dense
              button
              className={classes.nested}
            >
              <ListItemText primary={row} />
              <ListItemIcon>
                <Chip variant="outlined" label="12.6m/s" />
              </ListItemIcon>
            </ListItem>
          ))}
        </div>
      ))}
    </>
  );
};

export default ListSubRow;
