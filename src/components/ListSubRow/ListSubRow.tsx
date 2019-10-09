import React from "react";
import { connect } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import uniq from "lodash/uniq";

// actions
import { setDetails } from "../Details/actions";

// Material UI Components
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: { paddingLeft: theme.spacing(6) }
  })
);

const ListSubRow = ({ rivers, flow, setDetails }: any) => {
  const classes = useStyles();
  const riverSet = uniq(rivers.map((river: any) => river.river_name)).sort();

  return (
    <>
      {riverSet.map((river: any, index: number) => (
        <div key={`${river}-${index}`}>
          <ListSubheader>{river}</ListSubheader>
          {rivers
            .filter((riverSection: any) => riverSection.river_name === river)
            .sort((a: any, b: any) => (a.river_name > b.river_name ? 1 : -1))
            .map((riverSection: any) => {
              const flowSite = flow.find(
                (site: any) =>
                  site.id.toLowerCase() === riverSection.gauge_id.toLowerCase()
              );
              return (
                <ListItem
                  key={`${riverSection.section_name}-${index}`}
                  onClick={() => setDetails(riverSection)}
                  dense
                  button
                  className={classes.nested}
                >
                  <ListItemText primary={riverSection.section_name} />
                  {flowSite && (
                    <ListItemIcon>
                      <Chip
                        variant="outlined"
                        label={flowSite && flowSite.flow + " m³/s"}
                      />
                    </ListItemIcon>
                  )}
                </ListItem>
              );
            })}
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  flow: state.rivers.telemeteryData.map((tele: any) => {
    const flow = tele.observables.find(
      (ob: any) => ob.type === "flow" && ob.units === "cumecs"
    );
    return {
      id: tele.id,
      flow: flow && flow.latest_value.toFixed(1)
    };
  })
});

export default connect(
  mapStateToProps,
  { setDetails }
)(ListSubRow);
