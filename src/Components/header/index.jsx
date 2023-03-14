import { Container } from './style'
import { Input } from '../input'
import { Link } from "react-router-dom"

export function Header() {

  return (
    <Container>
      
      <h1>RocketMovies</h1>
      
        <Input placeholder="Pesquisar pelo texto" />
      
        <Link to="/profile">

          <div>
            <p>Vithor Santos</p>
            <span>sair</span>
          </div>
          
          <img 
            src="https://github.com/vithorDeveloper.png"
            alt='foto de perfil'
          />
          
        </Link>
      
    </Container>
  )
}