(this.webpackJsonpnihonbashi=this.webpackJsonpnihonbashi||[]).push([[0],{29:function(a,n,r){},30:function(a,n,r){},31:function(a,n,r){},33:function(a,n,r){},34:function(a,n,r){},36:function(a,n,r){"use strict";r.r(n);var i=r(0),t=r(24),e=r.n(t),o=(r(29),r(7)),h=r(8),j=r(9),c=r(10),m=(r(30),r(2)),s=r(23),u=(r(31),r(4)),k=function(a){Object(j.a)(r,a);var n=Object(c.a)(r);function r(){return Object(o.a)(this,r),n.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){return Object(u.jsx)("button",Object(s.a)(Object(s.a)({className:"Button"},this.props),{},{children:this.props.children}))}}]),r}(i.Component),g=(r(33),function(a){Object(j.a)(r,a);var n=Object(c.a)(r);function r(){return Object(o.a)(this,r),n.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){return Object(u.jsx)("h1",{className:"Preview",children:this.props.children})}}]),r}(i.Component)),l=(r(34),function(a){Object(j.a)(r,a);var n=Object(c.a)(r);function r(){return Object(o.a)(this,r),n.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){var a=this.props,n=a.answers,r=a.correct,i=a.handleAnswer,t=a.locked,e=a.shake?" wrong":"";return Object(u.jsxs)("div",{className:"QuestionDialog_area",children:[Object(u.jsx)("div",{className:"QuestionDialog_preview".concat(e),children:Object(u.jsx)(g,{children:r})}),Object(u.jsxs)("div",{className:"QuestionDialog_answers".concat(e),children:[Object(u.jsx)(k,{disabled:t,onClick:function(){return i(0)},children:n[0]}),Object(u.jsx)(k,{disabled:t,onClick:function(){return i(1)},children:n[1]}),Object(u.jsx)(k,{disabled:t,onClick:function(){return i(2)},children:n[2]}),Object(u.jsx)(k,{disabled:t,onClick:function(){return i(3)},children:n[3]})]})]})}}]),r}(i.Component)),f=function(a,n){return Math.floor(Math.random()*(n-a+1))+a},d=[{hiragana:"\u3042",romanji:"a"},{hiragana:"\u3044",romanji:"i"},{hiragana:"\u3046",romanji:"u"},{hiragana:"\u3048",romanji:"e"},{hiragana:"\u304a",romanji:"o"},{hiragana:"\u3093",romanji:"n"},{hiragana:"\u304b",romanji:"ka"},{hiragana:"\u304d",romanji:"ki"},{hiragana:"\u304f",romanji:"ku"},{hiragana:"\u3051",romanji:"ke"},{hiragana:"\u3053",romanji:"ko"},{hiragana:"\u3055",romanji:"sa"},{hiragana:"\u3057",romanji:"shi"},{hiragana:"\u3059",romanji:"su"},{hiragana:"\u305b",romanji:"se"},{hiragana:"\u305d",romanji:"so"},{hiragana:"\u305f",romanji:"ta"},{hiragana:"\u3061",romanji:"chi"},{hiragana:"\u3064",romanji:"tsu"},{hiragana:"\u3066",romanji:"te"},{hiragana:"\u3068",romanji:"to"},{hiragana:"\u306a",romanji:"na"},{hiragana:"\u306b",romanji:"ni"},{hiragana:"\u306c",romanji:"nu"},{hiragana:"\u306d",romanji:"ne"},{hiragana:"\u306e",romanji:"no"},{hiragana:"\u306f",romanji:"ha"},{hiragana:"\u3072",romanji:"hi"},{hiragana:"\u3075",romanji:"fu"},{hiragana:"\u3078",romanji:"he"},{hiragana:"\u307b",romanji:"ho"},{hiragana:"\u307e",romanji:"ma"},{hiragana:"\u307f",romanji:"mi"},{hiragana:"\u3080",romanji:"mu"},{hiragana:"\u3081",romanji:"me"},{hiragana:"\u3082",romanji:"mo"},{hiragana:"\u3084",romanji:"ya"},{hiragana:"\u3086",romanji:"yu"},{hiragana:"\u3088",romanji:"yo"},{hiragana:"\u3089",romanji:"ra"},{hiragana:"\u308a",romanji:"ri"},{hiragana:"\u308b",romanji:"ru"},{hiragana:"\u308c",romanji:"re"},{hiragana:"\u308d",romanji:"ro"},{hiragana:"\u308f",romanji:"wa"},{hiragana:"\u3092",romanji:"wo"}],p=function(){return d[f(0,d.length-1)]},b=function(a){return[a,p(),p(),p()].sort((function(){return.5-Math.random()}))},v=function(a){Object(j.a)(r,a);var n=Object(c.a)(r);function r(){var a;Object(o.a)(this,r);for(var i=arguments.length,t=new Array(i),e=0;e<i;e++)t[e]=arguments[e];return(a=n.call.apply(n,[this].concat(t))).state={locked:!0,playEffect:!1,known:[],correct:{hiragana:"...",romanji:"..."},answers:[{hiragana:"...",romanji:"..."},{hiragana:"...",romanji:"..."},{hiragana:"...",romanji:"..."},{hiragana:"...",romanji:"..."}]},a}return Object(h.a)(r,[{key:"componentDidMount",value:function(){this.regenerate()}},{key:"generateNotKnownCharacter",value:function(){var a=this.state.known,n=d.filter((function(n){return!a.some((function(a){return a.hiragana===n.hiragana}))}));return 0===n.length&&(alert("OVER!"),n.push({hiragana:"\ud83d\udc9e\ufe0f",romanji:"\ud83d\udc9e"})),n[f(0,n.length-1)]}},{key:"regenerate",value:function(){var a=this.generateNotKnownCharacter();this.setState({locked:!1,correct:a,answers:b(a)})}},{key:"handleAnswer",value:function(a){var n=this,r=this.state,i=r.correct,t=r.answers[a];this.setState({locked:!0}),setTimeout((function(){i.romanji===t.romanji?n.handleCorrect():n.handleFail()}),100)}},{key:"handleFail",value:function(){var a=this;this.setState({playEffect:!0}),setTimeout((function(){a.setState({locked:!1,playEffect:!1})}),1500)}},{key:"handleCorrect",value:function(){var a=this;this.setState({playEffect:!1});var n=this.state,r=n.correct,i=n.known;i.push(r),this.setState({known:i}),setTimeout((function(){a.regenerate(),a.setState({locked:!1,playEffect:!1})}),500)}},{key:"render",value:function(){var a=this,n=this.state,r=n.correct,i=n.answers,t=n.locked,e=n.playEffect,o=[i[0].romanji,i[1].romanji,i[2].romanji,i[3].romanji];return Object(u.jsx)(l,{shake:e,handleAnswer:function(n){return a.handleAnswer(n)},correct:r.hiragana,answers:o,locked:t})}}]),r}(i.Component),y=[{katakana:"\u30a2",romanji:"a"},{katakana:"\u30a4",romanji:"i"},{katakana:"\u30a6",romanji:"u"},{katakana:"\u30a8",romanji:"e"},{katakana:"\u30aa",romanji:"o"},{katakana:"\u30ab",romanji:"ka"},{katakana:"\u30ad",romanji:"ki"},{katakana:"\u30af",romanji:"ku"},{katakana:"\u30b1",romanji:"ke"},{katakana:"\u30b3",romanji:"ko"},{katakana:"\u30b5",romanji:"sa"},{katakana:"\u30b7",romanji:"shi"},{katakana:"\u30b9",romanji:"su"},{katakana:"\u30bb",romanji:"se"},{katakana:"\u30bd",romanji:"so"},{katakana:"\u30bf",romanji:"ta"},{katakana:"\u30c1",romanji:"chi"},{katakana:"\u30c4",romanji:"tsu"},{katakana:"\u30c6",romanji:"te"},{katakana:"\u30c8",romanji:"to"},{katakana:"\u30ca",romanji:"na"},{katakana:"\u30cb",romanji:"ni"},{katakana:"\u30cc",romanji:"nu"},{katakana:"\u30cd",romanji:"ne"},{katakana:"\u30ce",romanji:"no"},{katakana:"\u30cf",romanji:"ha"},{katakana:"\u30d2",romanji:"hi"},{katakana:"\u30d5",romanji:"fu"},{katakana:"\u30d8",romanji:"he"},{katakana:"\u30db",romanji:"ho"},{katakana:"\u30de",romanji:"ma"},{katakana:"\u30df",romanji:"mi"},{katakana:"\u30e0",romanji:"mu"},{katakana:"\u30e1",romanji:"me"},{katakana:"\u30e2",romanji:"mo"},{katakana:"\u30e4",romanji:"ya"},{katakana:"\u30e6",romanji:"yu"},{katakana:"\u30e8",romanji:"yo"},{katakana:"\u30e9",romanji:"ra"},{katakana:"\u30ea",romanji:"ri"},{katakana:"\u30eb",romanji:"ru"},{katakana:"\u30ec",romanji:"re"},{katakana:"\u30ed",romanji:"ro"},{katakana:"\u30ef",romanji:"wa"},{katakana:"\u30f2",romanji:"wo"},{katakana:"\u30f3",romanji:"n"}],w=function(){return y[f(0,y.length-1)]},O=function(a){return[a,w(),w(),w()].sort((function(){return.5-Math.random()}))},C=function(a){Object(j.a)(r,a);var n=Object(c.a)(r);function r(){var a;Object(o.a)(this,r);for(var i=arguments.length,t=new Array(i),e=0;e<i;e++)t[e]=arguments[e];return(a=n.call.apply(n,[this].concat(t))).state={locked:!0,playEffect:!1,known:[],correct:{katakana:"...",romanji:"..."},answers:[{katakana:"...",romanji:"..."},{katakana:"...",romanji:"..."},{katakana:"...",romanji:"..."},{katakana:"...",romanji:"..."}]},a}return Object(h.a)(r,[{key:"componentDidMount",value:function(){this.regenerate()}},{key:"generateNotKnownCharacter",value:function(){var a=this.state.known,n=y.filter((function(n){return!a.some((function(a){return a.katakana===n.katakana}))}));return 0===n.length&&(alert("OVER!"),n.push({katakana:"\ud83d\udc9e\ufe0f",romanji:"\ud83d\udc9e"})),n[f(0,n.length-1)]}},{key:"regenerate",value:function(){var a=this.generateNotKnownCharacter();this.setState({locked:!1,correct:a,answers:O(a)})}},{key:"handleAnswer",value:function(a){var n=this,r=this.state,i=r.correct,t=r.answers[a];this.setState({locked:!0}),setTimeout((function(){i.romanji===t.romanji?n.handleCorrect():n.handleFail()}),100)}},{key:"handleFail",value:function(){var a=this;this.setState({playEffect:!0}),setTimeout((function(){a.setState({locked:!1,playEffect:!1})}),1500)}},{key:"handleCorrect",value:function(){var a=this;this.setState({playEffect:!1});var n=this.state,r=n.correct,i=n.known;i.push(r),this.setState({known:i}),setTimeout((function(){a.regenerate(),a.setState({locked:!1,playEffect:!1})}),500)}},{key:"render",value:function(){var a=this,n=this.state,r=n.correct,i=n.answers,t=n.locked,e=n.playEffect,o=[i[0].romanji,i[1].romanji,i[2].romanji,i[3].romanji];return Object(u.jsx)(l,{shake:e,handleAnswer:function(n){return a.handleAnswer(n)},correct:r.katakana,answers:o,locked:t})}}]),r}(i.Component),x=[{hiragana:"\u3042",romanji:"a"},{hiragana:"\u3044",romanji:"i"},{hiragana:"\u3046",romanji:"u"},{hiragana:"\u3048",romanji:"e"},{hiragana:"\u304a",romanji:"o"},{hiragana:"\u3093",romanji:"n"},{hiragana:"\u304b",romanji:"ka"},{hiragana:"\u304d",romanji:"ki"},{hiragana:"\u304f",romanji:"ku"},{hiragana:"\u3051",romanji:"ke"},{hiragana:"\u3053",romanji:"ko"},{hiragana:"\u3055",romanji:"sa"},{hiragana:"\u3057",romanji:"shi"},{hiragana:"\u3059",romanji:"su"},{hiragana:"\u305b",romanji:"se"},{hiragana:"\u305d",romanji:"so"},{hiragana:"\u305f",romanji:"ta"},{hiragana:"\u3061",romanji:"chi"},{hiragana:"\u3064",romanji:"tsu"},{hiragana:"\u3066",romanji:"te"},{hiragana:"\u3068",romanji:"to"},{hiragana:"\u306a",romanji:"na"},{hiragana:"\u306b",romanji:"ni"},{hiragana:"\u306c",romanji:"nu"},{hiragana:"\u306d",romanji:"ne"},{hiragana:"\u306e",romanji:"no"},{hiragana:"\u306f",romanji:"ha"},{hiragana:"\u3072",romanji:"hi"},{hiragana:"\u3075",romanji:"fu"},{hiragana:"\u3078",romanji:"he"},{hiragana:"\u307b",romanji:"ho"},{hiragana:"\u307e",romanji:"ma"},{hiragana:"\u307f",romanji:"mi"},{hiragana:"\u3080",romanji:"mu"},{hiragana:"\u3081",romanji:"me"},{hiragana:"\u3082",romanji:"mo"},{hiragana:"\u3084",romanji:"ya"},{hiragana:"\u3086",romanji:"yu"},{hiragana:"\u3088",romanji:"yo"},{hiragana:"\u3089",romanji:"ra"},{hiragana:"\u308a",romanji:"ri"},{hiragana:"\u308b",romanji:"ru"},{hiragana:"\u308c",romanji:"re"},{hiragana:"\u308d",romanji:"ro"},{hiragana:"\u308f",romanji:"wa"},{hiragana:"\u3092",romanji:"wo"},{hiragana:"\u304c",romanji:"ga"},{hiragana:"\u304e",romanji:"gi"},{hiragana:"\u3050",romanji:"gu"},{hiragana:"\u3052",romanji:"ge"},{hiragana:"\u3054",romanji:"go"},{hiragana:"\u3056",romanji:"za"},{hiragana:"\u3058",romanji:"ji"},{hiragana:"\u305a",romanji:"zu"},{hiragana:"\u305c",romanji:"ze"},{hiragana:"\u305e",romanji:"zo"},{hiragana:"\u3060",romanji:"da"},{hiragana:"\u3062",romanji:"ji"},{hiragana:"\u3065",romanji:"zu"},{hiragana:"\u3067",romanji:"de"},{hiragana:"\u3069",romanji:"do"},{hiragana:"\u3070",romanji:"ba"},{hiragana:"\u3073",romanji:"bi"},{hiragana:"\u3076",romanji:"bu"},{hiragana:"\u3079",romanji:"be"},{hiragana:"\u307c",romanji:"bo"},{hiragana:"\u3071",romanji:"pa"},{hiragana:"\u3074",romanji:"pi"},{hiragana:"\u3077",romanji:"pu"},{hiragana:"\u307a",romanji:"pe"},{hiragana:"\u307d",romanji:"po"}],E=function(){return x[f(0,x.length-1)]},S=function(a){return[a,E(),E(),E()].sort((function(){return.5-Math.random()}))},A=function(a){Object(j.a)(r,a);var n=Object(c.a)(r);function r(){var a;Object(o.a)(this,r);for(var i=arguments.length,t=new Array(i),e=0;e<i;e++)t[e]=arguments[e];return(a=n.call.apply(n,[this].concat(t))).state={locked:!0,playEffect:!1,known:[],correct:{hiragana:"...",romanji:"..."},answers:[{hiragana:"...",romanji:"..."},{hiragana:"...",romanji:"..."},{hiragana:"...",romanji:"..."},{hiragana:"...",romanji:"..."}]},a}return Object(h.a)(r,[{key:"componentDidMount",value:function(){this.regenerate()}},{key:"generateNotKnownCharacter",value:function(){var a=this.state.known,n=x.filter((function(n){return!a.some((function(a){return a.hiragana===n.hiragana}))}));return 0===n.length&&(alert("OVER!"),n.push({hiragana:"\ud83d\udc9e\ufe0f",romanji:"\ud83d\udc9e"})),n[f(0,n.length-1)]}},{key:"regenerate",value:function(){var a=this.generateNotKnownCharacter();this.setState({locked:!1,correct:a,answers:S(a)})}},{key:"handleAnswer",value:function(a){var n=this,r=this.state,i=r.correct,t=r.answers[a];this.setState({locked:!0}),setTimeout((function(){i.romanji===t.romanji?n.handleCorrect():n.handleFail()}),100)}},{key:"handleFail",value:function(){var a=this;this.setState({playEffect:!0}),setTimeout((function(){a.setState({locked:!1,playEffect:!1})}),1500)}},{key:"handleCorrect",value:function(){var a=this;this.setState({playEffect:!1});var n=this.state,r=n.correct,i=n.known;i.push(r),this.setState({known:i}),setTimeout((function(){a.regenerate(),a.setState({locked:!1,playEffect:!1})}),500)}},{key:"render",value:function(){var a=this,n=this.state,r=n.correct,i=n.answers,t=n.locked,e=n.playEffect,o=[i[0].romanji,i[1].romanji,i[2].romanji,i[3].romanji];return Object(u.jsx)(l,{shake:e,handleAnswer:function(n){return a.handleAnswer(n)},correct:r.hiragana,answers:o,locked:t})}}]),r}(i.Component),N=function(a){Object(j.a)(r,a);var n=Object(c.a)(r);function r(){return Object(o.a)(this,r),n.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("header",{className:"App-header",children:Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.a,{path:"/",element:Object(u.jsx)(A,{})}),Object(u.jsx)(m.a,{path:"hiragana",element:Object(u.jsx)(v,{})}),Object(u.jsx)(m.a,{path:"katakana",element:Object(u.jsx)(C,{})})]})})})}}]),r}(i.Component),T=function(a){a&&a instanceof Function&&r.e(3).then(r.bind(null,37)).then((function(n){var r=n.getCLS,i=n.getFID,t=n.getFCP,e=n.getLCP,o=n.getTTFB;r(a),i(a),t(a),e(a),o(a)}))},F=r(22);e.a.render(Object(u.jsx)(F.a,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),T()}},[[36,1,2]]]);
//# sourceMappingURL=main.ea419cde.chunk.js.map