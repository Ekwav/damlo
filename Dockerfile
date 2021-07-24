# stage 1 as builder
FROM node:12-alpine as builder

RUN mkdir /damlo

WORKDIR /damlo

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install

COPY . .

# Build the project and copy the files
RUN npm run ng build -- --prod

# Stage 2
FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /var/www/damlo/*

# Copy from the stage 1
COPY --from=builder /damlo/dist/damlo /var/www/damlo

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]