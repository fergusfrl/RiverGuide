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

const ListSubRow = ({ rivers, runs }: any) => {
  const classes = useStyles();
  return (
    <>
      {rivers.map((river: any, index: number) => (
        <div key={`${river.name}-${index}`}>
          <ListSubheader>{river.name}</ListSubheader>

          {runs
            .filter((run: any) => run.riverId === river.id)
            .map((run: any, index: number) => (
              <ListItem
                key={`${run.name}-${index}`}
                dense
                button
                className={classes.nested}
              >
                {" "}
                <ListItemText primary={run.name} />
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
