import { Container } from '../components/container/Container'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'

const NotFound = () => {
  return (
    <Container>
      <Header>404 error</Header>
      <Footer infoText="Looks like you've found a dead end" btnText='Go back to home page' href='/login' />
    </Container>
  )
}

export default NotFound
