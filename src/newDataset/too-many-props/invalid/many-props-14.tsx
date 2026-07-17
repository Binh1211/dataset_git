import React from 'react';
import styled from 'styled-components';

interface Props {
  bg: string;
  color: string;
  padding: string;
  margin: string;
  border: string;
  borderRadius: string;
  shadow: string;
  fontSize: string;
  fontWeight: string;
  textAlign: string;
  width: string;
  height: string;
}

const StyledDiv = styled.div<Props>`
  background: ${ (p: Props) => p.bg };
  color: ${ (p: Props) => p.color };
  padding: ${ (p: Props) => p.padding };
  margin: ${ (p: Props) => p.margin };
  border: ${ (p: Props) => p.border };
  border-radius: ${ (p: Props) => p.borderRadius };
  box-shadow: ${ (p: Props) => p.shadow };
  font-size: ${ (p: Props) => p.fontSize };
  font-weight: ${ (p: Props) => p.fontWeight };
  text-align: ${ (p: Props) => p.textAlign };
  width: ${ (p: Props) => p.width };
  height: ${ (p: Props) => p.height };
`;

export const ManyProps14 = (props: Props) => {
  return <StyledDiv {...props}>Content</StyledDiv>;
};

export const Usage14 = () => (
  <ManyProps14
    bg="white"
    color="black"
    padding="10px"
    margin="5px"
    border="1px solid grey"
    borderRadius="4px"
    shadow="0 0 5px rgba(0,0,0,0.1)"
    fontSize="16px"
    fontWeight="normal"
    textAlign="center"
    width="100px"
    height="50px"
  />
);