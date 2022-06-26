import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AppProvider } from './contexts/AppContext'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<AppProvider>
				<App />
			</AppProvider>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
