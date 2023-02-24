import { useNavigate } from "react-router-dom";
import { LogContainer, LoginWrap, Input, Button, ContainerLogo, Logo, M, Label, Form, ContainerIcon, Icon, P } from "./LoginStyled";
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import logo from '../../assets/img/logo2.png'


const Login = (props) => {

    const navigate = useNavigate();

    const User = {
        email: 'hotel_user@gmail.com',
        password: '123456',
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if(email !== User.email){
            props.setValidated(false);
            alert('Invalid Email')
            navigate('/')
        } if(password !== User.password){
            props.setValidated(false);
            alert('Invalid Password')
            navigate('/')
        }else {
            navigate('/dashboard')
            localStorage.setItem('login', JSON.stringify(User));
        }
    }

    return(
        <LogContainer>
            <LoginWrap>
                <ContainerLogo>
                    <Logo>
                    <img src={logo} alt="logo"/>
                    </Logo>

                    <div>
                        <M>TRAVL</M>
                        <P>Hotel Admin Dashboard</P>
                    </div>
                </ContainerLogo>

                <Form onSubmit={handleSubmit}>
                    <Label>User</Label>
                    <ContainerIcon>
                    <Icon><FaUserAstronaut /></Icon>
                    <Input type="text" name="email" defaultValue={User.email}/>
                    </ContainerIcon>
                    <Label>Password</Label>
                    <ContainerIcon>
                    <Icon><RiLockPasswordLine /></Icon>
                    <Input type="password" name="password" defaultValue={User.password}/>
                    </ContainerIcon>
                    <Button type="submit">SignIn</Button>
                </Form>
            </LoginWrap>
        </LogContainer>
    );
};

export default Login;
