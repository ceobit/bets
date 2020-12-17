import React from 'react';
import Bet from '../Bet/Bet';
import classes from './Bets.module.css'
import bets from '../../data/bets';

export default function Bets() {

  return (
    <div className={classes.bets_container}>
      <h4 className={classes.bets_title}>Bets</h4>
      {Object.keys(bets).map((item, index)=> {
        return (
          //Умею передавать как Context, а так же Redux, компонент небольшой поэтому props
          <Bet key={index} id={bets[item].id} title={bets[item].title} date={bets[item].date} bet={bets[item].bet} paid={bets[item].paid} status={bets[item].status} />
        )
      })}
    </div>
  )
}