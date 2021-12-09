# Naver-FE-SSR

## Introduction

Naver-FE-SSR은 3가지 검색 키워드에 대한 검색 화면을 보여줍니다. 실제 Naver 서비스와 유사하게 UI를 디자인하고 React를 이용해 화면을 만들었습니다. 불국사, 독립일기, 샴고양이 키워드에 대해 Server Side Rendering된 결과물을 유저에게 보여줍니다. MSA의 장점을 살려 Web Server와 Render Server를 분리하였고 Web Server는 json 데이터를 Render Server한테 보내고 Render Server는 Rendering된 HTML 코드를 돌려줍니다.

## Demo Link

아래의 링크는 AWS를 이용해 배포한 링크입니다. 링크에 접속해 새로고침을 누르게 되면 다양한 화면이 로드됩니다. \
http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/

## System Design

유저로부터 Web Server가 검색키워드를 받게 되면 아래 링크처럼 JSON 데이터를 생성해 Render Server로 보내주게 됩니다.
https://github.com/Jeonghyun109/NAVER-FE-SSR/wiki/JSON \

Render Server는 Web Server로부터 데이터를 받아 HTML 코드를 생성후 Web Server한테 다시 보내주게 됩니다. \
Render Server에서 UI를 만들 때 공통적으로 자주 사용되는 부분은 아래 링크와 같이 라이브러리화된 코드를 가져와서 렌더링하게 됩니다. \
https://github.com/Jeonghyun109/NAVER-FE-SSR/wiki/UI-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%ED%99%94

![image](https://user-images.githubusercontent.com/87184009/145199863-3b15798c-fb44-437e-ac49-37de14f38eb9.png)

## Rendering Result

URL parameter로 keys 값을 전송하게 되면 키워드에 맞는 화면만 렌더링 됩니다. 만약 keys 값을 전송하지 않으면 랜덤 키가 반환되며, 랜덤한 화면이 보여집니다. \
불국사: http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/?keys=bulguksa \
독립일기: http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/?keys=diary \
샴고양이: http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/?keys=sham \
에러 페이지 (잘못된 키워드가 입력되었을때): http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/?keys=error

### Main Card

![image](https://user-images.githubusercontent.com/87184009/145201474-56302c5d-1170-4e81-ae0b-69803d08aff5.png)

위 그림과 같이 세개의 키워드에 대하여 main card 를 작성하였고, 비슷한 부분들을 묶어 모듈화를 시켰습니다.
모듈화된 코드는 "./renderServer/components/common/mainCard" 에 있습니다.
그 외의 코드는 다음 repository 에서 찾을 수 있습니다.

불국사: "./renderServer/components/cultureMainCard" \
독립일기: "./renderServer/components/webtoonMainCard" \
샴고양이: "./renderServer/components/animalMainCard"

### Influencer

![image](https://user-images.githubusercontent.com/87184009/145202194-c4e7b395-b302-4983-9f7d-6077d5f2d84e.png)

위 그림과 같이 불국사, 샴고양이 키워드에 influencer 섹션을 구현하였고, influencer 섹션 또한 모듈화를 통해 JSON 데이터를 바꿔주면 화면이 바뀌도록 하였습니다. 또한 후에 나올 View 섹션과 News 섹션과 겹치는 부분들을 모듈화를 시켜 "./renderServer/components/common/others" 에 작성하였습니다.

Influencer 섹션의 메인 코드는 "./renderServer/components/influencer" 에서 찾을 수 있습니다.

### View

![image](https://user-images.githubusercontent.com/87184009/145202743-164cfc7d-bf3a-471f-ad49-78e757403448.png)

View 섹션 또한 개발 후 모듈화를 진행하였으며, 모듈화된 코드는 "./renderServer/components/common/others" 에, 메인 코드는 "./renderServer/components/view" 에서 찾을 수 있습니다.

### News

![image](https://user-images.githubusercontent.com/87184009/145203194-2e8c75f0-9a3e-43f8-bdc4-f5bb43fa83f3.png)

News 섹션 또한 개발 후 모듈화를 진행하였으며, 모듈화된 코드는 "./renderServer/components/common/others" 에, 메인 코드는 "./renderServer/components/news" 에서 찾을 수 있습니다.

### API 서버 연동

![image](https://user-images.githubusercontent.com/74249745/145216911-9d4424bc-e21a-4497-afd1-aefb8073396a.png)

API 서버 연동 또한 완료하였으며, 단축 URL 과 공유하기 API 를 사용하였습니다. 위 이미지에 표시되는 것과 같이 URL 단축이 제대로 실행되는 것을 볼 수 있으며, 블로그의 아이콘을 누르면 단축된 URL을 사용해 Blog 에 공유할 수 있도록 하였습니다.

단축 URL 에 대한 코드는 "./webServer/openApi.js" 에서 찾을 수 있으며, 공유하기에 대한 코드는 "./renderServer/renderServer.js" 에서 찾을 수 있습니다.

## Getting Started

Web Server는 port 3000에서, Render Server는 port 4000에서 동작합니다. \
git clone 이후 아래의 command를 실행시키고 http://localhost:3000/ 에 접속하면 됩니다. \
추가적으로 npm package들을 local에 install 해야할 수도 있습니다.

```
yarn dev
```
