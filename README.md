# Echo in the Steps

这是一个只需要集中填写内容和替换素材的 Astro 静态网站模板。发布前可完全在本机预览。

## 1. 本地运行

需要 Node.js 22.12 或更高版本：

```bash
npm install
npm run dev
```

浏览器打开终端显示的本机地址，通常是 <http://localhost:4321/>。默认只监听本机，不会生成公网网址。

完成修改后检查构建：

```bash
npm run build
npm run preview
```

## 2. 需要填写的位置

主要只编辑 [`src/data/project.ts`](src/data/project.ts)。搜索 `TODO:` 可以找到所有待填项。

| 配置 | 填写内容 |
| --- | --- |
| `site` | 网页语言、用于搜索与分享预览的一句话简介 |
| `paper.projectName` | 项目简称 |
| `paper.title` | 完整论文标题 |
| `paper.acceptance` | 会议接收信息，未确认可留空 |
| `paper.authors` | 作者姓名、论文顺序、个人主页、单位编号 |
| `paper.affiliations` | 单位编号和全称 |
| `paper.abstract` | 摘要，每段为一个字符串 |
| `paper.bibtex` | 确认后的完整 BibTeX |
| `resources` | Paper、arXiv、Code、Video 链接 |
| `hero` | 页面顶部短视频和封面 |
| `overview` | 项目总览视频、封面和可选字幕 |
| `method` | 方法图、替代文本、图注和实际尺寸 |
| `experimentGroups` | 实验分组、视频、封面和图注 |
| `results` | 关键结果图和图注 |

想调整强调色时修改 `src/styles/global.css` 中的 `--accent`。

## 3. 素材目录

所有本地链接都相对于 `public/`。例如文件放在：

```text
public/videos/hero/project-hero.mp4
```

配置写成：

```ts
src: 'videos/hero/project-hero.mp4'
```

推荐目录：

```text
public/
  captions/
  images/
    method/
    posters/
    results/
  paper/
  videos/
    experiments/
    hero/
    overview/
```

建议视频使用 MP4/H.264，并给视频准备独立封面。方法图和结果图填写准确的 `alt`、`width`、`height`。

## 4. GitHub Pages

- `main` 分支的更新会由 `.github/workflows/deploy-pages.yml` 自动部署。
- 项目页面地址为 <https://thusi-lab.github.io/Echo-in-the-Steps/>。
- `.github/workflows/build.yml` 会在 Pull Request 中检查网站能否构建。

## 5. 发布设置

1. 把项目推送到 GitHub 仓库。
2. 打开仓库 **Settings → Pages**。
3. 将 Source 选择为 **GitHub Actions**。

部署配置会从 GitHub 自动读取用户名和仓库名：

- 普通项目仓库：`https://用户名.github.io/仓库名/`
- 名为 `用户名.github.io` 的仓库：`https://用户名.github.io/`

首次公开前，检查占位文字、所有链接、作者顺序、论文信息、图片说明、视频音轨和 BibTeX。
