export const servicesData = [
  {
    title: "Accessability HTML & CSS",
    description:
      "アクセシビリティに配慮したHTMLとCSSで、誰もが使いやすいWeb体験を実現します。最新の技術とベストプラクティスを活用し、視認性・操作性に優れたサイトを構築します。",
    items: [
      {
        title: "バックエンドエンジニアリング",
        description: "（REST/GraphQL API、マイクロサービス、認証システム）",
      },
      {
        title: "フロントエンドの卓越性",
        description: "（React、Vue、TypeScript、インタラクティブUI/UX）",
      },
      {
        title: "データベース設計",
        description: "（SQL/NoSQL最適化、スケーラブル構造）",
      },
    ],
  },
  {
    title: "Detabase & Deployment",
    description:
      "堅牢なデータベース設計と効率的なデプロイメントで、システムの安定稼働と拡張性を両立します。自動化された運用で、トラブルの少ない運用環境を提供します。",
    items: [
      {
        title: "CI/CDパイプライン",
        description: "（GitHub Actions、Docker、Kubernetes）",
      },
      {
        title: "サーバー管理",
        description: "（Linux、Nginx、ロードバランシング）",
      },
      {
        title: "パフォーマンスチューニング",
        description: "（キャッシュ、圧縮、Lighthouse 90点以上）",
      },
    ],
  },
  {
    title: "Optimization",
    description:
      "Webサイトやアプリのパフォーマンスを徹底的に最適化し、ユーザー体験とSEOを向上させます。無駄な処理や遅延を排除し、常に快適な動作を実現します。",
    items: [],
  },
  {
    title: "3D & Animation",
    description:
      "3D表現やアニメーションを活用し、印象的でインタラクティブなWeb体験を提供します。最新の技術で、ユーザーの心を惹きつけるデザインを実現します。",
    items: [],
  },
];

export const projects = [
  {
    id: 1,
    name: "写真共有SNSアプリ",
    description:
      "ユーザー同士で写真を投稿・共有できるSNSアプリ。コメントやいいね機能も搭載し、思い出をみんなで楽しめます。",
    href: "",
    image: "/site/site1.webp",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "Vuetify" },
    ],
  },
  {
    id: 2,
    name: "レシピ管理サービス",
    description:
      "自分だけのレシピを簡単に保存・管理できるWebサービス。材料や手順を整理して、毎日の料理をもっと楽しく！",
    href: "",
    image: "/site/site2.webp",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Express" },
      { id: 3, name: "PostgreSQL" },
    ],
  },
  {
    id: 3,
    name: "タスク管理ツール",
    description:
      "チームや個人で使えるシンプルなタスク管理ツール。進捗状況を可視化し、効率的なプロジェクト運営をサポートします。",
    href: "",
    image: "/site/site3.webp",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "NestJS" },
      { id: 3, name: "MySQL" },
    ],
  },
  {
    id: 4,
    name: "旅行プラン作成アプリ",
    description:
      "行きたい場所や日程を入力するだけで、最適な旅行プランを自動作成。地図やおすすめスポットも表示します。",
    href: "",
    image: "/site/site4.webp",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Supabase" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
  {
    id: 5,
    name: "動画配信プラットフォーム",
    description:
      "高画質な動画をストリーミング配信できるプラットフォーム。ライブ配信やコメント機能も充実しています。",
    href: "",
    image: "/site/site5.webp",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Redis" },
    ],
  },
  {
    id: 6,
    name: "健康管理ダッシュボード",
    description:
      "日々の運動や食事、睡眠を記録し、グラフで可視化できる健康管理アプリ。目標設定やリマインダー機能も搭載。",
    href: "",
    image: "/site/site6.webp",
    frameworks: [
      { id: 1, name: "Flutter" },
      { id: 2, name: "Dart" },
      { id: 3, name: "Firebase" },
    ],
  },
];
