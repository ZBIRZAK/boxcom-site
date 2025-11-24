import Exclamation from "./Exclamation";
import P from "./P";
import U from "./U";

const Up = () => {
  return (
    <div className="absolute h-[30%] top-[-23%] right-[30%] w-[40%] pointer-events-none z-[-1]">
      <Exclamation />
      <P />
      <U />
    </div>
  );
};
export default Up;
