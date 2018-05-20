import React from 'react';
import {Segment, Container, Header} from 'semantic-ui-react'
import ExclusiveItem from './exclusiveItem/exclusiveItem'

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            backgroundcolor:'#FFFF',
            title:'First page'
        }
    }

    componentWillMount(){
    }
    componentWillUnmount(){
    }
    componentDidMount(){
    }
    componentWillReceiveProps(){
    }
    componentDidUpdate(){
    }
  
    render(){
        return(
            <Container fluid style={{backgroundColor:this.state.backgroundcolor}}>
                <Header as='h3' textAlign='center'>{this.state.title}</Header>
                <Segment raised>
                    <ExclusiveItem properties={{is_button:false,id:"first"}}/>
                </Segment>

                <Segment>
                    <ExclusiveItem properties={{is_button:true,id:"second"}}/>
                </Segment>
                
            </Container>
        )
    }
}

export default MainPage;