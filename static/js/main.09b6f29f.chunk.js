(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{39:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),i=c.n(a),s=c(14),r=c.n(s),d=(c(38),c(39),c(7)),o=c(9),u=c(57),l=c(32),m=c(59),j=function(e){var t=e.show,c=e.onHide,i=e.setUserName,s=Object(a.useState)(""),r=Object(d.a)(s,2),o=r[0],j=r[1],b=function(){o&&(c(),i(o))};return Object(n.jsxs)(u.a,{show:t,onHide:c,size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[Object(n.jsx)(u.a.Header,{closeButton:!0,children:Object(n.jsx)(u.a.Title,{id:"contained-modal-title-vcenter",children:"\u041a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442?"})}),Object(n.jsx)(u.a.Body,{children:Object(n.jsx)(l.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f...",onChange:function(e){j(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&b()},autoFocus:!0})}),Object(n.jsx)(u.a.Footer,{children:Object(n.jsx)(m.a,{onClick:b,variant:"success",children:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"})})]})},b=c(58),O=c.p+"static/media/comments.44398cb6.svg",p=c(54),f=c(55),x=c(56),h=(c(43),function(e){var t=e.name,c=e.text,i=e.columnId,s=e.cardId,r=e.commentId,o=e.username,u=Object(a.useState)(""),j=Object(d.a)(u,2),b=j[0],O=j[1],h=Object(a.useState)(!1),N=Object(d.a)(h,2),v=N[0],g=N[1],C=Object(a.useContext)(k);return Object(n.jsx)(n.Fragment,{children:v?Object(n.jsxs)(p.a,{className:"mb-3",children:[Object(n.jsx)(l.a,{id:"basic-url",placeholder:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-describedby":"basic-addon2",value:b,onChange:function(e){O(e.target.value)}}),Object(n.jsx)(p.a.Append,{children:Object(n.jsx)(m.a,{variant:"outline-success",onClick:function(){b&&(null===C||void 0===C||C.editComment(i,s,r,b),O("")),g(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}):Object(n.jsxs)("li",{className:"comments-item",children:[Object(n.jsxs)("div",{className:"comments-body",children:[Object(n.jsx)("h5",{children:t}),Object(n.jsx)("p",{children:c})]}),Object(n.jsxs)("div",{className:"header__icons",children:[Object(n.jsx)(f.a,{className:"icon-edit",size:17,onClick:function(){o===t?g(!0):alert("\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0447\u0443\u0436\u0438\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")}}),Object(n.jsx)(x.a,{className:"icon-delete",size:17,onClick:function(){return o===t?null===C||void 0===C?void 0:C.deleteComment(i,s,r):alert("\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0447\u0443\u0436\u0438\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")}})]})]})})}),N=(c(44),function(e){var t=e.cardId,c=e.columnId,i=e.comments,s=e.username,r=Object(a.useState)(""),o=Object(d.a)(r,2),j=o[0],b=o[1],O=Object(a.useContext)(k);return Object(n.jsxs)(u.a.Footer,{className:"card-options__footer",children:[Object(n.jsxs)(p.a,{className:"mb-3",children:[Object(n.jsx)(l.a,{placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-label":"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...","aria-describedby":"basic-addon2",onChange:function(e){b(e.target.value)},value:j}),Object(n.jsx)(p.a.Append,{children:Object(n.jsx)(m.a,{variant:"outline-success",onClick:function(){j&&(null===O||void 0===O||O.addNewComment(c,t,j),b(""))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),Object(n.jsx)("ul",{className:"comments-list",children:i.map((function(e){return Object(n.jsx)(h,{name:e.name,text:e.text,cardId:t,columnId:c,commentId:e.id,username:s},e.id)}))})]})}),v=(c(45),function(e){var t=e.cardId,c=e.columnId,i=e.description,s=Object(a.useState)(""),r=Object(d.a)(s,2),o=r[0],j=r[1],b=Object(a.useState)(!1),O=Object(d.a)(b,2),h=O[0],N=O[1],v=Object(a.useContext)(k);return Object(n.jsxs)(u.a.Body,{className:"card-options__body",children:[Object(n.jsxs)("div",{className:"description-title",children:[Object(n.jsx)("h3",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 "}),Object(n.jsxs)("div",{className:"header__icons",children:[Object(n.jsx)(f.a,{className:"icon-edit",size:17,onClick:function(){return N(!0)}}),Object(n.jsx)(x.a,{className:"icon-delete",size:17,onClick:function(){return null===v||void 0===v?void 0:v.deleteDescription(c,t)}})]})]}),i&&!h?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("p",{children:i})}):Object(n.jsxs)(p.a,{className:"mb-3",children:[Object(n.jsx)(l.a,{id:"basic-url",placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435...","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435...","aria-describedby":"basic-addon2",onChange:function(e){j(e.target.value)},value:o}),Object(n.jsx)(p.a.Append,{children:Object(n.jsx)(m.a,{variant:"outline-success",onClick:function(){o&&(null===v||void 0===v||v.addNewDecription(c,t,o),j("")),N(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})]})}),g=(c(46),function(e){var t=e.cardName,c=e.cardId,i=e.columnId,s=e.columnName,r=(e.username,Object(a.useState)("")),o=Object(d.a)(r,2),j=o[0],b=o[1],O=Object(a.useState)(!1),h=Object(d.a)(O,2),N=h[0],v=h[1],g=Object(a.useContext)(k);return Object(n.jsx)(u.a.Header,{closeButton:!0,children:Object(n.jsx)(u.a.Title,{id:"contained-modal-title-vcenter",className:"header__container",children:N?Object(n.jsxs)(p.a,{className:"mb-3",children:[Object(n.jsx)(l.a,{id:"basic-url",placeholder:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435...","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435...","aria-describedby":"basic-addon2",onChange:function(e){b(e.target.value)},value:j}),Object(n.jsx)(p.a.Append,{children:Object(n.jsx)(m.a,{variant:"outline-success",onClick:function(){j&&(null===g||void 0===g||g.editCardName(i,c,j),b("")),v(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:[s," > ",t]}),Object(n.jsxs)("div",{className:"header__icons",children:[Object(n.jsx)(f.a,{className:"icon-edit",size:20,onClick:function(){return v(!0)}}),Object(n.jsx)(x.a,{className:"icon-delete",size:20,onClick:function(){null===g||void 0===g||g.deleteCard(i,c)}})]})]})})})}),C=(c(47),function(e){var t=e.cardName,c=e.show,a=e.onHide,i=e.description,s=e.columnName,r=e.comments,d=e.cardId,o=e.columnId,l=e.username;return Object(n.jsx)("div",{onClick:function(e){return e.stopPropagation()},children:Object(n.jsxs)(u.a,{show:c,onHide:a,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[Object(n.jsx)(g,{cardId:d,columnId:o,cardName:t,columnName:s,username:l}),Object(n.jsx)(v,{description:i,cardId:d,columnId:o}),Object(n.jsx)(N,{comments:r,cardId:d,columnId:o,username:l})]})})}),I=(c(48),function(e){var t=e.cardName,c=e.comments,i=e.description,s=e.columnName,r=e.cardId,o=e.columnId,u=e.username,l=Object(a.useState)(!1),m=Object(d.a)(l,2),j=m[0],b=m[1];return Object(n.jsxs)("div",{className:"card__wrapper",onClick:function(){return b(!0)},children:[Object(n.jsx)("p",{children:t}),c.length?Object(n.jsxs)("div",{className:"comments-icon",children:[Object(n.jsx)("img",{src:O,alt:"comments"}),Object(n.jsx)("p",{className:"comments-icon__text",children:c.length})]}):"",Object(n.jsx)(C,{cardName:t,columnName:s,show:j,onHide:function(){return b(!1)},description:i,comments:c,columnId:o,cardId:r,username:u})]})}),S=(c(49),c.p+"static/media/plus.05989119.svg"),_=function(e){var t=e.item,c=e.username,i=Object(a.useState)(!1),s=Object(d.a)(i,2),r=s[0],o=s[1],u=Object(a.useState)(""),j=Object(d.a)(u,2),O=j[0],p=j[1],f=Object(a.useState)(""),x=Object(d.a)(f,2),h=x[0],N=x[1],v=Object(a.useState)(!1),g=Object(d.a)(v,2),C=g[0],_=g[1],y=Object(a.useContext)(k);return Object(n.jsxs)("div",{className:"card-list__wrapper",children:[C?Object(n.jsx)(l.a,{autoFocus:!0,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",placeholder:t.columnName,onChange:function(e){p(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(_(!1),O&&(null===y||void 0===y||y.editColumnName(t.id,O)))}}):Object(n.jsx)("h4",{onClick:function(){_(!0)},children:t.columnName}),t.cards.map((function(e){return Object(n.jsx)(I,{cardName:e.cardName,description:e.description,comments:e.comments,columnName:t.columnName,columnId:t.id,cardId:e.id,username:c},e.id)})),r?Object(n.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),h&&(null===y||void 0===y||y.addNewCard(t.id,h),N(""),o(!1)),o(!1)},className:"card-list__form",children:[Object(n.jsx)(b.a.Group,{controlId:"formBasicPassword",children:Object(n.jsx)(b.a.Control,{type:"text",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",autoFocus:!0,onChange:function(e){N(e.target.value)}})}),Object(n.jsx)(m.a,{variant:"success",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})]}):Object(n.jsxs)("button",{className:"card-list__new-card",onClick:function(){o(!0)},children:[Object(n.jsx)("img",{src:S,alt:"plus"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"]})]})},y=(c(50),function(e){var t=e.username,c=e.data;return Object(n.jsxs)("div",{className:"board__wrapper",children:[c.map((function(e){return Object(n.jsx)(_,{item:e,username:t},e.id)})),Object(n.jsxs)("div",{className:"board__new-card",children:[Object(n.jsx)("img",{src:S,alt:"plus"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u043e\u043b\u043e\u043d\u043a\u0443"]})]})}),k=(c(51),i.a.createContext(void 0)),w=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)(!0),r=Object(d.a)(s,2),u=r[0],l=r[1],m=Object(a.useState)([{id:Object(o.a)(),columnName:"TODO",cards:[{cardName:"create page",id:Object(o.a)(),description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repellendus, nesciunt similique ratione neque aspernatur consequatur veniam exercitationem nostrum quo laborum ipsa, esse nihil pariatur. Ex quasi explicabo fugit unde.",comments:[{name:"Jessy",text:"LOL",id:Object(o.a)()},{name:"Nancy",text:"Is this lorem ipsum??? Where is real description?",id:Object(o.a)()}]},{cardName:"add feature",id:Object(o.a)(),description:"",comments:[]},{cardName:"deploy",id:Object(o.a)(),description:"",comments:[]}]},{id:Object(o.a)(),columnName:"In Progress",cards:[{cardName:"design for new page",id:Object(o.a)(),description:"",comments:[{name:"Michael Scott",text:"NO... no no no please no",id:Object(o.a)()}]}]},{id:Object(o.a)(),columnName:"Testing",cards:[{cardName:"write unit tests",id:Object(o.a)(),description:"",comments:[]},{cardName:"hand testing",id:Object(o.a)(),description:"",comments:[{name:"Chief",text:"good luck!",id:Object(o.a)()}]}]},{id:Object(o.a)(),columnName:"Done",cards:[{cardName:"create architecture",id:Object(o.a)(),description:"",comments:[]}]}]),b=Object(d.a)(m,2),O=b[0],p=b[1];Object(a.useEffect)((function(){var e=localStorage.getItem("username");e&&i(e);var t=localStorage.getItem("board");t&&p(JSON.parse(t))}),[]),Object(a.useEffect)((function(){localStorage.setItem("board",JSON.stringify(O))}),[O]);return Object(n.jsx)("div",{className:"App",children:c?Object(n.jsx)(k.Provider,{value:{editColumnName:function(e,t){p(O.map((function(c){return c.id===e&&(c.columnName=t),c})))},addNewCard:function(e,t){p(O.map((function(c){return c.id===e&&c.cards.push({cardName:t,id:Object(o.a)(),description:"",comments:[]}),c})))},addNewComment:function(e,t,n){p(O.map((function(a){return a.id===e&&a.cards.map((function(e){return e.id===t&&e.comments.push({name:c,text:n,id:Object(o.a)()}),e})),a})))},addNewDecription:function(e,t,c){p(O.map((function(n){return n.id===e&&n.cards.map((function(e){return e.id===t&&(e.description=c),e})),n})))},deleteDescription:function(e,t){p(O.map((function(c){return c.id===e&&c.cards.map((function(e){return e.id===t&&(e.description=""),e})),c})))},editCardName:function(e,t,c){p(O.map((function(n){return n.id===e&&n.cards.map((function(e){return e.id===t&&(e.cardName=c),e})),n})))},deleteCard:function(e,t){p(O.map((function(c){return c.id===e&&(c.cards=c.cards.filter((function(e){return e.id!==t}))),c})))},editComment:function(e,t,c,n){p(O.map((function(a){return a.id===e&&a.cards.map((function(e){return e.id===t&&e.comments.map((function(e){return e.id===c&&(e.text=n),e})),e})),a})))},deleteComment:function(e,t,c){p(O.map((function(n){return n.id===e&&n.cards.map((function(e){return e.id===t&&(e.comments=e.comments.filter((function(e){return e.id!==c}))),e})),n})))}},children:Object(n.jsx)(y,{username:c,data:O})}):Object(n.jsx)(j,{show:u,onHide:function(){return l(!1)},setUserName:function(e){i(e),localStorage.setItem("username",e)}})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,60)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),F()}},[[52,1,2]]]);
//# sourceMappingURL=main.09b6f29f.chunk.js.map