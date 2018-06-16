import React from "react";
import Container from "./Container";
import Row from "./Row";
import SidebarAside from "./Aside";
import MainContent from "./MainContent";
import styled from "styled-components";

const Right = styled.div`
  margin-top: 40px;
  width: 25%;
  height: 100%;
`;
function ContentSection() {
  return (
    <Container>
      <Row>
        <SidebarAside />
        <MainContent> </MainContent>
        <Right />
      </Row>
    </Container>
  );
}
export default ContentSection;
