FROM nginx
COPY dist/dashboard/browser/ /var/www/html/
COPY nginx.conf /etc/nginx/nginx.conf
