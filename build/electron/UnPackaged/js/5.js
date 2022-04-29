(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"2b76":function(e,t,a){},3042:function(e,t,a){"use strict";a("55d8")},3128:function(e,t,a){},"47f0":function(e,t,a){},"52c0":function(e,t,a){},"55d8":function(e,t,a){},8244:function(e,t,a){},b006:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("q-card",{staticClass:"q-mb-md",attrs:{bordered:"",flat:""}},[a("q-card-section",{staticClass:"panel"},e._l([{color:"positive",icon:"bug_report",label:"Open WebTorrent DevTools",handleClick:e.openWebtorrentDevTools},{color:"negative",icon:"delete_forever",label:"Clear Application Config",handleClick:e.delete_config},{color:"general",icon:"translate",label:"Get User Language",handleClick:e.getUsersLanguage},{color:"general",icon:"language",label:"Get Vue Locale",handleClick:e.getVueLocale},{color:"general",icon:"flag",label:"Get Quasar Locale",handleClick:e.getLocale}],(function(e,t){return a("alphabiz-button",{key:t,attrs:{color:e.color,icon:e.icon,label:e.label},on:{click:e.handleClick}})})),1)],1),a("q-card",{staticClass:"q-mb-md",attrs:{bordered:"",flat:""}},[a("q-tabs",{attrs:{align:"left","no-caps":"","narrow-indicator":""},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},e._l([{name:"accountInfo",icon:"account_circle",label:"Account Info"},{name:"amplify",icon:"developer_board",label:"Amplify"},{name:"devInfo",icon:"info",label:"Dev Info"},{name:"urlConvert",icon:"link",label:"Alphabiz URL Convert"},{name:"libraryEditor",icon:"shopping_bag",label:"Library Editor"}],(function(t){return a("q-tab",e._b({key:t.name},"q-tab",t,!1))})),1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[a("q-tab-panel",{attrs:{name:"accountInfo"}},[a("account-tab-panel")],1),a("q-tab-panel",{attrs:{name:"amplify"}},[a("amplify-tab-panel")],1),a("q-tab-panel",{attrs:{name:"devInfo"}},[a("dev-info-tab-panel")],1),a("q-tab-panel",{attrs:{name:"urlConvert"}},[a("url-convert")],1),a("q-tab-panel",{attrs:{name:"libraryEditor"}},[a("library-editor")],1)],1)],1)],1)},n=[],l=a("ed08"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"q-ma-sm"},[a("q-checkbox",{attrs:{label:"isTestEnv"},model:{value:e.isTest,callback:function(t){e.isTest=t},expression:"isTest"}})],1),a("h4",[e._v(e._s(e.$store.state.account.authState))]),"signedIn"===e.$store.state.account.authState?a("div",{staticClass:"row",staticStyle:{margin:"-4px"}},[e._l(e.$store.getters.accountUserInfo,(function(t,s){return[Array.isArray(t)?[a("div",{key:s,staticClass:"col-12 col-lg-6 q-pa-xs"},[a("q-card",{staticClass:"overflow-hidden",attrs:{flat:"",bordered:""}},[Array.isArray(t)?a("q-expansion-item",{attrs:{"content-inset-level":.4,label:s}},e._l(t,(function(t,s){return a("div",{key:s},[e._v(e._s(t)+"\n              ")])})),0):e._e()],1)],1)]:[a("div",{key:s,staticClass:"col-6 col-sm-3 col-lg-2 q-pa-xs"},[a("q-card",{staticClass:"overflow-hidden q-px-md q-py-sm",staticStyle:{"min-height":"66px"},attrs:{flat:"",bordered:""}},[a("div",{staticClass:"text-capitalize",staticStyle:{"font-size":"0.8rem",opacity:"0.8"}},[e._v(e._s(s)+"\n            ")]),a("div",{staticClass:"text-weight-bold text-no-wrap ellipsis"},[e._v(e._s(t))])])],1)]]}))],2):e._e(),"signedIn"===e.$store.state.account.authState?[a("q-separator",{staticStyle:{margin:"16px -16px"}}),a("div",{staticClass:"q-mb-sm"},[a("q-input",{staticStyle:{"max-width":"300px"},attrs:{label:"TestToken",dense:"",outlined:""},nativeOn:{paste:function(e){e.stopPropagation()}},model:{value:e.testToken,callback:function(t){e.testToken=t},expression:"testToken"}})],1),a("div",[a("alphabiz-button",{attrs:{label:"Add Credits 100","on-click":e.addCredits}})],1)]:e._e()],2)},o=[],r=a("3eaf");const c=new r["a"].Rest("ABDevRest");var u={name:"AccountTabPanel",inject:["isTestEnv"],data(){return{testToken:""}},computed:{isTest:{get(){return this.isTestEnv.getValue()},set(e){this.isTestEnv.setValue(e)}}},methods:{async addCredits(){try{const e=await c.post("/development/addCredits",{testToken:this.testToken});console.log(e)}catch(e){this.$q.notify({message:e.message,type:"negative",position:"bottom-right",timeout:5e3})}}}},d=u,m=a("2877"),v=a("8f8e"),b=a("f09f"),p=a("3b73"),f=a("eb85"),h=a("27f9"),g=a("eebe"),y=a.n(g),C=Object(m["a"])(d,i,o,!1,null,"5a400cb1",null),x=C.exports;y()(C,"components",{QCheckbox:v["a"],QCard:b["a"],QExpansionItem:p["a"],QSeparator:f["a"],QInput:h["a"]});var w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"q-my-xs"},e._l(e.$amplify.amplifyTest,(function(e,t){return a("amplify-button",{key:t,staticClass:"q-ma-xs",attrs:{label:t,"on-click":function(){return e()}}})})),1),a("div",[a("amplify-button",{staticClass:"q-ma-xs",attrs:{label:"testAPI","on-click":e.testAPI}}),a("amplify-button",{staticClass:"q-ma-xs",attrs:{label:"toFinish","on-click":e.toFinish}})],1),a("div",[a("amplify-button",{staticClass:"q-ma-xs",attrs:{label:"enableUserListener","on-click":e.enableUserListener}}),a("amplify-button",{staticClass:"q-ma-xs",attrs:{label:"disableUserListener","on-click":e.disableUserListener}}),a("amplify-button",{staticClass:"q-ma-xs",attrs:{label:"enablePublicListener","on-click":e.enablePublicListener}}),a("amplify-button",{staticClass:"q-ma-xs",attrs:{label:"disablePublicListener","on-click":e.disablePublicListener}})],1)])},k=[];const q=new r["a"].Rest("ABDevRest");var I={name:"AmplifyTabPanel",mounted(){},methods:{async enableUserListener(){await r["a"].GQL.enableUserListener(this.$store.state.account.sub),r["a"].GQL.addUserListener("hooks",(e=>{console.log("user:hooks",e)}))},async disableUserListener(){r["a"].GQL.disableUserListener()},async enablePublicListener(){await r["a"].GQL.enablePublicListener(),r["a"].GQL.addPublicListener("hooks",(e=>{console.log("pub:hooks",e)}))},async disablePublicListener(){r["a"].GQL.disablePublicListener()},async testAPI(){const e=await q.post("/test/transaction",{subA:"8df7f303-89e2-4231-b58e-c276b44ab19e",subB:"44b650d2-69a7-4faf-a900-38019dcc2cde",amount:1e3});console.log(e)},async toFinish(){const e=await this.$store.dispatch("CREDIT_PAY_DATA_FINISH",{transactionId:"d615d886-de57-4e5e-8d5c-e17c0e8bca30"});console.log(e)}}},_=I,S=Object(m["a"])(_,w,k,!1,null,"78db9fc0",null),T=S.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.devInfo.torrentStore?a("div",{staticClass:"full-width"},[e._v("Torrent Config Store:\n    "),a("alphabiz-button",{staticClass:"dev-info-action q-ml-md",attrs:{label:"Open"},on:{click:function(t){return e.open(e.devInfo.torrentStore)}}}),a("alphabiz-button",{staticClass:"dev-info-action q-ml-sm",attrs:{label:"Reset"},on:{click:e.resetTorrent}}),a("pre",[e._v(e._s(e.devInfo.torrentStore))])],1):e._e(),e.devInfo.settingStore?a("div",{staticClass:"full-width"},[e._v("Setting Config Store:\n    "),a("alphabiz-button",{staticClass:"dev-info-action q-ml-md",attrs:{label:"Open"},on:{click:function(t){return e.open(e.devInfo.settingStore)}}}),a("alphabiz-button",{staticClass:"dev-info-action q-ml-sm",attrs:{label:"Reset"},on:{click:e.resetSetting}}),a("pre",[e._v(e._s(e.devInfo.settingStore))])],1):e._e(),e._v("\n  We are using\n  "),e.devInfo.electronVer?a("div",{staticClass:"full-width"},[e._v("Electron "+e._s(e.devInfo.electronVer)+"\n  ")]):e._e(),e.devInfo.chromeVer?a("div",{staticClass:"full-width"},[e._v("Chrome "+e._s(e.devInfo.chromeVer)+"\n  ")]):e._e(),e.devInfo.nodeVer?a("div",{staticClass:"full-width"},[e._v("Node "+e._s(e.devInfo.nodeVer)+"\n  ")]):e._e(),a("div",[e._v("Quasar "+e._s(e.$q.version))]),a("div",[e._v("Vue "+e._s(e.vueVersion))]),a("div",[e._v(" "+e._s(e.$q.platform))]),e.devInfo.processArgv?a("div",{staticClass:"full-width"},[e._v("Process Argv "+e._s(e.devInfo.processArgv))]):e._e()])},L=[],z=a("2b0e");const R=a("ed08").isElectron(),Q=R?a("34bb").ipcRenderer:null;var E={name:"DevInfoTabPanel",inject:["io"],data(){return{devInfo:{torrentStore:"",settingStore:""}}},methods:{open(e){this.io.emit("show_torrent_file",e)},resetTorrent(){R&&Q.send("reset-torrent")},resetSetting(){this.$store.dispatch("resetSettings").then((e=>{this.$i18n.locale=e.language,this.$q.notify("Reset success")}))}},mounted(){R&&(Q.on("dev-info",((e,t)=>{t.torrentStore&&(this.devInfo.torrentStore=t.torrentStore),t.settingStore&&(this.devInfo.settingStore=t.settingStore),t.electronVer&&(this.devInfo.electronVer=t.electronVer),t.chromeVer&&(this.devInfo.chromeVer=t.chromeVer),t.nodeVer&&(this.devInfo.nodeVer=t.nodeVer),t.argv&&(this.devInfo.processArgv=t.argv)})),Q.send("dev-info")),this.io.off("notify",this.notify),this.io.on("notify",this.notify)},computed:{vueVersion(){return z["a"].version}}},A=E,O=(a("3042"),Object(m["a"])(A,$,L,!1,null,"5f269e2f",null)),P=O.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n  Alphabiz URL Convert\n  "),a("q-input",{staticClass:"q-my-md",attrs:{type:"text",label:"source url"},nativeOn:{paste:function(e){e.stopPropagation()}},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),a("q-btn",{attrs:{color:"primary",icon:"check",label:"Convert"},on:{click:e.convert}})],1)},j=[];const V=a("ed08").isElectron(),U=V?a("34bb").ipcRenderer:null;var G={name:"DevInfoTabPanel",inject:["io"],data(){return{url:""}},methods:{convert(){this.url&&V&&(U.once("convert-url",((e,t)=>{this.url=t})),U.send("convert-url",this.url))}}},N=G,B=a("9c40"),F=Object(m["a"])(N,D,j,!1,null,"4cb3b9fe",null),W=F.exports;y()(F,"components",{QInput:h["a"],QBtn:B["a"]});var J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"lib-editor-actions"},[a("alphabiz-button",{attrs:{label:"拉取所有资源","on-click":e.fetchResources}}),a("alphabiz-button",{attrs:{label:"新建资源",immediate:""},on:{click:function(t){e.showCreatorDialog=!0}}}),a("q-dialog",{model:{value:e.showCreatorDialog,callback:function(t){e.showCreatorDialog=t},expression:"showCreatorDialog"}},[a("ResourceCreator",{on:{created:e.onCreatedResource}})],1),a("q-dialog",{model:{value:e.showEditorDialog,callback:function(t){e.showEditorDialog=t},expression:"showEditorDialog"}},[e.editTarget?a("ResourceEditor",{on:{notify:e.handleNotify},model:{value:e.resources[e.editTarget],callback:function(t){e.$set(e.resources,e.editTarget,t)},expression:"resources[editTarget]"}}):e._e(),e._v("--\x3e\n    ")],1)],1),e.resources&&Object.keys(e.resources).length>0?[a("q-separator",{staticStyle:{margin:"16px -16px"}}),a("div",{staticClass:"resource-layout"},e._l(e.resources,(function(t,s){return a("div",{key:s},[t?a("ResourceCard2",{attrs:{edit:"",data:t},on:{click:function(t){e.editTarget=s}}}):e._e()],1)})),0)]:e._e()],2)},H=[],Y=a("d573"),K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"resource-editor",attrs:{flat:"",bordered:""}},[a("div",{staticClass:"editor-header"},[e.value.title?a("div",{staticClass:"editor-title text-no-wrap ellipsis"},[e._v(e._s(e.value.title["en-us"]))]):e._e(),a("alphabiz-button",{staticClass:"q-mx-xs",attrs:{label:"删除资源","on-click":e.removeItem}}),a("alphabiz-button",{staticClass:"q-mx-xs",attrs:{label:"重置数据","on-click":e.syncItem}})],1),a("div",{staticClass:"q-mb-sm",staticStyle:{display:"flex","align-items":"center"}},[a("div",{staticClass:"q-mr-sm non-selectable",staticStyle:{"font-size":"1.2rem"}},[e._v("ID:")]),a("div",{staticClass:"bg-general q-px-sm q-py-xs rounded-borders",staticStyle:{"font-size":"1rem"}},[e._v(e._s(e.value.id))])]),a("div",{staticClass:"resource-item-container"},[e.value.title?a("q-card",{attrs:{flat:""}},[a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{"flex-grow":"1"}},[a("div",{staticClass:"editor-subtitle non-selectable"},[e._v("Title")]),a("div",{staticClass:"text-caption q-mb-sm non-selectable"},[e._v("当前资源的标题")])]),a("div")]),e._l(e.value.title,(function(t,s){return a("div",{key:s,staticClass:"q-pa-xs",staticStyle:{display:"flex",margin:"-8px"}},[a("q-select",{staticClass:"q-ma-xs",staticStyle:{"flex-shrink":"0"},attrs:{dense:"",outlined:"",label:"i18n",readonly:"",value:s}}),a("q-input",{staticClass:"q-ma-xs",staticStyle:{"flex-grow":"1"},attrs:{dense:"",outlined:"",label:"label"},scopedSlots:e._u([{key:"after",fn:function(){return[a("alphabiz-button",{staticClass:"q-ma-xs",attrs:{label:"保存","on-click":function(){return e.saveItemTitle(s)}}}),a("alphabiz-button",{directives:[{name:"show",rawName:"v-show",value:"en-us"!==s,expression:"type!=='en-us'"}],staticClass:"q-ma-xs",attrs:{label:"移除","on-click":function(){return e.removeItemTitle(s)}}})]},proxy:!0}],null,!0),model:{value:e.value.title[s],callback:function(t){e.$set(e.value.title,s,t)},expression:"value.title[type]"}})],1)})),a("div",{staticClass:"text-weight-bold q-mt-md q-mb-sm",staticStyle:{"font-size":"0.9rem"}},[e._v("添加新标题")]),a("div",{staticClass:"q-pa-xs",staticStyle:{display:"flex",margin:"-8px"}},[a("q-select",{staticClass:"q-ma-xs",attrs:{dense:"",outlined:"",label:"i18n",options:e.newItemTitle.i18nOpts},model:{value:e.newItemTitle.i18n,callback:function(t){e.$set(e.newItemTitle,"i18n",t)},expression:"newItemTitle.i18n"}}),a("q-input",{staticClass:"q-ma-xs",staticStyle:{"flex-grow":"1"},attrs:{dense:"",outlined:"",label:"new title"},scopedSlots:e._u([{key:"after",fn:function(){return[a("alphabiz-button",{staticClass:"q-ma-xs",attrs:{label:"添加","on-click":e.appendItemTitle}})]},proxy:!0}],null,!1,4185438170),model:{value:e.newItemTitle.label,callback:function(t){e.$set(e.newItemTitle,"label",t)},expression:"newItemTitle.label"}})],1)],2):e._e(),e.value.cover?a("q-card",{attrs:{flat:""}},[a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{"flex-grow":"1"}},[a("div",{staticClass:"editor-subtitle non-selectable"},[e._v("Cover")]),a("div",{staticClass:"text-caption q-mb-sm non-selectable"},[e._v("当前资源的封面图片的链接")])]),a("div")]),e._l(e.value.cover,(function(t,s){return a("div",{key:s,staticClass:"q-pa-xs",staticStyle:{display:"flex",margin:"-8px"}},[a("q-input",{staticClass:"q-ma-xs",staticStyle:{"flex-grow":"1"},attrs:{dense:"",outlined:"",label:"src"},scopedSlots:e._u([{key:"after",fn:function(){return[a("alphabiz-button",{staticClass:"q-ma-xs",attrs:{label:"保存","on-click":function(){return e.saveItemCover(s)}}}),a("alphabiz-button",{directives:[{name:"show",rawName:"v-show",value:Object.keys(e.value.cover).length>1,expression:"Object.keys(value.cover).length > 1"}],staticClass:"q-ma-xs",attrs:{label:"移除","on-click":function(){return e.removeItemCover(s)}}})]},proxy:!0}],null,!0),model:{value:e.value.cover[s],callback:function(t){e.$set(e.value.cover,s,t)},expression:"value.cover[k]"}})],1)})),a("div",{staticClass:"text-weight-bold q-mt-md q-mb-sm",staticStyle:{"font-size":"0.9rem"}},[e._v("添加新的封面链接")]),a("div",{staticClass:"q-pa-xs",staticStyle:{display:"flex",margin:"-8px"}},[a("q-input",{staticClass:"q-ma-xs",staticStyle:{"flex-grow":"1"},attrs:{dense:"",outlined:"",label:"new src"},scopedSlots:e._u([{key:"after",fn:function(){return[a("alphabiz-button",{staticClass:"q-ma-xs",attrs:{label:"添加","on-click":e.appendItemCover}})]},proxy:!0}],null,!1,3908693111),model:{value:e.newItemCover,callback:function(t){e.newItemCover=t},expression:"newItemCover"}})],1)],2):e._e(),e.value.source?a("q-card",{attrs:{flat:""}},[a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{"flex-grow":"1"}},[a("div",{staticClass:"editor-subtitle non-selectable"},[e._v("Source")]),a("div",{staticClass:"text-caption q-mb-sm non-selectable"},[e._v("当前资源的数据来源")])]),a("div")]),e._l(e.value.source,(function(t,s){return a("div",{key:s},[a("q-separator",{staticStyle:{margin:"8px 0"}}),a("div",{staticClass:"q-pa-xs",staticStyle:{display:"flex",margin:"-8px","flex-wrap":"wrap"}},[a("q-input",{staticClass:"q-ma-xs",staticStyle:{"min-width":"300px","flex-grow":"10"},attrs:{dense:"",outlined:"",label:"AB链接"},model:{value:e.value.source[s].link,callback:function(t){e.$set(e.value.source[s],"link",t)},expression:"value.source[k].link"}}),a("q-input",{staticClass:"q-ma-xs",staticStyle:{width:"56px","flex-grow":"1"},attrs:{dense:"",outlined:"",label:"Rating",type:"number"},model:{value:e.value.source[s].rating,callback:function(t){e.$set(e.value.source[s],"rating",t)},expression:"value.source[k].rating"}}),a("q-input",{staticClass:"q-ma-xs",staticStyle:{width:"100%","flex-grow":"1"},attrs:{dense:"",outlined:"",label:"备注信息"},model:{value:e.value.source[s].comments,callback:function(t){e.$set(e.value.source[s],"comments",t)},expression:"value.source[k].comments"}}),a("div",{staticClass:"q-ma-xs"},[a("alphabiz-button",{staticClass:"q-mr-sm",attrs:{label:"保存","on-click":function(){return e.saveItemSource(s)}}}),a("alphabiz-button",{directives:[{name:"show",rawName:"v-show",value:Object.keys(e.value.source).length>1,expression:"Object.keys(value.source).length > 1"}],attrs:{label:"移除","on-click":function(){return e.removeItemSource(s)}}})],1)],1)],1)})),a("q-separator",{staticStyle:{margin:"8px 0"}}),a("div",{staticClass:"text-weight-bold q-mt-md q-mb-sm",staticStyle:{"font-size":"0.9rem"}},[e._v("添加新的数据源")]),a("div",{staticClass:"q-pa-xs",staticStyle:{display:"flex",margin:"-8px","flex-wrap":"wrap"}},[a("q-input",{staticClass:"q-ma-xs",staticStyle:{"min-width":"300px","flex-grow":"10"},attrs:{dense:"",outlined:"",label:"Link"},model:{value:e.newItemSource.link,callback:function(t){e.$set(e.newItemSource,"link",t)},expression:"newItemSource.link"}}),a("q-input",{staticClass:"q-ma-xs",staticStyle:{width:"56px","flex-grow":"1"},attrs:{dense:"",outlined:"",label:"Rating",type:"number"},model:{value:e.newItemSource.rating,callback:function(t){e.$set(e.newItemSource,"rating",t)},expression:"newItemSource.rating"}}),a("q-input",{staticClass:"q-ma-xs",staticStyle:{width:"100%","flex-grow":"1"},attrs:{dense:"",outlined:"",label:"Comments"},model:{value:e.newItemSource.comments,callback:function(t){e.$set(e.newItemSource,"comments",t)},expression:"newItemSource.comments"}}),a("div",{staticClass:"q-ma-xs"},[a("alphabiz-button",{attrs:{label:"添加","on-click":e.appendItemSource}})],1)],1)],2):e._e()],1)])},M=[],X={name:"ResourceItem",props:{value:Object},data(){return{newItemCover:null,newItemTitle:{i18nOpts:["en-us","zh-cn","zh-tw"],i18n:"en-us",label:null},newItemSource:{link:null,rating:1,comments:null}}},methods:{async syncItem(){const e=await Y["a"].fetchResource(this.value.id);this.$emit("input",e)},async removeItem(){await Y["a"].removeResource(this.value.id),this.$emit("notify","remove",{id:this.value.id})},async saveItemTitle(e){Y["a"].titles.get(this.value.id).get(e).put(this.value.title[e]),await this.syncItem()},async removeItemTitle(e){Y["a"].titles.get(this.value.id).get(e).put(null),await this.syncItem()},async saveItemCover(e){Y["a"].covers.get(this.value.id).get(e).put(this.value.cover[e]),await this.syncItem()},async removeItemCover(e){Y["a"].covers.get(this.value.id).get(e).put(null),await this.syncItem()},async saveItemSource(e){const t=this.value.source[e];Y["a"].sources.get(this.value.id).get(e).put(t),await this.syncItem()},async removeItemSource(e){await Y["a"].removeSource(this.value.id,e),await this.syncItem()},async appendItemTitle(){Y["a"].titles.get(this.value.id).get(this.newItemTitle.i18n).put(this.newItemTitle.label),await this.syncItem(),this.newItemTitle.i18n="en-us",this.newItemTitle.label=null},async appendItemCover(){Y["a"].covers.get(this.value.id).set(this.newItemCover),await this.syncItem(),this.newItemCover=null},async appendItemSource(){Y["a"].sources.get(this.value.id).set({link:this.newItemSource.link,rating:this.newItemSource.rating,comments:this.newItemSource.comments}),await this.syncItem(),this.newItemSource.link=null,this.newItemSource.rating=1,this.newItemSource.comments=null}}},Z=X,ee=(a("db24"),a("ddd8")),te=Object(m["a"])(Z,K,M,!1,null,"7fb671ea",null),ae=te.exports;y()(te,"components",{QCard:b["a"],QSelect:ee["a"],QInput:h["a"],QSeparator:f["a"]});var se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"resource-card",attrs:{flat:"",bordered:""}},[a("div",{staticClass:"resource-button"},[a("alphabiz-button",{attrs:{"button-type":"icon",size:"xl",icon:e.edit?"edit":"play_arrow"},on:{click:e.handleClick}})],1),a("div",{staticClass:"resource-bottom"},[a("div",{staticClass:"resource-info"},[e.data.title&&e.data.title["en-us"]?[a("div",{staticClass:"text-weight-bold",staticStyle:{"font-size":"1.4rem"}},[e._v(e._s(e.data.title["en-us"]))]),a("div",{staticClass:"text-caption non-selectable"},[e._v(e._s(e.data.id))])]:[a("q-skeleton",{staticStyle:{"font-size":"1.4rem"},attrs:{type:"text"}}),a("q-skeleton",{attrs:{type:"text"}})]],2)]),a("div",{staticClass:"resource-mask"}),a("div",{staticClass:"resource-cover"},[e.coverLoaded?e._e():a("q-skeleton",{staticClass:"full-height",attrs:{type:"rect"}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.coverLoaded,expression:"coverLoaded"}],attrs:{src:e.coverSrc,alt:e.data.title["en-us"],referrer:"no-referrer",referrerpolicy:"no-referrer"},on:{load:e.onCoverLoad,error:e.onCoverError}})],1)])},ne=[],le={name:"ResourceCard",props:{data:Object,edit:Boolean},data(){return{coverLoaded:!1}},computed:{coverSrc(){return this.data.cover?this.data.cover[Object.keys(this.data.cover)[0]]:null}},methods:{handleClick(){this.$emit("click")},onCoverLoad(){this.coverLoaded=!0},onCoverError(){console.log("cover load err"),this.coverLoaded=!1},fetchSource(){Y["a"].sources.get(this.data.id)}}},ie=le,oe=(a("b179"),a("293e")),re=Object(m["a"])(ie,se,ne,!1,null,"790bf8e7",null),ce=re.exports;y()(re,"components",{QCard:b["a"],QSkeleton:oe["a"]});var ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"resource-creator",attrs:{flat:"",bordered:""}},[a("div",{staticClass:"creator-header"},[a("div",[a("div",{staticClass:"text-weight-bolder non-selectable text-no-wrap ellipsis",staticStyle:{"font-size":"1.6rem"}},[e._v("Create Resource")]),a("div",{staticClass:"q-mt-md non-selectable",staticStyle:{"font-size":"0.8rem"}},[a("p",[e._v("Title: 新建资源时必须提供英文标题，若有其他语言的标题可后续添加。")])])])]),a("div",{staticClass:"creator-container"},[a("q-input",{attrs:{outlined:"",dense:"",label:"英文标题 | Title (en-us)"},model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}}),a("q-input",{attrs:{outlined:"",dense:"",label:"封面链接 | Cover"},model:{value:e.model.cover,callback:function(t){e.$set(e.model,"cover",t)},expression:"model.cover"}}),a("q-input",{attrs:{outlined:"",dense:"",label:"AB链接 | Source Link"},model:{value:e.model.source.link,callback:function(t){e.$set(e.model.source,"link",t)},expression:"model.source.link"}}),a("q-input",{attrs:{outlined:"",dense:"",label:"优先级 | Source Rating"},model:{value:e.model.source.rating,callback:function(t){e.$set(e.model.source,"rating",t)},expression:"model.source.rating"}}),a("q-input",{attrs:{outlined:"",dense:"",label:"备注 | Source Comments"},model:{value:e.model.source.comments,callback:function(t){e.$set(e.model.source,"comments",t)},expression:"model.source.comments"}})],1),a("div",{staticClass:"q-mt-md"},[a("alphabiz-button",{attrs:{color:"primary",label:"Create","on-click":e.create}})],1)])},de=[],me=a("e1bd");const ve=Object(me["a"])("1234567890abcdefghijklmnopqrstuvwxyz",20);var be={name:"ResourceCreator",data(){return{model:{title:null,cover:null,source:{link:null,rating:null,comments:null}}}},methods:{create(){const e=ve(),t={"en-us":this.model.title},a=[this.model.cover],s=[{link:this.model.source.link,rating:this.model.source.rating,comments:this.model.source.comments}];Y["a"].createResource(e,{title:t,cover:a,source:s}),this.$emit("created",e)}}},pe=be,fe=(a("de39"),Object(m["a"])(pe,ue,de,!1,null,"25ab174a",null)),he=fe.exports;y()(fe,"components",{QCard:b["a"],QInput:h["a"]});var ge={name:"LibraryEditor",components:{ResourceEditor:ae,ResourceCard2:ce,ResourceCreator:he},data(){return{resources:{},showCreatorDialog:!1,editTarget:null}},computed:{showEditorDialog:{get(){return null!==this.editTarget},set(e){e||(this.editTarget=null)}}},methods:{async fetchResources(){const e=await Y["a"].fetchAllResources();this.resources=e},async onCreatedResource(){await this.fetchResources(),this.showCreatorDialog=!1},handleNotify(e,{id:t}){const a={remove:()=>{this.editTarget=null;const e=Object.assign({},this.resources);delete e[t],this.resources=e}};a[e]&&a[e]()}}},ye=ge,Ce=(a("f50d"),a("24e8")),xe=Object(m["a"])(ye,J,H,!1,null,"17cb0abf",null),we=xe.exports;y()(xe,"components",{QDialog:Ce["a"],QSeparator:f["a"]});const ke=a("ed08").isElectron();var qe={name:"Development",components:{AccountTabPanel:x,AmplifyTabPanel:T,DevInfoTabPanel:P,UrlConvert:W,LibraryEditor:we},data(){return{currentTab:"accountInfo"}},methods:{delete_config(){this.$q.electron.ipcRenderer.invoke("deleteConfig").then((e=>{this.$q.notify(e)}))},getLocale(){this.$q.notify(this.$q.lang.getLocale())},getVueLocale(){this.$q.notify(this.$i18n.locale)},getUsersLanguage(){l["localConfigs"].getSettingsItem("language").then((e=>{this.$q.notify({message:e,position:"bottom-right",type:"positive",timeout:3e3})})).catch((()=>{this.$q.notify({message:"未获取到数据项",position:"bottom-right",type:"negative",timeout:3e3})}))},openWebtorrentDevTools(){if(ke)return a("34bb").ipcRenderer.send("open-webtorrent-devtools")}}},Ie=qe,_e=(a("ea29"),a("9989")),Se=a("a370"),Te=a("429b"),$e=a("7460"),Le=a("adad"),ze=a("823b"),Re=Object(m["a"])(Ie,s,n,!1,null,"2ecb6682",null);t["default"]=Re.exports;y()(Re,"components",{QPage:_e["a"],QCard:b["a"],QCardSection:Se["a"],QTabs:Te["a"],QTab:$e["a"],QSeparator:f["a"],QTabPanels:Le["a"],QTabPanel:ze["a"]})},b179:function(e,t,a){"use strict";a("2b76")},db24:function(e,t,a){"use strict";a("8244")},de39:function(e,t,a){"use strict";a("47f0")},ea29:function(e,t,a){"use strict";a("3128")},f50d:function(e,t,a){"use strict";a("52c0")}}]);