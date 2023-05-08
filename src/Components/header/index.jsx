import { Container } from './style'
import { Input } from '../input'
import { Link } from "react-router-dom"
import { useAuth } from '../../hooks/auth'
import { TextButton } from '../textButton'
import { api } from '../../services'
import defaultAvatar from '../../assets/avatar_placeholder.svg'

export function Header() {

  const { singOut, user } = useAuth()

  const userAvatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar

  return (
    <Container>
      
      <h1>RocketMovies</h1>
      
        <Input placeholder="Pesquisar pelo texto" />

          <div>
            <p>{user.name}</p>
            <TextButton title="sair" onClick={ singOut }></TextButton> 
          </div>
          
        <Link to="/profile">
          
          <img 
            src={userAvatar}
            alt='foto de perfil'
          />
          
        </Link>
      
    </Container>
  )
}