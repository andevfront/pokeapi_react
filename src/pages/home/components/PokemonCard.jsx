import { Link } from "react-router-dom";
import { useColorType } from "../../../hooks";

export const PokemonCard = ({
  name,
  types,
  img,
  hp,
  attack,
  defense,
  speed,
}) => {
  return (
    <div className="col-span-12 bg-[#1E273D] overflow-hidden rounded-lg transition-all duration-300 will-change-transform hover:scale-105 sm:col-span-6 md:col-span-4 lg:col-span-3">
      <Link className="relative flex justify-center p-5">
        <figure className="absolute top-0 left-0 w-full">
          <img
            className="w-full"
            src={`../assets/images/type-color/${types[0]}.png`}
            alt=""
          />
        </figure>
        <span className="absolute top-2 z-[2] right-2 py-px px-3 bg-white text-slate-600 rounded-full select-none">
          <small className="font-bold">HP</small> {hp}
        </span>
        <div className="relative w-full">
          <img className="h-40 mx-auto" src={img} alt={name} />
          <h2 className="font-semibold text-center text-lg text-white pb-4 first-letter:uppercase">
            {name}
          </h2>
          <div className="flex justify-center items-center gap-3 py-4">
            {types.map((type) => (
              <div
                className="flex items-center gap-2 py-1 px-2 rounded-full"
                key={type}
                style={{
                  backgroundColor: useColorType(type),
                }}
              >
                <figure>
                  <img
                    className="h-5"
                    src={`../assets/images/type-icon/${type}.png`}
                    alt=""
                  />
                </figure>
                <p className="text-white first-letter:uppercase">{type}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <p className="flex flex-col items-center text-slate-300">
              <span className="font-semibold text-lg text-white">{attack}</span>
              Attack
            </p>
            <p className="flex flex-col items-center text-slate-300">
              <span className="font-semibold text-lg text-white">
                {defense}
              </span>
              Defense
            </p>
            <p className="flex flex-col items-center text-slate-300">
              <span className="font-semibold text-lg text-white">{speed}</span>
              Speed
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
