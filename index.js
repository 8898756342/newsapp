// grab the news container 
let source = "bbc_news ";
let news_acco = document.getElementById("news_acco");


//fece3170de8d4e5d9df429daeb2b7f42

// create a get request 
const xhr = new XMLHttpRequest();

xhr.open('GET', ` https://newsapi.org/v2/top-headlines?country=us&apiKey=fece3170de8d4e5d9df429daeb2b7f42`, true);
xhr.getResponseHeader("content-type", "application/json");

//what to do when response is ready ????????

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        let articles = json.articles;
        console.log(articles);
        let newshtml="";
        articles.forEach(function(element) {
                     let news = `<div class="accordion" id="news_acco">
                                 <div class="accordion" id="news_acco">
                                 <div class="accordion-item">
                                 <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                 ${element["author"]}
                                 </button>
                                 </h2>
                                 <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                 <div class="accordion-body">
                                 ${element["content"]}
                                 </div>
                                 </div>
                                 </div>
                                 </div>
                                 </div> `;
                    newshtml+=news;
                });
                news_acco.innerHTML= newshtml;
                

               
        

    }
    else {
        console.log("some error occured ");
    }
}
xhr.send();



