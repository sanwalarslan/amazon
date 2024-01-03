import React from 'react'
import './Location.css';
import avatar from '../assets/images/clients/avater.jpg';
import { Link } from 'react-router-dom';
const title = "More Then 60,000 Customers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
  {
    imgUrl: avatar,
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
  },
  {
    imgUrl: '../assets/images/clients/01.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/02.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/03.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
  },
]
const Location = () => {
  return (
    <div className='clients-section style-2 padding-tb'>
      <div className='container'>
        <div className='section-header '>
          <div className='title'><h4>{title}</h4></div>
          <p>{desc} </p>

        </div>



        <div className='section-wrapper'>
          <img src={avatar} alt="" />
          <div className="clients">
            {
              clientsList.map((val, i) => {
                <div key={i} className='client-list'>
                  <Link to="/sign-up" className='client-content'>
                    <span>{val.text}</span></Link>
                  <div className='client-thumb'>
                    <img src={val.imgUrl} alt='' />

                  </div>
                </div>
              }

              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location