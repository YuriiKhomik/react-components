//в якості item ми використовуємо компонент Painting, тойму імпортуємо його сюди
import Painting from "./Painting";

// PaintingGallerry - це компонент, який побудований із менших компонентів (Paintings)
// бажано називати не просто Painting і Paintinings, а так, щоб візуально назви більше відрізнялись
// наприклад Paintings і PaintingsGallery
// цей компонент буле рендерити колекцію, а саме список із компонентів Paintings
function PaintingGallery({ items }) {
  // деструктуризувати пропси (у нашому випадку - це масив об'єктів із Paintings.json) можна також в тілі функції:
  // const { items } = props;
  return (
    <ul>
      {/* наша paintingGallery буде отримувати масив із елементів Paintings (в декструктуризації - items
        які деструктуризовані з пропсів)*/}
      {items.map((item) => (
        // ключ повинен зберішатися на кореневому елементі, який ми повертаємо із мепу
        // для кожного айтема ми повертаємо li, в якому буде один компонент Paintings
        <li key={item.id}>
          {" "}
          <Painting
            // в нас для компоненту Painting прописані propTypes
            // тому навіть якщо ми всередині цього мепу неправильно передамо якийсь проп
            // то нас про це повідомить propTypes
            imageUrl={item.url}
            title={item.title}
            author={item.author.user}
            // price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

export default PaintingGallery;
