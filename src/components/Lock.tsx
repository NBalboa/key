import ButtonNum from "./ButtonNum";
import KeyPlayer from "./KeyPlayer";

type LockProps = {
  valid: boolean;
  data: string;
  onHandleEnter: () => void;
  setData: React.Dispatch<React.SetStateAction<string>>;
};
const Lock = ({ valid, data, setData, onHandleEnter }: LockProps) => {
  const handleAddPin = (num: string) => {
    if (data.length < 4) {
      setData((prev) => prev + num);
    }
  };

  const handleRemovePin = () => {
    if (data.length !== 0) {
      setData((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div
      className={`${
        valid ? "hidden" : "grid"
      } grid-cols-2 max-w-sm rounded-lg p-5 gap-5 bg-pink-100 border-2 border-pink-300`}
    >
      <div className="place-self-center">
        <KeyPlayer
          height={200}
          width={200}
          shouldPause={valid ? true : false}
        />
      </div>
      <div className="space-y-2 p-3 rounded bg-pink-300 border-2 border-pink-500">
        <h1 className="text-center font-bold">Enter Pin Code</h1>
        <div>
          <input
            type="password"
            value={data}
            disabled
            className=" w-full focus-ring-100 bg-pink-200 rounded-full text-black px-2 py-1 text-sm text-center border-3 border-pink-400"
          />
        </div>
        <div className="grid grid-cols-3 gap-5 place-content-center">
          <ButtonNum data={1} onHandleClick={() => handleAddPin("1")} />
          <ButtonNum data={2} onHandleClick={() => handleAddPin("2")} />
          <ButtonNum data={3} onHandleClick={() => handleAddPin("3")} />
          <ButtonNum data={4} onHandleClick={() => handleAddPin("4")} />
          <ButtonNum data={5} onHandleClick={() => handleAddPin("5")} />
          <ButtonNum data={6} onHandleClick={() => handleAddPin("6")} />
          <ButtonNum data={7} onHandleClick={() => handleAddPin("7")} />
          <ButtonNum data={8} onHandleClick={() => handleAddPin("8")} />
          <ButtonNum data={9} onHandleClick={() => handleAddPin("9")} />
          <ButtonNum data={"*"} onHandleClick={() => handleAddPin("*")} />
          <ButtonNum data={0} onHandleClick={() => handleAddPin("0")} />
          <ButtonNum data={"#"} onHandleClick={() => handleAddPin("#")} />
          <button
            onClick={onHandleEnter}
            className="bg-pink-200 text-black font-bold rounded-full text-sm hover:bg-pink-400/50 border-2 border-pink-400 col-span-2 px-2 py-1"
          >
            Enter
          </button>
          <button
            onClick={() => handleRemovePin()}
            className="bg-pink-200 text-black size-8 font-bold rounded-full text-sm hover:bg-pink-400/50 border-2 border-pink-400 px-2 py-1 col-span-1"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lock;
