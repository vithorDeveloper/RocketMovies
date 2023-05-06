import { useState } from "react";
import {FiMail, FiLock} from "react-icons/fi"
import { Container, Background, Form } from "./style";
import { Input } from "../../Components/input";
import { Button } from "../../Components/button";
import { TextButton } from "../../Components/textButton";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Login(){

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {singIn} = useAuth()

  function handleSingIn(){
    singIn({email, password})
  }

  return(
    <Container>
        <Form>

          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir</p>

        
          <h2>Faça seu login</h2>

          <Input 
          icon={FiMail} 
          type="text" 
          placeholder="E-mail"
          onChange = {e => setEmail(e.target.value)}
          />

          <Input 
          icon={FiLock} 
          type="password" 
          placeholder="Senha"
          onChange = {e => setPassword(e.target.value)}
          />
          
          <Button title="Entrar" onClick={handleSingIn}/>

          <Link to="/register">
              <TextButton title="Criar conta"></TextButton>
          </Link>

        </Form>

          <Background/>

    </Container>
)}