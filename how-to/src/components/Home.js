import React from "react"
import SkaterBoi from "../assets/SkaterBoi.svg"

import styled from "styled-components"

class Home extends React.Component {
    render() {
        return (
            <Skater src={SkaterBoi} alt="Skater" />
        )
    }
}

const Skater = styled.img`
padding-top: 5rem
display: flex;
align-items: center
@media (max-width: 650px) {
    padding-top: 30vh;
    width: 75%;
    margin: auto;
}`
export default Home;