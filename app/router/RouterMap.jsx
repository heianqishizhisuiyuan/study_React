import React from 'react'
import { BrowserRouter as Router, Route, IndexRoute, Switch } from 'react-router-dom'

import App from '../containers/App'
import Test from '../containers/test'
import Hello from '../containers/Hello'


import NotFound from '../containers/NotFound'



class RouterMap extends React.Component{
	updateHandle() {
		console.log('每一次路由都会触发这个函数')

	} 

	render() {
		return(
			<Router  >
				<Switch>
					<Route exact path='/' component = {Test} />
					<Route path='/hello' component = {Hello} />
					<Route path="*" component={NotFound}/>
				</Switch>
			</Router>
		)


	}
	


}

export default RouterMap