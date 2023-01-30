// import React from "react";
// import ReactDOM from "react-dom";
// import React from "react";
// import { createRoot } from "react-dom/client";
// // імпортуємо наш основинй компонент App

// створюємо елементи через React.createElement і через JSX//////////////////////////

// // const elem1 = React.createElement("span", { children: "hello" });
// const elem1 = <span>Hello</span>;
// // const elem2 = React.createElement("span", { children: "there" });
// const elem2 = <span>again</span>;

// // const element = React.createElement("div", {
// //   a: 5,
// //   b: 10,
// //   children: [elem1, elem2],
// // });

// const jsxElement = (
//   <div>
//     {elem1} {2 + 2} {elem2}
//   </div>
// );

// // console.log(element);
// // console.log(jsxElement);

// // ReactDOM.render(element, document.querySelector("#root"));
// const root = createRoot(document.querySelector("#root"));
// root.render(jsxElement);

///////////////////////////////////////////////////////////////////////////////////
// // JSX - це XML-подібний синтаксис (не HTML) різниця полягає в тому,
// // що в JSX обов'язково мають бути закриваючі теги в кінці. Інакше це буде не валідний JSX

// import { createRoot } from "react-dom/client";
// import paintings from "./paintings.json";

// const painting = paintings[2];
// // компонент - це незалкжний елемент інтерфейсу, який можна налаштовувати
// // він зберігає в собі шаблон розмітки і приймає дані, які потрібно поставити в цей шаблон
// // компонентом може бути все, що завгодно (логотип, хедер, сайдбар, частина сайдбару, меню
// // юзерпрофайл, галерея, елемент галереї)
// function Painting(props) {
//   // оскільки props - це об'єкт, його можна деструктуризувати
//   // можна в тілі функції, або в самому підписі функції
//   const { url, author, title, price } = props;
//   console.log(props);
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>Author: {author}</p>
//       <p>Price: {price} uah</p>
//       <p>Availability</p>
//       <button>Add to cart</button>
//     </div>
//   );
// }

// const root = createRoot(document.querySelector("#root"));
// // якщо в JSX написати JSX-тег painting з малої букви, то він буде сприйматися
// // як строка і буде буквально відрендерений як тег <painting></painting>
// // тому компоненти потрібно називати з великої літери, бо тоді в JSX вони
// // будуть сприйматися як назви змінних, які JSX спробує знайти в доступній області видимості
// root.render(
//   <Painting
//     // те, що ми передаємо сюди - це елементи майбутнього об'єкту props,
//     // тому у компоненту завжди лише одн параметр (об'єкт props)
//     url={painting.url}
//     title={painting.title}
//     author={painting.author.user}
//     price={painting.price}
//   />
// );

/////////////////////////////APP.JS//////////////////////////
// import { createRoot } from "react-dom/client";
// // імпортуємо наш основинй компонент App
// import App from "./App";

// // у файлі index.js ми рендеримо лише компонент App
// // а всередині компонента App ми рендеримо все решта, що нам потрібно
// // все, що ми вкладемо в нього, буде відрендерино
// const root = createRoot(document.querySelector("#root"));
// root.render(<App />);

//////////////////////////REACT.STRICT MODE////////////////////

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.querySelector("#root"));

//огортаємо рендер нашого батьківсткого компонента
//в суворий режим  для відлову помилок
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
