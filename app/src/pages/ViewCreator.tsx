import { useParams } from "react-router-dom";

function ViewCreator() {
  const { id } = useParams();

  return (
    <div>
      <h1>View Creator</h1>
      <p>ID: {id || "no id yet"}</p>
    </div>
  );
}

export default ViewCreator;