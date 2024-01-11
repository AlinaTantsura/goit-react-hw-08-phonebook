"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[236],{8236:function(e,r,i){i.r(r),i.d(r,{default:function(){return v}});var a=i(1986),n=i(5350),l=i(7438),t=i(7236),o=i(9055),s=i(4420),d=i(614),u=i(8281),c=i(184),m=function(){var e=(0,s.I0)(),r=(0,s.v9)(u.rK),i=(0,a.p)();return(0,c.jsx)("form",{onSubmit:function(a){a.preventDefault();var n=a.currentTarget;e((0,d.z2)({name:n.elements.name.value,email:n.elements.email.value,password:n.elements.password.value})),r||i({position:"top-right",title:"E-mail is already used.",description:"Please, log in or use another e-mail.",status:"error",duration:4e3}),n.reset()},children:(0,c.jsxs)(n.NI,{margin:6,children:[(0,c.jsx)(l.l,{htmlFor:"name",children:"Username"}),(0,c.jsx)(t.I,{type:"text",name:"name",id:"name",required:!0,marginBottom:3,w:250,_focus:{border:"solid 1px teal",boxShadow:"0 0 0 1px teal"}}),(0,c.jsx)(l.l,{htmlFor:"email",children:"E-mail "}),(0,c.jsx)(t.I,{type:"email",name:"email",id:"email",required:!0,marginBottom:3,w:250,_focus:{border:"solid 1px teal",boxShadow:"0 0 0 1px teal"}}),(0,c.jsx)(l.l,{htmlFor:"password",children:"Password"}),(0,c.jsx)(t.I,{type:"password",name:"password",id:"password",required:!0,marginBottom:3,w:250,pattern:".{7,}",title:"Seven or more characters",_focus:{border:"solid 1px teal",boxShadow:"0 0 0 1px teal"}}),(0,c.jsx)("br",{}),(0,c.jsx)(o.z,{colorScheme:"teal",variant:"outline",type:"submit",_hover:{backgroundColor:"teal",color:"white"},children:"Register"})]})})},v=function(){return(0,c.jsx)(m,{})}},5350:function(e,r,i){i.d(r,{NI:function(){return k},NJ:function(){return R},e:function(){return g}});var a=i(1413),n=i(4925),l=i(9439),t=i(9886),o=i(4591),s=i(5597),d=i(2481),u=i(2996),c=i(5113),m=i(6992),v=i(2791),p=i(184),h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],b=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,l.Z)(b,2),Z=x[0],g=x[1],I=(0,t.k)({strict:!1,name:"FormControlContext"}),y=(0,l.Z)(I,2),q=y[0],R=y[1];var k=(0,s.G)((function(e,r){var i=(0,d.jC)("Form",e),t=function(e){var r=e.id,i=e.isRequired,t=e.isInvalid,s=e.isDisabled,d=e.isReadOnly,u=(0,n.Z)(e,h),c=(0,v.useId)(),p=r||"field-".concat(c),f="".concat(p,"-label"),b="".concat(p,"-feedback"),x="".concat(p,"-helptext"),Z=(0,v.useState)(!1),g=(0,l.Z)(Z,2),I=g[0],y=g[1],q=(0,v.useState)(!1),R=(0,l.Z)(q,2),k=R[0],F=R[1],P=(0,v.useState)(!1),_=(0,l.Z)(P,2),j=_[0],N=_[1],w=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:x},e),{},{ref:(0,o.lq)(r,(function(e){e&&F(!0)}))})}),[x]),C=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:r,"data-focus":(0,m.PB)(j),"data-disabled":(0,m.PB)(s),"data-invalid":(0,m.PB)(t),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:p})}),[p,s,j,t,d,f]),B=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:b},e),{},{ref:(0,o.lq)(r,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[b]),S=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)((0,a.Z)({},e),u),{},{ref:r,role:"group","data-focus":(0,m.PB)(j),"data-disabled":(0,m.PB)(s),"data-invalid":(0,m.PB)(t),"data-readonly":(0,m.PB)(d)})}),[u,s,j,t,d]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!t,isReadOnly:!!d,isDisabled:!!s,isFocused:!!j,onFocus:function(){return N(!0)},onBlur:function(){return N(!1)},hasFeedbackText:I,setHasFeedbackText:y,hasHelpText:k,setHasHelpText:F,id:p,labelId:f,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:w,getErrorMessageProps:B,getRootProps:S,getLabelProps:C,getRequiredIndicatorProps:O}}((0,u.Lr)(e)),s=t.getRootProps,b=(t.htmlProps,(0,n.Z)(t,f)),x=(0,m.cx)("chakra-form-control",e.className);return(0,p.jsx)(q,{value:b,children:(0,p.jsx)(Z,{value:i,children:(0,p.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},s({},r)),{},{className:x,__css:i.container}))})})}));k.displayName="FormControl",(0,s.G)((function(e,r){var i=R(),n=g(),l=(0,m.cx)("chakra-form__helper-text",e.className);return(0,p.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},null==i?void 0:i.getHelpTextProps(e,r)),{},{__css:n.helperText,className:l}))})).displayName="FormHelperText"},7438:function(e,r,i){i.d(r,{l:function(){return v}});var a=i(1413),n=i(4925),l=i(5350),t=i(5597),o=i(2481),s=i(2996),d=i(5113),u=i(6992),c=i(184),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,t.G)((function(e,r){var i,t=(0,o.mq)("FormLabel",e),v=(0,s.Lr)(e),h=(v.className,v.children),f=v.requiredIndicator,b=void 0===f?(0,c.jsx)(p,{}):f,x=v.optionalIndicator,Z=void 0===x?null:x,g=(0,n.Z)(v,m),I=(0,l.NJ)(),y=null!=(i=null==I?void 0:I.getLabelProps(g,r))?i:(0,a.Z)({ref:r},g);return(0,c.jsxs)(d.m.label,(0,a.Z)((0,a.Z)({},y),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,a.Z)({display:"block",textAlign:"start"},t),children:[h,(null==I?void 0:I.isRequired)?b:Z]}))}));v.displayName="FormLabel";var p=(0,t.G)((function(e,r){var i=(0,l.NJ)(),n=(0,l.e)();if(!(null==i?void 0:i.isRequired))return null;var t=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,a.Z)((0,a.Z)({},null==i?void 0:i.getRequiredIndicatorProps(e,r)),{},{__css:n.requiredIndicator,className:t}))}));p.displayName="RequiredIndicator"},7236:function(e,r,i){i.d(r,{I:function(){return f}});var a=i(1413),n=i(4925),l=i(5350),t=i(6992),o=["isDisabled","isInvalid","isReadOnly","isRequired"],s=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var r=function(e){var r,i,o,d=(0,l.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,p=e.isRequired,h=e.isInvalid,f=e.isReadOnly,b=e.isDisabled,x=e.onFocus,Z=e.onBlur,g=(0,n.Z)(e,s),I=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&I.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&I.push(d.helpTextId);return(0,a.Z)((0,a.Z)({},g),{},{"aria-describedby":I.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(r=null!=c?c:b)?r:null==d?void 0:d.isDisabled,isReadOnly:null!=(i=null!=m?m:f)?i:null==d?void 0:d.isReadOnly,isRequired:null!=(o=null!=v?v:p)?o:null==d?void 0:d.isRequired,isInvalid:null!=h?h:null==d?void 0:d.isInvalid,onFocus:(0,t.v0)(null==d?void 0:d.onFocus,x),onBlur:(0,t.v0)(null==d?void 0:d.onBlur,Z)})}(e),i=r.isDisabled,d=r.isInvalid,u=r.isReadOnly,c=r.isRequired,m=(0,n.Z)(r,o);return(0,a.Z)((0,a.Z)({},m),{},{disabled:i,readOnly:u,required:c,"aria-invalid":(0,t.Qm)(d),"aria-required":(0,t.Qm)(c),"aria-readonly":(0,t.Qm)(u)})}var u=i(5597),c=i(2481),m=i(2996),v=i(5113),p=i(184),h=["htmlSize"],f=(0,u.G)((function(e,r){var i=e.htmlSize,l=(0,n.Z)(e,h),o=(0,c.jC)("Input",l),s=d((0,m.Lr)(l)),u=(0,t.cx)("chakra-input",e.className);return(0,p.jsx)(v.m.input,(0,a.Z)((0,a.Z)({size:i},s),{},{__css:o.field,ref:r,className:u}))}));f.displayName="Input",f.id="Input"},1986:function(e,r,i){i.d(r,{p:function(){return s}});var a=i(1413),n=i(1186),l=i(6298),t=i(1170),o=i(2791);function s(e){var r=(0,t.uP)().theme,i=(0,n.OX)();return(0,o.useMemo)((function(){return(0,l.Cj)(r.direction,(0,a.Z)((0,a.Z)({},i),e))}),[e,r.direction,i])}}}]);
//# sourceMappingURL=236.68242594.chunk.js.map