---
name: git-github-push
description: 将本项目提交并推送到 GitHub 仓库，优先使用已配置的 SSH 公钥，SSH 22 端口不通时自动改走 443 端口。Use when the user asks to commit/push/提交项目 to GitHub, or says "提交到 github".
---

# Git GitHub Push

把当前项目 commit 并 push 到 GitHub，默认使用本机已配置的 SSH 密钥认证。

## 流程

### 1. 确认关键信息（缺一就问用户）

- **仓库地址**：`https://github.com/<owner>/<repo>` 或 `<owner>/<repo>.git`
- **认证方式**：默认 SSH 公钥；仅在 SSH 不可用时才改用 HTTPS
- 同一项目若已存在 `origin`（如指向 Gitee），**新增第二个远端** `github`，不要覆盖 `origin`

### 2. 先验证 SSH 连通性

```
ssh -o BatchMode=yes -o StrictHostKeyChecking=accept-new -T git@github.com
```

- 输出 `Hi <username>! You've successfully authenticated` → 可用
- 输出 `connect to host github.com port 22: Connection refused` → 22 端口被墙，**改走 443**：

```
ssh -o BatchMode=yes -o StrictHostKeyChecking=accept-new -p 443 -T git@ssh.github.com
```

443 可用时，远端地址直接写成显式端口形式，无需改 ssh config：

```
git remote add github ssh://git@ssh.github.com:443/<owner>/<repo>.git
```

（也可写 `~/.ssh/config` 永久映射：`Host github.com` / `HostName ssh.github.com` / `Port 443`，但修改用户主目录配置前应先征得同意。）

### 3. 准备与提交

```
git remote add github <上述地址>     # 已存在则 git remote set-url github <地址>
git add -A
git commit -m "<中文一句话说明本轮改动>"   # 无变更时跳过，不要提交空 commit
```

### 3.1 中文用户名环境（Windows）必读

若用户主目录含中文（如 `C:\Users\孟欣`），git 调起的 ssh 会把 HOME 解析成乱码路径，报：

```
Could not create directory '/c/Users/<乱码>/.ssh'
git@xxx: Permission denied (publickey)
```

修复：不给 git 依赖 HOME，显式指定私钥与主机校验策略（PowerShell 中用单引号包裹整条命令）：

```
git config core.sshCommand 'ssh -i "C:/Users/<用户名>/.ssh/id_ed25519" -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no'
```

配置只写入仓库本地 `.git/config`，不含任何令牌。一次性可用 `-c` 前缀临时生效。


### 4. 推送

```
git push github main                # 首次加 -u：git push -u github main
```

- 推送后用 `git ls-remote --heads github` 核对远端 commit 与本地 `git rev-parse HEAD` 是否一致，一致才算完成
- 远端已有 `main`/`master` 且历史不相关时：**先征得用户明确同意**再决定合并或覆盖，禁止直接 force push

### 5. 禁止事项

- 禁止把私人令牌、密码写进任何 git 命令、remote URL 或配置文件
- 禁止默认 `git push -f`；任何改写远端历史的行为都必须先获得用户显式确认
- 禁止在未核对远端结果时宣称「推送成功」

### 6. Commit message 规范

中文，格式 `<verb>: <简述>`：`feat:` 新功能 / `fix:` 修复 / `style:` 样式 / `chore:` 杂项 / `docs:` 文档
