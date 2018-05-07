import React from 'react'
import {Segment,Button,Input, Label} from 'semantic-ui-react'
import { connect } from 'react-redux'
import {Store} from '../../core/store'
import  * as Actions from './action.js'

class exclusiveItem extends React.Component{
    constructor(props){
        super(props);
        this.is_button = props.properties?props.properties.is_button:undefined;
        this.state = {
            row:[]
        };
        this.addRow = this.addRow
        this.removeRow = this.removeRow.bind(this)
        this._dispatch_action = this._dispatch_action.bind(this)
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
            row.push(<Segment key={this.state.row[i]}>
                <Label>{this.state.row[i]}</Label>
                <Input/>
                <Button floated='right' compact id={this.state.row[i]} onClick={this.removeRow}>REMOVE ROW</Button>
                </Segment>)
        }
        return(
            row
        )
    }
    _dispatch_action(){
        Store.dispatch(Actions.addRowData(this.state));
    }
    render(){
        return(
            <Segment raised padded style={{backgroundColor:"#d6dbdf"}}>
    {this.is_button?(<Button compact onClick={()=>{this._dispatch_action()}}>Do Action</Button>):null}
                <Button compact onClick={()=>{this.addRow()}}>ADD ROW</Button>
                {this.createrow()}
            </Segment>
        )
    }
}

function mapStateToProps(state, otherProps) {
    const {itemData} = state;
    if(itemData && itemData[row]){
        return itemData[row];
    }
    return {}
}

export default connect(mapStateToProps)(exclusiveItem);