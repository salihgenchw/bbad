import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCharacter } from "../redux/charactersSlice/charactersSlice";
import CardComponent from "./CardComponent";
import Loading from "./Loading";

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacter());
  }, [dispatch]);
  console.log(characters);

  return (
    <div>
      {isLoading && <Loading type="spin" color="#cc6c12"></Loading>}
      {characters.map((character) => (
        <CardComponent character={character}></CardComponent>
      ))}
    </div>
  );
};

export default Home;
