import React from 'react';
import ReactStopwatch from 'react-stopwatch';



function Stopwatch (props) {
  
  
  console.log('isredering:')
  
  return(
  <ReactStopwatch
    seconds={props.seconds}
    minutes={0}
    hours={0}
    limit="00:00:10"
    onCallback={() => console.log('Finish')}
    onChange={({ hours, minutes, seconds }) => {
      // do something
    }}
    render={({ formatted, hours, minutes, seconds }) => {
      return (
        <div className="rounded border border-primary d-flex justify-content-center"
        style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
          <p className='align-middle'
          >
            {formatted}
          </p>
        </div>
      );
    }}
   />
  )};
 
export default Stopwatch;
