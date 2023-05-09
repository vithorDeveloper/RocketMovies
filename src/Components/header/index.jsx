import { Container } from './style'
import { Input } from '../input'
import { Link } from "react-router-dom"
import { api } from '../../services/index'
import { useAuth } from '../../hooks/auth'
import defaultAvatar from '../../assets/avatar_placeholder.svg'

export function Header({onChange}) {

  
  const { user } = useAuth()

  const userAvatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar

  return (
    <Container>
      
      <h1>RocketMovies</h1>
      
        <Input 
          className="input"
          placeholder="Pesquisar pelo texto"
          onChange={onChange}
        /> 
          
        <Link to="/profile">
            <img 
              src={userAvatar}
              alt='foto de perfil'
            />
            <p>{user.name}</p>
        </Link>
      
    </Container>
  )
}