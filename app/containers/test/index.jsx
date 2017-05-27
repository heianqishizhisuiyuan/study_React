import React from 'react'

import { Button } from 'antd'

class Test extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    render(){
        return(
          <div>
              <Button type="primary">Primary</Button>
              <Button>按钮</Button>
              <div>ceshi</div>
          </div>

        )
    }
}

export default Test
