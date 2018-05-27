import React from 'react'
import {Segment,Button,Input, Label} from 'semantic-ui-react'
import { connect } from 'react-redux'
import {Store} from '../../core/store'
import  * as Actions from './action.js'

class exclusiveItem extends React.Component{
    constructor(props){
        super(props);

        let {is_button,id } = props.properties?props.properties:{};

        this.state = {
            is_button,
            id,
            row:this.props.row?this.props.row:[],
            input_value:""
        };
        this.addRow = this.addRow
        this.removeRow = this.removeRow.bind(this)
        this._dispatch_action = this._dispatch_action.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentWillMount(){

    }
    handleChange(evt){
        this.setState({ input_value: evt.target.value });
    }
    addRow(){
        let payload = Object.assign({},this.state);
        if(this.state.input_value){
            payload.new_item = this.state.input_value;
        } else {
            return;
        }
        Store.dispatch(Actions.addRowData(payload));
    }
    removeRow(evt){
        var index = this.state.row.indexOf(evt.target.id);
        this.setState((prevState) => ({
            row: [...prevState.row.slice(0,index), ...prevState.row.slice(index+1)]
          }))
    }
    createrow(rows){
        var row =[];
        for(var i in rows){
            row.push(
                <Segment key={rows[i]}>
                    <Label>{rows[i]}</Label>
                    <Input/>
                    <Button floated='right' compact id={rows[i]} onClick={this.removeRow}>REMOVE ROW</Button>
                </Segment>)
        }
        return(
            row
        )
    }
    _dispatch_action(){
        //Store.dispatch(Actions.addRowData(this.state));
        Store.dispatch(Actions.removeRowData(this.state));
    }
    componentWillReceiveProps(nextProps){
       // this.state.row = nextProps.row;
       if(nextProps.new_item){
            this.setState({
                row:this.state.row.concat([nextProps.new_item])
            });
       } else {
        this.setState({
            row:nextProps.row.slice(0,nextProps.row.length)
        });
       }
    }
    render(){
        return(
            <Segment raised padded style={{backgroundColor:"#d6dbdf"}}>
                {this.state.is_button?(<Button compact onClick={()=>{this._dispatch_action()}}>Do Action</Button>):null}
                <Input onChange={this.handleChange}/>
                <Button compact onClick={()=>{this.addRow()}}>ADD ROW</Button>
                {this.createrow(this.state.row)}
            </Segment>
        )
    }
}

function mapStateToProps(state, otherProps) {
    const id = otherProps.properties.id;
    if(state.exclusiveItem && state.exclusiveItem[id]){
         let  {row, new_item} = state.exclusiveItem[id];
         return {row, new_item};
    }
   return {row:[], new_item:""};  
}

export default connect(mapStateToProps)(exclusiveItem);