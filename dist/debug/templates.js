this["JST"] = this["JST"] || {};

this["JST"]["app/templates/cover-index.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="cover homepage" >\n    <span class="tagline">\n      <h2>Make the web you want</h2>\n    </span>\n</div>\n<div class="tag-links">\n    <ul>\n        ';
 _.each( tags, function( tag ) { 
;__p+='\n        <li><a href="'+
( base )+
'tag/'+
( tag )+
'">#'+
( tag )+
'</a></li>\n        ';
 }) 
;__p+='\n    </ul>\n</div>';
}
return __p;
};

this["JST"]["app/templates/cover-profile.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="cover" \n    ';
 if ( background_image_url != "") { 
;__p+='\n        style ="background-image:url('+
( background_image_url )+
')" \n    ';
 } 
;__p+='\n>\n    <div class="profile-token-large" \n        ';
 if ( thumbnail_url !="") { 
;__p+='\n        style="background-image:url('+
( thumbnail_url )+
')"\n        ';
 } 
;__p+='\n    ></div>\n\n    <div class="headline">\n        <div class="headline-inner">\n            <h2 class="display-name">'+
( display_name )+
'</h2>\n            <h3 class="username">@'+
( username )+
'</h3>\n            <p class="bio">'+
( bio )+
'</p>\n        </div>\n    </div>\n\n</div>';
}
return __p;
};

this["JST"]["app/templates/cover-tag.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="cover homepage" >\n    <span class="tagline">\n      <h2>Make the web you want</h2>\n    </span>\n</div>\n<div class="tag-links">\n    <ul>\n        ';
 _.each( tags, function( tag ) { 
;__p+='\n        <li><a href="'+
( base )+
'tag/'+
( tag )+
'">#'+
( tag )+
'</a></li>\n        ';
 }) 
;__p+='\n    </ul>\n</div>';
}
return __p;
};

this["JST"]["app/templates/feed-view.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<h2>'+
( headline )+
' &darr;</h2>';
}
return __p;
};

this["JST"]["app/templates/footer.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='\n    <span class="tags">\n        <h1>Explore more Zeegas...  <br>\n            <a data-bypass="true" href="'+
(path )+
'tag/bestof" class="tag-link" name="bestof">#bestof</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/music" class="tag-link" name="music">#music</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/politics" class="tag-link" name="politics">#politics</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/stories" class="tag-link" name="stories">#stories</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/funny" class="tag-link" name="funny">#funny</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/sports" class="tag-link" name="sports">#sports</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/zeegacard" class="tag-link" name="zeegacard">#zeegacard</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/tribute" class="tag-link" name="tribute">#tribute</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/todayinzeega" class="tag-link" name="todayinzeega">#dailyzeega</a>\n        </h1>\n    </span>\n    ';
 if (userId == -1 ){ 
;__p+='\n        <span >\n            <h1>\n                <a class="btnz join-zeega" href="'+
(path )+
'register" >Join Zeega</a>\n            </h1>\n        </span>   \n    ';
 } 
;__p+='';
}
return __p;
};

this["JST"]["app/templates/layout-main.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="cover-wrapper"></div>\n<div class="ZEEGA-content-wrapper">\n    <div class="sidebar-wrapper"></div>\n    <div class="content"></div>\n</div>';
}
return __p;
};

this["JST"]["app/templates/sidebar.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="about" />\n    \n    <div class="logo-wrapper"><span class="logo-mini"></span></div>\n    <div>\n        <h2>is a new form of interactive media. <a class="about-link" href="http://blog.zeega.com/about">Learn more.</a> <h2>\n        <br>\n        ';
 if (userId == -1 ){ 
;__p+='\n        <a class="btnz join-zeega" href="'+
(path )+
'register" > Sign Up</a>\n\n        ';
 } 
;__p+='\n    </div>\n\n</div>\n\n<div class="explore">\n    <h2>\n        Explore:\n        <a data-bypass="true" href="'+
(path )+
'tag/bestof" class="tag-link" name="bestof">#bestof</a>\n        <a data-bypass="true" href="'+
(path )+
'tag/music" class="tag-link" name="music">#music</a>\n        <a data-bypass="true" href="'+
(path )+
'tag/politics" class="tag-link" name="politics">#politics</a>\n        <a data-bypass="true" href="'+
(path )+
'tag/stories" class="tag-link" name="stories">#stories</a>\n        <a data-bypass="true" href="'+
(path )+
'tag/funny" class="tag-link" name="funny">#funny</a>\n        <a data-bypass="true" href="'+
(path )+
'tag/sports" class="tag-link" name="sports">#sports</a>\n        <a data-bypass="true" href="'+
(path )+
'tag/tribute" class="tag-link" name="tribute">#tribute</a>\n        <a data-bypass="true" href="'+
(path )+
'tag/zeegacard" class="tag-link" name="zeegacard">#zeegacard</a>\n        <a data-bypass="true" href="'+
(path )+
'tag/todayinzeega" class="tag-link" name="todayinzeega">#dailyzeega</a>\n\n    </h2>\n</div>';
}
return __p;
};

this["JST"]["app/templates/zeega-card.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="user-meta">\n  <a data-bypass="true" class="profile-link" href="'+
( base )+
'profile/'+
(user.id )+
'" >\n    <div class="user-token token-medium" style="background-image: url('+
( user.thumbnail_url )+
');"></div>\n    <div class="username">'+
(user.display_name)+
'</div>\n  </a>\n</div>\n\n<a href="'+
( base )+
''+
( id )+
'" class="cover-image" style="\n    ';
 if( cover_image != "" ) { 
;__p+='\n      background-image: url('+
(cover_image )+
');\n    ';
 } 
;__p+='\n    ">\n  <span class="playbutton"></span>\n  <div class="static"></div>\n</a>\n\n<div class="project-meta">\n  <div class="social-stats">';
 if( favorite_count ) { 
;__p+='<i class=\'icon-heart\'></i> '+
( favorite_count )+
' ';
 if( favorite_count == 1 ) { 
;__p+='favorite';
 } else { 
;__p+='favorites';
 } 
;__p+=' ';
 } 
;__p+='<i class=\'icon-play\'></i> '+
( views )+
' ';
 if( views == 1 ) { 
;__p+='view';
 } else { 
;__p+='views';
 } 
;__p+='</div>\n  ';
 if ( title !== "" ) { 
;__p+='\n    <div class="caption">\n      <i class=\'icon-comment\'></i> '+
( title )+
'\n    </div>\n  ';
 } 
;__p+='\n</div>';
}
return __p;
};

this["JST"]["app/templates/zeega-viewer.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<iframe \n    id="viewer-iframe"\n    src="'+
(path )+
'" \n    endPage="true" \n    hideChrome="true" \n    webkitAllowFullScreen \n    mozallowfullscreen \n    allowFullScreen\n></iframe>\n<div class="modal-close">×</div>';
}
return __p;
};

this["JST"]["app/templates/zeega.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='';
 if( cover_image != "" ) { 
;__p+='\n\n<article class="card" style="background-image: url('+
(cover_image )+
');" >\n\n';
 } else { 
;__p+='\n\n<article class="card" >\n\n';
 } 
;__p+='\n  <div class="info-overlay">\n    <div class="left-column">\n      <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id )+
'" >\n        <div class="profile-token" style="background-image: url('+
( user.thumbnail_url )+
');"></div>\n       </a>\n    </div>\n    <div class="right-column">\n      <h1 class = "caption">'+
( title )+
'</h1>\n      \n      <div class="profile-name">\n        <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id)+
'" >\n          '+
(user.display_name)+
'\n        </a>\n      </div>\n    </div>\n  </div>\n  <a href="'+
(path )+
''+
(id )+
'" class="play" data-bypass="true"></a>\n</article>\n\n';
 if ( editable ) { 
;__p+='\n  <div class="edit-actions">\n    <a href="/editor/'+
( id )+
'" class="edit-zeega btnz btnz-light" data-bypass="true" >edit</a>\n    <a href="#" class="delete-zeega btnz btnz-light">delete</a>\n  </div>\n';
 } 
;__p+='';
}
return __p;
};