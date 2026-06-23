# Incident Management Platform

Plataforma para gerenciamento de incidentes desenvolvida para estudo e aplicação prática de conceitos DevOps.

## Objetivos

- Automação de deploy
- Containerização com Docker
- CI/CD com GitHub Actions
- Health Checks
- Observabilidade
- Kubernetes
- Cloud

## Tecnologias

- Node.js
- Express
- SQLite
- Docker
- GitHub Actions

## Executando Localmente

```bash
npm install
npm run dev
```

Aplicação:

http://localhost:3000

Health Check:

http://localhost:3000/health

## Docker

```bash
docker build -t incident-management-platform:v1 .
docker run -d -p 3000:3000 incident-management-platform:v1
```

## Pipeline CI

A cada push para a branch master:

- Checkout
- Instala dependências
- Executa build
- Valida aplicação
- Build da imagem Docker

## Próximas Evoluções

- Grafana
- Loki
- Promtail
- Kubernetes
- Terraform
- AWS
