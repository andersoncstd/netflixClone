import { useEffect } from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import React from 'react';
import './FullLenghtPosters.css'

  var images = [
    "https://www.themoviedb.org/t/p/original/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    "https://www.themoviedb.org/t/p/original/luoab7AkUEcB6hGSOfXLQrhhliK.jpg",
    "https://www.themoviedb.org/t/p/original/8sMmAmN2x7mBiNKEX2o0aOTozEB.jpg",
    "https://www.themoviedb.org/t/p/original/A3xuGtP39Plk9gNVRDDlt6qdtFn.jpg",
    "https://www.themoviedb.org/t/p/original/i1GT0e6Crg6UezT3ibXnMS3pBAd.jpg"
  ];


class RandomImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: 0 };
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.next();
      }, 4000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  next() {
    if (images.length - 1 <= this.state.image) {
      this.setState({ image: 0 });
    } else {
      this.setState({ image: this.state.image + 1 });
    }
  }
  render() {
    return (
      <>
        <div className='main-container'>
          <img className='horizontal-poster' src={images[this.state.image]} />
        </div>
        <h3 className='container-title'>EM DESTAQUE</h3>
      </>
    );
  }
}

function FullLenghtPosters() {
  return (
    <RandomImage />
  )
}

export default FullLenghtPosters;