---
author: Gavin
title: '{{title}}'
created: '{{date:YYYY-MM-DD}}T{{time:hh:mm:ss}}'
updated: '{{date:YYYY-MM-DD}}T{{time:hh:mm:ss}}'
source: ''
rating: 1 # 個人評分 1~5
description: 
tags:
  - #📥/💡
---

今天：<% tp.date.now("Do MMMM YYYY") %>
昨天：<% tp.date.yesterday("Do MMMM YYYY") %>
明天：<% tp.date.tomorrow("Do MMMM YYYY") %> 
從 Unsplash 隨機載入一張圖片：<% tp.web.random_picture("200x200", "landscape,water") %>