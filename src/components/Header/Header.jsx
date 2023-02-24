import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Navbar,
  Left,
  Logo,
  Center,
  Title,
  M,
  P,
  Rigth,
} from "./HeaderStyled";


import { AiOutlineBell } from "react-icons/ai";
import { FaRegEnvelope, FaArrowsAltH } from "react-icons/fa";
import { MdLogout } from "react-icons/md";


const Header = () => {

  const [title, setTitle] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('login')
    navigate('/login');

  }

  console.log(location.pathname);

  useEffect(() => {
    if (location.pathname === '/') {
      setTitle('Dashboard')
    } else if (location.pathname === '/bookings') {
      setTitle('Bookings')
    } else if (location.pathname === '/rooms') {
      setTitle('Rooms')
    } else if (location.pathname === '/contact') {
      setTitle('Contact')
    } else if (location.pathname === '/users') {
      setTitle('Users')
    };
  }, [location])

  return (
    location.pathname !== "/login" && (
      <Navbar>
        <Left>
          <Link to='/'><Logo src="/icons/logo2.png" /></Link>
          {/* <div>
            <M>TRAVL</M>
            <P>Hotel Admin Dashboard</P>
          </div> */}
          <FaArrowsAltH style={{ width: "22px", height: "30px" }} />
        </Left>

        <Center>
          <Title> {title} </Title>
        </Center>

        <Rigth>
          <FaRegEnvelope style={{ width: "22px", height: "30px" }} />
          <AiOutlineBell style={{ width: "22px", height: "30px" }} />
          <MdLogout
            onClick={handleLogout} style={{ width: "22px", height: "30px" }} />
        </Rigth>
      </Navbar>
    )
  );
};

export default Header;
