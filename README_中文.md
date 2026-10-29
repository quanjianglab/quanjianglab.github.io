# Quan Jiang Lab — GitHub Pages 免费实验室网站模板

这是一个**纯静态网站**。不用 WordPress、不用服务器、不用数据库，不用安装 Node.js、Jekyll 或任何插件。

页面包括：`index.html` 首页、`research.html` 研究、`people.html` 人员、`publications.html` 论文、`news.html` 新闻、`activities.html` 活动、`contact.html` 联系。

> **重要：** 当前所有科研主题、成员姓名、论文、动态、学校、邮箱都是示例或占位内容，必须在正式对外宣传前核实和替换。图片均为本模板原创 SVG 装饰插画，并非你实验室实际照片。

## A. 先在自己电脑上预览

1. 把 `Quan_Jiang_Lab_GitHub_Pages_Starter.zip` **解压**。
2. 打开解压后包含 `index.html`、`styles.css` 等文件的文件夹。
3. 双击 `index.html`。浏览器应该会显示首页（无需联网即可预览）。
4. 点击顶部菜单，检查其他页面。

## B. 创建 GitHub 网站（最适合零基础）

### 1) 注册 GitHub

打开 https://github.com/signup 注册免费账号；若已有账号直接登录。

### 2) 创建 Repository（仓库）

打开 https://github.com/new

- **Repository name:** 推荐填 `你的GitHub用户名.github.io`。例如用户名是 `quanjianglab`，仓库名为 `quanjianglab.github.io`。
- **Visibility:** 选择 **Public**（GitHub Free 的 Pages 使用公开仓库）。
- 可以勾选 **Add a README file**，也可以不勾；本模板已提供 README。
- 点击 **Create repository**。

若你使用其他用户名，例如 `jiangquan123`，仓库必须叫 `jiangquan123.github.io` 才能直接使用根域名 `https://jiangquan123.github.io/`。

也可以把仓库命名为 `quanjianglab` 之类，网站地址会是 `https://你的用户名.github.io/quanjianglab/`，本模板使用相对路径，两种部署方式均可。

### 3) 上传网站文件（请注意：不能直接上传 ZIP 作为网站）

1. 在刚创建的仓库首页点击 **Add file → Upload files**。若仓库为空，也可以点击 **uploading an existing file**。
2. 在电脑上打开**解压后的文件夹**，选择里面的：
   - `index.html`、`research.html`、`people.html`、`publications.html`
   - `news.html`、`activities.html`、`contact.html`
   - `styles.css`、`site-config.js`、`script.js`、`favicon.svg`
   - **整个 `assets` 文件夹**（需要保留文件夹目录结构）。
3. 把所选文件与 `assets` 文件夹直接拖入 GitHub 上传区域。浏览器拖拽文件夹不支持时，可以分批拖入，确保文件路径以 `assets/` 开头。
4. 仓库根目录必须直接看到 `index.html`；**不要让所有网页文件被多套一层 `quan-jiang-lab-github-pages/` 目录**。
5. 底部点击 **Commit changes**。

如果你的系统不支持拖文件夹，也可以在 GitHub 页面 `Add file → Create new file`，把文件名写成 `assets/research-1.svg`，然后复制 SVG 文件内容；但直接拖拽更方便。

### 4) 开启 GitHub Pages

1. 打开仓库 **Settings（设置）**。
2. 左侧选 **Pages**。
3. 在 **Build and deployment → Source** 选 `Deploy from a branch`。
4. **Branch** 选 `main`；目录选 `/(root)`；点击 **Save**。
5. 等 GitHub Actions 部署状态显示成功。随后在 Pages 设置页找到 `Visit site` / 站点网址。
6. 示例：`https://quanjianglab.github.io/`（仅当账号用户名是 quanjianglab，且仓库名匹配时成立）。

官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## C. 修改实验室信息

### 一处修改站点名、大学、邮箱

在 GitHub 仓库中找到 `site-config.js`，点击文件、再点击铅笔图标 **Edit this file**，修改：

```js
window.LAB_CONFIG = {
  name: "Quan Jiang Lab",
  institution: "Your University",
  department: "Department / Research Institute",
  email: "your-email@university.edu",
  location: "City, Country",
  tagline: "Curiosity-driven research at the frontiers of science."
};
```

修改后点击 **Commit changes**，几分钟后重新打开网页查看。`site-config.js` 负责同步全站显示的通用信息，**但首页正文和浏览器标题仍需单独编辑 HTML**。

### 修改各栏目

| 想修改的内容 | 文件 |
|---|---|
| 首页欢迎词、研究亮点 | `index.html` |
| 研究方向 | `research.html` |
| PI / 学生成员 | `people.html` |
| 论文列表 | `publications.html` |
| 新闻 | `news.html` |
| 活动照片 | `activities.html` 和 `assets/` |
| 联系方式和招聘信息 | `contact.html` 和 `site-config.js` |
| 字体、颜色、间距 | `styles.css` |

在 GitHub 打开文件后点右上角的铅笔编辑，找到相应的英文占位内容，替换后提交即可。

### 上传照片

1. 电脑上准备照片，建议命名为 `pi.jpg`、`group-photo.jpg` 等英文文件名。
2. 上传到仓库的 `assets/` 文件夹。
3. 在 HTML 中将原来的 `src="assets/activity-1.svg"` 改成 `src="assets/group-photo.jpg"`。
4. `people.html` 中目前使用文字头像。若希望替换成照片，可以把：

```html
<div class="portrait"><span>PI</span></div>
```

替换成：

```html
<img class="portrait" src="assets/pi.jpg" alt="Photo of the principal investigator" style="width:100%;object-fit:cover">
```

（首页和研究页面的 SVG 也可以以同样方法换成真实实验室图片。）

## D. 常见问题

- **网站显示 404**：检查 `index.html` 是否在仓库根目录，仓库名和 GitHub 用户名是否匹配，`Settings → Pages` 是否选择 `main / (root)`，部署是否成功。
- **网站只有文字没有样式**：检查 `styles.css` 和 `assets/` 的文件路径和大小写；注意 GitHub 大小写敏感。
- **菜单打不开**：检查 `script.js` 是否上传，以及浏览器控制台是否有文件加载错误。
- **想恢复旧版本**：GitHub 保存每次 Commit，可在历史记录中恢复。
- **费用**：GitHub Free 的公开仓库支持 GitHub Pages 托管，不必买域名；如自行购买 `.com`，域名续费另算。须遵守 GitHub Pages 的用量和服务条款。
- **SEO**：发布前请一并修改每个 HTML 文件的 `<title>` 和 `<meta name="description">`，让搜索引擎展示准确的实验室名称及信息。

## E. 上线前核对

- [ ] 替换所有 `Example`、`Placeholder`、`Your University`、`Member Name` 等占位信息
- [ ] 核实每一条论文信息及 DOI
- [ ] 上传或移除所有需要授权的真实成员照片
- [ ] 检查公开邮箱及机构信息
- [ ] 删除每页顶部的绿色 DEMO 提示条（见下）
- [ ] 手机打开检查排版

正式发布时，删除 `script` 之前的公共顶部提示：在每个 HTML 页面中，删除 `<div class="demo-bar">...</div>` 那一行；或者保留，提醒读者这是尚未完成的网站。

---

**技术栈：** HTML + CSS + 原生 JavaScript + 本地 SVG 插画。无外部框架和第三方图片请求；可以免费放到 GitHub Pages。
