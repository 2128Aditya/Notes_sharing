import { Badge } from "@material-ui/core";
import { Search, Chat, AccountCircle, ExitToApp } from "@material-ui/icons";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector,useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {logout,search} from "../redux/userRedux";
import TopNavbar from './TopNavbar/TopNavbar'

/* ================= UI STYLES ================= */

const Container = styled.div`
  height: 64px;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #E9D5FF;
  position: sticky;
  top: 0;
  z-index: 999;
  ${mobile({ height: "55px" })}
`;

const Wrapper = styled.div`
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "0 12px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Language = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #6B7280;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  background: #F9FAFB;
  border-radius: 999px;
  padding: 6px 12px;
  border: 1px solid #E5E7EB;
  transition: 0.2s;

  &:focus-within {
    border-color: #7C3AED;
    box-shadow: 0 0 0 2px rgba(124,58,237,0.15);
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  padding: 4px 8px;
  font-size: 14px;
  width: 180px;

  ${mobile({ width: "100px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 26px;
  color: #7C3AED;
  letter-spacing: 0.5px;

  ${mobile({ display: "none" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 10px;
  transition: 0.2s;

  &:hover {
    background: rgba(124,58,237,0.1);
  }

  ${mobile({ flexDirection:"column", gap:"2px" })}
`;

const Item = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #374151;

  ${mobile({ fontSize: "11px"})}
`;

const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #EF4444;
`;

const SearchButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const TopNavWrapper = styled.div`
  display: none;
  ${mobile({ display:"block" })}
`;

/* ================= COMPONENT ================= */

const Navbar = () => {

  const currentUser= useSelector(state=>state.user.currentUser)
  const [searchedValue,setsearchedValue]=useState(null)
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler=()=>{
    dispatch(logout());
    navigate("/login");
  }

  const searchHandler=(e)=>{
    e.preventDefault();
    dispatch(search(searchedValue));
  }

  useEffect(()=>{
    dispatch(search(null));
  },[])

  return (
    <>
    <TopNavWrapper>
     <TopNavbar />
    </TopNavWrapper>

    <Container>
      <Wrapper>

        {/* LEFT */}
        <Left>
          <Language>EN</Language>

          <SearchContainer onSubmit={searchHandler}>
            <Input 
              placeholder="Search notes..." 
              onChange={(e)=>setsearchedValue(e.target.value)}
            />
            <SearchButton type="submit">
              <Search style={{ color: "#6B7280", fontSize: 18 }} />
            </SearchButton>
          </SearchContainer>
        </Left>

        {/* CENTER */}
        <Center>
          <Link to="/" style={{textDecoration:"none"}}>
            <Logo>NoteSharing</Logo>
          </Link>
        </Center>

        {/* RIGHT */}
        <Right>

          {currentUser ? (
            <>
              <Link to={"/profile/"+currentUser._id} style={{textDecoration:"none"}}>
                <MenuItem>
                  <AccountCircle style={{color:"#7C3AED"}} />
                  <Item>{currentUser.username}</Item>
                </MenuItem>
              </Link>

              <MenuItem>
                <ExitToApp style={{color:"#EF4444"}} onClick={logoutHandler}/>
                <Button onClick={logoutHandler}>Logout</Button>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem>
                <Link to="/login" style={{textDecoration:"none",color:"#374151"}}>
                  SignIn
                </Link>
              </MenuItem>

              <MenuItem>
                <Link to="/register" style={{textDecoration:"none",color:"#374151"}}>
                  Register
                </Link>
              </MenuItem>
            </>
          )}

          <Link to="/searchuser" style={{textDecoration:"none"}}>
            <MenuItem>
              <Chat style={{color:"#7C3AED"}} />
              <Item>Chat</Item>
            </MenuItem>
          </Link>

        </Right>

      </Wrapper>
    </Container>
    </>
  );
};

export default Navbar;