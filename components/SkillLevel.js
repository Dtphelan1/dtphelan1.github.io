import { Circle } from "react-feather";
import { skillLevels } from "../lib/skillLevel";

export default function SkillLevel({ skill, level, className }) {
  const levelArray = [false, false, false, false, false];
  levelArray.fill(true, 0, level);
  return (
    <div
      // NOTE: Skill levels doesn't have a defined value for L1
      title={
        skillLevels.find((levelObj) => levelObj.level === level)?.long || ""
      }
      className={className}
    >
      {levelArray.map((levelMet, i) => {
        return (
          <Circle
            size={13}
            key={skill + "-" + i}
            className={`text-primary inline ${levelMet ? "fill-primary" : ""}`}
          />
        );
      })}
    </div>
  );
}
