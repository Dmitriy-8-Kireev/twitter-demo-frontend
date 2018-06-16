import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import tick from "./img/tick.png";
import iconJoined from "./img/icon-joined.svg";
import iconLink from "./img/icon-link.svg";
import iconLocation from "./img/icon-location.svg";
import Button from "./Button";

const Sidebar = styled.aside`
  margin-top: 40px;
  width: 25%;
`;
const AsideTitle = styled.h2`
  margin: 0;
  display: inline-block;
  margin-right: 8px;
`;
const AsideIcon = styled(Link)`
  background-image: url(${tick});
  width: 18px;
  height: 18px;
  display: inline-block;
  vertical-align: middle;
`;
const AsideInteraction = styled.div``;
const Follow = styled.div`
  font-size: 12px;
  letter-spacing: 0.00846154px;
  margin-top: 8px;

  color: #697787;
`;

const Nik = styled.a`
  margin-right: 8px;
`;
const FollowLink = styled.a``;
const Text = styled.div`
  font-size: 14px;
  margin-top: 20px;
  color: #14171a;
  margin-bottom: 16px;
`;

const Nav = styled.ul`
  text-align: justify;
`;

const NavItem = styled.li`
  margin-bottom: 8px;
`;

const NavTitle = styled.span`
  font-size: 14px;
  letter-spacing: 0.0107692px;

  color: #657786;
  display: inline-block;
  margin-left: 8px;
`;
const NavIconLocation = styled.div`
  display: inline-block;
  vertical-align: middle;
  background-image: url(${iconLocation});
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
`;
const NavIconJoined = styled.div`
  display: inline-block;
  vertical-align: middle;
  background-image: url(${iconJoined});
  width: 17px;
  height: 18px;
  background-repeat: no-repeat;
`;
const NavIconMail = styled.div`
  display: inline-block;
  vertical-align: middle;
  background-image: url(${iconLink});
  width: 15px;
  height: 16px;
  background-repeat: no-repeat;
`;
const ButtonBlock = styled.div``;

function SidebarAside() {
  return (
    <Sidebar>
      <AsideInteraction>
        <AsideTitle>Every Interaction</AsideTitle>
        <AsideIcon to="#" />
      </AsideInteraction>
      <Follow>
        <Nik>@EveryInteract</Nik>
        <FollowLink>Follow you</FollowLink>
      </Follow>
      <Text>
        UX Design studio focussed problem solving creativity. Design to us is
        how can we make things *work* amazing.
      </Text>
      <Nav>
        <NavItem>
          <NavLink to="#">
            <NavIconLocation />
            <NavTitle>London, UK</NavTitle>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">
            <NavIconMail />
            <NavTitle>everyinteraction.com</NavTitle>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">
            <NavIconJoined />
            <NavTitle>Joined May 2008 </NavTitle>
          </NavLink>
        </NavItem>
      </Nav>
      <ButtonBlock>
        <NavLink to="#">
          <Button primary>Tweet to</Button>
        </NavLink>
        <NavLink to="#">
          <Button primary>Message</Button>
        </NavLink>
      </ButtonBlock>
    </Sidebar>
  );
}
export default SidebarAside;
