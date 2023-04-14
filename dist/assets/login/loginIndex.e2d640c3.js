import{f as v,g as _,h,i as e,j as r,v as u,k as g,l as c,w,u as x,m as V,n as k,B as z,r as q,o as S,p as I,q as P,s as B,t as N}from"../vendor/vendor.e5f69a14.js";import{_ as O}from"../index-26bb58f6.js";const D={autoPlay:!0,background:{color:{value:"#000000"},image:"",position:"50% 50%",repeat:"no-repeat",size:"cover",opacity:1},backgroundMask:{composite:"destination-out",cover:{color:{value:"#fff"},opacity:1},enable:!1},defaultThemes:[],delay:0,fullScreen:{enable:!0,zIndex:1},detectRetina:!0,duration:0,fpsLimit:120,interactivity:{detectsOn:"window",events:{onClick:{enable:!0,mode:"push"},onDiv:{selectors:"#repulse-div",enable:!1,mode:"repulse",type:"circle"},onHover:{enable:!0,mode:"connect",parallax:{enable:!1,force:60,smooth:10}},resize:{delay:.5,enable:!0}},modes:{attract:{distance:200,duration:.4,easing:"ease-out-quad",factor:1,maxSpeed:50,speed:1},bounce:{distance:200},bubble:{distance:400,duration:2,mix:!1,opacity:.8,size:40,divs:{distance:200,duration:.4,mix:!1,selectors:[]}},connect:{distance:80,links:{opacity:.5},radius:60},grab:{distance:400,links:{blink:!1,consent:!1,opacity:1}},push:{default:!0,groups:[],quantity:4},remove:{quantity:2},repulse:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",divs:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",selectors:[]}},slow:{factor:3,radius:200},trail:{delay:1,pauseOnStop:!1,quantity:1},light:{area:{gradient:{start:{value:"#ffffff"},stop:{value:"#000000"}},radius:1e3},shadow:{color:{value:"#000000"},length:2e3}}}},manualParticles:[],particles:{bounce:{horizontal:{random:{enable:!1,minimumValue:.1},value:1},vertical:{random:{enable:!1,minimumValue:.1},value:1}},collisions:{absorb:{speed:2},bounce:{horizontal:{random:{enable:!1,minimumValue:.1},value:1},vertical:{random:{enable:!1,minimumValue:.1},value:1}},enable:!1,mode:"bounce",overlap:{enable:!0,retries:0}},color:{value:"random",animation:{h:{count:0,enable:!1,offset:0,speed:1,decay:0,sync:!0},s:{count:0,enable:!1,offset:0,speed:1,decay:0,sync:!0},l:{count:0,enable:!1,offset:0,speed:1,decay:0,sync:!0}}},groups:[],move:{angle:{offset:0,value:90},attract:{distance:200,enable:!1,rotate:{x:600,y:1200}},center:{x:50,y:50,mode:"percent",radius:0},decay:0,distance:[],direction:"none",drift:0,enable:!0,gravity:{acceleration:9.81,enable:!1,inverse:!1,maxSpeed:50},path:{clamp:!0,delay:{random:{enable:!1,minimumValue:0},value:0},enable:!1,options:[]},outModes:{default:"out",bottom:"out",left:"out",right:"out",top:"out"},random:!1,size:!1,speed:6,spin:{acceleration:0,enable:!1},straight:!1,trail:{enable:!1,length:10,fill:[]},vibrate:!1,warp:!1},number:{density:{enable:!0,width:1920,height:1080},limit:500,value:300},opacity:{random:{enable:!1,minimumValue:.1},value:.5,animation:{count:0,enable:!1,speed:1,decay:0,sync:!1,destroy:"none",startValue:"random",minimumValue:.1}},reduceDuplicates:!1,shadow:{blur:0,color:{value:"#000"},enable:!1,offset:{x:0,y:0}},shape:{options:[],type:"circle"},size:{random:{enable:!0,minimumValue:1},value:{min:1,max:5},animation:{count:0,enable:!1,speed:40,decay:0,sync:!1,destroy:"none",startValue:"random",minimumValue:.1}},stroke:{width:0},zIndex:{random:{enable:!1,minimumValue:0},value:0,opacityRate:1,sizeRate:1,velocityRate:1},life:{count:0,delay:{random:{enable:!1,minimumValue:0},value:0,sync:!1},duration:{random:{enable:!1,minimumValue:1e-4},value:0,sync:!1}},rotate:{random:{enable:!1,minimumValue:0},value:0,animation:{enable:!1,speed:0,decay:0,sync:!1},direction:"clockwise",path:!1},destroy:{bounds:[],mode:"none",split:{count:1,factor:{random:{enable:!1,minimumValue:0},value:3},rate:{random:{enable:!1,minimumValue:0},value:{min:4,max:9}},sizeOffset:!0}},roll:{darken:{enable:!1,value:0},enable:!1,enlighten:{enable:!1,value:0},mode:"vertical",speed:25},tilt:{random:{enable:!1,minimumValue:0},value:0,animation:{enable:!1,speed:0,decay:0,sync:!1},direction:"clockwise",enable:!1},twinkle:{lines:{enable:!1,frequency:.05,opacity:1},particles:{enable:!1,frequency:.05,opacity:1}},wobble:{distance:5,enable:!1,speed:{angle:50,move:10}},orbit:{animation:{count:0,enable:!1,speed:1,decay:0,sync:!1},enable:!1,opacity:1,rotation:{random:{enable:!1,minimumValue:0},value:45},width:1},links:{blink:!1,color:{value:"#ffffff"},consent:!1,distance:150,enable:!1,frequency:1,opacity:.4,shadow:{blur:5,color:{value:"#000"},enable:!1},triangles:{enable:!1,frequency:1},width:1,warp:!1},repulse:{random:{enable:!1,minimumValue:0},value:0,enabled:!1,distance:1,duration:1,factor:1,speed:1}},pauseOnBlur:!0,pauseOnOutsideViewport:!0,responsive:[],smooth:!1,style:[],themes:[],zLayers:100};const n=s=>(P("data-v-984feae3"),s=s(),B(),s),R={class:"login-container"},C={class:"layer"},K={class:"some-space"},L={class:"form"},M=n(()=>e("h2",null,"大数据可视化平台",-1)),T={class:"item"},J=n(()=>e("i",{class:"iconfont icon-user"},null,-1)),U={class:"item"},j=n(()=>e("i",{class:"iconfont icon-password"},null,-1)),E=["onKeyup"],F=n(()=>e("div",{class:"tip"},"默认用户名：admin ，默认密码：123456",-1)),H={__name:"loginIndex",setup(s){const d=N(),a=v({userName:"admin",userPwd:"123456"}),m=_(null),i=()=>{a.userName=="admin"&&a.userPwd=="123456"?(console.log("登录"),d.replace({path:"/home"})):V.error("请输入正确的用户名和密码")},f=async l=>{await k(l)},p=async l=>{console.log("Particles container loaded",l)};return(l,t)=>{const b=z,y=q("Particles");return S(),h("div",R,[e("div",C,[e("div",K,[e("div",L,[M,e("div",T,[J,r(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>a.userName=o),autocomplete:"off",type:"text",class:"input",placeholder:"请输入用户名"},null,512),[[u,a.userName]])]),e("div",U,[j,r(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>a.userPwd=o),autocomplete:"off",type:"password",class:"input",maxlength:"20",placeholder:"请输入密码",onKeyup:g(i,["enter"])},null,40,E),[[u,a.userPwd]])]),c(b,{class:"loginBtn",type:"primary",onClick:i},{default:w(()=>[I("立即登录")]),_:1}),F])])]),c(y,{id:"tsparticles",ref_key:"pJSDom",ref:m,"particles-init":f,"particles-loaded":p,options:x(D)},null,8,["options"])])}}},Q=O(H,[["__scopeId","data-v-984feae3"]]);export{Q as default};