import React , { useState } from 'react'
import './Search_4.css'
import SearchIcon from '@mui/icons-material/Search';
// import MicIcon from '@mui/icons-material/Mic';
import CloseIcon from '@mui/icons-material/Close';
import data from "../json_lyrics.json";
import { Button, Input } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import {Container, Row, Col,Stack} from 'react-bootstrap';

function Search_4({ hideButtons }) {
// function Search() {
  const[{}, dispatch] = useStateValue();
  
  const [inputTitle, setInputTitle] = useState("")
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
      <Container>

      {/* <Stack  direction="horizontal" className='search__inputWithBtn'> */}

        <Stack  direction="vertical" className='search__input'>

          <Row className='searchBarHolder'>
        
            <SearchIcon className="search__inputIcon" />
            <Input disableUnderline className="search__inputField" placeholder={"Enter your Lyrics"} value={inputTitle} onChange={e => setInputTitle(e.target.value)}/>
            
            <div>
              <select>
                <option>Sad</option>
                <option>Joy</option>
                <option>Love</option>
                <option>Anger</option>
                <option>Fear</option>
              </select>
            </div>
            
            <CloseIcon id="clearBtn" onClick={clearInput} />
          
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
                      {/* <p className='artist'>
                        {item.ARTIST_NAME}
                        
                      </p> */}

                      {/* <div className='lyrics'>
                        {item.LYRICS.slice(0,200)}
                      </div> */}
                  </div>
                  ))}
                </div>
        </Stack>

        {!hideButtons ? 
        (
          <div className="search__buttons">
            <Button type='submit' onClick={search} variant = 'outlined'>Search</Button>
            {/* <Button variant = 'outlined'>Feeling Lucky</Button> */}
          </div>
          
        ) 
        : 
        (
          <div className="search__buttons">
            <Button onClick={search} className="search__buttonsHidden" type='submit' variant = 'outlined'>Search</Button>
            {/* <Button className="search__buttonsHidden" variant = 'outlined'>Feeling Lucky</Button> */}

            {/* <div className="dropdown_hidden">
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
              .slice(0, 10)
              .map((item) => (
                <div
                  onClick={() => onSearch(item.SONG_NAME)}
                  // placeholder={item.SONG_NAME} value={item.SONG_NAME} onChange={e => setInput(e.target.value)}
                  onChange={e => setInputTitle(e.target.value)}
                  className="dropdown-row"
                  // key={item.SONG_NAME}
                >
                {item.SONG_NAME}
               </div>
              ))}
          </div> */}

          </div>
        )}
        
        {/* </Stack> */}
    </Container>
  </form> )}

export default Search_4