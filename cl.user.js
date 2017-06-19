// ==UserScript==
// @name         Comment Links
// @namespace    http://scratch.mit.edu/users/7Snails/
// @version      0.1
// @description  Adds a link to each comment
// @author       7Snails
// @match        https://scratch.mit.edu/projects/*
// @match        http://scratch.mit.edu/projects/*
// @match        https://scratch.mit.edu/projects/*/*
// @match        http://scratch.mit.edu/projects/*/*
// @match        https://scratch.mit.edu/users/*
// @match        http://scratch.mit.edu/users/*
// @match        https://scratch.mit.edu/projects/*/*
// @match        http://scratch.mit.edu/projects/*/*
// ==/UserScript==

window.onload = function(){
var comments = document.getElementsByClassName("comment");
var commentsLength = comments.length;

var i = 0;
while(i < commentsLength) {
    var commentid = comments[i].id;
    var currentcomment = document.getElementsByClassName("actions-wrap")[i];
    var commentlink = currentcomment.baseURI;
    var actionSpan = document.createElement("a");
    actionSpan.setAttribute("class", "actions report");
    actionSpan.setAttribute("href", "#" + commentid);
    var actionText = document.createTextNode("Link");
    actionSpan.appendChild(actionText);
    currentcomment.appendChild(actionSpan);
    //var actions = currentcomment
    console.log(currentcomment);
    i++;
}
};
