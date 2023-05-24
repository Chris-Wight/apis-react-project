import { Component } from "react";
import styled from "styled-components";
import getLocalPostcodes from "../../../APIs/latLonFromPostcodeApi";

class PostCodeSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            userPostCodeInput: "",
            localPostCodes: [],
        }
    }
    
    StyledSection = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        gap: 2em;
    `
    StyledDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: white;
        border-radius: 1em;
        border: solid #272727 2px;
        width: 90%;
        max-width: 70em;
        height: 30em;
        `
    StyledInput = styled.input`
        border-radius: 1em;
        border: solid #272727 2px;
        width: 20em;
        height: 3em;
    `
    StyledUl = styled.ul`
        border: solid green 2px;
        padding: 0;
        margin: 0;
        width: 90%;
        height: 70%;
        border: solid red 2px;
    `
    StyledH2 = styled.h2`
        text-align: center;
        border: solid red 2px;
    `
    StyledLi = styled.li`
        text-align: center;
        list-style: none;
        font-family: fantasy;
        border: solid blue 2px;
    `
    handleChange = (e) =>{
        const userInput = e.target.value;
        clearTimeout(this.inputTimeout)
        this.inputTimeout = setTimeout(() =>{
            this.setState({
                userPostCodeInput: userInput,
            })
        },1500)
    }

    async componentDidUpdate(prevProps, prevState){
        if(prevState.userPostCodeInput != this.state.userPostCodeInput){
            if(this.state.userPostCodeInput.toLowerCase().match(/^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/g)){
                this.setState({
                    localPostCodes: await getLocalPostcodes(this.state.userPostCodeInput)
                })
            }
        }
    }

    render(){
        return(
            <this.StyledSection>
                <this.StyledDiv>
                    <this.StyledH2>Local postcodes in your area</this.StyledH2>
                    <this.StyledUl>
                        {this.state.localPostCodes.map((localPostcode, index) => {
                            return <this.StyledLi key={index}>{localPostcode.postCode}</this.StyledLi>
                        })}
                    </this.StyledUl>
                </this.StyledDiv>
                <this.StyledInput type="text" onChange={this.handleChange} placeholder="Input UK Postcode"></this.StyledInput>
            </this.StyledSection>
        )
    }
}

export default PostCodeSection