// ==UserScript==
// @name     vndb-random
// @version  1
// @grant GM.xmlHttpRequest
// @include https://vndb.org/*
// @require       https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomVn(page) {
  var url = "https://vndb.org/v?f=0372_0bXb4741Ne11&p=PAGE&s=31g";
  url = url.replace("PAGE", page);
  
    $.ajax({
    url: url,
    type: 'GET',
    success: function(data) {
      var src = $(data);
      
      var links = src.find(".tc_title");
      var nbvn = links.length;
      var nb = getRandomInt(1, nbvn);
      var slug = $(links[nb]).find("a").attr("href");
      window.location.href = "https://vndb.org" + slug;
    }
  });
}

function getRandomPage() {
  var url = "https://vndb.org/v?q=&ch=&f=0372_0bXb4741Ne11&s=31g";
  $.ajax({
    url: url,
    type: 'GET',
    success: function(data) {
      var src = $(data);
      var navigation = src.find(".maintabs, .browsetabs").not(".bottom").children()[2];
      var last_url = $(navigation).children().last().children()[0].href;
      var maxpage = /p=([0-9].)/gm.exec(last_url)[1]
      var page = getRandomInt(1, maxpage);
      getRandomVn(page);

    },
    error: function(e) {
      console.log(e);
    }
  });
}

(function() {
  var rand_url = "https://vndb.org/v/all?f=0372_0bXb4741Ne11&o=a&p=1&s=title";
  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 83 && !e.shiftKey && !e.ctrlKey && e.altKey && !e.metaKey) {
      window.location.href = "https://vndb.org/v/rand"
    }
  }, false);
  
})();


$(document).ready(function() {
  if ($("#rnd_vn").length <= 0) {
    $(".menubox").first().children()[1].innerHTML += "<br><a id=\"rnd_vn\" href=\"#\">Random without screens</a>";

    $("#rnd_vn").bind({
      click: function() {
        getRandomPage()
      }
    });
  }
});