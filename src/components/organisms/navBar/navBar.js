import { Component } from "react";
import styled from "styled-components";
import  "./css/navButtons.css"

class NavBar extends Component {

    ContainerNav = styled.div`
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 1em;
        left: 4.7%;
        width: 90vw;
        height: 8vh;
        background-color: lightSkyBlue;
        border-radius: 1em;
        border: solid 4px #ffffff;
        box-shadow: 2px 2px 10px #3a3a3a;

    `

    ContainerUl = styled.ul`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
        margin: 0;
        padding: 0;
    `

    ListIcon = styled.li`
        list-style-type: none;
        background-color: white;
        padding: .2em;
        border-radius: .3em;
        border: solid #696969 2px;
        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
        transition: transform ease-in-out 0.2s;
    `

    ListButton = styled.button`
        border: none;
        width: 3.5em;
        height: 3.5em;
    `

    render() {
        return(
            <this.ContainerNav>
                <this.ContainerUl>
                    <this.ListIcon><a href="#dogGallerySection"><this.ListButton className="dog-gallery-button"></this.ListButton></a></this.ListIcon>
                    <this.ListIcon><a href="#postCodeLookupSection"><this.ListButton className="postcode-convert-button"></this.ListButton></a></this.ListIcon>
                </this.ContainerUl>
            </this.ContainerNav>
        )
    }
}

export default NavBar