import { useEffect } from "react";
import { PokemonCard } from "./PokemonCard";
import { getAllPokemons } from "../../../services";
import { useInfiniteQuery } from "react-query";
import { ClipLoader } from "react-spinners";

export const PokemonGrid = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(["pokemones"], getAllPokemons, {
      getNextPageParam: (lastPage) => lastPage.nextPage,
      refetchOnWindowFocus: false,
    });

  useEffect(() => {
    const handleScroll = () => {
      if (
        !isLoading &&
        hasNextPage &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasNextPage, fetchNextPage]);

  if (isLoading) return;

  const { pages } = data;

  return (
    <>
      <div className="grid grid-cols-12 gap-5 py-10">
        {pages.map((group) =>
          group.response.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))
        )}
      </div>
      {isFetchingNextPage && (
        <div className="flex justify-center">
          <ClipLoader color="#fff" />
        </div>
      )}
    </>
  );
};
