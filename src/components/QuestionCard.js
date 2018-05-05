import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    marginBottom: 15,
  },
  content: {
    height: 120,
    backgroundColor: '#FAFAFA',
    // flexbox container properties
    display: 'flex',
    alignItems: 'center',
  },
  one: {
    width: '38%',
    textAlign: 'left',
  },
  or: {
    width: '24%',
    textAlign: 'center',
  },
  two: {
    width: '38%',
    textAlign: 'right',
  },
  cta: {
    height: 50,
    textAlign: 'center',
    backgroundColor: 'primary',
    // flexbox container properties
    display: 'flex',
    justifyContent: 'center',
  },
};

class QuestionCard extends Component {
  static propTypes = {
    // from MapStateToProps
    questions: PropTypes.object.isRequired,
    // from material-ui
    classes: PropTypes.object.isRequired,
    // from QuestionFeed
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['Answered', 'Unanswered']),
  };

  state = {
    status: this.props.status,
  };

  render() {
    const { questions, classes, id } = this.props;
    const { status } = this.state;
    const optionOne = questions[id].optionOne.text;
    const optionTwo = questions[id].optionTwo.text;

    return (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography
            className={classes.one}
            variant="body1"
          >
            {optionOne}
          </Typography>
          <div className={classes.or}>
            <img
              alt="or"
              src="or.webp"
              style={{ width: 35 }}
            />
          </div>
          <Typography
            className={classes.two}
            variant="body1"
          >
            {optionTwo}
          </Typography>
        </CardContent>
        {status === 'Unanswered'
          ? <CardActions className={classes.cta}>
            <Link to={`/questions/${id}`}>
              <Typography
                variant="button"
                color="textSecondary"
              >
                Answer It
              </Typography>
            </Link>
          </CardActions>
          : <CardActions className={classes.cta}>
            <Link to={`/questions/${id}`}>
              <Typography
                variant="button"
                color="textSecondary"
              >
                Show Stats
              </Typography>
            </Link>
          </CardActions>
        }
      </Card>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questions,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(QuestionCard));