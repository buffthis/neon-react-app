# Node.js 22을 베이스 이미지로 사용합니다.
FROM node:22-alpine AS build

# 애플리케이션 소스를 컨테이너로 복사합니다.
WORKDIR /app
COPY . .

# Yarn을 사용하여 의존성을 설치하고 빌드합니다.
RUN yarn install
RUN yarn build

# Nginx를 사용하여 빌드된 애플리케이션을 제공하기 위한 설정
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Nginx가 사용하는 포트를 노출합니다.
EXPOSE 80

# Nginx를 시작하는 명령어를 설정합니다.
CMD ["nginx", "-g", "daemon off;"]