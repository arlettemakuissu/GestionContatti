import WhenLogged from "./WhenLogged";

export const headerTitles = {
  AMIE: "LISTA DEI AMICI",
  FAMILIA: "LISTA DELLA FAMIGLIA",
  CONTATTI: "LISTA DEI CONTATTI",
  FAVORY: "LISTA DEI FAVORITY",
};
export const categories = {
  AMIE: "AMIE",
  FAMILIA: "FAMILIA",
  CONTATTI: "CONTATTI",
  FAVORY: "FAVORY",
};
export default function CategoryBar({ setHeaderTitle, setCategory }) {
  const goToCategory = (category) => () => {
    setCategory(category);
    setHeaderTitle(headerTitles[category]);
  };
  return (
    <WhenLogged>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-black bg-light">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a
                  class="nav-link"
                  href="#"
                  onClick={goToCategory(categories.CONTATTI)}
                >
                  CONTATTI
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  onClick={goToCategory(categories.FAVORY)}
                >
                  FAVORITY
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  onClick={goToCategory(categories.AMIE)}
                >
                  AMICI
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  onClick={goToCategory(categories.FAMILIA)}
                >
                  FAMILIA
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </WhenLogged>
  );
}
