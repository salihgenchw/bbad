import { useParams } from "react-router-dom";

const CharDetail = () => {
  const id = useParams();
  return <div>detail {id}</div>;
};

export default CharDetail;
