import React from 'react'
import {connect} from 'react-redux'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'
import PropTypes from 'prop-types'

import {setFavorite} from '../actions'


const CarouselItem = (props) => {
  const {cover, title, year, duration, contentRating} = props;

  const handleSetFavorite = () => {
    props.setFavorite(
      {
        cover, title, year, duration, contentRating
      }
    )
  }

  return(
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} ></img>
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"></img>
            <img className="carousel-item__details--img" 
                 src={plusIcon} 
                 alt="Plus Icon"
                 onClick={handleSetFavorite}/>
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
          </p>
        </div>
    </div>
  )
}


CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
}

const mapDispatchToProps = {
  setFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem)
