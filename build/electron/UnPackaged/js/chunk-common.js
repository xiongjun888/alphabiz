(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"0204":function(e,t,s){"use strict";s("af17")},"0c6d":function(e,t,s){"use strict";s("ddb0");var n=s("ed08");let a={on:()=>{},send:()=>{}};a=s("34bb").ipcRenderer;const i={};a.on("send_result",((e,{eventName:t,data:s})=>{i[t][0](s)})),a.on("send_error",((e,{eventName:t,data:s})=>{i[t][1](s)})),a.on("about-dialog",(()=>{n["Bus"].$emit("CALL_ABOUT")}));t["a"]=(e,...t)=>new Promise(((s,n)=>{t.length?a.send(e,...t):a.send(e),i[e]=[s,n]}))},"0cb0":function(e,t,s){"use strict";s("6648")},"284d":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-12 row"},[s("q-input",{staticClass:"q-mt-sm setting-number-input",attrs:{hint:e.label,rules:e.rules,type:"number",dense:"",outlined:""},on:{blur:e.onBlur},scopedSlots:e._u([e.dice?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"casino"},on:{click:e.setRandom}},[s("q-tooltip",[e._v(e._s(e.$t("random")))])],1)]},proxy:!0}:null],null,!0),model:{value:e.number,callback:function(t){e.number=e._n(t)},expression:"number"}})],1)},a=[],i=(s("ddb0"),{props:{value:Number,keyName:String,label:String,dice:{type:Array,required:!1},rules:{type:Array,default:()=>[]},min:{type:Number,default:1}},computed:{number:{get(){return this.value},set(e){this.onChange(e)}},minValue(){return Array.isArray(this.dice)?this.dice[0]:this.min}},methods:{isValid(e){for(const t of this.rules)if("function"===typeof t){const s=t(e);if(!0!==s)return!1}return!0},onChange(e){if(""===e)return this.$emit("change",this.keyName,this.minValue);this.$emit("change",this.keyName,e)},onBlur(){this.isValid(this.value)||this.$emit("change",this.keyName,this.minValue)},setRandom(){if(!this.dice||!this.dice.length)return;const[e,t]=this.dice;return this.onChange(Math.floor(Math.random()*(t-e)+e))}}}),r=i,o=(s("7c66"),s("2877")),c=s("27f9"),l=s("0016"),u=s("05c0"),d=s("eebe"),h=s.n(d),g=Object(o["a"])(r,n,a,!1,null,"3fe47d68",null);t["a"]=g.exports;h()(g,"components",{QInput:c["a"],QIcon:l["a"],QTooltip:u["a"]})},"2d04":function(e,t,s){"use strict";var n=s("1b40"),a=s("2b0e"),i=s("0613"),r=s("ff52"),o=s("0967"),c=s("2a19"),l=s("436b"),u=s("8847"),d=s("849b"),h=s("2ef0");const g=[{value:"en-US",label:"English"},{value:"zh-CN",label:"简体中文"},{value:"zh-TW",label:"繁體中文"}];var p=s("a76d"),m=function(e,t,s,n){var a,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,s,n);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(i<3?a(r):i>3?a(t,s,r):a(t,s))||r);return i>3&&r&&Object.defineProperty(t,s,r),r},f=function(e,t,s,n){function a(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,i){function r(e){try{c(n.next(e))}catch(t){i(t)}}function o(e){try{c(n["throw"](e))}catch(t){i(t)}}function c(e){e.done?s(e.value):a(e.value).then(r,o)}c((n=n.apply(e,t||[])).next())}))};const b=!!o["b"].is.electron;let y;b&&(y=s("34bb").ipcRenderer);let v=class extends a["a"]{constructor(){super(...arguments),this.loading=!1,this.changes=new Map,this.settings={},this.languages=g,this.changed=!1}get language(){return this.settings.language}set language(e){u["b"].locale=e,b&&y.send("change-app-i18n",e),this.storeChange("language",e)}get darkMode(){return this.settings.darkMode}set darkMode(e){r["a"].set(e===p["a"].system?"auto":e===p["a"].dark),this.storeChange("darkMode",e)}t(e,...t){return u["b"].t(e,...t)}resetChange(){this.changes.clear(),this.changed=!1,this.loading=!1}storeChange(e,t){console.log(`[Setting] Set ${e} to value:`,t),this.changes.set(e,t),this.$set(this.settings,e,t),this.changed=!0}notify(e){c["a"].create({message:e,position:"bottom-right",type:"positive",timeout:2e3})}syncSetting(){return f(this,void 0,void 0,(function*(){const e=yield i["a"].dispatch("fetchSettings"),t=this.language;this.settings=Object(h["cloneDeep"])(e);const s=e.darkMode===p["a"].system;return r["a"].set(s?"auto":e.darkMode===p["a"].dark),t!==e.language&&(this.language=e.language),e}))}onSubmit(){return f(this,void 0,void 0,(function*(){if(!this.changes.size)return;this.loading=!0;const e=Object.fromEntries(this.changes);e.maximumDownloadNum&&d["a"].emit("update_torrent_settings",{maximumDownloadNum:e.maximumDownloadNum}),yield i["a"].dispatch("set",e),yield this.syncSetting(),this.resetChange(),this.notify(this.t("preferences_set_successfully"))}))}onDiscard(){return f(this,void 0,void 0,(function*(){this.changed&&(yield this.syncSetting(),this.resetChange())}))}onReset(){return f(this,void 0,void 0,(function*(){l["a"].create({title:this.t("reset"),message:this.t("reset_all_settings"),ok:{textColor:"red",color:"unset",flat:!0,label:this.t("reset")},cancel:{textColor:"unset",color:"unset",flat:!0,label:this.t("not_now")}}).onOk((()=>f(this,void 0,void 0,(function*(){this.loading=!0,yield i["a"].dispatch("resetSettings"),yield this.syncSetting(),this.resetChange(),this.notify(this.t("preferences_resetted"))}))))}))}created(){this.settings=Object(h["cloneDeep"])(i["a"].getters.settings)}beforeDestroy(){return this.onDiscard()}beforeRouteLeave(e,t,s){if(!this.changed)return s();l["a"].create({title:this.t("change_not_save"),message:this.t("discard_all_changes"),ok:this.t("stay_in_page"),cancel:this.t("discard"),persistent:!0}).onOk((()=>s(!1))).onCancel((()=>s()))}};v=m([n["a"]],v);t["a"]=v},"2e92":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-select",{staticClass:"setting-select",attrs:{value:e.displayLabel,options:e.options,label:e.label,outlined:"",dense:"","emit-value":"","data-cy":"select-direct"},on:{input:e.emitChange}})},a=[],i=(s("ddb0"),{model:{prop:"value",event:"change"},props:{value:String,options:Array,label:String},computed:{displayLabel(){for(const e of this.options)if(e.value===this.value)return e.label;return this.value}},methods:{emitChange(e){this.$emit("change",e)}}}),r=i,o=(s("0cb0"),s("2877")),c=s("ddd8"),l=s("eebe"),u=s.n(l),d=Object(o["a"])(r,n,a,!1,null,"561c5eba",null);t["a"]=d.exports;u()(d,"components",{QSelect:c["a"]})},"4d5f":function(e,t,s){"use strict";s.d(t,"b",(function(){return g}));s("ddb0"),s("5319");const n=s("aa9c"),a=s("9b0f"),{exec:i,spawn:r}=s("41db"),o="win32"===process.platform,c="darwin"===process.platform,l=new Map([["VLC Player",{win:"vlc.exe",drawin:"VLC.app"}],["GOM Player",{win:"gom.exe",drawin:"GOM Player.app"}],["PotPlayer",{win:"PotPlayerMini64.exe",drawin:""}],["Kodi",{win:"kodi.exe",drawin:"Kodi.app"}],["KMPlayer",{win:"KMPlayer64.exe",drawin:"KMPlayer.app"}],["SMPlayer",{win:"smplayer.exe",drawin:"SMPlayer.app"}],["MediaMonkey",{win:"MediaMonkey.exe",drawin:""}],["AllPlayer",{win:"ALLPlayer.exe",drawin:""}],["5KPlayer",{win:"5KPlayer.exe",drawin:"5KPlayer.app"}],["MPC-HC",{win:"mpc-hc64.exe",drawin:""}]]),u=async()=>new Promise((e=>{const t=[{label:"Alphabiz",value:"Alphabiz"}];if(o){const s=new n({hive:n.HKCU,key:"\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Compatibility Assistant\\Store"});s.values(((s,n)=>{if(s)return e(!1);for(let e=0;e<n.length;e++)l.forEach(((s,i)=>{s.win&&new RegExp(s.win).test(n[e].name)&&(a.existsSync(n[e].name)?t.push({label:i,value:i}):console.log("player file does not exist"))}));e(t)}))}else c?i("ls /Applications",((s,n,a)=>{s?console.error(`exec error: ${s}`):a?console.error(`Error from Git: ${a}`):(l.forEach(((e,s)=>{e.drawin&&new RegExp(e.drawin).test(n)&&t.push({label:s,value:s})})),e(t))})):e(!1)})),d=async e=>new Promise((t=>{if(o){const s=new n({hive:n.HKCU,key:"\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Compatibility Assistant\\Store"});s.values(((s,n)=>{if(s)return t(!1);l.get(e)||t(!1);const i=l.get(e).win;for(let e=0;e<n.length;e++)new RegExp(i).test(n[e].name)&&(a.existsSync(n[e].name)?t(n[e].name):console.log("player file does not exist"));t(!1)}))}else c&&(l.get(e).drawin||t(!1),t(l.get(e).drawin))})),h=async(e,t)=>new Promise((s=>{const n=o?e:"open",a=o?t.replace("/","\\"):["-a",e,t],i=r(n,o?[a]:[...a]);i.on("error",(e=>{s(!1),console.log(`子进程错误，错误码 ${e}`)})),i.unref(),s(!0)})),g=async(e,t)=>{const s=await d(e);if(s){const e=await h(s,t);console.log("openPlayer:"+e)}};t["a"]=u},6648:function(e,t,s){},"7c66":function(e,t,s){"use strict";s("9ad5")},9384:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.dense?"col-4":"col-12"},[s("q-checkbox",{staticClass:"q-mt-sm",attrs:{value:e.value,label:e.label,dense:""},on:{input:e.onChange}},[e.tooltip?s("q-tooltip",[e._v(e._s(e.tooltip))]):e._e()],1)],1)},a=[],i={props:{value:{required:!0},label:String,keyName:String,dense:Boolean,tooltip:{type:String,required:!1}},methods:{onChange(e){this.$emit("change",this.keyName,e)}}},r=i,o=s("2877"),c=s("8f8e"),l=s("05c0"),u=s("eebe"),d=s.n(u),h=Object(o["a"])(r,n,a,!1,null,null,null);t["a"]=h.exports;d()(h,"components",{QCheckbox:c["a"],QTooltip:l["a"]})},"9ad5":function(e,t,s){},a76d:function(e,t,s){"use strict";var n;s.d(t,"a",(function(){return n})),function(e){e["system"]="system",e["light"]="light",e["dark"]="dark"}(n||(n={}))},af17:function(e,t,s){},cdb1:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-footer",{attrs:{bordered:""}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.disable,expression:"!disable"}],staticClass:"row q-pa-sm"},[s("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:e.loading,"text-color":"primary",color:"primary",label:e.$t("submit")},on:{click:e.submit}}),s("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:e.loading,"text-color":"general",color:"general",label:e.$t("discard")},on:{click:e.discard}}),s("q-space"),s("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:e.loading,"text-color":"negative",color:"negative",label:e.$t("reset")},on:{click:e.reset}})],1)])},a=[],i={props:{disable:Boolean,loading:Boolean},methods:{submit(){this.$emit("submit")},discard(){this.$emit("discard")},reset(){this.$emit("reset")}}},r=i,o=s("2877"),c=s("7ff0"),l=s("9c40"),u=s("2c91"),d=s("eebe"),h=s.n(d),g=Object(o["a"])(r,n,a,!1,null,null,null);t["a"]=g.exports;h()(g,"components",{QFooter:c["a"],QBtn:l["a"],QSpace:u["a"]})},d573:function(e,t,s){"use strict";s("ddb0");var n=s("5781");class a extends n["b"]{constructor(){super("lib"),this.resources=this.node.get("resources"),this.titles=this.node.get("titles"),this.covers=this.node.get("covers"),this.sources=this.node.get("sources")}async removeSource(e,t){const s=this.sources.get(e),n=await new Promise((e=>s.get(t).once(e)));this.remove(t,n,s)}createResource(e,{title:t,cover:s,source:n}){const a=this.titles.get(e);a.put(t);const i=this.covers.get(e);Array.isArray(s)?s.forEach((e=>i.set(e))):i.set(s);const r=this.sources.get(e),o=e=>{const{link:t,rating:s,comments:n}=e;r.set({link:t,rating:s,comments:n})};Array.isArray(n)?n.forEach(o):o(n),this.resources.get(e).put({id:e,title:a,cover:i,source:r})}async fetchResource(e){const t=await new Promise((t=>this.resources.get(e).once(t))),s=await this.parseRawData(t);return s}async removeResource(e){const t=["titles","covers","sources","resources"],s=t.map((t=>async()=>{const s=await new Promise((s=>this[t].get(e).once(s)));this.remove(e,s,this[t])}));await Promise.all(s.map((e=>e())))}async fetchAllResources(){const e=await new Promise((e=>this.resources.once(e))),t=await this.parseRawData(e),s={};for(const[n,a]of Object.entries(t))a.id&&(s[n]=a);return s}async fetchLibrary(){const e=["titles","covers","sources","resources"],t=e.map((e=>async()=>{const t=await new Promise((t=>this[e].once(t))),s=await this.parseRawData(t);return[e,s]})),s={};return await Promise.all(t.map((e=>e()))).then((e=>{e.forEach((([e,t])=>{s[e]=t}))})),s}}n["a"].registerModule(new a);const i=window.GunDB.lib;t["a"]=i},e061:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"setting-block row q-mt-md q-mb-lg"},[s("div",{staticClass:"setting-label col-4 q-pt-sm"},[s("span",{staticClass:"q-mr-md"},[e._v(e._s(e.label))])]),s("div",{staticClass:"setting-content col row"},[e._t("default")],2)])},a=[],i={props:{label:String}},r=i,o=(s("0204"),s("2877")),c=Object(o["a"])(r,n,a,!1,null,"4521552c",null);t["a"]=c.exports}}]);