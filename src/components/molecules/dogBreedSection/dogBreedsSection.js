import { Component } from "react";
import styled from "styled-components";
import fetchBreedInfo from "../../../APIs/dogSelectionApi";
import UlListDogGallery from "../ulListDogGallery/ulListDogGallery";

class DogBreedsSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: null,
            dogData: [], 
            img: "",
            weight: "",
            height: "",
            lifeSpan: "" ,
            temperament: "",
            origin: "", 
        }
    }

    StyledImg = styled.img`
        background-color: white;
        width: 90%;
        height: 20em;
        object-fit: contain;
        border: solid #ffffff;
        box-shadow: 2px 2px 10px #3b3b3b;
        border-radius: 1em;
    `
    StyledSelect = styled.select`
        background-color: white;
        margin: 0;
        padding: 0;
        width: 18em;
        height: 3em;
        border-radius: 1em;
        border: solid #272727 2px;
    `
    StyledDiv = styled.div`
        display: flex;
        flex-direction: column;
        gap: 1em;
        justify-content: center;
        align-items: center;
    `
    async componentDidMount(){
        const dogData = await fetchBreedInfo()
        this.setState({dogData})
        this.setState({
            id: dogData[0].id,
            img: dogData[0].image,
            weight: dogData[0].weight,
            height: dogData[0].height,
            lifeSpan: dogData[0].lifeSpan,
            temperament: dogData[0].temperament,
            origin: dogData[0].origin,
        })
    }
    handleChange = (e) =>{
        const name = e.target.value;
        this.state.dogData.forEach((breed) => {
            if(breed.name == name){
                this.setState({
                    id: breed.id,
                    img: breed.image,
                    weight: breed.weight,
                    height: breed.height,
                    lifeSpan: breed.lifeSpan,
                    temperament: breed.temperament,
                    origin: breed.origin
                })
            }
        })
    }
    render(){
        const {dogData, img, weight, height, lifeSpan, temperament, origin} = this.state
        return(
            <this.StyledDiv>
                <this.StyledImg src={img} />
                <UlListDogGallery 
                    weight={weight}
                    height={height} 
                    lifeSpan={lifeSpan} 
                    temperament={temperament} 
                    origin={origin}
                />
                <this.StyledSelect onChange={this.handleChange}>
                    {dogData.map(({id, name}) =>{
                        return <option key={id} value={name}>{name}</option>
                    })}
                </this.StyledSelect>
            </this.StyledDiv>
        )
    }
}

export default DogBreedsSection