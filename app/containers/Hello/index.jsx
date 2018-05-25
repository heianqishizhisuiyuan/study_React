import  React from 'react'
import { hashHistory } from 'react-router'



import Header from '../../components/Header/index'
import Carousel from './subpage/Carousel'
import Recommend from './subpage/Recommend'
import List from './subpage/List'
import { Button } from 'antd'


import './css/Hello.less'

class Hello extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: new Date().toLocaleTimeString()
        }
        this.clickHandler=this.clickHandler.bind(this)
        this.getList = this.getList.bind(this)
    }
    
    getList(num) {
    	let list =[]
    	if(num){
    		for(let length=0; length<num;length++){
    			list.push(<li key={length} onClick={this.clickHandler.bind(this, length)}>js jump to {length}</li>)
    		}
    	}
    	return list
    }
    clickHandler(value){
    	hashHistory.push('/hellonext/'+value)
    }
    
    render() {
    	var getList= this.getList(3)
    	
        return (
            <div>
              {getList}
            </div>

        )
    }
}

export default Hello