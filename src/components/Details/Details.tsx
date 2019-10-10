import React from "react";
import { connect } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import _ from "lodash";
import moment from "moment";

// Constants
import { attributeDictionary } from "../../constants";

// Actions
import { clearDetails } from "./actions";

// Components
import { DetailsHeader } from "../DetailsHeader";

// Material UI Components
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    details: {
      backgroundColor: "#fafafa",
      padding: theme.spacing(0, 3, 3, 3)
    },
    contentAppBar: {
      backgroundColor: "#fafafa",
      padding: theme.spacing(11, 0, 1, 0),
      boxShadow: "none"
    }
  })
);

const Details = ({ river, clearDetails }: any) => {
  const classes = useStyles();

  const attributes = _(_.merge(river.key_facts_char, river.key_facts_num))
    .map((value: any, key: string) => ({
      label: attributeDictionary[key],
      value
    }))
    .map((item: any) => {
      if (_.isObject(item.value)) {
        const val = _.isArray(item.value.value)
          ? `${item.value.value[0]} - ${item.value.value[1]}`
          : item.value.value;
        return {
          ...item,
          value: `${val} ${item.value.unit}`
        };
      }
      return item;
    })
    .value();

  return (
    <div className={classes.details}>
      <DetailsHeader
        title={river.section_name}
        river_name={river.river_name}
        region={river.region}
        clearDetails={clearDetails}
        attr={attributes}
      />
      <Typography
        paragraph
        color="textPrimary"
        dangerouslySetInnerHTML={{ __html: river.description }}
      />
      <Typography color="textSecondary">
        Last updated on {moment(river.updatedAt).format("DD/MM/YY, h:MMa")}
      </Typography>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  river: state.details.river
});

export default connect(
  mapStateToProps,
  { clearDetails }
)(Details);
