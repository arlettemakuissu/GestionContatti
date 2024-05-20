import { useContext, useEffect } from "react";
import { LoggedUserContext } from "../App";

import { useNavigate } from "react-router-dom";

export default function WhenLogged({ children }) {
  const navigate = useNavigate();
  const [isConnected] = useContext(LoggedUserContext);

  useEffect(() => {
    if (!isConnected) {
      navigate("/");
    }
  }, [isConnected]);

  return <>{children}</>;
}
