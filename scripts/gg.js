var doc = document.getElementById("iframe").contentWindow; 
  
var script=doc.document.createElement("script");
script.src=window.location.origin+"nowggadblockremove.js";
doc.document.body.appendChild(script);
