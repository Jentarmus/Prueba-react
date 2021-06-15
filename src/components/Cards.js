import React from 'react'
import Card from './Card'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'


const cards = [
  {
    id: 1,
    title: 'Fast Web',
    image: image1,
    url: 'https://fastweb.com'
  },
  {
    id: 2,
    title:'Fast Blog',
    image: image2,
    url: 'https://blog.fastweb.com'
  },
  {
    id: 3,
    title: 'Fast Youtube',
    image: image3,
    url: 'https://youtube.com/fastweb'
  }
]

function Cards(){
  console.log(cards);
    return(
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {
            cards.map((card) => (
                <div className="col-md-4" key={card.id}>
                  <Card title={card.title} imageSource={card.image} url={card.url}/>
                  </div>
              )
            )
          }
        </div>
      </div>
    )
}

export default Cards
