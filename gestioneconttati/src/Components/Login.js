import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../Service/Api";
import { LoggedUserContext, UserContext } from "../App";
import WhenLogged from "./WhenLogged";

export default function Login() {
  const [email, setEmail] = useState();

  const [, setUserContext] = useContext(UserContext);
  const [, setConnected] = useContext(LoggedUserContext);
  const navigate = useNavigate();

  async function Dologin() {
    const res = { email: email };
    const data = await post("login", res);
    const getdata = data.data;
    console.log(getdata);

    if (getdata.tipo === "client") {
      setUserContext(data.data);
      setConnected(true);
      navigate("/contatti");
    } else if (getdata.tipo === "administrator") {
      setUserContext(data.data);
      setConnected(true);
      navigate("/clienti");
    }
  }

  return (
    <WhenLogged>
      <div className="container border border-1 w-50 mt-5">
        <h3 className="text-center">Enter your email</h3>
        <div class="input-group mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="Enter your email"
            aria-label="Enter your Email"
            aria-describedby="basic-addon1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-center mb-2">
          <button
            class="btn btn-primary me-md-2"
            type="button"
            onClick={Dologin}
          >
            Login
          </button>
        </div>
      </div>
    </WhenLogged>
  );
}
