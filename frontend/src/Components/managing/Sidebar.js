import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "../PostPage/BoardList/SidebarItem";

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`

const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`

const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`

function Sidebar() {
  const menus = [
    { name: "회원 상/벌점 관리", path: "/announce" }
  ];
  return (
    <Side>
      <Profile src='https://velog.velcdn.com/images/kkaerrung/post/968879a7-d7ec-48e8-ad0c-23bd2942dcd4/image.png'></Profile>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{color: "black", textDecoration: "none"}}
              to={menu.path}
              key={index}
              activeStyle={{color: "black"}}
            >
              <SidebarItem
                menu={menu}
              />
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default Sidebar;