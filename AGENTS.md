# AGENTS.md

Static HTML/CSS/JS demo collection (Chinese-language). No build system, no package manager, no tests, no lint, no dev server — open the `.html` files directly in a browser (`file://`) to verify. Do not run `npm install` or look for a test command.

## Layout / entrypoints

- `index.html` — homepage portal for the icon studies (`iconfont-1/3/4.html`, `inconfont-2.html`; note the misspelled `inconfont-2.html`).
- `index1.html` — separate class-practice index, not linked from the homepage.
- `cdn/` — vendored, fully offline assets (`fontawesome/`, `fonts/` Inter + Playfair, `iconfont/`, `lucide/`). All pages reference these locally; never reintroduce remote CDN URLs. Put newly downloaded assets under `cdn/`.
- `四级项目/tb/` — Weibo-style mobile clone (the most “app-like” page set). Edit this copy, **not** the duplicate snapshot at `四级项目/tb/四级项目/tb/`.
- `web.mengxin/` — plain imported Gitee snapshot of first-week coursework (no nested `.git`; never `git init` it). `课堂练习/` holds the class exercises.
- `.trae/skills/git-gitee-push/SKILL.md` — required safe procedure for committing/pushing to Gitee.
- `mx_prompt.md` — append-only prompt log (see below).

Keep pages at their current depth or fix relative `cdn/...` links; assets are referenced relative to the repo root.

## Repo conventions (non-default, follow them)

- New CSS class names, IDs, and JS variables must start with `mx_` (e.g. `.mx_link-card`, `--mx-accent`). Legacy coursework folders predate this rule and do not follow it.
- Every new HTML file must get a hyperlink entry in the root `index.html`.
- Before executing a user request, append the prompt to `mx_prompt.md` with timestamp, model, and prompt text — never overwrite earlier entries. Never write real tokens into it (past tokens are redacted).

## Environment gotchas (Windows, Chinese paths)

- Paths and filenames contain Chinese characters and sometimes spaces. In PowerShell use `-LiteralPath` and quote paths.
- PowerShell 5.1 `Get-Content` defaults to ANSI/GBK and garbles these UTF-8 files. Use the Read tool, or `Get-Content -Encoding UTF8`, and set `[Console]::OutputEncoding=[Text.Encoding]::UTF8` before printing Chinese.

## Git / Gitee

- Remote: `https://gitee.com/neusoft_wangyao_jsj/mxmxmx.git`. The only local branch is `main` (tracks `origin/main`); the remote default is `master` (`origin/HEAD -> origin/master`). `origin/main` and `origin/master` are currently identical. Check `git log main..origin/master` before pushing; sync both branches if they diverge.
- Never embed the Gitee personal access token in a command. Follow `.trae/skills/git-gitee-push/SKILL.md` (Windows Credential Manager or one-shot `git credential approve`), and only push when asked.
- Commit messages are Chinese, `<verb>: <简述>` (`feat:`, `fix:`, `style:`, `chore:`, `docs:`).
- The old root `第一周课/` was moved into `web.mengxin/第一周课/` and `课堂练习/`; expect those deletions in `git status` and do not recreate the old directory.
