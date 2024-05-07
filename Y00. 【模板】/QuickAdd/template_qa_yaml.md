---
author: Gavin
title: <%tp.file.title%>
created: 2022-11-14T05:14:05
updated: 2022-11-14T06:01:47
source: 
rating: 1 # 個人評分 1~5
description: 
tags: 
```js quickadd
let aInput = await this.quickAddApi.checkboxPrompt(
  ["📥/📰️", "📥/💡", "📥/📚️", "📥/📮", "📥/🎧️", "📥/▶️", "📥/🎬", "📥/📜️", "📥/💬"], 
  ["📥/💡"]);
const input = aInput.join(", ");
return `  [ ${input} ]`;
```
---
# <%tp.file.title%>

<% tp.file.cursor(0) %>

---
## 相關連結
