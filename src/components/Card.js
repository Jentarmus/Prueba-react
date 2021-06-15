import React from 'react'
import PropTypes from 'prop-types'
import './Cards.css'

function Card({title, imageSource, url}){
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">Esto es un ejemplo de card no 1</p>
        <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
          Go to this website
        </a>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
}

export default Card
