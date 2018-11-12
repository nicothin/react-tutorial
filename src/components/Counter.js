import React, { Component } from 'react';
import PropTypes from 'prop-types';


const CounterText = ({ counter, text }) => { // ожидает два свойства
  return (
    <div>
      {text} {counter}
    </div>
  );
}

// Свойства компонента CounterText
CounterText.propTypes = {
  counter: PropTypes.number.isRequired, // тип — число; обязательный
  text: PropTypes.string,               // тип — строка
}

// Свойства компонента CounterText по умолчанию
CounterText.defaultProps = {
  text: 'Текст счётчика: ',             // значение по умолчанию
}


class Counter extends Component {

  // Свойства компонента Counter
  static propTypes = {
    someProp: PropTypes.string,
  }

  // Свойства компонента Counter по умолчанию
  static defaultProps = {
    someProp: 'foo11',
  }

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
        {this.props.someProp}
        <br />
        <CounterText counter={counter} /> {/* выводим компонент, передавая ему свойство */}
      </div>
    );
  }
}

export default Counter;
