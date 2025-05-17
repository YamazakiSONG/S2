let arr = [];

// 테스트용 HTML 문자열
const htmlString = ['<!--mastercode:si3MR_8614--> <div align="center"><font style="font-size:11px" color="#000000">si3MR_8614</font></div><div style="text-align:center;"><img src="https://ai.esmplus.com/tsos4845/common/36-top.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008614_detail_1.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008614_detail_2.jpg"></div>'
    ,'<!--mastercode:si3MR_8615--> <div align="center"><font style="font-size:11px" color="#000000">si3MR_8615</font></div><div style="text-align:center;"><img src="https://ai.esmplus.com/tsos4845/common/36-top.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008615_detail_1.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008615_detail_2.jpg"></div>'
    ,'<!--mastercode:si3MR_8616--> <div align="center"><font style="font-size:11px" color="#000000">si3MR_8616</font></div><div style="text-align:center;"><img src="https://ai.esmplus.com/tsos4845/common/36-top.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008616_detail_1.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008616_detail_2.jpg"></div>'
    ,'<!--mastercode:si3MR_8617--> <div align="center"><font style="font-size:11px" color="#000000">si3MR_8617</font></div><div style="text-align:center;"><img src="https://ai.esmplus.com/tsos4845/common/36-top.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008617_detail_1.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008617_detail_2.jpg"></div>'
    ,'<!--mastercode:si3MR_8618--> <div align="center"><font style="font-size:11px" color="#000000">si3MR_8618</font></div><div style="text-align:center;"><img src="https://ai.esmplus.com/tsos4845/common/36-top.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008618_detail_1.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008618_detail_2.jpg"></div>'
    ,'<!--mastercode:si3MR_8619--> <div align="center"><font style="font-size:11px" color="#000000">si3MR_8619</font></div><div style="text-align:center;"><img src="https://ai.esmplus.com/tsos4845/common/36-top.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008619_detail_1.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008619_detail_2.jpg"></div>'
    ,'<!--mastercode:si3MR_8620--> <div align="center"><font style="font-size:11px" color="#000000">si3MR_8620</font></div><div style="text-align:center;"><img src="https://ai.esmplus.com/tsos4845/common/36-top.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008620_detail_1.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008620_detail_2.jpg"></div>'
    ,'<!--mastercode:si3MR_8621--> <div align="center"><font style="font-size:11px" color="#000000">si3MR_8621</font></div><div style="text-align:center;"><img src="https://ai.esmplus.com/tsos4845/common/36-top.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008621_detail_1.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008621_detail_2.jpg"></div>'
    ,'<!--mastercode:si3MR_8626--> <div align="center"><font style="font-size:11px" color="#000000">si3MR_8626</font></div><div style="text-align:center;"><img src="https://ai.esmplus.com/tsos4845/common/36-top.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008626_detail_1.jpg"><br/><img src="https://ai.esmplus.com/tsos4845/008000/3MR_008626_detail_2.jpg"></div>'
    ]
function test(htmlString){
    htmlString.map((data)=>{
        arr.push(extractJpgLinks(data));
    })
}
    

function extractJpgLinks(html) {
    const regex = /"(https?:\/\/.*?\.jpg)"/g;
    let matches;
    const links = [];

    while ((matches = regex.exec(html)) !== null) {
        links.push(matches[1]);
    }
    
    return links;
}




console.log(test(htmlString));
console.log(arr);