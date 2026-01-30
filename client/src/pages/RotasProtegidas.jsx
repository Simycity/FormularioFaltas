import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";

const RotasProtegidas = () => {
  return (
    <div className="d-flex">
      <div
        className="d-flex flex-column min-vh-100 flex-grow-1 p-3 justify-content-center"
        style={{ marginLeft: "350px" }}
      >
        <Container fluid>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default RotasProtegidas;
