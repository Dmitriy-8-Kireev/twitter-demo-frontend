import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import iconHome from "./img/icon-home.svg";
import iconMoments from "./img/icon-moments.svg";
import iconHotifications from "./img/icon-notifications.svg";
import iconMessages from "./img/icon-messages.svg";
import iconTwitterLogo from "./img/icon-twitter-logo.svg";
import elAvatarMin from "./img/el-avatar-min.png";
import iconMagnifier from "./img/icon-magnifier.svg";
import Container from "./Container";
import Row from "./Row";
import Button from "./Button";

const Header = styled.header`
  background: #ffffff;
`;

const HeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  width: 100%;
  padding: 8px 0;
`;

const Nav = styled.ul`
  text-align: justify;
`;

const NavItem = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

const NavIconHome = styled.div`
  display: inline-block;
  vertical-align: middle;
  background-image: url(${iconHome});
  width: 20px;
  height: 19px;
`;

const NavIconMoments = styled.div`
  display: inline-block;
  vertical-align: middle;
  background-image: url(${iconMoments});
  width: 13px;
  height: 20px;
  re
`;
const NavIconHotif = styled.div`
  display: inline-block;
  vertical-align: middle;
  background-image: url(${iconHotifications});
  width: 17px;
  height: 18px;
`;
const NavIconMessages = styled.div`
  display: inline-block;
  vertical-align: middle;
  background-image: url(${iconMessages});
  width: 17px;
  height: 14px;
`;
const NavTitle = styled.span`
  line-height: normal;
  font-size: 13px;
  color: #667580;
  display: inline-block;
  margin-left: 8px;
`;
const Icon = styled.div`
  background-image: url(${iconTwitterLogo});
  width: 21px;
  height: 17px;
  display: inline-block;
`;

const HeaderMenu = styled.div``;

const Avatar = styled.div`
  background-image: url(${elAvatarMin});
  width: 26px;
  height: 26px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 16px;
`;

const Search = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 16px;
`;
const SearchForm = styled.form``;
const SearchInput = styled.input`
  background: #f5f8fa;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
  border-radius: 100px;
  width: 100%;
  padding: 8px 10px;
`;
const SearchSubmit = styled.input`
  background: url(${iconMagnifier});
  width: 16px;
  height: 16px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 12px;
`;

function Head() {
  return (
    <Header>
      <Container>
        <Row>
          <HeaderTop>
            <Nav>
              <NavItem>
                <NavLink to="#">
                  <NavIconHome />
                  <NavTitle>Home</NavTitle>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">
                  <NavIconMoments />
                  <NavTitle>Moments</NavTitle>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">
                  <NavIconHotif />
                  <NavTitle>Notifications</NavTitle>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">
                  <NavIconMessages />
                  <NavTitle>Messages</NavTitle>
                </NavLink>
              </NavItem>
            </Nav>

            <NavLink to="#">
              <Icon />
            </NavLink>

            <HeaderMenu>
              <Search>
                <SearchForm>
                  <SearchInput type="text" placeholder=" Search Twitter" />
                  <SearchSubmit type="submit" value="" />
                </SearchForm>
              </Search>
              <NavLink to="#">
                <Avatar />
              </NavLink>
              <NavLink to="#">
                <Button primary>Tweet</Button>
              </NavLink>
            </HeaderMenu>
          </HeaderTop>
        </Row>
      </Container>
    </Header>
  );
}

export default Head;
