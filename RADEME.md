### 主網站EJS原始檔

僅記錄檔案和程式的規格。

主網站整體規格請參[主網站規格](https://paper.dropbox.com/doc/CNA--Ae9sU5iL~t8OXPpPoAW_AhBmAQ-1NjtkkS0XZodCPblquHBG?auth_redirect=true&first_sign_in=false)

## Usage

`npm i` -> 安裝所需要的套件

`gulp` -> 開發模式

`ctrl+C` ->中止


## Dependency

Node v10+

Gulp v4+

## 列表list 與 內文頁article

新聞專題為接頁設計，有自己獨特的樣式。

| 結構                        | 檔案                  |
|-----------------------------|----------------------|
| 一般列表                     | list.html            |
| 一般內文                     | article.html         |
|新聞專題列表接內頁             |list-special.html     |
|(接的內頁是article-special-2)                        |
|新聞專題內頁第一則             |article-special.html  |
|新聞專題內頁非第一則           |article-special-2.html|
|國際兩岸列表                  |list-style3.html      |


## Gulp 4 Notice

請先移除 `node_modules`、`package.json`和`package-lock.json`

再pull回本機

重新`npm i`安裝新版gulp


## Update

* 20200716 gulp 3 升級到 gulp 4