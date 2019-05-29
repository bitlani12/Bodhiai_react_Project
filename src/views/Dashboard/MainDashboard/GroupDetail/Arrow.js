import React from 'react';
import './GroupDetail.css';
export default class Arrow extends React.Component {


  render() {
    const {direction, styleClassName, clickHandler , classs} = this.props;
    return (
      <div
       
        onClick={e => clickHandler(direction)}
      >
        {direction === 'left' &&
         <div className={styleClassName}>
         <div className="prev-next-button previous">
            <svg viewbox="0 0 100 100">
            <path className="arrow" d="M 50,0 L 60,11 L 20,50 L 60,90 L 50,100 L 0,50 Z" transform=" translate(15,0)"/>
        </svg>
        </div>
        </div> ||  <div  className={styleClassName} >
    <div className="prev-next-button-next next">
        <svg viewbox="0 0 100 100">
      <path className="arrow" d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z " transform="translate(85,100) rotate(180) "/>
    </svg>
    </div>
    </div>}
      </div>
    )
  }
} 
