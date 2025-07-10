import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "https://mosu-dev.github.io/mosu-docs/",

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
                    text: "모수 백엔드 문서",
                    items: [
                        { text: "소개", link: "/docs/backend/" },
                        { text: "시작하기", link: "/docs/backend/getting-started" },
                        { text: "개발 가이드", link: "/docs/backend/development-guide" },
                    ],
                },
            ],
        },

        socialLinks: [{ icon: "github", link: "https://github.com/mosu-dev" }],
    },
});
