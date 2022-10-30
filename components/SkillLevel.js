import { Star } from "react-feather";
import { skillLevels } from "../lib/skillLevel";

export default function SkillLevel({ level, className }) {
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
      {levelArray.map((levelMet) => {
        return (
          <Star
            size={14}
            key={levelMet}
            className={`text-primary inline ${levelMet ? "fill-primary" : ""}`}
          />
        );
      })}
    </div>
  );
}
