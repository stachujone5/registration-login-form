import { Container } from '../../Components/Container/Container'
import { Header } from '../../Components/Header/Header'
import { Footer } from '../../Components/Footer/Footer'

export const NotFound = () => {
	return (
		<Container>
			<Header>404 error</Header>
			<Footer infoText="Looks like you've found a dead end" btnText='Go back to home page' to='/login'></Footer>
		</Container>
	)
}
