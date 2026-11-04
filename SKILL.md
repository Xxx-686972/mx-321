# mx_ GitHub 提交与 Pages 发布 Skill

<!-- mx_ 技能说明：把本地项目提交并推送到 GitHub，并发布为可访问的在线页面 -->

## mx_ 基本信息

| 字段 | 内容 |
| --- | --- |
| 技能名称 | mx_github_pages_push |
| 适用场景 | 需要把项目提交到 GitHub 仓库，并发布成在线页面 |
| 作者 | 孟欣 |
| 建立时间 | 2026-11-04 |
| 使用大模型 | DeepSeek-V4.1-Flash |

## mx_ 触发条件

用户说出以下类似意图时启用：

- 「提交到 GitHub」「push 到 GitHub」「上传项目到 GitHub」
- 「发布到 GitHub Pages」「把页面部署上线」

## mx_ 前置条件

1. 本机已生成 SSH 密钥（`~/.ssh/id_ed25519`），并已添加到 GitHub 账号。
2. 目标仓库已存在，且拥有推送权限。
3. SSH 22 端口不通时，改用 `ssh.github.com:443`。

## mx_ 执行步骤

1. 初始化或确认仓库：`git init`，配置远端 `github`。
2. 生成 `.gitignore`，排除 `node_modules/`、临时文件与 IDE 缓存。
3. 提交：`git add` 指定文件 → `git commit -m "说明本次变更"`。
4. 推送：`git push github HEAD:main`。
5. 校验：`git ls-remote --heads github` 与 `git rev-parse HEAD` 对比，必须一致。
6. 发布 Pages：仓库内提供 `.github/workflows/mx_pages.yml`，push 到 `main` 后自动构建部署。

## mx_ 安全约束

- 绝不在命令中写入明文令牌，认证统一走 SSH 公钥。
- 除用户明确要求外，禁止 `git push -f` 改写远端历史。
- 推送前检查待提交文件，避免把密钥、缓存、临时脚本入库。

## mx_ 发布结果

- 站点地址：https://xxx-686972.github.io/mx-321/
- 还原页地址：https://xxx-686972.github.io/mx-321/sina-rank.html
