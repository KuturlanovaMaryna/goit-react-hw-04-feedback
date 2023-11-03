import css from './Section.module.css';
import propTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element,
};

export default Section;