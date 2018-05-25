import React from 'react'

class Input extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:''
        }
        this.onChange=this.onChange.bind(this)
        this.onKeyU=this.onKeyU.bind(this)
    }
    onChange(e){
        this.setState({
            value:e.target.value
        })
    }
    onKeyU(e){
        const value = this.state.value
        if(e.keyCode=='13'){
            this.props.submitFn(value)
            this.setState({
                value:''
            })
        }
    }
    render (){
        return(
            <input
                type="text"
                style={{width:'100%',height:'40px',fontSize:'20px'}}
                value={this.state.value}
                onChange={this.onChange}
                onKeyUp={this.onKeyU}
            />
        )
    }
}
export default Input