import { useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import {FiMail, FiLock, FiUser} from "react-icons/fi"
import { Container, Background, Form } from "./style";
import { Input } from "../../Components/input";
import { Button } from "../../Components/button";
import { TextButton } from "../../Components/textButton"
import { api } from "../../services/index";

export function Register(){

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignUp(){
    if(!name || !email || !password){
      alert("existem campos vazios")
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("usuario cadastrado com sucesso")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }
      else{
        alert("erro ao cadastrar")
      }
    })
  }

  return(
    <Container>
        <Form>

          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir</p>

        
          <h2>Crie sua conta</h2>

          <Input 
            icon = {FiUser} 
            type = "text" 
            placeholder = "Nome"
            onChange = {e => setName(e.target.value)}
          />

          <Input 
            icon = {FiMail} 
            type = "text" 
            placeholder = "E-mail"
            onChange = {e => setEmail(e.target.value)}
          />

          <Input 
            icon = {FiLock} 
            type = "password" 
            placeholder = "Senha"
            onChange = {e => setPassword(e.target.value)}
          />
          
          <Button title = "Cadastrar" onClick = {handleSignUp}/>

          <Link to="/"><TextButton title = "Voltar para o login"></TextButton></Link>
          
        </Form>

          <Background/>

    </Container>
)}