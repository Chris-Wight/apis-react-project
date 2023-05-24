import { Component } from "react";
import styled from "styled-components";

class UlListDogGallery extends Component {
    StyledUl = styled.ul`
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1em;
    list-style: none;
    width: 90%;
    height: 15em;
    margin: 0;
    padding: 0;
    background-color: aliceBlue;
    font-size: .8rem;
    padding: .5em;
    text-align: center;
    border-radius: 1em;
    scroll-behavior: auto;

`
    render(){
        const {weight, height, lifeSpan, temperament, origin} = this.props
        return(
            <this.StyledUl>
                <li>Weight: {weight}</li>
                <li>Height: {height}</li>
                <li>Life Span: {lifeSpan}</li>
                <li>Temperament: {temperament}</li>
                <li>Origin: {origin == true ? origin : "No Information"}</li>
            </this.StyledUl>
        )
    }
}

export default UlListDogGallery