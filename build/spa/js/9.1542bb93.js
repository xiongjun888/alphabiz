(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"4d5f":function(e,t,s){"use strict";(function(e){s.d(t,"b",(function(){return h}));s("ddb0"),s("5319");const a=s("aa9c"),i=s("3e8f"),{exec:n,spawn:r}=s("3e8f"),o="win32"===e.platform,l="darwin"===e.platform,d=new Map([["VLC Player",{win:"vlc.exe",drawin:"VLC.app"}],["GOM Player",{win:"gom.exe",drawin:"GOM Player.app"}],["PotPlayer",{win:"PotPlayerMini64.exe",drawin:""}],["Kodi",{win:"kodi.exe",drawin:"Kodi.app"}],["KMPlayer",{win:"KMPlayer64.exe",drawin:"KMPlayer.app"}],["SMPlayer",{win:"smplayer.exe",drawin:"SMPlayer.app"}],["MediaMonkey",{win:"MediaMonkey.exe",drawin:""}],["AllPlayer",{win:"ALLPlayer.exe",drawin:""}],["5KPlayer",{win:"5KPlayer.exe",drawin:"5KPlayer.app"}],["MPC-HC",{win:"mpc-hc64.exe",drawin:""}]]),c=async()=>new Promise((e=>{const t=[{label:"Alphabiz",value:"Alphabiz"}];if(o){const s=new a({hive:a.HKCU,key:"\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Compatibility Assistant\\Store"});s.values(((s,a)=>{if(s)return e(!1);for(let e=0;e<a.length;e++)d.forEach(((s,n)=>{s.win&&new RegExp(s.win).test(a[e].name)&&(i.existsSync(a[e].name)?t.push({label:n,value:n}):console.log("player file does not exist"))}));e(t)}))}else l?n("ls /Applications",((s,a,i)=>{s?console.error(`exec error: ${s}`):i?console.error(`Error from Git: ${i}`):(d.forEach(((e,s)=>{e.drawin&&new RegExp(e.drawin).test(a)&&t.push({label:s,value:s})})),e(t))})):e(!1)})),u=async e=>new Promise((t=>{if(o){const s=new a({hive:a.HKCU,key:"\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Compatibility Assistant\\Store"});s.values(((s,a)=>{if(s)return t(!1);d.get(e)||t(!1);const n=d.get(e).win;for(let e=0;e<a.length;e++)new RegExp(n).test(a[e].name)&&(i.existsSync(a[e].name)?t(a[e].name):console.log("player file does not exist"));t(!1)}))}else l&&(d.get(e).drawin||t(!1),t(d.get(e).drawin))})),p=async(e,t)=>new Promise((s=>{const a=o?e:"open",i=o?t.replace("/","\\"):["-a",e,t],n=r(a,o?[i]:[...i]);n.on("error",(e=>{s(!1),console.log(`子进程错误，错误码 ${e}`)})),n.unref(),s(!0)})),h=async(e,t)=>{const s=await u(e);if(s){const e=await p(s,t);console.log("openPlayer:"+e)}};t["a"]=c}).call(this,s("4362"))},"544d":function(e,t,s){"use strict";s("7f35")},"7f35":function(e,t,s){},d37d:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticStyle:{padding:"0",margin:"0"},attrs:{padding:""}},[s("div",{staticStyle:{padding:"0",margin:"0",height:"calc(100vh - 83px)"},attrs:{id:"player-container",lang:e.lang}},[s("input",{ref:"file",staticStyle:{display:"none"},attrs:{id:"media-file-upload",type:"file","data-cy":"file-input"},on:{input:e.change}}),s("input",{ref:"subtitle",staticStyle:{display:"none"},attrs:{type:"file",accept:".srt,.vtt"},on:{input:e.manualAddSubtitle}}),s("div",{staticStyle:{height:"100%"},attrs:{id:"video-container"}},[s("div",{staticClass:"container"},[s("video",{ref:"video",staticClass:"video-js vjs-default-skin vjs-16-9 vjs-big-play-centered vjs-fluid",staticStyle:{height:"100%"},attrs:{crossorigin:"anonymous",id:"my-video"}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isAudio,expression:"isAudio"}],staticClass:"audio-info-container"},[s("p",{staticClass:"info"},[e._v("This is an audio file")]),s("img",{attrs:{src:"favicon.ico",alt:"favicon",width:"60px"}})])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showSplash,expression:"showSplash"}],attrs:{id:"video-splash"}},[s("div",{staticClass:"loading"},[s("q-circular-progress",{staticClass:"q-ma-md",attrs:{indeterminate:"",size:"24px",color:"primary"}}),s("p",[e._v(e._s(e.videoLoadingHint))])],1)])])},i=[],n=(s("5319"),s("ddb0"),s("2b3d"),s("9861"),s("f0e2")),r=(s("fda2"),s("4e68"),s("3708")),o=s.n(r),l=(s("7f10"),s("6922")),d=s.n(l);const c=s("3e8f"),u=s("df7c");function p(e){if(console.log(e.path||e),!c.existsSync(e.path||e))return[];const t=u.dirname(e.path),s=u.extname(e.path),a=e.name.substring(0,e.name.lastIndexOf("."));console.log(t,a,s);const i=v(t,a),n=m(t,i),r=b(t,a),o=g(t,r);return[...n,...o]}function h(e){if(!c.existsSync(e))return[];const t=u.dirname(e.path),s=e.name.substring(0,e.name.lastIndexOf(".")),a=y(t,s);return f(t,a)}function y(e,t){let s;try{s=c.readdirSync(e),s=s.filter((e=>e.startsWith(t)&&e.endsWith(".ass")))}catch(a){console.log(a)}return s}function f(e,t){const s=[];try{t.forEach(((t,a,i)=>{i[a]=e+"/"+t;const n=c.readFileSync(i[a],"utf-8"),r=u.extname(t.substring(0,t.lastIndexOf("."))).substring(1);s.push({src:URL.createObjectURL(new Blob([n])),label:r})}))}catch(a){console.log(a)}return console.log(s),s}function g(e,t){const s=[];try{t.forEach(((t,a,i)=>{i[a]=e+"/"+t;const n=c.readFileSync(i[a],"utf-8"),r=u.extname(t.substring(0,t.lastIndexOf("."))).substring(1);s.push({src:URL.createObjectURL(new Blob([w(n)])),label:r})}))}catch(a){console.log(a)}return console.log(s),s}function m(e,t){const s=[];try{t.forEach(((t,a,i)=>{i[a]=e+"/"+t;const n=c.readFileSync(i[a],"utf-8"),r=u.extname(t.substring(0,t.lastIndexOf("."))).substring(1);s.push({src:URL.createObjectURL(new Blob([n])),label:r})}))}catch(a){console.log(a)}return console.log(s),s}function v(e,t){let s;try{s=c.readdirSync(e),s=s.filter((e=>e.startsWith(t)&&e.endsWith(".vtt")))}catch(a){console.log(a)}return s}function b(e,t){let s;try{s=c.readdirSync(e),s=s.filter((e=>e.startsWith(t)&&e.endsWith(".srt")))}catch(a){console.log(a)}return s}function w(e){var t=e.replace(/\r+/g,"");t=t.replace(/^\s+|\s+$/g,"");var s=t.split("\n\n"),a="";if(s.length>0){a+="WEBVTT\n\n";for(var i=0;i<s.length;i+=1)a+=P(s[i])}return a}function P(e){var t="",s=e.split(/\n/);while(s.length>3){for(var a=3;a<s.length;a++)s[2]+="\n"+s[a];s.splice(3,s.length-3)}var i=0;if(!s[0].match(/\d+:\d+:\d+/)&&s[1].match(/\d+:\d+:\d+/)&&(t+=s[0].match(/\w+/)+"\n",i+=1),!s[i].match(/\d+:\d+:\d+/))return"";var n=s[1].match(/(\d+):(\d+):(\d+)(?:,(\d+))?\s*--?>\s*(\d+):(\d+):(\d+)(?:,(\d+))?/);return n?(t+=n[1]+":"+n[2]+":"+n[3]+"."+n[4]+" --\x3e "+n[5]+":"+n[6]+":"+n[7]+"."+n[8]+"\n",i+=1,s[i]&&(t+=s[i]+"\n\n"),t):""}s("5898");const x=s("ed08").isElectron();function S(e){if(!x||"string"!==typeof e)return e;const t=s("df7c"),a=t.basename(e);return{name:a,path:e}}var T=s("4d5f"),C=s("0613");const V=s("ed08").isElectron();let k=null,B=null;V&&(k=s("bdb9").remote,B=s("bdb9").ipcRenderer),window.videojs=n["default"],window.libjass=o.a,s("d80d"),s("01a0"),s("8d5e"),function(){const e=n["default"].getComponent("Button");n["default"].registerComponent("FileButton",n["default"].extend(e,{constructor:function(){e.apply(this,arguments);const t=arguments[1];this._text=t.text||"Open File...",this.el_.innerHTML=`<span class="open" title="${this._text}"></span>`}})),n["default"].registerComponent("SubsButton",n["default"].extend(e,{constructor:function(){e.apply(this,arguments);const t=arguments[1];this._text=t.text||"Add subtitles...",this.el_.innerHTML=`<span class="subs" title="${this._text}"></span>`}}));const t=n["default"].getComponent("MenuItem");n["default"].registerComponent("AddSubButton",n["default"].extend(t,{constructor:function(){t.apply(this,arguments);const e=arguments[1];this._text=e.text||"Add subtitles...",this.el_.innerHTML+=`<span>${this._text}</span>`}}))}();var $={name:"Player",inject:["rootApp","io"],data(){return{sb:[],player:null,pipStatus:!1,subsBtn:null,progressInterval:null,progress:0,videoLoadingHint:"",showSplash:!1,isAudio:!1}},computed:{lang(){const e=C["a"].state.setting.language?C["a"].state.setting.language.value:"en-US";return this.player&&this.player.language(e),e},settings(){const e=C["a"].state.setting;return{defaultVideoPlayer:e.defaultVideoPlayer}}},methods:{splashShow(){this.showSplash=!0},splashHide(){this.showSplash=!1},showBigBtn(){this.fileList||this.player.bigPlayButton.on("click",this.openFile)},openFile(){this.$refs.file.click()},async addSubtitle(e,t){var s;let a=e;if("string"===typeof e){if(e.startsWith("blob:"))return;a=e.startsWith("play://")?S(e.replace("play://","")):S(e)}if(t||(t=(null===(s=a)||void 0===s?void 0:s.name)||""),!V){const e=t.match(/\.[^.]+$/)[0];if(!e)return;if(![".srt",".vtt"].includes(e.toLowerCase()))return;const s=".vtt"===e.toLowerCase();return this.player.ass({subtitles:[]}),new Promise((e=>{const i=new FileReader;i.onload=a=>{const i=s?a.target.result:w(a.target.result);this.player.addRemoteTextTrack({src:URL.createObjectURL(new Blob([i])),kind:"captions",label:t},!0),this.subsBtn.addClass("hidden"),e()},i.readAsText(a)}))}console.log("sub",a,t);let i=!1;await Promise.all(p(a).map((e=>(i=!0,new Promise((s=>{setTimeout((()=>{this.player.addRemoteTextTrack({kind:"captions",label:e.label||t,src:e.src},!0),s()}))})))))),this.player.ass({subtitles:[]}),h(a).forEach((e=>{i=!0,this.player.ass().addSubtitle(e.src,e.label||t)})),i&&this.subsBtn.addClass("hidden");const n=this.player.textTracks();n&&n[0]&&(n[0].mode="showing")},async manualAddSubtitle(e){const t=e.target.files;if(!t.length)return;const s=t[0];await this.addSubtitle(s,s.name);let a=-1;const i=this.player.textTracks();setTimeout((()=>{for(let e=0;e<i.length;e++)i[e].label===s.name&&(a=e),i[e].mode="disabled";-1!==a&&(i[a].mode="showing"),this.appendAddSubBtn(),e.target.value=""}),500)},appendAddSubBtn(){if(!V)return;const e=this;setTimeout((()=>{const t=this.player.controlBar.subsCapsButton,s=t.menu.children();if(!s)return;if(s.some((e=>"AddSubButton"===e.name_)))return;const a=t.menu.addChild("AddSubButton",{text:e.$t("add_subtitles")},2);a.addClass("add-sub-btn"),a.on("click",(()=>this.$refs.subtitle.click()))}),1e3)},async updatePlayer(e){if(!e)return;this.player||await this.loadPlayer();let t="string"===typeof e?e:URL.createObjectURL(e);console.log(e,t),C["a"].dispatch("currentVideoUrl",t),t.startsWith("play://")&&(t+=`?infoHash=${C["a"].state.video.currentVideo.infoHash}`),console.log("src",this.player),this.player.src([{src:t,type:"video/mp4"}]),V&&this.subsBtn.removeClass("hidden"),this.$refs.subtitle.value="";var s=this.player.remoteTextTracks(),a=s.length;for(let r=a-1;r>=0;r--)this.player.removeRemoteTextTrack(s[r]);if(await this.addSubtitle(e,e.name),!k||!k.splayerx)return this.appendAddSubBtn();const i=k.splayerx,n=e.path;i.getMediaInfo(n,(e=>{const{streams:t}=JSON.parse(e),s=t.filter((e=>"subtitle"===e.codec_type));let a=!1;i.stopExtractSubtitles();const r=(e,t)=>{if(!e[t])return void this.appendAddSubBtn();const{index:s,tags:o}=e[t];if(!o)return r(e,t+1);let l="";const d=c=>{i.extractSubtitles(n,s,c,!0,10,((s,i,n,c)=>{if(n)return console.log(o),r(e,t+1);c&&(l+=c.toString("utf8")),"EOF"===s?(l.length&&(console.log(l),this.player.ass().addSubtitle(URL.createObjectURL(new Blob([l])),o.title)),a||(a=!0,this.subsBtn.addClass("hidden")),r(e,t+1)):d(i)}))};d(0)};r(s,0)}))},change(e){console.log("Open Media File: "+e.target.files[0].name),0!==e.target.files.length&&(this.updatePlayer(e.target.files[0]),setTimeout((()=>{this.player.play(),this.$refs.file.value=null}),500))},loadPlayer(e=!1){let t=()=>{};const s=new Promise((e=>{t=e}));if(n["default"].getPlayer("my-video")&&!e)return void(this.player=n["default"].getPlayer("my-video"));if(e){Object(n["default"])("my-video")&&Object(n["default"])("my-video").dispose();const e=document.querySelector("#video-container .container");e&&(e.innerHTML='<video\n            crossorigin="anonymous"\n            id="my-video"\n            class="video-js vjs-default-skin vjs-16-9 vjs-big-play-centered vjs-fluid"\n            ref="video"\n            style="height:100%"\n          ></video>')}if(this.player=Object(n["default"])("my-video",{plugins:{hotkeys:d.a},autoplay:!0,preload:"auto",controls:!0,controlBar:{volumePanel:{inline:!1},subtitlesButton:!1}},(()=>{t()})),this.player.on("change",(()=>{console.log("changed")})),this.player.on("ready",(()=>{const e=C["a"].state.video.currentVideo.remotePlay;e&&V?("Alphabiz"===this.settings.defaultVideoPlayer&&this.splashShow(),this.videoLoadingHint=this.$t("waiting_for_torrent"),B.send("get-stream-address"),B.once("stream-address",((e,t)=>{this.splashHide(),this.videoLoadingHint="";const{address:s}=t;console.log("Stream play",t,s),C["a"].dispatch("currentVideoUrl",s);try{this.player.src([{src:s,type:"video/mp4"}]);const e=()=>{console.log("start playing"),this.player.currentTime(C["a"].state.video.currentVideo.currentTime),C["a"].dispatch("resetRemotePlay"),this.player.off("play",e)};this.player.on("play",e),this.player.play()}catch(e){console.log("src err",e),this.player.currentTime(C["a"].state.video.currentVideo.currentTime),C["a"].dispatch("resetRemotePlay")}}))):this.splashHide()})),this.player.on("play",(async()=>{if("Alphabiz"===this.settings.defaultVideoPlayer||/http/.test(C["a"].state.video.currentVideo.url))this.splashHide(),C["a"].dispatch("updateVideoStatus",!0);else{this.player.pause(),this.player.exitPictureInPicture();const e=decodeURI(C["a"].state.video.currentVideo.url).replace("play:///","");console.log("player will pause,open default player,"+e),await Object(T["b"])(this.settings.defaultVideoPlayer,e)}})),this.player.on("pause",(()=>{C["a"].dispatch("updateVideoStatus",!1)})),this.player.on("leavepictureinpicture",(()=>{C["a"].dispatch("updateVideoPIPStatus",!1),this.pipStatus=!1,this.$router.push("/player"),setTimeout((()=>this.player.play()),500)})),this.player.on("enterpictureinpicture",(()=>{C["a"].dispatch("updateVideoPIPStatus",!0),this.pipStatus=!0,setTimeout((()=>this.player.play()),500)})),this.player.on("error",(()=>{this.splashHide();const e=this.player.languages()[this.player.language()],t=e&&e[this.player.error_.message]||this.player.error_.message;this.$q.notify(t),C["a"].dispatch("currentVideoUrl",null),this.loadPlayer(!0)})),this.player.textTracks().on("change",(()=>{const e=this.player.textTracks();let t=!1;setTimeout((()=>{for(const s in e)if(e[s]&&"showing"===e[s].mode){t=!0;break}t||(this.player.ass().current_track=void 0)}),200)})),C["a"].state.video.currentVideo.url&&!C["a"].state.video.currentVideo.remotePlay){let e=C["a"].state.video.currentVideo.url;e.startsWith("play://")&&(e+=`?infoHash=${C["a"].state.video.currentVideo.infoHash}`),this.player.src([{src:e,type:"video/mp4"}]),this.splashHide(),this.player.currentTime(C["a"].state.video.currentVideo.currentTime)}this.fileList||this.player.bigPlayButton.on("click",this.openFile);const a=this.player.controlBar.addChild("FileButton",{text:this.$t("open_file")},1);return a.on("click",this.openFile),this.subsBtn=this.player.controlBar.addChild("SubsButton",{text:this.$t("add_subtitles")},14),this.subsBtn.on("click",(()=>this.$refs.subtitle.click())),C["a"].dispatch("updateVideoPIPStatus",!1),s},updateProgress(e){if(e){let t=document.querySelector("#download-progress");if(!t){const e=document.querySelector(".vjs-progress-holder");if(!e)return;t=e.appendChild(document.createElement("div")),t.id="download-progress"}t.style.background=e.reduce(((e,t)=>e+`, ${t.color} 0%, ${t.color} ${t.length}, ${t.color} 0%`),"linear-gradient(90deg")+", transparent 0%)"}}},updated(){this.loadPlayer()},activated(){C["a"].state.video.currentVideo.remotePlay?this.loadPlayer(!0):(C["a"].state.video.currentVideo.shouldReset&&(C["a"].state.video.currentVideo.shouldReset=!1,this.loadPlayer(!0)),this.loadPlayer()),this.io.on("server_progress",(e=>{if("/player"!==this.$router.currentRoute.path)return;const t=e.find((e=>{var t;return null===(t=C["a"].state.video.currentVideo)||void 0===t?void 0:t.url.includes(e.name)}));if(t&&t.progress){const e=[],s=t.progress.length;let a=t.progress[0],i=1;for(let n=1;n<s;n++)if(t.progress[n]===a&&n<s-1)i+=1;else{if(t.progress[n+1]===a){i+=1;continue}n===s-1&&(i+=1),i&&e.push({color:1===a?"gold":"transparent",length:i/s*100+"%"}),a=t.progress[n],i=1}this.updateProgress(e)}}))},mounted(){this.loadPlayer(!0)},watch:{"$store.state.video.currentVideo.url"(e,t){e&&e!==t&&this.updatePlayer(e)}},beforeDestroy(){C["a"].dispatch("currentVideoCurrentTime",this.player.currentTime()),this&&this.player&&this.player.dispose(),clearInterval(this.progressInterval)},created(){window.addEventListener("error",(e=>{console.log("Uncaught global error",e.message,"\nThis has no effect to app and can be ignore"),this.splashHide()})),V&&(console.log("ask-for-player:"+this.settings.defaultVideoPlayer),"Alphabiz"===this.settings.defaultVideoPlayer&&B.send("request-ask-for-player"),B.on("ask-for-player",(()=>{this.$q.notify({message:this.$t("not_default_player"),actions:[{label:this.$t("dont_show_again"),handler:()=>{C["a"].dispatch("set",{dontAskForPlayer:!0})}},{label:this.$t("go_to_settings"),handler:()=>{this.$router.push("/basicSetting")}}]})})))}},A=$,_=(s("544d"),s("2877")),L=s("9989"),R=s("58ea"),j=s("eebe"),O=s.n(j),M=Object(_["a"])(A,a,i,!1,null,null,null);t["default"]=M.exports;O()(M,"components",{QPage:L["a"],QCircularProgress:R["a"]})}}]);