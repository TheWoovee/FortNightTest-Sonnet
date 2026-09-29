(()=>{var Dd=0,Xh=1,Ud=2;var As=1,Nd=2,yr=3,sn=0,ci=1,Fe=2,Hi=0,ls=1,Mi=2,qh=3,Yh=4,Fd=5;var Rs=100,Bd=101,Od=102,zd=103,Hd=104,Vd=200,Gd=201,Wd=202,Xd=203,Zh=204,$h=205,qd=206,Yd=207,Zd=208,$d=209,Kd=210,Jd=211,Qd=212,jd=213,tf=214,Do=0,Uo=1,No=2,hr=3,Fo=4,Bo=5,Oo=6,zo=7,dl=0,ef=1,nf=2,rn=0,Ea=1,Aa=2,Ra=3,Ca=4,Pa=5,Ia=6,Cs=7;var Kh=300,cs=301,Ps=302,fl=303,pl=304,La=306,es=1e3,pi=1001,Ho=1002,ii=1003,sf=1004;var ka=1005;var Qe=1006,ml=1007;var yn=1008;var gi=1009,Jh=1010,Qh=1011,_r=1012,gl=1013,an=1014,Vi=1015,Ye=1016,xl=1017,vl=1018,br=1020,jh=35902,tu=35899,eu=1021,iu=1022,Gi=1023,pn=1026,hs=1027,Mr=1028,yl=1029,us=1030,_l=1031;var bl=1033,Da=33776,Ua=33777,Na=33778,Fa=33779,Ml=35840,wl=35841,Sl=35842,Tl=35843,El=36196,Al=37492,Rl=37496,Cl=37488,Pl=37489,Ba=37490,Il=37491,Ll=37808,kl=37809,Dl=37810,Ul=37811,Nl=37812,Fl=37813,Bl=37814,Ol=37815,zl=37816,Hl=37817,Vl=37818,Gl=37819,Wl=37820,Xl=37821,ql=36492,Yl=36494,Zl=36495,$l=36283,Kl=36284,Oa=36285,Jl=36286;var na=2300,Vo=2301,Lo=2302,Fh=2303,Bh=2400,Oh=2401,zh=2402;var rf=3200;var Ql=0,af=1,on="",He="srgb",sa="srgb-linear",ra="linear",Me="srgb";var ko=7680;var of=519,lf=512,cf=513,hf=514,jl=515,uf=516,df=517,tc=518,ff=519,nu=35044,Wi=35048;var su="300 es",tn=2e3,ur=2001;function g0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function x0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function aa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pf(){let r=aa("canvas");return r.style.display="block",r}var od={},dr=null;function oa(...r){let t="THREE."+r.shift();dr?dr("log",t,...r):console.log(t,...r)}function mf(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Zt(...r){r=mf(r);let t="THREE."+r.shift();if(dr)dr("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function $t(...r){r=mf(r);let t="THREE."+r.shift();if(dr)dr("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function ws(...r){let t=r.join(" ");t in od||(od[t]=!0,Zt(...r))}function gf(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var xf={[Do]:Uo,[No]:Oo,[Fo]:zo,[hr]:Bo,[Uo]:Do,[Oo]:No,[zo]:Fo,[Bo]:hr},mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},ui=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fh=Math.PI/180,Go=180/Math.PI;function ts(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ui[r&255]+ui[r>>8&255]+ui[r>>16&255]+ui[r>>24&255]+"-"+ui[t&255]+ui[t>>8&255]+"-"+ui[t>>16&15|64]+ui[t>>24&255]+"-"+ui[e&63|128]+ui[e>>8&255]+"-"+ui[e>>16&255]+ui[e>>24&255]+ui[i&255]+ui[i>>8&255]+ui[i>>16&255]+ui[i>>24&255]).toLowerCase()}function fe(r,t,e){return Math.max(t,Math.min(e,r))}function v0(r,t){return(r%t+t)%t}function ph(r,t,e){return(1-e)*r+e*t}function fn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ce(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var cu=class cu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cu.prototype.isVector2=!0;var Pt=cu,Ue=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(u!==x||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),w=Math.sin(v);p=Math.sin(p*v)/w,o=Math.sin(o*v)/w,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+x*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},hu=class hu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ld.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ld.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return mh.copy(this).projectOnVector(t),this.sub(mh)}reflect(t){return this.sub(mh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hu.prototype.isVector3=!0;var D=hu,mh=new D,ld=new Ue,uu=class uu{constructor(t,e,i,n,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=n[0],m=n[3],p=n[6],v=n[1],w=n[4],M=n[7],y=n[2],b=n[5],C=n[8];return s[0]=a*x+o*v+l*y,s[3]=a*m+o*w+l*b,s[6]=a*p+o*M+l*C,s[1]=c*x+h*v+u*y,s[4]=c*m+h*w+u*b,s[7]=c*p+h*M+u*C,s[2]=d*x+f*v+g*y,s[5]=d*m+f*w+g*b,s[8]=d*p+f*M+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gh.makeScale(t,e)),this}rotate(t){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gh.makeRotation(-t)),this}translate(t,e){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};uu.prototype.isMatrix3=!0;var jt=uu,gh=new jt,cd=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hd=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y0(){let r={enabled:!0,workingColorSpace:sa,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Me&&(n.r=Un(n.r),n.g=Un(n.g),n.b=Un(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(n.r=cr(n.r),n.g=cr(n.g),n.b=cr(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===on?ra:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[sa]:{primaries:t,whitePoint:i,transfer:ra,toXYZ:cd,fromXYZ:hd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:i,transfer:Me,toXYZ:cd,fromXYZ:hd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),r}var he=y0();function Un(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function cr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Xs,Wo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Xs===void 0&&(Xs=aa("canvas")),Xs.width=t.width,Xs.height=t.height;let n=Xs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Xs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=aa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Un(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Un(e[i]/255)*255):e[i]=Un(e[i]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_0=0,fr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(xh(n[a].image)):s.push(xh(n[a]))}else s=xh(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function xh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var b0=0,vh=new D,bi=class r extends mn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=pi,n=pi,s=Qe,a=yn,o=Gi,l=gi,c=r.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=ts(),this.name="",this.source=new fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case es:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case es:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};bi.DEFAULT_IMAGE=null;bi.DEFAULT_MAPPING=Kh;bi.DEFAULT_ANISOTROPY=1;var du=class du{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,M=(f+1)/2,y=(p+1)/2,b=(h+d)/4,C=(u+x)/4,_=(g+m)/4;return w>M&&w>y?w<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(w),n=b/i,s=C/i):M>y?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=b/n,s=_/n):y<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(y),i=C/s,n=_/s),this.set(i,n,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};du.prototype.isVector4=!0;var Oe=du,Xo=class extends mn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];let n={width:t,height:e,depth:i.depth},s=new bi(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new fr(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ze=class extends Xo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},la=class extends bi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ii,this.minFilter=ii,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qo=class extends bi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ii,this.minFilter=ii,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ul=class ul{constructor(t,e,i,n,s,a,o,l,c,h,u,d,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,i,n,s,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ul().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/qs.setFromMatrixColumn(t,0).length(),s=1/qs.setFromMatrixColumn(t,1).length(),a=1/qs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(M0,t,w0)}lookAt(t,e,i){let n=this.elements;return Ci.subVectors(t,e),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),$n.crossVectors(i,Ci),$n.lengthSq()===0&&(Math.abs(i.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),$n.crossVectors(i,Ci)),$n.normalize(),ao.crossVectors(Ci,$n),n[0]=$n.x,n[4]=ao.x,n[8]=Ci.x,n[1]=$n.y,n[5]=ao.y,n[9]=Ci.y,n[2]=$n.z,n[6]=ao.z,n[10]=Ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],v=i[3],w=i[7],M=i[11],y=i[15],b=n[0],C=n[4],_=n[8],R=n[12],T=n[1],E=n[5],P=n[9],L=n[13],I=n[2],U=n[6],B=n[10],z=n[14],j=n[3],Z=n[7],O=n[11],Q=n[15];return s[0]=a*b+o*T+l*I+c*j,s[4]=a*C+o*E+l*U+c*Z,s[8]=a*_+o*P+l*B+c*O,s[12]=a*R+o*L+l*z+c*Q,s[1]=h*b+u*T+d*I+f*j,s[5]=h*C+u*E+d*U+f*Z,s[9]=h*_+u*P+d*B+f*O,s[13]=h*R+u*L+d*z+f*Q,s[2]=g*b+x*T+m*I+p*j,s[6]=g*C+x*E+m*U+p*Z,s[10]=g*_+x*P+m*B+p*O,s[14]=g*R+x*L+m*z+p*Q,s[3]=v*b+w*T+M*I+y*j,s[7]=v*C+w*E+M*U+y*Z,s[11]=v*_+w*P+M*B+y*O,s[15]=v*R+w*L+M*z+y*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15],v=l*f-c*d,w=o*f-c*u,M=o*d-l*u,y=a*f-c*h,b=a*d-l*h,C=a*u-o*h;return e*(x*v-m*w+p*M)-i*(g*v-m*y+p*b)+n*(g*w-x*y+p*C)-s*(g*M-x*b+m*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(s*h-o*l)+n*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=e*o-i*a,w=e*l-n*a,M=e*c-s*a,y=i*l-n*o,b=i*c-s*o,C=n*c-s*l,_=h*x-u*g,R=h*m-d*g,T=h*p-f*g,E=u*m-d*x,P=u*p-f*x,L=d*p-f*m,I=v*L-w*P+M*E+y*T-b*R+C*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return t[0]=(o*L-l*P+c*E)*U,t[1]=(n*P-i*L-s*E)*U,t[2]=(x*C-m*b+p*y)*U,t[3]=(d*b-u*C-f*y)*U,t[4]=(l*T-a*L-c*R)*U,t[5]=(e*L-n*T+s*R)*U,t[6]=(m*M-g*C-p*w)*U,t[7]=(h*C-d*M+f*w)*U,t[8]=(a*P-o*T+c*_)*U,t[9]=(i*T-e*P-s*_)*U,t[10]=(g*b-x*M+p*v)*U,t[11]=(u*M-h*b-f*v)*U,t[12]=(o*R-a*E-l*_)*U,t[13]=(e*E-i*R+n*_)*U,t[14]=(x*w-g*y-m*v)*U,t[15]=(h*y-u*w+d*v)*U,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,x=a*h,m=a*u,p=o*u,v=l*c,w=l*h,M=l*u,y=i.x,b=i.y,C=i.z;return n[0]=(1-(x+p))*y,n[1]=(f+M)*y,n[2]=(g-w)*y,n[3]=0,n[4]=(f-M)*b,n[5]=(1-(d+p))*b,n[6]=(m+v)*b,n[7]=0,n[8]=(g+w)*C,n[9]=(m-v)*C,n[10]=(1-(d+x))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=qs.set(n[0],n[1],n[2]).length(),o=qs.set(n[4],n[5],n[6]).length(),l=qs.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Ki.copy(this);let c=1/a,h=1/o,u=1/l;return Ki.elements[0]*=c,Ki.elements[1]*=c,Ki.elements[2]*=c,Ki.elements[4]*=h,Ki.elements[5]*=h,Ki.elements[6]*=h,Ki.elements[8]*=u,Ki.elements[9]*=u,Ki.elements[10]*=u,e.setFromRotationMatrix(Ki),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,s,a,o=tn,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n),g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===tn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ur)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=tn,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n),g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===tn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===ur)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ul.prototype.isMatrix4=!0;var re=ul,qs=new D,Ki=new re,M0=new D(0,0,0),w0=new D(1,1,1),$n=new D,ao=new D,Ci=new D,ud=new re,dd=new Ue,Ve=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ud.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ud,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dd.setFromEuler(this),this.setFromQuaternion(dd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ve.DEFAULT_ORDER="XYZ";var ca=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},S0=0,fd=new D,Ys=new Ue,Rn=new re,oo=new D,Zr=new D,T0=new D,E0=new Ue,pd=new D(1,0,0),md=new D(0,1,0),gd=new D(0,0,1),xd={type:"added"},A0={type:"removed"},Zs={type:"childadded",child:null},yh={type:"childremoved",child:null},ni=class r extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new D,e=new Ve,i=new Ue,n=new D(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new re},normalMatrix:{value:new jt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(pd,t)}rotateY(t){return this.rotateOnAxis(md,t)}rotateZ(t){return this.rotateOnAxis(gd,t)}translateOnAxis(t,e){return fd.copy(t).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pd,t)}translateY(t){return this.translateOnAxis(md,t)}translateZ(t){return this.translateOnAxis(gd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?oo.copy(t):oo.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Zr,oo,this.up):Rn.lookAt(oo,Zr,this.up),this.quaternion.setFromRotationMatrix(Rn),n&&(Rn.extractRotation(n.matrixWorld),Ys.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xd),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(A0),yh.child=t,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xd),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,t,T0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,E0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ni.DEFAULT_UP=new D(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=class extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}},R0={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(R0)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},lo={h:0,s:0,l:0};function _h(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var ot=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=he.workingColorSpace){if(t=v0(t,1),e=fe(e,0,1),i=fe(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=_h(a,s,t+1/3),this.g=_h(a,s,t),this.b=_h(a,s,t-1/3)}return he.colorSpaceToWorking(this,n),this}setStyle(t,e=He){function i(s){s!==void 0&&parseFloat(s)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let i=vf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return he.workingToColorSpace(di.copy(this),t),Math.round(fe(di.r*255,0,255))*65536+Math.round(fe(di.g*255,0,255))*256+Math.round(fe(di.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(di.copy(this),e);let i=di.r,n=di.g,s=di.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(di.copy(this),e),t.r=di.r,t.g=di.g,t.b=di.b,t}getStyle(t=He){he.workingToColorSpace(di.copy(this),t);let e=di.r,i=di.g,n=di.b;return t!==He?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(lo);let i=ph(Kn.h,lo.h,e),n=ph(Kn.s,lo.s,e),s=ph(Kn.l,lo.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},di=new ot;ot.NAMES=vf;var ha=class r{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ot(t),this.near=e,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ss=class extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ve,this.environmentIntensity=1,this.environmentRotation=new Ve,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ji=new D,Cn=new D,bh=new D,Pn=new D,$s=new D,Ks=new D,vd=new D,Mh=new D,wh=new D,Sh=new D,Th=new Oe,Eh=new Oe,Ah=new Oe,kn=class r{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ji.subVectors(t,e),n.cross(Ji);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ji.subVectors(n,e),Cn.subVectors(i,e),bh.subVectors(t,e);let a=Ji.dot(Ji),o=Ji.dot(Cn),l=Ji.dot(bh),c=Cn.dot(Cn),h=Cn.dot(bh),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return Th.setScalar(0),Eh.setScalar(0),Ah.setScalar(0),Th.fromBufferAttribute(t,e),Eh.fromBufferAttribute(t,i),Ah.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Th,s.x),a.addScaledVector(Eh,s.y),a.addScaledVector(Ah,s.z),a}static isFrontFacing(t,e,i,n){return Ji.subVectors(i,e),Cn.subVectors(t,e),Ji.cross(Cn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ji.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),Ji.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;$s.subVectors(n,i),Ks.subVectors(s,i),Mh.subVectors(t,i);let l=$s.dot(Mh),c=Ks.dot(Mh);if(l<=0&&c<=0)return e.copy(i);wh.subVectors(t,n);let h=$s.dot(wh),u=Ks.dot(wh);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector($s,a);Sh.subVectors(t,s);let f=$s.dot(Sh),g=Ks.dot(Sh);if(g>=0&&f<=g)return e.copy(s);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Ks,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return vd.subVectors(s,n),o=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(vd,o);let p=1/(m+x+d);return a=x*p,o=d*p,e.copy(i).addScaledVector($s,a).addScaledVector(Ks,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Qi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Qi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Qi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qi):Qi.fromBufferAttribute(s,a),Qi.applyMatrix4(t.matrixWorld),this.expandByPoint(Qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),co.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(t.matrixWorld),this.union(co)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qi),Qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($r),ho.subVectors(this.max,$r),Js.subVectors(t.a,$r),Qs.subVectors(t.b,$r),js.subVectors(t.c,$r),Jn.subVectors(Qs,Js),Qn.subVectors(js,Qs),ys.subVectors(Js,js);let e=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-ys.z,ys.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,ys.z,0,-ys.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-ys.y,ys.x,0];return!Rh(e,Js,Qs,js,ho)||(e=[1,0,0,0,1,0,0,0,1],!Rh(e,Js,Qs,js,ho))?!1:(uo.crossVectors(Jn,Qn),e=[uo.x,uo.y,uo.z],Rh(e,Js,Qs,js,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},In=[new D,new D,new D,new D,new D,new D,new D,new D],Qi=new D,co=new Bi,Js=new D,Qs=new D,js=new D,Jn=new D,Qn=new D,ys=new D,$r=new D,ho=new D,uo=new D,_s=new D;function Rh(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){_s.fromArray(r,s);let o=n.x*Math.abs(_s.x)+n.y*Math.abs(_s.y)+n.z*Math.abs(_s.z),l=t.dot(_s),c=e.dot(_s),h=i.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Dn=C0();function C0(){let r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function P0(r){Math.abs(r)>65504&&Zt("DataUtils.toHalfFloat(): Value out of range."),r=fe(r,-65504,65504),Dn.floatView[0]=r;let t=Dn.uint32View[0],e=t>>23&511;return Dn.baseTable[e]+((t&8388607)>>Dn.shiftTable[e])}function I0(r){let t=r>>10;return Dn.uint32View[0]=Dn.mantissaTable[Dn.offsetTable[t]+(r&1023)]+Dn.exponentTable[t],Dn.floatView[0]}var ua=class{static toHalfFloat(t){return P0(t)}static fromHalfFloat(t){return I0(t)}},Ke=new D,fo=new Pt,L0=0,me=class extends mn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=nu,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)fo.fromBufferAttribute(this,e),fo.applyMatrix3(t),this.setXY(e,fo.x,fo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Nn=class extends me{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Fn=class extends me{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Jt=class extends me{constructor(t,e,i){super(new Float32Array(t),e,i)}},k0=new Bi,Kr=new D,Ch=new D,Bn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):k0.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kr.subVectors(t,this.center);let e=Kr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Kr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kr.copy(t.center).add(Ch)),this.expandByPoint(Kr.copy(t.center).sub(Ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},D0=0,Fi=new re,Ph=new ni,tr=new D,Pi=new Bi,Jr=new Bi,ei=new D,ge=class r extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(g0(t)?Fn:Nn)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new jt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fi.makeRotationFromQuaternion(t),this.applyMatrix4(Fi),this}rotateX(t){return Fi.makeRotationX(t),this.applyMatrix4(Fi),this}rotateY(t){return Fi.makeRotationY(t),this.applyMatrix4(Fi),this}rotateZ(t){return Fi.makeRotationZ(t),this.applyMatrix4(Fi),this}translate(t,e,i){return Fi.makeTranslation(t,e,i),this.applyMatrix4(Fi),this}scale(t,e,i){return Fi.makeScale(t,e,i),this.applyMatrix4(Fi),this}lookAt(t){return Ph.lookAt(t),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];Pi.setFromBufferAttribute(s),this.morphTargetsRelative?(ei.addVectors(this.boundingBox.min,Pi.min),this.boundingBox.expandByPoint(ei),ei.addVectors(this.boundingBox.max,Pi.max),this.boundingBox.expandByPoint(ei)):(this.boundingBox.expandByPoint(Pi.min),this.boundingBox.expandByPoint(Pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(Pi.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(ei.addVectors(Pi.min,Jr.min),Pi.expandByPoint(ei),ei.addVectors(Pi.max,Jr.max),Pi.expandByPoint(ei)):(Pi.expandByPoint(Jr.min),Pi.expandByPoint(Jr.max))}Pi.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)ei.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(ei));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ei.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(t,c),ei.add(tr)),n=Math.max(n,i.distanceToSquared(ei))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new me(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new D,l[_]=new D;let c=new D,h=new D,u=new D,d=new Pt,f=new Pt,g=new Pt,x=new D,m=new D;function p(_,R,T){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,T),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,R),g.fromBufferAttribute(s,T),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(E),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(E),o[_].add(x),o[R].add(x),o[T].add(x),l[_].add(m),l[R].add(m),l[T].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,R=v.length;_<R;++_){let T=v[_],E=T.start,P=T.count;for(let L=E,I=E+P;L<I;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let w=new D,M=new D,y=new D,b=new D;function C(_){y.fromBufferAttribute(n,_),b.copy(y);let R=o[_];w.copy(R),w.sub(y.multiplyScalar(y.dot(R))).normalize(),M.crossVectors(b,R);let E=M.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,E)}for(let _=0,R=v.length;_<R;++_){let T=v[_],E=T.start,P=T.count;for(let L=E,I=E+P;L<I;L+=3)C(t.getX(L+0)),C(t.getX(L+1)),C(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ei.fromBufferAttribute(t,e),ei.normalize(),t.setXYZ(e,ei.x,ei.y,ei.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new me(d,h,u)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},da=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=nu,this.updateRanges=[],this.version=0,this.uuid=ts()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},_i=new D,mr=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)_i.fromBufferAttribute(this,e),_i.applyMatrix4(t),this.setXYZ(e,_i.x,_i.y,_i.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_i.fromBufferAttribute(this,e),_i.applyNormalMatrix(t),this.setXYZ(e,_i.x,_i.y,_i.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_i.fromBufferAttribute(this,e),_i.transformDirection(t),this.setXYZ(e,_i.x,_i.y,_i.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),n=Ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){oa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){oa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ih=new D,U0=new D,N0=new jt,ji=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Ih.subVectors(i,e).cross(U0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Ih),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||N0.getNormalMatrix(t),n=this.coplanarPoint(Ih).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},F0=0,gn=class extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=ls,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=$h,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ji().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Pt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},gr=class extends gn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},er,Qr=new D,ir=new D,nr=new D,sr=new Pt,jr=new Pt,yf=new re,po=new D,ta=new D,mo=new D,yd=new Pt,Lh=new Pt,_d=new Pt,fa=class extends ni{constructor(t=new gr){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new da(e,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new mr(i,3,0,!1)),er.setAttribute("uv",new mr(i,2,3,!1))}this.geometry=er,this.material=t,this.center=new Pt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&$t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),yf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-nr.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;go(po.set(-.5,-.5,0),nr,a,ir,n,s),go(ta.set(.5,-.5,0),nr,a,ir,n,s),go(mo.set(.5,.5,0),nr,a,ir,n,s),yd.set(0,0),Lh.set(1,0),_d.set(1,1);let o=t.ray.intersectTriangle(po,ta,mo,!1,Qr);if(o===null&&(go(ta.set(-.5,.5,0),nr,a,ir,n,s),Lh.set(0,1),o=t.ray.intersectTriangle(po,mo,ta,!1,Qr),o===null))return;let l=t.ray.origin.distanceTo(Qr);l<t.near||l>t.far||e.push({distance:l,point:Qr.clone(),uv:kn.getInterpolation(Qr,po,ta,mo,yd,Lh,_d,new Pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function go(r,t,e,i,n,s){sr.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(jr.x=s*sr.x-n*sr.y,jr.y=n*sr.x+s*sr.y):jr.copy(sr),r.copy(t),r.x+=jr.x,r.y+=jr.y,r.applyMatrix4(yf)}var Ln=new D,kh=new D,xo=new D,vo=new D,pa=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){kh.copy(t).add(e).multiplyScalar(.5),xo.copy(e).sub(t).normalize(),vo.copy(this.origin).sub(kh);let s=t.distanceTo(e)*.5,a=-this.direction.dot(xo),o=vo.dot(this.direction),l=-vo.dot(xo),c=vo.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(kh).addScaledVector(xo,d),f}intersectSphere(t,e){if(t.radius<0)return null;Ln.subVectors(t.center,this.origin);let i=Ln.dot(this.direction),n=Ln.dot(Ln)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,i,n,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,x=e.y-a.y,m=e.z-a.z,p=i.x-a.x,v=i.y-a.y,w=i.z-a.z,M=Math.abs(l),y=Math.abs(c),b=Math.abs(h),C,_,R,T,E,P,L,I,U,B,z,j;if(M>=y&&M>=b?(R=l,P=u,U=g,j=p,l>=0?(C=c,_=h,T=d,E=f,L=x,I=m,B=v,z=w):(C=h,_=c,T=f,E=d,L=m,I=x,B=w,z=v)):y>=b?(R=c,P=d,U=x,j=v,c>=0?(C=h,_=l,T=f,E=u,L=m,I=g,B=w,z=p):(C=l,_=h,T=u,E=f,L=g,I=m,B=p,z=w)):(R=h,P=f,U=m,j=w,h>=0?(C=l,_=c,T=u,E=d,L=g,I=x,B=p,z=v):(C=c,_=l,T=d,E=u,L=x,I=g,B=v,z=p)),R===0)return null;let Z=C/R,O=_/R,Q=1/R,pt=T-Z*P,mt=E-O*P,Xt=L-Z*U,Ft=I-O*U,rt=B-Z*j,F=z-O*j,$=rt*Ft-F*Xt,lt=pt*F-mt*rt,Et=Xt*mt-Ft*pt;if(n){if($<0||lt<0||Et<0)return null}else if(($<0||lt<0||Et<0)&&($>0||lt>0||Et>0))return null;let ct=$+lt+Et;if(ct===0)return null;let Rt=Q*($*P+lt*U+Et*j);return(ct>0?Rt<0:Rt>0)?null:this.at(Rt/ct,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},bd=new re,bs=new pa,yo=new Bn,Md=new D,_o=new D,bo=new D,Mo=new D,Dh=new D,wo=new D,wd=new D,So=new D,Dt=class extends ni{constructor(t=new ge,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Dh.fromBufferAttribute(u,t),a?wo.addScaledVector(Dh,h):wo.addScaledVector(Dh.sub(e),h))}e.add(wo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(s),bs.copy(t.ray).recast(t.near),!(yo.containsPoint(bs.origin)===!1&&(bs.intersectSphere(yo,Md)===null||bs.origin.distanceToSquared(Md)>(t.far-t.near)**2))&&(bd.copy(s).invert(),bs.copy(t.ray).applyMatrix4(bd),!(i.boundingBox!==null&&bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,bs)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,y=w;M<y;M+=3){let b=o.getX(M),C=o.getX(M+1),_=o.getX(M+2);n=To(this,p,t,i,c,h,u,b,C,_),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=o.getX(m),w=o.getX(m+1),M=o.getX(m+2);n=To(this,a,t,i,c,h,u,v,w,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,y=w;M<y;M+=3){let b=M,C=M+1,_=M+2;n=To(this,p,t,i,c,h,u,b,C,_),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=m,w=m+1,M=m+2;n=To(this,a,t,i,c,h,u,v,w,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function B0(r,t,e,i,n,s,a,o){let l;if(t.side===ci?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===sn,o),l===null)return null;So.copy(o),So.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(So);return c<e.near||c>e.far?null:{distance:c,point:So.clone(),object:r}}function To(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,_o),r.getVertexPosition(l,bo),r.getVertexPosition(c,Mo);let h=B0(r,t,e,i,_o,bo,Mo,wd);if(h){let u=new D;kn.getBarycoord(wd,_o,bo,Mo,u),n&&(h.uv=kn.getInterpolatedAttribute(n,o,l,c,u,new Pt)),s&&(h.uv1=kn.getInterpolatedAttribute(s,o,l,c,u,new Pt)),a&&(h.normal=kn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};kn.getNormal(_o,bo,Mo,d.normal),h.face=d,h.barycoord=u}return h}var Ts=class extends bi{constructor(t=null,e=1,i=1,n,s,a,o,l,c=ii,h=ii,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mi=class extends me{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},rr=new re,Sd=new re,Eo=[],Td=new Bi,O0=new re,ea=new Dt,ia=new Bn,Oi=class extends Dt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,O0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rr),Td.copy(t.boundingBox).applyMatrix4(rr),this.boundingBox.union(Td)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rr),ia.copy(t.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(ia)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ia.copy(this.boundingSphere),ia.applyMatrix4(i),t.ray.intersectsSphere(ia)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,rr),Sd.multiplyMatrices(i,rr),ea.matrixWorld=Sd,ea.raycast(t,Eo);for(let a=0,o=Eo.length;a<o;a++){let l=Eo[a];l.instanceId=s,l.object=this,e.push(l)}Eo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ts(new Float32Array(n*this.count),n,this.count,Mr,Vi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ms=new Bn,z0=new Pt(.5,.5),Ao=new D,xr=class{constructor(t=new ji,e=new ji,i=new ji,n=new ji,s=new ji,a=new ji){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=tn,i=!1){let n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],x=s[9],m=s[10],p=s[11],v=s[12],w=s[13],M=s[14],y=s[15];if(n[0].setComponents(c-a,f-h,p-g,y-v).normalize(),n[1].setComponents(c+a,f+h,p+g,y+v).normalize(),n[2].setComponents(c+o,f+u,p+x,y+w).normalize(),n[3].setComponents(c-o,f-u,p-x,y-w).normalize(),i)n[4].setComponents(l,d,m,M).normalize(),n[5].setComponents(c-l,f-d,p-m,y-M).normalize();else if(n[4].setComponents(c-l,f-d,p-m,y-M).normalize(),e===tn)n[5].setComponents(c+l,f+d,p+m,y+M).normalize();else if(e===ur)n[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){Ms.center.set(0,0,0);let e=z0.distanceTo(t.center);return Ms.radius=.7071067811865476+e,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Ao.x=n.normal.x>0?t.max.x:t.min.x,Ao.y=n.normal.y>0?t.max.y:t.min.y,Ao.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yo=class extends gn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ed=new re,Hh=new pa,Ro=new Bn,Co=new D,ma=class extends ni{constructor(t=new ge,e=new Yo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(n),Ro.radius+=s,t.ray.intersectsSphere(Ro)===!1)return;Ed.copy(n).invert(),Hh.copy(t.ray).applyMatrix4(Ed);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);Co.fromBufferAttribute(u,m),Ad(Co,m,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)Co.fromBufferAttribute(u,g),Ad(Co,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ad(r,t,e,i,n,s,a){let o=Hh.distanceSqToPoint(r);if(o<e){let l=new D;Hh.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ga=class extends bi{constructor(t=[],e=cs,i,n,s,a,o,l,c,h){super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nn=class extends bi{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var is=class extends bi{constructor(t,e,i=an,n,s,a,o=ii,l=ii,c,h=pn,u=1){if(h!==pn&&h!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Zo=class extends is{constructor(t,e=an,i=cs,n,s,a=ii,o=ii,l,c=pn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xa=class extends bi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},li=class r extends ge{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function g(x,m,p,v,w,M,y,b,C,_,R){let T=M/C,E=y/_,P=M/2,L=y/2,I=b/2,U=C+1,B=_+1,z=0,j=0,Z=new D;for(let O=0;O<B;O++){let Q=O*E-L;for(let pt=0;pt<U;pt++){let mt=pt*T-P;Z[x]=mt*v,Z[m]=Q*w,Z[p]=I,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[p]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(pt/C),u.push(1-O/_),z+=1}}for(let O=0;O<_;O++)for(let Q=0;Q<C;Q++){let pt=d+Q+U*O,mt=d+Q+U*(O+1),Xt=d+(Q+1)+U*(O+1),Ft=d+(Q+1)+U*O;l.push(pt,mt,Ft),l.push(mt,Xt,Ft),j+=6}o.addGroup(f,j,R),f+=j,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},va=class r extends ge{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=i*2+s,x=n+1,m=new D,p=new D;for(let v=0;v<=g;v++){let w=0,M=0,y=0,b=0;if(v<=i){let R=v/i,T=R*Math.PI/2;M=-h-t*Math.cos(T),y=t*Math.sin(T),b=-t*Math.cos(T),w=R*u}else if(v<=i+s){let R=(v-i)/s;M=-h+R*e,y=t,b=0,w=u+R*d}else{let R=(v-i-s)/i,T=R*Math.PI/2;M=h+t*Math.sin(T),y=t*Math.cos(T),b=t*Math.sin(T),w=u+d+R*u}let C=Math.max(0,Math.min(1,w/f)),_=0;v===0?_=.5/n:v===g&&(_=-.5/n);for(let R=0;R<=n;R++){let T=R/n,E=T*Math.PI*2,P=Math.sin(E),L=Math.cos(E);p.x=-y*L,p.y=M,p.z=y*P,o.push(p.x,p.y,p.z),m.set(-y*L,b,y*P),m.normalize(),l.push(m.x,m.y,m.z),c.push(T+_,C)}if(v>0){let R=(v-1)*x;for(let T=0;T<n;T++){let E=R+T,P=R+T+1,L=v*x+T,I=v*x+T+1;a.push(E,P,L),a.push(P,I,L)}}}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ya=class r extends ge{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],o=[],l=[],c=new D,h=new Pt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},si=class r extends ge{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;v(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function v(){let M=new D,y=new D,b=0,C=(e-t)/i;for(let _=0;_<=s;_++){let R=[],T=_/s,E=T*(e-t)+t;for(let P=0;P<=n;P++){let L=P/n,I=L*l+o,U=Math.sin(I),B=Math.cos(I);y.x=E*U,y.y=-T*i+m,y.z=E*B,u.push(y.x,y.y,y.z),M.set(U,C,B).normalize(),d.push(M.x,M.y,M.z),f.push(L,1-T),R.push(g++)}x.push(R)}for(let _=0;_<n;_++)for(let R=0;R<s;R++){let T=x[R][_],E=x[R+1][_],P=x[R+1][_+1],L=x[R][_+1];(t>0||R!==0)&&(h.push(T,E,L),b+=3),(e>0||R!==s-1)&&(h.push(E,P,L),b+=3)}c.addGroup(p,b,0),p+=b}function w(M){let y=g,b=new Pt,C=new D,_=0,R=M===!0?t:e,T=M===!0?1:-1;for(let P=1;P<=n;P++)u.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),g++;let E=g;for(let P=0;P<=n;P++){let I=P/n*l+o,U=Math.cos(I),B=Math.sin(I);C.x=R*B,C.y=m*T,C.z=R*U,u.push(C.x,C.y,C.z),d.push(0,T,0),b.x=U*.5+.5,b.y=B*.5*T+.5,f.push(b.x,b.y),g++}for(let P=0;P<n;P++){let L=y+P,I=E+P;M===!0?h.push(I,I+1,L):h.push(I+1,I,L),_+=3}c.addGroup(p,_,M===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_a=class r extends si{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$o=class r extends ge{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(s.slice(),3)),this.setAttribute("uv",new Jt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let w=new D,M=new D,y=new D;for(let b=0;b<e.length;b+=3)f(e[b+0],w),f(e[b+1],M),f(e[b+2],y),l(w,M,y,v)}function l(v,w,M,y){let b=y+1,C=[];for(let _=0;_<=b;_++){C[_]=[];let R=v.clone().lerp(M,_/b),T=w.clone().lerp(M,_/b),E=b-_;for(let P=0;P<=E;P++)P===0&&_===b?C[_][P]=R:C[_][P]=R.clone().lerp(T,P/E)}for(let _=0;_<b;_++)for(let R=0;R<2*(b-_)-1;R++){let T=Math.floor(R/2);R%2===0?(d(C[_][T+1]),d(C[_+1][T]),d(C[_][T])):(d(C[_][T+1]),d(C[_+1][T+1]),d(C[_+1][T]))}}function c(v){let w=new D;for(let M=0;M<s.length;M+=3)w.x=s[M+0],w.y=s[M+1],w.z=s[M+2],w.normalize().multiplyScalar(v),s[M+0]=w.x,s[M+1]=w.y,s[M+2]=w.z}function h(){let v=new D;for(let w=0;w<s.length;w+=3){v.x=s[w+0],v.y=s[w+1],v.z=s[w+2];let M=m(v)/2/Math.PI+.5,y=p(v)/Math.PI+.5;a.push(M,1-y)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let w=a[v+0],M=a[v+2],y=a[v+4],b=Math.max(w,M,y),C=Math.min(w,M,y);b>.9&&C<.1&&(w<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),y<.2&&(a[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,w){let M=v*3;w.x=t[M+0],w.y=t[M+1],w.z=t[M+2]}function g(){let v=new D,w=new D,M=new D,y=new D,b=new Pt,C=new Pt,_=new Pt;for(let R=0,T=0;R<s.length;R+=9,T+=6){v.set(s[R+0],s[R+1],s[R+2]),w.set(s[R+3],s[R+4],s[R+5]),M.set(s[R+6],s[R+7],s[R+8]),b.set(a[T+0],a[T+1]),C.set(a[T+2],a[T+3]),_.set(a[T+4],a[T+5]),y.copy(v).add(w).add(M).divideScalar(3);let E=m(y);x(b,T+0,v,E),x(C,T+2,w,E),x(_,T+4,M,E)}}function x(v,w,M,y){y<0&&v.x===1&&(a[w]=v.x-1),M.x===0&&M.z===0&&(a[w]=y/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var ns=class r extends $o{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var zi=class r extends ge{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let w=0;w<c;w++){let M=w*u-s;g.push(M,-v,0),x.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let w=v+c*p,M=v+c*(p+1),y=v+1+c*(p+1),b=v+1+c*p;f.push(w,M,b),f.push(M,y,b)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var xn=class r extends ge{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let v=[],w=p/i,M=a+w*o,y=t*Math.cos(M),b=Math.sqrt(t*t-y*y),C=0;p===0&&a===0?C=.5/e:p===i&&l===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){let R=_/e,T=n+R*s;u.x=-b*Math.cos(T),u.y=y,u.z=b*Math.sin(T),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(R+C,1-w),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){let w=h[p][v+1],M=h[p][v],y=h[p+1][v],b=h[p+1][v+1];(p!==0||a>0)&&f.push(w,M,b),(p!==i-1||l<Math.PI)&&f.push(M,y,b)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Is(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];if(Rd(n))n.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Rd(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function xi(r){let t={};for(let e=0;e<r.length;e++){let i=Is(r[e]);for(let n in i)t[n]=i[n]}return t}function Rd(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function H0(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ru(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var On={clone:Is,merge:xi},V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xe=class extends gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=H0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(n.value);break;case"v2":this.uniforms[i].value=new Pt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new D().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Oe().fromArray(n.value);break;case"m3":this.uniforms[i].value=new jt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new re().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},vr=class extends xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ne=class extends gn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.combine=dl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ko=class extends gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jo=class extends gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ar(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Uh(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var ss=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qo=class extends ss{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bh,endingEnd:Bh}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oh:s=t,o=2*e-i;break;case zh:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Oh:a=t,l=2*i-e;break;case zh:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let y=0;y!==o;++y)s[y]=p*a[h+y]+v*a[c+y]+w*a[l+y]+M*a[u+y];return s}},jo=class extends ss{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},tl=class extends ss{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},el=class extends ss{interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-e)/(n-e),x=1-g;for(let m=0;m!==o;++m)s[m]=a[c+m]*x+a[l+m]*g;return s}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let x=a[c+g],m=a[l+g],p=f*d+g*2,v=u[p],w=u[p+1],M=t*d+g*2,y=h[M],b=h[M+1],C=X0(i,e,v,y,n);s[g]=_f(C,x,w,b,m)}return s}};function _f(r,t,e,i,n){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function W0(r,t,e,i,n){let s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function X0(r,t,e,i,n){let s=(r-t)/(n-t);for(let a=0;a<8;a++){let o=_f(s,t,e,i,n)-r;if(Math.abs(o)<1e-10)break;let l=W0(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var Ii=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ar(e,this.TimeBufferType),this.values=ar(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ar(t.times,Array),values:ar(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Uh(t.settings)&&(i.settings={inTangents:ar(t.settings.inTangents,Array),outTangents:ar(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new el(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case na:e=this.InterpolantFactoryMethodDiscrete;break;case Vo:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break;case Fh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return Lo;case this.InterpolantFactoryMethodBezier:return Fh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Uh(this.settings)&&(Cd(this.settings.inTangents,t),Cd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){$t("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&x0(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Lo,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Uh(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Cd(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}Ii.prototype.ValueTypeName="";Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Vo;var rs=class extends Ii{constructor(t,e,i){super(t,e,i)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=na;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}};il.prototype.ValueTypeName="color";var nl=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}};nl.prototype.ValueTypeName="number";var sl=class extends ss{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ue.slerpFlat(s,0,a,c-o,a,c,l);return s}},ba=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new sl(this.times,this.values,this.getValueSize(),t)}};ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Ii{constructor(t,e,i){super(t,e,i)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=na;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}};rl.prototype.ValueTypeName="vector";var al=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bf=new al,ol=class{constructor(t){this.manager=t!==void 0?t:bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ma=class extends ni{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Es=class extends Ma{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ni.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Nh=new re,Pd=new D,Id=new D,ll=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Pd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pd),Id.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Id),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Nh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Nh,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===ur||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Nh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Po=new D,Io=new Ue,dn=new D,wa=class extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Po,Io,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,dn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Po,Io,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},jn=new D,Ld=new Pt,kd=new Pt,fi=class extends wa{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Ld,kd),e.subVectors(kd,Ld)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fh*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var vn=class extends wa{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vh=class extends ll{constructor(){super(new vn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},os=class extends Ma{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ni.DEFAULT_UP),this.updateMatrix(),this.target=new ni,this.shadow=new Vh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Sa=class extends ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var or=-90,lr=1,cl=class extends ni{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new fi(or,lr,t,e);n.layers=this.layers,this.add(n);let s=new fi(or,lr,t,e);s.layers=this.layers,this.add(s);let a=new fi(or,lr,t,e);a.layers=this.layers,this.add(a);let o=new fi(or,lr,t,e);o.layers=this.layers,this.add(o);let l=new fi(or,lr,t,e);l.layers=this.layers,this.add(l);let c=new fi(or,lr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===tn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},hl=class extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ta=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=q0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function q0(){this._document.hidden===!1&&this.reset()}var au="\\[\\]\\.:\\/",Y0=new RegExp("["+au+"]","g"),ou="[^"+au+"]",Z0="[^"+au.replace("\\.","")+"]",$0=/((?:WC+[\/:])*)/.source.replace("WC",ou),K0=/(WCOD+)?/.source.replace("WCOD",Z0),J0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ou),Q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ou),j0=new RegExp("^"+$0+K0+J0+Q0+"$"),tm=["material","materials","bones","map"],Gh=class{constructor(t,e,i){let n=i||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},De=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Y0,"")}static parseTrackName(t){let e=j0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);tm.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Gh;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var b_=new Float32Array(1);var fu=class fu{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};fu.prototype.isMatrix2=!0;var Wh=fu;function lu(r,t,e,i){let n=em(i);switch(e){case eu:return r*t;case Mr:return r*t/n.components*n.byteLength;case yl:return r*t/n.components*n.byteLength;case us:return r*t*2/n.components*n.byteLength;case _l:return r*t*2/n.components*n.byteLength;case iu:return r*t*3/n.components*n.byteLength;case Gi:return r*t*4/n.components*n.byteLength;case bl:return r*t*4/n.components*n.byteLength;case Da:case Ua:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Na:case Fa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wl:case Tl:return Math.max(r,16)*Math.max(t,8)/4;case Ml:case Sl:return Math.max(r,8)*Math.max(t,8)/2;case El:case Al:case Cl:case Pl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Rl:case Ba:case Il:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ql:case Yl:case Zl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case $l:case Kl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Oa:case Jl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function em(r){switch(r){case gi:case Jh:return{byteLength:1,components:1};case _r:case Qh:case Ye:return{byteLength:2,components:1};case xl:case vl:return{byteLength:2,components:4};case an:case gl:case Vi:return{byteLength:4,components:1};case jh:case tu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Gf(){let r=null,t=!1,e=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function am(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ym=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_m=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Im=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,jm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ag=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,og=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ex=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ix=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,px=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_x=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ex=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ox=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:om,alphahash_pars_fragment:lm,alphamap_fragment:cm,alphamap_pars_fragment:hm,alphatest_fragment:um,alphatest_pars_fragment:dm,aomap_fragment:fm,aomap_pars_fragment:pm,batching_pars_vertex:mm,batching_vertex:gm,begin_vertex:xm,beginnormal_vertex:vm,bsdfs:ym,iridescence_fragment:_m,bumpmap_pars_fragment:bm,clipping_planes_fragment:Mm,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:Tm,color_fragment:Em,color_pars_fragment:Am,color_pars_vertex:Rm,color_vertex:Cm,common:Pm,cube_uv_reflection_fragment:Im,defaultnormal_vertex:Lm,displacementmap_pars_vertex:km,displacementmap_vertex:Dm,emissivemap_fragment:Um,emissivemap_pars_fragment:Nm,colorspace_fragment:Fm,colorspace_pars_fragment:Bm,envmap_fragment:Om,envmap_common_pars_fragment:zm,envmap_pars_fragment:Hm,envmap_pars_vertex:Vm,envmap_physical_pars_fragment:jm,envmap_vertex:Gm,fog_vertex:Wm,fog_pars_vertex:Xm,fog_fragment:qm,fog_pars_fragment:Ym,gradientmap_pars_fragment:Zm,lightmap_pars_fragment:$m,lights_lambert_fragment:Km,lights_lambert_pars_fragment:Jm,lights_pars_begin:Qm,lights_toon_fragment:tg,lights_toon_pars_fragment:eg,lights_phong_fragment:ig,lights_phong_pars_fragment:ng,lights_physical_fragment:sg,lights_physical_pars_fragment:rg,lights_fragment_begin:ag,lights_fragment_maps:og,lights_fragment_end:lg,lightprobes_pars_fragment:cg,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:dg,logdepthbuf_vertex:fg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:xg,metalnessmap_fragment:vg,metalnessmap_pars_fragment:yg,morphinstance_vertex:_g,morphcolor_vertex:bg,morphnormal_vertex:Mg,morphtarget_pars_vertex:wg,morphtarget_vertex:Sg,normal_fragment_begin:Tg,normal_fragment_maps:Eg,normal_pars_fragment:Ag,normal_pars_vertex:Rg,normal_vertex:Cg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:kg,iridescence_pars_fragment:Dg,opaque_fragment:Ug,packing:Ng,premultiplied_alpha_fragment:Fg,project_vertex:Bg,dithering_fragment:Og,dithering_pars_fragment:zg,roughnessmap_fragment:Hg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:Yg,skinning_pars_vertex:Zg,skinning_vertex:$g,skinnormal_vertex:Kg,specularmap_fragment:Jg,specularmap_pars_fragment:Qg,tonemapping_fragment:jg,tonemapping_pars_fragment:tx,transmission_fragment:ex,transmission_pars_fragment:ix,uv_pars_fragment:nx,uv_pars_vertex:sx,uv_vertex:rx,worldpos_vertex:ax,background_vert:ox,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:hx,cube_vert:ux,cube_frag:dx,depth_vert:fx,depth_frag:px,distance_vert:mx,distance_frag:gx,equirect_vert:xx,equirect_frag:vx,linedashed_vert:yx,linedashed_frag:_x,meshbasic_vert:bx,meshbasic_frag:Mx,meshlambert_vert:wx,meshlambert_frag:Sx,meshmatcap_vert:Tx,meshmatcap_frag:Ex,meshnormal_vert:Ax,meshnormal_frag:Rx,meshphong_vert:Cx,meshphong_frag:Px,meshphysical_vert:Ix,meshphysical_frag:Lx,meshtoon_vert:kx,meshtoon_frag:Dx,points_vert:Ux,points_frag:Nx,shadow_vert:Fx,shadow_frag:Bx,sprite_vert:Ox,sprite_frag:zx},Mt={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},bn={basic:{uniforms:xi([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:xi([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:xi([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:xi([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:xi([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new ot(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:xi([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:xi([Mt.points,Mt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:xi([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:xi([Mt.common,Mt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:xi([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:xi([Mt.sprite,Mt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:xi([Mt.common,Mt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:xi([Mt.lights,Mt.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};bn.physical={uniforms:xi([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var ec={r:0,b:0,g:0},Hx=new re,Wf=new jt;Wf.set(-1,0,0,0,1,0,0,0,1);function Vx(r,t,e,i,n,s){let a=new ot(0),o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let M=v.backgroundBlurriness>0;w=t.get(w,M)}return w}function g(v){let w=!1,M=f(v);M===null?m(a,o):M&&M.isColor&&(m(M,1),w=!0);let y=r.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(v,w){let M=f(w);M&&(M.isCubeTexture||M.mapping===La)?(c===void 0&&(c=new Dt(new li(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:Is(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wf),c.material.toneMapped=he.getTransfer(M.colorSpace)!==Me,(h!==M||u!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Dt(new zi(2,2),new xe({name:"BackgroundMaterial",uniforms:Is(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=he.getTransfer(M.colorSpace)!==Me,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(ec,ru(r)),e.buffers.color.setClear(ec.r,ec.g,ec.b,w,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:x,dispose:p}}function Gx(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function o(E,P,L,I,U){let B=!1,z=u(E,I,L,P);s!==z&&(s=z,c(s.object)),B=f(E,I,L,U),B&&g(E,I,L,U),U!==null&&t.update(U,r.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,M(E,P,L,I),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return r.createVertexArray()}function c(E){return r.bindVertexArray(E)}function h(E){return r.deleteVertexArray(E)}function u(E,P,L,I){let U=I.wireframe===!0,B=i[P.id];B===void 0&&(B={},i[P.id]=B);let z=E.isInstancedMesh===!0?E.id:0,j=B[z];j===void 0&&(j={},B[z]=j);let Z=j[L.id];Z===void 0&&(Z={},j[L.id]=Z);let O=Z[U];return O===void 0&&(O=d(l()),Z[U]=O),O}function d(E){let P=[],L=[],I=[];for(let U=0;U<e;U++)P[U]=0,L[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:I,object:E,attributes:{},index:null}}function f(E,P,L,I){let U=s.attributes,B=P.attributes,z=0,j=L.getAttributes();for(let Z in j)if(j[Z].location>=0){let Q=U[Z],pt=B[Z];if(pt===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(pt=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(pt=E.instanceColor)),Q===void 0||Q.attribute!==pt||pt&&Q.data!==pt.data)return!0;z++}return s.attributesNum!==z||s.index!==I}function g(E,P,L,I){let U={},B=P.attributes,z=0,j=L.getAttributes();for(let Z in j)if(j[Z].location>=0){let Q=B[Z];Q===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(Q=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(Q=E.instanceColor));let pt={};pt.attribute=Q,Q&&Q.data&&(pt.data=Q.data),U[Z]=pt,z++}s.attributes=U,s.attributesNum=z,s.index=I}function x(){let E=s.newAttributes;for(let P=0,L=E.length;P<L;P++)E[P]=0}function m(E){p(E,0)}function p(E,P){let L=s.newAttributes,I=s.enabledAttributes,U=s.attributeDivisors;L[E]=1,I[E]===0&&(r.enableVertexAttribArray(E),I[E]=1),U[E]!==P&&(r.vertexAttribDivisor(E,P),U[E]=P)}function v(){let E=s.newAttributes,P=s.enabledAttributes;for(let L=0,I=P.length;L<I;L++)P[L]!==E[L]&&(r.disableVertexAttribArray(L),P[L]=0)}function w(E,P,L,I,U,B,z){z===!0?r.vertexAttribIPointer(E,P,L,U,B):r.vertexAttribPointer(E,P,L,I,U,B)}function M(E,P,L,I){x();let U=I.attributes,B=L.getAttributes(),z=P.defaultAttributeValues;for(let j in B){let Z=B[j];if(Z.location>=0){let O=U[j];if(O===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(O=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(O=E.instanceColor)),O!==void 0){let Q=O.normalized,pt=O.itemSize,mt=t.get(O);if(mt===void 0)continue;let Xt=mt.buffer,Ft=mt.type,rt=mt.bytesPerElement,F=Ft===r.INT||Ft===r.UNSIGNED_INT||O.gpuType===gl;if(O.isInterleavedBufferAttribute){let $=O.data,lt=$.stride,Et=O.offset;if($.isInstancedInterleavedBuffer){for(let ct=0;ct<Z.locationSize;ct++)p(Z.location+ct,$.meshPerAttribute);E.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ct=0;ct<Z.locationSize;ct++)m(Z.location+ct);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let ct=0;ct<Z.locationSize;ct++)w(Z.location+ct,pt/Z.locationSize,Ft,Q,lt*rt,(Et+pt/Z.locationSize*ct)*rt,F)}else{if(O.isInstancedBufferAttribute){for(let $=0;$<Z.locationSize;$++)p(Z.location+$,O.meshPerAttribute);E.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let $=0;$<Z.locationSize;$++)m(Z.location+$);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let $=0;$<Z.locationSize;$++)w(Z.location+$,pt/Z.locationSize,Ft,Q,pt*rt,pt/Z.locationSize*$*rt,F)}}else if(z!==void 0){let Q=z[j];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(Z.location,Q);break;case 3:r.vertexAttrib3fv(Z.location,Q);break;case 4:r.vertexAttrib4fv(Z.location,Q);break;default:r.vertexAttrib1fv(Z.location,Q)}}}}v()}function y(){R();for(let E in i){let P=i[E];for(let L in P){let I=P[L];for(let U in I){let B=I[U];for(let z in B)h(B[z].object),delete B[z];delete I[U]}}delete i[E]}}function b(E){if(i[E.id]===void 0)return;let P=i[E.id];for(let L in P){let I=P[L];for(let U in I){let B=I[U];for(let z in B)h(B[z].object),delete B[z];delete I[U]}}delete i[E.id]}function C(E){for(let P in i){let L=i[P];for(let I in L){let U=L[I];if(U[E.id]===void 0)continue;let B=U[E.id];for(let z in B)h(B[z].object),delete B[z];delete U[E.id]}}}function _(E){for(let P in i){let L=i[P],I=E.isInstancedMesh===!0?E.id:0,U=L[I];if(U!==void 0){for(let B in U){let z=U[B];for(let j in z)h(z[j].object),delete z[j];delete U[B]}delete L[I],Object.keys(L).length===0&&delete i[P]}}}function R(){T(),a=!0,s!==n&&(s=n,c(s.object))}function T(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:T,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Wx(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Xx(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){return!(C!==Gi&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===Ye&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==gi&&C!==Vi&&!_&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:M,maxSamples:y,samples:b}}function qx(r){let t=this,e=null,i=0,n=!1,s=!1,a=new ji,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{let v=s?0:i,w=v*4,M=p.clippingState||null;l.value=M,M=h(g,d,w,f);for(let y=0;y!==w;++y)M[y]=e[y];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,M=f;w!==x;++w,M+=4)a.copy(u[w]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Sr=4,Yx=6,Zx=20,$x=256,za=new vn,Mf=new ot,pu=null,mu=0,gu=0,xu=!1,Kx=new D,Ls=new D,nc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:a=256,position:o=Kx}=s;pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(pu,mu,gu),this._renderer.xr.enabled=xu,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Ye,format:Gi,colorSpace:sa,depthBuffer:!1},n=wf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wf(t,e,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Jx(s)),this._blurMaterial=jx(s,t,e),this._ggxMaterial=Qx(s,t,e)}return n}_compileMaterial(t){let e=new Dt(new ge,t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,i,n,s){let l=new fi(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Mf),u.toneMapping=rn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dt(new li,new en({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(Mf),p=!0);for(let w=0;w<6;w++){let M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));let y=this._cubeSize;wr(n,M*y,w>2?y:0,y,y),u.setRenderTarget(n),p&&u.render(x,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===cs||t.mapping===Ps;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());let s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;wr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,za)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-Sr?i-g+Sr:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,wr(s,m,p,3*x,2*x),n.setRenderTarget(s),n.render(o,za),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,wr(t,m,p,3*x,2*x),n.setRenderTarget(t),n.render(o,za)}_blur(t,e,i,n){let s=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,a),this._blurPass(s,t,i,i,a)}_blurPass(t,e,i,n,s){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[n],u=3*h*(n>this._lodMax-Sr?n-this._lodMax+Sr:0),d=4*(this._cubeSize-h);wr(e,u,d,3*h,2*h),a.setRenderTarget(e),a.render(l,za)}};function Jx(r){let t=[],e=[],i=r,n=r-Sr+1+Yx;for(let s=0;s<n;s++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let p=0;p<u;p++){let v=p%3*2/3-1,w=p>2?0:-1,M=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];g.set(M,f*d*p);for(let y=0;y<d;y++){let b=h[y*2]*2-1,C=h[y*2+1]*2-1;p===0?Ls.set(1,C,b):p===1?Ls.set(-b,1,-C):p===2?Ls.set(-b,C,1):p===3?Ls.set(-1,C,-b):p===4?Ls.set(-b,-1,C):Ls.set(b,C,-1),Ls.toArray(x,(p*d+y)*f)}}let m=new ge;m.setAttribute("position",new me(g,f)),m.setAttribute("outputDirection",new me(x,f)),e.push(new Dt(m,null)),i>Sr&&i--}return{lodMeshes:e,sizeLods:t}}function wf(r,t,e){let i=new ze(r,t,e);return i.texture.mapping=La,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wr(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function Qx(r,t,e){return new xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$x,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function jx(r,t,e){return new xe({name:"SphericalGaussianBlur",defines:{SAMPLES:Zx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Sf(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Tf(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var sc=class extends ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new ga(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new li(5,5,5),s=new xe({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ci,blending:Hi});s.uniforms.tEquirect.value=e;let a=new Dt(n,s),o=e.minFilter;return e.minFilter===yn&&(e.minFilter=Qe),new cl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}};function tv(r){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===fl||f===pl)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new sc(g.height);return x.fromEquirectangularTexture(r,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===fl||f===pl,x=f===cs||f===Ps;if(g||x){let m=e.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new nc(r)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return g&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new nc(r)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===fl?d.mapping=cs:f===pl&&(d.mapping=Ps),d}function l(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function ev(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&ws("WebGLRenderer: "+i+" extension not supported."),n}}}function iv(r,t,e,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(g===void 0)return;if(f!==null){let v=f.array;x=f.version;for(let w=0,M=v.length;w<M;w+=3){let y=v[w+0],b=v[w+1],C=v[w+2];d.push(y,b,b,C,C,y)}}else{let v=g.array;x=g.version;for(let w=0,M=v.length/3-1;w<M;w+=3){let y=w+0,b=w+1,C=w+2;d.push(y,b,b,C,C,y)}}let m=new(g.count>=65535?Fn:Nn)(d,1);m.version=x;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function nv(r,t,e){let i;function n(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,d){r.drawElements(i,d,s,u*a),e.update(d,i,1)}function c(u,d,f){f!==0&&(r.drawElementsInstanced(i,d,s,u*a,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function sv(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:$t("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function rv(r,t,e){let i=new WeakMap,n=new Oe;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let R=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let M=o.attributes.position.count*w,y=1;M>t.maxTextureSize&&(y=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let b=new Float32Array(M*y*4*u),C=new la(b,M,y,u);C.type=Vi,C.needsUpdate=!0;let _=w*4;for(let T=0;T<u;T++){let E=m[T],P=p[T],L=v[T],I=M*y*4*T;for(let U=0;U<E.count;U++){let B=U*_;f===!0&&(n.fromBufferAttribute(E,U),b[I+B+0]=n.x,b[I+B+1]=n.y,b[I+B+2]=n.z,b[I+B+3]=0),g===!0&&(n.fromBufferAttribute(P,U),b[I+B+4]=n.x,b[I+B+5]=n.y,b[I+B+6]=n.z,b[I+B+7]=0),x===!0&&(n.fromBufferAttribute(L,U),b[I+B+8]=n.x,b[I+B+9]=n.y,b[I+B+10]=n.z,b[I+B+11]=L.itemSize===4?n.w:1)}}d={count:u,texture:C,size:new Pt(M,y)},i.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function av(r,t,e,i,n){let s=new WeakMap;function a(c){let h=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var ov={[Ea]:"LINEAR_TONE_MAPPING",[Aa]:"REINHARD_TONE_MAPPING",[Ra]:"CINEON_TONE_MAPPING",[Ca]:"ACES_FILMIC_TONE_MAPPING",[Ia]:"AGX_TONE_MAPPING",[Cs]:"NEUTRAL_TONE_MAPPING",[Pa]:"CUSTOM_TONE_MAPPING"};function lv(r,t,e,i,n,s){let a=new ze(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ge;c.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Jt([0,2,0,0,2,0],2));let h=new vr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Dt(c,h),d=new vn(-1,1,1,-1,0,1),f=null,g=null,x=!1,m,p=null,v=[],w=!1;this.setSize=function(M,y){a.setSize(M,y),o!==null&&o.setSize(M,y),l!==null&&l.setSize(M,y);for(let b=0;b<v.length;b++){let C=v[b];C.setSize&&C.setSize(M,y)}},this.setEffects=function(M){v=M,w=v.length>0&&v[0].isRenderPass===!0;let y=a.width,b=a.height;v.length>0&&o===null&&(o=new ze(y,b,{type:Ye,depthBuffer:!1,stencilBuffer:!1}),l=new ze(y,b,{type:Ye,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){let _=v[C];_.setSize&&_.setSize(y,b)}},this.begin=function(M,y){if(x||M.toneMapping===rn&&v.length===0)return!1;if(p=y,y!==null){let b=y.width,C=y.height;(a.width!==b||a.height!==C)&&this.setSize(b,C)}return w===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=rn,!0},this.hasRenderPass=function(){return w},this.end=function(M,y){M.toneMapping=m,x=!0;let b=a,C=o;for(let _=0;_<v.length;_++){let R=v[_];R.enabled!==!1&&(R.render(M,C,b,y),R.needsSwap!==!1&&(b=C,C=C===o?l:o))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,h.defines={},he.getTransfer(f)===Me&&(h.defines.SRGB_TRANSFER="");let _=ov[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(p),M.render(u,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Xf=new bi,_u=new is(1,1),qf=new la,Yf=new qo,Zf=new ga,Ef=[],Af=[],Rf=new Float32Array(16),Cf=new Float32Array(9),Pf=new Float32Array(4);function Er(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Ef[n];if(s===void 0&&(s=new Float32Array(n),Ef[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function je(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function ti(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function oc(r,t){let e=Af[t];e===void 0&&(e=new Int32Array(t),Af[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function cv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function hv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2fv(this.addr,t),ti(e,t)}}function uv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;r.uniform3fv(this.addr,t),ti(e,t)}}function dv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4fv(this.addr,t),ti(e,t)}}function fv(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ti(e,t)}else{if(je(e,i))return;Pf.set(i),r.uniformMatrix2fv(this.addr,!1,Pf),ti(e,i)}}function pv(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ti(e,t)}else{if(je(e,i))return;Cf.set(i),r.uniformMatrix3fv(this.addr,!1,Cf),ti(e,i)}}function mv(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ti(e,t)}else{if(je(e,i))return;Rf.set(i),r.uniformMatrix4fv(this.addr,!1,Rf),ti(e,i)}}function gv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function xv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2iv(this.addr,t),ti(e,t)}}function vv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;r.uniform3iv(this.addr,t),ti(e,t)}}function yv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4iv(this.addr,t),ti(e,t)}}function _v(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function bv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2uiv(this.addr,t),ti(e,t)}}function Mv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;r.uniform3uiv(this.addr,t),ti(e,t)}}function wv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4uiv(this.addr,t),ti(e,t)}}function Sv(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(_u.compareFunction=e.isReversedDepthBuffer()?tc:jl,s=_u):s=Xf,e.setTexture2D(t||s,n)}function Tv(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Yf,n)}function Ev(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Zf,n)}function Av(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||qf,n)}function Rv(r){switch(r){case 5126:return cv;case 35664:return hv;case 35665:return uv;case 35666:return dv;case 35674:return fv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return xv;case 35668:case 35672:return vv;case 35669:case 35673:return yv;case 5125:return _v;case 36294:return bv;case 36295:return Mv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Av}}function Cv(r,t){r.uniform1fv(this.addr,t)}function Pv(r,t){let e=Er(t,this.size,2);r.uniform2fv(this.addr,e)}function Iv(r,t){let e=Er(t,this.size,3);r.uniform3fv(this.addr,e)}function Lv(r,t){let e=Er(t,this.size,4);r.uniform4fv(this.addr,e)}function kv(r,t){let e=Er(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Dv(r,t){let e=Er(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Uv(r,t){let e=Er(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Nv(r,t){r.uniform1iv(this.addr,t)}function Fv(r,t){r.uniform2iv(this.addr,t)}function Bv(r,t){r.uniform3iv(this.addr,t)}function Ov(r,t){r.uniform4iv(this.addr,t)}function zv(r,t){r.uniform1uiv(this.addr,t)}function Hv(r,t){r.uniform2uiv(this.addr,t)}function Vv(r,t){r.uniform3uiv(this.addr,t)}function Gv(r,t){r.uniform4uiv(this.addr,t)}function Wv(r,t,e){let i=this.cache,n=t.length,s=oc(e,n);je(i,s)||(r.uniform1iv(this.addr,s),ti(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=_u:a=Xf;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,s[o])}function Xv(r,t,e){let i=this.cache,n=t.length,s=oc(e,n);je(i,s)||(r.uniform1iv(this.addr,s),ti(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Yf,s[a])}function qv(r,t,e){let i=this.cache,n=t.length,s=oc(e,n);je(i,s)||(r.uniform1iv(this.addr,s),ti(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Zf,s[a])}function Yv(r,t,e){let i=this.cache,n=t.length,s=oc(e,n);je(i,s)||(r.uniform1iv(this.addr,s),ti(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||qf,s[a])}function Zv(r){switch(r){case 5126:return Cv;case 35664:return Pv;case 35665:return Iv;case 35666:return Lv;case 35674:return kv;case 35675:return Dv;case 35676:return Uv;case 5124:case 35670:return Nv;case 35667:case 35671:return Fv;case 35668:case 35672:return Bv;case 35669:case 35673:return Ov;case 5125:return zv;case 36294:return Hv;case 36295:return Vv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Yv}}var bu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Rv(e.type)}},Mu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zv(e.type)}},wu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},vu=/(\w+)(\])?(\[|\.)?/g;function If(r,t){r.seq.push(t),r.map[t.id]=t}function $v(r,t,e){let i=r.name,n=i.length;for(vu.lastIndex=0;;){let s=vu.exec(i),a=vu.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){If(e,c===void 0?new bu(o,r,t):new Mu(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new wu(o),If(e,u)),e=u}}}var Tr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);$v(o,l,this)}let n=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Lf(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var Kv=37297,Jv=0;function Qv(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var kf=new jt;function jv(r){he._getMatrix(kf,he.workingColorSpace,r);let t=`mat3( ${kf.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case ra:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Df(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Qv(r.getShaderSource(t),o)}else return s}function ty(r,t){let e=jv(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ey={[Ea]:"Linear",[Aa]:"Reinhard",[Ra]:"Cineon",[Ca]:"ACESFilmic",[Ia]:"AgX",[Cs]:"Neutral",[Pa]:"Custom"};function iy(r,t){let e=ey[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ic=new D;function ny(){he.getLuminanceCoefficients(ic);let r=ic.x.toFixed(4),t=ic.y.toFixed(4),e=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function ry(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ay(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Va(r){return r!==""}function Uf(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(r){return r.replace(oy,cy)}var ly=new Map;function cy(r,t){let e=oe[t];if(e===void 0){let i=ly.get(t);if(i!==void 0)e=oe[i],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Su(e)}var hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ff(r){return r.replace(hy,uy)}function uy(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Bf(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var dy={[As]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function fy(r){return dy[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var py={[cs]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[La]:"ENVMAP_TYPE_CUBE_UV"};function my(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":py[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var gy={[Ps]:"ENVMAP_MODE_REFRACTION"};function xy(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":gy[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vy={[dl]:"ENVMAP_BLENDING_MULTIPLY",[ef]:"ENVMAP_BLENDING_MIX",[nf]:"ENVMAP_BLENDING_ADD"};function yy(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vy[r.combine]||"ENVMAP_BLENDING_NONE"}function _y(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function by(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=fy(e),c=my(e),h=xy(e),u=yy(e),d=_y(e),f=sy(e),g=ry(s),x=n.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Va).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Va).join(`
`),p.length>0&&(p+=`
`)):(m=[Bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),p=[Bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rn?"#define TONE_MAPPING":"",e.toneMapping!==rn?oe.tonemapping_pars_fragment:"",e.toneMapping!==rn?iy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,ty("linearToOutputTexel",e.outputColorSpace),ny(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Va).join(`
`)),a=Su(a),a=Uf(a,e),a=Nf(a,e),o=Su(o),o=Uf(o,e),o=Nf(o,e),a=Ff(a),o=Ff(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=v+m+a,M=v+p+o,y=Lf(n,n.VERTEX_SHADER,w),b=Lf(n,n.FRAGMENT_SHADER,M);n.attachShader(x,y),n.attachShader(x,b),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function C(E){if(r.debug.checkShaderErrors){let P=n.getProgramInfoLog(x)||"",L=n.getShaderInfoLog(y)||"",I=n.getShaderInfoLog(b)||"",U=P.trim(),B=L.trim(),z=I.trim(),j=!0,Z=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,y,b);else{let O=Df(n,y,"vertex"),Q=Df(n,b,"fragment");$t("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+U+`
`+O+`
`+Q)}else U!==""?Zt("WebGLProgram: Program Info Log:",U):(B===""||z==="")&&(Z=!1);Z&&(E.diagnostics={runnable:j,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:z,prefix:p}})}n.deleteShader(y),n.deleteShader(b),_=new Tr(n,x),R=ay(n,x)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=n.getProgramParameter(x,Kv)),T},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=b,this}var My=0,Tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Eu(t),e.set(t,i)),i}},Eu=class{constructor(t){this.id=My++,this.code=t,this.usedTimes=0}};function wy(r){return r===us||r===Ba||r===Oa}function Sy(r,t,e,i,n,s){let a=new ca,o=new Tu,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,R,T,E,P,L){let I=E.fog,U=P.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?E.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=t.get(_.envMap||B,z),Z=j&&j.mapping===La?j.image.height:null,O=f[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Zt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let Q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,pt=Q!==void 0?Q.length:0,mt=0;U.morphAttributes.position!==void 0&&(mt=1),U.morphAttributes.normal!==void 0&&(mt=2),U.morphAttributes.color!==void 0&&(mt=3);let Xt,Ft,rt,F;if(O){let Ie=bn[O];Xt=Ie.vertexShader,Ft=Ie.fragmentShader}else{Xt=_.vertexShader,Ft=_.fragmentShader;let Ie=o.getVertexShaderStage(_),Se=o.getFragmentShaderStage(_);o.update(_,Ie,Se),rt=Ie.id,F=Se.id}let $=r.getRenderTarget(),lt=r.state.buffers.depth.getReversed(),Et=P.isInstancedMesh===!0,ct=P.isBatchedMesh===!0,Rt=!!_.map,ce=!!_.matcap,Kt=!!j,ne=!!_.aoMap,pe=!!_.lightMap,Qt=!!_.bumpMap&&_.wireframe===!1,Gt=!!_.normalMap,W=!!_.displacementMap,tt=!!_.emissiveMap,et=!!_.metalnessMap,ht=!!_.roughnessMap,N=_.anisotropy>0,Ut=_.clearcoat>0,Bt=_.dispersion>0,k=_.retroreflectivity>0,S=_.iridescence>0,G=_.sheen>0,X=_.transmission>0,K=N&&!!_.anisotropyMap,ut=Ut&&!!_.clearcoatMap,gt=Ut&&!!_.clearcoatNormalMap,it=Ut&&!!_.clearcoatRoughnessMap,nt=S&&!!_.iridescenceMap,xt=S&&!!_.iridescenceThicknessMap,zt=G&&!!_.sheenColorMap,bt=G&&!!_.sheenRoughnessMap,vt=!!_.specularMap,Ht=!!_.specularColorMap,qt=!!_.specularIntensityMap,se=X&&!!_.transmissionMap,V=X&&!!_.thicknessMap,yt=!!_.gradientMap,st=!!_.alphaMap,_t=_.alphaTest>0,Tt=!!_.alphaHash,at=!!_.extensions,Vt=rn;_.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Vt=r.toneMapping);let Nt={shaderID:O,shaderType:_.type,shaderName:_.name,vertexShader:Xt,fragmentShader:Ft,defines:_.defines,customVertexShaderID:rt,customFragmentShaderID:F,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:ct,batchingColor:ct&&P._colorsTexture!==null,instancing:Et,instancingColor:Et&&P.instanceColor!==null,instancingMorph:Et&&P.morphTexture!==null,outputColorSpace:$===null?r.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Rt,matcap:ce,envMap:Kt,envMapMode:Kt&&j.mapping,envMapCubeUVHeight:Z,aoMap:ne,lightMap:pe,bumpMap:Qt,normalMap:Gt,displacementMap:W,emissiveMap:tt,normalMapObjectSpace:Gt&&_.normalMapType===af,normalMapTangentSpace:Gt&&_.normalMapType===Ql,packedNormalMap:Gt&&_.normalMapType===Ql&&wy(_.normalMap.format),metalnessMap:et,roughnessMap:ht,anisotropy:N,anisotropyMap:K,clearcoat:Ut,clearcoatMap:ut,clearcoatNormalMap:gt,clearcoatRoughnessMap:it,dispersion:Bt,retroreflection:k,iridescence:S,iridescenceMap:nt,iridescenceThicknessMap:xt,sheen:G,sheenColorMap:zt,sheenRoughnessMap:bt,specularMap:vt,specularColorMap:Ht,specularIntensityMap:qt,transmission:X,transmissionMap:se,thicknessMap:V,gradientMap:yt,opaque:_.transparent===!1&&_.blending===ls&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:_t,alphaHash:Tt,combine:_.combine,mapUv:Rt&&g(_.map.channel),aoMapUv:ne&&g(_.aoMap.channel),lightMapUv:pe&&g(_.lightMap.channel),bumpMapUv:Qt&&g(_.bumpMap.channel),normalMapUv:Gt&&g(_.normalMap.channel),displacementMapUv:W&&g(_.displacementMap.channel),emissiveMapUv:tt&&g(_.emissiveMap.channel),metalnessMapUv:et&&g(_.metalnessMap.channel),roughnessMapUv:ht&&g(_.roughnessMap.channel),anisotropyMapUv:K&&g(_.anisotropyMap.channel),clearcoatMapUv:ut&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:gt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(_.sheenRoughnessMap.channel),specularMapUv:vt&&g(_.specularMap.channel),specularColorMapUv:Ht&&g(_.specularColorMap.channel),specularIntensityMapUv:qt&&g(_.specularIntensityMap.channel),transmissionMapUv:se&&g(_.transmissionMap.channel),thicknessMapUv:V&&g(_.thicknessMap.channel),alphaMapUv:st&&g(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Gt||N),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(Rt||st),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&Gt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:lt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:mt,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&T.length>0,shadowMapType:r.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Rt&&_.map.isVideoTexture===!0&&he.getTransfer(_.map.colorSpace)===Me,decodeVideoTextureEmissive:tt&&_.emissiveMap.isVideoTexture===!0&&he.getTransfer(_.emissiveMap.colorSpace)===Me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fe,flipSided:_.side===ci,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:at&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&_.extensions.multiDraw===!0||ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function m(_){let R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(let T in _.defines)R.push(T),R.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(p(R,_),v(R,_),R.push(r.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function p(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numSunLights),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numSunLightShadows),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function v(_,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let R=f[_.type],T;if(R){let E=bn[R];T=On.clone(E.uniforms)}else T=_.uniforms;return T}function M(_,R){let T=h.get(R);return T!==void 0?++T.usedTimes:(T=new by(r,R,_,n),c.push(T),h.set(R,T)),T}function y(_){if(--_.usedTimes===0){let R=c.indexOf(_);c[R]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:M,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:C}}function Ty(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Ey(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Of(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zf(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,x,m,p){let v=r[t];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},r[t]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=a(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=m,v.group=p),t++,v}function l(d,f,g,x,m,p,v){v.reversedDepth===!0&&(m=-m);let w=o(d,f,g,x,m,p);g.transmission>0?i.push(w):g.transparent===!0?n.push(w):e.push(w)}function c(d,f,g,x,m,p){let v=o(d,f,g,x,m,p);g.transmission>0?i.unshift(v):g.transparent===!0?n.unshift(v):e.unshift(v)}function h(d,f){e.length>1&&e.sort(d||Ey),i.length>1&&i.sort(f||Of),n.length>1&&n.sort(f||Of)}function u(){for(let d=t,f=r.length;d<f;d++){let g=r[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:u,sort:h}}function Ay(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new zf,r.set(i,[a])):n>=s.length?(a=new zf,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ry(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new ot};break;case"SpotLight":e={position:new D,direction:new D,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function Cy(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Py=0;function Iy(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ly(r){let t=new Ry,e=Cy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let n=new D,s=new re,a=new re;function o(c){let h=0,u=0,d=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,w=0,M=0,y=0,b=0,C=0,_=0,R=0,T=0;c.sort(Iy);for(let P=0,L=c.length;P<L;P++){let I=c[P],U=I.color,B=I.intensity,z=I.distance,j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===us?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=U.r*B,u+=U.g*B,d+=U.b*B;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],B);T++}else if(I.isSunLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let O=I.shadow,Q=e.get(I);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),i.sunShadow[g]=Q,i.sunShadowMap[g]=j;let pt=O.getViewportCount();for(let mt=0;mt<pt;mt++)i.sunShadowMatrix[x+mt]=O.getMatrix(mt),i.sunShadowCascade[x+mt]=O._cascadeData[mt];x+=pt,g++}i.sun[f]=Z,f++}else if(I.isDirectionalLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let O=I.shadow,Q=e.get(I);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=I.shadow.matrix,y++}i.directional[m]=Z,m++}else if(I.isSpotLight){let Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(U).multiplyScalar(B),Z.distance=z,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[v]=Z;let O=I.shadow;if(I.map&&(i.spotLightMap[_]=I.map,_++,O.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[v]=O.matrix,I.castShadow){let Q=e.get(I);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=j,C++}v++}else if(I.isRectAreaLight){let Z=t.get(I);Z.color.copy(U).multiplyScalar(B),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=Z,w++}else if(I.isPointLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let O=I.shadow,Q=e.get(I);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,Q.shadowCameraNear=O.camera.near,Q.shadowCameraFar=O.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=I.shadow.matrix,b++}i.point[p]=Z,p++}else if(I.isHemisphereLight){let Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(B),Z.groundColor.copy(I.groundColor).multiplyScalar(B),i.hemi[M]=Z,M++}}w>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let E=i.hash;(E.sunLength!==f||E.directionalLength!==m||E.pointLength!==p||E.spotLength!==v||E.rectAreaLength!==w||E.hemiLength!==M||E.numSunShadows!==g||E.numDirectionalShadows!==y||E.numPointShadows!==b||E.numSpotShadows!==C||E.numSpotMaps!==_||E.numLightProbes!==T)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=w,i.point.length=p,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.directionalShadowMatrix.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+_-R,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,E.sunLength=f,E.directionalLength=m,E.pointLength=p,E.spotLength=v,E.rectAreaLength=w,E.hemiLength=M,E.numSunShadows=g,E.numDirectionalShadows=y,E.numPointShadows=b,E.numSpotShadows=C,E.numSpotMaps=_,E.numLightProbes=T,i.version=Py++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let M=c[v];if(M.isSunLight){let y=i.sun[u];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),u++}else if(M.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(p),d++}else if(M.isSpotLight){let y=i.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let y=i.rectArea[x];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let y=i.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Hf(r){let t=new Ly(r),e=[],i=[],n=[];function s(d){u.camera=d,e.length=0,i.length=0,n.length=0}function a(d){e.push(d)}function o(d){i.push(d)}function l(d){n.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ky(r){let t=new WeakMap;function e(n,s=0){let a=t.get(n),o;return a===void 0?(o=new Hf(r),t.set(n,[o])):s>=a.length?(o=new Hf(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ny=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Fy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Vf=new re,Ha=new D,yu=new D;function By(r,t,e){let i=new xr,n=new Pt,s=new Pt,a=new Oe,o=new Ko,l=new Jo,c={},h=e.maxTextureSize,u={[sn]:ci,[ci]:sn,[Fe]:Fe},d=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:Dy,fragmentShader:Uy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=As;let p=this.type;this.render=function(b,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Nd&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=As);let R=r.getRenderTarget(),T=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Hi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let L=p!==this.type;L&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(U=>U.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,U=b.length;I<U;I++){let B=b[I],z=B.shadow;if(z===void 0){Zt("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);let j=z.getFrameExtents();n.multiply(j),s.copy(z.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/j.x),n.x=s.x*j.x,z.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/j.y),n.y=s.y*j.y,z.mapSize.y=s.y));let Z=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Z,z.map===null||L===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===yr){if(B.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ze(n.x,n.y,{format:us,type:Ye,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new is(n.x,n.y,Vi),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=pn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ii,z.map.depthTexture.magFilter=ii}else B.isPointLight?(z.map=new sc(n.x),z.map.depthTexture=new Zo(n.x,an)):(z.map=new ze(n.x,n.y),z.map.depthTexture=new is(n.x,n.y,an)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=pn,this.type===As?(z.map.depthTexture.compareFunction=Z?tc:jl,z.map.depthTexture.minFilter=Qe,z.map.depthTexture.magFilter=Qe):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ii,z.map.depthTexture.magFilter=ii);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==n.x||z.map.height!==n.y)&&z.map.setSize(n.x,n.y);let O=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();B.isPointLight!==!0&&z.updateMatrices(B,_);for(let Q=0;Q<O;Q++){let pt=z.getCamera(Q);if(B.isPointLight){let mt=z.camera,Xt=z.matrix,Ft=B.distance||mt.far;Ft!==mt.far&&(mt.far=Ft,mt.updateProjectionMatrix()),Ha.setFromMatrixPosition(B.matrixWorld),mt.position.copy(Ha),yu.copy(mt.position),yu.add(Ny[Q]),mt.up.copy(Fy[Q]),mt.lookAt(yu),mt.updateMatrixWorld(),Xt.makeTranslation(-Ha.x,-Ha.y,-Ha.z),Vf.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Vf,mt.coordinateSystem,mt.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,Q),r.clear();else{Q===0&&(r.setRenderTarget(z.map),r.clear());let mt=z.getViewport(Q);a.set(s.x*mt.x,s.y*mt.y,s.x*mt.z,s.y*mt.w),P.viewport(a)}i=z.getFrustum(Q),M(C,_,pt,B,this.type)}z.isPointLightShadow!==!0&&this.type===yr&&v(z,_),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(R,T,E)};function v(b,C){let _=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new ze(n.x,n.y,{format:us,type:Ye}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(C,null,_,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(C,null,_,f,x,null)}function w(b,C,_,R){let T=null,E=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)T=E;else if(T=_.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let P=T.uuid,L=C.uuid,I=c[P];I===void 0&&(I={},c[P]=I);let U=I[L];U===void 0&&(U=T.clone(),I[L]=U,C.addEventListener("dispose",y)),T=U}if(T.visible=C.visible,T.wireframe=C.wireframe,R===yr?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:u[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,_.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let P=r.properties.get(T);P.light=_}return T}function M(b,C,_,R,T){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===yr)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let L=t.update(b),I=b.material;if(Array.isArray(I)){let U=L.groups;for(let B=0,z=U.length;B<z;B++){let j=U[B],Z=I[j.materialIndex];if(Z&&Z.visible){let O=w(b,Z,R,T);b.onBeforeShadow(r,b,C,_,L,O,j),r.renderBufferDirect(_,null,L,O,b,j),b.onAfterShadow(r,b,C,_,L,O,j)}}}else if(I.visible){let U=w(b,I,R,T);b.onBeforeShadow(r,b,C,_,L,U,null),r.renderBufferDirect(_,null,L,U,b,null),b.onAfterShadow(r,b,C,_,L,U,null)}}let P=b.children;for(let L=0,I=P.length;L<I;L++)M(P[L],C,_,R,T)}function y(b){b.target.removeEventListener("dispose",y);for(let _ in c){let R=c[_],T=b.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}function Oy(r,t){function e(){let V=!1,yt=new Oe,st=null,_t=new Oe(0,0,0,0);return{setMask:function(Tt){st!==Tt&&!V&&(r.colorMask(Tt,Tt,Tt,Tt),st=Tt)},setLocked:function(Tt){V=Tt},setClear:function(Tt,at,Vt,Nt,Ie){Ie===!0&&(Tt*=Nt,at*=Nt,Vt*=Nt),yt.set(Tt,at,Vt,Nt),_t.equals(yt)===!1&&(r.clearColor(Tt,at,Vt,Nt),_t.copy(yt))},reset:function(){V=!1,st=null,_t.set(-1,0,0,0)}}}function i(){let V=!1,yt=!1,st=null,_t=null,Tt=null;return{setReversed:function(at){if(yt!==at){let Vt=t.get("EXT_clip_control");at?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),yt=at;let Nt=Tt;Tt=null,this.setClear(Nt)}},getReversed:function(){return yt},setTest:function(at){at?$(r.DEPTH_TEST):lt(r.DEPTH_TEST)},setMask:function(at){st!==at&&!V&&(r.depthMask(at),st=at)},setFunc:function(at){if(yt&&(at=xf[at]),_t!==at){switch(at){case Do:r.depthFunc(r.NEVER);break;case Uo:r.depthFunc(r.ALWAYS);break;case No:r.depthFunc(r.LESS);break;case hr:r.depthFunc(r.LEQUAL);break;case Fo:r.depthFunc(r.EQUAL);break;case Bo:r.depthFunc(r.GEQUAL);break;case Oo:r.depthFunc(r.GREATER);break;case zo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=at}},setLocked:function(at){V=at},setClear:function(at){Tt!==at&&(Tt=at,yt&&(at=1-at),r.clearDepth(at))},reset:function(){V=!1,st=null,_t=null,Tt=null,yt=!1}}}function n(){let V=!1,yt=null,st=null,_t=null,Tt=null,at=null,Vt=null,Nt=null,Ie=null;return{setTest:function(Se){V||(Se?$(r.STENCIL_TEST):lt(r.STENCIL_TEST))},setMask:function(Se){yt!==Se&&!V&&(r.stencilMask(Se),yt=Se)},setFunc:function(Se,$i,hn){(st!==Se||_t!==$i||Tt!==hn)&&(r.stencilFunc(Se,$i,hn),st=Se,_t=$i,Tt=hn)},setOp:function(Se,$i,hn){(at!==Se||Vt!==$i||Nt!==hn)&&(r.stencilOp(Se,$i,hn),at=Se,Vt=$i,Nt=hn)},setLocked:function(Se){V=Se},setClear:function(Se){Ie!==Se&&(r.clearStencil(Se),Ie=Se)},reset:function(){V=!1,yt=null,st=null,_t=null,Tt=null,at=null,Vt=null,Nt=null,Ie=null}}}let s=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,v=null,w=null,M=null,y=null,b=null,C=null,_=new ot(0,0,0),R=0,T=!1,E=null,P=null,L=null,I=null,U=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,j=0,Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=j>=2);let O=null,Q={},pt=r.getParameter(r.SCISSOR_BOX),mt=r.getParameter(r.VIEWPORT),Xt=new Oe().fromArray(pt),Ft=new Oe().fromArray(mt);function rt(V,yt,st,_t){let Tt=new Uint8Array(4),at=r.createTexture();r.bindTexture(V,at),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<st;Vt++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(yt,0,r.RGBA,1,1,_t,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(yt+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return at}let F={};F[r.TEXTURE_2D]=rt(r.TEXTURE_2D,r.TEXTURE_2D,1),F[r.TEXTURE_CUBE_MAP]=rt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[r.TEXTURE_2D_ARRAY]=rt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),F[r.TEXTURE_3D]=rt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(r.DEPTH_TEST),a.setFunc(hr),Qt(!1),Gt(Xh),$(r.CULL_FACE),ne(Hi);function $(V){h[V]!==!0&&(r.enable(V),h[V]=!0)}function lt(V){h[V]!==!1&&(r.disable(V),h[V]=!1)}function Et(V,yt){return d[V]!==yt?(r.bindFramebuffer(V,yt),d[V]=yt,V===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=yt),V===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=yt),!0):!1}function ct(V,yt){let st=g,_t=!1;if(V){st=f.get(yt),st===void 0&&(st=[],f.set(yt,st));let Tt=V.textures;if(st.length!==Tt.length||st[0]!==r.COLOR_ATTACHMENT0){for(let at=0,Vt=Tt.length;at<Vt;at++)st[at]=r.COLOR_ATTACHMENT0+at;st.length=Tt.length,_t=!0}}else st[0]!==r.BACK&&(st[0]=r.BACK,_t=!0);_t&&r.drawBuffers(st)}function Rt(V){return x!==V?(r.useProgram(V),x=V,!0):!1}let ce={[Rs]:r.FUNC_ADD,[Bd]:r.FUNC_SUBTRACT,[Od]:r.FUNC_REVERSE_SUBTRACT};ce[zd]=r.MIN,ce[Hd]=r.MAX;let Kt={[Vd]:r.ZERO,[Gd]:r.ONE,[Wd]:r.SRC_COLOR,[Zh]:r.SRC_ALPHA,[Kd]:r.SRC_ALPHA_SATURATE,[Zd]:r.DST_COLOR,[qd]:r.DST_ALPHA,[Xd]:r.ONE_MINUS_SRC_COLOR,[$h]:r.ONE_MINUS_SRC_ALPHA,[$d]:r.ONE_MINUS_DST_COLOR,[Yd]:r.ONE_MINUS_DST_ALPHA,[Jd]:r.CONSTANT_COLOR,[Qd]:r.ONE_MINUS_CONSTANT_COLOR,[jd]:r.CONSTANT_ALPHA,[tf]:r.ONE_MINUS_CONSTANT_ALPHA};function ne(V,yt,st,_t,Tt,at,Vt,Nt,Ie,Se){if(V===Hi){m===!0&&(lt(r.BLEND),m=!1);return}if(m===!1&&($(r.BLEND),m=!0),V!==Fd){if(V!==p||Se!==T){if((v!==Rs||y!==Rs)&&(r.blendEquation(r.FUNC_ADD),v=Rs,y=Rs),Se)switch(V){case ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mi:r.blendFunc(r.ONE,r.ONE);break;case qh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:$t("WebGLState: Invalid blending: ",V);break}else switch(V){case ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case qh:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yh:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",V);break}w=null,M=null,b=null,C=null,_.set(0,0,0),R=0,p=V,T=Se}return}Tt=Tt||yt,at=at||st,Vt=Vt||_t,(yt!==v||Tt!==y)&&(r.blendEquationSeparate(ce[yt],ce[Tt]),v=yt,y=Tt),(st!==w||_t!==M||at!==b||Vt!==C)&&(r.blendFuncSeparate(Kt[st],Kt[_t],Kt[at],Kt[Vt]),w=st,M=_t,b=at,C=Vt),(Nt.equals(_)===!1||Ie!==R)&&(r.blendColor(Nt.r,Nt.g,Nt.b,Ie),_.copy(Nt),R=Ie),p=V,T=!1}function pe(V,yt){V.side===Fe?lt(r.CULL_FACE):$(r.CULL_FACE);let st=V.side===ci;yt&&(st=!st),Qt(st),V.blending===ls&&V.transparent===!1?ne(Hi):ne(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);let _t=V.stencilWrite;o.setTest(_t),_t&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),tt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?$(r.SAMPLE_ALPHA_TO_COVERAGE):lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(V){E!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),E=V)}function Gt(V){V!==Dd?($(r.CULL_FACE),V!==P&&(V===Xh?r.cullFace(r.BACK):V===Ud?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):lt(r.CULL_FACE),P=V}function W(V){V!==L&&(z&&r.lineWidth(V),L=V)}function tt(V,yt,st){V?($(r.POLYGON_OFFSET_FILL),(I!==yt||U!==st)&&(I=yt,U=st,a.getReversed()&&(yt=-yt),r.polygonOffset(yt,st))):lt(r.POLYGON_OFFSET_FILL)}function et(V){V?$(r.SCISSOR_TEST):lt(r.SCISSOR_TEST)}function ht(V){V===void 0&&(V=r.TEXTURE0+B-1),O!==V&&(r.activeTexture(V),O=V)}function N(V,yt,st){st===void 0&&(O===null?st=r.TEXTURE0+B-1:st=O);let _t=Q[st];_t===void 0&&(_t={type:void 0,texture:void 0},Q[st]=_t),(_t.type!==V||_t.texture!==yt)&&(O!==st&&(r.activeTexture(st),O=st),r.bindTexture(V,yt||F[V]),_t.type=V,_t.texture=yt)}function Ut(){let V=Q[O];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Bt(){try{r.compressedTexImage2D(...arguments)}catch(V){$t("WebGLState:",V)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(V){$t("WebGLState:",V)}}function S(){try{r.texSubImage2D(...arguments)}catch(V){$t("WebGLState:",V)}}function G(){try{r.texSubImage3D(...arguments)}catch(V){$t("WebGLState:",V)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(V){$t("WebGLState:",V)}}function K(){try{r.compressedTexSubImage3D(...arguments)}catch(V){$t("WebGLState:",V)}}function ut(){try{r.texStorage2D(...arguments)}catch(V){$t("WebGLState:",V)}}function gt(){try{r.texStorage3D(...arguments)}catch(V){$t("WebGLState:",V)}}function it(){try{r.texImage2D(...arguments)}catch(V){$t("WebGLState:",V)}}function nt(){try{r.texImage3D(...arguments)}catch(V){$t("WebGLState:",V)}}function xt(V){return u[V]!==void 0?u[V]:r.getParameter(V)}function zt(V,yt){u[V]!==yt&&(r.pixelStorei(V,yt),u[V]=yt)}function bt(V){Xt.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Xt.copy(V))}function vt(V){Ft.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Ft.copy(V))}function Ht(V,yt){let st=c.get(yt);st===void 0&&(st=new WeakMap,c.set(yt,st));let _t=st.get(V);_t===void 0&&(_t=r.getUniformBlockIndex(yt,V.name),st.set(V,_t))}function qt(V,yt){let _t=c.get(yt).get(V);l.get(yt)!==_t&&(r.uniformBlockBinding(yt,_t,V.__bindingPointIndex),l.set(yt,_t))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},O=null,Q={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,v=null,w=null,M=null,y=null,b=null,C=null,_=new ot(0,0,0),R=0,T=!1,E=null,P=null,L=null,I=null,U=null,Xt.set(0,0,r.canvas.width,r.canvas.height),Ft.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:lt,bindFramebuffer:Et,drawBuffers:ct,useProgram:Rt,setBlending:ne,setMaterial:pe,setFlipSided:Qt,setCullFace:Gt,setLineWidth:W,setPolygonOffset:tt,setScissorTest:et,activeTexture:ht,bindTexture:N,unbindTexture:Ut,compressedTexImage2D:Bt,compressedTexImage3D:k,texImage2D:it,texImage3D:nt,pixelStorei:zt,getParameter:xt,updateUBOMapping:Ht,uniformBlockBinding:qt,texStorage2D:ut,texStorage3D:gt,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:bt,viewport:vt,reset:se}}function zy(r,t,e,i,n,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(k,S){return g?new OffscreenCanvas(k,S):aa("canvas")}function m(k,S,G){let X=1,K=Bt(k);if((K.width>G||K.height>G)&&(X=G/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let ut=Math.floor(X*K.width),gt=Math.floor(X*K.height);d===void 0&&(d=x(ut,gt));let it=S?x(ut,gt):d;return it.width=ut,it.height=gt,it.getContext("2d").drawImage(k,0,0,ut,gt),Zt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ut+"x"+gt+")."),it}else return"data"in k&&Zt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),k;return k}function p(k){return k.generateMipmaps}function v(k){r.generateMipmap(k)}function w(k){return k.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?r.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(k,S,G,X,K,ut=!1){if(k!==null){if(r[k]!==void 0)return r[k];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let gt;X&&(gt=t.get("EXT_texture_norm16"),gt||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=S;if(S===r.RED&&(G===r.FLOAT&&(it=r.R32F),G===r.HALF_FLOAT&&(it=r.R16F),G===r.UNSIGNED_BYTE&&(it=r.R8),G===r.UNSIGNED_SHORT&&gt&&(it=gt.R16_EXT),G===r.SHORT&&gt&&(it=gt.R16_SNORM_EXT)),S===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(it=r.R8UI),G===r.UNSIGNED_SHORT&&(it=r.R16UI),G===r.UNSIGNED_INT&&(it=r.R32UI),G===r.BYTE&&(it=r.R8I),G===r.SHORT&&(it=r.R16I),G===r.INT&&(it=r.R32I)),S===r.RG&&(G===r.FLOAT&&(it=r.RG32F),G===r.HALF_FLOAT&&(it=r.RG16F),G===r.UNSIGNED_BYTE&&(it=r.RG8),G===r.UNSIGNED_SHORT&&gt&&(it=gt.RG16_EXT),G===r.SHORT&&gt&&(it=gt.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(it=r.RG8UI),G===r.UNSIGNED_SHORT&&(it=r.RG16UI),G===r.UNSIGNED_INT&&(it=r.RG32UI),G===r.BYTE&&(it=r.RG8I),G===r.SHORT&&(it=r.RG16I),G===r.INT&&(it=r.RG32I)),S===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(it=r.RGB8UI),G===r.UNSIGNED_SHORT&&(it=r.RGB16UI),G===r.UNSIGNED_INT&&(it=r.RGB32UI),G===r.BYTE&&(it=r.RGB8I),G===r.SHORT&&(it=r.RGB16I),G===r.INT&&(it=r.RGB32I)),S===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(it=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(it=r.RGBA16UI),G===r.UNSIGNED_INT&&(it=r.RGBA32UI),G===r.BYTE&&(it=r.RGBA8I),G===r.SHORT&&(it=r.RGBA16I),G===r.INT&&(it=r.RGBA32I)),S===r.RGB&&(G===r.UNSIGNED_SHORT&&gt&&(it=gt.RGB16_EXT),G===r.SHORT&&gt&&(it=gt.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(it=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(it=r.R11F_G11F_B10F)),S===r.RGBA){let nt=ut?ra:he.getTransfer(K);G===r.FLOAT&&(it=r.RGBA32F),G===r.HALF_FLOAT&&(it=r.RGBA16F),G===r.UNSIGNED_BYTE&&(it=nt===Me?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&gt&&(it=gt.RGBA16_EXT),G===r.SHORT&&gt&&(it=gt.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(it=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(it=r.RGB5_A1)}return(it===r.R16F||it===r.R32F||it===r.RG16F||it===r.RG32F||it===r.RGBA16F||it===r.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function y(k,S){let G;return k?S===null||S===an||S===br?G=r.DEPTH24_STENCIL8:S===Vi?G=r.DEPTH32F_STENCIL8:S===_r&&(G=r.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===an||S===br?G=r.DEPTH_COMPONENT24:S===Vi?G=r.DEPTH_COMPONENT32F:S===_r&&(G=r.DEPTH_COMPONENT16),G}function b(k,S){return p(k)===!0||k.isFramebufferTexture&&k.minFilter!==ii&&k.minFilter!==Qe?Math.log2(Math.max(S.width,S.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?S.mipmaps.length:1}function C(k){let S=k.target;S.removeEventListener("dispose",C),R(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function _(k){let S=k.target;S.removeEventListener("dispose",_),E(S)}function R(k){let S=i.get(k);if(S.__webglInit===void 0)return;let G=k.source,X=f.get(G);if(X){let K=X[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(k),Object.keys(X).length===0&&f.delete(G)}i.remove(k)}function T(k){let S=i.get(k);r.deleteTexture(S.__webglTexture);let G=k.source,X=f.get(G);delete X[S.__cacheKey],a.memory.textures--}function E(k){let S=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let K=0;K<S.__webglFramebuffer[X].length;K++)r.deleteFramebuffer(S.__webglFramebuffer[X][K]);else r.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)r.deleteFramebuffer(S.__webglFramebuffer[X]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=k.textures;for(let X=0,K=G.length;X<K;X++){let ut=i.get(G[X]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),a.memory.textures--),i.remove(G[X])}i.remove(k)}let P=0;function L(){P=0}function I(){return P}function U(k){P=k}function B(){let k=P;return k>=n.maxTextures&&Zt("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+n.maxTextures),P+=1,k}function z(k){let S=[];return S.push(k.wrapS),S.push(k.wrapT),S.push(k.wrapR||0),S.push(k.magFilter),S.push(k.minFilter),S.push(k.anisotropy),S.push(k.internalFormat),S.push(k.format),S.push(k.type),S.push(k.generateMipmaps),S.push(k.premultiplyAlpha),S.push(k.flipY),S.push(k.unpackAlignment),S.push(k.colorSpace),S.join()}function j(k,S){let G=i.get(k);if(k.isVideoTexture&&N(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&G.__version!==k.version){let X=k.image;if(X===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(G,k,S);return}}else k.isExternalTexture&&(G.__webglTexture=k.sourceTexture?k.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+S)}function Z(k,S){let G=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&G.__version!==k.version){lt(G,k,S);return}else k.isExternalTexture&&(G.__webglTexture=k.sourceTexture?k.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+S)}function O(k,S){let G=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&G.__version!==k.version){lt(G,k,S);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+S)}function Q(k,S){let G=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&G.__version!==k.version){Et(G,k,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+S)}let pt={[es]:r.REPEAT,[pi]:r.CLAMP_TO_EDGE,[Ho]:r.MIRRORED_REPEAT},mt={[ii]:r.NEAREST,[sf]:r.NEAREST_MIPMAP_NEAREST,[ka]:r.NEAREST_MIPMAP_LINEAR,[Qe]:r.LINEAR,[ml]:r.LINEAR_MIPMAP_NEAREST,[yn]:r.LINEAR_MIPMAP_LINEAR},Xt={[lf]:r.NEVER,[ff]:r.ALWAYS,[cf]:r.LESS,[jl]:r.LEQUAL,[hf]:r.EQUAL,[tc]:r.GEQUAL,[uf]:r.GREATER,[df]:r.NOTEQUAL};function Ft(k,S){if(S.type===Vi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Qe||S.magFilter===ml||S.magFilter===ka||S.magFilter===yn||S.minFilter===Qe||S.minFilter===ml||S.minFilter===ka||S.minFilter===yn)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(k,r.TEXTURE_WRAP_S,pt[S.wrapS]),r.texParameteri(k,r.TEXTURE_WRAP_T,pt[S.wrapT]),(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)&&r.texParameteri(k,r.TEXTURE_WRAP_R,pt[S.wrapR]),r.texParameteri(k,r.TEXTURE_MAG_FILTER,mt[S.magFilter]),r.texParameteri(k,r.TEXTURE_MIN_FILTER,mt[S.minFilter]),S.compareFunction&&(r.texParameteri(k,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(k,r.TEXTURE_COMPARE_FUNC,Xt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ii||S.minFilter!==ka&&S.minFilter!==yn||S.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(k,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function rt(k,S){let G=!1;k.__webglInit===void 0&&(k.__webglInit=!0,S.addEventListener("dispose",C));let X=S.source,K=f.get(X);K===void 0&&(K={},f.set(X,K));let ut=z(S);if(ut!==k.__cacheKey){K[ut]===void 0&&(K[ut]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),K[ut].usedTimes++;let gt=K[k.__cacheKey];gt!==void 0&&(K[k.__cacheKey].usedTimes--,gt.usedTimes===0&&T(S)),k.__cacheKey=ut,k.__webglTexture=K[ut].texture}return G}function F(k,S,G){return Math.floor(Math.floor(k/G)/S)}function $(k,S,G,X){let ut=k.updateRanges;if(ut.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,G,X,S.data);else{ut.sort((zt,bt)=>zt.start-bt.start);let gt=0;for(let zt=1;zt<ut.length;zt++){let bt=ut[gt],vt=ut[zt],Ht=bt.start+bt.count,qt=F(vt.start,S.width,4),se=F(bt.start,S.width,4);vt.start<=Ht+1&&qt===se&&F(vt.start+vt.count-1,S.width,4)===qt?bt.count=Math.max(bt.count,vt.start+vt.count-bt.start):(++gt,ut[gt]=vt)}ut.length=gt+1;let it=e.getParameter(r.UNPACK_ROW_LENGTH),nt=e.getParameter(r.UNPACK_SKIP_PIXELS),xt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let zt=0,bt=ut.length;zt<bt;zt++){let vt=ut[zt],Ht=Math.floor(vt.start/4),qt=Math.ceil(vt.count/4),se=Ht%S.width,V=Math.floor(Ht/S.width),yt=qt,st=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,se),e.pixelStorei(r.UNPACK_SKIP_ROWS,V),e.texSubImage2D(r.TEXTURE_2D,0,se,V,yt,st,G,X,S.data)}k.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,it),e.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(r.UNPACK_SKIP_ROWS,xt)}}function lt(k,S,G){let X=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=r.TEXTURE_3D);let K=rt(k,S),ut=S.source;e.bindTexture(X,k.__webglTexture,r.TEXTURE0+G);let gt=i.get(ut);if(ut.version!==gt.__version||K===!0){if(e.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let st=he.getPrimaries(he.workingColorSpace),_t=S.colorSpace===on?null:he.getPrimaries(S.colorSpace),Tt=S.colorSpace===on||st===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let nt=m(S.image,!1,n.maxTextureSize);nt=Ut(S,nt);let xt=s.convert(S.format,S.colorSpace),zt=s.convert(S.type),bt=M(S.internalFormat,xt,zt,S.normalized,S.colorSpace,S.isVideoTexture);Ft(X,S);let vt,Ht=S.mipmaps,qt=S.isVideoTexture!==!0,se=gt.__version===void 0||K===!0,V=ut.dataReady,yt=b(S,nt);if(S.isDepthTexture)bt=y(S.format===hs,S.type),se&&(qt?e.texStorage2D(r.TEXTURE_2D,1,bt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,bt,nt.width,nt.height,0,xt,zt,null));else if(S.isDataTexture)if(Ht.length>0){qt&&se&&e.texStorage2D(r.TEXTURE_2D,yt,bt,Ht[0].width,Ht[0].height);for(let st=0,_t=Ht.length;st<_t;st++)vt=Ht[st],qt?V&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,vt.width,vt.height,xt,zt,vt.data):e.texImage2D(r.TEXTURE_2D,st,bt,vt.width,vt.height,0,xt,zt,vt.data);S.generateMipmaps=!1}else qt?(se&&e.texStorage2D(r.TEXTURE_2D,yt,bt,nt.width,nt.height),V&&$(S,nt,xt,zt)):e.texImage2D(r.TEXTURE_2D,0,bt,nt.width,nt.height,0,xt,zt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qt&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,yt,bt,Ht[0].width,Ht[0].height,nt.depth);for(let st=0,_t=Ht.length;st<_t;st++)if(vt=Ht[st],S.format!==Gi)if(xt!==null)if(qt){if(V)if(S.layerUpdates.size>0){let Tt=lu(vt.width,vt.height,S.format,S.type);for(let at of S.layerUpdates){let Vt=vt.data.subarray(at*Tt/vt.data.BYTES_PER_ELEMENT,(at+1)*Tt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,at,vt.width,vt.height,1,xt,Vt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,vt.width,vt.height,nt.depth,xt,vt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,st,bt,vt.width,vt.height,nt.depth,0,vt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?V&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,vt.width,vt.height,nt.depth,xt,zt,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,st,bt,vt.width,vt.height,nt.depth,0,xt,zt,vt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{qt&&se&&e.texStorage2D(r.TEXTURE_2D,yt,bt,Ht[0].width,Ht[0].height);for(let st=0,_t=Ht.length;st<_t;st++)vt=Ht[st],S.format!==Gi?xt!==null?qt?V&&e.compressedTexSubImage2D(r.TEXTURE_2D,st,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,st,bt,vt.width,vt.height,0,vt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?V&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,vt.width,vt.height,xt,zt,vt.data):e.texImage2D(r.TEXTURE_2D,st,bt,vt.width,vt.height,0,xt,zt,vt.data)}else if(S.isDataArrayTexture)if(qt){if(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,yt,bt,nt.width,nt.height,nt.depth),V)if(S.layerUpdates.size>0){let st=lu(nt.width,nt.height,S.format,S.type);for(let _t of S.layerUpdates){let Tt=nt.data.subarray(_t*st/nt.data.BYTES_PER_ELEMENT,(_t+1)*st/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,nt.width,nt.height,1,xt,zt,Tt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,xt,zt,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,nt.width,nt.height,nt.depth,0,xt,zt,nt.data);else if(S.isData3DTexture)qt?(se&&e.texStorage3D(r.TEXTURE_3D,yt,bt,nt.width,nt.height,nt.depth),V&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,xt,zt,nt.data)):e.texImage3D(r.TEXTURE_3D,0,bt,nt.width,nt.height,nt.depth,0,xt,zt,nt.data);else if(S.isFramebufferTexture){if(se)if(qt)e.texStorage2D(r.TEXTURE_2D,yt,bt,nt.width,nt.height);else{let st=nt.width,_t=nt.height;for(let Tt=0;Tt<yt;Tt++)e.texImage2D(r.TEXTURE_2D,Tt,bt,st,_t,0,xt,zt,null),st>>=1,_t>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){let st=r.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),nt.parentNode!==st){st.appendChild(nt),u.add(S),st.onpaint=_t=>{let Tt=_t.changedElements;for(let at of u)Tt.includes(at.image)&&(at.needsUpdate=!0)},st.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,nt);else{let Tt=r.RGBA,at=r.RGBA,Vt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Tt,at,Vt,nt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(qt&&se){let st=Bt(Ht[0]);e.texStorage2D(r.TEXTURE_2D,yt,bt,st.width,st.height)}for(let st=0,_t=Ht.length;st<_t;st++)vt=Ht[st],qt?V&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,xt,zt,vt):e.texImage2D(r.TEXTURE_2D,st,bt,xt,zt,vt);S.generateMipmaps=!1}else if(qt){if(se){let st=Bt(nt);e.texStorage2D(r.TEXTURE_2D,yt,bt,st.width,st.height)}V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt,zt,nt)}else e.texImage2D(r.TEXTURE_2D,0,bt,xt,zt,nt);p(S)&&v(X),gt.__version=ut.version,S.onUpdate&&S.onUpdate(S)}k.__version=S.version}function Et(k,S,G){if(S.image.length!==6)return;let X=rt(k,S),K=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+G);let ut=i.get(K);if(K.version!==ut.__version||X===!0){e.activeTexture(r.TEXTURE0+G);let gt=he.getPrimaries(he.workingColorSpace),it=S.colorSpace===on?null:he.getPrimaries(S.colorSpace),nt=S.colorSpace===on||gt===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let xt=S.isCompressedTexture||S.image[0].isCompressedTexture,zt=S.image[0]&&S.image[0].isDataTexture,bt=[];for(let at=0;at<6;at++)!xt&&!zt?bt[at]=m(S.image[at],!0,n.maxCubemapSize):bt[at]=zt?S.image[at].image:S.image[at],bt[at]=Ut(S,bt[at]);let vt=bt[0],Ht=s.convert(S.format,S.colorSpace),qt=s.convert(S.type),se=M(S.internalFormat,Ht,qt,S.normalized,S.colorSpace),V=S.isVideoTexture!==!0,yt=ut.__version===void 0||X===!0,st=K.dataReady,_t=b(S,vt);Ft(r.TEXTURE_CUBE_MAP,S);let Tt;if(xt){V&&yt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,se,vt.width,vt.height);for(let at=0;at<6;at++){Tt=bt[at].mipmaps;for(let Vt=0;Vt<Tt.length;Vt++){let Nt=Tt[Vt];S.format!==Gi?Ht!==null?V?st&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,0,0,Nt.width,Nt.height,Ht,Nt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,se,Nt.width,Nt.height,0,Nt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,0,0,Nt.width,Nt.height,Ht,qt,Nt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,se,Nt.width,Nt.height,0,Ht,qt,Nt.data)}}}else{if(Tt=S.mipmaps,V&&yt){Tt.length>0&&_t++;let at=Bt(bt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,se,at.width,at.height)}for(let at=0;at<6;at++)if(zt){V?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,bt[at].width,bt[at].height,Ht,qt,bt[at].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,se,bt[at].width,bt[at].height,0,Ht,qt,bt[at].data);for(let Vt=0;Vt<Tt.length;Vt++){let Ie=Tt[Vt].image[at].image;V?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,0,0,Ie.width,Ie.height,Ht,qt,Ie.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,se,Ie.width,Ie.height,0,Ht,qt,Ie.data)}}else{V?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ht,qt,bt[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,se,Ht,qt,bt[at]);for(let Vt=0;Vt<Tt.length;Vt++){let Nt=Tt[Vt];V?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,0,0,Ht,qt,Nt.image[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,se,Ht,qt,Nt.image[at])}}}p(S)&&v(r.TEXTURE_CUBE_MAP),ut.__version=K.version,S.onUpdate&&S.onUpdate(S)}k.__version=S.version}function ct(k,S,G,X,K,ut){let gt=s.convert(G.format,G.colorSpace),it=s.convert(G.type),nt=M(G.internalFormat,gt,it,G.normalized,G.colorSpace),xt=i.get(S),zt=i.get(G);if(zt.__renderTarget=S,!xt.__hasExternalTextures){let bt=Math.max(1,S.width>>ut),vt=Math.max(1,S.height>>ut);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?e.texImage3D(K,ut,nt,bt,vt,S.depth,0,gt,it,null):e.texImage2D(K,ut,nt,bt,vt,0,gt,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,k),ht(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,K,zt.__webglTexture,0,et(S)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,K,zt.__webglTexture,ut),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(k,S,G){if(r.bindRenderbuffer(r.RENDERBUFFER,k),S.depthBuffer){let X=S.depthTexture,K=X&&X.isDepthTexture?X.type:null,ut=y(S.stencilBuffer,K),gt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ht(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et(S),ut,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,et(S),ut,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ut,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,k)}else{let X=S.textures;for(let K=0;K<X.length;K++){let ut=X[K],gt=s.convert(ut.format,ut.colorSpace),it=s.convert(ut.type),nt=M(ut.internalFormat,gt,it,ut.normalized,ut.colorSpace);ht(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et(S),nt,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,et(S),nt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,nt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ce(k,S,G){let X=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,k),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Ft(r.TEXTURE_CUBE_MAP,S.depthTexture);let xt=s.convert(S.depthTexture.format),zt=s.convert(S.depthTexture.type),bt;S.depthTexture.format===pn?bt=r.DEPTH_COMPONENT24:S.depthTexture.format===hs&&(bt=r.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,bt,S.width,S.height,0,xt,zt,null)}}else j(S.depthTexture,0);let ut=K.__webglTexture,gt=et(S),it=X?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,nt=S.depthTexture.format===hs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===pn)ht(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,it,ut,0,gt):r.framebufferTexture2D(r.FRAMEBUFFER,nt,it,ut,0);else if(S.depthTexture.format===hs)ht(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,it,ut,0,gt):r.framebufferTexture2D(r.FRAMEBUFFER,nt,it,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(k){let S=i.get(k),G=k.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==k.depthTexture){let X=k.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=X}if(k.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let X=0;X<6;X++)ce(S.__webglFramebuffer[X],k,X);else{let X=k.texture.mipmaps;X&&X.length>0?ce(S.__webglFramebuffer[0],k,0):ce(S.__webglFramebuffer,k,0)}else if(G){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=r.createRenderbuffer(),Rt(S.__webglDepthbuffer[X],k,!1);else{let K=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,ut)}}else{let X=k.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Rt(S.__webglDepthbuffer,k,!1);else{let K=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,ut)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function ne(k,S,G){let X=i.get(k);S!==void 0&&ct(X.__webglFramebuffer,k,k.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Kt(k)}function pe(k){let S=k.texture,G=i.get(k),X=i.get(S);k.addEventListener("dispose",_);let K=k.textures,ut=k.isWebGLCubeRenderTarget===!0,gt=K.length>1;if(gt||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=S.version,a.memory.textures++),ut){G.__webglFramebuffer=[];for(let it=0;it<6;it++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[it]=[];for(let nt=0;nt<S.mipmaps.length;nt++)G.__webglFramebuffer[it][nt]=r.createFramebuffer()}else G.__webglFramebuffer[it]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let it=0;it<S.mipmaps.length;it++)G.__webglFramebuffer[it]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(gt)for(let it=0,nt=K.length;it<nt;it++){let xt=i.get(K[it]);xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture(),a.memory.textures++)}if(k.samples>0&&ht(k)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let it=0;it<K.length;it++){let nt=K[it];G.__webglColorRenderbuffer[it]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[it]);let xt=s.convert(nt.format,nt.colorSpace),zt=s.convert(nt.type),bt=M(nt.internalFormat,xt,zt,nt.normalized,nt.colorSpace,k.isXRRenderTarget===!0),vt=et(k);r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,bt,k.width,k.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,G.__webglColorRenderbuffer[it])}r.bindRenderbuffer(r.RENDERBUFFER,null),k.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Rt(G.__webglDepthRenderbuffer,k,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),Ft(r.TEXTURE_CUBE_MAP,S);for(let it=0;it<6;it++)if(S.mipmaps&&S.mipmaps.length>0)for(let nt=0;nt<S.mipmaps.length;nt++)ct(G.__webglFramebuffer[it][nt],k,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,nt);else ct(G.__webglFramebuffer[it],k,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(S)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let it=0,nt=K.length;it<nt;it++){let xt=K[it],zt=i.get(xt),bt=r.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(bt=k.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(bt,zt.__webglTexture),Ft(bt,xt),ct(G.__webglFramebuffer,k,xt,r.COLOR_ATTACHMENT0+it,bt,0),p(xt)&&v(bt)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(it=k.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(it,X.__webglTexture),Ft(it,S),S.mipmaps&&S.mipmaps.length>0)for(let nt=0;nt<S.mipmaps.length;nt++)ct(G.__webglFramebuffer[nt],k,S,r.COLOR_ATTACHMENT0,it,nt);else ct(G.__webglFramebuffer,k,S,r.COLOR_ATTACHMENT0,it,0);p(S)&&v(it),e.unbindTexture()}k.depthBuffer&&Kt(k)}function Qt(k){let S=k.textures;for(let G=0,X=S.length;G<X;G++){let K=S[G];if(p(K)){let ut=w(k),gt=i.get(K).__webglTexture;e.bindTexture(ut,gt),v(ut),e.unbindTexture()}}}let Gt=[],W=[];function tt(k){if(k.samples>0){if(ht(k)===!1){let S=k.textures,G=k.width,X=k.height,K=r.COLOR_BUFFER_BIT,ut=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=i.get(k),it=S.length>1;if(it)for(let xt=0;xt<S.length;xt++)e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let nt=k.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),it){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);let zt=i.get(S[xt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,zt,0)}r.blitFramebuffer(0,0,G,X,0,0,G,X,K,r.NEAREST),l===!0&&(Gt.length=0,W.length=0,Gt.push(r.COLOR_ATTACHMENT0+xt),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(Gt.push(ut),W.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,W)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),it)for(let xt=0;xt<S.length;xt++){e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);let zt=i.get(S[xt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&l){let S=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function et(k){return Math.min(n.maxSamples,k.samples)}function ht(k){let S=i.get(k);return k.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function N(k){let S=a.render.frame;h.get(k)!==S&&(h.set(k,S),k.update())}function Ut(k,S){let G=k.colorSpace,X=k.format,K=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||G!==sa&&G!==on&&(he.getTransfer(G)===Me?(X!==Gi||K!==gi)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",G)),S}function Bt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.getTextureUnits=I,this.setTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=O,this.setTextureCube=Q,this.rebindTextures=ne,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Hy(r,t){function e(i,n=on){let s,a=he.getTransfer(n);if(i===gi)return r.UNSIGNED_BYTE;if(i===xl)return r.UNSIGNED_SHORT_4_4_4_4;if(i===vl)return r.UNSIGNED_SHORT_5_5_5_1;if(i===jh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===tu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jh)return r.BYTE;if(i===Qh)return r.SHORT;if(i===_r)return r.UNSIGNED_SHORT;if(i===gl)return r.INT;if(i===an)return r.UNSIGNED_INT;if(i===Vi)return r.FLOAT;if(i===Ye)return r.HALF_FLOAT;if(i===eu)return r.ALPHA;if(i===iu)return r.RGB;if(i===Gi)return r.RGBA;if(i===pn)return r.DEPTH_COMPONENT;if(i===hs)return r.DEPTH_STENCIL;if(i===Mr)return r.RED;if(i===yl)return r.RED_INTEGER;if(i===us)return r.RG;if(i===_l)return r.RG_INTEGER;if(i===bl)return r.RGBA_INTEGER;if(i===Da||i===Ua||i===Na||i===Fa)if(a===Me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ua)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Na)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===wl||i===Sl||i===Tl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===El||i===Al||i===Rl||i===Cl||i===Pl||i===Ba||i===Il)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===El||i===Al)return a===Me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rl)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Cl)return s.COMPRESSED_R11_EAC;if(i===Pl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ba)return s.COMPRESSED_RG11_EAC;if(i===Il)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ll||i===kl||i===Dl||i===Ul||i===Nl||i===Fl||i===Bl||i===Ol||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ll)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kl)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dl)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ul)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nl)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fl)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bl)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ol)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zl)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hl)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vl)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gl)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wl)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xl)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ql||i===Yl||i===Zl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ql)return a===Me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$l||i===Kl||i===Oa||i===Jl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===$l)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===br?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var Vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new xa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new xe({vertexShader:Vy,fragmentShader:Gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new zi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ru=class extends mn{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Au,p={},v=e.getContextAttributes(),w=null,M=null,y=[],b=[],C=new Pt,_=null,R=null,T=new fi;T.viewport=new Oe;let E=new fi;E.viewport=new Oe;let P=[T,E],L=new hl,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let $=y[F];return $===void 0&&($=new pr,y[F]=$),$.getTargetRaySpace()},this.getControllerGrip=function(F){let $=y[F];return $===void 0&&($=new pr,y[F]=$),$.getGripSpace()},this.getHand=function(F){let $=y[F];return $===void 0&&($=new pr,y[F]=$),$.getHandSpace()};function B(F){let $=b.indexOf(F.inputSource);if($===-1)return;let lt=y[$];lt!==void 0&&(lt.update(F.inputSource,F.frame,c||a),lt.dispatchEvent({type:F.type,data:F.inputSource}))}function z(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",j);for(let F=0;F<y.length;F++){let $=b[F];$!==null&&(b[F]=null,y[F].disconnect($))}I=null,U=null,m.reset();for(let F in p)delete p[F];if(t.setRenderTarget(w),f=null,d=null,u=null,n=null,M=null,rt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),R!==null){let F=R.camera;F.fov=R.fov,F.zoom=R.zoom,F.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(w=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",z),n.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,Et=null,ct=null;v.depth&&(ct=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=v.stencil?hs:pn,Et=v.stencil?br:an);let Rt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Rt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ze(d.textureWidth,d.textureHeight,{format:Gi,type:gi,depthTexture:new is(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let lt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,lt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ze(f.framebufferWidth,f.framebufferHeight,{format:Gi,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),rt.setContext(n),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(F){for(let $=0;$<F.removed.length;$++){let lt=F.removed[$],Et=b.indexOf(lt);Et>=0&&(b[Et]=null,y[Et].disconnect(lt))}for(let $=0;$<F.added.length;$++){let lt=F.added[$],Et=b.indexOf(lt);if(Et===-1){for(let Rt=0;Rt<y.length;Rt++)if(Rt>=b.length){b.push(lt),Et=Rt;break}else if(b[Rt]===null){b[Rt]=lt,Et=Rt;break}if(Et===-1)break}let ct=y[Et];ct&&ct.connect(lt)}}let Z=new D,O=new D;function Q(F,$,lt){Z.setFromMatrixPosition($.matrixWorld),O.setFromMatrixPosition(lt.matrixWorld);let Et=Z.distanceTo(O),ct=$.projectionMatrix.elements,Rt=lt.projectionMatrix.elements,ce=ct[14]/(ct[10]-1),Kt=ct[14]/(ct[10]+1),ne=(ct[9]+1)/ct[5],pe=(ct[9]-1)/ct[5],Qt=(ct[8]-1)/ct[0],Gt=(Rt[8]+1)/Rt[0],W=ce*Qt,tt=ce*Gt,et=Et/(-Qt+Gt),ht=et*-Qt;if($.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(ht),F.translateZ(et),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),ct[10]===-1)F.projectionMatrix.copy($.projectionMatrix),F.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let N=ce+et,Ut=Kt+et,Bt=W-ht,k=tt+(Et-ht),S=ne*Kt/Ut*N,G=pe*Kt/Ut*N;F.projectionMatrix.makePerspective(Bt,k,S,G,N,Ut),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function pt(F,$){$===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices($.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;let $=F.near,lt=F.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(lt=m.depthFar)),L.near=E.near=T.near=$,L.far=E.far=T.far=lt,(I!==L.near||U!==L.far)&&(n.updateRenderState({depthNear:L.near,depthFar:L.far}),I=L.near,U=L.far),L.layers.mask=F.layers.mask|6,T.layers.mask=L.layers.mask&-5,E.layers.mask=L.layers.mask&-3;let Et=F.parent,ct=L.cameras;pt(L,Et);for(let Rt=0;Rt<ct.length;Rt++)pt(ct[Rt],Et);ct.length===2?Q(L,T,E):L.projectionMatrix.copy(T.projectionMatrix),R===null&&F.isPerspectiveCamera&&(R={camera:F,fov:F.fov,zoom:F.zoom}),mt(F,L,Et)};function mt(F,$,lt){lt===null?F.matrix.copy($.matrixWorld):(F.matrix.copy(lt.matrixWorld),F.matrix.invert(),F.matrix.multiply($.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy($.projectionMatrix),F.projectionMatrixInverse.copy($.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Go*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(F){return p[F]};let Xt=null;function Ft(F,$){if(h=$.getViewerPose(c||a),g=$,h!==null){let lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Et=!1;lt.length!==L.cameras.length&&(L.cameras.length=0,Et=!0);for(let Kt=0;Kt<lt.length;Kt++){let ne=lt[Kt],pe=null;if(f!==null)pe=f.getViewport(ne);else{let Gt=u.getViewSubImage(d,ne);pe=Gt.viewport,Kt===0&&(t.setRenderTargetTextures(M,Gt.colorTexture,Gt.depthStencilTexture),t.setRenderTarget(M))}let Qt=P[Kt];Qt===void 0&&(Qt=new fi,Qt.layers.enable(Kt),Qt.viewport=new Oe,P[Kt]=Qt),Qt.matrix.fromArray(ne.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(ne.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(pe.x,pe.y,pe.width,pe.height),Kt===0&&(L.matrix.copy(Qt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Et===!0&&L.cameras.push(Qt)}let ct=n.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let Kt=u.getDepthInformation(lt[0]);Kt&&Kt.isValid&&Kt.texture&&m.init(Kt,n.renderState)}if(ct&&ct.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let Kt=0;Kt<lt.length;Kt++){let ne=lt[Kt].camera;if(ne){let pe=p[ne];pe||(pe=new xa,p[ne]=pe);let Qt=u.getCameraImage(ne);pe.sourceTexture=Qt}}}}for(let lt=0;lt<y.length;lt++){let Et=b[lt],ct=y[lt];Et!==null&&ct!==void 0&&ct.update(Et,$,c||a)}Xt&&Xt(F,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let rt=new Gf;rt.setAnimationLoop(Ft),this.setAnimationLoop=function(F){Xt=F},this.dispose=function(){}}},Wy=new re,$f=new jt;$f.set(-1,0,0,0,1,0,0,0,1);function Xy(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ru(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,w,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ci&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ci&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),w=v.envMap,M=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Wy.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($f),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ci&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function qy(r,t,e,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){let b=y.program;i.uniformBlockBinding(M,b)}function c(M,y){let b=n[M.id];b===void 0&&(m(M),b=h(M),n[M.id]=b,M.addEventListener("dispose",v));let C=y.program;i.updateUBOMapping(M,C);let _=t.render.frame;s[M.id]!==_&&(d(M),s[M.id]=_)}function h(M){let y=u();M.__bindingPointIndex=y;let b=r.createBuffer(),C=M.__size,_=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,C,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,b),b}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let y=n[M.id],b=M.uniforms,C=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let _=0,R=b.length;_<R;_++){let T=b[_];if(Array.isArray(T))for(let E=0,P=T.length;E<P;E++)f(T[E],_,E,C);else f(T,_,0,C)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,y,b,C){if(x(M,y,b,C)===!0){let _=M.__offset,R=M.value;if(Array.isArray(R)){let T=0;for(let E=0;E<R.length;E++){let P=R[E],L=p(P);g(P,M.__data,T),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(T+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,M.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,_,M.__data)}}function g(M,y,b){typeof M=="number"||typeof M=="boolean"?y[0]=M:M.isMatrix3?(y[0]=M.elements[0],y[1]=M.elements[1],y[2]=M.elements[2],y[3]=0,y[4]=M.elements[3],y[5]=M.elements[4],y[6]=M.elements[5],y[7]=0,y[8]=M.elements[6],y[9]=M.elements[7],y[10]=M.elements[8],y[11]=0):ArrayBuffer.isView(M)?y.set(new M.constructor(M.buffer,M.byteOffset,y.length)):M.toArray(y,b)}function x(M,y,b,C){let _=M.value,R=y+"_"+b;if(C[R]===void 0)return typeof _=="number"||typeof _=="boolean"?C[R]=_:ArrayBuffer.isView(_)?C[R]=_.slice():C[R]=_.clone(),!0;{let T=C[R];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return C[R]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function m(M){let y=M.uniforms,b=0,C=16;for(let R=0,T=y.length;R<T;R++){let E=Array.isArray(y[R])?y[R]:[y[R]];for(let P=0,L=E.length;P<L;P++){let I=E[P],U=Array.isArray(I.value)?I.value:[I.value];for(let B=0,z=U.length;B<z;B++){let j=U[B],Z=p(j),O=b%C,Q=O%Z.boundary,pt=O+Q;b+=Q,pt!==0&&C-pt<Z.storage&&(b+=C-pt),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=Z.storage}}}let _=b%C;return _>0&&(b+=C-_),M.__size=b,M.__cache={},this}function p(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",M),y}function v(M){let y=M.target;y.removeEventListener("dispose",v);let b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(n[y.id]),delete n[y.id],delete s[y.id]}function w(){for(let M in n)r.deleteBuffer(n[M]);a=[],n={},s={}}return{bind:l,update:c,dispose:w}}var Yy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_n=null;function Zy(){return _n===null&&(_n=new Ts(Yy,16,16,us,Ye),_n.name="DFG_LUT",_n.minFilter=Qe,_n.magFilter=Qe,_n.wrapS=pi,_n.wrapT=pi,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}var rc=class{constructor(t={}){let{canvas:e=pf(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=gi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let x=f,m=new Set([bl,_l,yl]),p=new Set([gi,an,_r,br,xl,vl]),v=new Uint32Array(4),w=new Int32Array(4),M=new D,y=null,b=null,C=[],_=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,P=null,L=null,I=null,U=null;this._outputColorSpace=He;let B=0,z=0,j=null,Z=-1,O=null,Q=new Oe,pt=new Oe,mt=null,Xt=new ot(0),Ft=0,rt=e.width,F=e.height,$=1,lt=null,Et=null,ct=new Oe(0,0,rt,F),Rt=new Oe(0,0,rt,F),ce=!1,Kt=new xr,ne=!1,pe=!1,Qt=new re,Gt=new D,W=new Oe,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function ht(){return j===null?$:1}let N=i;function Ut(A,H){return e.getContext(A,H)}let Bt,k,S,G,X,K,ut,gt,it,nt,xt,zt,bt,vt,Ht,qt,se,V,yt,st,_t,Tt,at;try{let A={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",$i,!1),N===null){let H="webgl2";if(N=Ut(H,A),N===null)throw Ut(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(A){throw e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",$i,!1),$t("WebGLRenderer: "+A.message),A}function Vt(){Bt=new ev(N),Bt.init(),_t=new Hy(N,Bt),k=new Xx(N,Bt,t,_t),S=new Oy(N,Bt),k.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),L=N.createFramebuffer(),I=N.createFramebuffer(),U=N.createFramebuffer(),G=new sv(N),X=new Ty,K=new zy(N,Bt,S,X,k,_t,G),ut=new tv(T),gt=new am(N),Tt=new Gx(N,gt),it=new iv(N,gt,G,Tt),nt=new av(N,it,gt,Tt,G),V=new rv(N,k,K),Ht=new qx(X),xt=new Sy(T,ut,Bt,k,Tt,Ht),zt=new Xy(T,X),bt=new Ay,vt=new ky(Bt),se=new Vx(T,ut,S,nt,g,l),qt=new By(T,nt,k),at=new qy(N,G,k,S),yt=new Wx(N,Bt,G),st=new nv(N,Bt,G),G.programs=xt.programs,T.capabilities=k,T.extensions=Bt,T.properties=X,T.renderLists=bt,T.shadowMap=qt,T.state=S,T.info=G}x!==gi&&(R=new lv(x,e.width,e.height,o,n,s));let Nt=new Ru(T,N);this.xr=Nt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=Bt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Bt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(rt,F,!1))},this.getSize=function(A){return A.set(rt,F)},this.setSize=function(A,H,J=!0){if(Nt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=A,F=H,e.width=Math.floor(A*$),e.height=Math.floor(H*$),J===!0&&(e.style.width=A+"px",e.style.height=H+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(rt*$,F*$).floor()},this.setDrawingBufferSize=function(A,H,J){rt=A,F=H,$=J,e.width=Math.floor(A*J),e.height=Math.floor(H*J),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(x===gi){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Q)},this.getViewport=function(A){return A.copy(ct)},this.setViewport=function(A,H,J,q){A.isVector4?ct.set(A.x,A.y,A.z,A.w):ct.set(A,H,J,q),S.viewport(Q.copy(ct).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(Rt)},this.setScissor=function(A,H,J,q){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,H,J,q),S.scissor(pt.copy(Rt).multiplyScalar($).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(A){S.setScissorTest(ce=A)},this.setOpaqueSort=function(A){lt=A},this.setTransparentSort=function(A){Et=A},this.getClearColor=function(A){return A.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,J=!0){let q=0;if(A){let Y=!1;if(j!==null){let St=j.texture.format;Y=m.has(St)}if(Y){let St=j.texture.type,Ct=p.has(St),wt=se.getClearColor(),Lt=se.getClearAlpha(),Ot=wt.r,ae=wt.g,ue=wt.b;Ct?(v[0]=Ot,v[1]=ae,v[2]=ue,v[3]=Lt,N.clearBufferuiv(N.COLOR,0,v)):(w[0]=Ot,w[1]=ae,w[2]=ue,w[3]=Lt,N.clearBufferiv(N.COLOR,0,w))}else q|=N.COLOR_BUFFER_BIT}H&&(q|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),P=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",$i,!1),se.dispose(),bt.dispose(),vt.dispose(),X.dispose(),ut.dispose(),nt.dispose(),Tt.dispose(),at.dispose(),xt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Qu),Nt.removeEventListener("sessionend",ju),vs.stop()};function Ie(A){A.preventDefault(),oa("WebGLRenderer: Context Lost."),E=!0}function Se(){oa("WebGLRenderer: Context Restored."),E=!1;let A=G.autoReset,H=qt.enabled,J=qt.autoUpdate,q=qt.needsUpdate,Y=qt.type;Vt(),G.autoReset=A,qt.enabled=H,qt.autoUpdate=J,qt.needsUpdate=q,qt.type=Y}function $i(A){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function hn(A){let H=A.target;H.removeEventListener("dispose",hn),c0(H)}function c0(A){h0(A),X.remove(A)}function h0(A){let H=X.get(A).programs;H!==void 0&&(H.forEach(function(J){xt.releaseProgram(J)}),A.isShaderMaterial&&xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,J,q,Y,St){H===null&&(H=tt);let Ct=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,wt=f0(A,H,J,q,Y);S.setMaterial(q,Ct);let Lt=J.index,Ot=1;if(q.wireframe===!0){if(Lt=it.getWireframeAttribute(J),Lt===void 0)return;Ot=2}let ae=J.drawRange,ue=J.attributes.position,kt=ae.start*Ot,Te=(ae.start+ae.count)*Ot;St!==null&&(kt=Math.max(kt,St.start*Ot),Te=Math.min(Te,(St.start+St.count)*Ot)),Lt!==null?(kt=Math.max(kt,0),Te=Math.min(Te,Lt.count)):ue!=null&&(kt=Math.max(kt,0),Te=Math.min(Te,ue.count));let $e=Te-kt;if($e<0||$e===1/0)return;Tt.setup(Y,q,wt,J,Lt);let ke,Pe=yt;if(Lt!==null&&(ke=gt.get(Lt),Pe=st,Pe.setIndex(ke)),Y.isMesh)q.wireframe===!0?(S.setLineWidth(q.wireframeLinewidth*ht()),Pe.setMode(N.LINES)):Pe.setMode(N.TRIANGLES);else if(Y.isLine){let hi=q.linewidth;hi===void 0&&(hi=1),S.setLineWidth(hi*ht()),Y.isLineSegments?Pe.setMode(N.LINES):Y.isLineLoop?Pe.setMode(N.LINE_LOOP):Pe.setMode(N.LINE_STRIP)}else Y.isPoints?Pe.setMode(N.POINTS):Y.isSprite&&Pe.setMode(N.TRIANGLES);if(Y.isBatchedMesh)if(Bt.get("WEBGL_multi_draw"))Pe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let hi=Y._multiDrawStarts,At=Y._multiDrawCounts,yi=Y._multiDrawCount,ye=Lt?gt.get(Lt).bytesPerElement:1,Ni=X.get(q).currentProgram.getUniforms();for(let un=0;un<yi;un++)Ni.setValue(N,"_gl_DrawID",un),Pe.render(hi[un]/ye,At[un])}else if(Y.isInstancedMesh)Pe.renderInstances(kt,$e,Y.count);else if(J.isInstancedBufferGeometry){let hi=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,At=Math.min(J.instanceCount,hi);Pe.renderInstances(kt,$e,At)}else Pe.render(kt,$e)};function Ju(A,H,J,q){P!==null&&A.isNodeMaterial&&P.setObject(q,A),ne===!0&&Ht.setState(A,J,!1),A.transparent===!0&&A.side===Fe&&A.forceSinglePass===!1?(A.side=ci,A.needsUpdate=!0,ro(A,H,q),A.side=sn,A.needsUpdate=!0,ro(A,H,q),A.side=Fe):ro(A,H,q)}this.compile=function(A,H,J=null){J===null&&(J=A),P!==null&&P.renderStart(A,H,J),b=vt.get(J),b.init(H),_.push(b),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),A!==J&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights(),P!==null&&P.updateLights(b.state.lightsArray),pe=this.localClippingEnabled,ne=Ht.init(this.clippingPlanes,pe),ne===!0&&Ht.setGlobalState(this.clippingPlanes,H),P!==null&&qt.render(b.state.shadowsArray,J,H);let q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let St=Y.material;if(St)if(Array.isArray(St))for(let Ct=0;Ct<St.length;Ct++){let wt=St[Ct];Ju(wt,J,H,Y),q.add(wt)}else Ju(St,J,H,Y),q.add(St)}),b=_.pop(),P!==null&&P.renderEnd(),q},this.compileAsync=function(A,H,J=null){let q=this.compile(A,H,J);return new Promise(Y=>{function St(){if(q.forEach(function(Ct){let Lt=X.get(Ct).currentProgram;(Lt===void 0||Lt.isReady())&&q.delete(Ct)}),q.size===0){Y(A);return}setTimeout(St,10)}Bt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let uh=null;function u0(A){uh&&uh(A)}function Qu(){vs.stop()}function ju(){vs.start()}let vs=new Gf;vs.setAnimationLoop(u0),typeof self<"u"&&vs.setContext(self),this.setAnimationLoop=function(A){uh=A,Nt.setAnimationLoop(A),A===null?vs.stop():vs.start()},Nt.addEventListener("sessionstart",Qu),Nt.addEventListener("sessionend",ju),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;P!==null&&P.renderStart(A,H);let J=Nt.enabled===!0&&Nt.isPresenting===!0,q=R!==null&&(j===null||J)&&R.begin(T,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(H),H=Nt.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,H,j),b=vt.get(A,_.length),b.init(H),b.state.textureUnits=K.getTextureUnits(),_.push(b),Qt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Kt.setFromProjectionMatrix(Qt,tn,H.reversedDepth),pe=this.localClippingEnabled,ne=Ht.init(this.clippingPlanes,pe),y=bt.get(A,C.length),y.init(),C.push(y),Nt.enabled===!0&&Nt.isPresenting===!0){let Ct=T.xr.getDepthSensingMesh();Ct!==null&&dh(Ct,H,-1/0,T.sortObjects)}dh(A,H,0,T.sortObjects),y.finish(),P!==null&&P.updateLights(b.state.lightsArray),T.sortObjects===!0&&y.sort(lt,Et),et=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,et&&se.addToRenderList(y,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&Ht.beginShadows();let Y=b.state.shadowsArray;if(qt.render(Y,A,H),ne===!0&&Ht.endShadows(),(q&&R.hasRenderPass())===!1){let Ct=y.opaque,wt=y.transmissive;if(b.setupLights(),H.isArrayCamera){let Lt=H.cameras;if(wt.length>0)for(let Ot=0,ae=Lt.length;Ot<ae;Ot++){let ue=Lt[Ot];ed(Ct,wt,A,ue)}et&&se.render(A);for(let Ot=0,ae=Lt.length;Ot<ae;Ot++){let ue=Lt[Ot];td(y,A,ue,ue.viewport)}}else wt.length>0&&ed(Ct,wt,A,H),et&&se.render(A),td(y,A,H)}j!==null&&z===0&&(K.updateMultisampleRenderTarget(j),K.updateRenderTargetMipmap(j)),q&&R.end(T),A.isScene===!0&&A.onAfterRender(T,A,H),Tt.resetDefaultState(),Z=-1,O=null,_.pop(),_.length>0?(b=_[_.length-1],K.setTextureUnits(b.state.textureUnits),ne===!0&&Ht.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?y=C[C.length-1]:y=null,P!==null&&P.renderEnd()};function dh(A,H,J,q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Kt)){q&&W.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Qt);let Ct=nt.update(A),wt=A.material;wt.visible&&y.push(A,Ct,wt,J,W.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Kt))){let Ct=nt.update(A),wt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),W.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),W.copy(Ct.boundingSphere.center)),W.applyMatrix4(A.matrixWorld).applyMatrix4(Qt)),Array.isArray(wt)){let Lt=Ct.groups;for(let Ot=0,ae=Lt.length;Ot<ae;Ot++){let ue=Lt[Ot],kt=wt[ue.materialIndex];kt&&kt.visible&&y.push(A,Ct,kt,J,W.z,ue,H)}}else wt.visible&&y.push(A,Ct,wt,J,W.z,null,H)}}let St=A.children;for(let Ct=0,wt=St.length;Ct<wt;Ct++)dh(St[Ct],H,J,q)}function td(A,H,J,q){let{opaque:Y,transmissive:St,transparent:Ct}=A;b.setupLightsView(J),ne===!0&&Ht.setGlobalState(T.clippingPlanes,J),q&&S.viewport(Q.copy(q)),Y.length>0&&so(Y,H,J),St.length>0&&so(St,H,J),Ct.length>0&&so(Ct,H,J),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function ed(A,H,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[q.id]===void 0){let kt=Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[q.id]=new ze(1,1,{generateMipmaps:!0,type:kt?Ye:gi,minFilter:yn,samples:Math.max(4,k.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let St=b.state.transmissionRenderTarget[q.id],Ct=q.viewport||Q;St.setSize(Ct.z*T.transmissionResolutionScale,Ct.w*T.transmissionResolutionScale);let wt=T.getRenderTarget(),Lt=T.getActiveCubeFace(),Ot=T.getActiveMipmapLevel();T.setRenderTarget(St),T.getClearColor(Xt),Ft=T.getClearAlpha(),Ft<1&&T.setClearColor(16777215,.5),T.clear(),et&&se.render(J);let ae=T.toneMapping;T.toneMapping=rn;let ue=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),b.setupLightsView(q),ne===!0&&Ht.setGlobalState(T.clippingPlanes,q),so(A,J,q),K.updateMultisampleRenderTarget(St),K.updateRenderTargetMipmap(St),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Te=0,$e=H.length;Te<$e;Te++){let ke=H[Te],{object:Pe,geometry:hi,material:At,group:yi}=ke;if(At.side===Fe&&Pe.layers.test(q.layers)){let ye=At.side;At.side=ci,At.needsUpdate=!0,id(Pe,J,q,hi,At,yi),At.side=ye,At.needsUpdate=!0,kt=!0}}kt===!0&&(K.updateMultisampleRenderTarget(St),K.updateRenderTargetMipmap(St))}T.setRenderTarget(wt,Lt,Ot),T.setClearColor(Xt,Ft),ue!==void 0&&(q.viewport=ue),T.toneMapping=ae}function so(A,H,J){let q=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,St=A.length;Y<St;Y++){let Ct=A[Y],{object:wt,geometry:Lt,group:Ot}=Ct,ae=Ct.material;ae.allowOverride===!0&&q!==null&&(ae=q),wt.layers.test(J.layers)&&id(wt,H,J,Lt,ae,Ot)}}function id(A,H,J,q,Y,St){P!==null&&Y.isNodeMaterial&&P.setObject(A,Y),A.onBeforeRender(T,H,J,q,Y,St),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(T,H,J,q,A,St),Y.transparent===!0&&Y.side===Fe&&Y.forceSinglePass===!1?(Y.side=ci,Y.needsUpdate=!0,T.renderBufferDirect(J,H,q,Y,A,St),Y.side=sn,Y.needsUpdate=!0,T.renderBufferDirect(J,H,q,Y,A,St),Y.side=Fe):T.renderBufferDirect(J,H,q,Y,A,St),A.onAfterRender(T,H,J,q,Y,St)}function ro(A,H,J){H.isScene!==!0&&(H=tt);let q=X.get(A),Y=b.state.lights,St=b.state.shadowsArray,Ct=Y.state.version,wt=xt.getParameters(A,Y.state,St,H,J,b.state.lightProbeGridArray),Lt=xt.getProgramCacheKey(wt),Ot=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;let ae=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=ut.get(A.envMap||q.environment,ae),q.envMapRotation=q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ot===void 0&&(A.addEventListener("dispose",hn),Ot=new Map,q.programs=Ot);let ue=Ot.get(Lt);if(ue!==void 0){if(q.currentProgram===ue&&q.lightsStateVersion===Ct)return sd(A,wt),ue}else wt.uniforms=xt.getUniforms(A),P!==null&&A.isNodeMaterial&&P.build(A,J,wt),A.onBeforeCompile(wt,T),ue=xt.acquireProgram(wt,Lt),Ot.set(Lt,ue),q.uniforms=wt.uniforms;let kt=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Ht.uniform),sd(A,wt),q.needsLights=m0(A),q.lightsStateVersion=Ct,q.needsLights&&(kt.ambientLightColor.value=Y.state.ambient,kt.lightProbe.value=Y.state.probe,kt.sunLights.value=Y.state.sun,kt.sunLightShadows.value=Y.state.sunShadow,kt.directionalLights.value=Y.state.directional,kt.directionalLightShadows.value=Y.state.directionalShadow,kt.spotLights.value=Y.state.spot,kt.spotLightShadows.value=Y.state.spotShadow,kt.rectAreaLights.value=Y.state.rectArea,kt.ltc_1.value=Y.state.rectAreaLTC1,kt.ltc_2.value=Y.state.rectAreaLTC2,kt.pointLights.value=Y.state.point,kt.pointLightShadows.value=Y.state.pointShadow,kt.hemisphereLights.value=Y.state.hemi,kt.sunShadowMatrix.value=Y.state.sunShadowMatrix,kt.sunShadowCascade.value=Y.state.sunShadowCascade,kt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,kt.spotLightMatrix.value=Y.state.spotLightMatrix,kt.spotLightMap.value=Y.state.spotLightMap,kt.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=b.state.lightProbeGridArray.length>0,q.currentProgram=ue,q.uniformsList=null,ue}function nd(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=Tr.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function sd(A,H){let J=X.get(A);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function d0(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;M.setFromMatrixPosition(H.matrixWorld);for(let J=0,q=A.length;J<q;J++){let Y=A[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(M))return Y}return null}function f0(A,H,J,q,Y){H.isScene!==!0&&(H=tt),K.resetTextureUnits();let St=H.fog,Ct=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,wt=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:he.workingColorSpace,Lt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ot=ut.get(q.envMap||Ct,Lt),ae=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ue=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),kt=!!J.morphAttributes.position,Te=!!J.morphAttributes.normal,$e=!!J.morphAttributes.color,ke=rn;q.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ke=T.toneMapping);let Pe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,hi=Pe!==void 0?Pe.length:0,At=X.get(q),yi=b.state.lights;if(ne===!0&&(pe===!0||A!==O)){let Le=A===O&&q.id===Z;Ht.setState(q,A,Le)}let ye=!1;q.version===At.__version?(At.needsLights&&At.lightsStateVersion!==yi.state.version||At.outputColorSpace!==wt||Y.isBatchedMesh&&At.batching===!1||!Y.isBatchedMesh&&At.batching===!0||Y.isBatchedMesh&&At.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&At.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&At.instancing===!1||!Y.isInstancedMesh&&At.instancing===!0||Y.isSkinnedMesh&&At.skinning===!1||!Y.isSkinnedMesh&&At.skinning===!0||Y.isInstancedMesh&&At.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&At.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&At.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&At.instancingMorph===!1&&Y.morphTexture!==null||At.envMap!==Ot||q.fog===!0&&At.fog!==St||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ht.numPlanes||At.numIntersection!==Ht.numIntersection)||At.vertexAlphas!==ae||At.vertexTangents!==ue||At.morphTargets!==kt||At.morphNormals!==Te||At.morphColors!==$e||At.toneMapping!==ke||At.morphTargetsCount!==hi||!!At.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ye=!0):(ye=!0,At.__version=q.version);let Ni=At.currentProgram;ye===!0&&(Ni=ro(q,H,Y),P&&q.isNodeMaterial&&P.onUpdateProgram(q,Ni,At));let un=!1,qn=!1,Gs=!1,Re=Ni.getUniforms(),qe=At.uniforms;if(S.useProgram(Ni.program)&&(un=!0,qn=!0,Gs=!0),q.id!==Z&&(Z=q.id,qn=!0),At.needsLights){let Le=d0(b.state.lightProbeGridArray,Y);At.lightProbeGrid!==Le&&(At.lightProbeGrid=Le,qn=!0)}if(un||O!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Re.setValue(N,"projectionMatrix",A.projectionMatrix),Re.setValue(N,"viewMatrix",A.matrixWorldInverse);let Zn=Re.map.cameraPosition;Zn!==void 0&&Zn.setValue(N,Gt.setFromMatrixPosition(A.matrixWorld)),k.logarithmicDepthBuffer&&Re.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Re.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),O!==A&&(O=A,qn=!0,Gs=!0)}if(At.needsLights&&(yi.state.sunShadowMap.length>0&&Re.setValue(N,"sunShadowMap",yi.state.sunShadowMap,K),yi.state.directionalShadowMap.length>0&&Re.setValue(N,"directionalShadowMap",yi.state.directionalShadowMap,K),yi.state.spotShadowMap.length>0&&Re.setValue(N,"spotShadowMap",yi.state.spotShadowMap,K),yi.state.pointShadowMap.length>0&&Re.setValue(N,"pointShadowMap",yi.state.pointShadowMap,K)),Y.isSkinnedMesh){Re.setOptional(N,Y,"bindMatrix"),Re.setOptional(N,Y,"bindMatrixInverse");let Le=Y.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Re.setValue(N,"boneTexture",Le.boneTexture,K))}Y.isBatchedMesh&&(Re.setOptional(N,Y,"batchingTexture"),Re.setValue(N,"batchingTexture",Y._matricesTexture,K),Re.setOptional(N,Y,"batchingIdTexture"),Re.setValue(N,"batchingIdTexture",Y._indirectTexture,K),Re.setOptional(N,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Re.setValue(N,"batchingColorTexture",Y._colorsTexture,K));let Yn=J.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&V.update(Y,J,Ni),(qn||At.receiveShadow!==Y.receiveShadow)&&(At.receiveShadow=Y.receiveShadow,Re.setValue(N,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(qe.envMapIntensity.value=H.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=Zy()),qn){if(Re.setValue(N,"toneMappingExposure",T.toneMappingExposure),At.needsLights&&p0(qe,Gs),St&&q.fog===!0&&zt.refreshFogUniforms(qe,St),zt.refreshMaterialUniforms(qe,q,$,F,b.state.transmissionRenderTarget[A.id]),At.needsLights&&At.lightProbeGrid){let Le=At.lightProbeGrid;qe.probesSH.value=Le.texture,qe.probesMin.value.copy(Le.boundingBox.min),qe.probesMax.value.copy(Le.boundingBox.max),qe.probesResolution.value.copy(Le.resolution)}Tr.upload(N,nd(At),qe,K)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Tr.upload(N,nd(At),qe,K),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Re.setValue(N,"center",Y.center),Re.setValue(N,"modelViewMatrix",Y.modelViewMatrix),Re.setValue(N,"normalMatrix",Y.normalMatrix),Re.setValue(N,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Le=q.uniformsGroups;for(let Zn=0,Ws=Le.length;Zn<Ws;Zn++){let ad=Le[Zn];at.update(ad,Ni),at.bind(ad,Ni)}}return Ni}function p0(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function m0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,H,J){let q=X.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),X.get(A.texture).__webglTexture=H,X.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){let J=X.get(A);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,J=0){j=A,B=H,z=J;let q=null,Y=!1,St=!1;if(A){let wt=X.get(A);if(wt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(N.FRAMEBUFFER,wt.__webglFramebuffer),Q.copy(A.viewport),pt.copy(A.scissor),mt=A.scissorTest,S.viewport(Q),S.scissor(pt),S.setScissorTest(mt),Z=-1;return}else if(wt.__webglFramebuffer===void 0)K.setupRenderTarget(A);else if(wt.__hasExternalTextures)K.rebindTextures(A,X.get(A.texture).__webglTexture,X.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ae=A.depthTexture;if(wt.__boundDepthTexture!==ae){if(ae!==null&&X.has(ae)&&(A.width!==ae.image.width||A.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(A)}}let Lt=A.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(St=!0);let Ot=X.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ot[H])?q=Ot[H][J]:q=Ot[H],Y=!0):A.samples>0&&K.useMultisampledRTT(A)===!1?q=X.get(A).__webglMultisampledFramebuffer:Array.isArray(Ot)?q=Ot[J]:q=Ot,Q.copy(A.viewport),pt.copy(A.scissor),mt=A.scissorTest}else Q.copy(ct).multiplyScalar($).floor(),pt.copy(Rt).multiplyScalar($).floor(),mt=ce;if(J!==0&&(q=L),S.bindFramebuffer(N.FRAMEBUFFER,q)&&S.drawBuffers(A,q),S.viewport(Q),S.scissor(pt),S.setScissorTest(mt),Y){let wt=X.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,wt.__webglTexture,J)}else if(St){let wt=H;for(let Lt=0;Lt<A.textures.length;Lt++){let Ot=X.get(A.textures[Lt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Lt,Ot.__webglTexture,J,wt)}}else if(A!==null&&J!==0){let wt=X.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,wt.__webglTexture,J)}Z=-1};function rd(A){let H=X.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=k.textureFormatReadable(A.format),H.__typeReadable=k.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,J,q,Y,St,Ct,wt=0){if(!(A&&A.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt){S.bindFramebuffer(N.FRAMEBUFFER,Lt);try{let Ot=A.textures[wt],ae=Ot.format,ue=Ot.type;A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+wt);let kt=rd(Ot);if(kt.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-q&&J>=0&&J<=A.height-Y&&N.readPixels(H,J,q,Y,_t.convert(ae),_t.convert(ue),St)}finally{let Ot=j!==null?X.get(j).__webglFramebuffer:null;S.bindFramebuffer(N.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(A,H,J,q,Y,St,Ct,wt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt)if(H>=0&&H<=A.width-q&&J>=0&&J<=A.height-Y){S.bindFramebuffer(N.FRAMEBUFFER,Lt);let Ot=A.textures[wt],ae=Ot.format,ue=Ot.type;A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+wt);let kt=rd(Ot);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Te),N.bufferData(N.PIXEL_PACK_BUFFER,St.byteLength,N.STREAM_READ),N.readPixels(H,J,q,Y,_t.convert(ae),_t.convert(ue),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let $e=j!==null?X.get(j).__webglFramebuffer:null;S.bindFramebuffer(N.FRAMEBUFFER,$e);let ke=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gf(N,ke,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Te),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,St),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Te),N.deleteSync(ke),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,J=0){let q=Math.pow(2,-J),Y=Math.floor(A.image.width*q),St=Math.floor(A.image.height*q),Ct=H!==null?H.x:0,wt=H!==null?H.y:0;K.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,Ct,wt,Y,St),S.unbindTexture()},this.copyTextureToTexture=function(A,H,J=null,q=null,Y=0,St=0){let Ct,wt,Lt,Ot,ae,ue,kt,Te,$e,ke=A.isCompressedTexture?A.mipmaps[St]:A.image;if(J!==null)Ct=J.max.x-J.min.x,wt=J.max.y-J.min.y,Lt=J.isBox3?J.max.z-J.min.z:1,Ot=J.min.x,ae=J.min.y,ue=J.isBox3?J.min.z:0;else{let qe=Math.pow(2,-Y);Ct=Math.floor(ke.width*qe),wt=Math.floor(ke.height*qe),A.isDataArrayTexture?Lt=ke.depth:A.isData3DTexture?Lt=Math.floor(ke.depth*qe):Lt=1,Ot=0,ae=0,ue=0}q!==null?(kt=q.x,Te=q.y,$e=q.z):(kt=0,Te=0,$e=0);let Pe=_t.convert(H.format),hi=_t.convert(H.type),At;H.isData3DTexture?(K.setTexture3D(H,0),At=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(K.setTexture2DArray(H,0),At=N.TEXTURE_2D_ARRAY):(K.setTexture2D(H,0),At=N.TEXTURE_2D),S.activeTexture(N.TEXTURE0),S.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),S.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),S.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);let yi=S.getParameter(N.UNPACK_ROW_LENGTH),ye=S.getParameter(N.UNPACK_IMAGE_HEIGHT),Ni=S.getParameter(N.UNPACK_SKIP_PIXELS),un=S.getParameter(N.UNPACK_SKIP_ROWS),qn=S.getParameter(N.UNPACK_SKIP_IMAGES);S.pixelStorei(N.UNPACK_ROW_LENGTH,ke.width),S.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ke.height),S.pixelStorei(N.UNPACK_SKIP_PIXELS,Ot),S.pixelStorei(N.UNPACK_SKIP_ROWS,ae),S.pixelStorei(N.UNPACK_SKIP_IMAGES,ue);let Gs=A.isDataArrayTexture||A.isData3DTexture,Re=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){let qe=X.get(A),Yn=X.get(H),Le=X.get(qe.__renderTarget),Zn=X.get(Yn.__renderTarget);S.bindFramebuffer(N.READ_FRAMEBUFFER,Le.__webglFramebuffer),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Ws=0;Ws<Lt;Ws++)Gs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(A).__webglTexture,Y,ue+Ws),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(H).__webglTexture,St,$e+Ws)),N.blitFramebuffer(Ot,ae,Ct,wt,kt,Te,Ct,wt,N.DEPTH_BUFFER_BIT,N.NEAREST);S.bindFramebuffer(N.READ_FRAMEBUFFER,null),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||X.has(A)){let qe=X.get(A),Yn=X.get(H);S.bindFramebuffer(N.READ_FRAMEBUFFER,I),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,U);for(let Le=0;Le<Lt;Le++)Gs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,qe.__webglTexture,Y,ue+Le):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,qe.__webglTexture,Y),Re?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Yn.__webglTexture,St,$e+Le):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Yn.__webglTexture,St),Y!==0?N.blitFramebuffer(Ot,ae,Ct,wt,kt,Te,Ct,wt,N.COLOR_BUFFER_BIT,N.NEAREST):Re?N.copyTexSubImage3D(At,St,kt,Te,$e+Le,Ot,ae,Ct,wt):N.copyTexSubImage2D(At,St,kt,Te,Ot,ae,Ct,wt);S.bindFramebuffer(N.READ_FRAMEBUFFER,null),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Re?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(At,St,kt,Te,$e,Ct,wt,Lt,Pe,hi,ke.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(At,St,kt,Te,$e,Ct,wt,Lt,Pe,ke.data):N.texSubImage3D(At,St,kt,Te,$e,Ct,wt,Lt,Pe,hi,ke):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,St,kt,Te,Ct,wt,Pe,hi,ke.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,St,kt,Te,ke.width,ke.height,Pe,ke.data):N.texSubImage2D(N.TEXTURE_2D,St,kt,Te,Ct,wt,Pe,hi,ke);S.pixelStorei(N.UNPACK_ROW_LENGTH,yi),S.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ye),S.pixelStorei(N.UNPACK_SKIP_PIXELS,Ni),S.pixelStorei(N.UNPACK_SKIP_ROWS,un),S.pixelStorei(N.UNPACK_SKIP_IMAGES,qn),St===0&&H.generateMipmaps&&N.generateMipmap(At),S.unbindTexture()},this.initRenderTarget=function(A){X.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?K.setTextureCube(A,0):A.isData3DTexture?K.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?K.setTexture2DArray(A,0):K.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){B=0,z=0,j=null,S.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var Ar={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Li=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},$y=new vn(-1,1,1,-1,0,1),Cu=class extends ge{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}},Ky=new Cu,ds=class{constructor(t){this._mesh=new Dt(Ky,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,$y)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Rr=class extends Li{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=On.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ds(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ga=class extends Li{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},lc=class extends Li{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var cc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new Pt);this._width=i.width,this._height=i.height,e=new ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ye}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rr(Ar),this.copyPass.material.blending=Hi,this.timer=new Ta}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ga!==void 0&&(a instanceof Ga?i=!0:a instanceof lc&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var hc=class extends Li{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ot}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var Kf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Cr=class r extends Li{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new Pt(t.x,t.y):new Pt(256,256),this.clearColor=new ot(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ze(s,a,{type:Ye,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new ze(s,a,{type:Ye,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new ze(s,a,{type:Ye,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}let o=Kf;this.highPassUniforms=On.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Pt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=On.clone(Ar.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:Ar.vertexShader,fragmentShader:Ar.fragmentShader,premultipliedAlpha:!0,blending:Mi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ot,this._oldClearAlpha=1,this._basic=new en,this._fsQuad=new ds(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Pt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let n=[],s=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),s.push(c)}return new xe({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new Pt(.5,.5)},direction:{value:new Pt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Cr.BlurDirectionX=new Pt(1,0);Cr.BlurDirectionY=new Pt(0,1);var Wa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var uc=class extends Li{constructor(){super(),this.isOutputPass=!0,this.uniforms=On.clone(Wa.uniforms),this.material=new vr({name:Wa.name,uniforms:this.uniforms,vertexShader:Wa.vertexShader,fragmentShader:Wa.fragmentShader}),this._fsQuad=new ds(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},he.getTransfer(this._outputColorSpace)===Me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ea?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Aa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ra?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ca?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ia?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Cs?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Pa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ki={horizon:new ot("#bfe4ff"),zenith:new ot("#2f86ea"),sun:new ot("#fff1c9"),sunDir:new D(.52,.66,.42).normalize()},Jy={name:"GradeShader",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uSaturation:{value:1.16},uContrast:{value:1.06},uStorm:{value:0},uDamage:{value:0},uHeal:{value:0},uUnderwater:{value:0},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uVignette, uSaturation, uContrast, uStorm, uDamage, uHeal, uUnderwater, uTime;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec3 col = c.rgb;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSaturation);
      col = (col - 0.18) * uContrast + 0.18;
      col = max(col, 0.0);
      vec2 q = vUv - 0.5;
      float edge = smoothstep(0.22, 0.78, length(q * vec2(1.15, 1.0)));   // 0 centre \u2192 1 corners
      col *= 1.0 - edge * uVignette;
      // storm: desaturate towards violet, pulsing purple edges
      float pulse = 0.85 + 0.15 * sin(uTime * 2.2);
      col = mix(col, vec3(l) * vec3(0.78, 0.5, 1.2), uStorm * 0.32);
      col += vec3(0.38, 0.08, 0.78) * uStorm * (0.08 + edge * 0.55) * pulse;
      // damage flash / heal glow
      col = mix(col, vec3(0.95, 0.04, 0.04), uDamage * (0.12 + edge * 0.65));
      col += vec3(0.1, 0.55, 0.9) * uHeal * edge * 0.25;
      // underwater tint
      col = mix(col, col * vec3(0.35, 0.75, 1.0) + vec3(0.0, 0.05, 0.12), uUnderwater);
      gl_FragColor = vec4(col, c.a);
    }
  `},Pr=class{constructor(t,e={}){this.canvas=t,this.quality=e.quality||"high";let i=new rc({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1});this.renderer=i,this.basePixelRatio=Math.min(window.devicePixelRatio||1,e.maxPixelRatio??1.75),this.renderScale=1,i.outputColorSpace=He,i.toneMapping=Cs,i.toneMappingExposure=1,i.shadowMap.enabled=this.quality!=="low",i.shadowMap.type=As,i.info.autoReset=!1,this.scene=new Ss,this.scene.background=ki.horizon.clone(),this.scene.fog=new ha(ki.horizon.clone(),260,1900),this.fogBase=ki.horizon.clone(),this.fogStorm=new ot("#6a3fb8"),this.camera=new fi(78,1,.08,6e3),this.camera.rotation.order="YXZ",this._buildLights(),this._buildComposer(),this.resize(),window.addEventListener("resize",()=>this.resize())}_buildLights(){let t=this.scene;this.hemi=new Es(13625599,10127960,1.15),t.add(this.hemi),this._indoor={k:0,sky:new ot(13625599),ground:new ot(10127960),skyIn:new ot(16774374),groundIn:new ot(15785920)};let e=new os(16773328,2.75);e.castShadow=this.renderer.shadowMap.enabled;let i=e.shadow;this.shadowSize=this.quality==="high"?2048:1024,i.mapSize.set(this.shadowSize,this.shadowSize),this.shadowExtent=62;let n=this.shadowExtent;i.camera.left=-n,i.camera.right=n,i.camera.top=n,i.camera.bottom=-n,i.camera.near=1,i.camera.far=420,i.bias=-6e-4,i.normalBias=.06,i.radius=2.4,t.add(e,e.target),this.sun=e}_buildComposer(){let t=this.renderer,e=t.getSize(new Pt),i=new ze(e.x,e.y,{type:Ye,samples:this.quality==="low"?0:4});this.composer=new cc(t,i),this.composer.addPass(new hc(this.scene,this.camera)),this.bloom=new Cr(new Pt(e.x,e.y),.32,.65,.92),this.bloom.enabled=this.quality==="high",this.composer.addPass(this.bloom),this.grade=new Rr(Jy),this.composer.addPass(this.grade),this.composer.addPass(new uc),this.post=this.grade.uniforms}resize(){let t=window.innerWidth,e=window.innerHeight,i=this.basePixelRatio*this.renderScale;this.renderer.setPixelRatio(i),this.renderer.setSize(t,e,!1),this.canvas.style.width="100%",this.canvas.style.height="100%",this.composer.setPixelRatio(i),this.composer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}setRenderScale(t){t=Math.max(.5,Math.min(1,t)),!(Math.abs(t-this.renderScale)<.01)&&(this.renderScale=t,this.resize())}setIndoor(t){let e=this._indoor;Math.abs(t-e.k)<.003||(e.k=t,this.hemi.intensity=1.15+.75*t,this.hemi.color.copy(e.sky).lerp(e.skyIn,t),this.hemi.groundColor.copy(e.ground).lerp(e.groundIn,t),this.renderer.toneMappingExposure=1+.06*t)}updateSun(t){let e=this.sun,i=this.shadowExtent*2/this.shadowSize,n=ki.sunDir,s=Math.abs(n.y)>.95?new D(1,0,0):new D(0,1,0),a=new D().crossVectors(s,n).normalize(),o=new D().crossVectors(n,a).normalize(),l=Math.round(t.dot(a)/i)*i,c=Math.round(t.dot(o)/i)*i,h=t.dot(n),u=new D().addScaledVector(a,l).addScaledVector(o,c).addScaledVector(n,h);e.target.position.copy(u),e.position.copy(u).addScaledVector(n,240),e.target.updateMatrixWorld()}render(){this.renderer.info.reset(),this.composer.render()}};var Jf=new Set(["KeyW","KeyA","KeyS","KeyD","Space","ShiftLeft","ShiftRight","KeyC","KeyR","KeyE","KeyQ","KeyF","KeyG","KeyZ","KeyX","KeyV","KeyB","KeyM","KeyT","Tab","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ControlLeft","AltLeft"]),dc=class{constructor(t){this.canvas=t,this.down=new Set,this.pressedNow=new Set,this.releasedNow=new Set,this.mouseDown=[!1,!1,!1],this.mousePressed=[!1,!1,!1],this.lookX=0,this.lookY=0,this.wheel=0,this.locked=!1,this.lockSupported=!!t.requestPointerLock,this.freeLook=!1,this.enabled=!1,this.sensitivity=1,this.invertY=!1,this.onLockChange=null,this.onEscape=null,this.mouseX=0,this.mouseY=0,this._bind()}_bind(){let t=this.canvas;window.addEventListener("keydown",e=>{if(e.repeat){this.enabled&&Jf.has(e.code)&&e.preventDefault();return}this.enabled&&Jf.has(e.code)&&e.preventDefault(),this.down.has(e.code)||this.pressedNow.add(e.code),this.down.add(e.code)}),window.addEventListener("keyup",e=>{this.down.delete(e.code),this.releasedNow.add(e.code)}),window.addEventListener("blur",()=>{this.down.clear(),this.mouseDown.fill(!1)}),window.addEventListener("mousedown",e=>{this.enabled&&(this.locked||this.freeLook||e.target===t)&&(this.mouseDown[e.button]=!0,this.mousePressed[e.button]=!0,e.preventDefault())}),window.addEventListener("mouseup",e=>{this.mouseDown[e.button]=!1}),window.addEventListener("contextmenu",e=>{this.enabled&&e.preventDefault()}),window.addEventListener("mousemove",e=>{this.mouseX=e.clientX,this.mouseY=e.clientY,this.enabled&&(this.locked||this.freeLook)&&(this.lookX+=e.movementX||0,this.lookY+=e.movementY||0)}),window.addEventListener("wheel",e=>{this.enabled&&(this.wheel+=Math.sign(e.deltaY),e.preventDefault())},{passive:!1}),document.addEventListener("pointerlockchange",()=>{let e=this.locked;this.locked=document.pointerLockElement===t,e&&!this.locked&&this.onLockChange?.(!1),!e&&this.locked&&(this.freeLook=!1,this.onLockChange?.(!0))}),document.addEventListener("pointerlockerror",()=>{this.wantLock&&this._tries<3?setTimeout(()=>{this.wantLock&&!this.locked&&this._tryLock()},1150):this.wantLock&&(this.freeLook=!0,this.onLockChange?.(!0))})}_tryLock(){this._tries=(this._tries||0)+1;try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{this.freeLook=!0,this.onLockChange?.(!0)}}requestLock(){if(this.wantLock=!0,this._tries=0,!this.lockSupported){this.freeLook=!0,this.onLockChange?.(!0);return}this.locked||this._tryLock()}exitLock(){this.wantLock=!1,document.pointerLockElement&&document.exitPointerLock()}key(t){return this.down.has(t)}pressed(t){return this.pressedNow.has(t)}released(t){return this.releasedNow.has(t)}mouse(t){return this.mouseDown[t]}mousePress(t){return this.mousePressed[t]}consumeLook(){let t={x:this.lookX,y:this.lookY};return this.lookX=0,this.lookY=0,t}consumeWheel(){let t=this.wheel;return this.wheel=0,t}endFrame(){this.pressedNow.clear(),this.releasedNow.clear(),this.mousePressed.fill(!1)}simulateKey(t,e){e?(this.down.has(t)||this.pressedNow.add(t),this.down.add(t)):(this.down.delete(t),this.releasedNow.add(t))}};var zn=Math.PI*2,Xa=Math.PI/180,Wt=(r,t,e)=>r<t?t:r>e?e:r,le=r=>r<0?0:r>1?1:r,It=(r,t,e)=>r+(t-r)*e;var de=(r,t,e)=>{let i=le((e-r)/(t-r));return i*i*(3-2*i)},fc=(r,t,e)=>{let i=le((e-r)/(t-r));return i*i*i*(i*(i*6-15)+10)},te=(r,t,e,i)=>It(r,t,1-Math.exp(-e*i));var ks=(r,t)=>{let e=(t-r)%zn;return e>Math.PI?e-=zn:e<=-Math.PI&&(e+=zn),e},Mn=(r,t,e,i)=>r+ks(r,t)*(1-Math.exp(-e*i));var Pu=(r,t,e,i)=>{let n=r-e,s=t-i;return n*n+s*s};var pc=r=>(r=Math.max(0,Math.ceil(r)),`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`);var mc=class{constructor(t){this.game=t,this.ctx=null,this.volume=.8,this.muted=!1,this.active=0,this.loops={},this._lastFoot=0}init(){if(this.ctx){this.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t({latencyHint:"interactive"});this.master=e.createGain(),this.master.gain.value=this.muted?0:this.volume;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.knee.value=18,i.ratio.value=4,i.attack.value=.003,i.release.value=.2,this.master.connect(i),i.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=1,this.sfx.connect(this.master),this.amb=e.createGain(),this.amb.gain.value=.55,this.amb.connect(this.master);let n=e.sampleRate;this.noiseBuf=e.createBuffer(1,n*2,n);let s=this.noiseBuf.getChannelData(0);for(let f=0;f<s.length;f++)s[f]=Math.random()*2-1;this.pinkBuf=e.createBuffer(1,n*4,n);let a=this.pinkBuf.getChannelData(0),o=0,l=0,c=0;for(let f=0;f<a.length;f++){let g=Math.random()*2-1;o=.99765*o+g*.099046,l=.963*l+g*.2965164,c=.57*c+g*1.0526913,a[f]=(o+l+c+g*.1848)*.2}this.echo=e.createDelay(1),this.echo.delayTime.value=.23;let h=e.createGain();h.gain.value=.28;let u=e.createBiquadFilter();u.type="lowpass",u.frequency.value=1400,this.echo.connect(u),u.connect(h),h.connect(this.echo);let d=e.createGain();d.gain.value=.35,u.connect(d),d.connect(this.sfx),this.resume()}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{})}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}setVolume(t){this.volume=t,this.master&&this.master.gain.setTargetAtTime(this.muted?0:t,this.ctx.currentTime,.05)}setMuted(t){this.muted=t,this.setVolume(this.volume)}get t(){return this.ctx.currentTime}get ok(){return!!this.ctx&&this.ctx.state==="running"&&this.active<36}_out(t,e,i=0){let n=this.ctx,s=n.createGain();s.gain.value=e;let a=s;if(t&&n.createStereoPanner){let o=n.createStereoPanner();o.pan.value=Wt(t,-1,1),s.connect(o),a=o}if(a.connect(this.sfx),i>0){let o=n.createGain();o.gain.value=i,a.connect(o),o.connect(this.echo)}return s}_track(t,e){return this.active++,t.onended=()=>{this.active--},t}noise({dur:t=.1,f0:e=1500,f1:i=e,q:n=1,type:s="bandpass",gain:a=.5,attack:o=.002,pan:l=0,pink:c=!1,at:h=0,echo:u=0,curve:d=2}){let f=this.ctx,g=this.t+h,x=f.createBufferSource();x.buffer=c?this.pinkBuf:this.noiseBuf,x.loop=!0,x.playbackRate.value=.8+Math.random()*.4;let m=f.createBiquadFilter();m.type=s,m.Q.value=n,m.frequency.setValueAtTime(e,g),m.frequency.exponentialRampToValueAtTime(Math.max(20,i),g+t);let p=this._out(l,0,u);p.gain.setValueAtTime(0,g),p.gain.linearRampToValueAtTime(a,g+o),p.gain.setTargetAtTime(0,g+o,t/(d*1.6)),x.connect(m),m.connect(p),x.start(g,Math.random()*1.5),x.stop(g+t*1.6+.05),this._track(x)}tone({type:t="sine",f0:e=440,f1:i=e,dur:n=.15,gain:s=.3,attack:a=.003,pan:o=0,at:l=0,echo:c=0,vib:h=0}){let u=this.ctx,d=this.t+l,f=u.createOscillator();if(f.type=t,f.frequency.setValueAtTime(e,d),i!==e&&f.frequency.exponentialRampToValueAtTime(Math.max(20,i),d+n),h){let x=u.createOscillator();x.frequency.value=6;let m=u.createGain();m.gain.value=h,x.connect(m),m.connect(f.frequency),x.start(d),x.stop(d+n+.05)}let g=this._out(o,0,c);g.gain.setValueAtTime(0,d),g.gain.linearRampToValueAtTime(s,d+a),g.gain.setTargetAtTime(0,d+a,n/3),f.connect(g),f.start(d),f.stop(d+n*1.5+.05),this._track(f)}spatial(t,e,i,n=10,s=350){let a=this.game.gfx.camera,o=t-a.position.x,l=e-a.position.y,c=i-a.position.z,h=Math.hypot(o,l,c);if(h>s)return null;let u=1/(1+Math.pow(h/n,1.6)),d=this.game.camera.yaw,f=Math.cos(d),g=-Math.sin(d),x=h>.5?(o*f+c*g)/h:0;return{gain:u,pan:x*.85,d:h,far:le(h/220)}}shot(t,e,i){if(!this.ok)return;let n=t.isPlayer,s={gain:1,pan:0,d:0,far:0};if(!n&&(s=this.spatial(i.x,i.y,i.z,14,420),!s))return;let a=s.gain*(n?1:.85),o=s.far,l=s.pan,c=It(9e3,900,o),h=.94+Math.random()*.12;switch(e.sound){case"ar":this.noise({dur:.11,f0:2400*h,f1:500,q:.8,gain:.55*a,pan:l,type:"bandpass"}),this.noise({dur:.02,f0:6500,f1:3e3,q:.5,gain:.35*a,pan:l,type:"highpass"}),this.tone({type:"sine",f0:170*h,f1:55,dur:.09,gain:.55*a,pan:l});break;case"smg":this.noise({dur:.07,f0:3e3*h,f1:900,q:.9,gain:.42*a,pan:l}),this.noise({dur:.015,f0:7e3,f1:3500,q:.5,gain:.25*a,pan:l,type:"highpass"}),this.tone({type:"sine",f0:210*h,f1:80,dur:.06,gain:.35*a,pan:l});break;case"pistol":this.noise({dur:.1,f0:2800*h,f1:700,q:.8,gain:.5*a,pan:l,echo:.1}),this.noise({dur:.02,f0:6e3,f1:2600,q:.5,gain:.3*a,pan:l,type:"highpass"}),this.tone({type:"sine",f0:190*h,f1:70,dur:.08,gain:.45*a,pan:l});break;case"shotgun":this.noise({dur:.34,f0:3400*h,f1:260,q:.6,gain:.85*a,pan:l,type:"lowpass",echo:.25,curve:1.6}),this.noise({dur:.03,f0:5e3,f1:2e3,q:.5,gain:.5*a,pan:l,type:"highpass"}),this.tone({type:"sine",f0:120*h,f1:34,dur:.22,gain:.85*a,pan:l});break;case"sniper":this.noise({dur:.55,f0:4e3,f1:200,q:.5,gain:.95*a,pan:l,type:"lowpass",echo:.5,curve:1.4}),this.noise({dur:.04,f0:7500,f1:2500,q:.5,gain:.7*a,pan:l,type:"highpass"}),this.tone({type:"sine",f0:100*h,f1:28,dur:.34,gain:1*a,pan:l}),this.tone({type:"triangle",f0:1800,f1:600,dur:.12,gain:.25*a,pan:l,echo:.3}),n&&this.noise({dur:.5,f0:900,f1:300,q:1,gain:.12,at:.5,type:"bandpass",pan:0});break;default:break}}dryFire(t){this.ok&&(this.tone({type:"square",f0:900,f1:500,dur:.03,gain:.12}),this.noise({dur:.02,f0:3e3,gain:.15}))}reloadStart(t,e){if(!this.ok)return;let i=t.isPlayer,n={gain:1,pan:0};if(!i&&(n=this.spatial(t.pos.x,t.pos.y,t.pos.z,6,40),!n))return;let s=n.gain*(i?.9:.6),a=n.pan,o=e.reload;if(e.sound==="shotgun"){for(let l=0;l<3;l++)this.noise({dur:.05,f0:1800,f1:900,q:3,gain:.35*s,pan:a,at:o*(.15+l*.2)});this.noise({dur:.08,f0:900,f1:500,q:2,gain:.5*s,pan:a,at:o*.85}),this.tone({type:"square",f0:260,f1:140,dur:.06,gain:.2*s,pan:a,at:o*.85})}else this.noise({dur:.05,f0:2200,f1:1200,q:4,gain:.35*s,pan:a,at:o*.18}),this.tone({type:"square",f0:700,f1:400,dur:.04,gain:.12*s,pan:a,at:o*.18}),this.noise({dur:.06,f0:1600,f1:900,q:4,gain:.45*s,pan:a,at:o*.62}),this.noise({dur:.05,f0:2600,f1:1400,q:3,gain:.4*s,pan:a,at:o*.9}),this.tone({type:"square",f0:520,f1:260,dur:.05,gain:.15*s,pan:a,at:o*.9})}reloadEnd(){}equip(t,e){this.ok&&(this.noise({dur:.09,f0:900,f1:2200,q:1.2,gain:.2}),this.noise({dur:.03,f0:2400,f1:1200,q:4,gain:.25,at:.05}))}swing(t){if(!this.ok)return;let e={gain:1,pan:0};!t.isPlayer&&(e=this.spatial(t.pos.x,t.pos.y,t.pos.z,6,40),!e)||this.noise({dur:.16,f0:500,f1:2200,q:1.5,gain:.3*e.gain,pan:e.pan,attack:.05,at:.07})}pickaxeHit(t,e){if(!this.ok)return;let i={gain:1,pan:0};if(!t.isPlayer&&(i=this.spatial(t.pos.x,t.pos.y,t.pos.z,6,45),!i))return;let n=i.gain,s=i.pan;switch(e){case"wood":this.tone({type:"sine",f0:210,f1:80,dur:.11,gain:.55*n,pan:s}),this.noise({dur:.09,f0:1400,f1:500,q:1,gain:.5*n,pan:s});break;case"stone":case"brick":this.tone({type:"triangle",f0:900,f1:500,dur:.14,gain:.3*n,pan:s}),this.noise({dur:.1,f0:3500,f1:1200,q:1.5,gain:.5*n,pan:s}),this.tone({type:"sine",f0:130,f1:60,dur:.1,gain:.4*n,pan:s});break;case"metal":this.tone({type:"sine",f0:1350,f1:1250,dur:.32,gain:.35*n,pan:s}),this.tone({type:"sine",f0:2100,f1:1900,dur:.2,gain:.2*n,pan:s}),this.noise({dur:.05,f0:5e3,f1:2500,q:1,gain:.35*n,pan:s,type:"highpass"});break;case"flesh":this.tone({type:"sine",f0:160,f1:60,dur:.12,gain:.55*n,pan:s}),this.noise({dur:.07,f0:700,f1:300,q:1,gain:.4*n,pan:s});break;default:this.noise({dur:.12,f0:700,f1:250,q:.8,gain:.5*n,pan:s,type:"lowpass"}),this.tone({type:"sine",f0:110,f1:55,dur:.1,gain:.35*n,pan:s})}}impact(t,e,i,n){if(!this.ok)return;let s=this.spatial(t,e,i,8,150);if(!s)return;let a=s.gain*.7,o=s.pan;n==="metal"?(this.tone({type:"sine",f0:1700,f1:1500,dur:.14,gain:.2*a,pan:o}),this.noise({dur:.04,f0:5e3,q:1,gain:.25*a,pan:o,type:"highpass"})):n==="stone"||n==="brick"?(this.noise({dur:.06,f0:3800,f1:1400,q:1.4,gain:.35*a,pan:o}),this.tone({type:"triangle",f0:1100,f1:700,dur:.06,gain:.12*a,pan:o})):n==="wood"?this.noise({dur:.07,f0:1500,f1:600,q:1,gain:.35*a,pan:o}):this.noise({dur:.09,f0:800,f1:300,q:.8,gain:.3*a,pan:o,type:"lowpass"})}hitConfirm(t,e,i){this.ok&&(e?(this.tone({type:"triangle",f0:880,f1:1320,dur:.18,gain:.3}),this.tone({type:"sine",f0:1760,f1:1760,dur:.3,gain:.16,at:.06}),this.tone({type:"sine",f0:140,f1:60,dur:.25,gain:.35})):t?(this.tone({type:"sine",f0:2200,f1:1900,dur:.07,gain:.3}),this.tone({type:"sine",f0:1500,f1:1300,dur:.07,gain:.2,at:.035})):i?(this.tone({type:"triangle",f0:1700,f1:1400,dur:.05,gain:.22}),this.noise({dur:.03,f0:6e3,q:1,gain:.12,type:"highpass"})):this.tone({type:"sine",f0:1250,f1:950,dur:.06,gain:.26}))}damageTaken(t,e){this.ok&&(this.tone({type:"sine",f0:120,f1:55,dur:.2,gain:.4*Wt(t/30,.4,1.2)}),this.noise({dur:.1,f0:900,f1:300,q:1,gain:.25,type:"lowpass"}),e&&(this.noise({dur:.4,f0:7e3,f1:2500,q:1.5,gain:.35,type:"bandpass"}),this.tone({type:"triangle",f0:2400,f1:900,dur:.3,gain:.2})))}footstep(t){if(!this.ok)return;let e={gain:1,pan:0};if(!t.isPlayer){if(e=this.spatial(t.pos.x,t.pos.y,t.pos.z,4,42),!e)return;e.gain*=.9}let i=t.groundCollider?t.groundCollider.material||"wood":this.game.terrain.heightAt(t.pos.x,t.pos.z)<2.3?"sand":"grass",n=.28*e.gain*(t.sprinting?1.25:t.crouching?.45:1);i==="wood"||i==="stone"?this.noise({dur:.06,f0:600+Math.random()*200,f1:250,q:1.5,gain:n*1.4,pan:e.pan,type:"bandpass"}):i==="metal"?(this.noise({dur:.05,f0:1800,f1:900,q:3,gain:n,pan:e.pan}),this.tone({type:"sine",f0:900,dur:.06,gain:n*.2,pan:e.pan})):this.noise({dur:.07,f0:1300+Math.random()*400,f1:500,q:.7,gain:n,pan:e.pan,type:i==="sand"?"lowpass":"bandpass",pink:!0})}jump(t){!this.ok||!t.isPlayer||this.noise({dur:.1,f0:500,f1:1500,q:.8,gain:.14,pink:!0})}land(t,e){if(!this.ok)return;let i={gain:1,pan:0};if(!t.isPlayer&&(i=this.spatial(t.pos.x,t.pos.y,t.pos.z,6,60),!i))return;let n=le(e/20);this.tone({type:"sine",f0:110,f1:45,dur:.16,gain:(.25+.5*n)*i.gain,pan:i.pan}),this.noise({dur:.12,f0:700,f1:250,q:.8,gain:(.2+.4*n)*i.gain,pan:i.pan,type:"lowpass",pink:!0})}splash(t){if(!this.ok)return;let e={gain:1,pan:0};!t.isPlayer&&(e=this.spatial(t.pos.x,t.pos.y,t.pos.z,6,60),!e)||this.noise({dur:.4,f0:2600,f1:700,q:.6,gain:.4*e.gain,pan:e.pan,pink:!0})}gliderOpen(t){if(!(!this.ok||!t.isPlayer)){this.noise({dur:.5,f0:300,f1:1400,q:.7,gain:.5,attack:.05,pink:!0}),this.tone({type:"sawtooth",f0:90,f1:60,dur:.3,gain:.12});for(let e=0;e<3;e++)this.noise({dur:.08,f0:800,f1:500,q:1,gain:.25,at:.12+e*.09,pink:!0})}}pickup(t){if(!this.ok)return;let e=t.kind==="weapon"?t.rarity:0,i=[523,587,659,740,880][e];this.tone({type:"sine",f0:i,f1:i*1.02,dur:.16,gain:.22}),this.tone({type:"sine",f0:i*1.5,f1:i*1.5,dur:.22,gain:.16,at:.06}),e>=3&&this.tone({type:"sine",f0:i*2,dur:.3,gain:.14,at:.12}),e>=4&&this.tone({type:"triangle",f0:i*3,dur:.4,gain:.08,at:.16}),this.noise({dur:.05,f0:2400,f1:1200,q:3,gain:.15})}chestOpen(t){if(!this.ok)return;let e=this.spatial(t.x,t.y,t.z,10,100);e&&(this.tone({type:"sawtooth",f0:90,f1:180,dur:.4,gain:.16*e.gain,pan:e.pan,vib:8}),this.noise({dur:.3,f0:600,f1:1400,q:2,gain:.2*e.gain,pan:e.pan}),[1046,1318,1568,2093,2637].forEach((i,n)=>this.tone({type:"sine",f0:i,dur:.5,gain:.14*e.gain,pan:e.pan,at:.12+n*.07,echo:.2})))}useStart(t,e){!this.ok||!t.isPlayer||(e.kind==="shield"||e.kind==="both"?this.tone({type:"sine",f0:300,f1:900,dur:.6,gain:.12}):this.noise({dur:.25,f0:1400,f1:800,q:1,gain:.18,pink:!0}))}useEnd(t,e){this.ok&&t.isPlayer&&[659,880,1175].forEach((i,n)=>this.tone({type:"sine",f0:i,dur:.25,gain:.14,at:n*.07}))}uiTick(){this.ok&&this.tone({type:"square",f0:1100,f1:900,dur:.025,gain:.06})}uiClick(){this.ok&&(this.tone({type:"triangle",f0:700,f1:1100,dur:.08,gain:.18}),this.noise({dur:.03,f0:3e3,q:2,gain:.1}))}uiPlay(){this.ok&&([392,494,587,784].forEach((t,e)=>this.tone({type:"triangle",f0:t,dur:.35,gain:.16,at:e*.08,echo:.3})),this.noise({dur:.6,f0:400,f1:3e3,q:.6,gain:.25,attack:.3,pink:!0}))}buildPlace(t,e,i,n){if(!this.ok)return;let s=this.spatial(e,i,n,8,120);if(!s)return;let a=s.gain;t==="metal"?(this.tone({type:"triangle",f0:500,f1:300,dur:.12,gain:.25*a,pan:s.pan}),this.noise({dur:.08,f0:3e3,f1:1500,q:2,gain:.3*a,pan:s.pan})):t==="stone"?(this.tone({type:"sine",f0:140,f1:70,dur:.14,gain:.5*a,pan:s.pan}),this.noise({dur:.1,f0:1800,f1:700,q:1,gain:.35*a,pan:s.pan})):(this.tone({type:"sine",f0:190,f1:90,dur:.12,gain:.5*a,pan:s.pan}),this.noise({dur:.08,f0:1200,f1:500,q:1,gain:.35*a,pan:s.pan})),this.tone({type:"sine",f0:500,f1:900,dur:.1,gain:.08*a,pan:s.pan,at:.02})}buildFail(){this.ok&&this.tone({type:"square",f0:180,f1:110,dur:.1,gain:.14})}pieceBreak(t,e,i,n){if(!this.ok)return;let s=this.spatial(t,e,i,10,150);s&&(this.noise({dur:.35,f0:2200,f1:350,q:.7,gain:.7*s.gain,pan:s.pan,curve:1.4}),this.tone({type:"sine",f0:120,f1:40,dur:.3,gain:.55*s.gain,pan:s.pan}),n==="metal"&&this.tone({type:"sine",f0:1200,f1:800,dur:.4,gain:.15*s.gain,pan:s.pan}))}treeFall(t,e,i){if(!this.ok)return;let n=this.spatial(t,e,i,10,120);n&&(this.noise({dur:.6,f0:900,f1:200,q:.7,gain:.5*n.gain,pan:n.pan,pink:!0,attack:.15}),this.tone({type:"sine",f0:90,f1:40,dur:.4,gain:.5*n.gain,pan:n.pan,at:.8}))}stormZap(){this.ok&&(this.noise({dur:.2,f0:4200,f1:1200,q:2,gain:.25,type:"bandpass"}),this.tone({type:"sawtooth",f0:220,f1:90,dur:.18,gain:.14}))}stormWarn(){this.ok&&[392,330,262].forEach((t,e)=>this.tone({type:"sawtooth",f0:t,dur:.45,gain:.14,at:e*.32,echo:.3}))}eliminated(){this.ok&&[392,330,262,196].forEach((t,e)=>this.tone({type:"triangle",f0:t,dur:.5,gain:.2,at:e*.22,echo:.3}))}victory(){if(!this.ok)return;[523,659,784,1046,784,1046,1318].forEach((e,i)=>{this.tone({type:"triangle",f0:e,dur:.5,gain:.2,at:i*.14,echo:.3}),this.tone({type:"sine",f0:e*2,dur:.4,gain:.08,at:i*.14})}),this.noise({dur:1.2,f0:4e3,f1:9e3,q:.5,gain:.15,at:.9,attack:.5,type:"highpass"})}killShot(t){}_loop(t,e){if(this.loops[t])return this.loops[t];let i=e();return this.loops[t]=i,i}updateAmbient(t){if(!this.ctx||this.ctx.state!=="running")return;let e=this.game,i=this.ctx,n=i.currentTime,s=e.player,a=this._loop("wind",()=>{let p=i.createBufferSource();p.buffer=this.pinkBuf,p.loop=!0;let v=i.createBiquadFilter();v.type="bandpass",v.Q.value=.6,v.frequency.value=500;let w=i.createGain();return w.gain.value=0,p.connect(v),v.connect(w),w.connect(this.amb),p.start(),{s:p,f:v,g:w}}),o=s.mode==="freefall"?le(-s.vel.y/70):s.mode==="glide"?.35:0;a.g.gain.setTargetAtTime(o*.8,n,.15),a.f.frequency.setTargetAtTime(400+o*1500,n,.2);let l=this._loop("ocean",()=>{let p=i.createBufferSource();p.buffer=this.pinkBuf,p.loop=!0;let v=i.createBiquadFilter();v.type="lowpass",v.frequency.value=500;let w=i.createOscillator();w.frequency.value=.11;let M=i.createGain();M.gain.value=250,w.connect(M),M.connect(v.frequency),w.start();let y=i.createGain();return y.gain.value=0,p.connect(v),v.connect(y),y.connect(this.amb),p.start(),{s:p,g:y}}),c=e.terrain.heightAt(s.pos.x,s.pos.z),h=Math.hypot(s.pos.x,s.pos.z),u=le(1-(c-1)/14);l.g.gain.setTargetAtTime(e.phase==="match"||e.phase==="menu"?.07+u*.3:.05,n,.4);let d=this._loop("storm",()=>{let p=i.createBufferSource();p.buffer=this.pinkBuf,p.loop=!0;let v=i.createBiquadFilter();v.type="lowpass",v.frequency.value=220,v.Q.value=2;let w=i.createOscillator();w.frequency.value=.35;let M=i.createGain();M.gain.value=120,w.connect(M),M.connect(v.frequency),w.start();let y=i.createGain();return y.gain.value=0,p.connect(v),v.connect(y),y.connect(this.amb),p.start(),{s:p,g:y}}),f=0;if(e.storm?.active&&e.phase==="match"){let p=e.storm.distanceToEdge(s.pos.x,s.pos.z);f=p<0?1:le(1-p/90)*.5}d.g.gain.setTargetAtTime(f*.85,n,.3),this._loop("bus",()=>{let p=i.createOscillator();p.type="sawtooth",p.frequency.value=62;let v=i.createOscillator();v.type="square",v.frequency.value=31;let w=i.createBiquadFilter();w.type="lowpass",w.frequency.value=260;let M=i.createOscillator();M.frequency.value=7;let y=i.createGain();y.gain.value=3,M.connect(y),y.connect(p.frequency),M.start();let b=i.createGain();return b.gain.value=0,p.connect(w),v.connect(w),w.connect(b),b.connect(this.amb),p.start(),v.start(),{g:b}}).g.gain.setTargetAtTime(s.mode==="bus"&&e.phase==="match"?.16:0,n,.3);let x=this._loop("hum",()=>{let p=i.createOscillator();p.type="sine",p.frequency.value=262;let v=i.createOscillator();v.type="sine",v.frequency.value=393;let w=i.createOscillator();w.frequency.value=5;let M=i.createGain();M.gain.value=.5;let y=i.createGain();y.gain.value=0;let b=i.createGain();return b.gain.value=.5,w.connect(M),M.connect(b.gain),p.connect(b),v.connect(b),b.connect(y),y.connect(this.amb),p.start(),v.start(),w.start(),{g:y}}),m=0;if(e.phase==="match"&&s.mode==="ground"&&s.alive){let p=1e9;for(let v of e.loot.chests){if(v.opened)continue;let w=Math.hypot(v.x-s.pos.x,v.z-s.pos.z);w<p&&(p=w)}m=p<28?le(1-p/28):0}x.g.gain.setTargetAtTime(m*m*.1,n,.2)}};var dt={size:1280,half:640,cell:4,cells:320,nodes:321,chunkCells:32,seaLevel:0},qa=2048,wn={radius:.4,height:1.8,crouchHeight:1.3,eye:1.62,stepUp:.55,walkSpeed:5.2,sprintSpeed:7.4,crouchSpeed:2.6,adsSpeedMul:.6,jumpSpeed:7.2,gravity:24,maxFallSpeed:55,groundAccel:46,airAccel:9,maxHealth:100,maxShield:100},wi={grid:4,height:3,thickness:.28,cost:10,maxMats:999},Hn={botCount:29,busAltitude:340,busSpeed:34,busRoutePad:120,glideOpenAltitude:95,fallDamageSpeed:21},Qf=[{wait:50,shrink:55,radius:330,dps:1},{wait:45,shrink:50,radius:215,dps:2},{wait:40,shrink:45,radius:130,dps:3},{wait:35,shrink:40,radius:72,dps:5},{wait:30,shrink:35,radius:34,dps:8},{wait:25,shrink:30,radius:12,dps:10},{wait:15,shrink:25,radius:4,dps:12}],Ya=640,Si=[{id:"common",name:"Common",color:"#b7bcc4",glow:12041412,dmg:1},{id:"uncommon",name:"Uncommon",color:"#5fcf3a",glow:6278970,dmg:1.05},{id:"rare",name:"Rare",color:"#3aa0ff",glow:3842303,dmg:1.1},{id:"epic",name:"Epic",color:"#c25bff",glow:12737535,dmg:1.15},{id:"legendary",name:"Legendary",color:"#ffb428",glow:16757800,dmg:1.21}];function Iu(r){let t=r>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Ae=class{constructor(t=1){this.next=Iu(t)}float(){return this.next()}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}weighted(t){let e=0;for(let n of t)e+=n[1];let i=this.next()*e;for(let n of t)if(i-=n[1],i<=0)return n[0];return t[t.length-1][0]}gauss(){return(this.next()+this.next()+this.next()+this.next()-2)/2}shuffle(t){for(let e=t.length-1;e>0;e--){let i=Math.floor(this.next()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}};function Ds(r,t,e=0){let i=Math.imul(r|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,2147483647);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}var Qy=.5*(Math.sqrt(3)-1),Za=(3-Math.sqrt(3))/6,Ir=new Float32Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function gc(r=1){let t=Iu(r),e=new Uint8Array(256);for(let l=0;l<256;l++)e[l]=l;for(let l=255;l>0;l--){let c=Math.floor(t()*(l+1)),h=e[l];e[l]=e[c],e[c]=h}let i=new Uint8Array(512),n=new Uint8Array(512);for(let l=0;l<512;l++)i[l]=e[l&255],n[l]=i[l]%12;function s(l,c){let h=(l+c)*Qy,u=Math.floor(l+h),d=Math.floor(c+h),f=(u+d)*Za,g=l-(u-f),x=c-(d-f),m=g>x?1:0,p=g>x?0:1,v=g-m+Za,w=x-p+Za,M=g-1+2*Za,y=x-1+2*Za,b=u&255,C=d&255,_=0,R=0,T=0,E=.5-g*g-x*x;if(E>0){let I=n[b+i[C]]%12*2;E*=E,_=E*E*(Ir[I%24]*g+Ir[(I+1)%24]*x)}let P=.5-v*v-w*w;if(P>0){let I=n[b+m+i[C+p]]%12*2;P*=P,R=P*P*(Ir[I%24]*v+Ir[(I+1)%24]*w)}let L=.5-M*M-y*y;if(L>0){let I=n[b+1+i[C+1]]%12*2;L*=L,T=L*L*(Ir[I%24]*M+Ir[(I+1)%24]*y)}return 70*(_+R+T)}function a(l,c,h=4,u=2,d=.5){let f=1,g=1,x=0,m=0;for(let p=0;p<h;p++)x+=f*s(l*g,c*g),m+=f,f*=d,g*=u;return x/m}function o(l,c,h=4,u=2,d=.5){let f=1,g=1,x=0,m=0;for(let p=0;p<h;p++){let v=1-Math.abs(s(l*g,c*g));x+=f*v*v,m+=f,f*=d,g*=u}return x/m}return{noise2:s,fbm:a,ridged:o}}function jf(r){let t=(C,_)=>{let R=C*Xa,T=r.coastRadius(R);return[Math.cos(R)*T*_,Math.sin(R)*T*_]},e=C=>({pad:55,...C}),[i,n]=t(96,.905),[s,a]=t(-6,.7),[o,l]=t(-138,.64),[c,h]=t(172,.885),[u,d]=t(-72,.58),f=[e({id:"meadowbrook",name:"Meadowbrook",x:10,z:45,pad:66,houses:16,style:"suburb",big:!0}),e({id:"harbor",name:"Sunny Harbor",x:i,z:n,pad:50,houses:9,style:"harbor",coastal:!0}),e({id:"maple",name:"Maple Hollow",x:s,z:a,pad:52,houses:10,style:"autumn"}),e({id:"windy",name:"Windy Acres",x:o,z:l,pad:58,houses:7,style:"farm"}),e({id:"pebble",name:"Pebble Cove",x:c,z:h,pad:46,houses:8,style:"fishing",coastal:!0}),e({id:"pine",name:"Pinecrest Lodge",x:u,z:d,pad:46,houses:7,style:"lodge"})],[g,x]=t(38,.955),m=[{id:"lighthouse",name:"Beacon Point",x:g,z:x,type:"lighthouse"}],[p,v]=t(-52,.42),w=[{x:p,z:v,r:120,h:44,name:"Cloudpeak"},{x:o-30,z:l+20,r:80,h:13,name:"Windy Ridge"},{x:-40,z:-180,r:90,h:10},{x:150,z:200,r:85,h:9}],M=[{x:-150,z:-20,r:46,level:1.6,name:"Mirror Lake"}],y=Object.fromEntries(f.map(C=>[C.id,C])),b=[{kind:"asphalt",w:6.5,pts:[[y.harbor.x,y.harbor.z],[y.harbor.x+20,y.harbor.z-90],[y.meadowbrook.x-15,y.meadowbrook.z+70],[y.meadowbrook.x,y.meadowbrook.z]]},{kind:"asphalt",w:6.5,pts:[[y.meadowbrook.x,y.meadowbrook.z],[90,20],[190,-20],[y.maple.x,y.maple.z]]},{kind:"asphalt",w:6.5,pts:[[y.meadowbrook.x,y.meadowbrook.z],[-90,60],[-200,90],[y.pebble.x,y.pebble.z]]},{kind:"dirt",w:5,pts:[[y.meadowbrook.x,y.meadowbrook.z],[-40,-60],[-120,-140],[y.windy.x,y.windy.z]]},{kind:"dirt",w:5,pts:[[y.maple.x,y.maple.z],[y.maple.x-20,y.maple.z-90],[y.pine.x+60,y.pine.z+40],[y.pine.x,y.pine.z]]},{kind:"dirt",w:5,pts:[[y.windy.x,y.windy.z],[-120,-250],[-20,-240],[y.pine.x,y.pine.z]]},{kind:"dirt",w:4.5,pts:[[y.harbor.x,y.harbor.z],[g-60,x-40],[g,x]]}];return{towns:f,landmarks:m,peaks:w,lakes:M,roads:b}}var jy=()=>new Promise(r=>setTimeout(r,0));function t1(r,t){let e=[],i=s=>r[Wt(s,0,r.length-1)];for(let s=0;s<r.length-1;s++){let a=i(s-1),o=i(s),l=i(s+1),c=i(s+2),h=Math.hypot(l[0]-o[0],l[1]-o[1]),u=Math.max(2,Math.ceil(h/t));for(let d=0;d<u;d++){let f=d/u,g=f*f,x=g*f,m=(p,v,w,M)=>.5*(2*v+(-p+w)*f+(2*p-5*v+4*w-M)*g+(-p+3*v-3*w+M)*x);e.push([m(a[0],o[0],l[0],c[0]),m(a[1],o[1],l[1],c[1])])}}let n=r[r.length-1];return e.push([n[0],n[1]]),e}var xc=class{constructor(t=20240517){this.seed=t,this.N=gc(t),this.n=dt.nodes,this.cell=dt.cell,this.half=dt.half,this.h=new Float32Array(this.n*this.n),this.nrm=new Float32Array(this.n*this.n*3),this.layout=jf(this),this.roadPts=[],this.roadHash=new Map,this.ready=!1}coastRadius(t){let e=Math.cos(t),i=Math.sin(t),n=this.N;return 452*(1+.26*n.fbm(e*.85+11.3,i*.85-4.7,3,2,.5)+.05*n.noise2(e*2.3-8,i*2.3+21))}naturalHeight(t,e){let i=this.N,n=Math.hypot(t,e),s=Math.atan2(e,t),a=this.coastRadius(s),o=n/a;if(o>=1){let f=(o-1)*a,g=-26*(1-Math.exp(-f/105));return g+=1.4*i.noise2(t*.02+4,e*.02-9)*de(1,1.15,o),g}let l=de(1,.68,o),c=9.5*Math.pow(l,1.1),h=de(.985,.6,o),u=i.fbm(t*.0062+3.1,e*.0062-7.7,4,2,.5),d=i.fbm(t*.021-5.5,e*.021+9.1,3,2.1,.5);c+=h*(u*14+d*2.4);for(let f of this.layout.peaks){let g=Pu(t,e,f.x,f.z)/(f.r*f.r);if(g>7)continue;let x=Math.exp(-g*1.15),m=.82+.42*i.ridged(t*.013+20,e*.013-3,4,2.1,.5);c+=f.h*x*m+x*x*i.noise2(t*.05,e*.05)*(f.h*.06)}for(let f of this.layout.lakes){let g=Math.hypot(t-f.x,e-f.z),x=1-de(f.r*.9,f.r*3.4,g);c=It(c,Math.min(c,f.level+3.4),x*.9);let m=1-de(f.r*.55,f.r*1.2,g);c=It(c,f.level-3.2,m)}return c}paddedHeight(t,e){let i=this.naturalHeight(t,e);for(let n of this.layout.towns){let s=Math.hypot(t-n.x,e-n.z);if(s>n.pad+30)continue;let a=1-fc(n.pad,n.pad+30,s);i=It(i,n.padH+(i-n.padH)*.1,a)}for(let n of this.layout.landmarks){let s=Math.hypot(t-n.x,e-n.z);if(s>50)continue;let a=1-fc(14,44,s);i=It(i,n.padH??2.5,a)}return i}finalHeight(t,e){let i=this.paddedHeight(t,e),n=this.nearestRoad(t,e,18);if(n){let s=n.width*.5,a=1-fc(s+.5,s+11,n.dist);a>0&&(i=It(i,n.h,a*.92))}return i}_buildRoads(){for(let t of this.layout.towns){let e=0,i=0;for(let n=0;n<28;n++){let s=n/28*Math.PI*2,a=t.pad*.55*Math.sqrt((n%7+1)/7);e+=this.naturalHeight(t.x+Math.cos(s)*a,t.z+Math.sin(s)*a),i++}e+=this.naturalHeight(t.x,t.z)*4,i+=4,t.padH=Math.max(e/i,t.coastal?2.6:2.2)}for(let t of this.layout.landmarks)t.padH=Math.max(this.naturalHeight(t.x,t.z),2.6);this.roadPts=[],this.roadHash.clear(),this.layout.roads.forEach((t,e)=>{let i=t1(t.pts,3),n=i.map(a=>Math.max(this.paddedHeight(a[0],a[1]),1)),s=n.map((a,o)=>{let l=0,c=0;for(let h=-12;h<=12;h++){let u=o+h;u>=0&&u<n.length&&(l+=n[u],c++)}return l/c});t.samples=i.map((a,o)=>({x:a[0],z:a[1],h:s[o]})),i.forEach((a,o)=>{let l=this.roadPts.length;this.roadPts.push({x:a[0],z:a[1],h:s[o],w:t.w,ri:e});let c=this._rk(a[0],a[1]),h=this.roadHash.get(c);h||this.roadHash.set(c,h=[]),h.push(l)})})}_rk(t,e){return Math.floor(t/16)+200<<10|Math.floor(e/16)+200}nearestRoad(t,e,i=20){if(!this.roadPts.length)return null;let n=Math.floor(t/16),s=Math.floor(e/16),a=null,o=i*i;for(let l=-2;l<=2;l++)for(let c=-2;c<=2;c++){let h=this.roadHash.get(n+c+200<<10|s+l+200);if(h)for(let u of h){let d=this.roadPts[u],f=Pu(t,e,d.x,d.z);f<o&&(o=f,a=d)}}return a?{dist:Math.sqrt(o),h:a.h,width:a.w,ri:a.ri}:null}async generate(t){this._buildRoads();let e=this.n,i=this.cell,n=this.half;for(let s=0;s<e;s++){let a=-n+s*i;for(let o=0;o<e;o++)this.h[s*e+o]=this.finalHeight(-n+o*i,a);s%24===23&&(t?.(s/e),await jy())}this._computeNormals(),this.ready=!0}_computeNormals(){let t=this.n,e=this.h,i=this.cell,n=this.nrm;for(let s=0;s<t;s++)for(let a=0;a<t;a++){let o=e[s*t+Math.max(a-1,0)],l=e[s*t+Math.min(a+1,t-1)],c=e[Math.max(s-1,0)*t+a],h=e[Math.min(s+1,t-1)*t+a],u=(o-l)/(2*i),d=(c-h)/(2*i),f=1/Math.hypot(u,1,d),g=(s*t+a)*3;n[g]=u*f,n[g+1]=f,n[g+2]=d*f}}heightAt(t,e){let i=this.n,n=this.h,s=(t+this.half)/this.cell,a=(e+this.half)/this.cell;s=s<0?0:s>i-1.001?i-1.001:s,a=a<0?0:a>i-1.001?i-1.001:a;let o=s|0,l=a|0,c=s-o,h=a-l,u=l*i+o,d=n[u],f=n[u+1],g=n[u+i],x=n[u+i+1];return c+h<=1?d+c*(f-d)+h*(g-d):x+(1-c)*(g-x)+(1-h)*(f-x)}normalAt(t,e,i){let n=this.n,s=this.h,a=this.cell,o=(t+this.half)/a,l=(e+this.half)/a;o=Wt(o,0,n-1.001),l=Wt(l,0,n-1.001);let c=o|0,h=l|0,u=o-c,d=l-h,f=h*n+c,g=s[f],x=s[f+1],m=s[f+n],p=s[f+n+1],v,w;u+d<=1?(v=(x-g)/a,w=(m-g)/a):(v=(p-m)/a,w=(p-x)/a);let M=1/Math.hypot(v,1,w);return i[0]=-v*M,i[1]=M,i[2]=-w*M,i}slopeAt(t,e){let n=this.heightAt(t+2,e)-this.heightAt(t-2,e),s=this.heightAt(t,e+2)-this.heightAt(t,e-2);return Math.hypot(n,s)/4}isLand(t,e,i=.5){return this.heightAt(t,e)>i}waterLevelAt(t,e){let i=this.heightAt(t,e);for(let n of this.layout.lakes)if(Math.hypot(t-n.x,e-n.z)<n.r*1.6&&i<n.level)return n.level;return i<dt.seaLevel?dt.seaLevel:null}townAt(t,e,i=0){for(let n of this.layout.towns)if(Math.hypot(t-n.x,e-n.z)<n.pad+i)return n;return null}};var e1=()=>new Promise(r=>setTimeout(r,0)),Ti={grassA:[120,200,54],grassB:[86,168,46],grassC:[156,216,70],dry:[190,212,86],forest:[58,138,52],deep:[74,152,56],autumnA:[222,158,56],autumnB:[200,112,46],sand:[242,219,158],wetSand:[214,190,126],seabed:[232,212,152],rock:[148,152,162],rockDark:[112,116,128],moss:[110,140,84],snow:[246,250,255]};function Xi(r,t,e,i){r[0]=t[0]+(e[0]-t[0])*i,r[1]=t[1]+(e[1]-t[1])*i,r[2]=t[2]+(e[2]-t[2])*i}var vc=class{constructor(t){this.t=t,this.N=gc(t.seed+101),this.FN=256,this.dryF=new Float32Array(this.FN*this.FN),this.forestF=new Float32Array(this.FN*this.FN),this.autumnF=new Float32Array(this.FN*this.FN),this._fields()}_fields(){let{N:t,FN:e,t:i}=this,n=dt.size/e,s=i.layout.towns.find(a=>a.id==="maple");for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=-dt.half+(o+.5)*n,c=-dt.half+(a+.5)*n,h=a*e+o;this.dryF[h]=le(.5+1.1*t.fbm(l*.008+50,c*.008+12,3,2,.5)),this.forestF[h]=de(.02,.32,t.fbm(l*.0065-31,c*.0065+77,3,2.05,.5));let u=0;if(s){let f=Math.hypot(l-s.x,c-s.z);u=de(210,90,f)*(.65+.35*t.noise2(l*.01,c*.01+3))}let d=Math.hypot(l-20,c+250);u=Math.max(u,de(85,40,d)*.8),this.autumnF[h]=le(u)}}_field(t,e,i){let n=this.FN,s=dt.size/n,a=(e+dt.half)/s-.5,o=(i+dt.half)/s-.5;a=Math.min(Math.max(a,0),n-1.001),o=Math.min(Math.max(o,0),n-1.001);let l=a|0,c=o|0,h=a-l,u=o-c,d=c*n+l;return It(It(t[d],t[d+1],h),It(t[d+n],t[d+n+1],h),u)}dryAt(t,e){return this._field(this.dryF,t,e)}forestAt(t,e){return this._field(this.forestF,t,e)}autumnAt(t,e){return this._field(this.autumnF,t,e)}_h(t,e){let i=this.t,n=i.n,s=(t+dt.half)/dt.cell,a=(e+dt.half)/dt.cell;s=Math.min(Math.max(s,0),n-1.001),a=Math.min(Math.max(a,0),n-1.001);let o=s|0,l=a|0,c=s-o,h=a-l,u=l*n+o,d=i.h;return(d[u]*(1-c)+d[u+1]*c)*(1-h)+(d[u+n]*(1-c)+d[u+n+1]*c)*h}_slope(t,e){let i=this.t,n=i.n,s=(t+dt.half)/dt.cell,a=(e+dt.half)/dt.cell;s=Math.min(Math.max(Math.round(s),0),n-1),a=Math.min(Math.max(Math.round(a),0),n-1);let o=(a*n+s)*3,l=i.nrm[o+1];return Math.sqrt(Math.max(0,1-l*l))/Math.max(l,.01)}colorAt(t,e,i,n=this._h(t,e),s=this._slope(t,e)){let a=this.N,o=a.noise2(t*.03+7,e*.03-3),l=a.noise2(t*.13-11,e*.13+5);Xi(i,Ti.grassB,Ti.grassA,.5+.65*o),Xi(i,i,Ti.grassC,le(.5+.7*l)*.3),Xi(i,i,Ti.dry,this.dryAt(t,e)*.62),Xi(i,i,Ti.forest,this.forestAt(t,e)*.65),Xi(i,i,Ti.deep,de(9,24,n)*.45);let c=this.autumnAt(t,e);c>.02&&Xi(i,i,l>0?Ti.autumnA:Ti.autumnB,c*(.55+.25*o));let h=Math.max(de(.5,.85,s),de(27,37,n+o*5));if(h>0){let g=[0,0,0];Xi(g,Ti.rock,Ti.rockDark,le(.5+.8*l)),Xi(g,g,Ti.moss,le(.4-n*.012)*.5),Xi(i,i,g,h)}let u=de(39,44,n+o*2.5+l);u>0&&Xi(i,i,Ti.snow,u*(1-de(.7,1.1,s)*.6));let d=n+o*.4+l*.15,f=1-de(1.2,2.6,d);if(f>0){let g=[0,0,0];Xi(g,Ti.wetSand,Ti.sand,de(-.1,.9,n)),Xi(i,i,n<0?Ti.seabed:g,f)}return n}async paintBase(t=1024,e){let i=new Uint8ClampedArray(t*t*4),n=[0,0,0],s=dt.size/t;for(let a=0;a<t;a++){let o=-dt.half+(a+.5)*s;for(let l=0;l<t;l++){let c=-dt.half+(l+.5)*s;this.colorAt(c,o,n);let h=(a*t+l)*4;i[h]=n[0],i[h+1]=n[1],i[h+2]=n[2],i[h+3]=255}a%32===31&&(e?.(a/t),await e1())}return i}};function tp(r,t,e){let i=new Ae(t),n=document.createElement("canvas");n.width=n.height=r;let s=n.getContext("2d");s.fillStyle="#808080",s.fillRect(0,0,r,r);let a=l=>{for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++)l(c*r,h*r)};for(let l=0;l<r*.6;l++){let c=i.range(0,r),h=i.range(0,r),u=i.range(r*.03,r*.12),d=i.chance(.5)?255:0;a((f,g)=>{let x=s.createRadialGradient(c+f,h+g,0,c+f,h+g,u);x.addColorStop(0,`rgba(${d},${d},${d},0.10)`),x.addColorStop(1,`rgba(${d},${d},${d},0)`),s.fillStyle=x,s.fillRect(c+f-u,h+g-u,u*2,u*2)})}s.lineCap="round";for(let l=0;l<e;l++){let c=i.range(0,r),h=i.range(0,r),u=i.range(2,6),d=-Math.PI/2+i.range(-.7,.7),f=i.chance(.55)?i.range(176,255):i.range(40,100);s.strokeStyle=`rgba(${f|0},${f|0},${f|0},${i.range(.25,.6)})`,s.lineWidth=i.range(.8,1.6),a((g,x)=>{s.beginPath(),s.moveTo(c+g,h+x),s.lineTo(c+g+Math.cos(d)*u,h+x+Math.sin(d)*u),s.stroke()})}let o=new nn(n);return o.wrapS=o.wrapT=es,o.anisotropy=4,o.colorSpace=on,o}var yc=class{constructor(t,e,i,n){this.terrain=e,this.group=new Yt,this.group.name="terrain",i.colorSpace=He,i.anisotropy=Math.min(8,n.capabilities.getMaxAnisotropy()),i.wrapS=i.wrapT=pi,i.generateMipmaps=!0,i.minFilter=yn,i.needsUpdate=!0,this.detailA=tp(256,11,2600),this.detailB=tp(256,23,900),this.material=this._material(i),this._build(),t.add(this.group)}_material(t){let e=new Ne({map:t});return e.onBeforeCompile=i=>{i.uniforms.uDetailA={value:this.detailA},i.uniforms.uDetailB={value:this.detailB},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform sampler2D uDetailA;
uniform sampler2D uDetailB;`).replace("#include <map_fragment>",`
          #include <map_fragment>
          {
            float camDist = length(vWPos - cameraPosition);
            float fade = 1.0 - smoothstep(40.0, 230.0, camDist);
            float fadeB = 1.0 - smoothstep(150.0, 520.0, camDist);
            vec3 dA = texture2D(uDetailA, vWPos.xz * 0.31).rgb * 2.0;
            vec3 dB = texture2D(uDetailB, vWPos.xz * 0.045).rgb * 2.0;
            diffuseColor.rgb *= mix(vec3(1.0), dA, fade * 0.55) * mix(vec3(1.0), dB, fadeB * 0.6);
          }
        `)},e}_build(){let t=this.terrain,e=dt.chunkCells,i=dt.cells/e,n=e+1,s=new Uint16Array(e*e*6),a=0;for(let l=0;l<e;l++)for(let c=0;c<e;c++){let h=l*n+c,u=h+1,d=h+n,f=d+1;s[a++]=h,s[a++]=d,s[a++]=u,s[a++]=u,s[a++]=d,s[a++]=f}let o=new me(s,1);this.chunks=[];for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=new Float32Array(n*n*3),u=new Float32Array(n*n*3),d=new Float32Array(n*n*2),f=0,g=0;for(let p=0;p<n;p++)for(let v=0;v<n;v++){let w=c*e+v,M=l*e+p,y=M*t.n+w,b=-dt.half+w*dt.cell,C=-dt.half+M*dt.cell;h[f]=b,h[f+1]=t.h[y],h[f+2]=C,u[f]=t.nrm[y*3],u[f+1]=t.nrm[y*3+1],u[f+2]=t.nrm[y*3+2],f+=3,d[g++]=(b+dt.half)/dt.size,d[g++]=1-(C+dt.half)/dt.size}let x=new ge;x.setAttribute("position",new me(h,3)),x.setAttribute("normal",new me(u,3)),x.setAttribute("uv",new me(d,2)),x.setIndex(o),x.computeBoundingBox(),x.computeBoundingSphere();let m=new Dt(x,this.material);m.receiveShadow=!0,m.castShadow=!1,m.matrixAutoUpdate=!1,this.group.add(m),this.chunks.push(m)}}};var i1=`
  varying vec3 vWorld;
  varying float vFogDepth;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    vec4 mv = viewMatrix * w;
    vFogDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,n1=`
  uniform sampler2D uHeight;
  uniform float uLevel, uTime, uHalf, uCell, uN;
  uniform vec3 uSunDir, uSunColor, uShallow, uMid, uDeep, uSkyColor, uFogColor;
  uniform float uFogNear, uFogFar;
  varying vec3 vWorld;
  varying float vFogDepth;

  float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }

  vec2 waveGrad(vec2 p, float t, float dist) {
    // higher-frequency waves fade with distance to avoid moire/aliasing
    float f1 = 1.0 / (1.0 + dist * 0.0025);
    float f2 = 1.0 / (1.0 + dist * 0.006);
    float f3 = 1.0 / (1.0 + dist * 0.016);
    float f4 = 1.0 / (1.0 + dist * 0.04);
    vec2 g = vec2(0.0);
    g += vec2( 0.80,  0.60) * cos(dot(p, vec2( 0.80,  0.60)) * 0.42 + t * 0.95) * 0.060 * f1;
    g += vec2(-0.55,  0.83) * cos(dot(p, vec2(-0.55,  0.83)) * 0.77 + t * 1.30) * 0.040 * f2;
    g += vec2( 0.31, -0.95) * cos(dot(p, vec2( 0.31, -0.95)) * 1.31 + t * 1.85) * 0.028 * f3;
    g += vec2(-0.96, -0.28) * cos(dot(p, vec2(-0.96, -0.28)) * 2.10 + t * 2.40) * 0.018 * f4;
    return g;
  }

  void main() {
    vec2 uv = ((vWorld.xz + uHalf) / uCell + 0.5) / uN;
    float terr = texture2D(uHeight, uv).r;
    float depth = uLevel - terr;
    if (depth < -0.02) discard;

    vec3 view = normalize(cameraPosition - vWorld);
    float camDist = length(cameraPosition - vWorld);
    vec2 g = waveGrad(vWorld.xz, uTime, camDist);
    float rip = vnoise(vWorld.xz * 0.9 + uTime * 0.25) - 0.5;
    g += vec2(rip, vnoise(vWorld.xz * 0.9 - uTime * 0.2 + 9.0) - 0.5) * 0.05 / (1.0 + camDist * 0.02);
    vec3 n = normalize(vec3(-g.x, 1.0, -g.y));

    float d = clamp(depth / 13.0, 0.0, 1.0);
    vec3 col = mix(uShallow, uMid, smoothstep(0.0, 0.22, d));
    col = mix(col, uDeep, smoothstep(0.18, 0.85, d));

    // simple lighting + sky reflection
    float ndl = max(dot(n, uSunDir), 0.0);
    col *= 0.78 + 0.32 * ndl;
    float fres = pow(1.0 - max(dot(n, view), 0.0), 3.0);
    col = mix(col, uSkyColor, fres * 0.55);
    vec3 refl = reflect(-uSunDir, n);
    float spec = pow(max(dot(refl, view), 0.0), 220.0);
    col += uSunColor * (smoothstep(0.35, 1.0, spec) * 1.6);

    // shoreline foam: a soft rim plus pulses of foam sliding shoreward
    float nz = vnoise(vWorld.xz * 0.55 + uTime * 0.05);
    float wave = 0.5 + 0.5 * sin(uTime * 0.85 - depth * 2.6 + nz * 3.0);
    float rim = 1.0 - smoothstep(0.0, 0.55 + 0.25 * sin(uTime * 0.7 + vWorld.x * 0.05), depth);
    float pulse = (1.0 - smoothstep(0.4, 2.6, depth)) * smoothstep(0.62, 0.95, wave) * smoothstep(0.25, 0.7, nz);
    float foam = clamp(rim * 0.95 + pulse * 0.55, 0.0, 1.0);
    col = mix(col, vec3(1.0), foam);

    float alpha = mix(0.42, 0.93, smoothstep(0.0, 4.5, depth));
    alpha = max(alpha, foam);
    alpha *= smoothstep(-0.02, 0.22, depth);

    // fog
    float fogF = smoothstep(uFogNear, uFogFar, vFogDepth);
    col = mix(col, uFogColor, fogF);
    gl_FragColor = vec4(col, alpha);
  }
`,_c=class{constructor(t,e){this.scene=t,this.terrain=e;let i=e.n,n=new Uint16Array(i*i);for(let a=0;a<i*i;a++)n[a]=ua.toHalfFloat(e.h[a]);this.heightTex=new Ts(n,i,i,Mr,Ye),this.heightTex.minFilter=this.heightTex.magFilter=Qe,this.heightTex.wrapS=this.heightTex.wrapT=pi,this.heightTex.needsUpdate=!0,this.uniforms={uHeight:{value:this.heightTex},uLevel:{value:dt.seaLevel},uTime:{value:0},uHalf:{value:dt.half},uCell:{value:dt.cell},uN:{value:i},uSunDir:{value:ki.sunDir},uSunColor:{value:ki.sun},uShallow:{value:new ot("#5fe6d2")},uMid:{value:new ot("#1fa8e6")},uDeep:{value:new ot("#0b58c2")},uSkyColor:{value:new ot("#9fd3ff")},uFogColor:{value:ki.horizon.clone()},uFogNear:{value:260},uFogFar:{value:1900}},this.meshes=[];let s=this._plane(9e3,dt.seaLevel);s.position.y=dt.seaLevel,t.add(s),this.meshes.push(s);for(let a of e.layout.lakes){let o=this._plane(a.r*3.4,a.level);o.position.set(a.x,a.level,a.z),t.add(o),this.meshes.push(o)}}_plane(t,e){let i={};for(let o in this.uniforms)i[o]={value:this.uniforms[o].value};i.uLevel={value:e};let n=new xe({uniforms:i,vertexShader:i1,fragmentShader:n1,transparent:!0,depthWrite:!1}),s=new zi(t,t,1,1);s.rotateX(-Math.PI/2);let a=new Dt(s,n);return a.renderOrder=2,a.frustumCulled=!1,a}update(t,e){this.uniforms.uTime.value+=t;for(let i of this.meshes){let n=i.material.uniforms;n.uTime.value=this.uniforms.uTime.value,e?.fog&&(n.uFogColor.value.copy(e.fog.color),n.uFogNear.value=e.fog.near,n.uFogFar.value=e.fog.far)}}};var s1=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    vec4 p = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * p;
    gl_Position.z = gl_Position.w * 0.99999;
  }
`,r1=`
  uniform vec3 uZenith, uHorizon, uSunColor, uSunDir;
  uniform float uTime, uCloudiness, uStorm;
  varying vec3 vDir;

  float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float a = 0.5, s = 0.0;
    for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; }
    return s;
  }

  void main() {
    vec3 d = normalize(vDir);
    float h = d.y;
    vec3 col = mix(uHorizon, uZenith, pow(clamp(h, 0.0, 1.0), 0.5));
    // warm haze band near the horizon on the sun side
    float sd = max(dot(d, uSunDir), 0.0);
    col = mix(col, uHorizon * vec3(1.05, 1.0, 0.92), smoothstep(0.25, 0.0, h) * 0.5);
    col = mix(col, uHorizon * 0.96, smoothstep(0.0, -0.25, h));
    // clouds on a projected plane
    if (h > 0.015) {
      vec2 uv = d.xz / (h + 0.22) * 0.9 + vec2(uTime * 0.006, uTime * 0.002);
      float n = fbm(uv * 1.3);
      float cover = mix(0.66, 0.5, uCloudiness);
      float c = smoothstep(cover, cover + 0.2, n);
      float shade = fbm(uv * 1.3 + vec2(0.05, 0.08) * 3.0);
      vec3 cc = mix(vec3(0.74, 0.82, 0.96), vec3(1.0, 0.99, 0.97), smoothstep(0.35, 0.75, 1.0 - shade + (n - 0.5)));
      c *= smoothstep(0.015, 0.22, h);
      col = mix(col, cc, c * 0.92);
    }
    // sun disc + glow
    col += uSunColor * (pow(sd, 1400.0) * 9.0 + pow(sd, 90.0) * 0.32 + pow(sd, 7.0) * 0.1);
    col = mix(col, vec3(0.34, 0.16, 0.56) * (0.55 + 0.6 * clamp(h + 0.2, 0.0, 1.0)), uStorm * 0.78);
    gl_FragColor = vec4(col, 1.0);
  }
`,bc=class{constructor(t){this.scene=t;let e=new xn(3500,32,20);this.mat=new xe({vertexShader:s1,fragmentShader:r1,side:ci,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:ki.zenith},uHorizon:{value:ki.horizon},uSunColor:{value:ki.sun},uSunDir:{value:ki.sunDir},uTime:{value:0},uCloudiness:{value:.45},uStorm:{value:0}}}),this.dome=new Dt(e,this.mat),this.dome.renderOrder=-10,this.dome.frustumCulled=!1,t.add(this.dome),this.puffs=this._buildPuffs(),t.add(this.puffs)}_buildPuffs(){let t=new Ae(4242),e=new Yt,i=new ns(1,2),n=new Ne({color:16777215,emissive:14674687,emissiveIntensity:.55,fog:!1}),s=46,a=9,o=new Oi(i,n,s*a),l=new re,c=new Ue,h=new D,u=new D,d=0;this.banks=[];for(let f=0;f<s;f++){let g=t.range(0,Math.PI*2),x=Math.sqrt(t.float())*1500,m=Math.cos(g)*x,p=Math.sin(g)*x,v=t.range(190,420),w=t.range(26,62);this.banks.push({x:m,y:v,z:p,r:w*2});for(let M=0;M<a;M++){let y=w*t.range(.5,1);u.set(m+t.range(-1.6,1.6)*w,v+t.range(-.15,.35)*w,p+t.range(-1.2,1.2)*w),h.set(y*1.3,y*.62,y),l.compose(u,c,h),o.setMatrixAt(d++,l)}}return o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.castShadow=!1,o.receiveShadow=!1,o}update(t,e){this.mat.uniforms.uTime.value+=t,this.dome.position.copy(e),this.puffs.position.x=Math.sin(this.mat.uniforms.uTime.value*.01)*40}};var Us=8,Lr=(r,t)=>r+512<<10|t+512,ri=r=>Math.floor(r/Us),fs=1e9,a1=1,Vn=class{constructor(){this.reset()}reset(){return this.hit=!1,this.t=fs,this.x=0,this.y=0,this.z=0,this.nx=0,this.ny=1,this.nz=0,this.collider=null,this.terrain=!1,this}copy(t){return this.hit=t.hit,this.t=t.t,this.x=t.x,this.y=t.y,this.z=t.z,this.nx=t.nx,this.ny=t.ny,this.nz=t.nz,this.collider=t.collider,this.terrain=t.terrain,this}},Mc=class{constructor(t){this.terrain=t,this.grid=new Map,this.stamp=1,this.count=0,this._tmpN=[0,0,0],this._res={y:0,collider:null},this._best=new Vn,this._cand=new Vn,this.onChange=null}_register(t){t.id=a1++,t.stamp=0,t.cells=[];let e=ri(t.minX),i=ri(t.maxX),n=ri(t.minZ),s=ri(t.maxZ);for(let a=n;a<=s;a++)for(let o=e;o<=i;o++){let l=Lr(o,a),c=this.grid.get(l);c||this.grid.set(l,c=[]),c.push(t),t.cells.push(l)}return t.alive=!0,this.count++,this.onChange?.(t),t}remove(t){if(!(!t||!t.alive)){for(let e of t.cells){let i=this.grid.get(e);if(!i)continue;let n=i.indexOf(t);n>=0&&(i[n]=i[i.length-1],i.pop()),i.length||this.grid.delete(e)}t.alive=!1,this.count--,this.onChange?.(t)}}addBox(t,e,i,n,s,a,o={}){return this._register({type:"box",minX:t,maxX:e,minZ:i,maxZ:n,y0:s,y1:a,walkable:o.walkable??!0,blocksBullets:o.blocksBullets??!0,blocksMove:o.blocksMove??!0,owner:o.owner||null,kind:o.kind||"static",material:o.material||null})}addCylinder(t,e,i,n,s,a={}){return this._register({type:"cyl",x:t,z:e,r:i,minX:t-i,maxX:t+i,minZ:e-i,maxZ:e+i,y0:n,y1:s,walkable:a.walkable??!1,blocksBullets:a.blocksBullets??!0,blocksMove:a.blocksMove??!0,owner:a.owner||null,kind:a.kind||"static",material:a.material||null})}addRamp(t,e,i,n,s,a,o,l,c,h={}){let u={type:"ramp",minX:t,maxX:e,minZ:i,maxZ:n,y0:s,lowY:a,highY:o,axis:l,dir:c,walkable:h.walkable??!0,blocksBullets:h.blocksBullets??!0,blocksMove:h.blocksMove??!0,owner:h.owner||null,kind:h.kind||"static",material:h.material||null},d=l==="x"?e-t:n-i,f=(o-a)/d*c;return l==="x"?(u.kx=f,u.kz=0,u.c0=a-f*(c>0?t:e)):(u.kx=0,u.kz=f,u.c0=a-f*(c>0?i:n)),u.top=Math.max(a,o),this._register(u)}topAt(t,e,i){return t.type==="ramp"?t.c0+t.kx*e+t.kz*i:t.y1}groundAt(t,e,i,n=this._res){let s=this.terrain.heightAt(t,e),a=null,o=this.grid.get(Lr(ri(t),ri(e)));if(o)for(let l=0;l<o.length;l++){let c=o[l];if(!c.walkable||!c.alive||t<c.minX||t>c.maxX||e<c.minZ||e>c.maxZ)continue;if(c.type==="cyl"){let u=t-c.x,d=e-c.z;if(u*u+d*d>c.r*c.r)continue}let h=c.type==="ramp"?c.c0+c.kx*t+c.kz*e:c.y1;h<=i&&h>s&&(s=h,a=c)}return n.y=s,n.collider=a,n}ceilingAt(t,e,i){let n=fs,s=this.grid.get(Lr(ri(t),ri(e)));if(s)for(let a=0;a<s.length;a++){let o=s[a];if(!(!o.alive||!o.blocksMove)&&!(t<o.minX||t>o.maxX||e<o.minZ||e>o.maxZ)){if(o.type==="cyl"){let l=t-o.x,c=e-o.z;if(l*l+c*c>o.r*o.r)continue}o.y0>=i-.001&&o.y0<n&&(n=o.y0)}}return n}depenetrate(t,e,i,n){let s=!1,a=t.y,o=ri(t.x-e),l=ri(t.x+e),c=ri(t.z-e),h=ri(t.z+e);this.stamp++;let u=this.stamp;for(let d=0;d<3;d++){let f=!1;for(let g=c;g<=h;g++)for(let x=o;x<=l;x++){let m=this.grid.get(Lr(x,g));if(m)for(let p=0;p<m.length;p++){let v=m[p];if(!v.blocksMove||!v.alive||t.x+e<v.minX||t.x-e>v.maxX||t.z+e<v.minZ||t.z-e>v.maxZ||v.y0>=a+i-.001)continue;let w,M,y,b;if(v.type==="cyl"){if(v.y1<=a+n)continue;w=t.x-v.x,M=t.z-v.z,y=w*w+M*M;let T=e+v.r;if(y>=T*T)continue;let E=Math.sqrt(y);E<1e-5?(w=1,M=0,b=T):(w/=E,M/=E,b=T-E),t.x+=w*b,t.z+=M*b,f=s=!0;continue}let C=t.x<v.minX?v.minX:t.x>v.maxX?v.maxX:t.x,_=t.z<v.minZ?v.minZ:t.z>v.maxZ?v.maxZ:t.z;if(!((v.type==="ramp"?v.c0+v.kx*C+v.kz*_:v.y1)<=a+n)&&(w=t.x-C,M=t.z-_,y=w*w+M*M,!(y>=e*e))){if(y>1e-10){let T=Math.sqrt(y);b=e-T,t.x+=w/T*b,t.z+=M/T*b}else{let T=t.x-v.minX,E=v.maxX-t.x,P=t.z-v.minZ,L=v.maxZ-t.z,I=Math.min(T,E,P,L);I===T?t.x=v.minX-e:I===E?t.x=v.maxX+e:I===P?t.z=v.minZ-e:t.z=v.maxZ+e}f=s=!0}}}if(!f)break}return s}overlaps(t,e,i,n,s,a=.1){let o={x:t,y:e,z:i},l=t,c=i;return this.depenetrate(o,n,s,a),Math.abs(o.x-l)>1e-4||Math.abs(o.z-c)>1e-4}overlapsSolid(t,e,i,n,s,a,o=[]){let l=ri(t),c=ri(e),h=ri(i),u=ri(n);for(let d=h;d<=u;d++)for(let f=l;f<=c;f++){let g=this.grid.get(Lr(f,d));if(g)for(let x=0;x<g.length;x++){let m=g[x];if(!m.alive||!m.blocksMove||o.includes(m.kind)||m.minX>=e||m.maxX<=t||m.minZ>=n||m.maxZ<=i)continue;let p=m.type==="ramp"?m.top:m.y1;if(m.y0<a&&p>s)return m}}return null}_rayBox(t,e,i,n,s,a,o,l,c){let h=0,u=l,d=0,f=0,g=0;if(Math.abs(s)<1e-9){if(e<t.minX||e>t.maxX)return!1}else{let x=1/s,m=(t.minX-e)*x,p=(t.maxX-e)*x,v=-1;if(m>p){let w=m;m=p,p=w,v=1}if(m>h&&(h=m,d=v,f=0,g=0),p<u&&(u=p),h>u)return!1}if(Math.abs(a)<1e-9){if(i<t.y0||i>t.y1)return!1}else{let x=1/a,m=(t.y0-i)*x,p=(t.y1-i)*x,v=-1;if(m>p){let w=m;m=p,p=w,v=1}if(m>h&&(h=m,d=0,f=v,g=0),p<u&&(u=p),h>u)return!1}if(Math.abs(o)<1e-9){if(n<t.minZ||n>t.maxZ)return!1}else{let x=1/o,m=(t.minZ-n)*x,p=(t.maxZ-n)*x,v=-1;if(m>p){let w=m;m=p,p=w,v=1}if(m>h&&(h=m,d=0,f=0,g=v),p<u&&(u=p),h>u)return!1}return h<=1e-4?!1:(c.t=h,c.nx=d,c.ny=f,c.nz=g,!0)}_rayCyl(t,e,i,n,s,a,o,l,c){let h=e-t.x,u=n-t.z,d=s*s+o*o,f=fs,g=0,x=0,m=0;if(d>1e-12){let p=2*(h*s+u*o),v=h*h+u*u-t.r*t.r,w=p*p-4*d*v;if(w>=0){let M=Math.sqrt(w),y=(-p-M)/(2*d);if(y>1e-4&&y<l){let b=i+a*y;if(b>=t.y0&&b<=t.y1){f=y;let C=h+s*y,_=u+o*y;g=C/t.r,m=_/t.r,x=0}}}}if(Math.abs(a)>1e-9){let p=(t.y1-i)/a;if(p>1e-4&&p<f&&p<l){let v=h+s*p,w=u+o*p;v*v+w*w<=t.r*t.r&&(f=p,g=0,x=1,m=0)}}return f>=fs?!1:(c.t=f,c.nx=g,c.ny=x,c.nz=m,!0)}_rayRamp(t,e,i,n,s,a,o,l,c){let h=0,u=l,d=0,f=0,g=0,x=(p,v,w,M)=>{let y=p*s+v*a+w*o,b=p*e+v*i+w*n-M;if(Math.abs(y)<1e-9)return b<=0;let C=-b/y;return y<0?C>h&&(h=C,d=p,f=v,g=w):C<u&&(u=C),h<=u};if(!x(-1,0,0,-t.minX)||!x(1,0,0,t.maxX)||!x(0,0,-1,-t.minZ)||!x(0,0,1,t.maxZ)||!x(0,-1,0,-t.y0))return!1;let m=Math.hypot(t.kx,1,t.kz);return!x(-t.kx/m,1/m,-t.kz/m,t.c0/m)||h<=1e-4||h>u?!1:(c.t=h,c.nx=d,c.ny=f,c.nz=g,!0)}_rayCollider(t,e,i,n,s,a,o,l,c){return t.type==="box"?this._rayBox(t,e,i,n,s,a,o,l,c):t.type==="cyl"?this._rayCyl(t,e,i,n,s,a,o,l,c):this._rayRamp(t,e,i,n,s,a,o,l,c)}raycast(t,e,i,n,s,a,o=300,l={},c=this._best){c.reset();let h=o,u=this._cand,d=!!l.bullets,f=l.ignore;this.stamp++;let g=this.stamp,x=ri(t),m=ri(i),p=n>0?1:-1,v=a>0?1:-1,w=Math.abs(n)>1e-9?Us/Math.abs(n):fs,M=Math.abs(a)>1e-9?Us/Math.abs(a):fs,y=Math.abs(n)>1e-9?(n>0?(x+1)*Us-t:t-x*Us)/Math.abs(n):fs,b=Math.abs(a)>1e-9?(a>0?(m+1)*Us-i:i-m*Us)/Math.abs(a):fs,C=0;for(;C++<400;){let _=this.grid.get(Lr(x,m));if(_)for(let T=0;T<_.length;T++){let E=_[T];E.stamp===g||!E.alive||(E.stamp=g,!(d&&!E.blocksBullets)&&(f&&(E===f||E.owner===f)||this._rayCollider(E,t,e,i,n,s,a,h,u)&&u.t<h&&(h=u.t,c.hit=!0,c.t=u.t,c.nx=u.nx,c.ny=u.ny,c.nz=u.nz,c.collider=E,c.terrain=!1)))}if(Math.min(y,b)>h)break;y<b?(x+=p,y+=w):(m+=v,b+=M)}if(l.terrain!==!1){let _=this.terrain;if(!(e>60&&s>=0)){let T=0,E=0,P=dt.half-1;if(e-_.heightAt(t,i)>=0)for(;T<h;){E=T;let U=t+n*T,B=e+s*T,z=i+a*T,j=_.heightAt(U,z),Z=B-j;T+=Math.max(1.6,Math.min(Z*.5,14)),T>h&&(T=h);let O=t+n*T,Q=e+s*T,pt=i+a*T;if(O<-P||O>P||pt<-P||pt>P)break;let mt=_.heightAt(O,pt);if(Q-mt<0){let Xt=E,Ft=T;for(let rt=0;rt<9;rt++){let F=(Xt+Ft)*.5,$=_.heightAt(t+n*F,i+a*F);e+s*F-$<0?Ft=F:Xt=F}if(Ft<h){h=Ft,c.hit=!0,c.t=Ft,c.collider=null,c.terrain=!0;let rt=_.normalAt(t+n*Ft,i+a*Ft,this._tmpN);c.nx=rt[0],c.ny=rt[1],c.nz=rt[2]}break}if(T>=h)break}}}return c.hit&&(c.x=t+n*c.t,c.y=e+s*c.t,c.z=i+a*c.t),c}lineClear(t,e,i,n,s,a,o={bullets:!0}){let l=n-t,c=s-e,h=a-i,u=Math.hypot(l,c,h);return u<1e-4?!0:!this.raycast(t,e,i,l/u,c/u,h/u,u-.05,o,this._cand2||(this._cand2=new Vn)).hit}};var wc=new ot;function Ns(r){return Array.isArray(r)?r:r&&r.isColor?[r.r,r.g,r.b]:(wc.set(r),[wc.r,wc.g,wc.b])}var _e=class{constructor(){this.pos=[],this.nor=[],this.col=[],this.idx=[],this.vc=0}get empty(){return this.vc===0}_vert(t,e,i,n,s,a,o,l){return this.pos.push(t,e,i),this.nor.push(n,s,a),this.col.push(o[0]*l,o[1]*l,o[2]*l),this.vc++}quad(t,e,i,n,s,a,o=1,l=1,c=1,h=1){let u=e[0]-t[0],d=e[1]-t[1],f=e[2]-t[2],g=i[0]-t[0],x=i[1]-t[1],m=i[2]-t[2],p=d*m-f*x,v=f*g-u*m,w=u*x-d*g;a&&p*a[0]+v*a[1]+w*a[2]<0&&([e,n]=[n,e],[l,h]=[h,l],p=-p,v=-v,w=-w);let M=Math.hypot(p,v,w)||1;p/=M,v/=M,w/=M;let y=Ns(s),b=this._vert(t[0],t[1],t[2],p,v,w,y,o),C=this._vert(e[0],e[1],e[2],p,v,w,y,l),_=this._vert(i[0],i[1],i[2],p,v,w,y,c),R=this._vert(n[0],n[1],n[2],p,v,w,y,h);this.idx.push(b,C,_,b,_,R)}tri(t,e,i,n,s,a=1,o=1,l=1){let c=e[0]-t[0],h=e[1]-t[1],u=e[2]-t[2],d=i[0]-t[0],f=i[1]-t[1],g=i[2]-t[2],x=h*g-u*f,m=u*d-c*g,p=c*f-h*d;s&&x*s[0]+m*s[1]+p*s[2]<0&&([e,i]=[i,e],[o,l]=[l,o],x=-x,m=-m,p=-p);let v=Math.hypot(x,m,p)||1;x/=v,m/=v,p/=v;let w=Ns(n),M=this._vert(t[0],t[1],t[2],x,m,p,w,a),y=this._vert(e[0],e[1],e[2],x,m,p,w,o),b=this._vert(i[0],i[1],i[2],x,m,p,w,l);this.idx.push(M,y,b)}box(t,e,i,n,s,a,o,l={}){let c=l.dark??.86,h=Ns(o),u=c,d=1,f=(g,x,m)=>[g,x,m];this.quad(f(n,e,i),f(n,e,a),f(n,s,a),f(n,s,i),h,[1,0,0],u,u,d,d),this.quad(f(t,e,a),f(t,e,i),f(t,s,i),f(t,s,a),h,[-1,0,0],u,u,d,d),this.quad(f(n,e,a),f(t,e,a),f(t,s,a),f(n,s,a),h,[0,0,1],u,u,d,d),this.quad(f(t,e,i),f(n,e,i),f(n,s,i),f(t,s,i),h,[0,0,-1],u,u,d,d),l.top!==!1&&this.quad(f(t,s,i),f(n,s,i),f(n,s,a),f(t,s,a),h,[0,1,0],1,1,1,1),l.bottom&&this.quad(f(t,e,i),f(t,e,a),f(n,e,a),f(n,e,i),h,[0,-1,0],u*.8,u*.8,u*.8,u*.8)}boxC(t,e,i,n,s,a,o,l){this.box(t-n/2,e-s/2,i-a/2,t+n/2,e+s/2,i+a/2,o,l)}cylinder(t,e,i,n,s,a,o,l={}){let c=l.r1??n,h=Ns(o),u=l.dark??.88,d=e+s;for(let f=0;f<a;f++){let g=f/a*Math.PI*2,x=(f+1)/a*Math.PI*2,m=Math.cos(g),p=Math.sin(g),v=Math.cos(x),w=Math.sin(x),M=(g+x)/2,y=[Math.cos(M),(n-c)/Math.max(s,.001),Math.sin(M)];this.quad([t+m*n,e,i+p*n],[t+v*n,e,i+w*n],[t+v*c,d,i+w*c],[t+m*c,d,i+p*c],h,y,u,u,1,1),l.top!==!1&&c>.001&&this.tri([t,d,i],[t+m*c,d,i+p*c],[t+v*c,d,i+w*c],h,[0,1,0]),l.bottom&&this.tri([t,e,i],[t+m*n,e,i+p*n],[t+v*n,e,i+w*n],h,[0,-1,0],.7,.7,.7)}}cone(t,e,i,n,s,a,o,l={}){this.cylinder(t,e,i,n,s,a,o,{...l,r1:.001,top:!1})}pyramid(t,e,i,n,s,a,o,l,c){let h=l??(t+i)/2,u=c??(e+n)/2,d=[h,s+a,u],f=Ns(o);this.tri([t,s,e],[i,s,e],d,f,[0,1,-1],.9,.9,1),this.tri([i,s,e],[i,s,n],d,f,[1,1,0],.9,.9,1),this.tri([i,s,n],[t,s,n],d,f,[0,1,1],.9,.9,1),this.tri([t,s,n],[t,s,e],d,f,[-1,1,0],.9,.9,1)}gable(t,e,i,n,s,a,o,l,c,h=.6,u=.35,d=.25){let f=Ns(l),g=Ns(c),x=f.map(m=>m*.55);if(o==="x"){let m=(e+n)/2,p=s-d;this.quad([t-u,p,e-h],[i+u,p,e-h],[i+u,s+a,m],[t-u,s+a,m],f,[0,1,-1],.92,.92,1,1),this.quad([t-u,p,n+h],[i+u,p,n+h],[i+u,s+a,m],[t-u,s+a,m],f,[0,1,1],.92,.92,1,1),this.quad([t-u,p-.05,e-h],[i+u,p-.05,e-h],[i+u,s+a-.12,m],[t-u,s+a-.12,m],x,[0,-1,1]),this.quad([t-u,p-.05,n+h],[i+u,p-.05,n+h],[i+u,s+a-.12,m],[t-u,s+a-.12,m],x,[0,-1,-1]),this.tri([t,s-.02,e],[t,s-.02,n],[t,s+a-.06,m],g,[-1,0,0]),this.tri([i,s-.02,e],[i,s-.02,n],[i,s+a-.06,m],g,[1,0,0])}else{let m=(t+i)/2,p=s-d;this.quad([t-h,p,e-u],[t-h,p,n+u],[m,s+a,n+u],[m,s+a,e-u],f,[-1,1,0],.92,.92,1,1),this.quad([i+h,p,e-u],[i+h,p,n+u],[m,s+a,n+u],[m,s+a,e-u],f,[1,1,0],.92,.92,1,1),this.quad([t-h,p-.05,e-u],[t-h,p-.05,n+u],[m,s+a-.12,n+u],[m,s+a-.12,e-u],x,[1,-1,0]),this.quad([i+h,p-.05,e-u],[i+h,p-.05,n+u],[m,s+a-.12,n+u],[m,s+a-.12,e-u],x,[-1,-1,0]),this.tri([t,s-.02,e],[i,s-.02,e],[m,s+a-.06,e],g,[0,0,-1]),this.tri([t,s-.02,n],[i,s-.02,n],[m,s+a-.06,n],g,[0,0,1])}}build(t){let e=new ge;return e.setAttribute("position",new Jt(this.pos,3)),e.setAttribute("normal",new Jt(this.nor,3)),e.setAttribute("color",new Jt(this.col,3)),e.setIndex(this.vc>65535?new Fn(this.idx,1):new Nn(this.idx,1)),e.computeBoundingBox(),e.computeBoundingSphere(),t?new Dt(e,t):e}};function Di(r={}){return new Ne({vertexColors:!0,...r})}var Lu=class{constructor(t,e,i,n,s){this.cx=t,this.cz=e,this.face=i,this.w=n,this.d=s}map(t,e){let{cx:i,cz:n,face:s,d:a}=this;switch(s){case 0:return[i-t,n-a/2+e];case 1:return[i+a/2-e,n-t];case 2:return[i+t,n+a/2-e];default:return[i-a/2+e,n+t]}}rect(t,e,i,n){let s=this.map(t,i),a=this.map(e,n);return{minX:Math.min(s[0],a[0]),maxX:Math.max(s[0],a[0]),minZ:Math.min(s[1],a[1]),maxZ:Math.max(s[1],a[1])}}axisOf(t){let e=this.face===1||this.face===3;return t==="u"?e?"z":"x":e?"x":"z"}get front(){return[[0,-1],[1,0],[0,1],[-1,0]][this.face]}footprint(){return this.rect(-this.w/2,this.w/2,0,this.d)}};function be(r,t,e,i,n,s,a,o,l,c={}){let h=t.rect(e,i,n,s);return r.solid.box(h.minX,a,h.minZ,h.maxX,o,h.maxZ,l,c),c.collide!==!1&&r.physics.addBox(h.minX,h.maxX,h.minZ,h.maxZ,a,o,{walkable:!!c.walkable,kind:"building",material:c.mat||"wood",blocksBullets:c.bullets!==!1}),h}var Ec=(r,t)=>{let e=new ot(r);return e.multiplyScalar(t),e},ep=(r,t,e=.06)=>Ec(r,1+(t.float()-.5)*2*e);function Sc(r,t,e,i,n,s,a,o,l,c,h=[],u={}){let d=(x,m,p,v)=>{m-x<.02||v-p<.02||(e==="u"?be(r,t,x,m,i,n,p,v,c,{mat:u.mat,...u.box}):be(r,t,i,n,x,m,p,v,c,{mat:u.mat,...u.box}))},f=[...h].sort((x,m)=>x.c-m.c),g=s;for(let x of f){let m=x.c-x.w/2,p=x.c+x.w/2;d(g,m,o,l),d(m,p,o,x.y0),d(m,p,x.y1,l),g=p;let v=u.trim??16777215,w=.09,M=(i+n)/2,y=i-.04,b=n+.04,C=(_,R,T,E)=>{e==="u"?be(r,t,_,R,y,b,T,E,v,{collide:!1,dark:.95}):be(r,t,y,b,_,R,T,E,v,{collide:!1,dark:.95})};if(x.frame!==!1&&(C(m-.02,m+w,x.y0,x.y1),C(p-w,p+.02,x.y0,x.y1),C(m-.02,p+.02,x.y1-w,x.y1+.03),x.y0>o+.3&&C(m-.02,p+.02,x.y0-.03,x.y0+w*.6)),x.glass){let _=(I,U)=>t.map(I,U),R=x.y0+.06,T=x.y1-.06,E,P;e==="u"?(E=_(m+.05,M),P=_(p-.05,M)):(E=_(M,m+.05),P=_(M,p-.05));let L=[[E[0],R,E[1]],[P[0],R,P[1]],[P[0],T,P[1]],[E[0],T,E[1]]];r.glass.quad(L[0],L[1],L[2],L[3],12576511,[0,0,1]),r.glass.quad(L[0],L[1],L[2],L[3],12576511,[0,0,-1]),r.glass.quad(L[0],L[1],L[2],L[3],12576511,[1,0,0]),r.glass.quad(L[0],L[1],L[2],L[3],12576511,[-1,0,0])}}d(g,a,o,l)}function Tc(r,t,e,i,n){let s=[];if(r<=0)return s;for(let a=0;a<r;a++){let o=t+(a+1)/(r+1)*(e-t);i!=null&&Math.abs(o-i)<(n+1.9)/2||s.push(o)}return s}function ip(r,t){let{rng:e}=r,i=new Lu(t.x,t.z,t.face,t.w,t.d),n=t.t??.26,s=t.H,a=t.stories||1,o=t.floorY,l=o+s*a,c=t.w/2,h=t.wall,u=t.trim??16249834,d=t.mat||"wood",f=be(r,i,-c-.12,c+.12,-.12,t.d+.12,t.groundMin-.6,o,t.base??10132127,{mat:"stone",dark:.8,collide:!0,walkable:!1});be(r,i,-c+n,c-n,n,t.d-n,o-.02,o+.12,t.floor??13081183,{walkable:!0,dark:1,mat:"wood",collide:!1});let g=i.rect(-c,c,0,t.d);r.physics.addBox(g.minX,g.maxX,g.minZ,g.maxZ,o-.5,o+.12,{walkable:!0,kind:"building",material:"wood"});let x=t.bigDoor?t.bigDoor.w:1.7,m=t.bigDoor?t.bigDoor.h:2.45,p=t.doorU??0,v={c:p,w:x,y0:o+.12,y1:o+.12+m,frame:!0},w=t.winW??1.4,M=t.sill??.95,y=t.winH??1.2,b=(W,tt=0)=>({c:W,w,y0:o+tt*s+M,y1:o+tt*s+M+y,glass:!0}),C=t.windows||{front:1,back:1,left:1,right:1},_=[v],R=[],T=[],E=[];for(let W=0;W<a;W++){for(let tt of Tc(C.front,-c+n,c-n,W===0?p:null,w))_.push(b(tt,W));for(let tt of Tc(C.back,-c+n,c-n,null,w))R.push(b(tt,W));for(let tt of Tc(C.left,n,t.d-n,null,w))T.push(b(tt,W));for(let tt of Tc(C.right,n,t.d-n,null,w))E.push(b(tt,W))}t.backDoor&&R.push({c:t.backDoor,w:1.5,y0:o+.12,y1:o+.12+2.3,frame:!0});let P=o+.12,L=l,I={trim:u,mat:d};if(Sc(r,i,"u",0,n,-c,c,P,L,h,_,I),Sc(r,i,"u",t.d-n,t.d,-c,c,P,L,h,R,I),Sc(r,i,"v",-c,-c+n,n,t.d-n,P,L,h,T,I),Sc(r,i,"v",c-n,c,n,t.d-n,P,L,h,E,I),t.bands){let W=t.bandH??.42,tt=t.bands;for(let et=P+W*.5;et<L-.2;et+=W){let ht=Math.min(et+.09,L),N=(Ut,Bt,k)=>{let S=[],G=Bt,X=Ut.filter(K=>ht>K.y0-.02&&et<K.y1+.02).sort((K,ut)=>K.c-ut.c);for(let K of X)S.push([G,K.c-K.w/2-.1]),G=K.c+K.w/2+.1;return S.push([G,k]),S.filter(K=>K[1]-K[0]>.05)};for(let[Ut,Bt]of N(_,-c-.02,c+.02))be(r,i,Ut,Bt,-.035,0,et,ht,tt,{collide:!1,dark:1});for(let[Ut,Bt]of N(R,-c-.02,c+.02))be(r,i,Ut,Bt,t.d,t.d+.035,et,ht,tt,{collide:!1,dark:1});for(let[Ut,Bt]of N(T,0,t.d))be(r,i,-c-.035,-c,Ut,Bt,et,ht,tt,{collide:!1,dark:1});for(let[Ut,Bt]of N(E,0,t.d))be(r,i,c,c+.035,Ut,Bt,et,ht,tt,{collide:!1,dark:1})}}if(t.corners!==!1){let W=t.cornerColor??u;for(let[tt,et]of[[-c,0],[c-.2,0],[-c,t.d-.2],[c-.2,t.d-.2]])be(r,i,tt-.03,tt+.23,et-.03,et+.23,o+.1,l,W,{collide:!1,dark:.92})}let U=t.ceiling??15985368;be(r,i,-c+n,c-n,n,t.d-n,l-.16,l,U,{collide:!1,bottom:!0,dark:1});let B=i.rect(-c+n,c-n,n,t.d-n);r.physics.addBox(B.minX,B.maxX,B.minZ,B.maxZ,l-.16,l,{walkable:!1,kind:"building",material:"wood"});let z=null;if(a===2){let W=o+s,tt=t.d-n-3.7,et=-c+n+1.25;be(r,i,-c+n,c-n,n,tt,W-.14,W,t.floor??13081183,{walkable:!0,bottom:!0,dark:1,mat:"wood"}),be(r,i,et,c-n,tt,t.d-n,W-.14,W,t.floor??13081183,{walkable:!0,bottom:!0,dark:1,mat:"wood"});let ht=i.rect(-c+n,et,tt,t.d-n),N=i.axisOf("v"),Ut=i.map(0,tt),Bt=i.map(0,t.d-n),k=N==="x"?Bt[0]>Ut[0]:Bt[1]>Ut[1];r.physics.addRamp(ht.minX,ht.maxX,ht.minZ,ht.maxZ,o+.1,o+.12,W,N,k?1:-1,{kind:"building",material:"wood"});let S=13;for(let G=0;G<S;G++){let X=tt+G/S*(t.d-n-tt),K=tt+(G+1)/S*(t.d-n-tt);be(r,i,-c+n,et,X,K,o+.12,o+.12+(G+1)/S*(s-.12),12159570,{collide:!1,dark:.9})}be(r,i,et-.04,et+.04,tt,t.d-n,W+.05,W+.95,9067051,{collide:!1}),z={fy:W}}let j=t.overhang??.6,Z=t.roof,O=i.footprint(),Q=t.roofType||"gable";if(Q==="gable"){let W=i.axisOf(t.ridge||"u"),tt=t.rise??Math.min(t.w,t.d)*.38,et=j,ht=.35,N=.25;if(r.solid.gable(O.minX,O.minZ,O.maxX,O.maxZ,l,tt,W,Z,h,et,ht,N),W==="x"){let Ut=(O.minZ+O.maxZ)/2;r.physics.addRamp(O.minX-ht,O.maxX+ht,O.minZ-et,Ut,l-N-.3,l-N,l+tt,"z",1,{kind:"building",material:"wood"}),r.physics.addRamp(O.minX-ht,O.maxX+ht,Ut,O.maxZ+et,l-N-.3,l-N,l+tt,"z",-1,{kind:"building",material:"wood"})}else{let Ut=(O.minX+O.maxX)/2;r.physics.addRamp(O.minX-et,Ut,O.minZ-ht,O.maxZ+ht,l-N-.3,l-N,l+tt,"x",1,{kind:"building",material:"wood"}),r.physics.addRamp(Ut,O.maxX+et,O.minZ-ht,O.maxZ+ht,l-N-.3,l-N,l+tt,"x",-1,{kind:"building",material:"wood"})}if(t._rise=tt,t.ridgeCap!==!1){let Ut=Ec(Z,.8);W==="x"?r.solid.box(O.minX-ht,l+tt-.08,(O.minZ+O.maxZ)/2-.16,O.maxX+ht,l+tt+.1,(O.minZ+O.maxZ)/2+.16,Ut):r.solid.box((O.minX+O.maxX)/2-.16,l+tt-.08,O.minZ-ht,(O.minX+O.maxX)/2+.16,l+tt+.1,O.maxZ+ht,Ut)}}else if(Q==="flat"){let W=t.flatOverhang??.3;r.solid.box(O.minX-W,l,O.minZ-W,O.maxX+W,l+.28,O.maxZ+W,Z,{bottom:!0}),r.physics.addBox(O.minX-W,O.maxX+W,O.minZ-W,O.maxZ+W,l-.05,l+.28,{walkable:!0,kind:"building",material:"stone"});let tt=Ec(Z,.85),et=.14,ht=.5;r.solid.box(O.minX-W,l+.28,O.minZ-W,O.maxX+W,l+.28+ht,O.minZ-W+et,tt),r.solid.box(O.minX-W,l+.28,O.maxZ+W-et,O.maxX+W,l+.28+ht,O.maxZ+W,tt),r.solid.box(O.minX-W,l+.28,O.minZ-W+et,O.minX-W+et,l+.28+ht,O.maxZ+W-et,tt),r.solid.box(O.maxX+W-et,l+.28,O.minZ-W+et,O.maxX+W,l+.28+ht,O.maxZ+W-et,tt)}else if(Q==="shed"){let W=t.rise??1.3,tt=o1(Z),et=.5,ht=i.map(-c-et,-et),N=i.map(c+et,-et),Ut=i.map(c+et,t.d+et),Bt=i.map(-c-et,t.d+et);r.solid.quad([ht[0],l-.1,ht[1]],[N[0],l-.1,N[1]],[Ut[0],l+W,Ut[1]],[Bt[0],l+W,Bt[1]],tt,[0,1,0],.9,.9,1,1),r.solid.quad([ht[0],l-.2,ht[1]],[N[0],l-.2,N[1]],[Ut[0],l+W-.1,Ut[1]],[Bt[0],l+W-.1,Bt[1]],tt.map(ut=>ut*.5),[0,-1,0]);let k=i.rect(-c-et,c+et,-et,t.d+et),S=i.axisOf("v"),G=i.map(0,-et),X=i.map(0,t.d+et),K=S==="x"?X[0]>G[0]:X[1]>G[1];r.physics.addRamp(k.minX,k.maxX,k.minZ,k.maxZ,l-.3,l-.1,l+W,S,K?1:-1,{kind:"building",material:"metal"});for(let ut of[-1,1]){let gt=ut*c,it=i.map(gt,0),nt=i.map(gt,t.d);r.solid.tri([it[0],l,it[1]],[nt[0],l,nt[1]],[nt[0],l+W-.1,nt[1]],h,[ut*(i.front[1]?1:0),0,ut*(i.front[0]?1:0)])}}if(t.porch){let W=p,tt=t.porchW??3.4,et=t.porchD??1.7;if(be(r,i,W-tt/2,W+tt/2,-et,0,o-.02,o+.14,t.porchColor??12159570,{walkable:!0,mat:"wood",dark:.95}),be(r,i,W-.9,W+.9,-et-.55,-et,o-.32,o-.02,11119021,{walkable:!0,mat:"stone"}),t.porchRoof!==!1){let ht=o+2.75;be(r,i,W-tt/2-.15,W+tt/2+.15,-et-.15,.05,ht,ht+.16,t.porchRoof??t.roof,{walkable:!0,dark:.9,mat:"wood"});for(let N of[W-tt/2+.1,W+tt/2-.2])be(r,i,N,N+.12,-et+.05,-et+.17,o+.14,ht,u,{collide:!1})}}else t.bigDoor||(be(r,i,p-1.1,p+1.1,-.9,0,o-.02,o+.1,12171710,{walkable:!0,mat:"stone",dark:.9}),be(r,i,p-1.1,p+1.1,-1.7,-.9,o-.45,o-.02,10855850,{walkable:!0,mat:"stone",dark:.9}));if(t.bigDoor&&be(r,i,p-t.bigDoor.w/2-1,p+t.bigDoor.w/2+1,-1.6,0,o-.1,o+.1,12171710,{walkable:!0,mat:"stone",dark:.9}),t.chimney&&Q==="gable"){let W=t.chimneyU??-c*.5,tt=t.d*.62,et=t._rise??2,ht=(t.ridge||"u")==="u",N=ht?W:0,Ut=ht?t.d/2:tt;be(r,i,N-.4,N+.4,Ut-.4,Ut+.4,l+.2,l+et+1,t.chimney,{collide:!1,dark:.85}),be(r,i,N-.5,N+.5,Ut-.5,Ut+.5,l+et+.95,l+et+1.15,5592416,{collide:!1})}if(t.shutters||t.flowers){for(let W of _)if(!(!W.glass||W.y0>o+s)){if(t.shutters)for(let tt of[-1,1]){let et=W.c+tt*(W.w/2+.22);be(r,i,et-.2,et+.2,-.09,0,W.y0-.02,W.y1+.02,t.shutters,{collide:!1,dark:.95})}if(t.flowers){be(r,i,W.c-W.w/2,W.c+W.w/2,-.32,-.04,W.y0-.3,W.y0-.02,8014374,{collide:!1});for(let tt=0;tt<5;tt++){let et=W.c-W.w/2+.15+tt*(W.w-.3)/4;be(r,i,et-.11,et+.11,-.3,-.08,W.y0-.03,W.y0+.16,e.pick([16739226,16765503,16747069,12610559,16777215]),{collide:!1,dark:1})}}}}if(t.awning){let W=t.awningW??t.w-1.2,tt=o+2.85,et=8;for(let ht=0;ht<et;ht++){let N=-W/2+ht/et*W,Ut=-W/2+(ht+1)/et*W,Bt=ht%2?t.awning:16777215,k=i.map(N,-.05),S=i.map(Ut,-.05),G=i.map(Ut,-1.7),X=i.map(N,-1.7);r.solid.quad([k[0],tt,k[1]],[S[0],tt,S[1]],[G[0],tt-.55,G[1]],[X[0],tt-.55,X[1]],Bt,[0,1,0],1,1,.95,.95),r.solid.quad([k[0],tt-.06,k[1]],[S[0],tt-.06,S[1]],[G[0],tt-.61,G[1]],[X[0],tt-.61,X[1]],Ec(Bt,.6),[0,-1,0])}}if(t.sign){let W=t.signU??0;be(r,i,W-1.6,W+1.6,-.12,.02,o+s+.2,o+s+1.05,t.sign,{collide:!1}),be(r,i,W-1.45,W+1.45,-.14,-.1,o+s+.32,o+s+.93,16777215,{collide:!1,dark:1})}let pt=[],mt=[],Xt={u0:-c+n+.25,u1:c-n-.25,v0:n+.4,v1:t.d-n-.25},Ft=o+.12,rt=(W,tt,et,ht,N,Ut,Bt={})=>{be(r,i,W,tt,et,ht,Ft+(Bt.lift||0),Ft+(Bt.lift||0)+N,Ut,{walkable:!0,mat:"wood",collide:Bt.collide!==!1,dark:Bt.dark??.9}),mt.push({u0:W,u1:tt,v0:et,v1:ht})},F=t.interior||"home",$=a===2?{u0:-c+n,u1:-c+n+1.3,v0:t.d-n-3.75,v1:t.d-n}:null;if($&&mt.push($),F==="home"){let W=[12082232,5930933,14267466,7250795],tt=e.pick(W);be(r,i,-1.3,1.3,t.d*.35,t.d*.35+2.2,Ft,Ft+.02,tt,{collide:!1,dark:1});let et=c*.35;rt(et-1,et+1,t.d-n-.95,t.d-n-.1,.55,5992373),rt(et-1,et+1,t.d-n-.28,t.d-n-.1,1,5004956);let ht=-c*.4,N=t.d*.42;if(rt(ht-.6,ht+.6,N-.4,N+.4,.76,10185276),rt(ht-.95,ht-.65,N-.2,N+.2,.45,8014374),rt(ht+.65,ht+.95,N-.2,N+.2,.45,8014374),rt(c-n-.5,c-n-.05,t.d*.3,t.d*.3+1.6,1.9,8146730),$||rt(-c+n+.05,-c+n+1.1,t.d-n-2.1,t.d-n-.05,.5,15261904),a===2){let Ut=o+s+0;be(r,i,c*.2,c*.2+1,n+.2,n+2.2,Ut,Ut+.5,15129800,{walkable:!0,collide:!0,dark:.9})}}else if(F==="shop"){rt(-c+n+.4,-c+n+3.6,t.d*.45,t.d*.45+.7,1.05,9067051);for(let W=0;W<3;W++)rt(c-n-.55,c-n-.05,1.2+W*1.8,2.5+W*1.8,1.9,7303032);rt(-c+n+.05,-c+n+.55,t.d-n-2.6,t.d-n-.05,2,9067051)}else if(F==="warehouse"){let W=[12088115,9071164,12618309];for(let tt=0;tt<5;tt++){let et=-c+n+1.1+tt%3*2,ht=t.d-n-1.4-Math.floor(tt/3)*1.6;rt(et-.7,et+.7,ht-.7,ht+.7,1.4,e.pick(W),{dark:.95})}rt(c-n-1.6,c-n-.1,t.d*.3,t.d*.3+4,.9,7040888)}else if(F==="barn"){for(let W=0;W<4;W++){let tt=-c+n+1.3+W*1.7,et=t.d-n-1.2;rt(tt-.7,tt+.7,et-.7,et+.7,1.1,14926682,{dark:.95})}rt(c-n-2.4,c-n-.1,.7,2.6,1,9067051)}let lt=[];for(let W=0;W<=4;W++)for(let tt=0;tt<=4;tt++)lt.push([Xt.u0+W/4*(Xt.u1-Xt.u0),Xt.v0+tt/4*(Xt.v1-Xt.v0)]);e.shuffle(lt);let Et=(W,tt)=>!mt.some(et=>W>et.u0-.5&&W<et.u1+.5&&tt>et.v0-.5&&tt<et.v1+.5)&&!(Math.abs(W-p)<1.3&&tt<1.8);for(let[W,tt]of lt){if(pt.length>=(t.lootSpots??3))break;if(!Et(W,tt))continue;let[et,ht]=i.map(W,tt);pt.push({x:et,z:ht,y:o+.12,floor:0})}let ct=null;if(t.chest){let W=[[Xt.u1-.35,Xt.v1-.3],[Xt.u0+.35,Xt.v1-.3],[Xt.u1-.35,Xt.v0+.9]];for(let[tt,et]of W)if(Et(tt,et)&&!($&&tt<$.u1+.8&&et>$.v0-.8)){let[ht,N]=i.map(tt,et),[Ut,Bt]=i.map(0,t.d/2);ct={x:ht,z:N,y:o+.12,yaw:Math.atan2(Ut-ht,Bt-N)};break}}let Rt=[];if(a===2){let[W,tt]=i.map(c*.5,t.d*.55);Rt.push({x:W,z:tt,y:o+s+.02,floor:1})}let[ce,Kt]=i.map(p,-1.6),[ne,pe]=i.map(p,1.4),Qt={doorOut:{x:ce,z:Kt},doorIn:{x:ne,z:pe}};if(t.bigDoor){let[W,tt]=i.map(p,-2.6);Qt.doorOut={x:W,z:tt};let[et,ht]=i.map(p,2.4);Qt.doorIn={x:et,z:ht}}let Gt=i.footprint();return{kind:t.kind||"house",x:t.x,z:t.z,face:t.face,floorY:o,top:l,w:t.w,d:t.d,foot:{minX:Gt.minX,maxX:Gt.maxX,minZ:Gt.minZ,maxZ:Gt.maxZ},rect:{minX:Gt.minX-1.4,maxX:Gt.maxX+1.4,minZ:Gt.minZ-1.4,maxZ:Gt.maxZ+1.4},spots:pt,upper:Rt,chest:ct,nav:Qt,stories:a}}var o1=r=>{let t=new ot(r);return[t.r,t.g,t.b]};var np=(r,t)=>new ot(r).multiplyScalar(t);function sp(r,t,e,i,n={}){r.solid.cylinder(t,i,e,.13,4.6,6,n.pole??5923960,{dark:.9}),r.solid.cylinder(t,i,e,.24,.35,6,2764602),r.solid.box(t-.6,i+4.6-.12,e-.06,t+.06,i+4.6,e+.06,n.pole??5923960),r.solid.box(t-.85,i+4.6-.22,e-.2,t-.4,i+4.6-.06,e+.2,16774338,{dark:1}),r.physics.addCylinder(t,e,.2,i-.3,i+4.6,{kind:"prop",material:"metal"}),r.lights?.push({x:t-.6,y:i+4.6-.3,z:e})}function rp(r,t,e,i,n=!0){let o=n?.95:.3,l=n?.3:.95;if(r.solid.box(t-o,i+.42,e-l,t+o,i+.5,e+l,10185276),n){r.solid.box(t-o,i+.5,e+l-.06,t+o,i+1,e+l,10185276);for(let c of[-.8,.8])r.solid.box(t+c-.05,i,e-l,t+c+.05,i+.42,e+l,3883602)}else{r.solid.box(t+o-.06,i+.5,e-l,t+o,i+1,e+l,10185276);for(let c of[-.8,.8])r.solid.box(t-o,i,e+c-.05,t+o,i+.42,e+c+.05,3883602)}r.physics.addBox(t-o,t+o,e-l,e+l,i,i+.5,{walkable:!0,kind:"prop",material:"wood"})}function $a(r,t,e,i,n,s,a=16777215,o=.95){let l=Math.hypot(i-t,n-e),c=Math.max(1,Math.round(l/.9));for(let u=0;u<=c;u++){let d=u/c,f=t+(i-t)*d,g=e+(n-e)*d;r.solid.box(f-.04,s,g-.04,f+.04,s+o,g+.04,a,{dark:.9})}let h=Math.abs(i-t)>Math.abs(n-e);for(let u of[.3,.7])h?r.solid.box(Math.min(t,i),s+u,e-.02,Math.max(t,i),s+u+.08,e+.02,a,{dark:.95}):r.solid.box(t-.02,s+u,Math.min(e,n),t+.02,s+u+.08,Math.max(e,n),a,{dark:.95})}function ap(r,t,e,i){for(let[o,l]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.solid.box(t+o*2-.18,i-.4,e+l*2-.18,t+o*2+.18,i+11,e+l*2+.18,9081500),r.physics.addCylinder(t+o*2,e+l*2,.28,i-.4,i+11,{kind:"prop",material:"metal"});for(let o of[3.5,7])r.solid.box(t-2,i+o,e-2.05,t+2,i+o+.12,e-1.95,9081500),r.solid.box(t-2,i+o,e+1.95,t+2,i+o+.12,e+2.05,9081500),r.solid.box(t-2.05,i+o,e-2,t-1.95,i+o+.12,e+2,9081500),r.solid.box(t+1.95,i+o,e-2,t+2.05,i+o+.12,e+2,9081500);r.solid.cylinder(t,i+11,e,3,4.6,14,4891609,{bottom:!0}),r.solid.cylinder(t,i+11+4.6,e,3+.2,.3,14,3045544,{dark:1}),r.solid.cone(t,i+11+4.85,e,3+.25,1.8,14,14240330),r.physics.addCylinder(t,e,3,i+11,i+11+5,{kind:"prop",material:"metal",walkable:!0}),r.solid.box(t+2.05,i,e-.15,t+2.25,i+11,e+.15,4475477)}function op(r,t,e,i,n=13620957){r.solid.cylinder(t,i-.3,e,2.7,11,14,n,{dark:.85});for(let s=1;s<5;s++)r.solid.cylinder(t,i+s*2.2,e,2.76,.16,14,10134445,{dark:1});r.solid.cone(t,i+10.7,e,2.9,2.2,14,11551535),r.physics.addCylinder(t,e,2.7,i-.3,i+10.7,{kind:"prop",material:"metal",walkable:!1})}function lp(r,t,e,i,n=.9){r.solid.cylinder(t,i,e,n,1.3,10,15254106,{bottom:!0,dark:.85}),r.solid.cylinder(t,i+.42,e,n+.02,.08,10,13212218,{dark:1}),r.solid.cylinder(t,i+.86,e,n+.02,.08,10,13212218,{dark:1}),r.physics.addCylinder(t,e,n,i,i+1.3,{kind:"prop",material:"wood",walkable:!0})}function cp(r,t,e,i,n){r.solid.cylinder(t,i-.4,e,3.2,13,10,15787730,{r1:1.9,dark:.82}),r.solid.cylinder(t,i+13-.4,e,2.05,.4,10,9071178,{dark:1}),r.solid.cone(t,i+13,e,2.3,2.6,10,11551535),r.solid.box(t-.6,i-.1,e+2.95,t+.6,i+2,e+3.35,8014374,{dark:1}),r.physics.addCylinder(t,e,3,i-.4,i+13,{kind:"prop",material:"wood",walkable:!1});let l=new _e,c=16117990,h=9067051;for(let d=0;d<4;d++){let f=d/4*Math.PI*2+Math.PI/4,g=Math.cos(f),x=Math.sin(f);((w,M,y,b)=>{let C=(P,L)=>[y+P*g-L*x,b+P*x+L*g,0],R=[C(.4,-M/2),C(w,-M/2),C(w,M/2),C(.4,M/2)],T=R.map(P=>[P[0],P[1],.18]),E=R.map(P=>[P[0],P[1],-.18]);return l.quad(T[0],T[1],T[2],T[3],h,[0,0,1]),l.quad(E[0],E[1],E[2],E[3],h,[0,0,-1]),C})(8.6,.28,0,0);let p=(w,M)=>[w*g-M*x,w*x+M*g,.06],v=[p(1.8,.14),p(8.4,.14),p(8.4,1.7),p(1.8,1.7)];l.quad(v[0],v[1],v[2],v[3],c,[0,0,1]),l.quad(v[0],v[1],v[2],v[3],c,[0,0,-1])}l.box(-.45,-.45,-.5,.45,.45,.6,7031338);let u=new Dt(l.build(),Di({side:Fe}));u.position.set(t,i+13-1.2,e+3.1),u.castShadow=!0,r.group.add(u),r.animated.push({obj:u,axis:"z",speed:.55+n.float()*.2})}function hp(r,t,e,i){for(let o=0;o<5;o++){let l=3.3-o*.28,c=3.3-(o+1)*.28;r.solid.cylinder(t,i+o*4.4,e,l,4.4,14,o%2?14240330:16777215,{r1:c,dark:.9})}let a=i+5*4.4;r.solid.cylinder(t,a,e,3.2,.5,14,2830392,{dark:1}),r.solid.cylinder(t,a+.5,e,2,2.6,12,16771488,{dark:1}),r.solid.cylinder(t,a+3.1,e,2.3,.35,12,2830392,{dark:1}),r.solid.cone(t,a+3.45,e,2.3,2.2,12,14240330),r.physics.addCylinder(t,e,3.2,i-.5,a+.5,{kind:"prop",material:"stone",walkable:!0}),r.solid.box(t+4.5,i-.5,e-2.2,t+9.5,i+3,e+2.2,15787730),r.solid.box(t+4.3,i+3,e-2.4,t+9.7,i+3.35,e+2.4,11551535),r.physics.addBox(t+4.5,t+9.5,e-2.2,e+2.2,i-.5,i+3.35,{kind:"building",material:"wood",walkable:!0})}function up(r,t,e,i,n,s,a=1){let h=n?3:1.2,u=n?2.4/2:6/2;for(let d=0;d<a;d++){let f=i+d*2.6;r.solid.box(t-h,f,e-u,t+h,f+2.6,e+u,s,{dark:.85,bottom:!0});let g=np(s,.86);for(let x=0;x<8;x++){let m=-2.6+x*5.2/7;n?(r.solid.box(t+m-.06,f+.1,e-u-.03,t+m+.06,f+2.6-.1,e-u,g,{dark:1}),r.solid.box(t+m-.06,f+.1,e+u,t+m+.06,f+2.6-.1,e+u+.03,g,{dark:1})):(r.solid.box(t-h-.03,f+.1,e+m-.06,t-h,f+2.6-.1,e+m+.06,g,{dark:1}),r.solid.box(t+h,f+.1,e+m-.06,t+h+.03,f+2.6-.1,e+m+.06,g,{dark:1}))}}r.physics.addBox(t-h,t+h,e-u,e+u,i,i+2.6*a,{kind:"prop",material:"metal",walkable:!0})}function dp(r,t,e,i,n,s=1.15,a=3.2){let o=Math.abs(i-t)>Math.abs(n-e),l=o?Math.min(t,i):t-a/2,c=o?Math.max(t,i):t+a/2,h=o?e-a/2:Math.min(e,n),u=o?e+a/2:Math.max(e,n);r.solid.box(l,s-.22,h,c,s,u,12159570,{bottom:!0,dark:.9}),r.physics.addBox(l,c,h,u,s-.3,s,{kind:"prop",material:"wood",walkable:!0});let d=o?c-l:u-h;for(let f=.6;f<d;f+=.6)o?r.solid.box(l+f-.02,s,h,l+f+.02,s+.015,u,9069110,{dark:1}):r.solid.box(l,s,h+f-.02,c,s+.015,h+f+.02,9069110,{dark:1});for(let f=0;f<=d;f+=3.2)for(let g of[-1,1]){let x=o?l+f:t+g*(a/2-.1),m=o?e+g*(a/2-.1):h+f;r.solid.box(x-.14,-3,m-.14,x+.14,s+.7,m+.14,7031338,{dark:.85}),r.solid.box(x-.18,s+.7,m-.18,x+.18,s+.78,m+.18,9080729,{dark:1})}}function fp(r,t,e,i,n,s=.05){let l=i?2.6:1,c=i?2/2:5.2/2;r.solid.box(t-l,s-.5,e-c,t+l,s+.65,e+c,n,{dark:.8,bottom:!0}),r.solid.box(t-l-.02,s+.5,e-c-.02,t+l+.02,s+.68,e+c+.02,16777215,{dark:1});let h=i?t-.5:t,u=i?e:e-.5;r.solid.box(h-.7,s+.68,u-.6,h+.7,s+1.7,u+.6,16118506),r.solid.box(h-.8,s+1.7,u-.7,h+.8,s+1.82,u+.7,np(n,.7)),r.physics.addBox(t-l,t+l,e-c,e+c,s-.5,s+.68,{kind:"prop",material:"wood",walkable:!0}),r.physics.addBox(h-.7,h+.7,u-.6,u+.6,s+.68,s+1.82,{kind:"prop",material:"wood",walkable:!0})}function pp(r,t,e,i){r.solid.cylinder(t,i,e,1.1,.9,10,10132130,{bottom:!0}),r.solid.cylinder(t,i+.85,e,.85,.06,10,2780572,{dark:1});for(let n of[-1,1])r.solid.box(t+n*1-.07,i+.9,e-.07,t+n*1+.07,i+2.3,e+.07,8014374);r.solid.box(t-1.25,i+2.3,e-.12,t+1.25,i+2.42,e+.12,8014374),r.solid.pyramid(t-1.45,e-.9,t+1.45,e+.9,i+2.42,.8,11551535),r.physics.addCylinder(t,e,1.1,i,i+.95,{kind:"prop",material:"stone",walkable:!0})}function mp(r,t,e,i){r.solid.cylinder(t,i,e,3.4,.75,16,13620444,{bottom:!0}),r.solid.cylinder(t,i+.7,e,3,.1,16,3651302,{dark:1}),r.solid.cylinder(t,i,e,.7,2.4,10,15001580,{r1:.5}),r.solid.cylinder(t,i+2.2,e,1.5,.3,12,13620444,{r1:1.1}),r.solid.cylinder(t,i+2.5,e,.2,1,8,9427199,{r1:.06,dark:1}),r.physics.addCylinder(t,e,3.4,i,i+.75,{kind:"prop",material:"stone",walkable:!0}),r.physics.addCylinder(t,e,.7,i+.75,i+2.6,{kind:"prop",material:"stone"})}function gp(r,t,e,i,n){r.solid.pyramid(t-1.6,e-1.6,t+1.6,e+1.6,i,2,n),r.physics.addCylinder(t,e,1.5,i,i+1.4,{kind:"prop",material:"wood"})}var yp=r=>{let t=2166136261;for(let e=0;e<r.length;e++)t^=r.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0},xp={suburb:{walls:[16238287,12576982,16773544,12180471,16374198,15061494,14217384],roofs:[12866874,6057877,8015674,4937059,3111533],trim:16777215,shutters:[4026024,3111533,12866874,14858314],chimney:10834749,base:10658987},harbor:{walls:[6005967,15115589,7189386,15231066,13094614,15786160],roofs:[8358809,6122362,10111804,4157327],trim:16053492,shutters:[16777215],chimney:7040888,base:9080212,metal:!0},autumn:{walls:[11105354,12158290,9659450,13210456,9067051],roofs:[9188644,10895144,5913130,7163180],trim:15852488,shutters:[4156730,10895144],chimney:9078144,base:7828076,log:!0},farm:{walls:[15985367,15785120,14280392,15255472],roofs:[4160074,7035725,9188644],trim:16777215,shutters:[4160074,10895144],chimney:9067082,base:9999500},fishing:{walls:[16757575,5164484,16739179,16770669,10513621,7063807],roofs:[2976399,9059131,4161370,6048394],trim:16777215,shutters:[16777215,2976399],chimney:9067082,base:10132130,metal:!0},lodge:{walls:[10251071,11105354,9067051,11565386],roofs:[3104575,4017978,5913130,2771546],trim:15325106,shutters:[3104575,9188644],chimney:9078144,base:7828076,log:!0}},vp={suburb:[["cottage",5],["manor",2.2],["shop",2]],harbor:[["warehouse",3],["shack",3],["cottage",1.2],["shop",1]],autumn:[["cabin",5],["cottage",1.5],["manor",.8]],farm:[["barn",2],["cottage",2],["shack",1.5]],fishing:[["shack",5],["cottage",2],["warehouse",.7]],lodge:[["cabin",4],["manor",1.2]]};function c1(r,t,e){let i=t.pick(e.walls),n=t.pick(e.roofs);switch(r){case"manor":{let s=t.range(9.5,11.5),a=t.range(8.6,10);return{w:s,d:a,H:3.05,stories:2,wall:i,roof:n,trim:e.trim,base:e.base,roofType:"gable",ridge:t.chance(.5)?"u":"v",rise:.36*Math.min(s,a)+.5,windows:{front:2,back:2,left:2,right:2},doorU:t.range(-1,1),porch:!0,chimney:e.chimney,shutters:t.chance(.6)&&t.pick(e.shutters),flowers:t.chance(.4),interior:"home",lootSpots:3,chest:t.chance(.6),bands:e.log?7029795:null,kind:"manor"}}case"shop":{let s=t.range(9,11),a=t.range(7,8);return{w:s,d:a,H:3.3,wall:i,roof:t.pick([8357776,6122362,11560266]),trim:e.trim,base:e.base,roofType:"flat",windows:{front:2,back:1,left:1,right:1},winW:2,sill:.8,winH:1.7,doorU:t.range(-1.2,1.2),awning:t.pick([15225674,4033497,3124844,15771676]),sign:t.pick([15771676,4033497,15225674]),signU:0,interior:"shop",lootSpots:3,chest:t.chance(.55),kind:"shop"}}case"cabin":{let s=t.range(7.2,9.2),a=t.range(6.2,7.6);return{w:s,d:a,H:2.9,wall:i,roof:n,trim:e.trim,base:e.base,roofType:"gable",ridge:t.chance(.6)?"u":"v",rise:.55*Math.min(s,a),windows:{front:1,back:1,left:1,right:1},doorU:t.range(-1,1),porch:!0,chimney:e.chimney,shutters:t.pick(e.shutters),bands:7620394,bandH:.4,interior:"home",lootSpots:3,chest:t.chance(.3),kind:"cabin",corners:!0,cornerColor:6175264}}case"shack":{let s=t.range(4.8,6.2),a=t.range(4,5.2);return{w:s,d:a,H:2.7,wall:i,roof:n,trim:e.trim,base:e.base,roofType:"shed",rise:1,windows:{front:1,back:0,left:1,right:0},winW:1,doorU:t.range(-.6,.6),interior:"none",lootSpots:2,chest:t.chance(.25),overhang:.4,kind:"shack",mat:e.metal?"metal":"wood"}}case"warehouse":{let s=t.range(13,16),a=t.range(10,12);return{w:s,d:a,H:4.6,wall:i,roof:t.pick(e.roofs),trim:e.trim,base:e.base,roofType:"gable",ridge:"u",rise:2,overhang:.4,windows:{front:0,back:2,left:2,right:2},sill:2.9,winH:.9,winW:1.6,bigDoor:{w:4.6,h:3.7},doorU:t.range(-2,2),interior:"warehouse",lootSpots:4,chest:t.chance(.8),kind:"warehouse",mat:"metal",corners:!1,backDoor:-3}}case"barn":{let s=t.range(11,13),a=t.range(8.6,10);return{w:s,d:a,H:4.2,wall:12597547,roof:7035725,trim:16777215,base:9078144,roofType:"gable",ridge:"v",rise:3.6,overhang:.5,windows:{front:0,back:0,left:1,right:1},sill:2.6,winH:.9,bigDoor:{w:4.2,h:3.5},doorU:0,interior:"barn",lootSpots:3,chest:t.chance(.55),kind:"barn",corners:!0,cornerColor:16777215,ridgeCap:!1}}default:{let s=t.range(7.4,9.6),a=t.range(6.2,8);return{w:s,d:a,H:t.range(2.9,3.2),wall:i,roof:n,trim:e.trim,base:e.base,roofType:"gable",ridge:t.chance(.5)?"u":"v",rise:.42*Math.min(s,a)+.3,windows:{front:2,back:1,left:1,right:1},doorU:t.range(-1.2,1.2),porch:t.chance(.55),chimney:t.chance(.75)&&e.chimney,shutters:t.chance(.5)&&t.pick(e.shutters),flowers:t.chance(.45),interior:"home",lootSpots:3,chest:t.chance(.3),bands:null,kind:"cottage",mat:e.metal?"metal":"wood"}}}}var qi=(r,t,e=0)=>r.minX-e<t.maxX&&r.maxX+e>t.minX&&r.minZ-e<t.maxZ&&r.maxZ+e>t.minZ;function _p(r,t){let{terrain:e,physics:i}=r,n=new Ae(r.seed^yp(t.id)),s=xp[t.style]||xp.suburb,a=new _e,o=new _e,l={solid:a,glass:o,physics:i,rng:n,group:r.group,animated:r.animated,lights:[]},c={town:t,buildings:[],outdoorSpots:[],blocked:[],streets:[],plazas:[],paths:[],fields:[],yardTrees:[],cars:[]},h=t.pad*.9,u=t.z+n.range(-3,3),d=t.x+n.range(-12,12),f=[{axis:"x",pos:u,from:t.x-h,to:t.x+h,w:t.big?7.5:6.5}];(t.big||t.houses>8)&&f.push({axis:"z",pos:d,from:t.z-h*.85,to:t.z+h*.85,w:6.5}),c.streets=f;let g=(T,E=0)=>T.axis==="x"?{minX:T.from,maxX:T.to,minZ:T.pos-T.w/2-E,maxZ:T.pos+T.w/2+E}:{minX:T.pos-T.w/2-E,maxX:T.pos+T.w/2+E,minZ:T.from,maxZ:T.to};for(let T of f)c.blocked.push({type:"rect",...g(T,2.2)});let x=[],m=(T,E)=>{let P=1e9,L=-1e9,I=[[T.minX,T.minZ],[T.maxX,T.minZ],[T.minX,T.maxZ],[T.maxX,T.maxZ],[(T.minX+T.maxX)/2,(T.minZ+T.maxZ)/2]];E&&I.push(E);for(let[U,B]of I){let z=e.heightAt(U,B);P=Math.min(P,z),L=Math.max(L,z)}return{ok:P>1.4&&L-P<.85,hmin:P,hmax:L}},p=()=>n.weighted(vp[t.style]||vp.suburb),v=0,w=t.houses;for(let T=0;T<2&&v<w;T++)for(let E of f)for(let P of n.shuffle([-1,1])){let L=E.from+n.range(1,7),I=0;for(;L<E.to-5&&v<w&&I++<40;){let U=p();U==="shop"&&E!==f[0]&&(U="cottage");let B=c1(U,n,s),z=B.w,j=B.d,Z=L+z/2,O=E.w/2+n.range(3.4,4.6)+j/2,Q,pt,mt;E.axis==="x"?(Q=Z,pt=E.pos+P*O,mt=P>0?0:2):(pt=Z,Q=E.pos+P*O,mt=P>0?3:1);let Xt=mt===1||mt===3,Ft=(Xt?j:z)/2,rt=(Xt?z:j)/2,F={minX:Q-Ft,maxX:Q+Ft,minZ:pt-rt,maxZ:pt+rt},$=Math.hypot(Q-t.x,pt-t.z),lt=[[0,-1],[1,0],[0,1],[-1,0]][mt],Et=[Q+lt[0]*(Ft+1.7),pt+lt[1]*(rt+1.7)],ct=m(F,Et),Rt=e.nearestRoad(Q,pt,24);if($>t.pad*.95||!ct.ok||x.some(Gt=>qi(Gt.rect,F,2.6))||f.some(Gt=>Gt!==E&&qi(g(Gt,1.2),F))||Rt&&Rt.dist<Math.hypot(Ft,rt)+Rt.width/2+1){L+=5;continue}let Kt=ct.hmax+.14,ne=ip(l,{...B,x:Q,z:pt,face:mt,floorY:Kt,groundMin:ct.hmin,wall:ep(B.wall,n,.05),kind:B.kind});ne.town=t.id,ne.kindName=U,x.push({rect:F,b:ne}),c.buildings.push(ne),c.blocked.push({type:"rect",...ne.rect}),v++;let[pe,Qt]=[Q+lt[0]*(Ft+.2),pt+lt[1]*(rt+.2)];if(c.paths.push({x0:pe,z0:Qt,x1:E.axis==="x"?pe:E.pos,z1:E.axis==="x"?E.pos:Qt,w:1.8}),t.style==="suburb"&&n.chance(.5)){let Gt=e.heightAt(Q,pt),W=F.minX-1.6,tt=F.maxX+1.6,et=F.minZ-1.6,ht=F.maxZ+1.6;E.axis==="x"?($a(l,W,et+(P>0,0),W,ht,Gt),$a(l,tt,et,tt,ht,Gt)):($a(l,W,et,tt,et,Gt),$a(l,W,ht,tt,ht,Gt))}L+=z+n.range(3.2,8.5)}}let M=(T,E)=>e.heightAt(T,E),y=(T,E,P=2.5)=>!x.some(L=>qi(L.rect,{minX:T-.6,maxX:T+.6,minZ:E-.6,maxZ:E+.6},P));for(let T of f)for(let E=T.from+8;E<T.to-4;E+=19)for(let P of[-1,1]){let L=P*(T.w/2+.9),I=T.axis==="x"?E+(P>0?6:0):T.pos+L,U=T.axis==="x"?T.pos+L:E+(P>0?6:0);!y(I,U,.5)||Math.hypot(I-t.x,U-t.z)>t.pad||f.find(z=>z!==T&&qi(g(z,.5),{minX:I-.3,maxX:I+.3,minZ:U-.3,maxZ:U+.3}))||sp(l,I,U,M(I,U))}for(let T=0;T<(t.big?5:2);T++){let E=n.pick(f),P=n.range(E.from+10,E.to-10),L=n.chance(.5)?1:-1,I=E.axis==="x"?P:E.pos+L*(E.w/2+1.6),U=E.axis==="x"?E.pos+L*(E.w/2+1.6):P;!y(I,U,1)||f.some(B=>B!==E&&qi(g(B,1),{minX:I-1,maxX:I+1,minZ:U-1,maxZ:U+1}))||rp(l,I,U,M(I,U),E.axis==="x")}if(f.length>1){let T=f[1].pos,E=f[0].pos,P=M(T,E);c.plazas.push({x:T,z:E,r:10}),c.blocked.push({type:"circle",x:T,z:E,r:12}),t.big?mp(l,T,E,P):pp(l,T,E,P)}let b=t.big?4:2;for(let T=0;T<b;T++){let E=f[0],P=n.range(E.from+12,E.to-12),L=n.chance(.5)?1:-1,I=P,U=E.pos+L*(E.w/2-1.6);f.some(B=>B!==E&&qi(g(B,3),{minX:I-3,maxX:I+3,minZ:U-2,maxZ:U+2}))||c.cars.push({x:I,z:U,y:M(I,U),alongX:!0,color:n.pick([15225674,4033497,15778844,3124844,16777215,9067225])})}let C=(T,E,P=8,L=8)=>({minX:T-P,maxX:T+P,minZ:E-L,maxZ:E+L}),_=(T,E,P,L,I)=>{let U=C(E,P,L,I);if(Math.hypot(E-t.x,P-t.z)>t.pad+14||x.some(z=>qi(z.rect,U,1))||f.some(z=>qi(g(z,1),U)))return!1;let B=e.heightAt(E,P);return B<1.4?!1:(T(B),c.blocked.push({type:"rect",...U}),x.push({rect:U,b:null}),!0)};if(t.style==="suburb")for(let T=0;T<30;T++){let E=n.range(0,Math.PI*2),P=t.pad*n.range(.85,1.05);if(_(L=>ap(l,t.x+Math.cos(E)*P,t.z+Math.sin(E)*P,L),t.x+Math.cos(E)*P,t.z+Math.sin(E)*P,5,5))break}if(t.style==="farm"){let T=0;for(let E=0;E<60&&T<3;E++){let P=n.range(0,Math.PI*2),L=n.range(12,t.pad*.9),I=t.x+Math.cos(P)*L,U=t.z+Math.sin(P)*L,B=T===0?"windmill":"silo";_(z=>B==="windmill"?cp(l,I,U,z,n):op(l,I,U,z),I,U,B==="windmill"?6:4.5,B==="windmill"?6:4.5)&&T++}for(let E=0;E<8;E++){let P=n.range(0,Math.PI*2),L=n.range(10,t.pad*.9),I=t.x+Math.cos(P)*L,U=t.z+Math.sin(P)*L;_(B=>lp(l,I,U,B),I,U,1.6,1.6)}for(let E=0;E<4;E++){let P=E/4*Math.PI*2+n.range(-.3,.3),L=t.pad+n.range(18,40),I=t.x+Math.cos(P)*L,U=t.z+Math.sin(P)*L;e.heightAt(I,U)<3||c.fields.push({x:I,z:U,w:n.range(30,46),d:n.range(24,36),kind:E%3,horizontal:n.chance(.5)})}}if(t.style==="harbor"||t.style==="fishing"){let T=Math.atan2(t.z,t.x),E=Math.cos(T),P=Math.sin(T),L=Math.abs(E)>Math.abs(P),I=Math.sign(L?E:P)||1;for(let U=0;U<(t.style==="harbor"?2:1);U++){let B=t.x+(L?0:U?16:-12),z=t.z+(L?U?16:-12:0),j=0;for(;e.heightAt(B,z)>.2&&j++<200;)L?B+=I*2:z+=I*2;let Z=30+n.range(0,14),O=L?B+I*Z:B,Q=L?z:z+I*Z;dp(l,L?B-I*6:B,L?z:z-I*6,O,Q,1.15,3.4),c.blocked.push({type:"rect",minX:Math.min(B,O)-6,maxX:Math.max(B,O)+6,minZ:Math.min(z,Q)-6,maxZ:Math.max(z,Q)+6});for(let pt=0;pt<2;pt++){let mt=.35+pt*.35,Xt=L?B+I*Z*mt:B+(pt?4.2:-4.2),Ft=L?z+(pt?4.2:-4.2):z+I*Z*mt;fp(l,Xt,Ft,L,n.pick([15225674,4033497,16777215,15778844]))}c.dockEnd={x:O,z:Q}}if(t.style==="harbor")for(let U=0;U<8;U++){let B=n.range(0,Math.PI*2),z=n.range(14,t.pad*.8),j=t.x+Math.cos(B)*z,Z=t.z+Math.sin(B)*z,O=n.chance(.5),Q=n.chance(.4)?2:1,pt=C(j,Z,O?4:2.6,O?2.6:4);x.some(mt=>qi(mt.rect,pt,1.5))||f.some(mt=>qi(g(mt,1.5),pt))||e.heightAt(j,Z)<1.6||(up(l,j,Z,e.heightAt(j,Z),O,n.pick([14239803,3112900,15771676,3124844,8018649,15263976]),Q),x.push({rect:pt,b:null}),c.blocked.push({type:"rect",...pt}))}}if(t.style==="lodge"||t.style==="autumn")for(let T=0;T<4;T++){let E=n.range(0,Math.PI*2),P=n.range(10,t.pad*.85),L=t.x+Math.cos(E)*P,I=t.z+Math.sin(E)*P;_(U=>gp(l,L,I,U,n.pick([15225674,4033497,15771676,3124844])),L,I,2.4,2.4)}for(let T=0;T<Math.round(t.houses*.9);T++){let E=n.pick(f),P=n.range(E.from+6,E.to-6),I=(n.chance(.5)?1:-1)*(E.w/2+n.range(1.2,6)),U=E.axis==="x"?P:E.pos+I,B=E.axis==="x"?E.pos+I:P;if(!y(U,B,.4)||f.some(j=>j!==E&&qi(g(j,.5),{minX:U-.3,maxX:U+.3,minZ:B-.3,maxZ:B+.3})))continue;let z=M(U,B);z<1.4||c.outdoorSpots.push({x:U,z:B,y:z})}for(let T=0;T<Math.round(t.pad*.28);T++){let E=n.range(0,Math.PI*2),P=Math.sqrt(n.float())*t.pad*1.02,L=t.x+Math.cos(E)*P,I=t.z+Math.sin(E)*P;y(L,I,3.4)&&(f.some(U=>qi(g(U,3.5),{minX:L-.5,maxX:L+.5,minZ:I-.5,maxZ:I+.5}))||c.plazas.some(U=>Math.hypot(L-U.x,I-U.z)<U.r+3)||e.heightAt(L,I)<1.8||c.yardTrees.push({x:L,z:I}))}let R=a.build(Di());if(R.castShadow=!0,R.receiveShadow=!0,R.name=`town-${t.id}`,r.group.add(R),!o.empty){let T=o.build(new Ne({vertexColors:!0,transparent:!0,opacity:.32,depthWrite:!1,side:Fe}));T.renderOrder=3,r.group.add(T)}return c.lights=l.lights,c}function bp(r,t){let{terrain:e,physics:i}=r,n=new Ae(r.seed^yp(t.id)),s=new _e,a={solid:s,glass:new _e,physics:i,rng:n,group:r.group,animated:r.animated,lights:[]},o=e.heightAt(t.x,t.z),l={lm:t,buildings:[],outdoorSpots:[],blocked:[{type:"circle",x:t.x,z:t.z,r:13}],yardTrees:[],cars:[],paths:[],fields:[],streets:[],plazas:[]};if(t.type==="lighthouse"){hp(a,t.x,t.z,o),l.outdoorSpots.push({x:t.x-5.5,z:t.z+1.5,y:e.heightAt(t.x-5.5,t.z+1.5)},{x:t.x+3,z:t.z+6,y:e.heightAt(t.x+3,t.z+6)});let h=t.x+11.5;l.chestSpots=[{x:h,z:t.z,y:e.heightAt(h,t.z)+.02,yaw:Math.PI/2}]}let c=s.build(Di());return c.castShadow=!0,c.receiveShadow=!0,r.group.add(c),l}function Mp(r,t,e,i,n){let s=c=>(c+e)*t,a=c=>(c+e)*t;r.lineCap="butt";let o=i.style==="farm"||i.style==="lodge"||i.style==="autumn",l=[["#e2b93f","#c9962b"],["#69b83a","#4a9a2c"],["#d9772b","#b85c1e"]];for(let c of n.fields){let[h,u]=l[c.kind%3],d=c.x-c.w/2,f=c.z-c.d/2;r.fillStyle="#6b4a2a",r.fillRect(s(d-1),a(f-1),(c.w+2)*t,(c.d+2)*t);let g=Math.floor((c.horizontal?c.d:c.w)/1.6);for(let x=0;x<g;x++)r.fillStyle=x%2?h:u,c.horizontal?r.fillRect(s(d),a(f+x*1.6),c.w*t,1.3*t):r.fillRect(s(d+x*1.6),a(f),1.3*t,c.d*t)}for(let c of n.streets){let h=(u,d,f)=>{r.beginPath(),c.axis==="x"?(r.moveTo(s(c.from),a(c.pos)),r.lineTo(s(c.to),a(c.pos))):(r.moveTo(s(c.pos),a(c.from)),r.lineTo(s(c.pos),a(c.to))),r.setLineDash(f||[]),r.lineWidth=u*t,r.strokeStyle=d,r.stroke()};o?(h(c.w+3,"rgba(140,110,70,0.28)"),h(c.w+.6,"#bd935c"),h(c.w*.55,"rgba(206,166,110,0.65)")):(h(c.w+5.2,"#c9c6bd"),h(c.w+3.6,"#a6a49d"),h(c.w,"#585c66"),h(.26,"#f2d24a",[3*t,4*t]))}r.setLineDash([]);for(let c of n.plazas){r.fillStyle=o?"#c9a878":"#cfc9bb",r.beginPath(),r.arc(s(c.x),a(c.z),c.r*t,0,Math.PI*2),r.fill(),r.strokeStyle=o?"#b08c5c":"#b3ad9f",r.lineWidth=.35*t;for(let h of[c.r*.62,c.r*.85])r.beginPath(),r.arc(s(c.x),a(c.z),h*t,0,Math.PI*2),r.stroke()}for(let c of n.paths)r.beginPath(),r.moveTo(s(c.x0),a(c.z0)),r.lineTo(s(c.x1),a(c.z1)),r.lineWidth=c.w*t,r.strokeStyle=o?"#c9a878":"#d6d1c4",r.stroke();for(let c of n.buildings){let h=c.rect;r.fillStyle=o?"rgba(170,140,95,0.55)":"rgba(205,200,186,0.5)",r.fillRect(s(h.minX+.2),a(h.minZ+.2),(h.maxX-h.minX-.4)*t,(h.maxZ-h.minZ-.4)*t)}}function Ac(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new ge,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=wp(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let g=wp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function wp(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let a=new t(s),o=new me(a,e,i),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);o.setComponent(d+u,g,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var Sp=128,ku=105,Tp=1250,Ep={value:0};function ps(r){let t=r.map(i=>i.index?i.toNonIndexed():i);for(let i of t)i.attributes.uv&&i.deleteAttribute("uv");let e=Ac(t,!1);return e.computeBoundingBox(),e.computeBoundingSphere(),e}function Tn(r,t){let e=r.attributes.position.count;return r.setAttribute("tintMask",new me(new Float32Array(e).fill(t),1)),r}function Sn(r,t,e,i,n,s,a,o=1,l=.62){let c=new Ae(a),h=new ns(1,o),u=h.attributes.position,d=new Float32Array(u.count*3),f=[];for(let x=0;x<u.count;x++){let m=u.getX(x),p=u.getY(x),v=u.getZ(x),w=`${m.toFixed(3)},${p.toFixed(3)},${v.toFixed(3)}`;f[w]===void 0&&(f[w]=.9+c.float()*.2);let M=f[w];u.setXYZ(x,r+m*i*M,t+p*n*M,e+v*s*M);let y=le((p+1)/2),b=l+(1.08-l)*y;d[x*3]=d[x*3+1]=d[x*3+2]=b}h.setAttribute("color",new me(d,3)),h.computeVertexNormals();let g=h.attributes.normal;for(let x=0;x<u.count;x++){let m=(u.getX(x)-r)/i,p=(u.getY(x)-t)/n,v=(u.getZ(x)-e)/s,w=Math.hypot(m,p,v)||1;g.setXYZ(x,m/w,p/w,v/w)}return Tn(h,1)}function Cc(r,t,e,i,n,s,a,o){r.cylinder(t,i,e,s,n,6,o,{r1:a,top:!1,dark:.7})}function h1(r){let t=new _e;Cc(t,0,0,-.3,2.9,.34,.2,8016432),t.cylinder(0,-.3,0,.46,.5,6,6964518,{r1:.34,top:!1,dark:.6});let i=[Tn(t.build(),0)];return i.push(Sn(0,4.4,0,2.5,2.1,2.5,r+1,1,.6)),i.push(Sn(1.5,3.7,.5,1.7,1.4,1.7,r+2,1,.55)),i.push(Sn(-1.4,3.9,-.6,1.7,1.45,1.7,r+3,1,.55)),i.push(Sn(.1,5.7,.1,1.7,1.3,1.7,r+4,1,.75)),ps(i)}function u1(){let r=new _e;Cc(r,0,0,-.3,2.4,.28,.16,6964518);let t=Tn(r.build(),0),e=new _e;[[2.6,1.7,.9],[2.05,1.7,2.15],[1.5,1.7,3.4],[.95,1.6,4.6]].forEach(([s,a,o],l)=>{e.cylinder(0,o,0,s,a,8,16777215,{r1:.02,top:!1,dark:.55}),e.cylinder(0,o-.02,0,s*.98,.16,8,12105912,{r1:s*.94,top:!1,dark:.5})});let n=Tn(e.build(),1);return ps([t,n])}function d1(){let r=new _e,t=0,e=-.2,i=7;for(let c=0;c<i;c++){let h=.3-c*.02,u=.3-(c+1)*.02,d=t+.2+c*.03;r.cylinder(t,e,0,h,1.05,6,c%2?9071173:8018490,{r1:u,top:!1,dark:.8}),t=d,e+=1}let n=Tn(r.build(),0),s=new _e,a=[t,e+.1,0],o=9;for(let c=0;c<o;c++){let h=c/o*Math.PI*2+.2,u=Math.cos(h),d=Math.sin(h),f=a[0],g=a[1],x=a[2],m=.55;for(let p=0;p<4;p++){let w=-.18-p*.32,M=f+u*1.05,y=x+d*1.05,b=g+w+(p===0?.55:0),C=m*.72,_=-d,R=u,T=[f+_*m,g,x+R*m],E=[f-_*m,g,x-R*m],P=[M-_*C,b,y-R*C],L=[M+_*C,b,y+R*C],I=1-p*.06;s.quad(T,E,P,L,16777215,[0,1,0],I,I,I*.9,I*.9),s.quad(T,E,P,L,13684944,[0,-1,0],I,I,I*.9,I*.9),f=M,g=b,x=y,m=C}}s.cylinder(a[0]-.15,a[1]-.35,.1,.16,.3,6,5913120);let l=Tn(s.build(),1);return ps([n,l])}function f1(){let r=new _e;Cc(r,0,0,-.3,2.9,.34,.2,8016432);let t=Tn(r.build(),0);return ps([t,Sn(0,4.3,0,2.7,2.3,2.7,5,0,.6),Sn(.9,3.3,.6,1.8,1.4,1.8,6,0,.55)])}function p1(){let r=new _e;Cc(r,0,0,-.3,2.4,.28,.16,6964518);let t=Tn(r.build(),0),e=new _e;return e.cylinder(0,.9,0,2.6,3.6,6,16777215,{r1:.05,top:!1,dark:.55}),e.cylinder(0,3.4,0,1.6,3.4,6,16777215,{r1:.02,top:!1,dark:.6}),ps([t,Tn(e.build(),1)])}function m1(){return ps([Sn(0,.4,0,1,.7,1,91,0,.55)])}function g1(r){let t=new ns(1,1),e=new Ae(r),i=t.attributes.position,n=new Map;for(let a=0;a<i.count;a++){let o=i.getX(a),l=i.getY(a),c=i.getZ(a),h=`${o.toFixed(3)},${l.toFixed(3)},${c.toFixed(3)}`,u=n.get(h);u||(u=.78+e.float()*.42,n.set(h,u)),i.setXYZ(a,o*u,Math.max(l*u*.8,-.35),c*u)}let s=new Float32Array(i.count*3);for(let a=0;a<i.count;a++){let l=.7+.4*le((i.getY(a)+.4)/1.6);s[a*3]=s[a*3+1]=s[a*3+2]=l}return t.setAttribute("color",new me(s,3)),t.computeVertexNormals(),Tn(ps([t]),1)}function x1(){return ps([Sn(0,.45,0,.85,.62,.85,91,0,.55),Sn(.55,.32,.2,.55,.42,.55,92,0,.55),Sn(-.5,.3,-.25,.5,.4,.5,93,0,.55)])}function Ka({swayAmp:r="0.05",...t}={}){let e=new Ne({vertexColors:!0,...t});return e.onBeforeCompile=i=>{i.uniforms.uWind=Ep,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        attribute float tintMask;
        attribute vec3 instanceTint;
        uniform float uWind;`).replace("#include <color_vertex>",`#include <color_vertex>
        vColor.xyz *= mix(vec3(1.0), instanceTint, tintMask);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec3 ip = instanceMatrix[3].xyz;
          float sw = sin(uWind * 1.35 + ip.x * 0.31 + ip.z * 0.23) + 0.5 * sin(uWind * 2.7 + ip.x * 0.7);
          float amp = ${r} * max(position.y - 1.0, 0.0) * tintMask;
          transformed.x += sw * amp;
          transformed.z += sw * amp * 0.6;
        #endif`)},e}var kr={oak:[5878574,7127606,4890668,8833338,4168250,7649324],oakAutumn:[15763996,14700572,15906846,14251546,13123612],oakPink:[16748472,16754632,15891112],pine:[3050327,2784594,3840604,2585934,3116906],palm:[5030460,6475850,4173898],bush:[5221935,6471226,4037173,15049018,10144570],rock:[10133672,9080728,11052186,8225677,11578016]},Rc=class{constructor(t){this.env=t,this.terrain=t.terrain,this.painter=t.painter,this.physics=t.physics,this.group=new Yt,this.group.name="scatter",t.scene.add(this.group),this.trees=[],this.rocks=[],this.bushes=[],this.falling=[],this.meshes={oak:[],pine:[],palm:[],rock:[],bush:[]},this.geos={oak:h1(3),pine:u1(),palm:d1(),rock:g1(7),bush:x1()},this.geosLo={oak:f1(),pine:p1(),bush:m1()},this.chunks=[],this.mats={oak:Ka({swayAmp:"0.05"}),pine:Ka({swayAmp:"0.03"}),palm:Ka({swayAmp:"0.07"}),rock:Ka({flatShading:!0,swayAmp:"0.0"}),bush:Ka({swayAmp:"0.03"})}}blocked(t,e,i=0){for(let n of this.env.blocked)if(n.type==="rect"){if(t>n.minX-i&&t<n.maxX+i&&e>n.minZ-i&&e<n.maxZ+i)return!0}else if(Math.hypot(t-n.x,e-n.z)<n.r+i)return!0;return!1}_onRoad(t,e,i=3.5){let n=this.terrain.nearestRoad(t,e,14);return n&&n.dist<n.width/2+i}generate(t=99){let e=new Ae(t),{terrain:i,painter:n}=this,s=5.5,a=560,o=new ot,l=c=>new ot(e.pick(c));for(let c=-a;c<a;c+=s)for(let h=-a;h<a;h+=s){let u=h+e.range(0,s),d=c+e.range(0,s),f=i.heightAt(u,d);if(f<.7||f>40||i.slopeAt(u,d)>.78)continue;let x=n.forestAt(u,d),m=n.autumnAt(u,d),p=de(37,27,f),v=f<3,w=(.005+.056*x*x+.02*x)*p;v&&(w=.006*de(.7,1.5,f)),m>.4&&(w*=1.5),!(e.float()>w*s*s*.5||this.blocked(u,d,2.2)||this._onRoad(u,d,3.8)||i.layout.lakes.some(y=>Math.hypot(u-y.x,d-y.z)<y.r*1.25&&f<y.level+.9))&&this._addTree(u,d,f,x,m,v,e,l)}for(let c of this.env.yardTrees){let h=i.heightAt(c.x,c.z);this._addTree(c.x,c.z,h,.1,0,!1,e,l,!0)}for(let c=-a;c<a;c+=9)for(let h=-a;h<a;h+=9){let u=h+e.range(0,9),d=c+e.range(0,9),f=i.heightAt(u,d);if(f<.3||f>48)continue;let x=.028+i.slopeAt(u,d)*.5+de(22,38,f)*.35;if(e.float()>x*.22||this.blocked(u,d,3)||this._onRoad(u,d,3.5))continue;let m=e.int(1,3);for(let p=0;p<m;p++){let v=u+e.range(-2.2,2.2),w=d+e.range(-2.2,2.2);i.heightAt(v,w)<.4||this._addRock(v,w,e.chance(.15)?e.range(2.4,4.2):e.range(.7,2),e)}}for(let c=-a;c<a;c+=7)for(let h=-a;h<a;h+=7){let u=h+e.range(0,7),d=c+e.range(0,7),f=i.heightAt(u,d);if(f<1.6||f>32||i.slopeAt(u,d)>.6)continue;let g=n.forestAt(u,d);e.float()>.16+g*.25||this.blocked(u,d,1.2)||this._onRoad(u,d,2.2)||this.bushes.push({x:u,y:f-.05,z:d,s:e.range(.7,1.5),rot:e.range(0,6.28),tint:l(kr.bush)})}}_addTree(t,e,i,n,s,a,o,l,c=!1){let h="oak";a?h="palm":!c&&(i>19||n>.5&&o.chance(.55)||s<.2&&n>.25&&o.chance(.25))&&(h="pine");let u=h==="pine"?o.range(.85,1.55):h==="palm"?o.range(.9,1.25):o.range(.85,1.4),d;h==="oak"?s>.28&&o.chance(.4+s*.6)?d=l(kr.oakAutumn):o.chance(.05)?d=l(kr.oakPink):d=l(kr.oak):d=l(kr[h]);let f={type:h,x:t,y:i-.05,z:e,scale:u,rot:o.range(0,Math.PI*2),tint:d,hp:60+u*40,maxHp:60+u*40,alive:!0,kind:"tree"};this.trees.push(f)}_addRock(t,e,i,n){let s=this.terrain.heightAt(t,e),a=new ot(n.pick(kr.rock));s>38&&a.lerp(new ot(16777215),.6),this.rocks.push({x:t,y:s-.25*i,z:e,s:i,sy:n.range(.7,1.25),rot:n.range(0,6.28),tint:a,hp:40+i*35,maxHp:40+i*35,alive:!0,kind:"rock"})}build(){let t=this.physics,e=new Map,i=(h,u)=>`${Math.floor((h+dt.half)/Sp)},${Math.floor((u+dt.half)/Sp)}`,n=(h,u)=>{let d=`${h}:${i(u.x,u.z)}`,f=e.get(d);f||e.set(d,f={type:h,items:[]}),f.items.push(u)};for(let h of this.trees)h.collider=t.addCylinder(h.x,h.z,h.type==="palm"?.3:.42*Math.max(1,h.scale*.85),h.y-.4,h.y+6*h.scale,{kind:"tree",material:"wood",owner:h,walkable:!1}),n(h.type,h);for(let h of this.rocks)h.collider=t.addCylinder(h.x,h.z,h.s*.82,h.y-.4,h.y+h.s*1*h.sy,{kind:"rock",material:"stone",owner:h,walkable:!1}),n("rock",h);for(let h of this.bushes)n("bush",h);let s=new re,a=new Ue,o=new D,l=new D,c=new D(0,1,0);for(let[h,{type:u,items:d}]of e){let f=new Float32Array(d.length*3),g=new Array(d.length);d.forEach((w,M)=>{a.setFromAxisAngle(c,w.rot);let y=u==="rock"||u==="bush"?w.s:w.scale;o.set(y,u==="rock"?w.s*w.sy:y,y),l.set(w.x,w.y,w.z),s.compose(l,a,o),g[M]=s.clone(),f[M*3]=w.tint.r,f[M*3+1]=w.tint.g,f[M*3+2]=w.tint.b});let x=(w,M)=>{let y=new Oi(w,this.mats[u],d.length),b=w.clone();b.setAttribute("instanceTint",new mi(f,3)),y.geometry=b;for(let C=0;C<d.length;C++)y.setMatrixAt(C,g[C]);return y.instanceMatrix.needsUpdate=!0,y.castShadow=M,y.receiveShadow=!0,y.matrixAutoUpdate=!1,y.computeBoundingSphere(),y.boundingSphere.radius+=4,this.group.add(y),y},m=x(this.geos[u],u!=="bush"),p=this.geosLo[u]?x(this.geosLo[u],!1):null;d.forEach((w,M)=>{w.mesh=m,w.meshLo=p,w.index=M}),m.visible=!0,p&&(p.visible=!1);let v=m.boundingSphere;this.chunks.push({type:u,hi:m,lo:p,cx:v.center.x,cz:v.center.z,r:v.radius}),this.meshes[u].push(m)}}updateLod(t){for(let e of this.chunks){let i=Math.hypot(t.x-e.cx,t.z-e.cz)-e.r;e.lo?(e.hi.visible=i<ku,e.lo.visible=i>=ku&&i<Tp):e.hi.visible=i<(e.type==="bush"?ku*.9:e.type==="rock"?900:Tp)}}paintShadows(t,e){let i=dt.half,n=(s,a,o,l)=>{let c=(s+i)*e,h=(a+i)*e,u=o*e,d=t.createRadialGradient(c,h,0,c,h,u);d.addColorStop(0,`rgba(20,40,10,${l})`),d.addColorStop(.6,`rgba(20,40,10,${l*.5})`),d.addColorStop(1,"rgba(20,40,10,0)"),t.fillStyle=d,t.fillRect(c-u,h-u,u*2,u*2)};for(let s of this.trees)n(s.x,s.z,(s.type==="pine"?2.4:3)*s.scale,.34);for(let s of this.rocks)n(s.x,s.z,s.s*1.5,.3);for(let s of this.bushes)n(s.x,s.z,s.s*1.2,.22)}reset(){let t=new re,e=new Ue,i=new D,n=new D,s=new D(0,1,0),a=(o,l)=>{if(o.alive){o.hp=o.maxHp;return}o.alive=!0,o.hp=o.maxHp;let c=l==="rock"?o.s:o.scale;e.setFromAxisAngle(s,o.rot),i.set(c,l==="rock"?o.s*o.sy:c,c),n.set(o.x,o.y,o.z),t.compose(n,e,i),o.mesh.setMatrixAt(o.index,t),o.mesh.instanceMatrix.needsUpdate=!0,o.meshLo&&(o.meshLo.setMatrixAt(o.index,t),o.meshLo.instanceMatrix.needsUpdate=!0),o.collider=l==="rock"?this.physics.addCylinder(o.x,o.z,o.s*.82,o.y-.4,o.y+o.s*1*o.sy,{kind:"rock",material:"stone",owner:o,walkable:!1}):this.physics.addCylinder(o.x,o.z,o.type==="palm"?.3:.42*Math.max(1,o.scale*.85),o.y-.4,o.y+6*o.scale,{kind:"tree",material:"wood",owner:o,walkable:!1})};for(let o of this.trees)a(o,"tree");for(let o of this.rocks)a(o,"rock");for(let o of this.falling)o.mesh&&this.group.remove(o.mesh);this.falling.length=0}hit(t,e){return t.hp-=e,t.shake=.25,t.hp<=0&&t.alive?(this.remove(t),!0):!1}remove(t){if(!t.alive)return;t.alive=!1,t.collider&&this.physics.remove(t.collider);let e=new re().makeScale(0,0,0);t.mesh.setMatrixAt(t.index,e),t.mesh.instanceMatrix.needsUpdate=!0,t.meshLo&&(t.meshLo.setMatrixAt(t.index,e),t.meshLo.instanceMatrix.needsUpdate=!0),t.kind==="tree"&&this.falling.push({obj:t,t:0,dir:Math.random()*Math.PI*2}),this.onRemoved?.(t)}update(t,e,i){Ep.value=e,this._lodT=(this._lodT||0)-t,i&&this._lodT<=0&&(this._lodT=.2,this.updateLod(i));for(let n=this.falling.length-1;n>=0;n--){let s=this.falling[n];if(s.t+=t,!s.mesh){let l=s.obj,c=this.geos[l.type].clone(),h=c.attributes.position.count;c.setAttribute("instanceTint",new me(new Float32Array(h*3).map((u,d)=>[l.tint.r,l.tint.g,l.tint.b][d%3]),3)),s.mesh=new Dt(c,this.mats[l.type]),s.mesh.position.set(l.x,l.y,l.z),s.mesh.scale.setScalar(l.scale),s.mesh.castShadow=!0,this.group.add(s.mesh)}let a=Math.min(s.t/1.1,1),o=a*a;if(s.mesh.rotation.set(Math.sin(s.dir)*o*1.45,0,-Math.cos(s.dir)*o*1.45),s.t>2.2){let l=Math.max(0,1-(s.t-2.2)/.5)*s.obj.scale;s.mesh.scale.setScalar(l),l<=.01&&(this.group.remove(s.mesh),s.mesh.geometry.dispose(),this.falling.splice(n,1))}}}};function v1(r){let i=document.createElement("canvas");i.width=128,i.height=128;let n=i.getContext("2d"),s=new Ae(r==="asphalt"?5:9);if(r==="asphalt"){for(let o=0;o<900;o++){let l=s.chance(.5)?255:0;n.fillStyle=`rgba(${l},${l},${l},${s.range(.03,.12)})`,n.fillRect(s.range(0,128),s.range(0,128),s.range(1,2.5),s.range(1,2.5))}n.strokeStyle="rgba(20,22,28,.28)",n.lineWidth=1;for(let o=0;o<5;o++){let l=s.range(10,118),c=s.range(0,128);n.beginPath(),n.moveTo(l,c);for(let h=0;h<4;h++)l+=s.range(-6,6),c+=s.range(4,12),n.lineTo(l,c);n.stroke()}n.fillStyle="rgba(238,238,232,.95)",n.fillRect(128*.055,0,3,128),n.fillRect(128*.945-3,0,3,128),n.fillStyle="rgba(255,214,60,.98)",n.fillRect(128*.5-2.5,0,5,128*.5),n.fillStyle="rgba(0,0,0,.18)";for(let o=0;o<8;o++)n.fillRect(128*.5-2.5,s.range(0,128*.5),5,s.range(1,3))}else{for(let o of[128*.32,128*.68]){let l=n.createLinearGradient(o-16,0,o+16,0);l.addColorStop(0,"rgba(70,45,22,0)"),l.addColorStop(.5,"rgba(70,45,22,.34)"),l.addColorStop(1,"rgba(70,45,22,0)"),n.fillStyle=l,n.fillRect(o-16,0,32,128)}for(let o=0;o<260;o++){let l=s.chance(.5);n.fillStyle=l?`rgba(235,214,170,${s.range(.25,.6)})`:`rgba(80,55,30,${s.range(.2,.5)})`;let c=s.range(.8,2.2);n.beginPath(),n.arc(s.range(6,122),s.range(0,128),c,0,6.28),n.fill()}n.fillStyle="rgba(96,150,50,.5)";for(let o=0;o<90;o++){let l=s.chance(.5);n.fillRect(l?s.range(0,8):s.range(120,128),s.range(0,128),2,s.range(3,8))}}let a=new nn(i);return a.colorSpace=He,a.wrapS=pi,a.wrapT=es,a.anisotropy=8,a}var Pc=class{constructor(){this.pos=[],this.uv=[],this.idx=[],this.nor=[],this.vc=0}addPolyline(t,e,i,n,s=8){let a=[];for(let c=0;c<t.length-1;c++){let[h,u]=t[c],[d,f]=t[c+1],g=Math.max(1,Math.ceil(Math.hypot(d-h,f-u)/3));for(let x=0;x<g;x++)a.push([h+(d-h)*(x/g),u+(f-u)*(x/g)])}a.push(t[t.length-1]);let o=0,l=this.vc;for(let c=0;c<a.length;c++){let h=a[Math.max(0,c-1)],u=a[Math.min(a.length-1,c+1)],d=u[0]-h[0],f=u[1]-h[1],g=Math.hypot(d,f)||1;d/=g,f/=g;let x=-f,m=d;c>0&&(o+=Math.hypot(a[c][0]-a[c-1][0],a[c][1]-a[c-1][1]));for(let p of[1,-1]){let v=a[c][0]+x*(e/2)*p,w=a[c][1]+m*(e/2)*p;this.pos.push(v,i.heightAt(v,w)+n,w),this.nor.push(0,1,0),this.uv.push(p>0?0:1,o/s),this.vc++}}for(let c=0;c<a.length-1;c++){let h=l+c*2,u=h+1,d=h+2,f=h+3;this.idx.push(h,d,u,u,d,f)}}build(t){if(!this.vc)return null;let e=new ge;e.setAttribute("position",new Jt(this.pos,3)),e.setAttribute("normal",new Jt(this.nor,3)),e.setAttribute("uv",new Jt(this.uv,2)),e.setIndex(this.vc>65535?new Fn(this.idx,1):new Nn(this.idx,1)),e.computeBoundingSphere();let i=new Dt(e,t);return i.receiveShadow=!0,i.renderOrder=1,i}},Ic=class{constructor(t){let e=t.terrain,i=new Pc,n=new Pc;for(let a of e.layout.roads)(a.kind==="asphalt"?i:n).addPolyline(a.samples.map(o=>[o.x,o.z]),a.w*.96,e,.07);for(let a of t.towns){let l=["farm","lodge","autumn"].includes(a.town.style)?n:i,c=a.streets[0];for(let h of a.streets)if(h!==c&&c){let u=c.pos-c.w/2-.2,d=c.pos+c.w/2+.2,f=(g,x)=>{x-g>1&&l.addPolyline(h.axis==="z"?[[h.pos,g],[h.pos,x]]:[[g,h.pos],[x,h.pos]],h.w*.96,e,.09)};h.axis==="z"?(f(h.from,u),f(d,h.to)):f(h.from,h.to)}else l.addPolyline(h.axis==="x"?[[h.from,h.pos],[h.to,h.pos]]:[[h.pos,h.from],[h.pos,h.to]],h.w*.96,e,.08)}let s=a=>new Ne({map:v1(a),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.meshes=[];for(let[a,o]of[[i,"asphalt"],[n,"dirt"]]){let l=a.build(s(o));l&&(t.group.add(l),this.meshes.push(l))}}};var Fs=44,Dr=1.3,Ap={value:0};function y1(){let r=[],t=[],e=[],i=[],s=0;for(let o=0;o<8;o++){let l=o/8*Math.PI*2+o%2*.5,c=Math.cos(l),h=Math.sin(l),u=.04+o%3*.045,d=.26+o*37%5*.05,f=.08+o%2*.1,g=.075,x=c*u,m=h*u,p=-h*g,v=c*g;r.push(x-p,0,m-v,x+p,0,m+v,x+c*f,d,m+h*f),t.push(.7,.7,.7,.7,.7,.7,1.2,1.2,1.2),e.push(0,1,0,0,1,0,0,1,0),i.push(s,s+1,s+2,s,s+2,s+1),s+=3}let a=new ge;return a.setAttribute("position",new Jt(r,3)),a.setAttribute("color",new Jt(t,3)),a.setAttribute("normal",new Jt(e,3)),a.setIndex(i),a}function _1(){let r=new si(.11,.03,.07,7).toNonIndexed();r.translate(0,.34,0);let t=new si(.012,.012,.34,4).toNonIndexed();t.translate(0,.17,0);let e=[r,t];for(let o of e)o.attributes.uv&&o.deleteAttribute("uv");let i=[],n=[],s=[];e.forEach((o,l)=>{let c=o.attributes.position,h=o.attributes.normal;for(let u=0;u<c.count;u++){i.push(c.getX(u),c.getY(u),c.getZ(u)),n.push(h.getX(u),h.getY(u),h.getZ(u));let d=l===0?1:.35;s.push(d,d,d)}});let a=new ge;return a.setAttribute("position",new Jt(i,3)),a.setAttribute("normal",new Jt(n,3)),a.setAttribute("color",new Jt(s,3)),a}var Rp=[16740261,16767291,16777215,11889663,16747069,7260415,16732010],Lc=class{constructor(t){this.world=t,this.terrain=t.terrain,this.basePixels=t.basePixels,this._buildMask();let e=i=>{let n=new Ne({vertexColors:!0,side:i});return n.onBeforeCompile=s=>{s.uniforms.uWind=Ap,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
            #ifdef USE_INSTANCING
              vec3 ip = instanceMatrix[3].xyz;
              float sw = sin(uWind * 1.9 + ip.x * 0.9 + ip.z * 0.7) + 0.5 * sin(uWind * 3.3 + ip.x * 1.7);
              transformed.x += sw * 0.06 * position.y * 2.0;
              transformed.z += sw * 0.04 * position.y * 2.0;
            #endif`)},n};this.maxGrass=5200,this.maxFlowers=320,this.grass=new Oi(y1(),e(sn),this.maxGrass),this.flowers=new Oi(_1(),e(sn),this.maxFlowers);for(let i of[this.grass,this.flowers])i.frustumCulled=!1,i.castShadow=!1,i.receiveShadow=!1,i.instanceMatrix.setUsage(Wi),t.scene.add(i),i.count=0;this.grass.instanceColor=new mi(new Float32Array(this.maxGrass*3),3),this.flowers.instanceColor=new mi(new Float32Array(this.maxFlowers*3),3),this.center=new Pt(1e9,1e9),this._m=new re,this._q=new Ue,this._s=new D,this._p=new D,this._c=new ot,this.up=new D(0,1,0)}_buildMask(){let t=this.terrain,e=t.n,i=this.world,n=new Uint8Array(e*e);for(let s=0;s<e;s++){let a=-dt.half+s*dt.cell;for(let o=0;o<e;o++){let l=-dt.half+o*dt.cell,c=s*e+o,h=t.h[c];if(h<1.9||h>34||t.nrm[c*3+1]<.86||t.waterLevelAt(l,a)!==null)continue;let d=t.nearestRoad(l,a,12);d&&d.dist<d.width/2+1.6||i.scatter.blocked(l,a,.8)||(n[c]=1)}}this.mask=n}ok(t,e){let i=this.terrain,n=i.n,s=Math.round((t+dt.half)/dt.cell),a=Math.round((e+dt.half)/dt.cell);return s<0||a<0||s>=n||a>=n?!1:this.mask[a*n+s]===1}groundColor(t,e,i){let s=Math.min(1023,Math.max(0,Math.floor((t+dt.half)/dt.size*1024))),o=(Math.min(1023,Math.max(0,Math.floor((e+dt.half)/dt.size*1024)))*1024+s)*4;return i.setRGB(this.basePixels[o]/255,this.basePixels[o+1]/255,this.basePixels[o+2]/255,He),i}update(t,e,i){Ap.value=i;let s=this.terrain.heightAt(e.x,e.z),a=e.y-s>55;if(this.grass.visible=this.flowers.visible=!a,a)return;let o=e.x-this.center.x,l=e.z-this.center.y;o*o+l*l<25||(this.center.set(e.x,e.z),this.rebuild(e.x,e.z))}rebuild(t,e){let i=this.terrain,n=Math.floor((t-Fs)/Dr),s=Math.ceil((t+Fs)/Dr),a=Math.floor((e-Fs)/Dr),o=Math.ceil((e+Fs)/Dr),l=0,c=0,h=this._m,u=this._q,d=this._s,f=this._p,g=this._c,x=this.up;for(let m=a;m<=o;m++)for(let p=n;p<=s;p++){let v=Ds(p,m,11),w=Ds(p,m,23),M=Ds(p,m,37),y=(p+v)*Dr,b=(m+w)*Dr,C=y-t,_=b-e,R=Math.sqrt(C*C+_*_);if(R>Fs)continue;let T=.5+.5*Math.sin(y*.11+Math.sin(b*.07)*2)*Math.sin(b*.09+Math.cos(y*.05)*2);if(M>.5+T*.55||!this.ok(y,b))continue;let E=i.heightAt(y,b),P=1-de(Fs-14,Fs,R),L=(.85+Ds(p,m,51)*.7)*P;L<.06||(u.setFromAxisAngle(x,Ds(p,m,61)*6.283),l<this.maxGrass&&(f.set(y,E-.02,b),d.set(L,L*(.9+w*.5),L),h.compose(f,u,d),this.grass.setMatrixAt(l,h),this.groundColor(y,b,g),g.multiplyScalar(1.3),this.grass.setColorAt(l,g),l++),v>.93&&c<this.maxFlowers&&P>.4&&(f.set(y+.3,E-.02,b+.2),d.set(L,L,L),h.compose(f,u,d),this.flowers.setMatrixAt(c,h),g.setHex(Rp[Math.floor(Ds(p,m,71)*Rp.length)]),this.flowers.setColorAt(c,g),c++))}this.grass.count=l,this.flowers.count=c,this.grass.instanceMatrix.needsUpdate=!0,this.flowers.instanceMatrix.needsUpdate=!0,this.grass.instanceColor&&(this.grass.instanceColor.needsUpdate=!0),this.flowers.instanceColor&&(this.flowers.instanceColor.needsUpdate=!0)}};var kc=class{constructor(t,e=20240517){this.gfx=t,this.scene=t.scene,this.seed=e,this.time=0}texScale(){return qa/dt.size}async build(t=()=>{}){let e=(h,u,d)=>f=>t(h,u+f*d);t("Shaping the island\u2026",0),this.terrain=new xc(this.seed),await this.terrain.generate(e("Shaping the island\u2026",0,.2)),t("Painting meadows\u2026",.2),this.painter=new vc(this.terrain);let i=await this.painter.paintBase(1024,e("Painting meadows\u2026",.2,.15)),n=document.createElement("canvas");n.width=n.height=1024,n.getContext("2d").putImageData(new ImageData(i,1024,1024),0,0);let s=document.createElement("canvas");s.width=s.height=qa;let a=s.getContext("2d");a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high",a.drawImage(n,0,0,qa,qa),this.baseCanvas=n,this.basePixels=i,this.colorCanvas=s,this.colorCtx=a,t("Laying roads\u2026",.36),this.paintRoads(a),this.physics=new Mc(this.terrain),this.group=new Yt,this.group.name="static-world",this.scene.add(this.group),this.animated=[];let o={terrain:this.terrain,physics:this.physics,group:this.group,animated:this.animated,seed:this.seed,scene:this.scene,painter:this.painter};this.towns=[],this.buildings=[],this.outdoorSpots=[],this.chestSpots=[],this.cars=[],this.blocked=[],this.yardTrees=[],this.streetLights=[];let l=this.texScale(),c=this.terrain.layout.towns;for(let h=0;h<c.length;h++){t(`Building ${c[h].name}\u2026`,.4+h/c.length*.25),await new Promise(f=>setTimeout(f,0));let u=c[h],d=_p(o,u);Mp(a,l,dt.half,u,d),this._absorb(d),this.towns.push(d)}for(let h of this.terrain.layout.landmarks){let u=bp(o,h);this._absorb(u)}this.blockedAll=this.blocked,t("Planting trees\u2026",.7),await new Promise(h=>setTimeout(h,0)),this.scatter=new Rc({...o,blocked:this.blocked,yardTrees:this.yardTrees}),this.scatter.generate(this.seed+5),this.scatter.build(),console.log(`scatter: ${this.scatter.trees.length} trees, ${this.scatter.rocks.length} rocks, ${this.scatter.bushes.length} bushes, ${this.scatter.chunks.length} chunk meshes`),this.scatter.paintShadows(a,l),this.roadDecals=new Ic(this),this.grass=new Lc(this),this.colorTexture=new nn(s),this.terrainMesh=new yc(this.scene,this.terrain,this.colorTexture,this.gfx.renderer),this.water=new _c(this.scene,this.terrain),this.sky=new bc(this.scene),t("Ready",1)}_absorb(t){this.buildings.push(...t.buildings),this.outdoorSpots.push(...t.outdoorSpots),t.chestSpots&&this.chestSpots.push(...t.chestSpots),this.cars.push(...t.cars),this.blocked.push(...t.blocked),this.yardTrees.push(...t.yardTrees),t.lights&&this.streetLights.push(...t.lights);for(let e of t.buildings)e.chest&&this.chestSpots.push(e.chest)}paintRoads(t){let e=this.texScale(),i=s=>(s+dt.half)*e,n=s=>(s+dt.half)*e;t.lineCap="round",t.lineJoin="round";for(let s of this.terrain.layout.roads){let a=s.samples,o=()=>{t.beginPath(),a.forEach((c,h)=>h?t.lineTo(i(c.x),n(c.z)):t.moveTo(i(c.x),n(c.z)))},l=(c,h,u)=>{o(),t.setLineDash(u||[]),t.lineWidth=c*e,t.strokeStyle=h,t.stroke()};s.kind==="asphalt"?(l(s.w+4,"rgba(150,140,120,0.28)"),l(s.w+1.4,"#9a9ca2"),l(s.w,"#585c66"),l(.28,"#f2d24a",[3.2*e,4.2*e])):(l(s.w+4.5,"rgba(140,110,70,0.30)"),l(s.w+.8,"#bd935c"),l(s.w*.6,"rgba(206,166,110,0.7)"))}t.setLineDash([])}setMarker(t,e){if(t==null){this.markerMesh&&(this.markerMesh.visible=!1);return}if(!this.markerMesh){let i=new si(1.1,1.1,1,14,1,!0);i.translate(0,.5,0);let n=new xe({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec2 vUv; void main(){ float a = pow(1.0 - vUv.y, 0.7) * 0.42; gl_FragColor = vec4(1.0, 0.86, 0.22, a); }",transparent:!0,depthWrite:!1,blending:Mi,side:Fe,fog:!1});this.markerMesh=new Dt(i,n),this.markerMesh.scale.set(1,320,1),this.markerMesh.frustumCulled=!1,this.markerMesh.renderOrder=3,this.scene.add(this.markerMesh)}this.markerMesh.position.set(t,Math.max(0,this.terrain.heightAt(t,e)),e),this.markerMesh.visible=!0}update(t,e){this.time+=t,this.sky.update(t,e),this.water.update(t,this.scene),this.scatter.update(t,this.time,e),this.grass.update(t,e,this.time);for(let i of this.animated)i.obj.rotation[i.axis]+=i.speed*t}};function Nu(r,t){let e=document.createElement("canvas");e.width=e.height=r,t(e.getContext("2d"),r);let i=new nn(e);return i.colorSpace=He,i}var b1=()=>Nu(64,(r,t)=>{let e=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.45,"rgba(255,255,255,0.65)"),e.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=e,r.fillRect(0,0,t,t)}),Cp=()=>Nu(128,(r,t)=>{r.translate(t/2,t/2);let e=r.createRadialGradient(0,0,0,0,0,t/2);e.addColorStop(0,"rgba(255,240,200,1)"),e.addColorStop(.3,"rgba(255,190,80,0.7)"),e.addColorStop(1,"rgba(255,140,0,0)"),r.fillStyle=e,r.fillRect(-t/2,-t/2,t,t),r.fillStyle="rgba(255,255,235,0.95)";for(let i=0;i<4;i++)r.rotate(Math.PI/2),r.beginPath(),r.moveTo(0,-t*.06),r.lineTo(t*.48,0),r.lineTo(0,t*.06),r.closePath(),r.fill()}),M1=()=>Nu(128,(r,t)=>{r.strokeStyle="rgba(255,255,255,0.95)",r.lineWidth=t*.06,r.beginPath(),r.arc(t/2,t/2,t*.44,0,Math.PI*2),r.stroke();let e=r.createRadialGradient(t/2,t/2,t*.3,t/2,t/2,t*.5);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.9,"rgba(255,255,255,0.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=e,r.fillRect(0,0,t,t)}),w1=`
  attribute float aSize; attribute vec4 aColor;
  uniform float uScale;
  varying vec4 vColor;
  void main() {
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(aSize * uScale / max(-mv.z, 0.1), 0.0, 220.0);
  }
`,S1=`
  uniform sampler2D uTex; varying vec4 vColor;
  void main() {
    vec4 t = texture2D(uTex, gl_PointCoord);
    gl_FragColor = vec4(vColor.rgb, vColor.a * t.a);
    if (gl_FragColor.a < 0.01) discard;
  }
`,Dc=class{constructor(t,e,i,n){this.n=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.a0=new Float32Array(e),this.a1=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.next=0;let s=new ge;s.setAttribute("position",new me(this.pos,3).setUsage(Wi)),s.setAttribute("aColor",new me(this.col,4).setUsage(Wi)),s.setAttribute("aSize",new me(this.size,1).setUsage(Wi)),this.uniforms={uTex:{value:n},uScale:{value:800}},this.mat=new xe({uniforms:this.uniforms,vertexShader:w1,fragmentShader:S1,transparent:!0,depthWrite:!1,blending:i?Mi:ls}),this.points=new ma(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points);for(let a=0;a<e;a++)this.life[a]=0}emit(t,e,i,n,s,a,o,l,c,h,u,d,f,g,x=0,m=0){let p=this.next;this.next=(this.next+1)%this.n;let v=p*3;this.pos[v]=t,this.pos[v+1]=e,this.pos[v+2]=i,this.vel[v]=n,this.vel[v+1]=s,this.vel[v+2]=a,this.life[p]=o,this.maxLife[p]=o,this.s0[p]=l,this.s1[p]=c,this.a0[p]=f,this.a1[p]=g;let w=p*4;this.col[w]=h,this.col[w+1]=u,this.col[w+2]=d,this.col[w+3]=f,this.size[p]=l,this.grav[p]=x,this.drag[p]=m}update(t){let e=!1;for(let i=0;i<this.n;i++){if(this.life[i]<=0){this.size[i]=0;continue}e=!0,this.life[i]-=t;let n=i*3,s=1-this.life[i]/this.maxLife[i],a=Math.exp(-this.drag[i]*t);this.vel[n]*=a,this.vel[n+1]=this.vel[n+1]*a-this.grav[i]*t,this.vel[n+2]*=a,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t,this.size[i]=It(this.s0[i],this.s1[i],s),this.col[i*4+3]=It(this.a0[i],this.a1[i],s),this.life[i]<=0&&(this.size[i]=0)}if(e||this._dirty){let i=this.points.geometry;i.attributes.position.needsUpdate=!0,i.attributes.aColor.needsUpdate=!0,i.attributes.aSize.needsUpdate=!0}this._dirty=e}},Du=class{constructor(t,e){this.n=e;let i=new li(1,1,1);this.mesh=new Oi(i,new Ne({color:16777215}),e),this.mesh.instanceMatrix.setUsage(Wi),this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,t.add(this.mesh),this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.rot=new Float32Array(e*3),this.spin=new Float32Array(e*3),this.life=new Float32Array(e),this.sz=new Float32Array(e),this.next=0,this._m=new re,this._q=new Ue,this._e=new Ve,this._s=new D,this._pp=new D;let n=new re().makeScale(0,0,0);for(let s=0;s<e;s++)this.mesh.setMatrixAt(s,n),this.mesh.setColorAt(s,new ot(1,1,1));this.mesh.instanceColor.needsUpdate=!0,this.terrain=null}emit(t,e,i,n,s,a,o,l,c=1.1){let h=this.next;this.next=(this.next+1)%this.n;let u=h*3;this.p[u]=t,this.p[u+1]=e,this.p[u+2]=i,this.v[u]=n,this.v[u+1]=s,this.v[u+2]=a,this.rot[u]=Math.random()*6,this.rot[u+1]=Math.random()*6,this.rot[u+2]=Math.random()*6,this.spin[u]=(Math.random()-.5)*16,this.spin[u+1]=(Math.random()-.5)*16,this.spin[u+2]=(Math.random()-.5)*16,this.life[h]=c,this.sz[h]=o,this.mesh.setColorAt(h,l),this.mesh.instanceColor.needsUpdate=!0}update(t){let e=this.terrain,i=!1;for(let n=0;n<this.n;n++){if(this.life[n]<=0)continue;i=!0,this.life[n]-=t;let s=n*3;this.v[s+1]-=18*t,this.p[s]+=this.v[s]*t,this.p[s+1]+=this.v[s+1]*t,this.p[s+2]+=this.v[s+2]*t;let a=e?e.heightAt(this.p[s],this.p[s+2]):0;this.p[s+1]<a+this.sz[n]*.5&&(this.p[s+1]=a+this.sz[n]*.5,this.v[s+1]*=-.35,this.v[s]*=.6,this.v[s+2]*=.6,this.spin[s]*=.5,this.spin[s+1]*=.5,this.spin[s+2]*=.5),this.rot[s]+=this.spin[s]*t,this.rot[s+1]+=this.spin[s+1]*t,this.rot[s+2]+=this.spin[s+2]*t;let o=this.life[n]>0?this.sz[n]*Math.min(1,this.life[n]*3):0;this._e.set(this.rot[s],this.rot[s+1],this.rot[s+2]),this._q.setFromEuler(this._e),this._pp.set(this.p[s],this.p[s+1],this.p[s+2]),this._s.set(o,o*.7,o),this._m.compose(this._pp,this._q,this._s),this.mesh.setMatrixAt(n,this._m)}i&&(this.mesh.instanceMatrix.needsUpdate=!0)}},T1=`
  attribute vec3 aStart; attribute vec3 aEnd; attribute vec4 aCol; attribute float aWidth;
  varying vec2 vUv; varying vec4 vCol;
  void main() {
    vUv = uv; vCol = aCol;
    vec4 s = viewMatrix * vec4(aStart, 1.0);
    vec4 e = viewMatrix * vec4(aEnd, 1.0);
    vec3 dir = e.xyz - s.xyz;
    float len = length(dir);
    dir = len > 1e-5 ? dir / len : vec3(0.0, 0.0, 1.0);
    vec3 mid = mix(s.xyz, e.xyz, 0.5);
    vec3 side = normalize(cross(dir, mid));
    vec3 p = mix(s.xyz, e.xyz, uv.x) + side * (uv.y - 0.5) * aWidth;
    gl_Position = projectionMatrix * vec4(p, 1.0);
  }
`,E1=`
  varying vec2 vUv; varying vec4 vCol;
  void main() {
    float across = 1.0 - pow(abs(vUv.y * 2.0 - 1.0), 2.0);
    float along = pow(vUv.x, 1.6);
    float a = vCol.a * across * along;
    gl_FragColor = vec4(vCol.rgb * (1.0 + across), a);
  }
`,Uu=class{constructor(t,e){this.n=e;let i=new zi(1,1),n=new Sa;n.index=i.index,n.setAttribute("position",i.attributes.position),n.setAttribute("uv",i.attributes.uv),this.start=new Float32Array(e*3),this.end=new Float32Array(e*3),this.col=new Float32Array(e*4),this.width=new Float32Array(e),n.setAttribute("aStart",new mi(this.start,3).setUsage(Wi)),n.setAttribute("aEnd",new mi(this.end,3).setUsage(Wi)),n.setAttribute("aCol",new mi(this.col,4).setUsage(Wi)),n.setAttribute("aWidth",new mi(this.width,1).setUsage(Wi)),n.instanceCount=e,this.mesh=new Dt(n,new xe({vertexShader:T1,fragmentShader:E1,transparent:!0,depthWrite:!1,blending:Mi,side:Fe})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,t.add(this.mesh),this.items=[];for(let s=0;s<e;s++)this.items.push({t:99,life:0,ax:0,ay:0,az:0,bx:0,by:0,bz:0,len:0,speed:0,r:1,g:1,b:1,w:.05,tail:8});this.next=0}add(t,e,i,n,s,a,o,l){let c=this.items[this.next];this.next=(this.next+1)%this.n;let h=n-t,u=s-e,d=a-i;c.len=Math.hypot(h,u,d),c.ax=t,c.ay=e,c.az=i,c.bx=n,c.by=s,c.bz=a,c.dx=h/(c.len||1),c.dy=u/(c.len||1),c.dz=d/(c.len||1),c.t=0,c.speed=520,c.tail=Math.min(14,Math.max(2,c.len*.35));let f=new ot(o);c.r=f.r*2.6,c.g=f.g*2.6,c.b=f.b*2.6,c.w=l?.07:.055,c.life=c.len/c.speed+.09,c.alpha=l?1:.85}update(t){for(let i=0;i<this.n;i++){let n=this.items[i],s=i*3,a=i*4;if(n.t>n.life){this.col[a+3]=0,this.width[i]=0;continue}n.t+=t;let o=Math.min(n.len,n.t*n.speed),l=Math.max(0,o-n.tail);this.start[s]=n.ax+n.dx*l,this.start[s+1]=n.ay+n.dy*l,this.start[s+2]=n.az+n.dz*l,this.end[s]=n.ax+n.dx*o,this.end[s+1]=n.ay+n.dy*o,this.end[s+2]=n.az+n.dz*o;let c=n.t*n.speed>n.len?le(1-(n.t-n.len/n.speed)/.09):1;this.col[a]=n.r,this.col[a+1]=n.g,this.col[a+2]=n.b,this.col[a+3]=n.alpha*c,this.width[i]=n.w}let e=this.mesh.geometry;e.attributes.aStart.needsUpdate=!0,e.attributes.aEnd.needsUpdate=!0,e.attributes.aCol.needsUpdate=!0,e.attributes.aWidth.needsUpdate=!0}},Pp={dirt:[[.55,.42,.26],[.42,.55,.22]],stone:[[.62,.64,.68],[.5,.52,.56]],wood:[[.85,.62,.33],[.66,.45,.22]],metal:[[.75,.78,.85],[.5,.55,.65]],brick:[[.75,.4,.3],[.6,.3,.22]]},Uc=class{constructor(t){this.game=t;let e=t.gfx.scene;this.soft=new Dc(e,1800,!1,b1()),this.glow=new Dc(e,900,!0,Cp()),this.debris=new Du(e,260),this.debris.terrain=t.terrain,this.tracers=new Uu(e,48),this.flashTex=Cp(),this.flashes=[];for(let n=0;n<10;n++){let s=new fa(new gr({map:this.flashTex,blending:Mi,depthWrite:!1,transparent:!0,fog:!1}));s.visible=!1,s.renderOrder=7,e.add(s),this.flashes.push({s,t:0,life:.05})}this.nextFlash=0,this.rings=[];let i=M1();for(let n=0;n<10;n++){let s=new Dt(new zi(1,1),new en({map:i,transparent:!0,depthWrite:!1,blending:Mi,side:Fe,fog:!1}));s.rotation.x=-Math.PI/2,s.visible=!1,s.renderOrder=4,e.add(s),this.rings.push({m:s,t:0,life:.7,s0:.3,s1:3,color:new ot(1,1,1),active:!1})}this.nextRing=0,this._c=new ot}update(t){let e=this.game.gfx.camera,n=this.game.gfx.renderer.domElement.height/(2*Math.tan(e.fov*Math.PI/360));this.soft.uniforms.uScale.value=n,this.glow.uniforms.uScale.value=n,this.soft.update(t),this.glow.update(t),this.debris.update(t),this.tracers.update(t);for(let s of this.flashes)s.s.visible&&(s.t+=t,s.t>s.life?s.s.visible=!1:s.s.material.opacity=1-s.t/s.life);for(let s of this.rings){if(!s.active)continue;s.t+=t;let a=s.t/s.life;if(a>=1){s.active=!1,s.m.visible=!1;continue}let o=It(s.s0,s.s1,1-Math.pow(1-a,2));s.m.scale.set(o,o,1),s.m.material.opacity=(1-a)*.9}}tracer(t,e,i,n,s,a,o,l){this.tracers.add(t,e,i,n,s,a,o,l)}muzzleFlash(t,e,i){let n=this.flashes[this.nextFlash];this.nextFlash=(this.nextFlash+1)%this.flashes.length,n.s.visible=!0,n.t=0,n.life=i.id==="sniper"?.09:.055,n.s.position.copy(e);let s=(i.id==="pump"?1.5:i.id==="sniper"?1.7:i.id==="pistol"?.7:1)*(.7+Math.random()*.4);n.s.scale.set(s,s,1),n.s.material.rotation=Math.random()*6.28,n.s.material.opacity=1,this.soft.emit(e.x,e.y,e.z,(Math.random()-.5)*.4,.5+Math.random()*.3,(Math.random()-.5)*.4,.7,.12,.5,.8,.8,.8,.22,0,-.3,1.5)}impact(t,e,i,n,s,a,o="dirt",l){let h=this.game.terrain.waterLevelAt(t,i);if(h!==null&&e<h+.3){this.splash(t,h,i,.6);return}let d=(Pp[o]||Pp.dirt)[Math.random()<.5?0:1],f=4+Math.random()*2|0;for(let x=0;x<f;x++)this.soft.emit(t+n*.05,e+s*.05,i+a*.05,(n+(Math.random()-.5))*1.4,(s+Math.random()*.6)*1.4,(a+(Math.random()-.5))*1.4,.45+Math.random()*.25,.1,.5+Math.random()*.25,d[0],d[1],d[2],.75,0,-.5,2.5);if(o==="metal"||o==="stone")for(let x=0;x<7;x++)this.glow.emit(t,e,i,(n+(Math.random()-.5)*1.6)*5,(s+Math.random())*4,(a+(Math.random()-.5)*1.6)*5,.22+Math.random()*.15,.13,.04,1,.85,.4,1,0,10,.6);let g=o==="wood"||o==="stone"||o==="brick"?3:2;for(let x=0;x<g;x++)this._c.setRGB(d[0],d[1],d[2]),this.debris.emit(t,e,i,(n+(Math.random()-.5))*3,(s+Math.random())*3,(a+(Math.random()-.5))*3,.07+Math.random()*.05,this._c,.8)}impactActor(t,e,i,n){for(let s=0;s<6;s++)this.glow.emit(t,e,i,(Math.random()-.5)*4,Math.random()*3,(Math.random()-.5)*4,.28,.16,.03,1,n?.75:.95,n?.25:.7,1,0,6,1);this.soft.emit(t,e,i,0,.3,0,.3,.2,.55,1,1,1,.5,0,0,1)}dust(t,e,i,n=1){let s=6+n*6|0,o=this.game.terrain.waterLevelAt(t,i);for(let l=0;l<s;l++){let c=l/s*Math.PI*2+Math.random()*.5;this.soft.emit(t,e+.08,i,Math.cos(c)*(1.4+n*1.6),.5+Math.random()*.6,Math.sin(c)*(1.4+n*1.6),.55+Math.random()*.35,.25,.9+n*.5,.75,.7,.6,.5,0,-.5,3)}}splash(t,e,i,n=1){for(let s=0;s<10*n;s++){let a=Math.random()*Math.PI*2,o=1+Math.random()*2.2*n;this.soft.emit(t,e+.1,i,Math.cos(a)*o,2.5+Math.random()*3*n,Math.sin(a)*o,.7+Math.random()*.4,.16,.06,.85,.95,1,.9,0,12,.2)}this.ring(t,e+.06,i,.3*n,2.6*n,.7,1,1,1)}ring(t,e,i,n,s,a,o,l,c){let h=this.rings[this.nextRing];this.nextRing=(this.nextRing+1)%this.rings.length,h.active=!0,h.t=0,h.life=a,h.s0=n,h.s1=s,h.m.visible=!0,h.m.position.set(t,e,i),h.m.material.color.setRGB(o,l,c)}healPulse(t,e){let i=this._c.set(e),n=t.pos;this.ring(n.x,n.y+.05,n.z,.4,2.4,.8,i.r,i.g,i.b);for(let s=0;s<14;s++){let a=Math.random()*Math.PI*2,o=.3+Math.random()*.5;this.glow.emit(n.x+Math.cos(a)*o,n.y+.2+Math.random()*.5,n.z+Math.sin(a)*o,0,1.4+Math.random(),0,.9,.22,.06,i.r*1.4,i.g*1.4,i.b*1.4,1,0,0,.5)}}sparkle(t,e,i,n,s=16,a=2,o=3){let l=this._c.set(n);for(let c=0;c<s;c++){let h=Math.random()*Math.PI*2,u=Math.random()*a;this.glow.emit(t,e,i,Math.cos(h)*u,o*(.5+Math.random()),Math.sin(h)*u,.7+Math.random()*.5,.2,.04,l.r*1.5,l.g*1.5,l.b*1.5,1,0,5,1)}}poof(t,e,i,n=16777215,s=1){let a=this._c.set(n);for(let o=0;o<14;o++){let l=Math.random()*Math.PI*2,c=1+Math.random()*3*s;this.soft.emit(t,e+Math.random(),i,Math.cos(l)*c,Math.random()*2.5,Math.sin(l)*c,.8+Math.random()*.4,.3*s,1.2*s,a.r,a.g,a.b,.8,0,-.3,2.2)}this.sparkle(t,e+1,i,n,10,2.5*s,2)}pieceBreak(t,e,i,n,s=1.5){let a=new ot(n);for(let o=0;o<14;o++)this._c.copy(a).multiplyScalar(.7+Math.random()*.5),this.debris.emit(t+(Math.random()-.5)*s,e+(Math.random()-.3)*s,i+(Math.random()-.5)*s,(Math.random()-.5)*6,2+Math.random()*5,(Math.random()-.5)*6,.16+Math.random()*.2,this._c,1.4);for(let o=0;o<8;o++)this.soft.emit(t+(Math.random()-.5)*s,e+(Math.random()-.3)*s,i+(Math.random()-.5)*s,(Math.random()-.5)*2,Math.random()*1.5,(Math.random()-.5)*2,.9,.4,1.4,.8,.78,.72,.55,0,-.2,1.8)}damageNumber(t,e,i,n,s,a){this.game.hud?.addFloater(t,e,i,Math.round(n),s,a)}};var ai={light:{id:"light",name:"Light Bullets",short:"LIGHT",color:"#ffd84a",box:16763194,perBox:36,cap:250},medium:{id:"medium",name:"Medium Bullets",short:"MEDIUM",color:"#ff9a3a",box:15764016,perBox:30,cap:240},shells:{id:"shells",name:"Shotgun Shells",short:"SHELLS",color:"#ff5a4a",box:14699066,perBox:8,cap:60},heavy:{id:"heavy",name:"Heavy Bullets",short:"HEAVY",color:"#7ec8ff",box:5943536,perBox:6,cap:40}},Be={ar:{id:"ar",name:"Assault Rifle",ammo:"medium",auto:!0,dmg:30,rate:5.5,mag:30,reload:2.3,spread:.012,adsSpread:.4,bloom:.0035,bloomMax:.028,recover:.05,headMult:1.5,pellets:1,range:400,falloff:[70,260,.65],structDmg:34,hold:"rifle",fov:52,recoil:1.15,tracer:16770720,sound:"ar",icon:"ar"},smg:{id:"smg",name:"Submachine Gun",ammo:"light",auto:!0,dmg:17,rate:11.5,mag:30,reload:2.1,spread:.02,adsSpread:.5,bloom:.0028,bloomMax:.04,recover:.05,headMult:1.5,pellets:1,range:260,falloff:[35,130,.55],structDmg:20,hold:"smg",fov:58,recoil:.8,tracer:16770720,sound:"smg",icon:"smg"},pump:{id:"pump",name:"Pump Shotgun",ammo:"shells",auto:!1,dmg:12,rate:.9,mag:5,reload:4.4,spread:.06,adsSpread:.65,bloom:0,bloomMax:0,recover:.05,headMult:2,pellets:10,range:120,falloff:[9,34,.18],structDmg:60,hold:"shotgun",fov:58,recoil:3.6,tracer:16773312,sound:"shotgun",icon:"pump"},sniper:{id:"sniper",name:"Bolt-Action Sniper",ammo:"heavy",auto:!1,dmg:105,rate:.36,mag:1,reload:2.9,spread:.02,adsSpread:0,bloom:0,bloomMax:0,recover:.05,headMult:2.5,pellets:1,range:900,falloff:[400,900,.9],structDmg:105,hold:"sniper",fov:14,recoil:4.5,tracer:16777215,sound:"sniper",icon:"sniper"},pistol:{id:"pistol",name:"Pistol",ammo:"light",auto:!1,dmg:24,rate:6.5,mag:16,reload:1.5,spread:.014,adsSpread:.45,bloom:.006,bloomMax:.03,recover:.06,headMult:2,pellets:1,range:220,falloff:[50,160,.6],structDmg:20,hold:"pistol",fov:60,recoil:1,tracer:16770720,sound:"pistol",icon:"pistol"}},Ip=["ar","smg","pump","sniper","pistol"],A1=[1,.97,.94,.9,.86],Gn={id:"pickaxe",name:"Pickaxe",dmg:20,structDmg:45,rate:1.9,reach:2.8,hold:"melee",icon:"pickaxe"},Ge={bandage:{id:"bandage",name:"Bandage",use:3.5,heal:15,healCap:75,stack:15,color:"#ffffff",kind:"heal"},medkit:{id:"medkit",name:"Med Kit",use:7,heal:100,healCap:100,stack:3,color:"#ff4a55",kind:"heal"},minishield:{id:"minishield",name:"Mini Shield",use:2.2,shield:25,shieldCap:50,stack:6,color:"#5ec8ff",kind:"shield"},shield:{id:"shield",name:"Shield Potion",use:4.5,shield:50,shieldCap:100,stack:2,color:"#2f7dff",kind:"shield"},chug:{id:"chug",name:"Chug Jug",use:9,heal:100,healCap:100,shield:100,shieldCap:100,stack:1,color:"#b26cff",kind:"both"}},Ur={wood:{id:"wood",name:"Wood",color:"#e0a552",hp:150,hex:14262363},stone:{id:"stone",name:"Stone",color:"#c9ccd4",hp:300,hex:12041414},metal:{id:"metal",name:"Metal",color:"#7fb4ff",hp:450,hex:9348804}},Nr=["wood","stone","metal"];function Bs(r){let t=Be[r.id],e=Si[r.rarity];return{...t,dmg:Math.round(t.dmg*e.dmg*10)/10,reload:t.reload*A1[r.rarity]}}var Nc={floor:{kind:[["weapon",40],["ammo",22],["heal",26],["shield",12]],rarity:[[0,46],[1,32],[2,15],[3,5.5],[4,1.5]],weapon:[["ar",22],["smg",16],["pump",18],["pistol",16],["sniper",7]]},chest:{rarity:[[0,8],[1,32],[2,34],[3,20],[4,6]],weapon:[["ar",24],["smg",16],["pump",22],["pistol",8],["sniper",12]]},drop:{rarity:[[0,40],[1,34],[2,18],[3,7],[4,1]]}},Lp=["Blaze","Nova","Pixel","Rogue","Zephyr","Maverick","Comet","Viper","Echo","Jinx","Onyx","Sunny","Bandit","Ripley","Turbo","Skye","Mango","Ghost","Dash","Cinder","Tango","Quill","Ranger","Frost","Hazel","Lynx","Orbit","Sable","Vortex","Wren","Rocket","Pebbles","Tempest","Fable","Mocha","Titan","Jade","Bolt","Cricket","Dusty"],Fc=r=>r?r.kind==="weapon"?Be[r.id].name:r.kind==="consumable"?Ge[r.id].name:r.kind==="pickaxe"?Gn.name:r.id:"";var Ja=new D,ms=new D,Os=new D,Fr=new D,kp=new D;function R1(r,t,e,i,n,s,a,o,l,c){let h=a-r,u=o-t,d=l-e,f=h*i+u*n+d*s,g=h*h+u*u+d*d-f*f,x=c*c;if(g>x)return-1;let m=Math.sqrt(x-g),p=f-m;return f+m<0?-1:p>=0?p:0}function C1(r,t,e,i,n,s,a,o,l,c,h){let u=r-a,d=e-o,f=i*i+s*s,g=-1;if(f>1e-9){let x=2*(u*i+d*s),m=u*u+d*d-l*l,p=x*x-4*f*m;if(p>=0){let v=Math.sqrt(p),w=(-x-v)/(2*f);if(w<0&&(w=m<=0?0:-1),w>=0){let M=t+n*w;M>=c&&M<=h&&(g=w)}}}if(Math.abs(n)>1e-9)for(let x of[h,c]){let m=(x-t)/n;if(m>=0&&(g<0||m<g)){let p=r+i*m-a,v=e+s*m-o;p*p+v*v<=l*l&&(g=m)}}return g}var Bc=class{constructor(t){this.game=t,this.rh=new Vn,this.res={type:"none",t:0,x:0,y:0,z:0,nx:0,ny:1,nz:0,actor:null,head:!1,collider:null,terrain:!1}}trace(t,e,i,n,s,a,o,l){let c=this.game,h=this.res,u=c.physics.raycast(e,i,n,s,a,o,l,{bullets:!0},this.rh),d=u.hit?u.t:l;h.type=u.hit?"world":"none",h.t=d,h.actor=null,h.head=!1,h.collider=u.collider,h.terrain=u.terrain,h.nx=u.nx,h.ny=u.ny,h.nz=u.nz;for(let f of c.actors){if(f===t||!f.alive||f.mode==="bus")continue;let g=f.pos.x-e,x=f.pos.y+.9-i,m=f.pos.z-n,p=g*s+x*a+m*o;if(p<-1||p>d+2)continue;let v=g-s*p,w=x-a*p,M=m-o*p;if(v*v+w*w+M*M>4)continue;let y=f.hitVolumes(),b=R1(e,i,n,s,a,o,y.head.x,y.head.y,y.head.z,y.head.r),C=C1(e,i,n,s,a,o,y.body.x,y.body.z,y.body.r,y.body.y0,y.body.y1),_=-1,R=!1;b>=0&&(C<0||b<=C+.06)?(_=b,R=!0):C>=0&&(_=C),_>=0&&_<d&&(d=_,h.type="actor",h.t=_,h.actor=f,h.head=R,h.collider=null,h.terrain=!1)}return h.x=e+s*d,h.y=i+a*d,h.z=n+o*d,h}falloff(t,e){let i=t.falloff;return e<=i[0]?1:e>=i[1]?i[2]:1+(i[2]-1)*((e-i[0])/(i[1]-i[0]))}fireWeapon(t,e,i,n){let s=this.game,a=t.aimRay;Ja.copy(a.origin);let o=a.dir;Fr.set(o.z,0,-o.x),Fr.lengthSq()<1e-6&&Fr.set(1,0,0),Fr.normalize(),kp.crossVectors(o,Fr).normalize(),t.model.muzzleWorld(Os),t.mode!=="ground"&&(Os.copy(t.pos).y+=1.4);let l=t.isPlayer,c=null,h=!1;for(let u=0;u<i.pellets;u++){let d=Math.random()*Math.PI*2,f=Math.sqrt(Math.random())*n;ms.copy(o).addScaledVector(Fr,Math.cos(d)*f).addScaledVector(kp,Math.sin(d)*f).normalize();let g=this.trace(t,Ja.x,Ja.y,Ja.z,ms.x,ms.y,ms.z,i.range),x=g.t;if((i.pellets===1||u<4)&&s.fx.tracer(Os.x,Os.y,Os.z,g.x,g.y,g.z,i.tracer,l,g.type!=="none"),g.type==="actor"){let m=g.actor,p=i.dmg*this.falloff(i,x)*(g.head?i.headMult:1)*(t.damageScale??1);c||(c=new Map);let v=c.get(m)||{dmg:0,head:!1,x:g.x,y:g.y,z:g.z};v.dmg+=p,v.head=v.head||g.head,c.set(m,v),s.fx.impactActor(g.x,g.y,g.z,g.head),h=!0}else if(g.type==="world"){let m=g.collider;s.fx.impact(g.x,g.y,g.z,g.nx,g.ny,g.nz,m?.material||(g.terrain?"dirt":"stone"),m?.kind),m?.owner?.kind==="piece"&&s.build.damagePiece(m.owner,i.structDmg*this.falloff(i,x)),l&&u===0&&s.audio?.impact(g.x,g.y,g.z,m?.material||"dirt")}}if(c)for(let[u,d]of c){let f=Math.round(d.dmg),g=u.shield,x=u.takeDamage(f,{attacker:t,weapon:i.name,weaponId:i.id,headshot:d.head,cause:"weapon",point:d});if(t.stats.damageDealt+=x,t.stats.hits++,l){let m=!u.alive;s.hud?.hitMarker(d.head,m,x),s.fx.damageNumber(d.x,d.y,d.z,x,d.head,g>0),s.audio?.hitConfirm(d.head,m,g>0)}}return s.fx.muzzleFlash(t,Os,i),s.audio?.shot(t,i,Os),s.noise(t.pos,i.id==="sniper"?160:110,t),h}melee(t){let e=this.game,i=t.eyePos(Ja),n=t.aimRay;ms.copy(n.dirFromEye||n.dir);let s=Gn.reach,a=this.trace(t,i.x,i.y-.2,i.z,ms.x,ms.y,ms.z,s);if(a.type==="actor"){let o=a.actor,l=o.takeDamage(Gn.dmg*(a.head?1.5:1),{attacker:t,weapon:"Pickaxe",weaponId:"pickaxe",headshot:a.head,cause:"melee",point:a});t.stats.damageDealt+=l,e.fx.impactActor(a.x,a.y,a.z,a.head),t.isPlayer&&(e.hud?.hitMarker(a.head,!o.alive,l),e.fx.damageNumber(a.x,a.y,a.z,l,a.head,!1),e.audio?.hitConfirm(a.head,!o.alive,!1)),e.audio?.pickaxeHit(t,"flesh");return}if(a.type==="world"){let o=a.collider,l=o?.owner;l?.kind==="piece"?(e.build.damagePiece(l,Gn.structDmg),e.fx.impact(a.x,a.y,a.z,a.nx,a.ny,a.nz,l.mat,"piece"),e.audio?.pickaxeHit(t,l.mat)):l&&(l.kind==="tree"||l.kind==="rock"||l.kind==="prop")?(e.harvest(t,l,a),e.audio?.pickaxeHit(t,l.kind==="rock"?"stone":l.kind==="prop"?"metal":"wood")):(e.fx.impact(a.x,a.y,a.z,a.nx,a.ny,a.nz,o?.material||"dirt",o?.kind),e.audio?.pickaxeHit(t,o?.material||"dirt"))}}};var We=2830136,gs=4870236,Qa=9081504,P1=10119740,I1=7226918,Dp=null,zs=()=>Dp||(Dp=Di()),Yi=new Map;function L1(r,t=0){let e=`w:${r}:${t}`;if(Yi.has(e))return Yi.get(e);let i=new ot(Si[t].color).multiplyScalar(.92),n=new ot(Si[t].color).multiplyScalar(.55),s=new _e,a;switch(r){case"ar":s.box(-.028,-.025,-.3,.028,.075,.1,i),s.box(-.032,-.015,-.54,.032,.062,-.3,gs),s.box(-.014,.028,-.8,.014,.056,-.54,We),s.box(-.02,.022,-.86,.02,.062,-.8,We),s.box(-.024,-.075,.1,.024,.05,.36,n),s.box(-.02,-.13,.02,.02,-.025,.075,We),s.box(-.02,-.18,-.19,.02,-.025,-.125,We),s.box(-.022,-.185,-.195,.022,-.16,-.12,n),s.box(-.012,.075,-.24,.012,.09,.05,We),s.box(-.018,.09,-.06,.018,.125,0,We),s.box(-.01,.056,-.66,.01,.1,-.64,We),a={grip:[0,-.06,.05],fore:[0,-.015,-.42],mag:[0,-.16,-.155],muzzle:[0,.042,-.88],len:1.2};break;case"smg":s.box(-.03,-.02,-.22,.03,.07,.07,i),s.box(-.016,.022,-.36,.016,.052,-.22,We),s.box(-.02,-.27,-.13,.02,-.02,-.075,We),s.box(-.022,-.275,-.135,.022,-.24,-.07,n),s.box(-.02,-.12,0,.02,-.02,.05,We),s.box(-.008,-.03,.07,.008,.05,.24,gs),s.box(-.02,.05,.22,.02,.06,.26,We),s.box(-.012,.07,-.16,.012,.1,.02,We),s.box(-.02,-.06,-.29,.02,-.02,-.22,gs),a={grip:[0,-.06,.03],fore:[0,-.05,-.25],mag:[0,-.22,-.1],muzzle:[0,.037,-.4],len:.75};break;case"pump":s.box(-.03,-.03,-.14,.03,.06,.1,i),s.box(-.013,.02,-.78,.013,.052,-.14,We),s.box(-.016,-.014,-.7,.016,.02,-.14,gs),s.box(-.034,-.04,-.56,.034,.018,-.36,P1),s.box(-.026,-.09,.1,.026,.05,.44,I1),s.box(-.02,-.12,.03,.02,-.03,.08,We),s.box(-.01,.052,-.78,.01,.07,-.76,Qa),a={grip:[0,-.06,.05],fore:[0,-.02,-.46],mag:[0,-.04,-.06],muzzle:[0,.036,-.8],len:1.25};break;case"sniper":s.box(-.026,-.025,-.3,.026,.07,.12,i),s.box(-.012,.025,-1.05,.012,.05,-.3,We),s.box(-.018,.02,-1.1,.018,.056,-1.05,We),s.box(-.026,-.09,.12,.026,.06,.5,n),s.box(-.02,-.13,.03,.02,-.025,.08,We),s.box(-.022,.07,-.4,.022,.13,.06,We),s.box(-.03,.075,-.42,.03,.135,-.38,gs),s.box(-.03,.075,.02,.03,.135,.06,gs),s.box(.026,.02,-.02,.06,.04,.01,We),s.box(.055,.015,-.03,.07,.05,.02,Qa),s.box(-.016,-.11,-.24,.016,-.025,-.19,We),a={grip:[0,-.06,.05],fore:[0,-.02,-.42],mag:[0,-.07,-.21],muzzle:[0,.038,-1.12],len:1.6};break;case"pistol":s.box(-.02,0,-.2,.02,.05,.03,i),s.box(-.018,-.03,-.15,.018,0,.03,We),s.box(-.018,-.14,0,.018,-.03,.055,We),s.box(-.02,-.15,-.005,.02,-.12,.06,n),s.box(-.008,.05,-.19,.008,.065,-.17,Qa),s.box(-.008,.05,.005,.008,.068,.03,Qa),s.box(-.01,.005,-.23,.01,.04,-.2,We),a={grip:[0,-.075,.03],fore:[0,-.085,.035],mag:[0,-.15,.03],muzzle:[0,.028,-.24],len:.42};break;default:throw new Error("unknown weapon "+r)}let l={geometry:s.build(),...a};return Yi.set(e,l),l}function Fu(r,t=0){let e=L1(r,t),i=new Dt(e.geometry,zs());i.castShadow=!0;let n=new Yt;return n.add(i),n.userData=e,n}function k1(){let r="pickaxe";if(Yi.has(r))return Yi.get(r);let t=new _e;t.box(-.02,-.14,-.02,.02,.78,.02,14274752),t.box(-.024,-.14,-.024,.024,-.02,.024,14239803),t.box(-.03,.74,-.03,.03,.82,.03,gs);let e=[[0,.12,.05,.075],[.12,.22,.04,.05],[.22,.31,.03,.02],[.31,.38,.02,-.05]];for(let n of[-1,1])for(let[s,a,o,l]of e){let c=n>0?s:-a,h=n>0?a:-s;t.box(c,.74+l-.03,-o/2,h,.74+l+.05+o*.5,o/2,Qa)}t.box(-.05,.76,-.045,.05,.85,.045,gs);let i={geometry:t.build(),grip:[0,.05,0],tip:[.36,.72,0],len:.9};return Yi.set(r,i),i}function Bu(){let r=k1(),t=new Dt(r.geometry,zs());t.castShadow=!0;let e=new Yt;return e.add(t),e.userData=r,e}function D1(r){let t=`c:${r}`;if(Yi.has(t))return Yi.get(t);let e=new _e,i=Ge[r];switch(r){case"bandage":e.box(-.09,0,-.06,.09,.06,.06,16777215),e.box(-.095,.02,-.065,.095,.04,.065,15133168),e.box(-.03,.058,-.01,.03,.066,.01,15217738),e.box(-.01,.058,-.03,.01,.066,.03,15217738);break;case"medkit":e.box(-.14,0,-.09,.14,.15,.09,16053494),e.box(-.145,.06,-.095,.145,.09,.095,15217738),e.box(-.06,.15,-.015,.06,.19,.015,8948886),e.box(-.04,.152,-.093,.04,.156,.093,15217738),e.box(-.014,.152,-.093,.014,.156,.093,15217738);break;case"minishield":e.cylinder(0,0,0,.045,.09,8,5032191,{dark:.9}),e.cylinder(0,.09,0,.02,.05,8,12577535),e.cylinder(0,.14,0,.026,.025,8,9067051);break;case"shield":e.cylinder(0,0,0,.06,.13,8,3112447,{dark:.9}),e.cylinder(0,.13,0,.025,.07,8,10470655),e.cylinder(0,.2,0,.032,.03,8,9067051);break;case"chug":e.cylinder(0,0,0,.085,.2,10,11693311,{dark:.85}),e.cylinder(0,.2,0,.05,.06,10,14268671),e.cylinder(0,.26,0,.055,.03,10,16765503),e.box(.08,.06,-.015,.14,.16,.015,14268671);break;default:throw new Error("unknown consumable "+r)}let s={geometry:e.build(),color:i.color};return Yi.set(t,s),s}function Ou(r){let t=D1(r),e=new Dt(t.geometry,zs());e.castShadow=!0;let i=new Yt;return i.add(e),i.userData=t,i}function U1(r){let t=`a:${r}`;if(Yi.has(t))return Yi.get(t);let e=ai[r],i=new _e;i.box(-.13,0,-.08,.13,.13,.08,3817290),i.box(-.135,.09,-.085,.135,.13,.085,e.box),i.box(-.05,.13,-.05,.05,.15,.05,2830136);for(let s=-1;s<=1;s++)i.box(s*.07-.02,.15,-.02,s*.07+.02,.21,.02,14263361);let n={geometry:i.build(),color:e.color};return Yi.set(t,n),n}function N1(r){let t=U1(r),e=new Dt(t.geometry,zs());e.castShadow=!0;let i=new Yt;return i.add(e),i.userData=t,i}function Br(r){switch(r.kind){case"weapon":return Fu(r.id,r.rarity);case"pickaxe":return Bu();case"consumable":return Ou(r.id);case"ammo":return N1(r.id);default:return new Yt}}var Up=85,Np=170,Fp=320,zu={bullets:!1,terrain:!1},Gu=new si(.2,.2,1,10,1,!0);Gu.translate(0,.5,0);var Wu=new ya(.9,24);Wu.rotateX(-Math.PI/2);var Hu=new Map;function Bp(r){let t=r;if(Hu.has(t))return Hu.get(t);let e=new ot(r),i=new xe({uniforms:{uColor:{value:new D(e.r,e.g,e.b)}},vertexShader:"varying vec2 vUv; varying vec3 vN; void main(){ vUv = uv; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform vec3 uColor; varying vec2 vUv; varying vec3 vN;
      void main(){
        float a = pow(1.0 - vUv.y, 1.8) * 0.6;
        float fres = pow(abs(vN.z), 1.2);
        gl_FragColor = vec4(uColor * 1.5, a * (0.25 + 0.75 * fres));
      }`,transparent:!0,depthWrite:!1,blending:Mi,side:Fe,fog:!1});return Hu.set(t,i),i}var Vu=new Map;function Op(r){if(Vu.has(r))return Vu.get(r);let t=new ot(r),e=new xe({uniforms:{uColor:{value:new D(t.r,t.g,t.b)}},vertexShader:"varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uColor; varying vec2 vP;
      void main(){ float d = length(vP) / 0.9; float ring = smoothstep(0.62, 0.78, d) * (1.0 - smoothstep(0.86, 1.0, d)); float fill = (1.0 - smoothstep(0.0, 0.9, d)) * 0.35; gl_FragColor = vec4(uColor * 2.0, clamp(ring * 0.9 + fill, 0.0, 1.0) * 0.7); }`,transparent:!0,depthWrite:!1,blending:Mi,fog:!1});return Vu.set(r,e),e}var Oc=null;function F1(){if(Oc)return Oc;let r=new _e,t=new _e,e=15902748,i=8014362,n=12876324,s=16769162;r.box(-.5,0,-.3,.5,.42,.3,n),r.box(-.52,0,-.32,.52,.08,.32,i),r.box(-.52,.34,-.32,.52,.42,.32,e);for(let o of[-.36,.36])r.box(o-.045,0,-.325,o+.045,.42,.325,e);r.box(-.07,.24,.3,.07,.4,.34,s);let a=.3;t.box(-.5,0,0,.5,.12,a*2,n),t.box(-.5,.12,.04,.5,.22,a*2-.04,n),t.box(-.44,.22,.1,.44,.27,a*2-.1,n),t.box(-.52,0,-.02,.52,.06,a*2+.02,e);for(let o of[-.36,.36])t.box(o-.045,0,-.025,o+.045,.24,a*2+.025,e);return Oc={body:r.build(),lid:t.build()},Oc}function B1(){let r=F1(),t=new Yt,e=new Dt(r.body,zs());e.castShadow=!0,e.receiveShadow=!0,t.add(e);let i=new Yt;i.position.set(0,.42,-.3);let n=new Dt(r.lid,zs());return n.castShadow=!0,i.add(n),t.add(i),t.userData.lid=i,t}var zp=1,zc=class{constructor(t){this.game=t,this.group=new Yt,this.group.name="loot",t.gfx.scene.add(this.group),this.items=[],this.chests=[],this.rng=new Ae(1234),this.visTimer=0,this.interactTarget=null,this.time=0,this.chestModelCache=null}clear(){for(let t of this.items)this._despawnVisual(t);for(let t of this.chests)t.group&&this.group.remove(t.group);this.items.length=0,this.chests.length=0,this.interactTarget=null}rollWeapon(t,e){let i=t.weighted(e.weapon||Nc.floor.weapon),n=t.weighted(e.rarity);return{kind:"weapon",id:i,rarity:n,mag:Be[i].mag}}rollFloorItem(t,e=0){let i=Nc.floor,n=t.weighted(i.kind);if(n==="weapon"){let a=e>0?i.rarity.map(([o,l])=>[o,l*(1+e*o*.35)]):i.rarity;return this.rollWeapon(t,{weapon:i.weapon,rarity:a})}if(n==="ammo"){let a=t.weighted([["light",30],["medium",30],["shells",18],["heavy",8]]);return{kind:"ammo",id:a,count:ai[a].perBox}}if(n==="heal"){let a=t.weighted([["bandage",66],["medkit",26],["chug",3]]);return{kind:"consumable",id:a,count:a==="bandage"?t.int(3,5):1,rarity:0}}let s=t.weighted([["minishield",60],["shield",32],["chug",2]]);return{kind:"consumable",id:s,count:s==="minishield"?t.int(1,3):1,rarity:0}}populate(t,e){this.rng=new Ae(e);let i=this.rng;for(let n of t.buildings){let s=n.kindName==="warehouse"||n.kindName==="shop"||n.kindName==="manor"?1:.4;for(let a of n.spots)i.chance(.78)&&this.spawn(this.rollFloorItem(i,s),a.x,a.y,a.z,{floorLevel:a.floor,building:n});for(let a of n.upper||[])i.chance(.85)&&this.spawn(this.rollFloorItem(i,1.5),a.x,a.y,a.z,{floorLevel:1,building:n})}for(let n of t.outdoorSpots)i.chance(.55)&&this.spawn(this.rollFloorItem(i,0),n.x,n.y,n.z,{});for(let n of t.chestSpots)this.spawnChest(n.x,n.y,n.z,n.yaw||0);for(let n=0;n<26;n++){let s=i.range(0,Math.PI*2),a=Math.sqrt(i.float())*380,o=Math.cos(s)*a,l=Math.sin(s)*a,c=t.terrain.heightAt(o,l);c<2||t.scatter.blocked(o,l,0)||t.scatter._onRoad(o,l,2)||this.spawn(this.rollFloorItem(i,0),o,c,l,{})}}spawn(t,e,i,n,s={}){let a={id:zp++,item:t,x:e,y:i,z:n,vx:0,vy:0,vz:0,alive:!0,group:null,visible:!1,floorLevel:s.floorLevel||0,building:s.building||null,bornAt:this.game.time,phase:Math.random()*6.28,settled:!s.vel,noPickupUntil:s.noPickupUntil||0};return s.vel&&(a.vx=s.vel[0],a.vy=s.vel[1],a.vz=s.vel[2]),this.items.push(a),a}drop(t,e,i,n,s,a){let o=a!=null?Math.atan2(-Math.cos(a),-Math.sin(a))+(Math.random()-.5)*1.1:Math.random()*Math.PI*2,l=a!=null?1.5+Math.random()*.7:1.2+Math.random()*1.4;return this.spawn(t,e,i+.6,n,{vel:[Math.cos(o)*l+(s?.x||0)*.15,3.2+Math.random()*1.2,Math.sin(o)*l+(s?.z||0)*.15],noPickupUntil:this.game.time+.7})}colorOf(t){return t.kind==="weapon"?Si[t.rarity].glow:t.kind==="ammo"?new ot(ai[t.id].color).getHex():t.kind==="consumable"?new ot(Ge[t.id].color).getHex():16777215}rarityOf(t){return t.kind==="weapon"?t.rarity:t.kind==="consumable"?t.id==="chug"?4:t.id==="medkit"||t.id==="shield"?2:1:0}_spawnVisual(t){let e=new Yt,i=Br(t.item),n=t.item.kind==="weapon"?1.65:t.item.kind==="ammo"?1.45:1.7;i.scale.setScalar(n);let s=new Yt;if(s.add(i),t.item.kind==="weapon"){let c=i.userData.len||.8;i.position.set(0,0,c*.4*n),s.rotation.z=0}s.position.y=.7,e.add(s),e.userData.holder=s;let a=this.colorOf(t.item),o=new Dt(Wu,Op(a));o.position.y=.06,o.renderOrder=2,o.frustumCulled=!1,e.add(o),e.userData.disc=o;let l=new Dt(Gu,Bp(a));l.scale.set(1,3.4+this.rarityOf(t.item)*1.7,1),l.frustumCulled=!1,l.renderOrder=3,l.visible=!1,e.add(l),e.userData.beam=l,e.position.set(t.x,t.y,t.z),this.group.add(e),t.group=e,t.visible=!0}_despawnVisual(t){t.group&&(this.group.remove(t.group),t.group=null),t.visible=!1}spawnChest(t,e,i,n){let s={x:t,y:e,z:i,yaw:n,opened:!1,openT:0,group:null,id:zp++,sparkleT:Math.random()*2,beam:null};return this.chests.push(s),s}_chestVisual(t){if(t.group)return;let e=B1();e.position.set(t.x,t.y,t.z),e.rotation.y=t.yaw,e.scale.setScalar(1.15);let i=new Dt(Gu,Bp(16761395));i.scale.set(1.5,11,1.5),i.frustumCulled=!1,i.renderOrder=3,e.add(i),e.userData.beam=i;let n=new Dt(Wu,Op(16761395));n.scale.setScalar(1.5),n.position.y=.05,n.renderOrder=2,n.frustumCulled=!1,e.add(n),this.group.add(e),t.group=e,t.opened&&(e.userData.lid.rotation.x=-1.9)}openChest(t,e){if(t.opened)return;t.opened=!0,t.openT=0;let i=this.game;i.audio?.chestOpen(t),i.fx.sparkle(t.x,t.y+.6,t.z,16761395,26,2.4,4);let n=this.rng,s=[];s.push(this.rollWeapon(n,Nc.chest));let a=Be[s[0].id];s.push({kind:"ammo",id:a.ammo,count:ai[a.ammo].perBox}),s.push(n.chance(.5)?this.rollFloorItem(n,.5):{kind:"consumable",id:n.pick(["bandage","minishield","medkit","shield"]),count:2,rarity:0}),t.group&&(t.group.userData.beam.visible=!1);let o=e?Math.atan2(e.pos.x-t.x,e.pos.z-t.z):t.yaw;s.forEach((l,c)=>{let h=o+(c-1)*.7,u=1.5+c%2*.3,d=this.spawn(l,t.x,t.y+.5,t.z,{vel:[Math.sin(h)*u,4.4+c*.3,Math.cos(h)*u],noPickupUntil:i.time+.5});d.bornAt=i.time})}findInteract(t){let e=-Math.sin(t.aimYaw),i=-Math.cos(t.aimYaw),n=null,s=1e9,a=t.pos.x,o=t.pos.y,l=t.pos.z,c=this.game.time,h=this.game.physics,u=o+1.1;for(let d of this.items){if(!d.alive||c<d.noPickupUntil)continue;let f=d.x-a,g=d.z-l,x=d.y-o,m=f*f+g*g;if(m>2.5*2.5||Math.abs(x)>2.4)continue;let p=Math.sqrt(m),v=p>.3?(f*e+g*i)/p:1,w=t.inv.canTake(d.item),M=p-v*.9+(w.ok?0:20);M>=s||h.lineClear(a,u,l,d.x,d.y+.45,d.z,zu)&&(s=M,n={type:"loot",it:d,ok:w.ok,swap:w.swap,reason:w.reason})}for(let d of this.chests){if(d.opened)continue;let f=d.x-a,g=d.z-l,x=f*f+g*g;if(x>2.9*2.9||Math.abs(d.y-o)>2.4)continue;let m=Math.sqrt(x),p=m>.3?(f*e+g*i)/m:1,v=m-p*.9-.5;v>=s||h.lineClear(a,u,l,d.x,d.y+.4,d.z,zu)&&(s=v,n={type:"chest",c:d,ok:!0})}return n}interact(t){let e=this.findInteract(t);return e?e.type==="chest"?(this.openChest(e.c,t),!0):this.pickup(t,e.it):!1}pickup(t,e){if(!e.alive)return!1;let i=this.game,n=e.item,s=t.inv.add(n);return s.ok?(n.kind==="weapon"?(s.dropped&&this.drop(s.dropped,t.pos.x,t.pos.y,t.pos.z,t.vel,t.aimYaw),(t.isPlayer&&t.inv.current?.kind==="pickaxe"||t.isPlayer&&s.dropped)&&t.inv.select(s.slot)):n.kind==="consumable"?(s.dropped&&this.drop(s.dropped,t.pos.x,t.pos.y,t.pos.z,t.vel,t.aimYaw),n.count-=s.taken):n.kind==="ammo"&&(n.count-=s.taken),(n.kind==="weapon"||n.count<=0)&&(e.alive=!1,this._despawnVisual(e)),t.isPlayer&&(i.audio?.pickup(n),i.hud?.pickupToast(n,s.taken),i.fx.sparkle(e.x,e.y+.6,e.z,this.colorOf(n),8,1.2,2)),!0):(t.isPlayer&&i.hud?.toast(s.reason.toUpperCase()),!1)}removeItem(t){t.alive=!1,this._despawnVisual(t)}update(t,e){this.time+=t;let i=this.game,n=i.physics;for(let a of this.items){if(!a.alive||a.settled)continue;a.vy-=16*t;let o=a.x+a.vx*t,l=a.z+a.vz*t;(a.vx!==0||a.vz!==0)&&!n.lineClear(a.x,a.y+.3,a.z,o,a.y+.3,l,zu)?(a.vx*=-.25,a.vz*=-.25):(a.x=o,a.z=l),a.y+=a.vy*t;let c=n.groundAt(a.x,a.z,a.y+.6).y;a.y<c&&(a.y=c,a.vy<-2?(a.vy*=-.35,a.vx*=.6,a.vz*=.6):(a.vx=a.vy=a.vz=0,a.settled=!0)),a.group&&a.group.position.set(a.x,a.y,a.z)}if(this.visTimer-=t,this.visTimer<=0){this.visTimer=.35;for(let a of this.items){if(!a.alive)continue;let o=(a.x-e.x)**2+(a.z-e.z)**2+(a.y-e.y)**2,l=o<Up*Up,c=o<(this.rarityOf(a.item)>=2?Np:Np*.5)**2;if(l||c){a.group||this._spawnVisual(a);let h=a.group.userData;h.holder.visible=l,h.beam.visible=c,h.disc.visible=l||o<16900}else a.group&&this._despawnVisual(a)}for(let a of this.chests){let o=(a.x-e.x)**2+(a.z-e.z)**2,l=o<Fp*Fp;l&&!a.group?this._chestVisual(a):!l&&a.group&&(this.group.remove(a.group),a.group=null),a.group&&(a.group.userData.beam.visible=!a.opened&&o>0)}}let s=this.time;for(let a of this.items){if(!a.alive||!a.group)continue;let o=a.group.userData.holder;o.rotation.y=s*1.3+a.phase,o.position.y=.7+Math.sin(s*2.2+a.phase)*.07,a.settled||a.group.position.set(a.x,a.y,a.z)}for(let a of this.chests)if(a.group){if(a.opened&&a.openT<1){a.openT=Math.min(1,a.openT+t*2.6);let o=1-Math.pow(1-a.openT,3);a.group.userData.lid.rotation.x=-1.9*o}a.opened||(a.sparkleT-=t,a.sparkleT<=0&&(a.x-e.x)**2+(a.z-e.z)**2<3600&&(a.sparkleT=.35+Math.random()*.4,i.fx.sparkle(a.x+(Math.random()-.5)*.8,a.y+.3+Math.random()*.6,a.z+(Math.random()-.5)*.8,16761395,1,.2,1.2)))}this.items.length>600&&(this.items=this.items.filter(a=>a.alive))}promptFor(t){let e=this.findInteract(t);return this.interactTarget=e,e}};var ft=wi.grid,ve=wi.height,vi=wi.thickness,En=2.4,Hc=.25,Hp=2,ja={wood:{frame:10117686,panel:14461542,groove:10119734,skirt:10121026},stone:{frame:9079448,panel:12614238,groove:14999508,skirt:9403508},metal:{frame:6714506,panel:9677769,groove:7045019,skirt:6977420}};function Gc(r){let t=new _e;return r(t),t.build()}function O1(r,t,e){let i=ja[r];return Gc(n=>{let s=(l,c,h,u,d,f,g,x)=>t==="x"?n.box(l,c,h,u,d,f,g,x):n.box(h,c,l,f,d,u,g,x),a=vi/2,o=.17;if(s(o,o,-a,ft-o,ve-o,a,i.panel,{dark:.9}),s(0,0,-a-.03,ft,o,a+.03,i.frame,{dark:.8}),s(0,ve-o,-a-.03,ft,ve,a+.03,i.frame,{dark:.9}),s(0,o,-a-.03,o,ve-o,a+.03,i.frame,{dark:.85}),s(ft-o,o,-a-.03,ft,ve-o,a+.03,i.frame,{dark:.85}),r==="wood")for(let l=1;l<5;l++)s(o+l*(ft-2*o)/5-.02,o,-a-.012,o+l*(ft-2*o)/5+.02,ve-o,a+.012,i.groove,{dark:1});else if(r==="stone"){for(let l=1;l<7;l++)s(o,o+l*(ve-2*o)/7-.02,-a-.012,ft-o,o+l*(ve-2*o)/7+.02,a+.012,i.groove,{dark:1});for(let l=0;l<7;l++)for(let c=1;c<5;c++){let h=o+(c+(l%2?.5:0))*(ft-2*o)/5;h<ft-o-.1&&s(h-.02,o+l*(ve-2*o)/7,-a-.012,h+.02,o+(l+1)*(ve-2*o)/7,a+.012,i.groove,{dark:1})}}else{s(o,ve/2-.03,-a-.02,ft-o,ve/2+.03,a+.02,i.groove,{dark:1});for(let[l,c]of[[.3,.3],[ft-.3,.3],[.3,ve-.3],[ft-.3,ve-.3]])s(l-.07,c-.07,-a-.04,l+.07,c+.07,a+.04,14148338,{dark:1})}e>.05&&s(.05,-e,-a,ft-.05,.02,a,i.skirt,{dark:.7})})}function z1(r,t){let e=ja[r];return Gc(i=>{i.box(0,-vi,0,ft,0,ft,e.panel,{bottom:!0,dark:.85});let n=.16;i.box(0,-vi-.04,0,ft,.03,n,e.frame,{dark:.85}),i.box(0,-vi-.04,ft-n,ft,.03,ft,e.frame,{dark:.85}),i.box(0,-vi-.04,n,n,.03,ft-n,e.frame,{dark:.85}),i.box(ft-n,-vi-.04,n,ft,.03,ft-n,e.frame,{dark:.85});for(let s=1;s<5;s++)i.box(n,0,s*ft/5-.02,ft-n,.012,s*ft/5+.02,e.groove,{dark:1});t>Hc&&i.box(.04,-vi-t,.04,ft-.04,-vi,ft-.04,e.skirt,{dark:.7,top:!1})})}function H1(r,t,e,i){let n=ja[r];return Gc(s=>{let a=(u,d,f)=>{let g=e>0?u:ft-u;return t==="x"?[g,d,f]:[f,d,g]},o=ve/ft,l=vi+(i>Hc?i:0),c=u=>t==="x"?[u[0]*(e>0?1:-1),u[1],u[2]]:[u[2],u[1],u[0]*(e>0?1:-1)];s.quad(a(0,0,0),a(ft,ve,0),a(ft,ve,ft),a(0,0,ft),n.panel,c([-o,1,0]),1,1,1,1);for(let u of[0,ft]){let d=u===0?-1:1,f=t==="x"?[0,0,d]:[d,0,0];s.quad(a(0,-l,u),a(ft,-l,u),a(ft,ve,u),a(0,0,u),n.panel,f,.78,.78,.95,.95)}s.quad(a(ft,-l,0),a(ft,-l,ft),a(ft,ve,ft),a(ft,ve,0),n.panel,c([1,0,0]),.78,.78,.95,.95),s.quad(a(0,-l,0),a(0,-l,ft),a(0,0,ft),a(0,0,0),n.panel,c([-1,0,0]),.78,.78,.95,.95),s.quad(a(0,-l,0),a(ft,-l,0),a(ft,-l,ft),a(0,-l,ft),n.skirt,[0,-1,0],.7,.7,.7,.7);let h=8;for(let u=1;u<h;u++){let d=u/h*ft,f=u/h*ve+.012;s.quad(a(d-.02,f-.02*o,.16),a(d+.02,f+.02*o,.16),a(d+.02,f+.02*o,ft-.16),a(d-.02,f-.02*o,ft-.16),n.groove,c([-o,1,0]))}for(let u of[0,ft-.16])s.quad(a(0,.012,u),a(ft,ve+.012,u),a(ft,ve+.012,u+.16),a(0,.012,u+.16),n.frame,c([-o,1,0]))})}function V1(r,t){let e=ja[r];return Gc(i=>{i.gable(0,0,ft,ft,0,En,t,e.panel,e.frame,0,0,0);let n=t==="x"?[ft/2]:[ft/2];t==="x"?i.box(0,En-.06,ft/2-.12,ft,En+.08,ft/2+.12,e.frame):i.box(ft/2-.12,En-.06,0,ft/2+.12,En+.08,ft,e.frame)})}var G1={blocked:"SOMETHING IS IN THE WAY",buried:"TOO STEEP TO BUILD HERE",water:"CAN'T BUILD ON WATER",far:"TOO FAR AWAY"},Vp=new Map;function Gp(r,t,e,i,n){let s=Math.round(Wt(n,0,3)*2)/2,a=`${r}|${t}|${e}|${i}|${s}`,o=Vp.get(a);return o||(r==="wall"?o=O1(t,e,s):r==="floor"?o=z1(t,s):r==="ramp"?o=H1(t,e,i,s):o=V1(t,e),Vp.set(a,o)),o}var hT=new D,Vc=class{constructor(t){this.game=t,this.group=new Yt,this.group.name="pieces",t.gfx.scene.add(this.group),this.pieces=new Map,this.cellIndex=new Map,this.list=[],this.piece="wall",this.mat="wood",this.cooldown=0,this.active=!1,this.target=null,this.baseMat=new Ne({vertexColors:!0}),this.ghostMat=new en({color:3848447,transparent:!0,opacity:.42,depthWrite:!1,side:Fe}),this.ghost=new Dt(new ge,this.ghostMat),this.ghost.visible=!1,this.ghost.renderOrder=4,this.ghost.frustumCulled=!1,t.gfx.scene.add(this.ghost),this.ghostKey="",this.ghostPulse=0,this._failT=-9}clear(){for(let t of[...this.list])this._remove(t,!1);this.list.length=0,this.pieces.clear(),this.cellIndex.clear(),this.ghost.visible=!1,this.active=!1}selectPiece(t){this.piece!==t&&(this.piece=t,this.game.audio?.uiTick(),this.game.player.inv.touch())}cyclePiece(t){let e=["wall","floor","ramp","roof"];this.selectPiece(e[(e.indexOf(this.piece)+t+4)%4])}cycleMaterial(t){let e=["wood","stone","metal"];this.mat=e[(e.indexOf(this.mat)+t+3)%3],this.game.audio?.uiTick(),this.game.player.inv.touch()}setActive(t,e){if(t.isPlayer&&(this.active=e,this.game.hud?.setBuildMode(e),this.game.player.inv.touch(),e||(this.ghost.visible=!1),e&&t.inv.mats[this.mat]<wi.cost)){for(let i of["wood","stone","metal"])if(t.inv.mats[i]>=wi.cost){this.mat=i;break}}}_cellKey(t,e){return`${t},${e}`}_indexAdd(t){let e=t.cells;for(let i of e){let n=this.cellIndex.get(i);n||this.cellIndex.set(i,n=[]),n.push(t)}}_indexRemove(t){for(let e of t.cells){let i=this.cellIndex.get(e);if(!i)continue;let n=i.indexOf(t);n>=0&&i.splice(n,1),i.length||this.cellIndex.delete(e)}}_anchor(t,e,i){let n=null,s=1e9;for(let a=-2;a<=2;a++)for(let o=-2;o<=2;o++){let l=this.cellIndex.get(this._cellKey(t+a,e+o));if(l)for(let c of l){let h=Math.abs(c.y-i);if(h>ve*2.6)continue;let u=Math.abs(a)+Math.abs(o)+h*.1;u<s&&(s=u,n=c)}}return n}resolve(t,e,i,n,s,a){let o=this.game,l=-Math.sin(i),c=-Math.cos(i),h=Math.abs(l)>Math.abs(c)?"x":"z",u=h==="x"?Math.sign(l)||1:Math.sign(c)||1,d=Math.floor(e.x/ft),f=Math.floor(e.z/ft),g=e.y,x=o.physics.groundAt(e.x,e.z,g+.7),m=x.y,p=x.collider?.owner,v=g-m>.9,w=this._anchor(d,f,g),M=t==="floor"&&n<-.85,y;if(!v&&!M&&p?.kind==="piece"&&p.type==="ramp"){let L=h===p.axis?u*p.dir:0;y=L>0?p.y+ve:L<0?p.y:p.y+Math.round((g-p.y)/ve)*ve}else if(w){let L=(g-w.y)/ve;y=w.y+(v?Math.floor(L+.12):Math.round(L))*ve}else y=m;let b={type:t,axis:h,dir:u,ci:d,cj:f,y,valid:!0,reason:"",mat:s};t==="wall"?h==="x"?(b.axis="z",b.ci=u>0?d+1:d,b.cj=f):(b.axis="x",b.ci=d,b.cj=u>0?f+1:f):t==="floor"?(n<-.85?(b.ci=d,b.cj=f,v&&(b.y=w?y:g-.06>=m?Math.max(m,g-.06):m)):(b.ci=h==="x"?d+u:d,b.cj=h==="z"?f+u:f),b.axis=h):t==="ramp"?(b.ci=h==="x"?d+u:d,b.cj=h==="z"?f+u:f,b.axis=h,b.dir=u):t==="roof"&&(b.ci=d,b.cj=f,b.y=y+ve,b.axis=h);let C=b.ci,_=b.cj,R=b.y,T=Math.round(R*4);t==="wall"?(b.axis==="x"?(b.minX=C*ft,b.maxX=(C+1)*ft,b.minZ=_*ft-vi/2,b.maxZ=_*ft+vi/2,b.cells=[this._cellKey(C,_),this._cellKey(C,_-1)],b.key=`w|x|${C}|${_}|${T}`):(b.minX=C*ft-vi/2,b.maxX=C*ft+vi/2,b.minZ=_*ft,b.maxZ=(_+1)*ft,b.cells=[this._cellKey(C,_),this._cellKey(C-1,_)],b.key=`w|z|${C}|${_}|${T}`),b.y0=R,b.y1=R+ve):(b.minX=C*ft,b.maxX=(C+1)*ft,b.minZ=_*ft,b.maxZ=(_+1)*ft,b.cells=[this._cellKey(C,_)],b.key=`c|${C}|${_}|${T}`,b.y0=R-vi,b.y1=t==="roof"?R+En:t==="ramp"?R+ve:R);let E=(b.minX+b.maxX)/2,P=(b.minZ+b.maxZ)/2;if(this.pieces.has(b.key)?(b.valid=!1,b.reason="occupied"):(t==="floor"||t==="ramp"||t==="roof")&&this.pieces.has(b.key)&&(b.valid=!1),b.valid&&Math.hypot(E-e.x,P-e.z)>13&&(b.valid=!1,b.reason="far"),b.valid&&o.terrain.heightAt(E,P)>b.y1+(t==="floor"?1.5:.2)&&(b.valid=!1,b.reason="buried"),b.valid&&b.y<-6&&(b.valid=!1,b.reason="water"),b.valid){let L=o.terrain.waterLevelAt(E,P);L!==null&&o.terrain.heightAt(E,P)<L-1.4&&!w&&(b.valid=!1,b.reason="water")}return b.valid&&o.physics.overlapsSolid(b.minX,b.maxX,b.minZ,b.maxZ,b.y0+.02,b.y1-.02,["piece"])&&(b.valid=!1,b.reason="blocked"),b.skirt=this._skirtFor(b),a&&b.valid&&a.mats[s]<wi.cost&&(b.valid=!1,b.reason="mats"),b}_skirtFor(t){let e=this.game.terrain,i=[[t.minX,t.minZ],[t.maxX,t.minZ],[t.minX,t.maxZ],[t.maxX,t.maxZ],[(t.minX+t.maxX)/2,(t.minZ+t.maxZ)/2]],n=1e9;for(let[a,o]of i)n=Math.min(n,e.heightAt(a,o));let s=t.y-n;return s>Hp+.3?0:Math.round(Wt(s+.2,0,Hp)*2)/2}place(t,e){let i=this.game,n=t.mat,s=Ur[n],a={kind:"piece",type:t.type,mat:n,key:t.key,ci:t.ci,cj:t.cj,y:t.y,axis:t.axis,dir:t.dir,skirt:t.skirt,hp:s.hp*.33,maxHp:s.hp,taken:0,cells:t.cells,colliders:[],owner:e,builtT:0,flash:0,mesh:null,alive:!0,ownMat:!0,minX:t.minX,maxX:t.maxX,minZ:t.minZ,maxZ:t.maxZ},o=Gp(t.type,n,t.axis,t.dir,t.skirt),l=this.baseMat.clone(),c=new Dt(o,l),h=(t.type==="wall"&&t.axis==="x",t.ci*ft),u=(t.type==="wall"&&t.axis==="x",t.cj*ft);c.position.set(h,t.y,u),c.castShadow=!0,c.receiveShadow=!0,c.userData.piece=a,l.transparent=!0,l.opacity=.5,a.mesh=c,a.ox=h,a.oz=u,this.group.add(c);let d=i.physics,f=g=>({walkable:g,owner:a,kind:"piece",material:n==="stone"?"stone":n});if(t.type==="wall")a.colliders.push(d.addBox(t.minX,t.maxX,t.minZ,t.maxZ,t.y-Math.max(.2,t.skirt),t.y+ve,f(!1)));else if(t.type==="floor")a.colliders.push(d.addBox(t.minX,t.maxX,t.minZ,t.maxZ,t.y-vi-(t.skirt>Hc?t.skirt:0),t.y,f(!0)));else if(t.type==="ramp")a.colliders.push(d.addRamp(t.minX,t.maxX,t.minZ,t.maxZ,t.y-vi-(t.skirt>Hc?t.skirt:0),t.y,t.y+ve,t.axis,t.dir,f(!0)));else{let g=(t.minX+t.maxX)/2,x=(t.minZ+t.maxZ)/2;t.axis==="x"?(a.colliders.push(d.addRamp(t.minX,t.maxX,t.minZ,x,t.y-.2,t.y,t.y+En,"z",1,f(!0))),a.colliders.push(d.addRamp(t.minX,t.maxX,x,t.maxZ,t.y-.2,t.y,t.y+En,"z",-1,f(!0)))):(a.colliders.push(d.addRamp(t.minX,g,t.minZ,t.maxZ,t.y-.2,t.y,t.y+En,"x",1,f(!0))),a.colliders.push(d.addRamp(g,t.maxX,t.minZ,t.maxZ,t.y-.2,t.y,t.y+En,"x",-1,f(!0))))}return this.pieces.set(a.key,a),this._indexAdd(a),this.list.push(a),this.list.length>1100&&this._destroy(this.list[0],!1),i.fx.sparkle((t.minX+t.maxX)/2,t.y+1,(t.minZ+t.maxZ)/2,10148095,5,1.2,1),i.audio?.buildPlace(n,(t.minX+t.maxX)/2,t.y+1,(t.minZ+t.maxZ)/2),a}tryPlace(t,e,i=this.mat){if(this.game.phase!=="match"||t.mode!=="ground")return null;let n=this.resolve(e,t.pos,t.aimYaw,t.aimPitch,i,t.inv);if(!n.valid){if(t.isPlayer&&this.game.time-this._failT>.45){this._failT=this.game.time;let a=n.reason==="mats"?`NOT ENOUGH ${i.toUpperCase()}`:G1[n.reason];a&&this.game.hud?.toast(a,"255,120,120"),this.game.audio?.buildFail()}return null}if(!t.inv.spend(wi.cost,i))return null;let s=this.place(n,t);return e==="wall"&&this.game.physics.depenetrate(t.pos,t.radius,t.height,.5),s}damagePiece(t,e){t.alive&&(t.taken+=e,t.flash=1,t.ownMat||(t.mesh.material=this.baseMat.clone(),t.ownMat=!0),this._refreshHp(t),t.hp<=0&&this._destroy(t,!0))}_refreshHp(t){let e=t.builtT>=1?t.maxHp:t.maxHp*(.33+.67*t.builtT);t.hp=e-t.taken}_destroy(t,e){if(!t.alive)return;let i=this.game,n=(t.minX+t.maxX)/2,s=(t.minZ+t.maxZ)/2,a=t.y+(t.type==="wall"?ve/2:.4);e&&(i.fx.pieceBreak(n,a,s,ja[t.mat].panel,t.type==="wall"?2.4:1.8),i.audio?.pieceBreak(n,a,s,t.mat)),this._remove(t,!0)}_remove(t,e){t.alive=!1;for(let i of t.colliders)this.game.physics.remove(i);if(t.colliders.length=0,this.group.remove(t.mesh),t.ownMat&&t.mesh.material.dispose(),this._indexRemove(t),this.pieces.delete(t.key),e){let i=this.list.indexOf(t);i>=0&&this.list.splice(i,1)}}update(t){let e=this.game,i=e.player;this.cooldown=Math.max(0,this.cooldown-t);for(let o of this.list){if(o.builtT<1){o.builtT=Math.min(1,o.builtT+t*2.2);let l=o.builtT,c=o.mesh.material,h=.9+.1*(1-Math.pow(1-l,3));o.mesh.scale.set(1,o.type==="wall"?h:1,1),c.opacity=.5+.5*l,c.color.setRGB(.6+.4*l,.85+.15*l,1),this._refreshHp(o),l>=1&&(c.transparent=!1,c.opacity=1,c.color.setRGB(1,1,1))}if(o.flash>0){o.flash=Math.max(0,o.flash-t*6);let l=1+o.flash*1.2,c=1-le(o.hp/o.maxHp);o.mesh.material.color.setRGB(l*(1-c*.25),l*(1-c*.3),l*(1-c*.3)),o.mesh.position.x=o.ox+(Math.random()-.5)*.03*o.flash}else if(o.builtT>=1&&o.taken>0){let l=1-le(o.hp/o.maxHp);o.mesh.material.color.setRGB(1-l*.25,1-l*.3,1-l*.3)}else o.builtT>=1&&o.ownMat&&(o.mesh.material.dispose(),o.mesh.material=this.baseMat,o.ownMat=!1)}if(!this.active||!i.alive||!i.building){this.ghost.visible=!1;return}let n=this.resolve(this.piece,i.pos,i.aimYaw,i.aimPitch,this.mat,i.inv);this.target=n;let s=`${n.type}|${n.mat}|${n.axis}|${n.dir}|${Math.round(n.skirt*2)}`;s!==this.ghostKey&&(this.ghostKey=s,this.ghost.geometry=Gp(n.type,n.mat,n.axis,n.dir,n.skirt)),this.ghost.visible=!0,this.ghost.position.set((n.type==="wall",n.ci*ft),n.y,(n.type==="wall",n.cj*ft)),this.ghostPulse+=t*6,this.ghostMat.color.set(n.valid?3848447:16730698),this.ghostMat.opacity=(n.valid?.34:.4)+Math.sin(this.ghostPulse)*.05;let a=e.input;a.enabled&&!e.uiBlocking&&(a.mousePress(0)||a.mouse(0)&&this.cooldown<=0)&&this.cooldown<=0&&(this.cooldown=.13,this.tryPlace(i,this.piece,this.mat))}};var oi=new D,Wc=new D,Ze=new D,we=new D,Wn=new D,Or=class r{constructor(t){this.game=t,this.camera=t.gfx.camera,this.mode="menu",this.pivotY=0,this.boom=3.3,this.fov=78,this.shake=0,this.shakeT=0,this.scoped=!1,this.scopeT=0,this.orbit=0,this.target=null,this.spectYaw=0,this.spectPitch=-.25,this.busPos=new D,this.smoothPos=new D,this.initialised=!1,this.pos=new D,this.yaw=0,this.pitch=0}addShake(t){this.shake=Math.min(1.2,this.shake+t)}static forward(t,e,i){let n=Math.cos(e);return i.set(-Math.sin(t)*n,Math.sin(e),-Math.cos(t)*n)}update(t){let e=this.game,i=this.camera;switch(this.shake=Math.max(0,this.shake-t*2.4),this.shakeT+=t,(this.mode==="menu"||this.mode==="bus"||this.mode==="air"||this.mode==="spectate")&&(this.scoped=!1,this.scopeT=te(this.scopeT,0,18,t)),this.mode){case"menu":this._menu(t);break;case"bus":this._bus(t);break;case"air":this._air(t);break;case"spectate":this._spectate(t);break;default:this._follow(t);break}if(this.shake>.001){let n=this.shake*this.shake,s=this.shakeT*38;i.position.x+=Math.sin(s*1.3)*.05*n,i.position.y+=Math.sin(s*1.7+1)*.05*n,i.rotation.z=Math.sin(s)*.012*n}else i.rotation.z=0;Math.abs(i.fov-this.fov)>.01&&(i.fov=this.fov,i.updateProjectionMatrix()),i.updateMatrixWorld(!0),this.pos.copy(i.position)}_setLook(t,e,i){this.camera.position.copy(t),this.camera.rotation.set(i,e,0),this.yaw=e,this.pitch=i}_follow(t){let e=this.game,i=e.player,n=e.physics,s=i.wc,a=i.inv.current,o=a?.kind==="weapon"?Be[a.id]:null,l=i.intent.aim&&o&&!s.reloading&&i.mode==="ground",c=l&&o.id==="sniper";this.scoped=c,this.scopeT=te(this.scopeT,c?1:0,18,t);let h=78;i.sprinting&&(h=84),i.building&&(h=82),l&&(h=o.fov),i.mode==="ground"&&i.swimming&&(h=80),this.fov=te(this.fov,h,l?16:9,t);let u=i.pos.y+(i.crouching?1.25:1.6)-(i.swimming?.6:0);this.initialised||(this.pivotY=u,this.initialised=!0),this.pivotY=te(this.pivotY,u,i.onGround?22:30,t),Math.abs(this.pivotY-u)>1.2&&(this.pivotY=u),Ze.set(i.pos.x,this.pivotY,i.pos.z);let d=i.aimYaw,f=i.aimPitch;r.forward(d,f,oi),Wc.set(Math.cos(d),0,-Math.sin(d));let g=3.25,x=.78,m=.22;i.building&&(g=3.9,x=.55,m=.5),i.sprinting&&(g=3.6,x=.7,m=.22),l&&(g=2.2,x=.98,m=.14),i.crouching&&(g-=.2),c&&(g=0,x=0,m=0),this.boomTarget=g;let p=x;we.copy(Ze).addScaledVector(oi,-g).addScaledVector(Wc,p),we.y+=m;let v=Wn.subVectors(we,Ze).length();if(v>.05&&!c){Wn.divideScalar(v);let b=n.raycast(Ze.x,Ze.y,Ze.z,Wn.x,Wn.y,Wn.z,v+.3,{bullets:!1},this._rh||(this._rh=new Vn));b.hit&&(v=Math.max(.35,b.t-.28))}v<this.boom||!this._boomSet?this.boom=v:this.boom=te(this.boom,v,7,t),this._boomSet=!0;let w=Math.max(.001,Math.hypot(we.x-Ze.x,we.y-Ze.y,we.z-Ze.z)),M=Wt(this.boom/w,0,1);we.lerpVectors(Ze,we,M);let y=e.terrain.heightAt(we.x,we.z);we.y<y+.25&&(we.y=y+.25),c&&we.copy(Ze).addScaledVector(oi,.35),this._setLook(we,d,f),i.model.root.visible=!(this.scopeT>.85)&&i.alive&&i.mode!=="bus"}_menu(t){let e=this.game;this.orbit+=t*.055;let i=e.terrain.layout.towns[0],n=i.x,s=i.z,a=210+Math.sin(this.orbit*.7)*30,o=n+Math.cos(this.orbit)*a,l=s+Math.sin(this.orbit)*a,c=e.terrain.heightAt(o,l)+55+Math.sin(this.orbit*1.3)*14;Wn.set(o,Math.max(c,60),l);let h=n-o,u=s-l,d=e.terrain.heightAt(n,s)+14-Wn.y,f=Math.atan2(-h,-u),g=Math.atan2(d,Math.hypot(h,u));this._setLook(Wn,f,g),this.fov=62,this.game.gfx.updateSun(oi.set(n,0,s))}_bus(t){let e=this.game.bus,i=e.position,n=e.yaw,s=26;we.set(i.x+Math.sin(n)*s+Math.cos(n)*9,i.y+9,i.z+Math.cos(n)*s-Math.sin(n)*9),oi.subVectors(i,we);let o=Math.atan2(-oi.x,-oi.z),l=Math.atan2(oi.y-1.5,Math.hypot(oi.x,oi.z));this._setLook(we,o,l),this.fov=te(this.fov,70,4,t),this.game.player.model.root.visible=!1,this.game.gfx.updateSun(i)}_air(t){let e=this.game.player,i=e.aimYaw,n=e.aimPitch;r.forward(i,n,oi),Wc.set(Math.cos(i),0,-Math.sin(i));let s=e.mode==="glide",a=s?6.2:5.8,o=s?1.6:1;Ze.set(e.pos.x,e.pos.y+(s?1.4:.9),e.pos.z),we.copy(Ze).addScaledVector(oi,-a).addScaledVector(Wc,.4),we.y+=o;let l=this.game.terrain.heightAt(we.x,we.z);we.y<l+.5&&(we.y=l+.5),this._setLook(we,i,n),this.fov=te(this.fov,s?82:92+Wt(-n,0,1.2)*6,3,t),e.model.root.visible=!0}_spectate(t){let e=this.game,i=this.target;(!i||!i.alive&&i!==e.player)&&(i=this.target=e.pickSpectateTarget?.()||e.player),e.viewActor!==i&&(e.viewActor=i);let n=e.input.consumeLook();this.spectYaw-=n.x*.0022,this.spectPitch=Wt(this.spectPitch-n.y*.0022,-1.3,.9),e.input.enabled||(this.spectYaw+=t*.3),r.forward(this.spectYaw,this.spectPitch,oi),Ze.set(i.pos.x,i.pos.y+1.4,i.pos.z),we.copy(Ze).addScaledVector(oi,-5.2);let s=e.physics.raycast(Ze.x,Ze.y,Ze.z,-oi.x,-oi.y,-oi.z,5.4,{bullets:!1});s.hit&&we.copy(Ze).addScaledVector(oi,-Math.max(.5,s.t-.3));let a=e.terrain.heightAt(we.x,we.z);we.y<a+.3&&(we.y=a+.3),this.pivotY=Ze.y,this._setLook(we,this.spectYaw,this.spectPitch),this.fov=te(this.fov,74,6,t),e.gfx.updateSun(Ze)}computeAimRay(t){let e=this.camera,i=t.aimRay;r.forward(this.yaw,this.pitch,i.dir);let n=t.eyePos(Wn),s=Wt((n.x-e.position.x)*i.dir.x+(n.y-e.position.y)*i.dir.y+(n.z-e.position.z)*i.dir.z,0,8);return i.origin.copy(e.position).addScaledVector(i.dir,s),i}};var Xu=1,Xe=dt.size/Xu,Wp=dt.half,W1=.36,X1=1.7,q1=.45,Xp=Math.SQRT2,qp=[1,-1,0,0,1,1,-1,-1],Yp=[0,0,1,-1,1,-1,1,-1],qu=class{constructor(){this.k=[],this.v=[]}get size(){return this.k.length}clear(){this.k.length=0,this.v.length=0}push(t,e){let i=this.k,n=this.v,s=i.length;for(i.push(t),n.push(e);s>0;){let a=s-1>>1;if(i[a]<=t)break;i[s]=i[a],n[s]=n[a],s=a}i[s]=t,n[s]=e}pop(){let t=this.k,e=this.v,i=e[0],n=t.pop(),s=e.pop(),a=t.length;if(a>0){let o=0;for(;;){let l=2*o+1;if(l>=a||(l+1<a&&t[l+1]<t[l]&&l++,t[l]>=n))break;t[o]=t[l],e[o]=e[l],o=l}t[o]=n,e[o]=s}return i}},Xc=class{constructor(t){this.game=t,this.cell=new Uint8Array(Xe*Xe),this.gScore=new Float32Array(Xe*Xe),this.parent=new Int32Array(Xe*Xe),this.seen=new Uint32Array(Xe*Xe),this.gen=0,this.heap=new qu,this.queries=0,this.stats={queries:0,expanded:0,failed:0}}reset(){this.cell.fill(0)}invalidate(t,e,i,n,s=.6){let a=Math.max(0,this.ix(t-s)),o=Math.min(Xe-1,this.ix(e+s)),l=Math.max(0,this.ix(i-s)),c=Math.min(Xe-1,this.ix(n+s));for(let h=l;h<=c;h++)this.cell.fill(0,h*Xe+a,h*Xe+o+1)}ix(t){return Math.floor((t+Wp)/Xu)}wx(t){return(t+.5)*Xu-Wp}canQuery(){return this.queries<1}free(t,e){if(t<1||e<1||t>=Xe-1||e>=Xe-1)return!1;let i=e*Xe+t,n=this.cell[i];return n===0&&(n=this._eval(t,e)?1:2,this.cell[i]=n),n===1}_eval(t,e){let i=this.game,n=i.terrain,s=i.physics,a=this.wx(t),o=this.wx(e),l=n.heightAt(a,o);if(l<-1.2)return!1;let c=n.waterLevelAt(a,o);if(c!==null&&c-l>.7)return!1;let h=s.groundAt(a,o,l+1.4).y;return!s.overlaps(a,h+.02,o,W1,X1,q1)}freeAt(t,e){return this.free(this.ix(t),this.ix(e))}_nearestFree(t,e,i){if(this.free(t,e))return[t,e];for(let n=1;n<=i;n++){let s=null,a=1e9;for(let o=-n;o<=n;o++)for(let l=-n;l<=n;l++){if(Math.max(Math.abs(l),Math.abs(o))!==n||!this.free(t+l,e+o))continue;let c=l*l+o*o;c<a&&(a=c,s=[t+l,e+o])}if(s)return s}return null}findPath(t,e,i,n,s={}){this.queries++,this.stats.queries++;let a=s.maxExpand??4500,o=this._nearestFree(this.ix(t),this.ix(e),2),l=this._nearestFree(this.ix(i),this.ix(n),s.snap??4);if(!o||!l)return this.stats.failed++,null;let c=o[1]*Xe+o[0],h=l[1]*Xe+l[0];if(c===h)return[{x:i,z:n}];let u=++this.gen,{gScore:d,parent:f,seen:g,heap:x}=this;x.clear(),g[c]=u,d[c]=0,f[c]=-1;let m=l[0],p=l[1],v=(E,P)=>{let L=Math.abs(E-m),I=Math.abs(P-p);return L+I+(Xp-2)*Math.min(L,I)};x.push(v(o[0],o[1]),c);let w=0,M=!1,y=c,b=v(o[0],o[1]);for(;x.size;){let E=x.pop(),P=E/Xe|0,L=E-P*Xe;if(E===h){M=!0;break}if(++w>a)break;let I=d[E];for(let U=0;U<8;U++){let B=L+qp[U],z=P+Yp[U];if(!this.free(B,z)||U>=4&&!(this.free(L+qp[U],P)&&this.free(L,P+Yp[U])))continue;let j=z*Xe+B,Z=!this.free(B+1,z)||!this.free(B-1,z)||!this.free(B,z+1)||!this.free(B,z-1)?.7:0,O=I+(U<4?1:Xp)+Z;if(g[j]===u&&O>=d[j])continue;g[j]=u,d[j]=O,f[j]=E;let Q=v(B,z);Q<b&&(b=Q,y=j),x.push(O+Q*1.001,j)}}this.stats.expanded+=w;let C=h;if(!M){if(y===c)return this.stats.failed++,null;C=y}let _=[];for(let E=C;E!==-1;E=f[E])_.push(E);_.reverse();let R=_.map(E=>{let P=E/Xe|0;return{x:this.wx(E-P*Xe),z:this.wx(P)}}),T=this._pull(R);return M&&(T[T.length-1]={x:i,z:n,last:!0}),T}_pull(t){if(t.length<=2)return t.slice(1);let e=[],i=0;for(;i<t.length-1;){let n=Math.min(t.length-1,i+40);for(;n>i+1&&!this.lineFree(t[i].x,t[i].z,t[n].x,t[n].z);)n--;e.push(t[n]),i=n}return e}lineFree(t,e,i,n){let s=i-t,a=n-e,o=Math.hypot(s,a);if(o<.001)return!0;let l=s/o,c=a/o,h=-c*.34,u=l*.34,d=Math.ceil(o/.5);for(let f=0;f<=d;f++){let g=f/d*o,x=t+l*g,m=e+c*g;if(!this.free(this.ix(x),this.ix(m))||!this.free(this.ix(x+h),this.ix(m+u))||!this.free(this.ix(x-h),this.ix(m-u)))return!1}return!0}};var Y1=`
  varying vec3 vW; varying vec2 vUv;
  void main() { vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }
`,Z1=`
  uniform float uTime; uniform vec3 uColor; uniform float uRadius; uniform float uIntensity;
  varying vec3 vW; varying vec2 vUv;
  float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
  void main() {
    float circ = uRadius * 6.2831853;
    vec2 p = vec2(vUv.x * circ * 0.035, vW.y * 0.028);
    float n = vnoise(p * vec2(1.0, 0.6) + vec2(0.0, -uTime * 0.35)) * 0.6 + vnoise(p * 2.7 + vec2(uTime * 0.12, -uTime * 0.6)) * 0.4;
    float bands = smoothstep(0.35, 0.8, n);
    float streak = pow(vnoise(vec2(vUv.x * circ * 0.09, uTime * 0.2)), 3.0);
    // far away the curtain reads as a soft violet haze band on the horizon, up close it is the full churning wall
    float far = smoothstep(120.0, 650.0, distance(vW.xz, cameraPosition.xz));
    bands = mix(bands, 0.45, far * 0.7);
    streak *= 1.0 - far * 0.6;
    float h = clamp(vW.y / 240.0, 0.0, 1.0);
    float a = (0.34 + bands * 0.42 + streak * 0.35) * (1.0 - smoothstep(0.3, 1.0, h));
    a *= smoothstep(-40.0, 12.0, vW.y);
    a *= mix(1.0, 0.5, far) * uIntensity;
    vec3 col = uColor * (0.85 + bands * 0.9 + streak * 0.8);
    col += vec3(0.35, 0.1, 0.6) * (1.0 - h) * 0.6;
    gl_FragColor = vec4(col, a);
  }
`,qc=class{constructor(t){this.game=t,this.phases=Qf,this.active=!1,this.state="idle",this.timer=0,this.index=0,this.current={x:0,z:0,r:Ya},this.from={x:0,z:0,r:Ya},this.next=null,this.dps=1,this.rng=new Ae(7),this.tickAcc=0;let e=new si(1,1,900,96,1,!0);e.translate(0,300,0),this.mat=new xe({vertexShader:Y1,fragmentShader:Z1,transparent:!0,depthWrite:!1,side:Fe,uniforms:{uTime:{value:0},uColor:{value:new ot("#a24dff")},uRadius:{value:600},uIntensity:{value:.6}},fog:!1}),this.wall=new Dt(e,this.mat),this.wall.renderOrder=8,this.wall.frustumCulled=!1,this.wall.visible=!1,t.gfx.scene.add(this.wall),this.outsideK=0,this.intensity=.6}reset(t){this.rng=new Ae(t),this.active=!1,this.state="idle",this.index=0,this.current={x:0,z:0,r:Ya},this.next=null,this.wall.visible=!1,this.outsideK=0,this.intensity=.6,this.mat.uniforms.uIntensity.value=.6}start(t=40){this.active=!0,this.index=0,this.current={x:0,z:0,r:Ya},this.from={...this.current},this._pickNext(),this.state="wait",this.timer=this.phases[0].wait+t,this.dps=this.phases[0].dps,this.wall.visible=!0,this._syncWall()}_pickNext(){let t=this.phases[this.index],e=this.current,i=this.game.terrain,n=t.radius;if(n<=0){this.next={x:e.x,z:e.z,r:0};return}let s=null,a=-1;for(let o=0;o<24;o++){let l=Math.max(0,e.r-n-8),c=this.rng.range(0,Math.PI*2),h=Math.sqrt(this.rng.float())*l,u=e.x+Math.cos(c)*h,d=e.z+Math.sin(c)*h,f=0,g=0;for(let p=0;p<14;p++){let v=p/14*Math.PI*2,w=n*(p%2?.55:.95);i.heightAt(u+Math.cos(v)*w,d+Math.sin(v)*w)>.6&&f++,g++}i.heightAt(u,d)>1.5&&(f+=4);let x=0;for(let p of i.layout.towns)Math.hypot(p.x-u,p.z-d)<n&&x++;let m=f+x*1.5+this.rng.float()*2;m>a&&(a=m,s={x:u,z:d,r:n})}this.next=s}isOutside(t,e){return this.active?Math.hypot(t-this.current.x,e-this.current.z)>this.current.r:!1}distanceToEdge(t,e){return this.current.r-Math.hypot(t-this.current.x,e-this.current.z)}targetCenter(){return this.next||this.current}update(t){let e=this.game;if(this.mat.uniforms.uTime.value+=t,!this.active)return;let i=this.index===0&&this.state==="wait"?.6:1;this.intensity+=(i-this.intensity)*Math.min(1,t*.7),this.mat.uniforms.uIntensity.value=this.intensity;let n=this.phases[this.index];if(this.timer-=t,this.state==="wait")this.timer<=0&&(this.state="shrink",this.timer=n.shrink,this.from={...this.current},this.dps=n.dps,e.hud?.banner("The storm is shrinking","Get to the safe zone","storm",5e3),e.audio?.stormWarn());else if(this.state==="shrink"){let s=le(1-this.timer/n.shrink),a=s*s*(3-2*s)*.35+s*.65;this.current.x=It(this.from.x,this.next.x,a),this.current.z=It(this.from.z,this.next.z,a),this.current.r=It(this.from.r,this.next.r,a),this.timer<=0&&(this.current={...this.next},this.index+1<this.phases.length?(this.index++,this._pickNext(),this.state="wait",this.timer=this.phases[this.index].wait,this.dps=this.phases[this.index].dps,e.hud?.banner("New safe zone marked",`Storm forms in ${Math.round(this.timer)}s`,"storm",4200)):(this.state="final",this.next=null))}else this.state==="final"&&(this.next=null);this._syncWall()}_syncWall(){let t=this.current,e=Math.max(t.r,.5);this.wall.position.set(t.x,0,t.z),this.wall.scale.set(e,1,e),this.mat.uniforms.uRadius.value=e}applyDamage(t,e){if(this.active&&(this.tickAcc+=t,!(this.tickAcc<1))){this.tickAcc-=1;for(let i of e)!i.alive||i.mode==="bus"||this.isOutside(i.pos.x,i.pos.z)&&(i.takeDamage(this.dps,{cause:"storm",attacker:null}),i.isPlayer&&this.game.audio?.stormZap())}}applyVisuals(t){let e=this.game,i=e.gfx,n=i.camera.position,s=this.active&&this.isOutside(n.x,n.z)?1:0;this.outsideK+=(s-this.outsideK)*(1-Math.exp(-3*t));let a=this.outsideK,o=i.scene.fog;return o.color.copy(i.fogBase).lerp(i.fogStorm,a*.85),o.near=It(260,20,a),o.far=It(1900,380,a),i.scene.background.copy(o.color),i.post.uStorm.value=a,e.world?.sky&&(e.world.sky.mat.uniforms.uStorm.value=a),a}};function $1(){let r=new _e,t=3116287,e=16771387,i=1712960,n=16054271;r.box(-1.5,.5,-4.6,1.5,3,4.6,t,{bottom:!0}),r.box(-1.55,.5,-4.65,1.55,1.05,4.65,e,{dark:1}),r.box(-1.52,2.35,-4.62,1.52,3.05,4.62,n,{dark:1}),r.box(-1.3,3,-4,1.3,3.25,3.9,14673909);for(let x=0;x<5;x++){let m=-3.4+x*1.65;r.box(-1.56,1.35,m-.55,-1.5,2.25,m+.55,10478591,{dark:1}),r.box(1.5,1.35,m-.55,1.56,2.25,m+.55,10478591,{dark:1})}r.box(-1.25,1.35,-4.66,1.25,2.4,-4.6,10478591,{dark:1}),r.box(-1,.65,-4.68,1,1,-4.6,i),r.box(-1.4,.6,-4.72,-1,.95,-4.6,16774832,{dark:1}),r.box(1,.6,-4.72,1.4,.95,-4.6,16774832,{dark:1});for(let[x,m]of[[-1.55,-2.9],[1.55,-2.9],[-1.55,2.9],[1.55,2.9]])r.cylinder(x,0,m,.62,.5,10,i,{dark:1});let s=new Yt,a=new Dt(r.build(),Di());a.castShadow=!0,s.add(a);let o=6.2,l=new xn(o,28,20).toNonIndexed(),c=l.attributes.position,h=new Float32Array(c.count*3),u=[new ot("#2f8cff"),new ot("#ffe93b"),new ot("#ffffff"),new ot("#ff5a5f")];for(let x=0;x<c.count;x++){let m=Math.atan2(c.getZ(x),c.getX(x)),p=Math.floor((m+Math.PI)/(Math.PI*2)*12),v=u[p%u.length],w=.72+.28*((c.getY(x)/o+1)/2);h[x*3]=v.r*w,h[x*3+1]=v.g*w,h[x*3+2]=v.b*w}l.setAttribute("color",new me(h,3)),l.deleteAttribute("uv"),l.scale(1,1.18,1);let d=new Dt(l,Di());d.position.y=15.5,d.castShadow=!0,s.add(d);let f=new _e;for(let[x,m]of[[-1.2,-3.2],[1.2,-3.2],[-1.2,3.2],[1.2,3.2]])f.box(x-.05,3.2,m-.05,x+.05,10.4,m+.05,3811868);f.box(-1.8,3.25,-3.6,1.8,3.4,3.6,3811868);let g=new Dt(f.build(),Di());return s.add(g),s.userData.balloon=d,s}var Yc=class{constructor(t){this.game=t,this.model=$1(),this.model.visible=!1,t.gfx.scene.add(this.model),this.position=new D,this.start=new D,this.end=new D,this.dir=new D(0,0,-1),this.yaw=0,this.active=!1,this.t=0,this.len=1,this.speed=Hn.busSpeed,this.altitude=Hn.busAltitude}begin(t){let e=new Ae(t),i=e.range(0,Math.PI*2),n=Math.cos(i),s=Math.sin(i),a=e.range(-110,110),o=-s,l=n,c=560;this.start.set(-n*c+o*a,this.altitude,-s*c+l*a),this.end.set(n*c+o*a,this.altitude,s*c+l*a),this.len=this.start.distanceTo(this.end),this.dir.subVectors(this.end,this.start).normalize(),this.yaw=Math.atan2(-this.dir.x,-this.dir.z),this.position.copy(this.start),this.t=0,this.active=!0,this.model.visible=!0,this.model.rotation.y=this.yaw,this.model.position.copy(this.position)}get progress(){return this.t/this.len}approach(t,e){let i=this.start.x,n=this.start.z,s=t-i,a=e-n,o=s*this.dir.x+a*this.dir.z,l=Math.abs(s*-this.dir.z+a*this.dir.x);return{s:K1(o/this.len),perp:l}}update(t){if(!this.active)return;this.t+=this.speed*t,this.position.copy(this.start).addScaledVector(this.dir,this.t),this.position.y=this.altitude+Math.sin(this.t*.05)*1.2;let e=this.model;e.position.copy(this.position),e.rotation.y=this.yaw,e.rotation.z=Math.sin(this.t*.03)*.03,e.userData.balloon.rotation.y+=t*.05,this.progress>=1.02&&(this.active=!1,e.visible=!1)}},K1=r=>r<0?0:r>1?1:r;var Yu=new Map;function J1(r){if(Yu.has(r))return Yu.get(r);let t=new _e,e=2237998;t.box(-2.15,.32,-.92,2.15,.95,.92,r,{bottom:!0}),t.box(-1.25,.95,-.82,.95,1.55,.82,r,{dark:.9}),t.box(-1.2,1,-.85,.9,1.5,.85,9427199,{dark:1,top:!1}),t.box(-1.3,1.5,-.86,1,1.62,.86,r,{dark:1}),t.box(2.1,.5,-.7,2.2,.8,-.35,16774832,{dark:1}),t.box(2.1,.5,.35,2.2,.8,.7,16774832,{dark:1}),t.box(-2.2,.5,-.7,-2.1,.75,-.4,14236218,{dark:1}),t.box(-2.2,.5,.4,-2.1,.75,.7,14236218,{dark:1}),t.box(-2.2,.3,-.95,2.2,.42,.95,e);for(let[n,s]of[[-1.4,-.95],[1.4,-.95],[-1.4,.95],[1.4,.95]])t.box(n-.42,0,s-.14,n+.42,.84,s+.14,e,{dark:1});let i=t.build();return Yu.set(r,i),i}var Zc=class{constructor(t){this.world=t,this.group=new Yt,t.scene.add(this.group),this.mat=Di(),this.list=[]}spawn(t){let e=this.world.physics;for(let i of t){let n=new Dt(J1(i.color),this.mat);n.position.set(i.x,i.y,i.z),n.castShadow=!0,n.receiveShadow=!0,this.group.add(n);let s={kind:"prop",mat:"metal",harvest:"metal",hp:8,maxHp:8,alive:!0,mesh:n,x:i.x,y:i.y,z:i.z,color:i.color};s.collider=e.addBox(i.x-2.2,i.x+2.2,i.z-1,i.z+1,i.y+.25,i.y+1.62,{walkable:!0,owner:s,kind:"prop",material:"metal"}),this.list.push(s)}}hit(t,e=1){return t.hp-=e,t.mesh.position.y=t.y+.03,setTimeout(()=>{t.alive&&(t.mesh.position.y=t.y)},50),t.hp<=0&&this.remove(t),t.hp<=0}remove(t){t.alive&&(t.alive=!1,this.world.physics.remove(t.collider),this.group.remove(t.mesh))}reset(){for(let t of this.list)t.alive||(t.alive=!0,t.hp=t.maxHp,this.group.add(t.mesh),t.mesh.position.y=t.y,t.collider=this.world.physics.addBox(t.x-2.2,t.x+2.2,t.z-1,t.z+1,t.y+.25,t.y+1.62,{walkable:!0,owner:t,kind:"prop",material:"metal"}))}};var to=new D;function Zi(r,t,e,i,n,s){let a=2*Math.PI*n/4,o=Math.max(s-2*n,0),l=Math.PI/4;to.copy(t),to[i]=0,to.normalize();let c=.5*a/(a+o),h=1-to.angleTo(r)/l;return Math.sign(to[e])===1?h*c:o/(a+o)+c+c*(1-h)}var $c=class r extends li{constructor(t=1,e=1,i=1,n=2,s=.1){let a=n*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:n,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new D,c=new D,h=new D(t,e,i).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,x=new D,m=.5/a;for(let p=0,v=0;p<u.length;p+=3,v+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*s,u[p+1]=h.y*Math.sign(l.y)+c.y*s,u[p+2]=h.z*Math.sign(l.z)+c.z*s,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),f[v+0]=Zi(x,c,"z","y",s,i),f[v+1]=1-Zi(x,c,"y","z",s,e);break;case 1:x.set(-1,0,0),f[v+0]=1-Zi(x,c,"z","y",s,i),f[v+1]=1-Zi(x,c,"y","z",s,e);break;case 2:x.set(0,1,0),f[v+0]=1-Zi(x,c,"x","z",s,t),f[v+1]=Zi(x,c,"z","x",s,i);break;case 3:x.set(0,-1,0),f[v+0]=1-Zi(x,c,"x","z",s,t),f[v+1]=1-Zi(x,c,"z","x",s,i);break;case 4:x.set(0,0,1),f[v+0]=1-Zi(x,c,"x","y",s,t),f[v+1]=1-Zi(x,c,"y","x",s,e);break;case 5:x.set(0,0,-1),f[v+0]=Zi(x,c,"x","y",s,t),f[v+1]=1-Zi(x,c,"y","x",s,e);break}}static fromJSON(t){return new r(t.width,t.height,t.depth,t.segments,t.radius)}};var Zp=new D(0,-1,0),Q1=new Ue,j1=new Ve,ln=()=>new D;function ee(r,t,e=0){let i=r.index?r.toNonIndexed():r;i.attributes.uv&&i.deleteAttribute("uv");let n=new ot(t),s=i.attributes.position.count,a=new Float32Array(s*3);i.computeBoundingBox();let{min:o,max:l}=i.boundingBox,c=Math.max(l.y-o.y,1e-4),h=i.attributes.position;for(let u=0;u<s;u++){let d=1-e*(1-(h.getY(u)-o.y)/c);a[u*3]=n.r*d,a[u*3+1]=n.g*d,a[u*3+2]=n.b*d}return i.setAttribute("color",new me(a,3)),i}function ie(r,t=0,e=0,i=0,n=0,s=0,a=0,o=1,l=1,c=1){let h=new re().compose(new D(t,e,i),new Ue().setFromEuler(new Ve(n,s,a)),new D(o,l,c));return r.applyMatrix4(h),r}var xs=r=>{let t=Ac(r,!1);return t.computeBoundingSphere(),t},Vs=(r,t,e=4,i=8)=>new va(r,t,e,i),Ei=(r,t=10,e=8)=>new xn(r,t,e),cn=(r,t,e,i=.05,n=2)=>new $c(r,t,e,n,i),t_=[16175016,14725256,12880474,9658426,7029032,16768192],zr=[16734815,3842303,3066993,16763194,11693311,16747069,3073736,16739253,15921906,8180026],e_=[2832981,3817290,6967864,2574701,5595946,7024442,2040880,9137991],i_=[2824974,7028509,14267466,1118481,11875356,2777087,15259824,16736162],n_=[null,null,"cap","beanie","helmet","bandana","headband"],s_=["short","spiky","long","bun","buzz","mohawk","none"];function Qc(r){let t=r.pick(zr),e=r.pick(zr);for(;e===t;)e=r.pick(zr);return{skin:r.pick(t_),shirt:t,accent:e,pants:r.pick(e_),shoes:r.pick([15921906,2236962,14239803,4033497,15778844]),hair:r.pick(i_),hat:r.pick(n_),hatColor:r.pick(zr),hairStyle:r.pick(s_),glasses:r.chance(.22),glove:r.chance(.35),vest:r.chance(.4),gliderColor:r.pick(zr),gliderColor2:r.pick(zr),scale:r.range(.96,1.05)}}var jc={skin:15778970,shirt:3116287,accent:16763194,pants:2832981,shoes:15921906,hair:7028509,hat:"cap",hatColor:16763194,hairStyle:"short",glasses:!1,glove:!0,vest:!0,gliderColor:3116287,gliderColor2:16763194,scale:1};function r_(r){let t=[];return t.push(ee(ie(cn(.4,.5,.24,.07),0,.27,0),r.shirt,.18)),t.push(ee(ie(cn(.36,.22,.23,.06),0,-.01,0),r.pants,.1)),t.push(ee(ie(new li(.375,.05,.235),0,.1,0),3811868)),r.vest&&t.push(ee(ie(cn(.43,.33,.27,.06),0,.33,.005),r.accent,.12)),t.push(ee(ie(cn(.3,.36,.14,.05),0,.3,.19),r.accent,.2)),t.push(ee(ie(cn(.22,.14,.05,.03),0,.42,.27),r.shirt,.15)),t.push(ee(ie(Vs(.05,.05,3,8),0,.56,0),r.skin)),xs(t)}function a_(r){let t=[];t.push(ee(ie(Ei(.155,14,10),0,.11,0,0,0,0,1,1.06,1),r.skin,.06));for(let s of[-1,1])t.push(ee(ie(Ei(.026,6,5),s*.058,.13,-.138,0,0,0,1,1.25,.6),1316380)),t.push(ee(ie(new li(.06,.012,.02),s*.058,.172,-.135,0,0,s*.12),r.hair));t.push(ee(ie(new li(.05,.011,.02),0,.055,-.15),9062970)),t.push(ee(ie(Ei(.02,6,5),0,.1,-.157,0,0,0,1,.9,.9),r.skin)),r.glasses&&t.push(ee(ie(new li(.19,.05,.02),0,.13,-.15),1710626));let e=r.hairStyle,i=r.hair;if(e==="short")t.push(ee(ie(Ei(.17,12,8,0,Math.PI*2,0,Math.PI*.55),0,.12,.012),i));else if(e==="buzz")t.push(ee(ie(Ei(.162,12,8),0,.125,.012,0,0,0,1,.75,1),i));else if(e==="spiky"){for(let s=0;s<7;s++){let a=s/7*Math.PI*2;t.push(ee(ie(new _a(.05,.13,5),Math.cos(a)*.09,.27,Math.sin(a)*.09,Math.sin(a)*.4,0,-Math.cos(a)*.4),i))}t.push(ee(ie(Ei(.162,12,8,0,Math.PI*2,0,Math.PI*.5),0,.125,.01),i))}else e==="long"?(t.push(ee(ie(Ei(.17,12,8,0,Math.PI*2,0,Math.PI*.55),0,.12,.012),i)),t.push(ee(ie(cn(.3,.32,.1,.04),0,0,.12),i))):e==="bun"?(t.push(ee(ie(Ei(.17,12,8,0,Math.PI*2,0,Math.PI*.55),0,.12,.012),i)),t.push(ee(ie(Ei(.07,8,6),0,.3,.05),i))):e==="mohawk"&&t.push(ee(ie(cn(.05,.13,.28,.02),0,.28,.02),i));let n=r.hat;return n==="cap"?(t.push(ee(ie(Ei(.172,12,8,0,Math.PI*2,0,Math.PI*.5),0,.14,.005),r.hatColor)),t.push(ee(ie(cn(.2,.02,.15,.01),0,.15,-.19),r.hatColor,.2))):n==="beanie"?(t.push(ee(ie(Ei(.18,12,8,0,Math.PI*2,0,Math.PI*.56),0,.14,.005),r.hatColor)),t.push(ee(ie(Ei(.045,8,6),0,.33,0),16777215)),t.push(ee(ie(new si(.182,.182,.045,12),0,.15,.005),r.accent))):n==="helmet"?(t.push(ee(ie(Ei(.19,12,9,0,Math.PI*2,0,Math.PI*.62),0,.13,.005),r.hatColor)),t.push(ee(ie(cn(.06,.03,.34,.012),0,.31,0),r.accent))):n==="bandana"?(t.push(ee(ie(new si(.165,.17,.055,12),0,.2,.005),r.hatColor)),t.push(ee(ie(new li(.06,.09,.02),.03,.14,.17,0,0,.3),r.hatColor))):n==="headband"&&t.push(ee(ie(new si(.163,.163,.035,12),0,.2,.005),r.hatColor)),xs(t)}var o_=(r,t)=>xs([ee(ie(Vs(.056,.16,3,8),0,-.145,0),t,.12)]),l_=(r,t)=>xs([ee(ie(Vs(.05,.12,3,8),0,-.125,0),r.glove?t:r.skin,.1),ee(ie(Ei(.058,8,6),0,-.275,0),r.glove?r.accent:r.skin)]),c_=r=>xs([ee(ie(Vs(.076,.27,3,8),0,-.215,0),r.pants,.12)]),h_=r=>xs([ee(ie(Vs(.066,.26,3,8),0,-.215,0),r.pants,.1),ee(ie(cn(.125,.105,.27,.04),0,-.4,-.055),r.shoes,.15),ee(ie(cn(.13,.03,.28,.012),0,-.445,-.055),16119285)]);function u_(r){return xs([ee(ie(Vs(.2,.72,3,8),0,.85,0),r.shirt,.3),ee(ie(Ei(.16,8,6),0,1.5,0),r.skin),ee(ie(Vs(.16,.5,2,6),0,.36,0),r.pants,.2)])}function d_(r){let t=[],e=new xn(1.55,20,8,0,Math.PI*2,0,Math.PI*.5);e.scale(1.35,.62,1);let i=e.toNonIndexed(),n=i.attributes.position,s=new Float32Array(n.count*3),a=new ot(r.gliderColor),o=new ot(r.gliderColor2);for(let l=0;l<n.count;l++){let c=Math.atan2(n.getZ(l),n.getX(l)),u=Math.floor((c+Math.PI)/(Math.PI*2)*10)%2?a:o,d=.75+.25*(n.getY(l)/1);s[l*3]=u.r*d,s[l*3+1]=u.g*d,s[l*3+2]=u.b*d}i.setAttribute("color",new me(s,3)),i.attributes.uv&&i.deleteAttribute("uv"),t.push(i);for(let l=0;l<6;l++){let c=l/6*Math.PI*2,h=new si(.012,.012,1.9,4);ie(h,Math.cos(c)*1*.5,-.9,Math.sin(c)*.72*.5,Math.sin(c)*.32,0,-Math.cos(c)*.32),t.push(ee(h,15263976))}return t.push(ee(ie(new li(.5,.04,.04),0,-1.75,0),3817290)),xs(t)}function f_(){let r=new Ne({vertexColors:!0}),t={uFlash:{value:0},uFade:{value:1}};return r.userData.uniforms=t,r.onBeforeCompile=e=>{e.uniforms.uFlash=t.uFlash,e.uniforms.uFade=t.uFade,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlash;
uniform float uFade;`).replace("#include <opaque_fragment>",`
        {
          // soft fresnel rim + damage flash
          vec3 vdir = normalize(vViewPosition);
          float rim = pow(1.0 - clamp(dot(normalize(normal), vdir), 0.0, 1.0), 2.6);
          outgoingLight += vec3(0.42, 0.55, 0.75) * rim * 0.32;
          outgoingLight = mix(outgoingLight, vec3(1.0, 0.25, 0.2), uFlash * 0.55);
        }
        #include <opaque_fragment>
        gl_FragColor.a *= uFade;`)},r.customProgramCacheKey=()=>"character-mat-v1",r}var Hs=ln(),eo=ln(),Zu=ln(),$p=ln(),Kp=ln(),Jp=ln(),$u=new Ue,Qp=new Ue;function Kc(r,t,e,i,n,s,a){Hs.subVectors(t,r);let o=Hs.length(),l=i+n-.004,c=Math.abs(i-n)+.03;o=Wt(o,c,l),Hs.normalize(),Jp.copy(r).addScaledVector(Hs,o);let h=(i*i+o*o-n*n)/(2*i*o),u=Math.acos(Wt(h,-1,1));eo.copy(e).addScaledVector(Hs,-e.dot(Hs)),eo.lengthSq()<1e-6&&eo.set(0,-1,0),eo.normalize(),Zu.copy(r).addScaledVector(Hs,i*Math.cos(u)).addScaledVector(eo,i*Math.sin(u)),$p.subVectors(Zu,r).normalize(),Kp.subVectors(Jp,Zu).normalize(),$u.setFromUnitVectors(Zp,$p),s.quaternion.copy($u),Qp.setFromUnitVectors(Zp,Kp),a.quaternion.copy($u).invert().multiply(Qp)}var io=.29,Jc=.275,Hr=.88,jp=.43,t0={rifle:{hip:[.14,.16,-.2,0,-.05],ads:[.05,.4,-.24,0,0]},smg:{hip:[.13,.17,-.18,0,-.05],ads:[.05,.4,-.22,0,0]},shotgun:{hip:[.14,.15,-.19,0,-.05],ads:[.05,.4,-.24,0,0]},sniper:{hip:[.14,.15,-.18,0,-.05],ads:[.04,.42,-.22,0,0]},pistol:{hip:[.08,.27,-.28,0,0],ads:[.03,.42,-.3,0,0]}},Vr=class{constructor(t){this.outfit=t,this.material=f_();let e=t,i=e.shirt,n=s=>{let a=new Dt(s,this.material);return a.castShadow=!0,a.frustumCulled=!0,a};this.root=new Yt,this.body=new Yt,this.hips=new Yt,this.spine=new Yt,this.headPivot=new Yt,this.holder=new Yt,this.rig=new Yt,this.root.add(this.rig),this.rig.add(this.body),this.body.add(this.hips),this.hips.position.y=Hr,this.hips.add(this.spine),this.spine.add(n(r_(e))),this.spine.add(this.headPivot),this.headPivot.position.y=.58,this.headPivot.add(n(a_(e))),this.spine.add(this.holder),this.shoulder=[new Yt,new Yt],this.fore=[new Yt,new Yt],this.shoulderPos=[new D(-.255,.45,0),new D(.255,.45,0)];for(let s=0;s<2;s++)this.shoulder[s].position.copy(this.shoulderPos[s]),this.shoulder[s].add(n(o_(e,i))),this.fore[s].position.y=-io,this.fore[s].add(n(l_(e,i))),this.shoulder[s].add(this.fore[s]),this.spine.add(this.shoulder[s]);this.thigh=[new Yt,new Yt],this.shin=[new Yt,new Yt];for(let s=0;s<2;s++)this.thigh[s].position.set(s?.1:-.1,0,0),this.thigh[s].add(n(c_(e))),this.shin[s].position.y=-jp,this.shin[s].add(n(h_(e))),this.thigh[s].add(this.shin[s]),this.hips.add(this.thigh[s]);this.proxy=n(u_(e)),this.proxy.visible=!1,this.proxy.castShadow=!1,this.root.add(this.proxy),this.glider=n(d_(e)),this.glider.visible=!1,this.glider.castShadow=!1,this.root.add(this.glider),this.root.scale.setScalar(e.scale||1),this.weapon=null,this.holderPos=new D(.14,.16,-.2),this.holderRot=new Ve(0,0,0),this.holderQ=new Ue,this.phase=0,this.time=Math.random()*10,this.k={emote:0,crouch:0,air:0,sprint:0,move:0,ads:0,armed:0,swim:0,fall:0,glide:0,dive:0,dead:0,lean:0,twist:0,ik:0,squat:0,use:0},this.detail=0,this._tmp={g:ln(),f:ln(),m:ln(),pole:ln()},this.flash=0}setDetail(t){t!==this.detail&&(this.detail=t,this.rig.visible=t===0,this.proxy.visible=t===1)}setShadows(t){this.rig.traverse(e=>{e.isMesh&&(e.castShadow=t)})}setHeld(t){this.weapon?.group&&this.holder.remove(this.weapon.group),this.weapon=t,t?.group&&this.holder.add(t.group)}muzzleWorld(t){let e=this.weapon;return e?.data?.muzzle?t.set(...e.data.muzzle):t.set(0,.04,-.6),this.holder.localToWorld(t),t}headWorld(t){return t.set(0,.12,0),this.headPivot.localToWorld(t),t}chestWorld(t){return t.set(0,.3,0),this.spine.localToWorld(t),t}update(t,e){this.time+=t;let i=this.k,n=e.mode,s=this.weapon&&this.weapon.hold!=="none",a=this.weapon?.hold||"none",o=t0[a]!==void 0;i.crouch=te(i.crouch,e.crouch?1:0,14,t),i.air=te(i.air,!e.onGround&&n==="ground"&&!e.swim?1:0,12,t),i.sprint=te(i.sprint,e.sprint&&e.speed>3.5?1:0,9,t),i.move=te(i.move,le(e.speed/5.2),11,t),i.ads=te(i.ads,e.ads||0,16,t),i.swim=te(i.swim,e.swim?1:0,8,t),i.fall=te(i.fall,n==="freefall"?1:0,6,t),i.glide=te(i.glide,n==="glide"?1:0,6,t),i.dead=te(i.dead,n==="dead"?1:0,9,t),i.use=te(i.use,e.useT>=0?1:0,12,t),i.squat=te(i.squat,e.landImpact||0,16,t),i.armed=te(i.armed,s||e.building?1:0,10,t),i.emote=te(i.emote,e.emote&&n==="ground"?1:0,9,t);let l=e.speed,c=e.moveAngle||0,h=c,u=1;Math.abs(c)>Math.PI/2&&(h=c>0?c-Math.PI:c+Math.PI,u=-1),l<.4&&(h=0),this.k.lean=te(this.k.lean,h,10,t),this.phase+=t*l*3*u*(e.onGround||e.swim?1:.2);let d=this.phase,f=Math.sin(d),g=Math.cos(d),x=i.move*(1-i.crouch*.4),m=It(.42,.95,i.sprint)*x,p=It(.35,1.25,i.sprint)*x,v=Hr,w=i.crouch*.3+i.squat*.18,M=v-w+Math.abs(Math.sin(d))*.035*x,y=i.air,b=Math.acos(Wt((v-w)/(2*jp),0,1));for(let rt=0;rt<2;rt++){let F=rt?1:-1,$=rt?f:-f,lt=rt?g:-g,Et=$*m+b*1,ct=-(.06+p*Math.max(0,lt)*1)-b*2+0;Et+=0,Et=It(Et,(rt?.55:-.25)+b*.5,y*.85),ct=It(ct,rt?-.6:-1.1,y*.85),this.thigh[rt].rotation.set(Et,0,F*.03*(1+i.crouch)),this.shin[rt].rotation.set(ct,0,0)}this.hips.position.y=M,this.hips.rotation.set(0,this.k.lean*(1-i.fall-i.glide)*.9,Math.sin(d)*.03*x),this.body.rotation.set(0,0,0),this.body.position.set(0,0,0);let C=Wt(e.aimPitch||0,-1.1,1.1),_=e.aimYawRel||0,R=C*.5+x*.06+i.sprint*.16+e.landImpact*.1+(e.hitFlinch||0)*.18,T=-this.hips.rotation.y+_,E=-Math.sin(d)*.03*x;e.fireKick&&(R-=e.fireKick*.03),this.spine.rotation.set(R,T,E),this.headPivot.rotation.set(C*.35-.05,0,0);let P=this._tmp,L=-p_(f)*.75*x,I=this.holderPos,U=this.holderRot,B=ln(),z=[0,0,0],j=!1,Z=!1,O=!1,Q=null,pt=null;if(n==="ground"&&!e.swim)if(o){let rt=t0[a],F=rt.hip,$=rt.ads,lt=i.ads,Et=It(F[0],$[0],lt),ct=It(F[1],$[1],lt),Rt=It(F[2],$[2],lt),ce=0,Kt=It(F[4],$[4],lt),ne=0;Et-=i.sprint*.04,ct-=i.sprint*.06,Rt+=i.sprint*.03,ce-=i.sprint*.55*(1-lt),Kt+=i.sprint*.25*(1-lt),ct+=Math.sin(this.time*1.6)*.004+Math.abs(f)*.012*x,Et+=Math.sin(this.time*1.1)*.003+g*.008*x;let pe=e.fireKick||0;Rt+=pe*.06,ce+=pe*.1,ct+=pe*.01;let Qt=0;if(e.reloadT>=0){let W=e.reloadT,tt=Math.sin(le(W/.2)*Math.PI*.5)*(1-de(.8,1,W));ce-=tt*.5,ct-=tt*.08,Et-=tt*.04,ne+=tt*.25,Qt=tt}ce+=C*.5,B.set(Et,ct,Rt),z=[ce,Kt,ne],O=!0;let Gt=this.weapon.data;if(pt=Gt.grip,Q=Gt.fore,e.reloadT>=0){let W=e.reloadT,tt=Gt.mag,et=0;W<.2?et=de(0,.2,W):W<.8?et=1:et=1-de(.8,1,W);let ht=W>.25&&W<.6?Math.sin((W-.25)/.35*Math.PI)*.09:0,N=It(Gt.fore[0],tt[0],et),Ut=It(Gt.fore[1],tt[1],et)-ht,Bt=It(Gt.fore[2],tt[2],et);if(Q=[N,Ut,Bt],a==="shotgun"&&W>.2&&W<.85){let k=Math.sin((W-.2)/.65*Math.PI*5);Q=[Gt.fore[0],Gt.fore[1]-.04,Gt.fore[2]+.16*(.5+.5*k)]}}}else if(a==="melee"){let rt=.24,F=.12,$=-.16,lt=.45,Et=0,ct=.1;if(rt+=Math.sin(this.time*1.2)*.003,F+=Math.abs(f)*.01*x,lt+=i.sprint*-.2,e.swingT>=0){let Rt=e.swingT,ce;Rt<.32?ce=It(.45,1.05,de(0,.32,Rt)):Rt<.5?ce=It(1.05,-1.5,de(.32,.5,Rt)):ce=It(-1.5,.45,de(.5,1,Rt)),lt=ce;let Kt=Rt<.32?de(0,.32,Rt):Rt<.5?1-de(.32,.5,Rt):0;F+=Kt*.2,$+=Rt>=.32&&Rt<.62?-.16*de(.32,.5,Rt)*(1-de(.55,.62,Rt)):0,Et=-.15*Kt}B.set(rt,F,$),z=[lt,Et,ct],Z=!0,pt=this.weapon.data.grip}else a==="consumable"&&(B.set(.04,.3+Math.sin(this.time*6)*.004*i.use,-.26),z=[.1,0,0],O=!0,pt=[.09,.03,.02],Q=[-.09,.03,.02],e.useT>=0&&(B.y+=Math.sin(e.useT*Math.PI*4)*.012));let mt=1-Math.exp(-(e.ads?26:16)*t);I.lerp(B.length()||B.x||B.y?B:I,mt),U.x=It(U.x,z[0],mt),U.y=It(U.y,z[1],mt),U.z=It(U.z,z[2],mt),this.holder.position.copy(I),this.holder.rotation.set(U.x,U.y,U.z),this.holder.updateMatrix(),this.holder.visible=!!this.weapon?.group&&n==="ground"&&!e.swim&&!e.building;let Xt=P.pole.set(.55,-1,.35).normalize(),Ft=new D(-.55,-1,.35).normalize();if(n==="ground"&&!e.swim&&(O||Z)&&this.weapon?.group){let rt=P.g.set(...pt).applyMatrix4(this.holder.matrix);if(Kc(this.shoulderPos[1],rt,Xt,io,Jc,this.shoulder[1],this.fore[1]),O){let F=P.f.set(...Q).applyMatrix4(this.holder.matrix);Kc(this.shoulderPos[0],F,Ft,io,Jc,this.shoulder[0],this.fore[0])}else{let F=L;this.shoulder[0].rotation.set(F,0,.08),this.fore[0].rotation.set(.25+Math.max(0,-F)*.6,0,0),this.shoulder[0].quaternion.setFromEuler(this.shoulder[0].rotation),this.fore[0].quaternion.setFromEuler(this.fore[0].rotation)}}else if(n==="ground"&&!e.swim){let rt=e.building?1:0;for(let F=0;F<2;F++){let $=F?1:-1,lt=(F?-1:1)*L;if(rt){let Et=P.g.set($*.13,.3,-.42+Math.sin(this.time*3+F)*.01);Kc(this.shoulderPos[F],Et,F?Xt:Ft,io,Jc,this.shoulder[F],this.fore[F])}else this.shoulder[F].quaternion.setFromEuler(new Ve(lt,0,$*(.06+i.crouch*.05+y*.9))),this.fore[F].quaternion.setFromEuler(new Ve(.22+Math.max(0,lt*1)*.5+i.sprint*.6+y*.3,0,0))}}if(this.glider.visible=n==="glide"||i.glide>.05&&n!=="dead",n==="freefall"){this.body.rotation.x=It(this.body.rotation.x,-1.32+C*.15,1-Math.exp(-6*t)),this.hips.position.y=Hr-.1;let rt=Math.sin(this.time*14)*.05;for(let F=0;F<2;F++){let $=F?1:-1;this.shoulder[F].quaternion.setFromEuler(new Ve(.55+rt,0,$*1.15)),this.fore[F].quaternion.setFromEuler(new Ve(.25,0,0)),this.thigh[F].rotation.set(-.35+rt,0,$*.42),this.shin[F].rotation.set(-.5,0,0)}this.spine.rotation.set(.25,0,0),this.holder.visible=!1,this.hips.rotation.set(0,0,0)}else if(n==="glide"){this.body.rotation.x=It(this.body.rotation.x,.08+Math.sin(this.time*1.5)*.02,1-Math.exp(-8*t)),this.hips.position.y=Hr+.02;for(let rt=0;rt<2;rt++){let F=rt?1:-1,$=P.g.set(F*.2,.98+Math.sin(this.time*2)*.01,-.05);Kc(this.shoulderPos[rt],$,rt?Xt:Ft,io,Jc,this.shoulder[rt],this.fore[rt]),this.thigh[rt].rotation.set(.15+rt*.12,0,F*.07),this.shin[rt].rotation.set(-.25-rt*.12,0,0)}this.spine.rotation.set(.03,0,0),this.holder.visible=!1,this.hips.rotation.set(0,0,0),this.glider.position.set(0,2.05,0),this.glider.rotation.set(0,0,0)}else if(e.swim){this.body.rotation.x=It(this.body.rotation.x,-1.25,1-Math.exp(-7*t));let rt=this.time*(3+l*.8);this.hips.position.y=Hr-.22;for(let F=0;F<2;F++){let $=F?1:-1,lt=Math.sin(rt+F*Math.PI);this.shoulder[F].quaternion.setFromEuler(new Ve(2.4+lt*.9,0,$*(.35+Math.max(0,lt)*.4))),this.fore[F].quaternion.setFromEuler(new Ve(.4+Math.max(0,-lt)*.5,0,0)),this.thigh[F].rotation.set(Math.sin(rt*1.6+F*Math.PI)*.35,0,$*.06),this.shin[F].rotation.set(-.25-Math.max(0,Math.sin(rt*1.6+F*Math.PI))*.4,0,0)}this.spine.rotation.set(.35+C*.2,0,0),this.hips.rotation.set(0,0,0),this.holder.visible=!1}else if(n==="dead"){let rt=le((e.deadT||0)/.55),F=1-Math.pow(1-rt,3);this.body.rotation.x=F*1.5*(e.deadDir??1),this.hips.position.y=It(M,.28,F);for(let $=0;$<2;$++){let lt=$?1:-1;this.shoulder[$].quaternion.setFromEuler(new Ve(-.3*F,0,lt*(.5+.9*F))),this.fore[$].quaternion.setFromEuler(new Ve(.3,0,0)),this.thigh[$].rotation.set(.15*F,0,lt*.25*F),this.shin[$].rotation.set(-.3*F,0,0)}this.holder.visible=!1}else this.body.rotation.x=It(this.body.rotation.x,0,1-Math.exp(-10*t));if(i.emote>.01&&n==="ground"){let rt=i.emote,F=this.time*7.2,$=Math.abs(Math.sin(F))*.07;this.hips.position.y=It(this.hips.position.y,Hr-.07+$,rt),this.hips.rotation.y=It(this.hips.rotation.y,Math.sin(F*.5)*.6,rt),this.hips.rotation.z=It(this.hips.rotation.z,Math.sin(F)*.09,rt),this.spine.rotation.z=It(this.spine.rotation.z,-Math.sin(F)*.13,rt),this.spine.rotation.y=It(this.spine.rotation.y,-Math.sin(F*.5)*.4,rt),this.headPivot.rotation.x=It(this.headPivot.rotation.x,Math.sin(F*2)*.14,rt);let lt=Q1,Et=j1;for(let ct=0;ct<2;ct++){let Rt=ct?1:-1,ce=ct*Math.PI;Et.set(2.5+Math.sin(F+ce)*.45,0,Rt*(.35+Math.abs(Math.sin(F*.5+ce))*.3)),lt.setFromEuler(Et),this.shoulder[ct].quaternion.slerp(lt,rt),Et.set(.5+Math.abs(Math.sin(F+ce))*.9,0,0),lt.setFromEuler(Et),this.fore[ct].quaternion.slerp(lt,rt),this.thigh[ct].rotation.x=It(this.thigh[ct].rotation.x,Math.sin(F+ce)*.45,rt),this.thigh[ct].rotation.z=It(this.thigh[ct].rotation.z,Rt*.12,rt),this.shin[ct].rotation.x=It(this.shin[ct].rotation.x,-Math.abs(Math.sin(F+ce))*.7-.1,rt)}rt>.4&&(this.holder.visible=!1)}this.flash=te(this.flash,0,10,t),this.material.userData.uniforms.uFlash.value=this.flash}hitFlash(t=1){this.flash=Math.max(this.flash,t)}setFade(t){this.material.userData.uniforms.uFade.value=t,this.material.transparent=t<.999,this.material.needsUpdate=!1}},p_=r=>r;var Ui=6,Gr=class{constructor(){this.slots=new Array(Ui).fill(null),this.slots[0]={kind:"pickaxe",id:"pickaxe",rarity:0},this.selected=0,this.ammo={light:0,medium:0,shells:0,heavy:0},this.mats={wood:0,stone:0,metal:0},this.version=0}get current(){return this.slots[this.selected]}touch(){this.version++}select(t){return t<0||t>=Ui||!this.slots[t]||t===this.selected?!1:(this.selected=t,this.touch(),!0)}cycle(t){for(let e=1;e<=Ui;e++){let i=(this.selected+t*e+Ui*4)%Ui;if(this.slots[i])return this.selected=i,this.touch(),!0}return!1}freeSlot(){for(let t=1;t<Ui;t++)if(!this.slots[t])return t;return-1}weaponCount(){let t=0;for(let e=1;e<Ui;e++)this.slots[e]?.kind==="weapon"&&t++;return t}hasWeapon(){return this.weaponCount()>0}countOf(t){let e=0;for(let i of this.slots)i?.kind==="consumable"&&i.id===t&&(e+=i.count);return e}findConsumable(t){for(let e=1;e<Ui;e++)if(this.slots[e]?.kind==="consumable"&&this.slots[e].id===t)return e;return-1}bestWeaponSlot(){let t=-1,e=-1;for(let i=1;i<Ui;i++){let n=this.slots[i];if(n?.kind!=="weapon")continue;let s=n.rarity*100+Be[n.id].dmg*Be[n.id].pellets*Be[n.id].rate*.05;s>e&&(e=s,t=i)}return t}addAmmo(t,e){let i=ai[t].cap,n=Math.max(0,Math.min(e,i-this.ammo[t]));return this.ammo[t]+=n,n&&this.touch(),n}addMats(t,e){let i=this.mats[t];return this.mats[t]=Math.min(wi.maxMats,i+e),this.touch(),this.mats[t]-i}canTake(t){if(t.kind==="ammo")return this.ammo[t.id]<ai[t.id].cap?{ok:!0,swap:!1}:{ok:!1,swap:!1,reason:"Ammo full"};if(t.kind==="consumable"){let e=this.findConsumable(t.id);if(e>=0)return this.slots[e].count<Ge[t.id].stack?{ok:!0,swap:!1}:{ok:!1,swap:!1,reason:"Stack full"}}else if(t.kind==="weapon")for(let e=1;e<Ui;e++){let i=this.slots[e];if(i?.kind==="weapon"&&i.id===t.id&&i.rarity===t.rarity)return{ok:!1,swap:!1,reason:"Already carrying"}}return this.freeSlot()>=0?{ok:!0,swap:!1}:this.selected===0?{ok:!1,swap:!1,reason:"Inventory full"}:{ok:!0,swap:!0}}add(t,e={}){let i={ok:!1,taken:0,dropped:null,slot:-1,reason:""};if(t.kind==="ammo"){let n=this.addAmmo(t.id,t.count);return i.ok=n>0,i.taken=n,i.reason=n?"":"Ammo full",i}if(t.kind==="consumable"){let n=Ge[t.id],s=this.findConsumable(t.id);if(s>=0){let l=this.slots[s],c=Math.min(t.count,n.stack-l.count);return c<=0?(i.reason="Stack full",i):(l.count+=c,i.ok=!0,i.taken=c,i.slot=s,this.touch(),i)}let a=this.freeSlot();if(a<0){if(e.noSwap||this.selected===0)return i.reason="Inventory full",i;a=this.selected,i.dropped=this.slots[a]}let o=Math.min(t.count,n.stack);return this.slots[a]={kind:"consumable",id:t.id,count:o,rarity:0},i.ok=!0,i.taken=o,i.slot=a,this.touch(),i}if(t.kind==="weapon"){for(let s=1;s<Ui;s++){let a=this.slots[s];if(a?.kind==="weapon"&&a.id===t.id&&a.rarity===t.rarity)return i.reason="Already carrying",i}let n=this.freeSlot();if(n<0){if(e.noSwap||this.selected===0)return i.reason="Inventory full",i;n=this.selected,i.dropped=this.slots[n]}return this.slots[n]={kind:"weapon",id:t.id,rarity:t.rarity,mag:t.mag??Be[t.id].mag},i.ok=!0,i.taken=1,i.slot=n,this.touch(),i}return i}removeSlot(t){if(t<=0||t>=Ui)return null;let e=this.slots[t];return this.slots[t]=null,this.selected===t&&(this.selected=0),this.touch(),e}consumeOne(t){let e=this.slots[t];if(!e||e.kind!=="consumable")return!1;e.count--;let i=!1;return e.count<=0&&(this.slots[t]=null,this.selected===t&&(this.selected=0),i=!0),this.touch(),i}dropAll(){let t=[];for(let e=1;e<Ui;e++){let i=this.slots[e];i&&(t.push({...i}),this.slots[e]=null)}for(let e of Object.keys(this.ammo)){let i=this.ammo[e];i>0&&(t.push({kind:"ammo",id:e,count:Math.min(i,ai[e].perBox*2)}),this.ammo[e]=0)}return this.selected=0,this.touch(),t}canAfford(t,e){return this.mats[e]>=t}spend(t,e){return this.mats[e]<t?!1:(this.mats[e]-=t,this.touch(),!0)}};var Wr=class{constructor(t){this.a=t,this.fireCd=0,this.bloom=0,this.kick=0,this.reloading=!1,this.reloadT=0,this.reloadDur=1,this.swinging=!1,this.swingT=0,this.swingDur=1/Gn.rate,this.swingHit=!1,this.using=!1,this.useT=0,this.useDur=1,this.useSlot=-1,this.lastFire=-99,this.heldKey="",this.stats=null,this.autoReloadAt=-1,this.equipT=0,this.needRelease=!1}get firingRecently(){return this.a.game.time-this.lastFire<.6}get equipping(){return this.equipT>0}_keyOf(t){return t?`${t.kind}:${t.id}:${t.rarity??0}`:"none"}_syncHeld(){let t=this.a,e=t.inv.current,i=t.building?"build":this._keyOf(e);if(i===this.heldKey)return;if(this.heldKey=i,this.reloading=!1,this.using=!1,this.swinging=!1,this.autoReloadAt=-1,this.equipT=.22,t.building||!e){t.model.setHeld(null),this.stats=null;return}let n="none";e.kind==="weapon"?(n=Be[e.id].hold,this.stats=Bs(e)):(this.stats=null,n=e.kind==="pickaxe"?"melee":"consumable");let s=Br(e);t.model.setHeld({group:s,data:s.userData,hold:n}),t.isPlayer&&t.game.audio?.equip(t,e)}cancelReload(){this.reloading=!1}cancelUse(){this.using&&(this.using=!1,this.useT=0)}update(t){let e=this.a,i=e.game,n=e.intent;if(this.fireCd=Math.max(-.06,this.fireCd-t),this.equipT=Math.max(0,this.equipT-t),this.kick=Math.max(0,this.kick-t*7),this.bloom=Math.max(0,this.bloom-(this.stats?.bloomMax||.03)*3.2*t),this._syncHeld(),e.mode!=="ground"||e.building){this.reloading=!1,this.using=!1,this.swinging=!1;return}let s=e.inv.current;e.swimming&&(this.reloading=!1,this.using=!1),n.fire||(this.needRelease=!1);let a=n.fire&&!this.needRelease;if(this.reloading&&(!s||s.kind!=="weapon"?this.reloading=!1:(this.reloadT+=t,this.reloadT>=this.reloadDur&&this._finishReload(s))),this.autoReloadAt>0&&i.time>=this.autoReloadAt&&(this.autoReloadAt=-1,s?.kind==="weapon"&&s.mag<=0&&this.startReload()),!!s)if(s.kind==="weapon"){let o=this.stats;n.reload&&!this.reloading&&this.startReload(),(o.auto?a:n.firePressed&&!this.needRelease)&&this.fireCd<=0&&!this.using&&!e.swimming&&this.equipT<=.06&&(this.reloading?s.mag>0&&o.id==="pump"&&(this.reloading=!1,this._shoot(s,o)):s.mag>0?this._shoot(s,o):e.inv.ammo[o.ammo]>0?this.startReload():n.firePressed&&i.audio?.dryFire(e))}else s.kind==="pickaxe"?(a&&!this.swinging&&this.equipT<=.05&&!e.swimming&&this.startSwing(),this.swinging&&(this.swingT+=t,!this.swingHit&&this.swingT>=this.swingDur*.47&&(this.swingHit=!0,i.combat.melee(e)),this.swingT>=this.swingDur&&(this.swinging=!1))):s.kind==="consumable"&&(this.using?!n.fire&&e.isPlayer?this.cancelUse():(this.useT+=t,this.useT>=this.useDur&&this._finishUse()):a&&this.equipT<=.05&&!e.swimming&&this.startUse(e.inv.selected))}startReload(){let t=this.a,e=t.inv.current;if(this.reloading||!e||e.kind!=="weapon")return!1;let i=this.stats;return e.mag>=i.mag||t.inv.ammo[i.ammo]<=0?!1:(this.reloading=!0,this.reloadT=0,this.reloadDur=i.reload,t.game.audio?.reloadStart(t,i),!0)}_finishReload(t){let e=this.a,i=this.stats,n=i.mag-t.mag,s=Math.min(n,e.inv.ammo[i.ammo]);t.mag+=s,e.inv.ammo[i.ammo]-=s,e.inv.touch(),this.reloading=!1,e.game.audio?.reloadEnd(e,i)}currentSpread(t){let e=this.a,i=e.intent.aim&&e.isArmed,n=t.spread+this.bloom;return i&&(n*=t.adsSpread),e.crouching&&(n*=.75),!e.onGround&&!e.swimming?n+=.03:n+=Wt(e.speedH/wn.sprintSpeed,0,1)*.014*(i?.4:1),n}_shoot(t,e){let i=this.a,n=i.game;t.mag--,i.inv.touch(),this.fireCd=Math.max(this.fireCd,-.06)+1/e.rate,this.lastFire=n.time,this.kick=1,i.stats.shots++;let s=this.currentSpread(e);n.combat.fireWeapon(i,t,e,s),this.bloom=Math.min(e.bloomMax,this.bloom+e.bloom),i.isPlayer&&i.applyRecoil?.(e),t.mag<=0&&(this.autoReloadAt=n.time+.35)}startSwing(){this.swinging=!0,this.swingT=0,this.swingDur=1/Gn.rate,this.swingHit=!1,this.lastFire=this.a.game.time,this.a.game.audio?.swing(this.a)}startUse(t){let e=this.a,i=e.inv.slots[t];if(!i||i.kind!=="consumable")return!1;let n=Ge[i.id],s=n.heal&&e.health<(n.healCap??100),a=n.shield&&e.shield<(n.shieldCap??100);if(!s&&!a){if(e.isPlayer&&e.game.time-(this._lastMsg||0)>1.2){this._lastMsg=e.game.time;let o=n.healCap??100,l=n.shieldCap??100,c=n.kind==="shield"?l<100&&e.shield<100?`${n.name.toUpperCase()} ONLY FILLS TO ${l}`:"SHIELD FULL":n.kind==="heal"?o<100&&e.health<100?`${n.name.toUpperCase()} ONLY HEALS TO ${o}`:"HEALTH AT MAX":"FULLY HEALED";e.game.hud?.toast(c)}return!1}return this.using=!0,this.useT=0,this.useDur=n.use,this.useSlot=t,e.game.audio?.useStart(e,n),!0}_finishUse(){let t=this.a,e=t.inv.slots[this.useSlot];if(this.using=!1,!e||e.kind!=="consumable")return;let i=Ge[e.id];i.heal&&(t.health=Math.max(t.health,Math.min(i.healCap??100,t.health+i.heal))),i.shield&&(t.shield=Math.max(t.shield,Math.min(i.shieldCap??100,t.shield+i.shield))),t.stats.heals++,t.inv.consumeOne(this.useSlot)&&(this.needRelease=!0),t.game.audio?.useEnd(t,i),t.game.fx?.healPulse(t,i.color),t.isPlayer&&t.game.hud?.pulseHeal(i)}};var m_=1e9,g_=1,Xr=class{constructor(t,{name:e,outfit:i,isPlayer:n=!1}){this.game=t,this.id=g_++,this.name=e,this.isPlayer=n,this.pos=new D,this.vel=new D,this.yaw=0,this.aimYaw=0,this.aimPitch=0,this.mode="bus",this.onGround=!1,this.crouching=!1,this.sprinting=!1,this.swimming=!1,this.height=wn.height,this.radius=wn.radius,this.health=wn.maxHealth,this.shield=0,this.alive=!0,this.inv=new Gr,this.intent={moveX:0,moveZ:0,sprint:!1,jump:!1,jumpPressed:!1,crouch:!1,fire:!1,firePressed:!1,aim:!1,reload:!1,glide:!1},this.aimRay={origin:new D,dir:new D(0,0,-1),point:new D},this.model=new Vr(i),this.model.root.visible=!1,this.wc=new Wr(this),this.stats={kills:0,damageDealt:0,shots:0,hits:0,placement:0,survived:0,heals:0},this.speedH=0,this.landImpact=0,this.hitFlinch=0,this.deadT=0,this.deadDir=1,this.coyote=0,this.jumpBuf=0,this.airTime=0,this.freefallT=0,this.lastDamageTime=-99,this.lastDamager=null,this.stormTick=0,this.lastMoveYaw=0,this.building=!1,this.buildPiece="wall",this.faceUntil=0,this.kills=0,this.groundCollider=null,this.footPhase=0,this.footstepDist=0,this.submerged=0,this.invulnerable=!1,this.emoteT=0,this._vv=new D}get eyeHeight(){return this.crouching?1.18:wn.eye}eyePos(t=this._vv){return t.set(this.pos.x,this.pos.y+this.eyeHeight,this.pos.z)}chestPos(t=this._vv){return t.set(this.pos.x,this.pos.y+this.height*.62,this.pos.z)}get forward(){return this._fwd||(this._fwd=new D)}get isArmed(){let t=this.inv.current;return t&&t.kind==="weapon"}get totalHp(){return this.health+this.shield}spawnAt(t,e,i,n=0){this.pos.set(t,e,i),this.vel.set(0,0,0),this.yaw=this.aimYaw=n,this.model.root.position.copy(this.pos),this.model.root.rotation.y=n}jumpFromBus(t,e,i,n,s,a){this.pos.set(t,e,i),this.vel.set(s*.4,-6,a*.4),this.mode="freefall",this.freefallT=0,this.onGround=!1,this.aimYaw=this.yaw=n,this.model.root.visible=!0}update(t){if(!this.alive){this._updateDead(t);return}let e=this.game;this.wc.update(t),this.hitFlinch=Math.max(0,this.hitFlinch-t*4),this.landImpact=Math.max(0,this.landImpact-t*3.2);let i=this.pos.x,n=this.pos.z;switch(this.mode){case"freefall":this._freefall(t);break;case"glide":this._glide(t);break;case"ground":this._ground(t);break;default:break}if(this.mode==="ground"||this.mode==="glide"||this.mode==="freefall"){let s=Math.hypot(this.pos.x-i,this.pos.z-n)/Math.max(t,1e-4);this.speedH=te(this.speedH,this.mode==="ground"?s:0,14,t)}this._facing(t),this._syncModel(t)}_ground(t){let e=wn,i=this.intent,n=Ku(this),s=this.game.terrain,a=this.wc,o=i.crouch&&!this.swimming;o!==this.crouching&&(o?this.crouching=!0:n.ceilingAt(this.pos.x,this.pos.z,this.pos.y+e.crouchHeight)>this.pos.y+e.height&&(this.crouching=!1)),this.height=te(this.height,this.crouching?e.crouchHeight:e.height,16,t),this.emoteT>0&&(Math.hypot(i.moveX,i.moveZ)>.1||i.jump||i.fire||i.aim||this.swimming||!this.onGround)&&(this.emoteT=0);let l=i.moveX,c=i.moveZ,h=Math.hypot(l,c),u=Math.min(1,h);h>.001&&(l/=h,c/=h);let d=u>0?-(l*Math.sin(this.aimYaw)+c*Math.cos(this.aimYaw)):0,f=i.aim&&this.isArmed&&!a.reloading,g=i.sprint&&u>0&&d>-.25&&!this.crouching&&!f&&!a.firingRecently&&!a.using&&!this.building;this.sprinting=g;let x=this.crouching?e.crouchSpeed:g?e.sprintSpeed:e.walkSpeed;f&&(x*=e.adsSpeedMul),a.using&&(x*=.55),this.swimming&&(x*=.55),d<-.25&&(x*=.8);let m=l*x*u,p=c*x*u,v=(this.onGround||this.swimming?e.groundAccel:e.airAccel)*(u>0?1:1.25),w=m-this.vel.x,M=p-this.vel.z,y=Math.hypot(w,M),b=v*t;y>b&&(w=w/y*b,M=M/y*b),this.vel.x+=w,this.vel.z+=M,i.jumpPressed&&(this.jumpBuf=.12),this.jumpBuf=Math.max(0,this.jumpBuf-t),this.onGround?this.coyote=.1:this.coyote=Math.max(0,this.coyote-t),this.jumpBuf>0&&this.coyote>0&&!this.swimming&&!this.crouching&&(this.vel.y=e.jumpSpeed,this.onGround=!1,this.coyote=0,this.jumpBuf=0,this.game.audio?.jump(this),this.stepUpTaken=!1);let C=this.vel.x*t,_=this.vel.z*t,R=Math.hypot(C,_),T=Math.max(1,Math.ceil(R/.22));for(let z=0;z<T;z++)this.pos.x+=C/T,this.pos.z+=_/T,n.depenetrate(this.pos,this.radius,this.height,e.stepUp);let E=dt.half-6;this.pos.x=Wt(this.pos.x,-E,E),this.pos.z=Wt(this.pos.z,-E,E);let P=n.groundAt(this.pos.x,this.pos.z,this.pos.y+e.stepUp),L=P.y;this.groundCollider=P.collider;let I=s.waterLevelAt(this.pos.x,this.pos.z),U=I!==null?I-L:0,B=this.swimming;if(this.swimming=I!==null&&U>1.15&&(this.onGround||this.swimming||this.pos.y<I),this.swimming){let z=I-1.05;this.pos.y=te(this.pos.y,z,9,t),this.vel.y=0,this.onGround=!0,B||(this.game.fx?.splash(this.pos.x,I,this.pos.z,1.4),this.game.audio?.splash(this))}else{if(this.onGround&&(L>=this.pos.y-(e.stepUp+.05)?(this.pos.y=L,this.vel.y=0):this.onGround=!1),this.onGround)this.airTime=0;else{this.vel.y=Math.max(this.vel.y-e.gravity*t,-e.maxFallSpeed);let z=this.pos.y+this.vel.y*t;if(this.vel.y>0){let j=n.ceilingAt(this.pos.x,this.pos.z,this.pos.y+this.height);j<m_&&z+this.height>j&&(z=j-this.height,this.vel.y=0)}if(z<=L&&this.vel.y<=0){let j=-this.vel.y;z=L,this.vel.y=0,this.onGround=!0,this._landed(j)}this.pos.y=z,this.airTime+=t}B&&!this.swimming&&(this.onGround=!0)}if(this.onGround&&!this.swimming&&this.speedH>1.2){this.footstepDist+=this.speedH*t;let z=g?2.6:this.crouching?2.4:2;this.footstepDist>z&&(this.footstepDist=0,this.game.audio?.footstep(this))}}_landed(t){if(this.landImpact=le((t-5)/16),t>9&&this.game.audio?.land(this,t),t>8&&this.game.fx?.dust(this.pos.x,this.pos.y,this.pos.z,le(t/20)),t>Hn.fallDamageSpeed){let e=Math.round((t-Hn.fallDamageSpeed)*5);this.takeDamage(e,{cause:"fall",attacker:null})}}_freefall(t){let e=this.intent,i=Ku(this),n=this.game.terrain;this.freefallT+=t;let s=Wt(-this.aimPitch,.42,1.38),a=54+28*Math.sin(s),o=a*Math.cos(s)*.95,l=-a*Math.sin(s),c=-Math.sin(this.aimYaw),h=-Math.cos(this.aimYaw),u=1-Math.exp(-1.6*t);this.vel.x+=(c*o-this.vel.x)*u,this.vel.z+=(h*o-this.vel.z)*u,this.vel.y+=(l-this.vel.y)*(1-Math.exp(-2.2*t)),this.pos.addScaledVector(this.vel,t);let d=Math.max(i.groundAt(this.pos.x,this.pos.z,this.pos.y+2).y,0),f=this.pos.y-d;(e.glide&&this.freefallT>.8||f<Hn.glideOpenAltitude)&&(this.mode="glide",this.game.audio?.gliderOpen(this),this.game.onGlide?.(this))}_glide(t){let e=Ku(this),i=Wt(-this.aimPitch,.05,1),n=Math.sin(i),s=It(21,12,n),a=-It(7.2,19,n),o=-Math.sin(this.aimYaw),l=-Math.cos(this.aimYaw),c=1-Math.exp(-2.2*t);this.vel.x+=(o*s-this.vel.x)*c,this.vel.z+=(l*s-this.vel.z)*c,this.vel.y+=(a-this.vel.y)*c,this.pos.addScaledVector(this.vel,t);let h=dt.half-6;this.pos.x=Wt(this.pos.x,-h,h),this.pos.z=Wt(this.pos.z,-h,h);let d=e.groundAt(this.pos.x,this.pos.z,this.pos.y+1.2).y,f=this.game.terrain.waterLevelAt(this.pos.x,this.pos.z),g=f!==null?Math.max(d,f-1):d;this.pos.y<=g+.05&&(this.pos.y=g,this.mode="ground",this.onGround=!0,this.vel.set(this.vel.x*.3,0,this.vel.z*.3),this.landImpact=.4,this.game.audio?.land(this,6),this.game.fx?.dust(this.pos.x,this.pos.y,this.pos.z,.8),this.game.onLanded?.(this))}_facing(t){let e=this.game;if(this.mode==="freefall"||this.mode==="glide"){this.yaw=Mn(this.yaw,this.aimYaw,6,t);return}let i=this.wc;if(this.intent.aim&&this.isArmed||e.time<this.faceUntil||this.building||i.swinging||i.firingRecently||i.reloading)this.yaw=Mn(this.yaw,this.aimYaw,16,t);else if(this.speedH>.6){let s=Math.atan2(-this.vel.x,-this.vel.z);this.yaw=Mn(this.yaw,s,12,t)}else{let s=ks(this.yaw,this.aimYaw);Math.abs(s)>1.7&&(this.yaw=Mn(this.yaw,this.aimYaw,6,t))}}_syncModel(t){let e=this.model;e.root.position.copy(this.pos),e.root.rotation.y=this.yaw;let i=this.wc,n=Math.atan2(-this.vel.x,-this.vel.z),s=this.speedH>.4?ks(this.yaw,n):0,a=Wt(ks(this.yaw,this.aimYaw),-1.9,1.9),o=this._anim||(this._anim={});o.speed=this.speedH,o.moveAngle=s,o.onGround=this.onGround,o.crouch=this.crouching,o.sprint=this.sprinting,o.swim=this.swimming,o.mode=this.mode,o.aimPitch=this.aimPitch,o.aimYawRel=a,o.ads=this.intent.aim&&this.isArmed&&!i.reloading?1:0,o.fireKick=i.kick,o.reloadT=i.reloading?i.reloadT/i.reloadDur:-1,o.swingT=i.swinging?i.swingT/i.swingDur:-1,o.useT=i.using?i.useT/i.useDur:-1,o.building=this.building,o.emote=this.emoteT>0,o.landImpact=this.landImpact,o.hitFlinch=this.hitFlinch,o.deadT=this.deadT,o.deadDir=this.deadDir,e.update(t,o)}takeDamage(t,e={}){if(!this.alive||this.invulnerable||t<=0)return 0;let i=this.game;if(i.phase!=="match")return 0;let n=t,s=Math.min(this.shield,n);this.shield-=s,n-=s;let a=Math.min(this.health,n);return this.health-=a,this.hitFlinch=1,this.model.hitFlash(.8),this.lastDamageTime=i.time,e.attacker&&e.attacker!==this&&(this.lastDamager=e.attacker),this.wc.using&&e.cause!=="storm"&&this.wc.cancelUse?.(),i.onDamaged?.(this,s+a,s,a,e),this.health<=1e-4&&(this.health=0,i.eliminate(this,e)),s+a}heal(t,e){t>0&&(this.health=Math.min(wn.maxHealth,this.health+t)),e>0&&(this.shield=Math.min(wn.maxShield,this.shield+e))}hitVolumes(){let t=this.height,e,i;return this.mode==="freefall"?(e={x:this.pos.x,y:this.pos.y+1.2,z:this.pos.z,r:.28},i={x:this.pos.x,z:this.pos.z,r:.5,y0:this.pos.y+.2,y1:this.pos.y+1.3}):(e={x:this.pos.x,y:this.pos.y+t-.2,z:this.pos.z,r:.25},i={x:this.pos.x,z:this.pos.z,r:.42,y0:this.pos.y,y1:this.pos.y+t-.32}),{head:e,body:i}}_updateDead(t){this.deadT+=t;let e=this.model,i=this._anim||(this._anim={});if(i.mode="dead",i.deadT=this.deadT,i.deadDir=this.deadDir,i.speed=0,i.moveAngle=0,i.onGround=!0,i.crouch=!1,i.sprint=!1,i.swim=!1,i.aimPitch=0,i.aimYawRel=0,i.ads=0,i.fireKick=0,i.reloadT=-1,i.swingT=-1,i.useT=-1,i.building=!1,i.landImpact=0,i.hitFlinch=0,e.update(t,i),this.deadT>.8){let n=le(1-(this.deadT-.8)/.6);e.setFade(n),n<=0&&(e.root.visible=!1)}}};function Ku(r){return r.game.physics}var th=class extends Xr{constructor(t){super(t,{name:"You",outfit:jc,isPlayer:!0}),this.baseYaw=0,this.basePitch=0,this.recoilPitch=0,this.recoilYaw=0,this.sens=1,this.interact=null,this.emoteT=0}spawnAt(t,e,i,n=0){super.spawnAt(t,e,i,n),this.baseYaw=n,this.basePitch=-.1,this.aimYaw=n,this.aimPitch=this.basePitch}applyRecoil(t){let e=t.recoil*.0095;this.recoilPitch+=e*(.8+Math.random()*.4),this.recoilYaw+=(Math.random()-.5)*e*.8,this.game.camera.addShake(t.id==="sniper"?.55:t.id==="pump"?.4:.07)}update(t){this.handleInput(t),super.update(t)}handleInput(t){let e=this.game,i=e.input,n=this.intent,s=this.alive&&e.phase==="match",a=i.enabled&&s&&!e.uiBlocking,o=i.consumeLook();if(a||!s&&i.enabled){let f=this.inv.current,g=f?.kind==="weapon"?Be[f.id]:null,m=n.aim&&g?Math.tan(g.fov*Math.PI/360)/Math.tan(78*Math.PI/360):1,p=.0022*this.sens*(.35+.65*m),v=o.x,w=o.y;i.key("ArrowLeft")&&(v-=900*t),i.key("ArrowRight")&&(v+=900*t),i.key("ArrowUp")&&(w-=700*t),i.key("ArrowDown")&&(w+=700*t),this.baseYaw-=v*p,this.basePitch=Wt(this.basePitch-w*p*(i.invertY?-1:1),-1.45,1.25)}this.recoilPitch=te(this.recoilPitch,0,3.6,t),this.recoilYaw=te(this.recoilYaw,0,3.6,t),this.aimYaw=this.baseYaw+this.recoilYaw,this.aimPitch=Wt(this.basePitch+this.recoilPitch,-1.5,1.35);for(let f of Object.keys(n))typeof n[f]=="boolean"&&(n[f]=!1);if(n.moveX=0,n.moveZ=0,!a){i.consumeWheel();return}let l=0,c=0;i.key("KeyW")&&(c+=1),i.key("KeyS")&&(c-=1),i.key("KeyD")&&(l+=1),i.key("KeyA")&&(l-=1);let h=Math.sin(this.baseYaw),u=Math.cos(this.baseYaw);n.moveX=c*-h+l*u,n.moveZ=c*-u+l*-h;let d=Math.hypot(n.moveX,n.moveZ);if(d>1&&(n.moveX/=d,n.moveZ/=d),n.sprint=i.key("ShiftLeft")||i.key("ShiftRight"),n.crouch=i.key("ControlLeft")||i.key("KeyC")&&!this.building,n.jump=i.key("Space"),n.jumpPressed=i.pressed("Space"),n.glide=i.pressed("Space")||i.key("Space"),n.fire=i.mouse(0),n.firePressed=i.mousePress(0),n.aim=i.mouse(2)&&!this.building,n.reload=i.pressed("KeyR")&&!this.building,this.mode==="ground"){if(this.building){let f=e.build;(i.pressed("KeyZ")||i.pressed("Digit1"))&&f.selectPiece("wall"),(i.pressed("KeyX")||i.pressed("Digit2"))&&f.selectPiece("floor"),(i.pressed("KeyC")||i.pressed("Digit3"))&&f.selectPiece("ramp"),(i.pressed("KeyV")||i.pressed("Digit4"))&&f.selectPiece("roof"),i.pressed("KeyR")&&f.cycleMaterial(1);let g=i.consumeWheel();g&&f.cyclePiece(g>0?1:-1),i.pressed("KeyQ")&&this.setBuilding(!1),(i.pressed("Digit5")||i.pressed("Digit6"))&&this.setBuilding(!1)}else{for(let g=0;g<6;g++)i.pressed(`Digit${g+1}`)&&this.inv.select(g)&&e.audio?.uiTick();let f=i.consumeWheel();f&&this.inv.cycle(f>0?1:-1)&&e.audio?.uiTick(),i.pressed("KeyQ")&&this.setBuilding(!0),i.pressed("KeyE")&&e.loot.interact(this),i.pressed("KeyG")&&e.dropSelected(this)}i.pressed("KeyB")&&this.onGround&&this.speedH<1.5&&!this.wc.using&&!this.swimming&&(this.emoteT=this.emoteT>0?0:60,e.audio?.uiTick())}else i.consumeWheel()}setBuilding(t){t!==this.building&&(t&&(this.mode!=="ground"||this.swimming)||(this.building=t,this.wc.cancelUse(),this.game.build.setActive(this,t),this.game.audio?.uiTick()))}};var eh=Math.PI*2,ih=(r,t,e,i)=>Math.atan2(-(e-r),-(i-t)),e0=new D;var i0={easy:{err:1.9,react:.55,turn:.75,dmg:.7,view:.8,aggr:.6},normal:{err:1,react:0,turn:1,dmg:.9,view:1,aggr:1},hard:{err:.55,react:-.12,turn:1.3,dmg:1,view:1.15,aggr:1.3}},nh=class extends Xr{constructor(t,{name:e,seed:i,difficulty:n="normal"}){let s=new Ae(i);super(t,{name:e,outfit:Qc(s)}),this.rng=s,this.diffName=n,this.D=i0[n]||i0.normal,this.skill=Wt(.3+s.float()*.6,0,1),this.damageScale=this.D.dmg,this.state="bus",this.thinkT=s.float()*.3,this.enemy=null,this.enemyVisible=!1,this.lastSeen={x:0,y:0,z:0,t:-99},this.reactT=0,this.burstLeft=0,this.burstPause=0,this.strafe=s.chance(.5)?1:-1,this.strafeT=0,this.aimErr={yaw:0,pitch:0,ty:0,tp:0,t:0},this.lootTarget=null,this.path=null,this.pathIdx=0,this.roamTarget=null,this.roamT=0,this.alert=null,this.switchCd=0,this.buildCd=s.range(1,4),this.stuckT=0,this.stuckCheck=0,this.lastPos=new D,this.unstick=0,this.unstickDir=0,this.dropTarget=null,this.jumpAt=.5,this.lootPhaseUntil=0,this.healing=!1,this.wantJump=0,this.avoidDir=0,this.avoidT=0,this.giveUp=0,this.pathGoal={x:0,z:0},this.pathY=0,this.pathRetryAt=0,this.noRoute=0,this.wpX=0,this.wpZ=0,this.wpSet=-9,this.wdT=0,this.wdFail=0,this.wdD=0,this.wdX=0,this.wdZ=0,this.ignore=new Map,this.elevated=!1,this.scanCd=s.float(),this.sprintMode=!0,this.inv.mats.wood=60+Math.floor(s.float()*240),this.inv.mats.stone=Math.floor(s.float()*140),this.inv.mats.metal=Math.floor(s.float()*90),this.targetPref=s.float()}planDrop(){let t=this.game,e=this.rng,s=t.terrain.layout.towns.map(f=>[f,(f.big?3.2:1.4)*(.5+e.float())]),a;if(e.chance(.18)){let f=e.range(0,eh),g=Math.sqrt(e.float())*340;a={x:Math.cos(f)*g,z:Math.sin(f)*g,pad:20}}else a=e.weighted(s);let o=e.range(0,eh),l=Math.sqrt(e.float())*(a.pad||30)*.7;this.dropTarget={x:a.x+Math.cos(o)*l,z:a.z+Math.sin(o)*l};let{s:c,perp:h}=t.bus.approach(this.dropTarget.x,this.dropTarget.z),u=Wt(h*.92+70,90,560),d=Math.sqrt(Math.max(0,u*u-h*h));this.jumpAt=Wt(c-d/t.bus.len,.06,.94)+(e.float()-.5)*.02}update(t){this.alive&&this.brain(t),super.update(t),this.alive&&this.syncAim()}syncAim(){let t=this.aimRay;this.eyePos(t.origin),Or.forward(this.aimYaw,this.aimPitch,t.dir),t.dirFromEye=t.dir}brain(t){let e=this.game,i=this.intent;for(let n of Object.keys(i))typeof i[n]=="boolean"&&(i[n]=!1);if(i.moveX=0,i.moveZ=0,this.mode==="bus"){this.state="bus",this.pos.copy(e.bus.position),e.bus.progress>=this.jumpAt&&this.leaveBus();return}if(this.mode==="freefall"||this.mode==="glide"){this.dropSteer(t);return}this.mode==="ground"&&((this.state==="bus"||this.state==="drop")&&(this.state="loot",this.lootPhaseUntil=e.time+28+this.rng.range(0,40)),this.switchCd=Math.max(0,this.switchCd-t),this.buildCd=Math.max(0,this.buildCd-t),this.thinkT-=t,this.thinkT<=0&&(this.thinkT=.18+this.rng.float()*.12,this.think()),this.act(t))}leaveBus(){let t=this.game,e=t.bus,i=e.position;this.jumpFromBus(i.x+this.rng.range(-2,2),i.y-4,i.z+this.rng.range(-2,2),e.yaw,e.dir.x*e.speed,e.dir.z*e.speed),this.model.root.visible=!0,this.state="drop",this.aimYaw=ih(this.pos.x,this.pos.z,this.dropTarget.x,this.dropTarget.z)}dropSteer(t){let e=this.dropTarget,i=e.x-this.pos.x,n=e.z-this.pos.z,s=Math.hypot(i,n),a=this.game.terrain.heightAt(e.x,e.z),o=this.pos.y-a-4,l=ih(this.pos.x,this.pos.z,e.x,e.z);this.aimYaw=Mn(this.aimYaw,l,3,t);let c=Math.atan2(Math.max(o,1),Math.max(s,4)),h=this.mode==="freefall"?.42:.06,u=this.mode==="freefall"?1.38:1;this.aimPitch=te(this.aimPitch,-Wt(c,h,u),4,t),this.mode==="freefall"&&o<Hn.glideOpenAltitude+25&&this.freefallT>3&&(this.intent.glide=!0)}think(){let t=this.game;this.perceive();let e=t.time;this.elevated=this.onGround&&this.pos.y-t.terrain.heightAt(this.pos.x,this.pos.z)>2.2&&!t.physics.overlaps(this.pos.x,this.pos.y,this.pos.z,.2,.2,0);let i=this.enemy&&this.enemy.alive&&(this.enemyVisible||e-this.lastSeen.t<3.5),n=t.storm;if(n.active&&n.isOutside(this.pos.x,this.pos.z)&&!this.enemyVisible){this.state="storm";return}if(this.enemyVisible&&this.hasUsableWeapon()){this.state!=="combat"&&(this.reactT=Math.max(.12,.28+(1-this.skill)*.55+this.D.react),this.strafeT=0),this.state="combat",this.wc.cancelUse(),this.healing=!1;return}if(i&&this.hasUsableWeapon()&&this.state==="combat"){this.state="hunt";return}if(this.state==="hunt"&&!i&&(this.state="roam"),!this.enemyVisible&&this.needsHealing()){this.state="heal";return}if(this.state==="heal"&&!this.needsHealing()&&(this.state="roam"),(this.state==="combat"||this.state==="hunt"||this.state==="storm")&&(this.state="roam"),this.state==="loot")this.game.time>this.lootPhaseUntil&&this.inv.hasWeapon()?this.state="roam":(!this.lootTarget||!this.lootTargetValid())&&(this.lootTarget=this.chooseLoot(),this.path=null,this.lootTarget?this.planPath(this.lootTarget):this.inv.hasWeapon()||t.time>this.lootPhaseUntil?this.state="roam":this.wander());else if(this.state==="roam"&&(!this.lootTarget||!this.lootTargetValid())){let a=this.chooseLoot(28);a&&(!this.inv.hasWeapon()||a.score>40)&&(this.lootTarget=a,this.planPath(a),this.state="loot",this.lootPhaseUntil=t.time+14)}!this.inv.hasWeapon()&&this.state==="roam"&&t.time<this.lootPhaseUntil+60&&(this.state="loot"),this.alert&&this.state==="roam"&&e-this.alert.t<8&&!this.enemyVisible&&(this.roamTarget={x:this.alert.x+this.rng.range(-8,8),z:this.alert.z+this.rng.range(-8,8)},this.roamT=6),this.equipBest()}hasUsableWeapon(){for(let t=1;t<6;t++){let e=this.inv.slots[t];if(e?.kind==="weapon"&&(e.mag>0||this.inv.ammo[Be[e.id].ammo]>0))return!0}return!1}needsHealing(){let t=this.health+this.shield;return!!(this.health<60&&(this.inv.countOf("bandage")||this.inv.countOf("medkit")||this.inv.countOf("chug"))||this.shield<40&&(this.inv.countOf("minishield")||this.inv.countOf("shield")||this.inv.countOf("chug"))&&this.game.time-this.lastDamageTime>3)}perceive(){let t=this.game,e=t.time,i=this.eyePos(e0),n=this.inv.current,a=(n?.kind==="weapon"&&n.id==="sniper"?240:115)*this.D.view,o=null,l=1e9,c=0,h=-Math.sin(this.aimYaw),u=-Math.cos(this.aimYaw),d=[];for(let g of t.actors){if(g===this||!g.alive||g.mode==="bus")continue;let x=g.pos.x-this.pos.x,m=g.pos.z-this.pos.z,p=x*x+m*m;if(p>a*a)continue;let v=Math.sqrt(p),w=(x*h+m*u)/Math.max(v,.1);v>30&&w<-.2&&this.enemy!==g||d.push([v,g])}d.sort((g,x)=>g[0]-x[0]);let f=null;for(let[g,x]of d){if(c++>=4)break;let m=x.chestPos(new D);if(t.physics.lineClear(i.x,i.y,i.z,m.x,m.y,m.z)){f=x;break}}f?(this.enemy=f,this.enemyVisible=!0,this.lastSeen.x=f.pos.x,this.lastSeen.y=f.pos.y,this.lastSeen.z=f.pos.z,this.lastSeen.t=e):(this.enemyVisible=!1,this.enemy&&!this.enemy.alive&&(this.enemy=null))}hear(t,e){this.enemyVisible||e===this||(this.alert={x:t.x,z:t.z,t:this.game.time,src:e},(this.state==="roam"||this.state==="loot")&&Math.hypot(t.x-this.pos.x,t.z-this.pos.z)<60&&this.rng.chance(.55*this.D.aggr)&&this.inv.hasWeapon()&&(this.roamTarget={x:t.x,z:t.z},this.roamT=8,this.state==="loot"&&this.lootTarget&&this.rng.chance(.5)&&(this.lootTarget=null,this.state="roam")))}lootTargetValid(){let t=this.lootTarget;if(!t)return!1;let e=t.type==="chest"?t.c.y:t.it.y;return this.onGround&&Math.abs(e-this.pos.y)>3.2?!1:t.type==="chest"?!t.c.opened:t.it.alive}chooseLoot(t=65){let e=this.game,i=e.loot,n=this.pos.x,s=this.pos.y,a=this.pos.z,o=null,l=0,c=this.inv.hasWeapon();for(let h of i.items){if(!h.alive||e.time<h.noPickupUntil||this.ignore.get(h)>e.time||h.floorLevel>0&&Math.abs(h.y-s)>1.5)continue;let u=h.x-n,d=h.z-a,f=Math.hypot(u,d);if(f>t||Math.abs(h.y-s)>4)continue;let g=this.valueOf(h.item,c);if(g<=0)continue;let x=g*10/(f+6);x>l&&(l=x,o={type:"loot",it:h,score:g})}if(!c||this.inv.weaponCount()<2)for(let h of i.chests){if(h.opened||this.ignore.get(h)>e.time||Math.abs(h.y-s)>3.2)continue;let u=Math.hypot(h.x-n,h.z-a);if(u>t)continue;let d=950/(u+6);d>l&&(l=d,o={type:"chest",c:h,score:95})}return o}valueOf(t,e){let i=this.inv;if(t.kind==="weapon"){if(!e)return 100+t.rarity*12;if(i.slots.some(a=>a?.kind==="weapon"&&a.id===t.id&&a.rarity>=t.rarity))return 0;if(i.freeSlot()>=0&&i.weaponCount()<3)return 70+t.rarity*10;let s=Math.min(...i.slots.filter(a=>a?.kind==="weapon").map(a=>a.rarity));return t.rarity>s+1?30:0}if(t.kind==="ammo")return i.slots.some(s=>s?.kind==="weapon"&&Be[s.id].ammo===t.id)&&i.ammo[t.id]<90?55:8;if(t.kind==="consumable"){let n=Ge[t.id];return i.freeSlot()<0&&i.findConsumable(t.id)<0?0:n.kind==="shield"||n.kind==="both"?i.countOf("shield")+i.countOf("minishield")<4?50:14:i.countOf("bandage")+i.countOf("medkit")<8?42:12}return 0}planPath(t){this.path=null,this.pathIdx=0,this.noRoute=0,this.pathRetryAt=0}computePath(t,e){let i=this.game,n=i.nav;if(!n.canQuery()){this.pathRetryAt=i.time+.05;return}let s=t,a=e,o=t-this.pos.x,l=e-this.pos.z,c=Math.hypot(o,l);c>100&&(s=this.pos.x+o/c*80,a=this.pos.z+l/c*80);let h=n.findPath(this.pos.x,this.pos.z,s,a);this.pathGoal={x:t,z:e},this.pathY=this.pos.y,this.pathIdx=0,h?(this.path=h,this.noRoute=0,this.pathRetryAt=0):(this.path=null,this.noRoute++,this.pathRetryAt=i.time+1.5)}followGoal(t,e,i={}){let n=this.game,s=i.stop??.9;if((!this.path||Math.hypot(this.pathGoal.x-t,this.pathGoal.z-e)>2.5||Math.abs(this.pos.y-this.pathY)>2.4)&&n.time>=this.pathRetryAt&&Math.hypot(t-this.pos.x,e-this.pos.z)>s+.5&&this.computePath(t,e),this.path){let o=this.path[this.pathIdx];for(;o&&Math.hypot(o.x-this.pos.x,o.z-this.pos.z)<(o.last?s:1);)o=this.path[++this.pathIdx];if(o)return this.moveTo(o.x,o.z,{...i,stop:o.last?s:.3}),Math.hypot(t-this.pos.x,e-this.pos.z);this.path=null}return this.moveTo(t,e,{...i,stop:s})}noProgress(){this.path=null,this.pathRetryAt=0,this.unstick=1,this.unstickDir=this.rng.chance(.5)?1:-1,this.wantJump=.5,++this.giveUp>=3&&(this.giveUp=0,this.abandonTarget())}abandonTarget(){let t=this.game.time,e=this.lootTarget;e&&this.ignore.set(e.type==="chest"?e.c:e.it,t+120),this.lootTarget=null,this.path=null,this.roamTarget=null,this.roamT=0,this.thinkT=0}buildingAt(t,e){for(let i of this.game.world.buildings)if(this.insideRect(t,e,i.rect))return i;return null}insideRect(t,e,i){return t>i.minX&&t<i.maxX&&e>i.minZ&&e<i.maxZ}wander(){if(this.roamT>0&&this.roamTarget)return;let t=this.rng.range(0,eh),e=20+this.rng.float()*40;this.roamTarget={x:this.pos.x+Math.cos(t)*e,z:this.pos.z+Math.sin(t)*e},this.roamT=5}pickRoamTarget(){let t=this.game,e=t.terrain,i=this.rng,n=t.storm,s=n.next||n.current,a,o,l=i.float();if(l<.35*this.D.aggr&&t.player.alive&&t.player.mode==="ground"){let h=t.player;Math.hypot(h.pos.x-this.pos.x,h.pos.z-this.pos.z)<220&&(a=h.pos.x+i.range(-25,25),o=h.pos.z+i.range(-25,25))}if(a===void 0)if(l<.65){let h=i.pick(e.layout.towns);a=h.x+i.range(-25,25),o=h.z+i.range(-25,25)}else{let h=i.range(0,eh),u=Math.sqrt(i.float())*Math.max(s.r*.8,6);a=s.x+Math.cos(h)*u,o=s.z+Math.sin(h)*u}let c=Math.hypot(a-s.x,o-s.z);if(c>s.r*.85){let h=s.r*.7/c;a=s.x+(a-s.x)*h,o=s.z+(o-s.z)*h}e.heightAt(a,o)<1&&(a=s.x,o=s.z),this.roamTarget={x:a,z:o},this.roamT=14+i.range(0,14)}bestSlotFor(t){let e=-1,i=-1e9;for(let n=1;n<6;n++){let s=this.inv.slots[n];if(s?.kind!=="weapon")continue;let a=Be[s.id],o=this.inv.ammo[a.ammo];if(s.mag<=0&&o<=0)continue;let l=s.rarity*6+a.dmg*a.pellets*a.rate*.02;a.id==="pump"?l+=t<14?55:t>30?-60:0:a.id==="sniper"?l+=t>85?60:t<30?-70:-10:a.id==="smg"?l+=t<25?22:-5:a.id==="ar"?l+=t>20&&t<120?30:8:a.id==="pistol"&&(l+=t<20?8:-10),s.mag<=0&&(l-=25),l>i&&(i=l,e=n)}return e}equipBest(t=40){if(this.switchCd>0||this.wc.using||this.wc.reloading)return;let e=this.bestSlotFor(t);e>=0&&this.inv.selected!==e&&(this.inv.select(e),this.switchCd=1.2)}act(t){let e=this.game,i=this.intent,n=e.time,s=this.inv.current;if(this.stuckCheck-=t,this.stuckCheck<=0){this.stuckCheck=.5;let a=Math.hypot(this.pos.x-this.lastPos.x,this.pos.z-this.lastPos.z),o=Math.hypot(i.moveX,i.moveZ)>.1;this.stuckT=o&&a<.3?this.stuckT+.5:0,this.lastPos.copy(this.pos),this.stuckT>=1&&(this.stuckT=0,this.noProgress())}if(this.unstick=Math.max(0,this.unstick-t),this.wdT-=t,this.wdT<=0){if(this.wdT=1.5,n-this.wpSet<.4&&Math.hypot(this.wpX-this.wdX,this.wpZ-this.wdZ)<.75){let o=Math.hypot(this.wpX-this.pos.x,this.wpZ-this.pos.z);this.wdFail=this.wdD-o<.8&&o>1.2?this.wdFail+1:0,this.wdD=o,this.wdFail>=3&&(this.wdFail=0,this.noProgress())}else this.wdFail=0,this.wdD=Math.hypot(this.wpX-this.pos.x,this.wpZ-this.pos.z);this.wdX=this.wpX,this.wdZ=this.wpZ}switch(this.state){case"combat":this.actCombat(t);break;case"hunt":this.actHunt(t);break;case"heal":this.actHeal(t);break;case"storm":this.actStorm(t);break;case"loot":this.actLoot(t);break;default:this.actRoam(t);break}if(this.wantJump>0&&(this.wantJump-=t,i.jump=!0,i.jumpPressed=!0),this.state!=="combat"&&s?.kind==="weapon"){let a=Be[s.id];s.mag<a.mag*.5&&this.inv.ammo[a.ammo]>0&&!this.wc.reloading&&(i.reload=!0)}}moveTo(t,e,i={}){let n=this.intent,s=t-this.pos.x,a=e-this.pos.z,o=Math.hypot(s,a);if(this.wpX=t,this.wpZ=e,this.wpSet=this.game.time,o<(i.stop??.6))return o;s/=o,a/=o;let l=Math.atan2(a,s),c=this.game.physics,h=this.game.terrain,u=(f,g)=>{let x=this.pos.x+Math.cos(f)*g,m=this.pos.z+Math.sin(f)*g;if(c.overlaps(x,this.pos.y+.05,m,this.radius*.95,this.height,.5))return"blocked";let p=c.groundAt(x,m,this.pos.y+.6).y,v=h.waterLevelAt(x,m);return v!==null&&v-p>.9&&!i.swim?"water":this.pos.y-p>3.2&&!i.reckless&&!this.elevated?"drop":"ok"},d=u(l,1.5);if(d!=="ok")if(d==="blocked"&&!c.overlaps(this.pos.x+Math.cos(l)*1.5,this.pos.y+1.05,this.pos.z+Math.sin(l)*1.5,this.radius*.95,this.height,.5)&&this.onGround)this.wantJump=Math.max(this.wantJump,.25);else{let f=[.6,-.6,1.2,-1.2,1.9,-1.9];this.avoidT>0&&f.sort((x,m)=>Math.sign(x)===this.avoidDir?-1:1);let g=!1;for(let x of f)if(u(l+x,1.5)==="ok"){l+=x,this.avoidDir=Math.sign(x),this.avoidT=.8,g=!0;break}g||(l+=this.avoidDir*2.2)}return this.avoidT=Math.max(0,this.avoidT-.016),this.unstick>0&&(l+=this.unstickDir*1.6),n.moveX=Math.cos(l)*(i.speed??1),n.moveZ=Math.sin(l)*(i.speed??1),o}facePoint(t,e,i,n=7){let s=ih(this.pos.x,this.pos.z,t,e);this.aimYaw=Mn(this.aimYaw,s,n,i)}actRoam(t){let e=this.intent,i=this.game;this.roamT-=t,(!this.roamTarget||this.roamT<=0||Math.hypot(this.roamTarget.x-this.pos.x,this.roamTarget.z-this.pos.z)<5)&&this.pickRoamTarget();let n=this.followGoal(this.roamTarget.x,this.roamTarget.z,{stop:3});this.noRoute>=2&&(this.noRoute=0,this.roamTarget=null,this.roamT=0),e.sprint=n>14,this.faceMove(t),this.aimPitch=te(this.aimPitch,-.05,6,t)}faceMove(t){let e=this.intent;if(Math.hypot(e.moveX,e.moveZ)>.1){let i=Math.atan2(-e.moveX,-e.moveZ);this.aimYaw=Mn(this.aimYaw,i,8,t)}}actLoot(t){let e=this.intent,i=this.game,n=this.lootTarget;if(!n){this.actRoam(t);return}let s=n.type==="chest"?n.c.x:n.it.x,a=n.type==="chest"?n.c.z:n.it.z,o=this.followGoal(s,a,{stop:.9});if(this.noRoute>=3){this.noRoute=0,this.abandonTarget();return}if(e.sprint=o>10,this.faceMove(t),Math.hypot(s-this.pos.x,a-this.pos.z)<1.6&&Math.abs((n.type==="chest"?n.c.y:n.it.y)-this.pos.y)<2.2){if(n.type==="chest")i.loot.openChest(n.c,this);else{let c=i.loot.pickup(this,n.it);c&&n.it.item.kind==="weapon"&&this.onWeaponPickup(n.it.item),c||(n.it.noPickupUntil=i.time+20)}this.lootTarget=null,this.path=null,this.thinkT=0}}onWeaponPickup(t){let e=Be[t.id];this.inv.addAmmo(e.ammo,Math.round(e.mag*(1.4+this.rng.float()))),(this.inv.current?.kind==="pickaxe"||this.rng.chance(.4))&&this.equipBest(30)}actHeal(t){let e=this.intent;if(this.aimPitch=te(this.aimPitch,0,5,t),this.wc.using){e.fire=!0,e.crouch=!0;return}let i=-1,s=this.shield<40&&this.health>=50?["shield","minishield","chug","medkit","bandage"]:["medkit","bandage","chug","minishield","shield"];for(let a of s){let o=this.inv.findConsumable(a);if(o<0)continue;let l=Ge[a];if(l.heal&&this.health<(l.healCap??100)||l.shield&&this.shield<(l.shieldCap??100)){i=o;break}}if(i<0){this.state="roam";return}if(this.inv.selected!==i){this.inv.select(i);return}e.fire=!0,e.crouch=!0}actStorm(t){let e=this.intent,n=this.game.storm.current,s=n.x-this.pos.x,a=n.z-this.pos.z,o=Math.hypot(s,a),l=Math.max(0,o-n.r*.6)/Math.max(o,1);this.moveTo(this.pos.x+s*l,this.pos.z+a*l,{stop:2,reckless:!0}),e.sprint=!0,this.faceMove(t),this.wc.using&&this.wc.cancelUse()}actHunt(t){let e=this.intent;this.moveTo(this.lastSeen.x,this.lastSeen.z,{stop:6}),e.sprint=!1,this.facePoint(this.lastSeen.x,this.lastSeen.z,t,6),this.aimPitch=te(this.aimPitch,0,5,t)}actCombat(t){let e=this.game,i=this.intent,n=this.D,s=this.enemy;if(!s||!s.alive){this.state="roam";return}let a=s.chestPos(e0),o=s.pos.x-this.pos.x,l=s.pos.z-this.pos.z,c=Math.hypot(o,l);this.equipBest(c);let h=this.inv.current;h?.kind!=="weapon"&&this.switchCd<=0&&this.equipBest(c);let u=h?.kind==="weapon"?Be[h.id]:null,d=u?u.id==="pump"?7:u.id==="smg"?13:u.id==="pistol"?15:u.id==="sniper"?75:26:10,f=this.pos.y+this.eyeHeight,g=ih(this.pos.x,this.pos.z,s.pos.x+s.vel.x*.05,s.pos.z+s.vel.z*.05),x=Math.atan2(a.y+.12-f,Math.max(c,.5)),m=this.aimErr;if(m.t-=t,m.t<=0){m.t=.28+this.rng.float()*.3;let L=Math.hypot(s.vel.x,s.vel.z),I=(.012+c*42e-5)*(1.6-this.skill)*n.err*(1+L*.06)*(this.wc.firingRecently?1.2:1);m.ty=(this.rng.float()-.5)*2*I,m.tp=(this.rng.float()-.5)*1.4*I}m.yaw=te(m.yaw,m.ty,5,t),m.pitch=te(m.pitch,m.tp,5,t);let p=(5.2+this.skill*7)*n.turn;this.aimYaw=Mn(this.aimYaw,g+m.yaw,p,t),this.aimPitch=te(this.aimPitch,Wt(x+m.pitch,-1.2,1.2),p,t);let v=Math.abs(ks(this.aimYaw,g));this.strafeT-=t,this.strafeT<=0&&(this.strafeT=.6+this.rng.float()*1.5,this.rng.chance(.65)&&(this.strafe*=-1),this.rng.chance(.12*(.4+this.skill))&&(this.wantJump=.2));let w=o/Math.max(c,.01),M=l/Math.max(c,.01),y=0;c>d+9?y=1:c<d-6?y=-.8:u?.id==="pump"&&c>6&&(y=.6);let b=-M*this.strafe,C=w*this.strafe,_=w*y+b*.85,R=M*y+C*.85,T=Math.hypot(_,R)||1;if(this.moveTo(this.pos.x+_/T*3,this.pos.z+R/T*3,{stop:.1,speed:1}),i.sprint=!1,i.crouch=u?.id==="sniper"&&c>60,u?.id==="sniper"&&c>40&&(i.moveX=i.moveZ=0),i.aim=!!u&&c>16&&this.reactT<=.25,this.reactT-=t,!u)return;if(this.buildCd<=0&&e.time-this.lastDamageTime<1.2&&c>7&&this.inv.mats.wood+this.inv.mats.stone+this.inv.mats.metal>=20&&this.rng.chance(.55)){this.buildCover(s),this.buildCd=6+this.rng.range(0,8);return}if(h.mag<=0&&!this.wc.reloading){this.inv.ammo[u.ammo]>0&&(i.reload=!0);return}if(this.wc.reloading||this.wc.equipping)return;let E=.05+.35/Math.max(c,4)+(u.id==="pump"?.05:0),P=c<u.range*.6&&(u.id!=="pump"||c<24)&&(u.id!=="sniper"||c>20);if(this.reactT>0||!P){i.fire=!1;return}if(!(v>E+.02)){if(this.burstPause-=t,this.burstLeft<=0&&this.burstPause<=0&&(this.burstLeft=u.auto?Math.round((3+this.rng.float()*6)*(u.id==="smg"?1.8:1)):u.id==="sniper"||u.id==="pump"?1:1+Math.round(this.rng.float()),this.burstPause=0),this.burstLeft>0){if(u.auto){i.fire=!0;let L=h.mag;this.wc.fireCd<=0&&L>0}else this.wc.fireCd<=0&&(i.fire=!0,i.firePressed=!0);(this.wc.fireCd<=0||u.auto)&&(this._lastMag!==void 0&&h.mag<this._lastMag&&(this.burstLeft-=this._lastMag-h.mag),this.burstLeft<=0&&(this.burstPause=(u.auto?.25+this.rng.float()*.6:.2)+(1-this.skill)*.5+(u.id==="sniper"?1.3:u.id==="pump"?.6:0)-n.react*.3))}this._lastMag=h.mag}}buildCover(t){let e=this.game,i=this.inv.mats.stone>=10?"stone":this.inv.mats.wood>=10?"wood":"metal",n=this.aimPitch;this.aimPitch=-.1,e.build.tryPlace(this,"wall",i)&&this.rng.chance(.35)&&e.build.tryPlace(this,"floor",i),this.aimPitch=n}takeDamage(t,e={}){let i=super.takeDamage(t,e);if(i>0&&this.alive&&e.attacker&&e.attacker!==this){let n=e.attacker;!this.enemyVisible&&n.alive&&(this.alert={x:n.pos.x,z:n.pos.z,t:this.game.time,src:n},this.enemy=n,this.lastSeen.x=n.pos.x,this.lastSeen.y=n.pos.y,this.lastSeen.z=n.pos.z,this.lastSeen.t=this.game.time,(this.state==="loot"||this.state==="roam"||this.state==="heal")&&(this.state="hunt",this.wc.cancelUse())),this.rng.chance(.25+this.skill*.3)&&(this.wantJump=.15)}return i}};var Ai=(r,t="0 0 32 32")=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}">${r}</svg>`,Je={person:Ai('<circle cx="16" cy="10" r="6" fill="#fff"/><path d="M4 28c0-7 5-11 12-11s12 4 12 11z" fill="#fff"/>'),skull:Ai('<path d="M16 2C8.8 2 4 7 4 13.5c0 4 2 6.6 4.5 8.2V27h4v-3h2v3h3v-3h2v3h4v-5.3c2.5-1.6 4.5-4.2 4.5-8.2C28 7 23.2 2 16 2z" fill="#fff"/><circle cx="11" cy="14" r="3.3" fill="#151a33"/><circle cx="21" cy="14" r="3.3" fill="#151a33"/><path d="M16 17l-2 4h4z" fill="#151a33"/>'),storm:Ai('<path d="M16 3C9 3 4 8.4 4 14.6c0 5.6 4 9 8.6 9.4L10 30l9-8h2.6C26 22 29 18.6 29 14.4 29 8.2 23.5 3 16 3z" fill="#e9c9ff"/><path d="M17.5 7l-5 8h4l-2 7 7-9h-4z" fill="#7a2bd6"/>'),wood:Ai('<rect x="3" y="7" width="26" height="8" rx="4" fill="#c98a3f"/><rect x="3" y="17" width="26" height="8" rx="4" fill="#e0a552"/><circle cx="25" cy="11" r="2.6" fill="#f3d39a"/><circle cx="25" cy="21" r="2.6" fill="#f3d39a"/><path d="M6 9.5h14M6 19.5h14" stroke="#a86a2a" stroke-width="1.5" stroke-linecap="round"/>'),stone:Ai('<path d="M4 22l4-11 9-6 10 7 2 12-8 5H10z" fill="#c9ccd4"/><path d="M8 11l9-6 10 7-9 4z" fill="#eceef3"/><path d="M18 16l9-4 2 12-8 5z" fill="#9aa0ad"/>'),metal:Ai('<path d="M16 3l3 2.5 3.8-.6 1.5 3.6 3.6 1.5-.6 3.8L29 16l-2.7 2.7.6 3.8-3.6 1.5-1.5 3.6-3.8-.6L16 29l-2.5-2.5-3.8.6-1.5-3.6-3.6-1.5.6-3.8L3 16l2.7-2.7-.6-3.8 3.6-1.5 1.5-3.6 3.8.6z" fill="#7fb4ff"/><circle cx="16" cy="16" r="5.2" fill="#0e1a3a"/><circle cx="16" cy="16" r="3" fill="#a9cfff"/>'),bulletLight:Ai('<rect x="12" y="4" width="8" height="18" rx="4" fill="#ffd84a"/><rect x="11" y="21" width="10" height="6" rx="1" fill="#c9a12c"/>'),bulletMedium:Ai('<path d="M12 4h8v10l-1 3h-6l-1-3z" fill="#ff9a3a"/><rect x="11" y="17" width="10" height="9" rx="1" fill="#c96f1c"/>'),bulletHeavy:Ai('<path d="M16 2l5 8v14a2 2 0 01-2 2h-6a2 2 0 01-2-2V10z" fill="#7ec8ff"/><rect x="10" y="22" width="12" height="6" rx="1" fill="#3f8ec9"/>'),bulletShells:Ai('<rect x="8" y="5" width="16" height="22" rx="3" fill="#ff5a4a"/><rect x="8" y="21" width="16" height="6" rx="2" fill="#e0b23b"/><rect x="8" y="12" width="16" height="2" fill="#a83326"/>'),wall:Ai('<rect x="6" y="3" width="20" height="26" fill="#e9eef8" stroke="#0e1a3a" stroke-width="2"/><path d="M6 11h20M6 19h20M14 3v8M22 11v8M14 19v10" stroke="#0e1a3a" stroke-width="1.6" fill="none"/>'),floor:Ai('<path d="M3 18l13-9 13 9-13 9z" fill="#e9eef8" stroke="#0e1a3a" stroke-width="2" stroke-linejoin="round"/><path d="M9.5 13.5l13 9M22.5 13.5l-13 9" stroke="#0e1a3a" stroke-width="1.4"/>'),ramp:Ai('<path d="M4 26V22L24 6h4v20z" fill="#e9eef8" stroke="#0e1a3a" stroke-width="2" stroke-linejoin="round"/><path d="M9 20l0 6M14 16l0 10M19 12l0 14" stroke="#0e1a3a" stroke-width="1.5"/>'),roof:Ai('<path d="M3 24L16 5l13 19z" fill="#e9eef8" stroke="#0e1a3a" stroke-width="2" stroke-linejoin="round"/><path d="M16 5v19M3 24l13-6 13 6" stroke="#0e1a3a" stroke-width="1.5" fill="none"/>'),build:Ai('<path d="M5 27V13l11-8 11 8v14z" fill="none" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/>')},rh={light:Je.bulletLight,medium:Je.bulletMedium,heavy:Je.bulletHeavy,shells:Je.bulletShells},no=r=>"data:image/svg+xml;utf8,"+encodeURIComponent(r);function An(r){let t=r.replace("#","");return`${parseInt(t.slice(0,2),16)},${parseInt(t.slice(2,4),16)},${parseInt(t.slice(4,6),16)}`}var qr=r=>An(Si[r].color),sh=class{constructor(t){this.renderer=t,this.cache=new Map,this.W=256,this.H=160,this.rt=new ze(this.W*2,this.H*2,{type:gi,samples:4}),this.scene=new Ss,this.scene.add(new Es(16777215,9082024,1.55));let e=new os(16777215,2.6);e.position.set(2,3,4),this.scene.add(e);let i=new os(10143999,1);i.position.set(-3,1,-2),this.scene.add(i),this.cam=new vn(-1,1,1,-1,.1,50),this.canvas=document.createElement("canvas"),this.canvas.width=this.W,this.canvas.height=this.H,this.ctx=this.canvas.getContext("2d"),this.tmp=document.createElement("canvas"),this.tmp.width=this.W*2,this.tmp.height=this.H*2,this.tctx=this.tmp.getContext("2d")}keyOf(t){return t.kind==="weapon"?`w:${t.id}:${t.rarity}`:t.kind==="pickaxe"?"pickaxe":`${t.kind}:${t.id}`}get(t){let e=this.keyOf(t),i=this.cache.get(e);return i||(i=this.render(t),this.cache.set(e,i)),i}render(t){let e=this.renderer,i=Br(t),n=new Yt;n.add(i),t.kind==="weapon"&&n.rotation.set(0,0,0),t.kind==="pickaxe"&&(n.rotation.z=-.9),(t.kind==="consumable"||t.kind==="ammo")&&n.rotation.set(.35,-.6,0),this.scene.add(n),n.updateMatrixWorld(!0);let s=new Bi().setFromObject(n),a=s.getSize(new D),o=s.getCenter(new D),l=t.kind==="weapon"||t.kind==="pickaxe"?new D(1,.32,.5):new D(.6,.55,1);l.normalize(),this.cam.position.copy(o).addScaledVector(l,6),this.cam.up.set(0,1,0),this.cam.lookAt(o),this.cam.updateMatrixWorld(!0);let c=this.cam.matrixWorldInverse,h=1e9,u=-1e9,d=1e9,f=-1e9,g=new D;for(let L of[s.min.x,s.max.x])for(let I of[s.min.y,s.max.y])for(let U of[s.min.z,s.max.z])g.set(L,I,U).applyMatrix4(c),h=Math.min(h,g.x),u=Math.max(u,g.x),d=Math.min(d,g.y),f=Math.max(f,g.y);let x=u-h,m=f-d,p=this.W/this.H,v=x/2*1.14,w=m/2*1.14;v/w<p?v=w*p:w=v/p;let M=(h+u)/2,y=(d+f)/2;this.cam.left=M-v,this.cam.right=M+v,this.cam.top=y+w,this.cam.bottom=y-w,this.cam.updateProjectionMatrix();let b=e.getRenderTarget(),C=e.getClearColor(new ot),_=e.getClearAlpha();e.setRenderTarget(this.rt),e.setClearColor(0,0),e.clear(),e.render(this.scene,this.cam);let R=new Uint8Array(this.W*2*this.H*2*4);e.readRenderTargetPixels(this.rt,0,0,this.W*2,this.H*2,R),e.setRenderTarget(b),e.setClearColor(C,_),this.scene.remove(n);let T=this.tctx.createImageData(this.W*2,this.H*2),E=this.W*2,P=this.H*2;for(let L=0;L<P;L++){let I=(P-1-L)*E*4,U=L*E*4;for(let B=0;B<E;B++){let z=R[I+B*4+3];if(z===0)continue;let j=z/255;for(let Z=0;Z<3;Z++){let O=R[I+B*4+Z]/255/j;O=Math.min(1,O),O=O<=.0031308?O*12.92:1.055*Math.pow(O,1/2.4)-.055,T.data[U+B*4+Z]=O*255}T.data[U+B*4+3]=z}}return this.tctx.putImageData(T,0,0),this.ctx.clearRect(0,0,this.W,this.H),this.ctx.imageSmoothingQuality="high",this.ctx.drawImage(this.tmp,0,0,this.W,this.H),this.canvas.toDataURL("image/png")}prerender(){this.get({kind:"pickaxe",id:"pickaxe"});for(let t of Ip)for(let e=0;e<Si.length;e++)this.get({kind:"weapon",id:t,rarity:e});for(let t of Object.keys(Ge))this.get({kind:"consumable",id:t});for(let t of Object.keys(ai))this.get({kind:"ammo",id:t})}};var ah=1024,oh=class{constructor(t){this.game=t,this.base=null,this.mini=null,this.compass=null,this.full=null,this.marker=null,this.miniSpan=250,this._span=250}bake(t){let e=ah,i=document.createElement("canvas");i.width=i.height=e;let n=i.getContext("2d");n.imageSmoothingQuality="high",n.drawImage(t.colorCanvas,0,0,e,e);let s=n.getImageData(0,0,e,e),a=s.data,o=t.terrain,l=dt.size/e;for(let h=0;h<e;h++){let u=-dt.half+(h+.5)*l;for(let d=0;d<e;d++){let f=-dt.half+(d+.5)*l,g=(h*e+d)*4,x=o.heightAt(f,u),m=o.waterLevelAt(f,u);if(m!==null){let p=m-x,v=le(p/14),w=1-de(0,1.2,p),M=It(120,22,v)+w*60,y=It(228,110,v)+w*25,b=It(214,205,v)+w*20;a[g]=Math.min(255,M),a[g+1]=Math.min(255,y),a[g+2]=Math.min(255,b)}else{let p=o.heightAt(f-7,u),v=o.heightAt(f+7,u),w=o.heightAt(f,u-7),M=o.heightAt(f,u+7),y=1+Wt((p-v+(w-M))*.045,-.35,.3);a[g]=Math.min(255,a[g]*y*1.04),a[g+1]=Math.min(255,a[g+1]*y*1.04),a[g+2]=Math.min(255,a[g+2]*y)}}}n.putImageData(s,0,0);let c=e/dt.size;for(let h of t.buildings){let u=h.rect,d=(u.minX+1.4+dt.half)*c,f=(u.minZ+1.4+dt.half)*c,g=(u.maxX-u.minX-2.8)*c,x=(u.maxZ-u.minZ-2.8)*c;n.fillStyle="rgba(30,34,50,.75)",n.fillRect(d-1,f-1,g+2,x+2),n.fillStyle="#f5efe4",n.fillRect(d,f,g,x)}this.base=i}attach(t,e,i){this.mini=t,this.compass=e,this.full=i}focus(){let t=this.game;if(t.phase==="match"&&t.bus?.active&&t.player.mode==="bus")return{x:t.bus.position.x,z:t.bus.position.z,yaw:t.bus.yaw};let i=t.viewActor||t.player;return{x:i.pos.x,z:i.pos.z,yaw:t.camera?.mode==="spectate"?t.camera.yaw:i.aimYaw}}drawStorm(t,e,i,n,s,a){let o=this.game.storm;if(!o||!o.active)return;let l=o.current,c=e(l.x),h=i(l.z),u=l.r*n;t.save(),t.beginPath(),t.rect(0,0,s,a),t.arc(c,h,Math.max(u,.01),0,zn,!0),t.fillStyle="rgba(150,50,235,.42)",t.fill("evenodd"),t.restore(),t.lineWidth=Math.max(2,s*.008),t.strokeStyle="rgba(190,110,255,.95)",t.beginPath(),t.arc(c,h,Math.max(u,.01),0,zn),t.stroke();let d=o.next;d&&(t.lineWidth=Math.max(2,s*.007),t.strokeStyle="#fff",t.setLineDash([s*.03,s*.018]),t.beginPath(),t.arc(e(d.x),i(d.z),Math.max(d.r*n,.01),0,zn),t.stroke(),t.setLineDash([]))}drawArrow(t,e,i,n,s,a=!0){let o=Math.atan2(-Math.cos(n),-Math.sin(n));if(t.save(),t.translate(e,i),t.rotate(o),a){let l=t.createRadialGradient(0,0,0,0,0,s*4.2);l.addColorStop(0,"rgba(255,255,255,.55)"),l.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=l,t.beginPath(),t.moveTo(0,0),t.arc(0,0,s*4.2,-.62,.62),t.closePath(),t.fill()}t.beginPath(),t.moveTo(s*1.15,0),t.lineTo(-s*.8,s*.78),t.lineTo(-s*.35,0),t.lineTo(-s*.8,-s*.78),t.closePath(),t.fillStyle="#fff",t.strokeStyle="#0b1230",t.lineWidth=s*.32,t.lineJoin="round",t.stroke(),t.fill(),t.restore()}drawMarker(t,e,i,n){t.save(),t.translate(e,i),t.beginPath(),t.moveTo(0,-n*1.3),t.lineTo(n*.8,0),t.lineTo(0,n*1.3),t.lineTo(-n*.8,0),t.closePath(),t.fillStyle="#ffe93b",t.strokeStyle="#0b1230",t.lineWidth=n*.35,t.stroke(),t.fill(),t.restore()}drawBus(t,e,i,n,s){let a=this.game.bus;if(!a||!a.active)return;t.save(),t.setLineDash([n*.02,n*.016]),t.strokeStyle="rgba(255,255,255,.85)",t.lineWidth=Math.max(2,n*.006),t.beginPath(),t.moveTo(e(a.start.x),i(a.start.z)),t.lineTo(e(a.end.x),i(a.end.z)),t.stroke(),t.setLineDash([]);let o=e(a.position.x),l=i(a.position.z);t.translate(o,l),t.rotate(Math.atan2(-Math.cos(a.yaw),-Math.sin(a.yaw))),t.fillStyle="#4aa8ff",t.strokeStyle="#0b1230",t.lineWidth=s*.3,t.beginPath(),t.roundRect(-s*1.3,-s*.7,s*2.6,s*1.4,s*.4),t.stroke(),t.fill(),t.fillStyle="#ffe93b",t.beginPath(),t.arc(s*.9,0,s*.3,0,zn),t.fill(),t.restore()}drawMini(t){let e=this.mini;if(!e||!this.base)return;let i=this.game,n=Math.min(2,window.devicePixelRatio||1),s=Math.round(e.clientWidth*n);if(s<10)return;e.width!==s&&(e.width=s,e.height=s);let a=e.getContext("2d"),o=this.focus(),c=i.player.mode==="bus"&&i.bus?.active?1150:i.player.mode==="freefall"||i.player.mode==="glide"?420:250;this._span=It(this._span,c,1-Math.exp(-4*(t||.016)));let h=this._span,u=s/h,d=b=>(b-o.x)*u+s/2,f=b=>(b-o.z)*u+s/2;a.fillStyle="#12508a",a.fillRect(0,0,s,s);let g=ah/dt.size,x=(o.x+dt.half-h/2)*g,m=(o.z+dt.half-h/2)*g,p=h*g,v=Math.max(0,x),w=Math.max(0,m),M=Math.min(ah,x+p),y=Math.min(ah,m+p);if(M>v&&y>w&&a.drawImage(this.base,v,w,M-v,y-w,(v-x)/p*s,(w-m)/p*s,(M-v)/p*s,(y-w)/p*s),this.drawBus(a,d,f,s,s*.03),this.drawStorm(a,d,f,u,s,s),this.marker){let b=d(this.marker.x),C=f(this.marker.z),_=s*.06;b=Wt(b,_,s-_),C=Wt(C,_,s-_),this.drawMarker(a,b,C,s*.032)}this.drawArrow(a,s/2,s/2,o.yaw,s*.035)}drawCompass(){let t=this.compass;if(!t)return;let e=Math.min(2,window.devicePixelRatio||1),i=Math.round(t.clientWidth*e),n=Math.round(t.clientHeight*e);if(i<10)return;(t.width!==i||t.height!==n)&&(t.width=i,t.height=n);let s=t.getContext("2d");s.clearRect(0,0,i,n);let a=this.game,o=this.focus(),l=(-o.yaw/Xa%360+360)%360,c=62,h=i/(c*2);s.font=`400 ${Math.round(n*.44)}px Anton, Impact, sans-serif`,s.textAlign="center",s.textBaseline="middle";let u={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"},d=s.createLinearGradient(0,0,i,0);d.addColorStop(0,"rgba(8,14,38,0)"),d.addColorStop(.15,"rgba(8,14,38,.55)"),d.addColorStop(.85,"rgba(8,14,38,.55)"),d.addColorStop(1,"rgba(8,14,38,0)"),s.fillStyle=d,s.fillRect(0,n*.12,i,n*.62);for(let m=Math.floor(l-c-1);m<=Math.ceil(l+c+1);m++){if(m%5!==0)continue;let p=i/2+(m-l)*h,v=1-de(.55,1,Math.abs(p-i/2)/(i/2)),w=(m%360+360)%360,M=w%45===0,y=w%15===0;s.globalAlpha=v,s.strokeStyle="#fff",s.lineWidth=Math.max(1.5,n*.045),s.beginPath(),s.moveTo(p,n*(M?.16:y?.24:.32)),s.lineTo(p,n*.42),s.stroke(),M?(s.fillStyle=w%90===0?"#ffe93b":"#fff",s.fillText(u[w],p,n*.7)):y&&(s.font=`400 ${Math.round(n*.3)}px Anton, Impact, sans-serif`,s.fillStyle="rgba(255,255,255,.8)",s.fillText(String(w),p,n*.66),s.font=`400 ${Math.round(n*.44)}px Anton, Impact, sans-serif`)}s.globalAlpha=1,s.fillStyle="#ffe93b",s.beginPath(),s.moveTo(i/2-n*.12,0),s.lineTo(i/2+n*.12,0),s.lineTo(i/2,n*.17),s.closePath(),s.fill();let f=(m,p)=>{let v=m-o.x,w=p-o.z;return(Math.atan2(v,-w)/Xa%360+360)%360},g=(m,p)=>{let v=(m-l+540)%360-180,w=i/2+Wt(v,-c+4,c-4)*h;p(w,Math.abs(v)>c-4)};this.marker&&g(f(this.marker.x,this.marker.z),m=>{this.drawMarker(s,m,n*.5,n*.16)});let x=a.storm;if(x?.active){let m=x.next||x.current;g(f(m.x,m.z),(p,v)=>{s.fillStyle=v?"#d5a1ff":"#b45cff",s.strokeStyle="#0b1230",s.lineWidth=n*.05,s.beginPath(),s.arc(p,n*.5,n*.12,0,zn),s.stroke(),s.fill()})}}drawFull(){let t=this.full;if(!t||!this.base)return;let e=this.game,i=Math.min(2,window.devicePixelRatio||1),n=Math.round(t.clientWidth*i);if(n<10)return;t.width!==n&&(t.width=n,t.height=n);let s=t.getContext("2d");s.drawImage(this.base,0,0,n,n);let a=u=>(u+dt.half)/dt.size*n,o=u=>(u+dt.half)/dt.size*n,l=n/dt.size;this.drawBus(s,a,o,n,n*.012),this.drawStorm(s,a,o,l,n,n),s.textAlign="center",s.textBaseline="middle";let c=Math.round(n*.026);s.font=`italic 800 ${c}px "Barlow Condensed", Impact, sans-serif`,s.lineJoin="round";for(let u of e.terrain.layout.towns){let d=a(u.x),f=o(u.z)-(u.big?n*.05:n*.035);s.lineWidth=c*.28,s.strokeStyle="rgba(8,14,38,.95)",s.strokeText(u.name.toUpperCase(),d,f),s.fillStyle="#fff",s.fillText(u.name.toUpperCase(),d,f)}s.font=`italic 700 ${Math.round(c*.8)}px "Barlow Condensed", Impact, sans-serif`;for(let u of e.terrain.layout.landmarks.concat(e.terrain.layout.peaks.filter(d=>d.name).map(d=>({x:d.x,z:d.z,name:d.name})))){let d=a(u.x),f=o(u.z)-n*.02;s.lineWidth=c*.24,s.strokeStyle="rgba(8,14,38,.9)",s.strokeText(u.name.toUpperCase(),d,f),s.fillStyle="#ffe8a0",s.fillText(u.name.toUpperCase(),d,f)}this.marker&&this.drawMarker(s,a(this.marker.x),o(this.marker.z),n*.014);let h=e.player;h.alive&&this.drawArrow(s,a(h.pos.x),o(h.pos.z),h.aimYaw,n*.014,!1)}fullToWorld(t,e){let i=this.full.getBoundingClientRect(),n=(t-i.left)/i.width*dt.size-dt.half,s=(e-i.top)/i.height*dt.size-dt.half;return{x:n,z:s}}};var Ri=r=>{let t=document.createElement("template");return t.innerHTML=r.trim(),t.content.firstChild},n0=[{id:"wall",name:"Wall",key:"Z",icon:Je.wall},{id:"floor",name:"Floor",key:"X",icon:Je.floor},{id:"ramp",name:"Ramp",key:"C",icon:Je.ramp},{id:"roof",name:"Roof",key:"V",icon:Je.roof}],x_={wood:Je.wood,stone:Je.stone,metal:Je.metal},lh=class{constructor(t,e){this.game=t,this.root=e,this.map=new oh(t),this.last={},this.floaters=[],this.floaterPool=[],this.dmgArrows=[],this.toastTimer=0,this._buildDom(),this.inv=-1,this.hitT=0,this._v=new D,this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){let t=Math.min(window.innerWidth/1920,window.innerHeight/1080);document.documentElement.style.setProperty("--u",`${Math.max(.5,t)}px`)}_buildDom(){let t=this.hud=Ri(`<div id="hud">
      <div id="feed"></div>
      <div id="compass"><canvas></canvas></div>
      <div id="banner"><div class="a"></div><div class="b"></div></div>
      <div id="topRight">
        <div id="stats">
          <div class="chip" id="chipAlive">${Je.person}<span class="n">30</span></div>
          <div class="chip" id="chipElims">${Je.skull}<span class="n">0</span></div>
        </div>
        <div id="mapBox"><canvas></canvas></div>
        <div id="stormChip">${Je.storm}<span class="t">0:00</span><span class="l">Storm</span></div>
      </div>
      <div id="vitals">
        <div class="bar shield"><div class="ghost"></div><div class="fill"></div><div class="seg"></div><span class="val">0</span></div>
        <div class="bar health"><div class="ghost"></div><div class="fill"></div><span class="val">100</span></div>
      </div>
      <div id="bottomRight">
        <div id="ammo" class="none"><img class="aicon" alt=""><span class="mag">0</span><span class="sep">/</span><span class="res">0</span><div class="rl"><i></i></div></div>
        <div id="buildHint">Q \u2014 Exit build &nbsp;\u2022&nbsp; Click \u2014 Place &nbsp;\u2022&nbsp; R \u2014 Material</div>
        <div id="mats"></div>
        <div id="hotbar"></div>
      </div>
      <div id="center">
        <div id="cross"><i class="h" style="left:0"></i><i class="h" style="left:0"></i><i class="v" style="top:0"></i><i class="v" style="top:0"></i><i class="dot"></i></div>
        <div id="hitmark"><i></i><i></i><i></i><i></i></div>
        <div id="reloadRing"><svg viewBox="0 0 70 70"><circle cx="35" cy="35" r="28" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="6"/><circle class="arc" cx="35" cy="35" r="28" fill="none" stroke="#ffe93b" stroke-width="6" stroke-dasharray="176" stroke-dashoffset="176" stroke-linecap="butt"/></svg></div>
        <div id="useBar"><div class="lbl">Using</div><div class="trk"><i></i></div></div>
      </div>
      <div id="prompt"><div class="top"></div><div class="row"><img alt=""><div><div class="sub"></div><div class="nm"></div><div class="stats"></div></div></div><div class="key"><kbd>E</kbd><span></span></div></div>
      <div id="toasts"></div>
      <div id="elimBanner"><div class="a">Eliminated</div><div class="b"></div><div class="c"></div></div>
      <div id="dropPrompt"><div class="a"></div><div class="b"></div></div>
      <div id="altimeter"><div class="n">0</div><div class="l">METRES</div></div>
    </div>`);this.root.append(Ri('<div id="floaters"></div>'),Ri('<div id="scope"></div>'),Ri('<div id="stormVig"></div>'),Ri('<div id="dmgVig"></div>'),Ri('<div id="dmgArrows"></div>'),t);let e=i=>t.querySelector(i);this.$={feed:e("#feed"),banner:e("#banner"),chipAlive:e("#chipAlive .n"),chipElims:e("#chipElims .n"),chipElimsBox:e("#chipElims"),chipAliveBox:e("#chipAlive"),shieldBar:e(".bar.shield"),healthBar:e(".bar.health"),shieldFill:e(".bar.shield .fill"),healthFill:e(".bar.health .fill"),shieldGhost:e(".bar.shield .ghost"),healthGhost:e(".bar.health .ghost"),shieldVal:e(".bar.shield .val"),healthVal:e(".bar.health .val"),ammo:e("#ammo"),ammoMag:e("#ammo .mag"),ammoRes:e("#ammo .res"),ammoIcon:e("#ammo .aicon"),ammoRl:e("#ammo .rl i"),mats:e("#mats"),hotbar:e("#hotbar"),cross:e("#cross"),hitmark:e("#hitmark"),reloadRing:e("#reloadRing"),reloadArc:e("#reloadRing .arc"),useBar:e("#useBar"),useLbl:e("#useBar .lbl"),useFill:e("#useBar .trk i"),prompt:e("#prompt"),promptImg:e("#prompt img"),promptSub:e("#prompt .sub"),promptNm:e("#prompt .nm"),promptStats:e("#prompt .stats"),promptKey:e("#prompt .key span"),promptTop:e("#prompt .top"),toasts:e("#toasts"),elim:e("#elimBanner"),elimB:e("#elimBanner .b"),elimC:e("#elimBanner .c"),dropPrompt:e("#dropPrompt"),dropA:e("#dropPrompt .a"),dropB:e("#dropPrompt .b"),altimeter:e("#altimeter"),altN:e("#altimeter .n"),stormChip:e("#stormChip"),stormT:e("#stormChip .t"),stormL:e("#stormChip .l"),scope:this.root.querySelector("#scope"),dmgVig:this.root.querySelector("#dmgVig"),stormVig:this.root.querySelector("#stormVig"),dmgArrows:this.root.querySelector("#dmgArrows"),floaters:this.root.querySelector("#floaters"),crossLines:[...e("#cross").children]};for(let i of Nr){let n=Ri(`<div class="mat" data-m="${i}">${x_[i]}<span class="n">0</span></div>`);this.$.mats.append(n)}this.matEls=[...this.$.mats.children],this.map.attach(e("#mapBox canvas"),e("#compass canvas"),null),this.slotEls=[];for(let i=0;i<6;i++){let n=Ri(`<div class="slot empty"><div class="in"><span class="num">${i+1}</span><img alt="" style="display:none"><span class="cnt"></span><div class="rbar" style="display:none"></div></div></div>`);this.$.hotbar.append(n),this.slotEls.push({root:n,img:n.querySelector("img"),cnt:n.querySelector(".cnt"),rbar:n.querySelector(".rbar")})}this.buildEls=[];for(let i=0;i<4;i++){let n=n0[i],s=Ri(`<div class="slot build" style="display:none"><div class="in">${n.icon}<span class="num">${n.key}</span><span class="cost">${wi.cost}</span></div></div>`);this.$.hotbar.append(s),this.buildEls.push(s)}for(let i=0;i<4;i++){let n=Ri('<div class="dmgArrow"></div>');this.$.dmgArrows.append(n),this.dmgArrows.push({el:n,t:0,yaw:0})}}setVisible(t){this.hud.classList.toggle("on",t)}reset(){let t=this.$;t.scope.classList.remove("on"),t.stormVig.style.opacity=0,t.dmgVig.style.transition="none",t.dmgVig.style.opacity=0;for(let e of this.dmgArrows)e.t=0,e.el.style.opacity=0;t.feed.innerHTML="",t.toasts.innerHTML="",clearTimeout(this._bt),t.banner.classList.remove("on"),t.elim.classList.remove("on"),t.prompt.classList.remove("on"),t.useBar.classList.remove("on"),t.hitmark.className="";for(let e of this.floaters)e.el.style.display="none",this.floaterPool.push(e);this.floaters.length=0,this.last={},this.inv=-1}setBuildMode(t){this.hud.classList.toggle("building",t),this.slotEls.forEach(e=>e.root.style.display=t?"none":""),this.buildEls.forEach(e=>e.style.display=t?"":"none"),this.inv=-1}toast(t,e="255,255,255"){let i=Ri(`<div class="toast" style="--r:${e}"><span class="dot"></span><span>${t}</span></div>`);for(this.$.toasts.append(i);this.$.toasts.children.length>3;)this.$.toasts.firstChild.remove();setTimeout(()=>i.classList.add("fade"),1700),setTimeout(()=>i.remove(),2200)}pickupToast(t,e){let i="255,255,255",n=Fc(t);t.kind==="weapon"?(i=qr(t.rarity),n=`${Si[t.rarity].name} ${n}`):t.kind==="consumable"?(i=An(Ge[t.id].color),n=`${n}${e>1?` \xD7${e}`:""}`):t.kind==="ammo"&&(i=An(ai[t.id].color),n=`${ai[t.id].name} +${e}`),this.toast(n,i)}banner(t,e="",i="",n=4200){let s=this.$.banner;s.querySelector(".a").textContent=t,s.querySelector(".b").textContent=e,s.className=`on ${i}`,clearTimeout(this._bt),this._bt=setTimeout(()=>s.classList.remove("on"),n)}feed(t,e=""){let i=Ri(`<div class="feedline ${e}">${t}</div>`);for(this.$.feed.append(i);this.$.feed.children.length>6;)this.$.feed.firstChild.remove();setTimeout(()=>i.classList.add("fade"),6500),setTimeout(()=>i.remove(),7100)}killFeed(t,e,i,n,s){let a=i?`<span class="w">${i}</span>`:"";t?this.feed(`<span class="k">${t}</span><span class="w">\u203A</span><span class="v">${e}</span>${a}`,n?"you":s?"died":""):this.feed(`<span class="v">${e}</span><span class="w">${i||"was eliminated"}</span>`,i==="Storm"?"storm":"")}elimBanner(t,e,i){let n=this.$.elim;this.$.elimB.textContent=t,this.$.elimC.textContent=`${e?e.toUpperCase():""}${i?` \u2022 ${i} ELIM${i>1?"S":""}`:""}`,n.classList.remove("on"),n.offsetWidth,n.classList.add("on"),this.$.chipElimsBox.classList.remove("bump"),this.$.chipElimsBox.offsetWidth,this.$.chipElimsBox.classList.add("bump")}hitMarker(t,e){let i=this.$.hitmark;i.className="",i.offsetWidth,i.className=`on ${e?"kill":t?"head":""}`}damageFlash(t){if(this.$.dmgVig.style.transition="none",this.$.dmgVig.style.opacity="0.9",requestAnimationFrame(()=>{this.$.dmgVig.style.transition="opacity .5s",this.$.dmgVig.style.opacity="0"}),t){let i=this.game.player,n=this.game.camera,a=Math.atan2(-(t.x-i.pos.x),-(t.z-i.pos.z))-n.yaw,o=this.dmgArrows.find(l=>l.t<=0)||this.dmgArrows[0];o.t=1.6,o.rel=a}let e=[this.$.healthBar,this.$.shieldBar];for(let i of e)i.classList.remove("flash"),i.offsetWidth,i.classList.add("flash")}pulseHeal(t){let e=t.shield?this.$.shieldBar:this.$.healthBar;e.classList.remove("healpulse"),e.offsetWidth,e.classList.add("healpulse")}addFloater(t,e,i,n,s,a){let o=this.floaterPool.pop();if(o||(o={el:Ri('<div class="floater"></div>'),x:0,y:0,z:0,t:0,vx:0},this.$.floaters.append(o.el)),o.el.textContent=n,o.el.className=`floater${s?" head":""}${a&&!s?" shield":""}`,o.x=t,o.y=e+.3,o.z=i,o.t=0,o.vx=(Math.random()-.5)*30,o.el.style.display="",this.floaters.push(o),this.floaters.length>24){let l=this.floaters.shift();l.el.style.display="none",this.floaterPool.push(l)}}matTick(t,e,i){if(!e)return;let n=this.matEls[Nr.indexOf(t)];if(!n)return;let s=Ri(`<div class="mattick${i?" crit":""}">+${e}</div>`);n.append(s),setTimeout(()=>s.remove(),900)}dropPrompt(t,e="",i=""){this.$.dropPrompt.classList.toggle("on",t),t&&(this.$.dropA.textContent=e,this.$.dropB.textContent=i)}altimeter(t,e=0){this.$.altimeter.classList.toggle("on",t),t&&(this.$.altN.textContent=Math.max(0,Math.round(e)))}update(t){let e=this.game,i=e.player;if(!i)return;let n=this.last,s=e.viewActor||i,a=Math.ceil(s.health),o=Math.ceil(s.shield);n.hp!==a&&(n.hp=a,this.$.healthVal.textContent=a,this.$.healthFill.style.width=`${Wt(a,0,100)}%`,this.$.healthGhost.style.width=`${Wt(a,0,100)}%`,this.$.healthBar.classList.toggle("low",a<=30)),n.sh!==o&&(n.sh=o,this.$.shieldVal.textContent=o,this.$.shieldFill.style.width=`${Wt(o,0,100)}%`,this.$.shieldGhost.style.width=`${Wt(o,0,100)}%`);let l=e.aliveCount,c=i.stats.kills;n.alive!==l&&(n.alive=l,this.$.chipAlive.textContent=l),n.elims!==c&&(n.elims=c,this.$.chipElims.textContent=c);let h=s.inv,u=`${s.building}|${e.build?.piece}|${e.build?.mat}`;(n.invVer!==h.version||n.buildSig!==u||n.iconsReady!==!!e.icons||n.viewId!==s.id)&&(n.invVer=h.version,n.buildSig=u,n.iconsReady=!!e.icons,n.viewId=s.id,this.refreshInventory(s)),this.refreshAmmo(s),this.updateCrosshair(i,t);let d=i.wc;if(d.using){let f=Ge[i.inv.slots[d.useSlot]?.id]||{};this.$.useBar.classList.add("on"),this.$.useLbl.textContent=`${f.name||"Using"}`,this.$.useFill.style.width=`${le(d.useT/d.useDur)*100}%`}else this.$.useBar.classList.remove("on");d.reloading&&i.alive?(this.$.reloadRing.classList.add("on"),this.$.reloadArc.style.strokeDashoffset=`${176*(1-le(d.reloadT/d.reloadDur))}`,this.$.ammo.classList.add("reloading"),this.$.ammoRl.style.width=`${le(d.reloadT/d.reloadDur)*100}%`):(this.$.reloadRing.classList.remove("on"),this.$.ammo.classList.remove("reloading")),this.$.scope.classList.toggle("on",e.camera.scopeT>.85&&i.alive),this.updateStorm(i),this.updatePrompt(i),this.map.drawMini(t),this.map.drawCompass(),this.updateFloaters(t);for(let f of this.dmgArrows)f.t>0?(f.t-=t,f.el.style.opacity=le(f.t/1.2),f.el.style.transform=`rotate(${(f.rel??0)*180/Math.PI}deg)`):f.el.style.opacity=0}refreshInventory(t){let e=this.game,i=t||e.viewActor||e.player,n=i.inv,s=e.icons;if(i.building){let a=e.build;this.buildEls.forEach((o,l)=>{let c=n0[l];o.classList.toggle("sel",a.piece===c.id),o.style.setProperty("--r",An(Ur[a.mat].color)),o.classList.remove("empty");let h=n.mats[a.mat]>=wi.cost;o.querySelector(".cost").style.color=h?"#fff":"#ff7a7a",o.querySelector(".cost").textContent=wi.cost})}else for(let a=0;a<6;a++){let o=n.slots[a],l=this.slotEls[a],c=l.root;if(c.classList.toggle("sel",n.selected===a),!o){c.classList.add("empty"),l.img.style.display="none",l.cnt.textContent="",l.rbar.style.display="none",c.style.removeProperty("--r");continue}c.classList.remove("empty");let h="160,170,190",u=null,d="";o.kind==="weapon"?(h=qr(o.rarity),u=s?.get(o)):o.kind==="pickaxe"?(h="170,180,200",u=s?.get(o)):(h=An(Ge[o.id].color),u=s?.get(o),d=o.count>1?o.count:o.count===1?"1":""),c.style.setProperty("--r",h),l.rbar.style.display=o.kind==="pickaxe"?"none":"",u&&(l.img.src=u,l.img.style.display=""),l.cnt.textContent=d}Nr.forEach((a,o)=>{let l=this.matEls[o];l.querySelector(".n").textContent=n.mats[a],l.classList.toggle("sel",i.building&&e.build.mat===a),l.classList.toggle("empty",n.mats[a]<wi.cost)})}refreshAmmo(t){let e=t.inv.current,i=this.$;if(e?.kind==="weapon"&&!t.building){let n=Be[e.id],s=t.inv.ammo[n.ammo],a=`${e.mag}|${s}|${n.ammo}`;this.last.ammoKey!==a&&(this.last.ammoKey=a,i.ammoMag.textContent=e.mag,i.ammoRes.textContent=s,i.ammoIcon.src=no(rh[n.ammo]),i.ammo.classList.toggle("low",n.mag>1?e.mag<=Math.ceil(n.mag*.25):e.mag===0)),i.ammo.classList.remove("none")}else i.ammo.classList.add("none")}updateCrosshair(t,e){let i=this.game,n=t.inv.current,s=this.$,a=n?.kind==="weapon",o=t.intent.aim&&a&&i.camera.scopeT<.5,l=!t.alive||t.building||t.mode!=="ground"||i.camera.scopeT>.5||t.swimming||t.wc.using;if(s.cross.classList.toggle("hide",l),l)return;let c=s.crossLines[4],h=7;if(a){let v=Bs(n),w=t.wc.currentSpread(v),M=window.innerHeight,y=Math.tan(w)/Math.tan(i.camera.fov*Math.PI/360)*(M/2);h=Math.max(5,y+4)}else h=3;this.gapS=te(this.gapS??h,h,22,e);let u=this.gapS,d=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--u"))||1,[f,g,x,m]=s.crossLines,p=a?"":"none";f.style.display=g.style.display=x.style.display=m.style.display=p,f.style.left=`${-u-11*d}px`,g.style.left=`${u}px`,x.style.top=`${-u-11*d}px`,m.style.top=`${u}px`,c.style.display="",c.style.opacity=o||!a?1:.9}updateStorm(t){let e=this.game.storm,i=this.$;if(!e||!e.active){i.stormT.textContent="--",i.stormL.textContent="Storm",i.stormChip.classList.remove("out");return}let n=pc(e.timer),s=e.state==="wait"?"Storm forms":e.state==="shrink"?"Shrinking":"Final circle",a=e.isOutside(t.pos.x,t.pos.z),o=`${n}|${s}|${a}`;this.last.stormKey!==o&&(this.last.stormKey=o,i.stormT.textContent=e.state==="final"?"--":n,i.stormL.textContent=a?`In storm  ${e.dps} dmg`:s,i.stormChip.classList.toggle("out",a));let l=a&&t.alive?1:0;this.last.vig!==l&&(this.last.vig=l,i.stormVig.style.opacity=l)}updatePrompt(t){let e=this.game,i=this.$,n=null;if(t.alive&&t.mode==="ground"&&!t.building&&!e.uiBlocking&&!t.wc.using&&(n=e.loot.promptFor(t)),!n){this.last.promptKey&&(this.last.promptKey="",i.prompt.classList.remove("on"));return}let s,a,o,l,c,h="Pick up",u=!0;if(n.type==="chest")s="255,194,51",a="Treasure",o="Chest",l="Contains loot",c=no(Je.build),h="Open";else{let f=n.it.item;if(u=n.ok,f.kind==="weapon"){let g=Bs(f);s=qr(f.rarity),a=Si[f.rarity].name,o=g.name;let x=Math.round(g.dmg*g.pellets*g.rate),m=f.mag!=null&&f.mag<g.mag?`${f.mag}/${g.mag}`:g.mag;l=`DMG ${Math.round(g.dmg)}${g.pellets>1?"\xD7"+g.pellets:""} \u2022 MAG ${m} \u2022 DPS ${x}`,c=e.icons?.get(f)}else if(f.kind==="consumable"){let g=Ge[f.id];s=An(g.color),a=g.kind==="shield"?"Shield":g.kind==="both"?"Full restore":"Healing",o=`${g.name}${f.count>1?" \xD7"+f.count:""}`,l=`${g.heal?"+"+g.heal+" HP ":""}${g.shield?"+"+g.shield+" Shield ":""}\u2022 ${g.use}s`,c=e.icons?.get(f)}else{let g=ai[f.id];s=An(g.color),a="Ammo",o=`${g.name} \xD7${f.count}`,l=`Reserve ${t.inv.ammo[f.id]} / ${g.cap}`,c=e.icons?.get(f)}u?n.swap&&(h="Swap"):h=n.reason||"Can't pick up"}let d=`${a}|${o}|${l}|${h}|${u}|${c?c.length:0}`;this.last.promptKey!==d&&(this.last.promptKey=d,i.prompt.style.setProperty("--r",s),i.promptSub.textContent=a,i.promptNm.textContent=o,i.promptStats.textContent=l,i.promptImg.src=c||"",i.promptKey.textContent=h,i.prompt.classList.toggle("blocked",!u),i.prompt.classList.add("on"))}updateFloaters(t){let e=this.game.gfx.camera,i=window.innerWidth,n=window.innerHeight;for(let s=this.floaters.length-1;s>=0;s--){let a=this.floaters[s];if(a.t+=t,a.t>.9){a.el.style.display="none",this.floaterPool.push(a),this.floaters.splice(s,1);continue}if(this._v.set(a.x,a.y+a.t*1.1,a.z).project(e),this._v.z>1||this._v.z<-1){a.el.style.opacity=0;continue}let o=(this._v.x*.5+.5)*i+a.vx*a.t*4,l=(-this._v.y*.5+.5)*n-a.t*30,c=a.t<.12?.6+a.t/.12*.7:1.3-Math.min(.3,(a.t-.12)*.5);a.el.style.transform=`translate(${o}px,${l}px) translate(-50%,-50%) scale(${c})`,a.el.style.opacity=a.t>.55?1-(a.t-.55)/.35:1}}};var Xn=r=>{let t=document.createElement("template");return t.innerHTML=r.trim(),t.content.firstChild},s0=["Build a ramp and wall to reach high ground \u2014 press Q to enter build mode.","Shields absorb damage before health. Pop a shield potion when the coast is clear.","Chests glow gold and hum when you are close. Press E to open them.","Headshots deal bonus damage. Aim for the head!","The storm shrinks in phases \u2014 keep an eye on the timer above the minimap.","Hit trees, rocks and cars with your pickaxe to gather materials.","Pump shotguns excel up close; snipers reward patience and a steady aim.","Steer your skydive with the mouse. Look down to dive faster, level out to glide farther.","Press M to open the map and place a waypoint."],v_=[["Move",["W","A","S","D"]],["Sprint",["Shift"]],["Jump / Glider",["Space"]],["Crouch",["C"]],["Fire",["LMB"]],["Aim",["RMB"]],["Reload",["R"]],["Pick up / Open",["E"]],["Select item",["1\u20136","Wheel"]],["Drop item",["G"]],["Build mode",["Q"]],["Wall / Floor / Ramp / Roof",["Z","X","C","V"]],["Material (build)",["R"]],["Dance",["B"]],["Inventory",["Tab"]],["Map / Waypoint",["M"]],["Pause",["Esc"]]],r0={sens:1,volume:.8,quality:"auto",invertY:!1,bots:29,difficulty:"normal",loadout:!1},ch=class{constructor(t,e){this.game=t,this.root=e,this.settings=this.loadSettings(),this._build()}loadSettings(){try{return{...r0,...JSON.parse(localStorage.getItem("stormfall.settings.v1")||"{}")}}catch{return{...r0}}}saveSettings(){try{localStorage.setItem("stormfall.settings.v1",JSON.stringify(this.settings))}catch{}}_build(){let t=this.root;this.loading=Xn('<div id="loading" class="screen on"><div class="logo">STORMFALL</div><div class="bar2"><i></i></div><div class="lbl">Loading\u2026</div><div class="tip"></div></div>'),this.title=Xn(`<div id="title" class="screen"><div class="wrap">
        <div class="logo">Stormfall<small>Royale</small></div>
        <div class="modes">Solo &nbsp;\u2022&nbsp; <span id="tPlayers">30</span> players &nbsp;\u2022&nbsp; Last one standing</div>
        <div class="row"><div class="btn primary" id="btnPlay"><span>Play</span></div></div>
        <div class="row" style="margin-top:calc(var(--u)*16)">
          <div class="btn small" id="btnDiff"><span>Bots: Normal</span></div>
          <div class="btn small" id="btnLoad"><span>Loadout: Fresh drop</span></div>
        </div>
        <div class="row" style="margin-top:calc(var(--u)*6)">
          <div class="btn small" id="btnSettings"><span>Settings</span></div>
          <div class="btn small" id="btnControls"><span>How to play</span></div>
        </div>
      </div>
      <div class="foot">Unofficial fan-made browser game \u2022 Best on desktop with keyboard &amp; mouse</div></div>`),this.overlay=Xn('<div id="overlay" class="screen"><div class="panel" id="overlayPanel"></div></div>'),this.end=Xn('<div id="endScreen" class="screen"></div>'),this.inv=Xn('<div id="invScreen" class="screen"><div class="panel"><h2>Inventory</h2><div class="invgrid"></div><div class="invfoot"><div class="ammoRow"></div><div class="ammoRow mats"></div></div><div class="hint" style="margin-top:calc(var(--u)*14);font-size:calc(var(--u)*22);letter-spacing:.12em;color:#a8c4ff;text-transform:uppercase">Tab to close \u2022 Click DROP to discard an item</div></div></div>'),this.map=Xn('<div id="mapScreen" class="screen"><div class="panel"><canvas></canvas><div class="hint">Click to place a waypoint \u2022 Right-click to clear \u2022 M to close</div></div></div>'),this.resume=Xn('<div id="resume" class="screen"><div class="a">Paused</div><div>Click to resume</div></div>'),this.confetti=Xn('<canvas id="confetti" class="hidden"></canvas>'),t.append(this.confetti,this.inv,this.map,this.end,this.overlay,this.resume,this.title,this.loading),this.q=e=>this.root.querySelector(e),this.tip=this.loading.querySelector(".tip"),this.bar=this.loading.querySelector(".bar2 i"),this.lbl=this.loading.querySelector(".lbl"),this.tip.textContent=s0[Math.floor(Math.random()*s0.length)],this.q("#btnPlay").onclick=()=>this.game.onPlay(),this.q("#btnDiff").onclick=()=>{let e=["easy","normal","hard"];this.settings.difficulty=e[(e.indexOf(this.settings.difficulty)+1)%3],this.saveSettings(),this.refreshTitle(),this.game.audio?.uiClick()},this.q("#btnLoad").onclick=()=>{this.settings.loadout=!this.settings.loadout,this.saveSettings(),this.refreshTitle(),this.game.audio?.uiClick()},this.q("#btnSettings").onclick=()=>{this.game.audio?.uiClick(),this.showSettings("title")},this.q("#btnControls").onclick=()=>{this.game.audio?.uiClick(),this.showControls("title")},this.resume.onclick=()=>this.game.resume(),this.map.querySelector("canvas").addEventListener("click",e=>{let i=this.game.hud.map.fullToWorld(e.clientX,e.clientY);this.game.setMarker(i.x,i.z)}),this.map.querySelector("canvas").addEventListener("contextmenu",e=>{e.preventDefault(),this.game.setMarker(null)}),this.refreshTitle()}refreshTitle(){let t=this.settings;this.q("#btnDiff span").textContent=`Bots: ${t.difficulty[0].toUpperCase()}${t.difficulty.slice(1)}`,this.q("#btnLoad span").textContent=`Loadout: ${t.loadout?"Practice":"Fresh drop"}`,this.q("#tPlayers").textContent=t.bots+1}setLoading(t,e){this.lbl.textContent=t,this.bar.style.width=`${Math.round(e*100)}%`}showLoading(t){this.loading.classList.toggle("on",t)}showTitle(t){this.title.classList.toggle("on",t),t&&this.refreshTitle()}showResume(t){this.resume.classList.toggle("on",t)}_panel(t){let e=this.q("#overlayPanel");return e.innerHTML=t,this.overlay.classList.add("on"),e}hideOverlay(){this.overlay.classList.remove("on"),this.overlayBack=null}get overlayOpen(){return this.overlay.classList.contains("on")}showPause(){this.overlayBack=null;let t=this._panel(`<h2>Paused</h2>
      <div class="row" style="flex-direction:column;align-items:flex-start;gap:calc(var(--u)*14)">
        <div class="btn" id="pResume"><span>Resume</span></div>
        <div class="btn" id="pSettings"><span>Settings</span></div>
        <div class="btn" id="pControls"><span>Controls</span></div>
        <div class="btn danger" id="pLeave"><span>Leave match</span></div>
      </div>`);t.querySelector("#pResume").onclick=()=>this.game.resume(),t.querySelector("#pSettings").onclick=()=>{this.game.audio?.uiClick(),this.showSettings("pause")},t.querySelector("#pControls").onclick=()=>{this.game.audio?.uiClick(),this.showControls("pause")},t.querySelector("#pLeave").onclick=()=>this.game.leaveMatch()}showControls(t){let e=v_.map(([n,s])=>`<div><span>${n}</span><span>${s.map(a=>`<kbd>${a}</kbd>`).join("")}</span></div>`).join(""),i=this._panel(`<h2>How to play</h2><div class="controls">${e}</div>
      <h3>Goal</h3><div style="font-size:calc(var(--u)*24);line-height:1.25;color:#dbe6ff;max-width:calc(var(--u)*900)">Jump from the Sky Bus, land, loot weapons, shields and healing, build cover with wood/stone/metal, and stay inside the shrinking storm circle. Eliminate every bot to earn the Victory Royale.</div>
      <div class="row" style="margin-top:calc(var(--u)*24)"><div class="btn small" id="back"><span>Back</span></div></div>`);i.querySelector("#back").onclick=()=>{this.game.audio?.uiClick(),t==="pause"?this.showPause():this.hideOverlay()},this.overlayBack=()=>i.querySelector("#back").click()}showSettings(t){let e=this.settings,i=this._panel(`<h2>Settings</h2>
      <div class="field"><span>Mouse sensitivity</span><div class="ctl"><input type="range" id="sSens" min="0.2" max="3" step="0.05" value="${e.sens}"><b id="vSens">${e.sens.toFixed(2)}</b></div></div>
      <div class="field"><span>Volume</span><div class="ctl"><input type="range" id="sVol" min="0" max="1" step="0.05" value="${e.volume}"><b id="vVol">${Math.round(e.volume*100)}</b></div></div>
      <div class="field"><span>Invert Y</span><div class="ctl"><div class="toggle ${e.invertY?"on":""}" id="sInv"></div></div></div>
      <div class="field"><span>Graphics</span><div class="ctl"><select id="sQual"><option value="auto">Auto</option><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select></div></div>
      <div class="field"><span>Bots (next match)</span><div class="ctl"><input type="range" id="sBots" min="5" max="49" step="1" value="${e.bots}"><b id="vBots">${e.bots}</b></div></div>
      <div class="field"><span>Bot difficulty</span><div class="ctl"><select id="sDiff"><option value="easy">Easy</option><option value="normal">Normal</option><option value="hard">Hard</option></select></div></div>
      <div class="field"><span>Practice loadout</span><div class="ctl"><div class="toggle ${e.loadout?"on":""}" id="sLoad"></div></div></div>
      <div class="row" style="margin-top:calc(var(--u)*24)"><div class="btn small" id="back"><span>Back</span></div></div>`);i.querySelector("#sQual").value=e.quality,i.querySelector("#sDiff").value=e.difficulty;let n=this.game;i.querySelector("#sSens").oninput=s=>{e.sens=+s.target.value,i.querySelector("#vSens").textContent=e.sens.toFixed(2),n.applySettings()},i.querySelector("#sVol").oninput=s=>{e.volume=+s.target.value,i.querySelector("#vVol").textContent=Math.round(e.volume*100),n.applySettings()},i.querySelector("#sBots").oninput=s=>{e.bots=+s.target.value,i.querySelector("#vBots").textContent=e.bots},i.querySelector("#sInv").onclick=s=>{e.invertY=!e.invertY,s.currentTarget.classList.toggle("on",e.invertY),n.applySettings()},i.querySelector("#sLoad").onclick=s=>{e.loadout=!e.loadout,s.currentTarget.classList.toggle("on",e.loadout)},i.querySelector("#sQual").onchange=s=>{e.quality=s.target.value,n.applySettings()},i.querySelector("#sDiff").onchange=s=>{e.difficulty=s.target.value},i.querySelector("#back").onclick=()=>{this.saveSettings(),this.refreshTitle(),n.audio?.uiClick(),t==="pause"?this.showPause():this.hideOverlay()},this.overlayBack=()=>i.querySelector("#back").click()}showInventory(t){this.inv.classList.toggle("on",t),t&&this.refreshInventory(!0)}get inventoryOpen(){return this.inv.classList.contains("on")}refreshInventory(t=!1){let e=this.game,i=e.player,n=e.icons,s=`${i.inv.version}|${i.inv.selected}`;if(!t&&s===this._invKey)return;this._invKey=s;let a=this.inv.querySelector(".invgrid");a.innerHTML="";for(let c=0;c<6;c++){let h=i.inv.slots[c],u;if(!h)u=`<div class="invitem empty"><span class="sn">${c+1}</span><div class="in"><div class="st">Empty slot</div></div></div>`;else{let d="160,170,190",f=Fc(h),g="",x=n?.get(h);if(h.kind==="weapon"){let m=Bs(h);d=qr(h.rarity),f=`${Si[h.rarity].name} ${m.name}`,g=`DMG ${Math.round(m.dmg)}${m.pellets>1?"\xD7"+m.pellets:""} \u2022 MAG ${h.mag}/${m.mag} \u2022 ${m.rate.toFixed(1)}/s`}else if(h.kind==="consumable"){let m=Ge[h.id];d=An(m.color),f=`${m.name} \xD7${h.count}`,g=`${m.heal?"+"+m.heal+" HP ":""}${m.shield?"+"+m.shield+" SH ":""}\u2022 ${m.use}s`}else g="Harvesting tool";u=`<div class="invitem" style="--r:${d}"><span class="sn">${c+1}</span><div class="in"><img src="${x||""}" alt=""><div><div class="nm">${f}</div><div class="st">${g}</div></div></div>${h.kind!=="pickaxe"?'<div class="drop" data-i="'+c+'">Drop</div>':""}</div>`}a.append(Xn(u))}a.onpointerdown=c=>{let h=c.target.closest?.(".drop");!h||c.button!==0||(c.preventDefault(),this.game.dropSlot(i,+h.dataset.i),this.refreshInventory(!0))};let o=this.inv.querySelector(".ammoRow");o.innerHTML=Object.keys(ai).map(c=>`<div class="ammoPill"><img src="${no(rh[c])}" style="width:calc(var(--u)*26)" alt=""><b>${i.inv.ammo[c]}</b></div>`).join("");let l=this.inv.querySelector(".mats");l.innerHTML=Nr.map(c=>`<div class="ammoPill" style="border-color:${Ur[c].color}88">${c==="wood"?Je.wood:c==="stone"?Je.stone:Je.metal.replace("<svg",'<svg style="width:26px;height:26px"')}<b>${i.inv.mats[c]}</b></div>`).join(""),l.querySelectorAll("svg").forEach(c=>{c.style.width="calc(var(--u)*26)",c.style.height="calc(var(--u)*26)"})}showMap(t){this.map.classList.toggle("on",t),t&&(this.game.hud.map.full=this.map.querySelector("canvas"),this.game.hud.map.drawFull())}get mapOpen(){return this.map.classList.contains("on")}showEnd(t,e){this.showInventory(!1),this.showMap(!1);let i=this.end;i.className=`screen on ${t}`;let n=(l,c)=>`<div class="stat"><div class="n">${l}</div><div class="l">${c}</div></div>`,s=e.shots?Math.round(e.hits/e.shots*100):0,a=`<div class="statrow">${n(e.kills,"Eliminations")}${n(Math.round(e.damage),"Damage dealt")}${n(pc(e.time),"Survived")}${n(s+"%","Accuracy")}</div>`;t==="win"?(i.innerHTML=`<div class="big">Victory<br>Royale</div><div class="place">#<b>1</b></div><div class="sub">You outlasted ${e.players-1} players</div>${a}
        <div class="row"><div class="btn primary" id="eAgain" style="font-size:calc(var(--u)*46)"><span>Play again</span></div><div class="btn" id="eMenu"><span>Main menu</span></div></div>`,this.startConfetti(!0)):i.innerHTML=`<div class="big">Eliminated</div><div class="place">You placed #<b>${e.place}</b></div><div class="sub">${e.by?`Eliminated by <span style="color:#ffe93b">${e.by}</span>${e.weapon?" \u2022 "+e.weapon:""}`:e.cause||"Better luck next time"}</div>${a}
        <div class="row"><div class="btn primary" id="eAgain" style="font-size:calc(var(--u)*46)"><span>Play again</span></div><div class="btn" id="eSpec"><span>Spectate</span></div><div class="btn" id="eMenu"><span>Main menu</span></div></div>`,i.querySelector("#eAgain").onclick=()=>this.game.onPlay(),i.querySelector("#eMenu").onclick=()=>this.game.toMenu();let o=i.querySelector("#eSpec");o&&(o.onclick=()=>this.game.spectate())}hideEnd(){this.end.className="screen",this.startConfetti(!1)}startConfetti(t){let e=this.confetti;if(this._confettiRaf&&cancelAnimationFrame(this._confettiRaf),!t){e.classList.add("hidden");return}e.classList.remove("hidden"),e.width=window.innerWidth,e.height=window.innerHeight;let i=e.getContext("2d"),n=["#ffe93b","#ff5a5f","#3aa0ff","#5fe36a","#c25bff","#ffffff","#ffa726"],s=Array.from({length:220},()=>({x:Math.random()*e.width,y:-Math.random()*e.height,vx:(Math.random()-.5)*3,vy:2+Math.random()*4,r:Math.random()*6.28,vr:(Math.random()-.5)*.3,w:6+Math.random()*8,h:10+Math.random()*12,c:n[Math.random()*n.length|0]})),a=()=>{i.clearRect(0,0,e.width,e.height);for(let o of s)o.x+=o.vx+Math.sin(o.y*.01)*.8,o.y+=o.vy,o.r+=o.vr,o.y>e.height+20&&(o.y=-20,o.x=Math.random()*e.width),i.save(),i.translate(o.x,o.y),i.rotate(o.r),i.fillStyle=o.c,i.fillRect(-o.w/2,-o.h/2,o.w,o.h*Math.abs(Math.cos(o.r*2))+2),i.restore();this._confettiRaf=requestAnimationFrame(a)};a()}};var hh=class{constructor(t,e,i){this.params=i,this.canvas=t,this.uiRoot=e,this.time=0,this.matchTime=0,this.phase="loading",this.paused=!1,this.uiBlocking=!1,this.actors=[],this.bots=[],this.aliveCount=0,this.finished=!1,this.playerDead=!1,this.spectating=!1,this.expectUnlock=!1,this.viewActor=null,this.frame=0,this.fpsEma=60,this.perfT=0,this.lastNow=performance.now(),this.menus=new ch(this,e);let n=this.menus.settings,s=i.get("quality")||(n.quality==="auto"?"high":n.quality);this.gfx=new Pr(t,{quality:s,maxPixelRatio:i.get("dpr")?+i.get("dpr"):1.75}),this.input=new dc(t),this.audio=new mc(this),this.autoQuality=n.quality==="auto"&&!i.get("quality"),this.input.onLockChange=a=>this.onLockChange(a)}async boot(){let t=this.menus;this.world=new kc(this.gfx,20240517),await this.world.build((e,i)=>t.setLoading(e,i*.86)),this.terrain=this.world.terrain,this.physics=this.world.physics,t.setLoading("Preparing systems\u2026",.88),await new Promise(e=>setTimeout(e,0)),this.fx=new Uc(this),this.combat=new Bc(this),this.loot=new zc(this),this.build=new Vc(this),this.nav=new Xc(this),this.physics.onChange=e=>this.nav.invalidate(e.minX,e.maxX,e.minZ,e.maxZ),this.storm=new qc(this),this.bus=new Yc(this),this.camera=new Or(this),this.cars=new Zc(this.world),this.cars.spawn(this.world.cars),this.player=new th(this),this.gfx.scene.add(this.player.model.root),this.hud=new lh(this,this.uiRoot),this.hud.map.bake(this.world),t.setLoading("Rendering icons\u2026",.95),await new Promise(e=>setTimeout(e,0)),this.icons=new sh(this.gfx.renderer),this.icons.prerender(),this.world.scatter.onRemoved=e=>{e.kind==="tree"&&this.audio?.treeFall(e.x,e.y,e.z)},this.applySettings(),this.phase="menu",this.camera.mode="menu",this.actors=[],t.setLoading("Ready",1),t.showLoading(!1),t.showTitle(!0),this.params.get("autostart")&&this.onPlay(),this.lastNow=performance.now(),requestAnimationFrame(e=>this.loop(e))}applySettings(){let t=this.menus.settings;this.input.sensitivity=t.sens,this.input.invertY=t.invertY,this.player&&(this.player.sens=t.sens),this.audio.setVolume(t.volume),this.autoQuality=t.quality==="auto"&&!this.params.get("quality");let e={high:1,medium:.85,low:.7,auto:this.gfx.renderScale}[t.quality]??1;t.quality!=="auto"&&this.gfx.setRenderScale(e),this.gfx.bloom&&(this.gfx.bloom.enabled=t.quality==="high"||t.quality==="auto")}onPlay(){this.audio.init(),this.audio.uiPlay(),this.menus.showTitle(!1),this.menus.hideEnd(),this.menus.hideOverlay(),this.menus.showResume(!1),this.startMatch(),this.input.requestLock()}onLockChange(t){if(!(this.phase!=="match"&&this.phase!=="over"))if(t){if(this.uiBlocking||this.paused||this.playerDeadScreen){this.expectUnlock=!0,this.input.exitLock();return}this.menus.showResume(!1)}else{if(this.expectUnlock){this.expectUnlock=!1;return}!this.paused&&!this.uiBlocking&&!this.playerDeadScreen&&!this.finished&&this.pause()}}releasePointer(){this.input.locked&&(this.expectUnlock=!0),this.input.exitLock()}pause(){this.paused||this.phase!=="match"||(this.paused=!0,this.pausedAt=performance.now(),this.input.enabled=!1,this.menus.showPause(),this.audio.suspend())}resume(){this.paused&&(this.menus.hideOverlay(),this.paused=!1,this.input.enabled=!0,this.audio.resume(),this.input.requestLock(),this.applySettings())}toMenu(){this.clearMatch(),this.menus.hideEnd(),this.menus.hideOverlay(),this.menus.showResume(!1),this.hud.setVisible(!1),this.player.model.root.visible=!1,this.phase="menu",this.paused=!1,this.camera.mode="menu",this.input.enabled=!1,this.input.exitLock(),this.menus.showTitle(!0),this.audio.resume()}leaveMatch(){this.paused=!1,this.toMenu()}toggleInventory(){if(this.menus.inventoryOpen){this.closeUi();return}this.menus.showMap(!1),this.uiBlocking=!0,this.releasePointer(),this.menus.showInventory(!0)}toggleMap(){if(this.menus.mapOpen){this.closeUi();return}this.menus.showInventory(!1),this.uiBlocking=!0,this.releasePointer(),this.menus.showMap(!0)}closeUi(){let t=this.menus.inventoryOpen||this.menus.mapOpen;this.menus.showInventory(!1),this.menus.showMap(!1),t&&(this.uiBlocking=!1,this.input.requestLock())}setMarker(t,e){this.hud.map.marker=t===null?null:{x:t,z:e},this.world.setMarker(t,e),this.hud.map.drawFull(),this.audio.uiClick()}spectate(){this.spectating=!0,this.menus.hideEnd(),this.menus.showInventory(!1),this.menus.showMap(!1),this.playerDeadScreen=!1,this.uiBlocking=!1,this.camera.mode="spectate",this.camera.target=this.pickSpectateTarget(),this.viewActor=this.camera.target,this.input.enabled=!0,this.input.requestLock(),this.hud.setVisible(!0),this.hud.banner("Spectating",this.camera.target?.name||"","",3e3)}pickSpectateTarget(){let t=this.player;if(t.lastDamager?.alive)return t.lastDamager;let e=null,i=1e9;for(let n of this.bots)if(n.alive){let s=n.pos.distanceToSquared(t.pos);s<i&&(i=s,e=n)}return e||t}clearMatch(){for(let t of this.actors)t!==this.player&&(this.gfx.scene.remove(t.model.root),t.model.root.traverse(e=>{e.isMesh&&e.geometry.dispose()}),t.model.material.dispose());this.actors=[],this.bots=[],this.loot?.clear(),this.build?.clear(),this.storm?.reset(1),this.bus&&(this.bus.active=!1,this.bus.model.visible=!1),this.finished=!1,this.playerDead=!1,this.playerDeadScreen=!1,this.spectating=!1,this.viewActor=null,this.hud?.map&&(this.hud.map.marker=null),this.world?.setMarker(null),this.hud?.setBuildMode(!1),this.hud?.dropPrompt(!1),this.hud?.altimeter(!1),this.uiBlocking=!1,this.expectUnlock=!1,this.menus.showInventory(!1),this.menus.showMap(!1),this.hud?.reset()}startMatch(){let t=this.menus.settings;this.clearMatch(),this.menus.showTitle(!1),this.phase="match",this.paused=!1,this.matchTime=0;let e=this.params.get("seed")?+this.params.get("seed"):Math.random()*1e9|0;this.matchSeed=e,this.world.scatter.reset(),this.cars.reset(),this.nav.reset(),this.loot.populate(this.world,e),this.bus.begin(e^2654435769),this.storm.reset(e^1374496523),this.storm.start(38);let i=this.player;i.inv=new Gr,i.inv.mats.wood=120,i.inv.mats.stone=60,i.inv.mats.metal=40,i.wc=new Wr(i),i.alive=!0,i.health=100,i.shield=0,i.mode="bus",i.stats={kills:0,damageDealt:0,shots:0,hits:0,placement:0,survived:0,heals:0},i.vel.set(0,0,0),i.deadT=0,i.landImpact=0,i.hitFlinch=0,i.building=!1,i.crouching=!1,i.swimming=!1,i.height=1.8,i.speedH=0,i.lastDamager=null,i.onGround=!1,i.model.setFade(1),i.model.root.visible=!1,i.model.root.rotation.set(0,0,0),i.pos.copy(this.bus.position),i.baseYaw=this.bus.yaw,i.basePitch=-.2,i.sens=t.sens,this.actors=[i],this.viewActor=i;let n=new Ae(e).shuffle([...Lp]),s=Wt(t.bots,1,60);for(let a=0;a<s;a++){let o=n[a%n.length];a>=n.length&&(o+=" "+(Math.floor(a/n.length)+1));let l=new nh(this,{name:o,seed:e+a*7919,difficulty:t.difficulty});this.gfx.scene.add(l.model.root),l.planDrop(),l.mode="bus",l.pos.copy(this.bus.position),this.bots.push(l),this.actors.push(l)}this.aliveCount=this.actors.length,(t.loadout||this.params.get("loadout"))&&this.giveLoadout(i),this.camera.mode="bus",this.camera.initialised=!1,this.camera.scoped=!1,this.camera.scopeT=0,this.hud.setVisible(!0),this.hud.setBuildMode(!1),this.hud.dropPrompt(!0,"Press SPACE to jump","Steer with the mouse \u2022 Look down to dive"),this.hud.banner("Sky Bus departing","Choose your landing spot","",4500),this.hud.map.marker=null,this.input.enabled=!0,this.uiBlocking=!1,this.menus.hideEnd()}giveLoadout(t){let e=t.inv;e.add({kind:"weapon",id:"ar",rarity:3,mag:30}),e.add({kind:"weapon",id:"pump",rarity:2,mag:5}),e.add({kind:"weapon",id:"sniper",rarity:2,mag:1}),e.add({kind:"consumable",id:"bandage",count:8}),e.add({kind:"consumable",id:"shield",count:2}),e.ammo.medium=180,e.ammo.shells=30,e.ammo.heavy=20,e.ammo.light=120,e.mats.wood=400,e.mats.stone=250,e.mats.metal=150,e.select(1),e.touch()}onDamaged(t,e,i,n,s){if(t.isPlayer){let a=s.attacker&&s.attacker!==t?s.attacker.pos:null;this.hud.damageFlash(a),this.audio.damageTaken(e,i>0&&t.shield<=0),this.camera.addShake(Wt(e/40,.15,.7))}}eliminate(t,e={}){if(!t.alive)return;t.alive=!1,t.mode="dead",t.deadT=0,t.deadDir=Math.random()<.5?-1:1,t.wc.cancelUse(),t.building=!1,t.stats.placement=this.aliveCount,t.stats.survived=this.matchTime,this.aliveCount--;let i=e.attacker&&e.attacker!==t?e.attacker:null;i&&i.stats.kills++;let n=t.inv.dropAll();for(let a of n)this.loot.drop(a,t.pos.x,t.pos.y,t.pos.z,null);this.fx.poof(t.pos.x,t.pos.y+.9,t.pos.z,t.model.outfit.shirt,1);let s=e.weapon||(e.cause==="storm"?"Storm":e.cause==="fall"?"Fall damage":"");i?this.hud.killFeed(i.name,t.name,s,i.isPlayer,t.isPlayer):this.hud.killFeed(null,t.name,e.cause==="storm"?"Storm":e.cause==="fall"?"Fall damage":"eliminated",!1,t.isPlayer),i?.isPlayer&&(this.hud.elimBanner(t.name,s,i.stats.kills),this.audio.hitConfirm(!1,!0,!1)),t.isPlayer&&(this.playerDead=!0,this.playerDeadAt=this.time,this.deathInfo={by:i?.name||null,weapon:s,cause:e.cause==="storm"?"Consumed by the storm":e.cause==="fall"?"Fell to their death":""},this.audio.eliminated(),this.camera.target=i?.alive?i:null,this.camera.spectYaw=this.camera.yaw,this.camera.spectPitch=-.3,this.camera.mode="spectate"),this.checkVictory()}checkVictory(){if(this.finished||this.phase!=="match"||this.aliveCount>1)return;this.finished=!0;let t=this.actors.find(e=>e.alive)||null;this.winner=t,this.finishAt=this.time,t?.isPlayer&&(t.stats.placement=1,t.stats.survived=this.matchTime,t.intent.moveX=t.intent.moveZ=0,t.wc.cancelUse(),t.building=!1,t.emoteT=60,t.model.setHeld(null),t.wc.heldKey="none")}noise(t,e,i){let n=e*e;for(let s of this.bots){if(!s.alive||s===i||s.mode!=="ground")continue;let a=s.pos.x-t.x,o=s.pos.z-t.z;a*a+o*o<n&&s.hear(t,i)}}harvest(t,e,i){let n=this.world,s=e.kind==="rock"?"stone":e.kind==="prop"?e.harvest||"metal":"wood",a=Math.random()<.18,o=Math.round((10+Math.random()*4)*(a?1.8:1));e.kind==="prop"?this.cars.hit(e,1):(e.hp-=(e.maxHp||100)/8,e.shake=.25,e.hp<=0&&n.scatter.remove(e));let l=t.inv.addMats(s,o);this.fx.impact(i.x,i.y,i.z,i.nx,i.ny,i.nz,s==="wood"?"wood":s==="stone"?"stone":"metal","harvest"),t.isPlayer&&this.hud.matTick?.(s,l,a)}dropSlot(t,e){if(e<=0)return;let i=t.inv.removeSlot(e);if(!i)return;let n=Math.sin(-t.aimYaw)*.6,s=-Math.cos(t.aimYaw)*.6;this.physics.lineClear(t.pos.x,t.pos.y+.9,t.pos.z,t.pos.x+n,t.pos.y+.9,t.pos.z+s,{bullets:!1,terrain:!1})||(n=0,s=0),this.loot.drop(i,t.pos.x+n,t.pos.y,t.pos.z+s,t.vel,t.aimYaw),t.isPlayer&&this.audio.uiTick()}dropSelected(t){this.dropSlot(t,t.inv.selected)}onGlide(t){}onLanded(t){t.isPlayer&&(this.hud.altimeter(!1),t.basePitch=Math.max(t.basePitch,-.2),t.baseYaw=t.aimYaw,this.hud.banner("Landed",t.inv.hasWeapon()?"Good luck!":"Find a weapon!","",2400))}debugGround(t,e,i=0){let n=this.player;this.bus.active=!1,this.bus.model.visible=!1;let s=this.physics.groundAt(t,e,1e3).y;n.mode="ground",n.onGround=!0,n.spawnAt(t,s,e,i),n.baseYaw=i,n.basePitch=-.1,n.model.root.visible=!0,this.camera.mode="follow",this.hud.dropPrompt(!1),this.hud.altimeter(!1);for(let a of this.bots)a.mode="bus",a.model.root.visible=!1,a.pos.set(0,400,0),a.jumpAt=2;return n}debugBot(t,e,i={}){let n=this.player,s=this.bots.find(c=>c.alive&&c.mode==="bus")||this.bots[0],a=n.pos.x+t,o=n.pos.z+e,l=this.physics.groundAt(a,o,1e3).y;return s.mode="ground",s.onGround=!0,s.spawnAt(a,l,o,i.yaw??Math.PI),s.model.root.visible=!0,s.state=i.state||"idle",s.jumpAt=2,s.brain=i.ai?Object.getPrototypeOf(s).brain:function(){let c=this.intent;for(let h of Object.keys(c))typeof c[h]=="boolean"&&(c[h]=!1);c.moveX=c.moveZ=0},s}loop(t){requestAnimationFrame(n=>this.loop(n));let e=(t-this.lastNow)/1e3;this.lastNow=t;let i=Math.min(.05,Math.max(5e-4,e));this.fpsEma=te(this.fpsEma,1/Math.max(e,5e-4),2,Math.min(e,.25)),this.params.get("manual")||(this.step(i),this.render()),this.frame++,window.__frames=this.frame,this.adaptQuality(e)}simulate(t,e=1/30){let i=Math.max(1,Math.round(t/e));for(let n=0;n<i;n++)this.step(e)}snapshot(){let t=this.player;return{phase:this.phase,time:+this.time.toFixed(2),match:+this.matchTime.toFixed(2),alive:this.aliveCount,player:t&&{mode:t.mode,alive:t.alive,pos:t.pos.toArray().map(e=>+e.toFixed(1)),hp:Math.round(t.health),sh:Math.round(t.shield),kills:t.stats.kills,sel:t.inv.selected,onGround:t.onGround,speed:+t.speedH.toFixed(2)},storm:this.storm&&{state:this.storm.state,r:Math.round(this.storm.current.r),t:Math.round(this.storm.timer)},bus:this.bus&&{active:this.bus.active,p:+this.bus.progress.toFixed(2)},bots:this.bots.map(e=>e.mode+":"+(e.alive?e.state:"dead")).reduce((e,i)=>(e[i]=(e[i]||0)+1,e),{})}}step(t){if(this.paused){this.input.pressed("Escape")&&performance.now()-this.pausedAt>400&&(this.menus.overlayBack?this.menus.overlayBack():this.resume()),this.world.update(t*.3,this.gfx.camera.position),this.input.endFrame();return}this.time+=t,this.phase==="menu"?this.updateMenu(t):this.phase==="match"&&this.updateMatch(t),this.input.endFrame()}updateMenu(t){this.input.pressed("Escape")&&this.menus.overlayOpen&&this.menus.overlayBack?.(),this.camera.update(t),this.world.update(t,this.gfx.camera.position),this.fx.update(t),this.storm.applyVisuals(t),this.updateIndoor(t),this.gfx.post.uTime.value=this.time,this.audio.updateAmbient(t)}updateMatch(t){let e=this.player,i=this.input;if(this.matchTime+=t,this.nav.queries=0,i.enabled&&!this.playerDeadScreen&&(i.pressed("Tab")&&e.alive&&this.toggleInventory(),i.pressed("KeyM")&&this.toggleMap(),i.freeLook&&i.pressed("Escape")&&(this.uiBlocking?this.closeUi():this.pause())),this.uiBlocking&&i.pressed("Escape")&&this.closeUi(),this.menus.inventoryOpen&&this.frame%20===0&&this.menus.refreshInventory(),this.menus.mapOpen&&this.frame%6===0&&this.hud.map.drawFull(),this.bus.update(t),this.storm.update(t),this.storm.applyDamage(t,this.actors),e.mode==="bus"&&e.alive){e.pos.copy(this.bus.position),e.aimYaw=e.baseYaw;let n=Math.max(0,(1-this.bus.progress)*this.bus.len/this.bus.speed);this.hud.dropPrompt(!0,"Press SPACE to jump",`Bus leaves the island in ${Math.ceil(n)}s \u2022 look down to dive`),e.handleInput(t),(i.pressed("Space")&&i.enabled&&!this.uiBlocking||this.bus.progress>.965||this.params.get("jumpnow"))&&this.playerJump(),this.camera.mode="bus"}for(let n of this.actors)n.update(t);if(this.separateActors(),this.actorSafety(),e.mode==="freefall"||e.mode==="glide"?(this.camera.mode="air",this.hud.altimeter(!0,e.pos.y-Math.max(0,this.terrain.heightAt(e.pos.x,e.pos.z)))):e.mode==="ground"&&e.alive?this.camera.mode!=="follow"&&(this.camera.mode="follow"):e.mode==="dead"&&this.camera.mode!=="spectate"&&(this.camera.mode="spectate"),this.camera.update(t),e.alive&&e.mode!=="bus"&&this.camera.computeAimRay(e),this.updateMeleeRay(e),this.build.update(t),this.loot.update(t,this.gfx.camera.position),this.world.update(t,this.gfx.camera.position),this.fx.update(t),this.storm.applyVisuals(t),this.updateIndoor(t),this.gfx.post.uTime.value=this.time,this.updateLod(),this.hud.update(t),this.audio.updateAmbient(t),this.playerDead&&!this.playerDeadScreen&&!this.spectating&&this.time-this.playerDeadAt>2){this.playerDeadScreen=!0,this.uiBlocking=!0,this.hud.setVisible(!1),this.releasePointer();let n=e.stats;this.menus.showEnd("lose",{place:n.placement||this.aliveCount+1,kills:n.kills,damage:n.damageDealt,time:n.survived||this.matchTime,shots:n.shots,hits:n.hits,players:this.actors.length,...this.deathInfo})}if(this.finished&&!this.endShown&&this.time-this.finishAt>1.4)if(this.endShown=!0,this.winner?.isPlayer){this.playerDeadScreen=!0,this.uiBlocking=!0,this.releasePointer(),this.audio.victory();let n=e.stats;this.hud.setVisible(!1),this.menus.showEnd("win",{kills:n.kills,damage:n.damageDealt,time:this.matchTime,shots:n.shots,hits:n.hits,players:this.actors.length})}else this.winner&&this.hud.banner(`${this.winner.name} wins`,"Match over","",6e3);this.finished||(this.endShown=!1)}updateMeleeRay(t){if(!t.alive||t.mode!=="ground")return;let e=t.aimRay,i=t.eyePos(this._eye||(this._eye=new D)),n=this.physics.raycast(e.origin.x,e.origin.y,e.origin.z,e.dir.x,e.dir.y,e.dir.z,40,{bullets:!1}),s=this._pt||(this._pt=new D);n.hit?s.set(n.x,n.y,n.z):s.copy(e.origin).addScaledVector(e.dir,40),e.point.copy(s),e.dirFromEye=(e.dirFromEye||new D).subVectors(s,i).normalize()}playerJump(){let t=this.player,e=this.bus;t.mode==="bus"&&(t.jumpFromBus(e.position.x,e.position.y-3,e.position.z,t.baseYaw,e.dir.x*e.speed,e.dir.z*e.speed),t.basePitch=-.75,t.model.root.visible=!0,this.hud.dropPrompt(!1),this.hud.altimeter(!0,e.position.y),this.camera.mode="air",this.audio.noiseJump?.())}separateActors(){let t=this.actors;for(let i=0;i<t.length;i++){let n=t[i];if(!(!n.alive||n.mode!=="ground"))for(let s=i+1;s<t.length;s++){let a=t[s];if(!a.alive||a.mode!=="ground")continue;let o=a.pos.x-n.pos.x,l=a.pos.z-n.pos.z;if(Math.abs(e(n,a))>1.5)continue;let c=o*o+l*l,h=n.radius+a.radius;if(c<h*h&&c>1e-6){let u=Math.sqrt(c),d=(h-u)*.5;n.pos.x-=o/u*d,n.pos.z-=l/u*d,a.pos.x+=o/u*d,a.pos.z+=l/u*d}}}function e(i,n){return i.pos.y-n.pos.y}}actorSafety(){for(let t of this.actors)if(t.alive){if(t.pos.y<-40){let e=this.terrain.heightAt(t.pos.x,t.pos.z);t.pos.y=Math.max(e,0)+1,t.vel.set(0,0,0)}Number.isFinite(t.pos.x+t.pos.y+t.pos.z)||(t.pos.set(0,20,0),t.vel.set(0,0,0))}}isIndoors(t,e,i){for(let n of this.world.buildings){let s=n.foot;if(t>s.minX&&t<s.maxX&&i>s.minZ&&i<s.maxZ&&e>n.floorY-.4&&e<n.top-.1)return!0}return!1}updateIndoor(t){let e=this.player,i=this.phase==="match"&&e&&e.alive&&e.mode==="ground"?e.pos:this.gfx.camera.position,n=this.isIndoors(i.x,i.y+.9,i.z)?1:0,s=this.gfx._indoor;this.gfx.setIndoor(s.k+(n-s.k)*(1-Math.exp(-6*t)))}updateLod(){let t=this.gfx.camera.position;for(let e of this.actors){if(e.isPlayer||!e.alive)continue;if(e.mode==="bus"){e.model.root.visible=!1;continue}let i=e.pos.distanceTo(t);e.model.root.visible=!0,e.model.setDetail(i>120?1:0);let n=i<55;e._shadow!==n&&(e._shadow=n,e.model.setShadows(n))}}render(){let t=this.gfx.camera,e=this._sunFocus||(this._sunFocus=new D);this.phase==="match"&&this.camera.mode!=="menu"?e.set(this.camera.pos.x,0,this.camera.pos.z):e.set(t.position.x,0,t.position.z),this.gfx.updateSun(e),this.gfx.post.uUnderwater.value=t.position.y<0&&this.terrain.heightAt(t.position.x,t.position.z)<t.position.y?.55:0,this.gfx.render()}adaptQuality(t){if(!this.autoQuality||(this.perfT+=t,this.perfT<2))return;this.perfT=0;let e=this.fpsEma,i=this.gfx;e<38&&i.renderScale>.56?i.setRenderScale(i.renderScale-.1):e>62&&i.renderScale<1&&i.setRenderScale(Math.min(1,i.renderScale+.05)),e<26&&i.bloom?.enabled&&(i.bloom.enabled=!1)}};function a0(r,t=null){let e=r.scene,i=new Dt(new zi(200,200),new Ne({color:8376635}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,e.add(i);let n=new Ae(7),s=[{name:"idle-ar",hold:"rifle",w:["ar",3],s:{}},{name:"run-ar",hold:"rifle",w:["ar",2],s:{speed:5.2,sprint:!1}},{name:"ads-ar",hold:"rifle",w:["ar",4],s:{ads:1,speed:0}},{name:"reload",hold:"rifle",w:["ar",1],s:{reloadT:.45}},{name:"sprint",hold:"rifle",w:["smg",0],s:{speed:7.4,sprint:!0}},{name:"pump",hold:"shotgun",w:["pump",3],s:{}},{name:"sniper-ads",hold:"sniper",w:["sniper",4],s:{ads:1}},{name:"pistol",hold:"pistol",w:["pistol",2],s:{}},{name:"pickaxe",hold:"melee",w:"pickaxe",s:{}},{name:"swing",hold:"melee",w:"pickaxe",s:{swingT:.42}},{name:"heal",hold:"consumable",w:"medkit",s:{useT:.3}},{name:"build",hold:"none",w:null,s:{building:!0}},{name:"crouch",hold:"rifle",w:["ar",1],s:{crouch:!0}},{name:"jump",hold:"rifle",w:["ar",1],s:{onGround:!1}},{name:"freefall",hold:"none",w:null,s:{mode:"freefall"}},{name:"glide",hold:"none",w:null,s:{mode:"glide"}},{name:"swim",hold:"none",w:null,s:{swim:!0,speed:2}},{name:"dead",hold:"none",w:null,s:{mode:"dead",deadT:1}}],a=[],o=t?t.length:6;return(t?t.map(c=>({p:s[c],i:c})):s.map((c,h)=>({p:c,i:h}))).forEach(({p:c,i:h},u)=>{let d=h===0?jc:Qc(n),f=new Vr(d);f.root.position.set((u%o-(o-1)/2)*(t?1.6:2.4),c.s.mode==="glide"?1.5:c.s.mode==="freefall"?1.2:0,-Math.floor(u/o)*3.2);let g=null;c.w==="pickaxe"?g=Bu():c.w==="medkit"?g=Ou("medkit"):c.w&&(g=Fu(c.w[0],c.w[1])),f.setHeld(g?{group:g,data:g.userData,hold:c.hold}:null),f.root.rotation.y=t?Math.PI*.72:Math.PI*.78,e.add(f.root),a.push({m:f,p:c})}),{update(c){for(let{m:h,p:u}of a)h.update(c,{speed:0,moveAngle:0,onGround:!0,crouch:!1,sprint:!1,swim:!1,mode:"ground",aimPitch:0,aimYawRel:0,ads:0,fireKick:0,reloadT:-1,swingT:-1,useT:-1,building:!1,landImpact:0,hitFlinch:0,deadT:0,...u.s}),h.setDetail(0)}}}var Yr=new URLSearchParams(location.search),o0=document.getElementById("game"),y_=document.getElementById("ui");function l0(r){console.error(r);let t=document.createElement("div");t.style.cssText='position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0b1230;color:#fff;font:600 22px "Barlow Condensed",Arial,sans-serif;text-align:center;padding:40px;z-index:999;pointer-events:auto',t.innerHTML=`<div style="font-size:54px;margin-bottom:12px">Something went wrong</div><div style="max-width:760px;opacity:.85">Stormfall Royale needs a browser with WebGL2 support (recent Chrome, Edge, Firefox or Safari) and hardware acceleration enabled.</div><pre style="margin-top:22px;max-width:900px;white-space:pre-wrap;font:14px monospace;opacity:.6">${String(r&&r.stack||r).slice(0,700)}</pre>`,document.body.append(t)}async function __(){if(Yr.get("view")==="chars"){let t=new Pr(o0,{quality:Yr.get("quality")||"high"}),e=Yr.get("only")?Yr.get("only").split(",").map(Number):null,i=a0(t,e),n=(Yr.get("cam")||"0,1.6,4,0,-0.1").split(",").map(Number);t.camera.position.set(n[0],n[1],n[2]),t.camera.rotation.set(n[4]||0,n[3]||0,0),t.updateSun(new D(0,0,0)),window.__game={gfx:t};let s=()=>{i.update(.016),t.render(),window.__frames=(window.__frames||0)+1,requestAnimationFrame(s)};s();return}let r=new hh(o0,y_,Yr);window.__game=r,await r.boot()}window.addEventListener("error",r=>{(!window.__game?.phase||window.__game.phase==="loading")&&l0(r.error||r.message)});__().catch(l0);})();
