export default function SkillAreaTabs() {
  const skillAreas = ["Featured", "React", "Vue", "Healthcare", "Voting"];
  const [skillArea, setSkillArea] = useState(skillAreas[0]);
  return (
    <div className="relative inline-block max-w-[16.25rem] md:max-w-max overflow-auto mb-[4px] bottom-[-11px] border-x border-t border-primary">
      {skillAreas.map((curSkill) => {
        return (
          <p
            key={curSkill}
            className={
              "cursor-pointer text-base inline border-primary border-r last-of-type:border-r-0 px-1 " +
              (skillArea === curSkill && "font-bold")
            }
            onClick={() => setSkillArea(curSkill)}
          >
            {curSkill}
          </p>
        );
      })}
    </div>
  );
}
