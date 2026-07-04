# 部署到 GitHub Pages 指南

本站点已配置好 GitHub Actions 自动部署，每次 push 到 `main` 分支后会自动构建并推送到 `gh-pages` 分支。

## 已完成的部署

- 仓库：[https://github.com/Onthewayfromschool/Onthewayfromschool.github.io](https://github.com/Onthewayfromschool/Onthewayfromschool.github.io)
- 站点：**[https://Onthewayfromschool.github.io](https://Onthewayfromschool.github.io)**
- Pages 源：`gh-pages` 分支

## 后续更新

以后只要修改代码并 `push` 到 `main` 分支，GitHub Actions 会自动：

1. 运行 `npm ci` 安装依赖
2. 运行 `npm run build` 构建站点
3. 将 `dist/` 目录推送到 `gh-pages` 分支
4. GitHub Pages 会自动从 `gh-pages` 分支发布

```bash
cd /Users/fxls/life/agentProject/portfolio
git add .
git commit -m "update: ..."
git push origin main
```

## GitHub Profile README

已部署到同名仓库：[https://github.com/Onthewayfromschool/Onthewayfromschool](https://github.com/Onthewayfromschool/Onthewayfromschool)

访问 [https://github.com/Onthewayfromschool](https://github.com/Onthewayfromschool) 即可看到主页展示。

## 修改联系邮箱

当前 `src/pages/About.tsx` 中的邮箱已设置为 `1527490762@qq.com`。如需更换，直接修改该文件并 push 即可。

## 常见问题

- **页面刷新 404**：本站点使用 `HashRouter`，刷新通常不会 404。如果出现资源路径问题，请确认 `vite.config.ts` 中的 `base: './'` 存在。
- **Actions 部署失败**：到仓库的 **Actions** 标签页查看具体报错，通常是依赖安装或构建脚本问题。
