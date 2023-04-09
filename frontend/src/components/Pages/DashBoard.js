import React from 'react'
import styled from 'styled-components'
import Navbar from '../Items/Navbar';

const Background = styled.div`
    /* background-image: url("/backimg.webp"); */
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    
`;
const Writtings = styled.div`
    position: relative;
    width: 100%;
    font-size: 3rem;
    font-weight: bold;
    padding: 10rem;
    color: #fff;
    display: flex;
    align-items: center;

`;
const Truck = styled.img`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    
`;
const Spanid = styled.div`
    color: #FF7426;
`;
const DashBoard = () => {
  return (
    <Background>
        <Navbar/>
        <Truck width = "100%" overflow="hidden" src="/backimg.webp" />
        <Writtings>
            The 
            <Spanid>Smart</Spanid> 
             Choice For the 
            <Spanid>Future</Spanid>
        </Writtings>
    </Background>
  )
}

export default DashBoard