!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.subplay=e()}}(function(){return function e(n,r,t){function i(o,f){if(!r[o]){if(!n[o]){var l="function"==typeof require&&require;if(!f&&l)return l(o,!0);if(u)return u(o,!0);throw new Error("Cannot find module '"+o+"'")}var a=r[o]={exports:{}};n[o][0].call(a.exports,function(e){var r=n[o][1][e];return i(r?r:e)},a,a.exports,e,n,r,t)}return r[o].exports}for(var u="function"==typeof require&&require,o=0;o<t.length;o++)i(t[o]);return i}({1:[function(e,n,r){(function(){n.exports=e("./sub")}).call(this)},{"./sub":2}],2:[function(e,n,r){(function(){var r,t,i,u,o,f,l,a,s,d=[].slice;a=e("subtitles-parser"),i=function(){var e;return null!=(e=document.getElementsByTagName("video"))?e[0]:void 0},l=function(){var e,n,r,t,i,u,o;for(u=arguments[0],i=2<=arguments.length?d.call(arguments,1):[],e=0,r=i.length;r>e;e++){t=i[e];for(n in t)o=t[n],void 0!==o&&(u[n]=o)}return u},o=function(e){return"string"==typeof e},u=function(e){return"function"==typeof e},r={millis:!1},t=function(e,n){return null==(null!=n?n.endTime:void 0)||e>(null!=n?n.endTime:void 0)?void 0:n.endTime-e},f=function(e,n,r,i){var u,o,l,a,s,d;return null==i&&(i=!0),u=e[r],o=t(n,u),i&&null!=o&&(s=e[r-1],d=t(n,s),null!=d&&o>d&&f(e,n,0,!1)),l=e[r+1],a=t(n,l),null==o||o>a?f(e,n,r+1,!1):r},s=function(e,n,t){var i,s,d,c,m;if(null==t&&(t={}),!o(e))throw new Error("Bad srt");if(!u(n))throw new Error("Bad renderer");return t=l({},r,t),s=a.fromSrt(e,!0),d=0,i=null,c=null,m=function(e,r){var u,o,l,a;if(null==r&&(r=t.millis),o=r?e:1e3*e,d=f(s,o,d),u=s[d],a=Date.now(),l=function(e,r,t){return c=setTimeout(function(){return null!==i&&null!==t&&n(""),n(r),i=t,m(o+(Date.now()-a)+5,!0)},e)},c&&clearTimeout(c),0>o);else if(o<u.startTime){if(u!==i)return l(u.startTime-o,u.text,u)}else if(o<u.endTime)return i===u?l(u.endTime-o,"",null):l(0,u.text,u)}},n.exports=s}).call(this)},{"subtitles-parser":3}],3:[function(e,n,r){var t=function(){var e={};e.fromSrt=function(e,r){var t=r?!0:!1;e=e.replace(/\r/g,"");var i=/(\d+)\n(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/g;e=e.split(i),e.shift();for(var u=[],o=0;o<e.length;o+=4)u.push({id:e[o].trim(),startTime:t?n(e[o+1].trim()):e[o+1].trim(),endTime:t?n(e[o+2].trim()):e[o+2].trim(),text:e[o+3].trim()});return u},e.toSrt=function(e){if(!e instanceof Array)return"";for(var n="",t=0;t<e.length;t++){var i=e[t];isNaN(i.startTime)||isNaN(i.endTime)||(i.startTime=r(parseInt(i.startTime,10)),i.endTime=r(parseInt(i.endTime,10))),n+=i.id+"\r\n",n+=i.startTime+" --> "+i.endTime+"\r\n",n+=i.text.replace("\n","\r\n")+"\r\n\r\n"}return n};var n=function(e){var n=/(\d+):(\d{2}):(\d{2}),(\d{3})/,r=n.exec(e);if(null===r)return 0;for(var t=1;5>t;t++)r[t]=parseInt(r[t],10),isNaN(r[t])&&(r[t]=0);return 36e5*r[1]+6e4*r[2]+1e3*r[3]+r[4]},r=function(e){var n=[36e5,6e4,1e3],r=[];for(var t in n){var i=(e/n[t]>>0).toString();i.length<2&&(i="0"+i),e%=n[t],r.push(i)}var u=e.toString();if(u.length<3)for(t=0;t<=3-u.length;t++)u="0"+u;return r.join(":")+","+u};return e}();"object"==typeof r&&(n.exports=t)},{}]},{},[1])(1)});