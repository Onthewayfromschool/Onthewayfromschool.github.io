# 部署到 GitHub Pages 指南

本站点已配置好 GitHub Actions 自动部署。按以下步骤操作即可上线。

## 1. 在 GitHub 创建仓库

访问 [https://github.com/new](https://github.com/new)，创建一个新仓库：

- **Repository name**：`Onthewayfromschool.github.io`
- **Visibility**：Public（Public 仓库的 GitHub Pages 是免费的）
- 其他保持默认，点击 **Create repository**

## 2. 把本地代码推送到该仓库

在 `agentProject/portfolio/` 目录下执行：

```bash
git init
git add .
git commit -m "init: portfolio site"
git branch -M main
git remote add origin https://github.com/Onthewayfromschool/Onthewayfromschool.github.io.git
git push -u origin main
```

## 3. 开启 GitHub Pages

进入仓库的 **Settings → Pages**：

- **Source**：选择 **GitHub Actions**
- 此时会自动识别 `.github/workflows/deploy.yml` 工作流

## 4. 等待部署完成

返回仓库主页，点击 **Actions** 标签，看到工作流运行完成后：

- 访问 **https://Onthewayfromschool.github.io**

## 5. 后续更新

以后只要修改代码并 `push` 到 `main` 分支，GitHub Actions 会自动重新构建并部署。

## 6. 补充邮箱

当前 `src/pages/About.tsx` 中的邮箱显示为「待补充（提供后替换）」。
请把真实邮箱告诉我，我会帮你替换上去并重新部署。

## GitHub Profile README 部署

另外我还准备了 `agentProject/github-profile-readme/README.md`，用于你的 GitHub 主页展示：

1. 访问 [https://github.com/new](https://github.com/new)
2. 创建仓库，**Repository name** 必须和你的用户名完全一致：`Onthewayfromschool`
3. 仓库设为 Public
4. 把 `agentProject/github-profile-readme/README.md` 的内容粘贴进去，或者直接推送该文件
5. 访问 [https://github.com/Onthewayfromschool](https://github.com/Onthewayfromschool) 即可看到效果

## 常见问题

- **页面刷新 404**：本站点使用 `HashRouter`，刷新通常不会 404。如果出现资源路径问题，请确认 `vite.config.ts` 中的 `base: './'` 存在。
- **Actions 部署失败**：检查仓库 Settings → Pages 中是否选择了 GitHub Actions 作为 Source。
