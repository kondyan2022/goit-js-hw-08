!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=NaN,i="[object Symbol]",f=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,g=Math.max,p=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var o,i,f,u,a,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function v(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function b(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=f}function h(){var e=y();if(b(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-c);return d?p(n,f-(e-l)):n}(e))}function w(e){return a=void 0,m&&o?v(e):(o=i=void 0,u)}function O(){var e=y(),n=b(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return function(e){return l=e,a=setTimeout(h,t),s?v(e):u}(c);if(d)return a=setTimeout(h,t),v(c)}return void 0===a&&(a=setTimeout(h,t)),u}return t=j(t)||0,T(n)&&(s=!!n.leading,f=(d="maxWait"in n)?g(j(n.maxWait)||0,t):f,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},O.flush=function(){return void 0===a?u:w(y())},O}function T(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==i}(e))return o;if(T(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=T(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=a.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):u.test(e)?o:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return T(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};const h="feedback-form-state",w={form:document.querySelector("form.feedback-form")};let O={};const S=localStorage.getItem(h);if(S){O=JSON.parse(S);for(let e in O)w.form[e].value=O[e]}w.form.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;console.log({email:t.value,message:n.value}),e.currentTarget.reset(),localStorage.removeItem(h)})),w.form.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(O))}),500))}();
//# sourceMappingURL=03-feedback.20d4a0ae.js.map
