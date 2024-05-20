import { useContext, useState } from "react";
import { post } from "../Service/Api";
import { UserContext } from "../App";
import WhenLogged from "./WhenLogged";

export default function AddContatto({ getContatti, listaContatti }) {
  const [userDataContext] = useContext(UserContext);
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");

  const [tel, setTel] = useState("");
  const [cat, setCat] = useState("");

  async function saveContatto() {
    const data = {
      nome: nome,
      cognome: cognome,
      tel: tel,
      cat: cat,
      clientId: userDataContext.id,
    };

    console.log("fdfdfddffdfdfffg");
    const getdata = await post("addcontatto", data);
    await getContatti();
    listaContatti();
    console.log(data);
  }

  return (
    <WhenLogged>
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h2 className="text-center">Aggiungi Contatto</h2>
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
                    <label className="form-label">tel</label>
                    <br />
                    <input
                      type="text"
                      placeholder="tel"
                      name="email"
                      className="form-control"
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                    ></input>
                  </div>
                  <div className="form-group mb-2">
                    <label className="form-label">cat</label>
                    <br />
                    <select
                      onChange={(e) => setCat(e.target.value)}
                      defaultValue={"CONTATTI"}
                      className="form-control"
                    >
                      <option value="FAMILIA">Famiglia</option>
                      <option value="AMIE">Amici</option>
                      <option value="FAVORY">Favority</option>
                      <option value="CONTATTI">Contatti</option>
                    </select>
                  </div>

                  <button className="btn btn-success" onClick={saveContatto}>
                    submit
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
