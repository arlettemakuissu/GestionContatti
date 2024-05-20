import { useState, useEffect } from "react";
import { get } from "../Service/Api";
import { useNavigate } from "react-router-dom";
import WhenLogged from "./WhenLogged";

export default function ListaClienti() {
  const [client, setClient] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const data = await get("getclient");

    setClient(data.data);
    console.log(data);
  };

  function AddClient() {
    navigate("/addclient");
  }

  return (
    <WhenLogged>
      <div className=" container">
        <h2 className="text-center">Lista Clienti</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <th>Nome</th>
            <th>Cognome</th>
            <th>email</th>
            <th>tipo</th>
          </thead>
          <tbody>
            {client.map((item) => (
              <tr>
                <td>{item.nome}</td>
                <td>{item.cognome}</td>
                <td>{item.email}</td>
                <td>{item.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <button className="btn btn-block btn-primary" onClick={AddClient}>
          AddClient
        </button>
      </div>
    </WhenLogged>
  );
}
