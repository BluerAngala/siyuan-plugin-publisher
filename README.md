[中文](README_zh_CN.md)

# Publisher

![](./icon.png)

Publish articles from siyuan-note to platforms such as Yuque, Notion, Cnblogs, WordPress, Typecho, Hexo, Zhihu and more.

Support features such as fast publishing, image bed management, platform expansion, smart labels, etc.

**Front Row Announcement: the first AI-integrated version `1.10.0` of the Publish Tool is released!**

We recommend updating using the `uninstall->install` method. If there are any configuration issues, please back up `[workspace]/data/storage/syp/sy-p-plus-cfg.json`, then delete it, as this configuration file will be automatically initialized on first use.

## Recent Key Updates and Bug Fixes

- Support for manually generating titles, summaries, tags, and categories through AI.
- AI integration.
- Support for multiple publishing views: simple mode, detailed mode, and source code mode.
- Support for summaries, tags, categories, and knowledge spaces.
- Platforms that do not support image link replacement can use the platform's built-in image upload interface.
- Support for replacing image links with the Picgo plugin, if available.

## Platform List

Names not listed in order

- [X] Yuque
- [X] Notion
- [X] Github
  - [X] Hexo
- [X] Metaweblog
- [X] Cnblogs
- [X] Typecho
- [X] WordPress
- [X] Zhihu

## Core Features

- [X] **Rapid Publishing**: One-time configuration, one-click publishing.
- [X] **Image Hosting Management**: Integrated with PicGO image hosting, supports s3, minio, watermark plugins. Requires installation of [Picgo plugin](https://github.com/terwer/siyuan-plugin-picgo) from the marketplace. **Currently only available for PC client**.
- [X] **Extension Support**: Built on a unified blog API specification, with built-in metaweblogAPI, WordPress, Wechatsync, and Github support. Provides a unified adapter, theoretically extensible to any platform.
- [X] **Platform Toggle**: Enable or disable all platforms.
- [X] **Dynamic Addition**: Supports custom adding of platforms.
- [X] **AI Integration**: Integrates freeform chat and context-based chat based on the current document.
- [X] **Intelligent Categorization**: Supports intelligent slug aliases, intelligent titles, intelligent summaries, intelligent tags, intelligent categories.
- [X] **Article Association**: Supports linking existing platform articles to SiYuan notes for convenient future management. Supports one-way synchronization from SiYuan to platforms.
- [X] **Theme Adaptation**: Automatically adapts to dark mode and light mode.
- [X] **Language Support**: Multi-language support, including Chinese and English versions.
- [X] **Publishing Views**: Supports various publishing views - simple mode, detailed mode, and source code mode.
- [X] **Multiple Deployment Options**: Supports SiYuan Note plugin <sup>highly recommended</sup>, Chrome browser extension, and self-deployment.

This plugin promises that the basic functions will be free forever, and the follow-up related to intelligent AI may be charged, and the closed beta stage is completely free. If you want to support developers, please [feel free to support](https://github.com/terwer/siyuan-plugin-publisher/blob/main/README_zh_CN.md#Donate) here.

> 🌹 Tips: This plugin is an upgraded version of the original 'Siyuan Note Publishing Tool' widget, which includes all the functions provided by the original widget, provides a convenient menu operation entry, and has carried out a series of problem fixes and experience optimizations.
>
> In addition to [Extended Functions], **Other functions do not require any dependencies** , and there is no need to download the previous widget, which is already built-in in the plugin.

## Compatibility of Origin notes

This plugin is fully compatible with `siyuan-note PC Client` , due to limited personal energy, other devices are no longer supported.

## Supported taxonomy

- [X] Classification
  - [X] Multi-select classification

- [X] Knowledge space
  - [X] Single-choice knowledge space
  - [X] Tree-shaped radio knowledge space

## Platform Adaptation Plan

If you have a platform you want to use, but this tool has not yet been implemented, you can submit
the [Siyuan Note Publishing Tool Plugin Platform Adaptation Tracking Form](https://terwergreen.feishu.cn/share/base/form/shrcnGRdThUiqnhBg15xgclMM0c%20)
, the developer will consider including it in the development plan.

For platform adaptation, please refer
to [Latest Adaptation](https://terwergreen.feishu.cn/share/base/view/shrcnWT2IGIz1r94z9qvqUghDzd)

## Update history

Please check [CHANGELOG](./CHANGELOG.MD)

## FAQ

* Q1：How to install the publishing tool plugin? Where can I find his entrance after installation?

  A1：Find **`Bazaar->Plugins->Publishing Tools`** to download and enable.

  The installation process requires no further action. This is no different from the download and installation of other plugins.

  After the installation is complete, find the ✈️ icon on the top right toolbar, click the menu, and follow the corresponding instructions to use it.


* Q2：After installing the publishing tool plugin, do I still need to install the widget?

  A2：**unnecessary.**

  The plugin version contains all the functions of the widget version.

* Q3: I am not used to the new version of the operation and want to continue to use the previous widget, can I?

  A3:**Yes but not recommended.**

  **We strongly recommend that you use the plug-in version directly, because the plug-in version will be the main version for long-term maintenance in the future, and the hanger version has been deprecated only as a fix for problems and compatible with historical users.**


* Q4：I used to use `Custom JS Fragment` or add `WidgetInvoke` directly, do I still need to download the plugin now?

  A4：**Optional.** But we highly recommended to remove JS snippets and widgets to download the plugin version.

  If you don't want to use the plugin version, you don't need to download it, just use the original `custom JS fragment` or add `widget` to continue using.

  If you want to use the plugin version, then we strongly recommend that you delete the previously added `custom JS snippets` and `widgets`, download the plugin version directly, and enable it. No other additional action is required.


* Q5：Is it possible to migrate my historical configuration data items to the plugin?

* A5：**Yes.**

  Please go to `Settings->Import and Export->Import the historical data of the widget version. ` Operation.

  Note: The widget version configuration data import only supports `sy-p-cfg-v0.8.0.json` and `picgo.json`.


* Q6：What should I do if the platform I need to publish is not provided by the publishing tool?
* A6：Reference: [Platform Adaptation Plan](https://github.com/terwer/siyuan-plugin-publisher/blob/main/README_zh_CN.md#platform-adaptation-plan "Platform Adaptation Plan")

## Donate

If you approve of this project, invite me to have a cup of coffee, which will encourage me to keep updating and create
more useful tools~

### Wechat

<div>
<img src="https://static-rs-terwer.oss-cn-beijing.aliyuncs.com/donate/wechat.jpg" alt="wechat" style="width:280px;height:375px;" />
</div>

### Alipay

<div>
<img src="https://static-rs-terwer.oss-cn-beijing.aliyuncs.com/donate/alipay.jpg" alt="alipay" style="width:280px;height:375px;" />
</div>

# Thanks

- Thanks to the third-party framework for supporting the bottom layer of this project

  Names not listed in order

  |Name|version|vendor|
  | :---------: | :-----: | :---------: |
  |turbo|1.9+|Vercel|
  |vite|4.2+|Evan You|
  |Svelte|3.57+|Rich Harris|
  |TypeScript|5.0+|Microsoft|
  |siyuan-note|2.9.0+|D,V|
- Thanks to [leolee9086](https://github.com/leolee9086) and [ciwoyipang]() for the icon resource
