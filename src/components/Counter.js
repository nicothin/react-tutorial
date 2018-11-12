import React, { Component } from 'react';
import PropTypes from 'prop-types';


const CounterText = ({ counter, text }) => { // ожидает два свойства
  return (
    <div>
      {text} {counter}
    </div>
  );
}

CounterText.propTypes = {
  counter: PropTypes.number.isRequired, // тип — число; обязательный
  text: PropTypes.string,               // тип — строка
}

CounterText.defaultProps = {
  text: 'Текст счётчика: ',             // значение по умолчанию
}


class Counter extends Component {
  state = {
    counter: 0,
  }

  // Обработчик клика по кнопке для увеличения счётчика
  handleClick = () => {
    // Не меняем state напрямую, используем setState, передавая в него функцию и коллбек
    this.setState(({ counter }) => ({
      counter: ++counter,
    }), console.log('Счётчик изменён'))
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        Их тут {counter} <br /> <button onClick={this.handleClick}>+1</button>
        <br />
        <CounterText counter={counter} /> {/* выводим компонент, передавая ему свойство */}
      </div>
    );
  }
}

export default Counter;
