const Icon = (props) => {
    const IconList = {
        withdrawal: (
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.9703 13.5395C48.3252 14.9326 48.395 16.3817 48.177 17.7998H27.0583C26.8403 16.3817 26.9101 14.9326 27.265 13.5395C27.6538 12.0134 28.3752 10.5921 29.3775 9.37741C30.3799 8.16273 31.6384 7.18467 33.0629 6.51325C34.4875 5.84183 36.0428 5.49365 37.6177 5.49365C39.1925 5.49365 40.7479 5.84183 42.1724 6.51325C43.597 7.18467 44.8554 8.16273 45.8578 9.37741C46.8601 10.5921 47.5815 12.0134 47.9703 13.5395Z" stroke="#085BF7" />
                <path d="M58.3174 36.2348C58.4143 36.3317 58.4687 36.4631 58.4687 36.6002V42.7002C58.4687 42.8372 58.4143 42.9686 58.3174 43.0655C58.2205 43.1624 58.0891 43.2168 57.9521 43.2168H51.8521C50.9061 43.2168 49.9989 42.8411 49.3301 42.1722C48.6612 41.5033 48.2854 40.5961 48.2854 39.6502C48.2854 38.7042 48.6612 37.797 49.3301 37.1281C49.9989 36.4593 50.9061 36.0835 51.8521 36.0835H57.9521C58.0891 36.0835 58.2205 36.1379 58.3174 36.2348L58.671 35.8813L58.3174 36.2348Z" stroke="#085BF7" />
                <path d="M23.8999 16.2675L23.9 16.2708C23.9042 16.7821 23.937 17.2926 23.998 17.8H12.7324C11.6789 15.6014 11.4086 13.105 11.9723 10.7269C12.5593 8.25036 14.0121 6.06517 16.0684 4.56552C18.1248 3.06586 20.6494 2.35049 23.1869 2.54846C25.5248 2.73087 27.7318 3.67763 29.4715 5.23374C27.8282 6.4417 26.4738 8.00396 25.5106 9.80776C24.4494 11.7953 23.8961 14.0144 23.8999 16.2675Z" stroke="#085BF7" />
                <path d="M51.3354 16.2707H51.3354L51.3354 16.2673C51.3386 14.3339 50.9305 12.425 50.1418 10.6665H54.9021C55.0391 10.6665 55.1706 10.7209 55.2674 10.8178C55.3643 10.9147 55.4188 11.0461 55.4188 11.1832V17.7998H51.2374C51.2984 17.2925 51.3311 16.782 51.3354 16.2707Z" stroke="#085BF7" />
                <path d="M16.7813 27.4498C16.7813 28.2967 16.0948 28.9832 15.2479 28.9832C14.4011 28.9832 13.7146 28.2967 13.7146 27.4498C13.7146 26.603 14.4011 25.9165 15.2479 25.9165C16.0948 25.9165 16.7813 26.603 16.7813 27.4498Z" stroke="#085BF7" />
                <path d="M24.9177 39.6495C24.9177 40.4964 24.2312 41.1829 23.3844 41.1829C22.5376 41.1829 21.8511 40.4964 21.8511 39.6495C21.8511 38.8027 22.5376 38.1162 23.3844 38.1162C24.2312 38.1162 24.9177 38.8027 24.9177 39.6495Z" stroke="#085BF7" />
                <path d="M10.3029 47.4985C10.1109 47.2695 9.87108 47.0852 9.60024 46.9587C9.3294 46.8323 9.03414 46.7667 8.73523 46.7665H2.0354V54.8999C2.0354 55.9784 2.46385 57.0128 3.2265 57.7754C3.98915 58.5381 5.02352 58.9665 6.10207 58.9665H55.9187C56.1884 58.9665 56.447 58.8594 56.6376 58.6688C56.8283 58.4781 56.9354 58.2195 56.9354 57.9499V45.7499H51.8521C50.2342 45.7499 48.6827 45.1072 47.5387 43.9632C46.3947 42.8193 45.7521 41.2677 45.7521 39.6499C45.7521 38.0321 46.3947 36.4805 47.5387 35.3365C48.6827 34.1926 50.2342 33.5499 51.8521 33.5499H56.9354V21.3499C56.9354 21.0802 56.8283 20.8216 56.6376 20.631C56.447 20.4403 56.1884 20.3332 55.9187 20.3332H6.31557C4.73788 20.3329 3.21506 19.7542 2.0354 18.7065V32.5332H8.73523C9.03487 32.533 9.3308 32.467 9.60218 32.34C9.87357 32.213 10.1138 32.028 10.306 31.7982L11.956 29.8136C11.3622 29.001 11.0856 27.9994 11.1782 26.9972C11.2708 25.9949 11.7262 25.061 12.4589 24.3709C13.1916 23.6808 14.1511 23.2821 15.1571 23.2496C16.1631 23.2171 17.1463 23.5531 17.922 24.1945C18.6976 24.8359 19.2124 25.7384 19.3695 26.7326C19.5266 27.7268 19.3152 28.7441 18.775 29.5934C18.2349 30.4427 17.4032 31.0655 16.4362 31.3447C15.4692 31.624 14.4335 31.5405 13.5237 31.1099L11.8656 33.1025C11.4829 33.561 11.0042 33.9297 10.4632 34.1827C9.9223 34.4357 9.3324 34.5667 8.73523 34.5665H2.0354V38.6332H19.4631C19.7106 37.6748 20.299 36.8396 21.1182 36.2841C21.9375 35.7286 22.9311 35.4909 23.9131 35.6156C24.895 35.7403 25.7977 36.2189 26.452 36.9616C27.1063 37.7043 27.4673 38.6601 27.4673 39.6499C27.4673 40.6397 27.1063 41.5955 26.452 42.3382C25.7977 43.0809 24.895 43.5594 23.9131 43.6841C22.9311 43.8089 21.9375 43.5712 21.1182 43.0157C20.299 42.4601 19.7106 41.6249 19.4631 40.6665H2.0354V44.7332H8.73523C9.33182 44.7326 9.92124 44.8632 10.4617 45.1159C11.0021 45.3686 11.4804 45.737 11.8625 46.1952L13.5237 48.1899C14.0623 47.9271 14.6528 47.7882 15.2521 47.7832C16.172 47.7771 17.0672 48.081 17.7933 48.6459C18.5194 49.2108 19.0341 50.0038 19.2544 50.897C19.4746 51.7902 19.3877 52.7316 19.0074 53.5693C18.6272 54.407 17.9759 55.0923 17.1586 55.5146C16.3413 55.9369 15.4055 56.0715 14.5023 55.8969C13.599 55.7223 12.7809 55.2486 12.1799 54.5521C11.5788 53.8556 11.2298 52.977 11.1892 52.0579C11.1486 51.1389 11.4187 50.2329 11.956 49.4861L10.3029 47.4985Z" fill="url(#paint0_linear_2092_554)" />
                <path d="M16.7813 51.8502C16.7813 52.6971 16.0948 53.3836 15.2479 53.3836C14.4011 53.3836 13.7146 52.6971 13.7146 51.8502C13.7146 51.0034 14.4011 50.3169 15.2479 50.3169C16.0948 50.3169 16.7813 51.0034 16.7813 51.8502Z" stroke="#085BF7" />
                <path d="M2.53109 14.2558L2.53125 14.2558V14.2433V14.2342C2.53526 13.2892 2.91242 12.3841 3.58064 11.7159C4.24885 11.0477 5.15398 10.6705 6.09894 10.6665H8.89632C8.43434 13.0498 8.61896 15.5131 9.42995 17.7998H6.31142V17.7998L6.30248 17.7999C5.38443 17.8163 4.49265 17.4932 3.79818 16.8926C3.10594 16.2938 2.65835 15.4613 2.54057 14.5539C2.53177 14.4548 2.52861 14.3553 2.53109 14.2558Z" stroke="#085BF7" />
                <defs>
                    <linearGradient id="paint0_linear_2092_554" x1="2.0354" y1="26.6007" x2="56.7917" y2="30.3909" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#6494EE" />
                        <stop offset="1" stop-color="#085BF7" />
                    </linearGradient>
                </defs>
            </svg>
        ),

        management: (
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.1008 5.7998C23.0243 5.7998 20.0738 7.02194 17.8983 9.19737C15.7229 11.3728 14.5008 14.3233 14.5008 17.3998C14.5008 20.4763 15.7229 23.4268 17.8983 25.6022C20.0738 27.7777 23.0243 28.9998 26.1008 28.9998C29.1773 28.9998 32.1278 27.7777 34.3032 25.6022C36.4786 23.4268 37.7008 20.4763 37.7008 17.3998C37.7008 14.3233 36.4786 11.3728 34.3032 9.19737C32.1278 7.02194 29.1773 5.7998 26.1008 5.7998ZM11.6269 31.8998C10.8631 31.8967 10.1063 32.0445 9.39975 32.3346C8.69322 32.6246 8.0509 33.0513 7.50963 33.5902C6.96836 34.129 6.53879 34.7694 6.24554 35.4746C5.9523 36.1799 5.80116 36.936 5.80078 37.6998C5.80078 42.6037 8.21648 46.3012 11.9923 48.7111C15.7101 51.0804 20.7213 52.1998 26.1008 52.1998C27.2898 52.1998 28.4672 52.1447 29.6098 52.0345C27.3331 49.2053 26.0946 45.6813 26.1008 42.0498C26.1008 38.1928 27.4696 34.6548 29.7461 31.8998H11.6269ZM30.8423 40.3678C31.5912 40.1763 32.2942 39.8369 32.91 39.3698C33.5259 38.9027 34.0422 38.3172 34.4285 37.6477C34.8149 36.9782 35.0635 36.2382 35.1598 35.4713C35.2561 34.7043 35.1981 33.9258 34.9893 33.1816L34.5398 31.5663C35.2764 31.0008 36.0739 30.5165 36.9207 30.125L37.9009 31.1632C38.4429 31.7383 39.0967 32.1966 39.8222 32.5099C40.5476 32.8232 41.3295 32.985 42.1198 32.9852C42.91 32.9855 43.692 32.8243 44.4177 32.5115C45.1434 32.1986 45.7975 31.7408 46.3399 31.1661L47.2795 30.1685C48.1437 30.5745 48.9557 31.082 49.701 31.6707L49.3356 32.8974C49.1093 33.6544 49.0402 34.4496 49.1323 35.2343C49.2244 36.019 49.4758 36.7766 49.8712 37.4606C50.2666 38.1447 50.7975 38.7407 51.4315 39.2122C52.0655 39.6837 52.7891 40.0207 53.558 40.2025L54.5701 40.4403C54.6864 41.4195 54.6961 42.4083 54.5991 43.3896L53.2651 43.7289C52.5156 43.9201 51.812 44.2593 51.1956 44.7265C50.5792 45.1936 50.0624 45.7794 49.6757 46.4493C49.289 47.1191 49.0403 47.8596 48.944 48.627C48.8477 49.3944 48.9059 50.1734 49.1152 50.918L49.5676 52.5304C48.8288 53.0984 48.0293 53.5827 47.1838 53.9746L46.2036 52.9364C45.6618 52.3616 45.0083 51.9035 44.2832 51.5902C43.5581 51.2769 42.7767 51.115 41.9868 51.1145C41.1969 51.1139 40.4152 51.2747 39.6897 51.587C38.9641 51.8993 38.31 52.3565 37.7675 52.9306L36.825 53.9282C35.9633 53.5212 35.1509 53.0172 34.4035 52.426L34.7718 51.2022C34.9985 50.445 35.068 49.6495 34.9761 48.8645C34.8842 48.0794 34.6329 47.3215 34.2375 46.6371C33.8421 45.9527 33.3109 45.3564 32.6767 44.8847C32.0425 44.4131 31.3186 44.076 30.5494 43.8942L29.5344 43.6564C29.4186 42.6782 29.4088 41.6903 29.5054 40.71L30.8423 40.3678ZM44.9508 42.0498C44.9508 41.2807 44.6452 40.543 44.1014 39.9992C43.5575 39.4553 42.8199 39.1498 42.0508 39.1498C41.2817 39.1498 40.544 39.4553 40.0002 39.9992C39.4563 40.543 39.1508 41.2807 39.1508 42.0498C39.1508 42.8189 39.4563 43.5566 40.0002 44.1004C40.544 44.6443 41.2817 44.9498 42.0508 44.9498C42.8199 44.9498 43.5575 44.6443 44.1014 44.1004C44.6452 43.5566 44.9508 42.8189 44.9508 42.0498Z" fill="url(#paint0_linear_2092_569)" />
                <path d="M46.7039 31.5089L46.7035 31.5093C46.1144 32.1335 45.4039 32.6308 44.6156 32.9706C43.8273 33.3104 42.978 33.4855 42.1196 33.4852C41.2612 33.4849 40.4119 33.3092 39.6239 32.9689C38.836 32.6286 38.126 32.131 37.5373 31.5065L46.7039 31.5089ZM46.7039 31.5089L47.3909 30.7795C47.9985 31.0885 48.5781 31.4505 49.1236 31.8577L48.8565 32.7542C48.6108 33.5765 48.5356 34.4403 48.6357 35.2926C48.7357 36.145 49.0089 36.9679 49.4383 37.7109C49.8678 38.4539 50.4445 39.1013 51.1331 39.6134C51.8218 40.1255 52.6078 40.4916 53.4429 40.6891L53.4436 40.6892L54.1101 40.8458C54.1757 41.5597 54.1828 42.2777 54.1312 42.9927L53.1418 43.2443L53.1415 43.2444C52.3274 43.4521 51.5631 43.8205 50.8936 44.328C50.224 44.8354 49.6627 45.4717 49.2427 46.1993C48.8227 46.9269 48.5524 47.7312 48.4479 48.5648C48.3433 49.3983 48.4065 50.2443 48.6338 51.0531C48.6338 51.0531 48.6338 51.0532 48.6338 51.0533L48.9935 52.3352C48.4569 52.7245 47.8893 53.0691 47.2963 53.3655L46.5674 52.5935L46.7039 31.5089ZM36.8079 30.7339L37.537 31.5061L46.5671 52.5932C45.9787 51.9689 45.269 51.4714 44.4816 51.1312C43.6939 50.7909 42.8451 50.6151 41.9871 50.6145C41.1291 50.6139 40.2801 50.7885 39.492 51.1278C38.7039 51.467 37.9934 51.9636 37.4041 52.5872L37.404 52.5872L36.7145 53.3171C36.1074 53.0077 35.5277 52.6473 34.9817 52.2398L35.2506 51.3463L35.2508 51.3456C35.497 50.5232 35.5725 49.659 35.4727 48.8064C35.3729 47.9537 35.0999 47.1303 34.6704 46.387C34.2409 45.6436 33.664 44.9959 32.9751 44.4835C32.2862 43.9712 31.4999 43.6051 30.6644 43.4076L30.6634 43.4074L29.9945 43.2507C29.9292 42.5376 29.9221 41.8205 29.9734 41.1063L30.9662 40.8522C31.7796 40.6441 32.5432 40.2756 33.2122 39.7682C33.8812 39.2608 34.4419 38.6248 34.8616 37.8976C35.2813 37.1704 35.5513 36.3666 35.6559 35.5335C35.7605 34.7007 35.6976 33.8553 35.4708 33.0471C35.4708 33.0469 35.4707 33.0467 35.4707 33.0465L35.1133 31.7622C35.6485 31.3742 36.2149 31.0299 36.8079 30.7339ZM45.4508 42.0498C45.4508 41.1481 45.0926 40.2833 44.4549 39.6456C43.8173 39.008 42.9525 38.6498 42.0508 38.6498C41.149 38.6498 40.2842 39.008 39.6466 39.6456C39.009 40.2833 38.6508 41.1481 38.6508 42.0498C38.6508 42.9515 39.009 43.8163 39.6466 44.454C40.2842 45.0916 41.149 45.4498 42.0508 45.4498C42.9525 45.4498 43.8173 45.0916 44.4549 44.454C45.0926 43.8163 45.4508 42.9515 45.4508 42.0498Z" fill="#0E0C17" stroke="#085BF7" />
                <defs>
                    <linearGradient id="paint0_linear_2092_569" x1="5.80078" y1="15.2458" x2="54.6414" y2="17.7605" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#6494EE" />
                        <stop offset="1" stop-color="#085BF7" />
                    </linearGradient>
                </defs>
            </svg>
        ),

        transaction: (
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 13.7273L25.6364 5L45.2727 13.7273V26.8182C45.2727 28.0332 45.1884 29.2402 45.0252 30.4315C43.8967 30.1496 42.7158 30 41.5 30C33.4919 30 27 36.4919 27 44.5C27 47.1972 27.7364 49.7224 29.0192 51.8854C27.9262 52.3423 26.7966 52.7167 25.6364 53C14.3782 50.2509 6 38.9273 6 26.8182V13.7273Z" fill="url(#paint0_linear_2092_579)" />
                <path d="M40.0694 45.7853L40.4973 46.2131L40.8368 45.7124L49.6221 32.7559C49.6223 32.7555 49.6226 32.7552 49.6229 32.7548C49.7109 32.6272 49.8457 32.5394 49.998 32.5104C50.1505 32.4814 50.3082 32.5136 50.4371 32.6001C50.4373 32.6002 50.4376 32.6004 50.4378 32.6005L52.2309 33.8183C52.359 33.9053 52.4474 34.0397 52.4766 34.1918C52.5058 34.3439 52.4735 34.5014 52.3868 34.6297L41.809 50.2325C41.8087 50.2329 41.8084 50.2333 41.8081 50.2338C41.5568 50.5986 41.2004 50.7897 40.914 50.7897C40.5799 50.7897 40.1551 50.594 39.8799 50.3205C39.8798 50.3204 39.8797 50.3203 39.8795 50.3202L33.6716 44.1093L33.6713 44.109C33.617 44.0547 33.5739 43.9903 33.5445 43.9194C33.5151 43.8485 33.5 43.7725 33.5 43.6957C33.5 43.619 33.5151 43.543 33.5445 43.4721C33.5739 43.4012 33.617 43.3368 33.6713 43.2825L33.6719 43.282L35.2026 41.7482C35.2029 41.7479 35.2032 41.7476 35.2035 41.7473C35.3139 41.6386 35.4626 41.5777 35.6175 41.5777C35.7725 41.5777 35.9212 41.6387 36.0316 41.7474C36.0318 41.7477 36.0321 41.748 36.0324 41.7482L40.0694 45.7853Z" fill="#0E0C17" stroke="#085BF7" />
                <defs>
                    <linearGradient id="paint0_linear_2092_579" x1="6" y1="14.4118" x2="45.2898" y2="16.0435" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#6494EE" />
                        <stop offset="1" stop-color="#085BF7" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        facebook: (
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2092_778)">
                    <path d="M11.8502 6.89922H10.4502H9.9502V6.39922V4.84922V4.34922H10.4502H11.5002C11.7752 4.34922 12.0002 4.14922 12.0002 3.84922V1.19922C12.0002 0.924219 11.8002 0.699219 11.5002 0.699219H9.6752C7.7002 0.699219 6.3252 2.09922 6.3252 4.17422V6.34922V6.84922H5.8252H4.1252C3.7752 6.84922 3.4502 7.12422 3.4502 7.52422V9.32422C3.4502 9.67422 3.7252 9.99922 4.1252 9.99922H5.7752H6.2752V10.4992V15.5242C6.2752 15.8742 6.5502 16.1992 6.9502 16.1992H9.3002C9.4502 16.1992 9.5752 16.1242 9.6752 16.0242C9.7752 15.9242 9.85019 15.7492 9.85019 15.5992V10.5242V10.0242H10.3752H11.5002C11.8252 10.0242 12.0752 9.82422 12.1252 9.52422V9.49922V9.47422L12.4752 7.74922C12.5002 7.57422 12.4752 7.37422 12.3252 7.17422C12.2752 7.04922 12.0502 6.92422 11.8502 6.89922Z" fill="#085BF7" />
                </g>
                <defs>
                    <clipPath id="clip0_2092_778">
                        <rect width="16" height="16" fill="white" transform="translate(0 0.449219)" />
                    </clipPath>
                </defs>
            </svg>

        ),
        twitter: (
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6355 4.74956C14.7246 4.64568 14.6084 4.50992 14.4766 4.55855C14.1823 4.66709 13.9134 4.73868 13.5156 4.78288C14.0048 4.51048 14.2324 4.12114 14.4174 3.64427C14.462 3.52925 14.3274 3.42488 14.2115 3.47982C13.7406 3.70308 13.2326 3.86872 12.6983 3.96659C12.1702 3.44324 11.4175 3.11621 10.5848 3.11621C8.98589 3.11621 7.6893 4.32206 7.6893 5.80899C7.6893 6.02008 7.71516 6.2257 7.76396 6.42258C5.46553 6.31549 3.41604 5.33227 1.99215 3.82462C1.89456 3.72128 1.71747 3.735 1.6567 3.86103C1.4946 4.19727 1.40422 4.57027 1.40422 4.96298C1.40422 5.89704 1.91524 6.72116 2.69205 7.20408C2.34375 7.19361 2.01066 7.12574 1.7037 7.01057C1.55424 6.9545 1.38292 7.05304 1.403 7.20374C1.55716 8.36101 2.4941 9.31574 3.70349 9.54134C3.46062 9.60314 3.20482 9.63594 2.9402 9.63594C2.87604 9.63594 2.81244 9.63394 2.74941 9.63008C2.58903 9.62014 2.45868 9.76361 2.52744 9.90088C2.98112 10.8063 3.96072 11.4385 5.10069 11.4581C4.10983 12.1805 2.8614 12.6109 1.50478 12.6109C1.3375 12.6109 1.26574 12.826 1.41414 12.8989C2.5603 13.4623 3.86554 13.7829 5.25241 13.7829C10.5784 13.7829 13.4904 9.67974 13.4904 6.12125C13.4904 6.00477 13.4874 5.88828 13.4822 5.7729C13.9144 5.48248 14.303 5.13714 14.6355 4.74956Z" fill="#085BF7" />
            </svg>

        ),
        youtube: (
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.425 1.72441C15.25 1.04941 14.725 0.524414 14.05 0.349414C12.85 0.0244141 8 0.0244141 8 0.0244141C8 0.0244141 3.15 0.0244141 1.95 0.349414C1.275 0.524414 0.75 1.04941 0.575 1.72441C0.25 2.94941 0.25 5.44941 0.25 5.44941C0.25 5.44941 0.25 7.97441 0.575 9.17441C0.75 9.84941 1.275 10.3744 1.95 10.5494C3.15 10.8744 8 10.8744 8 10.8744C8 10.8744 12.85 10.8744 14.05 10.5494C14.725 10.3744 15.25 9.84941 15.425 9.17441C15.75 7.97441 15.75 5.44941 15.75 5.44941C15.75 5.44941 15.75 2.94941 15.425 1.72441ZM6.45 7.77441V3.12441L10.475 5.44941L6.45 7.77441Z" fill="#085BF7" />
            </svg>

        ),
        linkedin: (
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.62638 1.78224C3.62621 2.13586 3.48556 2.47493 3.23539 2.72486C2.98521 2.97478 2.64601 3.11509 2.29238 3.11491C1.93876 3.11473 1.59969 2.97409 1.34977 2.72391C1.09985 2.47374 0.95954 2.13453 0.959717 1.78091C0.959894 1.42729 1.10054 1.08822 1.35071 0.838295C1.60089 0.588372 1.94009 0.448066 2.29372 0.448242C2.64734 0.448419 2.98641 0.589064 3.23633 0.839238C3.48625 1.08941 3.62656 1.42862 3.62638 1.78224ZM3.66638 4.10224H0.999717V12.4489H3.66638V4.10224ZM7.87972 4.10224H5.22638V12.4489H7.85305V8.06891C7.85305 5.62891 11.033 5.40224 11.033 8.06891V12.4489H13.6664V7.16224C13.6664 3.04891 8.95972 3.20224 7.85305 5.22224L7.87972 4.10224Z" fill="#085BF7" />
            </svg>
        ),
        token: (
            <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 4.92938C22.8329 5.08005 22.617 5.16528 22.392 5.16938H1.02532C0.266654 5.16938 -0.116013 4.30271 0.409321 3.79604L3.91865 0.412044C4.08174 0.254528 4.29862 0.164917 4.52532 0.161377H25.976C26.7413 0.161377 27.116 1.03604 26.584 1.54538L23 4.92938Z" fill="url(#paint0_linear_2093_1419)" />
                <path d="M23 21.6054C22.8319 21.7537 22.6161 21.8365 22.392 21.8387H1.02532C0.266654 21.8387 -0.116013 20.9787 0.409321 20.4707L3.91865 17.0787C4.08245 16.9235 4.29963 16.8371 4.52532 16.8374H25.976C26.7413 16.8374 27.116 17.7041 26.584 18.2107L23 21.6054Z" fill="url(#paint1_linear_2093_1419)" />
                <path d="M23 8.73748C22.8319 8.58923 22.6161 8.50641 22.392 8.50415H1.02532C0.266654 8.50415 -0.116013 9.36415 0.409321 9.87082L3.91865 13.2642C4.08542 13.4145 4.30081 13.4997 4.52532 13.5042H25.976C26.7413 13.5042 27.116 12.6375 26.584 12.1308L23 8.73748Z" fill="url(#paint2_linear_2093_1419)" />
                <defs>
                    <linearGradient id="paint0_linear_2093_1419" x1="0.167987" y1="74.764" x2="27.5133" y2="74.5134" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#599DB0" />
                        <stop offset="1" stop-color="#47F8C3" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_2093_1419" x1="0.167987" y1="6.80407" x2="27.3387" y2="6.59607" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C44FE2" />
                        <stop offset="1" stop-color="#73B0D0" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_2093_1419" x1="1.70265" y1="11.0042" x2="25.8" y2="11.0042" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#778CBF" />
                        <stop offset="1" stop-color="#5DCDC9" />
                    </linearGradient>
                </defs>
            </svg>

        ),
        facebook: (
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.85019 6.89922H7.4502H6.9502V6.39922V4.84922V4.34922H7.4502H8.5002C8.7752 4.34922 9.0002 4.14922 9.0002 3.84922V1.19922C9.0002 0.924219 8.8002 0.699219 8.5002 0.699219H6.6752C4.7002 0.699219 3.3252 2.09922 3.3252 4.17422V6.34922V6.84922H2.8252H1.1252C0.775195 6.84922 0.450195 7.12422 0.450195 7.52422V9.32422C0.450195 9.67422 0.725195 9.99922 1.1252 9.99922H2.7752H3.2752V10.4992V15.5242C3.2752 15.8742 3.5502 16.1992 3.9502 16.1992H6.3002C6.4502 16.1992 6.5752 16.1242 6.6752 16.0242C6.7752 15.9242 6.85019 15.7492 6.85019 15.5992V10.5242V10.0242H7.3752H8.5002C8.8252 10.0242 9.0752 9.82422 9.1252 9.52422V9.49922V9.47422L9.47519 7.74922C9.50019 7.57422 9.47519 7.37422 9.3252 7.17422C9.2752 7.04922 9.05019 6.92422 8.85019 6.89922Z" fill="#085BF7" />
            </svg>

        ),
        twitter: (
            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6355 1.74956C13.7246 1.64568 13.6084 1.50992 13.4766 1.55855C13.1823 1.66709 12.9134 1.73868 12.5156 1.78288C13.0048 1.51048 13.2324 1.12114 13.4174 0.644271C13.462 0.529251 13.3274 0.424878 13.2115 0.479824C12.7406 0.703084 12.2326 0.868724 11.6983 0.966591C11.1702 0.443238 10.4175 0.116211 9.58483 0.116211C7.98589 0.116211 6.6893 1.32206 6.6893 2.80899C6.6893 3.02008 6.71516 3.2257 6.76396 3.42258C4.46553 3.31549 2.41604 2.33227 0.992149 0.824618C0.894555 0.721284 0.717469 0.735004 0.656702 0.861031C0.494595 1.19727 0.404222 1.57027 0.404222 1.96298C0.404222 2.89704 0.915235 3.72116 1.69205 4.20408C1.34375 4.19361 1.01066 4.12574 0.703695 4.01057C0.554242 3.9545 0.382922 4.05304 0.403002 4.20374C0.557155 5.36101 1.4941 6.31574 2.70349 6.54134C2.46062 6.60314 2.20482 6.63594 1.9402 6.63594C1.87604 6.63594 1.81244 6.63394 1.74941 6.63008C1.58903 6.62014 1.45868 6.76361 1.52744 6.90088C1.98112 7.80634 2.96072 8.43848 4.10069 8.45814C3.10983 9.18054 1.8614 9.61094 0.504775 9.61094C0.337502 9.61094 0.265742 9.82601 0.414142 9.89894C1.5603 10.4623 2.86554 10.7829 4.25241 10.7829C9.57836 10.7829 12.4904 6.67974 12.4904 3.12125C12.4904 3.00477 12.4874 2.88828 12.4822 2.7729C12.9144 2.48248 13.303 2.13714 13.6355 1.74956Z" fill="#085BF7" />
            </svg>

        ),
        youtube: (
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.425 1.72441C15.25 1.04941 14.725 0.524414 14.05 0.349414C12.85 0.0244141 8 0.0244141 8 0.0244141C8 0.0244141 3.15 0.0244141 1.95 0.349414C1.275 0.524414 0.75 1.04941 0.575 1.72441C0.25 2.94941 0.25 5.44941 0.25 5.44941C0.25 5.44941 0.25 7.97441 0.575 9.17441C0.75 9.84941 1.275 10.3744 1.95 10.5494C3.15 10.8744 8 10.8744 8 10.8744C8 10.8744 12.85 10.8744 14.05 10.5494C14.725 10.3744 15.25 9.84941 15.425 9.17441C15.75 7.97441 15.75 5.44941 15.75 5.44941C15.75 5.44941 15.75 2.94941 15.425 1.72441ZM6.45 7.77441V3.12441L10.475 5.44941L6.45 7.77441Z" fill="#085BF7" />
            </svg>


        ),
        linkedin: (
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.62638 1.78224C3.62621 2.13586 3.48556 2.47493 3.23539 2.72486C2.98521 2.97478 2.64601 3.11509 2.29238 3.11491C1.93876 3.11473 1.59969 2.97409 1.34977 2.72391C1.09985 2.47374 0.95954 2.13453 0.959717 1.78091C0.959894 1.42729 1.10054 1.08822 1.35071 0.838295C1.60089 0.588372 1.94009 0.448066 2.29372 0.448242C2.64734 0.448419 2.98641 0.589064 3.23633 0.839238C3.48625 1.08941 3.62656 1.42862 3.62638 1.78224ZM3.66638 4.10224H0.999717V12.4489H3.66638V4.10224ZM7.87972 4.10224H5.22638V12.4489H7.85305V8.06891C7.85305 5.62891 11.033 5.40224 11.033 8.06891V12.4489H13.6664V7.16224C13.6664 3.04891 8.95972 3.20224 7.85305 5.22224L7.87972 4.10224Z" fill="#085BF7" />
            </svg>


        ),
    };

    return (
        <span className={`flex ${props.className}`}>
            {props.iconName && IconList[props.iconName]}
        </span>
    )
}


export default Icon