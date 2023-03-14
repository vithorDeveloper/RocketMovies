import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {Container, Form, Avatar} from './style'
import {Input} from '../../Components/input'
import {Button} from '../../Components/button'

export function Profile(){
  return(
    <Container>
        <header>
          <FiArrowLeft size={18} />
          <Link to="/">Voltar</Link> 
        </header>

        <Form>
          <Avatar>

            <img 
              src="https://github.com/vithorDeveloper.png" 
              alt="foto de perfil"
            />

            <label htmlFor="avatar">
              <FiCamera size={20}/>

              <input 
              type="file" 
              id="avatar" />
            </label>

          </Avatar>

            <Input icon={FiUser} Placeholder="Nome"/>
            <Input icon={FiMail} Placeholder="E-mail"/>
            <Input icon={FiLock} Placeholder="Senha atual"/>
            <Input icon={FiLock} Placeholder="Nova senha"/>

            <Button title="Salvar"/>

        </Form>
  </Container>
)}