import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Title2 } from '../styles/typography';

const HomeTabs = ({ handleTabChange, tabState }) => (
  <Container>
    <Tab
      onClick={() => handleTabChange(0)}
      selected={tabState === 0}
    >
      Open
    </Tab>

    <Tab
      onClick={() => handleTabChange(1)}
      selected={tabState === 1}
    >
      Voted
    </Tab>
  </Container>
);

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Tab = styled(Title2)`
  border-bottom: ${(props) => (props.selected ? `0.25em solid ${props.theme.fakeAsbestos}` : '0.25em solid #FFF0')};
  border-top: 0.25em solid #FFF0;
  margin-right: 0.75em;
  padding: 0em 0.5em 0.25em;
  text-decoration: none;

  &:active {
    border-bottom: 0.25em solid ${(props) => (props.theme.fakeAsbestos)};
  }
`;

HomeTabs.propTypes = {
  // from HomePage
  tabState: PropTypes.oneOf([0, 1]).isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

export default HomeTabs;
