(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[60],{5060:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r="ContactForm_form__dhl+T",a="ContactForm_label__-cVXI",o="ContactForm_input__Bl93P",i="ContactForm_button__eSwX9",u=n(9434),c=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t},l=n(1686),s="NOT_FOUND";var f=function(e,t){return e===t};function d(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?f:r,o=n.maxSize,i=void 0===o?1:o,u=n.resultEqualityCheck,c=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),l=1===i?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:s},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return s}return{get:r,put:function(t,a){r(t)===s&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(i,c);function d(){var t=l.get(arguments);if(t===s){if(t=e.apply(null,arguments),u){var n=l.getEntries(),r=n.find((function(e){return u(e.value,t)}));r&&(t=r.value)}l.put(arguments,t)}return t}return d.clearCache=function(){return l.clear()},d}function p(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function m(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o,i=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,s=l.memoizeOptions,f=void 0===s?n:s,d=Array.isArray(f)?f:[f],m=p(r),h=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(d)),v=e((function(){for(var e=[],t=m.length,n=0;n<t;n++)e.push(m[n].apply(null,arguments));return o=h.apply(null,e)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:h,dependencies:m,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return a}var h=m(d),v=function(e){return e.contacts.items},y=function(e){return e.filter},_=function(e){return e.contacts.isLoading},b=function(e){return e.contacts.error},x=h([v,y],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),g=n(3634),C=n(184),j=function(){var e=(0,u.I0)(),t=(0,u.v9)(v);return(0,C.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r={id:c(),name:n.currentTarget.elements.name.value,number:n.currentTarget.elements.number.value};if(t.find((function(e){return e.name.toLowerCase()===r.name.toLowerCase()})))return l.Notify.failure("Contact already exists");e((0,g.uK)(r),l.Notify.success("Contact was added to phonebook"),n.currentTarget.reset())},className:r,children:[(0,C.jsx)("label",{className:a,children:"Name"}),(0,C.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter name",className:o,required:!0}),(0,C.jsx)("label",{className:a,children:"Number"}),(0,C.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter phone number",className:o,required:!0}),(0,C.jsx)("button",{type:"submit",className:i,children:"Add contact"})]})},w="ContactList_contactListItem__3th7-",N="ContactList_contactListItemBtn__TXYnT",k=n(5053),A=n(2791),F=function(){var e=(0,u.v9)(x),t=(0,u.v9)(b),n=(0,u.v9)(_),r=(0,u.I0)();(0,A.useEffect)((function(){r((0,k.fetchContacts)())}),[r]);return(0,C.jsxs)("div",{children:[n&&(0,C.jsx)("p",{children:"Loading...."}),t&&(0,C.jsx)("p",{children:t}),(0,C.jsx)("ul",{children:e.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,C.jsxs)("li",{className:w,children:[n,": ",a,(0,C.jsx)("button",{type:"button",className:N,onClick:function(){return function(e){r((0,k.deleteContact)(e)),l.Notify.warning("Contact was deleted")}(t)},children:"Delete"})]},t)}))})]})},L="Filter_container__L5eml",E="Filter_filterLabel__+pnW-",z="Filter_filterName__Y2kKA",I=(0,n(6382).oM)({name:"filter",initialState:"",reducers:{setFilter:function(e,t){return t.payload}}}),S=I.actions.setFilter,T=(I.reducer,function(){var e=(0,u.I0)(),t=(0,u.v9)(y);return(0,C.jsxs)("div",{className:L,children:[(0,C.jsx)("label",{className:E,children:"Find contacts by name "}),(0,C.jsx)("input",{className:z,type:"text",name:"filter",placeholder:"Enter name",value:t,onChange:function(t){return e(S(t.target.value.trim()))}})]})}),q="App_container__ZdBeZ",O=n(6907),Z=function(){var e=(0,u.I0)(),t=(0,u.v9)(_),n=(0,u.v9)(b);return(0,A.useEffect)((function(){e((0,k.fetchContacts)())}),[e]),(0,C.jsxs)("div",{className:q,children:[(0,C.jsx)(O.ql,{children:(0,C.jsx)("title",{children:"Phonebook"})}),(0,C.jsx)(j,{}),(0,C.jsx)("h2",{children:" Contacts"}),(0,C.jsx)(T,{}),(0,C.jsx)(F,{}),!!t&&!n&&(0,C.jsx)("p",{children:"Loading...."})]})}},5053:function(){}}]);
//# sourceMappingURL=60.4c6e4289.chunk.js.map