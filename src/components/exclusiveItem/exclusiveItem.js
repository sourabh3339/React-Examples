import React from 'react'
import {Segment,Button,Input, Label} from 'semantic-ui-react'

class exclusiveItem extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            row:[]
        }
        this.addRow = this.addRow
        this.removeRow = this.removeRow.bind(this)
    }
    componentWillMount(){

    }
    addRow(){
        this.setState({
            row:this.state.row.concat([new Date().toString()])
        })
    }
    removeRow(evt){
        var index = this.state.row.indexOf(evt.target.id);
        this.setState((prevState) => ({
            row: [...prevState.row.slice(0,index), ...prevState.row.slice(index+1)]
          }))
    }
    createrow(){
        var row =[];
        for(var i in this.state.row){
            row.push(<Segment small key={this.state.row[i]}>
                <Label>{this.state.row[i]}</Label>
                <Input/>
                <Button floated='right' compact id={this.state.row[i]} onClick={this.removeRow}>REMOVE ROW</Button>
                </Segment>)
        }
        return(
            row
        )
    }
    render(){
        return(
            <Segment raised padded style={{backgroundColor:"#d6dbdf"}}>
                <Button compact onClick={()=>{this.addRow()}}>ADD ROW</Button>
                {this.createrow()}
            </Segment>
        )
    }
}

export default exclusiveItem;