const fs = require('fs');
const https = require('https'); //https도 있음
const path = require('path');

function downloadImage(imageUrl, savePath) {
    const file = fs.createWriteStream(savePath);
    
    https.get(imageUrl, (response) => {
        if (response.statusCode !== 200) {
            console.error(`Failed to get image: ${response.statusCode}`);
            return; 
        }
        
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Image downloaded successfully: ${savePath}`);
        });
    }).on('error', (err) => {
        console.error(`Error downloading image: ${err.message}`);
    });
}

// 사용 예시
//const imageUrl = 'https://img.danawa.com/prod_img/500000/668/934/img/4934668_1.jpg?shrink=330:*&_v=20220103160623https://example.com/image.jpg'; // 여기에 실제 이미지 URL을 입력하세요.
//let savePath = path.join(__dirname, 'downloaded_image.jpg');

const imageUrlArr = ['https://prk101212.shopon.biz/data/goods_img/goods_img/GDI/1367397/1367397.jpg'
    ,'https://prk101212.shopon.biz/data/goods_img/goods_img/GDI/1366538/1366538.jpg'
    ,'https://prk101212.shopon.biz/data/goods_img/goods_img/GDI/1366434/1366434.jpg'
]


//downloadImage(imageUrl, savePath);
let j = 0
for(let i = 0 ; i < imageUrlArr.length ; i++){
    let fileName = 'downloaded_image_thumb_detail' + j + '.jpg';
    let savePath = path.join(__dirname, fileName);
    downloadImage(imageUrlArr[i], savePath);
    j++;
}

