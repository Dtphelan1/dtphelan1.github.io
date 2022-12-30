import SkillLevel from "../SkillLevel";
import SkillLevelLegend from "../SkillLevelLegend";

export default function SkillsSection({ skills }) {
  return (
    <>
      <h2 className="text-xl font-bold ">
        Skills{" "}
        <span className="text-xs italic font-normal basis-full print:hidden">
          Hover bubbles for more info
        </span>
      </h2>
      <hr className="w-full border-primary pb-4  " />
      <SkillLevelLegend />
      <ul className="mb-4">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="mb flex justify-between items-center mb-1 "
          >
            <p className="basis-1/2 text-sm">{skill.name}</p>
            <SkillLevel
              skill={skill.name}
              className="basis-1/2 text-right"
              level={skill.level}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
