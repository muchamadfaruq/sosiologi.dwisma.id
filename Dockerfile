FROM nginx:stable-alpine
LABEL maintainer="Muchamad Faruq <belajarsosiologi.my.id>"
COPY /. /usr/share/nginx/html
EXPOSE 9001
CMD ["nginx", "-g", "daemon off;"]