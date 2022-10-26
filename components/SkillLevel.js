import { Star } from "react-feather";

export default function SkillLevel({ level }) {
  const levelArray = [false, false, false, false, false];
  const levelDescriptions = [
    "Used the technology on at least one project before",
    "6+ months experience, developing while referencing documentation frequently",
    "1+ year experience, comfortable with fundamentals, using documentation for complex tasks",
    "2+ year experience, developing comfortably without SlackOverflow",
    "4+ year experience, confident mentoring junior developers on fundamentals",
  ];
  levelArray.fill(true, 0, level);
  return (
    <div title={levelDescriptions[level - 1]}>
      {levelArray.map((levelMet) => {
        return (
          <Star
            size={16}
            className={`text-primary inline ${levelMet ? "fill-primary" : ""}`}
          />
        );
      })}
    </div>
  );
}
