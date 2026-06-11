# 部署指南 — Yoshan 独立站

## 完整免费部署流程：GitHub → Cloudflare Pages → Namecheap域名

---

## 第一步：上传到 GitHub（5分钟）

1. 打开 https://github.com 登录你的账号（没有就免费注册）
2. 点击右上角 **New repository**（新建仓库）
3. Repository name 填：`yoshan-roasters`
4. 选 **Public**（公开，Cloudflare Pages 需要能读取）
5. 点 **Create repository**

然后在你的电脑上，打开 **命令提示符（CMD）**，输入以下命令：

```bash
cd C:\Users\Administrator\Desktop\yoshan-site
git init
git add .
git commit -m "Initial commit: Yoshan Coffee Roasters website"
git branch -M main
git remote add origin https://github.com/你的用户名/yoshan-roasters.git
git push -u origin main
```

> 把 `你的用户名` 换成你的 GitHub 用户名

---

## 第二步：连接 Cloudflare Pages（5分钟）

1. 打开 https://pages.cloudflare.com
2. 用你的 Cloudflare 账号登录（没有就免费注册）
3. 点 **Create a project** → **Connect to Git**
4. 授权 GitHub，选择 `yoshan-roasters` 仓库
5. Build settings 配置：
   - **Framework preset**: None（不选任何框架）
   - **Build command**: 留空
   - **Build output directory**: `/`（斜杠，代表根目录）
6. 点 **Save and Deploy**

约30秒后，你会得到一个临时网址：`yoshan-roasters.pages.dev`

---

## 第三步：绑定自定义域名（5分钟）

### 在 Cloudflare Pages 添加域名：
1. 进入你的项目 → **Custom domains** → **Set up a custom domain**
2. 输入：`store.gohaiyangai.com`
3. 它会给你一个 CNAME 记录，例如：
   ```
   类型: CNAME
   名称: store
   值: yoshan-roasters.pages.dev
   ```

### 在 Namecheap 配置 DNS：
1. 登录 Namecheap → 找到 `gohaiyangai.com` → **Manage** → **Advanced DNS**
2. 添加一条记录：
   - Type: **CNAME Record**
   - Host: **store**
   - Value: **yoshan-roasters.pages.dev**
   - TTL: Automatic
3. 保存

等待约5分钟DNS生效，然后访问 https://store.gohaiyangai.com ✅

---

## 之后更新网站

每次修改文件后，在命令行运行：

```bash
cd C:\Users\Administrator\Desktop\yoshan-site
git add .
git commit -m "Update: 描述修改内容"
git push
```

Cloudflare Pages 会自动重新部署，约30秒生效。

---

## 添加产品图片

把产品图片放到对应目录，命名如下：
- `images/products/dy-1kg.jpg`
- `images/products/ys-6kg.jpg`
- `images/products/sd-15kg.jpg`
- `images/products/ys-15kg.jpg`
- `images/products/sd-30kg.jpg`
- `images/products/ec-500g.jpg`
- `images/factory/factory-qc.jpg`
- `images/factory/factory-test.jpg`

然后 `git add . && git commit -m "Add product images" && git push`
