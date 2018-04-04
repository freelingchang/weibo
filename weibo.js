// ==UserScript==
// @name         weibo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @include     http://s.weibo.com/*
// @include     https://weibo.cn/*
//@include      https://weibo.com/*
//@include      https://*.weibo.com/*
// @include     https://*.weibo.cn/*
// @author       You
// @grant        none
// ==/UserScript==

document.title='国家安全情报分析';

function clear_bannar(){
    var a = document.getElementsByClassName("gn_name");
    if( a.length === 0){
         return;
    }
    var b = a[0].getElementsByClassName('S_txt1');
    b[0].innerText = "国家安全局探员";
}

function clear_search(){
    var a = document.getElementsByClassName("gn_nav_list");
    if( a.length === 0){
         return;
    }
    var b = a[0].getElementsByClassName('S_txt1');
    if (b.length >= 8){b[8].innerText = "国家安全局探员";}
}

function clear_box_name(){
    var aa = document.getElementsByClassName("nameBox");
    if( aa.length === 0){
         return;
    }else{
    var bb = aa[0].getElementsByClassName("name S_txt1");
    bb[0].innerText = "国家安全局探员";
    }
}

function clear_box_img(){
    var t = document.getElementsByClassName("headpic");
    if( t.length === 0){
         return;
    } else {
        var tt = t[0].getElementsByClassName("W_face_radius");
        tt[0].src="//tva3.sinaimg.cn/crop.0.0.180.180.180/5d379f5fjw1e8qgp5bmzyj2050050aa8.jpg";
    }
}

function clear(){
    clear_search();
    clear_bannar();
    clear_box_name();
    clear_box_img();
}

var observer = new MutationObserver(function (mutations, observer) {
    mutations.forEach(function(mutation) {
        clear();
    });
});

observer.observe(document.documentElement, {
                 //attributes: true,
                 //characterData: true,
                 childList: true,
                 subtree: true,
                 //attributeOldValue: true,
                 //characterDataOldValue: true
                 });
