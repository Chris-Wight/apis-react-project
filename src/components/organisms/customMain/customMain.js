import { Component } from "react";
import styled from "styled-components";

class CustomMain extends Component {

    StyledMain = styled.main`
        height: 100vh;
        
    `

    render(){
        return(
            <this.StyledMain>
                {this.props.children}
            </this.StyledMain>
        )
    }
}

export default CustomMain