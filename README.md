# 我的餐廳清單
一個使用 Node.js + Express 打造的餐廳美食網站，可以瀏覽餐廳、依據不同搜尋功能進行搜尋、查看詳細資訊、甚至連結到地圖。

## 畫面呈現
![首頁]（https://github.com/martinchiu/restaurantList/blob/main/public/image/首頁.png)
![查看詳細資訊]]（https://github.com/martinchiu/restaurantList/blob/main/public/image/展示更多資訊.png)
![搜尋]（https://github.com/martinchiu/restaurantList/blob/main/public/image/搜尋.png)
![搜尋未果]（https://github.com/martinchiu/restaurantList/blob/main/public/image/搜尋未果.png)

## 功能
- 使用者可以在首頁看到所有餐廳與它們的簡單資料，包含照片、店名、分類、評分
- 使用者可以點擊照片瀏覽更多資訊
- 使用者可以透過地址連結至google map
- 使用者可以用店名進行搜尋
- 使用者可以用餐廳類別進行搜尋
- 如果搜尋找不到結果會跳出提醒畫面

## 使用說明
1. 請先確認有安裝 node.js 與 npm
2. 打開終端機 (Terminal)，並複製 (Clone) 此專案至本機電腦
```
git clone https://github.com/martinchiu/restaurantList.git
```
3. 進入專案資料夾
```
cd restaurant-list
```
4. 安裝所需套件
```
npm install
```
5. 使用Node.js執行伺服器
```
node app.js
```
6. 在瀏覽器網址列輸入 `http://localhost:3000/` 瀏覽網站
7. 若欲暫停使用
```
ctrl + c ( mac : command + .)
```

## 開發工具
- Node.js 14.16.0
- Express 4.17.1
- Express-Handlebars 6.0.1
- Bootstrap 4.3.1
- Font-awesome 5.15.4