import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCharacter } from "../redux/charactersSlice/charactersSlice";
import CardComponent from "./CardComponent";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacter());
    }
  }, [dispatch, status]);

  return (
    <div className="container">
      <div className="row">
        {characters.map((character) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={character.char_id}>
            <Link to={`/char/${character.char_id}`}>
              <CardComponent character={character} />
            </Link>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        {status === "loading" && <Loading type="spin" color="green"></Loading>}

        {hasNextPage && (
          <button
            className="btn btn-success my-5"
            onClick={() => dispatch(fetchCharacter(nextPage))}
          >
            Load More ({nextPage})
          </button>
        )}

        {!hasNextPage && (
          <div className="my-5">There is nothing to be show.</div>
        )}
      </div>
    </div>
  );
};

export default Home;
