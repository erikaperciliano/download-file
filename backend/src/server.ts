import Fastify from "fastify";
import cors from '@fastify/cors';
import { toCsv } from "./utils/toCsv";

const app = Fastify({ logger: true });


// ✅ habilitar CORS
await app.register(cors, {
  origin: "http://localhost:5173",
});

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", createdAt: "2025-10-18" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", createdAt: "2025-10-18" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager", createdAt: "2025-10-18" },
];

const csv = toCsv(users);

// 🔹 Endpoint JSON
app.get("/user", async (_, reply) => {
  return reply.send(users);
});

// 🔹 Endpoint CSV
app.get("/user/export", async (_, reply) => {
  try {

    reply
      .header("Content-Type", "text/csv")
      .header("Content-Disposition", "attachment; filename=usuarios.csv")
      .send(csv);
  } catch (err) {
    app.log.error(err);
    reply.status(500).send({ message: "Erro ao gerar CSV" });
  }
});

const PORT = 3333;
app.listen({ port: PORT }).then(() => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
