import PropTypes from "prop-types";

function Section(props) {
  // це рендер по умові
  // якщо в пропсах не прийшов тайтл - тоді рендер не відбудеться
  // якщо ліворуч true - тоді робимо те, що праворуч
  return (
    <div>
      {props.title && <h2>{props.title}</h2>}
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
