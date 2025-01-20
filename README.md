# Thrifty Gaming

**Thrifty Gaming** is an e-commerce platform for gaming accessories built with modern web technologies. This project utilizes **Next.js**, **Prisma**, and other tools to deliver a high-performance and scalable application.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [License](#license)

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** v20 or higher
- **npm** v7 or higher
- **PostgreSQL** (if using a database locally)
- A configured `.env.local` file with the required environment variables.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/thrifty-gaming.git
   cd thrifty-gaming
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the database:

   If using Supabase:
   
   ```bash
   npm run migrate:supabase
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:3000`.

---

## Features

- **Next.js 15.1.4** for server-side rendering and static site generation.
- **Prisma ORM** for database management and migrations.
- **Iron Session** for secure session management.
- **TypeScript** for type safety.
- Supabase integration for a PostgreSQL-powered database backend.
- Modern development workflow with **Turbopack**.

---

## Scripts

Below is a list of scripts defined in the `package.json`:

- **`npm run dev`**: Starts the development server with Turbopack.
- **`npm run build`**: Builds the application for production.
- **`npm run start`**: Runs the production build.
- **`npm run lint`**: Lints the codebase using ESLint.
- **`npm run migrate:supabase`**: Deploys database migrations using Prisma and environment variables from `.env.local`.

---

## Dependencies

### Main Dependencies

- **[@prisma/client](https://www.prisma.io/docs/concepts/components/prisma-client)**: Database client for Prisma.
- **[dotenv-cli](https://github.com/entropitor/dotenv-cli)**: CLI tool for loading environment variables.
- **[iron-session](https://github.com/vvo/iron-session)**: Lightweight session library.
- **[next](https://nextjs.org/)**: React framework for production-grade applications.
- **[openid-client](https://github.com/panva/node-openid-client)**: OpenID Connect and OAuth 2.0 client.
- **[react](https://reactjs.org/)** & **[react-dom](https://reactjs.org/)**: React library for building user interfaces.

### Development Dependencies

- **[@eslint/eslintrc](https://eslint.org/)**: ESLint configuration management.
- **[eslint-config-next](https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next)**: ESLint rules optimized for Next.js projects.
- **[typescript](https://www.typescriptlang.org/)**: TypeScript support.
- **[@types/react](https://www.npmjs.com/package/@types/react)** & **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)**: TypeScript type definitions for React.
- **[@types/node](https://www.npmjs.com/package/@types/node)**: TypeScript type definitions for Node.js.


---

## License

This project is licensed under the [MIT License](LICENSE).
