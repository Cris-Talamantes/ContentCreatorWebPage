import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";
import "../css/AddCreator.css";


function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();


  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });


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
        setLoading(false);
        return;
      }


      setCreator({
        name: data.name || "",
        url: data.url || "",
        description: data.description || "",
        imageURL: data.imageURL || "",
      });


      setLoading(false);
    }


    fetchCreator();
  }, [id]);


  function handleChange(event) {
    const { name, value } = event.target;
    setCreator((prev) => ({
      ...prev,
      [name]: value,
    }));
  }


  async function handleSubmit(event) {
    event.preventDefault();


    const { error } = await supabase
      .from("creators")
      .update({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageURL: creator.imageURL,
      })
      .eq("id", id);


    if (error) {
      console.error("Error updating creator:", error);
      alert("Failed to update creator");
      return;
    }


    navigate(`/view/${id}`);
  }


  if (loading) return <p>Loading...</p>;


  return (
    <div className="add-creator-page">
      <h1>Edit Creator</h1>


      <form className="creator-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={creator.name}
            onChange={handleChange}
            placeholder="Enter creator name"
          />
        </label>


        <label>
          URL
          <input
            type="text"
            name="url"
            value={creator.url}
            onChange={handleChange}
            placeholder="Enter creator handle or url"
          />
        </label>


        <label>
          Description
          <textarea
            name="description"
            value={creator.description}
            onChange={handleChange}
            placeholder="Enter description"
            rows="5"
          />
        </label>


        <label>
          Image URL
          <input
            type="text"
            name="imageURL"
            value={creator.imageURL}
            onChange={handleChange}
            placeholder="Enter image url"
          />
        </label>


        <button type="submit">SAVE CHANGES</button>
      </form>
    </div>
  );
}


export default EditCreator;

