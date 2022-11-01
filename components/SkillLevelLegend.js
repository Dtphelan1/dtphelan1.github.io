import { Star } from "react-feather";
import { skillLevels } from "../lib/skillLevel";

export default function SkillLevelLegend() {
  let i = 0;
  return (
    <div className="flex flex-row justify-between mb-2">
      {skillLevels.map((levelObj) => {
        return (
          <div
            key={levelObj.level}
            title={levelObj.long}
            className="flex flex-col items-center"
          >
            <div className="flex flex-row">
              {[...Array(levelObj.level)].map(() => {
                return (
                  <Star
                    key={`star-${levelObj.level}-${i++}`}
                    size="8"
                    className="fill-primary text-primary"
                  />
                );
              })}
            </div>
            <p className="text-center text-xs">{levelObj.short}</p>
          </div>
        );
      })}
    </div>
  );
}
