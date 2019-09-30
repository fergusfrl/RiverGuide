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

const ListSubRow = ({ rivers }: any) => {
  const classes = useStyles();
  const riverSet = Array.from(
    new Set(rivers.map((river: any) => river.river_name)).values()
  ).sort();

  return (
    <>
      {riverSet.map((river: any, index: number) => (
        <div key={`${river}-${index}`}>
          <ListSubheader>{river}</ListSubheader>
          {rivers
            .filter((riverSection: any) => riverSection.river_name === river)
            .map((riverSection: any) => (
              <ListItem
                key={`${riverSection.section_name}-${index}`}
                dense
                button
                className={classes.nested}
              >
                <ListItemText primary={riverSection.section_name} />
                <ListItemIcon>
                  {/* <Chip variant="outlined" label="12.6m/s" /> */}
                </ListItemIcon>
              </ListItem>
            ))
            .sort((a: any, b: any) => (a.river_name > b.river_name ? 1 : -1))}
        </div>
      ))}
    </>
  );
};

export default ListSubRow;
