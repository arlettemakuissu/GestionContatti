import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { get } from "../Service/Api";
import { useNavigate } from "react-router-dom";
import { put } from "../Service/Api";
import WhenLogged from "./WhenLogged";

export default function UpdateContatto() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");

  const [tel, setTel] = useState("");
  const [cat, setCat] = useState("");

  const { state } = useLocation();
  const { id } = state;

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const data = await get("contatti/" + id);
    // console.log(data);
    setNome(data.data.nome);
    setCognome(data.data.cognome);
    setTel(data.data.tel);
    setCat(data.data.cat);
  };
  //console.log(id);

  // console.log(newdata.nome);

  /* useEffect(() => {
      if (id) {
        setNome(newdata.nome);
        setCognome(newdata.cognome);
        setEmail(newdata.email);
        setAge(newdata.age);
      }
    }, []);*/
  const navigate = useNavigate();
  async function updatecontatti() {
    const res = {
      nome: nome,
      cognome: cognome,
      tel: tel,
      cat: cat,
    };

    console.log("fdfdfddffdfdfffg");
    const data = await put("update/" + id, res);

    console.log(data);
    navigate("/contatti");
  }

  return (
    <WhenLogged>
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h2 className="text-center">UpdateContatto</h2>
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
                    <label className="form-label">Numero Di Telefono</label>
                    <br />
                    <input
                      type="text"
                      placeholder="email"
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
                      defaultValue={cat}
                      className="form-control"
                    >
                      <option value="FAMILIA">Famiglia</option>
                      <option value="AMIE">Amici</option>
                      <option value="FAVORY">Favority</option>
                      <option value="CONTATTI">Contatti</option>
                    </select>
                  </div>

                  <button className="btn btn-success" onClick={updatecontatti}>
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
