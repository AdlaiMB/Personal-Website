import SkillsItem from './SkillsItem';
import '../styles/Skills.css';

function Skills() {
    return (
        <div className="skills-container container column center" id="Skills">
            <h2>My Skills</h2>
            <div className='container row space-even mt-4 fit-content'>
                <SkillsItem link="/python-icon.svg" title="Python"></SkillsItem>
                <SkillsItem link="/node-icon.svg" title="Node.js"></SkillsItem>
                <SkillsItem link="/mongo-icon.svg" title="Mongo"></SkillsItem>
                <SkillsItem link="/git-icon.svg" title="Git"></SkillsItem>
                <SkillsItem link="/html-icon.svg" title="HTML"></SkillsItem>
                <SkillsItem link="/css-icon.svg" title="CSS"></SkillsItem>
                <SkillsItem link="/js-icon.svg" title="JavaScript"></SkillsItem>
                <SkillsItem link="/arduino-icon.svg" title="Arduino"></SkillsItem>
                <SkillsItem link="/postgresql-icon.svg" title="PostgreSql"></SkillsItem>
            </div>
        </div>
    );
};

export default Skills;