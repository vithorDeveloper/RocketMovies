import { createContext, useContext, useState } from "react";
import { api } from "../services/index";

export const NotesMoviesContext = createContext({})

function NotesMoviesProvider ({children}){
  const [notesMovies, setNotesMovies] = useState([])


  async function fetchNotesMovies(search){
      const response = await api.get(`/notesMovies?movie_title=${search}`)

      setNotesMovies(response.data)
  }

  return(
    <NotesMoviesContext.Provider value={{notesMovies, fetchNotesMovies}}>
      {children}
    </NotesMoviesContext.Provider>
  )
}

function useNotesMovies(){
  const context = useContext(NotesMoviesContext)

  return context
}

export {NotesMoviesProvider, useNotesMovies}