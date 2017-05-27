import React from 'react'
import { render } from 'react-dom'

import Hello from './containers/Hello/index'
import Tool from './containers/tool/index'
import Test from './containers/Test'

//import './static/css/common.less'
/*


class Hello extends React.Component {
    constructor(props){
        super(props)
        this.clickHandle=this.clickHandle.bind(this)
    }
    clickHandle(){
        console.log(this.clickHandle)
        console.log(this.refs.myinput.value)
    }

    render() {
        var arr=['小明','笑话','adf']
      function boy() {
          return(
              <div>111</div>
          )
      }





        return (
       <div>
           <p className="title">hello world</p>
           <input type="text" ref='myinput'/>
           <button onClick={this.clickHandle}>按钮</button>
           <ul>
               {arr.map((val,index)=><li key={index}>{val}</li>)}
           </ul>
           <Hello />
       </div>


        )
    }
}*/

render(
        <Test/>,
    document.getElementById('root')
)
