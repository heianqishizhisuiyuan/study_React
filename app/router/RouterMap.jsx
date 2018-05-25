import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers/App'
import Test from '../containers/test'
import Hello from '../containers/Hello'
import HelloNext from '../containers/Hello_next'

import NotFound from '../containers/NotFound'



class RouterMap extends React.Component{
	updateHandle() {
		console.log('每一次路由都会触发这个函数')

	} 

	render() {
		return(
			<Router history={this.props.history} onUpdate = {this.updateHandle.bind(this)}>
				<Route path='/' component={App}>
					<IndexRoute component = {Test} />
					<Route path='hello' component = {Hello} />
					<Route path='hellonext/:id' component={HelloNext}/>
					<Route path="*" component={NotFound}/>
				</Route>
			</Router>
		)


	}
	


}

export default RouterMap