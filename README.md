# Sistema de Atendimento Inteligente para Clínicas Médicas

## Descrição

Este é um sistema web para gerenciamento de agendamentos em clínicas médicas, desenvolvido com Vue.js no frontend e Node.js no backend.

## Tecnologias

- Frontend: Vue.js
- Backend: Node.js + Express
- Banco de dados: MongoDB
- Autenticação: JWT
- APIs externas: ViaCEP e OpenWeatherMap

## Instalação

### Pré-requisitos

- Node.js instalado
- MongoDB instalado e rodando
- Chaves de API: OpenWeatherMap (para clima)

### Backend

1. Navegue para a pasta `backend`
2. Instale as dependências: `npm install`
3. Configure o arquivo `.env` com suas chaves (MONGO_URI, JWT_SECRET, WEATHER_API_KEY)
4. Execute: `npm run dev`

### Frontend

1. Navegue para a pasta `frontend`
2. Instale as dependências: `npm install`
3. Execute: `npm run serve`

## Uso

- Acesse o frontend em hava2-frontend.vercel.app
- O backend roda em https://ava2-backend.vercel.app/api/{rota}
- Registre-se como paciente ou secretário
- Faça login
- Agende consultas (com CEP para endereço e alerta de clima)
- Visualize agendamentos no dashboard

## Funcionalidades

- Cadastro e login de usuários (pacientes e secretários)
- Agendamento de consultas com verificação de horário (simples, sem conflito real)
- Consulta automática de endereço pelo CEP (ViaCEP)
- Integração com API de clima (OpenWeatherMap) para alerta de chuva
- Painel administrativo básico (lista de agendamentos)
