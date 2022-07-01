import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import { App } from './App'
import { AppProvider } from './contexts/AppContext'


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
