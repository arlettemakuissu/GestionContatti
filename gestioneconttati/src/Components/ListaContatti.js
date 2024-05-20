import { useContext, useEffect, useState } from "react";
import CategoryBar, { categories, headerTitles } from "./CategoryBar";
import ConttatiTable from "./ConttatiTable";
import { get } from "../Service/Api";
import When from "./When";
import AddContatto from "./AddContatto";
import WhenLogged from "./WhenLogged";
import { LoggedUserContext, UserContext } from "../App";

const contatto = {
  nome: "nome",
  cognome: "cognome",
  cat: "FAVORY",
  tel: "tel",
};
export default function ListaContatti() {
  const [headerTitle, setHeaderTitle] = useState(headerTitles.CONTATTI);
  const [category, setCategory] = useState(categories.CONTATTI);
  const [contatti, setContatti] = useState([]);
  const [operation, setOperation] = useState("lista");
  const [userDataContext, setUserContext] = useContext(UserContext);
  const [, setConnected] = useContext(LoggedUserContext);

  const [filteredContatti, setFilteredContatti] = useState([]);
  useEffect(() => {
    // c est un hook qui est appeller quand un certain évènements se produisent es.quand un composant va etre afficher c'est apeller
    if (category === categories.CONTATTI) {
      setFilteredContatti(contatti);
    } else {
      console.log(contatti);
      const data = contatti.filter((p) => {
        console.log(p);
        return p.cat === category;
      });
      console.log(category);
      console.log(data);
      setFilteredContatti(data);
    }
  }, [category]);
  useEffect(() => {
    getContatti();
  }, []);

  const getContatti = async () => {
    if (userDataContext && userDataContext.id) {
      const data = await get("getcontatto/" + userDataContext.id);
      console.log(data.data);
      setContatti(data.data);
      setFilteredContatti(data.data);
    }
  };

  function aggiungiContatto() {
    setOperation("add");
  }
  function listaContatti() {
    setOperation("lista");
  }

  function logOut() {
    setConnected(false);
    setUserContext(null);
  }

  return (
    <WhenLogged>
      <div className="container pt-4">
        <div className="row">
          <div className="col-4">
            <div className="container">
              <div className="row">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={aggiungiContatto}
                >
                  AGGIUNGI CONTATTO
                </button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="container">
              <div className="row">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={listaContatti}
                >
                  LISTA DEI CONTATTI
                </button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="container">
              <div className="row">
                <button className="btn btn-danger btn-lg" onClick={logOut}>
                  LogOut
                </button>
              </div>
            </div>
          </div>
        </div>
        <When condition={operation === "add"}>
          <AddContatto
            getContatti={getContatti}
            listaContatti={listaContatti}
          />
        </When>
        <When condition={operation === "lista"}>
          <div>
            <div className="row">
              <CategoryBar
                setCategory={setCategory}
                setHeaderTitle={setHeaderTitle}
              />
            </div>
            <div className="row">
              <ConttatiTable
                contatti={filteredContatti}
                headerTitle={headerTitle}
                getContatti={getContatti}
              />
            </div>
          </div>
        </When>
      </div>
    </WhenLogged>
  );
}
