!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(e);return Object.keys(t).forEach((function(e){var r;"classList"===e?(r=o.classList).add.apply(r,n(t[e])):/data-/.test(e)?o.setAttribute(e,t[e]):o[e]=t[e]})),Object.keys(r).forEach((function(e){o.style[e]=r[e]})),o},a=o("header",{classList:["header"],innerHTML:"<h1>movie search</h1>"}),i=o("main",{classList:["main","wrapper"]}),c=o("div",{classList:["search-block"]}),s=o("div",{classList:["input-block"]}),l=o("input",{classList:["input-button"],type:"button",value:"SEARCH"}),u=o("img",{classList:["keyboard-icon"],src:"./src/assets/img/keyboard.png"}),d=o("div",{classList:["input-voice"]});u.onmousedown=function(e){e.preventDefault();var t=document.querySelector(".keyboard-wrapper");t.classList.contains("hidden")?(document.querySelector(".input-search").focus(),t.classList.remove("hidden")):t.classList.add("hidden")};var f=o("input",{placeholder:"search movie",type:"search",classList:["input-search"],autofocus:" "}),p=o("div",{classList:["not-finded"]}),v=o("div",{classList:["notification"]}),h=o("div",{classList:["error"]}),m=o("div",{classList:["movies-block"]}),g=o("div",{classList:["loader"]}),y=o("div",{classList:["arrow-left"]}),L=o("div",{classList:["arrow-right"]}),b=o("footer",{classList:["footer","footer__wrapper"]}),S=o("h3",{classList:["footer__quarter"],innerText:"RS School 2020q1"}),w=o("div",{classList:["footer__github"]}),k=o("img",{classList:["github_icon"],src:"./src/assets/img/github.svg"}),E=o("a",{href:"https://github.com/mrINEX",classList:["github_name"],innerHTML:"<h3>mrINEX</h3>"});document.querySelector("body").append(a),document.querySelector("body").append(i),i.append(c),c.append(p,v,h,s),s.append(f,u,d,l),i.append(m),m.append(g,y,L),document.querySelector("body").append(b),b.append(S,w),w.append(k,E),e.exports={createElement:o}},function(e,t,n){n(2),e.exports=n(11)},function(e,t,n){n(0),n(3);var r=n(5).translate,o=n(6).speechInput,a=n(7),i=a.getMovies,c=a.isNext,s=n(10),l=s.prevMovie,u=s.nextMovie,d=s.startSwipe,f=s.runSwipe,p=s.startTouchSwipe,v=s.runTouchSwipe;window.onload=function(){var e,t=document.querySelector(".input-search"),n="book",a=i("book");a(),document.querySelector(".input-voice").addEventListener("click",(function(){document.querySelector(".input-search").focus();var s=o();s.onend=function(){/[а-яА-Я]/.test(t.value)?r(t.value).then((function(t){e=i(t,"ru"),c(e).then((function(t){t&&(a=e)}))})):(e=i(t.value),c(e).then((function(t){t&&(a=e)}))),n=t.value},s.start()})),t.addEventListener("blur",(function(){document.querySelector(".keyboard-wrapper").classList.contains("hidden")||n===t.value?document.querySelector(".keyboard-wrapper").classList.add("hidden"):/[а-яА-Я]/.test(t.value)?r(t.value).then((function(t){e=i(t,"ru"),c(e).then((function(t){t&&(a=e)}))})):(e=i(t.value),c(e).then((function(t){t&&(a=e)}))),n=t.value})),document.addEventListener("keydown",(function(o){if("Enter"===o.code){var s=document.querySelector(".keyboard-wrapper").classList.contains("hidden");n===t.value||s?document.querySelector(".keyboard-wrapper").classList.add("hidden"):/[а-яА-Я]/.test(t.value)?r(t.value).then((function(t){e=i(t,"ru"),c(e).then((function(t){t&&(a=e)}))})):(e=i(t.value),c(e).then((function(t){t&&(a=e)}))),n=t.value}})),t.addEventListener("change",(function(t){var n=t.target;/[а-яА-Я]/.test(n.value)?r(n.value).then((function(t){e=i(t,"ru"),c(e).then((function(t){t&&(a=e)}))})):(e=i(n.value),c(e).then((function(t){t&&(a=e)})))})),document.querySelector(".virtual-enter").addEventListener("click",(function(){document.querySelector(".keyboard-wrapper").classList.contains("hidden")||n===t.value?document.querySelector(".keyboard-wrapper").classList.add("hidden"):/[а-яА-Я]/.test(t.value)?r(t.value).then((function(t){e=i(t,"ru"),c(e).then((function(t){t&&(a=e)}))})):(e=i(t.value),c(e).then((function(t){t&&(a=e)}))),n=t.value})),document.querySelector(".arrow-left").addEventListener("click",(function(){l(a)})),document.querySelector(".arrow-right").addEventListener("click",(function(){u(a)}));var s=document.querySelector(".movies-block");s.addEventListener("mousedown",d),s.addEventListener("mouseup",(function(e){f(e,a)})),s.addEventListener("touchstart",(function(e){p(e,a)})),s.addEventListener("touchmove",(function(e){e.preventDefault()})),s.addEventListener("touchend",(function(e){v(e,a)}))}},function(e,t,n){var r=[["ё","Ё"],["1","!"],["2",'"'],["3","№"],["4",";"],["5","%"],["6",":"],["7","?"],["8","*"],["9","("],["0",")"],["-","_"],["=","+"],["й","Й"],["ц","Ц"],["у","У"],["к","К"],["е","Е"],["н","Н"],["г","Г"],["ш","Ш"],["щ","Щ"],["з","З"],["х","Х"],["ъ","Ъ"],["\\","/"],["ф","Ф"],["ы","Ы"],["в","В"],["а","А"],["п","П"],["р","Р"],["о","О"],["л","Л"],["д","Д"],["ж","Ж"],["э","Э"],["я","Я"],["ч","Ч"],["с","С"],["м","М"],["и","И"],["т","Т"],["ь","Ь"],["б","Б"],["ю","Ю"],[".",","]],o=[["~","`"],["!","1"],["@","2"],["#","3"],["$","4"],["%","5"],["^","6"],["&","7"],["*","8"],["(","9"],[")","0"],["_","-"],["+","="],["Q","q"],["W","w"],["E","e"],["R","r"],["T","t"],["Y","y"],["U","u"],["I","i"],["O","o"],["P","p"],["{","["],["}","]"],["|","\\"],["A","a"],["S","s"],["D","d"],["F","f"],["G","g"],["H","h"],["J","j"],["K","k"],["L","l"],[":",";"],['"',"'"],["Z","z"],["X","x"],["C","c"],["V","v"],["B","b"],["N","n"],["M","m"],["<",","],[">","."],["?","/"]],a=n(4),i=a.create,c=a.runRow,s=i("div","keyboard-wrapper","hidden");document.querySelector(".search-block").after(s);var l=i("main","keyboard");s.append(l),c(["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],[["~","`"],["!","1"],["@","2"],["#","3"],["$","4"],["%","5"],["^","6"],["&","7"],["*","8"],["(","9"],[")","0"],["_","-"],["+","="],"Backspace"],l),c(["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash"],[["Tab"],["Q","q"],["W","w"],["E","e"],["R","r"],["T","t"],["Y","y"],["U","u"],["I","i"],["O","o"],["P","p"],["{","["],["}","]"],["|","\\\\"]],l),c(["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],[["CapsLock"],["A","a"],["S","s"],["D","d"],["F","f"],["G","g"],["H","h"],["J","j"],["K","k"],["L","l"],[":",";"],['"',"'"],["Enter"]],l),c(["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight"],[["Shift"],["Z","z"],["X","x"],["C","c"],["V","v"],["B","b"],["N","n"],["M","m"],["<",","],[">","."],["?","/"],["&#8593;"],["Shift"]],l),c(["ControlLeft","MetaLeft","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"],["Ctrl","Win","Alt"," ","Alt","&#8592;","&#8595;","&#8594;","Ctrl"],l);var u,d=document.querySelectorAll(".up"),f=document.querySelectorAll(".down"),p=document.querySelector(".input-search");if("ru"===localStorage.getItem("lang"))for(var v=0;v<d.length;v+=1)d[v].innerHTML="".concat(r[v][1]),f[v].innerHTML="".concat(r[v][0]);else for(var h=0;h<d.length;h+=1)d[h].innerHTML="".concat(o[h][0]),f[h].innerHTML="".concat(o[h][1]);document.addEventListener("keydown",(function(e){document.querySelector(".input-search").focus();var t=document.querySelector(".".concat(e.code));if(t&&t.classList.add("keyboard-code-active"),e.altKey&&e.shiftKey)if("Ё"===d[0].innerHTML){for(var n=0;n<d.length;n+=1)d[n].innerHTML="".concat(o[n][0]),f[n].innerHTML="".concat(o[n][1]);localStorage.setItem("lang","en")}else{for(var a=0;a<d.length;a+=1)d[a].innerHTML="".concat(r[a][1]),f[a].innerHTML="".concat(r[a][0]);localStorage.setItem("lang","ru")}})),document.addEventListener("keyup",(function(e){var t=document.querySelector(".".concat(e.code));t&&t.classList.remove("keyboard-code-active")})),document.querySelector(".keyboard").addEventListener("mousedown",(function(e){e.preventDefault();var t=e.target;if(t.parentNode.classList.contains("button"))switch((u=document.querySelector(".".concat(t.parentNode.classList[1]))).classList.add("keyboard-code-active"),t.innerHTML){case"Backspace":p.selectionStart!==p.selectionEnd?p.setRangeText("",[p.selectionStart],[p.selectionEnd],["end"]):p.setRangeText("",[p.selectionStart-1],[p.selectionEnd],["end"]);break;case" ":case"Tab":p.setRangeText(" ",[p.selectionStart],[p.selectionEnd],["end"]);break;case"CapsLock":t.classList.contains("active-capslock")?(t.classList.remove("active-capslock"),d.forEach((function(e){return e.classList.add("hidden")})),f.forEach((function(e){return e.classList.remove("hidden")}))):(d.forEach((function(e){return e.classList.remove("hidden")})),f.forEach((function(e){return e.classList.add("hidden")})),t.classList.add("active-capslock"));break;case"↑":p.select(),p.selectionEnd=p.selectionStart;break;case"↓":p.select(),p.selectionStart=p.selectionEnd;break;case"←":p.selectionStart===p.selectionEnd&&p.selectionStart>0?(p.selectionStart-=1,p.selectionEnd-=1):p.selectionEnd=p.selectionStart;break;case"→":p.selectionStart===p.selectionEnd?(p.selectionEnd+=1,p.selectionStart+=1):p.selectionStart=p.selectionEnd;break;case"":if("Ё"===d[0].innerHTML){for(var n=0;n<d.length;n+=1)d[n].innerHTML="".concat(o[n][0]),f[n].innerHTML="".concat(o[n][1]);localStorage.setItem("lang","en")}else{for(var a=0;a<d.length;a+=1)d[a].innerHTML="".concat(r[a][1]),f[a].innerHTML="".concat(r[a][0]);localStorage.setItem("lang","ru")}break;case"Shift":case"Enter":case"Ctrl":case"Alt":break;default:p.setRangeText(t.textContent,[p.selectionStart],[p.selectionEnd],["end"])}})),document.querySelector(".keyboard").addEventListener("mouseup",(function(){u.classList.remove("keyboard-code-active")}))},function(e,t){function n(e,t,n){var r=document.createElement(e);return n&&r.classList.add(n),r.classList.add(t),r}function r(e,t,r){for(var o=0;o<t.length;o+=1){var a=n("div","button");if(a.classList.add("".concat(e[o])),r.append(a),"Backspace"===e[o]||"Tab"===e[o]||"CapsLock"===e[o]||"Enter"===e[o]||"ShiftLeft"===e[o]||"ShiftRight"===e[o]||"ArrowUp"===e[o]||"ControlLeft"===e[o]||"MetaLeft"===e[o]||"AltLeft"===e[o]||"Space"===e[o]||"AltRight"===e[o]||"ArrowLeft"===e[o]||"ArrowDown"===e[o]||"ArrowRight"===e[o]||"ControlRight"===e[o]){var i=n("span","word");if(" "===t[o]?i.classList.add("\\"):i.classList.add("".concat(t[o])),i.innerHTML=t[o],"MetaLeft"===e[o]){i.innerHTML="";var c=document.createElement("img");c.setAttribute("src","./src/assets/img/lang.png"),c.setAttribute("class","event-none lang-earth"),a.prepend(c)}"Enter"===e[o]&&i.classList.add("virtual-enter"),a.append(i)}else for(var s=0;s<t[o].length;s+=1){var l=n("span","".concat(t[o][s]));0===s?(l.classList.add("up"),l.classList.add("hidden")):l.classList.add("down"),l.innerHTML=t[o][s],a.append(l)}}}e.exports={drawRow:r,create:n,runRow:function(e,t,o){var a=n("div","row");o.append(a),r(e,t,a)}}},function(e,t){e.exports={translate:function(e){var t="".concat("https://translate.yandex.net/","api/v1.5/tr.json/translate?lang=en&key=").concat("trnsl.1.1.20191212T163559Z.5976e236f00df928.df3aab73e789795377c7f6b4f57195e585fb0e53","&text=").concat(e);return fetch(t).then((function(e){return e.json()})).then((function(t){return document.querySelector(".input-search").value=t.text,document.querySelector(".notification").innerHTML="\n        Translated: <strong>".concat(e,".</strong> Showing movies for <strong>").concat(t.text[0],".</strong>\n      "),t.text[0]}))}}},function(e,t){e.exports={speechInput:function(){window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition;var e=new window.SpeechRecognition;return e.interimResults=!0,e.maxAlternatives=10,e.lang="en",e.onresult=function(e){var t=e.results[0][0].transcript;document.querySelector(".input-search").value=t.toLowerCase()},e}}},function(e,t,n){var r=n(8).Movie,o=n(9).MovieDetails,a="https://www.omdbapi.com/";e.exports={getMovies:function(e,t){var n=1,i=0,c=0;return function(){document.querySelector(".keyboard-wrapper").classList.add("hidden");var s=document.querySelector(".not-finded"),l="".concat(a,"?s=").concat(e,"&page=").concat(n,"&apikey=").concat("6bf18ca");return n+=1,fetch(l).then((function(e){return e.json()})).then((function(l){return l.Search&&(document.querySelector(".loader").classList.remove("hidden"),i+=l.Search.length,c=l.totalResults,l.Search.forEach((function(e){fetch("".concat(a,"?i=").concat(e.imdbID,"&apikey=").concat("6bf18ca")).then((function(e){return e.json()})).then((function(e){var t=new r(e),n=new o(e);t.createMovie(n.details())}))})),document.querySelector(".input-search").value=e,s.innerHTML="\n            Uploaded <strong>".concat(i," movies</strong> from <strong>").concat(c,"</strong>.\n            Page <strong>#").concat(n-1,"</strong>.\n          "),t||(document.querySelector(".notification").textContent=""),document.querySelector(".error").textContent=""),0!==i||(document.querySelector(".error").innerHTML='\n            <p style="color: red;">No results for: <strong>"'.concat(e,'"</strong></p>\n          '),!1)})).catch((function(){document.querySelector(".error").innerHTML='\n          <p style="color: red;">No results for: <strong>"'.concat(e,'"</strong></p>\n        ')}))}},isNext:function(e){return e().then((function(e){return!!e&&(document.querySelectorAll(".movie").forEach((function(e){return e.remove()})),!0)}))}}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(0).createElement,a=function(){function e(t){var n=t.Title,r=t.Poster,o=t.Year,a=t.imdbRating,i=t.imdbID;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=n,this.poster=r,this.year=o,this.rating=a,this.id=i}var t,n,a;return t=e,(n=[{key:"createMovie",value:function(e){var t=o("div",{classList:["movie","movie-opacity"]}),n=o("a",{classList:["movie__title"],innerText:"".concat(this.title),href:"https://www.imdb.com/title/".concat(this.id,"/")}),r=o("div",{classList:["movie_image"]}),a=o("img",{src:"".concat("N/A"===this.poster?"./src/assets/img/noposter.png":this.poster)}),i=o("span",{innerText:"".concat(this.year)}),c=o("div",{classList:["movie__rating"],innerHTML:'\n        <span class="rating_star"></span>\n        <span>'.concat("N/A"===this.rating?"no stars":this.rating,"</span>\n      ")}),s=o("div",{}),l=o("button",{classList:["more-button"],innerText:"more details"});t.append(n,r,i,c,s),r.append(a),s.append(l),document.querySelector(".movies-block").append(t),a.addEventListener("load",(function(){document.querySelector(".loader").classList.add("hidden"),t.classList.remove("movie-opacity")})),s.onclick=e,s.ontouchstart=e}}])&&r(t.prototype,n),a&&r(t,a),e}();e.exports={Movie:a}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(0).createElement,a=function(){function e(t){var n=t.Actors,r=t.Awards,o=t.Country,a=t.Genre,i=t.Plot,c=t.Poster,s=t.imdbRating,l=t.Ratings,u=t.Released,d=t.Title,f=t.imdbID,p=t.Runtime,v=t.Director;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.actors=n,this.awards=r,this.country=o,this.genre=a,this.plot=i,this.poster=c,this.ratings=l,this.released=u,this.title=d,this.runtime=p,this.director=v,this.id=f,this.rating=s}var t,n,a;return t=e,(n=[{key:"details",value:function(){var e=this;return function(){var t=document.querySelector("main"),n=o("div",{classList:["details-wrapper","movie-opacity"]}),r=o("div",{classList:["details__img"]}),a=o("img",{src:"".concat("N/A"===e.poster?"./src/assets/img/noposter.png":e.poster)});r.append(a);var i=o("div",{classList:["movie-detail-left"]});i.append(r);var c=o("div",{classList:["movie-detail-right"]}),s=o("h2",{innerText:"".concat(e.title)}),l=o("div",{classList:["four-column"],innerHTML:"\n          <strong>".concat("N/A"===e.genre?"no genre":e.genre,"</strong>\n          <strong>").concat("N/A"===e.released?"no release":e.released,"</strong>\n          <strong>").concat("N/A"===e.country?"no country":e.country,"</strong>\n          <strong>").concat("N/A"===e.runtime?"no time":e.runtime,"</strong>\n        ")}),u=o("p",{innerHTML:"<strong>Director:</strong> ".concat("N/A"===e.director?"no director":e.director)}),d=o("p",{innerHTML:"<strong>Actors:</strong> ".concat("N/A"===e.actors?"no actors":e.actors)}),f=o("p",{innerHTML:"<strong>Plot:</strong> ".concat("N/A"===e.plot?"no plot":e.plot)}),p=o("div",{classList:["wrapper-awards"]}),v=o("div",{classList:["movie__rating"],innerHTML:"<p><strong>Awards: </strong>".concat("N/A"===e.awards?"no awards":e.awards,"</p>")}),h=o("div",{classList:["movie__rating"],innerHTML:'\n          Imdb rating:\n          <div class="rating_title">\n            <span class="rating_star"></span>\n            <span style="align-self: center;">\n              '.concat("N/A"===e.rating?"no stars":e.rating,"\n            </span>\n          </div>\n        ")});p.append(v,h),e.ratings.forEach((function(e){var t=o("div",{classList:["movie__rating"],innerHTML:"\n          ".concat(e.Source,':\n          <div class="rating_title">\n            <span class="rating_star"></span>\n            <span style="align-self: center;">\n              ').concat("N/A"===e.Value?"no stars":e.Value,"\n            </span>\n          <div>\n        ")});p.append(t)}));var m=o("button",{innerText:"return",classList:["close-details"]});c.append(s,l,u,d,f),c.append(p,m);var g=o("div",{classList:["movie-detail-center","wrapper"]});g.append(i,c),n.append(g);var y=function(){t.classList.remove("event-none","half-hidden"),n.remove()};m.onclick=y,m.ontouchstart=y,t.after(n),t.classList.add("event-none","half-hidden"),a.addEventListener("load",(function(){n.classList.remove("movie-opacity")}))}}}])&&r(t.prototype,n),a&&r(t,a),e}();e.exports={MovieDetails:a}},function(e,t){function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){n(document.querySelectorAll(".movie")).filter((function(e){return!e.classList.contains("hidden")})).length<5&&e()}var a,i=!0;function c(e){var t=document.querySelectorAll(".movie"),r=n(t).filter((function(e){return e.classList.contains("hidden")}));i&&t.length>r.length&&(i=!1,t.forEach((function(e){e.classList.add("to-left")})),t[r.length].onanimationend=function(){t[r.length].classList.add("hidden"),t.forEach((function(e){e.classList.remove("to-left")})),o(e),i=!0})}function s(e){var t=document.querySelectorAll(".movie"),r=n(t).filter((function(e){return e.classList.contains("hidden")}));i&&r.length>0&&(i=!1,t[r.length-1].classList.remove("hidden"),t.forEach((function(e){e.classList.add("from-left")})),t[r.length-1].onanimationend=function(){t.forEach((function(e){e.classList.remove("from-left")})),o(e),i=!0})}e.exports={prevMovie:c,nextMovie:s,startSwipe:function(e){a=e.clientX,e.preventDefault()},runSwipe:function(e,t){Math.abs(a-e.clientX)>50&&(a>e.clientX&&c(t),a<e.clientX&&s(t)),e.preventDefault()},startTouchSwipe:function(e,t){e.target.classList.contains("arrow-left")&&c(t),e.target.classList.contains("arrow-right")&&s(t),a=e.changedTouches[0].clientX,e.preventDefault()},runTouchSwipe:function(e,t){var n=e.changedTouches[0].clientX;Math.abs(a-n)>50&&(a>n&&c(t),a<n&&s(t)),e.preventDefault()}}},function(e,t,n){}]);