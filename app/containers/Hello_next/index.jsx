import  React from 'react'
import { hashHistory } from 'react-router'



import Header from '../../components/Header/index'
import Carousel from './subpage/Carousel'
import Recommend from './subpage/Recommend'
import List from './subpage/List'
import { Button } from 'antd'




class HelloNext extends React.Component {
    
    
    render() {
        return (
            <div>
    			<p> HelloNext, url参数是:{this.props.params.id}</p>
            </div>

        )
    }
}

export default HelloNext