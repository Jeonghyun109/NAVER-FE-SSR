class PayloadSelector {
  static payloadMap = {
    bulguksa: {
      mainCard: {
        colorScheme: {
          background: "rgb(236, 239, 243)",
          topBorder: "#c2c9cd",
          subTitle: "rgba(107,112,122,0.8)",
          subTapColor: "#6b707a",
          subTapBar: "rgba(135,142,154,0.3)",
        },
        title: {
          name: "경주 불국사",
          type: "문화재",
          "title-url": "https://m.terms.naver.com/~~~",
          subName: "慶州 佛國寺",
        },
        subTap: {
          mainTap: {
            title: "전체",
            href: "https://search.naver.com",
          },
          list: [
            {
              title: "기본정보",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EA%B8%B0%EB%B3%B8%EC%A0%95%EB%B3%B4",
            },
            {
              title: "포토",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%ED%8F%AC%ED%86%A0",
            },
            {
              title: "주변 문화재",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22isOpen%22%3Atrue%2C%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%A3%BC%EB%B3%80%20%EB%AC%B8%ED%99%94%EC%9E%AC",
            },
            {
              title: "함께 찾은 문화재",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%ED%95%A8%EA%BB%98%20%EC%B0%BE%EC%9D%80%20%EB%AC%B8%ED%99%94%EC%9E%AC",
            },
          ],
        },
        common: {
          title: "기본정보",
          information: {
            //detail-info?
<<<<<<< HEAD
            지정종목: 
              {
                detail: "사적",
                link: false,
              },
            지정일: 
              {
                detail: "2009년 12월 21일",
                link: false,
              },
            소재지: 
              {
                detail: "경북 경주시 불국로 385, 등 (진현동)",
                link: true,
                url: "https://map.naver.com/v5/?c=14396938.5121574,4271253.7030237,15,0,0,0,dh&lng=129.3298991&lat=35.7862812&type=0&title=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC",
              },
            
            시대: 
              {
                detail: "통일신라",
                link: false,
              },
            "종류/분류": 
              {
                detail: "사찰",
                link: false,
              },
            크기: 
              {
                detail: "면적 409,315㎡",
                link: false,
              },
          },
          "descriptionText": "경북 경주시 진현동 토함산 기슭에 있는 신라시대 절. 사적이다.",
          "descriptionURL": "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EA%B8%B0%EB%B3%B8%EC%A0%95%EB%B3%B4",
          "imageList": [
=======
            지정종목: {
              detail: "사적",
              link: false,
            },
            지정일: {
              detail: "2009년 12월 21일",
              link: false,
            },
            소재지: {
              detail: "경북 경주시 불국로 385, 등 (진현동)",
              link: true,
              url: "https://map.naver.com/v5/?c=14396938.5121574,4271253.7030237,15,0,0,0,dh&lng=129.3298991&lat=35.7862812&type=0&title=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC",
            },

            시대: {
              detail: "통일신라",
              link: false,
            },
            "종류/분류": {
              detail: "사찰",
              link: false,
            },
            크기: {
              detail: "면적 409,315㎡",
              link: false,
            },
          },
          descriptionText:
            "경북 경주시 진현동 토함산 기슭에 있는 신라시대 절. 사적이다.",
          descriptionURL:
            "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EA%B8%B0%EB%B3%B8%EC%A0%95%EB%B3%B4",
          imageList: [
>>>>>>> upstream/main
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_361%2F20200109065040326_XPT7GLZUJ.gif%2F79773_0.gif%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "경주 불국사 본문 이미지 1",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902073710511_860A9OWJX.jpg%2F10545613.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "불국사",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902073711216_OY29PF7YZ.jpg%2F10545615.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "불국사",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075005787_MHOWJN4CB.jpg%2F10708602.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "불국사 극락전",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075038404_2I15WK6H0.jpg%2F10712762.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "불국사 범종각",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075023229_D1LCQXNAW.jpg%2F10708964.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "불국사 범영루",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075034463_PDFPYQ309.jpg%2F10712722.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "경주 불국사 가구식 석축",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075025139_T8DBAC4OE.jpg%2F10711974.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "불국사 부도",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075006710_JPWT5VUKN.jpg%2F10708743.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "경주 불국사 다보탑",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075021801_AN6BXN7JK.jpg%2F10708902.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "불국사 대웅전 석가모니불",
            },
          ],
<<<<<<< HEAD
          imgURL: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%ED%8F%AC%ED%86%A0",
=======
          imgURL:
            "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%ED%8F%AC%ED%86%A0",
>>>>>>> upstream/main
          place:
            "http://map.naver.com?title=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC&y=35.7862812&x=129.3298991",
        },
        similar: {
          header: {
            title: "주변 문화재",
            href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22isOpen%22%3Atrue%2C%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%A3%BC%EB%B3%80%20%EB%AC%B8%ED%99%94%EC%9E%AC",
          },
          list: [
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371948&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371948%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%82%AC%EB%A6%AC%ED%83%91",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008211011491_G1633N7QS.jpg%2F281185.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 불국사 사리탑",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371947&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371947%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EB%8B%A4%EB%B3%B4%ED%83%91",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075010177_IXCH29M6I.jpg%2F10708747.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 불국사 다보탑",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371949&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371949%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%97%B0%ED%99%94%EA%B5%90%20%EB%B0%8F%20%EC%B9%A0%EB%B3%B4%EA%B5%90",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_358%2F20191003065723134_SXYKMPWTR.jpg%2F10712543.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 불국사 연화교 및 칠보교",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371950&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371950%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%B2%AD%EC%9A%B4%EA%B5%90%20%EB%B0%8F%20%EB%B0%B1%EC%9A%B4%EA%B5%90",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_358%2F20191003065735379_2CUDJ80NG.jpg%2F10712802.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 불국사 청운교 및 백운교",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19395172&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219395172%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008214158883_IF146FBXU.jpg%2F486097.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 불국사 삼층석탑",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371234&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371234%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%A7%88%EB%8F%99%20%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_386%2F20211014063558830_KXCD4BIVZ.jpg%2F10498382.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 마동 삼층석탑",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19372050&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219372050%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EC%84%9D%EA%B5%B4%EC%95%94%20%EC%84%9D%EA%B5%B4",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902073502436_M8K2CUP77.jpg%2F10532114.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 석굴암 석굴",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19375990&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219375990%22%7D&qvt=0&query=%EC%88%98%EB%B4%89%EC%A0%95",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_363%2F20200604064411841_SIAJG68RQ.jpg%2F10704192.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "수봉정",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19376339&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219376339%22%7D&qvt=0&query=%EA%B0%90%EC%82%B0%EC%82%AC%EC%A7%80%20%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_384%2F20210907074300212_EWTMXOP5M.jpg%2F10706452.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "감산사지 삼층석탑",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19373294&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219373294%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EA%B5%AC%EC%A0%95%EB%8F%99%20%EA%B3%A0%EB%B6%84%EA%B5%B0",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_386%2F20211014063514235_5MQVWI6BD.jpg%2F10496794.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 구정동 고분군",
              sub_text: "두산백과",
            },
          ],
        },
      },
      view: {
        list: [
          {
            blog: {
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fblogpfthumb-phinf.pstatic.net%2FMjAxODA4MTBfMTU5%2FMDAxNTMzODYwNDcyMjQy.PPwtfIzpjpX2YCt8YkKckTS6gT4WfRO3OE5FI9RF0l8g.9mtuWOCclQdM9DzRjUuXU9tIUXqJhb_yUXdcji8CCIUg.JPEG.tcacyc%2FprofileImage.jpg&type=f54_54",
              title: "일상탈출",
              influencer: "true",
              time: "2021.10.24.",
              href: "https://in.naver.com/tcacyc",
            },
            body: {
              title: "경주 가볼만한곳 대릉원 불국사 야경투어",
              detail:
                "경주 불국사 경북 경주시 불국로 385 운영시간 : 8시 ~ 18시 30분 이용요금 : 어린 6,000원 / 청소년 4,000원 / 어린이 3,000원 대릉원에서 나와 세계적으로 유명한 경주 가볼만한곳 불국사를...",
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMjNfMTgz%2FMDAxNjM0OTg4MzgwODQ0.ooUWwC9bQPC5T0eg6eXjin2hzCrTd2yELoX47HIi4tAg.5R8OaqPoFpJVJvwTIcHjQxuNU7yTYGzKmH3_AcCF-ecg.JPEG.tcacyc%2F01_%25B0%25E6%25C1%25D6.jpg%23900x700&type=ff192_192",
              href: "https://m.blog.naver.com/tcacyc/222546516689",
            },
            tags: {
              list: [],
            },
            link: {
              text: "일상탈출의 #경주야경투어 콘텐츠 더보기",
              href: "https://in.naver.com/tcacyc/challenge/keyword/253560942475009",
            },
          },

          {
            blog: {
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fphinf.pstatic.net%2Fcontact%2F20191031_234%2F1572455419925mTYwA_JPEG%2F1.jpg&type=f54_54",
              title: "쏠트몬",
              influencer: "true",
              time: "2021.11.05.",
              href: "https://in.naver.com/soltmon",
            },
            body: {
              title: "경주 가볼만한곳 불타는 단풍 가을 불국사",
              detail:
                "경주 가볼만한곳들은 대체로 입장료가 있더라고요. < 불국사 입장료 > 어른 19~64세 6,000원 중고생 13~18세 4,000원 어린이 만 7~12세 3,000원 만 65세 이상, 장애인, 경주시민, 국가유공자...",
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMTJfMTQg%2FMDAxNjE1NTMzNzEzOTM0.1Q2LejcBHwG8iOz84Xqwr5RZ12dp-4mCCn1QzhJAX0Ig.CwnIXA8yGf8QWNEHpgdqc5XicSEBmWnnCXHVbbG5t6kg.JPEG.kyena200%2FP20201103_135558747_9ADC25F0-B619-4D5A-A777-BE02ECE810CF.jpg%23665x665&type=ff192_192",
              href: "https://m.blog.naver.com/kyena200/222556888699",
            },
            tags: {
              list: [],
            },
            link: {
              text: "쏠트몬의 #가을나들이 콘텐츠 더보기",
              href: "https://in.naver.com/soltmon/challenge/keyword/365368432715808",
            },
          },
        ],
      },
    },
    sham: {
      mainCard: {
        title: {
          name: "샴(샤미즈)",
          type: "동물",
          subName: "Siamese cat",
        },
        colorScheme: {
          background: "#f4f3f0",
          topBorder: "#e2dad1",
          subTitle: "rgba(145, 118, 89, 0.8)",
          subTapColor: "#9f8669",
          subTapBar: "rgba(166, 143, 116, 0.3)",
        },
        subTap: {
          mainTap: {
            title: "전체",
          },
          list: [
            {
              title: "기본정보",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%EA%B8%B0%EB%B3%B8%EC%A0%95%EB%B3%B4",
            },
            {
              title: "포토",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
            },
            {
              title: "함께 찾은 품종",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%95%A8%EA%BB%98%20%EC%B0%BE%EC%9D%80%20%ED%92%88%EC%A2%85",
            },
          ],
        },

        common: {
          mainImage: {
            src: "https://search.pstatic.net/common?type=f&size=518x522&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201227_280%2F1609068536458M5qWj_JPEG%2F45204144294873432_1454722539.jpg",
            href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
          },
          smallImage: {
            list: [
              {
                src: "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20180409_16%2Ftttl96_1523236149232DtdDB_JPEG%2F57274255118854483_1696344960.jpeg",
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
              },
              {
                src: "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200514_296%2F1589383522415fQAKv_JPEG%2F25519140244964356_836593714.jpg",
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
              },
              {
                src: "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210110_122%2F1610234036128HMFyn_JPEG%2F46369644538410444_1768298021.jpg",
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
              },
              {
                src: "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200401_297%2F1585705167644lVwso_JPEG%2F21840784152777463_-1772690182.jpg",
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
              },
              {
                src: "https://search.pstatic.net/common?type=f&size=258x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200107_100%2F1578368791570mWnGL_JPEG%2F14504400424424331_693284119.jpg",
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
              },
              {
                src: "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210722_241%2F1626949212669ih9J4_JPEG%2F63084821814135149_1699451494.jpeg",
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
              },
            ],
          },
          basicInfo: {
            title: "기본정보",
            href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%EA%B8%B0%EB%B3%B8%EC%A0%95%EB%B3%B4",
            detail:
              "성격이 독특하면서도 영리하고 애정이 깊다. 감수성도 예민해 공격적이거나 신경질적인 반응을 보이기도 하고, 자기 과시욕을 드러내면서 언제나 주인의 관심을 끌려고 하기 때문에 안아주거나 쓰다듬어 주는 것을 좋아한다. ",
            moreDetails:
              "https://terms.naver.com/entry.naver?docId=1110852&cid=40942&categoryId=32624",
          },
        },

        similar: {
          header: {
            title: "함께 찾은 품종",
            href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%95%A8%EA%BB%98%20%EC%B0%BE%EC%9D%80%20%ED%92%88%EC%A2%85",
          },
          list: [
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200404_26%2F1585927365775bRHz7_JPEG%2F22062982153525771_563887820.jpg",
              title: "페르시안",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC+%ED%95%A8%EA%BB%98+%EC%B0%BE%EC%9D%80+%EB%AC%B8%ED%99%94%EC%9E%AC&tqi=hj4d5dprvRGssNqU4FwssssstX4-039536&query=%ED%8E%98%EB%A5%B4%EC%8B%9C%EC%95%88",
            },

            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200211_31%2F15813769677674O1jm_JPEG%2F17494093570992638_-2015122258.jpg",
              title: "터키시앙고라",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%ED%8E%98%EB%A5%B4%EC%8B%9C%EC%95%88&tqi=hj4dqlprvRGssNkPZHwssssstXG-133498&query=%ED%84%B0%ED%82%A4%EC%8B%9C%EC%95%99%EA%B3%A0%EB%9D%BC",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210420_66%2F1618904982543B0DMt_JPEG%2F56751inbound3624853760158885307.jpg",
              title: "코리안쇼트헤어",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%ED%84%B0%ED%82%A4%EC%8B%9C%EC%95%99%EA%B3%A0%EB%9D%BC&tqi=hj4d2lprvRGssNoyu8hssssstJV-293494&query=%EC%BD%94%EB%A6%AC%EC%95%88%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210419_229%2F16188387804943w6Gi_JPEG%2F54974378374701201_-1400302756.jpeg",
              title: "아비시니안",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EC%BD%94%EB%A6%AC%EC%95%88%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4&tqi=hj4dIwprvRGssNAXD90ssssssBs-173980&query=%EC%95%84%EB%B9%84%EC%8B%9C%EB%8B%88%EC%95%88",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210428_100%2F1619579011968iOvwG_JPEG%2F521691553955926931.jpg",
              title: "아메리칸쇼트헤어",
              href: "https://m.search.naver.com/search.naver?sm=mtb_sug.search&where=m&oquery=%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4&tqi=hj4eadprvRGssNYHtx4ssssstyV-304527&query=%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B8%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4&acq=%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4&acr=2&qdt=0",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200209_214%2F1581229340435aTrFL_JPEG%2F336871579074606436.jpg",
              title: "스핑크스",
              href: "https://m.search.naver.com/search.naver?sm=mtb_sug.top&where=m&oquery=%EC%8A%A4%ED%95%91%ED%81%AC%EC%8A%A4&tqi=hj4ejsprvRGssNGvFj8ssssstl0-094731&query=%EC%8A%A4%ED%95%91%ED%81%AC%EC%8A%A4+%EA%B3%A0%EC%96%91%EC%9D%B4&acq=%EC%8A%A4%ED%95%91%ED%81%AC%EC%8A%A4&acr=2&qdt=0",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200417_12%2F1587097896420NMF0k_JPEG%2F23233512751650562_-497029573.jpeg",
              title: "스코티시폴드",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EC%8A%A4%ED%95%91%ED%81%AC%EC%8A%A4+%EA%B3%A0%EC%96%91%EC%9D%B4&tqi=hj4ejwprvRGssNVBf0Vssssstdh-514505&query=%EC%8A%A4%EC%BD%94%ED%8B%B0%EC%8B%9C%ED%8F%B4%EB%93%9C",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200410_88%2F1586528677443mWmL3_JPEG%2F22664286438461903_1995956204.jpeg",
              title: "브리티시쇼트헤어",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EC%8A%A4%EC%BD%94%ED%8B%B0%EC%8B%9C%ED%8F%B4%EB%93%9C&tqi=hj4eQdprvRGssNG5ov4ssssssv0-202265&query=%EB%B8%8C%EB%A6%AC%ED%8B%B0%EC%8B%9C%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201214_149%2F1607923841240cr73r_JPEG%2F44059437129620739_279034542.jpg",
              title: "뱅갈",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%B8%8C%EB%A6%AC%ED%8B%B0%EC%8B%9C%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4&tqi=hj4eAlprvRGssNxc44KssssssSs-032689&query=%EB%B1%85%EA%B0%88",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200229_125%2F15829517228846MU0i_JPEG%2F19087320512185316_-1365682391.jpeg",
              title: "먼치킨",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%B1%85%EA%B0%88&tqi=hj4eDsprvRGssNEu2lNssssssVK-381807&query=%EB%A8%BC%EC%B9%98%ED%82%A8",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200314_158%2F15841507513157jLbn_JPEG%2F20286360954779067_944745824.jpeg",
              title: "러시안블루",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%A8%BC%EC%B9%98%ED%82%A8&tqi=hj4eqlprvRGssNIy2kZssssssJ8-324396&query=%EB%9F%AC%EC%8B%9C%EC%95%88%EB%B8%94%EB%A3%A8",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210430_26%2F1619734359178HggHS_JPEG%2F55869975744703816_1166239455.jpeg",
              title: "랙돌",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%9F%AC%EC%8B%9C%EC%95%88%EB%B8%94%EB%A3%A8&tqi=hj4eWwprvRGssN8ssh8ssssss3h-292704&query=%EB%9E%99%EB%8F%8C",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20190830_134%2F15671596689398dlKe_JPEG%2F3295265083785307_-72202893.jpg",
              title: "노르웨이숲고양이",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%9E%99%EB%8F%8C&tqi=hj4ewwprvRGssN1FiXVssssssU0-217543&query=%EB%85%B8%EB%A5%B4%EC%9B%A8%EC%9D%B4%EC%88%B2%EA%B3%A0%EC%96%91%EC%9D%B4",
            },
          ],
        },
      },
      view: {
        list: [
          {
            blog: {
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAyMTAyMDNfMjky%2FMDAxNjEyMzM2NTY4NzA2.fo-KxpG1dxa_RQqlepV7k_ANF_W8SL6FrEFWfiidhjwg.bFWiSyH0sQX-0vdSxOWKnbHheAGSOithDLVinEQ_nocg.JPEG.yarolove%2F%2525EA%2525B9%252580%2525EC%25258B%2525A4%2525EC%25259E%2525A5.JPG&type=f54_54",
              title: "교육정보 캐며 요리하는 주부KIM실장",
              influencer: "false",
              time: "2021.03.15.",
              href: "https://m.blog.naver.com/yarolove",
            },
            body: {
              title: "샤미즈 샴고양이 특성과 예민하게 화장실 사용하는 로브",
              detail:
                "저희 집에는 똑똑이 샤미즈 샴고양이 로브도 있거든요. 오늘은 로브를 소개할게요. 화장실 쓰는 게 너무 귀여워서 올려봐요. 샴고양이 샤미즈 샤미즈가 샴고양이 맞아요. 샴고양이...",
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMTVfNzQg%2FMDAxNjE1ODAzMTQ4ODkz.jgUwcx6sLi2nm7RUUaKxiiZsUgA8jb5J6avOYJygNM4g.reFXgjXYUCqV3JfRGV0m499pzsi2OilKejwgcaAdiGAg.JPEG.yarolove%2F1615645073916%25A3%25AD7.jpg%23900x900&type=ff192_192",
              href: "https://m.blog.naver.com/yarolove/222276544963",
            },
            tags: {
              list: [
                {
                  title: "샴고양이",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4",
                },
                {
                  title: "샤미즈",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%A4%EB%AF%B8%EC%A6%88",
                },
                {
                  title: "샴고양이성격",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4%EC%84%B1%EA%B2%A9",
                },
              ],
            },
            link: {
              text: "샤미즈 & 브숏 급조한 장난감으로 사냥놀이 했어요~(#브숏 #샤미즈)",
              href: "https://m.blog.naver.com/yarolove/222229343444",
            },
          },

          {
            blog: {
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAyMDAxMjlfMjk0%2FMDAxNTgwMzA4NTUwOTcy.j3XSja3O6VEhrKXVBBnQku-olRGK2eTxbytzH37zZCgg._bshTC1PL-UelYmJsabgGCbNYSvVcIRGcIViObDwdysg.JPEG.nice_pet%2FKakaoTalk_20200127_215943303.jpg&type=f54_54",
              title: "The 착한애견",
              influencer: "false",
              time: "2020.02.13.",
              href: "https://m.blog.naver.com/nice_pet",
            },
            body: {
              title: "<부산고양이분양> 샴 고양이 분양 / 샤미즈",
              detail:
                "The착한애견> #부산고양이분양 #부산고양이 #부산샴분양 #샴고양이분양 #개냥이 #샤미즈 #샴고양이성격 #샴고양이 #샴분양 #고양이분양 고양이의 대명사 !!! 바로 샴 (샤미즈) 고양이가...",
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMThfMjgw%2FMDAxNTgyMDE0NDE5Mjc1.mxgjMrcpqw4q7x01Dgv0q9qqQMdmizbQLCqT-58VhHwg.WOlHe3AtIj4giYXfULLtf_JUtc-kx8kjC57Yfia0ow0g.JPEG.nice_pet%2FKakaoTalk_20200212_163625126_05.jpg%23600x600&type=ff192_192",
              href: "https://m.blog.naver.com/nice_pet/221807969253",
            },
            tags: {
              list: [
                {
                  title: "부산고양이분양",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EB%B6%80%EC%82%B0%EA%B3%A0%EC%96%91%EC%9D%B4%EB%B6%84%EC%96%91",
                },
                {
                  title: "부산고양이",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EB%B6%80%EC%82%B0%EA%B3%A0%EC%96%91%EC%9D%B4",
                },
                {
                  title: "부산샴분양",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EB%B6%80%EC%82%B0%EC%83%B4%EB%B6%84%EC%96%91",
                },
                {
                  title: "샴고양이분양",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4%EB%B6%84%EC%96%91",
                },
                {
                  title: "개냥이",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EA%B0%9C%EB%83%A5%EC%9D%B4",
                },
                {
                  title: "샤미즈",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%A4%EB%AF%B8%EC%A6%88",
                },
                {
                  title: "샴고양이성격",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4%EC%84%B1%EA%B2%A9",
                },
                {
                  title: "샴고양이",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4",
                },
                {
                  title: "샴분양",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%B4%EB%B6%84%EC%96%91",
                },
                {
                  title: "고양이분양",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EA%B3%A0%EC%96%91%EC%9D%B4%EB%B6%84%EC%96%91",
                },
              ],
            },
            link: {
              text: "샤미즈 & 브숏 급조한 장난감으로 사냥놀이 했어요~(#브숏 #샤미즈)",
              href: "https://m.blog.naver.com/yarolove/222229343444",
            },
          },
        ],
      },
      influencer: {
        "colorScheme": {
          "main": "#c27636",
          "border": "rgba(194,118,54,.2)",
        },
        "tab-lists": [
          {
            "title": "전체",
            "subtitle": "27명",
          }, 
          {
            "title": "펫 전문블로거",
            "subtitle": "19명",
            "image": "https://search.pstatic.net/common/?src=https%3A%2F%2Fblogpfthumb-phinf.pstatic.net%2F20151114_15%2Fpjh731_1447487938037uCc2H_JPEG%2F%EC%9B%B9%ED%88%B0-0001+%EC%82%AC%EB%B3%B8-161px.JPG&type=f76_76",
            "url": "https://m.search.naver.com/search.naver?query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22241109824810304%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D"
          },
          {
            "title": "동물행동 전문가",
            "subtitle": "5명",
            "image": "https://search.pstatic.net/common/?src=https%3A%2F%2Fhomebuilder-phinf.pstatic.net%2F%2FMjAyMTA3MDhfMjY5%2FMDAxNjI1NzEwMDU0MjM0.cNGXtMguO2Ha-ZT0AGr0XKwWIYEwhf3l4x2F2Kb1knsg.PsYGDYqbrMHckPhsSPPHDuOHleRPUJe1HCtg1u1pua8g.JPEG%2F1625710054083_20210528_170020.jpg&type=f76_76",
            "url": "https://m.search.naver.com/search.naver?query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22241109837118784%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D"
          },
          {
            "title": "펫 매거진에디터",
            "subtitle": "2명",
            "image": "https://search.pstatic.net/common/?src=https%3A%2F%2Fhomebuilder-phinf.pstatic.net%2F%2FMjAyMTAzMTJfMTY5%2FMDAxNjE1NTMwMjI4Mzkz.uzJmrMSYH7NBK-gqqE8udL2iwBkiI-GMyJrxUpnz-8Ig.VaNTYG0-td7bkiZq1h8hBlpnhOPoHKbH1VdshMpfywcg.JPEG%2F1615530228374_%25EC%259D%25B8%25ED%2594%258C%25EB%25A3%25A8%25EC%2596%25B8%25EC%2584%259C-%25EB%25A1%259C%25EA%25B3%25A0.jpg&type=f76_76",
            "url": "https://m.search.naver.com/search.naver?query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22241109837131072%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D"
          },
          {
            "title": "펫 영상크리에이터",
            "subtitle": "1명",
            "image": "https://search.pstatic.net/common/?src=https%3A%2F%2Fblogpfthumb-phinf.pstatic.net%2F20150220_255%2Fwedcats_1424411740893SeHzJ_JPEG%2F%EB%84%A4%EC%9D%B4%EB%B2%84+%EB%B8%94%EB%A1%9C%EA%B7%B8+%EC%84%AC%EB%84%A4%EC%9D%BC.jpg&type=f76_76",
            "url": "https://m.search.naver.com/search.naver?query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22241109824818496%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D"
          }
        ],
        "influencers": [{
          "title": "유언님",
          "thumbnail": {
            "image": "https://search.pstatic.net/common/?src=https%3A%2F%2Finfluencer-phinf.pstatic.net%2FMjAyMDA1MTNfMjMg%2FMDAxNTg5MzQ3NTc1MDQ5.WkI5HXbKyXKqM3wJtkct93e6I4hekwaV9xBgU3QibHEg._QKip8FxFmMVFRmkiPBoIu3AKak3U2SS_AxM7Dpzc80g.JPEG%2FScreenshot_20200512-192157_Instagram.jpg&type=f96_96",
            "url": "https://in.naver.com/yourns?query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4",
            "highlighted": "Gold"
          },
          "subtitles": {
            "title": "펫 전문블로거",
            "fans": "팬 1.4만+",
            "expertise": "강아지 전문"
          },
          "keywords": [
            {
              "title": "블로그 이웃 5,200+",
              "type": "Blog",
            },
            {
              "key": "대표 반려동물",
              "value": "제페니스 스피츠 반려중 (2014년생)",
            },
            {
              "key": "반려 스타일",
              "value": "여러 종 반려 중", 
            },
            {
              "key": "창작 분야",
              "value": "전문지식"
            }
          ],
          "link": "https://in.naver.com/yourns/contents/358676073911072?query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4",
          "images": [
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMTBfMTYg%2FMDAxNjMzODY4MDY5NjY2.gPYKMf9UDa94fVLizkwFOLbX3cM_7DJbLmic9C0mvzAg.6Uvu_jLr7bLR4405PhlHE8ZlMV278BhuJzzudlceXTcg.PNG.yourns%2F1.png%3Ftype%3Dw800&type=o372_192",
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMTBfMjc5%2FMDAxNjMzODY4MTM3NTg5.55u3BcNCE2G1qbDUY6DVDqqESZPnkVQv4e0lQxXx04og.YKhF5Rc1Ic33hAnkwjPmKbf6urB2h4AKhNB25Gwrhh0g.PNG.yourns%2F3.png%3Ftype%3Dw800&type=o372_192",
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMTBfMjgz%2FMDAxNjMzODY4MTM4ODY0.KEfRZjiJLwpQL6CToCWa9e0GM3n21ElM92g75Eqcue8g.NcfZalQWwk7jCwhYHbosjNajLOzo5_R8QxwRj2hhe_4g.PNG.yourns%2F7.png%3Ftype%3Dw800&type=o372_192",
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMTBfMTU1%2FMDAxNjMzODY4MTQwMDAz.kEdl-8S6h7XeVS9Zt1VS9aT90wVPXcHfSnCPCm5vgLQg.H9m0MFBOKVdiKi-OWxX7GawpFBpx8aSSEzdDLY3A6tcg.PNG.yourns%2F5.png%3Ftype%3Dw800&type=o372_192",
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMTBfMjMx%2FMDAxNjMzODY4MTQxNDMz.mSLWXn8CDGb2H2ZQfQ1LeOSstQCxmME7bzqWysP24sUg.ow2tOtftmNLpGDb7dicgrmulLV33kZ8rJbzz116Sj5Qg.PNG.yourns%2F4.png%3Ftype%3Dw800&type=o372_192",
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMTBfMjAw%2FMDAxNjMzODY4MTQzMzA2.PQ6LJu2qR2rkBvHbiM-kt6WOKRejWZ88I2xo5HRSmYog.jWRP0b-wA8lvlWk_Q0gdMEhq1wJmO9v_TaGtdBgWoPgg.PNG.yourns%2F2.png%3Ftype%3Dw800&type=o372_192",
            "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMTBfMTEw%2FMDAxNjMzODY4MTQ0NDM1.EDS6OYViQqisrXzdfD30I8WT0wLuHYeFrEGyht1B2Wwg.pTagK82ip2e86ppGKke9dRWpGDaUzq95moC2_17DV60g.PNG.yourns%2F6.png%3Ftype%3Dw800&type=o372_192",
          ],
          "description": {
            "title": "태국 왕실묘 출신 샴 고양이 성격이 말썽쟁이 품종이라고?",
            "descriptionText": "이번에 소개하는 고양이 품종은 태국 왕실묘 출신의 샴 고양이로 성격과 함께 신비로운 외모에 대해서 알아보도록 하겠습니다. 실제로 샴 고양이는 신비롭고 이쁜 포인트 컬러의 외모가 특징이라 매우 귀여우면서도...",
            "date": "2021.10.10.",
            "moreText": "의 참여 콘텐츠 3개 더보기",
            "moreUrl": "https://in.naver.com/yourns/challenge/keyword/143830097674240?query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4"
          }
        }, ]
      }
    },
  };
  static payloadKeys = Object.keys(this.payloadMap);

  constructor() {}

  randomKey() {
    return PayloadSelector.payloadKeys[
      Math.floor(Math.random() * PayloadSelector.payloadKeys.length)
    ];
  }

  selectByKeys(keys) {
    return keys.map((key) => this.payloadMap.get(key));
  }

  select(keys) {
    if (!keys || (Array.isArray(keys) && !keys.length)) {
      keys = [this.randomKey()];
    }
    return keys
      .map((key) => this.constructor.payloadMap[key])
      .filter((o) => !!o);
  }
}

module.exports = new PayloadSelector();
