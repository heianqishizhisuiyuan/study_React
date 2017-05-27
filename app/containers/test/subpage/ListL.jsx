import React from 'react'

class ListL extends React.Component{
    constructor(props){
        super(props)
        this.deleteFn=this.deleteFn.bind(this)
    }
    deleteFn(id){
       this.props.deleteFnn(id)
    }


    render (){
        return(
            <ul>
                {this.props.list.map((val,index)=>{
                    return <li key={index}  onClick={this.deleteFn.bind(this,val.id)} >{val.content}</li>
                })}
            </ul>
        )
    }
}
export default ListL