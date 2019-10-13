import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// Components
import { HistoricalFlow } from "../HistoricalFlow";

// Material UI Components
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      margin: theme.spacing(2, 1)
    },
    value: {
      fontWeight: 100
    }
  })
);

const FlowCard = ({
  currentFlow,
  unit,
  name,
  source,
  lastUpdated,
  isLoading
}: any) => {
  const classes = useStyles();
  const [expand, setExpand] = React.useState(false);

  function toggleExpand() {
    setExpand(prev => !prev);
  }

  function renderContent() {
    return (
      <>
        <CardContent>
          <Grid container justify="flex-start" spacing={1}>
            <Grid item>
              <Typography className={classes.value} variant="h4">
                {currentFlow}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.value} variant="h6">
                {unit}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-between">
            <Grid item>
              <Typography color="textSecondary">{`${name}, ${source}`}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" color="textSecondary">
                Last Updated: {lastUpdated}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Collapse in={expand}>
          <CardContent>
            <HistoricalFlow />
          </CardContent>
        </Collapse>
        <Divider />
        <CardActions>
          <Button size="small" color="primary" onClick={toggleExpand}>
            {expand ? "Collapse" : "Expand"}
          </Button>
        </CardActions>
      </>
    );
  }

  return (
    <Card className={classes.card}>
      {isLoading ? <CardContent>loading</CardContent> : renderContent()}
    </Card>
  );
};

export default FlowCard;
