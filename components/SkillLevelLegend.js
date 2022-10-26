import { Star } from "react-feather";

export default function SkillLevelLegend() {
  return (
    <div className="flex flex-row justify-between mb-2">
      <div className="flex flex-col  items-center">
        <Star size="8" className="fill-primary text-primary" />
        <p className="text-center text-xs">Familiar</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row">
          <Star size="8" className="fill-primary text-primary" />
          <Star size="8" className="fill-primary text-primary" />
        </div>
        <p className="text-center text-xs">{">"} 6m</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row">
          <Star size="8" className="fill-primary text-primary" />
          <Star size="8" className="fill-primary text-primary" />
          <Star size="8" className="fill-primary text-primary" />
        </div>
        <p className="text-center text-xs">{">"} 1yr</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row">
          <Star size="8" className="fill-primary text-primary" />
          <Star size="8" className="fill-primary text-primary" />
          <Star size="8" className="fill-primary text-primary" />
          <Star size="8" className="fill-primary text-primary" />
        </div>
        <p className="text-center text-xs">{">"} 2yr</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row">
          <Star size="8" className="fill-primary text-primary" />
          <Star size="8" className="fill-primary text-primary" />
          <Star size="8" className="fill-primary text-primary" />
          <Star size="8" className="fill-primary text-primary" />
          <Star size="8" className="fill-primary text-primary" />
        </div>
        <p className="text-center text-xs">{">"} 4yr</p>
      </div>
    </div>
  );
}
