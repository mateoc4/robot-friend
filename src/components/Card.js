import React from 'react';

const Card = ({name, email, id , username}) => {

  return (
    <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt='robots' src={`https://robohash.org/${id}`} width="200px" height="200px"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{username}</p>
      </div>

    </div>
  )
}

export default Card;
/* tu wersja z destrukcja 1 poziomu na gorze juz ostateczna wersja destrukcyjna ;]]]
import React, { Component } from 'react';

const Card = (props) => {
  const {name, email, id , username} = props;
  return (
    <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt='robots' src={`https://robohash.org/${id}`} width="200px" height="200px"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{username}</p>
      </div>

    </div>
  )
}

export default Card;
