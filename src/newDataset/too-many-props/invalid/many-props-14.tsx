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
  background: ${p => p.bg};
  color: ${p => p.color};
  padding: ${p => p.padding};
  margin: ${p => p.margin};
  border: ${p => p.border};
  border-radius: ${p => p.borderRadius};
  box-shadow: ${p => p.shadow};
  font-size: ${p => p.fontSize};
  font-weight: ${p => p.fontWeight};
  text-align: ${p => p.textAlign};
  width: ${p => p.width};
  height: ${p => p.height};
`;

export const ManyProps14 = (props: Props) => {
  return <StyledDiv {...props}>Content</StyledDiv>;
};