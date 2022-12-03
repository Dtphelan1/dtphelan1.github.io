import SkillLevel from "../components/SkillLevel";
import SkillLevelLegend from "../components/SkillLevelLegend";

export default function SkillsSection({ skills }) {
  return (
    <>
      <h2 className="text-xl font-bold ">Skills</h2>
      <hr className="w-full border-primary pb-4" />
      <SkillLevelLegend />
      <ul>
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
