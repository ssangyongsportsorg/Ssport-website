import type { AuthorData } from "@/src/schema/blog";
export const blogAuthors: Record<string, AuthorData> = {
  kane: {
    name: "凱恩Kane",
    title: "YEE式機器龍作者",
    url: "https://github.com/Gary50613",
    image_url: "/blog/Gary50613.jpg",
  },
  wolf: {
    name: "Wolf yuan 狼苑",
    title: "黑貓音樂機器人作者 兼 機器人伺服器管理",
    url: "https://github.com/wolf-yuan-6115",
    image_url: "/blog/WolfYuan.png",
  },
  kay: {
    name: "美味的小圓 Kay Xue",
    title: "Yeecord 以前的小幫手",
    url: "https://github.com/Kayxue",
    image_url: "/blog/kay.jpg",
  },
  nathan: {
    name: "Nathan",
    title: "Yeecord 現任管理員 兼 ZeitFrei 合作機器人作者",
    url: "https://github.com/NathanTW0219",
    image_url: "/blog/nathan.jpg",
  },
  money: {
    name: "Money",
    title: "Yeecord 網站的前端工程師",
    url: "https://money-portfolio.vercel.app",
    image_url: "/blog/money.jpg",
  },
};
