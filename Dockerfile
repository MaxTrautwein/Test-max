FROM node:slim as build

WORKDIR /project
RUN npm install -g @angular/cli

COPY badux/package.json badux/package-lock.json ./
RUN npm ci

COPY badux/ .

RUN ng build

FROM httpd:alpine
COPY --from=build /project/dist/badux/browser/ /usr/local/apache2/htdocs/
COPY .htaccess /usr/local/apache2/htdocs/
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf