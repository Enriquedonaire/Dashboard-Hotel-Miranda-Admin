import styled from "styled-components";

const Navbar = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 5rem;
  gap: 5rem;
`;

const Logo = styled.img`
  width: 90%;
  height: auto;
`;

export const M = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: flex-start; ;
    text-transform: uppercase;
    color: darkgreen;
`;

export const P = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    color: #5D5449;
    font-size: 10px;
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;



const Rigth = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 1rem;
`;

const IconContainer = styled.div``;

export {
  Navbar,
  Left,
  Logo,
  Center,
  Container,
  Title,
  Rigth,
  IconContainer,
};
