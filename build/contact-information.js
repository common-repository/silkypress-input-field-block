(()=>{"use strict";const e=window.React,a=window.wc.blocksCheckout,n=window.wp.element,t=window.wp.components,l=window.wp.i18n,s=window.wp.data,i=window.lodash,o=({checkoutExtensionData:o,extensions:r,section:c,inputs:m})=>{const{setExtensionData:p}=o,d=(0,n.useCallback)((0,i.debounce)(((e,a,n)=>{p(e,a,n)}),1e3),[p]),{setValidationErrors:k,clearValidationErrors:u}=(0,s.useDispatch)("wc/store/validation");(0,n.useCallback)((0,i.debounce)((e=>{u(e)}),300),[u]),(0,n.useCallback)((0,i.debounce)((e=>{k(e)}),300),[k]);var h={};m.map((e=>{h[e.name]="textarea"===e.type?"":e.defaultValue}));const[b,y]=(0,n.useState)(h);var w={};const g=(0,s.useSelect)((e=>{const a=e("wc/store/validation"),n={};return m.map((e=>{n[e.name]=a.getValidationError(e.name)})),n}));return(0,n.useEffect)((()=>{d("silkypress-input-field-block",c,b);var e=[];m.map((a=>{var n=!0;a.minlength&&b[a.name].length<a.minlength[0]&&(w[a.name]={message:a.minlength[1],hidden:!0},n=!1),a.maxlength&&b[a.name].length>a.maxlength[0]&&(w[a.name]={message:a.maxlength[1],hidden:!0},n=!1),!a.required||""!==b[a.name]&&!1!==b[a.name]||(w[a.name]={message:(0,l.__)("Please fill this field","silkypress-input-field-block"),hidden:!0},n=!1),n&&g[a.name]&&e.push(a.name)})),u(e),k(w)}),[d,b,g,k,u]),(0,e.createElement)("div",{className:"silkypress-input-field-area"},m.map((n=>{let s=void 0!==g[n.name]&&!g[n.name]?.hidden;return["text","number","email","url"].includes(n.type)?(0,e.createElement)(a.ValidatedTextInput,{key:n.name,instanceId:"0",accept:"image/*",type:n.type,className:"silkypress-input-field-block",value:b[n.name],id:n.name,help:n.extra,label:n.required?n.label:n.label+(0,l.__)(" (optional)","silkypress-input-field-block"),onChange:e=>{y({...b,[n.name]:e})},onBlur:e=>{}}):"checkbox"===n.type?(0,e.createElement)(e.Fragment,{key:"key-"+n.name},(0,e.createElement)("div",{className:"silkypress-input-field-block"+(s?" has-error":"")},(0,e.createElement)(a.CheckboxControl,{key:n.name,id:n.name,className:"wc-block-components-checkbox",label:n.required?n.label:n.label+(0,l.__)(" (optional)","silkypress-input-field-block"),checked:b[n.name],help:n.extra,onChange:e=>{y({...b,[n.name]:e})}}),s&&(0,e.createElement)("div",{className:"wc-block-components-validation-error",key:"error-"+n.name},g[n.name]?.message))):"select"===n.type?(0,e.createElement)(e.Fragment,{key:"key-"+n.name},(0,e.createElement)("div",{className:"silkypress-input-field-block silkypress-with-hidden-input"+(s?" has-error":"")},s&&(0,e.createElement)(t.__experimentalInputControl,{value:"a",className:"silkypress-hidden-input"}),(0,e.createElement)(t.SelectControl,{key:n.name,id:n.name,className:"wc-block-components-select",label:n.required?n.label:n.label+(0,l.__)(" (optional)","silkypress-input-field-block"),options:n.options,help:n.extra,value:b[n.name],onChange:e=>{y({...b,[n.name]:e})},onBlur:e=>{},__nextHasNoMarginBottom:!0}),s&&(0,e.createElement)("div",{className:"wc-block-components-validation-error",key:"error-"+n.name},g[n.name]?.message))):"radio"===n.type?(0,e.createElement)(e.Fragment,{key:"key-"+n.name},(0,e.createElement)("div",{className:"silkypress-input-field-block"+(s?" has-error":"")},(0,e.createElement)(t.RadioControl,{key:n.name,id:n.name,label:n.required?n.label:n.label+(0,l.__)(" (optional)","silkypress-input-field-block"),selected:b[n.name],help:n.extra,options:n.options,onChange:e=>{y({...b,[n.name]:e})},onBlur:e=>{}}),s&&(0,e.createElement)("div",{className:"wc-block-components-validation-error",key:"error-"+n.name},g[n.name]?.message))):"textarea"===n.type?(0,e.createElement)(e.Fragment,{key:"key-"+n.name},(0,e.createElement)("div",{className:"silkypress-input-field-block silkypress-with-hidden-input"+(s?" has-error":"")},s&&(0,e.createElement)(t.__experimentalInputControl,{value:"a",className:"silkypress-hidden-input"}),(0,e.createElement)(t.TextareaControl,{key:n.name,instanceId:n.name,className:"silkypress-input-field-textarea"+(s?" has-error":""),placeholder:n.defaultValue,value:b[n.name],id:n.name,help:n.extra,rows:"2",label:n.required?n.label:n.label+(0,l.__)(" (optional)","silkypress-input-field-block"),onChange:e=>{y({...b,[n.name]:e})},onBlur:e=>{}}),s&&(0,e.createElement)("div",{className:"wc-block-components-validation-error",key:"error-"+n.name},g[n.name]?.message))):void 0})))},r="contact-information";(0,a.registerCheckoutBlock)({metadata:{apiVersion:2,name:"silkypress/input-field-contact-information",version:"1.0.0",title:"Input Field",category:"woocommerce",description:"Add custom input fields to the Shipping Address checkout inner block.",supports:{html:!1,align:!1,multiple:!0,reusable:!0},parent:["woocommerce/checkout-contact-information-block"],textdomain:"silkypress-input-field-block"},component:({checkoutExtensionData:a,extensions:n})=>(0,e.createElement)(o,{checkoutExtensionData:a,extensions:n,inputs:wcSettings["silkypress-input-field-block_data"].filter((e=>e.section===r)),section:r}),force:!0})})();