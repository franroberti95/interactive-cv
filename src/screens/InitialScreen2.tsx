// @ts-nocheck
import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import ScrollMagic from 'scrollmagic';
import { gsap, TweenMax, TimelineMax } from "gsap";// Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import InitialAnimation from "../components/InitialAnimation";
import Cralt from '../components/Cralt';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const Right = () =>
    <RightContainer>
    </RightContainer>;

const Left = () =>
    <LeftContainer>
    </LeftContainer>;

const SideContainer = styled.div`
    flex-grow: 1;
  height: 100vh;

`;
const LeftContainer = styled(SideContainer)`
`;
const RightContainer = styled(SideContainer)`
`;

let controller = new ScrollMagic.Controller();
let scene;
const InitialScreen = () => {
    const meetCraltRefText = useRef(null);
    const underlineRef = useRef(null);
    const creativeDevRefText = useRef(null);
    useEffect(()=>{
        controller = new ScrollMagic.Controller();
        scene = new ScrollMagic.Scene({triggerElement: "#text-scroll-trigger", duration: window?.innerHeight/4})
            // animate color and top border in relation to scroll position
            //.setTween("#cralt", {rotation: 360}) // the tween durtion can be omitted and defaults to 1
            //.setTween("#text-container", {y: '50%', rotateZ: 450, scale: 0.7}) // the tween durtion can be omitted and defaults to 1
            .setTween("#cralt", {y: '50%'}) // the tween durtion can be omitted and defaults to 1
            .addTo(controller);

        /*scene = new ScrollMagic.Scene({triggerElement: "#creative-dev", duration: Math.max(700,window?.innerHeight/2)})
            .setPin("#creative-dev")
            .addTo(controller);*/
        gsap.to(meetCraltRefText?.current, {delay: 3.5, opacity:1});
        gsap.to(creativeDevRefText?.current, {delay: 4, opacity:1, marginLeft:200});
        gsap.to(underlineRef?.current, {delay: 4, left: 0});

    },[])

    return <InitialScreenContainer>
        <TriggerCraltRotation id={'cralt-trigger-rotation'}/>
        <Stars1/>
        <Stars2/>
        <Stars3/>
        <Body>
            <TextScrollTrigger id={'text-scroll-trigger'}></TextScrollTrigger>
            <CraltImageContainer id='cralt' >
                <Cralt />
            </CraltImageContainer>
        </Body>
        <TextContainer id={'text-container'}>
            <MeetCraltTextContainer>
                <NameText ref={meetCraltRefText}>Franco Roberti</NameText>
                <Underline ref={underlineRef}/>
            </MeetCraltTextContainer>
            <MeetCraltText ref={creativeDevRefText}>Creative Dev</MeetCraltText>
        </TextContainer>
    </InitialScreenContainer>
};

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.5fr 0.5fr;
  gap: 0px 0px;
  height: 100vh;
`;

const TextScrollTrigger = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;

const CraltImageContainer = styled.div`
  grid-area: 1 / 1 / 3 / 2;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 35px;
  left: 25px;
  z-index: 10;
  padding: 15px;
  border-radius: 8px;
  border-color: white;
  border-width: 1px;
  border-style: solid;
`;

const Stars1 = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 326px 729px #FFF , 401px 1510px #FFF , 428px 1444px #FFF , 1117px 125px #FFF , 939px 1536px #FFF , 1076px 1780px #FFF , 956px 1169px #FFF , 79px 756px #FFF , 1239px 519px #FFF , 1402px 1155px #FFF , 305px 1931px #FFF , 1561px 1644px #FFF , 121px 420px #FFF , 573px 1421px #FFF , 1688px 172px #FFF , 1030px 914px #FFF , 460px 1167px #FFF , 988px 1905px #FFF , 1543px 408px #FFF , 418px 1835px #FFF , 701px 942px #FFF , 1815px 278px #FFF , 1963px 1186px #FFF , 1470px 379px #FFF , 1897px 610px #FFF , 1233px 273px #FFF , 701px 1147px #FFF , 1648px 1323px #FFF , 218px 1437px #FFF , 1064px 1618px #FFF , 461px 1923px #FFF , 1683px 802px #FFF , 1843px 235px #FFF , 143px 1752px #FFF , 32px 1104px #FFF , 599px 1200px #FFF , 583px 1149px #FFF , 904px 1514px #FFF , 668px 1816px #FFF , 1970px 79px #FFF , 1326px 1036px #FFF , 229px 796px #FFF , 556px 1185px #FFF , 1095px 1455px #FFF , 1747px 70px #FFF , 1654px 1566px #FFF , 719px 1723px #FFF , 993px 745px #FFF , 42px 1222px #FFF , 440px 1410px #FFF , 69px 1386px #FFF , 381px 23px #FFF , 399px 484px #FFF , 1326px 322px #FFF , 1399px 1053px #FFF , 263px 519px #FFF , 183px 1246px #FFF , 995px 1387px #FFF , 637px 596px #FFF , 1498px 528px #FFF , 1555px 1376px #FFF , 1410px 1440px #FFF , 1500px 1805px #FFF , 921px 1827px #FFF , 1534px 1238px #FFF , 1385px 198px #FFF , 1400px 961px #FFF , 972px 703px #FFF , 1806px 1319px #FFF , 652px 1687px #FFF , 948px 1270px #FFF , 1458px 1859px #FFF , 1997px 1867px #FFF , 820px 1833px #FFF , 51px 529px #FFF , 759px 1406px #FFF , 1478px 1396px #FFF , 483px 1393px #FFF , 336px 1738px #FFF , 1498px 963px #FFF , 699px 258px #FFF , 1440px 1100px #FFF , 962px 617px #FFF , 303px 495px #FFF , 643px 1590px #FFF , 271px 1249px #FFF , 474px 1561px #FFF , 1342px 524px #FFF , 1034px 1543px #FFF , 728px 685px #FFF , 626px 1680px #FFF , 1527px 1328px #FFF , 1183px 473px #FFF , 125px 1249px #FFF , 1249px 656px #FFF , 1634px 53px #FFF , 458px 855px #FFF , 578px 883px #FFF , 1545px 336px #FFF , 1914px 1626px #FFF , 845px 1707px #FFF , 1587px 1692px #FFF , 517px 1179px #FFF , 1032px 1823px #FFF , 979px 1503px #FFF , 1142px 440px #FFF , 1112px 545px #FFF , 591px 1235px #FFF , 1170px 962px #FFF , 752px 391px #FFF , 248px 1450px #FFF , 862px 568px #FFF , 5px 1461px #FFF , 1550px 138px #FFF , 1425px 159px #FFF , 309px 1065px #FFF , 1964px 859px #FFF , 1450px 1840px #FFF , 125px 567px #FFF , 1271px 208px #FFF , 1480px 961px #FFF , 1484px 1444px #FFF , 1482px 1984px #FFF , 988px 1712px #FFF , 268px 1450px #FFF , 103px 1957px #FFF , 1724px 403px #FFF , 431px 1967px #FFF , 807px 345px #FFF , 600px 487px #FFF , 188px 1029px #FFF , 1765px 833px #FFF , 1232px 1046px #FFF , 1220px 1093px #FFF , 1545px 943px #FFF , 271px 1010px #FFF , 1462px 1701px #FFF , 747px 57px #FFF , 988px 715px #FFF , 1605px 736px #FFF , 673px 622px #FFF , 26px 434px #FFF , 1549px 1392px #FFF , 1575px 225px #FFF , 589px 732px #FFF , 1540px 237px #FFF , 899px 1569px #FFF , 1361px 284px #FFF , 402px 1473px #FFF , 1105px 1989px #FFF , 1031px 1890px #FFF , 982px 750px #FFF , 505px 721px #FFF , 297px 1419px #FFF , 1228px 455px #FFF , 498px 1000px #FFF , 1764px 831px #FFF , 529px 606px #FFF , 1096px 495px #FFF , 243px 1123px #FFF , 697px 1901px #FFF , 1407px 1169px #FFF , 1005px 169px #FFF , 1338px 1532px #FFF , 1169px 514px #FFF , 1164px 571px #FFF , 630px 1641px #FFF , 796px 68px #FFF , 1644px 1732px #FFF , 939px 881px #FFF , 46px 1235px #FFF , 132px 367px #FFF , 9px 103px #FFF , 133px 675px #FFF , 308px 805px #FFF , 218px 1879px #FFF , 1863px 319px #FFF , 827px 1020px #FFF , 1691px 566px #FFF , 153px 626px #FFF , 1589px 949px #FFF , 1443px 71px #FFF , 1909px 153px #FFF , 120px 983px #FFF , 1141px 1330px #FFF , 1614px 893px #FFF , 268px 759px #FFF , 288px 1980px #FFF , 838px 1981px #FFF , 1897px 838px #FFF , 1716px 1779px #FFF , 1953px 1118px #FFF , 505px 343px #FFF , 1249px 200px #FFF , 1419px 417px #FFF , 777px 378px #FFF , 1430px 628px #FFF , 1309px 735px #FFF , 614px 190px #FFF , 1165px 1162px #FFF , 1940px 1846px #FFF , 1459px 1663px #FFF , 391px 408px #FFF , 11px 1612px #FFF , 269px 1087px #FFF , 1660px 1987px #FFF , 1675px 902px #FFF , 1424px 952px #FFF , 1731px 1608px #FFF , 755px 1562px #FFF , 1074px 1377px #FFF , 1151px 1694px #FFF , 281px 107px #FFF , 1636px 416px #FFF , 954px 1880px #FFF , 91px 632px #FFF , 104px 479px #FFF , 720px 671px #FFF , 1835px 1175px #FFF , 629px 314px #FFF , 39px 1741px #FFF , 338px 1795px #FFF , 1752px 39px #FFF , 908px 6px #FFF , 190px 876px #FFF , 4px 1994px #FFF , 1592px 820px #FFF , 1996px 36px #FFF , 49px 1009px #FFF , 1246px 1922px #FFF , 1586px 1370px #FFF , 798px 1153px #FFF , 1016px 1022px #FFF , 1384px 1832px #FFF , 922px 2px #FFF , 1997px 1837px #FFF , 1001px 785px #FFF , 448px 1982px #FFF , 1107px 197px #FFF , 230px 1537px #FFF , 68px 635px #FFF , 1985px 924px #FFF , 1136px 808px #FFF , 1819px 1759px #FFF , 526px 1216px #FFF , 1620px 906px #FFF , 512px 1709px #FFF , 763px 1414px #FFF , 29px 439px #FFF , 788px 1530px #FFF , 118px 1384px #FFF , 802px 571px #FFF , 931px 127px #FFF , 1341px 306px #FFF , 412px 515px #FFF , 1752px 1313px #FFF , 1961px 674px #FFF , 867px 1184px #FFF , 1730px 1911px #FFF , 438px 1636px #FFF , 192px 364px #FFF , 996px 1411px #FFF , 1556px 623px #FFF , 1058px 323px #FFF , 522px 628px #FFF , 1748px 29px #FFF , 1049px 1872px #FFF , 1622px 1358px #FFF , 1504px 1988px #FFF , 907px 1989px #FFF , 1099px 1748px #FFF , 771px 504px #FFF , 1011px 724px #FFF , 1612px 1962px #FFF , 1970px 1474px #FFF , 1927px 530px #FFF , 1155px 22px #FFF , 519px 305px #FFF , 725px 1592px #FFF , 1883px 141px #FFF , 1771px 132px #FFF , 1554px 1725px #FFF , 618px 343px #FFF , 26px 1609px #FFF , 1770px 1054px #FFF , 347px 1194px #FFF , 162px 1544px #FFF , 578px 1144px #FFF , 325px 1490px #FFF , 1018px 1068px #FFF , 419px 1760px #FFF , 1515px 1603px #FFF , 1958px 1149px #FFF , 680px 415px #FFF , 663px 1354px #FFF , 1439px 1521px #FFF , 34px 562px #FFF , 1740px 1270px #FFF , 1451px 1433px #FFF , 1291px 817px #FFF , 1622px 1744px #FFF , 627px 1860px #FFF , 1726px 480px #FFF , 610px 1874px #FFF , 1687px 1118px #FFF , 229px 475px #FFF , 1528px 234px #FFF , 557px 909px #FFF , 71px 628px #FFF , 346px 203px #FFF , 221px 1710px #FFF , 903px 418px #FFF , 428px 1728px #FFF , 461px 1358px #FFF , 1372px 33px #FFF , 281px 1412px #FFF , 215px 1987px #FFF , 1304px 964px #FFF , 1038px 1538px #FFF , 560px 308px #FFF , 518px 12px #FFF , 447px 265px #FFF , 1227px 1975px #FFF , 1940px 1936px #FFF , 1262px 1914px #FFF , 461px 1474px #FFF , 1660px 295px #FFF , 893px 639px #FFF , 1626px 983px #FFF , 1540px 725px #FFF , 1645px 1700px #FFF , 842px 669px #FFF , 812px 298px #FFF , 230px 1632px #FFF , 1954px 711px #FFF , 820px 821px #FFF , 1885px 1481px #FFF , 1124px 43px #FFF , 1841px 1002px #FFF , 1245px 1291px #FFF , 1472px 908px #FFF , 1466px 1624px #FFF , 370px 1457px #FFF , 1563px 931px #FFF , 518px 448px #FFF , 662px 1475px #FFF , 1903px 844px #FFF , 1296px 1791px #FFF , 1608px 467px #FFF , 6px 799px #FFF , 1449px 571px #FFF , 56px 1221px #FFF , 1080px 1707px #FFF , 950px 567px #FFF , 1138px 1923px #FFF , 1973px 1062px #FFF , 262px 1498px #FFF , 236px 971px #FFF , 1860px 1332px #FFF , 1693px 725px #FFF , 60px 1229px #FFF , 563px 1831px #FFF , 614px 1394px #FFF , 339px 49px #FFF , 1826px 1299px #FFF , 1292px 1184px #FFF , 281px 1962px #FFF , 1697px 950px #FFF , 1789px 876px #FFF , 1846px 1385px #FFF , 965px 1560px #FFF , 452px 1849px #FFF , 843px 345px #FFF , 1521px 275px #FFF , 1948px 1025px #FFF , 1888px 530px #FFF , 1963px 394px #FFF , 1932px 1801px #FFF , 1778px 311px #FFF , 1361px 1899px #FFF , 1823px 1106px #FFF , 256px 1794px #FFF , 1317px 1902px #FFF , 1054px 732px #FFF , 1937px 1952px #FFF , 1956px 121px #FFF , 1554px 51px #FFF , 719px 1766px #FFF , 821px 209px #FFF , 928px 196px #FFF , 443px 1992px #FFF , 653px 611px #FFF , 210px 1991px #FFF , 183px 1006px #FFF , 146px 357px #FFF , 1183px 1017px #FFF , 1061px 748px #FFF , 607px 531px #FFF , 1932px 893px #FFF , 215px 429px #FFF , 732px 383px #FFF , 858px 1594px #FFF , 1943px 153px #FFF , 718px 554px #FFF , 1075px 654px #FFF , 220px 195px #FFF , 515px 625px #FFF , 1091px 826px #FFF , 206px 1626px #FFF , 1273px 915px #FFF , 1903px 723px #FFF , 1968px 72px #FFF , 1234px 659px #FFF , 1834px 1152px #FFF , 1569px 354px #FFF , 1316px 433px #FFF , 906px 41px #FFF , 1977px 1626px #FFF , 319px 1827px #FFF , 1761px 614px #FFF , 1607px 731px #FFF , 981px 1910px #FFF , 1540px 1141px #FFF , 1239px 1448px #FFF , 1709px 1021px #FFF , 249px 1036px #FFF , 1865px 1185px #FFF , 1212px 437px #FFF , 335px 1473px #FFF , 721px 1812px #FFF , 1790px 496px #FFF , 302px 527px #FFF , 271px 418px #FFF , 1114px 178px #FFF , 1170px 731px #FFF , 902px 743px #FFF , 648px 823px #FFF , 1823px 415px #FFF , 384px 215px #FFF , 505px 1717px #FFF , 249px 490px #FFF , 1298px 1467px #FFF , 1145px 1034px #FFF , 291px 871px #FFF , 985px 138px #FFF , 915px 885px #FFF , 795px 675px #FFF , 788px 1947px #FFF , 1111px 1649px #FFF , 1518px 333px #FFF , 1644px 1923px #FFF , 508px 217px #FFF , 918px 668px #FFF , 618px 1069px #FFF , 361px 370px #FFF , 412px 1846px #FFF , 1471px 1871px #FFF , 959px 1249px #FFF , 1926px 1033px #FFF , 701px 106px #FFF , 712px 1275px #FFF , 1311px 1603px #FFF , 896px 524px #FFF , 978px 1873px #FFF , 600px 740px #FFF , 1696px 1841px #FFF , 1249px 1991px #FFF , 1146px 430px #FFF , 177px 1265px #FFF , 768px 1561px #FFF , 302px 802px #FFF , 172px 834px #FFF , 1797px 383px #FFF , 695px 1046px #FFF , 430px 1631px #FFF , 527px 619px #FFF , 1632px 1566px #FFF , 1783px 1672px #FFF , 725px 308px #FFF , 100px 1745px #FFF , 1754px 1931px #FFF , 1682px 440px #FFF , 1108px 1180px #FFF , 780px 1254px #FFF , 252px 1735px #FFF , 572px 1399px #FFF , 559px 1829px #FFF , 103px 482px #FFF , 824px 163px #FFF , 733px 901px #FFF , 544px 335px #FFF , 1296px 1044px #FFF , 1824px 204px #FFF , 739px 905px #FFF , 168px 1795px #FFF , 1414px 1993px #FFF , 1048px 1608px #FFF , 1898px 924px #FFF , 27px 1636px #FFF , 449px 134px #FFF , 1389px 1587px #FFF , 1438px 919px #FFF , 1048px 141px #FFF , 1282px 955px #FFF , 582px 20px #FFF , 1794px 1853px #FFF , 1364px 1407px #FFF , 1702px 125px #FFF , 67px 837px #FFF , 1335px 1569px #FFF , 307px 1216px #FFF , 1644px 1605px #FFF , 1445px 992px #FFF , 1286px 699px #FFF , 663px 544px #FFF , 1323px 1538px #FFF , 1136px 394px #FFF , 1771px 361px #FFF , 1737px 1772px #FFF , 1791px 1127px #FFF , 785px 371px #FFF , 49px 1775px #FFF , 1047px 689px #FFF , 1619px 1454px #FFF , 115px 786px #FFF , 639px 1911px #FFF , 313px 774px #FFF , 1331px 637px #FFF , 1898px 246px #FFF , 1962px 1782px #FFF , 757px 1696px #FFF , 1453px 130px #FFF , 1614px 1888px #FFF , 614px 652px #FFF , 249px 938px #FFF , 1576px 45px #FFF , 1385px 566px #FFF , 785px 962px #FFF , 66px 1552px #FFF , 1740px 1510px #FFF , 1095px 819px #FFF , 1658px 1319px #FFF , 1191px 543px #FFF , 782px 199px #FFF , 1845px 930px #FFF , 468px 1413px #FFF , 388px 1121px #FFF , 1445px 1696px #FFF , 1223px 100px #FFF , 1119px 247px #FFF , 711px 160px #FFF , 706px 97px #FFF , 863px 166px #FFF , 547px 1974px #FFF , 662px 321px #FFF , 1041px 433px #FFF , 1039px 461px #FFF , 1796px 938px #FFF , 1206px 1004px #FFF , 1703px 1929px #FFF , 1387px 1814px #FFF , 1366px 1812px #FFF , 161px 85px #FFF , 164px 126px #FFF , 1172px 1204px #FFF , 1356px 214px #FFF , 1418px 565px #FFF , 1226px 1217px #FFF , 579px 1813px #FFF , 534px 1081px #FFF , 1303px 549px #FFF , 147px 1308px #FFF , 1867px 530px #FFF , 311px 1763px #FFF , 1412px 22px #FFF , 1626px 837px #FFF , 1934px 307px #FFF , 786px 1868px #FFF , 30px 1203px #FFF , 117px 1316px #FFF , 1433px 1543px #FFF , 233px 1241px #FFF , 830px 898px #FFF , 446px 634px #FFF , 328px 1912px #FFF , 65px 1685px #FFF , 140px 445px #FFF , 1365px 1950px #FFF , 1968px 1258px #FFF , 415px 816px #FFF , 1785px 622px #FFF , 1273px 1308px #FFF , 986px 18px #FFF , 293px 200px #FFF , 1151px 590px #FFF , 923px 478px #FFF , 493px 1596px #FFF , 1130px 1413px #FFF , 1553px 769px #FFF , 1243px 490px #FFF , 896px 219px #FFF , 865px 818px #FFF , 1265px 426px #FFF , 1543px 595px #FFF , 1393px 1034px #FFF , 1295px 1237px #FFF , 1751px 1399px #FFF , 437px 1655px #FFF , 119px 61px #FFF , 1079px 932px #FFF , 885px 1873px #FFF , 1328px 1096px #FFF , 1670px 1234px #FFF , 1784px 1605px #FFF , 454px 1833px #FFF , 1197px 548px #FFF , 85px 302px #FFF , 983px 1022px #FFF , 525px 814px #FFF , 1107px 221px #FFF , 1146px 1997px #FFF , 1813px 1665px #FFF , 47px 1242px #FFF , 578px 631px #FFF , 1914px 1859px #FFF , 1188px 1349px #FFF , 1419px 1821px #FFF , 404px 980px #FFF , 230px 1117px #FFF , 1546px 1807px #FFF , 969px 675px #FFF , 85px 1623px #FFF , 1890px 970px #FFF , 418px 1916px #FFF , 1900px 685px #FFF , 1095px 1112px #FFF , 593px 1359px #FFF , 1758px 1479px #FFF , 1284px 1636px #FFF , 749px 638px #FFF , 1571px 1113px #FFF , 1398px 575px #FFF , 130px 677px #FFF , 668px 58px #FFF , 530px 979px #FFF , 787px 99px #FFF , 1513px 237px #FFF , 1115px 515px #FFF , 59px 1034px #FFF , 80px 826px #FFF , 1313px 925px #FFF , 383px 1643px #FFF , 68px 1376px #FFF , 171px 24px #FFF , 461px 540px #FFF , 779px 816px #FFF , 513px 823px #FFF , 818px 1511px #FFF , 1173px 80px #FFF , 977px 1260px #FFF , 1852px 1324px #FFF , 56px 370px #FFF , 1293px 540px #FFF , 1996px 361px #FFF , 1139px 1834px #FFF , 977px 1924px #FFF , 1579px 614px #FFF , 1134px 1209px #FFF , 409px 1087px #FFF , 295px 1350px #FFF , 11px 909px #FFF , 507px 1799px #FFF , 499px 1655px #FFF , 1614px 1371px #FFF , 1320px 60px #FFF , 1801px 1932px #FFF , 1082px 1052px #FFF , 784px 1205px #FFF , 40px 1962px #FFF , 573px 155px #FFF , 1484px 1181px #FFF , 1976px 1284px #FFF , 419px 1706px #FFF , 110px 566px #FFF , 236px 1366px #FFF , 503px 487px #FFF , 635px 739px #FFF , 1124px 832px #FFF , 1895px 246px #FFF , 504px 776px #FFF , 1864px 431px #FFF , 76px 230px #FFF , 1672px 960px #FFF , 1012px 1818px #FFF , 748px 1895px #FFF , 748px 379px #FFF , 552px 843px #FFF , 1594px 1350px #FFF , 122px 175px #FFF , 1425px 1062px #FFF;
  animation: animStar 50s linear infinite; 
  &:after{
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 326px 729px #FFF , 401px 1510px #FFF , 428px 1444px #FFF , 1117px 125px #FFF , 939px 1536px #FFF , 1076px 1780px #FFF , 956px 1169px #FFF , 79px 756px #FFF , 1239px 519px #FFF , 1402px 1155px #FFF , 305px 1931px #FFF , 1561px 1644px #FFF , 121px 420px #FFF , 573px 1421px #FFF , 1688px 172px #FFF , 1030px 914px #FFF , 460px 1167px #FFF , 988px 1905px #FFF , 1543px 408px #FFF , 418px 1835px #FFF , 701px 942px #FFF , 1815px 278px #FFF , 1963px 1186px #FFF , 1470px 379px #FFF , 1897px 610px #FFF , 1233px 273px #FFF , 701px 1147px #FFF , 1648px 1323px #FFF , 218px 1437px #FFF , 1064px 1618px #FFF , 461px 1923px #FFF , 1683px 802px #FFF , 1843px 235px #FFF , 143px 1752px #FFF , 32px 1104px #FFF , 599px 1200px #FFF , 583px 1149px #FFF , 904px 1514px #FFF , 668px 1816px #FFF , 1970px 79px #FFF , 1326px 1036px #FFF , 229px 796px #FFF , 556px 1185px #FFF , 1095px 1455px #FFF , 1747px 70px #FFF , 1654px 1566px #FFF , 719px 1723px #FFF , 993px 745px #FFF , 42px 1222px #FFF , 440px 1410px #FFF , 69px 1386px #FFF , 381px 23px #FFF , 399px 484px #FFF , 1326px 322px #FFF , 1399px 1053px #FFF , 263px 519px #FFF , 183px 1246px #FFF , 995px 1387px #FFF , 637px 596px #FFF , 1498px 528px #FFF , 1555px 1376px #FFF , 1410px 1440px #FFF , 1500px 1805px #FFF , 921px 1827px #FFF , 1534px 1238px #FFF , 1385px 198px #FFF , 1400px 961px #FFF , 972px 703px #FFF , 1806px 1319px #FFF , 652px 1687px #FFF , 948px 1270px #FFF , 1458px 1859px #FFF , 1997px 1867px #FFF , 820px 1833px #FFF , 51px 529px #FFF , 759px 1406px #FFF , 1478px 1396px #FFF , 483px 1393px #FFF , 336px 1738px #FFF , 1498px 963px #FFF , 699px 258px #FFF , 1440px 1100px #FFF , 962px 617px #FFF , 303px 495px #FFF , 643px 1590px #FFF , 271px 1249px #FFF , 474px 1561px #FFF , 1342px 524px #FFF , 1034px 1543px #FFF , 728px 685px #FFF , 626px 1680px #FFF , 1527px 1328px #FFF , 1183px 473px #FFF , 125px 1249px #FFF , 1249px 656px #FFF , 1634px 53px #FFF , 458px 855px #FFF , 578px 883px #FFF , 1545px 336px #FFF , 1914px 1626px #FFF , 845px 1707px #FFF , 1587px 1692px #FFF , 517px 1179px #FFF , 1032px 1823px #FFF , 979px 1503px #FFF , 1142px 440px #FFF , 1112px 545px #FFF , 591px 1235px #FFF , 1170px 962px #FFF , 752px 391px #FFF , 248px 1450px #FFF , 862px 568px #FFF , 5px 1461px #FFF , 1550px 138px #FFF , 1425px 159px #FFF , 309px 1065px #FFF , 1964px 859px #FFF , 1450px 1840px #FFF , 125px 567px #FFF , 1271px 208px #FFF , 1480px 961px #FFF , 1484px 1444px #FFF , 1482px 1984px #FFF , 988px 1712px #FFF , 268px 1450px #FFF , 103px 1957px #FFF , 1724px 403px #FFF , 431px 1967px #FFF , 807px 345px #FFF , 600px 487px #FFF , 188px 1029px #FFF , 1765px 833px #FFF , 1232px 1046px #FFF , 1220px 1093px #FFF , 1545px 943px #FFF , 271px 1010px #FFF , 1462px 1701px #FFF , 747px 57px #FFF , 988px 715px #FFF , 1605px 736px #FFF , 673px 622px #FFF , 26px 434px #FFF , 1549px 1392px #FFF , 1575px 225px #FFF , 589px 732px #FFF , 1540px 237px #FFF , 899px 1569px #FFF , 1361px 284px #FFF , 402px 1473px #FFF , 1105px 1989px #FFF , 1031px 1890px #FFF , 982px 750px #FFF , 505px 721px #FFF , 297px 1419px #FFF , 1228px 455px #FFF , 498px 1000px #FFF , 1764px 831px #FFF , 529px 606px #FFF , 1096px 495px #FFF , 243px 1123px #FFF , 697px 1901px #FFF , 1407px 1169px #FFF , 1005px 169px #FFF , 1338px 1532px #FFF , 1169px 514px #FFF , 1164px 571px #FFF , 630px 1641px #FFF , 796px 68px #FFF , 1644px 1732px #FFF , 939px 881px #FFF , 46px 1235px #FFF , 132px 367px #FFF , 9px 103px #FFF , 133px 675px #FFF , 308px 805px #FFF , 218px 1879px #FFF , 1863px 319px #FFF , 827px 1020px #FFF , 1691px 566px #FFF , 153px 626px #FFF , 1589px 949px #FFF , 1443px 71px #FFF , 1909px 153px #FFF , 120px 983px #FFF , 1141px 1330px #FFF , 1614px 893px #FFF , 268px 759px #FFF , 288px 1980px #FFF , 838px 1981px #FFF , 1897px 838px #FFF , 1716px 1779px #FFF , 1953px 1118px #FFF , 505px 343px #FFF , 1249px 200px #FFF , 1419px 417px #FFF , 777px 378px #FFF , 1430px 628px #FFF , 1309px 735px #FFF , 614px 190px #FFF , 1165px 1162px #FFF , 1940px 1846px #FFF , 1459px 1663px #FFF , 391px 408px #FFF , 11px 1612px #FFF , 269px 1087px #FFF , 1660px 1987px #FFF , 1675px 902px #FFF , 1424px 952px #FFF , 1731px 1608px #FFF , 755px 1562px #FFF , 1074px 1377px #FFF , 1151px 1694px #FFF , 281px 107px #FFF , 1636px 416px #FFF , 954px 1880px #FFF , 91px 632px #FFF , 104px 479px #FFF , 720px 671px #FFF , 1835px 1175px #FFF , 629px 314px #FFF , 39px 1741px #FFF , 338px 1795px #FFF , 1752px 39px #FFF , 908px 6px #FFF , 190px 876px #FFF , 4px 1994px #FFF , 1592px 820px #FFF , 1996px 36px #FFF , 49px 1009px #FFF , 1246px 1922px #FFF , 1586px 1370px #FFF , 798px 1153px #FFF , 1016px 1022px #FFF , 1384px 1832px #FFF , 922px 2px #FFF , 1997px 1837px #FFF , 1001px 785px #FFF , 448px 1982px #FFF , 1107px 197px #FFF , 230px 1537px #FFF , 68px 635px #FFF , 1985px 924px #FFF , 1136px 808px #FFF , 1819px 1759px #FFF , 526px 1216px #FFF , 1620px 906px #FFF , 512px 1709px #FFF , 763px 1414px #FFF , 29px 439px #FFF , 788px 1530px #FFF , 118px 1384px #FFF , 802px 571px #FFF , 931px 127px #FFF , 1341px 306px #FFF , 412px 515px #FFF , 1752px 1313px #FFF , 1961px 674px #FFF , 867px 1184px #FFF , 1730px 1911px #FFF , 438px 1636px #FFF , 192px 364px #FFF , 996px 1411px #FFF , 1556px 623px #FFF , 1058px 323px #FFF , 522px 628px #FFF , 1748px 29px #FFF , 1049px 1872px #FFF , 1622px 1358px #FFF , 1504px 1988px #FFF , 907px 1989px #FFF , 1099px 1748px #FFF , 771px 504px #FFF , 1011px 724px #FFF , 1612px 1962px #FFF , 1970px 1474px #FFF , 1927px 530px #FFF , 1155px 22px #FFF , 519px 305px #FFF , 725px 1592px #FFF , 1883px 141px #FFF , 1771px 132px #FFF , 1554px 1725px #FFF , 618px 343px #FFF , 26px 1609px #FFF , 1770px 1054px #FFF , 347px 1194px #FFF , 162px 1544px #FFF , 578px 1144px #FFF , 325px 1490px #FFF , 1018px 1068px #FFF , 419px 1760px #FFF , 1515px 1603px #FFF , 1958px 1149px #FFF , 680px 415px #FFF , 663px 1354px #FFF , 1439px 1521px #FFF , 34px 562px #FFF , 1740px 1270px #FFF , 1451px 1433px #FFF , 1291px 817px #FFF , 1622px 1744px #FFF , 627px 1860px #FFF , 1726px 480px #FFF , 610px 1874px #FFF , 1687px 1118px #FFF , 229px 475px #FFF , 1528px 234px #FFF , 557px 909px #FFF , 71px 628px #FFF , 346px 203px #FFF , 221px 1710px #FFF , 903px 418px #FFF , 428px 1728px #FFF , 461px 1358px #FFF , 1372px 33px #FFF , 281px 1412px #FFF , 215px 1987px #FFF , 1304px 964px #FFF , 1038px 1538px #FFF , 560px 308px #FFF , 518px 12px #FFF , 447px 265px #FFF , 1227px 1975px #FFF , 1940px 1936px #FFF , 1262px 1914px #FFF , 461px 1474px #FFF , 1660px 295px #FFF , 893px 639px #FFF , 1626px 983px #FFF , 1540px 725px #FFF , 1645px 1700px #FFF , 842px 669px #FFF , 812px 298px #FFF , 230px 1632px #FFF , 1954px 711px #FFF , 820px 821px #FFF , 1885px 1481px #FFF , 1124px 43px #FFF , 1841px 1002px #FFF , 1245px 1291px #FFF , 1472px 908px #FFF , 1466px 1624px #FFF , 370px 1457px #FFF , 1563px 931px #FFF , 518px 448px #FFF , 662px 1475px #FFF , 1903px 844px #FFF , 1296px 1791px #FFF , 1608px 467px #FFF , 6px 799px #FFF , 1449px 571px #FFF , 56px 1221px #FFF , 1080px 1707px #FFF , 950px 567px #FFF , 1138px 1923px #FFF , 1973px 1062px #FFF , 262px 1498px #FFF , 236px 971px #FFF , 1860px 1332px #FFF , 1693px 725px #FFF , 60px 1229px #FFF , 563px 1831px #FFF , 614px 1394px #FFF , 339px 49px #FFF , 1826px 1299px #FFF , 1292px 1184px #FFF , 281px 1962px #FFF , 1697px 950px #FFF , 1789px 876px #FFF , 1846px 1385px #FFF , 965px 1560px #FFF , 452px 1849px #FFF , 843px 345px #FFF , 1521px 275px #FFF , 1948px 1025px #FFF , 1888px 530px #FFF , 1963px 394px #FFF , 1932px 1801px #FFF , 1778px 311px #FFF , 1361px 1899px #FFF , 1823px 1106px #FFF , 256px 1794px #FFF , 1317px 1902px #FFF , 1054px 732px #FFF , 1937px 1952px #FFF , 1956px 121px #FFF , 1554px 51px #FFF , 719px 1766px #FFF , 821px 209px #FFF , 928px 196px #FFF , 443px 1992px #FFF , 653px 611px #FFF , 210px 1991px #FFF , 183px 1006px #FFF , 146px 357px #FFF , 1183px 1017px #FFF , 1061px 748px #FFF , 607px 531px #FFF , 1932px 893px #FFF , 215px 429px #FFF , 732px 383px #FFF , 858px 1594px #FFF , 1943px 153px #FFF , 718px 554px #FFF , 1075px 654px #FFF , 220px 195px #FFF , 515px 625px #FFF , 1091px 826px #FFF , 206px 1626px #FFF , 1273px 915px #FFF , 1903px 723px #FFF , 1968px 72px #FFF , 1234px 659px #FFF , 1834px 1152px #FFF , 1569px 354px #FFF , 1316px 433px #FFF , 906px 41px #FFF , 1977px 1626px #FFF , 319px 1827px #FFF , 1761px 614px #FFF , 1607px 731px #FFF , 981px 1910px #FFF , 1540px 1141px #FFF , 1239px 1448px #FFF , 1709px 1021px #FFF , 249px 1036px #FFF , 1865px 1185px #FFF , 1212px 437px #FFF , 335px 1473px #FFF , 721px 1812px #FFF , 1790px 496px #FFF , 302px 527px #FFF , 271px 418px #FFF , 1114px 178px #FFF , 1170px 731px #FFF , 902px 743px #FFF , 648px 823px #FFF , 1823px 415px #FFF , 384px 215px #FFF , 505px 1717px #FFF , 249px 490px #FFF , 1298px 1467px #FFF , 1145px 1034px #FFF , 291px 871px #FFF , 985px 138px #FFF , 915px 885px #FFF , 795px 675px #FFF , 788px 1947px #FFF , 1111px 1649px #FFF , 1518px 333px #FFF , 1644px 1923px #FFF , 508px 217px #FFF , 918px 668px #FFF , 618px 1069px #FFF , 361px 370px #FFF , 412px 1846px #FFF , 1471px 1871px #FFF , 959px 1249px #FFF , 1926px 1033px #FFF , 701px 106px #FFF , 712px 1275px #FFF , 1311px 1603px #FFF , 896px 524px #FFF , 978px 1873px #FFF , 600px 740px #FFF , 1696px 1841px #FFF , 1249px 1991px #FFF , 1146px 430px #FFF , 177px 1265px #FFF , 768px 1561px #FFF , 302px 802px #FFF , 172px 834px #FFF , 1797px 383px #FFF , 695px 1046px #FFF , 430px 1631px #FFF , 527px 619px #FFF , 1632px 1566px #FFF , 1783px 1672px #FFF , 725px 308px #FFF , 100px 1745px #FFF , 1754px 1931px #FFF , 1682px 440px #FFF , 1108px 1180px #FFF , 780px 1254px #FFF , 252px 1735px #FFF , 572px 1399px #FFF , 559px 1829px #FFF , 103px 482px #FFF , 824px 163px #FFF , 733px 901px #FFF , 544px 335px #FFF , 1296px 1044px #FFF , 1824px 204px #FFF , 739px 905px #FFF , 168px 1795px #FFF , 1414px 1993px #FFF , 1048px 1608px #FFF , 1898px 924px #FFF , 27px 1636px #FFF , 449px 134px #FFF , 1389px 1587px #FFF , 1438px 919px #FFF , 1048px 141px #FFF , 1282px 955px #FFF , 582px 20px #FFF , 1794px 1853px #FFF , 1364px 1407px #FFF , 1702px 125px #FFF , 67px 837px #FFF , 1335px 1569px #FFF , 307px 1216px #FFF , 1644px 1605px #FFF , 1445px 992px #FFF , 1286px 699px #FFF , 663px 544px #FFF , 1323px 1538px #FFF , 1136px 394px #FFF , 1771px 361px #FFF , 1737px 1772px #FFF , 1791px 1127px #FFF , 785px 371px #FFF , 49px 1775px #FFF , 1047px 689px #FFF , 1619px 1454px #FFF , 115px 786px #FFF , 639px 1911px #FFF , 313px 774px #FFF , 1331px 637px #FFF , 1898px 246px #FFF , 1962px 1782px #FFF , 757px 1696px #FFF , 1453px 130px #FFF , 1614px 1888px #FFF , 614px 652px #FFF , 249px 938px #FFF , 1576px 45px #FFF , 1385px 566px #FFF , 785px 962px #FFF , 66px 1552px #FFF , 1740px 1510px #FFF , 1095px 819px #FFF , 1658px 1319px #FFF , 1191px 543px #FFF , 782px 199px #FFF , 1845px 930px #FFF , 468px 1413px #FFF , 388px 1121px #FFF , 1445px 1696px #FFF , 1223px 100px #FFF , 1119px 247px #FFF , 711px 160px #FFF , 706px 97px #FFF , 863px 166px #FFF , 547px 1974px #FFF , 662px 321px #FFF , 1041px 433px #FFF , 1039px 461px #FFF , 1796px 938px #FFF , 1206px 1004px #FFF , 1703px 1929px #FFF , 1387px 1814px #FFF , 1366px 1812px #FFF , 161px 85px #FFF , 164px 126px #FFF , 1172px 1204px #FFF , 1356px 214px #FFF , 1418px 565px #FFF , 1226px 1217px #FFF , 579px 1813px #FFF , 534px 1081px #FFF , 1303px 549px #FFF , 147px 1308px #FFF , 1867px 530px #FFF , 311px 1763px #FFF , 1412px 22px #FFF , 1626px 837px #FFF , 1934px 307px #FFF , 786px 1868px #FFF , 30px 1203px #FFF , 117px 1316px #FFF , 1433px 1543px #FFF , 233px 1241px #FFF , 830px 898px #FFF , 446px 634px #FFF , 328px 1912px #FFF , 65px 1685px #FFF , 140px 445px #FFF , 1365px 1950px #FFF , 1968px 1258px #FFF , 415px 816px #FFF , 1785px 622px #FFF , 1273px 1308px #FFF , 986px 18px #FFF , 293px 200px #FFF , 1151px 590px #FFF , 923px 478px #FFF , 493px 1596px #FFF , 1130px 1413px #FFF , 1553px 769px #FFF , 1243px 490px #FFF , 896px 219px #FFF , 865px 818px #FFF , 1265px 426px #FFF , 1543px 595px #FFF , 1393px 1034px #FFF , 1295px 1237px #FFF , 1751px 1399px #FFF , 437px 1655px #FFF , 119px 61px #FFF , 1079px 932px #FFF , 885px 1873px #FFF , 1328px 1096px #FFF , 1670px 1234px #FFF , 1784px 1605px #FFF , 454px 1833px #FFF , 1197px 548px #FFF , 85px 302px #FFF , 983px 1022px #FFF , 525px 814px #FFF , 1107px 221px #FFF , 1146px 1997px #FFF , 1813px 1665px #FFF , 47px 1242px #FFF , 578px 631px #FFF , 1914px 1859px #FFF , 1188px 1349px #FFF , 1419px 1821px #FFF , 404px 980px #FFF , 230px 1117px #FFF , 1546px 1807px #FFF , 969px 675px #FFF , 85px 1623px #FFF , 1890px 970px #FFF , 418px 1916px #FFF , 1900px 685px #FFF , 1095px 1112px #FFF , 593px 1359px #FFF , 1758px 1479px #FFF , 1284px 1636px #FFF , 749px 638px #FFF , 1571px 1113px #FFF , 1398px 575px #FFF , 130px 677px #FFF , 668px 58px #FFF , 530px 979px #FFF , 787px 99px #FFF , 1513px 237px #FFF , 1115px 515px #FFF , 59px 1034px #FFF , 80px 826px #FFF , 1313px 925px #FFF , 383px 1643px #FFF , 68px 1376px #FFF , 171px 24px #FFF , 461px 540px #FFF , 779px 816px #FFF , 513px 823px #FFF , 818px 1511px #FFF , 1173px 80px #FFF , 977px 1260px #FFF , 1852px 1324px #FFF , 56px 370px #FFF , 1293px 540px #FFF , 1996px 361px #FFF , 1139px 1834px #FFF , 977px 1924px #FFF , 1579px 614px #FFF , 1134px 1209px #FFF , 409px 1087px #FFF , 295px 1350px #FFF , 11px 909px #FFF , 507px 1799px #FFF , 499px 1655px #FFF , 1614px 1371px #FFF , 1320px 60px #FFF , 1801px 1932px #FFF , 1082px 1052px #FFF , 784px 1205px #FFF , 40px 1962px #FFF , 573px 155px #FFF , 1484px 1181px #FFF , 1976px 1284px #FFF , 419px 1706px #FFF , 110px 566px #FFF , 236px 1366px #FFF , 503px 487px #FFF , 635px 739px #FFF , 1124px 832px #FFF , 1895px 246px #FFF , 504px 776px #FFF , 1864px 431px #FFF , 76px 230px #FFF , 1672px 960px #FFF , 1012px 1818px #FFF , 748px 1895px #FFF , 748px 379px #FFF , 552px 843px #FFF , 1594px 1350px #FFF , 122px 175px #FFF , 1425px 1062px #FFF;
  }

  @keyframes animStar{
    from{
      transform: translateY(0px)
    } to {
        transform: translateY(-2000px)
      }
  }
`;

const Stars2 = styled.div`
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 748px 1941px #FFF , 1437px 521px #FFF , 1238px 843px #FFF , 554px 419px #FFF , 648px 211px #FFF , 1157px 413px #FFF , 1482px 1123px #FFF , 703px 12px #FFF , 735px 853px #FFF , 1635px 607px #FFF , 801px 1024px #FFF , 122px 1934px #FFF , 1938px 1244px #FFF , 1342px 1835px #FFF , 363px 1475px #FFF , 264px 1683px #FFF , 770px 1085px #FFF , 277px 24px #FFF , 1900px 167px #FFF , 1287px 1003px #FFF , 1552px 1041px #FFF , 307px 1040px #FFF , 1504px 1101px #FFF , 1655px 686px #FFF , 1590px 435px #FFF , 4px 913px #FFF , 1467px 363px #FFF , 1614px 1370px #FFF , 1840px 916px #FFF , 324px 50px #FFF , 5px 629px #FFF , 1024px 1790px #FFF , 1531px 1178px #FFF , 1030px 151px #FFF , 17px 1263px #FFF , 1971px 1491px #FFF , 115px 1453px #FFF , 886px 189px #FFF , 115px 690px #FFF , 601px 1363px #FFF , 773px 386px #FFF , 1327px 1040px #FFF , 1656px 298px #FFF , 1896px 299px #FFF , 390px 527px #FFF , 861px 297px #FFF , 1652px 1884px #FFF , 1186px 185px #FFF , 96px 146px #FFF , 1241px 267px #FFF , 1552px 1208px #FFF , 1427px 782px #FFF , 176px 1873px #FFF , 578px 695px #FFF , 1399px 816px #FFF , 376px 1188px #FFF , 535px 1731px #FFF , 1016px 129px #FFF , 1311px 574px #FFF , 1275px 764px #FFF , 1458px 436px #FFF , 1625px 990px #FFF , 1402px 1586px #FFF , 750px 1485px #FFF , 1592px 1017px #FFF , 459px 200px #FFF , 1269px 1537px #FFF , 736px 498px #FFF , 1986px 1148px #FFF , 163px 256px #FFF , 1587px 1092px #FFF , 1861px 1918px #FFF , 1173px 910px #FFF , 197px 825px #FFF , 265px 353px #FFF , 1796px 611px #FFF , 948px 789px #FFF , 1237px 662px #FFF , 429px 1298px #FFF , 1401px 1151px #FFF , 576px 667px #FFF , 1115px 160px #FFF , 1038px 986px #FFF , 343px 1966px #FFF , 1589px 1041px #FFF , 1058px 559px #FFF , 143px 270px #FFF , 153px 1278px #FFF , 574px 891px #FFF , 733px 478px #FFF , 97px 21px #FFF , 469px 1954px #FFF , 1434px 1590px #FFF , 897px 1189px #FFF , 1219px 1056px #FFF , 968px 1999px #FFF , 92px 1741px #FFF , 63px 360px #FFF , 329px 1303px #FFF , 334px 1635px #FFF , 1359px 723px #FFF , 1106px 1255px #FFF , 1814px 1331px #FFF , 379px 1744px #FFF , 1009px 198px #FFF , 1764px 929px #FFF , 369px 341px #FFF , 492px 901px #FFF , 782px 914px #FFF , 3px 46px #FFF , 1820px 169px #FFF , 1167px 1523px #FFF , 418px 1680px #FFF , 365px 1915px #FFF , 1087px 388px #FFF , 710px 1069px #FFF , 1705px 1452px #FFF , 1720px 36px #FFF , 603px 1515px #FFF , 1810px 1308px #FFF , 1022px 945px #FFF , 1615px 1465px #FFF , 1437px 1695px #FFF , 67px 1126px #FFF , 1346px 1151px #FFF , 278px 1895px #FFF , 151px 1810px #FFF , 1281px 1432px #FFF , 559px 263px #FFF , 1981px 1059px #FFF , 1436px 767px #FFF , 618px 543px #FFF , 440px 1015px #FFF , 1289px 1386px #FFF , 1828px 170px #FFF , 1716px 1437px #FFF , 43px 1468px #FFF , 1395px 1188px #FFF , 1075px 1550px #FFF , 405px 1633px #FFF , 415px 1192px #FFF , 1192px 1636px #FFF , 11px 1761px #FFF , 463px 449px #FFF , 231px 1944px #FFF , 940px 1642px #FFF , 634px 1864px #FFF , 1224px 417px #FFF , 1792px 1060px #FFF , 654px 1498px #FFF , 1953px 164px #FFF , 746px 1475px #FFF , 107px 1855px #FFF , 307px 126px #FFF , 1429px 80px #FFF , 1416px 296px #FFF , 245px 1289px #FFF , 1773px 1314px #FFF , 1178px 216px #FFF , 762px 1556px #FFF , 155px 1108px #FFF , 143px 745px #FFF , 1329px 1179px #FFF , 157px 1504px #FFF , 970px 1824px #FFF , 176px 1155px #FFF , 869px 1020px #FFF , 1235px 769px #FFF , 1855px 1608px #FFF , 1244px 534px #FFF , 84px 413px #FFF , 232px 50px #FFF , 18px 174px #FFF , 861px 118px #FFF , 916px 487px #FFF , 377px 1600px #FFF , 133px 1297px #FFF , 313px 1244px #FFF , 249px 462px #FFF , 1395px 1977px #FFF , 221px 1745px #FFF , 482px 751px #FFF , 1377px 452px #FFF , 1px 1498px #FFF , 1772px 17px #FFF , 1501px 1261px #FFF , 355px 545px #FFF , 786px 1878px #FFF , 1726px 1011px #FFF , 903px 967px #FFF , 757px 1341px #FFF , 896px 1615px #FFF , 8px 657px #FFF , 507px 897px #FFF , 1361px 396px #FFF , 404px 99px #FFF , 560px 973px #FFF , 1320px 583px #FFF , 1039px 594px #FFF , 117px 1001px #FFF;
  animation: animStar 100s linear infinite;
  &:after{
      content: " ";
      position: absolute;
      top: 2000px;
      width: 2px;
      height: 2px;
      background: transparent;
      box-shadow: 748px 1941px #FFF , 1437px 521px #FFF , 1238px 843px #FFF , 554px 419px #FFF , 648px 211px #FFF , 1157px 413px #FFF , 1482px 1123px #FFF , 703px 12px #FFF , 735px 853px #FFF , 1635px 607px #FFF , 801px 1024px #FFF , 122px 1934px #FFF , 1938px 1244px #FFF , 1342px 1835px #FFF , 363px 1475px #FFF , 264px 1683px #FFF , 770px 1085px #FFF , 277px 24px #FFF , 1900px 167px #FFF , 1287px 1003px #FFF , 1552px 1041px #FFF , 307px 1040px #FFF , 1504px 1101px #FFF , 1655px 686px #FFF , 1590px 435px #FFF , 4px 913px #FFF , 1467px 363px #FFF , 1614px 1370px #FFF , 1840px 916px #FFF , 324px 50px #FFF , 5px 629px #FFF , 1024px 1790px #FFF , 1531px 1178px #FFF , 1030px 151px #FFF , 17px 1263px #FFF , 1971px 1491px #FFF , 115px 1453px #FFF , 886px 189px #FFF , 115px 690px #FFF , 601px 1363px #FFF , 773px 386px #FFF , 1327px 1040px #FFF , 1656px 298px #FFF , 1896px 299px #FFF , 390px 527px #FFF , 861px 297px #FFF , 1652px 1884px #FFF , 1186px 185px #FFF , 96px 146px #FFF , 1241px 267px #FFF , 1552px 1208px #FFF , 1427px 782px #FFF , 176px 1873px #FFF , 578px 695px #FFF , 1399px 816px #FFF , 376px 1188px #FFF , 535px 1731px #FFF , 1016px 129px #FFF , 1311px 574px #FFF , 1275px 764px #FFF , 1458px 436px #FFF , 1625px 990px #FFF , 1402px 1586px #FFF , 750px 1485px #FFF , 1592px 1017px #FFF , 459px 200px #FFF , 1269px 1537px #FFF , 736px 498px #FFF , 1986px 1148px #FFF , 163px 256px #FFF , 1587px 1092px #FFF , 1861px 1918px #FFF , 1173px 910px #FFF , 197px 825px #FFF , 265px 353px #FFF , 1796px 611px #FFF , 948px 789px #FFF , 1237px 662px #FFF , 429px 1298px #FFF , 1401px 1151px #FFF , 576px 667px #FFF , 1115px 160px #FFF , 1038px 986px #FFF , 343px 1966px #FFF , 1589px 1041px #FFF , 1058px 559px #FFF , 143px 270px #FFF , 153px 1278px #FFF , 574px 891px #FFF , 733px 478px #FFF , 97px 21px #FFF , 469px 1954px #FFF , 1434px 1590px #FFF , 897px 1189px #FFF , 1219px 1056px #FFF , 968px 1999px #FFF , 92px 1741px #FFF , 63px 360px #FFF , 329px 1303px #FFF , 334px 1635px #FFF , 1359px 723px #FFF , 1106px 1255px #FFF , 1814px 1331px #FFF , 379px 1744px #FFF , 1009px 198px #FFF , 1764px 929px #FFF , 369px 341px #FFF , 492px 901px #FFF , 782px 914px #FFF , 3px 46px #FFF , 1820px 169px #FFF , 1167px 1523px #FFF , 418px 1680px #FFF , 365px 1915px #FFF , 1087px 388px #FFF , 710px 1069px #FFF , 1705px 1452px #FFF , 1720px 36px #FFF , 603px 1515px #FFF , 1810px 1308px #FFF , 1022px 945px #FFF , 1615px 1465px #FFF , 1437px 1695px #FFF , 67px 1126px #FFF , 1346px 1151px #FFF , 278px 1895px #FFF , 151px 1810px #FFF , 1281px 1432px #FFF , 559px 263px #FFF , 1981px 1059px #FFF , 1436px 767px #FFF , 618px 543px #FFF , 440px 1015px #FFF , 1289px 1386px #FFF , 1828px 170px #FFF , 1716px 1437px #FFF , 43px 1468px #FFF , 1395px 1188px #FFF , 1075px 1550px #FFF , 405px 1633px #FFF , 415px 1192px #FFF , 1192px 1636px #FFF , 11px 1761px #FFF , 463px 449px #FFF , 231px 1944px #FFF , 940px 1642px #FFF , 634px 1864px #FFF , 1224px 417px #FFF , 1792px 1060px #FFF , 654px 1498px #FFF , 1953px 164px #FFF , 746px 1475px #FFF , 107px 1855px #FFF , 307px 126px #FFF , 1429px 80px #FFF , 1416px 296px #FFF , 245px 1289px #FFF , 1773px 1314px #FFF , 1178px 216px #FFF , 762px 1556px #FFF , 155px 1108px #FFF , 143px 745px #FFF , 1329px 1179px #FFF , 157px 1504px #FFF , 970px 1824px #FFF , 176px 1155px #FFF , 869px 1020px #FFF , 1235px 769px #FFF , 1855px 1608px #FFF , 1244px 534px #FFF , 84px 413px #FFF , 232px 50px #FFF , 18px 174px #FFF , 861px 118px #FFF , 916px 487px #FFF , 377px 1600px #FFF , 133px 1297px #FFF , 313px 1244px #FFF , 249px 462px #FFF , 1395px 1977px #FFF , 221px 1745px #FFF , 482px 751px #FFF , 1377px 452px #FFF , 1px 1498px #FFF , 1772px 17px #FFF , 1501px 1261px #FFF , 355px 545px #FFF , 786px 1878px #FFF , 1726px 1011px #FFF , 903px 967px #FFF , 757px 1341px #FFF , 896px 1615px #FFF , 8px 657px #FFF , 507px 897px #FFF , 1361px 396px #FFF , 404px 99px #FFF , 560px 973px #FFF , 1320px 583px #FFF , 1039px 594px #FFF , 117px 1001px #FFF;
  }

  @keyframes animStar{
    from{
      transform: translateY(0px)
    } to {
        transform: translateY(-2000px)
      }
  }
`;
const Stars3 = styled.div`
  $shadows-big:    multiple-box-shadow(100);
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1934px 96px #FFF , 333px 350px #FFF , 42px 1796px #FFF , 630px 76px #FFF , 1389px 718px #FFF , 36px 781px #FFF , 888px 1555px #FFF , 396px 1124px #FFF , 423px 516px #FFF , 673px 873px #FFF , 404px 117px #FFF , 1085px 1772px #FFF , 1924px 1413px #FFF , 670px 1359px #FFF , 966px 1693px #FFF , 1754px 1286px #FFF , 405px 1421px #FFF , 1890px 957px #FFF , 1422px 1343px #FFF , 1813px 1920px #FFF , 222px 1084px #FFF , 1024px 383px #FFF , 1561px 1706px #FFF , 1211px 1202px #FFF , 1434px 850px #FFF , 795px 108px #FFF , 1707px 1304px #FFF , 1702px 1303px #FFF , 1281px 1092px #FFF , 1119px 1984px #FFF , 195px 59px #FFF , 949px 857px #FFF , 871px 1143px #FFF , 354px 710px #FFF , 1809px 831px #FFF , 397px 1226px #FFF , 1773px 651px #FFF , 610px 376px #FFF , 1328px 1319px #FFF , 169px 1916px #FFF , 1296px 1738px #FFF , 626px 1300px #FFF , 944px 219px #FFF , 506px 1465px #FFF , 1340px 1041px #FFF , 1828px 940px #FFF , 1006px 441px #FFF , 449px 886px #FFF , 1050px 548px #FFF , 28px 32px #FFF , 1586px 823px #FFF , 1612px 1008px #FFF , 1240px 450px #FFF , 1294px 936px #FFF , 1067px 472px #FFF , 1162px 1167px #FFF , 1691px 1717px #FFF , 1295px 1090px #FFF , 1479px 1765px #FFF , 1154px 1808px #FFF , 764px 1202px #FFF , 189px 792px #FFF , 375px 681px #FFF , 1841px 465px #FFF , 782px 459px #FFF , 37px 1633px #FFF , 1418px 1615px #FFF , 756px 1485px #FFF , 931px 1028px #FFF , 444px 1955px #FFF , 1965px 1053px #FFF , 1813px 247px #FFF , 1021px 44px #FFF , 1342px 1558px #FFF , 1194px 45px #FFF , 1692px 72px #FFF , 998px 4px #FFF , 961px 524px #FFF , 373px 364px #FFF , 1121px 57px #FFF , 707px 223px #FFF , 241px 1960px #FFF , 1327px 1537px #FFF , 432px 1777px #FFF , 1816px 332px #FFF , 1565px 133px #FFF , 1657px 1976px #FFF , 1987px 307px #FFF , 214px 41px #FFF , 17px 1076px #FFF , 1919px 951px #FFF , 469px 502px #FFF , 745px 1729px #FFF , 289px 213px #FFF , 234px 1400px #FFF , 1995px 1054px #FFF , 1749px 1486px #FFF , 1171px 1964px #FFF , 1187px 1594px #FFF , 1248px 1996px #FFF;
  animation: animStar 150s linear infinite;
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: 1934px 96px #FFF , 333px 350px #FFF , 42px 1796px #FFF , 630px 76px #FFF , 1389px 718px #FFF , 36px 781px #FFF , 888px 1555px #FFF , 396px 1124px #FFF , 423px 516px #FFF , 673px 873px #FFF , 404px 117px #FFF , 1085px 1772px #FFF , 1924px 1413px #FFF , 670px 1359px #FFF , 966px 1693px #FFF , 1754px 1286px #FFF , 405px 1421px #FFF , 1890px 957px #FFF , 1422px 1343px #FFF , 1813px 1920px #FFF , 222px 1084px #FFF , 1024px 383px #FFF , 1561px 1706px #FFF , 1211px 1202px #FFF , 1434px 850px #FFF , 795px 108px #FFF , 1707px 1304px #FFF , 1702px 1303px #FFF , 1281px 1092px #FFF , 1119px 1984px #FFF , 195px 59px #FFF , 949px 857px #FFF , 871px 1143px #FFF , 354px 710px #FFF , 1809px 831px #FFF , 397px 1226px #FFF , 1773px 651px #FFF , 610px 376px #FFF , 1328px 1319px #FFF , 169px 1916px #FFF , 1296px 1738px #FFF , 626px 1300px #FFF , 944px 219px #FFF , 506px 1465px #FFF , 1340px 1041px #FFF , 1828px 940px #FFF , 1006px 441px #FFF , 449px 886px #FFF , 1050px 548px #FFF , 28px 32px #FFF , 1586px 823px #FFF , 1612px 1008px #FFF , 1240px 450px #FFF , 1294px 936px #FFF , 1067px 472px #FFF , 1162px 1167px #FFF , 1691px 1717px #FFF , 1295px 1090px #FFF , 1479px 1765px #FFF , 1154px 1808px #FFF , 764px 1202px #FFF , 189px 792px #FFF , 375px 681px #FFF , 1841px 465px #FFF , 782px 459px #FFF , 37px 1633px #FFF , 1418px 1615px #FFF , 756px 1485px #FFF , 931px 1028px #FFF , 444px 1955px #FFF , 1965px 1053px #FFF , 1813px 247px #FFF , 1021px 44px #FFF , 1342px 1558px #FFF , 1194px 45px #FFF , 1692px 72px #FFF , 998px 4px #FFF , 961px 524px #FFF , 373px 364px #FFF , 1121px 57px #FFF , 707px 223px #FFF , 241px 1960px #FFF , 1327px 1537px #FFF , 432px 1777px #FFF , 1816px 332px #FFF , 1565px 133px #FFF , 1657px 1976px #FFF , 1987px 307px #FFF , 214px 41px #FFF , 17px 1076px #FFF , 1919px 951px #FFF , 469px 502px #FFF , 745px 1729px #FFF , 289px 213px #FFF , 234px 1400px #FFF , 1995px 1054px #FFF , 1749px 1486px #FFF , 1171px 1964px #FFF , 1187px 1594px #FFF , 1248px 1996px #FFF;
  }

  @keyframes animStar{
    from{
      transform: translateY(0px)
    } to {
        transform: translateY(-2000px)
    }
  }
`;

const Underline = styled.div`
  height:2px;
  width:220px;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: -200%;
`;

const MeetCraltTextContainer = styled.div`
  width: 220px;
  margin-left: 10%;
  position: relative;
`;
const MeetCraltText = styled.h3`
  opacity:0;
  color: #fff;
  font-size: 24px;
  margin: 0;
  margin-top: 25px;
  margin-bottom: 10px;
`;
const NameText = styled(MeetCraltText)`
  margin-top: 10px;
  margin-bottom: 0;
`;

const CraltContainer = styled.div`
    height: 100%;
`;

const TurtleImageSvg = styled.img`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateY(-50%) translateX(50%);
`;

const TriggerCraltRotation = styled.div`
`;

const Invert = styled.div`
  /** make the content sticky **/
  position: sticky;

  /** blend the content with the contrast effect **/
  mix-blend-mode: difference;

  /** set the minimum height of the section **/
  min-height: 100vh;
`;

const InitialScreenContainer = styled.div`
  //background-color: midnightblue;
  height: 100vh;
  //background-image: -webkit-linear-gradient(30deg, #013A6B 50%, #004E95 50%);
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
`;


export default InitialScreen
