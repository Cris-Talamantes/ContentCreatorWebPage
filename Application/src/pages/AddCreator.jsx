import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import "../css/AddCreator.css";


function AddCreator() {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    youtube: "",
    twitter: "",
    instagram: "",
  });


  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }


  async function handleSubmit(event) {
    event.preventDefault();


    const socialURL =
      formData.youtube
        ? `${formData.youtube}`
        : formData.twitter
        ? `${formData.twitter}`
        : formData.instagram
        ? `${formData.instagram}`
        : "";


    const { error } = await supabase.from("creators").insert([
      {
        name: formData.name,
        description: formData.description,
        imageURL: formData.image,
        url: socialURL,
      },
    ]);


    if (error) {
      console.error("Error adding creator:", error);
      return;
    }


    navigate("/");
  }


  return (
    <>
      <section className="hero">
        <div className="hero-content container">
          <h1 className="title">ADD CREATOR</h1>


          <div className="grid buttons">
            <button type="button" onClick={() => navigate("/")}>
              VIEW ALL CREATORS
            </button>
            <button type="button" onClick={() => navigate("/new")}>
              ADD A CREATOR
            </button>
          </div>
        </div>
      </section>


      <main className="container add-creator-section">
        <form className="creator-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />


          <label htmlFor="image">Image</label>
          <small>
            Provide a link to an image of your creator. Be sure to include the
            http://
          </small>
          <input
            id="image"
            name="image"
            type="text"
            value={formData.image}
            onChange={handleChange}
          />


          <label htmlFor="description">Description</label>
          <small>
            Provide a description of the creator. Who are they? What makes them
            interesting?
          </small>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>


          <h2 className="social-title">SOCIAL MEDIA LINKS</h2>
          <small className="social-subtitle">
            Provide at least one of the creator&apos;s social media links
          </small>


          <label htmlFor="youtube">YouTube</label>
          <small>The creator&apos;s YouTube handle (without the @)</small>
          <input
            id="youtube"
            name="youtube"
            type="text"
            value={formData.youtube}
            onChange={handleChange}
          />


          <label htmlFor="twitter">Twitter</label>
          <small>The creator&apos;s Twitter handle (without the @)</small>
          <input
            id="twitter"
            name="twitter"
            type="text"
            value={formData.twitter}
            onChange={handleChange}
          />


          <label htmlFor="instagram">Instagram</label>
          <small>The creator&apos;s Instagram handle (without the @)</small>
          <input
            id="instagram"
            name="instagram"
            type="text"
            value={formData.instagram}
            onChange={handleChange}
          />


          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
      </main>
    </>
  );
}


export default AddCreator;

