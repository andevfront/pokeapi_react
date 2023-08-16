import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { SkeletonLoader } from "../../../components";
import { getAllPokemons } from "../../../services";
import { useInfiniteQuery } from "react-query";
import { ClipLoader } from "react-spinners";

export const PokemonGrid = () => {
  const [showSkeletons, setShowSkeletons] = useState(true);

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

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setShowSkeletons(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  if (showSkeletons) {
    return (
      <div className="grid grid-cols-12 gap-5 py-10">
        <SkeletonLoader count={50} />
      </div>
    );
  }

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
