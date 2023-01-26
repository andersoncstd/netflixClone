import './MovieRow.css'
import MovieCard from '../MovieCard/MovieCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';


class MovieRow extends React.Component {
    render() {
        return (
            <>
                <div className='movie-row'>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
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
                                items: 3,
                                partialVisibilityGutter: 40
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
            </>
        )
    }

}

export default MovieRow;