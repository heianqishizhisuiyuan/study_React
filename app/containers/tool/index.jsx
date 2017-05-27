import React from 'react'

import Input from './subpage/Input'
import ListL from './subpage/ListL'

class Tool extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
        this.submitFn=this.submitFn.bind(this)
        this.deleteFnn=this.deleteFnn.bind(this)
    }
    submitFn(val){
        let id = this.state.list.length;
        this.setState({
            list:this.state.list.concat({
                id:id,
                content:val
            })
        })

    }

    deleteFnn(id){
        let data= this.state.list;
        this.setState({
            list:data.filter(item => {
                if(item.id !==id){
                    return item
                }
            })
        })
    }



    render(){

        return(
            <div>

                <Input
                    submitFn={this.submitFn}
                />
                <ListL
                    list={this.state.list}
                    deleteFnn={this.deleteFnn}
                />
            </div>
        )
    }



}

export default Tool
