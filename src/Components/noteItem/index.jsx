import {FiPlus, FiX} from "react-icons/fi";
import {Container} from './style'

export function NoteItem({value, isNew, onClick, ...rest}){

  return(
    <Container 
    isNew={isNew}
    >
      <input value={value} type="text" readOnly={!isNew} {...rest}/>

      <button 
      type="button"
      onClick={onClick}
      >
        {!isNew ? <FiX size={19}/> : <FiPlus size={19}/>}
      </button>
      
    </Container>
  )
}