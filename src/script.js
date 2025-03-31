let APIKEY = "0ff66e6300054551b98cc2ba4a6fda06";
const BASE_URL = "https://newsapi.org/v2/everything?q=";

const newsSearchButton = document.getElementById("newsSearchButton");
const newsSubject = document.getElementById("newsSubject");
window.addEventListener("load", () => findNews("India"));

newsSearchButton.addEventListener("click", () => {
  let newsSearchInput = document.getElementById("newsSearchInput");
  let topic = newsSearchInput.value;
  if (topic !== "") {
    findNewsOnClick(topic);
  }
});

// https://newsapi.org/v2/everything?q={Delhi}&from=
function getTodayDate() {
  let date = new Date();
  let day = date.getUTCDate() - 1; // Subtracting 1 to get the previous day
  let month = date.getUTCMonth() + 1;
  let year = date.getUTCFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  let toDate = `${year}-${month}-${day}`;
  console.log(`Date is : ${toDate}`);
  return toDate;
}

const findNews = async (topic) => {
  let toDate = getTodayDate();
  let finalURL = `${BASE_URL}${topic}&from=${toDate}&sortBy=publishedAt&apiKey=${APIKEY}`;

  console.log(`Fetching news from: ${finalURL}`);

  try {
    const res = await fetch(finalURL);
    if (!res.ok) throw new Error(`API error: ${res.statusText}`);

    const data = await res.json();
    newsSubject.innerHTML = topic;
    bindNews(data.articles);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};

function bindNews(news) {
  const cardsContainer = document.getElementById("latest-news-container");
  const bannerContainer = document.getElementById("bannerContainer");

  cardsContainer.innerHTML = "";
  bannerContainer.innerHTML = "";
  let banner = "";
  let str = "";

  for (let i = 0; i < news.length; i++) {
    const newsDate = new Date(news[i].publishedAt).toLocaleString("en-US", {
      timeZone: "Asia/Jakarta",
    });

    if (!news[i].urlToImage) continue;

    if (i < 5) {
      // Banner section for top 5 news articles
      banner += `
                <div class="swiper-slide relative mx-auto mt-2">
                    <img class="w-full object-cover rounded-lg" src="${news[i].urlToImage}" style="height: 500px;">
                    <div class="absolute inset-0 bg-gray-900 opacity-50 rounded-md"></div>
                    <div class="absolute inset-0 grid grid-flow-row grid-rows-2">
                        <div></div>
                        <div class="flex flex-col gap-2 justify-center items-center text-white">
                            <h2 class="text-amber-300 text-3xl text-center font-bold py-2">${news[i].title}</h2>
                            <div class="flex text-sm justify-around divide-x items-center italic py-1">
                                <h4 class="px-4">${newsDate}</h4>
                            </div>
                            <p class="py-2 max-w-5xl text-center">${news[i].description}</p>
                            <a href="${news[i].url}" class="px-4 py-2 border border-amber-400 hover:bg-amber-500">Know More</a>
                        </div>
                    </div>
                </div>`;
    } else {
      // Latest News section
      str += `
                <div>
                    <div class="p-1 border border-gray-600" style="height:390px">
                        <a href="${news[i].url}" class="flex justify-center items-center">
                            <img style="height:170px" src="${news[i].urlToImage}" alt="">
                        </a>
                        <div class="p-2 text-xs">
                            <h2 class="text-blue-600 font-semibold py-1">${news[i].title}</h2>
                            <div class="flex justify-between gap-4">
                                <h4>${newsDate}</h4>
                            </div>
                            <p class="py-1 font-normal text-justify">
                                ${news[i].description}
                                <span><a href="${news[i].url}" target="_blank" class="text-indigo-600 font-semibold italic">Read More</a></span>
                            </p>
                        </div>
                    </div>
                </div>`;
    }
  }

  bannerContainer.innerHTML = banner;
  cardsContainer.innerHTML = str;
}

const findNewsOnClick = async (topic) => {
  let toDate = getTodayDate();
  let finalURL = `${BASE_URL}${topic}&from=${toDate}&sortBy=publishedAt&apiKey=${APIKEY}`;

  console.log(`Fetching news from: ${finalURL}`);

  try {
    const res = await fetch(finalURL);
    if (!res.ok) throw new Error(`API error: ${res.statusText}`);

    const data = await res.json();
    newsSubject.innerHTML = topic;
    bindNewsOnClick(data.articles);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};

function bindNewsOnClick(news) {
  const cardsContainer = document.getElementById("latest-news-container");
  cardsContainer.innerHTML = "";

  let str = "";

  for (let i = 0; i < news.length; i++) {
    const newsDate = new Date(news[i].publishedAt).toLocaleString("en-US", {
      timeZone: "Asia/Jakarta",
    });

    if (!news[i].urlToImage) continue;

    str += `
            <div>
                <div class="p-1 border border-gray-600" style="height:390px">
                    <a href="${news[i].url}" class="flex justify-center items-center">
                        <img style="height:170px" src="${news[i].urlToImage}" alt="">
                    </a>
                    <div class="p-2 text-xs">
                        <h2 class="text-blue-600 font-semibold py-1">${news[i].title}</h2>
                        <div class="flex justify-between gap-4">
                            <h4>${newsDate}</h4>
                        </div>
                        <p class="py-1 font-normal text-justify">
                            ${news[i].description}
                            <span><a href="${news[i].url}" target="_blank" class="text-indigo-600 font-semibold italic">Read More</a></span>
                        </p>
                    </div>
                </div>
            </div>`;
  }

  cardsContainer.innerHTML = str;
}
