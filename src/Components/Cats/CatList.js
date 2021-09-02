import React from 'react';

const CatList = (props) => {
  return (
    <div>
      {props.cats.map((cat, index) => {
        return (
          <li key={index}>{cat}</li>
        )
      })}
    </div>
  )
}

export default CatList;
