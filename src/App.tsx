import { lazy, Suspense, useState } from "react";

import Music from "./components/Music";
import FavoritePhotos from "./components/FavoritePhotos";
import Letter from "./components/Letter";
import YES from "./assets/images/yes-cat.gif";
import NO from "./assets/images/no-cat.gif";

const Lock = lazy(() => import("./components/Lock"));

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [valid, setValid] = useState<boolean>(false);
  const [pin, setPin] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const handleEnter = () => {
    const validPin = "2001";
    if (pin === validPin) {
      setValid(true);
      setPin("");
    } else {
      setPin("");
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => {
      if (prev < 3) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handleBackPage = () => {
    setCurrentPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center p-2">
        <Suspense
          fallback={<p className="animate-ping text-center text-2xl">💗</p>}
        >
          {valid ? (
            <div>
              <Music />

              <div className="p-2 bg-pink-300 border-2 border-pink-500 rounded-lg max-w-sm">
                <FavoritePhotos pageNo={currentPage} />
                <Letter pageNo={currentPage} />
                <div className={`${currentPage === 3 ? "block" : "hidden"}`}>
                  <h1 className="text-4xl font-bold text-center">
                    Will you be my Valentine?{" "}
                    <span className="animate-ping text-center text-sm align-middle">
                      ❤️
                    </span>
                  </h1>
                  <div className="flex justify-evenly mt-5">
                    <button
                      onClick={() => setAnswer("yes")}
                      className="px-8 py-2 text-white bg-green-400 font-bold hover:bg-green-600 rounded-lg border-2 border-green-700"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setAnswer("no")}
                      className="px-8 py-2 text-white bg-red-400 font-bold hover:bg-red-600 rounded-lg border-2 border-red-700"
                    >
                      No
                    </button>
                  </div>
                  <div className="flex justify-center mt-5">
                    <img
                      src={YES}
                      className={`${
                        answer === "yes" ? "block" : "hidden"
                      } h-[200px] w-full rounded-lg`}
                    />
                    <img
                      src={NO}
                      className={`${
                        answer === "no" ? "block" : "hidden"
                      } h-[200px] w-full rounded-lg`}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 flex justify-between">
                <button
                  onClick={() => handleBackPage()}
                  className={`${
                    currentPage !== 1 ? "" : "invisible"
                  } rounded-full px-8 font-bold py-1 bg-pink-300 border-2 border-pink-500 hover:bg-pink-400`}
                >
                  Back
                </button>
                <button
                  onClick={() => handleNextPage()}
                  className={`${
                    currentPage !== 3 ? "" : "invisible"
                  } rounded-full px-8 font-bold py-1 bg-pink-300 border-2 border-pink-500 hover:bg-pink-400`}
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <Lock
              valid={valid}
              onHandleEnter={() => handleEnter()}
              data={pin}
              setData={setPin}
            />
          )}
        </Suspense>
      </div>
    </>
  );
}

export default App;
