import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LineDiv from './components/Applets/LineDiv'
import NavBar  from './components/NavBar/NavBar'
import FullLenghtPosters from './components/FullLenghtPosters/FullLenghtPosters'
import './App.css'
import MovieCard from './components/MovieCard/MovieCard'
import MovieRow from './components/MovieRow/MovieRow'
import ContainerTitle from './components/Applets/ContainerTitle'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {

  return (
    <>
      <NavBar />
      <div className='body-div'>
        <FullLenghtPosters />
        <LineDiv />
        <ContainerTitle title="FILMES QUE VOCÊ PODE GOSTAR" textAlign="center" />
        <div style={{display:'flex',justifyContent:'center'}}>
        <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={true}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 4,
                                partialVisibilityGutter: 20
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                        style={{
                            display:'block',
                            margin: 'auto 0'
                        }}>
                        <MovieCard className="carousel-item-padding-40-px" name="Knives-out: Glass Union" year="2022" rating="68%"
                            poster="https://www.themoviedb.org/t/p/w440_and_h660_face/zQJcENHbZUpLQ8RKYt9wTzcXCwv.jpg" />
                        <MovieCard className="carousel-item-padding-40-px" name="Avatar" year="2009" rating="68%"
                            poster="https://www.themoviedb.org/t/p/w440_and_h660_face/8VV4YUwOGxgolFZTo2SgNwsfznR.jpg" />
                        <MovieCard className="carousel-item-padding-40-px" name="Matilda: O musical" year="2022" rating="68%"
                            poster="https://www.themoviedb.org/t/p/w440_and_h660_face/x5GR75CM0FbATtHjnAaE7WwUXkX.jpg" />
                        <MovieCard className="carousel-item-padding-40-px" name="Black Panter: Wakanda Forever" year="2022" rating="68%"
                            poster="https://www.themoviedb.org/t/p/w440_and_h660_face/cryEN3sWlgB2wTzcUNVtDGI8bkM.jpg" />
                        <MovieCard className="carousel-item-padding-40-px" name="Matilda: O musical" year="2022" rating="68%"
                            poster="https://www.themoviedb.org/t/p/w440_and_h660_face/x5GR75CM0FbATtHjnAaE7WwUXkX.jpg" />
                        <MovieCard className="carousel-item-padding-40-px" name="Matilda: O musical" year="2022" rating="68%"
                            poster="https://www.themoviedb.org/t/p/w440_and_h660_face/x5GR75CM0FbATtHjnAaE7WwUXkX.jpg" />
                    </Carousel>
                    </div>
      </div>
    </>
    );
  }

export default App
