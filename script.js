const mainTitle = document.getElementById("main-title")
console.log(mainTitle);

/*これをJSファイルに書いて読み込むと、上記で書いたh1の要素がすべて取得できています。
documentはJSファイルを読み込んでいるHTMLが対象です。
そしてgetElementByIdでid名を取得しています。
()の中に書かれたid名がHTML上に存在したら取得できます。 */

//class名の取得

const contents = document.getElementsByClassName("contents")
console.log(contents);


//DOMの挿入
// idで指定したwrapperを取得
const wrapper = document.getElementById("wrapper")
// 挿入するHTML要素
const newBox = `<div class="new-box">new-box要素</div>`
// setTimeoutはJavaScriptが用意している関数です・
setTimeout(function () {
// wrapper要素内先頭にnewBoxに代入されたHTML要素を挿入
wrapper.insertAdjacentHTML("afterbegin", newBox)
// wrapper要素の直後にnewBoxに代入されたHTML要素を挿入
wrapper.insertAdjacentHTML("afterend", newBox)
}, 3000)


//DOMの削除
// idで指定したparentを取得
const parent = document.getElementById("parent")
// idで指定したchildを取得
const child = document.getElementById("child")
setTimeout(function () {
// 3秒後に#child要素が削除される
parent.removeChild(child)
}, 3000)