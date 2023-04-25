import {FiMail, FiLock} from "react-icons/fi"
import { Container, Background, Form } from "./style";
import { Input } from "../../Components/input";
import { Button } from "../../Components/button";
import { TextButton } from "../../Components/textButton";
import { Link } from "react-router-dom";

export function Login(){

  return(
    <Container>
        <Form>

          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir</p>

        
          <h2>Faça seu login</h2>

          <Input icon={FiMail} type="text" placeholder="E-mail"/>
          <Input icon={FiLock} type="password" placeholder="Senha"/>
          
          <Button title="Entrar"/>

          <Link to="/register">
              <TextButton title="Criar conta"/>
          </Link>

        </Form>

          <Background/>

    </Container>
)}