import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth} from '../../hooks/auth'
import {Container, Form, Avatar} from './style'
import {Input} from '../../Components/input'
import {Button} from '../../Components/button'
import {TextButton} from '../../Components/textButton'
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { api } from '../../services/index'
import  defaultAvatar  from '../../assets/avatar_placeholder.svg'

export function Profile(){
    const {user, updateProfile} = useAuth()
    const navigate = useNavigate()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordNew, setPasswordNew] = useState()
    const [PasswordOld, setPasswordOld] = useState()

    const userAvatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar

    const [avatar, setAvatar] = useState(userAvatar)
    const [avatarFile, setAvatarFile] = useState(null)

    function handleChangeAvatar(event){
      const file = event.target.files[0];
      setAvatarFile(file)

      const imagePreview = URL.createObjectURL(file)
      setAvatar(imagePreview)
    }

    async function handleUpdateProfile(){
      const update = {
        name,
        email,
        password: passwordNew,
        oldPassword: PasswordOld,
      }

      const userUpdate = Object.assign(user, update)

      await updateProfile({user: userUpdate, avatarFile})
    }

    function handleBack(){
      navigate(-1)
    }
  return(
    <Container>
      
        <header>
          <FiArrowLeft size={18} />
          <TextButton 
            title="voltar"
            onClick={handleBack}
          ></TextButton> 
        </header>

        <Form>
          <Avatar>

            <img 
              src= {avatar}
              alt="foto de perfil"
            />

            <label htmlFor="avatar">
              <FiCamera size={20}/>

              <input 
              type="file" 
              id="avatar" 
              onChange={handleChangeAvatar}
              />
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