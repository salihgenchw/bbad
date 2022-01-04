import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCharacter } from "../redux/charactersSlice/charactersSlice";
import CardComponent from "./CardComponent";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacter());
  }, [dispatch]);
  console.log(characters);

  return (
    <div className="container">
      <div className="row">
        {isLoading && <Loading type="spin" color="green"></Loading>}

        {characters.map((character) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={character.char_id}>
            <Link to="/char/3">
              <CardComponent character={character} />
            </Link>
          </div>
        ))}
      </div>
      {!isLoading && (
        <div style={{ textAlign: "center" }}>
          {isLoading && <Loading type="spin" color="green"></Loading>}
          {hasNextPage && (
            <button
              className="btn btn-warning my-5"
              onClick={() => dispatch(fetchCharacter(nextPage))}
            >
              Load More ({nextPage})
            </button>
          )}

          {!hasNextPage && (
            <div className="my-5">There is nothing to be show.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
