FROM nginx
COPY index.html /var/www/html/
COPY nginx.conf /etc/nginx/nginx.conf
