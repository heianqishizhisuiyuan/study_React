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
          <Button type="primary">Primary</Button>
        )
    }
}

export default Test
