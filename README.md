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

Это данные, которые передаются от родительского компонента в дочерний. Могут быть переданы глубже.

Передавать можно любой тип данных. Передавать можно компонент.

```jsx
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

```



#### Валидация свойств (Props)

```jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

  // Свойства компонента Counter
  static propTypes = {
    // Передача свойства при вызове компонента: <Counter someProp="sss" />
    someProp: PropTypes.string,
    optionalArray: PropTypes.array,     // массив
    optionalBool: PropTypes.bool,       // логический тип
    optionalFunc: PropTypes.func,       // функция
    optionalNumber: PropTypes.number,   // число
    optionalObject: PropTypes.object,   // объект
    optionalString: PropTypes.string,   // строка
    optionalSymbol: PropTypes.symbol,   // символ
    optionalNode: PropTypes.node,       // всё, что можно отрендерить (числа, строки, компоненты...)
    // Далее: https://reactjs.org/docs/typechecking-with-proptypes.html
  }

  render() {...}
}

export default Counter;
```



## События

Любые события, добавленные в компонент, не являются обычными событиями, React оборачивает события в [SynteticEvent](https://reactjs.org/docs/events.html) (кроссбраузерная обертка).

```jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MyLink = ({text, onClick}) => (
  <a href="/test" onClick={onClick}>{text}</a>
);

MyLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

MyLink.defaultProps = {
  text: 'link',
  onClick: () => {},
}

class App extends Component {

  handleClick = (e) => {
    e.preventDefault();
    console.log('Клик был');
  }

  render() {
    return (
      <div>
        <MyLink onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
```
