!function(a){function e(e){for(var n,i,r=e[0],l=e[1],c=e[2],d=0,m=[];d<r.length;d++)i=r[d],o[i]&&m.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(a[n]=l[n]);for(u&&u(e);m.length;)m.shift()();return s.push.apply(s,c||[]),t()}function t(){for(var a,e=0;e<s.length;e++){for(var t=s[e],n=!0,r=1;r<t.length;r++){var l=t[r];0!==o[l]&&(n=!1)}n&&(s.splice(e--,1),a=i(i.s=t[0]))}return a}var n={},o={0:0},s=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=a,i.c=n,i.d=function(a,e,t){i.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},i.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,e){if(1&e&&(a=i(a)),8&e)return a;if(4&e&&"object"==typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)i.d(t,n,function(e){return a[e]}.bind(null,n));return t},i.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return i.d(e,"a",e),e},i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},i.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([373,1]),t()}({156:function(a,e,t){},363:function(a,e,t){"use strict";var n=t(73);t.n(n).a},364:function(a,e,t){"use strict";var n=t(74);t.n(n).a},365:function(a,e,t){"use strict";var n=t(75);t.n(n).a},366:function(a,e,t){"use strict";var n=t(76);t.n(n).a},368:function(a,e,t){"use strict";var n=t(77);t.n(n).a},369:function(a,e,t){"use strict";var n=t(78);t.n(n).a},372:function(a,e,t){"use strict";var n=t(80);t.n(n).a},373:function(a,e,t){"use strict";t.r(e);t(156),t(157);var n=t(11),o=t(155);n.a.use(o.a);var s=t(36),i=t(110),r=(t(361),t(362),t(149));s.c.add(i.a,i.b),n.a.component("font-awesome-icon",r.a);var l=t(81),c=t.n(l),u=t(150),d=t.n(u);function m(a){a.title;var e=a.message,t=a.type;a.timeout,a.cb;return t===c.a.types.warn&&(t="warning"),new d.a({layout:"topRight",theme:"bootstrap-v4",timeout:2e3,text:e,type:t}).show()}var p={success:m,error:m,info:m,warn:m};n.a.use(c.a,p);var v=t(151),f=t.n(v),y={name:"NavMenu"},g=(t(363),t(7)),b=Object(g.a)(y,function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("b-nav",[t("b-nav-item",{attrs:{to:"/",exact:""}},[a._v(a._s(a.$t("home.title")))]),a._v(" "),t("b-nav-item",{attrs:{to:"/about",exact:""}},[a._v(a._s(a.$t("about.title")))]),a._v(" "),t("b-nav-item",{attrs:{to:"/audios",exact:""}},[a._v(a._s(a.$t("audios.title")))]),a._v(" "),t("b-nav-item",{attrs:{to:"/contact",exact:""}},[a._v(a._s(a.$t("contact.title")))])],1)],1)},[],!1,null,"2d373454",null);b.options.__file="NavMenu.vue";var _=b.exports,w=t(13);function h(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var P={name:"Header",components:{NavMenu:_},computed:function(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(e){h(a,e,t[e])})}return a}({},Object(w.c)(["getAudioData","getIsMobile"])),data:function(){return{isMenuOpen:!1}},mounted:function(){console.log("getAudioData",this.getAudioData)}},x=(t(364),Object(g.a)(P,function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"header",class:{isDesktop:!a.getIsMobile}},[a.getIsMobile?t("div",{staticClass:"header--content"},[t("div",{staticClass:"title"},[t("a",{staticClass:"nav-link nav-item",on:{click:function(e){a.isMenuOpen=!a.isMenuOpen}}},[a._v("Vozes da Terra")]),a._v(" "),t("NavMenu",{staticClass:"nav-menu",class:{isMenuOpen:a.isMenuOpen}})],1),a._v(" "),t("div",{staticClass:"lang-button"},[t("span",{class:{selected:"en"===a.$i18n.locale},on:{click:function(e){a.$i18n.locale="en"}}},[a._v("en")]),a._v(" "),t("span",{class:{selected:"pt"===a.$i18n.locale},on:{click:function(e){a.$i18n.locale="pt"}}},[a._v("pt")])])]):a._e()])},[],!1,null,null,null));x.options.__file="Header.vue";var O=x.exports,T={name:"Header"},C=(t(365),Object(g.a)(T,function(){var a=this.$createElement,e=this._self._c||a;return e("footer",[e("div",[e("b-container",[e("p",[this._v("Apoio:")])])],1)])},[],!1,null,"33d34400",null));function j(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(e){z(a,e,t[e])})}return a}function z(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}C.options.__file="Footer.vue";var A={components:{Header:O,Footer:C.exports,NavMenu:_},name:"App",data:function(){return{index:0,isMobile:window.innerWidth<=700}},computed:j({},Object(w.c)(["getIsMobile"])),mounted:function(){this.setTags()},created:function(){var a=this;window.addEventListener("resize",function(){a.setIsMobile()}),this.setLocalData()},methods:j({},Object(w.b)(["setTags","setIsMobile","setLocalData"]))},k=(t(366),Object(g.a)(A,function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header"),a._v(" "),t("b-container",{attrs:{fluid:""}},[t("b-row",[a.getIsMobile?a._e():t("b-col",{attrs:{md:"2"}},[t("a",{staticClass:"nav-link nav-item"},[a._v("Vozes da Terra")]),a._v(" "),t("NavMenu",{staticClass:"nav-menu",class:{isMenuOpen:!0}})],1),a._v(" "),t("b-col",{attrs:{md:"8"}},[t("router-view")],1),a._v(" "),a.getIsMobile?a._e():t("div",{staticClass:"lang-button"},[t("span",{class:{selected:"en"===a.$i18n.locale},on:{click:function(e){a.$i18n.locale="en"}}},[a._v("en")]),a._v(" "),t("span",{class:{selected:"pt"===a.$i18n.locale},on:{click:function(e){a.$i18n.locale="pt"}}},[a._v("pt")])])],1)],1),a._v(" "),t("Footer")],1)},[],!1,null,null,null));k.options.__file="App.vue";var M=k.exports,S=t(111),E=(t(367),{name:"Home",methods:{}}),$=Object(g.a)(E,function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"row marketing"},[e("h3",[this._v(this._s(this.$t("home.title")))])])},[],!1,null,null,null);$.options.__file="Home.vue";var q=$.exports,D={name:"About",mounted:function(){console.log(this)}},I=Object(g.a)(D,function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("h3",[a._v(a._s(a.$t("about.title")))]),a._v(" "),t("p",[a._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]),a._v(" "),t("p",[a._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]),a._v(" "),t("b-container",[t("b-row",{staticClass:"justify-content-md-center"},[t("b-col",{staticClass:"mb-4",attrs:{md:"8"}},[t("b-card",{attrs:{header:"Title"}},[t("p",[a._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")])])],1)],1)],1)],1)},[],!1,null,null,null);I.options.__file="About.vue";var B=I.exports,L={name:"Contact",data:function(){return{form:{email:"",name:"",food:null,checked:!1,secret:"S3CR3T"},foods:[{text:"Select One",value:null},"Carrots","Beans","Tomatoes","Corn"]}},methods:{onSubmit:function(a){a.preventDefault(),alert(JSON.stringify(this.form))}}},N=Object(g.a)(L,function(){var a=this.$createElement,e=this._self._c||a;return e("div",[e("h1",{staticClass:"mb-4"},[this._v(this._s(this.$t("contact.title")))])])},[],!1,null,null,null);N.options.__file="Contact.vue";var R=N.exports,H=t(152),F=t.n(H),V={name:"AudioBox",data:function(){return{wavesurfer:null,error:!1,status:"",isLoaded:!1}},props:{filename:{type:String,required:!0},tags:{type:Array},type:{type:String},index:{type:Number,required:!0},id:{type:String,required:!0}},computed:{getIsPlaying:function(){return"playing"===this.status}},methods:{playPause:function(){this.wavesurfer.playPause(),this.status=this.wavesurfer.isPlaying()?"playing":"paused"},onTagClick:function(a){this.$emit("onTagClick",a.target.innerText)}},mounted:function(){var a=this;this.$nextTick(function(){a.wavesurfer=F.a.create({container:"#waveform-"+a.id,waveColor:"black",progressColor:"purple"}),a.wavesurfer.on("error",function(){a.error=!0}),a.wavesurfer.on("ready",function(){a.isLoaded=!0}),a.wavesurfer.load("./src/assets/audios/"+a.filename)})}},J=(t(368),Object(g.a)(V,function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("transition",{attrs:{name:"fade",delay:"200"}},[a.error?a._e():t("div",{staticClass:"audio-box"},[t("p",{staticClass:"filename"},[a._v(a._s(a.filename))]),a._v(" "),t("div",{staticClass:"tags"},a._l(a.tags,function(e){return t("a",{key:e,staticClass:"tag-name",on:{click:a.onTagClick}},[a._v(a._s(e))])}),0),a._v(" "),t("div",{staticClass:"waveform-box",class:{loading:!a.isLoaded},attrs:{id:"waveform-"+this.id}}),a._v(" "),t("a",{on:{click:a.playPause}},[a._v(a._s(a.getIsPlaying?"Pause":"Play"))])])])},[],!1,null,"033b1540",null));J.options.__file="AudioBox.vue";var U=J.exports;function K(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(e){W(a,e,t[e])})}return a}function W(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var G={name:"Audios",data:function(){return{busy:!1,audios:[],filteredAudios:[],lastAudioIndex:5,isFiltering:!1,maxItensPerPage:15,currentTag:""}},components:{AudioBox:U},computed:K({},Object(w.c)(["getAudioData"])),methods:K({},Object(w.b)(["fetchAudiosByTags"]),{getCurrentAudios:function(){var a=this.isFiltering?this.filteredAudios:this.getAudioData,e=Math.min(this.lastAudioIndex+5,a.length);return a.slice(0,e)},loadAudios:function(){var a=this;this.busy=!0,setTimeout(function(){a.lastAudioIndex+=1,a.busy=!1},300)},filterByTag:function(a){var e=this;this.currentTag=a,this.lastAudioIndex=0,this.fetchAudiosByTags(a).then(function(a){e.isFiltering=!0,e.filteredAudios=a})}}),mounted:function(){}},Q=(t(369),Object(g.a)(G,function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("h2",[a._v(a._s(a.$t("audios.title")))]),a._v(" "),""!==a.currentTag?t("h3",[a._v(a._s(a.currentTag))]):a._e(),a._v(" "),t("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:a.loadAudios,expression:"loadAudios"}],attrs:{"infinite-scroll-disabled":"busy"}},a._l(a.getCurrentAudios(),function(e,n){return t("AudioBox",{key:e.id,attrs:{filename:e.filename,tags:e.tags,index:n,type:e.type,id:e.id},on:{onTagClick:a.filterByTag}})}),1)])},[],!1,null,"da0f2bf4",null));Q.options.__file="Audios.vue";var X=Q.exports,Y=t(154),Z=t(153);function aa(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(e){ea(a,e,t[e])})}return a}function ea(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var ta={name:"Audios",components:{AudioBox:U,VueTagsInput:t.n(Z).a,VueAudio:Y.a},data:function(){return{tag:"",tags:[],models:[],password:""}},computed:aa({isPasswordCorrect:function(){return"vozesdaterrapankararu"===this.password}},Object(w.c)(["getSomeAudios","getCanEdit"])),methods:aa({},Object(w.b)(["setCanEdit"])),mounted:function(){}},na=(t(372),Object(g.a)(ta,function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[a.isPasswordCorrect?a._l(a.getSomeAudios.slice(0,10),function(e,n){return t("form",{key:e,staticClass:"form_element"},[t("p",[a._v(a._s(n))]),a._v("\n    filename:"),t("br"),a._v(" "),t("input",{attrs:{type:"text",name:"filename"},domProps:{value:e.filename}}),a._v(" "),t("br"),a._v("\n    tags:"),t("br"),a._v(" "),t("vue-tags-input",{attrs:{tags:e.tags},on:{"tags-changed":function(e){return a.tags=e}},model:{value:a.models[n],callback:function(e){a.$set(a.models,n,e)},expression:"models[index]"}}),a._v(" "),t("br"),a._v("\n    audio:"),t("br"),a._v(" "),t("vue-audio",{staticClass:"audio-el",attrs:{file:"./src/assets/audios/"+e.filename}})],1)}):t("form",{staticClass:"password"},[a._v("\n    Enter password:"),t("br"),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.password,expression:"password"}],attrs:{type:"password",name:"password",value:""},domProps:{value:a.password},on:{input:function(e){e.target.composing||(a.password=e.target.value)}}})])],2)},[],!1,null,"0d14b327",null));na.options.__file="Edit.vue";var oa=na.exports;n.a.use(S.a);var sa=[{filename:"entrevistas/barbara-tecnologias.wav",lastPlayed:1533203985.5338051,tags:["Tecnologias","indígena","Direito","Mundo","Pankararu","Rituais","aprendizado","saber"],type:"entrevistas"},{filename:"entrevistas/fernando-tirar-o-barro.wav",lastPlayed:1533203991.1350021,tags:["homem","barro","terra","humor","banho","cheiro","mata","erva","manjericão","cabeça","Ritual","ciência"],type:"entrevistas"},{filename:"entrevistas/barbara-tecnologias2.wav",lastPlayed:1533480474.911365,tags:["Universidade","alunos, indígena","cacique","índio","Praiás","Tore","sagrado","Tupinambá","Terreiro","Tecnologia","Tecnologias","eletrônica"],type:"entrevistas"},{filename:"entrevistas/mercinha_levaram_para_a_Italia_t.wav",lastPlayed:1533481013.630982,tags:["Fruta","farinha","cafe","açucar","entalha","orgulho","bichos","alimentação","plantação","natureza","cerâmica"],type:"entrevistas"},{filename:"entrevistas/fernando-ceramica.wav",lastPlayed:1533203767.411728,tags:["Cerâmica","cultura","antepassados","sustentabilidade","barro","Tacaratu","Bahia","Aldeia","Ritual","Encantado","barro","arte","artezanato","artesã","alimento"],type:"entrevistas"},{filename:"entrevistas/mercinha_melhor_peca_que_t.wav",lastPlayed:1533204194.859616,tags:["Inverno","trabalho","orgulho","anciã","ensinamento","visibilidade","artista","arte","cerâmica"],type:"entrevistas"},{filename:"entrevistas/fernando-disputa-posseiros.wav",lastPlayed:1533204208.414704,tags:["Terra","Pankararu","antropologia","perseguição","massacre","etnia","luta","Rio","sofrido","pesca","língua"],type:"entrevistas"},{filename:"entrevistas/mercinha_mensagem_pote_t.wav",lastPlayed:1533203656.808684,tags:["Povo","familía","São Paulo","mundo","família","amor","artista","autoria","Prazer","união","irmão","irmã","parente","mãe","Brasil"],type:"entrevistas"},{filename:"entrevistas/fernando-parteiras.wav",lastPlayed:1533204221.6589298,tags:["Fe","cura","agradecimento","menino do Rancho","Deus","ervas","medicima","tradição","parteira","nascimento","menino","menina","parto","encantado","saúde","saudável"],type:"entrevistas"},{filename:"entrevistas/mercinha_sempreuma_boa_T+.wav",lastPlayed:1533203646.8923478,tags:["Trabalho","cerâmica","barro","fazer","alegria","meio","artista","artezanato","história"],type:"entrevistas"},{filename:"entrevistas/fernando-problema-da-terra.wav",lastPlayed:1533204285.2049038,tags:["Terra","Pankararu","antropologia","perseguição","massacre","etnia","Rio","sofrido","pesca","língua"],type:"entrevistas"},{filename:"entrevistas/rosa-entrevista-deligencia.wav",lastPlayed:1533204302.099094,tags:["Hospital","doença","reza","medicina","cura","curandeira","saúde","conhecimento","burocracia"],type:"entrevistas"},{filename:"entrevistas/fernando-sobre-toantes.wav",lastPlayed:1533204331.2152781,tags:["Toante","letra","antepassados","familía","tradição","encantado","memória"],type:"entrevistas"},{filename:"entrevistas/rosa-entrevista-rezo.wav",lastPlayed:1533480581.792618,tags:["Rezo","medicina","conhecimento","saber","rezadeira","cura","fe","tradição"],type:"entrevistas"},{filename:"falas/aei.wav",lastPlayed:1533204407.626282,tags:["alô"],type:"falas"},{filename:"falas/geo-pote_me_respode.wav",lastPlayed:1533204416.554378,tags:["Oi","som","resposta","responde","pote"],type:"falas"},{filename:"falas/alo-ok-oi.wav",lastPlayed:1533480569.4970722,tags:["alô"],type:"falas"},{filename:"falas/geo-vocabulario.wav",lastPlayed:1533204525.677227,tags:["Mulher","homem","moça","pai","boa noite","Pankararu","aprender","ensina"],type:"falas"},{filename:"falas/alo-voz-feminina.wav",lastPlayed:1536024656.591424,tags:["alô"],type:"falas"},{filename:"falas/geo-vocabulario2.wav",lastPlayed:1533212935.4882638,tags:["Lingua","indígena","voz","escuta","memória","cultura","aprender","ensina"],type:"falas"},{filename:"falas/antonio-reverberacao.wav",lastPlayed:1533213050.211765,tags:["reverberação"],type:"falas"},{filename:"falas/manifestacao-discurso-terra 23.34.13.wav",lastPlayed:1533213055.8024268,tags:["Rezo","rezadeira","cura","fe","tradição"],type:"falas"},{filename:"falas/eaipote.wav",lastPlayed:1533213064.036438,tags:["e ai","pote","fala"],type:"falas"},{filename:"falas/manifestacao-fernando 23.34.13.wav",lastPlayed:1533213074.6619232,tags:["Revindicação","povos indígenas","direitos","antepassados","terra","luta","manisfestação"],type:"falas"},{filename:"falas/fernandao-maraca.wav",lastPlayed:1533213130.9305642,tags:["Maraca","toante","sabedoria","negro","raças","mãe terra"],type:"falas"},{filename:"falas/sabedoria_ancestral.wav",lastPlayed:1533203982.074869,tags:["Sabedoria","ancestral"],type:"falas"},{filename:"sons/agua_da_bica.wav",lastPlayed:1533213155.4759839,tags:["água","natureza"],type:"sons"},{filename:"sons/cigarras.wav",lastPlayed:1533213349.114897,tags:["natureza","noite","silêncio"],type:"sons"},{filename:"sons/rabo_de_tatu_editado.wav",lastPlayed:1533213393.078502,tags:["Rabo","tatu","toca","sinal","som","bicho"],type:"sons"},{filename:"sons/agua_da_bica2.wav",lastPlayed:1533213414.6660779,tags:["água","natureza"],type:"sons"},{filename:"sons/flauta.wav",lastPlayed:1533213558.8898811,tags:["Flauta","música","sopro","toca","som","vento","eco","pássaro"],type:"sons"},{filename:"sons/sapos0.wav",lastPlayed:1533213571.043627,tags:["sapo","som","bicho","natureza","mata"],type:"sons"},{filename:"sons/assobios.wav",lastPlayed:1533214822.646795,tags:["natureza","passarinho"],type:"sons"},{filename:"sons/palmas.wav",lastPlayed:1533217031.658805,tags:["parabens","palmas"],type:"sons"},{filename:"toantes/antonio-tore-maraca.wav",lastPlayed:1533217045.632982,tags:["Toante","Canto","canta","música","som","ritual","tore","cultura","tradição","ancestral","encantados","entoar"],type:"toantes"},{filename:"toantes/geo_significado_dos_cantos.wav",lastPlayed:1533217148.3052511,tags:["canto","antepassados","parente","ancestralidade","tradição"],type:"toantes"},{filename:"toantes/antonio-tore.wav",lastPlayed:1533217224.9079292,tags:["Toante","Canto","canta","maraca","música","som","ritual","tore","cultura","tradição","ancestral","encantados"],type:"toantes"},{filename:"toantes/manifestacao-tore.wav",lastPlayed:1533219075.713084,tags:["Tore","manifestação","canto","luta"],type:"toantes"},{filename:"toantes/barbara-toante1.wav",lastPlayed:1533222075.922595,tags:["Toante","Entoar","canto","meditação","sabedoria","ritual","profundo","conhecimento","interior","tempo","vai","vem","caboclo","ondas","reverberação","natureza","sublime","ancestral","voz","eco"],type:"toantes"},{filename:"toantes/menino_canto.wav",lastPlayed:1533479475.308178,tags:["Toante","Criança, canto","alegria","brincadeira"],type:"toantes"},{filename:"toantes/barbara-toante3.wav",lastPlayed:1533479496.254912,tags:["Toante","Canto","canta","maraca","música","som","ritual","tore","cultura","tradição","ancestral","encantados","mulher"],type:"toantes"},{filename:"toantes/rosa-pe_do_cruzeiro.wav",lastPlayed:1533479607.668146,tags:["Tore","canto","canta","conhecimento","ritual","voz","cultura","sabedoria","força","cruzeiro"],type:"toantes"},{filename:"toantes/barbara-toate2.wav",lastPlayed:1533479779.5689359,tags:["Toante","Entoar","canto","meditação","sabedoria","ritual","profundo","conhecimento","interior","tempo","vai","vem","caboclo","ondas","reverberação","natureza","sublime","ancestral","voz","eco"],type:"toantes"},{filename:"toantes/rosa-tore_0.wav",lastPlayed:1533479887.9732878,tags:["Tore","canto","canta","conhecimento","ritual","voz","cultura","sabedoria","força"],type:"toantes"},{filename:"toantes/criancas_duo(tava na mata).wav",lastPlayed:1533480079.1404421,tags:["Toante","Criança, canto","alegria","brincadeira"],type:"toantes"},{filename:"toantes/rosa-tore_1.wav",lastPlayed:1533480128.529977,tags:["Tore","canto","canta","conhecimento","ritual","voz","cultura","sabedoria","força"],type:"toantes"},{filename:"toantes/criancas_hey_a.wav",lastPlayed:1533480160.949973,tags:["Toante","Criança, canto","alegria","brincadeira"],type:"toantes"},{filename:"toantes/rosa-tore_2.wav",lastPlayed:1533480169.9375942,tags:["Tore","canto","canta","conhecimento","ritual","voz","cultura","sabedoria","força"],type:"toantes"},{filename:"toantes/fernandao.wav",lastPlayed:1533480212.248518,tags:["Toante","Chamado","entoar","sabedoria","ritual","profundo","conhecimento","ancestral","tradição","sabedoria","ritual"],type:"toantes"},{filename:"toantes/rosa-tore_3.wav",lastPlayed:1533480259.502082,tags:["Tore","canto","canta","conhecimento","ritual","voz","cultura","sabedoria","força"],type:"toantes"},{filename:"toantes/geo-escola-canto.wav",lastPlayed:1533480285.165421,tags:["Toante","Canto","maraca","cantar","voz","chamado","celebração","convoca","tradição","cultura","vida","eco"],type:"toantes"},{filename:"toantes/rosario-canto-juazeiro.wav",lastPlayed:1533203908.403121,tags:["Canto","canta","voz","mulher","feminino","suave","água","andar"],type:"toantes"},{filename:"toantes/geo-escola-toante.wav",lastPlayed:1533203725.7617228,tags:["Toante","Canto","maraca","cantar","voz","chamado","celebração","convoca","tradição","cultura","vida","eco"],type:"toantes"},{filename:"toantes/rosario-canto-mulher-pankararu.wav",lastPlayed:1536024980.0787241,tags:["Canto","canta","voz","mulher","feminino","suave","água","andar","guerreira"],type:"toantes"},{filename:"toantes/geo-escola-toante1.wav",lastPlayed:1533480355.546178,tags:["Toante","canto","canto","aldeia","ritual","toante","maracá"],type:"toantes"},{filename:"toantes/rosario-canto-sereia.wav",lastPlayed:1533480378.7745888,tags:["Canto","canta","voz","mulher","feminino","suave","água","andar","guerreira"],type:"toantes"},{filename:"toantes/geo-passarinho_qnd_canta.wav",lastPlayed:1533480408.944868,tags:["Toante","Canto","maraca","cantar","voz","chamado","celebração","convoca","tradição","cultura","vida","eco","passarinho"],type:"toantes"},{filename:"toantes/toante PANK _3.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"toantes/geo-tore_0.wav",lastPlayed:0,tags:["Toante","Canto","maraca","cantar","voz","chamado","celebração","convoca","tradição","cultura","vida","eco"],type:"toantes"},{filename:"toantes/toante PANK_1.wav",lastPlayed:0,tags:["Toante","canto","canto","aldeia","ritual","toante","maracá"],type:"toantes"},{filename:"toantes/geo-tore_1.wav",lastPlayed:0,tags:["Toante","canto","canto","aldeia","ritual","toante","maracá"],type:"toantes"},{filename:"toantes/toante_PANK _2.wav",lastPlayed:1533480770.2478259,tags:["Toante","canto","canto","aldeia","ritual","toante","maracá"],type:"toantes"},{filename:"toantes/geo-tore_2.wav",lastPlayed:0,tags:["Toante","Canto","maraca","cantar","voz","chamado","celebração","convoca","tradição","cultura","vida","eco"],type:"toantes"},{filename:"toantes/tres_rodas-2 .wav",lastPlayed:1533480899.873481,tags:["Toante","canto","canto","aldeia","ritual","toante","maracá"],type:"toantes"},{filename:"toantes/geo-tore_3.wav",lastPlayed:0,tags:["Toante","Canto","maraca","cantar","voz","chamado","celebração","convoca","tradição","cultura","vida","eco"],type:"toantes"},{filename:"toantes/tres_rodas.wav",lastPlayed:0,tags:["Toante","canto","canto","aldeia","ritual","toante","maracá"],type:"toantes"},{filename:"declamacoes/antonio-poeta-filho-de-cana-brava.wav",lastPlayed:0,tags:["cana brava","velho","chico","umbu","tradição","poesia","sertão"],type:"declamacoes"},{filename:"declamacoes/cicero-todos_os_dias.wav",lastPlayed:0,tags:["Todos","dia","praia","mar","brisa","paz","felicidade","vento","pensamento","estrela","esperança","encontro","amor","paixão","arte"],type:"declamacoes"},{filename:"declamacoes/cicero-sabedoria_anscestral.wav",lastPlayed:0,tags:["Voz","beleza","sabedoria","segredo","ancestral","onça","lago","contar","cocar","danças","paje","arte"],type:"declamacoes"},{filename:"declamacoes/geo-poema-cara-do-indio.wav",lastPlayed:0,tags:["cana brava","velho","chico","umbu","tradição","poesia","sertão"],type:"declamacoes"},{filename:"expo/caboclo-da-mata.wav",lastPlayed:1533480448.0843809,tags:[],type:"toantes"},{filename:"expo/carapoto-plak-o-cacique.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/carapoto-plak-o.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/clara.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/clara2.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/deus-na-aldeia-balanceou.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/deus-no-ceu-os-indio-na-terra.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/eu-so-xoco.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/eu-venho-do-mato.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/eu-vim-de-longe.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/ewerton.wav",lastPlayed:1533480607.38951,tags:[],type:"toantes"},{filename:"expo/geo-canarinho.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/geo-maracazinho.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/geo_heyo.wav",lastPlayed:1533480512.128336,tags:[],type:"toantes"},{filename:"expo/juninho-funi-o.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/juninho-funio-v2.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/juninho-trabaia.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/mangetxai-cabocla-de-pena.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/marina.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/oleaha.wav",lastPlayed:1533480522.7838562,tags:[],type:"toantes"},{filename:"expo/olhos-de-quixaba.wav",lastPlayed:1533480751.488002,tags:[],type:"toantes"},{filename:"expo/pankararu-coro.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/pataxo_mucamucau.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/pitoinha-acua.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/senhor-aleatorio.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/sovoz.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/tibirica-fogueira-santa.wav",lastPlayed:1533480956.681416,tags:[],type:"toantes"},{filename:"expo/tibirica-viva-jesus.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/tore-coro.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/vento-deu-na-jurema.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/vento-na-jurema.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/xoco-biciririte.wav",lastPlayed:1533481097.229117,tags:[],type:"toantes"},{filename:"expo/xoco-caninde.wav",lastPlayed:1533480820.436506,tags:[],type:"toantes"},{filename:"expo/xoco-coro.wav",lastPlayed:0,tags:[],type:"toantes"},{filename:"expo/xoco-unknown.wav",lastPlayed:0,tags:[],type:"toantes"}],ia=function(){var a=46656*Math.random()|0,e=46656*Math.random()|0;return(a=("000"+a.toString(36)).slice(-3))+(e=("000"+e.toString(36)).slice(-3))};n.a.use(w.a);var ra={data:sa,tags:[],canEdit:!1,isMobile:window.innerWidth<845},la={getAudioData:function(a){return a.data},getSortedTags:function(a){return a.tags},getSomeAudios:function(a){return a.data.slice(0,30)},getCanEdit:function(a){return a.canEdit},getIsMobile:function(a){return a.isMobile}},ca={setTags:function(a){var e=a.state,t=a.commit,n=[],o=e.data;for(var s in o){var i=o[s].tags;for(var r in i){var l=i[r].toLowerCase(),c=!1;for(var u in n)if(n[u][0]===l){n[u][1]++,c=!0;break}c||(n[n.length]=[l,0])}}n.sort(function(a,e){return e[1]-a[1]}),t("set_tags",n)},setCanEdit:function(a){(0,a.commit)("set_can_edit")},setLocalData:function(a){var e=a.state,t=a.commit,n=e.data;for(var o in n)n[o].id=ia();t("set_data",n)},updateJSON:function(a,e){a.state,new Blob([e],{type:""})},fetchAudiosByTags:function(a,e){var t=[],n=a.state.data;for(var o in n){var s=n[o].tags;for(var i in s)s[i].toLowerCase()===e.toLowerCase()&&t.push(n[o])}return t},setIsMobile:function(a){a.state.isMobile=window.innerWidth<845}},ua={set_tags:function(a,e){a.tags=e},set_can_edit:function(a){a.canEdit=!0},set_data:function(a,e){a.data=e}};var da=t(112),ma={home:{title:"Home"},about:{title:"About"},audios:{title:"Audios"},gallery:{title:"Gallery"},contact:{title:"Contact"}},pa={home:{title:"Home"},about:{title:"Sobre"},audios:{title:"Áudios"},gallery:{title:"Galeria"},contact:{title:"Contato"}};function va(){var a=new S.a({linkActiveClass:"open active",mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:B},{path:"/audios",name:"audios",component:X},{path:"/contact",name:"contact",component:R},{path:"/edit",name:"edit",component:oa}]}),e=new w.a.Store({state:ra,getters:la,actions:ca,mutations:ua}),t=new da.a({locale:"pt",messages:{en:ma,pt:pa}});return{app:new n.a({router:a,store:e,i18n:t,render:function(a){return a(M)}}),router:a,store:e}}n.a.use(da.a),t.d(e,"createApp",function(){return va}),n.a.use(f.a),va().app.$mount("#app")},73:function(a,e,t){},74:function(a,e,t){},75:function(a,e,t){},76:function(a,e,t){},77:function(a,e,t){},78:function(a,e,t){},80:function(a,e,t){}});
//# sourceMappingURL=main.888daa905860f6db3427.js.map