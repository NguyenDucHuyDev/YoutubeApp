import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/image/logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicTwoToneIcon from "@mui/icons-material/LibraryMusicTwoTone";
import SportsEsportsTwoToneIcon from "@mui/icons-material/SportsEsportsTwoTone";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import ShortTextIcon from "@mui/icons-material/ShortText";
import EmojiEventsTwoToneIcon from "@mui/icons-material/EmojiEventsTwoTone";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FeedTwoToneIcon from "@mui/icons-material/FeedTwoTone";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LiveTvTwoToneIcon from "@mui/icons-material/LiveTvTwoTone";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import MusicVideoRoundedIcon from "@mui/icons-material/MusicVideoRounded";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CastIcon from "@mui/icons-material/Cast";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import { useSelector } from "react-redux";
import { allInfoApi } from "../../redux/selectors";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import SettingsInputAntennaOutlinedIcon from "@mui/icons-material/SettingsInputAntennaOutlined";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  grid-area: menu;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  overflow: hidden;
  z-index: 99;
`;

const Wrapper = styled.div`
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 8px;

  & a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: bold;
  height: 38px;
  padding: 0px 20px;
`;
const Scroll = styled.div`
  overflow: auto;
  height: 100%;
  max-height: 100%;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.bgScroll};
      border-radius: 900px;
    }
  }
`;
const Img = styled.img`
  height: 100%;
`;
const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 0px 20px;
  height: 40px;
  font-size: 15px;
  background-color: inherit;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Login = styled.div`
  display: ${(props) => (props.type === "hidden" ? "none" : "block")};
  padding: 0px 20px;
`;
const Button = styled.button`
  padding: 8px 15px;
  background-color: transparent;
  border: 1px solid #065fd4;
  color: #065fd4;
  border-radius: 1px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: ${(theme) => theme.textSoft};
  margin-bottom: 10px;
  padding: 0px 20px;
`;
const P = styled.p`
  font-size: 13px;
`;

const FooterMenu = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const FooterMain = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;
const Time = styled.div`
  font-size: 13px;
  opacity: 0.7;
  padding-bottom: 20px;
`;

const Menu = () => {
  console.log("Menu");
  const apiUserInfo = useSelector(allInfoApi);
  const navigate = useNavigate()

  const handleCheckLogin = (e) => {
    if(!apiUserInfo) return navigate("/notLogin")
    return "/discover"
  }

  return (
    <Container>
      <Wrapper>
        <NavLink to="/" style={({ isActive }) => (isActive ? {} : undefined)}>
          <Logo>
            <StorageOutlinedIcon />
            <Img src={logo} />
          </Logo>
        </NavLink>
        <Scroll>
          
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? { backgroundColor: "#3360B3"}
              : undefined
            }
          >
          <Items><HomeOutlinedIcon />Trang ch???</Items>
          </NavLink>
          
          <NavLink
            to={apiUserInfo ? "discover" : "notLogin1"}            
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: "#3360B3",
                  }
                : undefined
            }
          >
          <Items onClick={handleCheckLogin}><ExploreOutlinedIcon />Kh??m ph??</Items>
          </NavLink>

          <NavLink
            to={apiUserInfo ? "shorts" : "notLogin2"}            
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: "#3360B3",
                  }
                : undefined
            }
          >
            <Items ><ShortTextIcon />Shorts</Items>
          </NavLink>

          <NavLink
            to={apiUserInfo ? "sub" : "notLogin3"}            
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: "#3360B3",
                  }
                : undefined
            }
          >
            <Items><SubscriptionsOutlinedIcon />K??nh ????ng k??</Items>
          </NavLink>
          <Hr />
          <NavLink
            to={apiUserInfo ? "lib" : "notLogin4"}            
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: "#3360B3",
                  }
                : undefined
            }
          >
            <Items><VideoLibraryOutlinedIcon />Th?? vi???n</Items>
          </NavLink>
          
          <NavLink
            to={apiUserInfo ? "history" : "notLogin5"}            
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: "#3360B3",
                  }
                : undefined
            }
          >
          <Items><HistoryIcon />Video ???? xem</Items>
          </NavLink>

          {apiUserInfo === null ? (
          <>
            <Hr />
            <Login>
                H??y ????ng nh???p ????? th??ch video, b??nh lu???n v?? ????ng k?? k??nh.
                <Link to="/signIn" style={{ textDecoration: "none" }}>
                  <Button>
                    <AccountCircleOutlinedIcon />
                    ????NG NH???P
                  </Button>
                </Link>
              </Login>
            </>
          ) : (
            <>
            <Items onClick={handleCheckLogin}><SlideshowOutlinedIcon />Video c???a b???n</Items>

            <Items onClick={handleCheckLogin}><AlarmOutlinedIcon />Xem sau</Items>
            
            <Items onClick={handleCheckLogin}><ThumbUpOutlinedIcon />Video ???? th??ch</Items>
              
            <Items onClick={handleCheckLogin}><SettingsInputAntennaOutlinedIcon />T???ng h???p</Items>
            </>
          )}
          <Hr />
          <Title>K??NH ????NG K??</Title>
          
          <Items onClick={handleCheckLogin}><LibraryMusicTwoToneIcon />??m nh???c</Items>
          
          <Items onClick={handleCheckLogin}><EmojiEventsTwoToneIcon />Th??? thao</Items>

          <Items onClick={handleCheckLogin}><SportsEsportsTwoToneIcon />Tr?? ch??i</Items>

          <Items onClick={handleCheckLogin}><FeedTwoToneIcon />Tin T???c</Items>
          
          <Items onClick={handleCheckLogin}><LiveTvTwoToneIcon />Video 360??</Items>
          <Hr />
          <Title>KH??M PH??</Title>
          
          <Items onClick={handleCheckLogin}><LibraryMusicOutlinedIcon />Tr?? ch??i</Items>
          
          <Items onClick={handleCheckLogin}><EmojiEventsOutlinedIcon />Th??? Thao??</Items>
          <Hr />
          <Items onClick={handleCheckLogin}><ControlPointOutlinedIcon />Xem qua c??c k??nh</Items>
          <Hr />
          <Title>D???CH V??? KH??C C???A YOUTUBE</Title>
          <Items onClick={handleCheckLogin}><MusicVideoRoundedIcon />Youtube Music</Items>
          
          <Items onClick={handleCheckLogin}><CastIcon />Youtube Kids</Items>
          
          <Items onClick={handleCheckLogin}><OndemandVideoIcon />Youtube TV</Items>
          <Hr />
          <Items><SettingsIcon />C??i ?????t</Items>
          
          <Items><FlagIcon />L???ch s??? b??o c??o</Items>
          
          <Items><HelpIcon />Tr??? gi??p</Items>
          
          <Items><FeedbackIcon />G???i ph???n h???i</Items>
          <Hr />

          <FooterMenu>
            <FooterMain>
              <P>Gi???i thi???u</P>
              <P>B??o ch??</P>
              <P>B???n quy???n</P>
              <P>Li??n h??? v???i ch??ng t??i</P>
              <P>Ng?????i s??ng t???o</P>
              <P>Qu???ng c??o</P>
              <P>Nh?? ph??t tri???n</P>
            </FooterMain>
            <FooterMain>
              <P>??i???u kho???n</P>
              <P>Quy???n ri??ng t??</P>
              <P>Ch??nh s??ch v?? an to??n</P>
              <P>Li??n h??? v???i ch??ng t??i</P>
              <P>C??ch Youtube ho???t ?????ng</P>
              <P>Th??? c??c t??nh n??ng m???i</P>
            </FooterMain>
            <Time>?? 2022 Google LLC</Time>
          </FooterMenu>
        </Scroll>
      </Wrapper>
    </Container>
  );
};

export default Menu;
