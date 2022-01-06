import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CharDetail = () => {
  const [char, setChar] = useState();
  const { char_id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]));
  }, [char_id]);

  return (
    <div className="container">
      {char && (
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-7">
            <div className="card mt-2 shadow detailcard">
              <img src={char.img} className="card-img-top" alt={char.name} />
              <div className="card-body"></div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-5">
            <h1 className="DetailH1 mt-1">{char.name}</h1>
            <h5 className="text-muted">
              {char.portrayed} [{char.nickname}]
            </h5>
            <h6 className="mt-5">
              Season :{" "}
              {char.appearance.map((season, i) => (
                <button
                  className="btn btn-secondary btn-sm rounded me-1 disabled shadow-sm"
                  key={i}
                >
                  {season}
                </button>
              ))}
            </h6>

            <h6 className="mt-3">
              Role :{" "}
              {char.occupation.map((role, i) => (
                <button
                  className="btn btn-success  btn-sm rounded me-1 disabled shadow-sm"
                  key={i}
                >
                  {role}
                </button>
              ))}
            </h6>
            <Link to="/">
              <button className="btn btn-outline-success mt-3">
                BACK TO LİST
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharDetail;
