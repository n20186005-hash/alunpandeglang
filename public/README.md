# Alun-Alun Pandeglang · 图片素材包

本包包含上一版网站实际使用的 **8 个视觉文件**，并按用途分为生成图形与地点照片。文件名与网站源码/素材清单保持对应，便于替换为自有存储地址或纳入其他静态托管方案。

| 目录 | 文件 | 网站用途 | 使用提示 |
| --- | --- | --- | --- |
| `generated/` | `alun-alun-pandeglang-mark.png` | Pendopo–罗盘品牌标记 | 可用于页眉、页脚、网站图标。 |
| `generated/` | `pandeglang-paper-texture.png` | 纸张纹理 | 用作低对比度的编辑式背景。 |
| `generated/` | `pandeglang-botanical-corner.png` | 植物角落插画 | 用作英雄区的装饰性空间层。 |
| `generated/` | `pandeglang-compass-ribbon.png` | 罗盘路径图形 | 用于路线标记及段落分隔。 |
| `generated/` | `pandeglang-morning-light.png` | 抽象晨光背景 | 用于英雄区色彩与景深层次。 |
| `photos/` | `alun-alun-pandeglang-landmark.jpg` | 英雄区主照片 | 展现广场与地标环境。 |
| `photos/` | `alun-alun-pandeglang-aerial.jpg` | 英雄区辅助照片 | 展现周边的广角环境。 |
| `photos/` | `alun-alun-pandeglang-monument.jpg` | 历史/语境段落照片 | 展现地标细节。 |

## 权利与发布提示

`generated/` 内为本项目制作的品牌/装饰图形，可随该网站设计继续使用。`photos/` 内为地点照片素材，交付时保留为视觉参考及现有网页所用文件；在公开商业传播、再授权或部署到新的站点前，请先确认每张照片的摄影权利、使用范围与署名要求。网站中应保留“照片权利归原摄影者或权利人所有”的说明，直到完成核验。

> 本包不包含第三方地图图层、Google Maps 嵌入内容或网页抓取的外部资源。

## 与源码的配合方式

将图片上传至您控制的对象存储/CDN 后，更新 `src/components/GuidePage.astro`、`src/components/Header.astro`、`src/components/Footer.astro` 和相关样式文件中的图片地址。请保持替代文本与图片说明，以支持无障碍阅读与素材来源追溯。
