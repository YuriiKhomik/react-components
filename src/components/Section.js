import PropTypes from "prop-types";

function Section(props) {
  // це рендер по умові
  // якщо в пропсах не прийшов тайтл - тоді рендер не відбудеться
  // якщо ліворуч true - тоді робимо те, що праворуч
  return (
    <div>
      {/* з допомогою "&&" ми рендеримо по умові */}
      {/* в даному випадку, якщо прийшов props.title, то ми його рендеримо */}
      {/* і завжди рендеримо props.children */}
      {/* якщо props.children будуть undefined, то нічого не зарендериться */}
      {/* а якщо в чілдерни щось прийде, то воно зарендериться саме в тому місці, де ми його поставили */}
      {/* в нашому випадку - під заголовком H2 */}
      {props.title && <h2>{props.title}</h2>}
      {/* щоби зарендерити дітей, використовуємо props.children */}
      {props.children}
    </div>
  );
}

export default Section;

Section.propTypes = {
  // вказуємо, що нас цікавить строка в пропі "title"
  // і що цей проптайп не є обов'язковим (якщо нічого не прийде - не біда)
  title: PropTypes.string,
  // PropTypes.node фактично означає "будь-що"
  children: PropTypes.node,
};
