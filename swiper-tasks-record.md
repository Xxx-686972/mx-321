# mx_ Swiper 课堂任务 · 任务一至任务三学习记录

<!-- mx_ 作者：孟欣 · 建立时间：2026-11-09 · 使用大模型：DeepSeek-V4.1-Flash · 功能名称：Swiper 课堂任务学习记录 -->

## mx_ 一、任务一 · 提示词工程师

**目标**：让 AI 生成 `new Swiper('#wySw4', {...})` 配置，需满足
① 无缝循环 ② 3.2 秒自动翻页且手动操作后不停止 ③ 圆点分页器可点击 ④ 初始效果为 cube。

### mx_ 第 1 轮提示词

```
请给我写一段 Swiper 11 的初始化代码，目标是 #wySw4：
要循环播放，3.2 秒自动翻页，有分页圆点，初始效果是 cube，
动画时长 800 毫秒。
```

### mx_ 第 1 轮 AI 回答

```js
new Swiper('#wySw4', {
  loop: true,
  effect: 'cube',
  speed: 800,
  autoplay: { delay: 3200 },
  pagination: { el: '.swiper-pagination' }
});
```

### mx_ 第 1 轮的问题（自查发现 2 处遗漏）

| 需求 | 第 1 轮结果 | 问题 |
| --- | --- | --- |
| ② 手动操作后不停止 | 只写了 `delay` | 缺少 `disableOnInteraction: false`，用户拖动后自动播放会永久停止 |
| ③ 圆点可点击 | 只写了 `el` | 缺少 `clickable: true`，圆点只能看不能点 |

### mx_ 第 2 轮提示词（把需求逐条编号，明确"必须"）

```
上一版有两处不满足要求，请按下面 4 条逐条对照修正，并且逐条说明你写在哪一行：
1. loop: true 无缝循环；
2. autoplay 的 delay 为 3200 毫秒，且用户手动拖动之后自动播放必须继续
   （也就是说 disableOnInteraction 要设为 false）；
3. 分页器的 el 指向 #wyPag4，并且圆点必须可以点击跳转（clickable: true）；
4. 初始 effect 为 'cube'，切换动画 speed 为 800。
只输出最终代码，不要省略任何一项配置。
```

### mx_ 第 2 轮 AI 回答（采纳版）

```js
var mx_swiper4 = new Swiper('#wySw4', {
  loop: true,
  effect: 'cube',
  speed: 800,
  autoplay: { delay: 3200, disableOnInteraction: false },
  pagination: { el: '#wyPag4', clickable: true }
});
```

### mx_ 验证结果（粘进页面逐项实测）

| 需求 | 验证方法 | 结论 |
| --- | --- | --- |
| ① 无缝循环 | 翻到最后一张继续往后翻 | 回到第一张，无空白 ✅ |
| ② 3.2 秒自动 + 拖动后不停 | 拖动一次后静置观察 | 约 3.2 秒后继续自动翻页 ✅ |
| ③ 圆点可点击 | 点第 3 个圆点 | 直接跳到第 3 张 ✅ |
| ④ 初始 cube | 刷新页面看首屏切换 | 呈 3D 立方体翻转 ✅ |

**一句话结论**：第 1 轮 AI 少了 `disableOnInteraction: false` 和 `clickable: true`，把需求拆成编号逐条点名后，第 2 轮一次性补齐，四项验证全部通过。

**答辩预演**：第一版漏掉的是"拖动后自动播放不停止"和"圆点可点击"；第二轮改成编号清单 + 明确写出参数名与取值，AI 才不再自行省略。

---

## mx_ 二、任务二 · creative 电影墙

在演示四新增第 7 个按钮「creative 电影墙」，实际配置：

```js
creativeEffect: {
  limitProgress: 3,
  prev: { shadow: true, translate: ['-60%', 0, -400], rotate: [0, 0, -18], scale: 0.7 },
  next: { shadow: true, translate: ['60%', 0, -400], rotate: [0, 0, 18], scale: 1.15 }
}
```

### mx_ prev / next 的 transform 各控制什么

- `prev`：控制**当前 slide 左边那一张（已经划过去的那张）**。本作业里它左移 60%、向屏幕里退 400px、逆时针转 18 度、缩到 0.7 倍，看起来像被推到幕后的小卡片。
- `next`：控制**当前 slide 右边那一张（即将进场的那张）**。本作业里它右移 60%、同样后退 400px、顺时针转 18 度、放大到 1.15 倍，像是从片墙右侧被拈出来。
- 百分号 `translate` 的百分比**相对于 slide 自身的宽高**，不是相对容器：`'-60%'` 表示向左移动"一张卡片宽度的 60%"。
- `rotate` 的角度单位是度，第三个数字是沿 Z 轴旋转（屏幕上像转盘），改成 20 就是转 20 度。

### mx_ 为什么像"电影选片墙"

相邻卡片缩小、后退、带角度，中间那张保持正视最大——正是流媒体选片界面层层排开的感觉。

---

## mx_ 三、任务三 · 综合创作

### mx_ ① 第六件展品：爱达·魔都号

- 定位：首艘国产大型邮轮，2024 年 1 月首航。
- 图片：AI 生成，横版 16:9，存于 `swiper-imgs/aida_modu.jpg`。
- slide 结构与其余展品完全一致：`swiper-slide > img + .wy-cap(h3 + p)`，四个演示台均已加入。

### mx_ ② 超纲能力：keyboard 键盘控制

选用 `keyboard`，在演示四初始化时加入：

```js
keyboard: { enabled: true }
```

作用：鼠标点击轮播区域使其获得焦点后，按 ← / → 方向键即可翻页。

**答辩预演**：`keyboard.enabled` 为 `true` 时 Swiper 会监听键盘方向键；把 `delay` 改成 1500 后，自动翻页间隔由 3.2 秒变为 1.5 秒，翻页更快。

---

## mx_ 四、思政一句话

天眼之父南仁东用 22 年把"不可能"变成"中国天眼"；轮播终会翻页，但奋斗者的故事永远自动播放。
