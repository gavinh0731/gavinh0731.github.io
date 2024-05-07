```js quickadd
//const selection = window.getSelection();
const selection = this.quickAddApi.utility.getSelectedText();  // QuickAdd 0.4.6
const aTexts =   [ "✏️ note", "📘 abstract", "ℹ️ info", "🔥 tip", "✅ success", 
  "❓ question", "⚠️ warning", "❌ fail", "🪲 bug", "📋 example",
  "✍️ quote", "💡 comment", "😝 LOL" ];
const aValues = [ "0", "1", "2" , "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ];
let choice = await this.quickAddApi.suggester(aTexts, aValues);
//console.log("choice", choice);

const admonitions = [ 
  ["ad-note", "重點"], ["ad-abstract", "摘要"], ["ad-info", "資訊"], ["ad-tip", "技巧"], ["ad-success", "完成"], 
  ["ad-question", "問題"], ["ad-warning", "警告"], ["ad-fail", "失敗"], ["ad-error", "錯誤"], ["ad-example", "範例"], 
  ["ad-quote", "引用"], ["ad-comment", "建議"], ["ad-LOL", "好笑"]
];

admonition = admonitions[choice][0];
title = admonitions[choice][1];

// 在腳本裡，換行符號和倒引號不要在字串裡使用，改用String.fromCharCode()才不會出現解析錯誤
const nl = String.fromCharCode(10);
const backQuotes = String.fromCharCode(96) + String.fromCharCode(96) + String.fromCharCode(96);

result = backQuotes + admonition + nl +
  "title: " + title + nl + selection + nl + backQuotes;

return result;
```