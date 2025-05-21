---
title: git 操作
abstract: 主要介绍 git 常用操作，备份本地文件夹和版本管理的好帮手。
icon: material/git
author: Jovan
tags: 
  - git
---

1. 将当前文件夹初始化为git仓库

```bash
git init .
```

2. 保存当前路径文件

```bash
git add .
``` 

3. 提交仓库变更

```bash
git commit -m "init repository"
``` 

4. 添加远端仓库链接

```bash
git remote add origin git@github.com:your-github-name/your-repository-name.git
``` 

5. 查看仓库源信息

```bash
git remote -v
``` 

6. 设置主分支

```bash
git branch -M master
``` 

7. 推送本地仓库至远端

```bash
git push -u origin master
``` 
