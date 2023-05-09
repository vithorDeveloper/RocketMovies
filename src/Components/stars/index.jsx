import { Container } from './style'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export function Stars({ rate, ...rest }) {
  const stars = []

  for (let i = 0; i < 5; i++) {
    let star = i < rate ? AiFillStar : AiOutlineStar

    stars.push(star)
  }

  return (
    <Container
    {...rest}
    >
      {stars.map((Star, i) => (
        <Star key={i} />
      ))}
    </Container>
  );
}