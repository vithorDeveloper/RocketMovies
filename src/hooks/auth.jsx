import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/index";

export const AuthContext = createContext({});

  function AuthProvider({children}){
    const [data, setData] = useState({})

    async function singIn({email, password}){

      try {
        
        const response = await api.post("/sessions", {email, password});
        const { token, user } = response.data
  
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        setData({user, token})

        localStorage.setItem('@Rocketmovies:user', JSON.stringify(user))
        localStorage.setItem('@Rocketmovies:token', token)
  
        console.log(user, token);
      } catch (error) {
        if(error.response){
          alert(error.response.data.message);
        }
        else{
          alert("Error")
        }
      }
  }

    function singOut(){
      localStorage.removeItem('@Rocketmovies : user')
      localStorage.removeItem('@Rocketmovies : token')

      setData({})
    }

    async function updateProfile({user, avatarFile}){
      try {

        if(avatarFile){
          const fileUploadForm = new FormData()
          fileUploadForm.append("avatar", avatarFile)

          const response = await api.patch("/users/avatar", fileUploadForm)

          user.avatar = response.data.avatar
        }

        await api.put("/users", user)

        localStorage.setItem('@Rocketmovies:user', JSON.stringify(user))

        setData({
          user,
          token: data.token
        })

        alert("usuário atualizado com sucesso")

      } catch (error) {
        if(error.response){
          alert(error.response.data.message);
        }
        else{
          alert("Error aqui")
        }
      }
    }

    useEffect(() => {
      const user = localStorage.getItem('@Rocketmovies : user')
      const token = localStorage.getItem('@Rocketmovies : token')

      if(user && token){

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        setData({
          token,
          user: JSON.parse(user)
          })
        }
      }, [])

    return(
      <AuthContext.Provider value={{
        singIn, 
        singOut, 
        updateProfile, 
        user: data.user}}
      >
          {children}
      </AuthContext.Provider>
    )
  }

  function useAuth(){
    const context = useContext(AuthContext)

    return context
  }

export {AuthProvider, useAuth};
