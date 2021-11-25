import React from 'react'
import styles from './index.module.scss'
import Filter from './filter'
import Content from './content'

function index({props}) {
    const temp = {
        "type": "influencer",
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
                "description-text": "이번에 소개하는 고양이 품종은 태국 왕실묘 출신의 샴 고양이로 성격과 함께 신비로운 외모에 대해서 알아보도록 하겠습니다. 실제로 샴 고양이는 신비롭고 이쁜 포인트 컬러의 외모가 특징이라 매우 귀여우면서도...",
                "date": "2021.10.10.",
                "more-text": "유언님의 참여 콘텐츠 3개 더보기",
                "more-url": "https://in.naver.com/yourns/challenge/keyword/143830097674240?query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4"
            }
        }, ]
    }

    return (
        <div className = {styles.influencerBody}>
            <table className = {styles.titleArea}>
                <tbody>
                    <tr>
                        <td className = {styles.title}> 
                            인플루언서 &nbsp; <i className={"fas fa-exclamation-circle " + styles.alert}></i>
                        </td>
                        <td className = {styles.influencerLink}>
                            <a href = "https://in.naver.com/" className = {styles.Link}>서비스 홈 바로가기</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Filter props = {temp}/>
            <Content props = {temp}/>
        </div>
    )
}

export default index
