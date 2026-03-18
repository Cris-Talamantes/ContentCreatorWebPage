import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import "../css/ShowCreator.css";
import Card from "../components/card";


function ShowCreator() {
  const [creators, setCreators] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase
        .from("creators")
        .select("*");


      if (error) {
        console.error(error);
        return;
      }


      setCreators(data);
    }


    fetchCreators();
  }, []);


  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content container">
          <h1 className="title">CREATORVERSE</h1>


          <div className="grid buttons">
            <button onClick={() => navigate("/")}>
              VIEW ALL CREATORS
            </button>
            <button onClick={() => navigate("/new")}> {}
              ADD A CREATOR
            </button>
          </div>
        </div>
      </section>


      {/* CONTENT */}
      <main className="container creators-section">
        {creators.length === 0 ? (
          <h2>NO CREATORS YET 😞</h2>
        ) : (
          <div className="creator-grid">
            {creators.map((creator) => (
              <Card
                key={creator.id}
                id={creator.id}
                name={creator.name}
                url={creator.url}
                description={creator.description}
                imageURL={creator.imageURL}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}


export default ShowCreator;

