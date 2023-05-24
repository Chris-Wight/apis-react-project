import { Component } from "react"
import styled from "styled-components"
import postcodeBackground from "./images/blurredPostcodeBackground.webp"
import postcodeSectionBackground from "./images/postcodeSectionBackground.webp"
import PostCodeSection from "../../molecules/postCodeSection/postCodeSection"


class PostCodeLookup extends Component {

    StyledSection = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(${postcodeSectionBackground});
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        width: 100%;
        background-color: aliceBlue;
    `
    StyledDiv = styled.div`
        overflow: hidden;
        background-image: url(${postcodeBackground});
        background-repeat: no-repeat;
        background-size: cover;
        width: 90%;
        height: 84%;
        margin-top: 5em;
        border: solid 4px #ffffff;
        border-radius: 1em;
        box-shadow: 2px 2px 10px #3a3a3a;
    `
    StyledOverlayDiv = styled.div`
        width: 100%;
        height: 100%;
    `
    render(){
        return(
            <this.StyledSection id="postCodeLookupSection">
                <this.StyledDiv>
                    <this.StyledOverlayDiv>
                        <PostCodeSection />
                    </this.StyledOverlayDiv>
                </this.StyledDiv>
            </this.StyledSection>
        )
    }
}

export default PostCodeLookup