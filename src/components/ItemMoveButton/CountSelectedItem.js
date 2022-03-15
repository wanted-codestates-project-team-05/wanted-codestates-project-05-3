import React from 'react';
import styled from 'styled-components';

const CountSelectedItem = ({ selectedItemsLength, allCount }) => {
  return (
    <Wrap>
      <Text>
        {selectedItemsLength}/{allCount}
      </Text>
    </Wrap>
  );
};

export default CountSelectedItem;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  padding: 5px 0px;
  border-top: 1px solid lightgray;
`;

const Text = styled.p``;
