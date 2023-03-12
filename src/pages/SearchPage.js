import React, { useState } from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'
import Search from '../components/Search';
import logo from '../searchPage-removebg-preview.png';
import {Card, Button,Stack, Col, Row,Container} from 'react-bootstrap';


function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  const { data } = useGoogleSearch(term);
  console.log("this shit", data);

  //////// PAGINATION BLOCK
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.items.slice(indexOfFirstPost, indexOfLastPost);

  console.log("bhakmadharchhodh", currentPosts)
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (

    <div  className='searchPage'>
  <div>

  
  </div>
        <div className='searchPage__header'>
            <Link to="/">
                <img className="searchPage__logo" src= {logo} alt=""/>
            </Link>
            
            <div className='searchPage__headerBody'>
                <Search className='searchPage__bar' hideButtons />
            </div>
        </div>


        <div className='searchOutput'>
        {term && (
            <Col className='searchPage__results'>
                <p className='searchPage__resultCount'>
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.searchTime} seconds)
                    for {term}
                </p>


                <div className='actualSearchResults'>
                {currentPosts?.map(item => (

                <Card className='searchPage_resultCard'>
                    <Link to="/search/result" state={{ from : item}} >
            
                    <Row>
                        <Col>

                        <div className='searchPage__resultVideo'>
                            <ReactPlayer url='https://www.youtube.com/watch?v=xNRJwmlRBNU' width={250} height={180}/>
                        </div>

                        </Col>

                    {/* <Col  >


                    {/* <Link to="/search/result" state={{from: item}}  className='searchPage__resultLink' >
                    {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                    <img className='searchPage__resultImage' src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt=""/>
                        )}
                    {item.pagemap} ↓
                    </Link> */}
                    {/* title

                    </Col> */}


                        <Col className='card_text'>

                        
                            <div className='seachPage__resultTitle' >
                            <h2 style={{textTransform: 'capitalize'}}>{item.title}</h2>
                            </div>
                        
                            <div className='seachPage__resultArtist' >
                            <h4 style={{textTransform: 'capitalize'}}>by {item.cse_image}</h4>
                            </div>
                        
                            <div className='searchPage__resultSnippet'>
                                {item.snippet.slice(0,200)+("...")}
                            </div>

                            {/* <p className='seachPage__resultTitle' style={{textTransform: 'capitalize'}}>{item.title}</p>
                            <p className='seachPage__resultArtist' style={{textTransform: 'capitalize'}}>by {item.cse_image}</p>
                            <p className='searchPage__resultSnippet' style={{textTransform: 'capitalize'}}>{item.snippet.slice(0,200)+("...")}</p> */}

                        
                        </Col>


                    </Row>
                    </Link>
    
              
                </Card>

                // <div className='searchPage__resultGrid'>

                //     <div className='video'>
                //         <ReactPlayer url='https://www.youtube.com/watch?v=xNRJwmlRBNU' />
                //     </div>

                //     <div className='searchPage__result'>
                //         <Link to="/search/result" state={{from: item}}  className='searchPage__resultLink' >
                //             {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                //                 <img className='searchPage__resultImage' src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt=""/>
                //             )}

                //             {item.pagemap} ↓
                //         </Link>
                //         <Link to="/search/result" state={{ from : item}} className='seachPage__resultTitle' >
                //             <h2>{item.title}</h2>
                //         </Link>
                //         <p className='searchPage__resultSnippet'>{item.snippet.slice(0,200)+("...")}</p>
                //     </div>
                // </div>
                ))}
                
            </div>

            <Pagination className='pagination'
                postsPerPage = {postsPerPage}
                totalPosts = {data?.items?.length}
                paginate = {paginate}
                />

            </Col>
        )}

    </div>

    </div>
  )
}

export default SearchPage