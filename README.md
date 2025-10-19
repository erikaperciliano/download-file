# 📦 Download File App

Aplicação **fullstack** construída com **React + Vite (frontend)** e **Fastify (backend)**, que exibe uma lista de usuários vinda do backend e permite **exportar os dados em formato CSV** através de um clique no botão de download.

---

## 🚀 Tecnologias

### **Frontend**
- ⚛️ [React](https://react.dev)
- ⚡ [Vite](https://vitejs.dev)
- 🎨 [Tailwind CSS](https://tailwindcss.com)
- 🧩 [Lucide Icons](https://lucide.dev)
- 🪝 [SWR](https://swr.vercel.app) para controle de cache e requisições
- 💅 Componentização com princípios **SOLID** e boas práticas de **React Patterns**

### **Backend**
- ⚡ [Fastify](https://fastify.dev)
- 📄 [json2csv](https://www.npmjs.com/package/json2csv) para geração de arquivos CSV
- 🔁 CORS configurado para integração com o frontend
- 🧱 Arquitetura minimalista e extensível

---

---

## ⚙️ Instalação

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/erika-perciliano/download-file.git
cd download-file

```

### 2️⃣ Instalar dependências
- Frontend:
```bash
cd frontend
npm install

```
- Backend:
 
```bash
cd ../backend
npm install

```
🏃‍♂️ Rodando a aplicação

- Backend

Na pasta backend:
```bash
npm run dev

```

O servidor será iniciado em:
```bash
http://localhost:3333

```

- Frontend

Em outro terminal, na pasta frontend:
```bash
npm run dev

```

Aplicação disponível em:
```bash
http://localhost:5173
```

### 🧩 Boas práticas aplicadas

- Separação de responsabilidades (frontend/backend)

- Componentização e reuso (ex: DownloadButton)

- Hooks customizados (useUsers, useDownloadFile)

- Clean Code e padronização de estilo

- SOLID e React Patterns

- CORS configurado no backend para comunicação segura

### 🧠 Próximos passos (melhorias futuras)

- Implementar backend real com banco de dados

- Adicionar testes automatizados (Jest / Vitest)

- Paginação e filtros na tabela

- Internacionalização (i18n)

- Upload de CSV para importação