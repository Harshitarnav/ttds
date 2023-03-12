import React from 'react'
import './ResultPage.css'
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'
import { useLocation } from "react-router-dom";
import Search from './SearchPage';
import {Card, Button,Stack, Col, Row,Container} from 'react-bootstrap';

export default function ResultPage({state}) {

const data = "she like fancy cars, i got fancy cars too, she want a movie star, well i'm a movie star too, she wanna fall apart, just to know someone can pull her together, she wanna break my heart, knowing that no one can make it all better, what did you want to say, is that what you want to say, before you walk away, is that all you want to say, what did you want to say, is that what you want to say, before you walk away, is that all you want to say, come on tell me, but you don't know me, come on tell me, you don't love me, you can't love me, i've been getting on, are you getting on too, if i'm what you want, why you put it on you, she wanna leave a mark, just to know someone will always remember, she wanna break these hearts, but nothing and no one can make it all better, what did you want to say, is that what you want to say, before you walk away, is that all you want to say, what did you want to say, is that what you want to say, before you walk away, is that all you want to say, come on tell me, but you don't know me, come on tell me, you don't know me, you can't love me, you can't love me, you don't know me, you don't know me, what did you want to say, is that what you want to say, before you walk away, is that all you want to say, what did you want to say, is that what you want to say, before you walk away, is that all you want to say, come on tell me, that you don't know me, come on tell me, that you don't know me, you can't love me, what did you want to say, is that what you want to say, before you walk away, is that all you want to say";
const location = useLocation();
const {from} = location.state;
console.log("chai chai", from);

  return (
    <Container>

      <h1 className='title' style={{textTransform: 'capitalize'}}>{from.title}</h1>
      <Row className='ResultBody'>

        <Col>
          <div className='video'>
              <ReactPlayer url='https://www.youtube.com/watch?v=xNRJwmlRBNU' />
          </div>

          <div className='details' style={{textTransform: 'capitalize'}}>
              {"Artist: "+from.cse_image}
          </div>
        </Col>

        <div className='lyrics'>
              {from.snippet.split(", ").map((line, i) => <div key={i}>{line}</div>)}
        </div>  
      </Row>
      
    </Container>
  )
}

