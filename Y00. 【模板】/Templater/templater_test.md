<%*
let today = tp.date.now("YYYY-MM-DD")
let inputDate = await tp.system.prompt("輸入示例："+today,today)
titleName = window.moment(inputDate, "YYYY-MM-DD", true).format("YYYY-MM-DD_ddd")

before_date = window.moment(inputDate, "YYYY-MM-DD", true).add(-1,"days").format("YYYY-MM-DD_ddd")

after_date = window.moment(inputDate, "YYYY-MM-DD", true).add(1,"days").format("YYYY-MM-DD_ddd")

let createTime = tp.file.creation_date()
let modificationDate = tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")
-%>

---
author: Gavin
title: '{{title}}'
created: '{{date:YYYY-MM-DD}}T{{time:hh:mm:ss}}'
updated: '{{date:YYYY-MM-DD}}T{{time:hh:mm:ss}}'
source: 
rating: 1 # 個人評分 1~5
description: 
tags:
  - #📥/💡
---


<< [[<% before_date %>]] | [[<% after_date %>]] >>

<% tp.web.daily_quote() %>
<% tp.web.random_picture("200x200", "landscape,water") %>

#### 重點關注
-  ==早上 7 件事==
    - [ ] 花點時間回顧和反思
    - [ ] 查看「反向連結」和「工作待辦」
    - [ ] 掃一眼郵件
    - [ ] 確定最困難的工作，拆分成多個小任務
    - [ ] 寫下需要思考的東西
    - [ ] 忽略人際關係衝突
    - [ ] 不開會/少開會
- 工作效率
    - [[會議檢查清單]]
    - [[Workbench]]


#### 閱讀筆記 & 會議紀要
通常記錄一些需要技術閱讀的內容
<% tp.file.cursor (1) %>

#### 間歇日記
- 今日重點任務
    - xxxxx


<%*
// await tp.file.move("/Daily/" + titleName)
tp.file.cursor()
-%>
