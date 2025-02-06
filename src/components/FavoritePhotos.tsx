import Key1 from "../assets/images/key1.jpg";
import Key2 from "../assets/images/key2.jpg";
import Key3 from "../assets/images/key3.jpg";
import Key4 from "../assets/images/key4.jpg";
import Key5 from "../assets/images/key5.jpg";

const FavoritePhotos = ({ pageNo }: { pageNo: number }) => {
  return (
    <div className={`${pageNo === 1 ? "block" : "hidden"} space-y-3`}>
      <h1 className="text-center font-bold text-lg sm:text-xl md:text-3xl">
        Top 5 Favorite Photos of you (as of now) {"<333"}
      </h1>
      <div className="grid grid-cols-3 gap-5 place-items-center">
        <img
          src={Key1}
          loading="lazy"
          className="max-h-40 w-full rounded-lg border-2 border-purple-500 hover:-translate-y-4 transition-all ease-in"
        />
        <img
          src={Key2}
          loading="lazy"
          className="max-h-40 w-full place-self-stretch rounded-lg border-2 border-purple-500 hover:-translate-y-4 transition-all ease-in"
        />
        <img
          src={Key3}
          loading="lazy"
          className="max-h-40 w-full rounded-lg border-2 border-purple-500 hover:-translate-y-4 transition-all ease-in"
        />
        <img
          src={Key4}
          loading="lazy"
          className="max-h-40 w-full rounded-lg border-2 border-purple-500 hover:translate-y-4 transition-all ease-in"
        />
        <img
          src={Key5}
          loading="lazy"
          className="max-h-40 w-full rounded-lg border-2 border-purple-500 hover:translate-y-4 transition-all ease-in"
        />
        <p className="animate-ping text-center text-2xl sm:text-3xl md:text-5xl">
          ❤️
        </p>
      </div>
    </div>
  );
};

export default FavoritePhotos;
