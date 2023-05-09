import {FiPlus} from "react-icons/fi"
import {Link, useNavigate} from "react-router-dom"
import { Container, MovieInfo, Main, Title } from './style'
import { Header } from '../../Components/header'
import { Button } from '../../Components/button'
import { Stars } from '../../Components/stars'
import { Tag } from '../../Components/tag'
import { TextButton } from '../../Components/textButton'
import { useAuth } from '../../hooks/auth'
import { useEffect, useState } from "react"
import { api } from "../../services"

export function Home() {

  const [notesMovies, setNotesMovies] = useState([])
  const [search, setSearch] = useState("")

  const { singOut} = useAuth()


  const navigate = useNavigate()

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  useEffect(() =>{
    async function fetchNotes(){
      const response = await api.get(`/notesMovies?movie_title=${search}`)

      setNotesMovies(response.data)
    }

    fetchNotes()
  }, [search])

  function handleSingOut(){
    navigate('/')
    singOut()
  }

  return (
    <Container>
          <Header
          onChange={e => setSearch(e.target.value)}
          />

        <TextButton title="sair" onClick={ handleSingOut }>
          </TextButton> 


          <Title>
              <h1>Meus filmes</h1>

              <Link to="/new">
                <Button title="Adicionar filme" icon={FiPlus}/>
              </Link>
          </Title>
          
          <Main>
            <content>
                {
                  notesMovies.map(movie => (

                    <MovieInfo
                    key={String(movie.id)}
                    data={movie}
                    onClick={() => handleDetails(movie.id)}
                    >
                      <h2>{movie.movie_title}</h2>

                      <div>
                        <Stars rate={movie.movie_for_the_note}/>
                    </div>

                        <p>{movie.movie_description}</p>

                        {
                          movie.movieTags.map(tag => (
                            <Tag
                            key={String(tag.id)}
                            title={tag.name}
                            >
                            </Tag>
                          ))
                        }

                    </MovieInfo>
                  ))
                }
            </content>
          </Main>

    </Container>
)}