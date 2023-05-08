import {useState, useEffect, useContext} from 'react'
import { Container } from './style'
import { Input } from '../input'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { TextButton } from '../textButton'
import { api } from '../../services/index'
import { useAuth } from '../../hooks/auth'
import { NotesMoviesContext } from '../../hooks/notesMovies'
import defaultAvatar from '../../assets/avatar_placeholder.svg'

export function Header() {

  const { fetchNotesMovies } = useContext(NotesMoviesContext)
  const [search, setSearch] = useState("")

  const { singOut, user } = useAuth()
  const navigate =  useNavigate()

  const userAvatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar

  useEffect(() => {
    fetchNotesMovies(search)

  },[search])
  
  return (
    <Container>
      
      <h1>RocketMovies</h1>
      
        <Input 
        placeholder="Pesquisar pelo texto"
        onChange={e => setSearch(e.target.value)}
        /> 

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