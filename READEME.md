### 简介

这是 [瓜田 Neo](https://neo.schoolmelon.com) 的储存库，该站点基于 [Hugo](https://gohugo.io/) 构建，主题是 [FixIt](https://github.com/hugo-fixit/FixIt/)。

### 提交新文章

如果你希望提交更改，那么需要稍微了解一下文件的结构。所有的 Post 位于 `/content
/posts/`，如果你要新建，我建议你使用 Hugo 创建新的文章。

#### 安装 Hugo

这里建议安装 Hugo Extend 版本，具体的安装方式可去 Hugo 官网查看，这里不多赘述。

#### Fork 原来的分支

接下来把此库的 Dev 分支 Fork 到你自己的库中。然后拉回本地，

```
git clone 你的分支
```

#### 新建文章

接下来切换到库的目录，

```
cd 你的分支
```

创建一个文章模板，

```
hugo new posts/新文章名/index.md
```

接下来就和正常写文章没什么区别了，可以参考一下其它的文章。FixIt 主题有不少特别的组件，可以参考[文档](https://fixit.lruihao.cn/documentation/)。

#### 预览修改

Hugo 可以作为一个简单的 http 服务来让你预览更改，

```
hugo server -D -e production --disableFastRender
```

在这个命令中，`--disableFastRender` 可以让 Hugo 实时监听文件变动。

#### 提交 PR

提交 PR 的时候记得向 Dev 分支提交。而且自己的 Fork 也要多多同步上游。