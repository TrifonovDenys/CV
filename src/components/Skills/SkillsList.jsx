import Title from '../Title/Title';
import SkillItem from './SlillItem';
import { hardSkills, softSkills, languages } from '../../data/data';
import SubTitle from '../Title/SubTitle';
const SkillsList = () => {
  const wait = 0.2;
  return (
    <>
      <section className='py-12'>
        <Title title={'my skills'} />
        <SubTitle title={'hard skills'} />
        <ul className='flex gap-y-2 gap-x-3 flex-wrap dark:text-gray-900 text-white mb-4'>
          {hardSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} wait={wait + 0.2} />
          ))}
        </ul>
        <SubTitle title={'soft skills'} />
        <ul className='flex gap-y-2 gap-x-3 flex-wrap dark:text-gray-900 text-white mb-4'>
          {softSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} wait={wait + 0.2} />
          ))}
        </ul>
        <SubTitle title={'language'} />
        <ul className='flex gap-y-2 gap-x-3 flex-wrap dark:text-gray-900 text-white mb-4'>
          {languages.map((skill, index) => (
            <SkillItem key={index} skill={skill} wait={wait + 0.2} />
          ))}
        </ul>
      </section>
    </>
  );
};
export default SkillsList;
