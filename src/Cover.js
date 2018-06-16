import React from "react";
import styled from "styled-components";
import bit from "./img/bit.jpg";

const CoverImage = styled.div`
  height: 379px;
  width: 100%;
  background-image: url(${bit});
  background-repeat: no-repeat;
  background-size: cover;
`;

function Cover() {
  return <CoverImage />;
}

export default Cover;
