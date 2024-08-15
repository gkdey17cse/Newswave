// https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0ff66e6300054551b98cc2ba4a6fda06
let APIKEY = '0ff66e6300054551b98cc2ba4a6fda06';
const url = "https://newsapi.org/v2/everything?q=";


const newsSearchButton = document.getElementById('newsSearchButton');
const newsSubject = document.getElementById('newsSubject');
window.addEventListener('load', () => findNews("India"));

newsSearchButton.addEventListener('click', () => {
    let newsSearchInput = document.getElementById('newsSearchInput');
    let topic = newsSearchInput.value;
    if (topic !== '') {
        findNewsOnClick(topic);
    }
});



function getTodayDate(){
    let date = new Date();
    let day = date.getUTCDate();
    let month = date.getUTCMonth() + 1 ;
    let year = date.getUTCFullYear();
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day - 1;
    }
    let toDate = `${year}-${month}-${day}`;
    console.log(`Date is : ${toDate}`);
    return toDate ;
}

const findNews = async (topic) => {
    // let finalURL = `${url}${topic}&apiKey=${APIKEY}`;
    // finalURL = `https://newsapi.org/v2/everything?q=${topic}&from=2024-07-04&to=${toDate}&sortBy=popularity&apiKey=${APIKEY}`;
    toDate = getTodayDate();
    finalURL = `https://newsapi.org/v2/everything?q=${topic}&from=2024-07-15&sortBy=publishedAt&apiKey=7023ae9102054b68935450c8cf20d35d`;
    console.log(finalURL);
    const res = await fetch(finalURL);

    const Data = await res.json();

    let jsonData = JSON.stringify(Data);

    const jsonObject = JSON.parse(jsonData);

    const articles = jsonObject.articles;

    // console.log(articles);
    newsSubject.innerHTML = topic;
    bindNews(articles);

}

function bindNews(news) {
    const cardsContainer = document.getElementById('latest-news-container');
    const newsCardTemplate = document.getElementById('latest-news');
    const bannerContainer = document.getElementById('bannerContainer');

    cardsContainer.innerHTML = '';
    bannerContainer.innerHTML = '';
    let banner = "";
    let str = "";


    // Banner section 
    for (let i = 0; i < 5; i++) {
        const newsdate = new Date(news[i].publishedAt).toLocaleString("en-US", {
            timeZone: "Asia/Jakarta"
        });
        console.log(news[i]);
        if (news[i].urlToImage) {
            banner += `
                        
                            <div href="#" class="swiper-slide relative mx-auto mt-2">
                                <img id="newsImg" class="w-full object-cover rounded-lg" src="${news[i].urlToImage}" style="height: 500px;"
                                    alt="News image">
                                <div class="absolute inset-0 bg-gray-900 opacity-50 rounded-md"></div>
                                <div class="absolute inset-0 grid grid-flow-row grid-rows-2">
                                    <div></div>
                                    <div class="flex flex-col gap-2 justify-center items-center text-white">
                                        <h2 id="newsTitle" class="text-amber-300 text-3xl text-center font-bold py-2">
                                            ${news[i].title}</h2>
                                        <div class="flex text-sm justify-around divide-x items-center italic py-1">
                                            <h4 class="px-4" id="newsPublishedDate">${newsdate}</h4>
                                        </div>
                                        <p id="newsDetails" class="py-2 max-w-5xl text-center">
                                            ${news[i].description}
                                        </p>
                                        <a href="${news[i].url}" id="newsurl"
                                            class="px-4 py-2 border border-amber-400 hover:bg-amber-500 active:translate-x-1 active:translate-y-1 duration-200">Know
                                            More</a>
                                    </div>
                                </div>
                            </div>
                        ` ;
        }

        bannerContainer.innerHTML = banner;
        console.log(bannerContainer);
    }
    // Create the latest News section
    for (let i = 5; i < news.length; i++) {
        const newsdate = new Date(news[i].publishedAt).toLocaleString("en-US", {
            timeZone: "Asia/Jakarta"
        });
        console.log(news[i]);


        if (news[i].urlToImage) {
            str += `
                        <div>
                        <div id="latest-news" class="p-1 border border-gray-600" style="height:390px">
                            <a id="" href="${news[i].url}" class="flex justify-center items-center">
                                <img id="newsImg" class="" style="height:170px"
                                    src="${news[i].urlToImage}"
                                    alt="">
                            </a>
                            <div class="p-2 text-xs">
                                <h2 id="newsTitle" class="text-blue-600 font-semibold py-1">${news[i].title}</h2>

                                    <div class="flex justify-start items-center">
                                        <div class="flex justify-between gap-4">
                                            <h4 class="" id="newsPublishedDate">${newsdate}</h4>
                                        </div>
                                    </div>

                                <p id="newsDetails" class="py-1 font-normal text-justify">
                                    ${news[i].description} 
                                    <span><a href="${news[i].url}" target="_blank" class="text-indigo-600 font-semibold italic">Read More</a></span>
                                </p>
                            </div>

                        </div>
                    </div>  ` ;
        }
    }

    cardsContainer.innerHTML = str;

    console.log(bannerContainer);
    // console.log(cardsContainer);

}



const findNewsOnClick = async (topic) => {
    // let finalURL = `${url}${topic}&apiKey=7023ae9102054b68935450c8cf20d35d`;
    finalURL = `https://newsapi.org/v2/everything?q=${topic}&from=2024-07-15&sortBy=publishedAt&apiKey=7023ae9102054b68935450c8cf20d35d`;
    console.log(finalURL);
    const res = await fetch(finalURL);

    const Data = await res.json();

    let jsonData = JSON.stringify(Data);

    const jsonObject = JSON.parse(jsonData);

    const articles = jsonObject.articles;

    // console.log(articles);
    newsSubject.innerHTML = topic;
    bindNewsOnClick(articles);

}

function bindNewsOnClick(news) {
    const cardsContainer = document.getElementById('latest-news-container');
    const newsCardTemplate = document.getElementById('latest-news');

    cardsContainer.innerHTML = '';

    let str = "";

    // Create the latest News section
    for (let i = 0; i < news.length; i++) {
        const newsdate = new Date(news[i].publishedAt).toLocaleString("en-US", {
            timeZone: "Asia/Jakarta"
        });

        console.log(news[i]);

        if (news[i].urlToImage) {
            str += `
                        <div>
                        <div id="latest-news" class="p-1 border border-gray-600" style="height:390px">
                            <a id="" href="${news[i].url}" class="flex justify-center items-center">
                                <img id="newsImg" class="" style="height:170px"
                                    src="${news[i].urlToImage}"
                                    alt="">
                            </a>
                            <div class="p-2 text-xs">
                                <h2 id="newsTitle" class="text-blue-600 font-semibold py-1">${news[i].title}</h2>

                                    <div class="flex justify-start items-center">
                                        <div class="flex justify-between gap-4">
                                            <h4 class="" id="newsPublishedDate">${newsdate}</h4>
                                        </div>
                                    </div>

                                <p id="newsDetails" class="py-1 font-normal text-justify">
                                    ${news[i].description} 
                                    <span><a href="${news[i].url}" target="_blank" class="text-indigo-600 font-semibold italic">Read More</a></span>
                                </p>
                            </div>

                        </div>
                    </div>  ` ;
        }
    }

    cardsContainer.innerHTML = str;

    // console.log(cardsContainer);

}

