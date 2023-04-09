import {
    MailOutlined,
    SettingOutlined,
    AppstoreOutlined,
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import { useNavigate } from "react-router-dom";
  import styled from "styled-components";
  
  const MenuComponent = styled.div`
    color: white;
    background-color: #ff7426;
    height: 100%;
  `;
  const Logo = styled.div`
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: center;
  `;
  const LogoText = styled.h1`
    text-align: center;
    /* font-size: ; */
  `;
  const Item = styled(Menu.Item)`
    color: white;
  `;
  const DriverSidebar = ({key}) => {
    const navigate = useNavigate();
    const onClick = (e) => {
      console.log("click ", e);
    };
    console.log(key)
    return (
      <MenuComponent>
        <Logo>
          <LogoText>WM</LogoText>
        </Logo>
        <Menu
          onClick={onClick}
          style={{
            width: 256,
            backgroundColor: "#FF7426",
          }}
          defaultSelectedKeys={[key]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          // items={items}
        >
          <Item key={1} onClick={() => navigate("/home")}>My Route</Item>
          {/* <Item key={2} onClick={() => navigate("/home/drivers")}>Drivers</Item>
          <Item key={3} onClick={() => navigate("/home/users")}>Users</Item> */}
        </Menu>
      </MenuComponent>
    );
  };
  export default DriverSidebar;
  