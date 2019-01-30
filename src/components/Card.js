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

*/

/* tutaj wersja spoko na górze wersja z destrukcja ;]
import React, { Component } from 'react';

const Card = (props) => {
  return (
    <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt='robots' src={`https://robohash.org/${props.id}`} width="200px" height="200px"/>
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <p>{props.username}</p>
      </div>

    </div>
  )
}

export default Card;

*/
/*
class Hello extends Component {
  render() {
    return (
      <div className="f1 tc">
        <h1 > Hello Biatch</h1>
        <p> Sracz Ninja</p>

      </div>

    );
  }
}

export default Card;
*/
