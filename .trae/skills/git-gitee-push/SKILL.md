---
name: git-gitee-push
description: 初始化 git 仓库、生成 .gitignore、提交并推送项目到 Gitee。Use when user asks to commit, push, deploy to gitee, or "提交项目". Do not embed tokens in commands — collect at runtime.
---

# Git Gitee Push

安全地将当前项目初始化 git 并推送到 Gitee 仓库。

## 流程

### 1. 先确认关键信息（缺一就问用户）

- **仓库地址**（纯 URL，带 query 参数的去掉）：`https://gitee.com/<owner>/<repo>.git`
- **Gitee 私人令牌**（不要写进 shell 命令，运行时由用户确认后再操作）
- **git user.name / user.email**（默认用 gitee 用户名作为 name，邮箱用 `name@gitee.com`）

### 2. 准备阶段（可安全自动执行，不含敏感凭据）

```
git init              # 仅当没有 .git 时
.gitignore            # 生成标准忽略文件（系统/依赖/编辑器/日志）
git config            # 本地 user.name + user.email
git add -A            # 添加全部变更
git commit -m "..."   # 中文 commit message，描述本轮改动
git remote add origin # 带 https 的干净 URL（不带 token）
git branch -M main    # 重命名为 main
```

### 3. Push 阶段（必须用户确认令牌后再执行）

Agent **禁止**在 shell 命令中明文写入用户的私人令牌。正确的安全做法三选一：

**A. Windows Credential Manager（推荐）**
```
cmdkey /generic:git:https://gitee.com /user:<username> /pass:<TOKEN>
git config --global credential.helper manager-core
git push -u origin main
```
令牌存在 Windows 系统钥匙串里（加密），不会落进 git config 明文。

**B. 一次性 stdin 注入（不落盘）**
```
# 在 PowerShell 中通过 git credential 协议一次性注入
@"
protocol=https
host=gitee.com
username=<username>
password=<TOKEN>

"@ | git credential approve
git push -u origin main
```

**C. Gitee 网页端导入（零命令行）**
让用户登录 gitee.com → 目标仓库 → 设置 → 仓库导入 → 从本地目录导入，完全跳过 token。

### 4. 特殊情况处理

- **嵌套 git repo**（子目录有 `.git`）：先 `Remove-Item -Recurse -Force <nested>/.git`，再 `git rm --cached <nested>`，最后 `git add <nested>` 把它当普通目录重新提交。
- **LF/CRLF 警告**：Windows 下 `.gitattributes` 加上 `* text=auto eol=lf` 可统一行尾。
- **Force push**：永远不要默认用 `-f`，除非仓库是空的且用户明确同意。

### 5. Commit message 规范

使用中文，格式：`<verb>: <简述>`。常用 verb：
- `feat:` 新功能
- `fix:` 修复
- `style:` 样式/格式化
- `chore:` 构建/杂项
- `docs:` 文档

