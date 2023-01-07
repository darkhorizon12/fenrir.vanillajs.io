const images = [
    "https://photo.coolenjoy.co.kr/bbs/data/multi_photo/26/990720029_02fa747c_3.jpg",
    "https://post-phinf.pstatic.net/MjAxNzExMThfMTU3/MDAxNTEwOTg1MjU0MDMw.UnE6KDZeDvuggh3tCZyAh1TnZdmvZQGLVZbT2nhBIAYg.9QvOIhmCZnSwa0BXJ8CVs3ROxovGtlVmRmglS2HE8esg.JPEG/20171118-006.jpg?type=w1200",
    "https://thetip.co.kr/wp-content/uploads/2021/04/%EA%B3%A0%ED%99%94%EC%A7%88-%EB%85%B8%ED%8A%B8%EB%B6%81-%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4.jpg",
];

const chosenImage = images[parseInt(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url('${chosenImage}'`;

