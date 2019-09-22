import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

// Components
import { ListSubRow } from "../ListSubRow";

// Material UI Compoennts
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";

interface ListRowPropsI {
  rowTitle: string;
  rivers: any[];
  runs: any[];
}

const useStyles = makeStyles(() =>
  createStyles({
    count: {
      textAlign: "right",
      marginRight: "-2em"
    }
  })
);

const ListRow = ({ rowTitle, rivers, runs }: ListRowPropsI) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function toggleOpen() {
    setOpen(prev => !prev);
  }

  return (
    <div>
      <ListItem button onClick={toggleOpen}>
        <ListItemText
          primary={
            <Typography color={open ? "primary" : "textPrimary"}>
              {rowTitle}
            </Typography>
          }
        />
        <ListItemIcon className={classes.count}>
          <Typography color={open ? "primary" : "textPrimary"}>
            {runs.length}
          </Typography>
        </ListItemIcon>
      </ListItem>
      <Collapse in={open}>
        <List>
          <ListSubRow rivers={rivers} runs={runs} />
        </List>
      </Collapse>
      <Divider />
    </div>
  );
};

export default ListRow;
