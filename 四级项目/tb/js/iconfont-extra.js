/*!
 * iconfont-extra.js —— 补充图标库（SVG Symbol 引用方式）
 *
 * 说明：
 *   iconfont.cn 项目「四级项目图标」只导出了 16 个图标（首页、发现、消息、我的、
 *   评论、点赞、转发、艾特、热搜、设置、发布、收藏、浏览记录、我的关注、消息中心）。
 *   本项目还用到了视频、搜索、返回、扫码、相册、钱包、购物袋等图标，iconfont 项目里没有，
 *   所以在这里用同样的 Symbol 语法补齐，页面上的写法完全一致：
 *
 *     <svg class="icon"><use xlink:href="#icon-video"></use></svg>         实心图标
 *     <svg class="icon icon-o"><use xlink:href="#icon-search-o"></use></svg> 线性图标
 *
 *   等你在 iconfont.cn 项目里补上这些图标并重新下载，把本文件删掉即可。
 *   实心图标用 iconfont 项目里的图标替换（去掉 -o 后缀），线性图标保持 -o 后缀。
 */
(function () {
    var symbols = [
        /* ===== 实心图标：与 iconfont 的实心图标风格一致，用在底部导航 ===== */

        // 视频（圆角矩形 + 播放三角）
        ['icon-video',
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.6 3.5h14.8A2.6 2.6 0 0 1 22 6.1v11.8a2.6 2.6 0 0 1-2.6 2.6H4.6A2.6 2.6 0 0 1 2 17.9V6.1a2.6 2.6 0 0 1 2.6-2.6Zm.1 2a.6.6 0 0 0-.6.6v11.8c0 .33.27.6.6.6h14.6a.6.6 0 0 0 .6-.6V6.1a.6.6 0 0 0-.6-.6H4.7Z"/>' +
            '<path d="M9.8 8.1v7.8L16.4 12 9.8 8.1Z"/>'
        ],

        /* ===== 线性图标：1.8 描边，颜色、大小都跟随文字（配合 .icon-o 使用） ===== */

        // 搜索
        ['icon-search-o',
            '<circle cx="11" cy="11" r="7.5"/><path d="M16.4 16.4 21 21"/>'
        ],
        // 返回
        ['icon-back-o',
            '<path d="M15 4.5 7.5 12 15 19.5"/>'
        ],
        // 加号（发微博）
        ['icon-plus-o',
            '<path d="M12 5v14M5 12h14"/>'
        ],
        // 红包
        ['icon-redbag-o',
            '<path d="M5 3.5h14A2.5 2.5 0 0 1 21.5 6v12a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 18V6A2.5 2.5 0 0 1 5 3.5Z"/>' +
            '<path d="M2.7 5.4c1.4 3 5 5 9.3 5s7.9-2 9.3-5"/>' +
            '<circle cx="12" cy="15.6" r="2.1"/>'
        ],
        // 清理（垃圾桶）
        ['icon-clean-o',
            '<path d="M4 6.5h16"/>' +
            '<path d="M9.5 6.5V4.8A1.3 1.3 0 0 1 10.8 3.5h2.4a1.3 1.3 0 0 1 1.3 1.3v1.7"/>' +
            '<path d="M6.4 6.5 7.1 19.3A1.6 1.6 0 0 0 8.7 20.6h6.6a1.6 1.6 0 0 0 1.6-1.3l.7-12.8"/>' +
            '<path d="M10.3 10.2v6.6M13.7 10.2v6.6"/>'
        ],
        // 设置（齿轮）
        ['icon-settings-o',
            '<circle cx="12" cy="12" r="3.1"/>' +
            '<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'
        ],
        // 扫一扫
        ['icon-scan-o',
            '<path d="M3 8.5V5.5A2.5 2.5 0 0 1 5.5 3h3"/>' +
            '<path d="M15.5 3h3A2.5 2.5 0 0 1 21 5.5v3"/>' +
            '<path d="M21 15.5v3a2.5 2.5 0 0 1-2.5 2.5h-3"/>' +
            '<path d="M8.5 21h-3A2.5 2.5 0 0 1 3 18.5v-3"/>' +
            '<path d="M3 12h18"/>'
        ],
        // 加好友
        ['icon-addfriend-o',
            '<path d="M16 20.5v-1.9a4.1 4.1 0 0 0-4.1-4.1H6.6A4.1 4.1 0 0 0 2.5 18.6v1.9"/>' +
            '<circle cx="9.2" cy="7.5" r="4"/>' +
            '<path d="M18 8v6M21 11h-6"/>'
        ],
        // 我的相册（图片）
        ['icon-photo-o',
            '<rect x="3" y="3.5" width="18" height="17" rx="2.4"/>' +
            '<circle cx="8.6" cy="9.2" r="1.7"/>' +
            '<path d="M20.8 15.1 15.9 10.2 5.2 20.5"/>'
        ],
        // 赞 / 收藏（星）
        ['icon-star-o',
            '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/>'
        ],
        // 浏览记录（时钟）
        ['icon-clock-o',
            '<circle cx="12" cy="12" r="9"/><path d="M12 6.6V12l4.1 2.4"/>'
        ],
        // 草稿箱（文档）
        ['icon-note-o',
            '<path d="M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8z"/>' +
            '<path d="M14 2.5V8h5.5"/>' +
            '<path d="M15.8 13.5H8.2M15.8 17.2H8.2"/>'
        ],
        // 我的钱包（卡包）
        ['icon-wallet-o',
            '<rect x="2.5" y="5" width="19" height="14" rx="2.4"/>' +
            '<path d="M2.5 10h19"/>' +
            '<path d="M6.2 15h3.2"/>'
        ],
        // 微博购订单（购物袋）
        ['icon-shop-o',
            '<path d="M6 2.5 3.5 6.2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-13L18 2.5z"/>' +
            '<path d="M3.5 6.2h17"/>' +
            '<path d="M15.6 10a3.6 3.6 0 0 1-7.2 0"/>'
        ],
        // 创作中心（闪电）
        ['icon-light-o',
            '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
        ],
        // 个性皮肤（T恤）
        ['icon-clothes-o',
            '<path d="M9.2 3.3 12 5.6l2.8-2.3 4.6 2.3a1 1 0 0 1 .5 1.3l-1.5 3-1.9-.9v10.9a1 1 0 0 1-1 1H8.5a1 1 0 0 1-1-1V9l-1.9.9-1.5-3a1 1 0 0 1 .5-1.3z"/>'
        ],
        // 用户
        ['icon-user-o',
            '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
        ],
        // 艾特
        ['icon-at-o',
            '<circle cx="12" cy="12" r="4"/>' +
            '<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>'
        ],
        // 评论
        ['icon-comment-o',
            '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'
        ],
        // 点赞
        ['icon-like-o',
            '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/>' +
            '<path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>'
        ],
        // 热搜（上升折线）
        ['icon-hot-o',
            '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>'
        ],
        // 转发（循环箭头）
        ['icon-repeat-o',
            '<polyline points="17 1 21 5 17 9"/>' +
            '<path d="M3 11V9a4 4 0 0 1 4-4h14"/>' +
            '<polyline points="7 23 3 19 7 15"/>' +
            '<path d="M21 13v2a4 4 0 0 1-4 4H3"/>'
        ]
    ];

    var sprite = '<svg>' + symbols.map(function (item) {
        return '<symbol id="' + item[0] + '" viewBox="0 0 24 24">' + item[1] + '</symbol>';
    }).join('') + '</svg>';

    function inject() {
        var box = document.createElement('div');
        box.setAttribute('aria-hidden', 'true');
        box.style.position = 'absolute';
        box.style.width = '0';
        box.style.height = '0';
        box.style.overflow = 'hidden';
        box.innerHTML = sprite;
        if (document.body.firstChild) {
            document.body.insertBefore(box, document.body.firstChild);
        } else {
            document.body.appendChild(box);
        }
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(inject, 0);
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', inject, false);
    } else {
        window.attachEvent('onload', inject);
    }
})();
