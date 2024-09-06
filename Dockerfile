FROM nginx:stable-alpine
LABEL maintainer="Muchamad Faruq <belajarsosiologi.my.id>"
COPY /. /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]