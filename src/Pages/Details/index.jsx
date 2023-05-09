import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FiArrowLeft, FiClock} from 'react-icons/fi'
import {Link} from "react-router-dom"
import {Container, Main, Title, Info} from './style'
import {Header} from '../../Components/header'
import {TextButton} from '../../Components/textButton'
import {Stars} from '../../Components/stars'
import {Tag} from '../../Components/tag'
import { api } from '../../services'
import { useAuth } from '../../hooks/auth'

export function Details(){
    const [data, setData] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    const { user } = useAuth()

    const userAvatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar

    function handleBack(){
        navigate(-1)
    }


    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notesMovies/${params.id}`)

            setData(response.data)
        }

        fetchNotes()
    }, [])

    return(
    <Container>
        <Header/>

        <div className="buttonBack">
            <FiArrowLeft size={18} />
            <TextButton 
            title="voltar"
            onClick={handleBack}
            ></TextButton>
        </div>
        
        
        {
            data && 
            <Main>      
            <content>

                <Title>
                    <h1>{data.movie_title}</h1>
                    
                    <Stars rate={data.movie_for_the_note}/>
                </Title>


                <Info>
                    <img 
                    src={userAvatar}
                    alt=""
                    />
                        {`Por : ${user.name}`}
                    <span>
                        <FiClock/>  {data.creation_date}
                    </span>
                </Info>

                {
                    data.movieTags && 
                    <div className="tags">
                        {
                            data.movieTags.map(tag =>(
                            <Tag 
                            key={String(tag.id)}
                            title={tag.name}
                            />
                            ))
                        }
                    </div>
                }

                <p>{data.movie_description}</p>

            </content>
            </Main>
        }

    </Container>
)}