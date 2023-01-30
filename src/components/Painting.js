// компонент - це незалежний елемент інтерфейсу, який можна налаштовувати
// він зберігає в собі шаблон розмітки і приймає дані, які потрібно поставити в цей шаблон
// компонентом може бути все, що завгодно (логотип, хедер, сайдбар, частина сайдбару, меню
// юзерпрофайл, галерея, елемент галереї)

// імпортуємо установлений пакет Proptypes, який буде слідкувати, чи правильні пропси передаються в компонент
import PropTypes from "prop-types";

//дефолтні картинки кладемо собі в проект, імпортуємо
//і ставимо як дефолтні значення в деструктуризації
// оголосити свої дефолтні значення є обов'язком самого компоненту
import defaultImage from "./default.jpg";

// всередині самго файлу компоненту ми оголошуємо сам компонент, його пропси
// а отримувати пропси він буде там, де він буде рендеритись
export default function Painting(props) {
  // оскільки props - це об'єкт, його можна деструктуризувати
  // можна в тілі функції, або в самому підписі функції
  const {
    imageUrl = defaultImage,
    author = "unknown",
    title,
    price,
    quantity,
  } = props;
  //   console.log(props);
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Price: {price} uah</p>
      <p>
        {/* для рендеру по умові використовуємо логічне "і" або тернарний оператор
        якщо потрібно рендерити щось по яійсь умові, то використовуємо логічне "і",
        а якщо потрібно АБО то АБО інше, то тоді юзаємо тернарний оператор */}
        Availability: {quantity <= 10 ? "almost gone" : "available"}{" "}
        {quantity <= 3 && `${quantity} left`}
      </p>
      <button>Add to cart</button>
    </div>
  );
}

// додаємо властивість propTypes в наш компонент
Painting.propTypes = {
  // і сюди вписуємо типи пропсів, які ми плануємо передавати в компонент
  // проптайпси мають бути прописані для кожного пропу
  //якщо поставити розширення ES7+ React/Redux/React-Native snippets, то можна писати pts, ptn і т.д.

  // пропси бувають обов'язковими і необов'язковими
  // для всіх обов'язкових пропсів дописуємо isRequired
  // якщо ми не передамо якийсь проп, який був позначений як isRequired
  // то отримаємо попередження про це у вигляді помилки, це допоможе
  // якщо ми забудемо передати якийсь проп
  imageUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
