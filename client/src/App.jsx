import "./App.css";

// Importando componente do rea
import { Outlet } from "react-router-dom";

//Importação dos componentes do bootstrap
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <div>
        <Container className="text-center">
          <Outlet />
        </Container>
      </div>
    </>
  );
}

export default App;
