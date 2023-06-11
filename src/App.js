import React, {useState,useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters,setCharacters] = useState([])

  useEffect(()=>{
    axios.get('https://swapi.dev/api/people/')
      .then(res=>{
        setCharacters(res.data)
      })
  },[])

  const Character = styled.div`
    border:1px solid green;
    background:black;
    color:white;
    font-weight:bold;
    font-size:30px;
    margin-left:50px;
    margin-right:50px;
    margin-top:10px;
    padding:10px;
  `

  const CharacterContainer = styled.div`
    margin-top:90px;
  `

  const Navbar = styled.div`
    width:100%;
    background-color:white;
    color:black;
    font-weight:bold;
    font-size:40px;
    text-align:center;
    position:fixed;
    top:0px;
    height:75px;
  `

  return (
    <div className="App">
      <Navbar>React Wars</Navbar>
      <CharacterContainer>
        {
          characters.map(character=>{
            return <Character>{character.name}</Character>
          })
        }
      </CharacterContainer>
    </div>
  );
}

export default App;
