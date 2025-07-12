import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/mosu-docs/",

    title: "MOSU Docs",
    description: "모수 개발문서",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Frontend", link: "/docs/frontend" },
            { text: "Backend", link: "/docs/backend" },
        ],

        sidebar: {
            "/docs/frontend/": [
                {
                    text: "모수 프론트엔드 문서",
                    items: [
                        { text: "소개", link: "/docs/frontend/" },
                        { text: "시작하기", link: "/docs/frontend/getting-started" },
                        { text: "개발 가이드", link: "/docs/frontend/development-guide" },
                    ],
                },
            ],
            "/docs/backend/": [
                {
                    text: "개요",
                    items: [{ text: "소개", link: "/docs/backend/" }],
                },
                {
                    text: "사용자 관련 API",
                    items: [
                        { text: "인증 API", link: "/docs/backend/auth-api" },
                        { text: "프로필 API", link: "/docs/backend/profile-api" },
                        { text: "추천인 API", link: "/docs/backend/recommender-api" },
                    ],
                },
                {
                    text: "신청 관련 API",
                    items: [
                        { text: "신청 API", link: "/docs/backend/application-api" },
                        { text: "개별 신청 학교 API", link: "/docs/backend/application-school-api" },
                    ],
                },
                {
                    text: "콘텐츠 관리 API",
                    items: [
                        { text: "공지사항 API", link: "/docs/backend/notice-api" },
                        { text: "문의 API", link: "/docs/backend/inquiry-api" },
                        { text: "FAQ API", link: "/docs/backend/faq-api" },
                        { text: "이벤트 API", link: "/docs/backend/event-api" },
                    ],
                },
                {
                    text: "관리자 API",
                    items: [{ text: "관리자 API", link: "/docs/backend/admin-api" }],
                },
                {
                    text: "기타 API",
                    items: [
                        { text: "결제 API", link: "/docs/backend/payment-api" },
                        { text: "학교 API", link: "/docs/backend/school-api" },
                        { text: "파일 업로드 API", link: "/docs/backend/file-api" },
                    ],
                },
            ],
        },

        socialLinks: [{ icon: "github", link: "https://github.com/mosu-dev" }],
    },
});
