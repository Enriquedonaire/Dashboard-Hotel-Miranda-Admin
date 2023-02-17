import styled from "styled-components";

export const LogContainer = styled.div`
    background-color: #FFFFFF;
    height: 100vh;
    display: flex;
    border-radius:50px;
    align-items: center;
    justify-content: center;

`;

export const LoginWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    gap: 50px;
    -webkit-box-shadow: 10px 10px 10px 50px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    box-shadow: 1.5px 0px 10px 10px rgba(0,0,0,0.2);
    padding: 5% 7%;
    background-color: #FFFFFF;
`;

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const Logo = styled.div`
    font-weight: 400;
    font-size: 40px;
    padding: 30px 30px;
    border-radius: 15px;
    background: #FFFFFF;
    box-shadow: 0px 14px 24px rgba(139, 139, 139, 0.25);
    color: #262626;
`;

export const M = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    color: darkgreen;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    min-width: 30px;
`;

export const Input = styled.input`
    background: lightgray;
    border: none;
    border-radius: 25px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    width: 100%;
    min-height: 25px;
    color: black;
    outline: none;
    padding: 5px 0 5px 27px;
`;

export const Label = styled.label`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #262626;
`;

export const Button = styled.button`
    background: darkgreen;
    border-radius: 8px;
    border: none;
    padding: 10px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    width: 50%;
    margin-left: 50px;
    margin-top: 10px;
    color: lightgray;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center ;
    gap: 5px;
    border: 2px solid;
    transition: all 1s ease;
    box-shadow: 2px 3px 1px #CCCCCC,
                6px 6px 12px darkgray;

    &:active {
        box-shadow: inset 4px 4px 12px darkgray,
                    inset -4px -4px 12px #CCCCCC;
    }
`;

export const ContainerIcon = styled.div`
    position: relative;
`;

export const Icon = styled.div`
    position: absolute;
    top: 6px;
    left: 7px;
`;

export const P = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    color: #5D5449;
    font-size: 12px;
`;
