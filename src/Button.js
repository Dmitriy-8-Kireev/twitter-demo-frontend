import React from "react";

import styled from "styled-components";
const Button = styled.div`
  background: ${props => (props.primary ? " #1da1f2" : "#ffffff")};
  border-radius: 100px;
  padding: 8px 12px;
  line-height: 14px;
  font-size: 14px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  color: ${props => (props.primary ? "#ffffff" : " #1da1f2")};
  margin-left: 4px;

  fontstyle: Bold;
`;
export default Button;
