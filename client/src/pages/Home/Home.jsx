import { useContext } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { FaFileUpload, FaPaperPlane } from "react-icons/fa";

import { FormContext } from "../../contexts/UserContext";

function Home() {
  const { formData, atualizarCampo, enviarFormulario } =
    useContext(FormContext);

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card className="p-4 shadow" style={{ width: "520px" }}>
        <h4 className="text-center mb-4">
          <FaFileUpload className="me-2" />
          Envio de Justificativa de Falta
        </h4>

        <Form>
          {/* Nome */}
          <Form.Group className="mb-3">
            <Form.Label>Nome completo</Form.Label>
            <Form.Control
              type="text"
              value={formData.nome}
              onChange={(e) =>
                atualizarCampo("nome", e.target.value)
              }
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={formData.email}
              onChange={(e) =>
                atualizarCampo("email", e.target.value)
              }
            />
          </Form.Group>

          {/* Setor */}
          <Form.Group className="mb-3">
            <Form.Label>Setor</Form.Label>
            <Form.Select
              value={formData.setor}
              onChange={(e) =>
                atualizarCampo("setor", e.target.value)
              }
            >
              <option value="">Selecione</option>
              <option>RH</option>
              <option>TI</option>
              <option>Financeiro</option>
              <option>Operacional</option>
            </Form.Select>
          </Form.Group>

          {/* Motivo */}
          <Form.Group className="mb-3">
            <Form.Label>Motivo</Form.Label>
            <Form.Control
              type="text"
              value={formData.motivo}
              onChange={(e) =>
                atualizarCampo("motivo", e.target.value)
              }
              placeholder="Atestado médico"
            />
          </Form.Group>

          {/* Observação */}
          <Form.Group className="mb-3">
            <Form.Label>Observações</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={formData.observacao}
              onChange={(e) =>
                atualizarCampo("observacao", e.target.value)
              }
            />
          </Form.Group>

          {/* Upload */}
          <Form.Group className="mb-4">
            <Form.Label>
              <FaFileUpload className="me-2" />
              Anexar atestado (PDF ou imagem)
            </Form.Label>

            <Form.Control
              type="file"
              accept=".pdf,image/*"
              onChange={(e) =>
                atualizarCampo("arquivo", e.target.files[0])
              }
            />

            {formData.arquivo && (
              <small className="text-success">
                Arquivo selecionado: {formData.arquivo.name}
              </small>
            )}
          </Form.Group>

          <Button
            className="w-100"
            variant="primary"
            onClick={enviarFormulario}
          >
            <FaPaperPlane className="me-2" />
            Enviar atestado
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Home;
