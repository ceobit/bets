import React from 'react';
import moment from 'moment';
import classes from './Stage.module.css';
import faCoins from '../../images/fa-coins.svg';
import faClock from '../../images/fa-clock.svg';
import faWinGrey from '../../images/fa-win-gray.svg';

export default function Stage({date, bet, paid, stage}) {

  const cls = [
    classes.detail,
    classes.detail_grey,
  ];

  let value;
  let icon;
  switch (stage) {
    case 'Win':
      value = `+ ${paid}`;
      icon = faWinGrey;
      break;
    case 'Accepted':
      value = `0`;
      icon = faCoins;
      break;
    case 'Received':
      value = `- ${bet}`;
      icon = faClock;
      break;
    default:
      value = 0;
  }

  return (
    <>
      <div className={classes.wrapper}>
        <p className={cls.join(' ')}>{moment(date).format('HH:MM:SS')}</p>
        <div className={classes.amountWrapper}>
          <div className={cls.join(' ')}>{`Bet ${stage}:`}</div>
          <div className={cls.join(' ')}>{` ${value} €`}</div>
        </div>
        <div className={classes.logoWrapper}>
          <div className={cls.join(' ')}>{paid / 1000}</div>
          <img src={icon} className={classes.icon} alt="Это иконка"/>
        </div>
      </div>
    </>
  );
}
