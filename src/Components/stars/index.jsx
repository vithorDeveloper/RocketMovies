import { Container } from "./style";
import { FiStar } from "react-icons/fi"

export function Star({icon: Icon, isActive= false, ...rest}){
  return(
    <Container 
    isActive={isActive}
    {...rest}
    >
      {Icon && <FiStar size={12}/>}
    </Container>
  )
}