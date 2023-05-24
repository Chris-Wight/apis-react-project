import { Component } from "react";
import styled from "styled-components";
import dogBackgroundImage from "./images/sceneBackground.png";
import grassOverlayImage from "./images/grassOverlay.png"
import DogBreedsSection from "../../molecules/dogBreedSection/dogBreedsSection.js";

class DogSection extends Component {

    StyledSection = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background-image: url(${dogBackgroundImage});
        background-size: cover;
    `
    StyledDiv = styled.div`
        overflow: hidden;
        background-color: lightSkyBlue;
        width: 90%;
        height: 84%;
        margin-top: 5em;
        border: solid 4px #ffffff;
        border-radius: 1em;
        box-shadow: 2px 2px 10px #3a3a3a;
        
    `
    StyledOverlayDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(${grassOverlayImage});
        background-size: cover; 
        background-position:bottom ;
        background-repeat: repeat-x;
        width: 100%;
        height: 100%;
    `
    render(){
        return(
            <this.StyledSection id="dogGallerySection">
                <this.StyledDiv>
                    <this.StyledOverlayDiv>
                        <DogBreedsSection />
                    </this.StyledOverlayDiv>
                </this.StyledDiv>
            </this.StyledSection>
        )
    }
}

export default DogSection