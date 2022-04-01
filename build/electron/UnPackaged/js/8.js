(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{3042:function(e,t,a){"use strict";a("55d8")},"4de7":function(e,t,a){"use strict";a("73ac")},"55d8":function(e,t,a){},"73ac":function(e,t,a){},b006:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("q-card",{staticClass:"q-mb-md",attrs:{bordered:"",flat:""}},[a("q-card-section",{staticClass:"panel"},e._l([{color:"positive",icon:"bug_report",label:"Open WebTorrent DevTools",handleClick:e.openWebtorrentDevTools},{color:"negative",icon:"delete_forever",label:"Clear Application Config",handleClick:e.delete_config},{color:"general",icon:"translate",label:"Get User Language",handleClick:e.getUsersLanguage},{color:"general",icon:"flag",label:"Get Locale",handleClick:e.getLocale}],(function(e,t){return a("alphabiz-button",{key:t,attrs:{color:e.color,icon:e.icon,label:e.label},on:{click:e.handleClick}})})),1)],1),a("q-card",{staticClass:"q-mb-md",attrs:{bordered:"",flat:""}},[a("q-tabs",{attrs:{align:"left","no-caps":"","narrow-indicator":""},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},e._l([{name:"accountInfo",icon:"account_circle",label:"Account Info"},{name:"amplify",icon:"developer_board",label:"Amplify"},{name:"devInfo",icon:"info",label:"Dev Info"}],(function(t){return a("q-tab",e._b({key:t.name},"q-tab",t,!1))})),1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[a("q-tab-panel",{attrs:{name:"accountInfo"}},[a("account-tab-panel")],1),a("q-tab-panel",{attrs:{name:"amplify"}},[a("amplify-tab-panel")],1),a("q-tab-panel",{attrs:{name:"devInfo"}},[a("dev-info-tab-panel")],1)],1)],1)],1)},o=[],r=a("ed08"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h4",[e._v(e._s(e.$store.state.account.authState))]),"signedIn"===e.$store.state.account.authState?a("div",{staticClass:"row",staticStyle:{margin:"-4px"}},[e._l(e.$store.getters.accountUserInfo,(function(t,n){return[Array.isArray(t)?[a("div",{key:n,staticClass:"col-12 col-lg-6 q-pa-xs"},[a("q-card",{staticClass:"overflow-hidden",attrs:{flat:"",bordered:""}},[Array.isArray(t)?a("q-expansion-item",{attrs:{"content-inset-level":.4,label:n}},e._l(t,(function(t,n){return a("div",{key:n},[e._v(e._s(t))])})),0):e._e()],1)],1)]:[a("div",{key:n,staticClass:"col-6 col-sm-3 col-lg-2 q-pa-xs"},[a("q-card",{staticClass:"overflow-hidden q-px-md q-py-sm",staticStyle:{"min-height":"66px"},attrs:{flat:"",bordered:""}},[a("div",{staticClass:"text-capitalize",staticStyle:{"font-size":"0.8rem",opacity:"0.8"}},[e._v(e._s(n))]),a("div",{staticClass:"text-weight-bold text-no-wrap ellipsis"},[e._v(e._s(t))])])],1)]]}))],2):e._e(),"signedIn"===e.$store.state.account.authState?[a("q-separator",{staticStyle:{margin:"16px -16px"}}),a("alphabiz-button",{attrs:{label:"Add Credits 100","on-click":e.addCredits}}),a("span",{staticClass:"q-ml-md"},[e._v("为当前用户添加100积分")])]:e._e()],2)},i=[],l=(a("e9c4"),a("0d1c")),c={name:"AccountTabPanel",methods:{async addCredits(){const e=this.$store.state.account.sub;await Object(l["testCommand"])("bonus",{amount:100,targetSub:e,meta:JSON.stringify({description:"from development panel"})})}}},d=c,u=a("2877"),f=a("f09f"),v=a("3b73"),b=a("eb85"),p=a("eebe"),m=a.n(p),h=Object(u["a"])(d,s,i,!1,null,"60a113ef",null),g=h.exports;m()(h,"components",{QCard:f["a"],QExpansionItem:v["a"],QSeparator:b["a"]});var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.$amplify.amplifyTest,(function(e,t){return a("amplify-button",{key:t,staticClass:"q-mr-sm",attrs:{label:t,"on-click":function(){return e()}}})})),a("amplify-button",{attrs:{label:"task test command","on-click":e.handleTaskTestCmd}})],2)},y=[],C=a("9523"),w=a.n(C),q=(a("d9e2"),a("a030")),I=a("0306"),S=a("63fb"),T=a("70a3");class k{static async execute(e,t){if(!this._operations_[e])throw new Error("operation not found");return await this.executeRaw(e,this._operations_[e],t)}static async executeRaw(e,t,a){var n;const o=await q["a"].graphql({query:t,variables:a}).catch((e=>{throw e instanceof Error?e:new Error(e.errors[0].message)})),r=o.data[e];return null!==(n=null===r||void 0===r?void 0:r.item)&&void 0!==n?n:r}static subscribeRaw(e,t,a,n=console.warn){if(!this._operations_[e])throw new Error("operation not found");const o=this._operations_[e],r=q["a"].graphql({query:o,variables:t});return r.subscribe({next:({provider:t,value:n})=>{var o;return a(null===(o=n.data)||void 0===o?void 0:o[e],t)},error:n})}static async subscribe(e,t,a,n,o){let r=!0;const s=()=>new Promise((e=>setTimeout(e,5e3))),i=async()=>{const l=async()=>{r&&(await s(),await i())};try{await a();const s=await k.subscribeRaw(e,t,o,l),i=s.unsubscribe;s.unsubscribe=function(){return r=!1,i.apply(this)},await n(s)}catch(c){await l()}};await i()}}w()(k,"_operations_",{...I,...S,...T});var x={name:"AmplifyTabPanel",methods:{async handleTaskTestCmd(){const e=await k.execute("taskTestCommand",{input:"123"});console.log(e)}}},$=x,V=Object(u["a"])($,_,y,!1,null,"4b22ff87",null),A=V.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.devInfo.torrentStore?a("div",{staticClass:"full-width"},[e._v("Torrent Config Store:\n    "),a("alphabiz-button",{staticClass:"dev-info-action q-ml-md",attrs:{label:"Open"},on:{click:function(t){return e.open(e.devInfo.torrentStore)}}}),a("alphabiz-button",{staticClass:"dev-info-action q-ml-sm",attrs:{label:"Reset"},on:{click:e.resetTorrent}}),a("pre",[e._v(e._s(e.devInfo.torrentStore))])],1):e._e(),e.devInfo.settingStore?a("div",{staticClass:"full-width"},[e._v("Setting Config Store:\n    "),a("alphabiz-button",{staticClass:"dev-info-action q-ml-md",attrs:{label:"Open"},on:{click:function(t){return e.open(e.devInfo.settingStore)}}}),a("alphabiz-button",{staticClass:"dev-info-action q-ml-sm",attrs:{label:"Reset"},on:{click:e.resetSetting}}),a("pre",[e._v(e._s(e.devInfo.settingStore))])],1):e._e(),e._v("\n  We are using\n  "),e.devInfo.electronVer?a("div",{staticClass:"full-width"},[e._v("Electron "+e._s(e.devInfo.electronVer)+"\n  ")]):e._e(),e.devInfo.chromeVer?a("div",{staticClass:"full-width"},[e._v("Chrome "+e._s(e.devInfo.chromeVer)+"\n  ")]):e._e(),e.devInfo.nodeVer?a("div",{staticClass:"full-width"},[e._v("Node "+e._s(e.devInfo.nodeVer)+"\n  ")]):e._e(),a("div",[e._v("Quasar "+e._s(e.$q.version))]),a("div",[e._v("Vue "+e._s(e.vueVersion))]),a("div",[e._v(" "+e._s(e.$q.platform))]),e.devInfo.processArgv?a("div",{staticClass:"full-width"},[e._v("Process Argv "+e._s(e.devInfo.processArgv))]):e._e()])},Q=[],P=a("2b0e");const R=a("ed08").isElectron(),O=R?a("34bb").ipcRenderer:null;var z={name:"DevInfoTabPanel",inject:["io"],data(){return{devInfo:{torrentStore:"",settingStore:""}}},methods:{open(e){this.io.emit("show_torrent_file",e)},resetTorrent(){R&&O.send("reset-torrent")},resetSetting(){this.$store.dispatch("resetSettings").then((e=>{this.$i18n.locale=e.language,this.$q.notify("Reset success")}))}},mounted(){R&&(O.on("dev-info",((e,t)=>{t.torrentStore&&(this.devInfo.torrentStore=t.torrentStore),t.settingStore&&(this.devInfo.settingStore=t.settingStore),t.electronVer&&(this.devInfo.electronVer=t.electronVer),t.chromeVer&&(this.devInfo.chromeVer=t.chromeVer),t.nodeVer&&(this.devInfo.nodeVer=t.nodeVer),t.argv&&(this.devInfo.processArgv=t.argv)})),O.send("dev-info")),this.io.off("notify",this.notify),this.io.on("notify",this.notify)},computed:{vueVersion(){return P["a"].version}}},D=z,L=(a("3042"),Object(u["a"])(D,E,Q,!1,null,"5f269e2f",null)),j=L.exports;const U=a("ed08").isElectron();var W={name:"Development",components:{AccountTabPanel:g,AmplifyTabPanel:A,DevInfoTabPanel:j},data(){return{currentTab:"accountInfo"}},methods:{delete_config(){this.$q.electron.ipcRenderer.invoke("deleteConfig").then((e=>{this.$q.notify(e)}))},getLocale(){this.$q.notify(this.$q.lang.getLocale())},getUsersLanguage(){r["localConfigs"].getSettingsItem("language").then((e=>{this.$q.notify({message:e,position:"bottom-right",type:"positive",timeout:3e3})})).catch((()=>{this.$q.notify({message:"未获取到数据项",position:"bottom-right",type:"negative",timeout:3e3})}))},openWebtorrentDevTools(){if(U)return a("34bb").ipcRenderer.send("open-webtorrent-devtools")}}},J=W,G=(a("4de7"),a("9989")),N=a("a370"),B=a("429b"),F=a("7460"),H=a("adad"),K=a("823b"),M=Object(u["a"])(J,n,o,!1,null,"2603bd74",null);t["default"]=M.exports;m()(M,"components",{QPage:G["a"],QCard:f["a"],QCardSection:N["a"],QTabs:B["a"],QTab:F["a"],QSeparator:b["a"],QTabPanels:H["a"],QTabPanel:K["a"]})}}]);