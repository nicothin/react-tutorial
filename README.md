# Туториал по React

```
npm start
npm test
npm run build
npm run eject
```



## Компоненты

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



### State

State — внутреннее состояние компонента.

- Объект, устанавливается при инициализации компонента.
- Если меняется, происходит перерендеринг компонента.
- Данные из state можно передать в другие компоненты в виде пропсов.
- Нельзя изменить state напрямую. Всегда используй метод `setState()`.

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



### Пропсы