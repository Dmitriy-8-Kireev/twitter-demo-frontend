import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import iconPinned from "./img/icon-pinned.svg";
import Articleblock from "./Article";

const ContentBlock = styled.main`
  background-color: #ffffff;
  width: 50%;
  margin-top: 8px;
  margin-left: 20px;
`;

const ContentNav = styled.ul`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e1e8ed;
  padding-left: 16px;
  margin-bottom: 8px;
`;
const ContentNavItem = styled.li`
  display: inline-block;
  margin-right: 20px;
`;
const ContentNavLink = styled.div`
  color: #1da1f2;
  cursor: pointer;

  font-size: 18px;
  font-weight: 700;

  line-height: 21px;

  &:hover {
    color: #000000;
  }
`;
const Pinned = styled.div`
  margin-left: 48px;
  margin-bottom: 8px;
`;
const PinnedIcon = styled.div`
  background-image: url(${iconPinned});
  width: 11px;
  height: 12px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 16px;
`;
const PinnedTitle = styled.div`
  color: #707e88;
  font-size: 12px;
  font-weight: 500;
  display: inline-block;
  vertical-align: middle;
`;
function MainContent() {
  return (
    <ContentBlock>
      <ContentNav>
        <ContentNavItem>
          <NavLink to="#">
            <ContentNavLink>Tweets</ContentNavLink>
          </NavLink>
        </ContentNavItem>
        <ContentNavItem>
          <NavLink to="#">
            <ContentNavLink>Tweets & replies</ContentNavLink>
          </NavLink>
        </ContentNavItem>
        <ContentNavItem>
          <NavLink to="#">
            <ContentNavLink>Media</ContentNavLink>
          </NavLink>
        </ContentNavItem>
      </ContentNav>
      <Pinned>
        <NavLink to="#">
          <PinnedIcon />
          <PinnedTitle>Moments</PinnedTitle>
        </NavLink>
      </Pinned>
      <Articleblock />
    </ContentBlock>
  );
}
export default MainContent;
