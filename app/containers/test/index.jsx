import React from 'react'

import {TreeSelect, Form, Input, Button, Checkbox,Table, Icon } from 'antd'

import {Link} from 'react-router'


class Test extends React.Component{
    constructor(props){
        super(props)
        this.state={
            filterDropdownVisible: false,
			data: '',
			searchText: '',
			filtered: false
		}
		
    }
	



	
    render(){

    return (
		<div>
			<Button>按钮</Button>
			<Link to='/hello'>
				通往hello的路由
			</Link>
		</div>
	)
  }
}
    


export default Test
