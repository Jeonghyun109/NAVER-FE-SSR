# Naver-FE-SSR

## Introduction

Naver-FE-SSR은 3가지 검색 키워드에 대한 검색 화면을 보여줍니다. 실제 Naver 서비스와 유사하게 UI를 디자인하고 React를 이용해 화면을 만들었습니다. 불국사, 독립일기, 샴고양이 키워드에 대해 Server Side Rendering된 결과물을 유저에게 보여줍니다. MSA의 장점을 살려 Web Server와 Render Server를 분리하였고 Web Server는 json 데이터를 Render Server한테 보내고 Render Server는 Rendering된 HTML 코드를 돌려줍니다.

## Demo Link

아래의 링크는 AWS를 이용해 배포한 링크입니다. 링크에 접속해 새로고침을 누르게 되면 다양한 키워드에 대해 화면이 로드됩니다. \
http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/

## System Design

유저로부터 Web Server가 검색키워드를 받게 되면 아래 링크처럼 JSON 데이터를 생성해 Render Server로 보내주게 됩니다.
https://github.com/Jeonghyun109/NAVER-FE-SSR/wiki/JSON \
Render Server는 Web Server로부터 데이터를 받아 아래 링크처럼 HTML 코드를 생성후 Web Server한테...
https://github.com/Jeonghyun109/NAVER-FE-SSR/wiki (작업중)

![image](https://user-images.githubusercontent.com/87184009/145199863-3b15798c-fb44-437e-ac49-37de14f38eb9.png)

## Rendering Result

URL parameter로 keys 값을 전송하게 되면 키워드에 맞는 화면만 렌더링 됩니다. \
불국사: http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/?keys=bulguksa \
독립일기: http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/?keys=diary \
샴고양이: http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/?keys=sham

### Main Card

![image](https://user-images.githubusercontent.com/87184009/145201474-56302c5d-1170-4e81-ae0b-69803d08aff5.png)

### Influencer

![image](https://user-images.githubusercontent.com/87184009/145202194-c4e7b395-b302-4983-9f7d-6077d5f2d84e.png)

### View

![image](https://user-images.githubusercontent.com/87184009/145202743-164cfc7d-bf3a-471f-ad49-78e757403448.png)

### News

![image](https://user-images.githubusercontent.com/87184009/145203194-2e8c75f0-9a3e-43f8-bdc4-f5bb43fa83f3.png)
