import React, {
  FunctionComponent,
  useEffect,
  useState,
  useRef,
  Suspense,
  lazy
} from "react";
import { observer } from "mobx-react-lite";
import Pokemon from "interfaces/Pokemon";
import Loader from "styled/Loader";
import Container from "styled/Container";
import Button from "styled/Button";
import useIntersection from "hooks/useIntersection";
import getData from "util/getData";
const PokemonCardsContainer = lazy(() =>
  import("components/PokemonCardsContainer/PokemonCardsContainer")
);
const Pokedex: FunctionComponent = observer(() => {
  const [nextPage, setNextPage] = useState<string>(
    `https://pokeapi.co/api/v2/pokemon`
  );
  const nextPageRef = useRef(nextPage);
  const [pokedex, setPokedex] = useState<Pokemon[]>([]);
  const pokedexRef = useRef(pokedex);

  const loadNext = (): void => {
    getData(nextPageRef.current).then(({ next, results }) => {
      setPokedex([...pokedexRef.current, ...results]);
      if (next) {
        setNextPage(next);
      }
    });
  };

  useEffect(() => {
    nextPageRef.current = nextPage;
    pokedexRef.current = pokedex;
  }, [nextPage, pokedex]);
  const { setElement } = useIntersection(loadNext);
  return (
    <>
      {pokedex && pokedex.length > 0 ? (
        <Suspense fallback={<Loader />}>
          <PokemonCardsContainer pokedex={pokedex} />
        </Suspense>
      ) : (
        <Loader />
      )}

      <Container>
        {nextPage !== "" ? (
          <Button ref={(e: HTMLButtonElement) => setElement(e)}>
            Loading{" "}
          </Button>
        ) : (
          ""
        )}
      </Container>
    </>
  );
});

export default Pokedex;
