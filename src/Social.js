import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Row from "./Row";
import { NavLink, Link } from "react-router-dom";
import elAvatarMax from "./img/el-avatar-max.svg";
import iconMore from "./img/icon-more.png";

const SocialBlock = styled.section`
  width: 100%;
  background: #ffffff;
`;
const SocialTop = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  width: 100%;
  padding: 8px 0;
`;

const BigAvatar = styled.div`
  background-image: url(${elAvatarMax});
  width: 210px;
  height: 210px;
  display: inline-block;
`;

const WrapperAvatar = styled.div`
  color: red;
  width: 25%
  position: relative;
`;
const LinkAvatar = styled(NavLink)`
  position: absolute;
  bottom: -60px;
`;

const SocialList = styled.ul`
  text-align: justify;
  width: 62%;
`;

const SocialItem = styled.li`
  display: inline-block;
  margin-right: 20px;
  text-align: center;
`;
const SocialTitle = styled.div`
  line-height: 21px;
  font-size: 12px;
  text-align: center;

  color: #707e88;
`;

const SocialCounter = styled(Link)`
  line-height: 21px;
  font-size: 18px;
  text-align: center;
  padding-bottom: 8px;

  &:hover {
    color: #1da1f2;
    border-bottom: 3px solid #1da1f2;
  }
  color: #788a98;
`;

const SocialButton = styled.a`
  background: #ffffff;
  border-radius: 100px;
  padding: 8px 12px;
  line-height: 14px;
  font-size: 14px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  color: #1da1f2;
  border: 1px solid #1da1f2;
  margin-right: 20px;
  font-weight: 700;
`;

const SocialMemu = styled.div``;

const SocialLink = styled.a`
  display: inline-block;
  height: 379px;
  width: 100%;
  background-repeat: no-repeat;
  height: 16px;
  width: 4px;
  background-image: url(${iconMore});
  vertical-align: middle;
`;

function Social() {
  return (
    <SocialBlock>
      <Container>
        <Row>
          <SocialTop>
            <WrapperAvatar>
              <LinkAvatar to="#">
                <BigAvatar />
              </LinkAvatar>
            </WrapperAvatar>

            <SocialList>
              <SocialItem>
                <SocialTitle> Tweets</SocialTitle>
                <SocialCounter to="#">8,058</SocialCounter>
              </SocialItem>
              <SocialItem>
                <SocialTitle> Following</SocialTitle>
                <SocialCounter to="#"> 721 </SocialCounter>
              </SocialItem>
              <SocialItem>
                <SocialTitle> Followers </SocialTitle>
                <SocialCounter to="#">1,815 </SocialCounter>
              </SocialItem>
              <SocialItem>
                <SocialTitle> Likes</SocialTitle>
                <SocialCounter to="#">460</SocialCounter>
              </SocialItem>
              <SocialItem>
                <SocialTitle> Lists</SocialTitle>
                <SocialCounter to="#">2</SocialCounter>
              </SocialItem>
            </SocialList>
            <SocialMemu>
              <SocialButton href="#">Follow </SocialButton>
              <SocialLink href="#" />
            </SocialMemu>
          </SocialTop>
        </Row>
      </Container>
    </SocialBlock>
  );
}

export default Social;
