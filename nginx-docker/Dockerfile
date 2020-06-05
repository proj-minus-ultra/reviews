FROM nginx:1.19.0
EXPOSE 80
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY cache /etc/nginx/cache
COPY ./dist /usr/share/nginx/dist


