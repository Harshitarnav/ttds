import React , { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
// import MicIcon from '@mui/icons-material/Mic';
import CloseIcon from '@mui/icons-material/Close';
import data from "../json_lyrics.json";
import { Button, Input } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import {Container, Row, Col,Stack} from 'react-bootstrap';

function Search({ hideButtons }) {
// function Search() {
  const[{}, dispatch] = useStateValue();
  
  const [inputChoice, setInputChoice] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputArtist, setInputArtist] = useState("");
  const [inputGenre, setInputGenre] = useState();
  const [inputEmo, setInputEmo] = useState();
  const navigate = useNavigate();

  const search = (e) => {
    
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: inputTitle
    })

    navigate('/search')
    
    setInputTitle(e.target.value)

    console.log('search it up >> ', inputTitle)
  }

  const onSearch = (searchTerm) => {
    setInputTitle(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  const clearInput = () => {
    setInputTitle("");
  }

  return (
    <form className='search'>
      <Container className='search-comp'>

      {/* <Stack  direction="horizontal" className='search__inputWithBtn'> */}

        <Row className='search__input'>

          <Col>
            <div className='radiobox'>
              <input type='radio' name='choice' value="0" onChange={e=>setInputChoice(e.target.value)} /> Song Lyrics
              <input type='radio' name='choice' value="1" onChange={e=>setInputChoice(e.target.value)} /> Song Title
            </div>
          <Col>

          <Row className='searchBarHolder_song'>
            {/* <SearchIcon className="search__inputIcon" /> */}
            <Input fullWidth disableUnderline className="search__inputField" placeholder={"Enter your Lyrics"} value={inputTitle} onChange={e => setInputTitle(e.target.value)}/>
            {/* <CloseIcon id="clearBtn" onClick={clearInput} /> */}
          </Row>

          <div className="dropdown">
                  {data
                  .filter((item) => {
                    const searchTerm = inputTitle.toLowerCase();
                    const fullName = item.SONG_NAME.toLowerCase();

                    return (
                      
                      searchTerm &&
                      fullName.startsWith(searchTerm) &&
                      fullName !== searchTerm
                    );
                  })
                  .slice(0, 5)
                  .map((item,index) => 
                  
                  (
                    <div
                      onClick={() => onSearch(item.SONG_NAME)}
                      onChange={e => setInputTitle(e.target.value)}
                      className="dropdown-row"
                      key={index}
                    >
                    <Row md="auto"> 
                          <Col >
                          <p style={{textTransform: 'capitalize'}}>{item.SONG_NAME}</p> 
                          </Col>
                          
                          <Col>
                          <p className='artistNameInSearch' style={{textTransform: 'capitalize'}}>by {item.ARTIST_NAME}</p> 
                          </Col>
                    </Row>        
                  </div>
                  ))}
                </div>
          </Col>

          <Row className='searchBarHolder_artist'>
            {/* <SearchIcon className="search__inputIcon" /> */}
            <Input fullWidth disableUnderline className="search__inputField" placeholder={"Enter Artist Name"} value={inputArtist} onChange={e => setInputArtist(e.target.value)}/>
            {/* <CloseIcon id="clearBtn" onClick={clearInput} /> */}
          </Row>

          </Col>

            <div className='searchBarHolder_emo'>
                <select value={inputEmo} onChange={e=>setInputEmo(e.target.value)}>
                  <option>--Emotion--</option>
                  <option>Sad</option>
                  <option>Joy</option>
                  <option>Love</option>
                  <option>Anger</option>
                  <option>Fear</option>
                </select>
            </div>

            <div className='searchBarHolder_genre'>
                <select value={inputGenre} onChange={e=>setInputGenre(e.target.value)}>
                  <option>--Genre--</option>
                  <option>Sad</option>
                  <option>Joy</option>
                  <option>Love</option>
                  <option>Anger</option>
                  <option>Fear</option>
                </select>
            </div>

          <div className="search__buttons">
            <Button type='submit' onClick={search} variant = 'outlined'>Search</Button>
            {/* <Button variant = 'outlined'>Feeling Lucky</Button> */}
          </div>

          </Row>
    </Container>
  </form> )}

export default Search