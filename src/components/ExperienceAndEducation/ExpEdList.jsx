import work from '../../data/workEd';
import ExpEdItem from './ExpEdItem';

const ExpEdList = () => {
  return (
    <ol className='relative border-s border-gray-200 dark:border-gray-700 '>
      {work.map((el, index) => (
        <ExpEdItem key={index} item={el} />
      ))}
    </ol>
  );
};

export default ExpEdList;
