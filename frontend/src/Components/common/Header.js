import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import Button from './Button';
import axios from 'axios';
import { useEffect } from 'react';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* flex option */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .h2 {
    color: #CDBBA7;
    font-color: #CDBBA7;
  }
`;



/**
 * 헤더가 fixed로 되어 있기 때문에 겹치지 않게 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;


/**
 * user 정보 띄워줄 컴포넌트
 */
const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const onClick = async (e) => {
  e.preventDefault();
  await axios.get(`http://localhost:8080/logout`).then((res) => {
      if (res.status == 200) {
        alert("로그아웃 되었습니다.");
        window.open('http://localhost:3000/login','_self');
      } else {
        alert("로그아웃에 실패하였습니다.");
      }
  });
}

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          {/* index 로 이동하는 Link 컴포넌트 */}
          <Link to="/cotato" className="logo">
          <h2>
            Cotato
            </h2>
          </Link>
          {/* user 값이 있으면 즉, 로그인 상태면 로그아웃을 버튼을 보여주고, 그렇지 않으면 로그인 버튼 보여주기 */}
          {localStorage.getItem("username") != null ? (
            <div className="right">
              <UserInfo>{localStorage.getItem("username")}</UserInfo>
              <Button onClick = {(e) => onClick(e)}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default React.memo(Header);