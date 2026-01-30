import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import cors from "cors";

// Para contúdos sensíveis
const sensi = import.meta.env.VITE_API_URL;

const app = express();

app.use(cors());
app.use(express.json());

// upload do arquivo
const upload = multer({ dest: "uploads/" });

// rota para envio do formulário
app.post("/enviar-atestado", upload.single("arquivo"), async (req, res) => {
  const { nome, email, matricula, motivo, observacao } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: sensi,
      pass: sensi
    }
  });

  await transporter.sendMail({
    from: "Sistema RH",
    to: sensi,
    subject: "Novo atestado enviado",
    html: `
      <p><b>Nome:</b> ${nome}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Matrícula:</b> ${matricula}</p>
      <p><b>Motivo:</b> ${motivo}</p>
      <p><b>Observação:</b> ${observacao}</p>
    `,
    attachments: [
      {
        filename: req.file.originalname,
        path: req.file.path
      }
    ]
  });

  res.json({ status: "ok" });
});

app.listen(3333, () => {
  console.log("🚀 Servidor rodando");
});
