(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0204":function(t,e,n){"use strict";n("af17")},"0c6d":function(t,e,n){"use strict";n("ddb0");var s=n("ed08");let a={on:()=>{},send:()=>{}};a=n("34bb").ipcRenderer;const i={};a.on("send_result",((t,{eventName:e,data:n})=>{i[e][0](n)})),a.on("send_error",((t,{eventName:e,data:n})=>{i[e][1](n)})),a.on("about-dialog",(()=>{s["Bus"].$emit("CALL_ABOUT")}));e["a"]=(t,...e)=>new Promise(((n,s)=>{e.length?a.send(t,...e):a.send(t),i[t]=[n,s]}))},"0cb0":function(t,e,n){"use strict";n("6648")},"1a23":function(t,e,n){"use strict";n("e9df")},"284d":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 row"},[n("q-input",{staticClass:"q-mt-sm setting-number-input",attrs:{hint:t.label,rules:t.rules,type:"number",dense:"",outlined:""},on:{blur:t.onBlur},scopedSlots:t._u([t.dice?{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"casino"},on:{click:t.setRandom}},[n("q-tooltip",[t._v(t._s(t.$t("random")))])],1)]},proxy:!0}:null],null,!0),model:{value:t.number,callback:function(e){t.number=t._n(e)},expression:"number"}})],1)},a=[],i=(n("ddb0"),{props:{value:Number,keyName:String,label:String,dice:{type:Array,required:!1},rules:{type:Array,default:()=>[]},min:{type:Number,default:1}},computed:{number:{get(){return this.value},set(t){this.onChange(t)}},minValue(){return Array.isArray(this.dice)?this.dice[0]:this.min}},methods:{isValid(t){for(const e of this.rules)if("function"===typeof e){const n=e(t);if(!0!==n)return!1}return!0},onChange(t){if(""===t)return this.$emit("change",this.keyName,this.minValue);this.$emit("change",this.keyName,t)},onBlur(){this.isValid(this.value)||this.$emit("change",this.keyName,this.minValue)},setRandom(){if(!this.dice||!this.dice.length)return;const[t,e]=this.dice;return this.onChange(Math.floor(Math.random()*(e-t)+t))}}}),o=i,l=(n("7c66"),n("2877")),r=n("27f9"),c=n("0016"),u=n("05c0"),h=n("eebe"),d=n.n(h),g=Object(l["a"])(o,s,a,!1,null,"3fe47d68",null);e["a"]=g.exports;d()(g,"components",{QInput:r["a"],QIcon:c["a"],QTooltip:u["a"]})},"28b2":function(t,e,n){"use strict";n("ea55")},"2d04":function(t,e,n){"use strict";var s=n("1b40"),a=n("2b0e"),i=n("0613"),o=n("ff52"),l=n("0967"),r=n("2a19"),c=n("436b"),u=n("8847"),h=n("849b"),d=n("2ef0");const g=[{value:"en-US",label:"English"},{value:"zh-CN",label:"简体中文"},{value:"zh-TW",label:"繁體中文"}];var b=n("a76d"),p=function(t,e,n,s){var a,i=arguments.length,o=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,n,s);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(o=(i<3?a(o):i>3?a(e,n,o):a(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o},m=function(t,e,n,s){function a(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function o(t){try{r(s.next(t))}catch(e){i(e)}}function l(t){try{r(s["throw"](t))}catch(e){i(e)}}function r(t){t.done?n(t.value):a(t.value).then(o,l)}r((s=s.apply(t,e||[])).next())}))};const v=!!l["b"].is.electron;let f;v&&(f=n("34bb").ipcRenderer);let k=class extends a["a"]{constructor(){super(...arguments),this.loading=!1,this.changes=new Map,this.settings={},this.languages=g,this.changed=!1}get language(){return this.settings.language}set language(t){u["b"].locale=t,v&&f.send("change-app-i18n",t),this.storeChange("language",t)}get darkMode(){return this.settings.darkMode}set darkMode(t){o["a"].set(t===b["a"].system?"auto":t===b["a"].dark),this.storeChange("darkMode",t)}t(t,...e){return u["b"].t(t,...e)}resetChange(){this.changes.clear(),this.changed=!1,this.loading=!1}storeChange(t,e){console.log(`[Setting] Set ${t} to value:`,e),this.changes.set(t,e),this.$set(this.settings,t,e),this.changed=!0}notify(t){r["a"].create({message:t,position:"bottom-right",type:"positive",timeout:2e3})}syncSetting(){return m(this,void 0,void 0,(function*(){const t=yield i["a"].dispatch("fetchSettings"),e=this.language;this.settings=Object(d["cloneDeep"])(t);const n=t.darkMode===b["a"].system;return o["a"].set(n?"auto":t.darkMode===b["a"].dark),e!==t.language&&(this.language=t.language),t}))}onSubmit(){return m(this,void 0,void 0,(function*(){if(!this.changes.size)return;this.loading=!0;const t=Object.fromEntries(this.changes);t.maximumDownloadNum&&h["a"].emit("update_torrent_settings",{maximumDownloadNum:t.maximumDownloadNum}),yield i["a"].dispatch("set",t),yield this.syncSetting(),this.resetChange(),this.notify(this.t("preferences_set_successfully"))}))}onDiscard(){return m(this,void 0,void 0,(function*(){this.changed&&(yield this.syncSetting(),this.resetChange())}))}onReset(){return m(this,void 0,void 0,(function*(){c["a"].create({title:this.t("reset"),message:this.t("reset_all_settings"),ok:{textColor:"red",color:"unset",flat:!0,label:this.t("reset")},cancel:{textColor:"unset",color:"unset",flat:!0,label:this.t("not_now")}}).onOk((()=>m(this,void 0,void 0,(function*(){this.loading=!0,yield i["a"].dispatch("resetSettings"),yield this.syncSetting(),this.resetChange(),this.notify(this.t("preferences_resetted"))}))))}))}created(){this.settings=Object(d["cloneDeep"])(i["a"].getters.settings)}beforeDestroy(){return this.onDiscard()}beforeRouteLeave(t,e,n){if(!this.changed)return n();c["a"].create({title:this.t("change_not_save"),message:this.t("discard_all_changes"),ok:this.t("stay_in_page"),cancel:this.t("discard"),persistent:!0}).onOk((()=>n(!1))).onCancel((()=>n()))}};k=p([s["a"]],k);e["a"]=k},"2e92":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-select",{staticClass:"setting-select",attrs:{value:t.displayLabel,options:t.options,label:t.label,outlined:"",dense:"","emit-value":"","data-cy":"select-direct"},on:{input:t.emitChange}})},a=[],i=(n("ddb0"),{model:{prop:"value",event:"change"},props:{value:String,options:Array,label:String},computed:{displayLabel(){for(const t of this.options)if(t.value===this.value)return t.label;return this.value}},methods:{emitChange(t){this.$emit("change",t)}}}),o=i,l=(n("0cb0"),n("2877")),r=n("ddd8"),c=n("eebe"),u=n.n(c),h=Object(l["a"])(o,s,a,!1,null,"561c5eba",null);e["a"]=h.exports;u()(h,"components",{QSelect:r["a"]})},"5b07":function(t,e,n){"use strict";n("f5e3")},6648:function(t,e,n){},"6bad":function(t,e,n){"use strict";n("8adb")},"76d3":function(t,e,n){},"7c66":function(t,e,n){"use strict";n("9ad5")},"8adb":function(t,e,n){},9384:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.dense?"col-4":"col-12"},[n("q-checkbox",{staticClass:"q-mt-sm",attrs:{value:t.value,label:t.label,dense:""},on:{input:t.onChange}},[t.tooltip?n("q-tooltip",[t._v(t._s(t.tooltip))]):t._e()],1)],1)},a=[],i={props:{value:{required:!0},label:String,keyName:String,dense:Boolean,tooltip:{type:String,required:!1}},methods:{onChange(t){this.$emit("change",this.keyName,t)}}},o=i,l=n("2877"),r=n("8f8e"),c=n("05c0"),u=n("eebe"),h=n.n(u),d=Object(l["a"])(o,s,a,!1,null,null,null);e["a"]=d.exports;h()(d,"components",{QCheckbox:r["a"],QTooltip:c["a"]})},"9ad5":function(t,e,n){},a76d:function(t,e,n){"use strict";var s;n.d(e,"a",(function(){return s})),function(t){t["system"]="system",t["light"]="light",t["dark"]="dark"}(s||(s={}))},af17:function(t,e,n){},ba12:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("SettingBlock",{directives:[{name:"show",rawName:"v-show",value:t.showDevOption,expression:"showDevOption"}],attrs:{label:"DevTools"}},[n("SettingCheckbox",t._b({on:{change:t.storeChange}},"SettingCheckbox",t.checkboxes.devTools,!1))],1),n("SettingBlock",{attrs:{label:t.t("autoUpdate")}},[n("SettingCheckbox",t._b({on:{change:t.storeChange}},"SettingCheckbox",t.checkboxes.autoUpdate,!1)),n("small",{staticClass:"col-12"},[t._v(t._s(t.t("last_check_at"))+": "+t._s(t.lastUpdateCheckTime))])],1),n("SettingBlock",{attrs:{label:t.t("update_channel")}},[n("SettingSelect",{attrs:{options:t.chanelOptions},model:{value:t.versionChannel,callback:function(e){t.versionChannel=e},expression:"versionChannel"}}),n("SettingText",t._b({directives:[{name:"show",rawName:"v-show",value:"internal"===t.versionChannel,expression:"versionChannel === 'internal'"}],on:{change:t.storeChange}},"SettingText",t.patConfig,!1))],1),n("SettingBlock",{attrs:{label:t.t("trackerService")}},[n("SettingMultiSelect",{attrs:{keyName:"trackerSource",value:t.settings.trackerSource,options:t.trackerOptions},on:{change:t.storeChange}}),n("SettingTextarea",{attrs:{keyName:"trackerList",value:t.settings.trackerList,label:"Trackers"},on:{change:t.storeChange}}),n("div",{staticClass:"col-12 tracker-links text-page q-mt-sm"},[n("span",[t._v(t._s(t.t("recommendUse"))+":")]),n("a",{attrs:{href:"https://github.com/ngosang/trackerslist",target:"_blank"}},[t._v("ngosang/trackerslist")]),n("a",{attrs:{href:"https://github.com/XIU2/TrackersListCollection",target:"_blank"}},[t._v("XIU2/TrackersListCollection")])]),n("SettingCheckbox",t._b({on:{change:t.storeChange}},"SettingCheckbox",t.checkboxes.autoUpdateTrackers,!1)),n("alphabiz-button",{staticClass:"q-mt-sm",attrs:{color:"primary",label:t.t("manualUpdateTracker")},on:{click:t.updateTrackers}}),n("small",{staticClass:"col-12 q-mt-sm"},[t._v(t._s(t.t("last_check_at"))+": "+t._s(t.lastUpdateTrackerTime))])],1),n("SettingBlock",{attrs:{label:t.t("listenPort")}},[n("SettingNumber",t._b({on:{change:t.storeChange}},"SettingNumber",t.ports.BTListenPort,!1)),n("SettingNumber",t._b({on:{change:t.storeChange}},"SettingNumber",t.ports.DHTListenPort,!1))],1),n("SettingBlock",{attrs:{label:t.t("encrypt_connection")}},[n("SettingSelect",{attrs:{options:t.secureOptions},model:{value:t.secureOption,callback:function(e){t.secureOption=e},expression:"secureOption"}})],1),n("SettingBlock",{attrs:{label:t.t("downloadAgreement")}},[n("div",{staticClass:"col-12 q-mt-sm"},[t._v(t._s(t.t("setDefaultClientForFollowingProtocols")))]),n("SettingCheckbox",t._b({on:{change:t.storeChange}},"SettingCheckbox",t.checkboxes.magnetUrl,!1))],1),t.isWindows?n("SettingBlock",{attrs:{label:t.t("torrent_file")}},[n("SettingCheckbox",t._b({on:{change:t.storeChange}},"SettingCheckbox",t.checkboxes.torrentFile,!1))],1):t._e(),t.isWindows?n("SettingBlock",{attrs:{label:t.t("video_file")}},[n("div",{staticClass:"col-6 row",attrs:{id:"bind-ports"}},t._l(t.fileExt.video,(function(e){return n("SettingCheckbox",t._b({key:e.label,on:{change:function(e,n){return t.storeExtChange("video",e,n)}}},"SettingCheckbox",e,!1))})),1)]):t._e(),t.isWindows?n("SettingBlock",{attrs:{label:t.t("audio_file")}},[n("div",{staticClass:"col-6 row"},t._l(t.fileExt.audio,(function(e){return n("SettingCheckbox",t._b({key:e.label,on:{change:function(e,n){return t.storeExtChange("audio",e,n)}}},"SettingCheckbox",e,!1))})),1)]):t._e(),n("SettingFooter",{attrs:{disable:!t.changed,loading:t.loading},on:{submit:t.submit,discard:t.onDiscard,reset:t.onReset}})],1)},a=[],i=n("1b40"),o=n("2d04"),l=n("0613"),r=n("8847");const c="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best.txt",u="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best_ip.txt",h="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all.txt",d="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all_ip.txt",g="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_best.txt",b="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_best_ip.txt",p="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_all.txt",m="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_all_ip.txt",v="https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/best.txt",f="https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/all.txt",k="https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/http.txt",_="https://cdn.jsdelivr.net/gh/XIU2/TrackersListCollection/best.txt",C="https://cdn.jsdelivr.net/gh/XIU2/TrackersListCollection/all.txt",x="https://cdn.jsdelivr.net/gh/XIU2/TrackersListCollection/http.txt",y=[{label:"ngosang/trackerslist",options:[{value:c,label:"ngosang_best",cdn:!1},{value:u,label:"ngosang_best_ip",cdn:!1},{value:h,label:"ngosang_all",cdn:!1},{value:d,label:"ngosang_all_ip",cdn:!1},{value:g,label:"ngosang_best",cdn:!0},{value:b,label:"ngosang_best_ip",cdn:!0},{value:p,label:"ngosang_all",cdn:!0},{value:m,label:"ngosang_all_ip",cdn:!0}]},{label:"XIU2/TrackersListCollection",options:[{value:v,label:"xiu2_best",cdn:!1},{value:f,label:"xiu2_all",cdn:!1},{value:k,label:"xiu2_http",cdn:!1},{value:_,label:"xiu2_best",cdn:!0},{value:C,label:"xiu2_all",cdn:!0},{value:x,label:"xiu2_http",cdn:!0}]}];var S=n("0967"),w=n("0c6d"),T=n("e061"),O=n("cdb1"),N=n("9384"),q=n("2e92"),U=n("284d"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 row"},[n("q-input",{staticClass:"setting-text-input q-mt-sm",attrs:{hint:t.label,type:"text",dense:"",outlined:""},nativeOn:{paste:function(t){t.stopPropagation()}},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)},j=[],$={props:{value:String,keyName:String,label:String},computed:{text:{get(){return this.value},set(t){this.onChange(t)}}},methods:{onChange(t){this.$emit("change",this.keyName,t)}}},L=$,E=(n("28b2"),n("2877")),B=n("27f9"),P=n("eebe"),A=n.n(P),F=Object(E["a"])(L,D,j,!1,null,"188fdf7a",null),Q=F.exports;A()(F,"components",{QInput:B["a"]});var R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 row q-mt-sm"},[n("div",{staticClass:"col-12 q-ml-sm"},[t._v(t._s(t.label))]),n("q-input",{staticClass:"setting-textarea-input",attrs:{outlined:"",type:"textarea",rows:"5"},nativeOn:{paste:function(t){t.preventDefault()}},model:{value:t.texts,callback:function(e){t.texts=e},expression:"texts"}})],1)},I=[],M={props:{value:Array,label:String,keyName:String},computed:{texts:{get(){return this.value.join("\n")},set(t){this.onChange(t.split("\n"))}}},methods:{onChange(t){this.$emit("change",this.keyName,t)}}},V=M,X=(n("d71a"),n("6bad"),n("8572")),H=Object(E["a"])(V,R,I,!1,null,"1187b53c",null),W=H.exports;A()(H,"components",{QInput:B["a"],QField:X["a"]});var z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 q-mt-sm"},[n("q-select",{staticClass:"select-multi-input",attrs:{value:t.selected,options:t.options,outlined:"",dense:"",multiple:"","use-chips":"","use-input":""},on:{input:t.onChange}})],1)},J=[],G={props:{value:Array,options:Array,keyName:String},computed:{selected:{get(){return this.value},set(t){this.onChange(t)}}},methods:{onChange(t){this.$emit("change",this.keyName,t)}}},K=G,Y=(n("1a23"),n("ddd8")),Z=Object(E["a"])(K,z,J,!1,null,"31302aa2",null),tt=Z.exports;A()(Z,"components",{QSelect:Y["a"]});var et=function(t,e,n,s){var a,i=arguments.length,o=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,n,s);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(o=(i<3?a(o):i>3?a(e,n,o):a(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o},nt=function(t,e,n,s){function a(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function o(t){try{r(s.next(t))}catch(e){i(e)}}function l(t){try{r(s["throw"](t))}catch(e){i(e)}}function r(t){t.done?n(t.value):a(t.value).then(o,l)}r((s=s.apply(t,e||[])).next())}))};const st=!!S["b"].is.electron;let at;st&&(at=n("34bb").ipcRenderer);const it=y.reduce(((t,e)=>{const n=e.options;return t.push(...n),t}),[]);let ot=class extends o["a"]{constructor(){super(...arguments),this.trackerOptions=it,this.isWindows=!!S["b"].is.win,this.chanelOptions=[{label:"stable",value:"stable"},{label:"nightly",value:"nightly"},{label:"internal",value:"internal"}],this.secureOptions=[{label:this.t("auto"),value:"auto"},{label:this.t("enable"),value:"enable"},{label:this.t("disable"),value:"disable"}]}get showDevOption(){return!l["a"].getters.settings.disableDevTools}onDevOptionsChange(t){this.settings.disableDevTools=!t}get lastUpdateCheckTime(){return new Date(l["a"].getters.settings.lastUpdateCheckTime).toLocaleString(r["b"].locale)}get lastUpdateTrackerTime(){return new Date(l["a"].getters.settings.trackerLastUpdateTime).toLocaleString(r["b"].locale)}get versionChannel(){return this.settings.versionChannel}set versionChannel(t){this.storeChange("versionChannel",t)}get patConfig(){return{label:"Github PAT (internal)",value:this.settings.githubPAT,keyName:"githubPAT"}}get secureOption(){return this.settings.secureOption}set secureOption(t){this.storeChange("secureOption",t)}get checkboxes(){return{devTools:{label:this.t("disable"),value:this.settings.disableDevTools,keyName:"disableDevTools"},autoUpdate:{label:this.t("autoCheckUpdate"),value:this.settings.autoCheckUpdate,keyName:"autoCheckUpdate"},autoUpdateTrackers:{label:this.t("autoUpdateTrackerServiceList"),value:this.settings.autoUpdateTrackerServiceList,keyName:"autoUpdateTrackerServiceList"},magnetUrl:{label:this.t("magnetUrl")+" [ magnet: ]",value:this.settings.bindMagnetUrl,keyName:"bindMagnetUrl"},torrentFile:{label:".torrent",value:this.settings.bindTorrentFile,keyName:"bindTorrentFile"},videoFile:{label:this.t("video_file"),value:this.settings.bindVideoFile,keyName:"bindVideoFile"},audioFile:{label:this.t("audio_file"),value:this.settings.bindAudioFile,keyName:"bindAudioFile"}}}get fileExt(){const t=["mp4","mkv","avi","mov","wmv","rmvb","flv","webm"],e=["mp3","wav","aac","flac","m4a","wma"];return{video:t.map((t=>(this.settings.bindVideoExts[t]||this.$set(this.settings.bindVideoExts,t,!1),{label:"."+t,value:this.settings.bindVideoExts[t],keyName:t,dense:!0}))),audio:e.map((t=>(this.settings.bindAudioExts[t]||this.$set(this.settings.bindAudioExts,t,!1),{label:"."+t,value:this.settings.bindAudioExts[t],keyName:t,dense:!0})))}}storeExtChange(t,e,n){const s="video"===t?this.settings.bindVideoExts:this.settings.bindAudioExts;s[e]=n,this.storeChange("bindVideoExts",s)}get ports(){const t=t=>!(isNaN(t)||t<17e3||t>22e3)||this.t("range_error",[17e3,22e3]);return{BTListenPort:{label:this.t("BTlistenPort"),value:this.settings.BTlistenPort,keyName:"BTlistenPort",rules:[t],dice:[17e3,22e3]},DHTListenPort:{label:this.t("DHTlistenPort"),value:this.settings.DHTlistenPort,keyName:"DHTlistenPort",rules:[t],dice:[17e3,22e3]}}}updateTrackers(){return nt(this,void 0,void 0,(function*(){const t=yield Object(w["a"])("update_tracker",this.settings.trackerSource);if(t&&t.data){const e=t.data;e.length?(this.storeChange("trackerList",e),t.time&&this.storeChange("trackerLastUpdateTime",t.time),this.notify(this.t("manualUpdateSuccess"))):this.notify(this.t("update_failed"))}}))}beforeRouteEnter(t,e,n){if(t.hash){const e=t.hash;n((()=>{setTimeout((()=>{const t=document.querySelector(e);t?t.scrollIntoView():console.log(e)}),100)}))}else n(!0)}submit(){return nt(this,void 0,void 0,(function*(){this.onSubmit(),this.changes.get("versionChannel")&&st&&setTimeout((()=>{at.send("check-for-update",!0)}),1e3)}))}};et([Object(i["b"])("showDevOption")],ot.prototype,"onDevOptionsChange",null),ot=et([Object(i["a"])({components:{SettingBlock:T["a"],SettingCheckbox:N["a"],SettingSelect:q["a"],SettingNumber:U["a"],SettingText:Q,SettingTextarea:W,SettingMultiSelect:tt,SettingFooter:O["a"]}})],ot);var lt=ot,rt=lt,ct=(n("5b07"),n("9989")),ut=n("b498"),ht=Object(E["a"])(rt,s,a,!1,null,"7a650a4a",null);e["default"]=ht.exports;A()(ht,"components",{QPage:ct["a"],QColor:ut["a"]})},cdb1:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-footer",{attrs:{bordered:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.disable,expression:"!disable"}],staticClass:"row q-pa-sm"},[n("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:t.loading,"text-color":"primary",color:"primary",label:t.$t("submit")},on:{click:t.submit}}),n("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:t.loading,"text-color":"general",color:"general",label:t.$t("discard")},on:{click:t.discard}}),n("q-space"),n("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:t.loading,"text-color":"negative",color:"negative",label:t.$t("reset")},on:{click:t.reset}})],1)])},a=[],i={props:{disable:Boolean,loading:Boolean},methods:{submit(){this.$emit("submit")},discard(){this.$emit("discard")},reset(){this.$emit("reset")}}},o=i,l=n("2877"),r=n("7ff0"),c=n("9c40"),u=n("2c91"),h=n("eebe"),d=n.n(h),g=Object(l["a"])(o,s,a,!1,null,null,null);e["a"]=g.exports;d()(g,"components",{QFooter:r["a"],QBtn:c["a"],QSpace:u["a"]})},d71a:function(t,e,n){"use strict";n("76d3")},e061:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setting-block row q-mt-md q-mb-lg"},[n("div",{staticClass:"setting-label col-4 q-pt-sm"},[n("span",{staticClass:"q-mr-md"},[t._v(t._s(t.label))])]),n("div",{staticClass:"setting-content col row"},[t._t("default")],2)])},a=[],i={props:{label:String}},o=i,l=(n("0204"),n("2877")),r=Object(l["a"])(o,s,a,!1,null,"4521552c",null);e["a"]=r.exports},e9df:function(t,e,n){},ea55:function(t,e,n){},f5e3:function(t,e,n){}}]);