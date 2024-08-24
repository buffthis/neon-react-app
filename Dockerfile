# Node.js 22을 베이스 이미지로 사용합니다.
FROM node:22-alpine AS build

# 애플리케이션 소스를 컨테이너로 복사합니다.
WORKDIR /app
COPY . .

# Yarn을 사용하여 의존성을 설치하고 빌드합니다.
RUN yarn install
RUN yarn build

# 간단한 정적 파일 서버로 제공하기 위한 설정
FROM node:22-alpine

# Serve 패키지를 글로벌로 설치합니다.
RUN npm install -g serve

# 빌드된 React 앱 파일 복사
COPY --from=build /app/build /app

# Serve가 사용하는 포트를 노출합니다.
EXPOSE 3000

# Serve를 사용하여 빌드된 앱을 제공하는 명령어를 설정합니다.
CMD ["serve", "-s", "/app", "-l", "3000"]