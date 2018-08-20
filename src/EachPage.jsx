import React, { Fragment } from 'react';
import { ParallaxLayer } from 'react-spring'

const EachPage = ({ offset, gradient, title, caption, handleClick }) => {
  return (
    <Fragment>
      <ParallaxLayer
        offset={offset}
        speed={0.2}
        onClick={handleClick}
      >
        <div className={`first-bit`}></div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offset}
        speed={0.5}
        onClick={handleClick}
      >
        <div className={`second-bit ${gradient}`}></div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offset}
        speed={-0.2}
        onClick={handleClick}
      >
        <h1 className="big-number">{offset + 1}</h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offset}
        speed={0.2}
        onClick={handleClick}
      >
        <span>
          <p style={{ fontSize: 20 }}>{title}</p>
          <div className={`stripe ${gradient}`} />
          <p>{caption}</p>
        </span>
      </ParallaxLayer>
    </Fragment>
  )
}

export default EachPage;