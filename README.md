[中文](README_zh_CN.md)

# Publish Tool

Publishing articles from siyuan-note to platforms such as Yuque, cnblogs, WordPress, Typecho, HUGO, HEXO, etc.

> 🌹Reminder: This plugin is an upgraded version of the original `Siyuan Notes Publishing Tool` widget. Its functions include all the functions provided by the original widget. It also provides a convenient menu operation entry, and has carried out a series of bug fixes and experience optimization.

> If you want to see previous version, please refer to my original widget: [sy-post-publisher](https://github.com/terwer/src-sy-post-publisher)

## Core Features

- **Extremely fast release**: One-time configuration, one-click release
- **Picture bed management**: Integrate PicGO picture bed, support s3, minio, watermark plugin
- **Support for extensions**: Based on the unified blog API specification, built-in support for metaweblogAPI, WordPress and Github, and provides a unified adapter, which can theoretically be extended to any platform
- **Platform switch**: All platforms support enabling and disabling, the blog garden is enabled by default, and can be disabled at any time
- **Dynamic Newly Added**: Support custom adding platform
- **Smart Classification**: Support smart tags, smart slug aliases, smart summaries, and continue to improve
- **Article Binding**: Support linking existing platform articles to Siyuan Notes to facilitate follow-up management, support Siyuan->platform one-way synchronization
- **Adapt to Theme**: Automatically adapt to dark mode and light mode
- **Language support**: multi-language support, support Chinese version and English version
- **Release view**: Support multiple release views, simple mode, detailed mode and source code mode
- **Multiple deployments**: support Siyuan notes plugin, Chrome browser extension, self-deployment

## Platform List

Names not listed in order

- cnblogs
- WordPress
- Yu Que
- Github
    - Hexo
    - Hugo

## Platform Adaptation Plan

If you have a platform you want to use, but this tool has not yet been implemented, you can submit the [Siyuan Note Publishing Tool Plugin Platform Adaptation Tracking Form](https://terwergreen.feishu.cn/share/base/form/shrcnGRdThUiqnhBg15xgclMM0c )
, the developer will consider including it in the development plan.

For platform adaptation, please refer to [Latest Adaptation](https://terwergreen.feishu.cn/share/base/view/shrcnWT2IGIz1r94z9qvqUghDzd)

## Donate

If you approve of this project, invite me to have a cup of coffee, which will encourage me to keep updating and create more useful tools~

### Wechat

<img src="https://static-rs-terwer.oss-cn-beijing.aliyuncs.com/donate/wechat.jpg" alt="wechat" style="width:280px;height:375px;" />

### Alipay

<img src="https://static-rs-terwer.oss-cn-beijing.aliyuncs.com/donate/alipay.jpg" alt="alipay" style="width:280px;height:375px;" />

# 感谢

Thanks to the third-party framework for supporting the bottom layer of this project

Names not listed in order

| Name       | version | vendor      |
|------------|---------|-------------|
| turbo      | 1.9+    | Vercel      |
| esbuild    | 0.17+   | evanw       |
| vite       | 4.2+    | Evan You    |
| Svelte     | 3.57+   | Rich Harris |
| TypeScript | 5.0+    | Microsoft   |
| siyuan-note | 2.9.0+  | D,V         |