import React, {useState} from 'react';
import moment from 'moment';
import classes from './Bet.module.css';
import faCoins from '../../images/fa-coins.svg';
import faClock from '../../images/fa-clock.svg';
import faWin from '../../images/fa-win.svg';
import faFail from '../../images/fa-fail.svg';
import Stage from '../Stage/Stage';
import betStages from '../../data/betStages';
import actionType from '../../data/actionType';

export default function Bet({id, date, title, bet, paid, status}) {

  const [isOpen, setIsOpen] = useState(false);

  // массив классов, будем управлять в зависимости от статуса
  const cls = [
    classes.detail,
    classes.detail_grey,
    classes.detail__weight_normal,
  ];

  const mainTitle = [
    classes.detail,
    classes.detail_white,
    classes.detail__weight_bold,
  ];

  // Получим цвет для каждой активности
  const getTitleColor = (title) => {
    return actionType[title];
  };

  let icon;
  switch (status) {
    case 'complete':
      icon = faCoins;
      break;
    case 'pending':
      icon = faClock;
      break;
    case 'win':
      icon = faWin;
      cls.push(classes.win);
      mainTitle.push(classes.win);
      break;
    case 'fail':
      icon = faFail;
      break;
    default:
      icon = faCoins;
  }

  const handleShow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={handleShow}>
      <div className={classes.wrapper}>
        <p className={mainTitle.join(' ')}>{`ID ${id}`}</p>
        <div className={mainTitle.join(' ')}>
          {/*  Выводим заголовок по частям с разным цветами*/}
          <div className={classes.title_width}>
            {title.map((item, index) => {
              return (
                <>
                  <span style={{color: getTitleColor(item)}}
                        key={index}> {item} </span>
                  {index + 1 < title.length ? ' or ' : null}
                </>
              );
            })}
          </div>
        </div>
        <img src={icon} className={classes.icon} alt="Это иконка"/>
      </div>
      <div className={classes.wrapper}>
        <p className={cls.join(' ')}>{moment(date).format('HH:MM:SS')}</p>
        <div className={classes.bet_values}>
          <span className={cls.join(' ')}>{`Bet: ${bet} € `}</span>
          <span className={cls.join(' ')}>{`Paid: ${paid} €`}</span>
        </div>
        <div className={cls.join(' ')}>{paid / 1000}</div>
      </div>
      {(isOpen && status === 'win') && betStages.map((item, index) => {
        return (
          <Stage key={index} date={date} paid={paid} icon={icon} stage={item} bet={bet}/>
        );
      })}
      <div className={classes.line}/>
    </div>
  );
}
