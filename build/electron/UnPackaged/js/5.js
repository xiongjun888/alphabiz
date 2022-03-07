(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0204":function(e,t,a){"use strict";a("af17")},"0cb0":function(e,t,a){"use strict";a("6648")},"1f49":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("SettingBlock",{attrs:{label:e.t("language")}},[a("SettingSelect",{attrs:{options:e.languages},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}})],1),a("SettingBlock",{attrs:{label:e.t("appearance")}},[a("SettingSelect",{attrs:{options:e.darkmodeOptions},model:{value:e.darkMode,callback:function(t){e.darkMode=t},expression:"darkMode"}})],1),a("SettingBlock",{attrs:{label:e.t("start")}},[a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.autoStart,!1)),a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.autoStartUnfinished,!1))],1),a("SettingBlock",{attrs:{label:e.t("download_directory")}},[a("SettingDirectory",{attrs:{value:e.settings.downloadDirectory,keyName:"downloadDirectory"},on:{change:e.storeChange}})],1),a("SettingBlock",{attrs:{label:e.t("upload_directory")}},[a("SettingDirectory",{attrs:{value:e.settings.uploadDirectory,keyName:"uploadDirectory"},on:{change:e.storeChange}}),a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.autoUpload,!1)),a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.unlimitUpload,!1))],1),a("SettingBlock",{attrs:{label:e.t("transport_setting")}},[a("SettingSpeed",{attrs:{value:e.settings.downloadSpeed,keyName:"downloadSpeed",label:e.t("download_limit")},on:{change:e.storeChange}}),a("SettingSpeed",{attrs:{value:e.settings.uploadSpeed,keyName:"uploadSpeed",label:e.t("upload_limit")},on:{change:e.storeChange}})],1),a("SettingBlock",{attrs:{label:e.t("payed_user_share_rate")}},[a("SettingSlider",{attrs:{value:e.settings.payedUserShareRate,min:50,keyName:"payedUserShareRate"},on:{change:e.storeChange}})],1),a("SettingBlock",{attrs:{label:e.t("BT_setting")}},[a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.saveMetadata,!1))],1),a("SettingBlock",{attrs:{label:e.t("task_manage")}},[a("SettingNumber",e._b({on:{change:e.storeChange}},"SettingNumber",e.taskManage.maxDownloadNum,!1)),a("SettingNumber",e._b({on:{change:e.storeChange}},"SettingNumber",e.taskManage.maxConns,!1)),a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.jumpToDownload,!1)),a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.notification,!1))],1),a("SettingBlock",{attrs:{label:e.t("disk_usage")}},[a("SettingNumber",e._b({on:{change:e.onMinDiskSpaceChange}},"SettingNumber",e.minDiskSpace,!1))],1),a("SettingFooter",{attrs:{disable:!e.changed,loading:e.loading},on:{submit:e.onSubmit,discard:e.onDiscard,reset:e.onReset}})],1)},s=[],i=a("1b40"),o=a("2d04"),l=a("a76d"),r=a("e061"),c=a("cdb1"),u=a("2e92"),d=a("9384"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12"},[a("input",{ref:"folderInput",staticStyle:{display:"none"},attrs:{type:"file",webkitdirectory:""},on:{change:e.onSelect}}),a("q-input",{staticClass:"setting-directory",attrs:{value:e.value,outlined:"",dense:""},on:{input:e.onChange,blur:e.onBlur},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"folder"},on:{click:e.selectDirectory}})]},proxy:!0}])})],1)},g=[],m=(a("ddb0"),a("0967"));const p=m["b"].is.electron,b=p?a("a32b"):null,f=e=>{if(!b)return null;try{let t=b.dirname(e[0]);for(let a=1;a<e.length;a++)while(!e[a].includes(t)&&t.length>1)t=b.dirname(t);return t}catch(t){return null}};var k={props:{value:String,keyName:String},methods:{onChange(e){this.$emit("change",this.keyName,e)},onBlur(){this.$emit("blur")},selectDirectory(){p&&this.$refs.folderInput.click()},onSelect(e){const t=[...e.target.files].map((e=>e.path||e.webkitRelativePath));this.onChange(f(t)||"")}}},v=k,S=(a("2541"),a("2877")),y=a("27f9"),C=a("0016"),x=a("eebe"),_=a.n(x),N=Object(S["a"])(v,h,g,!1,null,"550fd462",null),w=N.exports;_()(N,"components",{QInput:y["a"],QIcon:C["a"]});var D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12 row q-mb-sm"},[a("q-checkbox",{staticClass:"q-mb-md q-mr-sm",attrs:{dense:""},model:{value:e.showCheckbox,callback:function(t){e.showCheckbox=t},expression:"showCheckbox"}}),a("q-input",{staticClass:"input",attrs:{disable:!e.showCheckbox,label:e.label,rules:[e.positiveNumber],type:"number",outlined:"",dense:"","bottom-slots":""},on:{blur:e.onBlur},scopedSlots:e._u([{key:"hint",fn:function(){return[a("div",{staticClass:"text-right"},[e._v("KB/s")])]},proxy:!0}]),model:{value:e.speed,callback:function(t){e.speed=e._n(t)},expression:"speed"}})],1)},q=[],$={props:{label:String,value:Number,keyName:String},data(){return{enable:!1,defaultSpeed:1e5}},computed:{showCheckbox:{get(){return this.value>=0},set(e){e?this.onChange(this.defaultSpeed):this.onChange(-1)}},speed:{get(){const e=Math.floor(this.value/1e3);return e<0?0:e},set(e){this.onChange(1e3*e)}}},methods:{positiveNumber(e){const t=this.$t("limit_input_error");return isNaN(e)?t:e>0||t},onChange(e){if(""===e)return this.$emit("change",this.keyName,this.defaultSpeed);this.$emit("change",this.keyName,e)},onBlur(){!0!==this.positiveNumber(this.value)&&this.$emit("change",this.keyName,this.defaultSpeed)}}},M=$,B=a("8f8e"),O=Object(S["a"])(M,D,q,!1,null,null,null),j=O.exports;_()(O,"components",{QCheckbox:B["a"],QInput:y["a"]});var U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("q-slider",{staticClass:"setting-slider",attrs:{min:e.min,max:e.max,step:e.step,"track-size":"0.6rem","thumb-color":"primary","track-color":"page","selection-color":"secondary",markers:"","marker-labels":"",label:"","label-value":e.label},scopedSlots:e._u([{key:"marker-label-group",fn:function(t){var n=t.markerList;return e._l(n,(function(t){return a("div",{key:t.index,staticClass:"cursor-pointer",class:t.classes,style:t.style,on:{click:function(a){return e.setValue(t.value)}}},[e._v(e._s(t.value)+"%")])}))}}]),model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}})],1)},R=[],Q={props:{value:Number,min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:5},keyName:String},computed:{slide:{get(){return Math.floor(100*this.value)},set(e){this.setValue(e)}},label(){return this.slide+"%"}},methods:{setValue(e){this.$emit("change",this.keyName,e/100)}}},E=Q,L=(a("3ace"),a("c1d0")),A=Object(S["a"])(E,U,R,!1,null,"40a608ea",null),T=A.exports;_()(A,"components",{QSlider:L["a"]});var V=a("284d"),I=function(e,t,a,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,a,o):s(t,a))||o);return i>3&&o&&Object.defineProperty(t,a,o),o};let P=class extends o["a"]{get darkmodeOptions(){return[{label:this.t("darkModeSystem"),value:l["a"].system},{label:this.t("darkModeLight"),value:l["a"].light},{label:this.t("darkModeDark"),value:l["a"].dark}]}get checkboxes(){return{autoStart:{label:this.t("autoStart"),value:this.settings.autoLaunch,keyName:"autoLaunch"},autoStartUnfinished:{label:this.t("autoStartUnfinished"),value:this.settings.autoStartUnfinished,keyName:"autoStartUnfinished"},autoUpload:{label:this.t("enable_auto_upload"),value:this.settings.autoUpload,keyName:"autoUpload"},unlimitUpload:{label:this.t("unlimit_upload_amount"),value:this.settings.unlimitUploadAmount,keyName:"unlimitUploadAmount",tooltip:this.t("unlimit_upload_warning")},saveMetadata:{label:this.t("saveLinkSeed"),value:this.settings.saveLinkSeed,keyName:"saveLinkSeed"},jumpToDownload:{label:this.t("automaticSkip"),value:this.settings.autoJumpToDownload,keyName:"autoJumpToDownload"},notification:{label:this.t("afterNotification"),value:this.settings.notifyAfterDownloaded,keyName:"notifyAfterDownloaded"}}}get minDiskSpace(){return{label:this.t("pause_if_less_space"),value:Math.floor(this.settings.minDiskSpace/1e6),keyName:"minDiskSpace",rules:[e=>!(isNaN(e)||e<10||e>1e6)||this.t("range_error",["10MB","1TB"])],min:10}}onMinDiskSpaceChange(e,t){return this.storeChange("minDiskSpace",1e6*t)}get taskManage(){const e=e=>!(isNaN(e)||e<=0||e>20)||this.t("range_error",[1,20]);return{maxDownloadNum:{label:this.t("maximumDownloadNum"),value:this.settings.maximumDownloadNum,keyName:"maximumDownloadNum",rules:[e]},maxConns:{label:this.t("maximumConnectionsNum"),value:this.settings.maximumConnectionsNum,keyName:"maximumConnectionsNum",rules:[e]}}}get payedUserShareRate(){return this.settings.payedUserShareRate}set payedUserShareRate(e){this.storeChange("payedUserShareRate",e)}};P=I([Object(i["a"])({components:{SettingBlock:r["a"],SettingSelect:u["a"],SettingCheckbox:d["a"],SettingDirectory:w,SettingSpeed:j,SettingSlider:T,SettingNumber:V["a"],SettingFooter:c["a"]}})],P);var z=P,J=z,F=a("9989"),K=Object(S["a"])(J,n,s,!1,null,null,null);t["default"]=K.exports;_()(K,"components",{QPage:F["a"]})},2541:function(e,t,a){"use strict";a("46ef")},"284d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12 row"},[a("q-input",{staticClass:"q-mt-sm setting-number-input",attrs:{hint:e.label,rules:e.rules,type:"number",dense:"",outlined:""},on:{blur:e.onBlur},scopedSlots:e._u([e.dice?{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"casino"},on:{click:e.setRandom}},[a("q-tooltip",[e._v(e._s(e.$t("random")))])],1)]},proxy:!0}:null],null,!0),model:{value:e.number,callback:function(t){e.number=e._n(t)},expression:"number"}})],1)},s=[],i=(a("ddb0"),{props:{value:Number,keyName:String,label:String,dice:{type:Array,required:!1},rules:{type:Array,default:()=>[]},min:{type:Number,default:1}},computed:{number:{get(){return this.value},set(e){this.onChange(e)}},minValue(){return Array.isArray(this.dice)?this.dice[0]:this.min}},methods:{isValid(e){for(const t of this.rules)if("function"===typeof t){const a=t(e);if(!0!==a)return!1}return!0},onChange(e){if(""===e)return this.$emit("change",this.keyName,this.minValue);this.$emit("change",this.keyName,e)},onBlur(){this.isValid(this.value)||this.$emit("change",this.keyName,this.minValue)},setRandom(){if(!this.dice||!this.dice.length)return;const[e,t]=this.dice;return this.onChange(Math.floor(Math.random()*(t-e)+e))}}}),o=i,l=(a("7c66"),a("2877")),r=a("27f9"),c=a("0016"),u=a("05c0"),d=a("eebe"),h=a.n(d),g=Object(l["a"])(o,n,s,!1,null,"3fe47d68",null);t["a"]=g.exports;h()(g,"components",{QInput:r["a"],QIcon:c["a"],QTooltip:u["a"]})},"2d04":function(e,t,a){"use strict";var n=a("1b40"),s=a("2b0e"),i=a("0613"),o=a("ff52"),l=a("0967"),r=a("2a19"),c=a("436b"),u=a("8847"),d=a("849b"),h=a("ed08");const g=[{value:"en-US",label:"English"},{value:"zh-CN",label:"简体中文"},{value:"zh-TW",label:"繁體中文"}];var m=a("a76d"),p=function(e,t,a,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,a,o):s(t,a))||o);return i>3&&o&&Object.defineProperty(t,a,o),o},b=function(e,t,a,n){function s(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,i){function o(e){try{r(n.next(e))}catch(t){i(t)}}function l(e){try{r(n["throw"](e))}catch(t){i(t)}}function r(e){e.done?a(e.value):s(e.value).then(o,l)}r((n=n.apply(e,t||[])).next())}))};const f=!!l["b"].is.electron;let k=null;f&&(k=a("34bb").ipcRenderer);let v=class extends s["a"]{constructor(){super(...arguments),this.loading=!1,this.changes=new Map,this.settings={},this.languages=g,this.changed=!1}get language(){return this.settings.language}set language(e){u["b"].locale=e,f&&k.send("change-app-i18n",e),this.storeChange("language",e)}get darkMode(){return this.settings.darkMode}set darkMode(e){o["a"].set(e===m["a"].system?"auto":e===m["a"].dark),this.storeChange("darkMode",e)}t(e,...t){return u["b"].t(e,...t)}resetChange(){this.changes.clear(),this.changed=!1,this.loading=!1}storeChange(e,t){console.log(`[Setting] Set ${e} to value:`,t),this.changes.set(e,t),this.$set(this.settings,e,t),this.changed=!0}notify(e){r["a"].create({message:e,position:"bottom-right",type:"positive",timeout:2e3})}syncSetting(){return b(this,void 0,void 0,(function*(){const e=yield i["a"].dispatch("fetchSettings"),t=this.language;this.settings=Object(h["deepClone"])(e);const a=e.darkMode===m["a"].system;return o["a"].set(a?"auto":e.darkMode===m["a"].dark),t!==e.language&&(this.language=e.language),e}))}onSubmit(){return b(this,void 0,void 0,(function*(){if(!this.changes.size)return;this.loading=!0;const e=Object.fromEntries(this.changes);e.maximumDownloadNum&&d["a"].emit("update_torrent_settings",{maximumDownloadNum:e.maximumDownloadNum}),yield i["a"].dispatch("set",e),yield this.syncSetting(),this.resetChange(),this.notify(this.t("preferences_set_successfully"))}))}onDiscard(){return b(this,void 0,void 0,(function*(){this.changed&&(yield this.syncSetting(),this.resetChange())}))}onReset(){return b(this,void 0,void 0,(function*(){c["a"].create({title:this.t("reset"),message:this.t("reset_all_settings"),ok:{textColor:"red",color:"unset",flat:!0,label:this.t("reset")},cancel:{textColor:"unset",color:"unset",flat:!0,label:this.t("not_now")}}).onOk((()=>b(this,void 0,void 0,(function*(){this.loading=!0,yield i["a"].dispatch("resetSettings"),yield this.syncSetting(),this.resetChange(),this.notify(this.t("preferences_resetted"))}))))}))}created(){this.settings=Object(h["deepClone"])(i["a"].getters.settings)}beforeDestroy(){return this.onDiscard()}beforeRouteLeave(e,t,a){if(!this.changed)return a();c["a"].create({title:this.t("change_not_save"),message:this.t("discard_all_changes"),ok:this.t("stay_in_page"),cancel:this.t("discard"),persistent:!0}).onOk((()=>a(!1))).onCancel((()=>a()))}};v=p([n["a"]],v);t["a"]=v},"2e92":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-select",{staticClass:"setting-select",attrs:{value:e.displayLabel,options:e.options,label:e.label,outlined:"",dense:"","emit-value":"","data-cy":"select-direct"},on:{input:e.emitChange}})},s=[],i=(a("ddb0"),{model:{prop:"value",event:"change"},props:{value:String,options:Array,label:String},computed:{displayLabel(){for(const e of this.options)if(e.value===this.value)return e.label;return this.value}},methods:{emitChange(e){this.$emit("change",e)}}}),o=i,l=(a("0cb0"),a("2877")),r=a("ddd8"),c=a("eebe"),u=a.n(c),d=Object(l["a"])(o,n,s,!1,null,"561c5eba",null);t["a"]=d.exports;u()(d,"components",{QSelect:r["a"]})},"3ace":function(e,t,a){"use strict";a("6864")},"46ef":function(e,t,a){},6648:function(e,t,a){},6864:function(e,t,a){},"7c66":function(e,t,a){"use strict";a("9ad5")},9384:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.dense?"col-4":"col-12"},[a("q-checkbox",{staticClass:"q-mt-sm",attrs:{value:e.value,label:e.label,dense:""},on:{input:e.onChange}},[e.tooltip?a("q-tooltip",[e._v(e._s(e.tooltip))]):e._e()],1)],1)},s=[],i={props:{value:{required:!0},label:String,keyName:String,dense:Boolean,tooltip:{type:String,required:!1}},methods:{onChange(e){this.$emit("change",this.keyName,e)}}},o=i,l=a("2877"),r=a("8f8e"),c=a("05c0"),u=a("eebe"),d=a.n(u),h=Object(l["a"])(o,n,s,!1,null,null,null);t["a"]=h.exports;d()(h,"components",{QCheckbox:r["a"],QTooltip:c["a"]})},"9ad5":function(e,t,a){},a76d:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e["system"]="system",e["light"]="light",e["dark"]="dark"}(n||(n={}))},af17:function(e,t,a){},cdb1:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-footer",{attrs:{bordered:""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.disable,expression:"!disable"}],staticClass:"row q-pa-sm"},[a("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:e.loading,"text-color":"primary",color:"primary",label:e.$t("submit")},on:{click:e.submit}}),a("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:e.loading,"text-color":"general",color:"general",label:e.$t("discard")},on:{click:e.discard}}),a("q-space"),a("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:e.loading,"text-color":"negative",color:"negative",label:e.$t("reset")},on:{click:e.reset}})],1)])},s=[],i={props:{disable:Boolean,loading:Boolean},methods:{submit(){this.$emit("submit")},discard(){this.$emit("discard")},reset(){this.$emit("reset")}}},o=i,l=a("2877"),r=a("7ff0"),c=a("9c40"),u=a("2c91"),d=a("eebe"),h=a.n(d),g=Object(l["a"])(o,n,s,!1,null,null,null);t["a"]=g.exports;h()(g,"components",{QFooter:r["a"],QBtn:c["a"],QSpace:u["a"]})},e061:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"setting-block row q-mt-md q-mb-lg"},[a("div",{staticClass:"setting-label col-4 q-pt-sm"},[a("span",{staticClass:"q-mr-md"},[e._v(e._s(e.label))])]),a("div",{staticClass:"setting-content col row"},[e._t("default")],2)])},s=[],i={props:{label:String}},o=i,l=(a("0204"),a("2877")),r=Object(l["a"])(o,n,s,!1,null,"4521552c",null);t["a"]=r.exports}}]);