import React from 'react'
import audi from '../../assets/img/audi-1024x676.png'

const GetQuotes = () => (
  <div className="get-quotes">
    <div className="get-quotes-text">
      <span className="get-quotes-info">
        Its time to forget worrying about repairs
      </span>
      <button className="btn-yellow-inverted">Get Quotes</button>
    </div>
    <div>
      <img src={audi} alt="audi" className="get-quotes-img" />
    </div>
  </div>
)

export default GetQuotes
