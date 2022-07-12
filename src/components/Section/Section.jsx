import { Title } from './Section.styled';
import PropTypes from 'prop-types';

function Section({ title }) {
  return <Title>{title}</Title>;
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
