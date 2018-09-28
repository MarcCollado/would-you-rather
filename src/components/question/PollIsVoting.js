import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CardButton from '../CardButton';
import { handleRegisterVote } from '../../actions/questions';

class PollIsVoting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toDetails: false };
  }

  static propTypes = {
    // from connect
    dispatch: PropTypes.func.isRequired,
    // from Question
    id: PropTypes.string.isRequired,
  };

  handleOption = (e, option) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const userVote = { id, option };
    dispatch(handleRegisterVote(userVote));
    setTimeout(() => this.setState({
      toDetails: true,
    }), 500);
  }

  render() {
    const { id } = this.props;
    const { toDetails } = this.state;

    if (toDetails === true) {
      return <Redirect to={`/questions/${id}/details`} />;
    }

    return (
      <Container>
        <CardButton
          onClick={(e) => this.handleOption(e, 'optionOne')}
        >
          {`Vote Option One`}
        </CardButton>
        <CardButton
          onClick={(e) => this.handleOption(e, 'optionTwo')}
        >
          {`Vote Option Two`}
        </CardButton>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default connect()(PollIsVoting);
