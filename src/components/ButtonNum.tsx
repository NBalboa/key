type ButtonNumProps = {
  data: number | string;
  onHandleClick: () => void;
};

const ButtonNum = ({ data, onHandleClick }: ButtonNumProps) => {
  return (
    <button
      onClick={onHandleClick}
      className="bg-pink-200 text-black font-bold rounded-full size-8 text-sm hover:bg-pink-400/50 border-2 border-pink-400"
    >
      {data}
    </button>
  );
};

export default ButtonNum;
