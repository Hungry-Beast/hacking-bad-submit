import React from "react";
import styled from "styled-components";
import { Switch, Dropdown, Space, Badge } from "antd";
import NotificationsIcon from '@mui/icons-material/Notifications';

const Component = styled.div``;
const LeftComponent = styled.div``;
const Menu = styled.img``;
const LogoContainer = styled.div``;
const LogoImage = styled.img``;
const LogoTitle = styled.div``;
const CustomDropdown = styled(Dropdown)``;

const RightComponent = styled.div``;
const SearchContainer = styled.div``;

const ProfileIcon = styled.img``;
const CipherPointsContainer = styled.div``;
const PointsIcon = styled.img``;
const Points = styled.div``;
const ModeChanger = styled(Switch)``;
const Navbar = () => {
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
        <Menu src="/menu.svg" />
        <LogoContainer>
          <LogoImage src="/Logo.png" />
          <LogoTitle>Cipher School</LogoTitle>
        </LogoContainer>
        {/* <CustomDropdown> */}
        <CustomDropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Hover me
              {/* <DownOutlined /> */}
            </Space>
          </a>
        </CustomDropdown>
        {/* </CustomDropdown> */}
      </LeftComponent>
      <RightComponent>
        <SearchContainer>

        </SearchContainer>
        <Badge count="3">

        <NotificationsIcon />

        </Badge>
        <CipherPointsContainer>
            <PointsIcon src="/cipherPoints.svg"/>
        </CipherPointsContainer>
      </RightComponent>
    </Component>
  );
};

export default Navbar;
