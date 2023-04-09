import React from "react";
import styled from "styled-components";
import { Switch, Dropdown, Space, Badge } from "antd";
import NotificationsIcon from '@mui/icons-material/Notifications';


const Component = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding:0rem 10rem;
  padding-bottom: 0.2rem;
  background-color: transparent;  
  overflow: hidden;
  background-color: #FF7426;
`;
const Logo = styled.div`
  font-family: 'roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  color: #fff;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 2em;
  color: #fff;
`
const Home = styled.div`
  font-size: 1rem;
  padding: 1rem;
`
const ContactUs = styled.div`
  font-size: 1rem;
  padding: 1rem;
`
const AboutUS = styled.div`
  font-size: 1rem;
  padding: 1em;

`;

const ProfileIcon = styled.div`
    
`

const LeftComponent = styled.div``;

const LogoContainer = styled.div``;


const RightComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;


const Navbar2 = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
    //   icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
  return (
    <Component>
      <LeftComponent>
        <LogoContainer>
          <Logo>WM</Logo>
        </LogoContainer>
        
      </LeftComponent>
      <RightComponent>
          <Nav>
            <Home onClick={()=>{}}>Home</Home>
            <AboutUS>About us</AboutUS>
            <ContactUs>Contact Us</ContactUs>
          </Nav>
          <ProfileIcon>
            <img src="./vector.png" alt="profile" />
          </ProfileIcon>
      </RightComponent>
    </Component>
  );
};

export default Navbar2;
