import iconDice from "../assets/images/icon-dice.svg";
const Dicer = ({ onClick, disabled }) => {
  return (
    <button
      className="p-3 bg-neonGreen rounded-full absolute bottom-0 translate-y-2/4 cursor-pointer hover:shadow-[0_0_25px_0px] hover:shadow-neonGreen transition-all duration-500"
      onClick={() => (disabled ? null : onClick())}>
      <img src={iconDice} />
    </button>
  );
};

export default Dicer;
