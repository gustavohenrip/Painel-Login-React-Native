# React Native Login App

![React Native](https://img.shields.io/badge/React%20Native-0.79.5-blue.svg)
![Expo](https://img.shields.io/badge/Expo-53.0.0-black.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

Um aplicativo de login elegante e funcional desenvolvido com React Native, demonstrando o uso de componentes fundamentais e melhores práticas de desenvolvimento mobile.

## Objetivos

Desenvolver uma interface de login simples, mas funcional, utilizando componentes fundamentais do React Native com validação de formulário e feedback visual para o usuário.

## Funcionalidades

### Autenticação
- **Validação de E-mail**: Campo com validação em tempo real de formato de e-mail
- **Campo de Senha Seguro**: Entrada protegida com `secureTextEntry`
- **Botão Inteligente**: Habilitado apenas quando todos os campos são válidos
- **Feedback Visual**: Alertas informativos para ações do usuário

### Interface
- **Design Responsivo**: Layout adaptável para diferentes tamanhos de tela
- **Imagem Personalizada**: Suporte a logo ou imagem customizada
- **Estilização Moderna**: Interface limpa e profissional
- **Experiência do Usuário**: Navegação intuitiva com links funcionais

### Navegação
- **Link de Registro**: Acesso rápido para nova conta
- **Redefinição de Senha**: Opção de recuperação de senha
- **Feedback Imediato**: Alertas informativos para todas as ações

## Tecnologias Utilizadas

- **React Native 0.79.5**: Framework principal para desenvolvimento mobile
- **Expo 53.0.0**: Plataforma de desenvolvimento e deployment
- **React 19.0.0**: Biblioteca base para componentes
- **AsyncStorage**: Armazenamento local persistente
- **React Native Picker**: Componente de seleção nativo

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)
- Expo Go app no seu dispositivo móvel:
  - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [iOS](https://apps.apple.com/app/expo-go/id982107779)

## Instalação e Execução

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/react-native-login-app.git
cd react-native-login-app
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Corrija compatibilidade das dependências
```bash
npx expo install --fix
```

### 4. Inicie o servidor de desenvolvimento
```bash
npm start
```

### 5. Execute no dispositivo
- Abra o app **Expo Go** no seu smartphone
- Escaneie o QR code exibido no terminal
- O aplicativo será carregado automaticamente no seu dispositivo

## Como Usar

### Tela de Login

1. **Campo E-mail**:
   - Digite um endereço de e-mail válido
   - A validação ocorre em tempo real
   - Bordas vermelhas indicam e-mail inválido

2. **Campo Senha**:
   - Digite sua senha (texto oculto por segurança)
   - Campo obrigatório para habilitar o botão de login

3. **Botão ENTRAR**:
   - Habilitado apenas com e-mail válido e senha preenchida
   - Exibe alerta de sucesso ao efetuar login

4. **Links Auxiliares**:
   - **Registrar-se**: Acesso para criação de nova conta
   - **Redefinir Senha**: Opção de recuperação de senha

### Personalização de Logo

Para adicionar sua própria imagem:

1. Coloque o arquivo de imagem na pasta `assets/`
2. Renomeie para `logo.png` (ou ajuste o código conforme necessário)
3. Formatos suportados: PNG, JPG, JPEG

## Estrutura do Projeto

```
react-native-login-app/
├── assets/                 # Imagens e recursos estáticos
│   └── logo.png           # Logo do aplicativo
├── App.js                 # Componente principal da aplicação
├── app.json              # Configurações do Expo
├── babel.config.js       # Configurações do Babel
├── package.json          # Dependências e scripts
└── README.md            # Documentação do projeto
```

## Componentes Utilizados

### Fundamentais do React Native
- **View**: Container principal para organização do layout
- **StyleSheet**: Sistema de estilização nativo
- **Text**: Exibição de textos e rótulos
- **TextInput**: Campos de entrada de dados
- **Image**: Exibição de logo/imagens
- **Button**: Botão de ação principal
- **Pressable**: Links clicáveis interativos
- **SafeAreaView**: Área segura para diferentes dispositivos
- **StatusBar**: Controle da barra de status

### Funcionalidades Avançadas
- **Alert**: Sistema de notificações nativas
- **Validação de E-mail**: Regex para formato válido
- **Estado Condicional**: Habilitação inteligente de botões
- **Feedback Visual**: Indicadores de erro em tempo real

## Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios

# Executar na web
npm run web
```

## Dependências Principais

```json
{
  "expo": "~53.0.0",
  "react": "19.0.0",
  "react-native": "0.79.5",
  "@react-native-async-storage/async-storage": "^2.1.2"
}
```

## Validações Implementadas

### Campo E-mail
- Formato de e-mail válido (regex)
- Campo obrigatório
- Feedback visual em tempo real
- Keyboard type otimizado para e-mail

### Campo Senha
- Campo obrigatório
- Texto oculto (secureTextEntry)
- Prevenção de auto-capitalização

### Botão de Login
- Habilitado condicionalmente
- Validação completa antes da ação
- Feedback de sucesso

## Próximas Funcionalidades

- Integração com API de autenticação
- Tela de registro funcional
- Sistema de redefinição de senha
- Armazenamento seguro de credenciais
- Autenticação biométrica
- Modo escuro/claro
- Internacionalização (i18n)

