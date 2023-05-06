import { Container } from './style'
import { Input } from '../input'
import { Link } from "react-router-dom"
import { useAuth } from '../../hooks/auth'
import { TextButton } from '../textButton'

export function Header() {

  const { singOut } = useAuth()

  return (
    <Container>
      
      <h1>RocketMovies</h1>
      
        <Input placeholder="Pesquisar pelo texto" />
      
        

          <div>
            <p>Vithor Santos</p>
            <TextButton title="sair" onClick={ singOut }></TextButton> 
          </div>
          
        <Link to="/profile">
          
          <img 
            src="https://github.com/vithorDeveloper.png"
            alt='foto de perfil'
          />
          
        </Link>
      
    </Container>
  )
}