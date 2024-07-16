import React from "react";

const style = {
  list: `bg-transparent-blue rounded-[30px] border border-[#FFFFFF4D] border-solid backdrop-blur-[10px] py-12 px-10 md:px-12 columns-4 gap-7`,
  wrapper: `w-full py-16 sm:py-32`,
  container: `text-white max-w-[1240px] px-4 mx-auto`,
  title: `text-center text-3xl font-bold mb-10`,
  listItem: `text-2xl mb-3`,
};

const TechStack = () => {
  const frontendDevSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux Toolkit",
    "React Router",
    "HTML/CSS",
    "Tailwind CSS",
    "Jest",
    "React Testing Library",
    "Webpack",
    "Vite",
    "Git",
  ];

  return (
    <div className={style.wrapper} id="stack">
      <div className={style.container}>
        <h3 className={style.title}>Technical Skills</h3>
        <ul className={style.list}>
          {frontendDevSkills.map((skill) => {
            return <li className={style.listItem}>{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
