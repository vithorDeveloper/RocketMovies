import {FiMail, FiLock, FiUser, FiArrowLeft} from "react-icons/fi"
import {Link} from "react-router-dom"
import { Container, Background, Form } from "./style";
import { Input } from "../../Components/input";
import { Button } from "../../Components/button";
import { TextButton } from "../../Components/textButton";

export function Register(){

  return(
    <Container>
        <Form>

          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir</p>

        
          <h2>Crie sua conta</h2>

          <Input icon={FiUser} type="text" placeholder="Nome"/>
          <Input icon={FiMail} type="text" placeholder="E-mail"/>
          <Input icon={FiLock} type="password" placeholder="Senha"/>
          
          <Button title="Cadastrar"/>

          <Link to="/">
              <TextButton icon={FiArrowLeft} title="Voltar para o login"/>
          </Link>
          
        </Form>

          <Background/>

    </Container>
)}