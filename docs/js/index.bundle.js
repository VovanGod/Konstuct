!function(){"use strict";const t=document.querySelectorAll(".nav-href"),e=document.querySelector(".mobile-nav-btn"),n=document.querySelector(".mobile-nav");t.forEach((function(t){t.addEventListener("click",(function(){n.classList.toggle("mobile-nav-active"),e.classList.toggle("mobile-nav-btn-active"),document.body.classList.toggle("no-scroll")}))}));!function(){const t=document.querySelector(".mobile-nav-btn"),e=document.querySelector(".mobile-nav");t.onclick=function(){e.classList.toggle("mobile-nav-active"),t.classList.toggle("mobile-nav-btn-active"),document.body.classList.toggle("no-scroll")}}();const c=document.getElementById("services");c.addEventListener("click",(function(){c.classList.toggle("blue-btn-click")}));const o=document.getElementById("thanks"),s=document.getElementById("btn-congr"),l=document.getElementById("input-btn");s.addEventListener("click",(function(){o.classList.add("thanks"),l.value="",o.classList.contains("thanks")&&setTimeout((function(){o.classList.remove("thanks")}),3600)})),document.getElementById("remove-btn").addEventListener("click",(function(){l.focus()}))}();