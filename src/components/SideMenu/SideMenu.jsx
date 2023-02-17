import React from "react";

import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

import {
  Container,
  SideIconContainer,
  IconContainer,
  IconDesc,
  Card,
  Image,
  CardTitle,
  CardEmail,
  Button,
  Footer,
  FooterTitle,
  FooterCopyrigth,
  FooterDescription,
} from "./SideMenuStyled";
import { Link, useLocation } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();
  return (
    location.pathname !== "/login" && (
      <Container>
        <SideIconContainer>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "var(--color-greenGrey)" }}
          >
            <IconContainer>
              <MdOutlineDashboard />
              <IconDesc>Dashboard</IconDesc>
            </IconContainer>
          </Link>
          <Link
            to="/bookings"
            style={{ textDecoration: "none", color: "var(--color-greenGrey)" }}
          >
            <IconContainer>
              <AiOutlineCalendar />
              <IconDesc>Bookings</IconDesc>
            </IconContainer>
          </Link>
          <Link
            to="/rooms"
            style={{ textDecoration: "none", color: "var(--color-greenGrey)" }}
          >
            <IconContainer>
              <BiKey />
              <IconDesc>Rooms</IconDesc>
            </IconContainer>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "var(--color-greenGrey)" }}
          >
            <IconContainer>
              <BsPerson />
              <IconDesc>Contact</IconDesc>
            </IconContainer>
          </Link>
          <Link
            to="/users"
            style={{ textDecoration: "none", color: "var(--color-greenGrey)" }}
          >
            <IconContainer>
              <FaRegUserCircle />
              <IconDesc>Users</IconDesc>
            </IconContainer>
          </Link>
        </SideIconContainer>
        <Card>
          <Image src="http://react-portfolio-enrique.herokuapp.com/static/media/fotoEnrique.d4d17243.png"/>
          <CardTitle> Enrique Donaire</CardTitle>
          <CardEmail> donaire.web@gmail.com</CardEmail>
          <Button>Edit</Button>
        </Card>
        <Footer>
          <FooterTitle >TRAVL - Admin</FooterTitle>
          <FooterCopyrigth> 2023 - ©Enrique Donaire All Rights Reserved</FooterCopyrigth>
          <FooterDescription> Made with ♥ by Enrique</FooterDescription>
        </Footer>
      </Container>
    )
  );
};

export default SideMenu;
