import {Container} from './style'

export function Button({icon: Icon, title, isActive, ...rest}){

  return(
    <Container
      {...rest}
      isActive={isActive}
      type='button'
    >
      {Icon && <Icon size={20}/>}
      {title}
    </Container>
  )
}