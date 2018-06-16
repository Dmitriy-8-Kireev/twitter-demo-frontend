import React from "react";
import styled from "styled-components";
import img from "./img/img.png";
import iconComments from "./img/icon-comments.svg";
import iconRetweet from "./img/icon-retweet.svg";
import iconLoves from "./img/icon-loves.svg";
import iconEnvelope from "./img/icon-envelope.svg";
import elAvatarMiddle from "./img/el-avatar-middle.png";
import rectangle from "./img/rectangle.png";

const Article = styled.section`
  padding-left: 16px;
  border-bottom: 1px solid #e1e8ed;

  padding-bottom: 8px;
`;
const ArticleList = styled.ul``;

const ArticleItem = styled.li`
  display: flex;
`;

const ArticleAvatar = styled.div`
  background-image: url(${elAvatarMiddle});
  max-width: 40px;
  height: 40px;
  width: 10%;
`;

const ArticleDesc = styled.article`
  margin-top: 8px;
  width: 90%;
  padding-left: 8px;
`;
const ArticleAvtor = styled.div`
  color: #292f33;
  font-size: 15px;
  margin-right: 4px;
  margin-bottom: 8px;

  font-weight: 500;
`;
const ArticleNikname = styled.div`
  color: #707e88;
  font-size: 13px;
  display: inline-block;
  margin-right: 4px;
`;
const ArticleDate = styled.div`
  color: #707e88;
  font-size: 13px;
  display: inline-block;
`;
const ArticleText = styled.div`
  color: #292f33;
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 16px;
  font-size: ${props => (props.primary ? "16px" : "25px")};
`;
const ArticleImg = styled.div`
  width: 90%;
  overflow: hidden;
`;
const ArticlePic = styled.img`
  width: 100%;
  overflow: hidden;
`;
const ArticFollow = styled.ul`
  text-align: justify;
  margin-top: 16px;
`;
const ArticFollowItem = styled.li`
  display: inline-block;
  margin-right: 60px;
`;
const ArticFollowTitle = styled.span`
  color: #667580;
  font-size: 13px;
  font-weight: 700;
  color: ${props => (props.primary ? "#e32b51" : "#667580 ")};
`;
const IconComments = styled.div`
  display: inline-block;
  vertical-align: middle;
  background-image: url(${iconComments});
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  margin-right: 8px;
`;
const IconRetweet = styled.div`
  display: inline-block;
  vertical-align: middle;
  background-image: url(${iconRetweet});
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  margin-right: 8px;
`;
const IconLoves = styled.div`
  display: inline-block;
  vertical-align: middle;
  background-image: url(${iconLoves});
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  margin-right: 8px;
`;
const IconEnvelope = styled.div`
  display: inline-block;
  vertical-align: middle;
  background-image: url(${iconEnvelope});
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  margin-right: 8px;
`;

const ArticlePost = styled.div`
  display: flex;
  margin-top: 16px;
`;

const PostImage = styled.div`
  display: inline-block;
  vertical-align: middle;
  background-image: url(${rectangle});
  width: 20%;
  min-width: 126px;
  height: 126px;
`;

const PostText = styled.div`
  width: 80%;
  color: #292f33;
  font-weight: 300;
  margin-left: 8px;
  margin-bottom: 16px;
  font-size: 16px;
`;

const PostTitle = styled.div`
  width: 80%;
  color: #292f33;
  font-weight: 700;
  margin-bottom: 8px;
  font-size: 16px;
`;

const TextColor = styled.a`
  color: #1da1f2;
`;

function Articleblock() {
  return (
    <Article>
      <ArticleList>
        <ArticleItem>
          <ArticleAvatar />
          <ArticleDesc>
            <ArticleAvtor>
              Every Interaction
              <ArticleNikname>@EveryInteract</ArticleNikname>
              <ArticleDate> • 2 Mar 2015</ArticleDate>
            </ArticleAvtor>
            <ArticleText>
              We’ve made some more resources for all you wonderful
              <TextColor href="#">#design</TextColor> folk
              <TextColor href="#">
                everyinteraction.com/resources/ #webdesign #UI
              </TextColor>
              <ArticleImg>
                <ArticlePic src={img} />
              </ArticleImg>
              <ArticFollow>
                <ArticFollowItem>
                  <IconComments />
                  <ArticFollowTitle>1</ArticFollowTitle>
                </ArticFollowItem>
                <ArticFollowItem>
                  <IconRetweet />
                  <ArticFollowTitle>4</ArticFollowTitle>
                </ArticFollowItem>
                <ArticFollowItem>
                  <IconLoves />
                  <ArticFollowTitle primary>47</ArticFollowTitle>
                </ArticFollowItem>
                <ArticFollowItem>
                  <IconEnvelope />
                  <ArticFollowTitle>1</ArticFollowTitle>
                </ArticFollowItem>
              </ArticFollow>
            </ArticleText>
          </ArticleDesc>
        </ArticleItem>

        <ArticleItem>
          <ArticleAvatar />
          <ArticleDesc>
            <ArticleAvtor>
              Every Interaction
              <ArticleNikname>@EveryInteract</ArticleNikname>
              <ArticleDate> 23h</ArticleDate>
            </ArticleAvtor>
            <ArticleText>
              Our new website concept; Taking you from… @ Every Interaction
              <TextColor href="#"> instagram.com/p/BNFGrfhBP3M/ </TextColor>
              <ArticFollow>
                <ArticFollowItem>
                  <IconComments />
                  <ArticFollowTitle>1</ArticFollowTitle>
                </ArticFollowItem>
                <ArticFollowItem>
                  <IconRetweet />
                  <ArticFollowTitle>4</ArticFollowTitle>
                </ArticFollowItem>
                <ArticFollowItem>
                  <IconLoves />
                  <ArticFollowTitle primary>47</ArticFollowTitle>
                </ArticFollowItem>
                <ArticFollowItem>
                  <IconEnvelope />
                  <ArticFollowTitle>1</ArticFollowTitle>
                </ArticFollowItem>
              </ArticFollow>
            </ArticleText>
          </ArticleDesc>
        </ArticleItem>
        <ArticleItem>
          <ArticleAvatar />
          <ArticleDesc>
            <ArticleAvtor>
              Every Interaction
              <ArticleNikname>@EveryInteract</ArticleNikname>
              <ArticleDate> 23h</ArticleDate>
            </ArticleAvtor>
            <ArticleText primary>
              Variable web fonts are coming, and will open a world of
              opportunities for weight use online
              <ArticlePost>
                <PostImage />
                <PostText>
                  <PostTitle>The Future of Web Fonts </PostTitle>
                  We love typefaces. They give our sites and applications
                  personalized feel. They convey the information and tell a
                  story. They establish information hierarchy. But they’re…
                  vilijamis.com
                </PostText>
              </ArticlePost>
              <ArticFollow>
                <ArticFollowItem>
                  <IconComments />
                  <ArticFollowTitle>1</ArticFollowTitle>
                </ArticFollowItem>
                <ArticFollowItem>
                  <IconRetweet />
                  <ArticFollowTitle>4</ArticFollowTitle>
                </ArticFollowItem>
                <ArticFollowItem>
                  <IconLoves />
                  <ArticFollowTitle primary>47</ArticFollowTitle>
                </ArticFollowItem>
                <ArticFollowItem>
                  <IconEnvelope />
                  <ArticFollowTitle>1</ArticFollowTitle>
                </ArticFollowItem>
              </ArticFollow>
            </ArticleText>
          </ArticleDesc>
        </ArticleItem>
      </ArticleList>
    </Article>
  );
}
export default Articleblock;
