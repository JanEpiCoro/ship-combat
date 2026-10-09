const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./tuningPanel-C1U5-5fg.js","./preload-helper-DwbO_SIf.js"])))=>i.map(i=>d[i]);
import{_ as e,b as t,c as n,d as r,f as i,g as a,h as o,l as s,m as c,n as l,p as u,s as d,t as f,u as p,v as m,x as h,y as g}from"./preload-helper-DwbO_SIf.js";import{$ as _,$n as v,A as y,An as b,Ar as x,At as S,B as C,Bn as w,Bt as T,C as E,Cn as D,Cr as O,Ct as k,Dr as ee,Dt as te,E as A,Er as j,Et as ne,F as re,Fn as M,Ft as ie,G as ae,Gn as oe,H as se,Hn as ce,I as le,In as ue,J as N,Jn as de,K as fe,L as pe,Ln as me,M as he,Mn as P,Mr as ge,N as _e,Nr as F,Nt as ve,O as ye,Or as be,Ot as xe,P as Se,Pn as Ce,Pr as I,Qn as L,R as we,S as Te,Sn as Ee,Sr as R,St as De,T as z,Tr as Oe,Tt as ke,U as B,Un as Ae,V as je,Vn as V,W as H,X as Me,Xn as Ne,Y as Pe,Yn as Fe,Z as Ie,Zn as Le,_ as Re,_n as ze,_r as Be,_t as Ve,a as He,ar as Ue,at as We,b as Ge,bn as Ke,br as qe,bt as Je,c as Ye,cr as Xe,ct as Ze,d as Qe,dr as $e,dt as et,er as tt,et as nt,f as rt,fr as U,ft as it,gn as at,gr as ot,gt as W,h as st,hr as ct,ht as lt,i as ut,ir as dt,j as ft,jn as pt,jr as mt,jt as ht,k as gt,kn as _t,kr as vt,kt as yt,l as bt,lr as xt,lt as St,m as Ct,mr as wt,mt as G,n as Tt,nr as Et,o as Dt,or as K,ot as Ot,p as kt,pr as At,pt as jt,qn as Mt,r as Nt,rr as Pt,s as Ft,sr as It,st as Lt,t as Rt,tr as zt,tt as Bt,u as Vt,ur as Ht,ut as Ut,v as Wt,vn as Gt,vr as Kt,vt as qt,w as Jt,wn as Yt,wr as Xt,wt as Zt,xn as Qt,xr as $t,xt as en,y as tn,yn as nn,yr as rn,yt as an,z as on,zn as sn,zt as cn}from"./crewModel-Bwut-8gB.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var ln=class{ctx=null;master=null;noise=null;charge=null;windGain=null;windLevel=0;whistleNode=null;enabled;constructor(e){this.enabled=e;let t=()=>this.unlock();for(let e of[`pointerdown`,`touchend`,`keydown`])window.addEventListener(e,t,{capture:!0});document.addEventListener(`visibilitychange`,()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.enabled&&this.ctx.resume())})}get ready(){return this.ctx!==null&&this.ctx.state===`running`}setEnabled(e){this.enabled=e,this.ctx&&this.master&&(this.master.gain.setTargetAtTime(+!!e,this.ctx.currentTime,.05),e&&this.ctx.resume())}unlock(){if(!this.ctx){let e=window.AudioContext??window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=+!!this.enabled;let t=this.ctx.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=4,this.master.connect(t).connect(this.ctx.destination),this.noise=this.makeNoise(2);let n=this.ctx.createBufferSource();n.buffer=this.ctx.createBuffer(1,1,22050),n.connect(this.ctx.destination),n.start(),this.startAmbient()}this.ctx.state!==`running`&&this.enabled&&this.ctx.resume()}cannon(e,t={}){let n=this.output(t);if(!n)return;let{t:r,dest:i}=n,a=e===`heavy`,o=e===`scatter`;this.tone(i,{type:`sine`,from:a?95:120,to:38,at:r,attack:.004,decay:a?.65:.4,gain:a?1.1:.8}),this.noiseBurst(i,{type:`lowpass`,from:o?4200:2e3,to:260,q:.7,at:r,attack:.002,decay:a?1.3:.8,gain:a?.95:.7}),this.noiseBurst(i,{type:`highpass`,from:2400,to:1800,q:.5,at:r,attack:.001,decay:o?.12:.07,gain:o?.6:.35}),this.noiseBurst(i,{type:`lowpass`,from:220,to:120,q:.5,at:r+.05,attack:.15,decay:a?2.2:1.4,gain:.35})}splash(e=1,t={}){let n=this.output({...t,volume:(t.volume??1)*(.5+.5*e)});if(!n)return;let{t:r,dest:i}=n;this.tone(i,{type:`sine`,from:190,to:70,at:r,attack:.003,decay:.25,gain:.5}),this.noiseBurst(i,{type:`bandpass`,from:1300,to:500,q:.8,at:r,attack:.01,decay:.7,gain:.8}),this.noiseBurst(i,{type:`highpass`,from:3500,to:2500,q:.4,at:r+.08,attack:.08,decay:1.1,gain:.25})}woodHit(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.tone(r,{type:`sine`,from:130,to:55,at:n,attack:.003,decay:.35,gain:1}),this.noiseBurst(r,{type:`bandpass`,from:900,to:600,q:1.4,at:n,attack:.002,decay:.5,gain:.9});for(let e=0;e<7;e++)this.noiseBurst(r,{type:`bandpass`,from:2400+Math.random()*1600,to:1800,q:3,at:n+.03+Math.random()*.3,attack:.001,decay:.03+Math.random()*.04,gain:.5})}sailTear(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.noiseBurst(r,{type:`bandpass`,from:2600,to:1100,q:1.1,at:n,attack:.008,decay:.2,gain:.45});for(let e=0;e<9;e++)this.noiseBurst(r,{type:`bandpass`,from:1800+Math.random()*2600,to:1400,q:5,at:n+e*.017+Math.random()*.008,attack:.001,decay:.02,gain:.3})}rockHit(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.tone(r,{type:`sine`,from:80,to:40,at:n,attack:.003,decay:.4,gain:.9}),this.noiseBurst(r,{type:`lowpass`,from:900,to:300,q:.7,at:n,attack:.004,decay:.8,gain:.7});for(let e=0;e<6;e++)this.noiseBurst(r,{type:`bandpass`,from:1500+Math.random()*1500,to:1200,q:4,at:n+.1+Math.random()*.5,attack:.001,decay:.03,gain:.25})}whistle(e,t={}){this.whistleNode?.stop(0);let n=this.output({...t,volume:(t.volume??1)*.35});if(!n)return;let{ctx:r,t:i,dest:a}=n,o=r.createOscillator();o.type=`sine`;let s=i+Math.max(0,e-1.6);o.frequency.setValueAtTime(1500,s),o.frequency.exponentialRampToValueAtTime(620,i+e);let c=r.createGain();c.gain.setValueAtTime(1e-4,s),c.gain.exponentialRampToValueAtTime(.5,i+e-.05),c.gain.exponentialRampToValueAtTime(1e-4,i+e+.02),o.connect(c).connect(a),o.start(s),o.stop(i+e+.05),this.whistleNode={stop:()=>{try{c.gain.cancelScheduledValues(r.currentTime),c.gain.setTargetAtTime(1e-4,r.currentTime,.02),o.stop(r.currentTime+.1)}catch{}}}}stopWhistle(){this.whistleNode?.stop(0),this.whistleNode=null}misfire(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;for(let e=0;e<4;e++)this.noiseBurst(r,{type:`bandpass`,from:700,to:400,q:1.5,at:n+e*.09,attack:.002,decay:.06,gain:.6});this.noiseBurst(r,{type:`bandpass`,from:3e3,to:600,q:1,at:n+.3,attack:.05,decay:.7,gain:.35}),this.tone(r,{type:`sine`,from:70,to:45,at:n+.35,attack:.01,decay:.3,gain:.6})}setWind(e){this.windLevel=Math.max(0,Math.min(1,e)),this.ctx&&this.windGain&&this.windGain.gain.setTargetAtTime(.02+.2*this.windLevel**1.5,this.ctx.currentTime,.8)}overboard(e={}){let t=this.output({...e,volume:(e.volume??1)*.3});if(!t)return;let{ctx:n,t:r,dest:i}=t,a=n.createOscillator();a.type=`sine`,a.frequency.setValueAtTime(1500,r),a.frequency.exponentialRampToValueAtTime(320,r+.95);let o=n.createOscillator();o.frequency.value=9;let s=n.createGain();s.gain.value=22,o.connect(s).connect(a.frequency);let c=n.createGain();c.gain.setValueAtTime(1e-4,r),c.gain.exponentialRampToValueAtTime(.7,r+.05),c.gain.setValueAtTime(.7,r+.8),c.gain.exponentialRampToValueAtTime(1e-4,r+1),a.connect(c).connect(i),a.start(r),o.start(r),a.stop(r+1.05),o.stop(r+1.05)}kill(){let e=this.output({volume:.3});e&&[659,988,1319].forEach((t,n)=>this.bell(e.dest,t,e.t+n*.07,n===2?.9:.35))}thump(e={}){let t=this.output(e);t&&this.tone(t.dest,{type:`sine`,from:90,to:32,at:t.t,attack:.002,decay:.45,gain:1.2})}mastBreak(e={}){let t=this.output(e);if(!t)return;let{ctx:n,t:r,dest:i}=t;this.noiseBurst(i,{type:`highpass`,from:2400,to:900,q:.7,at:r,attack:.001,decay:.12,gain:1}),this.tone(i,{type:`sine`,from:110,to:45,at:r,attack:.002,decay:.3,gain:.8});for(let e=0;e<9;e++)this.noiseBurst(i,{type:`bandpass`,from:1800+Math.random()*1800,to:1300,q:3,at:r+.05+Math.random()*.5,attack:.001,decay:.03+Math.random()*.05,gain:.45});let a=r+.15,o=n.createOscillator();o.type=`sawtooth`,o.frequency.setValueAtTime(95,a),o.frequency.linearRampToValueAtTime(58,a+1.1);let s=n.createBiquadFilter();s.type=`lowpass`,s.frequency.value=420,s.Q.value=7;let c=n.createGain();c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(.3,a+.3),c.gain.exponentialRampToValueAtTime(1e-4,a+1.2),o.connect(s).connect(c).connect(i),o.start(a),o.stop(a+1.3)}rockFall(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.noiseBurst(r,{type:`highpass`,from:1800,to:700,q:.7,at:n,attack:.001,decay:.15,gain:.9}),this.tone(r,{type:`sine`,from:70,to:32,at:n,attack:.003,decay:.7,gain:1}),this.noiseBurst(r,{type:`lowpass`,from:500,to:120,q:.6,at:n+.05,attack:.2,decay:1.8,gain:.8});for(let e=0;e<10;e++)this.noiseBurst(r,{type:`bandpass`,from:900+Math.random()*1400,to:700,q:4,at:n+.3+Math.random()*1.4,attack:.001,decay:.04,gain:.35})}sinking(e={}){let t=this.output(e);if(!t)return;let{ctx:n,t:r,dest:i}=t;for(let e=0;e<3;e++){let t=r+e*.9+Math.random()*.3,a=n.createOscillator();a.type=`sawtooth`,a.frequency.setValueAtTime(70+Math.random()*30,t),a.frequency.linearRampToValueAtTime(48+Math.random()*20,t+.8);let o=n.createBiquadFilter();o.type=`lowpass`,o.frequency.value=380,o.Q.value=6;let s=n.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.35,t+.25),s.gain.exponentialRampToValueAtTime(1e-4,t+1.1),a.connect(o).connect(s).connect(i),a.start(t),a.stop(t+1.2)}this.noiseBurst(i,{type:`lowpass`,from:260,to:90,q:.6,at:r,attack:.6,decay:3.4,gain:.6});for(let e=0;e<16;e++){let e=300+Math.random()*500;this.tone(i,{type:`sine`,from:e,to:e*1.8,at:r+.4+Math.random()*3,attack:.005,decay:.07,gain:.25})}}chargeStart(){this.chargeStop();let e=this.output({volume:.18});if(!e)return;let{ctx:t,t:n,dest:r}=e,i=t.createBufferSource();i.buffer=this.noise,i.loop=!0;let a=t.createBiquadFilter();a.type=`highpass`,a.frequency.value=3800;let o=t.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.5,n+.08),i.connect(a).connect(o).connect(r),i.start(n,Math.random());let s=t.createOscillator();s.type=`triangle`,s.frequency.value=200;let c=t.createGain();c.gain.value=1;let l=t.createOscillator();l.frequency.value=14;let u=t.createGain();u.gain.value=0,l.connect(u).connect(c.gain);let d=t.createGain();d.gain.setValueAtTime(1e-4,n),d.gain.exponentialRampToValueAtTime(1,n+.05),s.connect(c).connect(d).connect(r),s.start(n),l.start(n),this.charge={osc:s,gain:d,tremolo:u,lfo:l,hiss:i,hissGain:o}}chargeUpdate(e,t){if(!this.charge||!this.ctx)return;let n=this.ctx.currentTime;this.charge.osc.frequency.setTargetAtTime(200+e*460+(t?120:0),n,.02),this.charge.tremolo.gain.setTargetAtTime(t?.9:0,n,.02),this.charge.hissGain.gain.setTargetAtTime(.5+e*1.3,n,.05)}chargeStop(){if(!this.charge||!this.ctx)return;let{osc:e,gain:t,lfo:n,hiss:r,hissGain:i}=this.charge,a=this.ctx.currentTime;t.gain.cancelScheduledValues(a),t.gain.setTargetAtTime(1e-4,a,.02),i.gain.cancelScheduledValues(a),i.gain.setTargetAtTime(1e-4,a,.02),e.stop(a+.1),n.stop(a+.1),r.stop(a+.1),this.charge=null}click(){let e=this.output({volume:.25});e&&this.tone(e.dest,{type:`sine`,from:880,to:760,at:e.t,attack:.002,decay:.06,gain:.6})}select(){let e=this.output({volume:.25});e&&(this.tone(e.dest,{type:`triangle`,from:660,to:660,at:e.t,attack:.003,decay:.08,gain:.6}),this.tone(e.dest,{type:`triangle`,from:990,to:990,at:e.t+.06,attack:.003,decay:.1,gain:.6}))}cancel(){let e=this.output({volume:.25});e&&this.tone(e.dest,{type:`triangle`,from:520,to:300,at:e.t,attack:.003,decay:.15,gain:.6})}turn(e){let t=this.output({volume:.3});t&&(e?[784,1047]:[330,262]).forEach((e,n)=>this.bell(t.dest,e,t.t+n*.13,.6))}matchFound(){let e=this.output({volume:.3});e&&[988,1319].forEach((t,n)=>this.bell(e.dest,t,e.t+n*.09,.5))}coin(){let e=this.output({volume:.22});if(e)for(let t of[2350,3720,5200])this.tone(e.dest,{type:`sine`,from:t,to:t,at:e.t,attack:.001,decay:.5,gain:.35})}powerUpSpawn(){let e=this.output({volume:.3});e&&[659,880,1175,1568].forEach((t,n)=>this.bell(e.dest,t,e.t+n*.07,.45))}powerUpPickup(e,t={}){let n=this.output({...t,volume:(t.volume??1)*.55});if(!n)return;let{t:r,dest:i}=n;({damage:[523,784,1047],blast:[392,587,784],split:[698,1047,1397],meteor:[330,494,659]})[e].forEach((e,t)=>this.bell(i,e,r+t*.035,.7)),this.noiseBurst(i,{type:`bandpass`,from:3e3,to:900,q:1.2,at:r,attack:.01,decay:.35,gain:.35}),(e===`blast`||e===`damage`)&&this.tone(i,{type:`triangle`,from:220,to:660,at:r,attack:.02,decay:.4,gain:.25})}meteors(e,t={}){let n=this.output({...t,volume:(t.volume??1)*.6});if(!n)return;let{t:r,dest:i}=n;this.noiseBurst(i,{type:`lowpass`,from:2400,to:300,q:.9,at:r,attack:.4,decay:Math.max(.6,e),gain:.7}),this.tone(i,{type:`sawtooth`,from:180,to:60,at:r,attack:.3,decay:Math.max(.6,e),gain:.12})}bigBlast(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.tone(r,{type:`sine`,from:90,to:28,at:n,attack:.004,decay:1.1,gain:1}),this.noiseBurst(r,{type:`lowpass`,from:1600,to:120,q:.6,at:n,attack:.005,decay:1.6,gain:1})}victory(){let e=this.output({volume:.35});e&&[523,659,784,1047].forEach((t,n)=>this.bell(e.dest,t,e.t+n*.14,n===3?1.4:.5))}defeat(){let e=this.output({volume:.35});e&&[440,349,294].forEach((t,n)=>this.bell(e.dest,t,e.t+n*.22,n===2?1.4:.6))}output(e){let t=this.ctx;if(!t||!this.master||!this.enabled||t.state!==`running`)return null;let n=t.createGain();if(n.gain.value=Math.max(0,Math.min(1,e.volume??1)),e.pan!==void 0&&t.createStereoPanner){let r=t.createStereoPanner();r.pan.value=Math.max(-1,Math.min(1,e.pan)),n.connect(r).connect(this.master)}else n.connect(this.master);return{ctx:t,t:t.currentTime+.005,dest:n}}tone(e,t){let n=this.ctx,r=n.createOscillator();r.type=t.type,r.frequency.setValueAtTime(t.from,t.at),t.to!==t.from&&r.frequency.exponentialRampToValueAtTime(Math.max(1,t.to),t.at+t.attack+t.decay);let i=n.createGain();i.gain.setValueAtTime(1e-4,t.at),i.gain.exponentialRampToValueAtTime(t.gain,t.at+t.attack),i.gain.exponentialRampToValueAtTime(1e-4,t.at+t.attack+t.decay),r.connect(i).connect(e),r.start(t.at),r.stop(t.at+t.attack+t.decay+.05)}noiseBurst(e,t){let n=this.ctx,r=n.createBufferSource();r.buffer=this.noise,r.loop=!0;let i=n.createBiquadFilter();i.type=t.type,i.Q.value=t.q,i.frequency.setValueAtTime(t.from,t.at),i.frequency.exponentialRampToValueAtTime(Math.max(20,t.to),t.at+t.attack+t.decay);let a=n.createGain();a.gain.setValueAtTime(1e-4,t.at),a.gain.exponentialRampToValueAtTime(t.gain,t.at+t.attack),a.gain.exponentialRampToValueAtTime(1e-4,t.at+t.attack+t.decay),r.connect(i).connect(a).connect(e),r.start(t.at,Math.random()*1.5),r.stop(t.at+t.attack+t.decay+.05)}bell(e,t,n,r){this.tone(e,{type:`sine`,from:t,to:t,at:n,attack:.004,decay:r,gain:.55}),this.tone(e,{type:`sine`,from:t*2.01,to:t*2.01,at:n,attack:.004,decay:r*.5,gain:.18})}makeNoise(e){let t=this.ctx,n=t.createBuffer(1,Math.floor(t.sampleRate*e),t.sampleRate),r=n.getChannelData(0);for(let e=0;e<r.length;e++)r[e]=Math.random()*2-1;return n}startAmbient(){let e=this.ctx,t=e.createGain();t.gain.value=.11,t.connect(this.master);{let t=e.createBufferSource();t.buffer=this.noise,t.loop=!0;let n=e.createBiquadFilter();n.type=`bandpass`,n.frequency.value=700,n.Q.value=1.4;let r=e.createOscillator();r.frequency.value=.17;let i=e.createGain();i.gain.value=320,r.connect(i).connect(n.frequency),this.windGain=e.createGain(),this.windGain.gain.value=.02+.2*this.windLevel**1.5,t.connect(n).connect(this.windGain).connect(this.master),t.start(),r.start()}for(let[n,r,i]of[[420,1,.09],[1600,.35,.13]]){let a=e.createBufferSource();a.buffer=this.noise,a.loop=!0;let o=e.createBiquadFilter();o.type=`lowpass`,o.frequency.value=n;let s=e.createGain();s.gain.value=r*.6;let c=e.createOscillator();c.frequency.value=i;let l=e.createGain();l.gain.value=r*.4,c.connect(l).connect(s.gain),a.connect(o).connect(s).connect(t),a.start(),c.start()}}};function un(e,t){let n=$t(t.homeAngleDeg[e]),r=$t(t.zoneHalfAngleDeg);return{home:n,min:n-r,max:n+r}}function dn(e,t){return Math.min(t.max,Math.max(t.min,e))}function fn(e,t){return I(Math.cos(e)*t,0,Math.sin(e)*t)}function pn(e){return I(-Math.sin(e),0,Math.cos(e))}var mn=22;function hn(e){return ct(e).landRadius+mn}function gn(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function _n(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},J={common:{diffuse:{value:new z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new z(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},vn={basic:{uniforms:Ht([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:q.meshbasic_vert,fragmentShader:q.meshbasic_frag},lambert:{uniforms:Ht([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new z(0)},envMapIntensity:{value:1}}]),vertexShader:q.meshlambert_vert,fragmentShader:q.meshlambert_frag},phong:{uniforms:Ht([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new z(0)},specular:{value:new z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:q.meshphong_vert,fragmentShader:q.meshphong_frag},standard:{uniforms:Ht([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag},toon:{uniforms:Ht([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new z(0)}}]),vertexShader:q.meshtoon_vert,fragmentShader:q.meshtoon_frag},matcap:{uniforms:Ht([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:q.meshmatcap_vert,fragmentShader:q.meshmatcap_frag},points:{uniforms:Ht([J.points,J.fog]),vertexShader:q.points_vert,fragmentShader:q.points_frag},dashed:{uniforms:Ht([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:q.linedashed_vert,fragmentShader:q.linedashed_frag},depth:{uniforms:Ht([J.common,J.displacementmap]),vertexShader:q.depth_vert,fragmentShader:q.depth_frag},normal:{uniforms:Ht([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:q.meshnormal_vert,fragmentShader:q.meshnormal_frag},sprite:{uniforms:Ht([J.sprite,J.fog]),vertexShader:q.sprite_vert,fragmentShader:q.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:q.background_vert,fragmentShader:q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:q.backgroundCube_vert,fragmentShader:q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:q.cube_vert,fragmentShader:q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:q.equirect_vert,fragmentShader:q.equirect_frag},distance:{uniforms:Ht([J.common,J.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:q.distance_vert,fragmentShader:q.distance_frag},shadow:{uniforms:Ht([J.lights,J.fog,{color:{value:new z(0)},opacity:{value:1}}]),vertexShader:q.shadow_vert,fragmentShader:q.shadow_frag}};vn.physical={uniforms:Ht([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new z(0)},specularColor:{value:new z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag};var yn={r:0,b:0,g:0},bn=new lt,xn=new G;xn.set(-1,0,0,0,1,0,0,0,1);function Sn(e,t,n,r,i,a){let o=new z(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new W(new Wt(1,1,1),new P({name:`BackgroundCubeMaterial`,uniforms:Pt(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(bn.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xn),l.material.toneMapped=A.getTransfer(i.colorSpace)!==b,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new yt(2,2),new P({name:`BackgroundMaterial`,uniforms:Pt(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=A.getTransfer(i.colorSpace)!==b,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(yn,Xe(e)),n.buffers.color.setClear(yn.r,yn.g,yn.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Cn(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function wn(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Tn(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function En(e){let t=this,n=null,r=0,i=!1,a=!1,o=new xe,s=new G,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Dn=4,On=6,kn=20,An=256,jn=new ne,Mn=new z,Nn=null,Pn=0,Fn=0,In=!1,Ln=new L,Rn=new L,zn=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ln}=i;Nn=this._renderer.getRenderTarget(),Pn=this._renderer.getActiveCubeFace(),Fn=this._renderer.getActiveMipmapLevel(),In=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nn,Pn,Fn),this._renderer.xr.enabled=In,e.scissorTest=!1,Hn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nn=this._renderer.getRenderTarget(),Pn=this._renderer.getActiveCubeFace(),Fn=this._renderer.getActiveMipmapLevel(),In=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Pe,format:cn,colorSpace:et,depthBuffer:!1},r=Vn(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vn(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Bn(r)),this._blurMaterial=Wn(r,e,t),this._ggxMaterial=Un(r,e,t)}return r}_compileMaterial(e){let t=new W(new Ge,e);this._renderer.compile(t,jn)}_sceneToCubeUV(e,t,n,r,i){let a=new te(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Mn),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new Wt,new Ve({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Mn),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Hn(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kn()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gn());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Hn(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,jn)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Dn?n-d+Dn:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Hn(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,jn),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Hn(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,jn)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Hn(t,3*l*(r>this._lodMax-Dn?r-this._lodMax+Dn:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,jn)}};function Bn(e){let t=[],n=[],r=e,i=e-Dn+1+On;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Rn.set(1,r,n):e===1?Rn.set(-n,1,-r):e===2?Rn.set(-n,r,1):e===3?Rn.set(-1,r,-n):e===4?Rn.set(-n,-1,r):Rn.set(n,r,-1),Rn.toArray(l,(e*6+t)*3)}}let u=new Ge;u.setAttribute(`position`,new tn(c,3)),u.setAttribute(`outputDirection`,new tn(l,3)),n.push(new W(u,null)),r>Dn&&r--}return{lodMeshes:n,sizeLods:t}}function Vn(e,t,n){let r=new zt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Hn(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Un(e,t,n){return new P({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:An,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qn(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wn(e,t,n){return new P({name:`SphericalGaussianBlur`,defines:{SAMPLES:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qn(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gn(){return new P({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:qn(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Kn(){return new P({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qn(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jn=class extends zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ft(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wt(5,5,5),i=new P({name:`CubemapFromEquirect`,uniforms:Pt(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ze),new gt(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Yn(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Jn(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new zn(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new zn(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Xn(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&At(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Zn(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?V:w)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Qn(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function $n(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:K(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function er(e,t,n){let r=new WeakMap,i=new v;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Se(h,p,m,u);g.type=ae,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Le(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function tr(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var nr={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function rr(e,t,n,r,i,a){let o=new zt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Ge;l.setAttribute(`position`,new H([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new H([0,2,0,0,2,0],2));let u=new Gt({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new W(l,u),f=new ne(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new zt(t,n,{type:Pe,depthBuffer:!1,stencilBuffer:!1}),c=new zt(t,n,{type:Pe,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},A.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=nr[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var ir=new me,ar=new we(1,1),or=new Se,sr=new _e,cr=new ft,lr=[],ur=[],dr=new Float32Array(16),fr=new Float32Array(9),pr=new Float32Array(4);function mr(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=lr[i];if(a===void 0&&(a=new Float32Array(i),lr[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function hr(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function gr(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function _r(e,t){let n=ur[t];n===void 0&&(n=new Int32Array(t),ur[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function vr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function yr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hr(n,t))return;e.uniform2fv(this.addr,t),gr(n,t)}}function br(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(hr(n,t))return;e.uniform3fv(this.addr,t),gr(n,t)}}function xr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hr(n,t))return;e.uniform4fv(this.addr,t),gr(n,t)}}function Sr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hr(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),gr(n,t)}else{if(hr(n,r))return;pr.set(r),e.uniformMatrix2fv(this.addr,!1,pr),gr(n,r)}}function Cr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hr(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),gr(n,t)}else{if(hr(n,r))return;fr.set(r),e.uniformMatrix3fv(this.addr,!1,fr),gr(n,r)}}function wr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hr(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),gr(n,t)}else{if(hr(n,r))return;dr.set(r),e.uniformMatrix4fv(this.addr,!1,dr),gr(n,r)}}function Tr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Er(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hr(n,t))return;e.uniform2iv(this.addr,t),gr(n,t)}}function Dr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hr(n,t))return;e.uniform3iv(this.addr,t),gr(n,t)}}function Or(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hr(n,t))return;e.uniform4iv(this.addr,t),gr(n,t)}}function kr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ar(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hr(n,t))return;e.uniform2uiv(this.addr,t),gr(n,t)}}function jr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hr(n,t))return;e.uniform3uiv(this.addr,t),gr(n,t)}}function Mr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hr(n,t))return;e.uniform4uiv(this.addr,t),gr(n,t)}}function Nr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ar.compareFunction=n.isReversedDepthBuffer()?518:515,a=ar):a=ir,n.setTexture2D(t||a,i)}function Pr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||sr,i)}function Fr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||cr,i)}function Ir(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||or,i)}function Lr(e){switch(e){case 5126:return vr;case 35664:return yr;case 35665:return br;case 35666:return xr;case 35674:return Sr;case 35675:return Cr;case 35676:return wr;case 5124:case 35670:return Tr;case 35667:case 35671:return Er;case 35668:case 35672:return Dr;case 35669:case 35673:return Or;case 5125:return kr;case 36294:return Ar;case 36295:return jr;case 36296:return Mr;case 35678:case 36198:case 36298:case 36306:case 35682:return Nr;case 35679:case 36299:case 36307:return Pr;case 35680:case 36300:case 36308:case 36293:return Fr;case 36289:case 36303:case 36311:case 36292:return Ir}}function Rr(e,t){e.uniform1fv(this.addr,t)}function zr(e,t){let n=mr(t,this.size,2);e.uniform2fv(this.addr,n)}function Br(e,t){let n=mr(t,this.size,3);e.uniform3fv(this.addr,n)}function Vr(e,t){let n=mr(t,this.size,4);e.uniform4fv(this.addr,n)}function Hr(e,t){let n=mr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ur(e,t){let n=mr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Wr(e,t){let n=mr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Gr(e,t){e.uniform1iv(this.addr,t)}function Kr(e,t){e.uniform2iv(this.addr,t)}function qr(e,t){e.uniform3iv(this.addr,t)}function Jr(e,t){e.uniform4iv(this.addr,t)}function Yr(e,t){e.uniform1uiv(this.addr,t)}function Xr(e,t){e.uniform2uiv(this.addr,t)}function Zr(e,t){e.uniform3uiv(this.addr,t)}function Qr(e,t){e.uniform4uiv(this.addr,t)}function $r(e,t,n){let r=this.cache,i=t.length,a=_r(n,i);hr(r,a)||(e.uniform1iv(this.addr,a),gr(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ar:ir;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ei(e,t,n){let r=this.cache,i=t.length,a=_r(n,i);hr(r,a)||(e.uniform1iv(this.addr,a),gr(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||sr,a[e])}function ti(e,t,n){let r=this.cache,i=t.length,a=_r(n,i);hr(r,a)||(e.uniform1iv(this.addr,a),gr(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||cr,a[e])}function ni(e,t,n){let r=this.cache,i=t.length,a=_r(n,i);hr(r,a)||(e.uniform1iv(this.addr,a),gr(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||or,a[e])}function ri(e){switch(e){case 5126:return Rr;case 35664:return zr;case 35665:return Br;case 35666:return Vr;case 35674:return Hr;case 35675:return Ur;case 35676:return Wr;case 5124:case 35670:return Gr;case 35667:case 35671:return Kr;case 35668:case 35672:return qr;case 35669:case 35673:return Jr;case 5125:return Yr;case 36294:return Xr;case 36295:return Zr;case 36296:return Qr;case 35678:case 36198:case 36298:case 36306:case 35682:return $r;case 35679:case 36299:case 36307:return ei;case 35680:case 36300:case 36308:case 36293:return ti;case 36289:case 36303:case 36311:case 36292:return ni}}var ii=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lr(t.type)}},ai=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ri(t.type)}},oi=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},si=/(\w+)(\])?(\[|\.)?/g;function ci(e,t){e.seq.push(t),e.map[t.id]=t}function li(e,t,n){let r=e.name,i=r.length;for(si.lastIndex=0;;){let a=si.exec(r),o=si.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ci(n,l===void 0?new ii(s,e,t):new ai(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new oi(s),ci(n,e)),n=e}}}var ui=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);li(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function di(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var fi=37297,pi=0;function mi(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var hi=new G;function gi(e){A._getMatrix(hi,A.workingColorSpace,e);let t=`mat3( ${hi.elements.map(e=>e.toFixed(4))} )`;switch(A.getTransfer(e)){case it:return[t,`LinearTransferOETF`];case b:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function _i(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+mi(e.getShaderSource(t),r)}return i}function vi(e,t){let n=gi(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var yi={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function bi(e,t){let n=yi[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var xi=new L;function Si(){return A.getLuminanceCoefficients(xi),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${xi.x.toFixed(4)}, ${xi.y.toFixed(4)}, ${xi.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ci(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ei).join(`
`)}function wi(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ti(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ei(e){return e!==``}function Di(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oi(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ki=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ai(e){return e.replace(ki,Mi)}var ji=new Map;function Mi(e,t){let n=q[t];if(n===void 0){let e=ji.get(t);if(e!==void 0)n=q[e],U(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Ai(n)}var Ni=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pi(e){return e.replace(Ni,Fi)}function Fi(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ii(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Li={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ri(e){return Li[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var zi={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Bi(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:zi[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Vi={302:`ENVMAP_MODE_REFRACTION`};function Hi(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Vi[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ui={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Wi(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ui[e.combine]||`ENVMAP_BLENDING_NONE`}function Gi(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ki(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ri(n),l=Bi(n),u=Hi(n),d=Wi(n),f=Gi(n),p=Ci(n),m=wi(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ei).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ei).join(`
`),_.length>0&&(_+=`
`)):(g=[Ii(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ei).join(`
`),_=[Ii(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:q.tonemapping_pars_fragment,n.toneMapping===0?``:bi(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,q.colorspace_pars_fragment,vi(`linearToOutputTexel`,n.outputColorSpace),Si(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ei).join(`
`)),o=Ai(o),o=Di(o,n),o=Oi(o,n),s=Ai(s),s=Di(s,n),s=Oi(s,n),o=Pi(o),s=Pi(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=di(i,i.VERTEX_SHADER,y),S=di(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=_i(i,x,`vertex`),n=_i(i,S,`fragment`);K(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new ui(i,h),T=Ti(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,fi)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pi++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var qi=0,Ji=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yi(e),t.set(e,n)),n}},Yi=class{constructor(e){this.id=qi++,this.code=e,this.usedTimes=0}};function Xi(e){return e===1030||e===37490||e===36285}function Zi(e,t,n,r,i,a){let o=new We,s=new Ji,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,ee;if(C){let e=vn[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,ee=t.id}let te=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),ne=h.isInstancedMesh===!0,re=h.isBatchedMesh===!0,M=!!i.map,ie=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,N=!!i.emissiveMap,de=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,P=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,F=i.transmission>0,ve=pe&&!!i.anisotropyMap,ye=me&&!!i.clearcoatMap,be=me&&!!i.clearcoatNormalMap,xe=me&&!!i.clearcoatRoughnessMap,Se=ge&&!!i.iridescenceMap,Ce=ge&&!!i.iridescenceThicknessMap,I=_e&&!!i.sheenColorMap,L=_e&&!!i.sheenRoughnessMap,we=!!i.specularMap,Te=!!i.specularColorMap,Ee=!!i.specularIntensityMap,R=F&&!!i.transmissionMap,De=F&&!!i.thicknessMap,z=!!i.gradientMap,Oe=!!i.alphaMap,ke=i.alphaTest>0,B=!!i.alphaHash,Ae=!!i.extensions,je=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(je=e.toneMapping);let V={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&h._colorsTexture!==null,instancing:ne,instancingColor:ne&&h.instanceColor!==null,instancingMorph:ne&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:A.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:ie,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:N,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&Xi(i.normalMap.format),metalnessMap:de,roughnessMap:fe,anisotropy:pe,anisotropyMap:ve,clearcoat:me,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:he,retroreflection:P,iridescence:ge,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:_e,sheenColorMap:I,sheenRoughnessMap:L,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:F,transmissionMap:R,thicknessMap:De,gradientMap:z,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ke,alphaHash:B,combine:i.combine,mapUv:M&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:N&&m(i.emissiveMap.channel),metalnessMapUv:de&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:I&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:L&&m(i.sheenRoughnessMap.channel),specularMapUv:we&&m(i.specularMap.channel),specularColorMapUv:Te&&m(i.specularColorMap.channel),specularIntensityMapUv:Ee&&m(i.specularIntensityMap.channel),transmissionMapUv:R&&m(i.transmissionMap.channel),thicknessMapUv:De&&m(i.thicknessMap.channel),alphaMapUv:Oe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(M||Oe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&A.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:N&&i.emissiveMap.isVideoTexture===!0&&A.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ae&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ae&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return V.vertexUv1s=c.has(1),V.vertexUv2s=c.has(2),V.vertexUv3s=c.has(3),c.clear(),V}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=vn[t];n=ce.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Ki(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Qi(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function $i(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ea(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ta(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||$i),r.length>1&&r.sort(t||ea),i.length>1&&i.sort(t||ea)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function na(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ta,e.set(t,[i])):n>=r.length?(i=new ta,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ra(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new L,color:new z};break;case`SpotLight`:n={position:new L,direction:new L,color:new z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new L,color:new z,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new L,skyColor:new z,groundColor:new z};break;case`RectAreaLight`:n={color:new z,position:new L,halfWidth:new L,halfHeight:new L}}return e[t.id]=n,n}}}function ia(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var aa=0;function oa(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function sa(e){let t=new ra,n=ia(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new L);let i=new L,a=new lt,o=new lt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(oa);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=aa++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ca(e){let t=new sa(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function la(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ca(e),t.set(n,[a])):r>=i.length?(a=new ca(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ua=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,da=`uniform sampler2D shadow_pass;
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
}`,fa=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],pa=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],ma=new lt,ha=new L,ga=new L;function _a(e,t,n){let r=new fe,i=new Le,a=new Le,o=new v,s=new qt,c=new an,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new P({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:ua,fragmentShader:da}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ge;m.setAttribute(`position`,new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new W(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){U(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new zt(i.x,i.y,{format:at,type:Pe,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new we(i.x,i.y,ae),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=le,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=De,d.map.depthTexture.magFilter=De}else l.isPointLight?(d.map=new Jn(i.x),d.map.depthTexture=new y(i.x,Mt)):(d.map=new zt(i.x,i.y),d.map.depthTexture=new we(i.x,i.y,Mt)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=le,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Ze,d.map.depthTexture.magFilter=Ze):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=De,d.map.depthTexture.magFilter=De);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ha.setFromMatrixPosition(l.matrixWorld),e.position.copy(ha),ga.copy(e.position),ga.add(fa[t]),e.up.copy(pa[t]),e.lookAt(ga),e.updateMatrixWorld(),n.makeTranslation(-ha.x,-ha.y,-ha.z),ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(ma,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new zt(i.x,i.y,{format:at,type:Pe}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function va(e,t){function n(){let t=!1,n=new v,r=null,i=new v(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?fe(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=D[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?fe(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new z(0,0,0),E=0,O=!1,k=null,ee=null,te=null,A=null,j=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,M=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),re=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ie)[1]),re=M>=1);let ae=null,oe={},se=e.getParameter(e.SCISSOR_BOX),ce=e.getParameter(e.VIEWPORT),le=new v().fromArray(se),ue=new v().fromArray(ce);function N(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=N(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=N(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=N(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=N(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),fe(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),fe(e.CULL_FACE),F(0);function fe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function pe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function me(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function he(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function P(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function F(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(pe(e.BLEND),g=!1);return}if(g===!1&&(fe(e.BLEND),g=!0),t!==5){if(t!==_||u!==O){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:K(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:K(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:K(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:K(`WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,_=t,O=u}return}a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(ge[n],ge[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),_=t,O=!1}function ve(t,n){t.side===2?pe(e.CULL_FACE):fe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?F(0):F(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){k!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),k=t)}function be(t){t===0?pe(e.CULL_FACE):(fe(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function xe(t){t!==te&&(re&&e.lineWidth(t),te=t)}function Se(t,n,r){t?(fe(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):pe(e.POLYGON_OFFSET_FILL)}function Ce(t){t?fe(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function I(t){t===void 0&&(t=e.TEXTURE0+ne-1),ae!==t&&(e.activeTexture(t),ae=t)}function L(t,n,r){r===void 0&&(r=ae===null?e.TEXTURE0+ne-1:ae);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(ae!==r&&(e.activeTexture(r),ae=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function we(){let t=oe[ae];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function R(){try{e.texSubImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function B(){try{e.texStorage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function je(){try{e.texImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function V(){try{e.texImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function H(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ne(t){le.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),le.copy(t))}function Pe(t){ue.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ue.copy(t))}function Fe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ie(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ae=null,oe={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new z(0,0,0),E=0,O=!1,k=null,ee=null,te=null,A=null,j=null,le.set(0,0,e.canvas.width,e.canvas.height),ue.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:fe,disable:pe,bindFramebuffer:me,drawBuffers:he,useProgram:P,setBlending:F,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:I,bindTexture:L,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:je,texImage3D:V,pixelStorei:Me,getParameter:H,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:B,texStorage3D:Ae,texSubImage2D:R,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:Ne,viewport:Pe,reset:Le}}function ya(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Ue(`canvas`)}function g(e,t,n){let r=1,i=R(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?it:A.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function ee(){O=0}function te(){return O}function j(e){O=e}function ne(){let e=O;return e>=i.maxTextures&&U(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function re(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,i){let a=r.get(t);if(t.isVideoTexture&&we(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{me(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ie(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){me(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function ae(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){me(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function oe(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){he(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let se={[Ee]:e.REPEAT,[Jt]:e.CLAMP_TO_EDGE,[en]:e.MIRRORED_REPEAT},ce={[De]:e.NEAREST,[Zt]:e.NEAREST_MIPMAP_NEAREST,[k]:e.NEAREST_MIPMAP_LINEAR,[Ze]:e.LINEAR,[Ut]:e.LINEAR_MIPMAP_NEAREST,[St]:e.LINEAR_MIPMAP_LINEAR},le={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ue(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,se[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,se[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,se[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ce[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ce[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,le[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function N(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=re(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function de(e,t,n){return Math.floor(Math.floor(e/n)/t)}function fe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=de(n.start,r.width,4),c=de(t.start,r.width,4);n.start<=i+1&&a===c&&de(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function me(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=N(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=A.getPrimaries(A.workingColorSpace),r=o.colorSpace===``?null:A.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Te(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ue(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===pe,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&fe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=It(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=It(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=R(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=R(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,o,s){if(o.image.length!==6)return;let c=N(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=A.getPrimaries(A.workingColorSpace),r=o.colorSpace===``?null:A.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Te(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);ue(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=R(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function P(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,I(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,I(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,I(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);L(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,I(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,I(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function _e(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ue(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else M(i.depthTexture,0);let u=l.__webglTexture,d=I(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function F(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)_e(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?_e(i.__webglFramebuffer[0],t,0):_e(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ge(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ge(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,i){let a=r.get(t);n!==void 0&&P(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&F(t)}function ye(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&L(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=I(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ge(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ue(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)P(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else P(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ue(c,a),P(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ue(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)P(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else P(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&F(t)}function be(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let xe=[],Se=[];function Ce(t){if(t.samples>0){if(L(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(xe.length=0,Se.length=0,xe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(xe.push(l),Se.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Se)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,xe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function I(e){return Math.min(i.maxSamples,e.samples)}function L(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function we(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Te(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(A.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):K(`WebGLTextures: Unsupported texture color space:`,n)),t}function R(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ne,this.resetTextureUnits=ee,this.getTextureUnits=te,this.setTextureUnits=j,this.setTexture2D=M,this.setTexture2DArray=ie,this.setTexture3D=ae,this.setTextureCube=oe,this.rebindTextures=ve,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=P,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ba(e,t){function n(n,r=``){let i,a=A.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var xa=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sa=`
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

}`,Ca=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new B(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new P({vertexShader:xa,fragmentShader:Sa,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new yt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wa=class extends se{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Ca,g={},_=t.getContextAttributes(),y=null,b=null,x=[],S=[],C=new Le,w=null,T=null,E=new te;E.viewport=new v;let D=new te;D.viewport=new v;let O=[E,D],k=new Re,ee=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Et,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Et,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Et,x[e]=t),t.getHandSpace()};function j(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}ee=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),T!==null){let e=T.camera;e.fov=T.fov,e.zoom=T.zoom,e.updateProjectionMatrix(),T=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?pe:le,a=_.stencil?oe:Mt);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new zt(d.textureWidth,d.textureHeight,{format:cn,type:Ae,depthTexture:new we(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new zt(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Ae,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let M=new L,ae=new L;function se(e,t,n){M.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=M.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),k.near=D.near=E.near=t,k.far=D.far=E.far=n,(ee!==k.near||A!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),ee=k.near,A=k.far),k.layers.mask=e.layers.mask|6,E.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;ce(k,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(k,E,D):k.projectionMatrix.copy(E.projectionMatrix),T===null&&e.isPerspectiveCamera&&(T={camera:e,fov:e.fov,zoom:e.zoom}),ue(e,k,i)};function ue(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ie*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(k)},this.getCameraTexture=function(e){return g[e]};let N=null;function de(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=O[n];o===void 0&&(o=new te,o.layers.enable(n),o.viewport=new v,O[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new B,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}N&&N(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let fe=new gn;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){N=e},this.dispose=function(){}}},Ta=new lt,Ea=new G;Ea.set(-1,0,0,0,1,0,0,0,1);function Da(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Xe(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ta.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ea),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Oa(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return K(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ka=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Aa=null;function ja(){return Aa===null&&(Aa=new re(ka,16,16,at,Pe),Aa.name=`DFG_LUT`,Aa.minFilter=Ze,Aa.magFilter=Ze,Aa.wrapS=Jt,Aa.wrapT=Jt,Aa.generateMipmaps=!1,Aa.needsUpdate=!0),Aa}var Ma=class{constructor(e={}){let{canvas:t=dt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ae}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([T,ze,Qt]),g=new Set([Ae,Mt,Ne,oe,de,Fe]),_=new Uint32Array(4),y=new Int32Array(4),b=new L,x=null,S=null,C=[],w=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,O=!1,k=null,ee=null,te=null,j=null;this._outputColorSpace=_t;let ne=0,re=0,M=null,ie=-1,ae=null,se=new v,ce=new v,le=null,ue=new z(0),N=0,pe=t.width,me=t.height,he=1,P=null,ge=null,_e=new v(0,0,pe,me),F=new v(0,0,pe,me),ve=!1,ye=new fe,be=!1,xe=!1,Se=new lt,Ce=new L,I=new v,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ee(){return M===null?he:1}let R=n;function De(e,n){return t.getContext(e,n)}let Oe,ke,B,je,V,H,Me,Ie,Le,Re,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,rt,!1),t.addEventListener(`webglcontextrestored`,it,!1),t.addEventListener(`webglcontextcreationerror`,at,!1),R===null){let t=`webgl2`;if(R=De(t,e),R===null)throw De(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}et()}catch(e){throw t.removeEventListener(`webglcontextlost`,rt,!1),t.removeEventListener(`webglcontextrestored`,it,!1),t.removeEventListener(`webglcontextcreationerror`,at,!1),K(`WebGLRenderer: `+e.message),e}function et(){Oe=new Xn(R),Oe.init(),Xe=new ba(R,Oe),ke=new Tn(R,Oe,e,Xe),B=new va(R,Oe),ke.reversedDepthBuffer&&d&&B.buffers.depth.setReversed(!0),ee=R.createFramebuffer(),te=R.createFramebuffer(),j=R.createFramebuffer(),je=new $n(R),V=new Qi,H=new ya(R,Oe,B,V,ke,Xe,je),Me=new Yn(D),Ie=new _n(R),Ze=new Cn(R,Ie),Le=new Zn(R,Ie,je,Ze),Re=new tr(R,Le,Ie,Ze,je),qe=new er(R,ke,H),We=new En(V),Be=new Zi(D,Me,Oe,ke,Ze,We),Ve=new Da(D,V),He=new na,Ue=new la(Oe),Ke=new Sn(D,Me,B,Re,p,s),Ge=new _a(D,Re,ke),Qe=new Oa(R,je,ke,B),Je=new wn(R,Oe,je),Ye=new Qn(R,Oe,je),je.programs=Be.programs,D.capabilities=ke,D.extensions=Oe,D.properties=V,D.renderLists=He,D.shadowMap=Ge,D.state=B,D.info=je}m!==1009&&(E=new rr(m,t.width,t.height,o,r,i));let nt=new wa(D,R);this.xr=nt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=Oe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Oe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(pe,me,!1))},this.getSize=function(e){return e.set(pe,me)},this.setSize=function(e,n,r=!0){if(nt.isPresenting){U(`WebGLRenderer: Can't change size while VR device is presenting.`);return}pe=e,me=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(pe*he,me*he).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,me=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){K(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}E.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(se)},this.getViewport=function(e){return e.copy(_e)},this.setViewport=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),B.viewport(se.copy(_e).multiplyScalar(he).round())},this.getScissor=function(e){return e.copy(F)},this.setScissor=function(e,t,n,r){e.isVector4?F.set(e.x,e.y,e.z,e.w):F.set(e,t,n,r),B.scissor(ce.copy(F).multiplyScalar(he).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(e){B.setScissorTest(ve=e)},this.setOpaqueSort=function(e){P=e},this.setTransparentSort=function(e){ge=e},this.getClearColor=function(e){return e.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Ke.getClearColor(),r=Ke.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,R.clearBufferuiv(R.COLOR,0,_)):(y[0]=i,y[1]=a,y[2]=o,y[3]=r,R.clearBufferiv(R.COLOR,0,y))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),k=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,rt,!1),t.removeEventListener(`webglcontextrestored`,it,!1),t.removeEventListener(`webglcontextcreationerror`,at,!1),Ke.dispose(),He.dispose(),Ue.dispose(),V.dispose(),Me.dispose(),Re.dispose(),Ze.dispose(),Qe.dispose(),Be.dispose(),nt.dispose(),nt.removeEventListener(`sessionstart`,pt),nt.removeEventListener(`sessionend`,mt),ht.stop()};function rt(e){e.preventDefault(),xt(`WebGLRenderer: Context Lost.`),O=!0}function it(){xt(`WebGLRenderer: Context Restored.`),O=!1;let e=je.autoReset,t=Ge.enabled,n=Ge.autoUpdate,r=Ge.needsUpdate,i=Ge.type;et(),je.autoReset=e,Ge.enabled=t,Ge.autoUpdate=n,Ge.needsUpdate=r,Ge.type=i}function at(e){K(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ot(e){let t=e.target;t.removeEventListener(`dispose`,ot),W(t)}function W(e){st(e),V.remove(e)}function st(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){Be.releaseProgram(e)}),e.isShaderMaterial&&Be.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=we);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Dt(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Le.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ze.setup(i,r,s,n,c);let h,g=Je;if(c!==null&&(h=Ie.get(c),g=Ye,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*Ee()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*Ee()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(Oe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ie.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ct(e,t,n,r){k!==null&&e.isNodeMaterial&&k.setObject(r,e),be===!0&&We.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,wt(e,t,r),e.side=0,e.needsUpdate=!0,wt(e,t,r),e.side=2):wt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),k!==null&&k.renderStart(e,t,n),S=Ue.get(n),S.init(t),w.push(S),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(S.pushLight(e),e.castShadow&&S.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(S.pushLight(e),e.castShadow&&S.pushShadow(e))}),S.setupLights(),k!==null&&k.updateLights(S.state.lightsArray),xe=this.localClippingEnabled,be=We.init(this.clippingPlanes,xe),be===!0&&We.setGlobalState(this.clippingPlanes,t),k!==null&&Ge.render(S.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ct(o,n,t,e),r.add(o)}else ct(i,n,t,e),r.add(i)}}),S=w.pop(),k!==null&&k.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=V.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Oe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ut=null;function ft(e){ut&&ut(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new gn;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){ut=e,nt.setAnimationLoop(e),e===null?ht.stop():ht.start()},nt.addEventListener(`sessionstart`,pt),nt.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){K(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(O===!0)return;k!==null&&k.renderStart(e,t);let n=nt.enabled===!0&&nt.isPresenting===!0,r=E!==null&&(M===null||n)&&E.begin(D,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(t),t=nt.getCamera()),e.isScene===!0&&e.onBeforeRender(D,e,t,M),S=Ue.get(e,w.length),S.init(t),S.state.textureUnits=H.getTextureUnits(),w.push(S),Se.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ye.setFromProjectionMatrix(Se,tt,t.reversedDepth),xe=this.localClippingEnabled,be=We.init(this.clippingPlanes,xe),x=He.get(e,C.length),x.init(),C.push(x),nt.enabled===!0&&nt.isPresenting===!0){let e=D.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,D.sortObjects)}gt(e,t,0,D.sortObjects),x.finish(),k!==null&&k.updateLights(S.state.lightsArray),D.sortObjects===!0&&x.sort(P,ge),Te=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Te&&Ke.addToRenderList(x,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),be===!0&&We.beginShadows();let i=S.state.shadowsArray;if(Ge.render(i,e,t),be===!0&&We.endShadows(),(r&&E.hasRenderPass())===!1){let n=x.opaque,r=x.transmissive;if(S.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}Te&&Ke.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(x,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),Te&&Ke.render(e),vt(x,e,t)}M!==null&&re===0&&(H.updateMultisampleRenderTarget(M),H.updateRenderTargetMipmap(M)),r&&E.end(D),e.isScene===!0&&e.onAfterRender(D,e,t),Ze.resetDefaultState(),ie=-1,ae=null,w.pop(),w.length>0?(S=w[w.length-1],H.setTextureUnits(S.state.textureUnits),be===!0&&We.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,C.pop(),x=C.length>0?C[C.length-1]:null,k!==null&&k.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)S.pushLightProbeGrid(e);else if(e.isLight)S.pushLight(e),e.castShadow&&S.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ye)){r&&I.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Se);let i=Re.update(e),a=e.material;a.visible&&x.push(e,i,a,n,I.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ye))){let i=Re.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),I.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),I.copy(e.boundingSphere.center)),I.applyMatrix4(e.matrixWorld).applyMatrix4(Se)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&x.push(e,i,c,n,I.z,s,t)}}else a.visible&&x.push(e,i,a,n,I.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)gt(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;S.setupLightsView(n),be===!0&&We.setGlobalState(D.clippingPlanes,n),r&&B.viewport(se.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[r.id]===void 0){let e=Oe.has(`EXT_color_buffer_half_float`)||Oe.has(`EXT_color_buffer_float`);S.state.transmissionRenderTarget[r.id]=new zt(1,1,{generateMipmaps:!0,type:e?Pe:Ae,minFilter:St,samples:Math.max(4,ke.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:A.workingColorSpace})}let a=S.state.transmissionRenderTarget[r.id],o=r.viewport||se;a.setSize(o.z*D.transmissionResolutionScale,o.w*D.transmissionResolutionScale);let s=D.getRenderTarget(),c=D.getActiveCubeFace(),l=D.getActiveMipmapLevel();D.setRenderTarget(a),D.getClearColor(ue),N=D.getClearAlpha(),N<1&&D.setClearColor(16777215,.5),D.clear(),Te&&Ke.render(n);let u=D.toneMapping;D.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),S.setupLightsView(r),be===!0&&We.setGlobalState(D.clippingPlanes,r),bt(e,n,r),H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a),Oe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a))}D.setRenderTarget(s,c,l),D.setClearColor(ue,N),d!==void 0&&(r.viewport=d),D.toneMapping=u}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){k!==null&&i.isNodeMaterial&&k.setObject(e,i),e.onBeforeRender(D,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(D,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=2):D.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(D,t,n,r,i,a)}function wt(e,t,n){t.isScene!==!0&&(t=we);let r=V.get(e),i=S.state.lights,a=S.state.shadowsArray,o=i.state.version,s=Be.getParameters(e,i.state,a,t,n,S.state.lightProbeGridArray),c=Be.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Me.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ot),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Tt(e,s),d}else s.uniforms=Be.getUniforms(e),k!==null&&e.isNodeMaterial&&k.build(e,n,s),e.onBeforeCompile(s,D),d=Be.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=We.uniform),Tt(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=S.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function G(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ui.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Tt(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Et(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];b.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(b))return n}return null}function Dt(e,t,n,r,i){t.isScene!==!0&&(t=we),H.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?D.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:A.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Me.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=D.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=V.get(r),y=S.state.lights;if(be===!0&&(xe===!0||e!==ae)){let t=e===ae&&r.id===ie;We.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==We.numPlanes||v.numIntersection!==We.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=S.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=wt(r,t,i),k&&r.isNodeMaterial&&k.onUpdateProgram(r,x,v));let C=!1,w=!1,T=!1,E=x.getUniforms(),O=v.uniforms;if(B.useProgram(x.program)&&(C=!0,w=!0,T=!0),r.id!==ie&&(ie=r.id,w=!0),v.needsLights){let e=Et(S.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ae!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(R,`projectionMatrix`,e.projectionMatrix),E.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(R,Ce.setFromMatrixPosition(e.matrixWorld)),ke.logarithmicDepthBuffer&&E.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),ae!==e&&(ae=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(R,`sunShadowMap`,y.state.sunShadowMap,H),y.state.directionalShadowMap.length>0&&E.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,H),y.state.spotShadowMap.length>0&&E.setValue(R,`spotShadowMap`,y.state.spotShadowMap,H),y.state.pointShadowMap.length>0&&E.setValue(R,`pointShadowMap`,y.state.pointShadowMap,H)),i.isSkinnedMesh){E.setOptional(R,i,`bindMatrix`),E.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(R,`boneTexture`,e.boneTexture,H))}i.isBatchedMesh&&(E.setOptional(R,i,`batchingTexture`),E.setValue(R,`batchingTexture`,i._matricesTexture,H),E.setOptional(R,i,`batchingIdTexture`),E.setValue(R,`batchingIdTexture`,i._indirectTexture,H),E.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(R,`batchingColorTexture`,i._colorsTexture,H));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&qe.update(i,n,x),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=ja()),w){if(E.setValue(R,`toneMappingExposure`,D.toneMappingExposure),v.needsLights&&Ot(O,T),a&&r.fog===!0&&Ve.refreshFogUniforms(O,a),Ve.refreshMaterialUniforms(O,r,he,me,S.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;O.probesSH.value=e.texture,O.probesMin.value.copy(e.boundingBox.min),O.probesMax.value.copy(e.boundingBox.max),O.probesResolution.value.copy(e.resolution)}ui.upload(R,G(v),O,H)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ui.upload(R,G(v),O,H),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(R,`center`,i.center),E.setValue(R,`modelViewMatrix`,i.modelViewMatrix),E.setValue(R,`normalMatrix`,i.normalMatrix),E.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Qe.update(n,x),Qe.bind(n,x)}}return x}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ne=t,re=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest,B.viewport(se),B.scissor(ce),B.setScissorTest(le),ie=-1;return}if(o.__webglFramebuffer===void 0)H.setupRenderTarget(e);else if(o.__hasExternalTextures)H.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);H.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&H.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest}else se.copy(_e).multiplyScalar(he).floor(),ce.copy(F).multiplyScalar(he).floor(),le=ve;if(n!==0&&(r=ee),B.bindFramebuffer(R.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(se),B.scissor(ce),B.setScissorTest(le),i){let r=V.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}ie=-1};function At(e){let t=V.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ke.textureFormatReadable(e.format),t.__typeReadable=ke.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){B.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=At(o);if(u.__formatReadable===!1){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,Xe.convert(c),Xe.convert(l),a)}finally{let e=M===null?null:V.get(M).__webglFramebuffer;B.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=At(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,Xe.convert(l),Xe.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=M===null?null:V.get(M).__webglFramebuffer;B.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await $e(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;H.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Xe.convert(t.format),_=Xe.convert(t.type),v;t.isData3DTexture?(H.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(H.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(H.setTexture2D(t,0),v=R.TEXTURE_2D),B.activeTexture(R.TEXTURE0),B.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(R.UNPACK_ROW_LENGTH),b=B.getParameter(R.UNPACK_IMAGE_HEIGHT),x=B.getParameter(R.UNPACK_SKIP_PIXELS),S=B.getParameter(R.UNPACK_SKIP_ROWS),C=B.getParameter(R.UNPACK_SKIP_IMAGES);B.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(R.UNPACK_SKIP_PIXELS,l),B.pixelStorei(R.UNPACK_SKIP_ROWS,u),B.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,o,s,f,p,o,s,R.DEPTH_BUFFER_BIT,R.NEAREST);B.bindFramebuffer(R.READ_FRAMEBUFFER,null),B.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(R.READ_FRAMEBUFFER,te),B.bindFramebuffer(R.DRAW_FRAMEBUFFER,j);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,o,s,f,p,o,s,R.COLOR_BUFFER_BIT,R.NEAREST);B.bindFramebuffer(R.READ_FRAMEBUFFER,null),B.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(R.UNPACK_ROW_LENGTH,y),B.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(R.UNPACK_SKIP_PIXELS,x),B.pixelStorei(R.UNPACK_SKIP_ROWS,S),B.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&R.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&H.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?H.setTextureCube(e,0):e.isData3DTexture?H.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?H.setTexture2DArray(e,0):H.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){ne=0,re=0,M=null,B.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return tt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=A._getDrawingBufferColorSpace(e),t.unpackColorSpace=A._getUnpackColorSpace()}},Na=()=>({position:new L,quaternion:new ve,fov:55}),Pa=class{camera;rig=null;from=Na();target=Na();blend=1;blendTime=0;arc=0;arcHeight=0;shake=0;constructor(e){this.camera=e}get currentRig(){return this.rig}use(e,t={}){let n=t.seconds??0;this.from.position.copy(this.camera.position),this.from.quaternion.copy(this.camera.quaternion),this.from.fov=this.camera.fov,this.rig=e,this.blendTime=n,this.blend=n>0?0:1,this.arc=t.arc??0,this.arcHeight=0,this.blend===1&&(e.update(0,this.target),this.apply(this.target))}addShake(e){this.shake=Math.min(2,this.shake+e)}update(e){if(this.rig){if(this.rig.update(e,this.target),this.blend<1){this.arcHeight===0&&this.arc>0&&(this.arcHeight=this.from.position.distanceTo(this.target.position)*this.arc),this.blend=Math.min(1,this.blend+e/this.blendTime);let t=Fa(this.blend);this.camera.position.lerpVectors(this.from.position,this.target.position,t),this.camera.position.y+=Math.sin(Math.PI*t)*this.arcHeight,this.camera.quaternion.slerpQuaternions(this.from.quaternion,this.target.quaternion,t),this.setFov(jt.lerp(this.from.fov,this.target.fov,t))}else this.apply(this.target);if(this.shake>.001){let t=this.shake;this.camera.position.x+=(Math.random()-.5)*t,this.camera.position.y+=(Math.random()-.5)*t,this.camera.position.z+=(Math.random()-.5)*t,this.shake*=Math.exp(-e*6)}}}apply(e){this.camera.position.copy(e.position),this.camera.quaternion.copy(e.quaternion),this.setFov(e.fov)}setFov(e){Math.abs(this.camera.fov-e)>1e-4&&(this.camera.fov=e,this.camera.updateProjectionMatrix())}},Fa=e=>e*e*(3-2*e),Ia=new lt,La=new L(0,1,0);function Ra(e,t,n){return Ia.lookAt(e,t,La),n.setFromRotationMatrix(Ia)}function za(e,t){return{position:fn(e,t),forward:pn(e),up:I(0,1,0),starboard:I(-Math.cos(e),0,-Math.sin(e))}}function Ba(e,t){return Be(Be(Be(I(),e.forward,t.x),e.up,t.y),e.starboard,t.z)}function Va(e,t){return Be(Be(Be(e.position,e.forward,t.x),e.up,t.y),e.starboard,t.z)}function Ha(e,t){return I(O(t,e.forward),O(t,e.up),O(t,e.starboard))}function Ua(e,t){return Ha(e,F(t,e.position))}function Wa(e,t,n,r){let i=n.deckHeight;return{base:Va(e,I(t.x,i+r.radius,r.standZ)),top:Va(e,I(t.x,i+r.height-r.radius,r.standZ)),radius:r.radius}}function Ga(e,t,n){return I(e.x,t.deckHeight+n.pivotHeight,n.pivotZ)}function Ka(e,t){let n=$t(t.yawLimitDeg);return{yaw:Kt(e.yaw,-n,n),pitch:Kt(e.pitch,$t(t.pitchMinDeg),$t(t.pitchMaxDeg))}}function qa(e){return{yaw:0,pitch:$t(e.defaultPitchDeg)}}function Ja(e){let t=Math.cos(e.pitch);return I(Math.sin(e.yaw)*t,Math.sin(e.pitch),Math.cos(e.yaw)*t)}function Ya(e,t,n,r,i){let a=Va(e,Ga(t,n,r)),o=Ba(e,Ja(i));return{pivot:a,direction:o,origin:Be(a,o,r.barrelLength)}}function Xa(e,t){return j(e.minSpeed,e.maxSpeed,Kt(t,0,1))}function Za(e,t,n){let[r,i]=vt(e),a=Math.sin(t);return be(Be(Be(mt(e,Math.cos(t)),r,a*Math.cos(n)),i,a*Math.sin(n)))}function Qa(e,t,n,r){let i=Xa(e,n),a=$t(e.coneDeg)/2,o=[];for(let n=0;n<e.balls;n++){let s=t.direction;if(e.balls>1&&a>0){let i=(n+r.next())/e.balls*2*Math.PI,o=a*Math.sqrt(r.range(.1,1));s=Za(t.direction,o,i)}o.push({index:n,delay:n*e.interval,origin:t.origin,velocity:mt(s,i)})}return o}var $a=new L,eo=class{config;angle;from;to;look;duration;fov;time=0;constructor(e,t,n,r,i,a=4,o=50){this.config=e,this.angle=t,this.from=n,this.to=r,this.look=i,this.duration=a,this.fov=o}update(e,t){this.time+=e;let n=Math.min(1,this.time/this.duration),r=n*n*(3-2*n),i=za(this.angle(),this.config.arena.orbitRadius),a=Va(i,I(j(this.from.x,this.to.x,r),j(this.from.y,this.to.y,r),j(this.from.z,this.to.z,r))),o=Va(i,this.look);t.position.set(a.x,a.y,a.z),Ra(t.position,$a.set(o.x,o.y,o.z),t.quaternion),t.fov=this.fov}},to=class{config;ship;angle;unitIndex;aim;style;pivot=new L;target=new L;constructor(e,t,n,r,i,a){this.config=e,this.ship=t,this.angle=n,this.unitIndex=r,this.aim=i,this.style=a}update(e,t){let n=za(this.angle(),this.config.arena.orbitRadius),r=Ba(n,Ja(this.aim())),i=new L(r.x,0,r.z).normalize(),a=new L(-i.z,0,i.x);if(this.ship.pivotWorld(this.unitIndex,this.pivot),this.style===`shoulder`){let e=this.config.gunners[this.unitIndex].x,r=new L(n.forward.x,0,n.forward.z);t.position.copy(this.pivot).addScaledVector(i,-3.8).addScaledVector(r,e>=0?-2.3:2.3),t.position.y+=1.5,this.target.copy(this.pivot).addScaledVector(i,60),this.target.y=this.pivot.y+1,t.fov=42}else t.position.copy(this.pivot).addScaledVector(i,6.5).addScaledVector(a,3.2),t.position.y+=1.1,this.target.copy(this.pivot),this.target.y+=.4,t.fov=48;Ra(t.position,this.target,t.quaternion)}},no=new L,ro=new L,io=new L,ao=new L(0,1,0),oo=class{config;angle;options;constructor(e,t,n={back:44,height:30,lookAhead:80,lookHeight:0,side:-16}){this.config=e,this.angle=t,this.options=n}update(e,t){let n=za(this.angle(),this.config.arena.orbitRadius),{back:r,height:i,lookAhead:a,lookHeight:o,side:s}=this.options,c=n.position;t.position.set(c.x-n.starboard.x*r+n.forward.x*s,i,c.z-n.starboard.z*r+n.forward.z*s),no.set(c.x+n.starboard.x*a,o,c.z+n.starboard.z*a),Ra(t.position,no,t.quaternion),t.fov=this.config.presentation.thirdPersonFovDeg}},so=class{config;ship;angle;unitIndex;aim;aspect;options;kick=0;target=new L;constructor(e,t,n,r,i,a,o={back:1.75,up:1.05,tiltDownDeg:7,maxHorizontalFovDeg:96}){this.config=e,this.ship=t,this.angle=n,this.unitIndex=r,this.aim=i,this.aspect=a,this.options=o}fired(){this.kick=1}update(e,t){this.kick=Math.max(0,this.kick-e*2.8);let n=this.kick*this.kick,r=this.aim(),i=Ba(za(this.angle(),this.config.arena.orbitRadius),Ja(r)),a=no.set(i.x,0,i.z).normalize(),o=this.ship.pivotWorld(this.unitIndex,this.target);t.position.copy(o).addScaledVector(a,-(this.options.back+.5*n)),t.position.y+=this.options.up+.1*n;let s=this.config.presentation,c=r.pitch*s.firstPersonPitchFollow-jt.degToRad(this.options.tiltDownDeg-5*n);this.target.copy(t.position).addScaledVector(a,Math.cos(c)*10).add(ro.set(0,Math.sin(c)*10,0)),Ra(t.position,this.target,t.quaternion);let l=jt.degToRad(this.options.maxHorizontalFovDeg/2),u=jt.radToDeg(2*Math.atan(Math.tan(l)/Math.max(.5,this.aspect())));t.fov=Math.min(s.firstPersonFovDeg,u)+7*n}},co=.72;function lo(e,t,n,r,i){let a=Math.tan(jt.degToRad(r/2))*co,o=a*Math.max(.3,i),s=io.crossVectors(n,ao).normalize(),c=new L().crossVectors(s,n),l=0;for(let r of e){let e=r.x-t.x,i=r.y-t.y,u=r.z-t.z,d=e*n.x+i*n.y+u*n.z,f=Math.abs(e*s.x+i*s.y+u*s.z),p=Math.abs(e*c.x+i*c.y+u*c.z);l=Math.max(l,f/o-d,p/a-d,4-d)}return l}var uo=class{target;ground;aspect;fov;distance;height;center=new L;lastPosition=new L;look=new L;direction=new L;heading=new L;back=0;initialised=!1;constructor(e,t,n,r=60,i=15,a=5){this.target=e,this.ground=t,this.aspect=n,this.fov=r,this.distance=i,this.height=a}update(e,t){let n=this.target();if(n){let r=ro.set(n.velocity.x,0,n.velocity.z);r.lengthSq()<1e-6&&r.set(0,0,1),r.normalize();let i=Math.atan2(this.height,this.distance);if(this.direction.copy(r).multiplyScalar(Math.cos(i)).setY(-Math.sin(i)),!this.initialised)this.center.copy(n.position),this.heading.copy(this.direction);else{let t=no.subVectors(n.position,this.lastPosition);t.length()<=n.velocity.length()*e*1.5+.5&&this.center.add(t),this.center.lerp(n.position,1-Math.exp(-e*6)),this.heading.lerp(this.direction,1-Math.exp(-e*4)).normalize()}this.lastPosition.copy(n.position);let a=Math.hypot(this.distance,this.height),o=.25*Math.min(1,a/Math.max(a,this.back));this.look.copy(this.center).addScaledVector(n.velocity,o);let s=Math.max(a,lo(n.points,this.look,this.heading,this.fov,this.aspect()));this.initialised?(this.back+=(s-this.back)*(1-Math.exp(-e*(s>this.back?8:1.5))),this.back=Math.max(this.back,s*.9)):(this.back=s,this.initialised=!0),t.position.copy(this.look).addScaledVector(this.heading,-this.back),t.position.y=Math.max(t.position.y,this.ground(t.position.x,t.position.z)+4,2)}Ra(t.position,this.look,t.quaternion),t.fov=this.fov}},fo=class{eye;target;fov;constructor(e,t,n=55){this.eye=e,this.target=t,this.fov=n}update(e,t){t.position.copy(this.eye),Ra(this.eye,this.target,t.quaternion),t.fov=this.fov}},po=class{radius;height;speed;fov;angle;constructor(e,t,n,r=.05,i=50){this.radius=e,this.height=t,this.speed=r,this.fov=i,this.angle=n}update(e,t){this.angle+=e*this.speed,t.position.set(Math.cos(this.angle)*this.radius,this.height,Math.sin(this.angle)*this.radius),Ra(t.position,no.set(0,4,0),t.quaternion),t.fov=this.fov}},mo=I();function ho(e,t,n,r=mo){let i=e.velocity,a=n.drag*Oe(i),o=I(r.x-a*i.x,r.y-n.gravity-a*i.y,r.z-a*i.z);return{position:Be(Be(e.position,i,t),o,.5*t*t),velocity:Be(i,o,t)}}function go(e,t,n,r,i=mo,a=n.maxFlightTime){let o=1/n.stepsPerSecond,s=Math.ceil(a/o),c=[e],l={position:e,velocity:t};for(let e=0;e<s;e++){let t=ho(l,o,n,i),a=r(l.position,t.position,e*o);if(a)return c.push(a.point),{points:c,dt:o,duration:(e+a.t)*o,hit:a};c.push(t.position),l=t}return{points:c,dt:o,duration:s*o,hit:null}}function _o(e,t){let{points:n,dt:r,duration:i}=e,a=Math.max(0,Math.min(t,i)),o=Math.min(Math.floor(a/r),n.length-2);if(o<0)return n[0];let s=o*r,c=Math.min((o+1)*r,i),l=c>s?Math.min(1,(a-s)/(c-s)):1;return ee(n[o],n[o+1],l)}function vo(e,t){let n=e.dt,r=Math.max(0,Math.min(t,e.duration-n)),i=_o(e,r),a=_o(e,r+n),o=Math.min(r+n,e.duration)-r;return o>0?Be(I(),F(a,i),1/o):I()}var yo=20,bo=new WeakMap,xo=new WeakMap;function So(e,t){let n=bo.get(e);if(n===void 0){n=yo;for(let{center:t,halfSize:r}of e)n=Math.max(n,Math.hypot(Math.abs(t.x)+r.x,Math.abs(t.y)+r.y,Math.abs(t.z)+r.z)+3);bo.set(e,n)}let r=xo.get(t);if(r===void 0){r=0;for(let e of t)r=Math.max(r,Math.hypot(Math.abs(e.x)+e.radius,Math.max(Math.abs(e.bottom),Math.abs(e.top))+e.radius,e.radius)+3);xo.set(t,r)}return Math.max(n,r)}function Co(e,t){return e.y<=0?0:t.y>0?null:e.y/(e.y-t.y)}var wo=[`x`,`y`,`z`];function To(e,t,n,r){let i=0,a=1;for(let o of wo){let s=t[o]-e[o];if(Math.abs(s)<1e-12){if(e[o]<n[o]||e[o]>r[o])return null;continue}let c=(n[o]-e[o])/s,l=(r[o]-e[o])/s;if(c>l&&([c,l]=[l,c]),i=Math.max(i,c),a=Math.min(a,l),i>a)return null}return i}function Eo(e,t,n,r){let i=F(e,n),a=O(t,t),o=O(i,t),s=O(i,i)-r*r;if(s<=0)return 0;if(o>0||a===0)return null;let c=o*o-a*s;return c<0?null:(-o-Math.sqrt(c))/a}var Do=(e,t)=>t!==null&&t>=0&&t<=1&&(e===null||t<e)?t:e;function Oo(e,t,n,r,i){if(R(e,rn(e,n,r))<=i)return 0;let a=F(t,e),o=null,s=F(r,n),c=O(s,s);if(c>0){let t=F(e,n),r=F(a,mt(s,O(a,s)/c)),l=F(t,mt(s,O(t,s)/c)),u=O(r,r),d=O(l,r),f=O(l,l)-i*i,p=d*d-u*f;if(u>1e-12&&p>=0){let t=(-d-Math.sqrt(p))/u,r=O(F(Be(e,a,t),n),s)/c;r>=0&&r<=1&&(o=Do(o,t))}}return o=Do(o,Eo(e,a,n,i)),o=Do(o,Eo(e,a,r,i)),o}function ko(e,t,n,r){let i=ct(n);if(e.y>i.top&&t.y>i.top)return null;let a=i.boundingRadius;if(Math.hypot(e.x,e.z)>a&&Math.hypot(t.x,t.z)>a)return null;let o=Ct(i,r),s=n=>{let a=ee(e,t,n),s=a.y-rt(i,r,a.x,a.z);return o.length>0?Math.min(s,ot(a.x,a.y,a.z,o)):s};if(s(0)<=0)return 0;let c=0,l;if(o.length===0){if(s(1)<=0)l=1;else if(s(.5)<=0)l=.5;else return null}else{let e=[.25,.5,.75,1].find(e=>s(e)<=0);if(e===void 0)return null;c=e-.25,l=e}for(let e=0;e<14;e++){let e=(c+l)/2;s(e)<=0?l=e:c=e}return l}function Ao(e,t,n,r,i){let a=1/0,o=`water`,s,c,l,u,d=Co(t,n);d!==null&&(a=d);let f=ko(t,n,e.arena,e.ground);if(f!==null&&f<a){a=f,o=`island`;let r=ct(e.arena);if(r.solids.length>0){let i=ee(t,n,f);u=kt(r,e.ground,i.x,i.y,i.z,rt(r,e.ground,i.x,i.z))}}for(let d of e.ships){let e=So(d.hull,d.masts)+R(t,n)+r;if(d.side===i||R(t,d.frame.position)>e)continue;let f=Ua(d.frame,t),p=Ua(d.frame,n);for(let e of d.hull){let t=e.halfSize,n=e.center,i=r,m=To(f,p,I(n.x-t.x-i,n.y-t.y-i,n.z-t.z-i),I(n.x+t.x+i,n.y+t.y+i,n.z+t.z+i));m!==null&&m<a&&(a=m,o=`hull`,s=d.side,c=void 0,l=void 0,u=void 0)}for(let e=0;e<d.masts.length;e++){let t=d.masts[e];if(t.top<=t.bottom)continue;let n=Oo(f,p,I(t.x,t.bottom,0),I(t.x,t.top,0),t.radius+r);n!==null&&n<a&&(a=n,o=`mast`,s=d.side,c=void 0,l=e,u=void 0)}for(let e of d.crew){let{base:i,top:f,radius:p}=e.capsule,m=Oo(t,n,i,f,p+r);m!==null&&m<a&&(a=m,o=`crew`,s=d.side,c=e.unitIndex,l=void 0,u=void 0)}}return a===1/0?null:{t:a,point:ee(t,n,a),surface:o,side:s,unitIndex:c,mast:l,rock:u}}function jo(e,t){return Math.max(0,R(e,rn(e,t.base,t.top))-t.radius)}var Mo=1e-9;function No(e){return e!==null&&(e.surface===`hull`||e.surface===`mast`||e.surface===`crew`)&&e.side!==void 0}var Po=e=>e<=Mo?0:e;function Fo(e,t,n,r,i=1){let a=Math.min(r.damage*i,e.hp);e.hp=Po(e.hp-a);let o=[];for(let i of t.crew){let t=e.crew[i.unitIndex];if(t.hp<=0||jo(n,i.capsule)>r.splashRadius)continue;let a=Math.min(r.damage,t.hp);t.hp=Po(t.hp-a),o.push({unitIndex:i.unitIndex,amount:a,hp:t.hp,killed:t.hp===0})}return{side:e.side,shipAmount:a,shipHp:e.hp,crew:o}}function Io(e,t){let n=Ua(e.frame,t),r=1/0;for(let{center:t,halfSize:i}of e.hull){let e=Math.max(0,Math.abs(n.x-t.x)-i.x),a=Math.max(0,Math.abs(n.y-t.y)-i.y),o=Math.max(0,Math.abs(n.z-t.z)-i.z);r=Math.min(r,Math.hypot(e,a,o))}return r}var Lo=4,Ro=60;function zo(e,t,n,r){let{ship:i,cannonMount:a,gunners:o}=e.config,s=e.frameOf(t),c=Va(s,Ga(o[n],i,a)),l=Ha(s,F(r,c));return Math.atan2(l.x,l.z)}function Bo(e,t,n,r,i,a){let{physics:o,cannons:s,gunners:c}=e.config,l=s[c[n].cannon],u=zo(e,t,n,r);if(o.drag===0){let s=I(a.x,a.y-o.gravity,a.z),c=0;for(let a=0;a<Lo;a++){let a=e.muzzle(t,n,{yaw:u,pitch:i}).origin,l=Vo(F(r,a),s,i,o.maxFlightTime);if(l===null)return null;let d=mt(Be(F(r,a),s,-.5*l*l),1/l),f=Ha(e.frameOf(t),d);u=Math.atan2(f.x,f.z),c=Math.sqrt(d.x*d.x+d.y*d.y+d.z*d.z)}let d=(c-l.minSpeed)/(l.maxSpeed-l.minSpeed);return d>=0&&d<=1?{aim:{yaw:u,pitch:i},power:d}:null}let d=r,f=null;for(let o=0;o<Lo;o++){u=zo(e,t,n,d);let o=e.muzzle(t,n,{yaw:u,pitch:i});if(f=Ho(e,n,o,d),f===null)return null;let s=Uo(o,j(l.minSpeed,l.maxSpeed,f),r.y,e,a);if(!s)return null;d=I(d.x-(s.x-r.x),d.y,d.z-(s.z-r.z))}return f===null?null:{aim:{yaw:u,pitch:i},power:f}}function Vo(e,t,n,r){let i=Math.tan(n),a=n=>{let r=.5*n*n,a=e.x-t.x*r,o=e.z-t.z*r;return e.y-t.y*r-i*Math.sqrt(a*a+o*o)};if(a(0)>=0||a(r)<0)return null;let o=0,s=r;for(let e=0;e<Ro;e++){let e=(o+s)/2;a(e)<0?o=e:s=e}return(o+s)/2}function Ho(e,t,n,r){let i=e.config.cannons[e.config.gunners[t].cannon],a=e.config.physics,o=Xt(n.origin,r),s=n.direction,c=Math.sqrt(s.x*s.x+s.z*s.z);if(c<1e-6)return null;if(a.drag===0){let e=n.origin.y+o*s.y/c-r.y;if(e<=0)return null;let t=(Math.sqrt(a.gravity*o*o/(2*c*c*e))-i.minSpeed)/(i.maxSpeed-i.minSpeed);return t>=0&&t<=1?t:null}let l=e=>{let t={position:n.origin,velocity:mt(s,j(i.minSpeed,i.maxSpeed,e))},r=1/a.stepsPerSecond;for(let e=0;e<a.maxFlightTime;e+=r){let e=ho(t,r,a),i=Xt(e.position,n.origin);if(i>=o){let r=Xt(t.position,n.origin);return j(t.position.y,e.position.y,(o-r)/(i-r))}t=e}return-1/0};if(l(1)<r.y||l(0)>r.y)return null;let u=0,d=1;for(let e=0;e<30;e++){let e=(u+d)/2;l(e)<r.y?u=e:d=e}return(u+d)/2}function Uo(e,t,n,r,i){let a=r.config.physics,o=1/a.stepsPerSecond,s={position:e.origin,velocity:mt(e.direction,t)};for(let e=0;e<a.maxFlightTime;e+=o){let e=ho(s,o,a,i);if(e.velocity.y<0&&e.position.y<=n){let t=(s.position.y-n)/(s.position.y-e.position.y);return I(j(s.position.x,e.position.x,t),n,j(s.position.z,e.position.z,t))}s=e}return null}function Wo(e,t,n,r,i=1,a=e.windAcceleration()){let o=e.config.aim,s=$t(o.yawLimitDeg),c=[];for(let l=o.pitchMinDeg;l<=o.pitchMaxDeg+1e-9;l+=i){let i=Bo(e,t,n,r,$t(l),a);if(!i||Math.abs(i.aim.yaw)>s)continue;let o=e.predict(t,n,i.aim,i.power,a);No(o.hit)&&o.hit.side===h(t)&&c.push({...i,flight:o})}return c}var Go=[`damage`,`blast`,`split`,`meteor`],Ko=18,qo=1.5,Jo=.8,Yo=.3,Xo=45,Zo=.6,Qo=48,$o=.3,es=.7,ts=24,ns=[[`linear`,35],[`fast`,15],[`ease`,40],[`jitter`,10]];function rs(e,t,n,r,i){let{weights:a,splitUses:o}=e.powerUps,s=Go.reduce((e,t)=>e+Math.max(0,a[t]??0),0);if(s<=0)return null;let c=t.range(0,s),l=Go[0];for(let e of Go)if(l=e,c-=Math.max(0,a[e]??0),c<0)break;let u=t.range(0,100),d=`linear`;for(let[e,t]of ns)if(d=e,u-=t,u<0)break;let f=t.range(0,2),p=i(l);if(!p)return null;let{anchor:m,travel:h}=p;return{id:n,kind:l,spawnClock:r,anchor:m,travel:h,motion:d,phase:f,uses:l===`split`?Math.max(1,Math.round(o)):1}}var is=e=>{let t=(e%2+2)%2;return t<=1?t:2-t},as=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2;function os(e,t,n){let{holdTime:r,sweepTime:i}=n.powerUps,a=Math.max(0,t-e.spawnClock-r),o=a/Math.max(.1,i)+e.phase;switch(e.motion){case`linear`:return is(o);case`fast`:return is(e.phase+(o-e.phase)*1.5);case`ease`:return as(is(o));case`jitter`:{let t=.06*Math.sin(a*2.4+e.phase*5)+.04*Math.sin(a*3.8)+.05*Math.sin(a*1.3+e.phase);return Kt(is(o)+t,0,1)}}}function ss(e,t,n,r){let i=-1/0;for(let a of n)if(a.kind===`column`)Math.hypot(e-a.x,t-a.z)<=a.radiusBottom+r&&(i=Math.max(i,a.top));else{let n=e-a.x,o=t-a.z,s=n*a.ux+o*a.uz,c=-n*a.uz+o*a.ux,l=a.radius+a.tube+r;Math.abs(c)<=a.tube+r&&Math.abs(s)<=l&&(i=Math.max(i,a.y+Math.sqrt(l*l-s*s)))}return i}function cs(e,t){return[za(t.player,e.arena.orbitRadius).position,za(t.enemy,e.arena.orbitRadius).position]}function ls(e,t,n,r,i,a){let[o,s]=cs(e,t),c=ct(e.arena),l=ps(e,n),u=Math.max(Math.max(0,rt(c,a,r,i))+e.powerUps.clearance,ss(r,i,Ct(c,a),l)+l+1.5),d=Math.hypot(s.x-o.x,s.z-o.z),f=d>0?Kt(((r-o.x)*(s.x-o.x)+(i-o.z)*(s.z-o.z))/d,0,d):0,p=e.ship.deckHeight+e.cannonMount.pivotHeight,m=Math.min(e.powerUps.maxPitchDeg,e.aim.pitchMaxDeg);return{floor:u,ceiling:p+(d>0?Math.tan($t(m))*f*(d-f)/d:0)-1}}function us(e,t,n=`damage`,r,i){let[a,o]=cs(e,t),s=r?.x??(a.x+o.x)/2,c=r?.z??(a.z+o.z)/2,{floor:l,ceiling:u}=ls(e,t,n,s,c,i);return{anchor:I(s,l,c),travel:Math.max(0,Math.min(e.powerUps.travel,u-l))}}function ds(e,t,n,r,i,a){let[o,s]=cs(e,t),c=Math.hypot(s.x-o.x,s.z-o.z);if(!(c>0))return null;let l=-(s.z-o.z)/c,u=(s.x-o.x)/c,d=ct(e.arena),{travel:f,spread:p}=e.powerUps;for(let c=0;c<ts;c++){let m=r.range($o,es),h=r.range(-p,p),g=o.x+(s.x-o.x)*m+l*h,_=o.z+(s.z-o.z)*m+u*h,v=c<ts/2;if(v&&rt(d,i,g,_)<=0)continue;let{floor:y,ceiling:b}=ls(e,t,n,g,_,i);if(y>b||v&&b-y<f/2)continue;let x=y+r.range(0,1)*Math.max(0,b-y-f),S=I(g,x,_);if(!a||a(S,ps(e,n)))return{anchor:S,travel:Math.max(0,Math.min(f,b-x))}}return null}function fs(e,t,n){let{anchor:r,travel:i}=t,a=Ko*(1-ge(0,qo,n-t.spawnClock));return I(r.x,r.y+i*os(t,n,e)+a,r.z)}function ps(e,t){return t===`split`?e.powerUps.gateRadius:e.powerUps.radius}function ms(e,t,n,r){let i=t.x-e.x,a=t.y-e.y,o=t.z-e.z,s=e.x-n.x,c=e.y-n.y,l=e.z-n.z,u=s*s+c*c+l*l-r*r;if(u<=0)return 0;let d=i*i+a*a+o*o,f=s*i+c*a+l*o;if(d===0||f>0)return null;let p=f*f-d*u;if(p<0)return null;let m=(-f-Math.sqrt(p))/d;return m<=1?m:null}function hs(e,t,n){let{config:r}=e,{physics:i}=r,a=1/i.stepsPerSecond,o=Math.ceil(i.maxFlightTime/a),s=r.powerUps,c=ps(r,n.kind),l=[],u=[],d=1/0,f=(e,t)=>{l.length>=Qo||l.push({start:e,state:{position:e.origin,velocity:e.velocity},step:0,points:[e.origin],done:!1,flight:null,split:!1,blastScale:e.blastScale,immune:t})};for(let e of t)f(e,!1);let p=(e,t,n)=>{e.done=!0,e.flight={points:e.points,dt:a,duration:t,hit:n}};for(;;){let t=null;for(let e of l)e.done||(!t||e.start.delay+e.step*a<t.start.delay+t.step*a)&&(t=e);if(!t)break;let m=t,h=l.indexOf(m);if(m.step>=o){p(m,m.step*a,null);continue}let g=m.state.position,_=ho(m.state,a,i,e.wind),v=_.position,y=e.test(g,v,m.start.radius),b=null;if(n.uses>0&&m.start.kind===`ball`&&!(n.kind===`split`&&m.immune)&&(b=ms(g,v,fs(r,n,e.clock+m.start.delay+(m.step+.5)*a),c+m.start.radius),b!==null&&y!==null&&y.t<b&&(b=null)),b!==null){let t=ee(g,v,b),r=m.start.delay+(m.step+b)*a;if(n.uses--,u.push({time:r,ball:h,kind:n.kind,point:t,usesLeft:n.uses}),n.kind===`split`){m.points.push(t),m.split=!0,p(m,(m.step+b)*a,null);let e=I(gs(m.state.velocity.x,_.velocity.x,b),gs(m.state.velocity.y,_.velocity.y,b),gs(m.state.velocity.z,_.velocity.z,b)),n=s.splitAngleDeg*Math.PI/180;for(let i of[1,-1]){let a=Math.cos(i*n),o=Math.sin(i*n);f({delay:r,origin:t,velocity:I(e.x*a-e.z*o,e.y,e.x*o+e.z*a),radius:m.start.radius,kind:`ball`,parent:h,blastScale:m.blastScale},!0)}continue}if(n.kind===`damage`&&(d=Math.min(d,r)),n.kind===`blast`&&(m.blastScale*=s.blastMultiplier),n.kind===`meteor`)for(let t of _s(e,r))f(t,!0)}if(y){m.points.push(y.point),p(m,(m.step+y.t)*a,y);continue}m.points.push(v),m.state=_,m.step++}return{balls:l.map(e=>{let t=e.flight,n=e.start.delay+t.duration;return{...e.start,blastScale:e.blastScale,flight:t,split:e.split,damageScale:n>d&&!e.split?s.damageMultiplier:1}}),pickups:u}}var gs=(e,t,n)=>e+(t-e)*n;function _s(e,t){let{config:n,rng:r}=e,i=e.shooter===`player`?`enemy`:`player`,a=za(e.angles[i],n.arena.orbitRadius),o=n.ship.hull,s=Math.min(...o.map(e=>e.center.x-e.halfSize.x)),c=Math.max(...o.map(e=>e.center.x+e.halfSize.x)),l=Math.max(...o.map(e=>e.halfSize.z)),{min:u,max:d}=n.powerUps.meteors,f=Math.max(0,Math.round(u)+r.int(Math.max(0,Math.round(d)-Math.round(u))+1)),p=[];for(let e=0;e<f;e++){let i=r.range(s+1,c-1),o=r.range(-l,l)*.8,u=n.ship.deckHeight+Xo,d=I(a.position.x+a.forward.x*i+a.starboard.x*o,u,a.position.z+a.forward.z*i+a.starboard.z*o);p.push({delay:t+Jo+e*Yo,origin:d,velocity:I(0,-30,0),radius:Zo,kind:`meteor`,parent:null,blastScale:1})}return p}var vs=class e{s;constructor(e){this.s=e>>>0}get state(){return this.s}set state(e){this.s=e>>>0}nextUint32(){this.s=this.s+1831565813>>>0;let e=this.s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),(e^e>>>14)>>>0}next(){return this.nextUint32()/4294967296}range(e,t){return e+(t-e)*this.next()}int(e){return Math.floor(this.next()*e)}chance(e){return this.next()<e}gaussian(){let e=1-this.next(),t=this.next();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}pick(e){return e[this.int(e.length)]}fork(){return new e(this.nextUint32())}},ys=.45,bs=class{side;rng;memory={powerBias:0,yawBias:0,shots:0,targetAngle:null,preferredPitch:null,lastGunner:null,threatened:!1};constructor(e,t){this.side=e,this.rng=new vs(t)}observe(e,t){if(e.side===this.side)return;let n=t.frameOf(this.side).position;this.memory.threatened=e.projectiles.some(e=>e.flight.hit!==null&&(No(e.flight.hit)||R(e.flight.hit.point,n)<16))}planTurn(e,t=e.state.clock){let{config:n}=e,r=n.bot,i=this.memory,a=this.rng,o=Kt(r.difficulty,0,1),s=j(1.7,.45,o),c=h(this.side),l=e.state.ships[c].angle,u=r.startPowerError*s,d=$t(r.startYawErrorDeg)*s;i.shots===0?(i.powerBias=this.signed()*u*a.range(.6,1),i.yawBias=this.signed()*d*a.range(.4,1)):i.targetAngle!==null&&Math.abs(l-i.targetAngle)*n.arena.orbitRadius>r.targetMovedDistance&&this.growError(u*r.targetMovedError,d*r.targetMovedError,u,d);let f=$t(r.windAngleErrorDeg)*s*a.gaussian(),p=r.windStrengthError*s*a.gaussian(),m=e.windAcceleration({angle:e.state.wind.angle+f,speed:Math.max(0,e.state.wind.speed*(1+p))}),g=this.chooseGunner(e),_=this.chooseTarget(e,g),v=this.chooseSpot(e,g,_,m);Math.abs(v-e.state.ships[this.side].angle)*n.arena.orbitRadius>3&&this.growError(u*r.selfMovedError,d*r.selfMovedError,u,d);let y=xs(e,this.side,v,()=>Wo(e,this.side,g,_(),2,m)),b,x,S=this.choosePitch(y);S?(b=S.aim,x=S.power,i.preferredPitch=S.aim.pitch):(b={yaw:0,pitch:$t(n.aim.pitchMaxDeg-3)},x=.7);let C=i.yawBias+$t(r.jitterYawDeg)*a.gaussian(),w=i.powerBias+r.jitterPower*a.gaussian(),T=e=>({aim:Ka({yaw:e.aim.yaw+C,pitch:e.aim.pitch},n.aim),power:Kt(e.power+w,n.power.cancelBelow+.05,1)});({aim:b,power:x}=T({aim:b,power:x}));let E=j(.72,.38,o);i.powerBias*=E*(a.chance(r.overcorrectChance)?-1:1),i.yawBias*=E*(a.chance(r.overcorrectChance)?-1:1),i.shots++,i.targetAngle=l,i.lastGunner=g,i.threatened=!1;let D={thinkTime:a.range(r.thinkTime.min,r.thinkTime.max),sailTo:v,unitIndex:g,aim:b,power:x,aimTime:a.range(r.aimTime.min,r.aimTime.max),misfire:a.chance(r.misfireChance*(1-o)*2),wait:0,fireClock:null},O=n.powerUps?.enabled?e.state.powerUp:null;if(O&&!D.misfire&&y.length>0&&a.chance(Kt(r.powerUpChance*j(.6,1.4,o),0,1))){let n=[{unitIndex:g,solutions:y}];xs(e,this.side,v,()=>{for(let t of e.livingGunners(this.side)){let r=this.targetThrough(e,t,O.anchor);r&&n.push({unitIndex:t,solutions:Wo(e,this.side,t,r,2,m)})}});let r=this.timeThroughPowerUp(e,n,D,t);if(r)return{...D,unitIndex:r.unitIndex,...T(r.solution),wait:r.wait,fireClock:r.fireClock}}return D}timeThroughPowerUp(e,t,n,r){let{config:i}=e,a=e.state.powerUp,{anchor:o}=a,s=ps(i,a.kind),c=Math.abs(n.sailTo-e.state.ships[this.side].angle)*i.arena.orbitRadius/i.ship.sailSpeed,l=r+n.thinkTime+c+ys+n.aimTime,u=null;for(let{unitIndex:e,solution:n}of t.flatMap(e=>e.solutions.map(t=>({unitIndex:e.unitIndex,solution:t})))){let{points:t,dt:r}=n.flight,c=-1,d=1/0;if(t.forEach((e,t)=>{let n=Math.hypot(e.x-o.x,e.z-o.z);n<d&&(d=n,c=t)}),c<0||d>s*.5)continue;let f=t[c].y,p=n.power*i.power.fillTime+.1;for(let t=0;t<=i.bot.powerUpMaxWait&&(!u||t<u.wait);t+=.05){let o=l+t+p,d=fs(i,a,o+c*r).y;if(Math.abs(d-f)<s*.35){u={unitIndex:e,solution:n,wait:t,fireClock:o};break}}}return u}targetThrough(e,t,n){let{config:r}=e,i=Va(e.frameOf(this.side),Ga(r.gunners[t],r.ship,r.cannonMount)),a=e.frameOf(h(this.side)),o=a.forward,s=n.x-i.x,c=n.z-i.z,l=a.position.x-i.x,u=a.position.z-i.z,d=o.x*c-s*o.z;if(Math.abs(d)<1e-6)return null;let f=(o.x*u-l*o.z)/d,p=(s*u-c*l)/d,m=r.ship.hull,g=Math.min(...m.map(e=>e.center.x-e.halfSize.x))+1,_=Math.max(...m.map(e=>e.center.x+e.halfSize.x))-1;return f<=1||p<g||p>_?null:Va(a,I(p,r.ship.deckHeight+.5,0))}chooseGunner(e){let{config:t}=e,n=h(this.side),r=R(e.frameOf(this.side).position,e.frameOf(n).position),i=e.state.ships[n].crew.some(e=>e.hp>0&&e.hp<=t.cannons.heavy.damage),a=e.livingGunners(this.side),o=a.map(e=>{let n=t.gunners[e].cannon,a=1;return n===`heavy`&&i&&(a+=.8),n===`scatter`&&(a=r<125?.9:.35),e===this.memory.lastGunner&&(a*=1.6),a}),s=this.rng.range(0,o.reduce((e,t)=>e+t,0));for(let e=0;e<a.length;e++)if(s-=o[e],s<=0)return a[e];return a[a.length-1]}chooseTarget(e,t){let{config:n}=e,r=h(this.side),i=e.state.ships[r].crew.filter(e=>e.hp>0),a=n.cannons[n.gunners[t].cannon],o=i.filter(e=>e.hp<=a.damage),s=o.length>0&&this.rng.chance(.7)?this.rng.pick(o):this.rng.chance(.5)?this.rng.pick(i):null,c=s?I(n.gunners[s.unitIndex].x,n.ship.deckHeight+.8,n.crew.standZ):I(0,n.ship.deckHeight+.5,0);return()=>Va(e.frameOf(r),c)}chooseSpot(e,t,n,r){let{config:i}=e,a=e.state.ships[this.side],o=un(this.side,i.arena),s=a.fuel/i.arena.orbitRadius,c=a.angle,l=i=>xs(e,this.side,i,()=>Wo(e,this.side,t,n(),4,r).length>0),u=[-1,-.66,-.33,.33,.66,1].map(e=>dn(c+e*s,o)).filter((e,t,n)=>Math.abs(e-c)>.001&&n.indexOf(e)===t);if(!l(c))return[...u].sort((e,t)=>Math.abs(e-c)-Math.abs(t-c)).find(l)??c;let d=this.memory.threatened&&this.rng.chance(e.config.bot.dodgeChance);if(d||this.rng.chance(e.config.bot.repositionChance)){let e=(d?[...u].sort((e,t)=>Math.abs(t-c)-Math.abs(e-c)):this.shuffled(u)).slice(0,3).find(l);if(e!==void 0)return e}return c}choosePitch(e){if(e.length===0)return null;let t=this.memory.preferredPitch;if(t!==null)return e.reduce((e,n)=>Math.abs(n.aim.pitch-t)<Math.abs(e.aim.pitch-t)?n:e);let n=Math.floor(e.length*.2),r=Math.max(n+1,Math.ceil(e.length*.75));return e[n+this.rng.int(r-n)]}growError(e,t,n,r){let i=this.memory;i.powerBias=Kt(i.powerBias+this.signed()*e,-n*1.4,n*1.4),i.yawBias=Kt(i.yawBias+this.signed()*t,-r*1.4,r*1.4)}signed(){return this.rng.chance(.5)?1:-1}shuffled(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=this.rng.int(e+1);[t[e],t[n]]=[t[n],t[e]]}return t}};function xs(e,t,n,r){let i=e.state.ships[t],a=i.angle;i.angle=n;try{return r()}finally{i.angle=a}}var Ss=1e-9;function Cs(e,t){let n=0,r=0;return e.ship.masts.forEach((e,i)=>{let a=Math.max(0,e.top-e.sailFrom);n+=a,r+=Math.min(a,Math.max(0,(t.masts[i]?.top??e.top)-e.sailFrom))}),n>0?r/n:1}function ws(e,t,n=0){let r=e.destruction,i=Math.min(1,Math.max(0,e.ship.minSailMove)),a=1;return r?.enabled&&r.masts&&t<1&&(a=i+(1-i)*Math.max(0,t)),r?.enabled&&r.sails&&n>0&&(a=Math.max(Math.min(a,i),a-n*Math.max(0,e.ship.sailHoleCost))),a}function Ts(e,t,n,r){let i=e.ship.masts[n]?.sails?.[r];return i!==void 0&&i.hoist<=(t.masts[n]?.top??e.ship.masts[n].top)+1e-9}function Es(e,t){return(t.sailHoles??[]).filter(n=>Ts(e,t,n.mast,n.sail)).length}function Ds(e,t){return ws(e,Cs(e,t),Es(e,t))}function Os(e,t){return e.ship.fuelPerTurn*Ds(e,t)}function ks(e,t,n){let r=[],i=0;n.forEach((e,n)=>(e.sails??[]).forEach((a,o)=>{if(!(a.hoist>e.top+1e-9||a.corners.length<3)){for(let e of a.corners)i=Math.max(i,Math.hypot(e.x,e.y,e.z));r.push({mast:n,sail:o,corners:a.corners.map(e=>Va(t,e))})}}));let a=[];if(r.length===0)return a;let o=new Set,{points:s,dt:c,duration:l}=e;for(let e=0;e+1<s.length;e++){let n=s[e],u=s[e+1];if(R(rn(t.position,n,u),t.position)>i+1)continue;let d=[];for(let e of r)if(!o.has(e))for(let t=1;t+1<e.corners.length;t++){let r=As(n,u,e.corners[0],e.corners[t],e.corners[t+1]);if(r!==null){d.push({f:r,s:e});break}}d.sort((e,t)=>e.f-t.f);let f=e*c,p=Math.min((e+1)*c,l);for(let{f:e,s:r}of d){o.add(r);let i=ee(n,u,e);a.push({time:f+e*(p-f),mast:r.mast,sail:r.sail,point:i,local:Ua(t,i)})}}return a}function As(e,t,n,r,i){let a=F(t,e),o=F(r,n),s=F(i,n),c=qe(a,s),l=O(o,c);if(Math.abs(l)<1e-12)return null;let u=F(e,n),d=O(u,c)/l;if(d<0||d>1)return null;let f=qe(u,o),p=O(a,f)/l;if(p<0||d+p>1)return null;let m=O(s,f)/l;return m>=0&&m<=1?m:null}function js(e,t,n,r,i){let a=e.destruction,o=a.craterRadius*Math.sqrt(Math.max(0,r))*i,s=a.craterDepth*Math.max(0,r);if(!(o>0)||!(s>0))return null;let c={x:n.x,z:n.z,radius:o,depth:s};return t.craters.push(c),c}function Ms(e){let t=ct(e.arena),n=e.destruction;return{rocks:t.solids.map(e=>({solid:{...e},hp:t.id===`lighthouse`?n.towerHp:n.rockHp})),peaks:t.peaks.map(()=>({cap:null,hp:n.rockHp}))}}function Ns(e,t,n,r,i){let a=t.rocks[n],o=a?.solid;if(!a||!o||o.kind===`column`&&r.y>o.top)return null;if(a.hp-=i,a.hp>Ss)return{hp:a.hp,fall:null};let s=e.destruction;if(a.hp=ct(e.arena).id===`lighthouse`&&o.kind===`column`?s.towerHp:s.rockHp,o.kind===`arch`){a.solid=null;let e=[-1,1].map(e=>{let n={kind:`column`,x:o.x+e*o.radius*o.ux,z:o.z+e*o.radius*o.uz,bottom:-6,top:o.y,radiusBottom:o.tube,radiusTop:o.tube};return t.rocks.push({solid:n,hp:s.rockHp})-1});return{hp:a.hp,fall:{top:null,legs:e}}}let c=Math.max(0,ct(e.arena).height(o.x,o.z)),l=Math.max(o.bottom,c+s.minStump,Math.min(r.y,o.top-s.minPiece));if(l>=o.top)return null;let u=o.radiusBottom+(o.radiusTop-o.radiusBottom)*(l-o.bottom)/(o.top-o.bottom);return a.solid={...o,top:l,radiusTop:u},{hp:a.hp,fall:{top:l,legs:[]}}}function Ps(e,t,n){let r=ct(e.arena),i=r.peakAt(n.x,n.z);if(i===void 0)return;let a=st(r.peaks[i],e.destruction.tipRadius),o=t.peaks[i].cap??r.peaks[i].height;return n.y>=a&&o-e.destruction.minPiece>=a?i:void 0}function Fs(e,t,n,r,i){let a=ct(e.arena),o=t.peaks[n],s=o.cap??a.peaks[n].height;if(o.cap!==null&&r.y>o.cap)return null;if(o.hp-=i,o.hp>Ss)return{hp:o.hp,fall:null};o.hp=e.destruction.rockHp;let c=Math.max(st(a.peaks[n],e.destruction.tipRadius),Math.min(r.y,s-e.destruction.minPiece));return c>=s?null:(o.cap=c,{hp:o.hp,fall:{top:c,legs:[]}})}function Is(e){return e.ship.masts.map(t=>({top:t.top,hp:e.ship.mastHp}))}function Ls(e,t){return e.ship.masts.map((e,n)=>({...e,top:t.masts[n]?.top??e.top}))}function Rs(e,t,n,r,i,a){let o=t.masts[n],s=e.ship.masts[n];if(!o||!s)return null;let c=Math.min(Math.max(r,s.bottom),a);if(c>o.top||(o.hp-=i,o.hp>Ss))return null;let l=o.top;return o.top=Math.max(s.bottom,Math.min(c,l-e.destruction.minPiece)),o.hp=e.ship.mastHp,{mast:n,from:l,top:o.top}}var zs=5,Bs=class{config;seed;state;rng;powerRng;constructor(e,t){this.config=e,this.seed=t,this.rng=new vs(t),this.powerRng=new vs((t^1540483477)>>>0),this.state=Vs(e)}start(){this.expectPhase(`ready`);let e=this.rng.chance(.5)?`player`:`enemy`;return[{type:`MatchStarted`,firstSide:e},...this.beginTurn(e)]}sail(e,t){this.expectPhase(`turn`);let n=this.activeShip,r=Math.sign(e),i=Math.min(this.config.ship.sailSpeed*Math.max(0,t),n.fuel);if(r===0||i<=0)return[];let{orbitRadius:a}=this.config.arena,o=dn(n.angle+r*i/a,un(n.side,this.config.arena)),s=Math.abs(o-n.angle)*a;return s<=0?[]:(n.angle=o,n.fuel=n.fuel-s>1e-9?n.fuel-s:0,[{type:`ShipMoved`,side:n.side,angle:o,fuel:n.fuel}])}selectGunner(e){if(this.expectPhase(`turn`),!this.isAlive(this.state.turnSide,e))throw Error(`Gunner ${e} can't be selected`);return this.state.selected=e,[{type:`GunnerSelected`,side:this.state.turnSide,unitIndex:e}]}setAim(e){this.expectPhase(`turn`);let t=this.requireSelected(),n=Ka(e,this.config.aim);return this.state.aims[this.state.turnSide][t]=n,n}fire(e){this.expectPhase(`turn`);let t=this.state.turnSide,n=this.requireSelected(),r=this.config.gunners[n],i=this.config.cannons[r.cannon],a=this.state.stats[t];e.clock!==void 0&&(this.state.clock=Math.max(this.state.clock,e.clock));let o=this.state.aims[t][n],s,c=`misfire`in e;if(`misfire`in e){let e=this.config.power,t=$t(e.misfireDeviationDeg);s=this.rng.range(e.misfirePowerMin,e.misfirePowerMax),o={yaw:o.yaw+this.rng.range(-t,t),pitch:o.pitch+this.rng.range(-t,t)},a.misfires++}else s=Kt(e.power,0,1),this.state.lastPower[t]=s;let l=this.collisionWorld(),u=this.windAcceleration(),d=Qa(i,this.muzzle(t,n,o),s,this.rng),f=this.config.powerUps?.enabled?this.state.powerUp:null,p,m=[];if(!f)p=d.map(e=>{let n=this.simulate(l,e.origin,e.velocity,i.ballRadius,t,u);return{launch:e,flight:n,impactTime:e.delay+n.duration,kind:`ball`,parent:null,split:!1,damageScale:1,blastScale:1}});else{let e=d.map(e=>({delay:e.delay,origin:e.origin,velocity:e.velocity,radius:i.ballRadius,kind:`ball`,parent:null,blastScale:1})),n=hs({config:this.config,angles:{player:this.state.ships.player.angle,enemy:this.state.ships.enemy.angle},clock:this.state.clock,shooter:t,wind:u,test:(e,n,r)=>Ao(l,e,n,r,t),rng:this.powerRng},e,f);p=n.balls.map((e,t)=>({launch:{index:t,delay:e.delay,origin:e.origin,velocity:e.velocity},flight:e.flight,impactTime:e.delay+e.flight.duration,kind:e.kind,parent:e.parent,split:e.split,damageScale:e.damageScale,blastScale:e.blastScale}));for(let e of n.pickups)m.push({type:`PowerUpCollected`,time:e.time,projectile:e.ball,kind:e.kind,point:e.point,usesLeft:e.usesLeft});f.uses<=0&&(this.state.powerUp=null)}let h=[{type:`ShotFired`,shot:{side:t,unitIndex:n,cannonId:r.cannon,aim:o,power:s,misfire:c,projectiles:p,duration:Math.max(...p.map(e=>e.impactTime))}},...m],g=[];if(this.config.destruction?.enabled&&this.config.destruction.sails){let e=l.ships.find(e=>e.side!==t),n=p.flatMap((t,n)=>ks(t.flight,e.frame,e.masts).map(r=>({...r,time:t.launch.delay+r.time,projectile:n,side:e.side})));n.sort((e,t)=>e.time-t.time);for(let e of n){let t=this.state.ships[e.side];t.sailHoles.push({mast:e.mast,sail:e.sail,x:e.local.x,y:e.local.y}),g.push({type:`SailTorn`,time:e.time,projectile:e.projectile,side:e.side,mast:e.mast,sail:e.sail,point:e.point,sailing:Ds(this.config,t)})}}let _=p.map((e,t)=>t).sort((e,t)=>p[e].impactTime-p[t].impactTime),v=!1,y=this.config.powerUps;for(let e of _){let n=p[e],{flight:r,impactTime:o}=n,s=r.hit;h.push({type:`ProjectileImpact`,time:o,projectile:e,hit:s});let c=n.kind===`meteor`?{damage:y.meteorDamage,splashRadius:y.meteorSplash}:{damage:i.damage*n.damageScale,splashRadius:i.splashRadius*n.blastScale},u=this.config.destruction;if(u?.enabled&&s?.surface===`island`){let t=this.state.island,r=s.rock??null,i=r===null&&u.rocks?Ps(this.config,t,s.point)??null:null;if(r===null&&i===null){let r=u.craters?js(this.config,t,s.point,c.damage,n.blastScale):null;r&&h.push({type:`CraterDug`,time:o,projectile:e,crater:{...r}})}else if(u.rocks){let n=r===null?i===null?null:Fs(this.config,t,i,s.point,c.damage):Ns(this.config,t,r,s.point,c.damage);n?.fall?h.push({type:`RockFell`,time:o,projectile:e,rock:r,peak:i,top:n.fall.top,legs:[...n.fall.legs]}):n&&h.push({type:`RockDamaged`,time:o,projectile:e,rock:r,peak:i,hp:n.hp})}}let d=No(s)?s.side:null;if(!d&&s&&n.blastScale>1){let e=l.ships.find(e=>e.side!==t);Io(e,s.point)<=c.splashRadius&&(d=e.side)}if(!d||!s)continue;let f=d;v||=f!==t;let m=l.ships.find(e=>e.side===f),g=s.surface===`mast`?this.config.ship.mastDamage:1,_=Fo(this.state.ships[f],m,s.point,c,g);_.shipAmount>0&&(h.push({type:`ShipDamaged`,time:o,side:f,amount:_.shipAmount,hp:_.shipHp,point:s.point}),a.shipDamage+=_.shipAmount);for(let e of _.crew)h.push({type:`UnitDamaged`,time:o,side:f,unitIndex:e.unitIndex,amount:e.amount,hp:e.hp}),a.crewDamage+=e.amount,e.killed&&(h.push({type:`UnitKilled`,time:o,side:f,unitIndex:e.unitIndex}),a.kills++);if(this.config.destruction?.enabled&&this.config.destruction.masts&&s.surface===`mast`&&s.mast!==void 0){let t=Ua(m.frame,s.point).y,n=Rs(this.config,this.state.ships[f],s.mast,t,c.damage,m.masts[s.mast].top);if(n){let t=Cs(this.config,this.state.ships[f]),r=Ds(this.config,this.state.ships[f]);h.push({type:`MastBroken`,time:o,projectile:e,side:f,mast:n.mast,top:n.top,sail:t,sailing:r})}}}for(let e of g){let t=h.findIndex((t,n)=>n>0&&`time`in t&&t.time>e.time);h.splice(t<0?h.length:t,0,e)}return a.shots++,v&&a.hits++,this.state.phase=`resolving`,h}endTurn(e){this.expectPhase(`resolving`),e!==void 0&&(this.state.clock=Math.max(this.state.clock,e));let t=this.state.turnSide,n=this.state.ships[h(t)],r=n.hp<=0?`sunk`:n.crew.every(e=>e.hp<=0)?`crew`:null;return r?(this.state.phase=`ended`,this.state.winner=t,this.state.endReason=r,[{type:`MatchEnded`,winner:t,reason:r}]):this.beginTurn(n.side)}get activeShip(){return this.state.ships[this.state.turnSide]}isAlive(e,t){let n=this.state.ships[e].crew[t];return n!==void 0&&n.hp>0}livingGunners(e){return this.state.ships[e].crew.filter(e=>e.hp>0).map(e=>e.unitIndex)}frameOf(e){return za(this.state.ships[e].angle,this.config.arena.orbitRadius)}aimOf(e,t){return this.state.aims[e][t]}muzzle(e,t,n=this.aimOf(e,t)){let{ship:r,cannonMount:i,gunners:a}=this.config;return Ya(this.frameOf(e),a[t],r,i,n)}indicatorPower(e){return this.state.lastPower[e]??this.config.aim.firstShotPower}predict(e,t,n,r,i=this.windAcceleration(),a=this.config.physics.maxFlightTime){let o=this.config.cannons[this.config.gunners[t].cannon],s=this.muzzle(e,t,n),c=mt(s.direction,Xa(o,r));return this.simulate(this.collisionWorld(),s.origin,c,o.ballRadius,e,i,a)}windAcceleration(e=this.state.wind){let t=e.speed*this.config.wind.accelPerKnot;return I(Math.cos(e.angle)*t,0,Math.sin(e.angle)*t)}collisionWorld(){let{arena:e,ship:t,crew:n,gunners:r}=this.config;return{arena:e,ships:m.map(i=>{let a=this.state.ships[i],o=za(a.angle,e.orbitRadius);return{side:i,frame:o,hull:t.hull,masts:Ls(this.config,a),crew:a.crew.filter(e=>e.hp>0).map(e=>({unitIndex:e.unitIndex,capsule:Wa(o,r[e.unitIndex],t,n)}))}}),ground:this.ground()}}ground(){let{island:e}=this.state;return{craters:e.craters,limits:this.config.destruction,rocks:e.rocks.map(e=>e.solid),caps:e.peaks.map(e=>e.cap)}}powerUpSpot(e,t=this.powerRng){let n={player:this.state.ships.player.angle,enemy:this.state.ships.enemy.angle};return ds(this.config,n,e,t,this.ground(),(e,t)=>this.canReach(e,t))}simulate(e,t,n,r,i,a,o=this.config.physics.maxFlightTime){return go(t,n,this.config.physics,(t,n)=>Ao(e,t,n,r,i),a,o)}beginTurn(e){this.state.phase=`turn`,this.state.turnSide=e,this.state.turn++,this.state.selected=null,this.state.ships[e].fuel=Os(this.config,this.state.ships[e]);let{wind:t}=this.state;t.angle=this.rng.range(0,2*Math.PI),t.speed=this.rng.range(this.config.wind.minKnots,this.config.wind.maxKnots);let n=[{type:`TurnStarted`,side:e,turn:this.state.turn,wind:{...t}}],r=this.config.powerUps;if(r?.enabled&&this.state.turn>1&&!this.state.powerUp&&this.powerRng.chance(r.spawnChance)){let e=rs(this.config,this.powerRng,this.state.powerUpCount+1,this.state.clock,e=>this.powerUpSpot(e));e&&(this.state.powerUpCount++,this.state.powerUp=e,n.push({type:`PowerUpSpawned`,powerUp:{...e}}))}return n}canReach(e,t){let{aim:n,cannons:r,gunners:i,powerUps:a}=this.config,o=Math.min(a.maxPitchDeg,n.pitchMaxDeg),s=$t(n.yawLimitDeg),c=I();return m.every(a=>this.livingGunners(a).some(l=>{let u=r[i[l].cannon];for(let r=n.pitchMinDeg;r<=o+1e-9;r+=zs){let n=Bo(this,a,l,e,$t(r),c);if(!n||Math.abs(n.aim.yaw)>s)continue;let i=this.muzzle(a,l,n.aim),o=Xa(u,n.power)*Math.cos(n.aim.pitch),d=Math.hypot(e.x-i.origin.x,e.z-i.origin.z)/Math.max(1e-6,o)+.25,{points:f}=this.predict(a,l,n.aim,n.power,c,d);for(let n=1;n<f.length;n++)if(R(rn(e,f[n-1],f[n]),e)<t/2)return!0}return!1}))}expectPhase(e){if(this.state.phase!==e)throw Error(`Expected phase '${e}', but the match is in '${this.state.phase}'`)}requireSelected(){let e=this.state.selected;if(e===null)throw Error(`No gunner selected`);return e}};function Vs(e){let t=t=>({side:t,angle:un(t,e.arena).home,hp:e.ship.hp,fuel:e.ship.fuelPerTurn,crew:e.gunners.map((t,n)=>({unitIndex:n,hp:e.crew.hp})),masts:Is(e),sailHoles:[]}),n=()=>({shots:0,hits:0,misfires:0,shipDamage:0,crewDamage:0,kills:0}),r=()=>e.gunners.map(()=>qa(e.aim));return{phase:`ready`,turnSide:`player`,turn:0,wind:{angle:0,speed:0},ships:{player:t(`player`),enemy:t(`enemy`)},selected:null,aims:{player:r(),enemy:r()},lastPower:{player:null,enemy:null},clock:0,powerUp:null,powerUpCount:0,island:{craters:[],...Ms(e)},winner:null,endReason:null,stats:{player:n(),enemy:n()}}}function Hs(e,t){return e<t.fillTime?{power:Math.max(0,e)/t.fillTime,phase:`filling`}:e<t.fillTime+t.graceTime?{power:1,phase:`grace`}:{power:1,phase:`overcharged`}}function Us(e,t){let{power:n,phase:r}=Hs(e,t);return r===`overcharged`?{kind:`misfire`}:n<t.cancelBelow?{kind:`cancel`}:{kind:`fire`,power:n}}var Ws={damage:`#ff4d4d`,blast:`#ff9a2e`,split:`#4dff88`,meteor:`#b980ff`},Gs=new L(0,0,1),Ks=class{object=new N;model=null;kind=null;crate=null;balloon=null;gate=null;disc=null;glow=null;time=0;pulse=0;leaving=null;balloonDrift=new L;pieces=[];gateRadius=4;crateRadius=3;facing=new L(0,0,1);show(e,t,n,r){this.clear(),this.kind=e,this.crateRadius=t,this.gateRadius=n,this.facing.copy(r).setY(0),this.facing.lengthSq()<1e-9&&this.facing.set(0,0,1),this.facing.normalize(),this.leaving=null,this.model=new N;let i=Ws[e];e===`split`?this.buildGate(i):this.buildCrate(e,i),this.glow=new M(new ue({map:Js(),color:i,transparent:!0,depthWrite:!1,blending:2,opacity:.7})),this.glow.scale.setScalar((e===`split`?n:t)*3.2),this.glow.renderOrder=5,this.model.add(this.glow),this.object.add(this.model)}get visible(){return this.model!==null}collect(e){if(this.pulse=1,!(e>0||!this.model||this.leaving!==null)&&(this.leaving=0,this.crate)){this.crate.visible=!1;let e=this.crate.material;for(let t=0;t<4;t++){let n=this.crateRadius*.45,r=new W(new Wt(n,n*.4,n),e);r.position.copy(this.crate.position).add(new L(t%2-.5,0,Math.floor(t/2)-.5).multiplyScalar(n));let i=r.position.clone().sub(this.crate.position).setY(.6).normalize();this.model.add(r),this.pieces.push({mesh:r,velocity:i.multiplyScalar(6+Math.random()*5).add(new L(0,3,0)),spin:new L(Math.random()*8-4,Math.random()*8-4,Math.random()*8-4)})}this.balloonDrift.set(Math.random()-.5,8,Math.random()-.5)}}clear(){this.model&&(this.object.remove(this.model),this.model.traverse(e=>{e.geometry?.dispose()})),this.model=null,this.kind=null,this.crate=null,this.balloon=null,this.gate=null,this.disc=null,this.glow=null,this.pieces=[],this.leaving=null}update(e,t){this.time+=e;let n=this.model;if(!n||(n.visible=t!==null,!t))return;this.leaving===null&&n.position.copy(t),this.pulse=Math.max(0,this.pulse-e*4);let r=1+.18*Math.sin(Math.min(1,1-this.pulse)*Math.PI)*(this.pulse>0);if(this.gate){this.gate.quaternion.setFromUnitVectors(Gs,this.facing),this.gate.rotateZ(this.time*.6);let e=this.leaving===null?1:Math.max(0,1-this.leaving/.45);this.gate.scale.setScalar(r*e),this.disc&&(this.disc.uniforms.uTime.value=this.time)}if(this.crate&&this.balloon){let t=.12*Math.sin(this.time*1.3);this.crate.rotation.set(t*.4,this.time*.4,t),this.crate.scale.setScalar(r),this.leaving!==null&&this.balloon.position.addScaledVector(this.balloonDrift,e)}if(this.glow){let e=this.glow.material;e.opacity=(.55+.2*Math.sin(this.time*3))*(this.leaving===null?1:Math.max(0,1-this.leaving*2)),this.glow.scale.setScalar((this.kind===`split`?this.gateRadius:this.crateRadius)*3.2*r)}for(let t of this.pieces)t.velocity.y-=18*e,t.mesh.position.addScaledVector(t.velocity,e),t.mesh.rotation.x+=t.spin.x*e,t.mesh.rotation.y+=t.spin.y*e,t.mesh.rotation.z+=t.spin.z*e;this.leaving!==null&&(this.leaving+=e,this.leaving>3&&this.clear())}buildCrate(e,t){let n=this.model,r=this.crateRadius*.95,i=new Je({map:Ys(e,t),roughness:.7,emissive:t,emissiveIntensity:.18}),a=new W(new Wt(r,r,r),i);a.castShadow=!0,this.crate=a;let o=new N,s=new W(new Ce(r*.75,18,14).scale(1,1.18,1),new Je({color:t,roughness:.35,emissive:t,emissiveIntensity:.12}));s.position.y=r*2.2,s.castShadow=!0;let c=new W(new ye(r*.12,r*.18,8),s.material);c.position.y=r*2.2-r*.9,c.rotation.x=Math.PI;let l=new W(new he(.03,.03,r*1.1,4),new Ve({color:`#2b2622`}));l.position.y=r*.5+r*.55,o.add(s,c,l),this.balloon=o,n.add(a,o)}buildGate(e){let t=this.model,n=this.gateRadius,r=new N,i=new W(new sn(n*.95,n*.08,10,48),new Je({color:e,emissive:e,emissiveIntensity:1.1,roughness:.4})),a=new W(new sn(n*.95,n*.12,4,8),new Je({color:`#e8fff0`,emissive:e,emissiveIntensity:.4,roughness:.5,flatShading:!0}));a.scale.setScalar(1.001),this.disc=new P({transparent:!0,depthWrite:!1,side:2,blending:2,uniforms:{uTime:{value:0},uColor:{value:new z(e)}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uColor;
        varying vec2 vUv;
        void main() {
          vec2 p = vUv * 2.0 - 1.0;
          float r = length(p);
          if (r > 1.0) discard;
          float a = atan(p.y, p.x);
          float swirl = 0.5 + 0.5 * sin(a * 3.0 + r * 11.0 - uTime * 4.5);
          float alpha = smoothstep(1.0, 0.55, r) * (0.25 + 0.5 * swirl) * (0.45 + 0.55 * r);
          gl_FragColor = vec4(uColor * (0.7 + 0.7 * swirl), alpha);
        }
      `});let o=new W(new E(n*.92,48),this.disc);o.renderOrder=6,r.add(i,a,o),this.gate=r,t.add(r)}},qs=null;function Js(){if(qs)return qs;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.35)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),qs=new Te(e),qs}function Ys(e,t){let n=document.createElement(`canvas`);n.width=n.height=128;let r=n.getContext(`2d`);r.fillStyle=`#9a6a3c`,r.fillRect(0,0,128,128),r.fillStyle=`#7b5130`;for(let e=0;e<4;e++)r.fillRect(0,e*32+30,128,3);if(r.strokeStyle=`#5a3a20`,r.lineWidth=10,r.strokeRect(5,5,118,118),r.fillStyle=t,r.beginPath(),r.arc(64,64,38,0,Math.PI*2),r.fill(),r.lineWidth=5,r.strokeStyle=`#ffffff`,r.stroke(),r.fillStyle=`#ffffff`,e===`damage`)r.font=`bold 40px system-ui, sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(`×2`,64,67);else if(e===`blast`){r.beginPath();for(let e=0;e<16;e++){let t=e/16*Math.PI*2,n=e%2?13:28;r.lineTo(64+Math.cos(t)*n,64+Math.sin(t)*n)}r.closePath(),r.fill()}else r.beginPath(),r.moveTo(44,44),r.lineTo(80,70),r.lineTo(70,80),r.closePath(),r.fill(),r.beginPath(),r.arc(76,76,14,0,Math.PI*2),r.fill();let i=new Te(n);return i.colorSpace=_t,i}function Y(e,t={},...n){let r=document.createElement(e);if(t.class&&(r.className=t.class),t.text!==void 0&&(r.textContent=t.text),t.attrs)for(let[e,n]of Object.entries(t.attrs))r.setAttribute(e,n);for(let e of n)e&&r.append(e);return r}function Xs(e,t=`icon`){let n=document.createElement(`template`);n.innerHTML=e.trim();let r=n.content.firstElementChild;return r.classList.add(t),r}function Zs(e,t,n){let r=!1;e.addEventListener(`pointerdown`,n=>{n.preventDefault(),e.setPointerCapture?.(n.pointerId),r||(r=!0,e.classList.add(`pressed`),t())});let i=()=>{r&&(r=!1,e.classList.remove(`pressed`),n())};e.addEventListener(`pointerup`,i),e.addEventListener(`pointercancel`,i),e.addEventListener(`lostpointercapture`,i),e.addEventListener(`contextmenu`,e=>e.preventDefault())}function Qs(e,t){e.addEventListener(`click`,e=>{e.preventDefault(),t()})}function $s(e,t){e.classList.remove(t),e.offsetWidth,e.classList.add(t)}var ec=120,tc=122,nc=104,rc=`M16 ${tc}A${nc} ${nc} 0 0 1 224 ${tc}`,ic=54,ac=`
<svg viewBox="-8 -8 256 140">
  <defs>
    <linearGradient id="charge-gauge-hot" gradientUnits="userSpaceOnUse" x1="16" y1="0" x2="224" y2="0">
      <stop offset="0" stop-color="#ffe9a3"/>
      <stop offset="0.5" stop-color="#ffb43d"/>
      <stop offset="0.8" stop-color="#ff7a2c"/>
      <stop offset="1" stop-color="#ff3d2a"/>
    </linearGradient>
  </defs>
  <path class="gauge-face" d="${rc}Z"/>
  <path class="gauge-rim" d="${rc}"/>
  <path class="gauge-track" d="${rc}"/>
  <path class="gauge-cancel" d="${rc}" pathLength="100"/>
  <g class="gauge-ticks"></g>
  <path class="gauge-fill" d="${rc}" pathLength="100" stroke-dasharray="0 101"/>
  <g class="gauge-last"><line class="gauge-last-shadow"/><line class="gauge-last-line"/></g>
</svg>`,oc=`
<svg viewBox="0 0 120 120">
  <circle class="ring-track" cx="60" cy="60" r="${ic}"/>
  <circle class="ring-fill" cx="60" cy="60" r="${ic}" pathLength="100" stroke-dasharray="0 101" transform="rotate(-90 60 60)"/>
  <line class="ring-last" x1="60" y1="-1" x2="60" y2="13"/>
</svg>`,sc=`http://www.w3.org/2000/svg`;function cc(e,t){let n=Math.PI*(1-e);return[ec+t*Math.cos(n),tc-t*Math.sin(n)]}var lc=class{element;ring;glow;fill;cancel;last;lastLines;ringFill;ringLast;label;value;angle;fireLabel;charging=!1;quarter=0;cancelBelow=-1;constructor(e){this.fireLabel=e;let t=Xs(ac,`gauge-arc`);this.fill=t.querySelector(`.gauge-fill`),this.cancel=t.querySelector(`.gauge-cancel`),this.last=t.querySelector(`.gauge-last`),this.lastLines=[...this.last.querySelectorAll(`line`)];let n=t.querySelector(`.gauge-ticks`);for(let e=0;e<=10;e++){let t=e%5==0,[r,i]=cc(e/10,115),[a,o]=cc(e/10,nc+(t?19:15)),s=document.createElementNS(sc,`line`);s.setAttribute(`x1`,r.toFixed(1)),s.setAttribute(`y1`,i.toFixed(1)),s.setAttribute(`x2`,a.toFixed(1)),s.setAttribute(`y2`,o.toFixed(1)),t&&s.classList.add(`major`),n.append(s)}this.label=Y(`div`,{class:`gauge-label`}),this.value=Y(`div`,{class:`gauge-value`}),this.angle=Y(`div`,{class:`gauge-angle`}),this.element=Y(`div`,{class:`charge-gauge`},t,Y(`div`,{class:`gauge-text`},this.label,this.value,this.angle)),this.ring=Xs(oc,`fire-ring`),this.ringFill=this.ring.querySelector(`.ring-fill`),this.ringLast=this.ring.querySelector(`.ring-last`),this.glow=Y(`div`,{class:`charge-glow`}),this.setCharge(null),this.setReadout(0,null,null)}setCancelZone(e){e!==this.cancelBelow&&(this.cancelBelow=e,this.cancel.setAttribute(`stroke-dasharray`,`${(Math.max(0,e)*100).toFixed(1)} 101`))}setCharge(e){let t=e?.power??0,n=e?.phase??``,r=e!==null&&!this.charging;this.charging=e!==null;for(let e of[this.element,this.ring,this.glow])e.classList.toggle(`charging`,this.charging),e.dataset.phase=n,e.style.setProperty(`--power`,t.toFixed(3));let i=`${(t*100).toFixed(2)} 101`;this.fill.setAttribute(`stroke-dasharray`,i),this.ringFill.setAttribute(`stroke-dasharray`,i),this.fireLabel.textContent=this.charging?n===`filling`?`${Math.round(t*100)}%`:`MAX`:`FIRE`,this.fireLabel.classList.toggle(`power`,this.charging);let a=this.charging?Math.min(4,Math.floor(t*4+1e-6)):0;(r||a>this.quarter)&&($s(this.value,`bump`),navigator.vibrate?.(a>=4?28:10)),this.quarter=a}setReadout(e,t,n){let r=`${Math.round(e)}°`;this.angle.textContent!==r&&(this.angle.textContent=r);let i=this.element.dataset.phase===`grace`||this.element.dataset.phase===`overcharged`,a=t===null?n===null?`Power`:`Last shot`:i?`Release!`:`Power`;this.label.textContent!==a&&(this.label.textContent=a);let o=t??n,s=o===null?`–`:`${Math.round(o*100)}%`;if(this.value.textContent!==s&&(this.value.textContent=s),this.value.style.color=t===null?``:`hsl(${(46-40*t).toFixed(0)} 100% ${(72-12*t).toFixed(0)}%)`,this.last.style.display=n===null?`none`:``,this.ringLast.style.display=n===null?`none`:``,n===null)return;let[c,l]=cc(n,92),[u,d]=cc(n,116);for(let e of this.lastLines)e.setAttribute(`x1`,c.toFixed(1)),e.setAttribute(`y1`,l.toFixed(1)),e.setAttribute(`x2`,u.toFixed(1)),e.setAttribute(`y2`,d.toFixed(1));this.ringLast.setAttribute(`transform`,`rotate(${(n*360).toFixed(1)} 60 60)`)}},uc=1e-6,dc=180,fc=112,pc=.8,mc=.6,hc={hull:`<svg viewBox="0 0 16 16"><path d="M1 7.5h14l-2.6 5.5H3.6Z"/><path d="M4 7.5V5h8v2.5" opacity=".55"/></svg>`,sail:`<svg viewBox="0 0 16 16"><path d="M7.2 1h1.6v14H7.2Z"/><path d="M9.4 2.4c3.6 1.4 5 4.6 4.6 8.6H9.4Z"/><path d="M6.6 3.6C4 4.8 2.6 7.2 2.8 10.4h3.8Z" opacity=".7"/></svg>`,gun:`<svg viewBox="0 0 16 16"><path d="M2 6.2 12.6 4.4l.5 3.4L2.6 9.4Z"/><circle cx="6" cy="10.6" r="2.6"/><circle cx="13.6" cy="6" r="1.3"/></svg>`,crack:`<svg viewBox="0 0 16 16"><path d="M7 1h2v4.2l1.6 1.6-2 2.2 1.4 1.6L9 12v3H7v-3.6l1.2-1.2L6.8 8.6l1.8-2L7 5.4Z"/></svg>`,ok:`<svg viewBox="0 0 16 16"><path d="m2.4 8.4 1.8-1.8 2.6 2.6 5-5 1.8 1.8L6.8 12.8Z"/></svg>`},gc=class{element;art;effects;seen=null;isOpen=!1;constructor(){this.art=Y(`div`,{class:`ss-art`}),this.effects=Y(`div`,{class:`ss-effects`}),this.element=Y(`div`,{class:`ship-status`},Y(`div`,{class:`ss-title`,text:`Your ship`}),this.art,this.effects)}show(e,t){if(!t&&this.isOpen)return;let n=t?this.seen??_c(e):e;t&&(this.seen=e),this.art.innerHTML=Tc(e,n),this.effects.replaceChildren(...Ac(e,n)),this.element.classList.toggle(`intro`,t),this.element.classList.toggle(`critical`,e.hp>0&&e.hp<=e.maxHp*.25),this.isOpen=!0,$s(this.element,`open`)}hide(){this.isOpen=!1,this.element.classList.remove(`open`)}reset(){this.seen=null,this.hide()}};function _c(e){return{...e,hp:e.maxHp,sailing:1,sailHoles:0,masts:e.masts.map(e=>({...e,top:e.fullTop,hp:e.maxHp})),guns:e.guns.map(e=>({...e,hp:e.maxHp})),holes:[]}}var vc=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function yc(e,t){return e.keel+e.keelRise*vc(e.keelRiseX,e.bow,t)**1.5+e.sternRise*vc(e.sternRiseX,e.stern,t)}function bc(e,t){let n=e.rail+e.bowSheer*vc(e.sheerX,e.bow,t)**2;return t<=e.castleFront&&(n=Math.max(n,e.castleTop)),e.forecastle&&t>=e.forecastle.back&&(n=Math.max(n,e.forecastle.top)),n}var X=(e,t)=>`${(-e).toFixed(2)},${(-t).toFixed(2)}`;function xc(e,t){let n=[];if(e.masts.forEach((r,i)=>{for(let[a,o,s]of r.sails){let c=t+a,l=t+o;if(e.sail===`junk`){let e=r.x+s*.22,t=r.x-s*.62,a=[.25,.5,.75].map(e=>c+(l-c)*e);n.push({mast:i,points:[[e,l],[t+.6,l+.3],[t,c],[e-.4,c]],hangs:l,battens:a})}else{let e=s*mc/2;n.push({mast:i,points:[[r.x+e,l],[r.x-e,l],[r.x-e*.9,c],[r.x+e*.9,c]],hangs:l,battens:[]})}}}),e.mizzen){let{x:t,height:r}=e.mizzen,i=e.castleTop;n.push({mast:e.masts.length,points:[[t+.32*r,i+.16*r],[t-.24*r,i+.92*r],[t-.3*r,i+.14*r]],hangs:i+.55*r,battens:[]})}return n}function Sc(e,t,n){let r=e.points.map(([e,t])=>[e,n(t)]);if(!t||r.length!==4)return`M${r.map(([e,t])=>X(e,t)).join(`L`)}Z`;let[i,a,o,s]=r,c=.18*(i[0]-a[0]),l=(e,t)=>X((e[0]+t[0])/2+c,(e[1]+t[1])/2);return`M${X(...i)}L${X(...a)}Q${l(a,o)} ${X(...o)}L${X(...s)}Q${l(s,i)} ${X(...i)}Z`}function Cc(e,t,n,r){let i=[];for(let a=0;a<10;a++){let o=a/10*Math.PI*2+r,s=a%2==0?1:.5+.15*Math.sin(r*7+a);i.push(X(e+Math.cos(o)*n*s,t+Math.sin(o)*n*s))}return`M${i.join(`L`)}Z`}function wc(e,t,n,r,i){let a=`M${e.toFixed(2)},${i.toFixed(2)}L${e.toFixed(2)},0`;for(let i=e;i<t;i+=n){let e=n/4;a+=`Q${(i+e).toFixed(2)},${(-r).toFixed(2)} ${(i+2*e).toFixed(2)},0Q${(i+3*e).toFixed(2)},${r.toFixed(2)} ${(i+n).toFixed(2)},0`}return`${a}L${t.toFixed(2)},${i.toFixed(2)}Z`}function Tc(e,t){let n=bt(e.model),r=e.deckHeight,i=`vector-effect="non-scaling-stroke"`,a=new Set;for(let e=0;e<=48;e++)a.add(n.stern+(n.bow-n.stern)*e/48);for(let e of[n.castleFront,n.forecastle?.back])e!==void 0&&a.add(e-.01).add(e+.01);let o=[...a].sort((e,t)=>e-t),s=`M${o.map(e=>X(e,bc(n,e))).join(`L`)}L${[...o].reverse().map(e=>X(e,yc(n,e))).join(`L`)}Z`,c=t=>{let n=e.masts[t]?.bottom??r;return e=>e<=n?e:n+(e-n)*pc},l=e=>e<=r?e:r+(e-r)*pc,u=Math.max(...e.masts.map((e,t)=>c(t)(e.fullTop)),n.castleTop),d=-Math.max(n.bow,n.bowsprit?.to[0]??n.bow)-1.2,f=-n.stern+3.4,p=-u-1.6,m=-n.keel+1.4,h=f-d,g=1.5/Math.min(dc/h,fc/(m-p)),_=t=>-(n.keel+(r-n.keel)*(1-Math.max(0,t)/e.maxHp)),v=_(t.hp),y=_(e.hp),b=[],x=wc(d-6,f+6,6,.4,m+2);b.push(`<svg viewBox="${d.toFixed(2)} ${p.toFixed(2)} ${h.toFixed(2)} ${(m-p).toFixed(2)}" preserveAspectRatio="xMidYMax meet">`,`<defs><clipPath id="ss-hull-clip"><path d="${s}"/></clipPath></defs>`,`<g class="ss-sea"><path d="${x}"/></g>`,`<g class="ss-ship">`);let S=n.bowsprit;S&&b.push(`<path class="ss-spar" ${i} d="M${X(S.from[0],l(S.from[1]))}L${X(S.to[0],l(S.to[1]))}"/>`);let C=n.sail===`square`;for(let a of xc(n,r)){let r=e.masts[a.mast];if(!r)continue;let o=a.hangs>r.top+uc,s=o&&a.hangs<=(t.masts[a.mast]?.top??r.fullTop)+uc,l=`ss-sail${o?` lost`:``}${s?` fresh`:``}${a.mast===n.masts.length?` lateen`:``}`,u=c(a.mast);if(b.push(`<path class="${l}" ${i} d="${Sc(a,C&&a.mast<n.masts.length,u)}"/>`),!o)for(let e of a.battens)b.push(`<path class="ss-batten" ${i} d="M${X(a.points[0][0],u(e))}L${X(a.points[2][0],u(e))}"/>`)}return e.masts.forEach((e,n)=>{let r=t.masts[n]??e,a=e.top<e.fullTop-uc,o=e.hp<e.maxHp-uc,s=c(n),l=s(e.top);if(e.top>e.bottom+uc&&b.push(`<path class="ss-mast${o?` cracked`:``}" ${i} d="M${X(e.x,e.bottom)}L${X(e.x,l)}"/>`),a){let t=e.top<r.top-uc;b.push(`<path class="ss-mast-lost${t?` fresh`:``}" ${i} d="M${X(e.x,l)}L${X(e.x,s(e.fullTop))}"/>`),e.top>e.bottom+uc&&b.push(`<path class="ss-break" ${i} d="M${X(e.x-.55,l-.3)}L${X(e.x-.2,l+.45)}L${X(e.x+.1,l-.05)}L${X(e.x+.5,l+.35)}"/>`)}else b.push(`<g class="ss-pennant" style="animation-delay:${(-n*.37).toFixed(2)}s"><path d="M${X(e.x,l)}L${X(e.x-2.4,l-.35)}L${X(e.x,l-.75)}Z"/></g>`)}),b.push(`<path class="ss-hull" d="${s}"/>`),b.push(`<g clip-path="url(#ss-hull-clip)">`,`<rect class="ss-trim" x="${d}" y="${(-n.paint.trim[1]).toFixed(2)}" width="${h}" height="${(n.paint.trim[1]-n.paint.trim[0]).toFixed(2)}"/>`,`<g class="ss-flood" style="--from:${v.toFixed(2)}px;--to:${y.toFixed(2)}px"><g class="ss-slosh"><path d="${wc(d-4,f+4,4,.35,m-p+8)}"/></g></g>`,`</g>`),b.push(`<path class="ss-hull-edge" pathLength="1" stroke-width="${g.toFixed(3)}" d="${s}"/>`),e.holes.forEach((e,n)=>{let r=Math.max(1.1,e.radius*2),a=n>=t.holes.length;b.push(`<path class="ss-hole${a?` fresh`:``}" ${i} style="animation-delay:${a?(.85+.12*(n-t.holes.length)).toFixed(2):0}s" d="${Cc(e.x,e.y,r,n*2.39)}"/>`)}),e.guns.forEach((e,n)=>{let a=t.guns[n]??e,o=e.hp<=0?`lost`:e.hp<e.maxHp-uc?`hurt`:`ok`,s=e.hp<=0?a.hp>0:e.hp<a.hp-uc,c=r-.75;b.push(`<g class="ss-gun ${o}${s?` fresh`:``}"><circle ${i} cx="${(-e.x).toFixed(2)}" cy="${(-c).toFixed(2)}" r="0.8"/>`),o===`lost`&&b.push(`<path ${i} d="M${X(e.x-.6,c-.6)}L${X(e.x+.6,c+.6)}M${X(e.x-.6,c+.6)}L${X(e.x+.6,c-.6)}"/>`),b.push(`</g>`)}),b.push(`</g>`),b.push(`<g class="ss-sea ss-waterline"><path ${i} d="${x}"/></g>`),b.push(`</svg>`),b.join(``)}function Ec(e,t,n,r,i=``,a=!1){let o=Y(`div`,{class:`ss-row ${t}${a?` fresh`:``}`},Y(`span`,{class:`ss-icon`}),Y(`span`,{class:`ss-text`},Y(`span`,{class:`ss-what`,text:n}),r?Y(`span`,{class:`ss-sub`,text:r}):null),i?Y(`span`,{class:`ss-delta`,text:i}):null);return o.firstElementChild.innerHTML=hc[e],o}var Dc=e=>e.length<=1?e[0]??``:`${e.slice(0,-1).join(`, `)} & ${e[e.length-1]}`,Oc=e=>e.charAt(0).toUpperCase()+e.slice(1),kc=e=>String(Math.round(e*100)/100);function Ac(e,t){let n=[],r=e.hp/e.maxHp,i=t.hp-e.hp,a=e.masts.filter(e=>e.top<e.fullTop-uc),o=e.masts.filter(e=>e.hp<e.maxHp-uc&&e.top>e.bottom+uc),s=e.guns.filter(e=>e.hp<=0);if(i<=uc&&r>=.999999&&e.sailing>=.999999&&a.length===0&&o.length===0&&s.length===0)return[Ec(`ok`,`ok`,`Shipshape`,`Full sail · every gun manned`)];if(n.push(Ec(`hull`,r<=.25?`bad`:r<.6?`warn`:`ok`,`Hull ${kc(e.hp)}/${kc(e.maxHp)}`,r<=.25?`Taking water: she sinks at 0`:`She sinks at 0`,i>uc?`−${kc(i)}`:``,i>uc)),e.sailing<.999999){let r=Math.round((t.sailing-e.sailing)*100),i=[e.masts.every(e=>e.top<e.fullTop-uc)?`Dismasted`:a.length>0?`${Oc(Dc(a.map(e=>e.name)))} down`:``,e.sailHoles>0?`${e.sailHoles} hole${e.sailHoles===1?``:`s`} in the sails`:``].filter(Boolean);n.push(Ec(`sail`,e.sailing<.35?`bad`:`warn`,`Sailing ${Math.round(e.sailing*100)}%`,i.join(` · `),r>0?`−${r}%`:``,r>0))}if(s.length>0){let r=s.some(n=>(t.guns[e.guns.indexOf(n)]?.hp??0)>0),i=s.length===1?`${s[0].cannon} silent`:`${s.length} guns silent`,a=s.length===1?`Its gunner went overboard`:`${Dc(s.map(e=>e.cannon))}: no gunners`;n.push(Ec(`gun`,`bad`,i,a,r?`−${s.filter(n=>(t.guns[e.guns.indexOf(n)]?.hp??0)>0).length}`:``,r))}if(o.length>0){let r=o.some(n=>n.hp<(t.masts[e.masts.indexOf(n)]?.hp??n.maxHp)-uc);n.push(Ec(`crack`,`warn`,`${Oc(Dc(o.map(e=>e.name)))} cracked`,`The next hit may bring it down`,``,r))}return n}var jc=`JanEpiCoro/ship-combat-prototype`,Mc=`main`,Nc=`src/config/game.json`,Pc=`ship-combat.github-token`,Fc=`https://github.com/settings/personal-access-tokens/new`,Ic=jc;function Lc(){try{return localStorage.getItem(Pc)}catch{return null}}function Rc(e){try{e?localStorage.setItem(Pc,e):localStorage.removeItem(Pc)}catch{}}var zc=class extends Error{badToken;constructor(e,t=!1){super(e),this.badToken=t}};async function Bc(e,t,n){let r=`https://api.github.com/repos/${jc}/contents/${Nc}`,i={Accept:`application/vnd.github+json`,Authorization:`Bearer ${t}`,"X-GitHub-Api-Version":`2022-11-28`};for(let t=0;t<2;t++){let a=await fetch(`${r}?ref=${Mc}`,{headers:i,cache:`no-store`});if(!a.ok)throw Vc(a.status,`read the config`);let o=await a.json(),s=JSON.parse(Uc(o.content));d(s,e);let c=await fetch(r,{method:`PUT`,headers:i,body:JSON.stringify({message:`Tuning: new defaults from the in-game settings\n\n${n}`,content:Hc(p(s)),sha:o.sha,branch:Mc})});if(c.status!==409||t!==0){if(!c.ok)throw Vc(c.status,`save the config`);return(await c.json()).commit?.html_url??``}}throw new zc(`GitHub kept reporting a conflict. Try again in a moment.`)}function Vc(e,t){return e===401?new zc(`GitHub refused the token (wrong or expired).`,!0):e===403||e===404?new zc(`The token can't ${t} of ${jc}. It needs Contents: read and write on that repository.`,!0):new zc(`GitHub said ${e} while trying to ${t}. Try again in a moment.`)}function Hc(e){let t=``;for(let n of new TextEncoder().encode(e))t+=String.fromCharCode(n);return btoa(t)}function Uc(e){let t=atob(e.replace(/\s/g,``));return new TextDecoder().decode(Uint8Array.from(t,e=>e.charCodeAt(0)))}var Wc=`ship-combat.settings.v2`,Gc=`ship-combat.settings.v1`,Kc={indicator:`dots`,sound:!0,graphics:`auto`,lastShotFlag:!0},qc=[{value:`dots`,label:`Aim dots`,hint:`Show where the barrel points, like Castle Busters`},{value:`short`,label:`Worms guide`,hint:`The first metres of the flight at your power, with a crosshair`},{value:`off`,label:`Off`,hint:`Just the barrel. For old sea dogs`}];function Jc(){try{let e=JSON.parse(localStorage.getItem(Gc)??`{}`),t={sound:e.sound,graphics:e.graphics,...JSON.parse(localStorage.getItem(Wc)??`{}`)},n=qc.some(e=>e.value===t.indicator)?t.indicator:Kc.indicator,r=typeof t.sound==`boolean`?t.sound:Kc.sound,i=[`auto`,`high`,`low`].find(e=>e===t.graphics)??Kc.graphics,a=typeof t.lastShotFlag==`boolean`?t.lastShotFlag:Kc.lastShotFlag;return{...Kc,...t,indicator:n,sound:r,graphics:i,lastShotFlag:a}}catch{return{...Kc}}}function Yc(e){try{localStorage.setItem(Wc,JSON.stringify(e))}catch{}}var Z=e=>({kind:`number`,...e}),Xc=e=>Z({...e,unit:`%`,min:e.min??0,get:t=>Zc(e.get(t)*100,6),set:(t,n)=>e.set(t,Zc(n/100,9))}),Zc=(e,t)=>Math.round(e*10**t)/10**t,Qc=(e,t,n,r,i)=>({kind:`choice`,label:e,options:[{value:`on`,label:`On`,hint:t},{value:`off`,label:`Off`,hint:`Not at all`}],get:e=>n(e)?`on`:`off`,set:(e,t)=>r(e,t===`on`),restart:i});function $c(e,t){return[{...e,set:(n,r)=>{e.set(n,r),t.get(n)<r&&t.set(n,r)}},{...t,set:(n,r)=>{t.set(n,r),e.get(n)>r&&e.set(n,r)}}]}var el=(e,t,n)=>$c(Z({...n,label:t[0],get:t=>e(t).min,set:(t,n)=>e(t).min=n}),Z({...n,label:t[1],get:t=>e(t).max,set:(t,n)=>e(t).max=n})),tl=[{value:`classic`,label:`Classic`,hint:`A round hill with a rock spire: lob over it, or sail out to the flanks`},{value:`twinPeaks`,label:`Twin Peaks`,hint:`A narrow canyon between two peaks: line up with it for a straight shot`},{value:`atoll`,label:`Atoll`,hint:`Low dunes round a lagoon: skim them with low arcs, or line up the two channels`},{value:`seaStacks`,label:`Sea Stacks`,hint:`Tall rock pillars: thread a shot between them or lob over`},{value:`stoneArch`,label:`Stone Arch`,hint:`Fire through the arch, or hide behind the ridges either side`},{value:`strait`,label:`The Strait`,hint:`Two islands and an open channel: sail behind one for cover`},{value:`lighthouse`,label:`Lighthouse Key`,hint:`A low sandy key and a tall lighthouse: long, flat duels`}],nl=[[`heavy`,`Heavy`],[`volley`,`Volley`],[`scatter`,`Scatter`]],rl=(e,t,n)=>Z({...n,get:n=>n.cannons[e][t],set:(n,r)=>n.cannons[e][t]=r}),il=(e,t)=>Object.values(e.cannons).forEach(t),al=(e,t)=>Z({label:t,hint:`How often it comes up, relative to the others · 0 = never`,min:0,max:4,step:.5,get:t=>t.powerUps.weights[e],set:(t,n)=>t.powerUps.weights[e]=n}),ol={shooting:[{title:`Flight`,note:`Range at full power and 45° is speed² ÷ gravity, so lower gravity or more speed means longer shots.`,items:[Z({label:`Gravity`,hint:`Lower = flatter, longer, floatier shots`,unit:`m/s²`,min:4,max:50,step:.5,get:e=>e.physics.gravity,set:(e,t)=>e.physics.gravity=t}),Z({label:`Ball speed at full power`,hint:`Sets all three cannons (each one is in the Cannons tab)`,unit:`m/s`,min:40,max:180,step:1,get:e=>e.cannons.heavy.maxSpeed,set:(e,t)=>il(e,e=>e.maxSpeed=t)}),Z({label:`Ball speed at lowest power`,hint:`Sets all three cannons (each one is in the Cannons tab)`,unit:`m/s`,min:0,max:100,step:1,get:e=>e.cannons.heavy.minSpeed,set:(e,t)=>il(e,e=>e.minSpeed=t)}),Z({label:`Air drag`,hint:`0 = perfect parabolas. More drag shortens long, fast shots most`,min:0,max:.008,step:2e-4,get:e=>e.physics.drag,set:(e,t)=>e.physics.drag=t}),Z({label:`Longest flight`,hint:`A ball still flying after this long is dropped`,unit:`s`,min:4,max:30,step:1,get:e=>e.physics.maxFlightTime,set:(e,t)=>e.physics.maxFlightTime=t})]},{title:`Power meter`,items:[Z({label:`Charge time`,hint:`Holding FIRE from 0 to 100%`,unit:`s`,min:.4,max:3,step:.05,get:e=>e.power.fillTime,set:(e,t)=>e.power.fillTime=t}),Z({label:`Full-power window`,hint:`How long you can hold at 100% before the cannon misfires`,unit:`s`,min:.1,max:2,step:.05,get:e=>e.power.graceTime,set:(e,t)=>e.power.graceTime=t}),Xc({label:`Too quick to fire`,hint:`Letting go of FIRE below this power cancels the shot`,max:50,step:1,get:e=>e.power.cancelBelow,set:(e,t)=>e.power.cancelBelow=t})]},{title:`Misfire`,note:`Holding FIRE too long at full power misfires: a weak shot, knocked off your aim.`,items:[...$c(Xc({label:`Misfire power, weakest`,max:100,step:1,get:e=>e.power.misfirePowerMin,set:(e,t)=>e.power.misfirePowerMin=t}),Xc({label:`Misfire power, strongest`,max:100,step:1,get:e=>e.power.misfirePowerMax,set:(e,t)=>e.power.misfirePowerMax=t})),Z({label:`Misfire aim error`,hint:`Up to this far off, up or down and left or right`,unit:`°`,min:0,max:30,step:.5,get:e=>e.power.misfireDeviationDeg,set:(e,t)=>e.power.misfireDeviationDeg=t})]},{title:`Cannon swivel`,items:[Z({label:`Highest elevation`,unit:`°`,min:20,max:80,step:1,get:e=>e.aim.pitchMaxDeg,set:(e,t)=>e.aim.pitchMaxDeg=t}),Z({label:`Lowest elevation`,unit:`°`,min:-20,max:10,step:1,get:e=>e.aim.pitchMinDeg,set:(e,t)=>e.aim.pitchMinDeg=t}),Z({label:`Starting elevation`,hint:`Where the barrels point at the start of a match`,unit:`°`,min:-5,max:60,step:1,get:e=>e.aim.defaultPitchDeg,set:(e,t)=>e.aim.defaultPitchDeg=t,restart:`match`}),Z({label:`Swivel left / right`,hint:`How far the cannon turns either side of straight out`,unit:`°`,min:15,max:85,step:1,get:e=>e.aim.yawLimitDeg,set:(e,t)=>e.aim.yawLimitDeg=t}),Z({label:`Aim sensitivity`,hint:`Degrees the cannon turns per pixel you drag`,unit:`°/px`,min:.03,max:.4,step:.01,get:e=>e.presentation.aimDegPerPixel,set:(e,t)=>e.presentation.aimDegPerPixel=t}),Z({label:`Keyboard aim speed`,hint:`W/A/S/D and the arrow keys`,unit:`°/s`,min:5,max:120,step:1,get:e=>e.presentation.keyboardAimDegPerSecond,set:(e,t)=>e.presentation.keyboardAimDegPerSecond=t})]},{title:`Aim guide`,note:`Pick the guide style in the Game tab.`,items:[Z({label:`Aim dots length`,hint:`They stay this long and never move while you charge`,unit:`m`,min:4,max:120,step:1,get:e=>e.presentation.aimDotsLength,set:(e,t)=>e.presentation.aimDotsLength=t}),Z({label:`Worms guide length`,unit:`m`,min:4,max:80,step:1,get:e=>e.presentation.aimGuideLength,set:(e,t)=>e.presentation.aimGuideLength=t}),Xc({label:`Worms guide before your first shot`,hint:`The power it assumes until you have fired once (then it uses your last shot’s)`,min:10,max:100,step:5,get:e=>e.aim.firstShotPower,set:(e,t)=>e.aim.firstShotPower=t})]},{title:`Wind`,note:`A new wind is drawn at the start of every turn, between the calmest and the strongest.`,items:[...$c(Z({label:`Calmest wind`,unit:`kn`,min:0,max:40,step:1,get:e=>e.wind.minKnots,set:(e,t)=>e.wind.minKnots=t}),Z({label:`Strongest wind`,unit:`kn`,min:0,max:40,step:1,get:e=>e.wind.maxKnots,set:(e,t)=>e.wind.maxKnots=t})),Z({label:`Wind push`,hint:`Sideways push on a ball per knot`,unit:`m/s² per kn`,min:0,max:.6,step:.01,get:e=>e.wind.accelPerKnot,set:(e,t)=>e.wind.accelPerKnot=t})]}],cannons:nl.map(([e,t],n)=>({title:`${t} (gunner ${n+1})`,note:e===`heavy`?`How each gunner’s cannon fires. Its damage is in the HP & damage tab.`:void 0,items:[rl(e,`balls`,{label:`Balls per shot`,min:1,max:12,step:1}),rl(e,`interval`,{label:`Delay between balls`,hint:`0 fires them all at once`,unit:`s`,min:0,max:1,step:.05}),rl(e,`coneDeg`,{label:`Spread`,hint:`Width of the cone the balls fly in · 0 = dead accurate`,unit:`°`,min:0,max:30,step:.5}),rl(e,`maxSpeed`,{label:`Ball speed at full power`,unit:`m/s`,min:40,max:180,step:1}),rl(e,`minSpeed`,{label:`Ball speed at lowest power`,unit:`m/s`,min:0,max:100,step:1}),rl(e,`ballRadius`,{label:`Ball size`,hint:`Radius: bigger balls are easier to land`,unit:`m`,min:.1,max:1.2,step:.01})]})),damage:[{title:`Health`,note:`Changes here start a new match when you close Settings.`,items:[Z({label:`Ship hull HP`,hint:`The ship sinks at 0`,min:1,max:50,step:1,get:e=>e.ship.hp,set:(e,t)=>e.ship.hp=t,restart:`match`}),Z({label:`Gunner HP`,hint:`Each gunner; lose all three and the match is lost`,min:.25,max:20,step:.25,get:e=>e.crew.hp,set:(e,t)=>e.crew.hp=t,restart:`match`})]},{title:`Damage per ball`,note:`A ball that hits a ship takes this off its hull, and the same off every gunner within its crew splash. The Damage crate and the meteors are in the Power-ups tab.`,items:[...nl.map(([e,t],n)=>rl(e,`damage`,{label:`${t} (gunner ${n+1})`,hint:`Per ball`,min:0,max:10,step:.25})),Z({label:`Mast hit`,hint:`Hull damage of a ball that hits a mast, × its damage · 1 = same as the hull, 0 = none`,unit:`×`,min:0,max:3,step:.25,get:e=>e.ship.mastDamage,set:(e,t)=>e.ship.mastDamage=t})]},{title:`Crew splash`,note:`Gunners this close to where a ball hits their ship take its damage. Balls in the sea or on the island hurt nobody.`,items:nl.map(([e,t])=>rl(e,`splashRadius`,{label:t,unit:`m`,min:0,max:12,step:.25}))},{title:`Gunner hit box`,note:`A ball that hits a gunner directly also damages the ship. The drawn gunners don’t change size.`,items:[Z({label:`Gunner width`,hint:`Radius of the hit box`,unit:`m`,min:.2,max:2,step:.05,get:e=>e.crew.radius,set:(e,t)=>e.crew.radius=t}),Z({label:`Gunner height`,unit:`m`,min:1,max:4,step:.1,get:e=>e.crew.height,set:(e,t)=>e.crew.height=Math.max(t,e.crew.radius*2)})]}],ships:[{title:`Design`,note:`Both ships use it. Changes in this group start a new match when you close Settings.`,items:[{kind:`choice`,label:`Design`,options:a.map(e=>({value:e.id,label:e.name,hint:e.hint})),get:e=>e.ship.model,set:(t,n)=>e(t,n),restart:`rebuild`}]},{title:`Sailing`,items:[Z({label:`Sailing per turn`,unit:`m`,min:0,max:150,step:2,get:e=>e.ship.fuelPerTurn,set:(e,t)=>e.ship.fuelPerTurn=t}),Z({label:`Sailing speed`,unit:`m/s`,min:2,max:30,step:1,get:e=>e.ship.sailSpeed,set:(e,t)=>e.ship.sailSpeed=t})]}],arena:[{title:`Island`,note:`Changes in this tab start a new match when you close Settings.`,items:[{kind:`choice`,label:`Island`,options:tl,get:e=>e.arena.island,set:(e,t)=>e.arena.island=t,restart:`rebuild`}]},{title:`Layout`,items:[Z({label:`Distance between ships`,hint:`Measured across the island at the start positions`,unit:`m`,min:90,max:280,step:2,get:e=>e.arena.orbitRadius*2,set:(e,t)=>e.arena.orbitRadius=t/2,restart:`rebuild`}),Z({label:`Island size`,hint:`Radius at the waterline`,unit:`m`,min:12,max:50,step:1,get:e=>e.arena.islandRadius,set:(e,t)=>e.arena.islandRadius=t,restart:`rebuild`}),Z({label:`Island height`,unit:`m`,min:6,max:50,step:1,get:e=>e.arena.islandPeakHeight,set:(e,t)=>e.arena.islandPeakHeight=t,restart:`rebuild`}),Z({label:`Sailing zone`,hint:`How far each ship may sail either side of its start`,unit:`°`,min:10,max:85,step:1,get:e=>e.arena.zoneHalfAngleDeg,set:(e,t)=>e.arena.zoneHalfAngleDeg=t,restart:`rebuild`})]}],destruction:[{title:`Destruction`,note:`What cannonballs break (docs/DESTRUCTION.md). Each kind below has its own switch too. Changes to the rules (masts, craters, rocks) start a new match when you close Settings; the looks (holes, listing, palms) change at once.`,items:[{kind:`choice`,label:`Destruction`,options:[{value:`on`,label:`On`,hint:`Masts and rocks break, lost sail costs sailing, and balls dig craters`},{value:`off`,label:`Off`,hint:`Nothing breaks`}],get:e=>e.destruction.enabled?`on`:`off`,set:(e,t)=>e.destruction.enabled=t===`on`,restart:`match`},Z({label:`Smallest piece`,hint:`A break takes at least this much off the top of a mast, a rock or the spire, so a ball on the very top still takes it off`,unit:`m`,min:0,max:5,step:.25,get:e=>e.destruction.minPiece,set:(e,t)=>e.destruction.minPiece=t,restart:`match`}),Z({label:`Fall speed`,hint:`How fast broken masts, rocks and palms come down · 1 = as built, 2 = twice as fast`,unit:`×`,min:.5,max:3,step:.1,get:e=>e.presentation.fallSpeed,set:(e,t)=>e.presentation.fallSpeed=t})]},{title:`Masts`,note:`A mast breaks where the ball that uses up its strength hits it, and the stump starts again at full strength. Mast hit damage (to the hull) is in HP & damage.`,items:[Qc(`Masts break`,`Masts break where they’re hit, and lost sail costs sailing`,e=>e.destruction.masts,(e,t)=>e.destruction.masts=t,`match`),Z({label:`Mast strength`,hint:`Damage a mast takes before it breaks · 1 = one heavy ball, two volley balls or four pellets · 0 = every hit breaks it`,min:0,max:5,step:.25,get:e=>e.ship.mastHp,set:(e,t)=>e.ship.mastHp=t,restart:`match`}),Xc({label:`Sailing with no masts`,hint:`How far a ship with all its sail gone still sails per turn · in between, lost sail costs its share`,max:100,step:5,get:e=>e.ship.minSailMove,set:(e,t)=>e.ship.minSailMove=t})]},{title:`Sails`,note:`Balls fly through the sails but tear them. A hole doesn’t hurt the hull: it costs sailing, for as long as that sail is up (one that comes down with its mast is already lost sail).`,items:[Qc(`Sails tear`,`Balls tear the sails they fly through, and each hole costs sailing`,e=>e.destruction.sails,(e,t)=>e.destruction.sails=t,`match`),Xc({label:`Sailing lost per hole`,hint:`Of a full turn’s sailing, for each hole in a sail that’s still up · never below Sailing with no masts`,max:10,step:.5,get:e=>e.ship.sailHoleCost,set:(e,t)=>e.ship.sailHoleCost=t}),Z({label:`Tear size`,hint:`How wide a ball’s tear looks, in ball widths (the rips run on from it) · a look only`,unit:`×`,min:.5,max:5,step:.1,get:e=>e.presentation.sailTearSize,set:(e,t)=>e.presentation.sailTearSize=t})]},{title:`Craters`,note:`A ball that hits the ground digs a crater, and craters add up: keep shooting one spot and you dig a pit. Sizes are for a heavy ball (damage 1); volley balls and pellets dig smaller ones.`,items:[Qc(`Craters`,`Balls dig into the island’s ground`,e=>e.destruction.craters,(e,t)=>e.destruction.craters=t,`match`),Z({label:`Crater size`,hint:`Radius of a heavy ball’s crater`,unit:`m`,min:0,max:8,step:.1,get:e=>e.destruction.craterRadius,set:(e,t)=>e.destruction.craterRadius=t}),Z({label:`Crater depth`,hint:`How deep a heavy ball digs at the centre`,unit:`m`,min:0,max:5,step:.1,get:e=>e.destruction.craterDepth,set:(e,t)=>e.destruction.craterDepth=t}),Z({label:`Deepest dig`,hint:`How far below the original ground a pit can go`,unit:`m`,min:0,max:30,step:.5,get:e=>e.destruction.maxDigDepth,set:(e,t)=>e.destruction.maxDigDepth=t}),Z({label:`Lowest ground`,hint:`Digging stops this far above the sea, so the coast stays where it is`,unit:`m`,min:0,max:5,step:.1,get:e=>e.destruction.groundFloor,set:(e,t)=>e.destruction.groundFloor=t}),Z({label:`Clear of rocks`,hint:`No digging at the foot of a rock or the lighthouse, easing in over this far`,unit:`m`,min:0,max:10,step:.5,get:e=>e.destruction.rockFootClearance,set:(e,t)=>e.destruction.rockFootClearance=t})]},{title:`Rocks`,note:`Sea stacks and the lighthouse break where the ball that uses up their strength hits them, and the top falls; the stone arch comes down whole and leaves its legs; the tip of the Classic island’s spire can be shot off. A ball that doesn’t bring one down cracks it (a pit in rock, a hole in the lighthouse), and the callout says how much strength it has left.`,items:[Qc(`Rocks break`,`Sea stacks, the arch, the lighthouse and the spire’s tip crack and fall`,e=>e.destruction.rocks,(e,t)=>e.destruction.rocks=t,`match`),Z({label:`Rock strength`,hint:`Damage a sea stack, the arch or the spire’s tip takes before it breaks · 0 = every hit`,min:0,max:12,step:.25,get:e=>e.destruction.rockHp,set:(e,t)=>e.destruction.rockHp=t,restart:`match`}),Z({label:`Lighthouse strength`,hint:`Damage the lighthouse takes before it breaks · 1 = one heavy ball, two volley balls or four pellets · 0 = every hit`,min:0,max:12,step:.25,get:e=>e.destruction.towerHp,set:(e,t)=>e.destruction.towerHp=t,restart:`match`}),Z({label:`Spire tip`,hint:`The spire’s tip can be shot off above where it is this wide (radius) · 0 = never`,unit:`m`,min:0,max:12,step:.5,get:e=>e.destruction.tipRadius,set:(e,t)=>e.destruction.tipRadius=t}),Z({label:`Lowest break`,hint:`A rock always keeps at least this much stump above the ground`,unit:`m`,min:0,max:10,step:.5,get:e=>e.destruction.minStump,set:(e,t)=>e.destruction.minStump=t})]},{title:`Palms`,note:`Balls fly through the palms, but a palm a ball passes through snaps there and its top falls, like a mast; a crater uproots one and it falls over. Only a look: palms never stop a ball.`,items:[Qc(`Palms break`,`A ball through a palm snaps it, and a crater uproots one`,e=>e.presentation.trees,(e,t)=>e.presentation.trees=t),Z({label:`Palm strength`,hint:`Damage a palm takes before it snaps · 0.5 = one heavy or volley ball, or two pellets · 0 = every ball`,min:0,max:3,step:.25,get:e=>e.presentation.treeHp,set:(e,t)=>e.presentation.treeHp=t})]},{title:`Holed ships`,note:`Every ball that hits a ship punches a hole where it goes in (through a gunner, into the deck behind them), and a ship takes on water where it’s holed: it leans toward the holed side, dips toward a holed end and settles lower. Only a look: it doesn’t change the aim.`,items:[Qc(`Holes`,`Every ball that hits a ship punches a hole in it`,e=>e.presentation.holes,(e,t)=>e.presentation.holes=t),Z({label:`Hole size`,hint:`How wide a ball’s hole is, in ball widths · half as wide again with a blast power-up`,unit:`×`,min:.5,max:4,step:.1,get:e=>e.presentation.holeSize,set:(e,t)=>e.presentation.holeSize=t}),Z({label:`Smallest hole`,hint:`No hole is smaller than this (radius), so a pellet’s shows from afar`,unit:`m`,min:0,max:1.5,step:.05,get:e=>e.presentation.minHoleSize,set:(e,t)=>e.presentation.minHoleSize=t}),Z({label:`Biggest hole`,hint:`Balls landing right on a hole make it bigger, up to this (radius)`,unit:`m`,min:.2,max:4,step:.1,get:e=>e.presentation.maxHoleSize,set:(e,t)=>e.presentation.maxHoleSize=t}),Qc(`Takes on water`,`A holed ship leans toward its holes, dips toward a holed end and settles lower`,e=>e.presentation.listing,(e,t)=>e.presentation.listing=t),Z({label:`Leans toward its holes`,hint:`With half its hull HP lost in holes along one side`,unit:`°`,min:0,max:15,step:.5,get:e=>e.presentation.listMaxDeg,set:(e,t)=>e.presentation.listMaxDeg=t}),Z({label:`Dips toward a holed end`,hint:`With half its hull HP lost in holes at the bow or the stern`,unit:`°`,min:0,max:10,step:.5,get:e=>e.presentation.trimMaxDeg,set:(e,t)=>e.presentation.trimMaxDeg=t}),Z({label:`Settles in the water`,hint:`How much lower it sits as its hull HP runs out`,unit:`m`,min:0,max:3,step:.1,get:e=>e.presentation.listSink,set:(e,t)=>e.presentation.listSink=t})]}],powerUps:[{title:`Power-ups`,note:`Like Castle Busters: one at a time appears halfway between the ships and stays on that spot, bobbing up and down. Fly a ball through it to use it.`,items:[{kind:`choice`,label:`Power-ups`,options:[{value:`on`,label:`On`,hint:`A power-up may appear at the start of a turn`},{value:`off`,label:`Off`,hint:`Plain cannon duels`}],get:e=>e.powerUps.enabled?`on`:`off`,set:(e,t)=>e.powerUps.enabled=t===`on`,restart:`match`},Xc({label:`Chance each turn`,hint:`That one appears at the start of a turn while none is up`,max:100,step:5,get:e=>e.powerUps.spawnChance,set:(e,t)=>e.powerUps.spawnChance=t})]},{title:`Kinds`,items:[al(`damage`,`Damage crate`),al(`blast`,`Blast crate`),al(`split`,`Split gate`),al(`meteor`,`Meteor crate`)]},{title:`Effects`,items:[Z({label:`Damage multiplier`,hint:`Every ball of the shot still in the air does this many times its damage`,unit:`×`,min:1,max:4,step:.25,get:e=>e.powerUps.damageMultiplier,set:(e,t)=>e.powerUps.damageMultiplier=t}),Z({label:`Blast multiplier`,hint:`Explosion radius of that ball; near misses inside it still hit the hull`,unit:`×`,min:1,max:6,step:.25,get:e=>e.powerUps.blastMultiplier,set:(e,t)=>e.powerUps.blastMultiplier=t}),Z({label:`Split gate uses`,hint:`Splits before the gate is gone`,min:1,max:12,step:1,get:e=>e.powerUps.splitUses,set:(e,t)=>e.powerUps.splitUses=t}),Z({label:`Split angle`,hint:`Each half turns this far off the ball’s path`,unit:`°`,min:.5,max:15,step:.5,get:e=>e.powerUps.splitAngleDeg,set:(e,t)=>e.powerUps.splitAngleDeg=t}),...el(e=>e.powerUps.meteors,[`Fewest meteors`,`Most meteors`],{min:0,max:15,step:1}),Z({label:`Meteor damage`,hint:`Each meteor, to the hull and to gunners within its splash`,min:0,max:5,step:.25,get:e=>e.powerUps.meteorDamage,set:(e,t)=>e.powerUps.meteorDamage=t}),Z({label:`Meteor crew splash`,unit:`m`,min:0,max:12,step:.25,get:e=>e.powerUps.meteorSplash,set:(e,t)=>e.powerUps.meteorSplash=t})]},{title:`Size and movement`,items:[Z({label:`Crate pick-up radius`,hint:`How close a ball has to pass`,unit:`m`,min:1,max:10,step:.2,get:e=>e.powerUps.radius,set:(e,t)=>e.powerUps.radius=t,restart:`match`}),Z({label:`Gate radius`,unit:`m`,min:1,max:12,step:.2,get:e=>e.powerUps.gateRadius,set:(e,t)=>e.powerUps.gateRadius=t,restart:`match`}),Z({label:`Spread to the sides`,hint:`It appears at a random spot over the island, up to this far either side of the line between the ships`,unit:`m`,min:0,max:40,step:1,get:e=>e.powerUps.spread,set:(e,t)=>e.powerUps.spread=t}),Z({label:`Lowest point above the island`,hint:`Above the ground as it is now: craters and fallen rock let it come lower`,unit:`m`,min:0,max:40,step:1,get:e=>e.powerUps.clearance,set:(e,t)=>e.powerUps.clearance=t}),Z({label:`Highest lob it allows`,hint:`Never higher than a ball fired this steeply from one ship to the other passes over its spot, so it is always in reach`,unit:`°`,min:5,max:45,step:1,get:e=>e.powerUps.maxPitchDeg,set:(e,t)=>e.powerUps.maxPitchDeg=t}),Z({label:`Bob height`,hint:`How far it moves up and down`,unit:`m`,min:0,max:50,step:1,get:e=>e.powerUps.travel,set:(e,t)=>e.powerUps.travel=t}),Z({label:`Time per sweep`,hint:`Up or down; shorter = faster`,unit:`s`,min:1,max:15,step:.5,get:e=>e.powerUps.sweepTime,set:(e,t)=>e.powerUps.sweepTime=t}),Z({label:`Holds still after appearing`,unit:`s`,min:0,max:10,step:.5,get:e=>e.powerUps.holdTime,set:(e,t)=>e.powerUps.holdTime=t})]}],bot:[{title:`Skill`,note:`The errors below are for medium skill: an easier bot makes bigger ones, a harder one smaller.`,items:[Z({label:`Bot skill`,hint:`0 = easy, 1 = hard`,min:0,max:1,step:.05,get:e=>e.bot.difficulty,set:(e,t)=>e.bot.difficulty=t})]},{title:`Timing`,items:[...el(e=>e.bot.thinkTime,[`Thinking time, shortest`,`Thinking time, longest`],{unit:`s`,min:0,max:6,step:.1}),...el(e=>e.bot.aimTime,[`Aiming time, shortest`,`Aiming time, longest`],{unit:`s`,min:.2,max:5,step:.1})]},{title:`Accuracy`,note:`Its first shot is off by about this much; each shot after that corrects toward the target.`,items:[Xc({label:`First shot: power error`,hint:`Of full power`,max:50,step:.5,get:e=>e.bot.startPowerError,set:(e,t)=>e.bot.startPowerError=t}),Z({label:`First shot: aim error`,hint:`Left or right`,unit:`°`,min:0,max:15,step:.25,get:e=>e.bot.startYawErrorDeg,set:(e,t)=>e.bot.startYawErrorDeg=t}),Xc({label:`Overcorrects`,hint:`Chance a correction overshoots to the other side`,max:100,step:1,get:e=>e.bot.overcorrectChance,set:(e,t)=>e.bot.overcorrectChance=t}),Xc({label:`Shaky hand: power`,hint:`Shot-to-shot wobble (standard deviation)`,max:5,step:.1,get:e=>e.bot.jitterPower,set:(e,t)=>e.bot.jitterPower=t}),Z({label:`Shaky hand: aim`,hint:`Shot-to-shot wobble (standard deviation)`,unit:`°`,min:0,max:3,step:.05,get:e=>e.bot.jitterYawDeg,set:(e,t)=>e.bot.jitterYawDeg=t}),Xc({label:`Misreads the wind: strength`,hint:`Standard deviation`,max:100,step:1,get:e=>e.bot.windStrengthError,set:(e,t)=>e.bot.windStrengthError=t}),Z({label:`Misreads the wind: direction`,hint:`Standard deviation`,unit:`°`,min:0,max:60,step:1,get:e=>e.bot.windAngleErrorDeg,set:(e,t)=>e.bot.windAngleErrorDeg=t})]},{title:`When ships move`,items:[Z({label:`You count as moved after`,hint:`Sailing this far since its last shot`,unit:`m`,min:0,max:40,step:1,get:e=>e.bot.targetMovedDistance,set:(e,t)=>e.bot.targetMovedDistance=t}),Xc({label:`Error back when you move`,hint:`Of its first-shot error`,max:100,step:5,get:e=>e.bot.targetMovedError,set:(e,t)=>e.bot.targetMovedError=t}),Xc({label:`Error back when it moves`,hint:`Of its first-shot error`,max:100,step:5,get:e=>e.bot.selfMovedError,set:(e,t)=>e.bot.selfMovedError=t})]},{title:`Habits`,items:[Xc({label:`Dodges`,hint:`Chance it sails away after you hit it or splash close`,max:100,step:1,get:e=>e.bot.dodgeChance,set:(e,t)=>e.bot.dodgeChance=t}),Xc({label:`Tries another spot`,hint:`Chance it sails somewhere new on an ordinary turn`,max:100,step:1,get:e=>e.bot.repositionChance,set:(e,t)=>e.bot.repositionChance=t}),Xc({label:`Misfires`,hint:`Chance it holds FIRE too long`,max:30,step:.5,get:e=>e.bot.misfireChance,set:(e,t)=>e.bot.misfireChance=t}),Xc({label:`Goes for power-ups`,hint:`Chance it times a shot through one (more when skilled)`,max:100,step:5,get:e=>e.bot.powerUpChance,set:(e,t)=>e.bot.powerUpChance=t}),Z({label:`Waits for a power-up`,hint:`At most this long for it to bob into its shot`,unit:`s`,min:0,max:15,step:.5,get:e=>e.bot.powerUpMaxWait,set:(e,t)=>e.bot.powerUpMaxWait=t})]}],feel:[{title:`Pacing`,items:[Z({label:`Turn banner`,hint:`How long “Your turn” shows`,unit:`s`,min:.3,max:4,step:.1,get:e=>e.presentation.bannerTime,set:(e,t)=>e.presentation.bannerTime=t}),Z({label:`Pause after a shot`,hint:`Before the turn passes (tap to skip)`,unit:`s`,min:0,max:5,step:.1,get:e=>e.presentation.resolveHoldTime,set:(e,t)=>e.presentation.resolveHoldTime=t}),Z({label:`Pause after something falls`,hint:`Added to the pause when a shot brings down a mast, so you see it fall`,unit:`s`,min:0,max:4,step:.1,get:e=>e.presentation.collapseHoldTime,set:(e,t)=>e.presentation.collapseHoldTime=t}),Z({label:`Camera moves`,hint:`Time to glide between views`,unit:`s`,min:.1,max:3,step:.05,get:e=>e.presentation.cameraBlendTime,set:(e,t)=>e.presentation.cameraBlendTime=t})]},{title:`Views`,items:[Z({label:`First-person field of view`,hint:`Narrowed further on very wide screens`,unit:`°`,min:30,max:90,step:1,get:e=>e.presentation.firstPersonFovDeg,set:(e,t)=>e.presentation.firstPersonFovDeg=t}),Xc({label:`First-person tilt with the barrel`,hint:`0 = the view stays level, 100 = it looks along the barrel`,max:100,step:5,get:e=>e.presentation.firstPersonPitchFollow,set:(e,t)=>e.presentation.firstPersonPitchFollow=t}),Z({label:`Sailing view field of view`,unit:`°`,min:30,max:90,step:1,get:e=>e.presentation.thirdPersonFovDeg,set:(e,t)=>e.presentation.thirdPersonFovDeg=t})]},{title:`Impacts`,items:[Z({label:`Hit-stop`,hint:`A ball hitting a ship freezes the action this long`,unit:`s`,min:0,max:.5,step:.01,get:e=>e.presentation.hitStopTime,set:(e,t)=>e.presentation.hitStopTime=t}),Xc({label:`Winning-blow slow motion`,hint:`Game speed just before the match-winning hit · 100 = none`,min:5,max:100,step:5,get:e=>e.presentation.finisherSlowMo,set:(e,t)=>e.presentation.finisherSlowMo=t}),Z({label:`Slow motion starts`,hint:`This long before the winning ball lands`,unit:`s`,min:0,max:3,step:.1,get:e=>e.presentation.finisherSlowMoTime,set:(e,t)=>e.presentation.finisherSlowMoTime=t})]}]},sl=`6262`,cl=[[`game`,`Game`],[`shooting`,`Shooting`],[`cannons`,`Cannons`],[`damage`,`HP & damage`],[`ships`,`Ships`],[`arena`,`Arena`],[`destruction`,`Destruction`],[`powerUps`,`Power-ups`],[`bot`,`Bot`],[`feel`,`Feel`],[`save`,`Save`]],ll=`ship-combat.settings-tab`,ul=class{element;options;settings;tab;tabButtons=new Map;body;refreshers=[];pending=null;qualityText=``;constructor(e){this.options=e,this.settings={...e.settings},this.tab=fl();let t=Y(`div`,{class:`settings-tabs`,attrs:{role:`tablist`}});for(let[e,n]of cl){let r=Y(`button`,{class:`settings-tab`,text:n,attrs:{role:`tab`}});Qs(r,()=>this.showTab(e)),this.tabButtons.set(e,r),t.append(r)}let n=Y(`button`,{class:`settings-done`,text:`Done`});Qs(n,()=>this.close()),this.body=Y(`div`,{class:`settings-body`}),this.element=Y(`div`,{class:`modal settings-modal`},Y(`div`,{class:`panel settings-panel`},Y(`div`,{class:`settings-head`},Y(`div`,{class:`panel-title`,text:`Settings`}),n),t,this.body)),this.element.addEventListener(`pointerdown`,e=>{e.target===this.element&&this.close()})}open(){this.showTab(this.tab),this.element.classList.add(`open`)}close(){if(!this.element.classList.contains(`open`))return;this.element.classList.remove(`open`),document.activeElement?.blur?.(),c();let e=this.pending;this.pending=null,e&&this.options.onRestart(e),this.options.onClose?.()}setQualityNote(e){this.qualityText=e;for(let t of this.element.querySelectorAll(`.quality-note`))t.textContent=e}showTab(e){this.tab=e;try{localStorage.setItem(ll,e)}catch{}for(let[t,n]of this.tabButtons)n.classList.toggle(`selected`,t===e);this.tabButtons.get(e)?.scrollIntoView({block:`nearest`,inline:`nearest`}),this.refreshers=[];let t=e===`game`?this.buildGameTab():e===`save`?this.buildSaveTab():ol[e].map(e=>this.buildGroup(e));this.body.replaceChildren(...t),this.body.scrollTop=0,this.refresh()}refresh(){for(let e of this.refreshers)e()}markChanged(e){(e===`rebuild`||e===`match`&&this.pending!==`rebuild`)&&(this.pending=e)}buildGameTab(){let e=this.optionList(qc.map(e=>({value:e.value,label:e.label,hint:e.hint})),()=>this.settings.indicator,e=>this.changeSettings({indicator:e})),t=this.optionList([{value:`on`,label:`Flag where it landed`,hint:`While you aim: a gold flag where your last shot came down on the water or the ground`},{value:`off`,label:`No flag`,hint:``}],()=>this.settings.lastShotFlag?`on`:`off`,e=>this.changeSettings({lastShotFlag:e===`on`})),n=this.optionList([{value:`on`,label:`Sound on`,hint:``},{value:`off`,label:`Sound off`,hint:``}],()=>this.settings.sound?`on`:`off`,e=>this.changeSettings({sound:e===`on`})),r=this.optionList([{value:`auto`,label:`Auto`,hint:``},{value:`high`,label:`High`,hint:``},{value:`low`,label:`Low`,hint:``}],()=>this.settings.graphics,e=>this.changeSettings({graphics:e}));return[dl(`Match`),this.buildRestart(),dl(`Aim guide`),e,dl(`Your last shot`),t,dl(`Sound`),n,dl(`Graphics`),r,Y(`div`,{class:`panel-note quality-note`,text:this.qualityText})]}buildRestart(){let e=`Restart match`,t=Y(`button`,{class:`secondary-btn`,text:e}),n=0,r=()=>{window.clearTimeout(n),n=0,t.textContent=e,t.classList.remove(`armed`)};return Qs(t,()=>{if(!n){t.textContent=`Tap again to restart`,t.classList.add(`armed`),n=window.setTimeout(r,3e3);return}r(),this.markChanged(`match`),this.close()}),Y(`div`,{class:`match-actions`},t,Y(`div`,{class:`panel-note`,text:`Starts this match over against the same opponent.`}))}changeSettings(e){this.settings={...this.settings,...e},this.options.onSettingsChange(this.settings),this.refresh()}optionList(e,t,n,r=`option-list`){let i=Y(`div`,{class:r}),a=e.map(e=>{let t=Y(`button`,{class:`option`},Y(`div`,{class:`option-label`,text:e.label}),e.hint?Y(`div`,{class:`option-hint`,text:e.hint}):null);return Qs(t,()=>n(e.value)),i.append(t),[e.value,t]});return this.refreshers.push(()=>{let e=t();for(let[t,n]of a)n.classList.toggle(`selected`,t===e)}),i}buildGroup(e){let t=Y(`div`,{class:`tune-group`},dl(e.title));e.note&&t.append(Y(`div`,{class:`panel-note`,text:e.note}));for(let n of e.items)t.append(n.kind===`number`?this.numberRow(n):this.choiceRow(n));return t}numberRow(e){let n=pl(e.step),r=e.get(t),i=Y(`input`,{class:`tune-slider`,attrs:{type:`range`,min:String(e.min),max:String(e.max),step:String(e.step),"aria-label":e.label}}),a=Y(`span`,{class:`tune-value`}),o=Y(`button`,{class:`tune-reset`,text:`↺`,attrs:{"aria-label":`Reset ${e.label}`}}),s=Y(`button`,{class:`tune-step`,text:`−`,attrs:{"aria-label":`Less ${e.label}`}}),l=Y(`button`,{class:`tune-step`,text:`+`,attrs:{"aria-label":`More ${e.label}`}}),u=e.hint?`${e.hint} · default ${hl(r,n,e.unit)}`:`Default ${hl(r,n,e.unit)}`,d=Y(`div`,{class:`tune-row`},Y(`span`,{class:`tune-label`,text:e.label}),Y(`div`,{class:`tune-control`},s,i,l),a,o,Y(`div`,{class:`tune-hint`,text:u})),f=(t,r)=>{let i=Math.min(e.max,Math.max(e.min,ml(t,n)));Math.abs(i-e.get(g))<1e-9||(e.set(g,i),this.markChanged(e.restart),r&&c(),this.refresh())};return i.addEventListener(`input`,()=>f(i.valueAsNumber,!1)),i.addEventListener(`change`,()=>c()),Qs(s,()=>f(e.get(g)-e.step,!0)),Qs(l,()=>f(e.get(g)+e.step,!0)),Qs(o,()=>f(r,!0)),this.refreshers.push(()=>{let t=e.get(g);i.value=String(t),a.textContent=hl(t,n,e.unit),d.classList.toggle(`changed`,Math.abs(t-r)>1e-9)}),d}choiceRow(e){let n=e.get(t),r=this.optionList(e.options,()=>e.get(g),t=>{t!==e.get(g)&&(e.set(g,t),this.markChanged(e.restart),c(),this.refresh())},`option-grid`),i=Y(`div`,{class:`tune-row choice`},e.hint?Y(`div`,{class:`tune-hint`,text:e.hint}):null,r);return this.refreshers.push(()=>i.classList.toggle(`changed`,e.get(g)!==n)),i}buildSaveTab(){let e=Y(`div`,{class:`save-summary`}),t=Y(`pre`,{class:`save-list`});this.refreshers.push(()=>{let r=o(),i=n(r);e.textContent=i===0?`Everything is at the shipped defaults.`:`${i} value${i===1?``:`s`} changed from the defaults:`,t.textContent=gl(r).join(`
`),t.hidden=i===0});let i=Y(`textarea`,{class:`save-text`,attrs:{readonly:``,rows:`5`,"aria-label":`Tuned values`}});i.hidden=!0;let a=Y(`button`,{class:`secondary-btn`,text:`Copy values`});Qs(a,()=>{let e=s(this.options.build);i.value=e,i.hidden=!1;let t=()=>this.options.toast(`Copied. Paste it to Claude to make these the defaults`,2.6,`info`),n=()=>{i.focus(),i.select(),this.options.toast(`Select the text below and copy it`,2.4,`info`)};navigator.clipboard?.writeText?navigator.clipboard.writeText(e).then(t,n):n()});let c=Y(`textarea`,{class:`save-text`,attrs:{rows:`5`,placeholder:`Paste the copied values (or a whole game.json) here`,"aria-label":`Values to apply`}}),l=Y(`button`,{class:`secondary-btn`,text:`Apply pasted values`}),d=Y(`div`,{class:`save-paste`},c,l);d.hidden=!0;let f=Y(`button`,{class:`secondary-btn`,text:`Paste values`});Qs(f,()=>{d.hidden=!d.hidden,d.hidden||c.focus()}),Qs(l,()=>{try{let e=r(c.value);this.pending=`rebuild`,c.value=``,d.hidden=!0,this.options.toast(e>0?`Applied ${e} value${e===1?``:`s`}`:`Nothing in there matched a setting`,2.2,`info`),this.refresh()}catch{this.options.toast(`That isn't valid JSON`)}});let p=Y(`button`,{class:`secondary-btn`,text:`Reset everything to defaults`});return Qs(p,()=>{n(o())!==0&&confirm(`Put every tuned value back to the shipped default?`)&&(u(),this.pending=`rebuild`,this.refresh())}),[dl(`Tuned values`),e,t,Y(`div`,{class:`save-actions`},a,f,p),i,d,dl(`Make default for everyone`),this.buildPublish()]}buildPublish(){let e=Y(`div`,{class:`publish`}),t=Y(`div`,{class:`panel-note publish-status`}),r=Y(`input`,{class:`pin-input`,attrs:{type:`password`,inputmode:`numeric`,maxlength:`4`,autocomplete:`off`,placeholder:`PIN`,"aria-label":`PIN`}}),i=Y(`input`,{class:`token-input`,attrs:{type:`password`,autocomplete:`off`,placeholder:`github_pat_…`,"aria-label":`GitHub token`}}),a=Y(`button`,{class:`primary-btn`,text:`Make default…`}),s=Y(`button`,{class:`secondary-btn`,text:`Confirm`}),c=Y(`button`,{class:`secondary-btn`,text:`Save token and publish`}),l=Y(`button`,{class:`link-btn`,text:`Forget the GitHub token on this device`}),u=Y(`div`,{class:`publish-step`},r,s),d=Y(`div`,{class:`publish-step token-step`},Y(`div`,{class:`panel-note`,text:`This device needs a GitHub token once. Create a fine-grained token for the ${Ic} repository with Contents: Read and write, then paste it here. It stays on this device.`}),Y(`a`,{class:`link-btn`,text:`Create a token on GitHub ↗`,attrs:{href:Fc,target:`_blank`,rel:`noopener`}}),i,c),f=e=>{a.hidden=e!==`start`,u.hidden=e!==`pin`,d.hidden=e!==`token`,l.hidden=e===`busy`||!Lc()},p=async e=>{let n=o();f(`busy`),t.textContent=`Publishing…`;try{await Bc(n,e,gl(n).join(`
`)),t.textContent=`Published. The new build with these defaults is live in about 2 minutes: reload the game then.`,this.options.toast(`Published as the new defaults`,2.4,`info`),f(`start`)}catch(e){let n=e instanceof zc?e:new zc(`Could not reach GitHub. Check the connection and try again.`);t.textContent=n.message,n.badToken?(Rc(null),f(`token`)):f(`start`)}};return Qs(a,()=>{if(n(o())===0){t.textContent=`Nothing to publish: everything is at the defaults.`;return}t.textContent=`Enter the PIN to confirm.`,r.value=``,f(`pin`),r.focus()}),Qs(s,()=>{if(r.value!==sl){t.textContent=`Wrong PIN.`,r.value=``,yl(u);return}let e=Lc();e?p(e):(t.textContent=``,f(`token`),i.focus())}),r.addEventListener(`keydown`,e=>{e.key===`Enter`&&s.click()}),Qs(c,()=>{let e=i.value.trim();e&&(Rc(e),i.value=``,p(e))}),Qs(l,()=>{Rc(null),t.textContent=`Token removed from this device.`,f(`start`)}),e.append(Y(`div`,{class:`panel-note`,text:`Commits the values above as the new game.json. Every player gets them from the next build.`}),a,u,d,t,l),f(`start`),e}};function dl(e){return Y(`div`,{class:`panel-section`,text:e})}function fl(){try{let e=localStorage.getItem(ll);if(e&&cl.some(([t])=>t===e))return e}catch{}return`game`}function pl(e){let t=String(e);return t.includes(`.`)?t.length-t.indexOf(`.`)-1:0}function ml(e,t){let n=10**t;return Math.round(e*n)/n}function hl(e,t,n=``){return`${e.toFixed(t)}${n?` ${n}`:``}`}function gl(e,n=``){let r=[];for(let[i,a]of Object.entries(e)){let e=n?`${n}.${i}`:i;if(typeof a==`object`&&a&&!Array.isArray(a))r.push(...gl(a,e));else{let n=_l(t,e);r.push(`${e}: ${vl(a)} (default ${vl(n)})`)}}return r}function _l(e,t){let n=e;for(let e of t.split(`.`)){if(typeof n!=`object`||!n||Array.isArray(n))return;n=n[e]}return n}function vl(e){let t=JSON.stringify(e)??`—`;return t.length>60?`${t.slice(0,57)}…`:t}function yl(e){e.classList.remove(`shake`),e.offsetWidth,e.classList.add(`shake`)}var bl=[[4,`calm`],[10,`breeze`],[15,`strong`],[1/0,`gale`]],xl={heavy:`<svg viewBox="0 0 32 32"><circle cx="16" cy="17" r="10" class="ball"/><circle cx="12.5" cy="13.5" r="2.6" class="shine"/></svg>`,volley:`<svg viewBox="0 0 32 32"><circle cx="7" cy="17" r="5" class="ball"/><circle cx="16" cy="17" r="5" class="ball"/><circle cx="25" cy="17" r="5" class="ball"/></svg>`,scatter:`<svg viewBox="0 0 32 32"><circle cx="10" cy="11" r="3.4" class="ball"/><circle cx="20" cy="9" r="3.4" class="ball"/><circle cx="25" cy="18" r="3.4" class="ball"/><circle cx="15" cy="18" r="3.4" class="ball"/><circle cx="8" cy="23" r="3.4" class="ball"/><circle cx="19" cy="26" r="3.4" class="ball"/></svg>`},Sl=`<svg viewBox="0 0 40 40"><path d="M20 3 30 19.5 23.2 18.2 23.2 36 16.8 36 16.8 18.2 10 19.5Z"/></svg>`,Cl=`<svg viewBox="0 0 24 24"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm8.4 5.3-1.9-.3a6.8 6.8 0 0 1-.6 1.5l1.1 1.6-1.6 1.6-1.6-1.1c-.5.3-1 .5-1.5.6l-.3 1.9h-2.3l-.3-1.9a6.8 6.8 0 0 1-1.5-.6l-1.6 1.1-1.6-1.6 1.1-1.6a6.8 6.8 0 0 1-.6-1.5l-1.9-.3v-2.3l1.9-.3c.1-.5.3-1 .6-1.5L4.6 7.6l1.6-1.6 1.6 1.1c.5-.3 1-.5 1.5-.6l.3-1.9h2.3l.3 1.9c.5.1 1 .3 1.5.6l1.6-1.1 1.6 1.6-1.1 1.6c.3.5.5 1 .6 1.5l1.9.3v2.3Z"/></svg>`,wl=class{root;labels;options;shipBars;turnPill;wind;windArrow;windSpeed;calloutEl;flashEl;calloutTimer=0;movePad;fuelFill;fuelLost;fuelLabel;cardsRow;cards=[];backButton;firePad;gauge;shipStatus=new gc;banner;toastEl;settingsPanel;buildTag;resultModal;hint;bannerTimer=0;toastTimer=0;constructor(e){this.options=e;let{input:t}=e;this.root=Y(`div`,{class:`hud`,attrs:{"data-mode":`hidden`}}),this.labels=Y(`div`,{class:`labels`});let n=e=>{let t=Y(`div`,{class:`hp-fill`}),n=Y(`div`,{class:`hp-ghost`}),r=Y(`span`,{class:`hp-text`}),i=Y(`div`,{class:`ship-name`,text:e===`player`?`You`:`Enemy`}),a=Y(`div`,{class:`crew-pips`}),o=Y(`div`,{class:`avatar`,text:e===`player`?`★`:`☠`}),s=Y(`span`,{class:`sail-left`});return{fill:t,ghost:n,text:r,card:Y(`div`,{class:`ship-card ${e}`},o,Y(`div`,{class:`ship-info`},Y(`div`,{class:`ship-head`},i,s),Y(`div`,{class:`hp`},n,t,r),a)),name:i,crew:a,avatar:o,sail:s}};this.shipBars={player:n(`player`),enemy:n(`enemy`)},this.turnPill=Y(`div`,{class:`turn-pill`});let r=Y(`button`,{class:`icon-btn settings-btn`,attrs:{"aria-label":`Settings`}},Xs(Cl));Qs(r,()=>this.settingsPanel.open()),this.windArrow=Y(`div`,{class:`wind-arrow`},Xs(Sl)),this.windSpeed=Y(`span`,{class:`wind-speed`,text:`0`}),this.wind=Y(`div`,{class:`wind`,attrs:{"data-level":`calm`}},Y(`div`,{class:`wind-dial`},this.windArrow),Y(`div`,{class:`wind-text`},Y(`div`,{class:`wind-label`,text:`Wind`}),Y(`div`,{},this.windSpeed,Y(`span`,{class:`wind-unit`,text:` kn`}))));let i=Y(`div`,{class:`hud-top`},this.shipBars.player.card,Y(`div`,{class:`top-center`},this.turnPill,this.wind),this.shipBars.enemy.card,r),a=Y(`button`,{class:`move-btn`,attrs:{"aria-label":`Sail left`},text:`◀`}),o=Y(`button`,{class:`move-btn`,attrs:{"aria-label":`Sail right`},text:`▶`});Zs(a,()=>t.press(`left`,`hud`),()=>t.release(`left`,`hud`)),Zs(o,()=>t.press(`right`,`hud`),()=>t.release(`right`,`hud`)),this.fuelFill=Y(`div`,{class:`fuel-fill`}),this.fuelLost=Y(`div`,{class:`fuel-lost`}),this.fuelLabel=Y(`div`,{class:`fuel-label`,text:`Sail`}),this.movePad=Y(`div`,{class:`move-pad`},a,Y(`div`,{class:`fuel`},this.fuelLabel,Y(`div`,{class:`fuel-bar`},this.fuelFill,this.fuelLost)),o),this.cardsRow=Y(`div`,{class:`gunner-cards`}),this.backButton=Y(`button`,{class:`back-btn`,text:`◀ Sail`}),Qs(this.backButton,()=>t.emit({type:`back`}));let s=Y(`span`,{class:`fire-label`,text:`FIRE`}),c=Y(`button`,{class:`fire-btn`},s);Zs(c,()=>t.fireDown(`hud`),()=>t.fireUp(`hud`)),this.gauge=new lc(s),this.firePad=Y(`div`,{class:`fire-pad`},this.gauge.ring,c),this.hint=Y(`div`,{class:`hint`}),this.banner=Y(`div`,{class:`banner`}),this.calloutEl=Y(`div`,{class:`callout`}),this.flashEl=Y(`div`,{class:`screen-flash`}),this.toastEl=Y(`div`,{class:`toast`}),this.settingsPanel=new ul({settings:e.settings,onSettingsChange:e.onSettingsChange,onRestart:e.onRestart,build:e.buildLabel,toast:(e,t,n)=>this.toast(e,t,n),onClose:()=>this.refreshBuildTag()}),this.resultModal=Y(`div`,{class:`modal result-modal`}),this.buildTag=Y(`div`,{class:`build-tag`}),this.refreshBuildTag(),this.root.append(Y(`div`,{class:`vignette`}),this.gauge.glow,this.flashEl,this.labels,i,this.movePad,this.cardsRow,this.backButton,this.firePad,this.gauge.element,this.shipStatus.element,this.hint,this.banner,this.calloutEl,this.toastEl,this.buildTag,this.settingsPanel.element,this.resultModal),document.body.appendChild(this.root)}refreshBuildTag(){let e=n(o())>0;this.buildTag.textContent=`${this.options.buildLabel}${e?` · tuned`:``}`}setMode(e){this.root.dataset.mode=e,(e===`aim`||e===`hidden`)&&this.shipStatus.hide()}showShipStatus(e,t){this.shipStatus.show(e,t)}hideShipStatus(){this.shipStatus.hide()}resetShipStatus(){this.shipStatus.reset()}resize(e){let t=Math.min(1.25,Math.max(.82,e/420));document.documentElement.style.setProperty(`--ui-scale`,t.toFixed(3))}setNames(e,t){this.shipBars.player.name.textContent=e,this.shipBars.enemy.name.textContent=t}setShipHp(e,t,n){let r=this.shipBars[e],i=`${100*Math.max(0,t)/n}%`;r.fill.style.width=i,r.ghost.style.width=i,r.fill.style.setProperty(`--segments`,String(n)),r.text.textContent=Tl(t),r.card.classList.toggle(`low`,t<=n*.25)}setCrew(e,t,n){let r=this.shipBars[e].crew;for(;r.children.length<t.length;)r.append(Y(`div`,{class:`crew-pip`},Y(`div`,{class:`crew-pip-fill`})));t.forEach((e,t)=>{let i=r.children[t];i.classList.toggle(`dead`,e<=0),i.firstElementChild.style.width=`${100*Math.max(0,e)/n}%`})}setAvatar(e,t){this.shipBars[e].avatar.replaceChildren(t)}bumpShip(e){let t=this.shipBars[e].card;t.classList.remove(`bump`),t.offsetWidth,t.classList.add(`bump`)}setTurn(e,t=``){this.turnPill.textContent=t,this.turnPill.dataset.side=e??``,this.shipBars.player.card.classList.toggle(`active`,e===`player`),this.shipBars.enemy.card.classList.toggle(`active`,e===`enemy`)}setWind(e,t,n=!1){this.windArrow.style.transform=`rotate(${e.toFixed(3)}rad)`;let r=String(Math.round(t));this.windSpeed.textContent!==r&&(this.windSpeed.textContent=r),this.wind.dataset.level=bl.find(([e])=>t<e)[1],n&&$s(this.wind,`changed`)}callout(e,t,n=1.4,r=``){this.calloutEl.replaceChildren(Y(`div`,{class:`callout-title`,text:e})),r&&this.calloutEl.append(Y(`div`,{class:`callout-sub`,text:r})),this.calloutEl.dataset.tone=t,$s(this.calloutEl,`visible`),window.clearTimeout(this.calloutTimer),this.calloutTimer=window.setTimeout(()=>this.calloutEl.classList.remove(`visible`),n*1e3)}flash(e,t=1){this.flashEl.dataset.kind=e,this.flashEl.style.setProperty(`--strength`,t.toFixed(2)),$s(this.flashEl,`on`)}setFuel(e){this.fuelFill.style.width=`${Math.max(0,Math.min(1,e))*100}%`,this.movePad.classList.toggle(`empty`,e<=.001)}setSail(e,t){let n=Math.max(0,Math.min(1,t)),r=n>=.995,i=this.shipBars[e].sail;i.textContent=r?``:`⛵ ${Math.round(n*100)}%`,i.classList.toggle(`low`,n<.35),e===`player`&&(this.fuelLost.style.width=`${(1-n)*100}%`,this.fuelLabel.textContent=r?`Sail`:`Sail ${Math.round(n*100)}%`)}setGunners(e,t){this.cards.length!==e.length&&(this.cardsRow.replaceChildren(),this.cards=e.map((e,t)=>{let n=Y(`button`,{class:`gunner-card`},Xs(xl[e.cannonId]??xl.heavy),Y(`div`,{class:`gunner-name`,text:e.name}),Y(`div`,{class:`gunner-cannon`,text:e.cannonName}),Y(`div`,{class:`crew-hp`},Y(`div`,{class:`crew-hp-fill`})),Y(`div`,{class:`gunner-key`,text:String(t+1)}));return Qs(n,()=>this.options.input.emit({type:`select`,index:t})),this.cardsRow.append(n),n})),e.forEach((e,n)=>{let r=this.cards[n],i=e.hp<=0;r.classList.toggle(`selected`,t===n),r.classList.toggle(`dead`,i),r.disabled=i;let a=r.querySelector(`.crew-hp-fill`);a.style.width=`${100*Math.max(0,e.hp)/e.maxHp}%`,a.style.setProperty(`--segments`,String(e.maxHp))})}setPower(e,t){this.firePad.classList.toggle(`charging`,e!==null),this.firePad.style.setProperty(`--power`,(e?.power??0).toFixed(3)),t!==void 0&&this.gauge.setCancelZone(t),this.gauge.setCharge(e)}setAimReadout(e,t,n){this.gauge.setReadout(e,t,n)}setHint(e){this.hint.textContent=e,this.hint.classList.toggle(`visible`,e.length>0)}showBanner(e,t=``,n=1.3){this.banner.replaceChildren(Y(`div`,{class:`banner-title`,text:e})),t&&this.banner.append(Y(`div`,{class:`banner-sub`,text:t})),$s(this.banner,`visible`),window.clearTimeout(this.bannerTimer),this.bannerTimer=window.setTimeout(()=>this.banner.classList.remove(`visible`),n*1e3)}hideBanner(){window.clearTimeout(this.bannerTimer),this.banner.classList.remove(`visible`)}toast(e,t=1.6,n=`alert`){this.toastEl.textContent=e,this.toastEl.classList.toggle(`info`,n===`info`),this.toastEl.classList.add(`visible`),window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove(`visible`),t*1e3)}showResult(e){let t=Y(`button`,{class:`primary-btn`,text:`Rematch`});Qs(t,()=>{this.hideResult(),this.options.onRematch()});let n=Y(`button`,{class:`secondary-btn`,text:`New opponent`});Qs(n,()=>{this.hideResult(),this.options.onNewOpponent()}),this.resultModal.replaceChildren(Y(`div`,{class:`panel result ${e.won?`won`:`lost`}`},Y(`div`,{class:`result-title`,text:e.won?`Victory!`:`Defeat`}),Y(`div`,{class:`result-reason`,text:e.reason}),e.opponentLine?Y(`div`,{class:`result-line`,text:e.opponentLine}):null,Y(`table`,{class:`stats`},...e.stats.map(([e,t])=>Y(`tr`,{},Y(`th`,{text:e}),Y(`td`,{text:t})))),Y(`div`,{class:`result-actions`},t,n))),this.resultModal.classList.add(`open`)}hideResult(){this.resultModal.classList.remove(`open`)}};function Tl(e){let t=Math.round(e*100)/100;return Number.isInteger(t)?String(t):t.toFixed(2).replace(/0$/,``)}var El=[`Salty`,`Dread`,`Rusty`,`Stormy`,`Black`,`Iron`,`Scurvy`,`Mad`,`Lucky`,`Grim`,`Sly`,`Briny`,`Crimson`,`Golden`,`Jolly`,`Sneaky`,`Cursed`,`Wild`,`Foggy`,`Rum`],Dl=[`Bones`,`Beard`,`Kraken`,`Cutlass`,`Parrot`,`Anchor`,`Flint`,`Hook`,`Grog`,`Plank`,`Gull`,`Squid`,`Doubloon`,`Galleon`,`Cannon`,`Reef`,`Tide`,`Shanty`,`Barnacle`,`Pegleg`],Ol=[`Pete`,`Mary`,`Jack`,`Morgan`,`Nell`,`Bart`,`Anne`,`Kidd`,`Rosa`,`Finn`,`Ike`,`Greta`],kl=[`#7a2e8f`,`#1f6f8b`,`#2f7d4a`,`#9c3d2a`,`#3b4a9c`,`#8a6a1f`,`#2a2f3a`,`#a33a64`],Al=[`#f2c14e`,`#d9dee5`,`#e08a3c`],jl=[`skull`,`anchor`,`swords`,`wheel`,`compass`];function Ml(e){return{name:Nl(e),level:6+e.int(48),badge:{background:e.pick(kl),ring:e.pick(Al),emblem:e.pick(jl),emblemColor:e.chance(.75)?`#fff4dc`:`#ffd56b`}}}function Nl(e){let t=e.pick(El),n=e.pick(Dl),r=e.pick(Ol),i=String(e.chance(.5)?e.int(100):1960+e.int(60));switch(e.int(7)){case 0:return`${t}${n}${i}`;case 1:return`${n}_${r}`;case 2:return`xX${t}${n}Xx`;case 3:return`Capn${n}`;case 4:return`${r}The${t}`;case 5:return`${t.toLowerCase()}${r.toLowerCase()}_${e.int(10)}`;default:return`${t}${r}`}}function Pl(e){return`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="${e.background}" stroke="${e.ring}" stroke-width="4"/>
    <circle cx="32" cy="32" r="24" fill="none" stroke="${e.ring}" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="3 3"/>
    <g fill="${e.emblemColor}" stroke="${e.emblemColor}">${Fl[e.emblem]}</g>
  </svg>`}var Fl={skull:`
    <rect x="17" y="40" width="30" height="5" rx="2.5" transform="rotate(30 32 42.5)" stroke="none"/>
    <rect x="17" y="40" width="30" height="5" rx="2.5" transform="rotate(-30 32 42.5)" stroke="none"/>
    <circle cx="32" cy="27" r="11" stroke="none"/>
    <rect x="26" y="33" width="12" height="7" rx="2" stroke="none"/>
    <circle cx="27.5" cy="27" r="3.2" fill="#1b1b1b" stroke="none"/>
    <circle cx="36.5" cy="27" r="3.2" fill="#1b1b1b" stroke="none"/>
    <path d="M30 37v3M32 37v3M34 37v3" stroke="#1b1b1b" stroke-width="1.2"/>`,anchor:`
    <circle cx="32" cy="17" r="4" fill="none" stroke-width="3"/>
    <path d="M32 21v26M24 27h16" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    <path d="M18 38c2 8 8 11 14 11s12-3 14-11" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    <path d="M15 37l3-4 3 4zM43 37l3-4 3 4z" stroke="none"/>`,swords:`
    <path d="M18 46L44 18M20 18l26 28" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    <path d="M16 42l6 6M42 48l6-6" stroke-width="4" stroke-linecap="round"/>
    <circle cx="16" cy="48" r="2.5" stroke="none"/><circle cx="48" cy="48" r="2.5" stroke="none"/>`,wheel:`
    <circle cx="32" cy="32" r="11" fill="none" stroke-width="3.5"/>
    <circle cx="32" cy="32" r="3.5" stroke="none"/>
    <path d="M32 14v36M14 32h36M19.3 19.3l25.4 25.4M44.7 19.3L19.3 44.7" stroke-width="2.5" stroke-linecap="round"/>`,compass:`
    <path d="M32 12l5 15 15 5-15 5-5 15-5-15-15-5 15-5z" stroke="none"/>
    <circle cx="32" cy="32" r="3" fill="#1b1b1b" stroke="none"/>`},Il={background:`#2c5fae`,ring:`#f2c14e`,emblem:`compass`,emblemColor:`#fff4dc`},Ll=[`gg`,`gg wp`,`nice try!`,`close one`,`gg, rematch?`],Rl=[`gg`,`gg wp`,`argh! rematch?`,`nice shots`,`lucky shot!`];function zl(e,t){return e.pick(t?Ll:Rl)}var Bl=1900,Vl={coin:900,result:2300,leave:3600,done:4e3},Hl=class{root;timers=[];onDone=null;constructor(e){this.root=Y(`div`,{class:`vs-intro`}),e.append(this.root)}get playing(){return this.onDone!==null}play(e){this.clearTimers(),this.onDone=e.onDone;let{opponent:t,firstSide:n}=e,r=Y(`div`,{class:`vs-searching`},Y(`div`,{class:`vs-spinner`}),Y(`div`,{class:`vs-searching-text`,text:`Finding an opponent…`})),i=Y(`div`,{class:`vs-card player`},Y(`div`,{class:`vs-badge`},Xs(Pl(Il),`badge`)),Y(`div`,{class:`vs-name`,text:`You`}),Y(`div`,{class:`vs-level`,text:`Captain`})),a=Y(`div`,{class:`vs-card enemy`},Y(`div`,{class:`vs-badge`},Xs(Pl(t.badge),`badge`)),Y(`div`,{class:`vs-name`,text:t.name}),Y(`div`,{class:`vs-level`,text:`Level ${t.level}`})),o=Y(`div`,{class:`vs-coin ${n===`player`?`lands-player`:`lands-enemy`}`},Y(`div`,{class:`coin-face front`},Xs(Pl(Il),`badge`)),Y(`div`,{class:`coin-face back`},Xs(Pl(t.badge),`badge`))),s=Y(`div`,{class:`vs-result`,text:n===`player`?`You go first!`:`${t.name} goes first`}),c=Y(`div`,{class:`vs-stage`},i,Y(`div`,{class:`vs-mid`,text:`VS`}),a);this.root.replaceChildren(r,c,Y(`div`,{class:`vs-coin-wrap`},o),s),this.root.className=`vs-intro open`;let l=e.searching?Bl:0;e.searching&&this.root.classList.add(`searching`),this.at(l,()=>{this.root.classList.remove(`searching`),this.root.classList.add(`cards`),e.onBeat?.(`found`)}),this.at(l+Vl.coin,()=>{this.root.classList.add(`coin`),e.onBeat?.(`coin`)}),this.at(l+Vl.result,()=>{this.root.classList.add(`result`),e.onBeat?.(`result`)}),this.at(l+Vl.leave,()=>this.root.classList.add(`leaving`)),this.at(l+Vl.done,()=>this.finish())}skip(){this.playing&&this.finish()}finish(){this.clearTimers(),this.root.className=`vs-intro`;let e=this.onDone;this.onDone=null,e?.()}at(e,t){this.timers.push(window.setTimeout(t,e))}clearTimers(){for(let e of this.timers)window.clearTimeout(e);this.timers=[]}},Ul=1.2,Wl=class{shot;time=0;events;next=0;group={position:new L,velocity:new L,points:[]};roots;chain;constructor(e,t){this.shot=e,this.events=t,this.roots=e.projectiles.flatMap((e,t)=>e.parent===null&&e.kind===`ball`?[t]:[]),this.chain=this.chainFrom(this.leadRoot())}advance(e){this.time+=e;let t=[];for(;this.next<this.events.length&&this.events[this.next].time<=this.time;)t.push(this.events[this.next++]);return t}skipToEnd(){this.time=Math.max(this.time,this.shot.duration);let e=this.events.slice(this.next);return this.next=this.events.length,e}get finished(){return this.time>=this.shot.duration&&this.next>=this.events.length}get isCluster(){return this.roots.length>1&&this.roots.every(e=>this.shot.projectiles[e].launch.delay===0)}get hasMeteors(){return this.shot.projectiles.some(e=>e.kind===`meteor`)}get leadIndex(){return this.chain[this.chain.length-1]}get lastIndex(){let e=this.shot.projectiles,t=this.leadIndex;return e.forEach((n,r)=>{n.kind===`ball`&&!n.split&&n.impactTime>e[t].impactTime&&(t=r)}),t}landings(){return this.shot.projectiles.flatMap(e=>e.kind===`ball`&&!e.split&&e.flight.hit?[Gl(e.flight.hit.point)]:[])}followTarget(){let{position:e,velocity:t,points:n}=this.group;n.length=0,t.set(0,0,0);let r=0;for(let e of this.shot.projectiles)if(!(e.kind!==`ball`||this.time<e.launch.delay)){if(this.time<e.impactTime){let i=this.time-e.launch.delay;n.push(Gl(_o(e.flight,i)));let a=vo(e.flight,i);t.x+=a.x,t.y+=a.y,t.z+=a.z,r++}else!e.split&&e.flight.hit&&this.time<e.impactTime+Ul&&n.push(Gl(e.flight.hit.point))}return r===0?null:(t.divideScalar(r),e.copy(Kl(n)),this.group)}leadRoot(){if(!this.isCluster)return this.roots[0]??0;let e=this.roots[0],t=1/0;for(let n of this.roots){let r=this.chainFrom(n),i=this.shot.projectiles[r[r.length-1]].impactTime;i<t&&(t=i,e=n)}return e}chainFrom(e){let t=[e];for(;;){let e=t[t.length-1],n=this.shot.projectiles.findIndex(t=>t.parent===e);if(n<0)return t;t.push(n)}}},Gl=e=>new L(e.x,e.y,e.z);function Kl(e){let t=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0);for(let r of e)t.min(r),n.max(r);return t.add(n).multiplyScalar(.5)}var ql=.36,Jl=5,Yl=[`DIRECT HIT!`,`DOUBLE HIT!`,`TRIPLE HIT!`],Xl=.9,Zl=class{settings;config;world;input;hud;labels;sfx;build;director;intro;flavour=new vs(Math.random()*2**32>>>0);match;brain;opponent;phase={kind:`result`};shown;holes={player:[],enemy:[]};matchStartTime=0;clock=0;gameTime=0;hitStop=0;lastWindTurn=-1;aimRig=null;pendingIndicator=null;debugFullArc=!1;matchClock=0;shotClock=0;shownPowerUp=null;tmp=new L;constructor(e){this.config=e.config,this.world=e.world,this.input=e.input,this.hud=e.hud,this.labels=e.labels,this.settings=e.settings,this.sfx=e.sfx,this.build=e.build,this.director=new Pa(e.world.camera),this.intro=new Hl(document.body)}get currentMatch(){return this.match}get currentOpponent(){return this.opponent}newMatch(e={}){let t=e.seed??Math.random()*2**32>>>0,n=e.newOpponent??!this.opponent;n&&(this.opponent=Ml(new vs(t^1374496523)),this.hud.setNames(`You`,this.opponent.name),this.hud.setAvatar(`enemy`,Xs(Pl(this.opponent.badge),`badge`))),this.sfx.chargeStop(),this.sfx.stopWhistle();for(let e of m)this.world.ships[e].onCrewSplash=e=>{this.world.effects.splash(e,.55),this.sfx.splash(.5,this.soundAt(e))},this.world.rubble.onLand=e=>{e.kind===`palm`?this.world.effects.treeLand(e.point,e.size,e.water):this.world.effects.rockLand(e.point,e.size,e.water),e.water?this.sfx.splash(Math.min(2,e.size/6),this.soundAt(e.point)):e.kind===`palm`?this.sfx.woodHit(this.soundAt(e.point)):this.sfx.rockHit(this.soundAt(e.point)),this.director.addShake(Math.min(.5,e.size/(e.kind===`palm`?60:30)))},this.world.ships[e].onDebrisSplash=(e,t)=>{this.world.effects.splash(e,t),this.sfx.splash(t,this.soundAt(e))};this.match=new Bs(this.config,t),this.brain=new bs(`enemy`,t^2654435769),this.world.reset(),this.world.effects.clear(),this.world.powerUps.clear(),this.shownPowerUp=null,this.matchClock=0,this.hitStop=0,this.lastWindTurn=-1,this.labels.clearFloating(),this.hud.hideResult();for(let e of m)this.config.gunners.forEach((t,n)=>this.world.ships[e].setCrewAlive(n,!0,!1));this.shown={ship:{player:this.config.ship.hp,enemy:this.config.ship.hp},crew:{player:this.config.gunners.map(()=>this.config.crew.hp),enemy:this.config.gunners.map(()=>this.config.crew.hp)},sail:{player:1,enemy:1}};for(let e of m)this.holes[e].length=0;this.hud.resetShipStatus(),this.syncShips(),this.refreshHud(),this.matchStartTime=this.clock,this.match.start(),this.applyWind(),this.hud.setMode(`hidden`),this.hud.setTurn(null),this.hud.hideBanner(),this.director.use(new po(230,75,Math.PI*.3,.06,45)),this.phase={kind:`intro`},this.intro.play({opponent:this.opponent,firstSide:this.match.state.turnSide,searching:n,onDone:()=>this.beginTurn(this.match.state.turnSide),onBeat:e=>{e===`found`?this.sfx.matchFound():e===`coin`?this.sfx.coin():this.sfx.turn(this.match.state.turnSide===`player`)}})}update(e,t){this.clock=t;let n=this.input.consumeEvents(),r=this.gameStep(e);switch(this.matchClock+=r,this.phase.kind){case`intro`:n.some(e=>e.type===`tap`||e.type===`fireDown`)&&this.intro.skip();break;case`turnBanner`:this.updateTurnBanner(this.phase,e);break;case`move`:this.updateMove(e,n);break;case`aim`:this.updateAim(this.phase,e,n);break;case`bot`:n.some(e=>e.type===`tap`)?this.skipBotTurn(this.phase):this.updateBot(this.phase,e);break;case`flight`:this.updateFlight(this.phase,r,n);break;case`resolve`:this.updateResolve(this.phase,r,n);break;case`finale`:this.updateFinale(this.phase,e,n)}if(this.syncShips(),this.updatePowerUp(e),this.updateMarkers(),this.updateWindDial(),this.world.effects.setDamageSources(m.map(e=>({position:this.world.ships[e].root.position.clone().setY(this.config.ship.deckHeight+1),damage:1-this.shown.ship[e]/this.config.ship.hp}))),this.world.update(r,this.gameTime),this.director.update(e),this.pendingIndicator){let{unit:e,power:t,charge:n,dt:r}=this.pendingIndicator;this.pendingIndicator=null,this.phase.kind===`aim`&&this.updateIndicator(e,t,n,r)}this.labels.update(e,this.world.viewportWidth,this.world.viewportHeight),this.world.render()}gameStep(e){let t=1;if(this.hitStop>0)this.hitStop-=e,t=0;else if(this.phase.kind===`flight`&&this.phase.finisherAt!==null&&!this.phase.skip){let e=this.config.presentation,n=this.phase.playback.time;n>=this.phase.finisherAt-e.finisherSlowMoTime&&n<this.phase.finisherAt+.25&&(t=e.finisherSlowMo)}let n=e*t;return this.gameTime+=n,n}beginTurn(e){this.showAllCrew(),this.input.releaseAll(),this.input.setAimMode(!1);for(let e of m)this.shown.sail[e]=Ds(this.config,this.match.state.ships[e]);this.refreshHud(),this.hud.setMode(`watch`),this.hud.hideShipStatus();let t=e===`player`?`Your turn`:`${this.opponent.name}'s turn`;this.hud.setTurn(e,t),this.match.state.turn>1&&this.sfx.turn(e===`player`),this.applyWind();let n=this.match.state.powerUp&&this.match.state.powerUp.id!==this.shownPowerUp?.id?this.match.state.powerUp:null;if(n){this.shownPowerUp={...n},this.showPowerUp(n),this.sfx.powerUpSpawn(),this.hud.showBanner(`Power-up!`,ru[n.kind](this.config,n.uses),nu),this.director.use(this.powerUpShot(e,n),{seconds:1,arc:.2}),this.phase={kind:`turnBanner`,side:e,time:-nu};return}this.hud.showBanner(t,$l(this.match.state.wind.speed),this.config.presentation.bannerTime),e===`player`?(this.director.use(this.shipRig(`player`),{seconds:1.3,arc:.3}),this.hud.showShipStatus(this.shipStatus(`player`),!0)):this.director.use(this.establishingShot(),{seconds:1.4,arc:.3}),this.phase={kind:`turnBanner`,side:e,time:0}}updateTurnBanner(e,t){let n=e.time;if(e.time+=t,n<0&&e.time>=0){let t=e.side,n=t===`player`?`Your turn`:`${this.opponent.name}'s turn`;this.hud.showBanner(n,$l(this.match.state.wind.speed),this.config.presentation.bannerTime),t===`player`?(this.director.use(this.shipRig(`player`),{seconds:1.3,arc:.3}),this.hud.showShipStatus(this.shipStatus(`player`),!0)):this.director.use(this.establishingShot(),{seconds:1.4,arc:.3})}e.time<this.config.presentation.bannerTime||(e.side===`player`?this.enterMove():this.enterBot())}enterMove(){this.showAllCrew(),this.input.releaseAll(),this.input.setAimMode(!1),this.world.indicator.hide(),this.world.indicator.setLastImpactVisible(!1),this.hud.setMode(`move`),this.hud.setPower(null),this.hud.showShipStatus(this.shipStatus(`player`),!1),this.hud.setHint(this.input.coarsePointer?`Hold ◀ ▶ to sail · tap a gunner to aim`:`A/D or ◀ ▶ to sail · 1–3 to pick a gunner`),this.director.use(this.shipRig(`player`),{seconds:this.config.presentation.cameraBlendTime*.7}),this.phase={kind:`move`},this.refreshHud()}updateMove(e,t){let n=this.input.moveAxis();n!==0&&this.handle(this.match.sail(n,e)),this.hud.setFuel(this.match.state.ships.player.fuel/this.config.ship.fuelPerTurn);for(let e of t)e.type===`select`&&this.trySelect(e.index)}trySelect(e){this.match.isAlive(`player`,e)&&(this.sfx.select(),this.handle(this.match.selectGunner(e)),this.enterAim())}enterAim(){this.input.releaseAll(),this.input.setAimMode(!0),this.hud.setMode(`aim`),this.hud.setPower(null,this.config.power.cancelBelow),this.hud.setHint(this.input.coarsePointer?`Drag to aim · hold FIRE to charge`:this.input.pointerLocked?`Mouse to aim · hold click or Space to charge`:`Click the view, then move the mouse to aim · hold Space to charge`),this.world.indicator.setLastImpactVisible(this.settings.lastShotFlag);let e=this.match.state.selected;this.world.ships.player.settleList(),this.config.gunners.forEach((t,n)=>this.world.ships.player.setCrewVisible(n,n!==e)),this.world.ships.player.setRiggingVisible(!1),this.aimRig=new so(this.config,this.world.ships.player,()=>this.match.state.ships.player.angle,e,()=>this.match.aimOf(`player`,e),()=>this.world.camera.aspect),this.director.use(this.aimRig,{seconds:this.config.presentation.cameraBlendTime*.7}),this.phase={kind:`aim`,charging:!1,hold:0},this.refreshHud()}updateAim(e,t,n){let r=this.match.state.selected,i=this.config.presentation,{dx:a,dy:o}=this.input.consumeAimDelta(),s=+!!this.input.isHeld(`left`)-!!this.input.isHeld(`right`),c=+!!this.input.isHeld(`up`)-!!this.input.isHeld(`down`);if(a!==0||o!==0||s!==0||c!==0){let e=this.match.aimOf(`player`,r),n=$t(i.aimDegPerPixel),l=$t(i.keyboardAimDegPerSecond)*t;this.match.setAim({yaw:e.yaw-a*n+s*l,pitch:e.pitch-o*n+c*l})}for(let t of n){if(t.type===`back`&&!e.charging)return this.enterMove();if(t.type===`select`&&!e.charging&&t.index!==r&&this.match.isAlive(`player`,t.index))return this.trySelect(t.index);if(t.type===`fireDown`&&!e.charging&&(e.charging=!0,e.hold=0,this.sfx.chargeStart()),t.type===`fireCancel`&&e.charging&&(e.charging=!1,this.sfx.chargeStop(),this.hud.setPower(null)),t.type===`fireUp`&&e.charging){e.charging=!1,this.sfx.chargeStop();let t=Us(e.hold,this.config.power);if(t.kind===`cancel`)this.hud.toast(`Too quick: shot cancelled`),this.sfx.cancel(),this.hud.setPower(null);else if(t.kind===`fire`)return this.fire({power:t.power});else return this.misfire()}}let l=this.match.indicatorPower(`player`),u=null;if(e.charging){e.hold+=t;let n=Hs(e.hold,this.config.power);if(this.hud.setPower(n),this.sfx.chargeUpdate(n.power,n.phase!==`filling`),n.phase===`overcharged`)return this.misfire();l=n.power,u=n.phase===`filling`?n.power:1}this.world.ships.player.setTremble(r,u??0),u!==null&&this.world.effects.fuse(this.world.ships.player.fuseWorld(r,this.tmp),u,t),this.pendingIndicator={unit:r,power:l,charge:u,dt:t}}misfire(){this.sfx.chargeStop(),this.hud.toast(`Misfire! Held too long`),this.fire({misfire:!0})}updateIndicator(e,t,n,r){let i=this.match.aimOf(`player`,e),a=this.config.cannons[this.config.gunners[e].cannon],o=this.config.presentation,s=this.debugFullArc?`full`:this.settings.indicator,c=s===`dots`?this.match.predict(`player`,e,i,1,void 0,(o.aimDotsLength+5)/Math.max(1,a.maxSpeed)+.1):this.match.predict(`player`,e,i,Math.max(t,this.config.power.cancelBelow));this.world.indicator.update(r,{flight:c,style:s,guideLength:o.aimGuideLength,dotsLength:o.aimDotsLength,coneDeg:a.coneDeg,charge:n,bob:this.world.ships.player.visualOffset(e,this.tmp),camera:this.world.camera},this.world.bufferHeight),this.hud.setAimReadout(x(i.pitch),n===null?null:t,this.match.state.lastPower.player)}fire(e){this.sfx.chargeStop(),this.input.releaseAll(),this.input.setAimMode(!1),this.world.indicator.hide(),this.world.indicator.setLastImpactVisible(!1),this.hud.setPower(null),this.hud.setHint(``),this.hud.setMode(`watch`),this.hud.hideShipStatus(),this.shotClock=this.matchClock,this.handle(this.match.fire({...e,clock:this.matchClock}))}startShot(e,t,n=!1){e.side===`player`&&(this.brain.observe(e,this.match),this.world.indicator.setLastImpact(null));let r=new Wl(e,t),i=this.config.cannons[e.cannonId];this.world.projectiles.show(e,i.ballRadius,this.world.ships[e.side].visualOffset(e.unitIndex,this.tmp),au(e,t));let a=this.match.state.ships[h(e.side)],o=a.hp<=0||a.crew.every(e=>e.hp<=0),s=t.filter(e=>e.type===`ShipDamaged`||e.type===`UnitKilled`);if(this.phase={kind:`flight`,playback:r,landed:!1,skip:n,launched:e.projectiles.map(()=>!1),followAt:n?null:ql,finisherAt:o&&s.length>0?s[s.length-1].time:null,hits:e.projectiles.filter(t=>No(t.flight.hit)&&t.flight.hit.side!==e.side).length,meteorsHeard:!1,damage:t.reduce((e,t)=>e+(t.type===`ShipDamaged`?t.amount:0),0),collapses:t.some(e=>e.type===`MastBroken`||e.type===`RockFell`),announced:!1,cracked:!1,trees:this.config.presentation.trees?this.treeHits(e):[],treesDone:0},e.side===`enemy`&&!n){let t=e.projectiles[r.leadIndex];this.sfx.whistle(t.impactTime,this.soundAt(this.world.ships.player.root.position))}}onLaunch(e,t,n){let r=e.shot,i=r.projectiles[t];if(i.kind===`meteor`){if(!n.meteorsHeard){n.meteorsHeard=!0;let t=Math.max(...r.projectiles.filter(e=>e.kind===`meteor`).map(e=>e.impactTime));this.sfx.meteors(t-e.time,this.soundAt(this.world.ships[h(r.side)].root.position))}return}if(i.parent!==null||e.isCluster&&t>0)return;let a=this.world.ships[r.side],o=new L,s=new L;a.muzzleWorld(r.unitIndex,o,s);let c=r.cannonId===`scatter`?`scatter`:r.cannonId===`volley`?`volley`:`heavy`,l=c===`heavy`?1:c===`volley`?.7:.85;this.world.effects.muzzleBlast(o,s,r.misfire?l*.6:l),a.recoil(r.unitIndex),this.sfx.cannon(c,this.soundAt(o)),r.misfire&&this.sfx.misfire(this.soundAt(o)),this.director.addShake(r.side===`player`?.26*l:.08),r.side===`player`&&t===0&&(this.aimRig?.fired(),this.hud.flash(`fire`,r.misfire?.3:.55*l),navigator.vibrate?.(r.misfire?[20,40,20]:40))}soundAt(e){let t=new L(e.x,e.y,e.z),n=t.distanceTo(this.world.camera.position),r=t.clone().project(this.world.camera),i=r.z<1;return{volume:Math.min(1,Math.max(.15,1.15-n/260)),pan:i?Math.max(-1,Math.min(1,r.x))*.7:0}}updateFlight(e,t,n){let{playback:r}=e;r.shot.side===`enemy`&&n.some(e=>e.type===`tap`)&&!e.skip&&(e.skip=!0,this.sfx.stopWhistle());let i=e.skip?r.skipToEnd():r.advance(t);e.skip&&(this.matchClock=Math.max(this.matchClock,this.shotClock+r.time)),r.shot.projectiles.forEach((t,n)=>{!e.launched[n]&&r.time>=t.launch.delay&&(e.launched[n]=!0,this.onLaunch(r,n,e))}),e.followAt!==null&&r.time>=e.followAt&&!e.landed&&(e.followAt=null,this.showAllCrew(),this.director.use(new uo(()=>r.followTarget(),(e,t)=>Math.max(0,wt(e,t,this.config.arena)),()=>this.world.camera.aspect,62),{seconds:.5}));for(let t of i)this.onTimedEvent(t,r,e);for(;e.treesDone<e.trees.length&&e.trees[e.treesDone].time<=r.time+1e-9;)this.snapTree(e.trees[e.treesDone++]);if(this.world.projectiles.update(r.time,this.world.effects),r.finished){this.world.projectiles.hide(),e.skip&&this.director.use(this.impactShot(this.match.state.turnSide),{seconds:.5});let t=this.config.presentation,n=e.collapses?t.collapseHoldTime:0,i=e.finisherAt===null?(e.skip?Xl:t.resolveHoldTime)+n:.5;this.phase={kind:`resolve`,playback:r,time:0,hold:i}}}onTimedEvent(e,t,n){let r=t.shot;switch(e.type){case`ProjectileImpact`:{let i=e.hit;if(!i)return;let a=Ql(i.point),o=r.projectiles[e.projectile],s=o.kind===`meteor`,c=s?.9:t.isCluster?.5:r.cannonId===`volley`?.8:1,l=e.projectile===t.leadIndex,u=this.soundAt(i.point);if(o.blastScale>1&&(this.world.effects.bigBlast(i.point,this.config.cannons[r.cannonId].splashRadius*o.blastScale),this.sfx.bigBlast(u),this.director.addShake(.8)),i.surface===`water`)this.world.effects.splash(i.point,c),(l||!t.isCluster)&&this.sfx.splash(c,u);else if(i.surface===`island`)this.world.effects.dust(i.point),(l||!t.isCluster)&&this.sfx.rockHit(u);else{if(this.world.effects.shipHit(i.point,c),this.sfx.woodHit(u),(i.surface===`hull`||i.surface===`crew`)&&i.side){let e=this.match.frameOf(i.side),t=Ha(e,vo(o.flight,o.flight.duration)),n=s?Zo:this.config.cannons[r.cannonId].ballRadius,{minHoleSize:a,holeSize:c}=this.config.presentation,l=Math.max(a,n*c)*(o.blastScale>1?1.5:1),u=i.surface===`hull`?s?this.config.powerUps.meteorDamage:this.config.cannons[r.cannonId].damage*o.damageScale:0,d=Ua(e,i.point),f=this.world.ships[i.side];this.config.presentation.listing&&u>0&&f.takeOnWater(Ql(d),u),this.config.presentation.holes&&(f.addHole(Ql(d),Ql(t),l),this.holes[i.side].push({x:d.x,y:d.y,radius:l}))}if(this.director.addShake(r.side===`enemy`?.9:.4),i.side&&this.world.ships[i.side].flashHit(c),n.skip||(this.hitStop=Math.max(this.hitStop,this.config.presentation.hitStopTime*(t.isCluster?1.4:1)),this.sfx.thump(u)),r.side===`player`){if(this.labels.addFloating(a,``,`hit-marker`,.45,0),!n.announced){n.announced=!0;let e=n.hits===1&&i.surface===`mast`?`MAST HIT!`:Yl[n.hits-1]??`${n.hits} HITS!`;this.hud.callout(e,`hit`,1.4,n.damage>0?`−${Tl(n.damage)} hull`:``)}}else n.announced||(n.announced=!0,this.hud.flash(`hurt`,t.isCluster?.7:1),navigator.vibrate?.([30,30,60]))}let d=t.events.some(t=>(t.type===`RockDamaged`||t.type===`RockFell`)&&t.projectile===e.projectile);if(l&&r.side===`player`&&n.hits===0&&n.damage===0&&!No(i)&&!d&&this.announceMiss(i.point,i.surface),r.side===`player`&&e.projectile===t.leadIndex){let e=i.surface===`water`||i.surface===`island`&&i.rock===void 0;this.world.indicator.setLastImpact(e?i.point:null)}if(e.projectile===t.lastIndex&&!n.landed&&!n.skip){if(n.landed=!0,t.hasMeteors){this.director.use(this.meteorShot(h(r.side)),{seconds:.8});break}let e=t.landings(),i=Kl(e.length>0?e:[a]);i.y+=2;let o=this.world.camera.position.clone(),s=o.clone().sub(i).setY(0);s.lengthSq()<1e-6&&s.set(1,0,0);let c=Math.max(22,s.length());s.normalize();let l=this.world.camera.fov,u=lo(e,i,s.clone().negate().multiplyScalar(.954).setY(-.3),l,this.world.camera.aspect)*.954;o.copy(i).addScaledVector(s,Math.max(c,u)),o.y=Math.max(o.y,i.y+Math.max(5,u*.3),wt(o.x,o.z,this.config.arena)+5),this.director.use(new fo(o,i,l),{seconds:.6})}break}case`ShipDamaged`:this.shown.ship[e.side]=e.hp,this.hud.setShipHp(e.side,e.hp,this.config.ship.hp),this.hud.bumpShip(e.side),this.labels.addFloating(Ql(e.point),`−${Tl(e.amount)}`,`damage-number ${e.side}`),n.announced||(n.announced=!0,e.side===`enemy`?this.hud.callout(`BLAST HIT!`,`hit`,1.4,`−${Tl(n.damage)} hull`):this.hud.flash(`hurt`,1));break;case`PowerUpCollected`:{let t=Ws[e.kind];this.world.effects.powerBurst(e.point,t,e.kind===`split`?1.2:1),this.world.powerUps.collect(e.usesLeft),this.shownPowerUp&&(this.shownPowerUp.uses=e.usesLeft),this.sfx.powerUpPickup(e.kind,this.soundAt(e.point)),this.labels.addFloating(Ql(e.point),iu[e.kind](this.config),`powerup-pop kind-${e.kind}`,1.6,6),this.director.addShake(.25),n.skip||(this.hitStop=Math.max(this.hitStop,.05)),r.side===`player`&&navigator.vibrate?.(25);break}case`UnitDamaged`:{this.shown.crew[e.side][e.unitIndex]=e.hp,this.refreshCrew();let t=this.crewHead(e.side,e.unitIndex);this.labels.addFloating(t,`−${Tl(e.amount)}`,`damage-number crew ${e.side}`,1.3,3);break}case`MastBroken`:{let n=r.projectiles[e.projectile],i=Ha(this.match.frameOf(e.side),vo(n.flight,n.flight.duration)),a=this.world.ships[e.side].breakMast(e.mast,e.top,Ql(i)),o=this.shown.sail[e.side];if(this.shown.sail[e.side]=e.sailing,this.hud.setSail(e.side,this.shown.sail[e.side]),!a||(this.world.effects.mastBreak(a),this.sfx.mastBreak(this.soundAt(a)),this.director.addShake(e.side===`player`?.5:.25),t.events.some(t=>t.type===`UnitKilled`&&t.time===e.time)))break;let s=tu[e.mast]??`mast`,c=Math.round((o-this.shown.sail[e.side])*100),l=c>0?` · −${c}% sailing`:``;e.side===`enemy`?this.hud.callout(`MAST DOWN!`,`kill`,1.6,`${this.opponent.name}'s ${s} is down${l}`):this.hud.callout(`MAST LOST!`,`bad`,1.6,`Your ${s} is down${l}`);break}case`SailTorn`:{let t=r.projectiles[e.projectile],n=vo(t.flight,e.time-t.launch.delay),i=t.kind===`meteor`?Zo:this.config.cannons[r.cannonId].ballRadius,a=Math.max(this.config.presentation.minHoleSize,i*this.config.presentation.sailTearSize),o=this.world.ships[e.side].tearSail(e.mast,e.sail,Ql(e.point),Ql(n),a)??Ql(e.point);this.world.effects.sailTear(o,Qe[e.side].sail,a),this.sfx.sailTear(this.soundAt(o));let s=(this.shown.sail[e.side]-e.sailing)*100;this.shown.sail[e.side]=e.sailing,this.hud.setSail(e.side,e.sailing),s>.05&&this.labels.addFloating(o,`Sail torn · −${Math.round(s*10)/10}% sailing`,`miss-label`,1.8,2);break}case`CraterDug`:{let n=e.crater,i=this.world.island.dig(n,this.config.destruction,this.config.presentation.trees),a=I(n.x,this.world.island.heightAt(n.x,n.z),n.z);this.world.effects.dig(a,n.radius,i.material,i.blown);for(let{piece:e,away:t}of i.uprooted)this.world.rubble.drop(e,t);r.side===`player`&&e.projectile===t.leadIndex&&this.world.indicator.setLastImpact(a);break}case`RockFell`:{let n=r.projectiles[e.projectile],i=vo(n.flight,n.flight.duration),a=this.world.island,o=e.peak===null?a.breakRock(e.rock??-1,e.top,e.legs):a.breakPeak(e.peak,e.top??0,this.config.destruction);for(let e of o)this.world.rubble.drop(e,Ql(i));let s=n.flight.hit?.point??I();this.world.effects.rockBreak(s),this.sfx.rockFall(this.soundAt(s)),this.director.addShake(.35),r.side===`player`&&e.projectile===t.leadIndex&&this.world.indicator.setLastImpact(null);let c=e.peak===null?e.top===null?`THE ARCH FALLS!`:this.config.arena.island===`lighthouse`?`LIGHTHOUSE DOWN!`:`ROCKFALL!`:`THE SPIRE CRUMBLES!`;this.hud.callout(c,`hit`,1.6,e.top===null?`The way through is open`:``);break}case`RockDamaged`:{let i=r.projectiles[e.projectile],a=i.flight.hit?.point??I(),o=ct(this.config.arena),s=o.id===`lighthouse`&&e.rock===0,c=i.kind===`meteor`?Zo:this.config.cannons[r.cannonId].ballRadius,{minHoleSize:l,holeSize:u}=this.config.presentation,d=Math.max(l,c*u)*(i.blastScale>1?1.5:1);if(this.world.island.crack(e.rock,e.peak,a,s?d:d*1.6),this.world.effects.crack(a,s),this.director.addShake(.15),n.cracked)break;n.cracked=!0;let f=t.events.filter(t=>t.type===`RockDamaged`&&t.rock===e.rock&&t.peak===e.peak).at(-1),p=f?.type===`RockDamaged`?f.hp:e.hp,m=s?this.config.destruction.towerHp:this.config.destruction.rockHp,h=e.peak===null?s?`LIGHTHOUSE`:o.solids[e.rock??-1]?.kind===`arch`?`ARCH`:`ROCK`:`SPIRE`;this.hud.callout(`${h} CRACKED!`,`hit`,1.4,m>0?`${Math.round(100*Math.min(1,Math.max(0,p/m)))}% of its strength left`:``);break}case`UnitKilled`:{let n=this.lastImpactOn(t,e.side);this.world.ships[e.side].setCrewAlive(e.unitIndex,!1,!0,n??void 0);let r=this.config.gunners[e.unitIndex].name;this.sfx.overboard(this.soundAt(this.crewHead(e.side,e.unitIndex))),e.side===`enemy`?(this.sfx.kill(),this.hud.callout(`GUNNER DOWN!`,`kill`,1.6,`${this.opponent.name}'s ${r} gunner went overboard`)):this.hud.callout(`MAN OVERBOARD!`,`bad`,1.6,`Your ${r} gunner is out`);break}}}updateResolve(e,t,n){e.time+=t;let r=n.some(e=>e.type===`tap`||e.type===`fireDown`);e.time<e.hold&&!r||this.handle(this.match.endTurn(this.matchClock))}lastImpactOn(e,t){let n=null;for(let r of e.shot.projectiles){let i=r.flight.hit;!No(i)||i.side!==t||r.impactTime>e.time+1e-6||(!n||r.impactTime>=n.time)&&(n={time:r.impactTime,point:i.point})}return n?Ql(n.point):null}treeHits(e){let t=this.config.cannons[e.cannonId];return e.projectiles.flatMap(e=>{let n=e.kind===`meteor`,r=n?Zo:t.ballRadius,i=n?this.config.powerUps.meteorDamage:t.damage*e.damageScale;return this.world.island.treeCrossings(e.flight.points,e.flight.dt,r).map(t=>({time:e.launch.delay+t.time,tree:t.tree,segment:t.segment,point:t.point,along:Ql(vo(e.flight,t.time)),damage:i}))}).sort((e,t)=>e.time-t.time)}snapTree(e){let t=this.world.island.hitTree(e.tree,e.segment,e.damage,this.config.presentation.treeHp);this.world.effects.treeHit(e.point,t!==null);let n=this.soundAt(e.point);if(!t){this.sfx.woodHit(n);return}this.world.rubble.drop(t,e.along),this.sfx.mastBreak(n)}announceMiss(e,t){let n=this.match.frameOf(`enemy`),r=Ua(n,e),i=I(0,0,0),a=1/0;for(let e of this.config.ship.hull){let t=Math.max(e.center.x-e.halfSize.x,Math.min(e.center.x+e.halfSize.x,r.x)),o=Math.max(e.center.z-e.halfSize.z,Math.min(e.center.z+e.halfSize.z,r.z)),s=Math.hypot(r.x-t,r.z-o);s<a&&(a=s,i=Va(n,I(t,0,o)))}let o=this.match.frameOf(`player`).position,s=new L(n.position.x-o.x,0,n.position.z-o.z).normalize(),c=e.x-i.x,l=e.z-i.z,u=c*s.x+l*s.z,d=-c*s.z+l*s.x,f=[];Math.abs(u)>=1&&f.push(`${Math.round(Math.abs(u))} m ${u>0?`long`:`short`}`),Math.abs(d)>=1&&f.push(`${Math.round(Math.abs(d))} m ${d>0?`right`:`left`}`);let p=t===`island`?`Blocked by the island`:f.length?f.join(` · `):`Just missed`,m=Ql(e).setY(Math.max(e.y,0)+3);this.labels.addFloating(m,p,`miss-label`,2.2,3),t===`water`&&a<Jl&&this.hud.callout(`SO CLOSE!`,`miss`,1.3)}enterFinale(e,t){let n=h(e),r=e===`player`,i=this.world.ships[n];this.input.setAimMode(!1),this.hud.setMode(`watch`),this.hud.setHint(``),this.world.indicator.hide(),t===`sunk`&&(i.sink(),this.world.effects.sinkBurst(i.root.position),this.sfx.sinking(this.soundAt(i.root.position)));let a={sunk:[`SHE SINKS!`,`ABANDON SHIP!`],crew:[`CREW WIPED OUT!`,`NO HANDS LEFT!`]},o=r?`kill`:`bad`;this.hud.callout(a[t][+!r],o,2.6),this.hud.flash(`finisher`,.6),this.director.use(new eo(this.config,()=>this.match.state.ships[n].angle,I(-34*this.shipScale,9*this.shipScale,38*this.shipScale),I(-24*this.shipScale,13*this.shipScale,34*this.shipScale),I(0,3*this.shipScale,0),6,50),{seconds:1.4,arc:.25}),this.phase={kind:`finale`,time:0,hold:t===`sunk`?4.6:2.8,winner:e,reason:t}}updateFinale(e,t,n){e.time+=t;let r=e.time>1&&n.some(e=>e.type===`tap`||e.type===`fireDown`);(e.time>=e.hold||r)&&this.showResult(e.winner,e.reason)}enterBot(){this.hud.setMode(`watch`),this.hud.setHint(this.input.coarsePointer?`Tap to skip`:`Click to skip`),this.hud.setTurn(`enemy`,`${this.opponent.name} is thinking…`);let e=this.brain.planTurn(this.match,this.matchClock),t=e.unitIndex;this.phase={kind:`bot`,step:`think`,time:0,plan:e,fromAim:this.match.aimOf(`enemy`,t)}}updateBot(e,t){e.time+=t;let{plan:n}=e;switch(e.step){case`think`:if(e.time<n.thinkTime)return;this.botStillToSail(n)&&(this.hud.setTurn(`enemy`,`${this.opponent.name} is sailing…`),this.director.use(this.shipRig(`enemy`),{seconds:1})),this.advanceBot(e,`sail`);return;case`sail`:if(this.botStillToSail(n)){let e=this.match.state.ships.enemy,r=(n.sailTo-e.angle)*this.config.arena.orbitRadius;this.handle(this.match.sail(Math.sign(r),Math.min(t,Math.abs(r)/this.config.ship.sailSpeed)));return}this.advanceBot(e,`pause`);return;case`pause`:{if(e.time<.45)return;this.handle(this.match.selectGunner(n.unitIndex)),e.fromAim=this.match.aimOf(`enemy`,n.unitIndex),this.hud.setTurn(`enemy`,`${this.opponent.name} is aiming…`);let t=this.flavour.chance(.55)?`shoulder`:`front`,r=new to(this.config,this.world.ships.enemy,()=>this.match.state.ships.enemy.angle,n.unitIndex,()=>this.match.aimOf(`enemy`,n.unitIndex),t);this.director.use(r,{seconds:.8}),this.advanceBot(e,`aim`);return}case`aim`:{let t=Math.min(1,e.time/n.aimTime),r=t*t*(3-2*t);this.match.setAim({yaw:j(e.fromAim.yaw,n.aim.yaw,r),pitch:j(e.fromAim.pitch,n.aim.pitch,r)}),t>=1&&this.advanceBot(e,n.wait>0?`wait`:`charge`);return}case`wait`:e.time>=n.wait&&this.advanceBot(e,`charge`);return;case`charge`:{let r=this.config.power,i=n.misfire?r.fillTime+r.graceTime+.05:n.power*r.fillTime+.1,a=Math.min(1,e.time/r.fillTime),o=this.world.ships.enemy;if(o.setTremble(n.unitIndex,a),this.world.effects.fuse(o.fuseWorld(n.unitIndex,this.tmp),a,t),e.time<i)return;this.fireBot(n,!1);return}}}advanceBot(e,t){e.step=t,e.time=0}botStillToSail(e){let t=this.match.state.ships.enemy;return Math.abs(e.sailTo-t.angle)*this.config.arena.orbitRadius>.05&&t.fuel>0}skipBotTurn(e){let{plan:t}=e;for(let e=0;e<1e3&&this.botStillToSail(t);e++){let e=(t.sailTo-this.match.state.ships.enemy.angle)*this.config.arena.orbitRadius;this.match.sail(Math.sign(e),Math.min(.1,Math.abs(e)/this.config.ship.sailSpeed))}this.match.state.selected!==t.unitIndex&&this.match.selectGunner(t.unitIndex),this.match.setAim(t.aim),this.fireBot(t,!0)}fireBot(e,t){this.hud.setHint(``),this.hud.setTurn(`enemy`,`${this.opponent.name}'s turn`),e.misfire&&this.hud.toast(`${this.opponent.name} misfired!`),t&&e.fireClock!==null&&(this.matchClock=Math.max(this.matchClock,e.fireClock)),this.shotClock=this.matchClock;let n=this.matchClock,r=this.match.fire(e.misfire?{misfire:!0,clock:n}:{power:e.power,clock:n}),i=r.find(e=>e.type===`ShotFired`);i?.type===`ShotFired`&&this.startShot(i.shot,r.filter(e=>`time`in e),t)}handle(e){for(let t of e)switch(t.type){case`ShotFired`:this.startShot(t.shot,e.filter(e=>`time`in e));break;case`TurnStarted`:this.beginTurn(t.side);break;case`MatchEnded`:this.enterFinale(t.winner,t.reason)}}showResult(e,t){this.input.setAimMode(!1),this.hud.setMode(`hidden`),this.hud.setTurn(null),this.hud.setHint(``),this.world.indicator.hide();let n=e===`player`;n?this.sfx.victory():this.sfx.defeat();let r=this.opponent.name,i=this.match.state.stats.player,a=this.match.state.stats.enemy,o=Math.round(this.clock-this.matchStartTime);l({date:new Date().toISOString(),build:this.build,seed:this.match.seed,opponent:r,difficulty:this.config.bot.difficulty,indicator:this.settings.indicator,winner:e,reason:t,turns:this.match.state.turn,seconds:o,you:{...i},them:{...a}});let s=e=>`${e.shots?Math.round(100*e.hits/e.shots):0}%`;this.hud.showResult({won:n,reason:t===`sunk`?n?`You sank ${r}'s ship.`:`${r} sank your ship.`:n?`You took out ${r}'s whole crew.`:`${r} took out your whole crew.`,opponentLine:`${r}: “${zl(this.flavour,!n)}”`,stats:[[`Your shots`,`${i.shots} · ${i.hits} hits (${s(i)})`],[`${r}'s shots`,`${a.shots} · ${a.hits} hits (${s(a)})`],[`Damage dealt`,`${Tl(i.shipDamage)} ship · ${Tl(i.crewDamage)} crew`],[`Damage taken`,`${Tl(a.shipDamage)} ship · ${Tl(a.crewDamage)} crew`],[`Misfires`,`${i.misfires} you · ${a.misfires} ${r}`],[`Turns`,String(this.match.state.turn)],[`Duration`,`${Math.floor(o/60)}:${String(o%60).padStart(2,`0`)}`]]});let c=Math.atan2(this.world.camera.position.z,this.world.camera.position.x);this.director.use(new po(200,60,c,.05,45),{seconds:1.5}),this.phase={kind:`result`}}debugAutoShot(){if(this.phase.kind!==`aim`)return!1;let e=this.match.state.selected,t=Va(this.match.frameOf(`enemy`),I(0,this.config.ship.deckHeight+.5,0)),[n]=Wo(this.match,`player`,e,t);return n?(this.match.setAim(n.aim),this.fire({power:n.power}),!0):!1}debugSpawnPowerUp(e){let t=e===`split`?Math.max(1,Math.round(this.config.powerUps.splitUses)):1,n=this.match.state.powerUpCount+1;this.match.state.powerUpCount=n;let{anchor:r,travel:i}=this.match.powerUpSpot(e,new vs(Math.random()*2**32>>>0))??us(this.config,this.shipAngles(),e);this.match.state.powerUp={id:n,kind:e,spawnClock:this.matchClock,anchor:r,travel:i,motion:`ease`,phase:0,uses:t},this.shownPowerUp={...this.match.state.powerUp},this.showPowerUp(this.shownPowerUp),this.sfx.powerUpSpawn()}debugBreakMast(e){let t=this.match.state.ships[e].masts,n=this.config.ship.masts,r=e=>t[e].top-n[e].bottom,i=-1;if(t.forEach((e,t)=>{r(t)>2&&(i<0||r(t)>r(i))&&(i=t)}),i<0)return;let a=t[i];a.top=n[i].bottom+r(i)/2,a.hp=this.config.ship.mastHp,this.shown.sail[e]=Ds(this.config,this.match.state.ships[e]),this.hud.setSail(e,this.shown.sail[e]);let o=this.world.ships[e].breakMast(i,a.top,new L(0,0,-1));o&&(this.world.effects.mastBreak(o),this.sfx.mastBreak(this.soundAt(o)))}debugSetShipHp(e,t){this.match.state.ships[e].hp=t,this.shown.ship[e]=t,this.refreshHud()}get shipScale(){let e=this.config.ship.hull.flatMap(e=>[e.center.x-e.halfSize.x,e.center.x+e.halfSize.x]);return Math.max(1,(Math.max(...e)-Math.min(...e))/25)}shipRig(e){let t=this.shipScale,n={back:44*t,height:30*t**.8,lookAhead:80,lookHeight:0,side:-16*t};return new oo(this.config,()=>this.match.state.ships[e].angle,n)}establishingShot(){let e=this.flavour.chance(.5)?1:-1,t=this.shipScale;return new eo(this.config,()=>this.match.state.ships.enemy.angle,I(26*e*t,5*t,16*t),I(18*e*t,7*t,20*t),I(0,6*t,0),5,48)}powerUpShot(e,t){let n=Ql(t.anchor),r=Ql(this.match.frameOf(e).position).clone().sub(n).setY(0).normalize(),i=n.clone().setY(n.y+t.travel*.4),a=i.clone().addScaledVector(r,34).setY(i.y+6);return a.y=Math.max(a.y,wt(a.x,a.z,this.config.arena)+6),new fo(a,i,50)}meteorShot(e){let t=this.shipScale;return new eo(this.config,()=>this.match.state.ships[e].angle,I(-20*t,16*t,52*t),I(-14*t,14*t,48*t),I(0,8*t,0),3,55)}impactShot(e){let t=h(e),n=this.shipScale;return new eo(this.config,()=>this.match.state.ships[t].angle,I(-14*n,9*n,30*n),I(-10*n,10*n,28*n),I(0,4*n,0),3,50)}showAllCrew(){this.config.gunners.forEach((e,t)=>this.world.ships.player.setCrewVisible(t,!0)),this.world.ships.player.setRiggingVisible(!0)}syncShips(){for(let e of m){let t=this.world.ships[e];t.setAngle(this.match.state.ships[e].angle),this.config.gunners.forEach((n,r)=>t.setAim(r,this.match.aimOf(e,r)))}}refreshHud(){for(let e of m)this.hud.setShipHp(e,this.shown.ship[e],this.config.ship.hp),this.hud.setSail(e,this.shown.sail[e]);this.hud.setFuel(this.match.state.ships.player.fuel/this.config.ship.fuelPerTurn),this.refreshCrew()}refreshCrew(){for(let e of m)this.hud.setCrew(e,this.shown.crew[e],this.config.crew.hp);this.hud.setGunners(this.config.gunners.map((e,t)=>({name:e.name,cannonName:this.config.cannons[e.cannon].name,cannonId:e.cannon,hp:this.shown.crew.player[t],maxHp:this.config.crew.hp})),this.phase.kind===`aim`||this.phase.kind===`move`?this.match.state.selected:null)}shipStatus(e){let t=this.match.state.ships[e],{ship:n,crew:r}=this.config;return{model:n.model,deckHeight:n.deckHeight,hp:this.shown.ship[e],maxHp:n.hp,masts:n.masts.map((e,r)=>({name:tu[r]??`mast`,x:e.x,bottom:e.bottom,top:t.masts[r]?.top??e.top,fullTop:e.top,hp:t.masts[r]?.hp??n.mastHp,maxHp:n.mastHp})),sailing:this.shown.sail[e],sailHoles:Es(this.config,t),guns:this.config.gunners.map((t,n)=>({x:t.x,gunner:t.name,cannon:this.config.cannons[t.cannon].name,hp:this.shown.crew[e][n],maxHp:r.hp})),holes:[...this.holes[e]]}}applyWind(){let e=this.match.state.wind;this.world.setWind(e.angle,e.speed),this.sfx.setWind(this.config.wind.maxKnots>0?e.speed/this.config.wind.maxKnots:0)}updateWindDial(){let e=this.match.state.wind,t=this.world.camera.getWorldDirection(this.tmp),n=Math.hypot(t.x,t.z)||1,r=t.x/n,i=t.z/n,a=Math.cos(e.angle),o=Math.sin(e.angle),s=this.lastWindTurn!==this.match.state.turn;this.lastWindTurn=this.match.state.turn,this.hud.setWind(Math.atan2(-a*i+o*r,a*r+o*i),e.speed,s&&this.match.state.turn>0)}shipAngles(){return{player:this.match.state.ships.player.angle,enemy:this.match.state.ships.enemy.angle}}showPowerUp(e){let t=Ql(this.match.frameOf(`enemy`).position).sub(Ql(this.match.frameOf(`player`).position));this.world.powerUps.show(e.kind,ps(this.config,`damage`),ps(this.config,`split`),t)}updatePowerUp(e){let t=this.shownPowerUp,n=this.world.powerUps;if(!t||!n.visible){t&&!n.visible&&(this.shownPowerUp=null),n.update(e,null);for(let e of eu)this.labels.setMarker(`powerup-${e}`,null,``,`powerup-marker kind-${e}`,!1);return}let r=Ql(fs(this.config,t,this.matchClock));n.update(e,r);let i=t.uses>0&&this.phase.kind!==`intro`&&this.phase.kind!==`result`&&this.phase.kind!==`finale`,a=ps(this.config,t.kind);for(let e of eu){let n=i&&e===t.kind,o=r.clone().setY(r.y+a*(e===`split`?1.3:2.6)+1.5);this.labels.setMarker(`powerup-${e}`,n?o:null,n?ru[e](this.config,t.uses):``,`powerup-marker kind-${e}`,!1)}}updateMarkers(){let e=this.phase.kind===`move`||this.phase.kind===`aim`,t=Va(this.match.frameOf(`enemy`),I(0,this.world.ships.enemy.topHeight+3.5,0));this.labels.setMarker(`enemy`,e?Ql(t):null,this.opponent.name)}crewHead(e,t){let{ship:n,crew:r,gunners:i}=this.config;return Ql(Va(this.match.frameOf(e),I(i[t].x,n.deckHeight+r.height+.6,r.standZ)))}},Ql=e=>new L(e.x,e.y,e.z);function $l(e){return`Wind ${Math.round(e)} kn · ${e<4?`calm`:e<10?`a breeze`:e<15?`strong`:`a gale!`}`}var eu=[`damage`,`blast`,`split`,`meteor`],tu=[`foremast`,`mainmast`,`mizzen`],nu=2,ru={damage:e=>`Damage ×${Tl(e.powerUps.damageMultiplier)}`,blast:e=>`Blast ×${Tl(e.powerUps.blastMultiplier)}`,split:(e,t)=>`Split +${t}`,meteor:()=>`Meteor strike`},iu={damage:e=>`DAMAGE ×${Tl(e.powerUps.damageMultiplier)}!`,blast:e=>`BLAST ×${Tl(e.powerUps.blastMultiplier)}!`,split:()=>`SPLIT!`,meteor:()=>`METEOR STRIKE!`};function au(e,t){let n=t.filter(e=>e.type===`PowerUpCollected`),r=Math.min(...n.filter(e=>e.kind===`damage`).map(e=>e.time),1/0);return e.projectiles.map((e,t)=>{if(e.kind===`meteor`)return null;if(e.blastScale>1){let r=n.find(e=>e.kind===`blast`&&e.projectile===t);return{from:r?r.time:e.launch.delay,color:Ws.blast,scale:1.6}}return e.damageScale>1?{from:Math.max(e.launch.delay,r),color:Ws.damage,scale:1.25}:e.parent===null?null:{from:e.launch.delay,color:Ws.split,scale:1}})}var ou=3,su=1/42,cu=class{fps=60;frames=[];total=0;elapsed=0;flagged=!1;update(e){for(this.elapsed+=e,this.frames.push(e),this.total+=e;this.total>ou&&this.frames.length>1;)this.total-=this.frames.shift();return this.fps=this.frames.length/Math.max(1e-6,this.total),this.flagged||this.elapsed<9?!1:this.total/this.frames.length>su&&(this.flagged=!0,!0)}},lu=12,uu=350,du={ArrowLeft:`left`,KeyA:`left`,ArrowRight:`right`,KeyD:`right`,ArrowUp:`up`,KeyW:`up`,ArrowDown:`down`,KeyS:`down`},fu=class{aimMode=!1;coarsePointer;surface;held=new Map;fireSources=new Set;pointers=new Map;events=[];aimDx=0;aimDy=0;constructor(e){this.surface=e,this.coarsePointer=window.matchMedia(`(pointer: coarse)`).matches,e.addEventListener(`pointerdown`,this.onPointerDown),e.addEventListener(`pointermove`,this.onPointerMove),e.addEventListener(`pointerup`,this.onPointerUp),e.addEventListener(`pointercancel`,this.onPointerCancel),e.addEventListener(`contextmenu`,e=>e.preventDefault()),document.addEventListener(`mousemove`,this.onMouseMove),window.addEventListener(`keydown`,this.onKeyDown),window.addEventListener(`keyup`,this.onKeyUp),window.addEventListener(`blur`,()=>this.releaseAll()),document.addEventListener(`pointerlockchange`,()=>{this.pointerLocked||this.cancelFire(`mouse`)})}press(e,t){this.sources(e).add(t)}release(e,t){this.sources(e).delete(t)}fireDown(e){this.fireSources.size===0&&this.events.push({type:`fireDown`}),this.fireSources.add(e)}fireUp(e){this.fireSources.delete(e)&&this.fireSources.size===0&&this.events.push({type:`fireUp`})}cancelFire(e){this.fireSources.delete(e)&&this.fireSources.size===0&&this.events.push({type:`fireCancel`})}emit(e){this.events.push(e)}isHeld(e){return this.sources(e).size>0}moveAxis(){return+!!this.isHeld(`left`)-!!this.isHeld(`right`)}get fireHeld(){return this.fireSources.size>0}consumeAimDelta(){let e={dx:this.aimDx,dy:this.aimDy};return this.aimDx=0,this.aimDy=0,e}consumeEvents(){let e=this.events;return this.events=[],e}releaseAll(){for(let e of this.held.values())e.clear();this.fireSources.size>0&&(this.fireSources.clear(),this.events.push({type:`fireCancel`}))}setAimMode(e){this.aimMode=e,!e&&document.pointerLockElement===this.surface&&document.exitPointerLock()}get pointerLocked(){return document.pointerLockElement===this.surface}sources(e){let t=this.held.get(e);return t||(t=new Set,this.held.set(e,t)),t}onPointerDown=e=>{if(e.pointerType===`mouse`){if(this.pointerLocked){e.button===0&&this.fireDown(`mouse`);return}if(this.aimMode&&e.button===0&&`requestPointerLock`in this.surface)try{this.surface.requestPointerLock()?.catch?.(()=>void 0)}catch{}}this.surface.setPointerCapture?.(e.pointerId),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,startTime:performance.now(),moved:0})};onPointerMove=e=>{let t=this.pointers.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,r=e.clientY-t.y;t.x=e.clientX,t.y=e.clientY,t.moved=Math.max(t.moved,Math.hypot(e.clientX-t.startX,e.clientY-t.startY)),this.aimDx+=n,this.aimDy+=r};onPointerUp=e=>{if(e.pointerType===`mouse`&&this.pointerLocked){e.button===0&&this.fireUp(`mouse`);return}let t=this.pointers.get(e.pointerId);this.pointers.delete(e.pointerId),t&&t.moved<lu&&performance.now()-t.startTime<uu&&this.events.push({type:`tap`})};onPointerCancel=e=>{this.pointers.delete(e.pointerId)};onMouseMove=e=>{this.pointerLocked&&(this.aimDx+=e.movementX,this.aimDy+=e.movementY)};onKeyDown=e=>{if(e.target instanceof HTMLInputElement||e.target instanceof HTMLSelectElement)return;let t=du[e.code];if(t){this.press(t,`key:${e.code}`),e.preventDefault();return}e.repeat||(e.code===`Space`||e.code===`Enter`?(this.fireDown(`key:${e.code}`),e.preventDefault()):e.code===`Escape`||e.code===`Backspace`||e.code===`KeyQ`?this.events.push({type:`back`}):/^Digit[1-9]$/.test(e.code)&&this.events.push({type:`select`,index:Number(e.code.slice(5))-1}))};onKeyUp=e=>{let t=du[e.code];t&&this.release(t,`key:${e.code}`),(e.code===`Space`||e.code===`Enter`)&&this.fireUp(`key:${e.code}`)}},pu=320,mu=.2,hu=9,gu=2.4,_u=.06,vu=2.4,yu={short:1.5,full:2.4},bu=25,xu=new z(`#fff4c9`),Su=new z(`#ff7a3c`),Cu={water:new z(`#ffffff`),island:new z(`#ffd27a`),ship:new z(`#ff5a3c`)},wu=class{object=new N;positions=new Float32Array(pu*3);alphas=new Float32Array(pu);sizes=new Float32Array(pu).fill(1);dots;ghostDots;dotMaterial;ghostMaterial;crosshair;crosshairMaterial;ring;ringMaterial;pin;cone;lastImpact;color=new z;hasLastImpact=!1;time=0;constructor(){let e=new Ge;e.setAttribute(`position`,new tn(this.positions,3).setUsage(C)),e.setAttribute(`alpha`,new tn(this.alphas,1).setUsage(C)),e.setAttribute(`size`,new tn(this.sizes,1).setUsage(C)),this.dotMaterial=new P({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:xu.clone()},uScale:{value:300},uMinSize:{value:3},uSize:{value:mu},uOpacity:{value:1}},vertexShader:`
        attribute float alpha;
        attribute float size;
        uniform float uScale;
        uniform float uMinSize;
        uniform float uSize;
        varying float vAlpha;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = max(uSize * size * uScale / -mv.z, uMinSize * mix(1.0, size, 0.5));
          vAlpha = alpha;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          vec3 color = mix(vec3(0.08, 0.1, 0.13), uColor, smoothstep(0.36, 0.26, d));
          gl_FragColor = vec4(color, uOpacity * vAlpha * smoothstep(0.5, 0.4, d));
        }
      `}),this.dots=new ht(e,this.dotMaterial),this.dots.frustumCulled=!1,this.dots.renderOrder=10,this.ghostMaterial=this.dotMaterial.clone(),this.ghostMaterial.depthTest=!1,this.ghostMaterial.uniforms.uOpacity.value=.3,this.ghostDots=new ht(e,this.ghostMaterial),this.ghostDots.frustumCulled=!1,this.ghostDots.renderOrder=9,this.crosshairMaterial=new Ve({color:xu,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1,side:2});let t=[0,1,2,3].map(e=>new yt(.42,.1).translate(1.02,0,0).rotateZ(e*Math.PI/2)),n=Ye([new Yt(.62,.78,40),...t.map(Tu),new E(.11,12)].map(Tu));this.crosshair=new W(n,this.crosshairMaterial),this.crosshair.renderOrder=12;let r=new W(Ye([new Yt(.55,.85,40),...[0,1,2,3].map(e=>new yt(.56,.24).translate(1.02,0,0).rotateZ(e*Math.PI/2)),new E(.18,12)].map(Tu)),new Ve({color:`#13202c`,transparent:!0,opacity:.45,depthTest:!1,depthWrite:!1}));r.renderOrder=11,r.position.z=-.01,this.crosshair.add(r),this.ringMaterial=new Ve({color:`#ffffff`,transparent:!0,opacity:.9,depthTest:!1,depthWrite:!1,side:2});let i=Ye([new Yt(.78,1,48),new E(.16,16)]);this.ring=new W(i,this.ringMaterial),this.ring.renderOrder=11,this.pin=new W(new he(.06,.06,1,6).translate(0,.5,0),this.ringMaterial),this.pin.renderOrder=11;let a=new ye(1,1,28,1,!0).translate(0,-.5,0).rotateX(-Math.PI/2);this.cone=new W(a,new Ve({color:`#fff4c9`,transparent:!0,opacity:.13,side:2,depthWrite:!1})),this.cone.renderOrder=9,this.lastImpact=Eu(),this.lastImpact.visible=!1,this.object.add(this.ghostDots,this.dots,this.crosshair,this.ring,this.pin,this.cone,this.lastImpact),this.hide()}hide(){this.dots.visible=!1,this.ghostDots.visible=!1,this.crosshair.visible=!1,this.ring.visible=!1,this.pin.visible=!1,this.cone.visible=!1}setLastImpact(e){this.hasLastImpact=e!==null,e&&this.lastImpact.position.set(e.x,Math.max(e.y,0),e.z),e||(this.lastImpact.visible=!1)}setLastImpactVisible(e){this.lastImpact.visible=e&&this.hasLastImpact}update(e,t,n){this.time+=e;let{flight:r,style:i,camera:a}=t;if(i===`off`){this.hide();return}for(let e of[this.dotMaterial,this.ghostMaterial])e.uniforms.uScale.value=n/(2*Math.tan(jt.degToRad(a.fov)/2)),e.uniforms.uMinSize.value=Math.max(3,n/105);let o=t.charge===null?0:t.charge*t.charge;this.color.copy(xu).lerp(Su,o),i!==`dots`&&t.charge!==null&&t.charge>=1&&this.color.lerp(new z(`#ffffff`),.5+.5*Math.sin(this.time*40)),this.dotMaterial.uniforms.uColor.value.copy(this.color),this.ghostMaterial.uniforms.uColor.value.copy(this.color),this.crosshairMaterial.color.copy(this.color);let s=i===`dots`,c=i===`short`?t.guideLength:s?t.dotsLength:1/0,l=s?c/hu:yu[i],u=0,d=0,f=s?l:vu,p=r.points,m=new L,h=!1;for(let e=1;e<p.length&&u<pu&&f<=c+1e-6;e++){let n=p[e-1],r=p[e],a=Math.hypot(r.x-n.x,r.y-n.y,r.z-n.z);for(;f<=d+a&&f<=c+1e-6&&u<pu;){let e=a>0?(f-d)/a:0,o=s?1:Math.max(0,1-f/bu);this.positions[u*3]=n.x+(r.x-n.x)*e+t.bob.x*o,this.positions[u*3+1]=n.y+(r.y-n.y)*e+t.bob.y*o,this.positions[u*3+2]=n.z+(r.z-n.z)*e+t.bob.z*o,s?(this.alphas[u]=.95,this.sizes[u]=gu*(1-_u*u)):(this.alphas[u]=i===`short`?.55+f/c*.4:.9,this.sizes[u]=1),u++,f+=l}if(d+=a,d>=c&&!h){let e=a>0?1-(d-c)/a:1,i=s?1:Math.max(0,1-c/bu);m.set(n.x+(r.x-n.x)*e,n.y+(r.y-n.y)*e,n.z+(r.z-n.z)*e).addScaledVector(t.bob,i),h=!0}}let g=this.dots.geometry;if(g.setDrawRange(0,u),g.attributes.position.needsUpdate=!0,g.attributes.alpha.needsUpdate=!0,g.attributes.size.needsUpdate=!0,this.dots.visible=u>0,this.ghostDots.visible=u>0,this.crosshair.visible=i===`short`&&h,this.crosshair.visible){let e=m.distanceTo(a.position)*Math.tan(jt.degToRad(a.fov)/2)*.034,n=t.charge===null?1+.06*Math.sin(this.time*4):1-.25*o;this.crosshair.position.copy(m),this.crosshair.quaternion.copy(a.quaternion),this.crosshair.scale.setScalar(e*n)}let _=r.hit;if(this.ring.visible=i===`full`&&_!==null,this.pin.visible=this.ring.visible,_&&this.ring.visible){let e=No(_),n=t.coneDeg>0?this.landingSpread(r,t.coneDeg):0,i=1+.08*Math.sin(this.time*6),o=Math.max(_.point.y,0),s=Math.hypot(_.point.x-a.position.x,o-a.position.y,_.point.z-a.position.z)*Math.tan(jt.degToRad(a.fov)/2)*.05,c=Math.max(1.4,n,s),l=e?0:c*1.6;this.ring.position.set(_.point.x,o+l,_.point.z),this.ring.scale.setScalar(c*i),this.ring.quaternion.copy(a.quaternion),this.pin.visible=l>0,this.pin.position.set(_.point.x,o,_.point.z),this.pin.scale.set(c*.6,Math.max(.01,l-c),c*.6),this.ringMaterial.color.copy(e?Cu.ship:_.surface===`island`?Cu.island:Cu.water)}if(this.cone.visible=t.coneDeg>0,this.cone.visible){let e=r.points[0],n=r.points[Math.min(1,r.points.length-1)],i=new L(n.x-e.x,n.y-e.y,n.z-e.z).normalize(),a=s?Math.max(1,c):Math.min(t.guideLength,22),o=a*Math.tan(jt.degToRad(t.coneDeg/2));this.cone.position.set(e.x,e.y,e.z).add(t.bob),this.cone.quaternion.setFromUnitVectors(new L(0,0,1),i),this.cone.scale.set(o,o,a)}}landingSpread(e,t){let n=e.points[0],r=e.points[e.points.length-1];return Math.hypot(r.x-n.x,r.y-n.y,r.z-n.z)*Math.tan(jt.degToRad(t/2))}};function Tu(e){return e.index&&(e=e.toNonIndexed()),e.hasAttribute(`uv`)&&e.deleteAttribute(`uv`),e}function Eu(){let e=new N,t=new Ve({color:`#ffcf40`,transparent:!0,opacity:.85,depthWrite:!1}),n=new W(new he(.08,.08,3.2,6),t);n.position.y=1.6;let r=new W(new yt(1.3,.8),t);r.material=t.clone(),r.material.side=2,r.position.set(.65,2.8,0);let i=new W(new Yt(.9,1.15,32).rotateX(-Math.PI/2),t);return i.position.y=.25,e.add(n,r,i),e}var Du=1180,Ou=140;function ku(e=16){let t=new N,n=Ft(),r=[],i=7,a=()=>(i=i*16807%2147483647,i/2147483647);for(let i=0;i<e;i++){let o=new N,s=new ue({map:n,depthWrite:!1,fog:!1,transparent:!0}),c=i/e*Math.PI*2+a()*.3,l=700+a()*420;o.position.set(Math.cos(c)*l,110+a()*150,Math.sin(c)*l);let u=70+a()*80,d=6+Math.floor(a()*6);for(let e=0;e<d;e++){let e=new M(s),t=(a()-.5)*u*1.9,n=Math.max(0,(1-Math.abs(t)/u)*u*.45*a());e.position.set(t,n,(a()-.5)*u*.6);let r=u*(.55+a()*.5)*(1-Math.abs(t)/(u*2.2));e.scale.set(r*1.25,r,1),o.add(e)}t.add(o),r.push({group:o,material:s,speed:2.2+a()*1.4})}return{object:t,update(e,t){for(let n of r){let r=n.group.position;r.x+=t.x*n.speed*e,r.z+=t.z*n.speed*e;let i=Math.hypot(r.x,r.z);i>Du&&(r.x*=-1178/i,r.z*=-1178/i),n.material.opacity=Math.max(0,Math.min(1,(Du-Math.hypot(r.x,r.z))/Ou))}}}}var Au=`
  attribute vec3 offset;
  attribute vec4 tint; // rgb + alpha
  attribute vec2 sizeRotation;
  varying vec2 vUv;
  varying vec4 vTint;
  void main() {
    vUv = uv;
    vec4 mv = modelViewMatrix * vec4(offset, 1.0);
    // Fade particles right in front of the lens so smoke and spray never white out the screen.
    vTint = vec4(tint.rgb, tint.a * smoothstep(1.2, 6.0, -mv.z));
    float c = cos(sizeRotation.y);
    float s = sin(sizeRotation.y);
    vec2 corner = (uv - 0.5) * sizeRotation.x;
    mv.xy += vec2(c * corner.x - s * corner.y, s * corner.x + c * corner.y);
    gl_Position = projectionMatrix * mv;
  }
`,ju=`
  uniform sampler2D uMap;
  varying vec2 vUv;
  varying vec4 vTint;
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    gl_FragColor = vec4(tex.rgb * vTint.rgb, tex.a * vTint.a);
    if (gl_FragColor.a < 0.01) discard;
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Mu=class{mesh;particles;offsets;tints;sizeRotations;geometry;next=0;constructor(e,t=!1,n=Pu()){let r=new yt(1,1);this.geometry=new nt,this.geometry.index=r.index,this.geometry.setAttribute(`position`,r.attributes.position),this.geometry.setAttribute(`uv`,r.attributes.uv),this.offsets=new Float32Array(e*3),this.tints=new Float32Array(e*4),this.sizeRotations=new Float32Array(e*2),this.geometry.setAttribute(`offset`,new _(this.offsets,3).setUsage(C)),this.geometry.setAttribute(`tint`,new _(this.tints,4).setUsage(C)),this.geometry.setAttribute(`sizeRotation`,new _(this.sizeRotations,2).setUsage(C)),this.geometry.instanceCount=0;let i=new P({uniforms:{uMap:{value:n}},vertexShader:Au,fragmentShader:ju,transparent:!0,depthWrite:!1,blending:t?2:1});this.mesh=new W(this.geometry,i),this.mesh.frustumCulled=!1,this.mesh.renderOrder=t?6:5,this.particles=Array.from({length:e},()=>({alive:!1,position:new L,velocity:new L,size:1,endSize:1,age:0,life:1,alpha:1,gravity:0,drag:0,rotation:0,spin:0,fadeIn:0,windDrift:0,color:new z}))}spawn(e){let t=this.particles[this.next];this.next=(this.next+1)%this.particles.length,t.alive=!0,t.position.copy(e.position),t.velocity.copy(e.velocity),t.size=e.size,t.endSize=e.endSize,t.age=0,t.life=e.life,t.alpha=e.alpha??1,t.gravity=e.gravity??0,t.drag=e.drag??0,t.rotation=Math.random()*Math.PI*2,t.spin=e.spin??(Math.random()-.5)*.8,t.fadeIn=e.fadeIn??.08,t.windDrift=e.windDrift??0,t.color.set(e.color)}clear(){for(let e of this.particles)e.alive=!1}update(e,t){let n=0;for(let r of this.particles){if(!r.alive)continue;if(r.age+=e,r.age>=r.life){r.alive=!1;continue}r.velocity.y-=r.gravity*e,r.velocity.multiplyScalar(Math.max(0,1-r.drag*e)),r.position.addScaledVector(r.velocity,e),t&&r.windDrift>0&&r.position.addScaledVector(t,r.windDrift*e),r.rotation+=r.spin*e;let i=r.age/r.life,a=i<r.fadeIn?i/r.fadeIn:1-(i-r.fadeIn)/(1-r.fadeIn),o=r.size+(r.endSize-r.size)*(1-(1-i)*(1-i));this.offsets[n*3]=r.position.x,this.offsets[n*3+1]=r.position.y,this.offsets[n*3+2]=r.position.z,this.tints[n*4]=r.color.r,this.tints[n*4+1]=r.color.g,this.tints[n*4+2]=r.color.b,this.tints[n*4+3]=r.alpha*Math.max(0,a),this.sizeRotations[n*2]=o,this.sizeRotations[n*2+1]=r.rotation,n++}this.geometry.instanceCount=n,this.geometry.attributes.offset.needsUpdate=!0,this.geometry.attributes.tint.needsUpdate=!0,this.geometry.attributes.sizeRotation.needsUpdate=!0}},Nu=null;function Pu(){return Nu??=Ft(),Nu}function Fu(){let e=document.createElement(`canvas`);e.width=32,e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,2,16,16,15);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.9)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,32,32);let r=new Te(e);return r.colorSpace=_t,r}var Iu=new L,Q=(e,t)=>e+Math.random()*(t-e),$=e=>{let t,n,r;do t=Math.random()*2-1,n=Math.random()*2-1,r=Math.random()*2-1;while(t*t+n*n+r*r>1);return new L(t*e,n*e,r*e)},Lu=140,Ru=class{object=new N;smoke=new Mu(1100);spray=new Mu(700);glow=new Mu(260,!0);chips=new Mu(200,!1,Fu());rings=[];ringGeometry=new Yt(.75,1,40).rotateX(-Math.PI/2);shockGeometry=new Yt(.55,1,40);wind=new L;fuseClock=0;splinterMesh;splinters=[];nextSplinter=0;flashLight=new S(`#ffb35a`,0,40,1.6);damageSources=[];damageClock=0;matrix=new lt;quaternion=new ve;constructor(){this.splinterMesh=new Bt(new Wt(1,1,1),new Je({color:`#8a5a33`,roughness:.9}),Lu),this.splinterMesh.count=0,this.splinterMesh.frustumCulled=!1;for(let e=0;e<Lu;e++)this.splinters.push({alive:!1,position:new L,velocity:new L,rotation:new je,spin:new L,scale:new L,age:0,life:1});this.object.add(this.smoke.mesh,this.spray.mesh,this.chips.mesh,this.glow.mesh,this.splinterMesh,this.flashLight)}setWind(e,t){let n=t*.32;this.wind.set(Math.cos(e)*n,0,Math.sin(e)*n)}fuse(e,t,n){for(this.fuseClock+=n*(18+60*t);this.fuseClock>=1;)--this.fuseClock,this.glow.spawn({position:e.clone().add($(.03)),velocity:$(1.6+2.5*t).add(new L(0,1.5+2.5*t,0)),size:Q(.035,.07)*(1+t),endSize:.01,life:Q(.18,.4),color:Math.random()>.5?`#ffd27a`:`#ff8a3c`,gravity:6,fadeIn:.01}),Math.random()>.75&&this.smoke.spawn({position:e.clone(),velocity:new L(Q(-.2,.2),Q(.4,.9),Q(-.2,.2)),size:.08,endSize:.45,life:Q(.6,1),color:`#d9dcdf`,alpha:.45,windDrift:.6})}muzzleBlast(e,t,n=1){for(let r=0;r<4;r++)this.glow.spawn({position:e.clone().addScaledVector(t,r*.7*n),velocity:t.clone().multiplyScalar(6),size:(2.6-r*.4)*n,endSize:(3.6-r*.5)*n,life:.13,color:r===0?`#fff2c4`:`#ff9b3d`,fadeIn:.01});for(let r=0;r<18*n;r++){let r=Q(4,15)*n;this.smoke.spawn({position:e.clone().add($(.4)),velocity:t.clone().multiplyScalar(r).add($(2.2)).add(new L(0,.6,0)),size:Q(1,1.6)*n,endSize:Q(3.8,5.2)*n,life:Q(1.8,2.8),color:`#e6e9ec`,alpha:.9,drag:2.4,gravity:-.5,windDrift:1})}for(let r=0;r<10*n;r++)this.glow.spawn({position:e.clone(),velocity:t.clone().multiplyScalar(Q(10,22)).add($(4)),size:Q(.08,.16),endSize:.02,life:Q(.25,.55),color:`#ffb347`,gravity:9,fadeIn:.01});this.ring(e.clone().addScaledVector(t,1.2),.4*n,.22,9*n,t,.3),this.ring(new L(e.x+t.x*3,.25,e.z+t.z*3),1.5*n,1.1,7*n),this.flashLight.position.copy(e).addScaledVector(t,1.5),this.flashLight.intensity=140*n}trail(e,t){this.smoke.spawn({position:e.clone().add($(t?.08:.15)),velocity:$(.4).add(new L(0,.25,0)),size:t?.4:.95,endSize:t?1.3:3.3,life:t?Q(.9,1.3):Q(1.6,2.2),color:`#f6f7f9`,alpha:t?.7:.85,drag:.8,fadeIn:.05,windDrift:.8})}splash(e,t=1){let n=new L(e.x,.2,e.z);for(let e=0;e<22*t+4;e++)this.spray.spawn({position:n.clone().add($(.6*t).setY(0)),velocity:$(1.6*t).setY(Q(9,19)*Math.sqrt(t)),size:Q(.6,1.1)*t,endSize:Q(1.3,2)*t,life:Q(.9,1.3),color:`#ffffff`,gravity:24,drag:.6,windDrift:.3});for(let e=0;e<14*t+2;e++){let r=e/14*Math.PI*2;this.spray.spawn({position:n.clone(),velocity:new L(Math.cos(r)*Q(3,6),Q(5,9),Math.sin(r)*Q(3,6)).multiplyScalar(Math.sqrt(t)),size:.45*t,endSize:.9*t,life:Q(.8,1.1),color:`#f2fbff`,gravity:20})}for(let e=0;e<6*t+1;e++)this.smoke.spawn({position:n.clone().add($(1.2*t).setY(.3)),velocity:$(1.5).setY(Q(.4,1.4)),size:2*t,endSize:5*t,life:Q(1.2,1.7),color:`#ffffff`,alpha:.65,drag:1.5,windDrift:1});this.ring(n,1.2*t,1.4,4.2),this.ring(n,.6*t,.9,9*t)}dust(e){let t=new L(e.x,e.y,e.z);for(let e=0;e<12;e++)this.smoke.spawn({position:t.clone().add($(.8)),velocity:$(4).add(new L(0,Q(1.5,4),0)),size:Q(1.2,2),endSize:Q(3.5,5),life:Q(1.4,2.2),color:e%3?`#d6c094`:`#9c968a`,alpha:.85,drag:2,windDrift:1});for(let e=0;e<14;e++)this.chips.spawn({position:t.clone(),velocity:$(7).add(new L(0,Q(4,9),0)),size:Q(.2,.42),endSize:.2,life:Q(.8,1.4),color:e%2?`#8d8a80`:`#bba77c`,gravity:20,spin:Q(-8,8)})}shipHit(e,t=1){let n=new L(e.x,e.y,e.z);this.glow.spawn({position:n,velocity:new L,size:4.4*t,endSize:.5,life:.22,color:`#ffe2a0`,fadeIn:.01});for(let e=0;e<7*t+2;e++)this.glow.spawn({position:n.clone().add($(.6*t)),velocity:$(3).add(new L(0,Q(1,3),0)),size:Q(1.1,2)*t,endSize:Q(.2,.5),life:Q(.3,.55),color:e%2?`#ff7a2a`:`#ffb347`,fadeIn:.02,windDrift:.5});for(let e=0;e<12*t+3;e++)this.glow.spawn({position:n.clone(),velocity:$(13).add(new L(0,5,0)),size:Q(.18,.32),endSize:.05,life:Q(.35,.6),color:`#ffb347`,gravity:16,fadeIn:.01});for(let e=0;e<22*t+4;e++)this.splinter(n,t,e%6==0);for(let e=0;e<6*t+2;e++)this.smoke.spawn({position:n.clone().add($(.5)),velocity:$(2.2).add(new L(0,Q(1,2.5),0)),size:Q(1.4,2)*t,endSize:Q(4,5.5)*t,life:Q(1.8,2.6),color:`#5f5a55`,alpha:.8,drag:1.4,gravity:-.6,windDrift:1});this.flashLight.position.copy(n),this.flashLight.intensity=Math.max(this.flashLight.intensity,110*t)}dig(e,t,n,r){let i=new L(e.x,e.y,e.z),a={sand:[`#cdb27a`,`#a88a5a`],grass:[`#5b3d24`,`#7a5634`],rock:[`#7d7a72`,`#5e5b55`]}[n],o=Math.min(1.6,Math.max(.5,t/2.2));for(let e=0;e<18*o+4;e++)this.chips.spawn({position:i.clone().add($(.5*o)),velocity:$(6*o).add(new L(0,Q(5,11)*Math.sqrt(o),0)),size:Q(.22,.5)*o,endSize:.18,life:Q(.9,1.5),color:a[e%2],gravity:20,spin:Q(-8,8)});for(let e=0;e<6*o+2;e++)this.smoke.spawn({position:i.clone().add($(t*.4)),velocity:$(2.5).add(new L(0,Q(1,3),0)),size:Q(1.4,2.2)*o,endSize:Q(4,6)*o,life:Q(1.6,2.4),color:n===`sand`?`#e2cf9e`:n===`grass`?`#a58a64`:`#a19c90`,alpha:.8,drag:1.8,windDrift:1});for(let e of r){let t=e.kind===`rock`?[`#9a978c`,`#7c7970`]:[`#46a83c`,`#3f8f33`];for(let n=0;n<12;n++)this.chips.spawn({position:e.position.clone().add($(e.kind===`palm`?1.5:.8)).add(new L(0,e.kind===`palm`?Q(0,6):0,0)),velocity:$(7).add(new L(0,Q(3,8),0)),size:Q(.25,.55),endSize:.15,life:Q(1,1.8),color:t[n%2],gravity:e.kind===`rock`?20:9,spin:Q(-6,6)});if(e.kind===`palm`)for(let t=0;t<6;t++)this.splinter(e.position,.7,t%2==0)}}crack(e,t){let n=new L(e.x,e.y,e.z),r=t?[`#f3efe6`,`#c8372d`,`#b9b2a6`]:[`#b3ad9f`,`#7b786f`,`#d8d2c4`];for(let e=0;e<16;e++)this.chips.spawn({position:n.clone().add($(.3)),velocity:$(8).add(new L(0,Q(2,6),0)),size:Q(.18,.4),endSize:.15,life:Q(.9,1.5),color:r[e%r.length],gravity:20,spin:Q(-9,9)});for(let e=0;e<4;e++)this.smoke.spawn({position:n.clone().add($(.4)),velocity:$(1.5).add(new L(0,Q(.5,1.5),0)),size:Q(.9,1.4),endSize:Q(2.6,3.6),life:Q(1.2,1.8),color:t?`#e6e0d4`:`#b9b4a8`,alpha:.75,drag:1.8,windDrift:1})}treeHit(e,t){let n=new L(e.x,e.y,e.z);for(let e=0;e<(t?20:10);e++)this.chips.spawn({position:n.clone().add($(.8)),velocity:$(5).add(new L(0,Q(1,4),0)),size:Q(.25,.5),endSize:.15,life:Q(1.2,2),color:e%3?`#46a83c`:`#3f8f33`,gravity:6,spin:Q(-6,6),windDrift:1});for(let e=0;e<(t?12:4);e++)this.splinter(n,.6,e%4==0)}sailTear(e,t,n){let r=new L(e.x,e.y,e.z),i=new z(t),a=Math.round(6+8*Math.min(1.5,n));for(let e=0;e<a;e++)this.chips.spawn({position:r.clone().add($(n*.6)),velocity:$(3.5).add(new L(0,Q(.5,2),0)),size:Q(.18,.42)*Math.max(.7,n),endSize:.12,life:Q(1.6,2.6),color:i.clone().multiplyScalar(e%3?1:.55),gravity:2.2,drag:.8,spin:Q(-7,7),windDrift:1.4});for(let e=0;e<3;e++)this.smoke.spawn({position:r.clone().add($(.3)),velocity:$(1.2),size:Q(.6,1)*Math.max(.7,n),endSize:Q(1.6,2.4),life:Q(.5,.8),color:`#e8ddc8`,alpha:.35,windDrift:1})}treeLand(e,t,n){if(n)this.splash(e,Math.min(1.4,.6+t/14));else for(let n=0;n<6;n++)this.smoke.spawn({position:e.clone().add($(t*.25).setY(.3)),velocity:$(2).add(new L(0,Q(.5,1.5),0)),size:Q(1,1.6),endSize:Q(3,4),life:Q(1.2,1.8),color:`#d6c094`,alpha:.7,drag:2,windDrift:1});this.treeHit(e.clone().setY(e.y+1),!1)}rockBreak(e){this.dust(e),this.dust({x:e.x,y:e.y+1,z:e.z})}rockLand(e,t,n){if(n){this.splash(e,Math.min(2.2,Math.max(.9,t/7)));return}for(let n=0;n<Math.min(5,1+t/4);n++)this.dust(e.clone().add($(t*.3).setY(.5)))}mastBreak(e){for(let t=0;t<18;t++)this.splinter(e,.8,t%5==0);for(let t=0;t<6;t++)this.smoke.spawn({position:e.clone().add($(.4)),velocity:$(1.6).add(new L(0,.5,0)),size:Q(.6,1),endSize:Q(2.2,3.2),life:Q(1,1.6),color:`#cdb38c`,alpha:.75,drag:1.6,windDrift:1})}powerBurst(e,t,n=1){let r=new L(e.x,e.y,e.z),i=new z(t),a=i.clone().lerp(new z(`#ffffff`),.5);this.glow.spawn({position:r,velocity:new L,size:6*n,endSize:1,life:.3,color:a,fadeIn:.01});for(let e=0;e<26*n;e++)this.glow.spawn({position:r.clone().add($(.8)),velocity:$(14*n),size:Q(.25,.55)*n,endSize:.05,life:Q(.45,.9),color:e%3?i:a,gravity:4,drag:1.5,fadeIn:.01});this.ring(r,1.5*n,.45,9*n,new L(0,0,1),.7),this.ring(r,1.5*n,.45,9*n,new L(1,0,0),.7)}meteorTrail(e){this.glow.spawn({position:e.clone().add($(.4)),velocity:$(1.5).add(new L(0,4,0)),size:Q(1.1,1.8),endSize:.2,life:Q(.25,.45),color:Math.random()>.5?`#ff8a3c`:`#ffd27a`,fadeIn:.01}),this.smoke.spawn({position:e.clone().add($(.5)),velocity:$(1).add(new L(0,2,0)),size:Q(1,1.6),endSize:Q(3,4),life:Q(1,1.6),color:`#4b4744`,alpha:.6,drag:1.2,windDrift:1})}bigBlast(e,t){let n=new L(e.x,Math.max(e.y,.3),e.z);this.glow.spawn({position:n,velocity:new L,size:t*2.2,endSize:t*.6,life:.45,color:`#ffe2a0`,fadeIn:.01});for(let e=0;e<20;e++)this.glow.spawn({position:n.clone().add($(t*.5)),velocity:$(t*1.2).add(new L(0,Q(2,6),0)),size:Q(1.6,3.2),endSize:Q(.4,.9),life:Q(.4,.8),color:e%2?`#ff6a1a`:`#ffb347`,fadeIn:.02,windDrift:.5});for(let e=0;e<10;e++)this.smoke.spawn({position:n.clone().add($(t*.5)),velocity:$(3).add(new L(0,Q(2,4),0)),size:Q(2.5,3.5),endSize:Q(7,9),life:Q(2.2,3),color:`#55504b`,alpha:.75,drag:1.4,gravity:-.6,windDrift:1});this.ring(n.clone().setY(.25),t*.3,.6,t*1.2),this.flashLight.position.copy(n),this.flashLight.intensity=Math.max(this.flashLight.intensity,140)}sinkBurst(e){for(let t=0;t<4;t++)this.splash(e.clone().add($(9).setY(0)),1.6)}setDamageSources(e){this.damageSources=e}clear(){this.smoke.clear(),this.spray.clear(),this.glow.clear(),this.chips.clear();for(let e of this.splinters)e.alive=!1;for(let e of this.rings)this.object.remove(e.mesh);this.rings.length=0}update(e){this.emitDamage(e),this.smoke.update(e,this.wind),this.spray.update(e,this.wind),this.glow.update(e,this.wind),this.chips.update(e),this.updateSplinters(e);for(let t=this.rings.length-1;t>=0;t--){let n=this.rings[t];n.age+=e;let r=n.age/n.life;if(r>=1){this.object.remove(n.mesh),n.mesh.material.dispose(),this.rings.splice(t,1);continue}n.mesh.scale.setScalar(n.mesh.scale.x+n.grow*e*(1-r)),n.mesh.material.opacity=n.opacity*(1-r)}this.flashLight.intensity*=Math.exp(-e*18),this.flashLight.intensity<.05&&(this.flashLight.intensity=0)}emitDamage(e){if(this.damageClock+=e,this.damageClock<.09)return;let t=this.damageClock;this.damageClock=0;for(let e of this.damageSources){if(e.damage<.5)continue;let n=e.damage>=.75,r=n?2:1;for(let i=0;i<r;i++)this.smoke.spawn({position:e.position.clone().add($(2.2).setY(Q(0,1))),velocity:new L(Q(-.4,.4),Q(2.5,4),Q(-.4,.4)),size:Q(1.4,2),endSize:Q(5,7),life:Q(3,4.2)*Math.min(1,t/.09),color:n?`#3e3a37`:`#6d6863`,alpha:.75,drag:.3,windDrift:1});if(n)for(let t=0;t<2;t++)this.glow.spawn({position:e.position.clone().add($(1.8).setY(Q(0,.6))),velocity:new L(Q(-.3,.3),Q(1.5,3),Q(-.3,.3)),size:Q(.8,1.4),endSize:.2,life:Q(.5,.8),color:t?`#ff7a2a`:`#ffc14a`,fadeIn:.15,windDrift:.4})}}ring(e,t,n,r,i,a=.85){let o=new Ve({color:`#ffffff`,transparent:!0,opacity:a,depthWrite:!1,side:2}),s=new W(i?this.shockGeometry:this.ringGeometry,o);s.position.copy(e),i&&s.quaternion.setFromUnitVectors(new L(0,0,1),i.clone().normalize()),s.scale.setScalar(t),this.object.add(s),this.rings.push({mesh:s,age:0,life:n,grow:r,opacity:a})}splinter(e,t,n=!1){let r=this.splinters[this.nextSplinter];this.nextSplinter=(this.nextSplinter+1)%Lu,r.alive=!0,r.position.copy(e),r.velocity.copy($((n?7:12)*t)).add(Iu.set(0,Q(5,11),0)),r.rotation.set(Q(0,6),Q(0,6),Q(0,6)),r.spin.set(Q(-14,14),Q(-14,14),Q(-14,14)),n?r.scale.set(Q(.28,.4),Q(.07,.1),Q(1.3,2.1)):r.scale.set(Q(.08,.16),Q(.08,.14),Q(.5,1.1)),r.age=0,r.life=Q(1.6,2.4)}updateSplinters(e){let t=0;for(let n of this.splinters){if(!n.alive)continue;if(n.age+=e,n.age>=n.life){n.alive=!1;continue}n.velocity.y-=18*e,n.position.addScaledVector(n.velocity,e),n.position.y<0&&(n.position.y=0,n.velocity.multiplyScalar(.9).setY(0),n.spin.multiplyScalar(.9)),n.rotation.x+=n.spin.x*e,n.rotation.y+=n.spin.y*e,n.rotation.z+=n.spin.z*e;let r=Math.min(1,(n.life-n.age)/.4);this.matrix.compose(n.position,this.quaternion.setFromEuler(n.rotation),Iu.copy(n.scale).multiplyScalar(r)),this.splinterMesh.setMatrixAt(t++,this.matrix)}this.splinterMesh.count=t,this.splinterMesh.instanceMatrix.needsUpdate=!0}},zu=new z(`#2f86d6`),Bu=new z(`#c4ecf8`);function Vu(e){let t=new P({side:1,depthWrite:!1,uniforms:{uZenith:{value:zu},uHorizon:{value:Bu},uSunDir:{value:e}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uZenith;
      uniform vec3 uHorizon;
      uniform vec3 uSunDir;
      varying vec3 vDir;
      void main() {
        vec3 dir = normalize(vDir);
        float up = clamp(dir.y, 0.0, 1.0);
        vec3 color = mix(uHorizon, uZenith, pow(up, 0.6));
        float sun = max(dot(dir, uSunDir), 0.0);
        color += vec3(1.0, 0.9, 0.7) * (pow(sun, 800.0) * 3.0 + pow(sun, 16.0) * 0.2);
        gl_FragColor = vec4(color, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),n=new W(new Ce(1e3,32,16),t);return n.frustumCulled=!1,n.renderOrder=-1,n}function Hu(e,t){let n=new P({side:1,depthWrite:!1,uniforms:{uZenith:{value:zu},uHorizon:{value:Bu},uSea:{value:new z(`#1b93ad`)},uDeep:{value:new z(`#0a4f66`)},uSunDir:{value:t}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uZenith;
      uniform vec3 uHorizon;
      uniform vec3 uSea;
      uniform vec3 uDeep;
      uniform vec3 uSunDir;
      varying vec3 vDir;
      void main() {
        vec3 dir = normalize(vDir);
        vec3 sky = mix(uHorizon, uZenith, pow(clamp(dir.y, 0.0, 1.0), 0.6));
        vec3 sea = mix(uSea, uDeep, pow(clamp(-dir.y, 0.0, 1.0), 0.5));
        vec3 color = mix(sea, sky, smoothstep(-0.03, 0.03, dir.y));
        float sun = max(dot(dir, uSunDir), 0.0);
        color += vec3(1.0, 0.92, 0.75) * (pow(sun, 350.0) * 40.0 + pow(sun, 12.0) * 0.4);
        gl_FragColor = vec4(color, 1.0);
      }
    `}),r=new pt;r.add(new W(new Ce(10,48,24),n));let i=new zn(e),a=i.fromScene(r,0).texture;return i.dispose(),n.dispose(),a}var Uu=[[1,.35,.15,42],[.55,1,.12,24],[-.45,.8,.1,14],[.9,-.6,.07,8]],Wu=9.8,Gu=22,Ku=150,qu=200,Ju=210,Yu=300,Xu=1100,Zu=.12,Qu=e=>e.toFixed(2),$u=64,ed=256;function td(e){let t=ct(e),n=ed,r=t.landRadius+$u+4,i=2*r/n,a=new Float32Array(n*n);for(let e=0;e<n;e++)for(let o=0;o<n;o++){let s=-r+(o+.5)*i,c=-r+(e+.5)*i,l=t.height(s,c)>0||ot(s,.5,c,t.solids)<0;a[e*n+o]=l?0:1/0}let o=i*Math.SQRT2,s=(e,t,n)=>{a[t]+n<a[e]&&(a[e]=a[t]+n)};for(let e=0;e<n;e++)for(let t=0;t<n;t++){let r=e*n+t;t>0&&s(r,r-1,i),e>0&&(s(r,r-n,i),t>0&&s(r,r-n-1,o),t<255&&s(r,r-n+1,o))}for(let e=255;e>=0;e--)for(let t=255;t>=0;t--){let r=e*n+t;t<255&&s(r,r+1,i),e<255&&(s(r,r+n,i),t<255&&s(r,r+n+1,o),t>0&&s(r,r+n-1,o))}let c=new Uint8Array(n*n);for(let e=0;e<n*n;e++)c[e]=Math.min(255,Math.round(a[e]/$u*255));return{data:c,extent:r}}function nd(e,t,n){let r=ed,i=(t+e.extent)/(2*e.extent)*r-.5,a=(n+e.extent)/(2*e.extent)*r-.5;if(i<0||a<0||i>255||a>255)return $u;let o=Math.floor(i),s=Math.floor(a),c=i-o,l=a-s,u=(t,n)=>e.data[Math.min(255,n)*r+Math.min(255,t)],d=u(o,s)*(1-c)+u(o+1,s)*c,f=u(o,s+1)*(1-c)+u(o+1,s+1)*c;return(d*(1-l)+f*l)/255*$u}var rd=`
  uniform float uTime;
  uniform sampler2D uShoreMap;
  uniform float uShoreExtent;
  uniform vec4 uWaves[${Uu.length}];
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  varying float vHeight;
  varying float vBaseRadius;
  varying float vShore;
  
  float shoreDistance(vec2 p) {
    vec2 uv = (p + uShoreExtent) / (2.0 * uShoreExtent);
    if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return SHORE_MAX;
    return texture2D(uShoreMap, uv).r * SHORE_MAX;
  }


  void main() {
    vec3 p = (modelMatrix * vec4(position, 1.0)).xyz;
    vBaseRadius = length(p.xz);
    vShore = shoreDistance(p.xz);
    float atten = smoothstep(0.0, SHALLOWS_WIDTH, vShore)
                * (1.0 - smoothstep(FADE_START, FADE_END, vBaseRadius));
    vec3 offset = vec3(0.0);
    vec3 tangent = vec3(1.0, 0.0, 0.0);
    vec3 binormal = vec3(0.0, 0.0, 1.0);
    for (int i = 0; i < ${Uu.length}; i++) {
      vec4 w = uWaves[i];
      float k = 6.2831853 / w.w;
      float c = sqrt(GRAVITY / k);
      vec2 d = normalize(w.xy);
      float s = w.z * atten;
      float f = k * (dot(d, p.xz) - c * uTime);
      float a = s / k;
      float sf = sin(f);
      float cf = cos(f);
      offset += vec3(d.x * a * cf, a * sf, d.y * a * cf);
      tangent += vec3(-d.x * d.x * s * sf, d.x * s * cf, -d.x * d.y * s * sf);
      binormal += vec3(-d.x * d.y * s * sf, d.y * s * cf, -d.y * d.y * s * sf);
    }
    p += offset;
    vHeight = offset.y;
    vNormal = normalize(cross(binormal, tangent));
    vWorldPos = p;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  }
`,id=`
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uShallow;
  uniform vec3 uFoam;
  uniform vec3 uHorizon;
  uniform vec3 uSunDir;
  uniform vec4 uHulls[2];
  /** Hull outline: centre offset along the ship, half length, half beam (m). */
  uniform vec3 uHullShape;
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  varying float vHeight;
  varying float vBaseRadius;
  /** Distance to the nearest land (m). */
  varying float vShore;

  /** 0 at a hull's waterline outline, growing outward (≈ metres near the sides). */
  float hullDistance(vec2 p, vec4 hull) {
    vec2 d = p - hull.xy;
    vec2 f = hull.zw;
    float along = dot(d, f) - uHullShape.x;
    float across = dot(d, vec2(-f.y, f.x));
    return (length(vec2(along / uHullShape.y, across / uHullShape.z)) - 1.0) * uHullShape.z;
  }

  #ifdef HULL_MASK
    /** World → each hull's own frame as drawn; 1 where the sea stays out of it (afloat), 0 once it sinks. */
    uniform mat4 uHullInverse[2];
    uniform float uHullDry[2];
    /** The design's lines at HULL_STATIONS stations from uHullSpan.x (stern) to .y (bow): half-breadth, keel, rail. */
    uniform vec3 uHullLines[HULL_STATIONS];
    uniform vec2 uHullSpan;
    ${ut}
    /** How far inside hull i's skin a point is, across the ship (m; negative outside). */
    float hullInside(vec3 world, int i) {
      vec3 p = (uHullInverse[i] * vec4(world, 1.0)).xyz;
      float u = (p.x - uHullSpan.x) / (uHullSpan.y - uHullSpan.x);
      if (u <= 0.0 || u >= 1.0) return -1.0;
      float s = u * float(HULL_STATIONS - 1);
      int k = int(s);
      vec3 lines = mix(uHullLines[k], uHullLines[min(k + 1, HULL_STATIONS - 1)], s - float(k));
      float t = (p.y - lines.y) / (lines.z - lines.y);
      if (t <= 0.0 || t >= 1.0) return -1.0;
      return lines.x * sectionFactor(t) - abs(p.z);
    }
  #endif

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  void main() {
    #ifdef CLIP_OUTSIDE
      if (vBaseRadius > INNER_RADIUS) discard;
    #endif
    vec2 q = vWorldPos.xz;
    // No sea inside a hull that's afloat (a hole shows the dry hold); right against the skin, a dark edge.
    float dry = 0.0;
    #ifdef HULL_MASK
      for (int i = 0; i < 2; i++) {
        if (uHullDry[i] < 0.5 || hullDistance(q, uHulls[i]) > 1.5) continue;
        float inside = hullInside(vWorldPos, i);
        if (inside > HULL_MARGIN) discard;
        dry = max(dry, smoothstep(0.0, HULL_MARGIN, inside));
      }
    #endif
    vec3 toCamera = cameraPosition - vWorldPos;
    float dist = length(toCamera);
    vec3 view = toCamera / dist;

    // Small ripples on top of the big waves, faded with distance to avoid shimmer.
    float detail = 1.0 - smoothstep(40.0, 220.0, dist);
    vec3 ripple = vec3(sin(q.x * 0.8 + uTime * 1.6) * cos(q.y * 0.6 - uTime * 1.2), 0.0,
                       sin(q.x * 0.35 - q.y * 0.5 + uTime * 0.9));
    vec3 n = normalize(vNormal + ripple * 0.05 * detail);

    float shallow = 1.0 - smoothstep(0.0, 35.0, vShore);
    float crest = smoothstep(-0.8, 1.4, vHeight);
    vec3 color = mix(uDeep, uShallow, clamp(crest * 0.55 + shallow * 0.9, 0.0, 1.0));

    // Fake subsurface glow: wave crests seen against the light turn bright turquoise.
    vec3 sunFlat = normalize(vec3(uSunDir.x, 0.0, uSunDir.z));
    float backlit = pow(max(dot(-view, sunFlat), 0.0), 2.0) * 0.6 + 0.4;
    float sss = smoothstep(0.1, 1.5, vHeight) * (1.0 - max(dot(n, view), 0.0)) * backlit;
    color = mix(color, uShallow * 1.25, clamp(sss * 0.8, 0.0, 0.6));

    float fresnel = pow(1.0 - max(dot(n, view), 0.0), 5.0);
    color = mix(color, uHorizon, fresnel * 0.6);
    vec3 halfVector = normalize(uSunDir + view);
    color += vec3(1.0, 0.95, 0.85) * pow(max(dot(n, halfVector), 0.0), 240.0) * 1.2;

    float breakup = noise(q * 0.18 + vec2(uTime * 0.05, uTime * 0.03));
    float streaks = smoothstep(0.35, 0.7, noise(q * 0.7 - vec2(uTime * 0.12, 0.0)));
    float crestFoam = smoothstep(1.35, 1.75, vHeight + breakup * 0.3) * streaks;
    float shoreFoam = 1.0 - smoothstep(0.0, 5.0, vShore - breakup * 3.0);
    // Foam hugging each hull at the waterline, broken up so it churns.
    float hullFoam = 0.0;
    for (int i = 0; i < 2; i++) {
      float h = hullDistance(q, uHulls[i]);
      float band = 1.0 - smoothstep(0.0, 1.6 + breakup * 1.4, h);
      hullFoam = max(hullFoam, band * smoothstep(0.3, 0.75, noise(q * 1.3 + vec2(uTime * 0.6, -uTime * 0.4)) + band * 0.35));
    }
    color = mix(color, uFoam, max(max(crestFoam * 0.8, shoreFoam), hullFoam * 0.9));
    color = mix(color, uDeep * 0.2, dry);

    color = mix(color, uHorizon, smoothstep(HORIZON_FADE_START, HORIZON_FADE_END, dist));
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function ad(e,t){let n=td(e),r=new re(n.data,ed,ed,Ke,Ae);r.magFilter=Ze,r.minFilter=Ze,r.needsUpdate=!0;let i={uTime:{value:0},uShoreMap:{value:r},uShoreExtent:{value:n.extent},uWaves:{value:Uu.map(([e,t,n,r])=>new v(e,t,n,r))},uDeep:{value:new z(`#0f7ea6`)},uShallow:{value:new z(`#3ad8cf`)},uFoam:{value:new z(`#f2fbff`)},uHorizon:{value:Bu},uSunDir:{value:t},uHulls:{value:[new v(0,1e3,1,0),new v(0,-1e3,1,0)]},uHullShape:{value:new L(.7,13,3.75)},uHullInverse:{value:[new lt,new lt]},uHullDry:{value:[0,0]},uHullLines:{value:Array.from({length:33},()=>new L)},uHullSpan:{value:new Le(-1,1)}},a={GRAVITY:Qu(Wu),SHALLOWS_WIDTH:Qu(Gu),SHORE_MAX:Qu($u),FADE_START:Qu(Ku),FADE_END:Qu(qu),INNER_RADIUS:Qu(Ju),HORIZON_FADE_START:Qu(Yu),HORIZON_FADE_END:Qu(Xu),HULL_STATIONS:`33`,HULL_MARGIN:Qu(Zu)},o=e=>new yt(420,420,e,e).rotateX(-Math.PI/2),s=new W(o(210),new P({uniforms:i,defines:{...a,CLIP_OUTSIDE:``,HULL_MASK:``},vertexShader:rd,fragmentShader:id})),c=new Yt(qu,3e3,96,4);c.rotateX(-Math.PI/2),c.translate(0,-.05,0);let l=new W(c,new P({uniforms:i,defines:a,vertexShader:rd,fragmentShader:id})),u=new N;u.add(s,l);let d=0;return{object:u,update(e){d=e,i.uTime.value=e},setArena(e){n=td(e),r.image.data=n.data,r.needsUpdate=!0,i.uShoreExtent.value=n.extent},setDetail(e){s.geometry.dispose(),s.geometry=o(e)},setHullShape(e,t,n){i.uHullShape.value.set(e,t,n)},setHull(e,t,n,r,a){i.uHulls.value[e].set(t,n,r,a)},setHullLines(e){i.uHullSpan.value.set(e.stern,e.bow),e.stations.forEach(([e,t,n],r)=>i.uHullLines.value[r]?.set(e,t,n))},setHullFrame(e,t,n){i.uHullInverse.value[e].copy(t).invert(),i.uHullDry.value[e]=+!!n},sample(e,t,r){let i=Math.hypot(e,t),a=od(0,Gu,nd(n,e,t))*(1-od(Ku,qu,i)),o=0,s=1,c=0,l=0,u=0,f=0,p=1;for(let[n,r,i,m]of Uu){let h=2*Math.PI/m,g=Math.sqrt(Wu/h),_=Math.hypot(n,r),v=n/_,y=r/_,b=i*a,x=h*(v*e+y*t-g*d),S=Math.sin(x),C=Math.cos(x);o+=b/h*S,s+=-v*v*b*S,c+=v*b*C,l+=-v*y*b*S,u+=-v*y*b*S,f+=y*b*C,p+=-y*y*b*S}return r.set(f*l-p*c,p*s-u*l,u*c-f*s).normalize(),o}}}function od(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}var sd=class{uniforms={uMaskInverse:{value:[new lt,new lt]},uMaskLines:{value:Array.from({length:33},()=>new L)},uMaskSpan:{value:new Le(-1,1)}};setLines(e){this.uniforms.uMaskSpan.value.set(e.stern,e.bow),e.stations.forEach(([e,t,n],r)=>this.uniforms.uMaskLines.value[r]?.set(e,t,n))}setFrame(e,t){this.uniforms.uMaskInverse.value[e].copy(t).invert()}apply(e){e.traverse(e=>{let t=e.material;if(t)for(let e of Array.isArray(t)?t:[t])this.patch(e)})}patch(e){let t=e.customProgramCacheKey();e.customProgramCacheKey=()=>`${t}|hull-mask`,e.onBeforeCompile=e=>{Object.assign(e.uniforms,this.uniforms),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vMaskWorld;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vMaskWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform mat4 uMaskInverse[2];
uniform vec3 uMaskLines[33];
uniform vec2 uMaskSpan;
varying vec3 vMaskWorld;
${ut}
/** How far inside hull i's skin a point is, across the ship (m; negative outside). */
float maskInside(int i) {
  vec3 p = (uMaskInverse[i] * vec4(vMaskWorld, 1.0)).xyz;
  float u = (p.x - uMaskSpan.x) / (uMaskSpan.y - uMaskSpan.x);
  if (u <= 0.0 || u >= 1.0) return -1.0;
  float s = u * float(32);
  int k = int(s);
  vec3 lines = mix(uMaskLines[k], uMaskLines[min(k + 1, 32)], s - float(k));
  float t = (p.y - lines.y) / (lines.z - lines.y);
  if (t <= 0.0 || t >= 1.0) return -1.0;
  return lines.x * sectionFactor(t) - abs(p.z);
}`).replace(`void main() {`,`void main() {
  if (maskInside(0) > 0.0 || maskInside(1) > 0.0) discard;`)}}},cd=25,ld=.85,ud=class{object=new N;balls=[];geometry=new Ce(1,14,10);material=new Je({color:`#1d1f22`,roughness:.45,metalness:.5});meteorMaterial=new Je({color:`#4a2a1a`,emissive:`#ff7a2a`,emissiveIntensity:1.4,roughness:.8,flatShading:!0});glowMaterials=new Map;shot=null;bob=new L;small=!1;ballRadius=.35;boosts=[];time=0;lastPuff=[];show(e,t,n,r=[]){for(this.shot=e,this.bob.copy(n),this.small=t<.25,this.ballRadius=t,this.boosts=r;this.balls.length<e.projectiles.length;){let e=new W(this.geometry,this.material);e.castShadow=!0,this.balls.push(e),this.object.add(e)}this.balls.forEach((n,r)=>{n.visible=!1;let i=e.projectiles[r]?.kind===`meteor`;n.material=i?this.meteorMaterial:this.material,n.scale.setScalar(i?Zo*1.3:t)}),this.lastPuff=e.projectiles.map(()=>null)}hide(){this.shot=null;for(let e of this.balls)e.visible=!1}update(e,t){let n=this.shot;n&&(this.time=e,n.projectiles.forEach((n,r)=>{let i=this.balls[r],a=e-n.launch.delay;if(i.visible=a>=0&&a<n.flight.duration,!i.visible)return;let o=_o(n.flight,a);i.position.set(o.x,o.y,o.z);let s=n.kind===`meteor`;if(!s&&n.parent===null){let e=Math.hypot(o.x-n.launch.origin.x,o.y-n.launch.origin.y,o.z-n.launch.origin.z);i.position.addScaledVector(this.bob,Math.max(0,1-e/cd))}let c=this.boosts[r];if(!s){let t=c&&e>=c.from;i.material=t?this.glow(c.color):this.material,i.scale.setScalar(this.ballRadius*(t?c.scale*(1+.08*Math.sin(this.time*18)):1))}let l=this.lastPuff[r];if(!l){this.lastPuff[r]=l=i.position.clone();return}let u=l.distanceTo(i.position),d=Math.min(12,Math.floor(u/ld));for(let e=1;e<=d;e++){let n=l.clone().lerp(i.position,e/d);s?t.meteorTrail(n):t.trail(n,this.small)}d>0&&l.copy(i.position)}))}glow(e){let t=new z(e).getHexString(),n=this.glowMaterials.get(t);return n||(n=new Je({color:`#2a1d14`,emissive:e,emissiveIntensity:1.6,roughness:.4}),this.glowMaterials.set(t,n)),n}},dd=16,fd=160,pd=new L(0,1,0),md=new L,hd=new ve,gd=class{groundAt;speed;object=new N;onLand=null;fallers=[];chunks=[];chunkMesh;matrix=new lt;rock=new z(`#9a958a`);white=new z(`#ece6da`);red=new z(`#b8372d`);gravity=dd;constructor(e,t=()=>1){this.groundAt=e,this.speed=t;let n=new Ie(1,0);this.chunkMesh=new Bt(n,new Je({roughness:1,flatShading:!0}),fd);for(let e=0;e<fd;e++)this.chunkMesh.setColorAt(e,this.rock);this.chunkMesh.count=0,this.chunkMesh.frustumCulled=!1,this.chunkMesh.castShadow=!0,this.object.add(this.chunkMesh)}drop(e,t){this.object.add(e.object);let n=new L(t.x,0,t.z);n.lengthSq()<1e-6&&n.set(1,0,0),n.normalize();let r=e.length<=0;this.fallers.push({piece:e,axis:new L().crossVectors(pd,n).normalize(),angle:.04,spin:r?(Math.random()-.5)*2:.35,velocity:r?n.clone().multiplyScalar(Math.random()*2).setY(-1):new L,free:r,age:0,rest:null,water:!1})}clear(){for(let e of this.fallers)this.remove(e.piece.object);this.fallers.length=0,this.chunks.length=0,this.chunkMesh.count=0}update(e){this.gravity=dd*this.speed()**2;for(let t=this.fallers.length-1;t>=0;t--){let n=this.fallers[t];if(n.age+=e,!(n.rest===null&&this.move(n,e))){if(n.piece.kind===`palm`){if(n.rest===null&&this.lieDown(n),this.settle(n,e))continue}else this.shatter(n);this.remove(n.piece.object),this.fallers.splice(t,1)}}this.updateChunks(e)}move(e,t){let n=e.piece.object;if(e.free){e.velocity.y-=this.gravity*t,n.position.addScaledVector(e.velocity,t),n.quaternion.premultiply(hd.setFromAxisAngle(e.axis,e.spin*t));let r=Math.max(0,this.groundAt(n.position.x,n.position.z));return n.position.y>r+.5&&e.age<8}let r=Math.max(1,e.piece.length);e.spin+=1.5*this.gravity/r*Math.sin(e.angle)*t,e.angle+=e.spin*t,n.quaternion.setFromAxisAngle(e.axis,e.angle);for(let e of[r,r/2]){let t=n.localToWorld(md.set(0,e,0));if(t.y<=Math.max(0,this.groundAt(t.x,t.z))+.3)return!1}return e.angle<1.9&&e.age<8}lieDown(e){let t=e.piece.object;t.updateMatrixWorld(!0);let n=t.localToWorld(new L(0,e.piece.length/2,0)),r=this.groundAt(n.x,n.z);e.rest=0,e.water=r<.2,this.onLand?.({point:n.setY(Math.max(0,r)),size:e.piece.length,water:e.water,kind:`palm`})}settle(e,t){let n=e.rest=(e.rest??0)+t,r=e.piece.object;if(e.water)return r.position.y-=t*1.2,n<3;let i=Math.max(0,this.groundAt(r.position.x,r.position.z))+.25,a=Math.sqrt(this.gravity/dd);r.position.y>i&&(r.position.y=Math.max(i,r.position.y-t*9*a));let o=r.localToWorld(md.set(0,Math.max(1,e.piece.length),0));return e.angle<1.9&&o.y>Math.max(0,this.groundAt(o.x,o.z))+.4&&(e.angle+=t*2.5*a,r.quaternion.setFromAxisAngle(e.axis,e.angle)),n>6&&(r.position.y-=t*.5),n<9}shatter(e){let t=e.piece.object;t.updateMatrixWorld(!0);let n=Math.max(2,e.piece.length||4),r=Math.min(14,4+Math.round(n*.7));for(let i=0;i<r;i++){let a=e.piece.length>0?n*(i+Math.random())/r:(Math.random()-.5)*3,o=t.localToWorld(new L((Math.random()-.5)*1.5,a,(Math.random()-.5)*1.5));this.spawnChunk(o,e.piece.kind,Math.min(1.6,.5+n*.06)*(.6+Math.random()*.6))}let i=t.localToWorld(new L(0,e.piece.length>0?n/2:0,0)),a=this.groundAt(i.x,i.z);this.onLand?.({point:i.setY(Math.max(0,a)),size:n,water:a<.2,kind:e.piece.kind})}spawnChunk(e,t,n){this.chunks.length>=fd&&this.chunks.shift();let r={position:e,velocity:new L((Math.random()-.5)*9,3+Math.random()*6,(Math.random()-.5)*9),rotation:new je(Math.random()*6,Math.random()*6,Math.random()*6),spin:new L((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8),scale:n,bounced:!1,age:0};this.chunks.push(r);let i=t===`rock`?this.rock:Math.random()<.6?this.white:this.red;this.chunkMesh.setColorAt(this.chunks.length-1,i),this.chunkMesh.instanceColor&&(this.chunkMesh.instanceColor.needsUpdate=!0)}updateChunks(e){let t=0;for(let n=0;n<this.chunks.length;n++){let r=this.chunks[n];r.age+=e;let i=Math.max(0,this.groundAt(r.position.x,r.position.z));if((!r.bounced||r.position.y>i-.1)&&(r.velocity.y-=this.gravity*e,r.position.addScaledVector(r.velocity,e),r.rotation.x+=r.spin.x*e,r.rotation.y+=r.spin.y*e,r.rotation.z+=r.spin.z*e,r.position.y<i&&!r.bounced&&(r.bounced=!0,r.position.y=i,r.velocity.multiplyScalar(.3).setY(Math.abs(r.velocity.y)*.25),r.spin.multiplyScalar(.3))),r.bounced&&r.age>2.2&&(r.position.y-=e*.6),!(r.age>4.5||r.bounced&&r.position.y<i-r.scale*1.2)){if(this.matrix.compose(r.position,hd.setFromEuler(r.rotation),md.setScalar(r.scale)),this.chunkMesh.setMatrixAt(t,this.matrix),t!==n){this.chunks[t]=r;let e=new z;this.chunkMesh.getColorAt(n,e),this.chunkMesh.setColorAt(t,e)}t++}}this.chunks.length=t,this.chunkMesh.count=t,this.chunkMesh.instanceMatrix.needsUpdate=!0,this.chunkMesh.instanceColor&&(this.chunkMesh.instanceColor.needsUpdate=!0)}remove(e){e.removeFromParent(),e.traverse(e=>{let t=e;t.geometry?.dispose();for(let e of t.material?Array.isArray(t.material)?t.material:[t.material]:[])e.dispose()})}},_d=.45,vd=new z(`#77736d`),yd=jt.degToRad(4),bd=6,xd=.7,Sd=14,Cd=16,wd=new L(0,1,0),Td=new L(1,0,0),Ed=new L(0,0,1),Dd=new L,Od=new ve,kd=new nn,Ad=class{side;root=new N;topHeight;onCrewSplash=null;onDebrisSplash=null;config;galleon;cannons=[];levels=[];crew=[];falling=[];beam;hullMaterials=[];angle=0;yaw=0;flash=0;time=0;flooding={side:0,end:0,total:0};list=new L;listTarget=new L;listQuaternion=new ve;levelQuaternion=new ve;rock=0;rockVelocity=0;windAngle=0;windStrength=0;sinking=null;rockQuaternion=new ve;sinkQuaternion=new ve;normal=new L;tilt=new ve;heading=new ve;constructor(e,t){this.side=e,this.config=t;let n=Qe[e],r=jd(t);this.galleon=He(n,t.ship.deckHeight,t.gunners,r,t.ship.model),this.topHeight=Vt(bt(t.ship.model),t.ship.deckHeight),this.beam=bt(t.ship.model).beam,this.galleon.root.traverse(e=>{if(e instanceof W){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e instanceof Je&&!this.hullMaterials.includes(e)&&(e.userData.baseEmissive=e.emissive.clone(),this.hullMaterials.push(e))}}),this.root.add(this.galleon.root),t.gunners.forEach((r,i)=>{let a=Tt(t.cannonMount),o=new N;o.position.copy(Nd(Ga(r,t.ship,t.cannonMount))),o.add(a.yaw),this.root.add(o),this.levels.push(o),this.cannons.push({...a,colors:a.materials.map(e=>e.color.clone()),recoil:1,tremble:0});let s=Rt(n.shirt,n.trim,i+ +(e===`enemy`),t.crew.height),c=new L(r.x,t.ship.deckHeight,t.crew.standZ-.25);s.root.position.copy(c),this.root.add(s.root),this.crew.push({...s,alive:!0,fall:0,flying:null,gone:!1,wantVisible:!0,home:c})});for(let e of r){let n=Tt(t.cannonMount);n.yaw.position.copy(Nd(Ga({id:``,name:``,cannon:``,x:e},t.ship,t.cannonMount))),n.pitch.rotation.x=-yd,n.yaw.traverse(e=>e.castShadow=!1),this.root.add(n.yaw)}}get ringAngle(){return this.angle}get isSinking(){return this.sinking!==null}setAngle(e){this.angle=e;let t=za(e,this.config.arena.orbitRadius).forward;this.yaw=Math.atan2(-t.z,t.x)}setWind(e,t){this.windAngle=e,this.windStrength=t}setAim(e,t){let n=this.cannons[e];n.yaw.rotation.y=t.yaw,n.pitch.rotation.x=-t.pitch,this.crew[e].flying||(this.crew[e].root.rotation.y=t.yaw*.8)}setTremble(e,t){this.cannons[e].tremble=t}setCrewAlive(e,t,n=!0,r){let i=this.crew[e],a=this.cannons[e];if(i.alive=t,i.fall=t?0:n?Math.min(i.fall,.999):1,i.flying=null,i.gone=!1,i.root.position.copy(i.home),i.root.rotation.set(0,0,0),i.root.visible=i.wantVisible,i.materials.forEach(e=>e.color.copy(e.userData.baseColor)),a.materials.forEach((e,t)=>e.color.copy(a.colors[t])),t||(i.materials.forEach(e=>e.color.lerp(vd,.35)),a.materials.forEach(e=>e.color.lerp(vd,.6))),!t&&!n&&(i.gone=!0,i.root.visible=!1),!t&&n&&r){this.root.updateMatrixWorld(!0);let e=this.root.worldToLocal(r.clone()),t=i.home.clone().sub(e).setY(0);t.lengthSq()<1e-4&&t.set(0,0,-1),t.normalize(),t.z>-.4&&(t.z=-.4),t.normalize(),i.flying=t.multiplyScalar(6.4).setY(7.5)}}setCrewVisible(e,t){let n=this.crew[e];n.wantVisible=t,n.root.visible=t&&!n.gone}setRiggingVisible(e){this.galleon.rigging.visible=e}flashHit(e=1){this.flash=1,this.rockVelocity-=.26*e}recoil(e){this.cannons[e].recoil=0,this.cannons[e].tremble=0,this.rockVelocity+=.06}breakMast(e,t,n){let r=this.galleon.breakMast(e,t);if(!r)return null;let i=new L(n.x,0,n.z);return i.lengthSq()>1e-6&&i.normalize().multiplyScalar(.6),--i.z,i.normalize(),this.falling.push({piece:r,origin:r.object.position.clone(),toward:i,axis:new L().crossVectors(wd,i).normalize(),slide:Math.max(r.length/2,this.beam+.8),angle:.05,spin:.45,velocity:null,worldAxis:new L,splashed:!1,age:0}),this.root.updateMatrixWorld(!0),r.object.getWorldPosition(new L)}addHole(e,t,n){this.root.updateMatrixWorld(!0);let r=t.clone().normalize(),i=this.findHull(e.clone().addScaledVector(r,-3),r,8)??this.findHull(e,new L(0,e.y>this.config.ship.deckHeight+.5?-1:0,-Math.sign(e.z)||-1).normalize(),6)??this.galleon.nearestHull(e);return this.galleon.addHole(i.point,i.normal,n,this.config.presentation.maxHoleSize)}takeOnWater(e,t){let{ship:n,presentation:r}=this.config,i=bt(n.model),a=t*(1-.5*jt.smoothstep(e.y,n.deckHeight-.5,n.deckHeight+1.5)),o=(i.bow-i.stern)/2;this.flooding.side+=a*jt.clamp(e.z/i.beam,-1,1),this.flooding.end+=a*jt.clamp((e.x-(i.bow+i.stern)/2)/o,-1,1),this.flooding.total+=a;let s=Math.max(1e-6,n.hp);this.listTarget.set(jt.degToRad(r.listMaxDeg)*jt.clamp(this.flooding.side/(.5*s),-1,1),-jt.degToRad(r.trimMaxDeg)*jt.clamp(this.flooding.end/(.5*s),-1,1),r.listSink*jt.clamp(this.flooding.total/s,0,1))}tearSail(e,t,n,r,i){let a=this.galleon.sails.findIndex(n=>n.mast===e&&n.sail===t);if(a<0)return null;let o=this.galleon.sails[a].mesh;this.root.updateMatrixWorld(!0);let s=r.clone().normalize();kd.set(n.clone().addScaledVector(s,-4),s),kd.far=8;let[c]=kd.intersectObject(o,!1),l,u;if(c?.face)l=o.worldToLocal(c.point.clone()),u=c.face.normal.clone();else{let e=o.geometry.getAttribute(`position`),t=o.geometry.getAttribute(`normal`),r=o.worldToLocal(n.clone()),i=0,a=1/0;for(let t=0;t<e.count;t++){let n=Dd.fromBufferAttribute(e,t).distanceToSquared(r);n<a&&(a=n,i=t)}l=new L().fromBufferAttribute(e,i),u=new L().fromBufferAttribute(t,i)}return this.galleon.tearSail(a,l,u,i),o.localToWorld(l.clone())}settleList(){this.list.copy(this.listTarget)}findHull(e,t,n){kd.set(this.root.localToWorld(e.clone()),t.clone().transformDirection(this.root.matrixWorld)),kd.far=n;let[r]=kd.intersectObjects([...this.galleon.hullMeshes],!1);if(!r)return null;let i=r.face?r.face.normal.clone().transformDirection(r.object.matrixWorld):t.clone().negate(),a=new lt().copy(this.root.matrixWorld).invert();return{point:this.root.worldToLocal(r.point.clone()),normal:i.transformDirection(a)}}sink(){this.sinking===null&&(this.sinking=0)}reset(){this.sinking=null,this.rock=0,this.rockVelocity=0,this.flash=0;for(let e of this.falling)e.piece.object.removeFromParent(),e.piece.dispose();this.falling.length=0,this.galleon.restoreMasts(),this.galleon.clearHoles(),this.galleon.clearTears(),this.flooding.side=this.flooding.end=this.flooding.total=0,this.list.set(0,0,0),this.listTarget.set(0,0,0)}muzzleWorld(e,t,n){let r=this.cannons[e].pitch;r.updateWorldMatrix(!0,!1),t.set(0,0,this.config.cannonMount.barrelLength).applyMatrix4(r.matrixWorld),n.set(0,0,1).transformDirection(r.matrixWorld)}fuseWorld(e,t){return this.cannons[e].fuse.getWorldPosition(t)}pivotWorld(e,t){return this.cannons[e].yaw.getWorldPosition(t)}visualOffset(e,t){let n=this.config.gunners[e],r=Nd(Va(za(this.angle,this.config.arena.orbitRadius),Ga(n,this.config.ship,this.config.cannonMount)));return this.pivotWorld(e,t).sub(r)}update(e,t){this.time+=e;let n=za(this.angle,this.config.arena.orbitRadius),{position:r}=n,i=t.sample(r.x,r.z,this.normal);this.list.lerp(this.listTarget,1-Math.exp(-e/xd)),this.root.position.set(r.x,i*_d-this.list.z,r.z),this.normal.lerp(wd,.65).normalize(),this.tilt.setFromUnitVectors(wd,this.normal),this.heading.setFromAxisAngle(wd,this.yaw),this.rockVelocity+=(-this.rock*30-this.rockVelocity*4)*e,this.rock+=this.rockVelocity*e,this.rockQuaternion.setFromAxisAngle(Td,this.rock),this.listQuaternion.setFromAxisAngle(Td,this.list.x).multiply(Od.setFromAxisAngle(Ed,this.list.y)),this.root.quaternion.multiplyQuaternions(this.tilt,this.heading).multiply(this.rockQuaternion).multiply(this.listQuaternion),this.levelQuaternion.copy(this.listQuaternion).invert();for(let e of this.levels)e.quaternion.copy(this.levelQuaternion);if(this.sinking!==null){this.sinking+=e;let t=Math.min(1,this.sinking/bd),n=t**1.6;this.sinkQuaternion.setFromAxisAngle(Td,-.35*Math.min(1,t*3)),this.root.quaternion.multiply(this.sinkQuaternion),this.sinkQuaternion.setFromAxisAngle(Ed,.42*n),this.root.quaternion.multiply(this.sinkQuaternion),this.root.position.y-=26*n+.6*Math.sin(this.time*2)*(1-t)}this.root.updateMatrixWorld(!0),this.galleon.updateHoles();for(let t=this.falling.length-1;t>=0;t--){let n=this.falling[t];this.updateFalling(n,e)||(n.piece.object.removeFromParent(),n.piece.dispose(),this.falling.splice(t,1))}let a=Math.atan2(Math.cos(this.windAngle)*n.starboard.x+Math.sin(this.windAngle)*n.starboard.z,Math.cos(this.windAngle)*n.forward.x+Math.sin(this.windAngle)*n.forward.z);if(this.galleon.update(this.time,a,this.windStrength),this.flash>0){this.flash=Math.max(0,this.flash-e*2.5);let t=this.flash;for(let e of this.hullMaterials)e.emissive.copy(e.userData.baseEmissive),e.emissive.r+=.9*t,e.emissive.g+=.15*t,e.emissive.b+=.05*t}for(let t of this.cannons){let n=0;if(t.recoil<1){t.recoil=Math.min(1,t.recoil+e/.75);let r=t.recoil;n=-.6*(r<.1?r/.1:1-Md((r-.1)/.9))}let r=t.tremble*t.tremble*.012;t.pitch.position.set(r*Math.sin(this.time*91),r*Math.sin(this.time*77+1),n+r*Math.sin(this.time*63+2))}for(let t of this.crew){if(t.flying){let n=t.flying;n.y-=18*e,t.root.position.addScaledVector(n,e),t.root.rotation.x+=e*9,t.root.rotation.z+=e*5,t.root.position.y<-.4&&(t.flying=null,t.gone=!0,t.root.visible=!1,this.onCrewSplash?.(t.root.getWorldPosition(Dd).setY(0)));continue}if(t.alive||t.fall>=1||t.gone)continue;t.fall=Math.min(1,t.fall+e*2);let n=t.fall;t.root.rotation.z=-(Math.PI/2)*n*n}}updateFalling(e,t){e.age+=t;let n=e.piece.object,r=Math.max(1,e.piece.length),i=this.config.presentation.fallSpeed**2;if(!e.velocity)return e.spin+=1.5*Sd*i/r*Math.sin(e.angle)*t,e.angle+=e.spin*t,n.quaternion.setFromAxisAngle(e.axis,e.angle),n.position.copy(e.origin).addScaledVector(e.toward,e.slide*(1-Math.cos(Math.min(e.angle,Math.PI/2)))),e.angle<1.5||(e.velocity=e.toward.clone().multiplyScalar(2).addScaledVector(wd,-e.spin*r*.4).applyQuaternion(this.root.quaternion),e.worldAxis.copy(e.axis).applyQuaternion(this.root.quaternion),e.spin*=.5,this.root.parent?.attach(n),!0);e.velocity.y-=(e.splashed?2:Cd*i)*t,e.splashed&&(e.velocity.multiplyScalar(Math.exp(-t*3)),e.velocity.y=Math.max(e.velocity.y,-1.6)),n.position.addScaledVector(e.velocity,t),e.spin*=Math.exp(-t*(e.splashed?3:.5)),n.quaternion.premultiply(Od.setFromAxisAngle(e.worldAxis,e.spin*t));let a=n.localToWorld(Dd.set(0,r/2,0));return!e.splashed&&a.y<.4&&(e.splashed=!0,this.onDebrisSplash?.(a.clone().setY(0),Math.min(1.6,.55+r/12)),e.velocity.multiplyScalar(.2)),a.y>-(r/2+2)&&e.age<14}};function jd(e){let t=e.gunners.map(e=>e.x).sort((e,t)=>e-t),n=[];for(let e=1;e<t.length;e++)t[e]-t[e-1]>4&&n.push((t[e]+t[e-1])/2);return n}var Md=e=>1-(1-e)*(1-e),Nd=e=>new L(e.x,e.y,e.z),Pd=70,Fd=`
  uniform vec3 uDir;
  attribute vec3 offset;
  attribute vec2 params; // length, alpha
  varying vec2 vUv;
  varying float vAlpha;
  void main() {
    vUv = uv;
    vec3 toCamera = cameraPosition - offset;
    float distance = length(toCamera);
    vec3 side = normalize(cross(uDir, toCamera / distance));
    // About the same thickness on screen at any distance.
    float width = 0.0042 * distance;
    vec3 p = offset + uDir * (position.x * params.x) + side * (position.y * width);
    vAlpha = params.y * smoothstep(3.0, 9.0, distance);
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  }
`,Id=`
  varying vec2 vUv;
  varying float vAlpha;
  void main() {
    float across = 1.0 - abs(vUv.y * 2.0 - 1.0);
    float along = sin(3.14159 * vUv.x);
    gl_FragColor = vec4(1.0, 1.0, 1.0, vAlpha * across * along * along);
    #include <colorspace_fragment>
  }
`,Ld=class{mesh;streaks=[];offsets=new Float32Array(210);params=new Float32Array(140);geometry=new nt;direction=new L(1,0,0);speed=0;strength=0;spawnClock=0;forward=new L;constructor(){let e=new yt(1,1);this.geometry.index=e.index,this.geometry.setAttribute(`position`,e.attributes.position),this.geometry.setAttribute(`uv`,e.attributes.uv),this.geometry.setAttribute(`offset`,new _(this.offsets,3).setUsage(C)),this.geometry.setAttribute(`params`,new _(this.params,2).setUsage(C)),this.geometry.instanceCount=0;let t=new P({uniforms:{uDir:{value:this.direction}},vertexShader:Fd,fragmentShader:Id,transparent:!0,depthWrite:!1,side:2});this.mesh=new W(this.geometry,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=4;for(let e=0;e<Pd;e++)this.streaks.push({alive:!1,position:new L,age:0,life:1,length:1})}setWind(e,t,n){this.direction.set(Math.cos(e),0,Math.sin(e)),this.strength=n>0?Math.min(1,t/n):0,this.speed=4+t*1.1}clear(){for(let e of this.streaks)e.alive=!1}update(e,t){let n=this.strength<.08?0:3+26*this.strength*this.strength;for(this.spawnClock+=e*n,t.getWorldDirection(this.forward),this.forward.y=0,this.forward.lengthSq()<1e-6&&this.forward.set(0,0,-1),this.forward.normalize();this.spawnClock>=1;){--this.spawnClock;let e=this.streaks.find(e=>!e.alive);if(!e)break;let n=8+Math.random()*40,r=(Math.random()-.5)*1.6*n;e.position.copy(t.position).addScaledVector(this.forward,n).add(new L(-this.forward.z*r,0,this.forward.x*r)).addScaledVector(this.direction,-this.speed*.6),e.position.y=.6+Math.random()*Math.max(2,t.position.y*.9),e.alive=!0,e.age=0,e.life=1.1+Math.random()*1.1,e.length=(2+Math.random()*3)*(.6+this.strength)}let r=0;for(let t of this.streaks){if(!t.alive)continue;if(t.age+=e,t.age>=t.life){t.alive=!1;continue}t.position.addScaledVector(this.direction,this.speed*e);let n=t.age/t.life;this.offsets[r*3]=t.position.x,this.offsets[r*3+1]=t.position.y,this.offsets[r*3+2]=t.position.z,this.params[r*2]=t.length,this.params[r*2+1]=.55*Math.sin(Math.PI*n)*(.5+.5*this.strength),r++}this.geometry.instanceCount=r,this.geometry.attributes.offset.needsUpdate=!0,this.geometry.attributes.params.needsUpdate=!0}};function Rd(e,t,n){let r=new N,i=[];for(let n=0;n<=64;n++){let r=fn(e.min+(e.max-e.min)*n/64,t);i.push(new L(r.x,2.2,r.z))}let a=new Ot(new Ge().setFromPoints(i),new Lt({color:n,dashSize:3,gapSize:2.5,transparent:!0,opacity:.85}));a.computeLineDistances(),r.add(a);let o=new Je({color:n,roughness:.6}),s=new Je({color:`#ffffff`,roughness:.6}),c=new Je({color:`#ffe48a`,emissive:`#ffcf40`,emissiveIntensity:.8});return{object:r,buoys:[e.min,e.max].map(e=>{let n=new N,i=new W(new he(.7,1,2,12),o);i.position.y=.6;let a=new W(new he(.74,.86,.5,12),s);a.position.y=.9;let l=new W(new Ce(.35,12,8),c);l.position.y=1.9,n.add(i,a,l);let u=fn(e,t);return n.position.set(u.x,0,u.z),r.add(n),n})}}var zd=new L(.62,.72,.3).normalize(),Bd=24,Vd=class{renderer;scene=new pt;camera=new te(55,1,.3,4e3);water;ships;projectiles=new ud;indicator=new wu;effects=new Ru;windStreaks=new Ld;powerUps=new Ks;rubble=new gd((e,t)=>this.island.heightAt(e,t),()=>this.config.presentation.fallSpeed);config;cloudWind=new L;sky;clouds;sun;floaters=[];island;zoneMarkers=[];hullMask=new sd;normal=new L;width=1;height=1;quality=`high`;constructor(e,t){this.config=e,this.renderer=new Ma({antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=7,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,t.appendChild(this.renderer.domElement),this.scene.environment=Hu(this.renderer,zd),this.scene.environmentIntensity=.75,this.scene.add(new Me(`#d2efff`,`#2c7d8a`,.55)),this.sun=new on(`#fff0d0`,2.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);let n=this.sun.shadow.camera;n.left=-24,n.right=Bd,n.top=Bd,n.bottom=-24,n.near=1,n.far=160,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.04,this.scene.add(this.sun,this.sun.target);let r=new on(`#9fd3ff`,1.1);r.position.set(-zd.x,.35,-zd.z).multiplyScalar(100),this.scene.add(r),this.sky=Vu(zd),this.clouds=ku(),this.water=ad(e.arena,zd),this.scene.add(this.sky,this.clouds.object,this.water.object),this.ships={player:new Ad(`player`,e),enemy:new Ad(`enemy`,e)},this.buildArena(),this.scene.add(this.projectiles.object,this.indicator.object,this.effects.object,this.windStreaks.mesh,this.powerUps.object,this.rubble.object)}buildArena(){let{arena:e}=this.config;this.island=Nt(e),this.scene.add(this.island.object),this.water.setArena(e),this.floaters=[],this.hullMask.setLines(Dt(this.config.ship.model,33)),this.zoneMarkers=m.map(t=>{let n=Rd(un(t,e),e.orbitRadius,Qe[t].sail);return this.floaters.push(...n.buoys),this.hullMask.apply(n.object),n.object}),this.scene.add(...this.zoneMarkers);for(let e of m)this.scene.add(this.ships[e].root);let t=this.config.ship.hull,n=Math.min(...t.map(e=>e.center.x-e.halfSize.x)),r=Math.max(...t.map(e=>e.center.x+e.halfSize.x)),i=Math.max(...t.map(e=>e.halfSize.z));this.water.setHullShape((n+r)/2+.2,(r-n)/2+.3,i+.15),this.water.setHullLines(Dt(this.config.ship.model,33))}rebuildArena(){this.rubble.clear();for(let e of[this.island.object,...this.zoneMarkers,...m.map(e=>this.ships[e].root)])this.scene.remove(e),Hd(e);for(let e of m)this.ships[e]=new Ad(e,this.config);this.buildArena()}setWind(e,t){let n=this.config.wind.maxKnots>0?Math.min(1,t/this.config.wind.maxKnots):0;this.effects.setWind(e,t),this.windStreaks.setWind(e,t,this.config.wind.maxKnots);for(let t of m)this.ships[t].setWind(e,n);this.cloudWind.set(Math.cos(e),0,Math.sin(e)).multiplyScalar(t*.4)}get viewportWidth(){return this.width}get viewportHeight(){return this.height}get canvas(){return this.renderer.domElement}get currentQuality(){return this.quality}setQuality(e){if(e===this.quality)return;this.quality=e;let t=e===`low`;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,t?1.5:2)),this.sun.castShadow=!t,this.water.setDetail(t?120:210),this.resize()}resize(){let e=window.visualViewport;this.width=Math.round(e?.width??window.innerWidth),this.height=Math.round(e?.height??window.innerHeight),this.renderer.setSize(this.width,this.height,!1),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}get bufferHeight(){return this.renderer.domElement.height}update(e,t){this.water.update(t),m.forEach((t,n)=>{let r=this.ships[t];r.update(e,this.water);let i=za(r.ringAngle,this.config.arena.orbitRadius);this.water.setHull(n,i.position.x,i.position.z,i.forward.x,i.forward.z),this.water.setHullFrame(n,r.root.matrixWorld,!r.isSinking),this.hullMask.setFrame(n,r.root.matrixWorld)});for(let e of this.floaters)e.position.y=this.water.sample(e.position.x,e.position.z,this.normal),e.quaternion.setFromUnitVectors(ke.DEFAULT_UP,this.normal);this.clouds.update(e,this.cloudWind),this.effects.update(e),this.rubble.update(e),this.windStreaks.update(e,this.camera),this.followShadows()}render(){this.sky.position.copy(this.camera.position),this.renderer.render(this.scene,this.camera)}reset(){this.projectiles.hide(),this.indicator.hide(),this.indicator.setLastImpact(null),this.windStreaks.clear();for(let e of m)this.ships[e].reset();this.rubble.clear(),this.island.reset()}followShadows(){let e=this.ships.player.root.position,t=this.ships.enemy.root.position,n=this.camera.position.distanceToSquared(e)<this.camera.position.distanceToSquared(t)?e:t;this.sun.target.position.copy(n),this.sun.position.copy(n).addScaledVector(zd,80)}};function Hd(e){let t=new Set;e.traverse(e=>{let n=e;n.geometry?.dispose();let r=n.material?Array.isArray(n.material)?n.material:[n.material]:[];for(let e of r){for(let n of Object.values(e))n instanceof me&&t.add(n);e.dispose()}});for(let e of t)e.dispose()}var Ud=`ship-combat.install-tip.v1`,Wd=2;function Gd(e){let t=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1,n=navigator.standalone===!0||matchMedia(`(display-mode: standalone)`).matches;if(!t||n)return;let r=0;try{if(r=Number(localStorage.getItem(Ud)??0),r>=Wd)return;localStorage.setItem(Ud,String(r+1))}catch{}window.setTimeout(()=>e.toast(`Tip: Share → Add to Home Screen to play fullscreen`,5,`info`),6500)}var Kd=new L,qd=class{floating=[];markers=new Map;layer;camera;constructor(e,t){this.layer=e,this.camera=t}addFloating(e,t,n,r=1.3,i=5){let a=Y(`div`,{class:`world-label ${n}`,text:t});this.layer.append(a),this.floating.push({el:a,position:e.clone(),age:0,life:r,rise:i})}setMarker(e,t,n=``,r=`enemy-marker`,i=!0){let a=this.markers.get(e);if(!a){let t=Y(`div`,{class:`world-label ${r}`});this.layer.append(t),a={el:t,position:new L,visible:!1,clamp:i},this.markers.set(e,a)}a.visible=t!==null,t&&a.position.copy(t),a.el.textContent!==n&&(a.el.textContent=n),a.el.style.display=a.visible?``:`none`}clearFloating(){for(let e of this.floating)e.el.remove();this.floating.length=0}update(e,t,n){for(let r=this.floating.length-1;r>=0;r--){let i=this.floating[r];i.age+=e;let a=i.age/i.life;if(a>=1){i.el.remove(),this.floating.splice(r,1);continue}Kd.copy(i.position),Kd.y+=i.rise*(1-(1-a)*(1-a));let o=this.project(Kd,t,n);if(i.el.style.display=o?``:`none`,!o)continue;let s=a<.15?.6+a/.15*.6:1.2-Math.min(.2,(a-.15)*.6);i.el.style.transform=`translate(${Kd.x}px, ${Kd.y}px) translate(-50%, -50%) scale(${s})`,i.el.style.opacity=String(a>.7?1-(a-.7)/.3:1)}for(let e of this.markers.values()){if(!e.visible)continue;Kd.copy(e.position);let r=this.project(Kd,t,n),{x:i,y:a}=Kd;if(!r){if(!e.clamp){e.el.style.display=`none`;continue}i=t-i,a=n-24}e.el.style.display=``,e.clamp&&(i=Math.min(t-30,Math.max(30,i)),a=Math.min(n-30,Math.max(70,a))),e.el.style.transform=`translate(${i}px, ${a}px) translate(-50%, -50%)`}}project(e,t,n){e.project(this.camera);let r=e.z<1;return e.set((e.x+1)/2*t,(1-e.y)/2*n,e.z),r}},Jd=`M8 · 9103280`,Yd=new URLSearchParams(location.search).has(`debug`),Xd=Yd?await f(()=>import(`./tuningPanel-C1U5-5fg.js`),__vite__mapDeps([0,1]),import.meta.url):null;i(),sf();var Zd=new Vd(g,document.getElementById(`app`)),Qd=new fu(Zd.canvas),$d=Jc(),ef=new ln($d.sound),tf=new cu,nf=!1,rf=null,af=new wl({input:Qd,settings:$d,buildLabel:Jd,onSettingsChange:e=>{$d=e,Yc(e),ef.setEnabled(e.sound),cf(e),rf&&(rf.settings=e)},onRestart:e=>{e===`rebuild`&&(sf()&&af.toast(`Ships moved out to ${Math.round(g.arena.orbitRadius*2)} m apart to clear the island`,2.6,`info`),Zd.rebuildArena()),rf?.newMatch({newOpponent:!1})},onRematch:()=>rf?.newMatch({newOpponent:!1}),onNewOpponent:()=>rf?.newMatch({newOpponent:!0})}),of=new qd(af.labels,Zd.camera);rf=new Zl({config:g,world:Zd,input:Qd,hud:af,labels:of,settings:$d,sfx:ef,build:Jd});function sf(){let e=hn(g.arena);return g.arena.orbitRadius>=e?!1:(g.arena.orbitRadius=Math.ceil(e),c(),!0)}function cf(e){let t=e.graphics===`auto`?nf?`low`:`high`:e.graphics;Zd.setQuality(t),af.settingsPanel.setQualityNote(e.graphics===`auto`?`Auto is using ${t===`high`?`High`:`Low`} on this device.`:``)}cf($d);var lf=()=>{Zd.resize(),af.resize(Zd.viewportHeight)};window.addEventListener(`resize`,lf),window.visualViewport?.addEventListener(`resize`,lf),lf(),rf.newMatch({newOpponent:!0}),Gd(af);var uf=Yd?ff():null,df=performance.now();Zd.renderer.setAnimationLoop(e=>{let t=Math.max(0,(e-df)/1e3);df=e,!document.hidden&&t<.5&&tf.update(t)&&$d.graphics===`auto`&&!nf&&(nf=!0,cf($d),af.toast(`Switched to Low graphics for a smoother game`,2.5,`info`)),rf.update(Math.min(.05,t),e/1e3),uf?.(tf.fps)}),Xd?.mountTuningPanel(g,rf,()=>Zd.rebuildArena()),Object.assign(window,{game:rf});function ff(){let e=document.createElement(`div`);e.style.cssText=`position:fixed;left:max(8px,env(safe-area-inset-left));bottom:4px;z-index:60;font:600 10px system-ui;color:#fff;background:rgb(0 0 0/45%);padding:2px 6px;border-radius:6px;pointer-events:none`,document.body.appendChild(e);let t=0;return n=>{if(performance.now()-t<500)return;t=performance.now();let r=Zd.renderer.info.render;e.textContent=`${n.toFixed(0)} fps · ${r.calls} calls · ${(r.triangles/1e3).toFixed(0)}k tris · ${Zd.currentQuality}`}}