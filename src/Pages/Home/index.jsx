import {FiPlus} from "react-icons/fi"
import {Link, useNavigate} from "react-router-dom"
import { Container, MovieInfo, Main, Title } from './style'
import { Header } from '../../Components/header'
import { Button } from '../../Components/button'
import { Stars } from '../../Components/stars'
import { Tag } from '../../Components/tag'
import { useNotesMovies } from "../../hooks/notesMovies"

export function Home() {

  const { notesMovies } = useNotesMovies()
  const navigate = useNavigate()

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  return (
    <Container>
          <Header/>

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


// <h2>Interestellar</h2>

// <Star icon={FiStar}/>
// <Star icon={FiStar}/>
// <Star icon={FiStar}/>
// <Star icon={FiStar}/>
// <Star icon={FiStar}/>

// <p>
//   Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
//   Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto
  
// </p>

// <Tag title="Ficção científica"/>
// <Tag title="Drama"/>
// <Tag title="Familia"/>