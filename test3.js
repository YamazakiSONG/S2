const fs = require('fs');
const axios = require('axios');
const sharp = require('sharp');

// 다운로드할 이미지 URL 리스트
const arrImageUrls = [
    [
        'https://ai.esmplus.com/tsos4845/common/36-top.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008614_detail_1.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008614_detail_2.jpg'
      ],
      [
        'https://ai.esmplus.com/tsos4845/common/36-top.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008615_detail_1.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008615_detail_2.jpg'
      ],
      [
        'https://ai.esmplus.com/tsos4845/common/36-top.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008616_detail_1.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008616_detail_2.jpg'
      ],
      [
        'https://ai.esmplus.com/tsos4845/common/36-top.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008617_detail_1.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008617_detail_2.jpg'
      ],
      [
        'https://ai.esmplus.com/tsos4845/common/36-top.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008618_detail_1.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008618_detail_2.jpg'
      ],
      [
        'https://ai.esmplus.com/tsos4845/common/36-top.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008619_detail_1.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008619_detail_2.jpg'
      ],
      [
        'https://ai.esmplus.com/tsos4845/common/36-top.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008620_detail_1.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008620_detail_2.jpg'
      ],
      [
        'https://ai.esmplus.com/tsos4845/common/36-top.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008621_detail_1.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008621_detail_2.jpg'
      ],
      [
        'https://ai.esmplus.com/tsos4845/common/36-top.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008626_detail_1.jpg',
        'https://ai.esmplus.com/tsos4845/008000/3MR_008626_detail_2.jpg'
      ]
  ]

const downloadImage = async (url, index) => {
    const response = await axios({
        url,
        responseType: 'arraybuffer'
    });
    const filePath = `image_${index}.jpg`;
    fs.writeFileSync(filePath, response.data);
    return filePath;
};

const mergeImages = async (imagePaths, outputPath) => {
    const images = await Promise.all(imagePaths.map(path => sharp(path).metadata()));
    const totalHeight = images.reduce((sum, img) => sum + img.height, 0);
    const width = Math.max(...images.map(img => img.width));

    let compositeImages = [];
    let yOffset = 0;
    for (let i = 0; i < imagePaths.length; i++) {
        compositeImages.push({ input: imagePaths[i], top: yOffset, left: 0 });
        yOffset += images[i].height;
    }

    await sharp({ create: { width, height: totalHeight, channels: 3, background: 'white' } })
        .composite(compositeImages)
        .toFile(outputPath);

    console.log(`Merged image saved as ${outputPath}`);
};

(async () => {
    try {

        let i = 1;
        for(data of arrImageUrls){
            // 이미지 다운로드
            const downloadedPaths = await Promise.all(data.map((url, index) => downloadImage(url, index)));

            // 이미지 병합
            await mergeImages(downloadedPaths, 'merged' + i + '.jpg');

            // 임시 파일 삭제
            downloadedPaths.forEach(path => fs.unlinkSync(path));
            i++;
        }


    } catch (error) {
        console.error('Error:', error);
    }
})();
