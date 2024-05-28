function SkillsItem({ link, title }) {
    return (
        <div className="skill-item container column center">
            <img className='img-skills' src={"./Personal-Website/" + link} alt="" />
            <p className='p-skills'>{title}</p>
        </div>
    );
};

export default SkillsItem;