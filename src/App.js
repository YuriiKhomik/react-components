// використовуємо підхід "один файл - один компонент"
// тут буде головний компонент нашого застосунку
// це звичайний ECMA-Script модуль тому з нього потрібно експортувати компонент
// він буде експортувати один компонент і це завжди export default

// файл може називатись як з малої, так і з великої букви
// файл може мати розширення як ...js так і ...jsx
// в даному випадку, ми назвали його App.js

// Батьківському компоненту ми передаємо дані і оголошуємо шаблон, який ми хочемо рендерити
// після чого при виклику ми передаємо дані, які потрібно відрендерити

// // імпортуємо компонент Painting.js в App.js, щоби відрендерити його тут
// import Painting from "./components/Painting";

// дані, які нам потрібно передати в компонент Painting ми імпортуємо в той файл, де вони будуть вже безпосередньо рендеритись
// (немає сенсу імпортувати їх в Painting.js, тому що це просто незалежний компонент
// він нічого не повинен знати про конкретну інформацію, яка буде рендеритись)
import paintings from "./paintings.json";

//////////////////////////////////////////////////////////////////////
import PaintingGallery from "./components/PaintingGallery";
import Section from "./components/Section";

export default function App() {
  // нас є App, який рендерить PaintingGallery, PaintingGallery приймає в items масив
  // об'єктів із paintings.json і рендерить в собі окремо кожен компонент Painting
  return (
    <div>
      {/* <PaintingGallery items={paintings} /> */}
      {/* якщо ми хочемо рендерити в компоненті Section будь-який контент, ми можемо зробити композицію, використавши парні теги замість одинарного*/}
      {/* і тоді ми можемо в компонент Section додавати будь які інші компоненти */}
      <Section title="Top of the tops">
        {/* в даному випадку - PaintingGallery - цн дитина компоненту Section */}
        <PaintingGallery items={paintings} />
      </Section>
      <Section />
    </div>
  );

  // return (
  //   // Закидаємо в цей батьківський компонент App все, що ми хочемо зарендерити
  //   <div>

  //     {/* і рендеримо все динамічно, використовуючи .map
  //     тобто, ми рендеримо результат .map, тобто масив*/}
  //     {/* {paintings.map((painting) => (
  //       <Painting
  //         // дадаємо проп "key", який не піде в DOM, він буде використовуватись лише для реакту
  //         // key потрібен для того, щоби React ідентифіковував кожен окремий елемент, який буде рендеритись
  //         // бо інакше для нього вони будуть всі одинакові і при зміні одного елементу, перерендерюватись будуть всі
  //         // найкраще key брати із бекенду у вигляді айдішок etc... можна звісно, використати індекс із мепу, але
  //         // якщо ми один елемент видалимо, то індекси у всіх клкментів поміняються і все перерендериться
  //         // тому найкраще використовувати якусь стабільну строку
  //         key={painting.id}
  //         imageUrl={painting.url}
  //         title={painting.title}
  //         author={painting.author.user}
  //         price={painting.price}
  //         quantity={painting.quantity}
  //       />
  //     ))} */}

  //     {/* <Painting
  //       // те, що ми передаємо сюди - це елементи майбутнього об'єкту props,
  //       // тому у компоненту завжди лише одн параметр (об'єкт props)
  //       // imageUrl={paintings[0].url}
  //       title={paintings[0].title}
  //       author={paintings[0].author.user}
  //       price={paintings[0].price}
  //       quantity={paintings[0].quantity}
  //     />
  //     <Painting
  //       // те, що ми передаємо сюди - це елементи майбутнього об'єкту props,
  //       // тому у компоненту завжди лише одн параметр (об'єкт props)
  //       imageUrl={paintings[1].url}
  //       title={paintings[1].title}
  //       author={paintings[1].author.user}
  //       price={paintings[1].price}
  //       quantity={paintings[1].quantity}
  //     />
  //     <Painting
  //       // те, що ми передаємо сюди - це елементи майбутнього об'єкту props,
  //       // тому у компоненту завжди лише одн параметр (об'єкт props)
  //       imageUrl={paintings[2].url}
  //       title={paintings[2].title}
  //       author={paintings[2].author.user}
  //       price={paintings[2].price}
  //       quantity={paintings[2].quantity}
  //     /> */}
  //   </div>
  // );
}
// and//
// true && 1; // 1 (if true => right side)
// false && 1; // false (if false => false, because false met)
// 0 && 2; // 0 (because 0 = false)

// or//
// true || 1 // true (because first met true is "true")
// false || 1 // 1 (because first met true is "1")

// ??//
// The nullish coalescing (??) operator is a logical operator
// that returns its right-hand side operand when
// its left-hand side operand is null or undefined,
// and otherwise returns its left - hand side operand.

// true ?? 3; // true (because first met true is "true")
// 1 ?? 3; // 1 // (because first met true is "true")
// 0 ?? 3; // 0 (because that's how "??" operator works)
// " " ?? 3 // ' ' (because that's how "??" operator works)
// undefined ?? 3; // 3 (because that's how "??" operator works)
//  null ?? 3; // 3 (because that's how "??" operator works)
//BUT//
// false ?? 3; // false
