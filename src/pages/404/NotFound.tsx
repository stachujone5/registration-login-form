import { Container } from '../../Components/container/Container'
import { Header } from '../../Components/header/Header'
import { Footer } from '../../Components/footer/Footer'

export const NotFound = () => {
	return (
		<Container>
			<Header>404 error</Header>
			<Footer infoText="Looks like you've found a dead end" btnText='Go back to home page' to='/login'></Footer>
		</Container>
	)
}
