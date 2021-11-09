### 개발 사전 준비 사항

### 개발 환경

```bash
nvm install 14.18.1
yarn set version 1.22.1
```

### 개발 환경

1. 개발서버 실행 'yarn dev', Web Server, Render Server가 동시에 켜집니다.
2. 브라우저로 3000포트 접속(Web Server) https://localhost:3000
3. 브라우저로 4000포트 접속(Render Server) https://localhost:8080 -> 통신 구현 후 렌더링 종료 예정
4. git commit 전에 'yarn format', 'npx tsc"를 실행하는 것을 권장드립니다.

### 폴더 설명

src 폴더는 Render Server의 Typescript 코드입니다.
webServer 폴더는 Web Server의 Javascript 코드입니다.

### 개발 방법

작성중
