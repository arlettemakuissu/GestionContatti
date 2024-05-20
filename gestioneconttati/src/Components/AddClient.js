import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../Service/Api";
import WhenLogged from "./WhenLogged";

export default function AddClient() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");

  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("");
  const navigate = useNavigate();
  async function AddClient() {
    const res = {
      nome: nome,
      cognome: cognome,
      email: email,
      tipo: tipo,
    };

    console.log("fdfdfddffdfdfffg");
    const data = await post("addclient", res);

    console.log(data);
    navigate("ListClient");
  }
  function GetClient() {
    navigate("getClient");
  }

  return (
    <WhenLogged>
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h2 className="text-center">Add Client</h2>
              <div className="card-body">
                <>
                  <div className="form-group mb-2">
                    <label className="form-label">nome</label>
                    <input
                      type="text"
                      placeholder="nome"
                      name="nome"
                      className="form-control"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    ></input>
                  </div>
                  <div className="form-group mb-2">
                    <label className="form-label">cognome</label>
                    <input
                      type="text"
                      placeholder="cognome"
                      name="cognome"
                      className="form-control"
                      value={cognome}
                      onChange={(e) => setCognome(e.target.value)}
                    ></input>
                  </div>
                  <div className="form-group mb-2">
                    <label className="form-label">Email</label>
                    <br />
                    <input
                      type="text"
                      placeholder="email"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label">tipo</label>
                    <br />

                    <select
                      onChange={(e) => setTipo(e.target.value)}
                      defaultValue={"Admin"}
                      className="form-control"
                    >
                      <option value="administrator">administrator</option>
                      <option value="client">client</option>
                    </select>
                  </div>
                  <button className="btn btn-success" onClick={AddClient}>
                    submit
                  </button>
                  <button className="btn btn-danger" onClick={GetClient}>
                    cancel
                  </button>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WhenLogged>
  );
}
