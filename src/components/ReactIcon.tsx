import React from 'react'
import styled from "styled-components";

const ReactIcon = () =>
    <SpinSvg width="121" height="109" viewBox="0 0 121 109" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_312_7477" fill="white">
            <path d="M99.2709 35.6425C97.989 35.2049 96.6979 34.7974 95.3975 34.42C95.6131 33.5433 95.812 32.6615 95.9942 31.7747C98.9275 17.5212 97.0096 6.0383 90.4637 2.25825C84.1961 -1.369 73.9172 2.41105 63.5481 11.4491C62.5286 12.3409 61.53 13.2594 60.5522 14.2046C59.9004 13.5767 59.2318 12.9621 58.5466 12.3609C47.6786 2.69662 36.7855 -1.37401 30.2471 2.41857C23.9795 6.05333 22.1168 16.8474 24.7567 30.3569C25.0208 31.6929 25.3174 33.0231 25.6467 34.3474C24.1049 34.7858 22.6157 35.2542 21.1917 35.7502C8.46597 40.1966 0.328125 47.168 0.328125 54.3974C0.328125 61.8674 9.06265 69.3574 22.3324 73.8989C23.4088 74.2647 24.4951 74.6045 25.5916 74.9185C25.2356 76.3363 24.9205 77.77 24.6464 79.2196C22.1394 92.4961 24.0949 103.035 30.3499 106.647C36.8106 110.377 47.6485 106.544 58.2131 97.3007C59.0488 96.5692 59.8845 95.7969 60.7202 94.9836C61.7765 96.0039 62.8629 96.9942 63.9793 97.9545C74.2081 106.767 84.3089 110.327 90.5539 106.704C97.0096 102.962 99.108 91.6394 96.3828 77.8643C96.1739 76.8122 95.9332 75.7384 95.6608 74.6429C96.4229 74.4175 97.1692 74.1845 97.8996 73.944C111.688 69.3674 120.671 61.9676 120.671 54.405C120.666 47.1404 112.267 40.1239 99.2709 35.6425ZM66.9301 15.3319C75.8126 7.5889 84.1159 4.53279 87.9015 6.71716C91.9303 9.04431 93.4972 18.4281 90.9651 30.7352C90.798 31.5368 90.6175 32.3359 90.4236 33.1324C85.1228 31.9277 79.7474 31.0775 74.3334 30.5874C71.2335 26.1256 67.8354 21.8783 64.1623 17.8745C65.0615 17.0027 65.9825 16.1552 66.9251 15.3319H66.9301ZM35.8604 60.5748C36.9484 62.679 38.0858 64.7573 39.2725 66.8098C40.4809 68.9039 41.7402 70.9672 43.0506 72.9996C39.3253 72.5949 35.6233 71.9988 31.9594 71.2136C33.0224 67.7767 34.3311 64.2071 35.8604 60.5748ZM35.8604 48.4681C34.3562 44.9135 33.0826 41.4165 32.0371 38.0398C35.4718 37.2707 39.1321 36.642 42.9478 36.166C41.6692 38.16 40.4391 40.1832 39.2574 42.2356C38.0758 44.2881 36.9409 46.3656 35.8529 48.4681H35.8604ZM38.5931 54.5227C40.1775 51.2211 41.884 47.983 43.7124 44.8083C45.5392 41.6353 47.4839 38.5349 49.5463 35.5072C53.1264 35.2366 56.7967 35.0939 60.5046 35.0939C64.2125 35.0939 67.9054 35.2367 71.4829 35.5097C73.5236 38.5307 75.4566 41.6202 77.2817 44.7782C79.1068 47.9362 80.8358 51.1593 82.4687 54.4475C80.8576 57.7608 79.1327 61.0123 77.2942 64.202C75.4708 67.375 73.5487 70.4846 71.528 73.5307C67.9555 73.7812 64.2576 73.919 60.4971 73.919C56.7365 73.919 53.1088 73.8012 49.6015 73.5733C47.524 70.5355 45.5635 67.4218 43.72 64.2321C41.8764 61.0424 40.165 57.8059 38.5855 54.5227H38.5931ZM81.7442 66.7747C82.9559 64.6738 84.1192 62.5454 85.234 60.3894C86.7622 63.8516 88.1111 67.39 89.2754 70.9906C85.5684 71.8247 81.8202 72.4643 78.0463 72.9069C79.3199 70.8879 80.5525 68.8438 81.7442 66.7747ZM85.1839 48.4706C84.0741 46.358 82.92 44.2705 81.7216 42.2081C80.5517 40.174 79.3324 38.165 78.0639 36.181C81.9022 36.667 85.585 37.3133 89.0372 38.1024C87.9272 41.6207 86.6412 45.0812 85.1839 48.4706ZM60.5547 21.5543C63.0581 24.2875 65.4219 27.1452 67.6371 30.1164C62.8988 29.891 58.1572 29.891 53.4122 30.1164C55.7512 27.0252 58.1455 24.157 60.5547 21.5543ZM32.8344 6.86996C36.8607 4.5353 45.7632 7.87196 55.147 16.2061C55.7462 16.7397 56.3504 17.2983 56.9521 17.877C53.2601 21.8803 49.838 26.1239 46.7083 30.5798C41.3063 31.0662 35.9416 31.9029 30.6483 33.0849C30.3424 31.8557 30.0666 30.6183 29.8209 29.3724C27.5521 17.7918 29.0538 9.06184 32.8344 6.86996ZM26.9654 69.9585C25.9626 69.673 24.9723 69.3632 23.9946 69.0292C18.1281 67.0252 13.282 64.41 9.95515 61.5618C6.97679 59.0092 5.46755 56.4616 5.46755 54.3974C5.46755 50.0112 12.0009 44.415 22.8965 40.6199C24.2653 40.144 25.6459 39.7089 27.0381 39.3148C28.6563 44.5109 30.616 49.5946 32.9046 54.5327C30.5888 59.5391 28.6048 64.6921 26.9654 69.9585ZM54.8261 93.4229C50.1555 97.5111 45.4774 100.409 41.3533 101.87C37.6479 103.18 34.6971 103.218 32.9146 102.188C29.119 99.9961 27.5395 91.5317 29.6931 80.179C29.9488 78.843 30.2413 77.507 30.5705 76.171C35.9169 77.3217 41.3354 78.1076 46.7886 78.5232C49.9488 83.0024 53.3992 87.27 57.1176 91.2987C56.3705 92.0327 55.6058 92.7391 54.8261 93.4229ZM60.6976 87.6063C58.2608 84.9736 55.8289 82.0602 53.4573 78.929C55.7621 79.0191 58.1087 79.0642 60.4971 79.0642C62.9489 79.0642 65.3757 79.0116 67.7675 78.9039C65.5603 81.9228 63.2006 84.8274 60.6976 87.6063ZM91.9153 94.7681C91.1983 98.6359 89.7567 101.216 87.9742 102.248C84.181 104.447 76.0708 101.589 67.3262 94.0517C66.3234 93.19 65.3206 92.2656 64.3002 91.2962C67.9462 87.2518 71.3157 82.9669 74.386 78.4706C79.8694 78.0064 85.3142 77.1652 90.6818 75.953C90.9275 76.945 91.1448 77.9169 91.3336 78.8689C92.5395 84.956 92.7125 90.462 91.9153 94.7681ZM96.2775 69.0567C95.6207 69.2747 94.9438 69.4851 94.2568 69.6905C92.5737 64.4699 90.5375 59.3697 88.1622 54.425C90.4484 49.5463 92.4049 44.52 94.0187 39.3799C95.2496 39.7381 96.4455 40.1139 97.5962 40.5122C108.732 44.3499 115.527 50.0312 115.527 54.3974C115.527 59.0568 108.188 65.1038 96.2775 69.0567Z"/>
        </mask>
        <path d="M99.2709 35.6425C97.989 35.2049 96.6979 34.7974 95.3975 34.42C95.6131 33.5433 95.812 32.6615 95.9942 31.7747C98.9275 17.5212 97.0096 6.0383 90.4637 2.25825C84.1961 -1.369 73.9172 2.41105 63.5481 11.4491C62.5286 12.3409 61.53 13.2594 60.5522 14.2046C59.9004 13.5767 59.2318 12.9621 58.5466 12.3609C47.6786 2.69662 36.7855 -1.37401 30.2471 2.41857C23.9795 6.05333 22.1168 16.8474 24.7567 30.3569C25.0208 31.6929 25.3174 33.0231 25.6467 34.3474C24.1049 34.7858 22.6157 35.2542 21.1917 35.7502C8.46597 40.1966 0.328125 47.168 0.328125 54.3974C0.328125 61.8674 9.06265 69.3574 22.3324 73.8989C23.4088 74.2647 24.4951 74.6045 25.5916 74.9185C25.2356 76.3363 24.9205 77.77 24.6464 79.2196C22.1394 92.4961 24.0949 103.035 30.3499 106.647C36.8106 110.377 47.6485 106.544 58.2131 97.3007C59.0488 96.5692 59.8845 95.7969 60.7202 94.9836C61.7765 96.0039 62.8629 96.9942 63.9793 97.9545C74.2081 106.767 84.3089 110.327 90.5539 106.704C97.0096 102.962 99.108 91.6394 96.3828 77.8643C96.1739 76.8122 95.9332 75.7384 95.6608 74.6429C96.4229 74.4175 97.1692 74.1845 97.8996 73.944C111.688 69.3674 120.671 61.9676 120.671 54.405C120.666 47.1404 112.267 40.1239 99.2709 35.6425ZM66.9301 15.3319C75.8126 7.5889 84.1159 4.53279 87.9015 6.71716C91.9303 9.04431 93.4972 18.4281 90.9651 30.7352C90.798 31.5368 90.6175 32.3359 90.4236 33.1324C85.1228 31.9277 79.7474 31.0775 74.3334 30.5874C71.2335 26.1256 67.8354 21.8783 64.1623 17.8745C65.0615 17.0027 65.9825 16.1552 66.9251 15.3319H66.9301ZM35.8604 60.5748C36.9484 62.679 38.0858 64.7573 39.2725 66.8098C40.4809 68.9039 41.7402 70.9672 43.0506 72.9996C39.3253 72.5949 35.6233 71.9988 31.9594 71.2136C33.0224 67.7767 34.3311 64.2071 35.8604 60.5748ZM35.8604 48.4681C34.3562 44.9135 33.0826 41.4165 32.0371 38.0398C35.4718 37.2707 39.1321 36.642 42.9478 36.166C41.6692 38.16 40.4391 40.1832 39.2574 42.2356C38.0758 44.2881 36.9409 46.3656 35.8529 48.4681H35.8604ZM38.5931 54.5227C40.1775 51.2211 41.884 47.983 43.7124 44.8083C45.5392 41.6353 47.4839 38.5349 49.5463 35.5072C53.1264 35.2366 56.7967 35.0939 60.5046 35.0939C64.2125 35.0939 67.9054 35.2367 71.4829 35.5097C73.5236 38.5307 75.4566 41.6202 77.2817 44.7782C79.1068 47.9362 80.8358 51.1593 82.4687 54.4475C80.8576 57.7608 79.1327 61.0123 77.2942 64.202C75.4708 67.375 73.5487 70.4846 71.528 73.5307C67.9555 73.7812 64.2576 73.919 60.4971 73.919C56.7365 73.919 53.1088 73.8012 49.6015 73.5733C47.524 70.5355 45.5635 67.4218 43.72 64.2321C41.8764 61.0424 40.165 57.8059 38.5855 54.5227H38.5931ZM81.7442 66.7747C82.9559 64.6738 84.1192 62.5454 85.234 60.3894C86.7622 63.8516 88.1111 67.39 89.2754 70.9906C85.5684 71.8247 81.8202 72.4643 78.0463 72.9069C79.3199 70.8879 80.5525 68.8438 81.7442 66.7747ZM85.1839 48.4706C84.0741 46.358 82.92 44.2705 81.7216 42.2081C80.5517 40.174 79.3324 38.165 78.0639 36.181C81.9022 36.667 85.585 37.3133 89.0372 38.1024C87.9272 41.6207 86.6412 45.0812 85.1839 48.4706ZM60.5547 21.5543C63.0581 24.2875 65.4219 27.1452 67.6371 30.1164C62.8988 29.891 58.1572 29.891 53.4122 30.1164C55.7512 27.0252 58.1455 24.157 60.5547 21.5543ZM32.8344 6.86996C36.8607 4.5353 45.7632 7.87196 55.147 16.2061C55.7462 16.7397 56.3504 17.2983 56.9521 17.877C53.2601 21.8803 49.838 26.1239 46.7083 30.5798C41.3063 31.0662 35.9416 31.9029 30.6483 33.0849C30.3424 31.8557 30.0666 30.6183 29.8209 29.3724C27.5521 17.7918 29.0538 9.06184 32.8344 6.86996ZM26.9654 69.9585C25.9626 69.673 24.9723 69.3632 23.9946 69.0292C18.1281 67.0252 13.282 64.41 9.95515 61.5618C6.97679 59.0092 5.46755 56.4616 5.46755 54.3974C5.46755 50.0112 12.0009 44.415 22.8965 40.6199C24.2653 40.144 25.6459 39.7089 27.0381 39.3148C28.6563 44.5109 30.616 49.5946 32.9046 54.5327C30.5888 59.5391 28.6048 64.6921 26.9654 69.9585ZM54.8261 93.4229C50.1555 97.5111 45.4774 100.409 41.3533 101.87C37.6479 103.18 34.6971 103.218 32.9146 102.188C29.119 99.9961 27.5395 91.5317 29.6931 80.179C29.9488 78.843 30.2413 77.507 30.5705 76.171C35.9169 77.3217 41.3354 78.1076 46.7886 78.5232C49.9488 83.0024 53.3992 87.27 57.1176 91.2987C56.3705 92.0327 55.6058 92.7391 54.8261 93.4229ZM60.6976 87.6063C58.2608 84.9736 55.8289 82.0602 53.4573 78.929C55.7621 79.0191 58.1087 79.0642 60.4971 79.0642C62.9489 79.0642 65.3757 79.0116 67.7675 78.9039C65.5603 81.9228 63.2006 84.8274 60.6976 87.6063ZM91.9153 94.7681C91.1983 98.6359 89.7567 101.216 87.9742 102.248C84.181 104.447 76.0708 101.589 67.3262 94.0517C66.3234 93.19 65.3206 92.2656 64.3002 91.2962C67.9462 87.2518 71.3157 82.9669 74.386 78.4706C79.8694 78.0064 85.3142 77.1652 90.6818 75.953C90.9275 76.945 91.1448 77.9169 91.3336 78.8689C92.5395 84.956 92.7125 90.462 91.9153 94.7681ZM96.2775 69.0567C95.6207 69.2747 94.9438 69.4851 94.2568 69.6905C92.5737 64.4699 90.5375 59.3697 88.1622 54.425C90.4484 49.5463 92.4049 44.52 94.0187 39.3799C95.2496 39.7381 96.4455 40.1139 97.5962 40.5122C108.732 44.3499 115.527 50.0312 115.527 54.3974C115.527 59.0568 108.188 65.1038 96.2775 69.0567Z" fill="#E8FDFD" stroke="#324848" stroke-width="3" stroke-linejoin="round" mask="url(#path-1-inside-1_312_7477)"/>
        <path d="M60.502 63.6589L60.4989 63.6589C59.2823 63.6575 58.0779 63.4165 56.9545 62.9498C55.8312 62.483 54.8111 61.7997 53.9524 60.9389C53.0937 60.0781 52.4132 59.0566 51.9499 57.9331C51.4866 56.8095 51.2494 55.6057 51.252 54.3906V54.3874C51.252 52.5527 51.7969 50.7591 52.8178 49.2338C53.8387 47.7085 55.2898 46.52 56.9875 45.819C58.6851 45.118 60.5529 44.9361 62.3541 45.2964C64.1554 45.6566 65.8089 46.5429 67.1055 47.8426C68.4021 49.1424 69.2833 50.7972 69.6379 52.5974C69.9925 54.3977 69.8044 56.2626 69.0976 57.956C68.3907 59.6495 67.1967 61.0955 65.6665 62.1108C64.1364 63.1261 62.339 63.6649 60.502 63.6589Z" fill="#E8FDFD" stroke="#324848" stroke-width="3" stroke-linejoin="round"/>
    </SpinSvg>;

const SpinSvg = styled.svg`
  animation: App-logo-spin infinite 20s linear;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default ReactIcon