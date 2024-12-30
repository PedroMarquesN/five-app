# Five App

## Descrição

O Five App é uma aplicação web desenvolvida com Vue.js que permite a gestão de usuários, incluindo a ativação e desativação do status de administrador. A aplicação também possui funcionalidades de upload de fotos, aprovação de uploads e configurações de perfil.

## Funcionalidades

- **Gerenciamento de Usuários**: Ativar e desativar o status de administrador dos usuários.
- **Upload de Fotos**: Permite que os usuários façam upload de fotos.
- **Aprovação de Uploads**: Administradores podem aprovar ou rejeitar uploads de fotos.
- **Configurações de Perfil**: Usuários podem atualizar suas informações de perfil.
- **Logout**: Permite que os usuários façam logout da aplicação.

## Estrutura do Projeto

### Componentes Principais

- **Users.vue**: Componente responsável pelo gerenciamento de usuários.
- **DashboardLayout.vue**: Layout principal do dashboard, contendo a navegação lateral e as rotas principais.

### Diretórios

- **src/pages/Dashboard**: Contém as páginas do dashboard, incluindo o gerenciamento de usuários.
- **src/layouts**: Contém os layouts utilizados na aplicação.

## Instalação

1. Clone o repositório:
   ```bash
   git clone git@github.com:PedroMarquesN/five-app.git

2. cd five-app

3. npm install

4. npm run dev