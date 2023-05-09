import React from 'react'
import { useState } from 'react'
import {FiArrowLeft} from "react-icons/fi"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import {Container, Content} from './style'
import {TextArea} from '../../Components/textArea'
import {NoteItem} from '../../Components/noteItem'
import {TextButton} from '../../Components/textButton'
import {Header} from '../../Components/header'
import {Button} from '../../Components/button'
import {Input} from '../../Components/input'
import { api } from '../../services/index'

export function New(){

  const [tag, setTag] = useState([])
  const [newTag, setNewTag] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [notes, setNotes] = useState("")

  const navigate = useNavigate()

    function handleAddTag(){
      setTag(prevState => [...prevState, newTag])

      setNewTag("")
    }

    function handleRemoveTag(deleted) {
      setTag(prevState => prevState.filter(tag => tag != deleted))
    }

    async function handleNewNote(){
      if(!title || !notes || !tag){
        alert("exitem campos vazios ou que faltam ser adicionados")
      }

      await api.post("/notesMovies", {movie_title:title, movie_for_the_note:notes, movie_description:description, movieTags:tag})
  
      alert("nota criada com sucesso")
  
      navigate(-1)
    }

    function handleBack(){
      navigate(-1)
    }

  return(
    <Container>
        <Header/>

        <main>

          <div className="buttonBack">
          <FiArrowLeft size={18} />
            <TextButton 
              title="voltar"
              onClick={handleBack}
            >
              </TextButton>
          </div>

          <Content>

              <h1>Novo filme</h1>

            <div className="inputs-buttons">
              <Input 
              placeholder="Titulo"
              onChange={e => setTitle(e.target.value)}
              />

              <Input 
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setNotes(e.target.value)}
              />
            </div>

            <TextArea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
            />


            <p>Marcadores</p>
              <div className="tags">

                {
                  tag.map((tag, index) =>(
                    <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                    />
                  ))
                }

                <NoteItem 
                placeholder="Novo marcador" 
                isNew
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
                />

              </div>

            <div className="inputs-buttons">
              <Button title="Excluir filme"/>

              <Button 
              title="Salvar alterações" 
              isActive
              onClick={handleNewNote}
              />
              </div>

          </Content>
        </main>

  </Container>
)}