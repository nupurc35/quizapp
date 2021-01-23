import React  from 'react'
const Score = ({score})=>{
    return (
        <div className='section-question'>
        <div className='score-box'>
               <h1 className="score-text">
                   your score is {score}
               </h1>
        </div>
        </div> 
      );
       }
export default Score

