import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";
import "../css/ViewCreator.css";

function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data);
      }

      setLoading(false);
    }

    fetchCreator();
  }, [id]);

  async function handleDelete() {
    const { error } = await supabase
      .from("creators")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting creator:", error);
      return;
    }

    navigate("/");
  }

  if (loading) return <p>Loading...</p>;
  if (!creator) return <p>Creator not found.</p>;

  return (
    <div className="view-container">
      <div className="creator-card">
        <div className="creator-image">
          <img src={creator.imageURL} alt={creator.name} />
        </div>

        <div className="creator-info">
          <h1>{creator.name}</h1>
          <p>{creator.description}</p>

          <div className="social-links">
            {creator.url && (
              <a  href={`https://www.youtube.com/@${creator.url}`}target="_blank" rel="noreferrer">
                YouTube: {creator.url}
              </a>
            )}

            {creator.url && (
              <a href={`https://twitter.com/${creator.url}`}target="_blank" rel="noreferrer">
                Twitter: {creator.url}
              </a>
            )}

            {creator.url && (
              <a href={`https://www.instagram.com/${creator.url}`}target="_blank" rel="noreferrer">
                Instagram: {creator.url}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="actions">
        <button
          className="edit-btn"
          onClick={() => navigate(`/edit/${creator.id}`)}
        >
          EDIT
        </button>

        <button className="delete-btn" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
  async function handleDelete() {
  const { error } = await supabase
    .from("creators")
    .delete()
    .eq("id", creator.id); // or just id from useParams

  if (error) {
    console.error("Delete error:", error);
    alert("Failed to delete creator");
    return;
  }

  alert("Creator deleted!");
  navigate("/"); // go back to home after delete
}
}

export default ViewCreator;