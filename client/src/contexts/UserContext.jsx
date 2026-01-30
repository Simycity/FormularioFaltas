import { createContext, useState } from "react";

// Criando o contexto
export const FormContext = createContext();

export const FormProvider = ({ children }) => {

  // Estado global do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    setor: "",
    motivo: "",
    observacao: "",
    arquivo: null,
  });

  // Atualiza qualquer campo
  const atualizarCampo = (campo, valor) => {
    setFormData((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  // Envio do formulário
  const enviarFormulario = () => {
    // validação simples
    if (
      !formData.nome ||
      !formData.email ||
      !formData.setor ||
      !formData.motivo ||
      !formData.arquivo
    ) {
      alert("⚠️ Preencha todos os campos obrigatórios!");
      return;
    }

    console.log("📄 Dados do formulário:", formData);
    console.log("📎 Arquivo:", formData.arquivo.name);

    alert("✅ Atestado enviado com sucesso!");

    limparFormulario();
  };

  // Limpa o formulário
  const limparFormulario = () => {
    setFormData({
      nome: "",
      email: "",
      setor: "",
      motivo: "",
      observacao: "",
      arquivo: null,
    });
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        atualizarCampo,
        enviarFormulario,
        limparFormulario,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
