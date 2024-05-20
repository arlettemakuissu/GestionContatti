import { json, useNavigate } from "react-router-dom";
import { Delete, get } from "../Service/Api";
import WhenLogged from "./WhenLogged";

export default function ConttatiTable({ contatti, headerTitle, getContatti }) {
  const navigate = useNavigate();

  const updateContatto = (id) => () => {
    console.log(id);
    navigate("updatecontatti", { state: { id } });
  };
  const deletContatto = (id) => async () => {
    const deleteData = await Delete("deletecontatto/" + id);
    await getContatti();
  };
  return (
    <WhenLogged>
      <div className="container">
        <h2 className="text-center">{headerTitle} </h2>
        <table className="table table-bordered table-striped">
          <thead>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Tel</th>
            <th>Azioni</th>
          </thead>
          <tbody>
            {contatti.map((item, i) => (
              <tr key={JSON.stringify({ item, i })}>
                <td>{item.nome}</td>
                <td>{item.cognome}</td>

                <td>{item.tel} </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={updateContatto(item.clientId)}
                  >
                    update
                  </button>{" "}
                  <button
                    className=" btn btn-danger"
                    onClick={deletContatto(item.clientId)}
                  >
                    delete
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
      </div>
    </WhenLogged>
  );
}
