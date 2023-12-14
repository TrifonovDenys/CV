import PropTypes from 'prop-types';

const SubTitle = ({ title }) => {
  return <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4 capitalize'>{title}</h3>;
};

export default SubTitle;

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
