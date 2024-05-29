import React from 'react'
import "./TotalIpression.css"
import Tranding_Quiz from '../Tranding/Tranding_Quiz'
import Sidebar from '../sidebar/Sidebar'


const TotalIpression = () => {

    const highNuber = (number) => {
        if (number >= 1000) {
          return (number / 1000).toFixed(1) + 'K';
        }
        return number;
    };
    const totalImpressions = 1000; // example value
    const formattedImpressions = highNuber(totalImpressions);
  return (
      <>
          <Sidebar></Sidebar>
          <div className='background_color_total'>
              <div className='quiz_alldiv'>
                  
          
              <div className='quiz'>
                  <p className='toatal_quiz'>12 <span className='created_quiz'>Quiz</span> </p>
                  <p  className='created_quiz'>Created </p>
                  
                  </div>
              <div className='Questions'>
                  <p className='total_questions'>110 <span className='created_questions'>questions</span> </p>
                  <p  className='created_questions'>Created </p>
                  
                  </div>
              <div className='Impressions'>
                  <p className='toatal_Impressions'>{formattedImpressions} <span className='created_Impressions'>Total</span> </p>
                  <p  className='created_Impressions'>Impressions</p>
                  
                  </div>
              </div>
              <Tranding_Quiz></Tranding_Quiz>
          </div>
      </>
  )
}

export default TotalIpression