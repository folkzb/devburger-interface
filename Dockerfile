# Use uma imagem oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo .env (supondo que esteja no mesmo diretório que o Dockerfile)
COPY .env .env

# Instale as dependências do projeto
RUN yarn install

# Exponha a porta que o frontend irá rodar
EXPOSE 5173

# Comando para rodar a aplicação frontend
CMD ["yarn", "dev"]
