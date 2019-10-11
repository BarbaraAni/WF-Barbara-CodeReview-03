//this part works
//create header and structure
var header;
var headline;
var navigation;
var ulist;
var list1;
var list2;
var div;
//create footer
var footer;
var footerp;
var copy;
//function create Movies
var m_title;
var m_description;
var m_cover_image;
var movie_div;
var movie_div_text;
var movie_title;
var movie_description;
var movie_coverImg;
var like_button_m;
//function create Animes
var a_title;
var a_description;
var a_cover_image;
var anime_div;
var anime_div_text;
var anime_title;
var anime_description;
var anime_coverImg;
var like_button_a;
//count function
var clicks = 0;
//this part works
function createHeader() {
    header = document.createElement("header");
    headline = document.createElement("h1");
    headline.innerHTML = "Movie Factory";
    sortBtn = document.createElement("button");
    sortBtn.innerHTML = "sort by Likes";
    sortBtn.setAttribute("id", "srtBtn")
    sortBtn.onclick = function() {
        sortByLikes();
    }
    navigation = document.createElement("nav");
    ulist = document.createElement("ul");
    list1 = document.createElement("li");
    list1.innerHTML = "Movies"
    list1.onclick = function() {
        createMovieList();
    }
    list2 = document.createElement("li");
    list2.innerHTML = "Anime"
    list2.onclick = function() {
        createAnimeList();
    }
    div = document.createElement("div");
    div.setAttribute("id", "list");

    document.querySelector("body").appendChild(header).appendChild(headline);
    document.querySelector("body").appendChild(navigation).appendChild(ulist).appendChild(list1);
    document.querySelector("body").appendChild(navigation).appendChild(ulist).appendChild(list2);
    document.querySelector("body").appendChild(navigation).appendChild(ulist).appendChild(sortBtn);
    document.querySelector("body").appendChild(div);

    createMovieListFirst();
}
//this part works
function createFooter() {
    footer = document.createElement("footer");
    footerp = document.createElement("p");
    footerp.setAttribute("id", "bigger")
    copy = document.createElement("p");
    footerp.innerHTML = "Movie Factory";
    copy.innerHTML = "&copy Barbara Anissin";

    document.querySelector("body").appendChild(footer).appendChild(footerp);
    document.querySelector("body").appendChild(footer).appendChild(copy);
}
//this part works
function createMovieListFirst() {
    for (var i = 0; i < movies.length; i++) {
        m_title = movies[i].movie_name;
        m_description = movies[i].descr;
        m_cover_image = movies[i].cover;
        movie_div = document.createElement("div");
        movie_div.setAttribute("id", "m_div" + i);
        movie_div_text = document.createElement("div");
        movie_div_text.setAttribute("id", "text_mdiv" + i);
        movie_title = document.createElement("h2");
        movie_title.innerHTML = m_title;
        movie_description = document.createElement("p");
        movie_description.innerHTML = m_description;
        movie_coverImg = document.createElement("img");
        movie_coverImg.setAttribute("src", m_cover_image);

        like_button_m = document.createElement("button");
        like_button_m.setAttribute("id", "likeBtn" + i)
        like_button_m.innerHTML = "&#x1f44d; 0";
        like_button_m.onclick = function(e, z) {
            addLike_m(document.getElementById(e.target.id), document.getElementById(e.target.id).innerHTML);
        }

        document.getElementById("list").appendChild(movie_div);
        document.getElementById("m_div" + i).appendChild(movie_coverImg);
        document.getElementById("m_div" + i).appendChild(movie_div_text);
        document.getElementById("text_mdiv" + i).appendChild(movie_title);
        document.getElementById("text_mdiv" + i).appendChild(movie_description);
        document.getElementById("text_mdiv" + i).appendChild(like_button_m);
    }
}
//this part works
function createMovieList() {
    deleteAnimeList();
    for (var i = 0; i < movies.length; i++) {
        m_title = movies[i].movie_name;
        m_description = movies[i].descr;
        m_cover_image = movies[i].cover;
        movie_div = document.createElement("div");
        movie_div.setAttribute("id", "m_div" + i);
        movie_div_text = document.createElement("div");
        movie_div_text.setAttribute("id", "text_mdiv" + i);
        movie_title = document.createElement("h2");
        movie_title.innerHTML = m_title;
        movie_description = document.createElement("p");
        movie_description.innerHTML = m_description;
        movie_coverImg = document.createElement("img");
        movie_coverImg.setAttribute("src", m_cover_image);

        like_button_m = document.createElement("button");
        like_button_m.setAttribute("id", "likeBtn" + i)
        like_button_m.innerHTML = "&#x1f44d; 0";
        like_button_m.onclick = function(e, z) {
            addLike_m(document.getElementById(e.target.id), document.getElementById(e.target.id).innerHTML);
        }

        document.getElementById("list").appendChild(movie_div);
        document.getElementById("m_div" + i).appendChild(movie_coverImg);
        document.getElementById("m_div" + i).appendChild(movie_div_text);
        document.getElementById("text_mdiv" + i).appendChild(movie_title);
        document.getElementById("text_mdiv" + i).appendChild(movie_description);
        document.getElementById("text_mdiv" + i).appendChild(like_button_m);
    }
}
//this part works
function createAnimeList() {
    deleteMovieList();
    for (var i = 0; i < animes.length; i++) {
        a_title = animes[i].anime_name;
        a_description = animes[i].descr;
        a_cover_image = animes[i].cover;

        anime_div = document.createElement("div");
        anime_div.setAttribute("id", "a_div" + i);
        anime_div_text = document.createElement("div");
        anime_div_text.setAttribute("id", "text_adiv" + i);
        anime_title = document.createElement("h2");
        anime_title.innerHTML = a_title;
        anime_description = document.createElement("p");
        anime_description.innerHTML = a_description;
        anime_coverImg = document.createElement("img");
        anime_coverImg.setAttribute("src", a_cover_image);

        like_button_a = document.createElement("button");
        like_button_a.setAttribute("id", "likeBtn" + i)
        like_button_a.innerHTML = "&#x1f44d; 0";
        like_button_a.onclick = function(e, z) {
            addLike_a(document.getElementById(e.target.id), document.getElementById(e.target.id).innerHTML);
        }

        document.getElementById("list").appendChild(anime_div);
        document.getElementById("a_div" + i).appendChild(anime_coverImg);
        document.getElementById("a_div" + i).appendChild(anime_div_text);
        document.getElementById("text_adiv" + i).appendChild(anime_title);
        document.getElementById("text_adiv" + i).appendChild(anime_description);
        document.getElementById("text_adiv" + i).appendChild(like_button_a);
    }
}
//this part works
function deleteAnimeList() {
    for (var i = 0; i < animes.length; i++) {
        x = document.getElementById("a_div" + i);
        x.parentNode.removeChild(x);
    }
}
//this part works
function deleteMovieList() {
    for (var i = 0; i < movies.length; i++) {
        x = document.getElementById("m_div" + i);
        x.parentNode.removeChild(x);
    }
}
//this part works
function addLike_m(x, y) {
    onClick(x, y);

    function onClick(x, y) {
        current = Number(y.substring(2, 10))
        current += 1;
        x.innerHTML = "&#x1f44d; " + current;
    };
}
//this part works
function addLike_a(x,y) {
    onClick(x,y);

    function onClick(x,y) {
        current = Number(y.substring(2, 10))
        current += 1;
        x.innerHTML = "&#x1f44d; " + current;
    };
}
//sorts in console - only number of likes atm.
function sortByLikes() {
    sortArr = [];
    for (i = 0; i < movies.length; i++) {
        x = document.getElementById("likeBtn" + i).innerHTML;
        y = Number(x.substring(2, 10));
        sortArr.push(y);
    }
    sortArr.sort(function(a, b) {
        return a - b
    })
    console.log(sortArr.reverse())

}
//this part works
createHeader();
createFooter();