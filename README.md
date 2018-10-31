# Туториал по React

```
npm start
npm test
npm run build
npm run eject
```



## Компоненты

Самодостаточная структура, часто переиспользуется. Может принимать Свойства (см. ниже).

Два типа:

```jsx
// Функциональный компонент (не имеют states и методов жизненного цикла)
// Применяется, если нужно просто вывести участок разметки
function FuncLesson() {
  return <h1>some text</h1>
}

// Класс (экземпляр класса React.Component)
// Применяется в большинстве случаев
class Lesson extends Component {
  render() {
    return <h1>Hell o!</h1>
  }
}
```

`return` компонента может выводить только один корневой элемент.



### Состояния (State)

Это внутреннее состояние компонента.

- Это объект, устанавливается при инициализации компонента.
- Если состояние меняется, происходит перерендеринг компонента.
- Данные из state можно передать в другие компоненты в виде Свойств (Props).
- Нельзя изменить состояние напрямую. Только методом `setState()`.

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
  }

  // Обработчик клика по кнопке для увеличения счётчика
  handleClick = () => {
    // Не меняем state напрямую, используем setState, передавая в него функцию и коллбэк
    this.setState(({ counter }) => ({
      counter: ++counter,
    }), console.log('Счётчик изменён'))
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        Их тут {counter} <br /> <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}
```



### Свойства (Props)

Это данные, которые передаются от родительского компонета в дочерний. Могут быть переданы глубже.

```jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Функциональный компонент
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
  text: 'Текст счётчика: ',            // значение по умолчанию
}

// Компонент-экземпляр класса
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
        <CounterText counter={counter} /> {/* выводим компонент, передавая ему свойства */}
      </div>
    );
  }
}

export default Counter;
```