(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"4e99":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"scrollEl",staticClass:"local-favorite q-pb-lg",class:{web:!t.isElectron}},[o("input",{ref:"fileSelector",staticStyle:{display:"none"},attrs:{type:"file",name:"input-file",accept:".json"},on:{change:t.onFileChange}}),o("q-virtual-scroll",{ref:"vscroll",staticClass:"favorite-scroll",attrs:{separator:"",items:t.filteredFavorites,"virtual-scroll-slice-size":10,"virtual-scroll-item-size":385,"virtual-scroll-sticky-size-end":16},on:{"virtual-scroll":t.onScroll},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.item;return[o("PostCard",{key:a.id,attrs:{post:a,followable:!t.lib.followingChannels.some((function(t){return t.id===a.channel.id}))},on:{follow:t.onFollow,preview:t.preview,"to-channel":t.toChannelPage}})]}},t.filteredFavorites.length?null:{key:"after",fn:function(){return[o("div",{staticClass:"flex justify-center items-center full-height"},[o("q-icon",{attrs:{name:"error_outline",size:"1.2rem"}}),o("div",{staticClass:"q-ml-sm"},[t._v(t._s(t.$t("credit_no_data")))])],1)]},proxy:!0}],null,!0)}),o("BackToTop",{attrs:{show:t.scrollIndex>0},on:{click:t.scrollTop}}),o("div",{staticClass:"fixed-bottom-right save-or-load",class:{higher:t.scrollIndex>0}},[o("q-btn",{staticClass:"backup-btn q-ma-xs",class:{hide:t.hideBtn},attrs:{fab:"","no-wrap":"",size:"18px",color:"primary",icon:"source"},on:{click:t.saveOrLoad}},[o("div",{staticClass:"fab-inner-text"},[t._v(t._s(t.$t("backup")))])])],1),o("q-dialog",{model:{value:t.showPreview,callback:function(e){t.showPreview=e},expression:"showPreview"}},[o("q-card",{staticClass:"image-preview-card"},[o("q-card-section",{staticClass:"q-pa-none"},[o("img",{staticClass:"preview-image",attrs:{src:t.previewImage}})]),o("q-card-actions",{staticClass:"q-pa-none",staticStyle:{position:"absolute",bottom:"0",right:"0"},attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",padding:"none",size:"20px",icon:"close",color:"grey"}})],1)],1)],1),o("q-dialog",{model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[o("q-card",[o("q-card-section",{staticClass:"row"},[o("div",{staticClass:"text-h6 col-12"},[t._v(t._s(t.$t("import_or_export_favorites")))]),o("div",{staticClass:"col-12"},[t._v("\n          Total: "+t._s(t.favorites.length)+"\n        ")]),o("div",{staticClass:"btns col-12 text-right q-mt-md"},[o("q-btn",{attrs:{color:"primary",flat:"",icon:"save",label:t.$t("export_local_favorites")},on:{click:t.exportData}}),o("q-btn",{staticClass:"q-ml-md",attrs:{color:"primary",flat:"",icon:"add",label:t.$t("import_favorites_file")},on:{click:t.importData}})],1)])],1)],1)],1)},i=[],s=(o("e01a"),o("e9c4"),o("71ac")),l=o("2de9"),r=o("0ebe"),n=o("4aad"),c=o("bae3"),d=o("ed08"),h={name:"LibraryFavorite",components:{PostCard:l["a"],BackToTop:r["a"]},data(){return{isElectron:Object(d["isElectron"])(),hideBtn:!1,favorites:s["a"].list(),scrollIndex:0,showPreview:!1,previewImage:"",showDialog:!1,lib:n["a"]}},computed:{filteredFavorites(){const t=n["a"].search.text.toLowerCase(),e=n["a"].search.option.value,o=t=>{var o;switch(e){case"channel":return null===(o=t.channel)||void 0===o?void 0:o.title;case"postID":return t.id;case"postDesc":return t.description;default:return t.title}},a=e=>{var a;return null===(a=o(e))||void 0===a?void 0:a.toLowerCase().includes(t)};return this.favorites.filter(a)}},methods:{onScroll(t){this.scrollIndex=t.index},scrollTop(){this.$refs.vscroll.scrollTo(0,"start")},preview(t){this.previewImage=t,this.showPreview=!0},remove(t){return s["a"].remove(t)},saveOrLoad(){this.showDialog=!0},exportData(){Object(c["g"])(JSON.stringify({favorites:this.favorites}),"favorites.json"),this.showDialog=!1},importData(){console.log(this.$refs.fileSelector),this.$refs.fileSelector.value="",this.$refs.fileSelector.click()},onFileChange(t){var e,o;null!==t&&void 0!==t&&null!==(e=t.target)&&void 0!==e&&null!==(o=e.files)&&void 0!==o&&o[0]&&Object(c["f"])(t.target.files[0]).then((t=>{if(!t)return this.$q.notify("Cannot read data from this file");const e=JSON.parse(t);if(!e.favorites||!Array.isArray(e.favorites))return this.$q.notify(this.$t("not_a_favorite_file"));s["a"].set(e.favorites),this.showDialog=!1}))},onFollow(t){if(n["a"].followingChannels.some((e=>e.id===t||e.soul===t)))return console.log("unfollow"),n["a"].unfollowChannel(t).then(console.log);console.log("follow"),n["a"].followChannel(t).then(console.log)},toChannelPage(t){console.log("to",t);const e=["id","title"].map((e=>{const o=t[e];return encodeURIComponent(e)+"="+encodeURIComponent(o)})).join("&"),o=`/library/channel?${e}`;this.$root.$emit("navigate-to",o),this.$router.push(o)},setSearch(){this.lib.setSearchOption([{label:this.$t("post_title"),value:"postTitle"},{label:this.$t("description"),value:"postDesc"},{label:this.$t("channel_title"),value:"channel"}])}},activated(){this.setSearch(),this.$root.$emit("navigate-to"),this.$root.$emit("navigate-to","/library/favorite"),this.hideBtn=!0,setTimeout((()=>{this.hideBtn=!1}),300)},deactivated(){this.hideBtn=!0}},v=h,f=(o("bca2"),o("2877")),p=o("a12b"),u=o("0016"),m=o("9c40"),w=o("24e8"),g=o("f09f"),b=o("a370"),C=o("4b7e"),_=o("7f67"),$=o("eebe"),q=o.n($),x=Object(f["a"])(v,a,i,!1,null,"25cb843a",null);e["default"]=x.exports;q()(x,"components",{QVirtualScroll:p["a"],QIcon:u["a"],QBtn:m["a"],QDialog:w["a"],QCard:g["a"],QCardSection:b["a"],QCardActions:C["a"]}),q()(x,"directives",{ClosePopup:_["a"]})},6225:function(t,e,o){},bca2:function(t,e,o){"use strict";o("6225")}}]);