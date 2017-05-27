import  React from 'react'

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
        this.clickHandle=this.clickHandle.bind(this)
    }
    clickHandle() {
        this.setState({
            data:new Date().toLocaleTimeString()
        })
    }
    render() {
        return (
            <div>
              <div>111111111111</div>

                <Header title="hello页面" />
                <p className="title"> hello world1</p>
                <p onClick={this.clickHandle}>{this.state.data}</p>
                <Carousel />
                <Recommend />
                <List />
            </div>

        )
    }
}

export default Hello