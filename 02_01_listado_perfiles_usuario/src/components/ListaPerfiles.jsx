import React, { useState, useEffect } from "react";

const ListaPerfiles = () => {
  const [perfiles, setPerfiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/JSON/perfiles.json");
        // const response = await fetch("https://randomuser.me/api/?results=10");

        const data = await response.json();
        setPerfiles(data.results);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <p>Ocurrió un error: {error.message}</p>;
  }

  return (
    <div>
      <div className="row ml-5">
      <h2>Lista de perfiles</h2>
      </div>
      <div className="row ml-5 my-5">

        {perfiles.map((perfil) => (
          <div className="col-md-4 my-3" key={perfil.id.value} >

            <div className="card">
              <div className="card-header">
                <h4>{perfil.name.first} {perfil.name.last}</h4>
              </div>

              <div className="card-body">
                <p className="card-text"><strong>Edad:</strong>{perfil.dob.age}</p>
                <p className="card-text"><strong>País:</strong> {perfil.location.country}</p>

              </div>
            </div>

          </div>

        ))}


      </div>

    </div>
  );
};

export default ListaPerfiles;
