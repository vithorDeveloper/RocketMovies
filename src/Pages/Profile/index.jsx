import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from '../../hooks/auth'
import {Container, Form, Avatar} from './style'
import {Input} from '../../Components/input'
import {Button} from '../../Components/button'
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'

export function Profile(){
    const {user, updateProfile} = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordNew, setPasswordNew] = useState()
    const [PasswordOld, setPasswordOld] = useState()

    async function handleUpdateProfile(){
      const user = {
        name,
        email,
        password: passwordNew,
        oldPassword: PasswordOld,
      }

      await updateProfile({user})
    }

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

            <Input 
            icon={FiUser} 
            placeholder="Nome"
            value = {name}
            onChange={e => setName(e.target.value)}
            />

            <Input 
            icon={FiMail} 
            placeholder="E-mail"
            value = {email}
            onChange={e => setEmail(e.target.value)}
            />

            <Input 
            icon={FiLock} 
            placeholder="Senha atual"
            onChange={e => setPasswordOld(e.target.value)}
            />

            <Input 
            icon={FiLock} 
            placeholder="Nova senha"
            onChange={e => setPasswordNew(e.target.value)}
            />


            <Button title="Salvar" onClick={handleUpdateProfile}/>

        </Form>
  </Container>
)}