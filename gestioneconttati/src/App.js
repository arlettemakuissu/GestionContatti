import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import { createContext } from "react";
import ListaClienti from "./Components/ListaClienti";
import "bootstrap/dist/css/bootstrap.min.css";
import AddClient from "./Components/AddClient";
import ListaContatti from "./Components/ListaContatti";
import UpdateContatto from "./Components/UpdateContatto";

export const UserContext = createContext(null);
export const LoggedUserContext = createContext(null);
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/clienti", element: <ListaClienti /> },
    { path: "/addclient", element: <AddClient /> },
    { path: "/addclient/*", element: <ListaClienti /> },
    { path: "/contatti", element: <ListaContatti /> },
    { path: "/contatti/*", element: <UpdateContatto /> },
  ]);

  const [isConnected, setConnect] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div>
      <LoggedUserContext.Provider value={[isConnected, setConnect]}>
        <UserContext.Provider value={[user, setUser]}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      </LoggedUserContext.Provider>
    </div>
  );
}

export default App;
