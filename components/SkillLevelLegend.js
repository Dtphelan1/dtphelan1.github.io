import { Circle } from "react-feather";
import { skillLevels } from "../lib/skillLevel";

export default function SkillLevelLegend() {
  let i = 0;
  return (
    <div className="flex flex-row justify-between mb-2 mt-1">
      {skillLevels.map((levelObj) => {
        return (
          <div
            key={levelObj.level}
            title={levelObj.long}
            className="flex flex-col items-center text-sm"
          >
            <div className="flex flex-row">
              {[...Array(levelObj.level)].map(() => {
                return (
                  <Circle
                    key={`circle-${levelObj.level}-${i++}`}
                    size="10"
                    className="fill-primary text-primary "
                  />
                );
              })}
            </div>
            <p className="text-center">{levelObj.short}</p>
          </div>
        );
      })}
    </div>
  );
}
