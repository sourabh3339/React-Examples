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
                    <ExclusiveItem/>
                </Segment>

                <Segment>
                    <ExclusiveItem/>
                </Segment>
                
            </Container>
        )
    }
}

export default MainPage;