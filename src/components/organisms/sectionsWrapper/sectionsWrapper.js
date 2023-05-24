import { Component } from "react";
import styled from "styled-components";

class SectionsWrapper extends Component {

    StyledSection = styled.section`
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 100%;
        overflow-x: hidden;
        scroll-behavior: smooth;
        background-color: lightCoral;
        height: 100%;
    `

    render(){
        return(
            <this.StyledSection>
                {this.props.children}
            </this.StyledSection>
        )
    }
}

export default SectionsWrapper