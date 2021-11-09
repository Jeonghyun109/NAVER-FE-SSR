### 개발 사전 준비 사항

### 개발 환경

```bash
nvm install 14.18.1
yarn set version 1.22.1
npm install prettier --save
npm install nodemon --save
npm install concurrently --save
npm install body-parser --save
```

### 개발 방법

1. 개발서버 실행 'yarn dev', Web Server, Render Server가 동시에 켜집니다.
2. 브라우저로 3000포트 접속(Web Server) https://localhost:3000
3. 브라우저로 8080포트 접속(Render Server) https://localhost:8080 -> 통신 구현 후 렌더링 종료 예정
4. git commit 전에 'yarn format', 'npx tsc"를 실행하는 것을 권장드립니다.

### 폴더 설명

components, lib, pages, styles 폴더는 Render Server의 Typescript 코드입니다.
src 폴더는 Web Server의 Javascript 코드입니다.
