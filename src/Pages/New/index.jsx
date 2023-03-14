import {FiArrowLeft} from "react-icons/fi"
import {Link} from "react-router-dom"
import {Container, Content} from './style'
import {TextArea} from '../../Components/textArea'
import {NoteItem} from '../../Components/noteItem'
import {TextButton} from '../../Components/textButton'
import {Header} from '../../Components/header'
import {Button} from '../../Components/button'
import {Input} from '../../Components/input'
import React from 'react'
export function New(){

  return(
    <Container>
        <Header/>

        <main>

          <Link to='/'>
            <TextButton icon={FiArrowLeft} title="voltar"/>
          </Link>

          <Content>

              <h1>Novo filme</h1>

            <div className="inputs-buttons">
              <Input placeholder="Titulo"/>
              <Input placeholder="Sua nota (de 0 a 5)"/>
            </div>

            <TextArea placeholder="Observações"/>


            <p>Marcadores</p>
              <div className="tags">
                <NoteItem value="Universe" />
                <NoteItem placeholder="Novo marcador" isNew/>
              </div>

            <div className="inputs-buttons">
              <Button title="Excluir filme"/>
              <Button title="Salvar alterações" isActive/>
            </div>

          </Content>
        </main>

  </Container>
)}