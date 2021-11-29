class PayloadSelector {
  static payloadMap = {
    bulguksa: {
      mainCard: {
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
            order: "first",
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
          information: {
            //detail-info?
            지정종목: "사적",
            지정번호: "제502",
            소재지: "경북 경주시 불국로 385, 등 (진현동)",
            시대: "통일신라",
            "종류/분류": "사찰",
            크기: "면적 409,315㎡",
          },
          "description-text":
            "경북 경주시 진현동 토함산 기슭에 있는 신라시대 절. 사적이다.",
          "image-lists": [
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
          place:
            "http://map.naver.com?title=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC&y=35.7862812&x=129.3298991",
        },
        similar: {
          header: {
            title: "가나다",
            href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EC%83%B4%28%EC%83%A4%EB%AF%B8%EC%A6%88%29+%EA%B8%B0%EB%B3%B8%EC%A0%95%EB%B3%B4&tqi=hj4f%2BsprvRGssNqccwwssssssvZ-125164&query=%EB%B6%88%EA%B5%AD%EC%82%AC+%EA%B8%B0%EB%B3%B8%EC%A0%95%EB%B3%B4",
          },
          list: [
            {
              href: "?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371948&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371948%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%82%AC%EB%A6%AC%ED%83%91",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008211011491_G1633N7QS.jpg%2F281185.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 불국사 사리탑",
              sub_text: "두산백과",
            },
            {
              href: "?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371947&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371947%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EB%8B%A4%EB%B3%B4%ED%83%91",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075010177_IXCH29M6I.jpg%2F10708747.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 불국사 다보탑",
              sub_text: "두산백과",
            },
            {
              href: "?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371949&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371949%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%97%B0%ED%99%94%EA%B5%90%20%EB%B0%8F%20%EC%B9%A0%EB%B3%B4%EA%B5%90",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_358%2F20191003065723134_SXYKMPWTR.jpg%2F10712543.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 불국사 연화교 및 칠보교",
              sub_text: "두산백과",
            },
            {
              href: "?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371950&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371950%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%B2%AD%EC%9A%B4%EA%B5%90%20%EB%B0%8F%20%EB%B0%B1%EC%9A%B4%EA%B5%90",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_358%2F20191003065735379_2CUDJ80NG.jpg%2F10712802.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 불국사 청운교 및 백운교",
              sub_text: "두산백과",
            },
            {
              href: "?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19395172&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219395172%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008214158883_IF146FBXU.jpg%2F486097.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 불국사 삼층석탑",
              sub_text: "두산백과",
            },
            {
              href: "?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371234&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371234%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%A7%88%EB%8F%99%20%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_386%2F20211014063558830_KXCD4BIVZ.jpg%2F10498382.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 마동 삼층석탑",
              sub_text: "두산백과",
            },
            {
              href: "?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19372050&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219372050%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EC%84%9D%EA%B5%B4%EC%95%94%20%EC%84%9D%EA%B5%B4",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902073502436_M8K2CUP77.jpg%2F10532114.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 석굴암 석굴",
              sub_text: "두산백과",
            },
            {
              href: "?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19375990&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219375990%22%7D&qvt=0&query=%EC%88%98%EB%B4%89%EC%A0%95",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_363%2F20200604064411841_SIAJG68RQ.jpg%2F10704192.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "수봉정",
              sub_text: "두산백과",
            },
            {
              href: "?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19376339&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219376339%22%7D&qvt=0&query=%EA%B0%90%EC%82%B0%EC%82%AC%EC%A7%80%20%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_384%2F20210907074300212_EWTMXOP5M.jpg%2F10706452.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "감산사지 삼층석탑",
              sub_text: "두산백과",
            },
            {
              href: "?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19373294&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219373294%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EA%B5%AC%EC%A0%95%EB%8F%99%20%EA%B3%A0%EB%B6%84%EA%B5%B0",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_386%2F20211014063514235_5MQVWI6BD.jpg%2F10496794.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 구정동 고분군",
              sub_text: "두산백과",
            },
          ],
        },
      },
    },
    sham: {
      mainCard: {
        title: {
          name: "샴(샤미즈)",
          type: "동물",
          subName: "Siamese cat",
        },

        subTap: {
          mainTap: {
            title: "전체",
            order: "first",
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
          mainPhoto: {
            src: "https://search.pstatic.net/common?type=f&size=518x522&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201227_280%2F1609068536458M5qWj_JPEG%2F45204144294873432_1454722539.jpg",
            href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
          },
          smallPhoto: {
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
            totalWrap: {
              blog: {
                src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAyMTAyMDNfMjky%2FMDAxNjEyMzM2NTY4NzA2.fo-KxpG1dxa_RQqlepV7k_ANF_W8SL6FrEFWfiidhjwg.bFWiSyH0sQX-0vdSxOWKnbHheAGSOithDLVinEQ_nocg.JPEG.yarolove%2F%2525EA%2525B9%252580%2525EC%25258B%2525A4%2525EC%25259E%2525A5.JPG&type=f54_54",
                title: "교육정보 캐며 요리하는 주부KIM실장",
                time: "2021.03.15.",
                href: "https://m.blog.naver.com/yarolove",
              },
              text: {
                title: "샤미즈 샴고양이 특성과 예민하게 화장실 사용하는 로브",
                detail:
                  "저희 집에는 똑똑이 샤미즈 샴고양이 로브도 있거든요. 오늘은 로브를 소개할게요. 화장실 쓰는 게 너무 귀여워서 올려봐요. 샴고양이 샤미즈 샤미즈가 샴고양이 맞아요. 샴고양이...",
                src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMTVfNzQg%2FMDAxNjE1ODAzMTQ4ODkz.jgUwcx6sLi2nm7RUUaKxiiZsUgA8jb5J6avOYJygNM4g.reFXgjXYUCqV3JfRGV0m499pzsi2OilKejwgcaAdiGAg.JPEG.yarolove%2F1615645073916%25A3%25AD7.jpg%23900x900&type=ff192_192",
                href: "https://m.blog.naver.com/yarolove/222276544963",
              },
            },
            totalTag: {
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
            totalLink: {
              text: "샤미즈 & 브숏 급조한 장난감으로 사냥놀이 했어요~(#브숏 #샤미즈)",
              href: "https://m.blog.naver.com/yarolove/222229343444",
            },
          },

          {
            totalWrap: {
              blog: {
                src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAyMDAxMjlfMjk0%2FMDAxNTgwMzA4NTUwOTcy.j3XSja3O6VEhrKXVBBnQku-olRGK2eTxbytzH37zZCgg._bshTC1PL-UelYmJsabgGCbNYSvVcIRGcIViObDwdysg.JPEG.nice_pet%2FKakaoTalk_20200127_215943303.jpg&type=f54_54",
                title: "The 착한애견",
                time: "2020.02.13.",
                href: "https://m.blog.naver.com/nice_pet",
              },
              text: {
                title: "<부산고양이분양> 샴 고양이 분양 / 샤미즈",
                detail:
                  "The착한애견> #부산고양이분양 #부산고양이 #부산샴분양 #샴고양이분양 #개냥이 #샤미즈 #샴고양이성격 #샴고양이 #샴분양 #고양이분양 고양이의 대명사 !!! 바로 샴 (샤미즈) 고양이가...",
                src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMThfMjgw%2FMDAxNTgyMDE0NDE5Mjc1.mxgjMrcpqw4q7x01Dgv0q9qqQMdmizbQLCqT-58VhHwg.WOlHe3AtIj4giYXfULLtf_JUtc-kx8kjC57Yfia0ow0g.JPEG.nice_pet%2FKakaoTalk_20200212_163625126_05.jpg%23600x600&type=ff192_192",
                href: "https://m.blog.naver.com/nice_pet/221807969253",
              },
            },
            totalTag: {
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
            totalLink: {
              text: "샤미즈 & 브숏 급조한 장난감으로 사냥놀이 했어요~(#브숏 #샤미즈)",
              href: "https://m.blog.naver.com/yarolove/222229343444",
            },
          },
        ],
      },
    },
    diary: {
        mainCard: {
            title: {
                name: "독립일기",
                type: "웹툰",
                "title-url": "https://search.naver.com",
                subName: "연재중",
            },

            subTap: {
                mainTap: {
                    title: "함께 많이보는 웹툰",
                    order: "last",
                },
                list: [
                    {
                        title: "전체",
                        href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&pkid=47&os=14300223&qvt=0&query=%EB%8F%85%EB%A6%BD%EC%9D%BC%EA%B8%B0",                    
                    },
                    {
                        title: "회차보기",
                        href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&pkid=47&os=14300223&qvt=0&query=%EB%8F%85%EB%A6%BD%EC%9D%BC%EA%B8%B0%20%ED%9A%8C%EC%B0%A8%EB%B3%B4%EA%B8%B0",
                    },
                    {
                        title: "작가의 다른작품",
                        href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&pkid=47&os=14300223&qvt=0&query=%EB%8F%85%EB%A6%BD%EC%9D%BC%EA%B8%B0%20%EC%9E%91%EA%B0%80%EC%9D%98%20%EB%8B%A4%EB%A5%B8%EC%9E%91%ED%92%88",
                    },
                ],                
            },
            
            common: {
                together: {
                    header: {
                        title: "함께 많이 보는 웹툰",
                    },
                    list: [
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg",
                            title: "먹는 인생",
                            sub_text: "홍끼",
                            perference: 99,
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_e295146b-8729-4ea0-a332-1c6463d81bd6.jpg",
                            title: "2021 최애캐 안녕, ...",
                            sub_text: "네이버웹툰",
                            perference: 99,
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_25be10b5-729b-474d-ac9c-bae0a879e8cd.jpg",
                            title: "조조코믹스",
                            sub_text: "이동건",
                            perference: 89,
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_c20e1412-a2fb-493d-8e1e-57234c0ab7e4.jpg",
                            title: "노곤하개",
                            sub_text: "홍끼",
                            perference: 86,
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_eefd3fab-24d0-4734-a4e7-d9cdd3de742b.jpg",
                            title: "개를 낳았다",
                            sub_text: "이선",
                            perference: 84,
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_d44348af-7f3b-44a4-88e3-6ff1430256c1.jpg",
                            title: "그 해 우리는 - 초여...",
                            sub_text: "한경찰",
                            perference: 82,
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…ail%2Ftitle_thumbnail_20161031214436_t220x202.jpg",
                            title: "윌유메리미",
                            sub_text: "마인드C",
                            perference: 81,
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_b822d5ad-0cd6-4313-976a-aa60238375ed.jpg",
                            title: "결혼생활 그림일기",
                            sub_text: "은꼼지",
                            perference: 98,
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…ail%2Ftitle_thumbnail_20160601180804_t220x202.jpg",
                            title: "대학일기",
                            sub_text: "자까",
                            perference: 81,
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_9a66efb3-2d4f-4013-b43f-03ebe0d8d373.jpg",
                            title: "닥터앤닥터 육아일기",
                            sub_txt: "닥터베르",
                            perference: 80,
                        },                       
                    ],
                },
                life: {
                    header: {
                        button: "일상",                        
                        title: "웹툰 랭킹",
                    },
                    list: [
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_73f1aaef-824f-4790-a70b-f3b1e3aa22b4.jpg",
                            title: "나쁜사람",
                            sub_text: "둠스",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_d8bd40f2-76f6-448b-8650-126c0d5137b6.jpg",
                            title: "독립일기",
                            sub_text: "자까",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg",
                            title: "먹는 인생",
                            sub_text: "홍끼",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_c614978a-da9b-462e-9e8c-f5ba49400109.jpg",
                            title: "오빠세끼",
                            sub_text: "올리브유",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_af8ac713-8563-48f9-9028-325668ed4d2c.jpg",
                            title: "최면학교",
                            sub_text: "박은혁",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_54e93171-9019-484d-9696-0f492d9a9772.jpg",
                            title: "내과 박원장",
                            sub_text: "장봉수",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_85ae070d-7677-45e6-a034-e25116c900c1.jpg",
                            title: "경자 전성시대",
                            sub_text: "김호드",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            sc: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_4ef07c1d-5daa-4cc8-b75c-7b9ef20146ed.jpg",
                            title: "혁신적 얼간이들",
                            sub_text: "가스파드",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_7db34970-7fe9-4b1c-8e3d-91c255981829.jpg",
                            title: "사실 마법이었던 ...",
                            sub_text: "박성현",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_a13551ff-0c82-422e-beff-454e91915ddb.jpg",
                            title: "만물의 영장",
                            sub_text: "보민",
                        },                     
                    ],
                },
                new: {
                    header: {
                        title: "주간 신작 랭킹",
                    },
                    list: [
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_e295146b-8729-4ea0-a332-1c6463d81bd6.jpg",
                            title: "퀘스트 지상주의",
                            sub_text: "박태준 만화회사",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_2ac4c0ab-5fa8-4b8e-8561-7113782a057a.jpg",
                            title: "김부장",
                            sub_text: "박태준 만화회사",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_1f6cc767-2c3e-4a7e-9fb4-e6a8628f98bd.jpg",
                            title: "존망코인",
                            sub_text: "박태준 만화회사",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_c24f84ca-4d6a-4651-9a14-0f1fd2ad4fe2.jpg",
                            title: "2021 최애캐 안녕, ...",
                            sub_text: "웹툰작가",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_35e3b752-6c15-466f-bef5-f75245161fc8.jpg",
                            title: "쇼미더럭키짱!",
                            sub_text: "박태준",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg",
                            title: "현실퀘스트",
                            sub_text: "이주운",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_7a5497b2-98a2-4966-9940-6f501af33f9f.jpg",
                            title: "내가 키운 S급들",
                            sub_text: "근서, seri",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_b1ed2d69-abc6-43a3-8a17-41af6f972168.jpg",
                            title: "먹는 인생",
                            sub_text: "홍끼",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_0572dea8-def9-413e-a9d4-3c8a273147ae.jpg",
                            title: "그 해 우리는 -초여...",
                            sub_text: "한경찰",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_96cfb2dc-54b6-40fb-8c15-65f728fb3820.jpg",
                            title: "엑스애쉬",
                            sub_text: "김세훈",
                        },
                    ],
                },
                weekly: {
                    header: {
                        title: "신작 랭킹",
                    },
                    list: [
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_c04fd4ec-8bbf-4765-ab13-2281b1eb254e.jpg",
                            title: "연애혁명",
                            sub_text: "232",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_256e08d0-dfd0-454a-9a74-1743bad87e81.jpg",
                            title: "싸움독학",
                            sub_text: "박태준",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_fe828dc9-84a2-4329-9d83-2f4afc981031.jpg",
                            title: "외모지상주의",
                            sub_text: "박태준",

                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_67290a02-fe7f-448d-aed9-6ec88e558088.jpg",
                            title: "참교육",
                            sub_text: "채용택",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_e50a911a-aeed-4cd1-abb9-1efba754f68b.jpg",
                            title: "더 복서",
                            sub_text: "정지훈",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…ail%2Ftitle_thumbnail_20150323153418_t220x202.jpg",
                            title: "전지적 독자 시점",
                            sub_text: "싱숑, UMI",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_225f310e-c16c-4ac3-b164-987d0cec46a7.jpg",
                            title: "프리드로우",
                            sub_text: "전선욱",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_d8bd40f2-76f6-448b-8650-126c0d5137b6.jpg",
                            title: "여신강림",
                            sub_text: "야옹이",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_96bede54-a8da-47ca-a9ac-3ae610addbfe.jpg",
                            title: "나 혼자 만렙 뉴비",
                            sub_text: "메슬로우, WAN.Z",
                        },
                        {
                            href: "https://webtoon.naver.com/",                            
                            src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_510971eb-e1d0-45ce-ac81-51df7edfd9d6.jpg",
                            title: "한림체육관",
                            sub_text: "혜성",
                        },
                    ],
                },
            },
            similar: {
                header: {
                    title: "여성들이 많이 찾는 월요웹툰",
                },
                list: [
                    {
                        href: "https://webtoon.naver.com/",                        
                        src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_c04fd4ec-8bbf-4765-ab13-2281b1eb254e.jpg",
                        title: "연애혁명",
                        sub_text: "232",
                    },
                    {
                        href: "https://webtoon.naver.com/",                        
                        src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_256e08d0-dfd0-454a-9a74-1743bad87e81.jpg",
                        title: "싸움독학",
                        sub_text: "박태준",

                    },
                    {
                        href: "https://webtoon.naver.com/",                        
                        src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_fe828dc9-84a2-4329-9d83-2f4afc981031.jpg",
                        title: "외모지상주의",
                        sub_text: "박태준",
                    },
                    {
                        href: "https://webtoon.naver.com/",                        
                        src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_67290a02-fe7f-448d-aed9-6ec88e558088.jpg",
                        title: "참교육",
                        sub_text: "채용택",
                    },
                    {
                        href: "https://webtoon.naver.com/",                        
                        src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_e50a911a-aeed-4cd1-abb9-1efba754f68b.jpg",
                        title: "더 복서",
                        sub_text: "정지훈",
                    },
                    {
                        href: "https://webtoon.naver.com/",                        
                        src: "https://search.pstatic.net/common?type=f&size=210x…ail%2Ftitle_thumbnail_20150323153418_t220x202.jpg",
                        title: "전지적 독자 시점",
                        sub_text: "싱숑, UMI",
                    },
                    {
                        href: "https://webtoon.naver.com/",                        
                        src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_225f310e-c16c-4ac3-b164-987d0cec46a7.jpg",
                        title: "프리드로우",
                        sub_text: "전선욱",
                    },
                    {
                        href: "https://webtoon.naver.com/",                        
                        src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_d8bd40f2-76f6-448b-8650-126c0d5137b6.jpg",
                        title: "여신강림",
                        sub_text: "야옹이",
                    },
                    {
                        href: "https://webtoon.naver.com/",                        
                        src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_96bede54-a8da-47ca-a9ac-3ae610addbfe.jpg",
                        title: "나 혼자 만렙 뉴비",
                        sub_text: "메슬로우, WAN.Z",
                    },
                    {
                        href: "https://webtoon.naver.com/",                        
                        src: "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_510971eb-e1d0-45ce-ac81-51df7edfd9d6.jpg",
                        title: "한림체육관",
                        sub_text: "혜성",

                    },
                ],
                text: "네이버 웹툰 2021-11-29",
            },
        },
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
