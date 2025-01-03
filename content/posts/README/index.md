---
slug: readme
title: README 读前必看
subtitle:
date: 2023-05-13T13:01:14+08:00
draft: false
author:
  name: James
  link:
  email:
  avatar:
description: 本页面介绍了项目由来，如何投稿，合作联系方式，当前项目进度。
keywords:
license:
comment: true
weight: 10
tags:
  - Notice
categories:
  - Notice
hiddenFromHomePage: false
hiddenFromSearch: false
summary: 本集收其它网站启发，同时做出了一些改进和重写。完全开源，欢迎各位提交改进。
resources:
  - name: featured-image
    src: featured-image.jpg
  - name: featured-image-preview
    src: featured-image-preview.jpg
toc: true
math: false
lightgallery: false
password:
message:
repost:
  enable: true
  url:

# See details front matter: https://fixit.lruihao.cn/documentation/content-management/introduction/#front-matter
---

<!--more-->

## 前言

<u>瓜田Neo</u> 是什么？原来的 <u>​留学生瓜田</u> 呢？

​留学生瓜田 的站主决定退出了，这是他的声明：

> ### 没走错，我烦了，不做了。
> 
> 在我做这个站的时候我一篇pdf都还没看过，纯粹只是看好多人在要想图个乐子给身边的朋友做个站玩一下。
> 
> 一周不到超过一百万的访问量让整件事情变了味。
> 
> 过去的几天简单的概括其实是各种事情推着我走，想一起开发网站的朋友，找我做推广的，帮助我想办法运营的，想要投稿的，想投资的，也碰到了很热心想要帮我出主意的人，以至于没有时间停下来真正去思考一下这个站到底做了些啥。
> 
> 这个站点从一开始的性质意味着在野蛮生长的过程当中，所谓“瓜”们的真实性得不到任何的保障，巨大的流量对于被爆料者，爆料者也不可避免的会带来完全没有必要的伤害。截至现在，已经有超过十人因为站点带来的困扰而想要将pdf下架。
> 
> 即便真的这个站能够在未来成长成为一个流量不错的稳定的论坛，这个运用窥私欲，爆料大尺度八卦事件的增长切入点也实在没法让我很好的接受。整个站点在流量的加持下逐渐开始大幅度地偏离我自己的价值观。
> 
> 所以在站点二次重构基本完成，评论点赞功能添置完成可以上线的情况下，我依然决定将留学生瓜田这个站点永久关闭，建立的超过两千人的社群也会在今晚解散，网站唯一打的广告的收益也已经悉数退还，我向所有可能伤害到的人说抱歉。

重构网站是我在操作，于是我上线了当初的分支。

### 瓜田 Neo

[**瓜田 Neo**](https://neo.schoolmelon.com/) 是 ​留学生瓜田 的分支版本。更轻量简洁，同时开放所有源代码和工程文件。我们重写了，或正在重写投稿内容，以此达到更好的阅读效果。

{{< admonition type=success title="Alpha" open=true >}}
目前，[**瓜田 Neo**](https://neo.schoolmelon.com/) 正在进行灰度测试，收集反馈。
{{< /admonition >}}

## 愿景

本网站旨在通过收集和分析具有时效性的社会学案例，来培养公众的批判性思维能力，推动不同阶层的认知发展。

对普通公众，我们专门挑选反映当下社会现实的案例，通过提供多角度解读，训练读者透过现象探求本质，并对社会议题形成独立思考。

对学术界研究者，我们汇聚大量尚未被学界广泛关注的前沿案例。这些具有高度时效性的一手资料，可丰富学者的实证研究，拓展学术视野。

对留学生群体，考虑到他们的双重文化背景，我们的案例涵盖东西方社会的讨论，旨在加强留学生的跨文化辨析能力和批判性思维。这将提升他们的学术竞争力和就业优势。

对互联网，我们致力搭建理性、包容的讨论平台，将这些尚未进入主流视野的观点提供出来，以丰富网络内容，平衡当前舆论生态，推动互联网的健康发展。

我们秉持理性、进步的价值观，不偏向任何意识形态，欢迎各界人士基于案例，展开理性探讨与交流。

## 改进

我们重写了 <u>[​留学生瓜田](https://www.lxsguatian.com/)</u> 中的大部分内容，做出了改进，优化了观感。同时把截屏内的内容以字符的形式重新展现，这样使得有了通用性。

对于部分图像，我们使用了生成式AI来修复画质，提升观感。

对于文本，我们使用生成式AI润色，重写，分段了原有的内容，包括由于复制导致的格式错误。

对于内容，我们开源了全部代码和文档，如有兴趣，你甚至可以在本地部署一个自己的克隆，详情见文尾。

对于性能，我们使用了轻量化，静态的 [FixIt](https://github.com/hugo-fixit/FixIt) 主题配 [Hugo](https://gohugo.io/) 架构，拥有极强的性能。

## 局限性

本集对真实性的验证极其有限，只能寄托于快速的版本控制，及时修正问题。因此存在被恶意利用的风险，比如打击报复。

从道德层面，公开进行道德审判是否是社会所能接受的，这依旧是具有争议性的，同时有潜在的法律风险。

样本数量有限，而且定位也不是数据库，所以所谓的避坑什么的功能完全不现实。

## 加入我们

你有几种贡献的方式，修正错误，以及完善内容。

### 提交改进

我们的代码托管在GitHub，

<a href="https://github.com/JamesFlare1212/GOSSIP/">
  <img src="https://github-readme-stats.jamesflare.com/api/pin/?username=JamesFlare1212&repo=GOSSIP&theme=github_dark_dimmed&show_owner=true" alt="GOSSIP Git Card">
</a>

如果你希望提交改动，请以 [Pull Request](https://github.com/JamesFlare1212/GOSSIP/pulls) 的形式提出分支合并请求，而不是试图直接在主分支提交 [Commit](https://github.com/JamesFlare1212/GOSSIP/commits/dev)。

### 修正错误

如需修正错误，你需要在本项目的仓库提出 [Issue](https://github.com/JamesFlare1212/GOSSIP/issues)。

在提交 **PR**（[**P**ull **R**equest](https://github.com/JamesFlare1212/GOSSIP/pulls)）之前，我希望你充分在 [Issue](https://github.com/JamesFlare1212/GOSSIP/issues) 中讨论。

假设你受到了别入的造谣诋毁，不用担心。我们不会容忍此行为，而且我们也有义务和责任移除平台上的虚假信息。

### 完善内容

如果你想提出新的想法，我推荐你在 [Discussions](https://github.com/JamesFlare1212/GOSSIP/discussions) 提出，然后进行讨论，而不是提出 [Issue](https://github.com/JamesFlare1212/GOSSIP/issues)，因为这不是错误，而是改进。

如果你有不错的内容，或者知道优质的来源，欢迎投稿。

### 投稿

如果你没有能力或者没有时间像这样直接重写一篇瓜，只有类似的PDF文件，或者相关链接。不过你仍旧希望分析和投稿，那么也是可以的，不过传文件可能比较麻烦，可以找个地方上传然后发链接。直接通过邮箱发送附件也是可以的

你还可以可以加入 [Telegram群组](https://t.me/schoolmelon) 投稿。

### Form

如果你只是有一些想法，而不希望深入讨论，可以直接通过此表反馈，

<iframe width="100%" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jtRrTNUQURPOUpVMUFNRjhTUVRGRTVPNFBEVElBWi4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>

## 合作

你可以通过 jamesflare@schoolmelon.com 和我们联系。说明合作内容，最好简要地介绍一下项目。

亦可以通过 Telegram（[@JamesFlareV2](https://t.me/JamesFlareV2)）和我们联系。

## Roadmap

- [x] ~~ucsd瓜.pdf~~
- [x] ~~UCSD人渣软饭男，骗女生10余人，出轨pc偷钱偷包偷衣服虐猫蹭吃蹭住勾搭友妻刷室友信用卡借钱不还_纯图版.pdf~~
- [x] ~~重生之我在悉尼大学立白富美人设当老赖.pdf~~
- [x] ~~约克大学22管理系Riz陈俞健Npd人格家暴+伪富二代+PUA+精神控制 1.pdf~~
- [x] ~~英区新瓜：英国渣男陈邦瑞骗我感情的半年.pdf~~
- [x] ~~英区大瓜：重生之我在格拉斯哥当公交.pdf~~
- [x] ~~谢菲SB男，KK聊骚，欠钱，分手诋毁.pdf~~
- [x] ~~悉尼牛子战神传.pdf~~
- [x] ~~诺丁汉谢俊事件详细记录.pdf~~
- [x] 南安普顿新瓜1.0版本.pdf
- [x] 【悉尼er清算系列】网红预科泰勒出圈13秒视频，Waterfall高端公寓变身女子ufc决赛现场，背后真相突出一个离谱.pdf
- [x] ~~kcl骗炮渣男避雷.pdf~~
- [x] nyu渣男王子聪.pdf
- [x] ~~UCSD绿帽奴合集.pdf~~
- [x] ~~埃克塞特_陈邦瑞.pdf~~
- [x] ~~爱丁堡下头装b男.pdf~~
- [x] ~~澳洲大瓜：布里斯班UQ04渣女在线教学如何成为时间管理大师.pdf~~
- [x] ~~贝法王子录（七夕专供）.pdf~~
- [x] ~~伯明翰造谣王田歌.pdf~~
- [x] ~~布里斯班大瓜：uq泰迪自称纯情男高，风骚半生归来仍是处男.pdf~~
- [x] ~~澄清书.docx~~
- [x] ~~抖音伦敦双胞胎网红.pdf~~
- [x] ~~副本给大家安利悉尼北区某高中生书杯.pdf~~
- [x] ~~高知千金 戏精附体 后续.pdf~~
- [x] ~~23fall美本广东佛山碧桂园学校周姓男生十一宗罪.pdf~~
- [ ] 格拉斯哥张进（恶臭公交男）1.pdf
- [ ] 回应下爱丁堡公主的“下头男pdf”xddd.pdf
- [ ] 剑桥地图炮（疾病防控）.pdf
- [ ] 伦敦避雷 天价ww按秒计费.docx
- [ ] 伦敦曼城：我可以你们不可以.pdf
- [ ] 伦敦徐州Lex张天瑜 欠债反叫债主穷酸”.pdf
- [ ] 曼城玫瑰花姐以及考文垂高智商男友+(1) (1).pdf
- [ ] 墨尔本DJ（mc）鸭子软饭硬吃三份pdf合订本.pdf
- [ ] 墨尔本DJ鸭子软饭硬吃pdf(1).pdf
- [ ] 女同快逃！避雷南安LES渣女-边PUA女友边出轨撩骚-.pdf
- [ ] 王婆刀鱼面 盗图行为恶劣.pdf
