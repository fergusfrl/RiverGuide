import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// Constants
import { drawerWidth, testData } from "../../constants";

// Components
import { ListHeader } from "../ListHeader";
import { ListRow } from "../ListRow";

// Material UI Components
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    drawerPaper: {
      width: drawerWidth,
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    }
  })
);

const List = () => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <ListHeader />
      {Object.keys(testData).map((item, index) => (
        <ListRow key={`list-row-${index}`} rowTitle={item} />
      ))}
    </Drawer>
  );
};

export default List;
