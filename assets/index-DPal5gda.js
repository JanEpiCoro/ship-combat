const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./tuningPanel-fVFkHRCk.js","./preload-helper-BHwh6zwc.js"])))=>i.map(i=>d[i]);
import{_ as e,b as t,c as n,d as r,f as i,g as a,h as o,l as s,m as c,n as l,p as u,s as d,t as f,u as p,v as m,x as h,y as g}from"./preload-helper-BHwh6zwc.js";import{$ as _,$n as v,A as y,An as b,Ar as x,At as S,B as C,Bn as w,Br as T,Bt as E,C as D,Cr as O,Ct as k,D as ee,Dn as A,Dr as te,Dt as ne,E as re,Er as ie,Et as ae,F as oe,Fn as j,Fr as M,Ft as se,G as ce,Gn as le,Gr as ue,H as de,Hn as fe,Hr as pe,Ht as me,I as he,Ir as ge,It as _e,J as ve,Jn as ye,Jr as N,K as be,Kr as xe,Kt as Se,L as P,Lr as Ce,Lt as we,Mn as Te,Mr as Ee,Mt as De,N as Oe,Nn as F,Nr as ke,Nt as Ae,O as je,On as Me,Or as I,Ot as Ne,P as L,Pn as R,Pr as Pe,Pt as Fe,Q as Ie,Qn as Le,R as Re,Rr as ze,Rt as Be,S as Ve,Sr as He,St as z,Tr as Ue,Tt as B,U as We,Un as Ge,Ur as Ke,V as qe,Vn as Je,Vr as Ye,Vt as Xe,W as Ze,Wn as Qe,Wr as $e,Wt as et,X as tt,Xn as nt,Xt as rt,Y as it,Yn as at,Z as ot,Zt as st,_ as ct,_r as lt,_t as ut,a as dt,ar as ft,br as pt,bt as mt,c as ht,cr as gt,ct as _t,d as vt,dr as yt,er as bt,f as xt,fr as V,ft as St,g as Ct,gr as wt,gt as Tt,h as Et,hr as Dt,ht as Ot,i as kt,it as At,j as jt,jn as Mt,jr as Nt,jt as Pt,k as Ft,kn as It,kr as Lt,kt as Rt,l as zt,lr as Bt,m as Vt,mr as Ht,mt as Ut,n as Wt,nr as Gt,nt as Kt,o as qt,ot as Jt,p as Yt,pr as Xt,pt as Zt,q as Qt,qn as $t,qr as en,r as tn,rr as nn,rt as rn,s as an,sr as on,st as sn,t as cn,tr as ln,tt as H,u as un,ur as dn,v as fn,vr as pn,vt as mn,w as hn,wr as gn,wt as _n,x as vn,xr as yn,xt as bn,y as xn,yr as Sn,yt as Cn,z as wn,zr as Tn,zt as En}from"./cannonModel-D-VwGAvP.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var Dn=class{ctx=null;master=null;noise=null;charge=null;windGain=null;windLevel=0;whistleNode=null;enabled;constructor(e){this.enabled=e;let t=()=>this.unlock();for(let e of[`pointerdown`,`touchend`,`keydown`])window.addEventListener(e,t,{capture:!0});document.addEventListener(`visibilitychange`,()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.enabled&&this.ctx.resume())})}get ready(){return this.ctx!==null&&this.ctx.state===`running`}setEnabled(e){this.enabled=e,this.ctx&&this.master&&(this.master.gain.setTargetAtTime(+!!e,this.ctx.currentTime,.05),e&&this.ctx.resume())}unlock(){if(!this.ctx){let e=window.AudioContext??window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=+!!this.enabled;let t=this.ctx.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=4,this.master.connect(t).connect(this.ctx.destination),this.noise=this.makeNoise(2);let n=this.ctx.createBufferSource();n.buffer=this.ctx.createBuffer(1,1,22050),n.connect(this.ctx.destination),n.start(),this.startAmbient()}this.ctx.state!==`running`&&this.enabled&&this.ctx.resume()}cannon(e,t={}){let n=this.output(t);if(!n)return;let{t:r,dest:i}=n,a=e===`heavy`,o=e===`scatter`;this.tone(i,{type:`sine`,from:a?95:120,to:38,at:r,attack:.004,decay:a?.65:.4,gain:a?1.1:.8}),this.noiseBurst(i,{type:`lowpass`,from:o?4200:2e3,to:260,q:.7,at:r,attack:.002,decay:a?1.3:.8,gain:a?.95:.7}),this.noiseBurst(i,{type:`highpass`,from:2400,to:1800,q:.5,at:r,attack:.001,decay:o?.12:.07,gain:o?.6:.35}),this.noiseBurst(i,{type:`lowpass`,from:220,to:120,q:.5,at:r+.05,attack:.15,decay:a?2.2:1.4,gain:.35})}splash(e=1,t={}){let n=this.output({...t,volume:(t.volume??1)*(.5+.5*e)});if(!n)return;let{t:r,dest:i}=n;this.tone(i,{type:`sine`,from:190,to:70,at:r,attack:.003,decay:.25,gain:.5}),this.noiseBurst(i,{type:`bandpass`,from:1300,to:500,q:.8,at:r,attack:.01,decay:.7,gain:.8}),this.noiseBurst(i,{type:`highpass`,from:3500,to:2500,q:.4,at:r+.08,attack:.08,decay:1.1,gain:.25})}woodHit(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.tone(r,{type:`sine`,from:130,to:55,at:n,attack:.003,decay:.35,gain:1}),this.noiseBurst(r,{type:`bandpass`,from:900,to:600,q:1.4,at:n,attack:.002,decay:.5,gain:.9});for(let e=0;e<7;e++)this.noiseBurst(r,{type:`bandpass`,from:2400+Math.random()*1600,to:1800,q:3,at:n+.03+Math.random()*.3,attack:.001,decay:.03+Math.random()*.04,gain:.5})}sailTear(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.noiseBurst(r,{type:`bandpass`,from:2600,to:1100,q:1.1,at:n,attack:.008,decay:.2,gain:.45});for(let e=0;e<9;e++)this.noiseBurst(r,{type:`bandpass`,from:1800+Math.random()*2600,to:1400,q:5,at:n+e*.017+Math.random()*.008,attack:.001,decay:.02,gain:.3})}rockHit(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.tone(r,{type:`sine`,from:80,to:40,at:n,attack:.003,decay:.4,gain:.9}),this.noiseBurst(r,{type:`lowpass`,from:900,to:300,q:.7,at:n,attack:.004,decay:.8,gain:.7});for(let e=0;e<6;e++)this.noiseBurst(r,{type:`bandpass`,from:1500+Math.random()*1500,to:1200,q:4,at:n+.1+Math.random()*.5,attack:.001,decay:.03,gain:.25})}whistle(e,t={}){this.whistleNode?.stop(0);let n=this.output({...t,volume:(t.volume??1)*.35});if(!n)return;let{ctx:r,t:i,dest:a}=n,o=r.createOscillator();o.type=`sine`;let s=i+Math.max(0,e-1.6);o.frequency.setValueAtTime(1500,s),o.frequency.exponentialRampToValueAtTime(620,i+e);let c=r.createGain();c.gain.setValueAtTime(1e-4,s),c.gain.exponentialRampToValueAtTime(.5,i+e-.05),c.gain.exponentialRampToValueAtTime(1e-4,i+e+.02),o.connect(c).connect(a),o.start(s),o.stop(i+e+.05),this.whistleNode={stop:()=>{try{c.gain.cancelScheduledValues(r.currentTime),c.gain.setTargetAtTime(1e-4,r.currentTime,.02),o.stop(r.currentTime+.1)}catch{}}}}stopWhistle(){this.whistleNode?.stop(0),this.whistleNode=null}misfire(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;for(let e=0;e<4;e++)this.noiseBurst(r,{type:`bandpass`,from:700,to:400,q:1.5,at:n+e*.09,attack:.002,decay:.06,gain:.6});this.noiseBurst(r,{type:`bandpass`,from:3e3,to:600,q:1,at:n+.3,attack:.05,decay:.7,gain:.35}),this.tone(r,{type:`sine`,from:70,to:45,at:n+.35,attack:.01,decay:.3,gain:.6})}setWind(e){this.windLevel=Math.max(0,Math.min(1,e)),this.ctx&&this.windGain&&this.windGain.gain.setTargetAtTime(.02+.2*this.windLevel**1.5,this.ctx.currentTime,.8)}overboard(e={}){let t=this.output({...e,volume:(e.volume??1)*.3});if(!t)return;let{ctx:n,t:r,dest:i}=t,a=n.createOscillator();a.type=`sine`,a.frequency.setValueAtTime(1500,r),a.frequency.exponentialRampToValueAtTime(320,r+.95);let o=n.createOscillator();o.frequency.value=9;let s=n.createGain();s.gain.value=22,o.connect(s).connect(a.frequency);let c=n.createGain();c.gain.setValueAtTime(1e-4,r),c.gain.exponentialRampToValueAtTime(.7,r+.05),c.gain.setValueAtTime(.7,r+.8),c.gain.exponentialRampToValueAtTime(1e-4,r+1),a.connect(c).connect(i),a.start(r),o.start(r),a.stop(r+1.05),o.stop(r+1.05)}kill(){let e=this.output({volume:.3});e&&[659,988,1319].forEach((t,n)=>this.bell(e.dest,t,e.t+n*.07,n===2?.9:.35))}thump(e={}){let t=this.output(e);t&&this.tone(t.dest,{type:`sine`,from:90,to:32,at:t.t,attack:.002,decay:.45,gain:1.2})}mastBreak(e={}){let t=this.output(e);if(!t)return;let{ctx:n,t:r,dest:i}=t;this.noiseBurst(i,{type:`highpass`,from:2400,to:900,q:.7,at:r,attack:.001,decay:.12,gain:1}),this.tone(i,{type:`sine`,from:110,to:45,at:r,attack:.002,decay:.3,gain:.8});for(let e=0;e<9;e++)this.noiseBurst(i,{type:`bandpass`,from:1800+Math.random()*1800,to:1300,q:3,at:r+.05+Math.random()*.5,attack:.001,decay:.03+Math.random()*.05,gain:.45});let a=r+.15,o=n.createOscillator();o.type=`sawtooth`,o.frequency.setValueAtTime(95,a),o.frequency.linearRampToValueAtTime(58,a+1.1);let s=n.createBiquadFilter();s.type=`lowpass`,s.frequency.value=420,s.Q.value=7;let c=n.createGain();c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(.3,a+.3),c.gain.exponentialRampToValueAtTime(1e-4,a+1.2),o.connect(s).connect(c).connect(i),o.start(a),o.stop(a+1.3)}rockFall(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.noiseBurst(r,{type:`highpass`,from:1800,to:700,q:.7,at:n,attack:.001,decay:.15,gain:.9}),this.tone(r,{type:`sine`,from:70,to:32,at:n,attack:.003,decay:.7,gain:1}),this.noiseBurst(r,{type:`lowpass`,from:500,to:120,q:.6,at:n+.05,attack:.2,decay:1.8,gain:.8});for(let e=0;e<10;e++)this.noiseBurst(r,{type:`bandpass`,from:900+Math.random()*1400,to:700,q:4,at:n+.3+Math.random()*1.4,attack:.001,decay:.04,gain:.35})}sinking(e={}){let t=this.output(e);if(!t)return;let{ctx:n,t:r,dest:i}=t;for(let e=0;e<3;e++){let t=r+e*.9+Math.random()*.3,a=n.createOscillator();a.type=`sawtooth`,a.frequency.setValueAtTime(70+Math.random()*30,t),a.frequency.linearRampToValueAtTime(48+Math.random()*20,t+.8);let o=n.createBiquadFilter();o.type=`lowpass`,o.frequency.value=380,o.Q.value=6;let s=n.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.35,t+.25),s.gain.exponentialRampToValueAtTime(1e-4,t+1.1),a.connect(o).connect(s).connect(i),a.start(t),a.stop(t+1.2)}this.noiseBurst(i,{type:`lowpass`,from:260,to:90,q:.6,at:r,attack:.6,decay:3.4,gain:.6});for(let e=0;e<16;e++){let e=300+Math.random()*500;this.tone(i,{type:`sine`,from:e,to:e*1.8,at:r+.4+Math.random()*3,attack:.005,decay:.07,gain:.25})}}chargeStart(){this.chargeStop();let e=this.output({volume:.18});if(!e)return;let{ctx:t,t:n,dest:r}=e,i=t.createBufferSource();i.buffer=this.noise,i.loop=!0;let a=t.createBiquadFilter();a.type=`highpass`,a.frequency.value=3800;let o=t.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.5,n+.08),i.connect(a).connect(o).connect(r),i.start(n,Math.random());let s=t.createOscillator();s.type=`triangle`,s.frequency.value=200;let c=t.createGain();c.gain.value=1;let l=t.createOscillator();l.frequency.value=14;let u=t.createGain();u.gain.value=0,l.connect(u).connect(c.gain);let d=t.createGain();d.gain.setValueAtTime(1e-4,n),d.gain.exponentialRampToValueAtTime(1,n+.05),s.connect(c).connect(d).connect(r),s.start(n),l.start(n),this.charge={osc:s,gain:d,tremolo:u,lfo:l,hiss:i,hissGain:o}}chargeUpdate(e,t){if(!this.charge||!this.ctx)return;let n=this.ctx.currentTime;this.charge.osc.frequency.setTargetAtTime(200+e*460+(t?120:0),n,.02),this.charge.tremolo.gain.setTargetAtTime(t?.9:0,n,.02),this.charge.hissGain.gain.setTargetAtTime(.5+e*1.3,n,.05)}chargeStop(){if(!this.charge||!this.ctx)return;let{osc:e,gain:t,lfo:n,hiss:r,hissGain:i}=this.charge,a=this.ctx.currentTime;t.gain.cancelScheduledValues(a),t.gain.setTargetAtTime(1e-4,a,.02),i.gain.cancelScheduledValues(a),i.gain.setTargetAtTime(1e-4,a,.02),e.stop(a+.1),n.stop(a+.1),r.stop(a+.1),this.charge=null}click(){let e=this.output({volume:.25});e&&this.tone(e.dest,{type:`sine`,from:880,to:760,at:e.t,attack:.002,decay:.06,gain:.6})}select(){let e=this.output({volume:.25});e&&(this.tone(e.dest,{type:`triangle`,from:660,to:660,at:e.t,attack:.003,decay:.08,gain:.6}),this.tone(e.dest,{type:`triangle`,from:990,to:990,at:e.t+.06,attack:.003,decay:.1,gain:.6}))}cancel(){let e=this.output({volume:.25});e&&this.tone(e.dest,{type:`triangle`,from:520,to:300,at:e.t,attack:.003,decay:.15,gain:.6})}turn(e){let t=this.output({volume:.3});t&&(e?[784,1047]:[330,262]).forEach((e,n)=>this.bell(t.dest,e,t.t+n*.13,.6))}matchFound(){let e=this.output({volume:.3});e&&[988,1319].forEach((t,n)=>this.bell(e.dest,t,e.t+n*.09,.5))}coin(){let e=this.output({volume:.22});if(e)for(let t of[2350,3720,5200])this.tone(e.dest,{type:`sine`,from:t,to:t,at:e.t,attack:.001,decay:.5,gain:.35})}press(){let e=this.output({volume:.18});e&&(this.tone(e.dest,{type:`sine`,from:540,to:300,at:e.t,attack:.002,decay:.05,gain:.7}),this.noiseBurst(e.dest,{type:`bandpass`,from:2400,to:1600,q:2,at:e.t,attack:.001,decay:.02,gain:.25}))}whoosh(e=!0){let t=this.output({volume:.22});if(!t)return;let[n,r]=e?[500,3200]:[2800,450];this.noiseBurst(t.dest,{type:`bandpass`,from:n,to:r,q:1.4,at:t.t,attack:.06,decay:.18,gain:.6})}slam(){let e=this.output({volume:.35});e&&(this.tone(e.dest,{type:`sine`,from:150,to:48,at:e.t,attack:.003,decay:.32,gain:.9}),this.noiseBurst(e.dest,{type:`lowpass`,from:2600,to:300,q:.7,at:e.t,attack:.002,decay:.16,gain:.55}))}tick(e,t=!1){let n=this.output({volume:.16});if(!n)return;let r=t?Math.max(260,700-e*22):1100*2**(Math.min(e,24)/24);this.tone(n.dest,{type:t?`triangle`:`sine`,from:r,to:r,at:n.t,attack:.001,decay:.05,gain:.6})}clink(e=0,t=!1){let n=this.output({volume:.16});if(!n)return;let r=(t?1560:2350)*2**(Math.min(e,12)/36);this.tone(n.dest,{type:`sine`,from:r,to:r,at:n.t,attack:.001,decay:.18,gain:.5}),this.tone(n.dest,{type:`sine`,from:r*1.5,to:r*1.5,at:n.t+.012,attack:.001,decay:.12,gain:.3})}rewardDone(e){let t=this.output({volume:.3});t&&(e?[1047,1319,1568,2093].forEach((e,n)=>this.bell(t.dest,e,t.t+n*.06,.6)):this.tone(t.dest,{type:`triangle`,from:300,to:150,at:t.t,attack:.01,decay:.45,gain:.7}))}powerUpSpawn(){let e=this.output({volume:.3});e&&[659,880,1175,1568].forEach((t,n)=>this.bell(e.dest,t,e.t+n*.07,.45))}powerUpPickup(e,t={}){let n=this.output({...t,volume:(t.volume??1)*.55});if(!n)return;let{t:r,dest:i}=n;({damage:[523,784,1047],blast:[392,587,784],split:[698,1047,1397],meteor:[330,494,659]})[e].forEach((e,t)=>this.bell(i,e,r+t*.035,.7)),this.noiseBurst(i,{type:`bandpass`,from:3e3,to:900,q:1.2,at:r,attack:.01,decay:.35,gain:.35}),(e===`blast`||e===`damage`)&&this.tone(i,{type:`triangle`,from:220,to:660,at:r,attack:.02,decay:.4,gain:.25})}meteors(e,t={}){let n=this.output({...t,volume:(t.volume??1)*.6});if(!n)return;let{t:r,dest:i}=n;this.noiseBurst(i,{type:`lowpass`,from:2400,to:300,q:.9,at:r,attack:.4,decay:Math.max(.6,e),gain:.7}),this.tone(i,{type:`sawtooth`,from:180,to:60,at:r,attack:.3,decay:Math.max(.6,e),gain:.12})}cardDeal(e=3,t=0){let n=this.output({volume:.5});if(n)for(let r=0;r<e;r++){let e=n.t+t+.12+r*.09;this.noiseBurst(n.dest,{type:`bandpass`,from:3800,to:1600,q:1.2,at:e,attack:.004,decay:.07,gain:.55}),this.tone(n.dest,{type:`triangle`,from:900+r*120,to:600,at:e,attack:.003,decay:.06,gain:.12})}}cardPick(e=!1){let t=this.output({volume:.45});if(!t)return;let n=e?[523,659,784,1047,1319]:[587,740,880,1175];n.forEach((e,r)=>this.bell(t.dest,e,t.t+r*.045,r===n.length-1?.9:.4)),this.noiseBurst(t.dest,{type:`highpass`,from:5e3,to:2500,q:.6,at:t.t,attack:.01,decay:.3,gain:.18})}upgrade(e={}){let t=this.output({...e,volume:(e.volume??1)*.4});t&&[1319,1568,1760,2093].forEach((e,n)=>this.bell(t.dest,e,t.t+n*.035,.35))}revive(e={}){let t=this.output({...e,volume:(e.volume??1)*.6});t&&(this.noiseBurst(t.dest,{type:`bandpass`,from:1200,to:500,q:.8,at:t.t,attack:.01,decay:.5,gain:.5}),this.tone(t.dest,{type:`triangle`,from:180,to:330,at:t.t+.15,attack:.05,decay:.45,gain:.25}),[392,523,659,784].forEach((e,n)=>this.bell(t.dest,e,t.t+.55+n*.07,.6)))}repair(e={}){let t=this.output({...e,volume:(e.volume??1)*.6});if(t){for(let e=0;e<6;e++){let n=t.t+e*.16+(e>2?.1:0);this.tone(t.dest,{type:`sine`,from:260,to:120,at:n,attack:.002,decay:.09,gain:.55}),this.noiseBurst(t.dest,{type:`bandpass`,from:2200,to:1500,q:2,at:n,attack:.001,decay:.05,gain:.35})}for(let e=0;e<3;e++)this.noiseBurst(t.dest,{type:`bandpass`,from:3200,to:2e3,q:3,at:t.t+.3+e*.12,attack:.03,decay:.08,gain:.18});[523,659,784].forEach((e,n)=>this.bell(t.dest,e,t.t+1.1+n*.06,.5))}}magnetLock(e={}){let t=this.output({...e,volume:(e.volume??1)*.55});t&&(this.tone(t.dest,{type:`sawtooth`,from:300,to:1400,at:t.t,attack:.01,decay:.28,gain:.16}),this.tone(t.dest,{type:`sine`,from:600,to:2400,at:t.t,attack:.01,decay:.25,gain:.22}))}flap(e={}){let t=this.output({...e,volume:(e.volume??1)*.6});t&&(this.noiseBurst(t.dest,{type:`lowpass`,from:700,to:250,q:.9,at:t.t,attack:.04,decay:.16,gain:.55}),this.noiseBurst(t.dest,{type:`bandpass`,from:1300,to:900,q:1.2,at:t.t+.17,attack:.03,decay:.12,gain:.18}))}onTarget(){let e=this.output({volume:.45});e&&(this.bell(e.dest,988,e.t,.35),this.bell(e.dest,1319,e.t+.07,.45))}scope(){let e=this.output({volume:.5});e&&(this.noiseBurst(e.dest,{type:`bandpass`,from:3400,to:2600,q:5,at:e.t,attack:.001,decay:.03,gain:.6}),this.noiseBurst(e.dest,{type:`bandpass`,from:2200,to:1500,q:4,at:e.t+.09,attack:.001,decay:.03,gain:.45}),this.noiseBurst(e.dest,{type:`lowpass`,from:900,to:400,q:.6,at:e.t+.02,attack:.05,decay:.2,gain:.15}))}rifle(e={}){let t=this.output(e);t&&(this.noiseBurst(t.dest,{type:`highpass`,from:3200,to:1400,q:.6,at:t.t,attack:.001,decay:.09,gain:1}),this.tone(t.dest,{type:`sine`,from:220,to:70,at:t.t,attack:.002,decay:.18,gain:.7}),this.noiseBurst(t.dest,{type:`bandpass`,from:1200,to:500,q:.8,at:t.t+.25,attack:.04,decay:.7,gain:.25}),this.noiseBurst(t.dest,{type:`bandpass`,from:2800,to:2200,q:6,at:t.t+.85,attack:.001,decay:.04,gain:.3}),this.noiseBurst(t.dest,{type:`bandpass`,from:2400,to:1800,q:6,at:t.t+1,attack:.001,decay:.04,gain:.3}))}bulletHit(e={}){let t=this.output(e);t&&(this.noiseBurst(t.dest,{type:`bandpass`,from:2400,to:900,q:1.5,at:t.t,attack:.001,decay:.12,gain:.8}),this.tone(t.dest,{type:`sine`,from:300,to:90,at:t.t,attack:.002,decay:.12,gain:.5}))}beep(e=!1){let t=this.output({volume:.35});if(!t)return;let n=e?1760:1175;this.tone(t.dest,{type:`square`,from:n,to:n,at:t.t,attack:.002,decay:.07,gain:.25}),this.tone(t.dest,{type:`square`,from:n*1.5,to:n*1.5,at:t.t+.09,attack:.002,decay:.07,gain:.2})}laserCharge(e,t={}){let n=this.output({...t,volume:(t.volume??1)*.5});n&&(this.tone(n.dest,{type:`sawtooth`,from:220,to:1800,at:n.t,attack:e*.8,decay:e*.25,gain:.14}),this.tone(n.dest,{type:`sine`,from:440,to:3600,at:n.t,attack:e*.8,decay:e*.25,gain:.18}))}laserStrike(e={}){let t=this.output(e);t&&(this.noiseBurst(t.dest,{type:`highpass`,from:7e3,to:1500,q:.5,at:t.t,attack:.002,decay:.5,gain:.8}),this.tone(t.dest,{type:`sawtooth`,from:900,to:60,at:t.t,attack:.005,decay:.6,gain:.25}),this.bigBlast(e))}machineBuilt(e={}){let t=this.output({...e,volume:(e.volume??1)*.7});t&&(this.tone(t.dest,{type:`sine`,from:140,to:60,at:t.t,attack:.003,decay:.4,gain:.9}),this.noiseBurst(t.dest,{type:`bandpass`,from:1800,to:900,q:4,at:t.t,attack:.002,decay:.25,gain:.5}),this.noiseBurst(t.dest,{type:`highpass`,from:4e3,to:2500,q:.5,at:t.t+.08,attack:.05,decay:.7,gain:.25}),this.tone(t.dest,{type:`sawtooth`,from:80,to:420,at:t.t+.25,attack:.25,decay:.5,gain:.08}))}zap(e={}){let t=this.output(e);if(t){this.noiseBurst(t.dest,{type:`highpass`,from:6e3,to:2e3,q:.7,at:t.t,attack:.002,decay:.18,gain:.7}),this.tone(t.dest,{type:`sawtooth`,from:1800,to:120,at:t.t,attack:.003,decay:.3,gain:.25});for(let e=0;e<6;e++)this.noiseBurst(t.dest,{type:`bandpass`,from:3e3+Math.random()*3e3,to:2e3,q:6,at:t.t+.02+e*.03,attack:.001,decay:.02,gain:.3});this.tone(t.dest,{type:`sine`,from:160,to:50,at:t.t+.05,attack:.003,decay:.35,gain:.7})}}heal(e={}){let t=this.output({...e,volume:(e.volume??1)*.45});t&&([523,659,784,1047].forEach((e,n)=>this.bell(t.dest,e,t.t+n*.09,.8)),this.tone(t.dest,{type:`sine`,from:260,to:520,at:t.t,attack:.2,decay:.6,gain:.12}))}redEnergy(e={}){let t=this.output({...e,volume:(e.volume??1)*.5});if(t){this.tone(t.dest,{type:`sawtooth`,from:90,to:360,at:t.t,attack:.05,decay:.55,gain:.18}),this.tone(t.dest,{type:`square`,from:60,to:180,at:t.t,attack:.05,decay:.5,gain:.08});for(let e=0;e<8;e++)this.noiseBurst(t.dest,{type:`highpass`,from:5e3,to:3e3,q:1,at:t.t+.35+e*.025,attack:.001,decay:.02,gain:.25})}}machineDown(e={}){let t=this.output(e);if(t){this.bigBlast(e);for(let e=0;e<10;e++)this.noiseBurst(t.dest,{type:`bandpass`,from:2500+Math.random()*4e3,to:2e3,q:8,at:t.t+.1+Math.random()*.6,attack:.001,decay:.05,gain:.25})}}gifts(){let e=this.output({volume:.4});if(e){[784,988,1175,1568,1319,1568,1976].forEach((t,n)=>this.bell(e.dest,t,e.t+n*.08,.45));for(let t=0;t<8;t++)this.noiseBurst(e.dest,{type:`highpass`,from:7e3,to:5e3,q:1,at:e.t+t*.06,attack:.002,decay:.04,gain:.08})}}bigBlast(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.tone(r,{type:`sine`,from:90,to:28,at:n,attack:.004,decay:1.1,gain:1}),this.noiseBurst(r,{type:`lowpass`,from:1600,to:120,q:.6,at:n,attack:.005,decay:1.6,gain:1})}victory(){let e=this.output({volume:.35});e&&[523,659,784,1047].forEach((t,n)=>this.bell(e.dest,t,e.t+n*.14,n===3?1.4:.5))}defeat(){let e=this.output({volume:.35});e&&[440,349,294].forEach((t,n)=>this.bell(e.dest,t,e.t+n*.22,n===2?1.4:.6))}chainShot(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;for(let e=0;e<10;e++)this.noiseBurst(r,{type:`bandpass`,from:3200+Math.random()*2400,to:2600,q:9,at:n+.02+e*.022,attack:.001,decay:.035,gain:.35});for(let e=0;e<6;e++)this.noiseBurst(r,{type:`bandpass`,from:420,to:300,q:2.5,at:n+.25+e*.09,attack:.02,decay:.07,gain:.3*(1-e/7)})}chainRip(e={}){let t=this.output(e);if(t){this.woodHit(e);for(let e=0;e<5;e++)this.bell(t.dest,1400+Math.random()*900,t.t+.03+e*.05,.12)}}drillIn(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.tone(r,{type:`sawtooth`,from:900,to:380,at:n,attack:.01,decay:.45,gain:.16}),this.tone(r,{type:`square`,from:220,to:110,at:n,attack:.01,decay:.4,gain:.08}),this.noiseBurst(r,{type:`lowpass`,from:1400,to:300,q:.8,at:n,attack:.005,decay:.6,gain:.7})}drillOut(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.tone(r,{type:`sine`,from:160,to:70,at:n,attack:.003,decay:.25,gain:.7}),this.noiseBurst(r,{type:`bandpass`,from:1800,to:500,q:.9,at:n,attack:.003,decay:.45,gain:.6}),this.tone(r,{type:`sawtooth`,from:520,to:700,at:n,attack:.02,decay:.25,gain:.06})}skip(e,t={}){let n=this.output(t);if(!n)return;let{t:r,dest:i}=n,a=1+.18*Math.max(0,e-1);this.noiseBurst(i,{type:`bandpass`,from:2200*a,to:900,q:1.2,at:r,attack:.002,decay:.12,gain:.55}),this.tone(i,{type:`sine`,from:600*a,to:1300*a,at:r+.01,attack:.004,decay:.12,gain:.25})}bombBurst(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.tone(r,{type:`sine`,from:220,to:60,at:n,attack:.002,decay:.3,gain:.8}),this.noiseBurst(r,{type:`bandpass`,from:3e3,to:900,q:.8,at:n,attack:.002,decay:.35,gain:.8});for(let e=0;e<5;e++)this.noiseBurst(r,{type:`highpass`,from:4500,to:2500,q:1,at:n+.05+e*.04,attack:.02,decay:.3,gain:.12})}pirateLaunch(e={}){let t=this.output({...e,volume:(e.volume??1)*.6});if(!t)return;let{t:n,dest:r}=t;this.tone(r,{type:`triangle`,from:380,to:900,at:n+.08,attack:.08,decay:.7,gain:.3}),this.tone(r,{type:`sine`,from:760,to:1800,at:n+.08,attack:.08,decay:.6,gain:.08})}pirateHome(e={}){let t=this.output({...e,volume:(e.volume??1)*.5});if(!t)return;let{t:n,dest:r}=t;this.tone(r,{type:`triangle`,from:520,to:430,at:n,attack:.002,decay:.35,gain:.35}),this.tone(r,{type:`sine`,from:1310,to:1240,at:n,attack:.002,decay:.25,gain:.1}),this.tone(r,{type:`sine`,from:140,to:60,at:n+.05,attack:.01,decay:.3,gain:.6})}reload(e={}){let t=this.output({...e,volume:(e.volume??1)*.4});if(!t)return;let{t:n,dest:r}=t;this.tone(r,{type:`triangle`,from:820,to:610,at:n,attack:.002,decay:.12,gain:.3}),this.noiseBurst(r,{type:`bandpass`,from:2400,to:1600,q:4,at:n,attack:.001,decay:.05,gain:.25}),this.tone(r,{type:`sine`,from:180,to:90,at:n+.01,attack:.004,decay:.16,gain:.35})}punch(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;for(let e of[0,.16])this.tone(r,{type:`sine`,from:150,to:55,at:n+e,attack:.002,decay:.18,gain:.9}),this.noiseBurst(r,{type:`lowpass`,from:1500,to:400,q:.7,at:n+e,attack:.002,decay:.12,gain:.6})}shieldBlock(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.tone(r,{type:`sine`,from:180,to:60,at:n,attack:.003,decay:.45,gain:.9}),this.tone(r,{type:`square`,from:420,to:140,at:n,attack:.003,decay:.3,gain:.12}),[1320,1760,2093].forEach((e,t)=>this.bell(r,e,n+.04+t*.05,.6))}fire(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.noiseBurst(r,{type:`lowpass`,from:600,to:2400,q:.6,at:n,attack:.05,decay:.6,gain:.8});for(let e=0;e<9;e++)this.noiseBurst(r,{type:`bandpass`,from:2500+Math.random()*3e3,to:1800,q:6,at:n+.1+Math.random()*.8,attack:.001,decay:.03,gain:.3})}mist(e={}){let t=this.output({...e,volume:(e.volume??1)*.6});if(!t)return;let{t:n,dest:r}=t;this.noiseBurst(r,{type:`lowpass`,from:300,to:900,q:.4,at:n,attack:.9,decay:1.4,gain:.5}),this.tone(r,{type:`sine`,from:110,to:104,at:n+.3,attack:.4,decay:1.6,gain:.22}),this.tone(r,{type:`sine`,from:165,to:156,at:n+.3,attack:.4,decay:1.4,gain:.1})}wave(e={}){let t=this.output(e);if(!t)return;let{t:n,dest:r}=t;this.noiseBurst(r,{type:`lowpass`,from:400,to:1800,q:.5,at:n,attack:.6,decay:.5,gain:.7}),this.noiseBurst(r,{type:`bandpass`,from:1200,to:300,q:.6,at:n+.9,attack:.02,decay:1.4,gain:1}),this.tone(r,{type:`sine`,from:70,to:35,at:n+.9,attack:.01,decay:.9,gain:.7})}pickpocket(e={}){let t=this.output({...e,volume:(e.volume??1)*.6});if(!t)return;let{t:n,dest:r}=t;this.tone(r,{type:`sine`,from:320,to:1500,at:n,attack:.01,decay:.32,gain:.35}),this.tone(r,{type:`triangle`,from:160,to:750,at:n,attack:.01,decay:.3,gain:.15}),[2349,2794,3136].forEach((e,t)=>this.bell(r,e,n+.28+t*.07,.35))}salute(e={}){let t=this.output({...e,volume:(e.volume??1)*.45});t&&[392,523,659,784].forEach((e,n)=>this.tone(t.dest,{type:`square`,from:e,to:e,at:t.t+n*.16,attack:.02,decay:n===3?.7:.14,gain:.08}))}extraTurn(){let e=this.output({volume:.35});e&&[784,988,1175,1568].forEach((t,n)=>this.bell(e.dest,t,e.t+n*.08,.7))}sulk(e={}){let t=this.output({...e,volume:(e.volume??1)*.5});t&&[294,277,262,247].forEach((e,n)=>this.tone(t.dest,{type:`sawtooth`,from:e,to:n===3?e*.9:e,at:t.t+n*.28,attack:.04,decay:n===3?.7:.24,gain:.12}))}output(e){let t=this.ctx;if(!t||!this.master||!this.enabled||t.state!==`running`)return null;let n=t.createGain();if(n.gain.value=Math.max(0,Math.min(1,e.volume??1)),e.pan!==void 0&&t.createStereoPanner){let r=t.createStereoPanner();r.pan.value=Math.max(-1,Math.min(1,e.pan)),n.connect(r).connect(this.master)}else n.connect(this.master);return{ctx:t,t:t.currentTime+.005,dest:n}}tone(e,t){let n=this.ctx,r=n.createOscillator();r.type=t.type,r.frequency.setValueAtTime(t.from,t.at),t.to!==t.from&&r.frequency.exponentialRampToValueAtTime(Math.max(1,t.to),t.at+t.attack+t.decay);let i=n.createGain();i.gain.setValueAtTime(1e-4,t.at),i.gain.exponentialRampToValueAtTime(t.gain,t.at+t.attack),i.gain.exponentialRampToValueAtTime(1e-4,t.at+t.attack+t.decay),r.connect(i).connect(e),r.start(t.at),r.stop(t.at+t.attack+t.decay+.05)}noiseBurst(e,t){let n=this.ctx,r=n.createBufferSource();r.buffer=this.noise,r.loop=!0;let i=n.createBiquadFilter();i.type=t.type,i.Q.value=t.q,i.frequency.setValueAtTime(t.from,t.at),i.frequency.exponentialRampToValueAtTime(Math.max(20,t.to),t.at+t.attack+t.decay);let a=n.createGain();a.gain.setValueAtTime(1e-4,t.at),a.gain.exponentialRampToValueAtTime(t.gain,t.at+t.attack),a.gain.exponentialRampToValueAtTime(1e-4,t.at+t.attack+t.decay),r.connect(i).connect(a).connect(e),r.start(t.at,Math.random()*1.5),r.stop(t.at+t.attack+t.decay+.05)}bell(e,t,n,r){this.tone(e,{type:`sine`,from:t,to:t,at:n,attack:.004,decay:r,gain:.55}),this.tone(e,{type:`sine`,from:t*2.01,to:t*2.01,at:n,attack:.004,decay:r*.5,gain:.18})}makeNoise(e){let t=this.ctx,n=t.createBuffer(1,Math.floor(t.sampleRate*e),t.sampleRate),r=n.getChannelData(0);for(let e=0;e<r.length;e++)r[e]=Math.random()*2-1;return n}startAmbient(){let e=this.ctx,t=e.createGain();t.gain.value=.11,t.connect(this.master);{let t=e.createBufferSource();t.buffer=this.noise,t.loop=!0;let n=e.createBiquadFilter();n.type=`bandpass`,n.frequency.value=700,n.Q.value=1.4;let r=e.createOscillator();r.frequency.value=.17;let i=e.createGain();i.gain.value=320,r.connect(i).connect(n.frequency),this.windGain=e.createGain(),this.windGain.gain.value=.02+.2*this.windLevel**1.5,t.connect(n).connect(this.windGain).connect(this.master),t.start(),r.start()}for(let[n,r,i]of[[420,1,.09],[1600,.35,.13]]){let a=e.createBufferSource();a.buffer=this.noise,a.loop=!0;let o=e.createBiquadFilter();o.type=`lowpass`,o.frequency.value=n;let s=e.createGain();s.gain.value=r*.6;let c=e.createOscillator();c.frequency.value=i;let l=e.createGain();l.gain.value=r*.4,c.connect(l).connect(s.gain),a.connect(o).connect(s).connect(t),a.start(),c.start()}}};function On(e,t){let n=M(t.homeAngleDeg[e]),r=M(t.zoneHalfAngleDeg);return{home:n,min:n-r,max:n+r}}function kn(e,t){return Math.min(t.max,Math.max(t.min,e))}function An(e,t){return N(Math.cos(e)*t,0,Math.sin(e)*t)}function jn(e){return N(-Math.sin(e),0,Math.cos(e))}var Mn=22;function Nn(e){return Lt(e).landRadius+Mn}var Pn=e=>Object.keys(e.units).filter(t=>!e.units[t].hired),Fn=e=>Object.keys(e.units).filter(t=>e.units[t].hired),In=(e,t)=>Math.max(1e-6,e.units[t]?.hp??e.crew.hp),Ln=e=>e.gunners.map(e=>e.unit);function Rn(e,t){let n=Pn(e),r=e.gunners.length,i=[],a=t??Ln(e);for(let e=0;e<r;e++){let t=a[e];i.push(t!==void 0&&n.includes(t)&&!i.includes(t)?t:``)}let o=[...Ln(e),...n].filter((e,t,r)=>n.includes(e)&&r.indexOf(e)===t);for(let e=0;e<r;e++)i[e]===``&&(i[e]=o.find(e=>!i.includes(e))??n[0]);return i}function zn(e,t){let n=Pn(e),r=[];for(let i=0;i<e.gunners.length&&n.length>0;i++)r.push(n.splice(t.int(n.length),1)[0]);return Rn(e,r)}function Bn(e,t){return e.units[t]??Object.values(e.units)[0]}function Vn(e,t){return e.cannons[Bn(e,t).cannon]}function Hn(e,t){return t===e.gunners.length?Un(e):e.gunners[t]}function Un(e){let[t,n]=e.gunners;return{x:n?(t.x+n.x)/2:t.x-4}}function Wn(e,t){return{player:Rn(e,t?.player),enemy:Rn(e,t?.enemy)}}function Gn(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Kn(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var U={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},W={common:{diffuse:{value:new y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new k},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new k}},envmap:{envMap:{value:null},envMapRotation:{value:new k},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new k}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new k}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new k},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new k},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new k},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new k}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new k}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new k}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0},uvTransform:{value:new k}},sprite:{diffuse:{value:new y(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new k},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0}}},qn={basic:{uniforms:gn([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:U.meshbasic_vert,fragmentShader:U.meshbasic_frag},lambert:{uniforms:gn([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new y(0)},envMapIntensity:{value:1}}]),vertexShader:U.meshlambert_vert,fragmentShader:U.meshlambert_frag},phong:{uniforms:gn([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new y(0)},specular:{value:new y(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:U.meshphong_vert,fragmentShader:U.meshphong_frag},standard:{uniforms:gn([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag},toon:{uniforms:gn([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new y(0)}}]),vertexShader:U.meshtoon_vert,fragmentShader:U.meshtoon_frag},matcap:{uniforms:gn([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:U.meshmatcap_vert,fragmentShader:U.meshmatcap_frag},points:{uniforms:gn([W.points,W.fog]),vertexShader:U.points_vert,fragmentShader:U.points_frag},dashed:{uniforms:gn([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:U.linedashed_vert,fragmentShader:U.linedashed_frag},depth:{uniforms:gn([W.common,W.displacementmap]),vertexShader:U.depth_vert,fragmentShader:U.depth_frag},normal:{uniforms:gn([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:U.meshnormal_vert,fragmentShader:U.meshnormal_frag},sprite:{uniforms:gn([W.sprite,W.fog]),vertexShader:U.sprite_vert,fragmentShader:U.sprite_frag},background:{uniforms:{uvTransform:{value:new k},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:U.background_vert,fragmentShader:U.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new k}},vertexShader:U.backgroundCube_vert,fragmentShader:U.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:U.cube_vert,fragmentShader:U.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:U.equirect_vert,fragmentShader:U.equirect_frag},distance:{uniforms:gn([W.common,W.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:U.distance_vert,fragmentShader:U.distance_frag},shadow:{uniforms:gn([W.lights,W.fog,{color:{value:new y(0)},opacity:{value:1}}]),vertexShader:U.shadow_vert,fragmentShader:U.shadow_frag}};qn.physical={uniforms:gn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new k},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new k},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new k},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new k},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new k},sheen:{value:0},sheenColor:{value:new y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new k},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new k},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new k},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new k},attenuationDistance:{value:0},attenuationColor:{value:new y(0)},specularColor:{value:new y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new k},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new k},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new k}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag};var Jn={r:0,b:0,g:0},Yn=new _n,Xn=new k;Xn.set(-1,0,0,0,1,0,0,0,1);function Zn(e,t,n,r,i,a){let o=new y(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new B(new Ve(1,1,1),new Ge({name:`BackgroundCubeMaterial`,uniforms:lt(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Yn.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xn),l.material.toneMapped=jt.getTransfer(i.colorSpace)!==Je,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new B(new E(2,2),new Ge({name:`BackgroundMaterial`,uniforms:lt(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=jt.getTransfer(i.colorSpace)!==Je,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Jn,He(e)),n.buffers.color.setClear(Jn.r,Jn.g,Jn.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Qn(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function $n(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function er(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(ie(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&ie(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function tr(e){let t=this,n=null,r=0,i=!1,a=!1,o=new En,s=new k,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var nr=4,rr=6,ir=20,ar=256,or=new we,sr=new y,cr=null,lr=0,ur=0,dr=!1,fr=new V,pr=new V,mr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=fr}=i;cr=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=br(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cr,lr,ur),this._renderer.xr.enabled=dr,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cr=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ut,minFilter:ut,generateMipmaps:!1,type:Kt,format:rt,colorSpace:mt,depthBuffer:!1},r=gr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gr(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hr(r)),this._blurMaterial=yr(r,e,t),this._ggxMaterial=vr(r,e,t)}return r}_compileMaterial(e){let t=new B(new hn,e);this._renderer.compile(t,or)}_sceneToCubeUV(e,t,n,r,i){let a=new Be(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(sr),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new B(new Ve,new ae({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(sr),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;_r(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=br());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;_r(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,or)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-nr?n-d+nr:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,_r(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,or),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,_r(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,or)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];_r(t,3*l*(r>this._lodMax-nr?r-this._lodMax+nr:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,or)}};function hr(e){let t=[],n=[],r=e,i=e-nr+1+rr;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?pr.set(1,r,n):e===1?pr.set(-n,1,-r):e===2?pr.set(-n,r,1):e===3?pr.set(-1,r,-n):e===4?pr.set(-n,-1,r):pr.set(n,r,-1),pr.toArray(l,(e*6+t)*3)}}let u=new hn;u.setAttribute(`position`,new D(c,3)),u.setAttribute(`outputDirection`,new D(l,3)),n.push(new B(u,null)),r>nr&&r--}return{lodMeshes:n,sizeLods:t}}function gr(e,t,n){let r=new Dt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function _r(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function vr(e,t,n){return new Ge({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function yr(e,t,n){return new Ge({name:`SphericalGaussianBlur`,defines:{SAMPLES:ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Sr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function br(){return new Ge({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Sr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function xr(){return new Ge({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cr=class extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new he(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ve(5,5,5),i=new Ge({name:`CubemapFromEquirect`,uniforms:lt(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new B(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=ut),new L(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function wr(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Cr(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new mr(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new mr(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Tr(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&te(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Er(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?ln:bt)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Dr(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Or(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:pt(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function kr(e,t,n){let r=new WeakMap,i=new Xt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new wn(h,p,m,u);g.type=ot,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new yt(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ar(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var jr={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Mr(e,t,n,r,i,a){let o=new Dt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new hn;l.setAttribute(`position`,new tt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new tt([0,2,0,0,2,0],2));let u=new It({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new B(l,u),f=new we(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Dt(t,n,{type:Kt,depthBuffer:!1,stencilBuffer:!1}),c=new Dt(t,n,{type:Kt,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},jt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=jr[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Nr=new nt,Pr=new We(1,1),Fr=new wn,Ir=new Re,Lr=new he,Rr=[],zr=[],Br=new Float32Array(16),Vr=new Float32Array(9),Hr=new Float32Array(4);function Ur(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Rr[i];if(a===void 0&&(a=new Float32Array(i),Rr[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Wr(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Gr(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Kr(e,t){let n=zr[t];n===void 0&&(n=new Int32Array(t),zr[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function qr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Jr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wr(n,t))return;e.uniform2fv(this.addr,t),Gr(n,t)}}function Yr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Wr(n,t))return;e.uniform3fv(this.addr,t),Gr(n,t)}}function Xr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wr(n,t))return;e.uniform4fv(this.addr,t),Gr(n,t)}}function Zr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wr(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Gr(n,t)}else{if(Wr(n,r))return;Hr.set(r),e.uniformMatrix2fv(this.addr,!1,Hr),Gr(n,r)}}function Qr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wr(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Gr(n,t)}else{if(Wr(n,r))return;Vr.set(r),e.uniformMatrix3fv(this.addr,!1,Vr),Gr(n,r)}}function $r(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wr(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Gr(n,t)}else{if(Wr(n,r))return;Br.set(r),e.uniformMatrix4fv(this.addr,!1,Br),Gr(n,r)}}function ei(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ti(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wr(n,t))return;e.uniform2iv(this.addr,t),Gr(n,t)}}function ni(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wr(n,t))return;e.uniform3iv(this.addr,t),Gr(n,t)}}function ri(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wr(n,t))return;e.uniform4iv(this.addr,t),Gr(n,t)}}function ii(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ai(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wr(n,t))return;e.uniform2uiv(this.addr,t),Gr(n,t)}}function oi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wr(n,t))return;e.uniform3uiv(this.addr,t),Gr(n,t)}}function si(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wr(n,t))return;e.uniform4uiv(this.addr,t),Gr(n,t)}}function ci(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Pr.compareFunction=n.isReversedDepthBuffer()?518:515,a=Pr):a=Nr,n.setTexture2D(t||a,i)}function li(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ir,i)}function ui(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Lr,i)}function di(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Fr,i)}function fi(e){switch(e){case 5126:return qr;case 35664:return Jr;case 35665:return Yr;case 35666:return Xr;case 35674:return Zr;case 35675:return Qr;case 35676:return $r;case 5124:case 35670:return ei;case 35667:case 35671:return ti;case 35668:case 35672:return ni;case 35669:case 35673:return ri;case 5125:return ii;case 36294:return ai;case 36295:return oi;case 36296:return si;case 35678:case 36198:case 36298:case 36306:case 35682:return ci;case 35679:case 36299:case 36307:return li;case 35680:case 36300:case 36308:case 36293:return ui;case 36289:case 36303:case 36311:case 36292:return di}}function pi(e,t){e.uniform1fv(this.addr,t)}function mi(e,t){let n=Ur(t,this.size,2);e.uniform2fv(this.addr,n)}function hi(e,t){let n=Ur(t,this.size,3);e.uniform3fv(this.addr,n)}function gi(e,t){let n=Ur(t,this.size,4);e.uniform4fv(this.addr,n)}function _i(e,t){let n=Ur(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function vi(e,t){let n=Ur(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function yi(e,t){let n=Ur(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function bi(e,t){e.uniform1iv(this.addr,t)}function xi(e,t){e.uniform2iv(this.addr,t)}function Si(e,t){e.uniform3iv(this.addr,t)}function Ci(e,t){e.uniform4iv(this.addr,t)}function wi(e,t){e.uniform1uiv(this.addr,t)}function Ti(e,t){e.uniform2uiv(this.addr,t)}function Ei(e,t){e.uniform3uiv(this.addr,t)}function Di(e,t){e.uniform4uiv(this.addr,t)}function Oi(e,t,n){let r=this.cache,i=t.length,a=Kr(n,i);Wr(r,a)||(e.uniform1iv(this.addr,a),Gr(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Pr:Nr;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ki(e,t,n){let r=this.cache,i=t.length,a=Kr(n,i);Wr(r,a)||(e.uniform1iv(this.addr,a),Gr(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ir,a[e])}function Ai(e,t,n){let r=this.cache,i=t.length,a=Kr(n,i);Wr(r,a)||(e.uniform1iv(this.addr,a),Gr(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Lr,a[e])}function ji(e,t,n){let r=this.cache,i=t.length,a=Kr(n,i);Wr(r,a)||(e.uniform1iv(this.addr,a),Gr(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Fr,a[e])}function Mi(e){switch(e){case 5126:return pi;case 35664:return mi;case 35665:return hi;case 35666:return gi;case 35674:return _i;case 35675:return vi;case 35676:return yi;case 5124:case 35670:return bi;case 35667:case 35671:return xi;case 35668:case 35672:return Si;case 35669:case 35673:return Ci;case 5125:return wi;case 36294:return Ti;case 36295:return Ei;case 36296:return Di;case 35678:case 36198:case 36298:case 36306:case 35682:return Oi;case 35679:case 36299:case 36307:return ki;case 35680:case 36300:case 36308:case 36293:return Ai;case 36289:case 36303:case 36311:case 36292:return ji}}var Ni=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fi(t.type)}},Pi=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mi(t.type)}},Fi=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ii=/(\w+)(\])?(\[|\.)?/g;function Li(e,t){e.seq.push(t),e.map[t.id]=t}function Ri(e,t,n){let r=e.name,i=r.length;for(Ii.lastIndex=0;;){let a=Ii.exec(r),o=Ii.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Li(n,l===void 0?new Ni(s,e,t):new Pi(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Fi(s),Li(n,e)),n=e}}}var zi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ri(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Bi(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Vi=37297,Hi=0;function Ui(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Wi=new k;function Gi(e){jt._getMatrix(Wi,jt.workingColorSpace,e);let t=`mat3( ${Wi.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(e)){case bn:return[t,`LinearTransferOETF`];case Je:return[t,`sRGBTransferOETF`];default:return ie(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ki(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ui(e.getShaderSource(t),r)}return i}function qi(e,t){let n=Gi(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ji={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Yi(e,t){let n=Ji[t];return n===void 0?(ie(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Xi=new V;function Zi(){return jt.getLuminanceCoefficients(Xi),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Xi.x.toFixed(4)}, ${Xi.y.toFixed(4)}, ${Xi.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Qi(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ta).join(`
`)}function $i(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ea(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ta(e){return e!==``}function na(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ra(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ia=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(e){return e.replace(ia,sa)}var oa=new Map;function sa(e,t){let n=U[t];if(n===void 0){let e=oa.get(t);if(e!==void 0)n=U[e],ie(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return aa(n)}var ca=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function la(e){return e.replace(ca,ua)}function ua(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function da(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var fa={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function pa(e){return fa[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ma={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function ha(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ma[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var ga={302:`ENVMAP_MODE_REFRACTION`};function _a(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ga[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var va={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ya(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:va[e.combine]||`ENVMAP_BLENDING_NONE`}function ba(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function xa(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=pa(n),l=ha(n),u=_a(n),d=ya(n),f=ba(n),p=Qi(n),m=$i(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ta).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ta).join(`
`),_.length>0&&(_+=`
`)):(g=[da(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ta).join(`
`),_=[da(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:U.tonemapping_pars_fragment,n.toneMapping===0?``:Yi(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,U.colorspace_pars_fragment,qi(`linearToOutputTexel`,n.outputColorSpace),Zi(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ta).join(`
`)),o=aa(o),o=na(o,n),o=ra(o,n),s=aa(s),s=na(s,n),s=ra(s,n),o=la(o),s=la(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Bi(i,i.VERTEX_SHADER,y),S=Bi(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ki(i,x,`vertex`),n=Ki(i,S,`fragment`);pt(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):ie(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new zi(i,h),T=ea(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Vi)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Hi++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Sa=0,Ca=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wa(e),t.set(e,n)),n}},wa=class{constructor(e){this.id=Sa++,this.code=e,this.usedTimes=0}};function Ta(e){return e===1030||e===37490||e===36285}function Ea(e,t,n,r,i,a){let o=new Zt,s=new Ca,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&ie(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,ee;if(C){let e=qn[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,ee=t.id}let A=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),ne=h.isInstancedMesh===!0,re=h.isBatchedMesh===!0,ae=!!i.map,oe=!!i.matcap,j=!!x,M=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,fe=!!i.metalnessMap,pe=!!i.roughnessMap,me=i.anisotropy>0,he=i.clearcoat>0,ge=i.dispersion>0,_e=i.retroreflectivity>0,ve=i.iridescence>0,ye=i.sheen>0,N=i.transmission>0,be=me&&!!i.anisotropyMap,xe=he&&!!i.clearcoatMap,Se=he&&!!i.clearcoatNormalMap,P=he&&!!i.clearcoatRoughnessMap,Ce=ve&&!!i.iridescenceMap,we=ve&&!!i.iridescenceThicknessMap,Te=ye&&!!i.sheenColorMap,Ee=ye&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,F=!!i.specularIntensityMap,ke=N&&!!i.transmissionMap,Ae=N&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,I=i.alphaTest>0,Ne=!!i.alphaHash,L=!!i.extensions,R=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(R=e.toneMapping);let Pe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&h._colorsTexture!==null,instancing:ne,instancingColor:ne&&h.instanceColor!==null,instancingMorph:ne&&h.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ae,matcap:oe,envMap:j,envMapMode:j&&x.mapping,envMapCubeUVHeight:S,aoMap:M,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&Ta(i.normalMap.format),metalnessMap:fe,roughnessMap:pe,anisotropy:me,anisotropyMap:be,clearcoat:he,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:P,dispersion:ge,retroreflection:_e,iridescence:ve,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:ye,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:F,transmission:N,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:I,alphaHash:Ne,combine:i.combine,mapUv:ae&&m(i.map.channel),aoMapUv:M&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:fe&&m(i.metalnessMap.channel),roughnessMapUv:pe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:F&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||me),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ae||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:R,decodeVideoTexture:ae&&i.map.isVideoTexture===!0&&jt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&jt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:L&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(L&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=qn[t];n=Gt.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new xa(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Da(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Oa(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ka(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Aa(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Oa),r.length>1&&r.sort(t||ka),i.length>1&&i.sort(t||ka)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ja(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Aa,e.set(t,[i])):n>=r.length?(i=new Aa,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ma(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new y};break;case`SpotLight`:n={position:new V,direction:new V,color:new y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new y,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new y,groundColor:new y};break;case`RectAreaLight`:n={color:new y,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function Na(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Pa=0;function Fa(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ia(e){let t=new Ma,n=Na(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new _n,o=new _n;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Fa);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Pa++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function La(e){let t=new Ia(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ra(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new La(e),t.set(n,[a])):r>=i.length?(a=new La(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var za=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ba=`uniform sampler2D shadow_pass;
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
}`,Va=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Ha=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Ua=new _n,Wa=new V,Ga=new V;function Ka(e,t,n){let r=new _,i=new yt,a=new yt,o=new Xt,s=new ne,c=new Ne,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:za,fragmentShader:Ba}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new hn;m.setAttribute(`position`,new D(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new B(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(ie(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=v!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){ie(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){ie(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Dt(i.x,i.y,{format:A,type:Kt,minFilter:ut,magFilter:ut,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new We(i.x,i.y,ot),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=qe,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=De,d.map.depthTexture.magFilter=De}else l.isPointLight?(d.map=new Cr(i.x),d.map.depthTexture=new oe(i.x,on)):(d.map=new Dt(i.x,i.y),d.map.depthTexture=new We(i.x,i.y,on)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=qe,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=ut,d.map.depthTexture.magFilter=ut):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=De,d.map.depthTexture.magFilter=De);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Wa.setFromMatrixPosition(l.matrixWorld),e.position.copy(Wa),Ga.copy(e.position),Ga.add(Va[t]),e.up.copy(Ha[t]),e.lookAt(Ga),e.updateMatrixWorld(),n.makeTranslation(-Wa.x,-Wa.y,-Wa.z),Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Ua,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),x(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&y(d,s),d.needsUpdate=!1}v=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function y(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Dt(i.x,i.y,{format:A,type:Kt}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function qa(e,t){function n(){let t=!1,n=new Xt,r=null,i=new Xt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?fe(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=R[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?fe(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,b=null,x=null,S=null,C=null,w=null,T=new y(0,0,0),E=0,D=!1,O=null,k=null,ee=null,A=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,ie=0,ae=e.getParameter(e.VERSION);ae.indexOf(`WebGL`)===-1?ae.indexOf(`OpenGL ES`)!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),re=ie>=2):(ie=parseFloat(/^WebGL (\d)/.exec(ae)[1]),re=ie>=1);let oe=null,j={},M=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Xt().fromArray(M),le=new Xt().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),fe(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),fe(e.CULL_FACE),ye(0);function fe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function pe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function me(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function he(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ge(t){return h!==t&&(e.useProgram(t),h=t,!0)}let _e={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};_e[103]=e.MIN,_e[104]=e.MAX;let ve={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ye(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(pe(e.BLEND),g=!1);return}if(g===!1&&(fe(e.BLEND),g=!0),t!==5){if(t!==_||u!==D){if((v!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:pt(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:pt(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:pt(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:pt(`WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,_=t,D=u}return}a||=n,o||=r,s||=i,(n!==v||a!==S)&&(e.blendEquationSeparate(_e[n],_e[a]),v=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(ve[r],ve[i],ve[o],ve[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),_=t,D=!1}function N(t,n){t.side===2?pe(e.CULL_FACE):fe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ye(0):ye(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),P(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function xe(t){t===0?pe(e.CULL_FACE):(fe(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function Se(t){t!==ee&&(re&&e.lineWidth(t),ee=t)}function P(t,n,r){t?(fe(e.POLYGON_OFFSET_FILL),(A!==n||te!==r)&&(A=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):pe(e.POLYGON_OFFSET_FILL)}function Ce(t){t?fe(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+ne-1),oe!==t&&(e.activeTexture(t),oe=t)}function Te(t,n,r){r===void 0&&(r=oe===null?e.TEXTURE0+ne-1:oe);let i=j[r];i===void 0&&(i={type:void 0,texture:void 0},j[r]=i),(i.type!==t||i.texture!==n)&&(oe!==r&&(e.activeTexture(r),oe=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function Ee(){let t=j[oe];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function F(){try{e.texSubImage2D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function I(){try{e.texStorage3D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function Ne(){try{e.texImage2D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function L(){try{e.texImage3D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ie(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function Le(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Re(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ze(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},oe=null,j={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,b=null,x=null,S=null,C=null,w=null,T=new y(0,0,0),E=0,D=!1,O=null,k=null,ee=null,A=null,te=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:fe,disable:pe,bindFramebuffer:me,drawBuffers:he,useProgram:ge,setBlending:ye,setMaterial:N,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:P,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:Ne,texImage3D:L,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:Me,texStorage3D:I,texSubImage2D:F,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:Ie,viewport:Le,reset:Be}}function Ja(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Sn(`canvas`)}function g(e,t,n){let r=1,i=ke(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),ie(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&ie(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];ie(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||ie(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?bn:jt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,ie(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function ee(){return O}function A(e){O=e}function te(){let e=O;return e>=i.maxTextures&&ie(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function ne(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function re(t,i){let a=r.get(t);if(t.isVideoTexture&&Ee(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)ie(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)ie(`WebGLRenderer: Texture marked for update but image is incomplete`);else{me(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ae(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){me(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function oe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){me(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function j(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){he(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let M={[F]:e.REPEAT,[Ft]:e.CLAMP_TO_EDGE,[Pt]:e.MIRRORED_REPEAT},se={[De]:e.NEAREST,[Fe]:e.NEAREST_MIPMAP_NEAREST,[Ae]:e.NEAREST_MIPMAP_LINEAR,[ut]:e.LINEAR,[Cn]:e.LINEAR_MIPMAP_NEAREST,[mn]:e.LINEAR_MIPMAP_LINEAR},ce={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function le(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&ie(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,M[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,M[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,M[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,se[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,se[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ce[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ue(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ne(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function fe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function pe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=fe(n.start,r.width,4),c=fe(t.start,r.width,4);n.start<=i+1&&a===c&&fe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function me(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ue(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=jt.getPrimaries(jt.workingColorSpace),r=o.colorSpace===``?null:jt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Oe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);le(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===de,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&pe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=yn(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else ie(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?ie(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=yn(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=ke(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=ke(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,o,s){if(o.image.length!==6)return;let c=ue(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=jt.getPrimaries(jt.workingColorSpace),r=o.colorSpace===``?null:jt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Oe(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);le(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?ie(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=ke(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ge(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Te(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,we(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Te(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);Te(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ve(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),le(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else re(i.depthTexture,0);let u=l.__webglTexture,d=we(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Te(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Te(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ye(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ve(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ve(i.__webglFramebuffer[0],t,0):ve(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),_e(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),_e(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function N(t,n,i){let a=r.get(t);n!==void 0&&ge(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ye(t)}function be(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Te(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=we(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),_e(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),le(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ge(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ge(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),le(c,a),ge(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),le(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ge(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ge(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&ye(t)}function xe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let Se=[],P=[];function Ce(t){if(t.samples>0){if(Te(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Se.length=0,P.length=0,Se.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Se.push(l),P.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,P)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Se))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function we(e){return Math.min(i.maxSamples,e.samples)}function Te(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ee(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Oe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(jt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&ie(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):pt(`WebGLTextures: Unsupported texture color space:`,n)),t}function ke(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=te,this.resetTextureUnits=k,this.getTextureUnits=ee,this.setTextureUnits=A,this.setTexture2D=re,this.setTexture2DArray=ae,this.setTexture3D=oe,this.setTextureCube=j,this.rebindTextures=N,this.setupRenderTarget=be,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ya(e,t){function n(n,r=``){let i,a=jt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Xa=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Za=`
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

}`,Qa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ve(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ge({vertexShader:Xa,fragmentShader:Za,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new B(new E(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$a=class extends Qt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Qa,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new yt,C=null,w=null,T=new Be;T.viewport=new Xt;let E=new Be;E.viewport=new Xt;let D=[T,E],O=new vn,k=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new wt,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new wt,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new wt,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,ee=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&ie(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&ie(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?de:qe,a=_.stencil?ft:on);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Dt(d.textureWidth,d.textureHeight,{format:rt,type:nn,depthTexture:new We(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Dt(f.framebufferWidth,f.framebufferHeight,{format:rt,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let re=new V,ae=new V;function oe(e,t,n){re.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function j(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||ee!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,ee=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;j(O,i);for(let e=0;e<a.length;e++)j(a[e],i);a.length===2?oe(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),M(e,O,i)};function M(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Se*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let se=null;function ce(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Be,o.layers.enable(n),o.viewport=new Xt,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ve,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let le=new Gn;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},eo=new _n,to=new k;to.set(-1,0,0,0,1,0,0,0,1);function no(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,He(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(eo.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(to),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ro(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return pt(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?ie(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):ie(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var io=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ao=null;function oo(){return ao===null&&(ao=new C(io,16,16,A,Kt),ao.name=`DFG_LUT`,ao.minFilter=ut,ao.magFilter=ut,ao.wrapS=Ft,ao.wrapT=Ft,ao.generateMipmaps=!1,ao.needsUpdate=!0),ao}var so=class{constructor(e={}){let{canvas:t=pn(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=nn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([st,Me,Te]),g=new Set([nn,on,dn,ft,gt,Bt]),v=new Uint32Array(4),b=new Int32Array(4),x=new V,S=null,C=null,T=[],E=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,ee=!1,A=null,te=null,ne=null,re=null;this._outputColorSpace=w;let ae=0,oe=0,j=null,M=-1,se=null,ce=new Xt,le=new Xt,ue=null,de=new y(0),fe=0,pe=t.width,me=t.height,he=1,ge=null,_e=null,ve=new Xt(0,0,pe,me),ye=new Xt(0,0,pe,me),N=!1,be=new _,xe=!1,Se=!1,P=new _n,Ce=new V,we=new Xt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Oe(){return j===null?he:1}let F=n;function ke(e,n){return t.getContext(e,n)}let Ae,je,I,Ne,L,R,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,z,B,We,Ge,Ke,qe,Je,Ye;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Qe,!1),t.addEventListener(`webglcontextrestored`,$e,!1),t.addEventListener(`webglcontextcreationerror`,et,!1),F===null){let t=`webgl2`;if(F=ke(t,e),F===null)throw ke(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Xe()}catch(e){throw t.removeEventListener(`webglcontextlost`,Qe,!1),t.removeEventListener(`webglcontextrestored`,$e,!1),t.removeEventListener(`webglcontextcreationerror`,et,!1),pt(`WebGLRenderer: `+e.message),e}function Xe(){Ae=new Tr(F),Ae.init(),qe=new Ya(F,Ae),je=new er(F,Ae,e,qe),I=new qa(F,Ae),je.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),te=F.createFramebuffer(),ne=F.createFramebuffer(),re=F.createFramebuffer(),Ne=new Or(F),L=new Da,R=new Ja(F,Ae,I,L,je,qe,Ne),Pe=new wr(k),Fe=new Kn(F),Je=new Qn(F,Fe),Ie=new Er(F,Fe,Ne,Je),Le=new Ar(F,Ie,Fe,Je,Ne),We=new kr(F,je,R),He=new tr(L),Re=new Ea(k,Pe,Ae,je,Je,He),ze=new no(k,L),Be=new ja,Ve=new Ra(Ae),B=new Zn(k,Pe,I,Le,p,s),z=new Ka(k,Le,je),Ye=new ro(F,Ne,je,I),Ge=new $n(F,Ae,Ne),Ke=new Dr(F,Ae,Ne),Ne.programs=Re.programs,k.capabilities=je,k.extensions=Ae,k.properties=L,k.renderLists=Be,k.shadowMap=z,k.state=I,k.info=Ne}m!==1009&&(D=new Mr(m,t.width,t.height,o,r,i));let Ze=new $a(k,F);this.xr=Ze,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(pe,me,!1))},this.getSize=function(e){return e.set(pe,me)},this.setSize=function(e,n,r=!0){if(Ze.isPresenting){ie(`WebGLRenderer: Can't change size while VR device is presenting.`);return}pe=e,me=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(pe*he,me*he).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,me=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){pt(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){ie(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}D.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ce)},this.getViewport=function(e){return e.copy(ve)},this.setViewport=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),I.viewport(ce.copy(ve).multiplyScalar(he).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),I.scissor(le.copy(ye).multiplyScalar(he).round())},this.getScissorTest=function(){return N},this.setScissorTest=function(e){I.setScissorTest(N=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=h.has(t)}if(e){let e=j.texture.type,t=g.has(e),n=B.getClearColor(),r=B.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(v[0]=i,v[1]=a,v[2]=o,v[3]=r,F.clearBufferuiv(F.COLOR,0,v)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,F.clearBufferiv(F.COLOR,0,b))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),A=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Qe,!1),t.removeEventListener(`webglcontextrestored`,$e,!1),t.removeEventListener(`webglcontextcreationerror`,et,!1),B.dispose(),Be.dispose(),Ve.dispose(),L.dispose(),Pe.dispose(),Le.dispose(),Je.dispose(),Ye.dispose(),Re.dispose(),Ze.dispose(),Ze.removeEventListener(`sessionstart`,ct),Ze.removeEventListener(`sessionend`,lt),ut.stop()};function Qe(e){e.preventDefault(),O(`WebGLRenderer: Context Lost.`),ee=!0}function $e(){O(`WebGLRenderer: Context Restored.`),ee=!1;let e=Ne.autoReset,t=z.enabled,n=z.autoUpdate,r=z.needsUpdate,i=z.type;Xe(),Ne.autoReset=e,z.enabled=t,z.autoUpdate=n,z.needsUpdate=r,z.type=i}function et(e){pt(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function tt(e){let t=e.target;t.removeEventListener(`dispose`,tt),nt(t)}function nt(e){rt(e),L.remove(e)}function rt(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Re.releaseProgram(e)}),e.isShaderMaterial&&Re.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ee);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ct(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ie.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Je.setup(i,r,s,n,c);let h,g=Ge;if(c!==null&&(h=Fe.get(c),g=Ke,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Oe()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Oe()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Ae.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Fe.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function it(e,t,n,r){A!==null&&e.isNodeMaterial&&A.setObject(r,e),xe===!0&&He.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,yt(e,t,r),e.side=0,e.needsUpdate=!0,yt(e,t,r),e.side=2):yt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),A!==null&&A.renderStart(e,t,n),C=Ve.get(n),C.init(t),E.push(C),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),C.setupLights(),A!==null&&A.updateLights(C.state.lightsArray),Se=this.localClippingEnabled,xe=He.init(this.clippingPlanes,Se),xe===!0&&He.setGlobalState(this.clippingPlanes,t),A!==null&&z.render(C.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];it(o,n,t,e),r.add(o)}else it(i,n,t,e),r.add(i)}}),C=E.pop(),A!==null&&A.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ae.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let at=null;function ot(e){at&&at(e)}function ct(){ut.stop()}function lt(){ut.start()}let ut=new Gn;ut.setAnimationLoop(ot),typeof self<`u`&&ut.setContext(self),this.setAnimationLoop=function(e){at=e,Ze.setAnimationLoop(e),e===null?ut.stop():ut.start()},Ze.addEventListener(`sessionstart`,ct),Ze.addEventListener(`sessionend`,lt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){pt(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;A!==null&&A.renderStart(e,t);let n=Ze.enabled===!0&&Ze.isPresenting===!0,r=D!==null&&(j===null||n)&&D.begin(k,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(t),t=Ze.getCamera()),e.isScene===!0&&e.onBeforeRender(k,e,t,j),C=Ve.get(e,E.length),C.init(t),C.state.textureUnits=R.getTextureUnits(),E.push(C),P.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),be.setFromProjectionMatrix(P,Ht,t.reversedDepth),Se=this.localClippingEnabled,xe=He.init(this.clippingPlanes,Se),S=Be.get(e,T.length),S.init(),T.push(S),Ze.enabled===!0&&Ze.isPresenting===!0){let e=k.xr.getDepthSensingMesh();e!==null&&dt(e,t,-1/0,k.sortObjects)}dt(e,t,0,k.sortObjects),S.finish(),A!==null&&A.updateLights(C.state.lightsArray),k.sortObjects===!0&&S.sort(ge,_e),De=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,De&&B.addToRenderList(S,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&He.beginShadows();let i=C.state.shadowsArray;if(z.render(i,e,t),xe===!0&&He.endShadows(),(r&&D.hasRenderPass())===!1){let n=S.opaque,r=S.transmissive;if(C.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ht(n,r,e,a)}De&&B.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];mt(S,e,n,n.viewport)}}else r.length>0&&ht(n,r,e,t),De&&B.render(e),mt(S,e,t)}j!==null&&oe===0&&(R.updateMultisampleRenderTarget(j),R.updateRenderTargetMipmap(j)),r&&D.end(k),e.isScene===!0&&e.onAfterRender(k,e,t),Je.resetDefaultState(),M=-1,se=null,E.pop(),E.length>0?(C=E[E.length-1],R.setTextureUnits(C.state.textureUnits),xe===!0&&He.setGlobalState(k.clippingPlanes,C.state.camera)):C=null,T.pop(),S=T.length>0?T[T.length-1]:null,A!==null&&A.renderEnd()};function dt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)C.pushLightProbeGrid(e);else if(e.isLight)C.pushLight(e),e.castShadow&&C.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(be)){r&&we.setFromMatrixPosition(e.matrixWorld).applyMatrix4(P);let i=Le.update(e),a=e.material;a.visible&&S.push(e,i,a,n,we.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(be))){let i=Le.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),we.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),we.copy(e.boundingSphere.center)),we.applyMatrix4(e.matrixWorld).applyMatrix4(P)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&S.push(e,i,c,n,we.z,s,t)}}else a.visible&&S.push(e,i,a,n,we.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)dt(i[e],t,n,r)}function mt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;C.setupLightsView(n),xe===!0&&He.setGlobalState(k.clippingPlanes,n),r&&I.viewport(ce.copy(r)),i.length>0&&_t(i,t,n),a.length>0&&_t(a,t,n),o.length>0&&_t(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function ht(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[r.id]===void 0){let e=Ae.has(`EXT_color_buffer_half_float`)||Ae.has(`EXT_color_buffer_float`);C.state.transmissionRenderTarget[r.id]=new Dt(1,1,{generateMipmaps:!0,type:e?Kt:nn,minFilter:mn,samples:Math.max(4,je.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}let a=C.state.transmissionRenderTarget[r.id],o=r.viewport||ce;a.setSize(o.z*k.transmissionResolutionScale,o.w*k.transmissionResolutionScale);let s=k.getRenderTarget(),c=k.getActiveCubeFace(),l=k.getActiveMipmapLevel();k.setRenderTarget(a),k.getClearColor(de),fe=k.getClearAlpha(),fe<1&&k.setClearColor(16777215,.5),k.clear(),De&&B.render(n);let u=k.toneMapping;k.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),C.setupLightsView(r),xe===!0&&He.setGlobalState(k.clippingPlanes,r),_t(e,n,r),R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a),Ae.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,vt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a))}k.setRenderTarget(s,c,l),k.setClearColor(de,fe),d!==void 0&&(r.viewport=d),k.toneMapping=u}function _t(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&vt(o,t,n,s,l,c)}}function vt(e,t,n,r,i,a){A!==null&&i.isNodeMaterial&&A.setObject(e,i),e.onBeforeRender(k,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(k,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=2):k.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(k,t,n,r,i,a)}function yt(e,t,n){t.isScene!==!0&&(t=Ee);let r=L.get(e),i=C.state.lights,a=C.state.shadowsArray,o=i.state.version,s=Re.getParameters(e,i.state,a,t,n,C.state.lightProbeGridArray),c=Re.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Pe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,tt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return xt(e,s),d}else s.uniforms=Re.getUniforms(e),A!==null&&e.isNodeMaterial&&A.build(e,n,s),e.onBeforeCompile(s,k),d=Re.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=He.uniform),xt(e,s),r.needsLights=Tt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=C.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function bt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=zi.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function xt(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function St(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];x.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(x))return n}return null}function Ct(e,t,n,r,i){t.isScene!==!0&&(t=Ee),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?k.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:jt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Pe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=k.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=C.state.lights;if(xe===!0&&(Se===!0||e!==se)){let t=e===se&&r.id===M;He.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==He.numPlanes||v.numIntersection!==He.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=C.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=yt(r,t,i),A&&r.isNodeMaterial&&A.onUpdateProgram(r,x,v));let S=!1,w=!1,T=!1,E=x.getUniforms(),D=v.uniforms;if(I.useProgram(x.program)&&(S=!0,w=!0,T=!0),r.id!==M&&(M=r.id,w=!0),v.needsLights){let e=St(C.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(S||se!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(F,`projectionMatrix`,e.projectionMatrix),E.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(F,Ce.setFromMatrixPosition(e.matrixWorld)),je.logarithmicDepthBuffer&&E.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),se!==e&&(se=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(F,`sunShadowMap`,y.state.sunShadowMap,R),y.state.directionalShadowMap.length>0&&E.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,R),y.state.spotShadowMap.length>0&&E.setValue(F,`spotShadowMap`,y.state.spotShadowMap,R),y.state.pointShadowMap.length>0&&E.setValue(F,`pointShadowMap`,y.state.pointShadowMap,R)),i.isSkinnedMesh){E.setOptional(F,i,`bindMatrix`),E.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(F,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(E.setOptional(F,i,`batchingTexture`),E.setValue(F,`batchingTexture`,i._matricesTexture,R),E.setOptional(F,i,`batchingIdTexture`),E.setValue(F,`batchingIdTexture`,i._indirectTexture,R),E.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(F,`batchingColorTexture`,i._colorsTexture,R));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&We.update(i,n,x),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=oo()),w){if(E.setValue(F,`toneMappingExposure`,k.toneMappingExposure),v.needsLights&&wt(D,T),a&&r.fog===!0&&ze.refreshFogUniforms(D,a),ze.refreshMaterialUniforms(D,r,he,me,C.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}zi.upload(F,bt(v),D,R)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(zi.upload(F,bt(v),D,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(F,`center`,i.center),E.setValue(F,`modelViewMatrix`,i.modelViewMatrix),E.setValue(F,`normalMatrix`,i.normalMatrix),E.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ye.update(n,x),Ye.bind(n,x)}}return x}function wt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Tt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){j=e,ae=t,oe=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest,I.viewport(ce),I.scissor(le),I.setScissorTest(ue),M=-1;return}if(o.__webglFramebuffer===void 0)R.setupRenderTarget(e);else if(o.__hasExternalTextures)R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);R.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&R.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest}else ce.copy(ve).multiplyScalar(he).floor(),le.copy(ye).multiplyScalar(he).floor(),ue=N;if(n!==0&&(r=te),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(ce),I.scissor(le),I.setScissorTest(ue),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}M=-1};function Et(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=je.textureFormatReadable(e.format),t.__typeReadable=je.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){pt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=Et(o);if(u.__formatReadable===!1){pt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){pt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,qe.convert(c),qe.convert(l),a)}finally{let e=j===null?null:L.get(j).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=Et(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,qe.convert(l),qe.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=j===null?null:L.get(j).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ue(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=qe.convert(t.format),_=qe.convert(t.type),v;t.isData3DTexture?(R.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(R.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(R.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,ne),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,re);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ae=0,oe=0,j=null,I.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ht}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=jt._getUnpackColorSpace()}},co=()=>({position:new V,quaternion:new et,fov:55});function lo(e,t,n){if(t>=1)return e;let r=z.radToDeg(2*Math.atan(Math.tan(z.degToRad(e/2))/t));return Math.max(e,Math.min(r,n))}var uo=class{tallest;camera;rig=null;from=co();target=co();blend=1;blendTime=0;arc=0;arcHeight=0;shake=0;rumbling={deg:0,rollDeg:0,hz:0,kickDeg:0};rumbleAsked=!1;rumbleTime=0;rumbleTurn=new et;rumbleEuler=new be(0,0,0,`YXZ`);asked;constructor(e,t){this.tallest=t,this.camera=e,this.asked=e.fov}get fov(){return this.asked}lens(e){let t=this.camera.aspect;return{fov:lo(e,t,this.tallest()),aspect:t}}get currentRig(){return this.rig}use(e,t={}){let n=t.seconds??0;this.from.position.copy(this.camera.position),this.from.quaternion.copy(this.camera.quaternion),this.from.fov=this.asked,this.rig=e,this.blendTime=n,this.blend=n>0?0:1,this.arc=t.arc??0,this.arcHeight=0,this.blend===1&&(e.update(0,this.target),this.apply(this.target))}addShake(e){this.shake=Math.min(2,this.shake+e)}stopShake(){this.shake=0}rumble(e){Object.assign(this.rumbling,e),this.rumbleAsked=!0}update(e){if(this.rig){if(this.rig.update(e,this.target),this.blend<1){this.arcHeight===0&&this.arc>0&&(this.arcHeight=this.from.position.distanceTo(this.target.position)*this.arc),this.blend=Math.min(1,this.blend+e/this.blendTime);let t=fo(this.blend);this.camera.position.lerpVectors(this.from.position,this.target.position,t),this.camera.position.y+=Math.sin(Math.PI*t)*this.arcHeight,this.camera.quaternion.slerpQuaternions(this.from.quaternion,this.target.quaternion,t),this.setFov(z.lerp(this.from.fov,this.target.fov,t))}else this.apply(this.target);if(this.shake>.001){let t=this.shake;this.camera.position.x+=(Math.random()-.5)*t,this.camera.position.y+=(Math.random()-.5)*t,this.camera.position.z+=(Math.random()-.5)*t,this.shake*=Math.exp(-e*6)}this.applyRumble(e)}}applyRumble(e){let t=this.rumbling;if(!this.rumbleAsked){let n=Math.exp(-e*25);t.deg*=n,t.rollDeg*=n,t.kickDeg*=n}if(this.rumbleAsked=!1,Math.max(t.deg,t.rollDeg,Math.abs(t.kickDeg))<1e-4){this.rumbleTime=0;return}this.rumbleTime+=e*t.hz;let n=this.rumbleTime,r=z.DEG2RAD;this.rumbleEuler.set((mo(n,1)*t.deg+t.kickDeg)*r,mo(n,2)*t.deg*r,mo(n,3)*t.rollDeg*r),this.camera.quaternion.multiply(this.rumbleTurn.setFromEuler(this.rumbleEuler))}apply(e){this.camera.position.copy(e.position),this.camera.quaternion.copy(e.quaternion),this.setFov(e.fov)}setFov(e){this.asked=e;let t=lo(e,this.camera.aspect,this.tallest());Math.abs(this.camera.fov-t)>1e-4&&(this.camera.fov=t,this.camera.updateProjectionMatrix())}},fo=e=>e*e*(3-2*e);function po(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453;return(n-Math.floor(n))*2-1}function mo(e,t){let n=Math.floor(e);return z.lerp(po(n,t),po(n+1,t),fo(e-n))}var ho=new _n,go=new V(0,1,0);function _o(e,t,n){return ho.lookAt(e,t,go),n.setFromRotationMatrix(ho)}function vo(e,t){return{position:An(e,t),forward:jn(e),up:N(0,1,0),starboard:N(-Math.cos(e),0,-Math.sin(e))}}function yo(e,t){return Nt(Nt(Nt(N(),e.forward,t.x),e.up,t.y),e.starboard,t.z)}function G(e,t){return Nt(Nt(Nt(e.position,e.forward,t.x),e.up,t.y),e.starboard,t.z)}function bo(e,t){return N(Ce(t,e.forward),Ce(t,e.up),Ce(t,e.starboard))}function xo(e,t){return bo(e,en(t,e.position))}function So(e,t,n,r){let i=n.deckHeight;return{base:G(e,N(t.x,i+r.radius,r.standZ)),top:G(e,N(t.x,i+r.height-r.radius,r.standZ)),radius:r.radius}}function Co(e,t,n){let r=n.deckHeight;return{base:G(e,N(t.x,r+t.radius,t.z)),top:G(e,N(t.x,r+Math.max(t.radius,t.height-t.radius),t.z)),radius:t.radius}}function wo(e,t,n){return N(e.x,t.deckHeight+n.pivotHeight,n.pivotZ)}function To(e,t){let n=M(t.yawLimitDeg);return{yaw:Ee(e.yaw,-n,n),pitch:Ee(e.pitch,M(t.pitchMinDeg),M(t.pitchMaxDeg))}}function Eo(e){return To({yaw:0,pitch:M(e.defaultPitchDeg)},e)}function Do(e){let t=Math.cos(e.pitch);return N(Math.sin(e.yaw)*t,Math.sin(e.pitch),Math.cos(e.yaw)*t)}function Oo(e,t,n,r,i){let a=G(e,wo(t,n,r)),o=yo(e,Do(i));return{pivot:a,direction:o,origin:Nt(a,o,r.barrelLength)}}function ko(e,t){return T(e.minSpeed,e.maxSpeed,Ee(t,0,1))}function Ao(e,t,n){let[r,i]=Ke(e),a=Math.sin(t);return pe(Nt(Nt(ue(e,Math.cos(t)),r,a*Math.cos(n)),i,a*Math.sin(n)))}function jo(e,t,n,r){let i=ko(e,n),a=M(e.coneDeg)/2,o=[];for(let n=0;n<e.balls;n++){let s=t.direction;if(e.balls>1&&a>0){let i=(n+r.next())/e.balls*2*Math.PI,o=a*Math.sqrt(r.range(.1,1));s=Ao(t.direction,o,i)}o.push({index:n,delay:n*e.interval,origin:t.origin,velocity:ue(s,i)})}return o}var Mo=new V,No=class{config;angle;from;to;look;duration;fov;time=0;constructor(e,t,n,r,i,a=4,o=50){this.config=e,this.angle=t,this.from=n,this.to=r,this.look=i,this.duration=a,this.fov=o}update(e,t){this.time+=e;let n=Math.min(1,this.time/this.duration),r=n*n*(3-2*n),i=vo(this.angle(),this.config.arena.orbitRadius),a=G(i,N(T(this.from.x,this.to.x,r),T(this.from.y,this.to.y,r),T(this.from.z,this.to.z,r))),o=G(i,this.look);t.position.set(a.x,a.y,a.z),_o(t.position,Mo.set(o.x,o.y,o.z),t.quaternion),t.fov=this.fov}},Po=class{config;ship;angle;unitIndex;aim;style;pivot=new V;target=new V;constructor(e,t,n,r,i,a){this.config=e,this.ship=t,this.angle=n,this.unitIndex=r,this.aim=i,this.style=a}update(e,t){let n=vo(this.angle(),this.config.arena.orbitRadius),r=yo(n,Do(this.aim())),i=new V(r.x,0,r.z).normalize(),a=new V(-i.z,0,i.x);if(this.ship.pivotWorld(this.unitIndex,this.pivot),this.style===`shoulder`){let e=Hn(this.config,this.unitIndex).x,r=new V(n.forward.x,0,n.forward.z);t.position.copy(this.pivot).addScaledVector(i,-4.3).addScaledVector(r,e>=0?-1.5:1.5),t.position.y+=1.05,this.target.copy(this.pivot).addScaledVector(i,60),this.target.y=this.pivot.y+.6,t.fov=42}else t.position.copy(this.pivot).addScaledVector(i,6).addScaledVector(a,2.8),t.position.y+=1.9,this.target.copy(this.pivot).addScaledVector(i,-.9),this.target.y+=.55,t.fov=46;_o(t.position,this.target,t.quaternion)}},Fo=class{config;ship;angle;unitIndex;aim;at=new V;target=new V;constructor(e,t,n,r,i){this.config=e,this.ship=t,this.angle=n,this.unitIndex=r,this.aim=i}update(e,t){let n=yo(vo(this.angle(),this.config.arena.orbitRadius),Do(this.aim())),r=new V(n.x,0,n.z).normalize(),i=new V(-r.z,0,r.x);this.ship.crewSpot(this.unitIndex,this.at),t.position.copy(this.at).addScaledVector(r,3).addScaledVector(i,1.8),t.position.y+=2.8,this.target.copy(this.at).addScaledVector(r,.4).addScaledVector(i,-.05),this.target.y+=1.3,t.fov=34,_o(t.position,this.target,t.quaternion)}},Io=new V,Lo=new V,Ro=new V,zo=new V(0,1,0),Bo=class{config;angle;options;constructor(e,t,n={back:44,height:30,lookAhead:80,lookHeight:0,side:-16}){this.config=e,this.angle=t,this.options=n}update(e,t){let n=vo(this.angle(),this.config.arena.orbitRadius),{back:r,height:i,lookAhead:a,lookHeight:o,side:s}=this.options,c=n.position;t.position.set(c.x-n.starboard.x*r+n.forward.x*s,i,c.z-n.starboard.z*r+n.forward.z*s),Io.set(c.x+n.starboard.x*a,o,c.z+n.starboard.z*a),_o(t.position,Io,t.quaternion),t.fov=this.config.presentation.thirdPersonFovDeg}},Vo={shoulder:{back:1.75,up:1.6,left:1},raised:{back:1.75,up:2.1,left:0},centred:{back:1.75,up:1.05,left:0}},Ho=class{config;ship;angle;unitIndex;aim;aspect;view;options;kick=0;target=new V;constructor(e,t,n,r,i,a,o,s={tiltDownDeg:7,maxHorizontalFovDeg:96}){this.config=e,this.ship=t,this.angle=n,this.unitIndex=r,this.aim=i,this.aspect=a,this.view=o,this.options=s}fired(){this.kick=1}update(e,t){this.kick=Math.max(0,this.kick-e*2.8);let n=this.kick*this.kick,r=this.aim(),i=yo(vo(this.angle(),this.config.arena.orbitRadius),Do(r)),a=Io.set(i.x,0,i.z).normalize(),o=Vo[this.view()],s=this.ship.pivotWorld(this.unitIndex,this.target);t.position.copy(s).addScaledVector(a,-(o.back+.5*n)),t.position.x+=a.z*o.left,t.position.z-=a.x*o.left,t.position.y+=o.up+.1*n;let c=this.config.presentation,l=r.pitch*c.firstPersonPitchFollow-z.degToRad(this.options.tiltDownDeg-5*n);this.target.copy(t.position).addScaledVector(a,Math.cos(l)*10).add(Lo.set(0,Math.sin(l)*10,0)),_o(t.position,this.target,t.quaternion);let u=z.degToRad(this.options.maxHorizontalFovDeg/2),d=z.radToDeg(2*Math.atan(Math.tan(u)/Math.max(.5,this.aspect())));t.fov=Math.min(c.firstPersonFovDeg,d)+7*n}},Uo=.72;function Wo(e,t,n,r,i){let a=Math.tan(z.degToRad(r/2))*Uo,o=a*Math.max(.3,i),s=Ro.crossVectors(n,zo).normalize(),c=new V().crossVectors(s,n),l=0;for(let r of e){let e=r.x-t.x,i=r.y-t.y,u=r.z-t.z,d=e*n.x+i*n.y+u*n.z,f=Math.abs(e*s.x+i*s.y+u*s.z),p=Math.abs(e*c.x+i*c.y+u*c.z);l=Math.max(l,f/o-d,p/a-d,4-d)}return l}var Go=class{target;ground;lens;fov;distance;height;center=new V;lastPosition=new V;look=new V;direction=new V;heading=new V;back=0;initialised=!1;constructor(e,t,n,r=60,i=15,a=5){this.target=e,this.ground=t,this.lens=n,this.fov=r,this.distance=i,this.height=a}update(e,t){let n=this.target();if(n){let r=Lo.set(n.velocity.x,0,n.velocity.z);r.lengthSq()<1e-6&&r.set(0,0,1),r.normalize();let i=Math.atan2(this.height,this.distance);if(this.direction.copy(r).multiplyScalar(Math.cos(i)).setY(-Math.sin(i)),!this.initialised)this.center.copy(n.position),this.heading.copy(this.direction);else{let t=Io.subVectors(n.position,this.lastPosition);t.length()<=n.velocity.length()*e*1.5+.5&&this.center.add(t),this.center.lerp(n.position,1-Math.exp(-e*6)),this.heading.lerp(this.direction,1-Math.exp(-e*4)).normalize()}this.lastPosition.copy(n.position);let a=Math.hypot(this.distance,this.height),o=.25*Math.min(1,a/Math.max(a,this.back));this.look.copy(this.center).addScaledVector(n.velocity,o);let s=this.lens(this.fov),c=Math.max(a,Wo(n.points,this.look,this.heading,s.fov,s.aspect));this.initialised?(this.back+=(c-this.back)*(1-Math.exp(-e*(c>this.back?8:1.5))),this.back=Math.max(this.back,c*.9)):(this.back=c,this.initialised=!0),t.position.copy(this.look).addScaledVector(this.heading,-this.back),t.position.y=Math.max(t.position.y,this.ground(t.position.x,t.position.z)+4,2)}_o(t.position,this.look,t.quaternion),t.fov=this.fov}},Ko=class{eye;direction;fov;kick=0;constructor(e,t,n){this.eye=e,this.direction=t,this.fov=n}fired(){this.kick=1}update(e,t){this.kick=Math.max(0,this.kick-e*3),t.position.copy(this.eye());let n=this.direction();Io.copy(t.position).addScaledVector(n,10),Io.y+=this.kick*this.kick*2.2,_o(t.position,Io,t.quaternion),t.fov=this.fov*(1+.6*this.kick*this.kick)}},qo=class{eye;target;fov;constructor(e,t,n=55){this.eye=e,this.target=t,this.fov=n}update(e,t){t.position.copy(this.eye),_o(this.eye,this.target,t.quaternion),t.fov=this.fov}},Jo=class{radius;height;speed;fov;angle;constructor(e,t,n,r=.05,i=50){this.radius=e,this.height=t,this.speed=r,this.fov=i,this.angle=n}update(e,t){this.angle+=e*this.speed,t.position.set(Math.cos(this.angle)*this.radius,this.height,Math.sin(this.angle)*this.radius),_o(t.position,Io.set(0,4,0),t.quaternion),t.fov=this.fov}},Yo=class{spot;deckHeight;hull;lens;options;time=0;constructor(e,t,n,r,i={width:.82,nearest:19,height:7,lookHeight:.5,drift:.12,fov:40,drop:.12}){this.spot=e,this.deckHeight=t,this.hull=n,this.lens=r,this.options=i}update(e,t){this.time+=e;let{x:n,z:r,yaw:i}=this.spot,{width:a,nearest:o,height:s,lookHeight:c,drift:l,fov:u,drop:d}=this.options,f=Math.max(1,this.hull.length/25),p=this.lens(u),m=Math.tan(z.degToRad(p.fov)/2)*Math.max(.5,p.aspect),h=Math.max(o*f,this.hull.length/(2*a*m)),g=Math.sin(i),_=Math.cos(i),v=Math.cos(i),y=-Math.sin(i),b=n+v*this.hull.centerX,x=r+y*this.hull.centerX,S=l*Math.sin(this.time*.11),C=Math.cos(S)*h,w=Math.sin(S)*h,T=s/o*h;t.position.set(b+g*C+v*w,this.deckHeight+T+.3*f*Math.sin(this.time*.23),x+_*C+y*w);let E=p.aspect<1?d*h*Math.tan(z.degToRad(p.fov)/2):0;Io.set(b,this.deckHeight+c*f+E,x),_o(t.position,Io,t.quaternion),t.fov=u}},Xo=N();function Zo(e,t,n,r=Xo,i){let a=e.velocity,o=n.drag*Tn(a),s=i?N(r.x+i.x-o*a.x,r.y+i.y-n.gravity-o*a.y,r.z+i.z-o*a.z):N(r.x-o*a.x,r.y-n.gravity-o*a.y,r.z-o*a.z);return{position:Nt(Nt(e.position,a,t),s,.5*t*t),velocity:Nt(a,s,t)}}function Qo(e,t,n,r,i=Xo,a=n.maxFlightTime){let o=1/n.stepsPerSecond,s=Math.ceil(a/o),c=[e],l={position:e,velocity:t};for(let e=0;e<s;e++){let t=Zo(l,o,n,i),a=r(l.position,t.position,e*o);if(a)return c.push(a.point),{points:c,dt:o,duration:(e+a.t)*o,hit:a};c.push(t.position),l=t}return{points:c,dt:o,duration:s*o,hit:null}}function $o(e,t){let{points:n,dt:r,duration:i}=e,a=Math.max(0,Math.min(t,i)),o=Math.min(Math.floor(a/r),n.length-2);if(o<0)return n[0];let s=o*r,c=Math.min((o+1)*r,i),l=c>s?Math.min(1,(a-s)/(c-s)):1;return Ye(n[o],n[o+1],l)}function es(e,t){let n=e.dt,r=Math.max(0,Math.min(t,e.duration-n)),i=$o(e,r),a=$o(e,r+n),o=Math.min(r+n,e.duration)-r;return o>0?Nt(N(),en(a,i),1/o):N()}function ts(e){let{points:t}=e,n=t[t.length-1];for(let e=t.length-2;e>=0;e--){let r=en(n,t[e]),i=Tn(r);if(i>1e-6)return Nt(N(),r,1/i)}return N(0,-1,0)}var ns=20,rs=new WeakMap,is=new WeakMap;function as(e,t){let n=rs.get(e);if(n===void 0){n=ns;for(let{center:t,halfSize:r}of e)n=Math.max(n,Math.hypot(Math.abs(t.x)+r.x,Math.abs(t.y)+r.y,Math.abs(t.z)+r.z)+3);rs.set(e,n)}let r=is.get(t);if(r===void 0){r=0;for(let e of t)r=Math.max(r,Math.hypot(Math.abs(e.x)+e.radius,Math.max(Math.abs(e.bottom),Math.abs(e.top))+e.radius,e.radius)+3);is.set(t,r)}return Math.max(n,r)}function os(e,t){return e.y<=0?0:t.y>0?null:e.y/(e.y-t.y)}var ss=[`x`,`y`,`z`];function cs(e,t,n,r){let i=0,a=1;for(let o of ss){let s=t[o]-e[o];if(Math.abs(s)<1e-12){if(e[o]<n[o]||e[o]>r[o])return null;continue}let c=(n[o]-e[o])/s,l=(r[o]-e[o])/s;if(c>l&&([c,l]=[l,c]),i=Math.max(i,c),a=Math.min(a,l),i>a)return null}return i}function ls(e,t,n,r){let i=en(e,n),a=Ce(t,t),o=Ce(i,t),s=Ce(i,i)-r*r;if(s<=0)return 0;if(o>0||a===0)return null;let c=o*o-a*s;return c<0?null:(-o-Math.sqrt(c))/a}var us=(e,t)=>t!==null&&t>=0&&t<=1&&(e===null||t<e)?t:e;function ds(e,t,n,r,i){if(ge(e,ke(e,n,r))<=i)return 0;let a=en(t,e),o=null,s=en(r,n),c=Ce(s,s);if(c>0){let t=en(e,n),r=en(a,ue(s,Ce(a,s)/c)),l=en(t,ue(s,Ce(t,s)/c)),u=Ce(r,r),d=Ce(l,r),f=Ce(l,l)-i*i,p=d*d-u*f;if(u>1e-12&&p>=0){let t=(-d-Math.sqrt(p))/u,r=Ce(en(Nt(e,a,t),n),s)/c;r>=0&&r<=1&&(o=us(o,t))}}return o=us(o,ls(e,a,n,i)),o=us(o,ls(e,a,r,i)),o}function fs(e,t,n,r){let i=Lt(n);if(e.y>i.top&&t.y>i.top)return null;let a=i.boundingRadius;if(Math.hypot(e.x,e.z)>a&&Math.hypot(t.x,t.z)>a)return null;let o=fn(i,r),s=n=>{let a=Ye(e,t,n),s=a.y-Ct(i,r,a.x,a.z);return o.length>0?Math.min(s,x(a.x,a.y,a.z,o)):s};if(s(0)<=0)return 0;let c=0,l;if(o.length===0){if(s(1)<=0)l=1;else if(s(.5)<=0)l=.5;else return null}else{let e=[.25,.5,.75,1].find(e=>s(e)<=0);if(e===void 0)return null;c=e-.25,l=e}for(let e=0;e<14;e++){let e=(c+l)/2;s(e)<=0?l=e:c=e}return l}function ps(e,t,n){let r=Lt(t);if(e.y<Ct(r,n,e.x,e.z))return!0;let i=fn(r,n);return i.length>0&&x(e.x,e.y,e.z,i)<=0}function ms(e,t,n){let r=Lt(t),i=fn(r,n),a=(e,t,a)=>{let o=t-Ct(r,n,e,a);return i.length>0?Math.min(o,x(e,t,a,i)):o},o=.05,s=N(a(e.x+o,e.y,e.z)-a(e.x-o,e.y,e.z),a(e.x,e.y+o,e.z)-a(e.x,e.y-o,e.z),a(e.x,e.y,e.z+o)-a(e.x,e.y,e.z-o)),c=Math.hypot(s.x,s.y,s.z);return c>1e-9?ue(s,1/c):N(0,1,0)}function hs(e,t,n,r,i,a){let o=1/0,s=`water`,c,l,u,d,f,p=null,m=a?.underground?null:os(t,n);m!==null&&(o=m);let h=a?.underground?null:fs(t,n,e.arena,e.ground);if(h!==null&&h<o){o=h,s=`island`;let r=Lt(e.arena);if(r.solids.length>0){let i=Ye(t,n,h);d=ct(r,e.ground,i.x,i.y,i.z,Ct(r,e.ground,i.x,i.z))}}for(let m of e.ships){let e=as(m.hull,m.masts)+ge(t,n)+r;if(m.side===i||ge(t,m.frame.position)>e)continue;let h=xo(m.frame,t),g=xo(m.frame,n);for(let e of m.hull){let t=e.halfSize,n=e.center,i=r,a=cs(h,g,N(n.x-t.x-i,n.y-t.y-i,n.z-t.z-i),N(n.x+t.x+i,n.y+t.y+i,n.z+t.z+i));a!==null&&a<o&&(o=a,s=`hull`,c=m.side,l=void 0,u=void 0,d=void 0,p=null)}for(let e=0;e<m.masts.length;e++){let t=m.masts[e];if(t.top<=t.bottom||a?.masts?.includes(e))continue;let n=N(t.x,t.bottom,0),i=N(t.x,t.top,0),f=ds(h,g,n,i,t.radius+r),_=Math.min(a?.rig??0,t.top-t.bottom),v=!1;if(_>r){let e=ds(h,g,N(t.x,t.bottom+_,0),i,t.radius+_);e!==null&&(f===null||e<f)&&(f=e,v=!0)}if(f!==null&&f<o&&(o=f,s=`mast`,c=m.side,l=void 0,u=e,d=void 0,p=null,v)){let e=Ye(h,g,f),r=ke(e,n,i),a=en(e,r),o=Math.hypot(a.x,a.y,a.z);p=G(m.frame,o>1e-9?Nt(r,a,t.radius/o):r)}}for(let e of m.crew){let{base:i,top:a,radius:f}=e.capsule,h=ds(t,n,i,a,f+r);h!==null&&h<o&&(o=h,s=`crew`,c=m.side,l=e.unitIndex,u=void 0,d=void 0,p=null)}for(let e of m.machines??[]){let{base:i,top:a,radius:h}=e.capsule,g=ds(t,n,i,a,h+r);g!==null&&g<o&&(o=g,s=`machine`,c=m.side,l=void 0,u=void 0,d=void 0,f=e.kind,p=null)}}if(o===1/0)return null;let g={t:o,point:p??Ye(t,n,o),surface:s,side:c,unitIndex:l,mast:u,rock:d};return s===`machine`?{...g,machine:f}:g}function gs(e,t){return Math.max(0,ge(e,ke(e,t.base,t.top))-t.radius)}var _s=1e-9;function vs(e){return e!==null&&(e.surface===`hull`||e.surface===`mast`||e.surface===`crew`||e.surface===`machine`)&&e.side!==void 0}var ys=e=>e<=_s?0:e;function bs(e,t,n,r,i=1,a={}){let o=Math.min(r.damage*i,e.hp);e.hp=ys(e.hp-o);let s=r.crewDamage??r.damage,c=[];for(let i of t.crew){let t=e.crew[i.unitIndex],o=i.unitIndex===a.unitIndex||gs(n,i.capsule)<=r.splashRadius;if(t.hp<=0||!o)continue;let l=Math.min(s,t.hp);t.hp=ys(t.hp-l),c.push({unitIndex:i.unitIndex,amount:l,hp:t.hp,killed:t.hp===0})}let l=[];for(let i of t.machines??[]){let t=e.machines?.[i.kind],o=i.kind===a.machine||gs(n,i.capsule)<=r.splashRadius;if(!t||t.hp<=0||!o)continue;let c=Math.min(s,t.hp);t.hp=ys(t.hp-c),l.push({machine:i.kind,amount:c,hp:t.hp,destroyed:t.hp===0})}return{side:e.side,shipAmount:o,shipHp:e.hp,crew:c,machines:l}}function xs(e,t){let n=xo(e.frame,t),r=1/0;for(let{center:t,halfSize:i}of e.hull){let e=Math.max(0,Math.abs(n.x-t.x)-i.x),a=Math.max(0,Math.abs(n.y-t.y)-i.y),o=Math.max(0,Math.abs(n.z-t.z)-i.z);r=Math.min(r,Math.hypot(e,a,o))}return r}var Ss=4,Cs=60;function ws(e,t,n,r){let{ship:i,cannonMount:a}=e.config,o=e.frameOf(t),s=G(o,wo(Hn(e.config,n),i,a)),c=bo(o,en(r,s));return Math.atan2(c.x,c.z)}function Ts(e,t,n,r,i,a){let{physics:o}=e.config,s=e.cannonOf(t,n),c=ws(e,t,n,r);if(o.drag===0){let l=N(a.x,a.y-o.gravity,a.z),u=0;for(let a=0;a<Ss;a++){let a=e.muzzle(t,n,{yaw:c,pitch:i}).origin,s=Es(en(r,a),l,i,o.maxFlightTime);if(s===null)return null;let d=ue(Nt(en(r,a),l,-.5*s*s),1/s),f=bo(e.frameOf(t),d);c=Math.atan2(f.x,f.z),u=Math.sqrt(d.x*d.x+d.y*d.y+d.z*d.z)}let d=(u-s.minSpeed)/(s.maxSpeed-s.minSpeed);return d>=0&&d<=1?{aim:{yaw:c,pitch:i},power:d}:null}let l=r,u=null;for(let o=0;o<Ss;o++){c=ws(e,t,n,l);let o=e.muzzle(t,n,{yaw:c,pitch:i});if(u=Ds(e,t,n,o,l),u===null)return null;let d=Os(o,T(s.minSpeed,s.maxSpeed,u),r.y,e,a);if(!d)return null;l=N(l.x-(d.x-r.x),l.y,l.z-(d.z-r.z))}return u===null?null:{aim:{yaw:c,pitch:i},power:u}}function Es(e,t,n,r){let i=Math.tan(n),a=n=>{let r=.5*n*n,a=e.x-t.x*r,o=e.z-t.z*r;return e.y-t.y*r-i*Math.sqrt(a*a+o*o)};if(a(0)>=0||a(r)<0)return null;let o=0,s=r;for(let e=0;e<Cs;e++){let e=(o+s)/2;a(e)<0?o=e:s=e}return(o+s)/2}function Ds(e,t,n,r,i){let a=e.cannonOf(t,n),o=e.config.physics,s=ze(r.origin,i),c=r.direction,l=Math.sqrt(c.x*c.x+c.z*c.z);if(l<1e-6)return null;if(o.drag===0){let e=r.origin.y+s*c.y/l-i.y;if(e<=0)return null;let t=(Math.sqrt(o.gravity*s*s/(2*l*l*e))-a.minSpeed)/(a.maxSpeed-a.minSpeed);return t>=0&&t<=1?t:null}let u=e=>{let t={position:r.origin,velocity:ue(c,T(a.minSpeed,a.maxSpeed,e))},n=1/o.stepsPerSecond;for(let e=0;e<o.maxFlightTime;e+=n){let e=Zo(t,n,o),i=ze(e.position,r.origin);if(i>=s){let n=ze(t.position,r.origin);return T(t.position.y,e.position.y,(s-n)/(i-n))}t=e}return-1/0};if(u(1)<i.y||u(0)>i.y)return null;let d=0,f=1;for(let e=0;e<30;e++){let e=(d+f)/2;u(e)<i.y?d=e:f=e}return(d+f)/2}function Os(e,t,n,r,i){let a=r.config.physics,o=1/a.stepsPerSecond,s={position:e.origin,velocity:ue(e.direction,t)};for(let e=0;e<a.maxFlightTime;e+=o){let e=Zo(s,o,a,i);if(e.velocity.y<0&&e.position.y<=n){let t=(s.position.y-n)/(s.position.y-e.position.y);return N(T(s.position.x,e.position.x,t),n,T(s.position.z,e.position.z,t))}s=e}return null}function ks(e,t,n,r,i=1,a=e.windAcceleration()){let o=e.config.aim,s=M(o.yawLimitDeg),c=[];for(let l=o.pitchMinDeg;l<=o.pitchMaxDeg+1e-9;l+=i){let i=Ts(e,t,n,r,M(l),a);if(!i||Math.abs(i.aim.yaw)>s)continue;let o=e.predict(t,n,i.aim,i.power,a);vs(o.hit)&&o.hit.side===h(t)&&c.push({...i,flight:o})}return c}var As=1e-9;function js(e,t){let n=0,r=0;return e.ship.masts.forEach((e,i)=>{let a=Math.max(0,e.top-e.sailFrom);n+=a,r+=Math.min(a,Math.max(0,(t.masts[i]?.top??e.top)-e.sailFrom))}),n>0?r/n:1}function Ms(e,t,n=0){let r=e.destruction,i=Math.min(1,Math.max(0,e.ship.minSailMove)),a=1;return r?.enabled&&r.masts&&t<1&&(a=i+(1-i)*Math.max(0,t)),r?.enabled&&r.sails&&n>0&&(a=Math.max(Math.min(a,i),a-n*Math.max(0,e.ship.sailHoleCost))),a}function Ns(e,t,n,r){let i=e.ship.masts[n]?.sails?.[r];return i!==void 0&&i.hoist<=(t.masts[n]?.top??e.ship.masts[n].top)+1e-9}function Ps(e,t){return(t.sailHoles??[]).filter(n=>Ns(e,t,n.mast,n.sail)).length}function Fs(e,t){return Ms(e,js(e,t),Ps(e,t))}function Is(e,t){return e.ship.fuelPerTurn*Fs(e,t)}function Ls(e,t,n,r=0){let i=[],a=0;n.forEach((e,n)=>(e.sails??[]).forEach((r,o)=>{if(!(r.hoist>e.top+1e-9||r.corners.length<3)){for(let e of r.corners)a=Math.max(a,Math.hypot(e.x,e.y,e.z));i.push({mast:n,sail:o,corners:r.corners.map(e=>G(t,e))})}}));let o=[];if(i.length===0)return o;let s=new Set,{points:c,dt:l,duration:u}=e;for(let e=0;e+1<c.length;e++){let n=c[e],d=c[e+1];if(ge(ke(t.position,n,d),t.position)>a+r+1)continue;let f=[];for(let e of i){if(s.has(e))continue;let t=!1;for(let r=1;r+1<e.corners.length;r++){let i=zs(n,d,e.corners[0],e.corners[r],e.corners[r+1]);if(i!==null){f.push({f:i,s:e,at:null}),t=!0;break}}let i=!t&&r>0?Rs(n,d,e.corners,r):null;i&&f.push({f:i.f,s:e,at:i.point})}f.sort((e,t)=>e.f-t.f);let p=e*l,m=Math.min((e+1)*l,u);for(let{f:e,s:r,at:i}of f){s.add(r);let a=i??Ye(n,d,e);o.push({time:p+e*(m-p),mast:r.mast,sail:r.sail,point:a,local:xo(t,a)})}}return o}function Rs(e,t,n,r){let i=Pe(en(n[1],n[0]),en(n[2],n[0])),a=Ce(en(e,n[0]),i),o=Ce(en(t,n[0]),i);if(Ce(i,i)<1e-18||a===o||a>0&&o>0||a<0&&o<0)return null;let s=a/(a-o),c=Ye(e,t,s),l=1/0,u=c;for(let e=0;e<n.length;e++){let t=ke(c,n[e],n[(e+1)%n.length]),r=ge(c,t);r<l&&(l=r,u=t)}return l<=r?{f:s,point:u}:null}function zs(e,t,n,r,i){let a=en(t,e),o=en(r,n),s=en(i,n),c=Pe(a,s),l=Ce(o,c);if(Math.abs(l)<1e-12)return null;let u=en(e,n),d=Ce(u,c)/l;if(d<0||d>1)return null;let f=Pe(u,o),p=Ce(a,f)/l;if(p<0||d+p>1)return null;let m=Ce(s,f)/l;return m>=0&&m<=1?m:null}function Bs(e,t,n,r,i){let a=e.destruction,o=a.craterRadius*Math.sqrt(Math.max(0,r))*i,s=a.craterDepth*Math.max(0,r);if(!(o>0)||!(s>0))return null;let c={x:n.x,z:n.z,radius:o,depth:s};return t.craters.push(c),c}function Vs(e){let t=Lt(e.arena),n=e.destruction;return{rocks:t.solids.map(e=>({solid:{...e},hp:t.id===`lighthouse`?n.towerHp:n.rockHp})),peaks:t.peaks.map(()=>({cap:null,hp:n.rockHp}))}}function Hs(e,t,n,r,i){let a=t.rocks[n],o=a?.solid;if(!a||!o||o.kind===`column`&&r.y>o.top)return null;if(a.hp-=i,a.hp>As)return{hp:a.hp,fall:null};let s=e.destruction;if(a.hp=Lt(e.arena).id===`lighthouse`&&o.kind===`column`?s.towerHp:s.rockHp,o.kind===`arch`){a.solid=null;let e=[-1,1].map(e=>{let n={kind:`column`,x:o.x+e*o.radius*o.ux,z:o.z+e*o.radius*o.uz,bottom:-6,top:o.y,radiusBottom:o.tube,radiusTop:o.tube};return t.rocks.push({solid:n,hp:s.rockHp})-1});return{hp:a.hp,fall:{top:null,legs:e}}}let c=Math.max(0,Lt(e.arena).height(o.x,o.z)),l=Math.max(o.bottom,c+s.minStump,Math.min(r.y,o.top-s.minPiece));if(l>=o.top)return null;let u=o.radiusBottom+(o.radiusTop-o.radiusBottom)*(l-o.bottom)/(o.top-o.bottom);return a.solid={...o,top:l,radiusTop:u},{hp:a.hp,fall:{top:l,legs:[]}}}function Us(e,t,n){let r=Lt(e.arena),i=r.peakAt(n.x,n.z);if(i===void 0)return;let a=xn(r.peaks[i],e.destruction.tipRadius);if(n.y<a)return;let o=t.peaks[i].cap;return o!==null&&n.y>o||(o??r.peaks[i].height)-e.destruction.minPiece>=a?i:void 0}function Ws(e,t,n,r,i){let a=Lt(e.arena),o=t.peaks[n],s=o.cap??a.peaks[n].height;if(o.cap!==null&&r.y>o.cap)return null;if(o.hp-=i,o.hp>As)return{hp:o.hp,fall:null};o.hp=e.destruction.rockHp;let c=Math.max(xn(a.peaks[n],e.destruction.tipRadius),Math.min(r.y,s-e.destruction.minPiece));return c>=s?null:(o.cap=c,{hp:o.hp,fall:{top:c,legs:[]}})}function Gs(e){return e.ship.masts.map(t=>({top:t.top,hp:e.ship.mastHp}))}function Ks(e,t){return e.ship.masts.map((e,n)=>({...e,top:t.masts[n]?.top??e.top}))}function qs(e,t,n){let r=t.masts[n],i=e.ship.masts[n];if(!r||!i||r.top<=i.bottom)return null;let a=r.top;return r.top=i.bottom,r.hp=e.ship.mastHp,{mast:n,from:a,top:r.top}}function Js(e,t,n,r,i,a){let o=t.masts[n],s=e.ship.masts[n];if(!o||!s)return null;let c=Math.min(Math.max(r,s.bottom),a);if(c>o.top||(o.hp-=i,o.hp>As))return null;let l=o.top;return o.top=Math.max(s.bottom,Math.min(c,l-e.destruction.minPiece)),o.hp=e.ship.mastHp,{mast:n,from:l,top:o.top}}var Ys=[`sniper`,`revive`,`extraBall`,`magnet`,`repair`,`gifts`,`laser`,`antiMissile`,`healer`,`accuracy`,`wings`,`charger`,`hotShot`,`mist`,`hiredHand`,`shield`,`rogueWave`,`depression`,`sacrifice`,`pickpocket`],Xs=[`antiMissile`,`healer`,`charger`,`shield`],Zs=e=>Xs.includes(e),Qs=1e-9,$s=.25,ec=.75,tc=6,nc=30,rc=8,ic=.3,ac=3,oc=N(),sc=()=>({rifle:!1,extraBalls:0,magnet:!1,accuracy:!1,wings:!1,hotShot:!1}),cc=e=>e.rifle||e.extraBalls>0||e.magnet||e.accuracy||e.wings||e.hotShot;function lc(e,t,n,r){let i=t.crew.map(e=>e.unitIndex),a=e=>t.crew[e].hp>0,o=n=>Vn(e,t.crew[n].unit),s=e=>t.upgrades[e];switch(n){case`sniper`:return i.filter(e=>a(e)&&!s(e).rifle);case`extraBall`:return i.filter(a);case`magnet`:return i.filter(e=>a(e)&&!s(e).magnet);case`accuracy`:return i.filter(e=>a(e)&&!s(e).accuracy&&o(e).balls>1&&o(e).coneDeg>0);case`wings`:return i.filter(e=>a(e)&&!s(e).wings&&o(e).balls+s(e).extraBalls===1);case`revive`:return i.filter(e=>!a(e));case`hotShot`:return i.filter(e=>a(e)&&!s(e).hotShot&&!o(e).pirate);case`depression`:{let e=r?r.crew.filter(e=>e.hp>0).map(e=>e.unitIndex):[];return r&&r.depressed===null&&e.length>1?e:[]}default:return null}}function uc(e,t){return t.crew.length>e.gunners.length?[]:Fn(e)}function dc(e,t){return t?Xs.filter(n=>t.machines[n]!==null&&e.machines[n]===null):[]}function fc(e,t,n,r){let i=lc(e,t,n,r);if(i)return i.length>0;switch(n){case`mist`:return t.mist===null;case`hiredHand`:return uc(e,t).length>0;case`rogueWave`:return!(!r||r.rocked);case`sacrifice`:return t.crew.filter(e=>e.hp>0).length>1;case`pickpocket`:return dc(t,r).length>0;case`repair`:return t.hp<e.ship.hp-Qs||mc(e,t).length>0||t.fire!==null;case`laser`:return!t.laser;case`antiMissile`:case`healer`:case`charger`:case`shield`:return t.machines[n]===null;default:return!0}}function pc(e,t,n,r){let{choices:i,weights:a}=e.cards,o=e=>Math.max(0,a[e]??0),s=Ys.filter(n=>o(n)>0&&fc(e,t,n,r)),c=[];for(let a=0;a<Math.round(i)&&s.length>0;a++){let i=n.range(0,s.reduce((e,t)=>e+o(t),0)),a=s.length-1;for(let e=0;e<s.length;e++)if(i-=o(s[e]),i<0){a=e;break}let l=s.splice(a,1)[0],u=lc(e,t,l,r),d={kind:l,unit:u?u[n.int(u.length)]:null};if(l===`hiredHand`){let r=uc(e,t);c.push({...d,recruit:r[n.int(r.length)]})}else if(l===`pickpocket`){let e=dc(t,r);c.push({...d,machine:e[n.int(e.length)]})}else c.push(d)}return c}function mc(e,t){let n=[];for(let e=0;e<t.holes;e++)n.push({kind:`hole`});return t.sailHoles.forEach((r,i)=>{Ns(e,t,r.mast,r.sail)&&n.push({kind:`tear`,index:i})}),e.ship.masts.forEach((e,r)=>{(t.masts[r]?.top??e.top)<e.top-Qs&&n.push({kind:`mast`,index:r})}),n}function hc(e,t,n){let r=e.ship.hp,i=t.hp;t.hp=Math.min(r,t.hp+Math.max(0,e.cards.repair.hp*r));let a=mc(e,t),o=a.length>0?Math.min(a.length,Math.max(1,Math.ceil(e.cards.repair.parts*a.length-Qs))):0;for(let e=0;e<o;e++){let t=e+n.int(a.length-e);[a[e],a[t]]=[a[t],a[e]]}let s=a.slice(0,o),c=s.filter(e=>e.kind===`hole`).length;t.holes-=c;let l=s.flatMap(e=>e.kind===`tear`?[e.index]:[]).sort((e,t)=>e-t),u=l.map(e=>t.sailHoles[e]);for(let e=l.length-1;e>=0;e--)t.sailHoles.splice(l[e],1);let d=s.flatMap(e=>e.kind===`mast`?[e.index]:[]).sort((e,t)=>e-t);for(let n=t.sailHoles.length-1;n>=0;n--){let r=t.sailHoles[n];d.includes(r.mast)&&!Ns(e,t,r.mast,r.sail)&&t.sailHoles.splice(n,1)}for(let n of d)t.masts[n].top=e.ship.masts[n].top,t.masts[n].hp=e.ship.mastHp;return{amount:t.hp-i,holes:c,tears:u,masts:d}}function gc(e,t){let n=[`damage`,`blast`,`meteor`],r=t=>Math.max(0,e.powerUps.weights[t]??0),i=n.reduce((e,t)=>e+r(t),0),a=t.range(0,i);if(i<=0)return`damage`;for(let e of n)if(a-=r(e),a<0)return e;return n[n.length-1]}function _c(e,t,n,r){let i=r*ze(t,n),{points:a}=e;for(let e=1;e<a.length;e++){let n=ze(t,a[e-1]),r=ze(t,a[e]);if(r>=i)return r>n?Ye(a[e-1],a[e],(i-n)/(r-n)):a[e]}return null}function vc(e,t,n,r,i){let{config:a}=e,{min:o,max:s}=a.cards.gifts.crates,c=Math.max(0,Math.round(o)+n.int(Math.max(0,Math.round(s)-Math.round(o))+1)),l=e.livingGunners(t);if(c===0||l.length===0)return[];let u=e.frameOf(t===`player`?`enemy`:`player`),d=a.ship.hull,f=Math.min(...d.map(e=>e.center.x-e.halfSize.x))+1,p=Math.max(...d.map(e=>e.center.x+e.halfSize.x))-1,m=Math.min(nc,a.powerUps.maxPitchDeg,a.aim.pitchMaxDeg),h=M(a.aim.yawLimitDeg),g=a.powerUps.radius,_=Lt(a.arena),v=e.ground(),y=fn(_,v),b=Math.max(1,Math.ceil(c/ac)),S=[];for(let o=0;o<b;o++){let s=Math.floor(c/b)+ +(o<c%b),d=null;for(let r=0;r<rc&&!(d&&d.reach>=ec);r++){let r=l[n.int(l.length)],i=n.range(f,p),o=M(n.range(tc,Math.max(tc,m))),s=G(u,N(i,a.ship.deckHeight+.5,0)),c=Ts(e,t,r,s,o,oc);if(!c||Math.abs(c.aim.yaw)>h)continue;let g=e.predict(t,r,c.aim,c.power,oc),_=g.points[0],v=g.points[g.points.length-1],y=ze(_,v)/Math.max(1e-6,ze(_,s));(!d||y>d.reach)&&(d={flight:g,from:_,to:s,reach:y})}for(let e=0;e<s;e++){let t=$s+.5*(e+n.range(.2,.8))/s,o=n.range(-.3,ic)*g,c=n.range(-.3,ic)*g,l=gc(a,n),u=d?_c(d.flight,d.from,d.to,t):null;if(!d||!u)continue;let f=d.to.x-d.from.x,p=d.to.z-d.from.z,m=Math.hypot(f,p)||1,h=N(u.x-p/m*o,u.y+c,u.z+f/m*o),b=Math.max(0,Ct(_,v,h.x,h.z))+g;h.y<b||y.length>0&&x(h.x,h.y,h.z,y)<g||S.push({id:i+S.length,kind:l,spawnClock:r,anchor:h,travel:0,motion:`linear`,phase:0,uses:1})}}return S}function yc(e,t,n){let r=t.crew.filter(t=>t.hp>0&&t.hp<In(e,t.unit)-Qs);if(r.length===0)return null;let i=r[n.int(r.length)],a=In(e,i.unit),o=i.hp;return i.hp=Math.min(a,i.hp+Math.max(0,e.cards.healer.heal*a)),{unitIndex:i.unitIndex,amount:i.hp-o}}function bc(e,t){let n=e.crew.filter(e=>e.hp>0);return n.length>0?n[t.int(n.length)].unitIndex:null}var xc=[`damage`,`blast`,`split`,`meteor`],Sc=18,Cc=1.5,wc=.8,Tc=.3,Ec=45,Dc=.6,Oc=1.2,kc=6,Ac=2,jc=48,Mc=.3,Nc=.7,Pc=24,Fc=[[`linear`,35],[`fast`,15],[`ease`,40],[`jitter`,10]];function Ic(e,t,n,r,i){let{weights:a,splitUses:o}=e.powerUps,s=xc.reduce((e,t)=>e+Math.max(0,a[t]??0),0);if(s<=0)return null;let c=t.range(0,s),l=xc[0];for(let e of xc)if(l=e,c-=Math.max(0,a[e]??0),c<0)break;let u=t.range(0,100),d=`linear`;for(let[e,t]of Fc)if(d=e,u-=t,u<0)break;let f=t.range(0,2),p=i(l);if(!p)return null;let{anchor:m,travel:h}=p;return{id:n,kind:l,spawnClock:r,anchor:m,travel:h,motion:d,phase:f,uses:l===`split`?Math.max(1,Math.round(o)):1}}var Lc=e=>{let t=(e%2+2)%2;return t<=1?t:2-t},Rc=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2;function zc(e,t,n){let{holdTime:r,sweepTime:i}=n.powerUps,a=Math.max(0,t-e.spawnClock-r),o=a/Math.max(.1,i)+e.phase;switch(e.motion){case`linear`:return Lc(o);case`fast`:return Lc(e.phase+(o-e.phase)*1.5);case`ease`:return Rc(Lc(o));case`jitter`:{let t=.06*Math.sin(a*2.4+e.phase*5)+.04*Math.sin(a*3.8)+.05*Math.sin(a*1.3+e.phase);return Ee(Lc(o)+t,0,1)}}}function Bc(e,t,n,r){let i=-1/0;for(let a of n)if(a.kind===`column`)Math.hypot(e-a.x,t-a.z)<=a.radiusBottom+r&&(i=Math.max(i,a.top));else{let n=e-a.x,o=t-a.z,s=n*a.ux+o*a.uz,c=-n*a.uz+o*a.ux,l=a.radius+a.tube+r;Math.abs(c)<=a.tube+r&&Math.abs(s)<=l&&(i=Math.max(i,a.y+Math.sqrt(l*l-s*s)))}return i}function Vc(e,t){return[vo(t.player,e.arena.orbitRadius).position,vo(t.enemy,e.arena.orbitRadius).position]}function Hc(e,t,n,r,i,a){let[o,s]=Vc(e,t),c=Lt(e.arena),l=Kc(e,n),u=Math.max(Math.max(0,Ct(c,a,r,i))+e.powerUps.clearance,Bc(r,i,fn(c,a),l)+l+1.5),d=Math.hypot(s.x-o.x,s.z-o.z),f=d>0?Ee(((r-o.x)*(s.x-o.x)+(i-o.z)*(s.z-o.z))/d,0,d):0,p=e.ship.deckHeight+e.cannonMount.pivotHeight,m=Math.min(e.powerUps.maxPitchDeg,e.aim.pitchMaxDeg);return{floor:u,ceiling:p+(d>0?Math.tan(M(m))*f*(d-f)/d:0)-1}}function Uc(e,t,n=`damage`,r,i){let[a,o]=Vc(e,t),s=r?.x??(a.x+o.x)/2,c=r?.z??(a.z+o.z)/2,{floor:l,ceiling:u}=Hc(e,t,n,s,c,i);return{anchor:N(s,l,c),travel:Math.max(0,Math.min(e.powerUps.travel,u-l))}}function Wc(e,t,n,r,i,a){let[o,s]=Vc(e,t),c=Math.hypot(s.x-o.x,s.z-o.z);if(!(c>0))return null;let l=-(s.z-o.z)/c,u=(s.x-o.x)/c,d=Lt(e.arena),{travel:f,spread:p}=e.powerUps;for(let c=0;c<Pc;c++){let m=r.range(Mc,Nc),h=r.range(-p,p),g=o.x+(s.x-o.x)*m+l*h,_=o.z+(s.z-o.z)*m+u*h,v=c<Pc/2;if(v&&Ct(d,i,g,_)<=0)continue;let{floor:y,ceiling:b}=Hc(e,t,n,g,_,i);if(y>b||v&&b-y<f/2)continue;let x=y+r.range(0,1)*Math.max(0,b-y-f),S=N(g,x,_);if(!a||a(S,Kc(e,n)))return{anchor:S,travel:Math.max(0,Math.min(f,b-x))}}return null}function Gc(e,t,n){let{anchor:r,travel:i}=t,a=Sc*(1-xe(0,Cc,n-t.spawnClock));return N(r.x,r.y+i*zc(t,n,e)+a,r.z)}function Kc(e,t){return t===`split`?e.powerUps.gateRadius:e.powerUps.radius}var qc=.2,Jc=.001,Yc=14,Xc=(e,t)=>t/(e.wings??1),Zc=(e,t,n)=>t===null?n:Xc(e,n);function Qc(e){let{config:t,angles:n,shooter:r}=e,i=vo(n[r],t.arena.orbitRadius).position,a=vo(n[h(r)],t.arena.orbitRadius).position,o=a.x-i.x,s=a.z-i.z,c=Math.hypot(o,s),l=Math.max(0,...t.ship.hull.map(e=>Math.hypot(Math.abs(e.center.x)+e.halfSize.x,Math.abs(e.center.z)+e.halfSize.z)))+kc;return({position:e,velocity:t})=>{let n=e.x-a.x,r=e.z-a.z;return Math.hypot(n,r)<=l?!1:c>0&&(n*o+r*s)/c>l||n*t.x+r*t.z>0}}function $c(e,t,n,r){let i=t.x-e.x,a=t.y-e.y,o=t.z-e.z,s=e.x-n.x,c=e.y-n.y,l=e.z-n.z,u=s*s+c*c+l*l-r*r;if(u<=0)return 0;let d=i*i+a*a+o*o,f=s*i+c*a+l*o;if(d===0||f>0)return null;let p=f*f-d*u;if(p<0)return null;let m=(-f-Math.sqrt(p))/d;return m<=1?m:null}function el(e,t,n,r,i){let a=e.test(t,n,i);return a?.surface===`crew`&&a.unitIndex===r.unitIndex}function tl(e,t,n,r,i){let a=t.map((e,t)=>({target:e,order:t,d:ge(n,e.point)})).filter(({d:e})=>e<=r).sort((e,t)=>e.d-t.d||e.order-t.order);for(let{target:t}of a)if(el(e,n,t.point,t,i))return t;return null}function nl(e,t,n,r,i){let a=Tn(t.velocity),o=en(n.point,t.position),s=Math.min(1,Ac*a*r/Math.max(Tn(o),1e-9)),c=ue(pe(o),a),l=Ye(t.velocity,c,s);if(s<1&&Tn(l)>1e-9){let o=ue(pe(l),a),s=Nt(t.position,o,r),c=e.test(t.position,s,i);if(c?.surface===`crew`&&c.unitIndex===n.unitIndex||!c&&el(e,s,n.point,n,i))return{position:s,velocity:o}}return{position:Nt(t.position,c,r),velocity:c}}var rl=(e,t)=>({position:Nt(e.position,e.velocity,t),velocity:e.velocity}),il=class{ctx;powerUps;pickups=[];locks=[];flying=[];finished=[];boosts=[];dt;maxSteps;missed;constructor(e,t,n){this.ctx=e,this.powerUps=n;let{physics:r}=e.config;this.dt=1/r.stepsPerSecond,this.maxSteps=Math.ceil((e.maxTime??r.maxFlightTime)/this.dt),this.missed=Qc(e);for(let e of t)this.add(e,null,null)}get done(){return this.flying.every(e=>e.done)}get count(){return this.flying.length}now(e){let t=this.flying[e],n=t.start.delay+t.step*Xc(t.start,this.dt);return{index:e,start:t.start,state:t.state,time:n,lock:t.lock,blastScale:t.blastScale,wingsOff:t.wingsOff,done:t.done,points:t.points}}takeFinished(){return this.finished.splice(0)}advance(e=1/0){for(;;){let t=null,n=1/0;for(let e of this.flying){if(e.done)continue;let r=e.start.delay+e.step*Xc(e.start,this.dt);r<n&&(t=e,n=r)}if(!t||n>=e)return;this.step(t,n)}}result(){return{balls:this.flying.map(e=>this.resolved(e)),pickups:this.pickups,locks:this.locks}}resolvedBall(e){return this.resolved(this.flying[e])}passesOf(e){return this.flying[e].passes}flightSoFar(e){let t=this.flying[e];if(t.flight)return t.flight;let n=Xc(t.start,this.dt);return{points:t.points,dt:n,duration:(t.points.length-1)*n,hit:null}}resolved(e){let t=e.flight,n=e.start.delay+t.duration,r=1;if(!e.split)for(let e of this.boosts)n>e.time&&(r+=e.bonus);return{...e.start,blastScale:e.blastScale,flight:t,split:e.split,damageScale:r,intercepted:e.intercepted,blocked:e.blocked,locked:e.lock?.unitIndex??null,...e.wingsOff===null?{}:{wingsOff:e.wingsOff},passes:e.passes,burst:e.burst}}add(e,t,n){this.flying.length>=jc||this.flying.push({start:e,state:{position:e.origin,velocity:e.velocity},step:0,points:[e.origin],done:!1,flight:null,split:!1,blastScale:e.blastScale,immuneTo:t,lock:null,intercepted:!1,wingsOff:n,passes:[],masts:[],drilling:!1,drilled:!1,bored:0,skips:0,burst:!1,blocked:!1})}finish(e,t,n,r){e.done=!0,e.flight={points:e.points,dt:Xc(e.start,this.dt),duration:n,hit:r},this.finished.push(t)}step(e,t){let{ctx:n,dt:r}=this,{config:i}=n,a=i.powerUps,o=this.flying.indexOf(e),s=Xc(e.start,r);if(e.step>=(e.start.kind===`bullet`?Math.ceil(1.2/r):this.maxSteps)){this.finish(e,o,e.step*s,null);return}if(e.start.wings!==void 0&&e.wingsOff===null&&this.missed(e.state)&&(e.wingsOff=t),n.zap?.({index:o,start:e.start,state:e.state,time:t,lock:e.lock,blastScale:e.blastScale,wingsOff:e.wingsOff})){e.intercepted=!0,this.finish(e,o,e.step*s,null);return}let c=e.state.position;if(e.drilling){this.drill(e,o,t,Zo(e.state,Zc(e.start,e.wingsOff,r),i.physics,n.wind),null);return}e.start.magnet&&!e.lock&&n.magnets&&(e.lock=tl(n,n.magnets,c,e.start.magnet,e.start.radius),e.lock&&this.locks.push({time:t,ball:o,unitIndex:e.lock.unitIndex,point:c}));let l=Zc(e.start,e.wingsOff,r),u;if(e.start.kind===`bullet`)u=rl(e.state,l);else if(e.lock)u=nl(n,e.state,e.lock,l,e.start.radius);else{let r=e.start.wings!==void 0&&e.wingsOff===null&&n.steer?n.steer(t,e.state,s):null;u=Zo(r?{position:c,velocity:r}:e.state,l,i.physics,n.wind)}let d=u.position,f=e.start.chain?.reach,p=n.test(c,d,e.start.radius,e.masts.length>0||f?{masts:e.masts,rig:f}:void 0),m=n.shield&&!n.shield.used?n.shield.entry(c,d):null;if(m!==null&&!(p!==null&&p.t<m)){let r=Ye(c,d,m);n.shield.used=!0,e.blocked=!0,e.points.push(r),n.segment?.(o,c,r,t,e.start.delay+(e.step+m)*s),this.finish(e,o,(e.step+m)*s,null);return}for(;e.start.chain&&p?.surface===`mast`&&p.mast!==void 0&&!e.masts.includes(p.mast);)e.passes.push({time:e.start.delay+(e.step+p.t)*s,kind:`mast`,hit:p}),e.masts.push(p.mast),p=n.test(c,d,e.start.radius,{masts:e.masts,rig:f});let h=e.state.velocity.y,g=u.velocity.y,_=e.start.cluster&&!e.burst&&h>0&&g<=0?h/(h-g):null,v=_!==null&&!(p!==null&&p.t<=_)?_:null,y=[];if(e.start.kind===`ball`){for(let t of this.powerUps){if(t.uses<=0||t.kind===`split`&&e.immuneTo===t.id)continue;let r=$c(c,d,Gc(i,t,n.clock+e.start.delay+(e.step+.5)*s),Kc(i,t.kind)+e.start.radius);r!==null&&!(p!==null&&p.t<r)&&!(v!==null&&r>v)&&y.push({t:r,p:t})}y.sort((e,t)=>e.t-t.t)}for(let{t:r,p:i}of y){let l=Ye(c,d,r),f=e.start.delay+(e.step+r)*s;if(i.uses--,this.pickups.push({time:f,ball:o,id:i.id,kind:i.kind,point:l,usesLeft:i.uses}),i.kind===`split`){e.points.push(l),e.split=!0,n.segment?.(o,c,l,t,f),this.finish(e,o,(e.step+r)*s,null);let d=Ye(e.state.velocity,u.velocity,r),p=M(a.splitAngleDeg);for(let t of[1,-1]){let n=Math.cos(t*p),r=Math.sin(t*p);this.add({delay:f,origin:l,velocity:N(d.x*n-d.z*r,d.y,d.x*r+d.z*n),radius:e.start.radius,kind:`ball`,parent:o,blastScale:e.blastScale,magnet:e.start.magnet,wings:e.start.wings,chain:e.start.chain,drill:e.start.drill,skip:e.start.skip,cluster:e.start.cluster,bomblet:e.start.bomblet},i.id,e.wingsOff)}return}if(i.kind===`damage`&&this.boosts.push({time:f,bonus:a.damageMultiplier-1}),i.kind===`blast`&&(e.blastScale+=a.blastMultiplier-1),i.kind===`meteor`)for(let e of ol(n,f))this.add(e,i.id,null)}if(v!==null){this.burst(e,o,t,c,d,Ye(e.state.velocity,u.velocity,v),v);return}if(p){if(n.segment?.(o,c,p.point,t,e.start.delay+(e.step+p.t)*s),e.start.skip&&p.surface===`water`&&e.skips<e.start.skip.skips){this.skipOff(e,o,t,u,p);return}if(e.start.drill!==void 0&&p.surface===`island`&&!e.drilled&&n.inside){this.drill(e,o,t,u,p);return}e.points.push(p.point),this.finish(e,o,(e.step+p.t)*s,p);return}e.points.push(d),n.segment?.(o,c,d,t,t+s),e.state=u,e.step++}burst(e,t,n,r,i,a,o){let{ctx:s,dt:c}=this,l=Xc(e.start,c),u=Ye(r,i,o),d=e.start.delay+(e.step+o)*l;e.points.push(u),e.burst=!0,s.segment?.(t,r,u,n,d),this.finish(e,t,(e.step+o)*l,null);let f=e.start.cluster,p=Math.max(0,Math.round(f.bomblets)),m=Math.sqrt(2*Math.max(1,u.y)/Math.max(1e-6,s.config.physics.gravity)),h=Math.max(0,f.ring)/2/m,g=Math.atan2(a.z,a.x);for(let n=0;n<p;n++){let r=g+2*Math.PI*n/p;this.add({delay:d,origin:u,velocity:N(a.x+Math.cos(r)*h,a.y,a.z+Math.sin(r)*h),radius:qc,kind:`ball`,parent:t,blastScale:e.blastScale,magnet:e.start.magnet,bomblet:!0},null,null)}}skipOff(e,t,n,r,i){let{ctx:a,dt:o}=this,s=Xc(e.start,o),c=Zc(e.start,e.wingsOff,o),l=e.start.skip,u=t=>e.start.delay+(e.step+t)*s,d=i.t,f=i.point,p=Ye(e.state.velocity,r.velocity,i.t);for(;;){e.passes.push({time:u(d),kind:`skip`,hit:{t:d,point:f,surface:`water`}}),e.skips++;let r={position:N(f.x,Jc,f.z),velocity:N(p.x*l.keep,Math.abs(p.y)*l.bounce,p.z*l.keep)},i=Zo(r,(1-d)*c,a.config.physics,a.wind),o=a.test(r.position,i.position,e.start.radius,e.masts.length>0?{masts:e.masts}:void 0);if(a.segment?.(t,r.position,o?.point??i.position,u(d),o?u(d+o.t*(1-d)):n+s),!o){e.points.push(i.position),e.state=i,e.step++;return}let m=d+o.t*(1-d);if(o.surface===`water`&&e.skips<l.skips){d=m,f=o.point,p=Ye(r.velocity,i.velocity,o.t);continue}e.points.push(o.point),this.finish(e,t,(e.step+m)*s,o);return}}drill(e,t,n,r,i){let{ctx:a,dt:o}=this,s=Xc(e.start,o),c=t=>e.start.delay+(e.step+t)*s,l=e.state.position,u=r.position,d=a.inside,f=0;i&&(e.passes.push({time:c(i.t),kind:`drillIn`,hit:i}),e.drilling=e.drilled=!0,f=i.t);let p=1;if(!d(u)){let e=f;for(let t=0;t<Yc;t++){let t=(e+p)/2;d(Ye(l,u,t))?e=t:p=t}}let m=Ye(l,u,f),h=Ye(l,u,p),g=a.test(m,h,e.start.radius,{masts:e.masts,underground:!0});if(g){e.drilling=!1,e.points.push(g.point),this.finish(e,t,(e.step+f+g.t*(p-f))*s,g);return}if(e.bored+=ge(m,h),e.drilling&&e.bored>Math.max(0,e.start.drill??0)){e.drilling=!1,e.points.push(h),this.finish(e,t,(e.step+p)*s,null);return}if(p<1){if(e.drilling=!1,h.y<=0){e.points.push(h),this.finish(e,t,(e.step+p)*s,{t:p,point:h,surface:`water`});return}e.passes.push({time:c(p),kind:`drillOut`,hit:{t:p,point:h,surface:`island`}});let r=a.test(h,u,e.start.radius,e.masts.length>0?{masts:e.masts}:void 0);if(r){e.points.push(r.point),a.segment?.(t,h,r.point,c(p),c(p+r.t*(1-p))),this.finish(e,t,(e.step+p+r.t*(1-p))*s,r);return}a.segment?.(t,h,u,c(p),n+s)}e.points.push(u),e.state=r,e.step++}};function al(e,t,n=e.config.physics.maxFlightTime){let{physics:r}=e.config,i=1/r.stepsPerSecond,a=Xc(t.start,i),o=Math.ceil((t.start.kind===`bullet`?Math.min(n,Oc):n)/a),s=t.start.wings!==void 0&&t.wingsOff===null?Qc(e):null,c=t.state,l=t.lock,u=t.wingsOff;for(let n=0;n<o;n++){let o=c.position;s&&u===null&&s(c)&&(u=t.time+n*a),t.start.magnet&&!l&&e.magnets&&(l=tl(e,e.magnets,o,t.start.magnet,t.start.radius));let d=Zc(t.start,u,i),f=t.start.kind===`bullet`?rl(c,d):l?nl(e,c,l,d,t.start.radius):Zo(c,d,r,e.wind),p=e.test(o,f.position,t.start.radius);if(p)return{hit:p,point:p.point,time:t.time+(n+p.t)*a};c=f}return{hit:null,point:c.position,time:t.time+o*a}}function ol(e,t){let{config:n,rng:r}=e,i=e.shooter===`player`?`enemy`:`player`,a=vo(e.angles[i],n.arena.orbitRadius),o=n.ship.hull,s=Math.min(...o.map(e=>e.center.x-e.halfSize.x)),c=Math.max(...o.map(e=>e.center.x+e.halfSize.x)),l=Math.max(...o.map(e=>e.halfSize.z)),{min:u,max:d}=n.powerUps.meteors,f=Math.max(0,Math.round(u)+r.int(Math.max(0,Math.round(d)-Math.round(u))+1)),p=[];for(let e=0;e<f;e++){let i=r.range(s+1,c-1),o=r.range(-l,l)*.8,u=n.ship.deckHeight+Ec,d=N(a.position.x+a.forward.x*i+a.starboard.x*o,u,a.position.z+a.forward.z*i+a.starboard.z*o);p.push({delay:t+wc+e*Tc,origin:d,velocity:N(0,-30,0),radius:Dc,kind:`meteor`,parent:null,blastScale:1})}return p}var sl=class e{s;constructor(e){this.s=e>>>0}get state(){return this.s}set state(e){this.s=e>>>0}nextUint32(){this.s=this.s+1831565813>>>0;let e=this.s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),(e^e>>>14)>>>0}next(){return this.nextUint32()/4294967296}range(e,t){return e+(t-e)*this.next()}int(e){return Math.floor(this.next()*e)}chance(e){return this.next()<e}gaussian(){let e=1-this.next(),t=this.next();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}pick(e){return e[this.int(e.length)]}fork(){return new e(this.nextUint32())}},cl=5,ll=.15,ul=.06,dl=1.5,fl=.6,pl=1.2,ml=80,hl=.3,gl=N(),_l=class{config;seed;state;rng;powerRng;cardRng;steeringState=null;constructor(e,t,n){this.config=e,this.seed=t,this.rng=new sl(t),this.powerRng=new sl((t^1540483477)>>>0),this.cardRng=new sl((t^739982445)>>>0),this.state=Pl(e,Wn(e,n))}get cardsOn(){return!!this.config.cards?.enabled}start(){this.expectPhase(`ready`);let e=this.rng.chance(.5)?`player`:`enemy`;return[{type:`MatchStarted`,firstSide:e},...this.beginTurn(e)]}pickCard(e,t,n){this.expectPhase(`turn`);let r=this.state.offer;if(!r||r.side!==this.state.turnSide)throw Error(`No cards to pick from`);let i=r.cards[e];if(!i)throw Error(`No card ${e} to pick`);let a=n?.unit;if(i.kind===`sacrifice`&&(a===void 0||!this.isAlive(r.side,a)))throw Error(`Noble Sacrifice needs one of your living gunners`);t!==void 0&&(this.state.clock=Math.max(this.state.clock,t)),this.state.offer=null;let{config:o}=this,s=r.side,c=this.state.ships[s],l=[{type:`CardPicked`,side:s,index:e,card:{...i}}],u=i.unit??0;switch(i.kind){case`sniper`:c.upgrades[u].rifle=!0;break;case`extraBall`:c.upgrades[u].extraBalls+=Math.max(0,Math.round(o.cards.extraBall.balls));break;case`magnet`:c.upgrades[u].magnet=!0;break;case`accuracy`:c.upgrades[u].accuracy=!0;break;case`wings`:c.upgrades[u].wings=!0;break;case`hotShot`:c.upgrades[u].hotShot=!0;break;case`laser`:c.laser=!0;break;case`mist`:c.mist=`coming`,l.push({type:`MistCalled`,side:s});break;case`rogueWave`:{let e=this.state.ships[h(s)];e.rocked=!0,l.push({type:`ShipRocked`,side:e.side});break}case`depression`:{let e=this.state.ships[h(s)];e.depressed=u,l.push({type:`UnitDepressed`,side:e.side,unitIndex:u});break}case`revive`:{let e=c.crew[u],t=In(o,e.unit);e.hp=Ee(o.cards.revive.hp*t,1e-6,t),c.upgrades[u]=sc(),l.push({type:`UnitRevived`,side:s,unitIndex:u,hp:e.hp});break}case`repair`:{let e=hc(o,c,this.cardRng),t=c.fire!==null;c.fire=null,c.fuel=Is(o,c),l.push({type:`ShipRepaired`,side:s,amount:e.amount,hp:c.hp,holes:e.holes,tears:e.tears.map(e=>({...e})),masts:[...e.masts],sailing:Fs(o,c),extinguished:t});break}case`gifts`:{let e=vc(this,s,this.cardRng,this.state.clock,this.state.powerUpCount+1);this.state.powerUpCount+=e.length,this.state.gifts.push(...e),l.push({type:`GiftsDropped`,side:s,crates:e.map(e=>({...e}))});break}case`antiMissile`:case`healer`:case`charger`:case`shield`:{let e={hp:Math.max(1e-6,o.cards.machines.hp*o.crew.hp),recharge:0};c.machines[i.kind]=e,l.push({type:`MachineBuilt`,side:s,machine:i.kind,hp:e.hp}),i.kind===`charger`&&l.push(...this.charge(s));break}case`hiredHand`:{let e=i.recruit;if(!e||!(e in o.units)||c.crew.length!==o.gunners.length)break;let t=c.crew.length,n=In(o,e);c.crew.push({unitIndex:t,unit:e,hp:n}),c.upgrades.push(sc()),this.state.aims[s].push(Eo(o.aim)),l.push({type:`UnitHired`,side:s,unitIndex:t,unit:e,hp:n});break}case`sacrifice`:{let e=a;c.crew[e].hp=0,c.upgrades[e]=sc(),c.charged===e&&(c.charged=null),c.depressed===e&&(c.depressed=null),c.extraTurn=!0,l.push({type:`UnitSacrificed`,side:s,unitIndex:e});break}case`pickpocket`:{let e=this.state.ships[h(s)],t=i.machine,n=t?e.machines[t]:null;if(!t||!n||c.machines[t])break;c.machines[t]={...n},e.machines[t]=null,l.push({type:`MachineStolen`,side:s,from:e.side,machine:t,hp:n.hp,recharge:n.recharge}),t===`charger`&&l.push(...this.charge(s));break}}let d=c.depressed;return d!==null&&this.readyGunners(s).length===0&&(this.state.phase=`resolving`,l.push({type:`TurnSkipped`,side:s,unitIndex:d})),l}sail(e,t){this.expectPhase(`turn`),this.expectNoOffer();let n=this.activeShip,r=Math.sign(e),i=Math.min(this.config.ship.sailSpeed*Math.max(0,t),n.fuel);if(r===0||i<=0)return[];let{orbitRadius:a}=this.config.arena,o=kn(n.angle+r*i/a,On(n.side,this.config.arena)),s=Math.abs(o-n.angle)*a;return s<=0?[]:(n.angle=o,n.fuel=n.fuel-s>1e-9?n.fuel-s:0,[{type:`ShipMoved`,side:n.side,angle:o,fuel:n.fuel}])}selectGunner(e){if(this.expectPhase(`turn`),this.expectNoOffer(),!this.isAlive(this.state.turnSide,e))throw Error(`Gunner ${e} can't be selected`);if(this.isDepressed(this.state.turnSide,e))throw Error(`Gunner ${e} won't fire this turn`);return this.state.selected=e,[{type:`GunnerSelected`,side:this.state.turnSide,unitIndex:e}]}setAim(e){this.expectPhase(`turn`),this.expectNoOffer();let t=this.requireSelected(),n=To(e,this.config.aim);return this.state.aims[this.state.turnSide][t]=n,n}fire(e){this.expectPhase(`turn`),this.expectNoOffer();let t=this.state.turnSide,n=this.requireSelected();e.clock!==void 0&&(this.state.clock=Math.max(this.state.clock,e.clock));let r=this.weaponOf(t,n);if(r===`laser`){if(!(`laser`in e))throw Error(`The next shot is the sky laser`);return this.fireLaser(t,n,e.laser)}if(`laser`in e)throw Error(`No sky laser to fire`);if(r===`rifle`){if(!(`rifle`in e))throw Error(`Gunner ${n} fires their rifle`);return this.fireRifle(t,n,e.rifle)}if(`rifle`in e)throw Error(`Gunner ${n} has no rifle`);return this.fireCannon(t,n,e)}steer(e,t,n){this.expectPhase(`steering`);let r=this.steeringState,i=Number.isFinite(e)?e:0,a=Number.isFinite(t)?t:0,o=Math.hypot(i,a),s=o>1?1/o:1;return r.stick={x:i*s,y:a*s},r.elapsed+=Number.isFinite(n)?Math.max(0,n):0,r.resolver.advance(r.elapsed),this.collectSteered(r)}endTurn(e){this.expectPhase(`resolving`),e!==void 0&&(this.state.clock=Math.max(this.state.clock,e));let t=this.state.turnSide;this.state.gifts=[],this.state.ships[t].charged=null,this.state.ships[t].depressed=null,this.state.ships[t].rocked=!1;let n=this.state.ships[h(t)],r=n.hp<=0?`sunk`:n.crew.every(e=>e.hp<=0)?`crew`:null;if(r)return this.state.phase=`ended`,this.state.winner=t,this.state.endReason=r,[{type:`MatchEnded`,winner:t,reason:r}];let i=[],a=this.state.ships[t];return a.mist===`coming`&&(a.mist=`up`,i.push({type:`MistRose`,side:t})),a.extraTurn?(a.extraTurn=!1,[...i,{type:`ExtraTurn`,side:t},...this.beginTurn(t,!1)]):[...i,...this.beginTurn(n.side)]}get activeShip(){return this.state.ships[this.state.turnSide]}isAlive(e,t){let n=this.state.ships[e].crew[t];return n!==void 0&&n.hp>0}livingGunners(e){return this.state.ships[e].crew.filter(e=>e.hp>0).map(e=>e.unitIndex)}isDepressed(e,t){return this.cardsOn&&this.state.ships[e].depressed===t}readyGunners(e){return this.livingGunners(e).filter(t=>!this.isDepressed(e,t))}frameOf(e){return vo(this.state.ships[e].angle,this.config.arena.orbitRadius)}aimOf(e,t){return this.state.aims[e][t]}unitIdOf(e,t){return this.state.ships[e].crew[t].unit}unitOf(e,t){return Bn(this.config,this.unitIdOf(e,t))}cannonIdOf(e,t){return this.unitOf(e,t).cannon}cannonOf(e,t){return Vn(this.config,this.unitIdOf(e,t))}fullHpOf(e,t){return In(this.config,this.unitIdOf(e,t))}muzzle(e,t,n=this.aimOf(e,t)){let{ship:r,cannonMount:i}=this.config;return Oo(this.frameOf(e),Hn(this.config,t),r,i,n)}weaponOf(e,t){if(!this.cardsOn)return`cannon`;let n=this.state.ships[e];return n.laser?`laser`:n.upgrades[t]?.rifle?`rifle`:`cannon`}rifleMuzzle(e,t,n){let{ship:r,crew:i}=this.config,a=this.frameOf(e);return{origin:G(a,N(Hn(this.config,t).x,r.deckHeight+dl,i.standZ+fl)),direction:yo(a,Do(To(n,this.config.aim)))}}rifleAimAt(e,t,n){let{origin:r}=this.rifleMuzzle(e,t,{yaw:0,pitch:0}),i=this.frameOf(e),a=xo(i,n),o=xo(i,r),s=a.x-o.x,c=a.y-o.y,l=a.z-o.z;return To({yaw:Math.atan2(s,l),pitch:Math.atan2(c,Math.hypot(s,l))},this.config.aim)}predictRifle(e,t,n){let{origin:r,direction:i}=this.rifleMuzzle(e,t,n),a=this.collisionWorld(),o=(t,n)=>hs(a,t,n,ul,e),s=Math.max(1,this.config.cards.sniper.speed);return Qo(r,ue(i,s),{...this.config.physics,gravity:0,drag:0},o,gl)}laserPoint(e,t,n){let r=this.frameOf(h(e)).position,i=t-r.x,a=n-r.z,o=Math.hypot(i,a);return o>30&&(i*=30/o,a*=30/o),{x:r.x+i,z:r.z+a}}machinePosition(e,t){let n=Co(this.frameOf(e),this.config.ship.machines[t],this.config.ship);return Ye(n.base,n.top,.5)}get steering(){let e=this.steeringState;if(!e)return null;let t=Array.from({length:e.resolver.count},(t,n)=>{let r=e.resolver.now(n);return{position:r.state.position,velocity:r.state.velocity,at:r.time,done:r.done,kind:r.start.kind,winged:r.start.wings!==void 0,wings:r.start.wings!==void 0&&r.wingsOff===null,points:r.points}});return{side:e.meta.side,unitIndex:e.meta.unitIndex,time:e.elapsed,balls:t}}steeringShot(){let e=this.steeringState;if(!e)return null;let t=Array.from({length:e.resolver.count},(t,n)=>jl(e.resolver,n));return{...e.meta,projectiles:t,duration:1/0}}steeringLanding(){let e=this.steeringState;if(!e)return null;for(let t=0;t<e.resolver.count;t++){let n=e.resolver.now(t);if(!n.done&&n.start.wings!==void 0&&n.wingsOff===null)return al(e.base,n)}return null}indicatorPower(e){return this.state.lastPower[e]??this.config.aim.firstShotPower}predict(e,t,n,r,i=this.windAcceleration(),a=this.config.physics.maxFlightTime){let o=this.cannonOf(e,t),s=this.muzzle(e,t,n),c=ue(s.direction,ko(o,r)),l=this.collisionWorld();if(!o.drill&&!o.skip)return this.simulate(l,s.origin,c,o.ballRadius,e,i,a);let u={delay:0,origin:s.origin,velocity:c,radius:o.ballRadius,kind:`ball`,parent:null,blastScale:1,...El(o)},d=new il({...this.shotContext(e,l,i),magnets:void 0,shield:void 0,maxTime:a},[u],[]);return d.advance(),d.resolvedBall(0).flight}intoTheDome(e,t){let n=h(e);if(!this.shieldUp(n))return t;let r=this.dome(n),{points:i,dt:a}=t;for(let e=1;e<i.length;e++){let n=r.entry(i[e-1],i[e]);if(n===null)continue;let o=(e-1)*a,s=o+n*(Math.min(e*a,t.duration)-o);return{points:[...i.slice(0,e),Ye(i[e-1],i[e],n)],dt:a,duration:s,hit:null}}return t}windAcceleration(e=this.state.wind){let t=e.speed*this.config.wind.accelPerKnot;return N(Math.cos(e.angle)*t,0,Math.sin(e.angle)*t)}collisionWorld(){let{arena:e,ship:t,crew:n}=this.config;return{arena:e,ships:m.map(r=>{let i=this.state.ships[r],a=vo(i.angle,e.orbitRadius);return{side:r,frame:a,hull:t.hull,masts:Ks(this.config,i),crew:i.crew.filter(e=>e.hp>0).map(e=>({unitIndex:e.unitIndex,capsule:So(a,Hn(this.config,e.unitIndex),t,n)})),machines:t.machines?Xs.filter(e=>(i.machines?.[e]?.hp??0)>0).map(e=>({kind:e,capsule:Co(a,t.machines[e],t)})):[]}}),ground:this.ground()}}ground(){let{island:e}=this.state;return{craters:e.craters,limits:this.config.destruction,rocks:e.rocks.map(e=>e.solid),caps:e.peaks.map(e=>e.cap)}}powerUpSpot(e,t=this.powerRng){let n={player:this.state.ships.player.angle,enemy:this.state.ships.enemy.angle};return Wc(this.config,n,e,t,this.ground(),(e,t)=>this.canReach(e,t))}fireCannon(e,t,n){let{config:r}=this,i=this.cannonIdOf(e,t),a=this.state.ships[e],o=this.state.stats[e],s=this.cardsOn?{...a.upgrades[t]}:sc(),c=vl(r.cannons[i],s),l=n.aim?To(n.aim,r.aim):this.state.aims[e][t],u,d=`misfire`in n;if(`misfire`in n){let e=r.power,t=M(e.misfireDeviationDeg);u=this.rng.range(e.misfirePowerMin,e.misfirePowerMax),l={yaw:l.yaw+this.rng.range(-t,t),pitch:l.pitch+this.rng.range(-t,t)},o.misfires++}else u=Ee(n.power,0,1),this.state.lastPower[e]=u;let f=this.collisionWorld(),p=this.windAcceleration(),m=jo(c,this.muzzle(e,t,l),u,this.rng),g=this.chargeOf(e,t);this.cardsOn&&(a.upgrades[t]=sc());let _={side:e,unitIndex:t,cannonId:i,aim:l,power:u,misfire:d,weapon:`cannon`,charge:g,upgrades:s},v=m.map(e=>({delay:e.delay,origin:e.origin,velocity:e.velocity,radius:c.ballRadius,kind:`ball`,parent:null,blastScale:1,...s.magnet?{magnet:Math.max(0,r.cards.magnet.radius)}:{},...s.wings?{wings:Ee(r.cards.wings.pace,.05,1)}:{},...El(c)}));if(s.wings)return this.startSteering(_,c,f,p,v);let y=this.shotContext(e,f,p),b=this.zapper(e,y,f,c),x=new il({...y,zap:b?.zap},v,this.livePowerUps());x.advance();let S=x.result(),C=y.shield?.used??!1,w=S.balls.map((e,t)=>Al(e,t)),T=[...S.pickups.map(e=>({type:`PowerUpCollected`,time:e.time,projectile:e.ball,id:e.id,kind:e.kind,point:e.point,usesLeft:e.usesLeft})),...S.locks.map(t=>({type:`BallLocked`,time:t.time,projectile:t.ball,side:h(e),unitIndex:t.unitIndex,point:t.point}))];return this.dropUsedPowerUps(),this.finishShot(_,c,f,w,T,b?.used??!1,C)}fireRifle(e,t,n){let{config:r}=this,i=this.cannonIdOf(e,t),a=r.cannons[i];this.state.ships[e].upgrades[t].rifle=!1;let o=To(n,r.aim),{origin:s,direction:c}=this.rifleMuzzle(e,t,o),l=this.collisionWorld(),u={delay:0,origin:s,velocity:ue(c,Math.max(1,r.cards.sniper.speed)),radius:ul,kind:`bullet`,parent:null,blastScale:1},d=this.shotContext(e,l,gl),f=this.zapper(e,d,l,a),p=new il({...d,zap:f?.zap},[u],[]);p.advance();let m=p.result().balls.map((e,t)=>Al(e,t)),h=d.shield?.used??!1,g={side:e,unitIndex:t,cannonId:i,aim:o,power:1,misfire:!1,weapon:`rifle`,charge:this.chargeOf(e,t),upgrades:sc()};return this.finishShot(g,a,l,m,[],f?.used??!1,h)}fireLaser(e,t,n){let{config:r}=this,i=this.cannonIdOf(e,t);this.state.ships[e].laser=!1;let{x:a,z:o}=this.laserPoint(e,n.x,n.z),s=this.collisionWorld(),c=N(a,ml,o),l=h(e),u={...s,ships:s.ships.map(e=>e.side===l?{...e,masts:e.masts.map(e=>({...e,top:e.bottom}))}:e)},d=N(a,-1,o),f=this.shieldUp(l)?this.dome(l).entry(c,d):null,p=f===null?hs(u,c,d,hl,e):null,m=f===null?p?.point??N(a,0,o):Ye(c,d,f),g={points:[c,m],dt:pl,duration:pl,hit:p},_={launch:{index:0,delay:0,origin:c,velocity:N(0,-(ml-m.y)/pl,0)},flight:g,impactTime:pl,kind:`laser`,parent:null,split:!1,damageScale:1,blastScale:1,intercepted:!1,...f===null?{}:{blocked:!0},magnetic:!1,locked:null,winged:!1,passes:[]},v={side:e,unitIndex:t,cannonId:i,aim:this.state.aims[e][t],power:1,misfire:!1,weapon:`laser`,charge:this.chargeOf(e,t),upgrades:sc()};return this.finishShot(v,r.cannons[i],s,[_],[],!1,f!==null)}finishShot(e,t,n,r,i,a,o=!1){let s=e.side,c=this.state.stats[s],l=[{type:`ShotFired`,shot:{...e,projectiles:r,duration:Math.max(...r.map(e=>e.impactTime))}}],u=[];if(this.config.destruction?.enabled&&this.config.destruction.sails){let e=n.ships.find(e=>e.side!==s),i=r.flatMap((n,r)=>n.kind===`bullet`||n.kind===`laser`?[]:Ls(n.flight,e.frame,e.masts,n.kind===`ball`?Tl(t):0).map(t=>({...t,time:n.launch.delay+t.time,projectile:r,side:e.side})));i.sort((e,t)=>e.time-t.time);for(let e of i){let t=this.state.ships[e.side];t.sailHoles.push({mast:e.mast,sail:e.sail,x:e.local.x,y:e.local.y}),u.push({type:`SailTorn`,time:e.time,projectile:e.projectile,side:e.side,mast:e.mast,sail:e.sail,point:e.point,sailing:Fs(this.config,t)})}}let d=[],f=!1,p=r.flatMap((e,t)=>[...e.passes.map(e=>({time:e.time,i:t,pass:e})),{time:e.impactTime,i:t,pass:null}]);p.sort(Ml);for(let{i,pass:a}of p)(a?this.resolvePass(i,r[i],a,e,t,n,d):this.resolveImpact(i,r[i],e,t,n,d))&&(f=!0);return l.push(...Nl([...d,...u,...i])),c.shots++,f&&c.hits++,this.cardsOn&&this.afterShotAt(h(s),a,o),this.state.phase=`resolving`,l}resolveImpact(e,t,n,r,i,a){let{config:o}=this,s=n.side,{flight:c,impactTime:l}=t,u=c.hit;if(a.push({type:`ProjectileImpact`,time:l,projectile:e,hit:u}),t.burst)return a.push({type:`BombBurst`,time:l,projectile:e,point:c.points[c.points.length-1]}),!1;if(t.blocked)return a.push({type:`ShieldBlocked`,time:l,projectile:e,side:h(s),point:c.points[c.points.length-1]}),!1;if(t.intercepted)return a.push({type:`ProjectileIntercepted`,time:l,projectile:e,side:h(s),point:c.points[c.points.length-1]}),!1;let d=this.blastOf(t,n,r),f=t.kind===`bullet`,p=!!r.pirate&&t.kind===`ball`,m=o.destruction;u?.surface===`island`&&!f&&!p&&this.breakIsland(e,t,u,d,l,a),t.kind===`laser`&&m?.enabled&&m.masts&&this.laserThroughMasts(e,c,s,i,l,a);let g=vs(u)?u.side:null;if(!g&&u&&t.blastScale>1){let e=i.ships.find(e=>e.side!==s);xs(e,u.point)<=d.splashRadius&&(g=e.side)}if(p&&this.pirateLands(e,u,i,l,s,a,g),!g||!u)return!1;let _=g,v=u.surface===`mast`&&!f?o.ship.mastDamage:1;return this.damageShip(e,t,u,_,d,v,1,i,l,s,a,!p),this.ignite(t,u,_,n,i,l,a),p&&_!==s&&this.onDeck(u,i)&&this.brawl(e,u,_,n,r,i,l,a),_!==s}onDeck(e,t){return e.surface===`crew`||e.surface===`machine`||e.surface===`mast`?!0:e.surface!==`hull`||!e.side?!1:xo(t.ships.find(t=>t.side===e.side).frame,e.point).y>=this.config.ship.deckHeight-bl}pirateLands(e,t,n,r,i,a,o){let s=t?.point??N(),c=!!(t&&o&&o!==i&&this.onDeck(t,n));a.push({type:`PirateLanded`,time:r,projectile:e,point:{...s},side:c?o:null,onDeck:c})}brawl(e,t,n,r,i,a,o,s){let c=i.pirate,l=this.state.ships[n],u=a.ships.find(e=>e.side===n),d=null;for(let e of u.crew){if(l.crew[e.unitIndex].hp<=0)continue;let n=gs(t.point,e.capsule);(!d||n<d.d)&&(d={unitIndex:e.unitIndex,d:n})}if(!d)return;let f=o+Math.max(0,c.delay),p=l.crew[d.unitIndex],m=Math.min(Math.max(0,c.brawl*r.charge),p.hp);p.hp=p.hp-m<=1e-9?0:p.hp-m;let h=this.state.stats[r.side];s.push({type:`PirateBrawl`,time:f,projectile:e,side:n,unitIndex:d.unitIndex}),s.push({type:`UnitDamaged`,time:f,side:n,unitIndex:d.unitIndex,amount:m,hp:p.hp}),h.crewDamage+=m,p.hp===0&&(s.push({type:`UnitKilled`,time:f,side:n,unitIndex:d.unitIndex}),h.kills++,l.upgrades[d.unitIndex]=sc())}breakIsland(e,t,n,r,i,a){let{config:o}=this,s=o.destruction;if(!s?.enabled)return;let c=this.state.island,l=n.rock??null,u=l===null&&s.rocks?Us(o,c,n.point)??null:null;if(l===null&&u===null){let l=s.craters?Bs(o,c,n.point,r.damage,t.blastScale):null;l&&a.push({type:`CraterDug`,time:i,projectile:e,crater:{...l}})}else if(s.rocks){let t=l===null?u===null?null:Ws(o,c,u,n.point,r.damage):Hs(o,c,l,n.point,r.damage);t?.fall?a.push({type:`RockFell`,time:i,projectile:e,rock:l,peak:u,top:t.fall.top,legs:[...t.fall.legs]}):t&&a.push({type:`RockDamaged`,time:i,projectile:e,rock:l,peak:u,hp:t.hp})}}resolvePass(e,t,n,r,i,a,o){let{hit:s,time:c}=n,l=s.side??null;o.push({type:`ProjectilePassed`,time:c,projectile:e,through:n.kind,point:s.point,side:l,mast:s.mast??null});let u=this.blastOf(t,r,i);if(n.kind===`drillIn`)return this.breakIsland(e,t,s,u,c,o),!1;if(n.kind===`drillOut`){let n=Ct(Lt(this.config.arena),this.ground(),s.point.x,s.point.z);return s.point.y<=n+wl&&this.breakIsland(e,t,s,u,c,o),!1}return n.kind===`skip`||l===null?!1:(this.damageShip(e,t,s,l,u,this.config.ship.mastDamage,Math.max(0,i.chain?.mastFactor??1),a,c,r.side,o),this.ignite(t,s,l,r,a,c,o),l!==r.side)}ignite(e,t,n,r,i,a,o){if(!r.upgrades.hotShot||n===r.side||e.kind!==`ball`||!vs(t)||t.side!==n)return;let s=this.state.ships[n],c=Math.max(1,Math.round(this.config.cards.hotShot.turns));if(s.fire&&s.fire.turns>=c)return;let l=xo(i.ships.find(e=>e.side===n).frame,t.point);s.fire={turns:c,x:l.x,y:l.y,z:l.z},o.push({type:`ShipOnFire`,time:a,side:n,point:{...t.point}})}damageShip(e,t,n,r,i,a,o,s,c,l,u,d=!0){let{config:f}=this,p=f.destruction,m=this.state.stats[l],h=t.kind===`bullet`,g=s.ships.find(e=>e.side===r),_=this.state.ships[r],v=bs(_,g,n.point,i,a,{unitIndex:n.unitIndex,machine:n.machine});v.shipAmount>0&&(u.push({type:`ShipDamaged`,time:c,side:r,amount:v.shipAmount,hp:v.shipHp,point:n.point}),m.shipDamage+=v.shipAmount);for(let e of v.crew)u.push({type:`UnitDamaged`,time:c,side:r,unitIndex:e.unitIndex,amount:e.amount,hp:e.hp}),m.crewDamage+=e.amount,e.killed&&(u.push({type:`UnitKilled`,time:c,side:r,unitIndex:e.unitIndex}),m.kills++,_.upgrades[e.unitIndex]=sc());for(let e of v.machines)u.push({type:`MachineDamaged`,time:c,side:r,machine:e.machine,amount:e.amount,hp:e.hp}),e.destroyed&&u.push(...this.blowUp(r,e.machine,c,m));if((n.surface===`hull`||n.surface===`crew`)&&n.side===r&&!h&&d&&_.holes++,p?.enabled&&p.masts&&n.surface===`mast`&&n.mast!==void 0&&!h&&d){let t=xo(g.frame,n.point).y,a=Js(f,_,n.mast,t,i.damage*o,g.masts[n.mast].top);if(a){let t=js(f,_),n=Fs(f,_);u.push({type:`MastBroken`,time:c,projectile:e,side:r,mast:a.mast,top:a.top,sail:t,sailing:n})}}}laserThroughMasts(e,t,n,r,i,a){let o=h(n),s=r.ships.find(e=>e.side===o),c=this.state.ships[o],l=xo(s.frame,t.points[0]),u=xo(s.frame,t.points[t.points.length-1]);s.masts.forEach((t,n)=>{if(t.top<=t.bottom||ds(l,u,N(t.x,t.bottom,0),N(t.x,t.top,0),t.radius+hl)===null)return;let r=qs(this.config,c,n);r&&a.push({type:`MastBroken`,time:i,projectile:e,side:o,mast:n,top:r.top,sail:js(this.config,c),sailing:Fs(this.config,c)})})}blastOf(e,t,n){let{powerUps:r,cards:i}=this.config;switch(e.kind){case`meteor`:return{damage:r.meteorDamage,splashRadius:r.meteorSplash};case`bullet`:return{damage:i.sniper.shipDamage*t.charge,splashRadius:0,crewDamage:i.sniper.unitDamage*t.charge};case`laser`:return{damage:i.laser.damage*t.charge,splashRadius:i.laser.radius};default:{if(e.bomblet&&n.cluster)return{damage:n.cluster.damage*e.damageScale*t.charge,splashRadius:n.cluster.splash*e.blastScale};let r=n.skip?e.passes.filter(e=>e.kind===`skip`).length:0,i=1+Math.max(0,n.skip?.bonus??0)*r;return{damage:n.damage*e.damageScale*t.charge*i,splashRadius:n.splashRadius*e.blastScale}}}}blowUp(e,t,n,r){let i=this.state.ships[e],a=this.machinePosition(e,t);i.machines[t]=null;let o=[{type:`MachineDestroyed`,time:n,side:e,machine:t,point:a}],s=Math.min(Math.max(0,this.config.cards.machines.blast),i.hp);return s>0&&(i.hp=i.hp-s<=1e-9?0:i.hp-s,o.push({type:`ShipDamaged`,time:n,side:e,amount:s,hp:i.hp,point:a}),r.shipDamage+=s),o}livePowerUps(){let e=[];return this.config.powerUps?.enabled&&this.state.powerUp&&e.push(this.state.powerUp),this.cardsOn&&e.push(...this.state.gifts),e}dropUsedPowerUps(){this.state.powerUp&&this.state.powerUp.uses<=0&&(this.state.powerUp=null),this.state.gifts=this.state.gifts.filter(e=>e.uses>0)}shotContext(e,t,n){let r=t.ships.find(t=>t.side!==e);return{config:this.config,angles:{player:this.state.ships.player.angle,enemy:this.state.ships.enemy.angle},clock:this.state.clock,shooter:e,wind:n,test:(n,r,i,a)=>hs(t,n,r,i,e,a),rng:this.powerRng,magnets:r.crew.map(e=>({unitIndex:e.unitIndex,point:yl(e.capsule.top)})),inside:e=>ps(e,t.arena,t.ground),...this.shieldUp(h(e))?{shield:this.dome(h(e))}:{}}}shieldUp(e){let t=this.cardsOn?this.state.ships[e].machines.shield:null;return!!(t&&t.hp>0&&t.recharge===0)}dome(e){let t=this.frameOf(e),{center:n,radii:r}=Cl(this.config),i=e=>{let i=xo(t,e);return N((i.x-n.x)/r.x,(i.y-n.y)/r.y,(i.z-n.z)/r.z)};return{used:!1,entry(e,t){let n=i(e),r=i(t),a=N(r.x-n.x,r.y-n.y,r.z-n.z),o=n.x*n.x+n.y*n.y+n.z*n.z-1;if(o<=0)return null;let s=a.x*a.x+a.y*a.y+a.z*a.z,c=n.x*a.x+n.y*a.y+n.z*a.z,l=c*c-s*o;if(s<1e-12||c>=0||l<0)return null;let u=(-c-Math.sqrt(l))/s;return u>=0&&u<=1?u:null}}}zapper(e,t,n,r){if(!this.cardsOn)return null;let i=h(e),a=this.state.ships[i].machines.antiMissile;if(!a||a.hp<=0||a.recharge>0)return null;let o=this.machinePosition(i,`antiMissile`),s=Math.max(0,this.config.cards.antiMissile.range),c=n.ships.find(e=>e.side===i),l={used:!1,zap:e=>{if(l.used||ge(e.state.position,o)>s)return!1;let n=al(t,e),a=vs(n.hit)&&n.hit.side===i,u=!a&&n.hit!==null&&e.blastScale>1&&xs(c,n.hit.point)<=r.splashRadius*e.blastScale;return!a&&!u?!1:(l.used=!0,!0)}};return l}afterShotAt(e,t,n=!1){let{machines:r}=this.state.ships[e],i=(e,t,n)=>{e&&(t?e.recharge=Math.max(0,Math.round(n)-1):e.recharge>0&&e.recharge--)};i(r.antiMissile,t,this.config.cards.antiMissile.every),i(r.shield,n,this.config.cards.shield.every)}chargeOf(e,t){return this.cardsOn&&this.state.ships[e].charged===t?1+Math.max(0,this.config.cards.charger.bonus):1}charge(e){let t=this.state.ships[e];return t.charged=bc(t,this.cardRng),t.charged===null?[]:[{type:`UnitCharged`,side:e,unitIndex:t.charged}]}startSteering(e,t,n,r,i){let a=e.side,o=this.shotContext(a,n,r),s=this.zapper(a,o,n,t),c=n.ships.find(e=>e.side!==a),l={meta:e,cannon:t,world:n,base:o,resolver:null,zapper:s,elapsed:0,stick:{x:0,y:0},torn:new Map,pending:[],pickupsSeen:0,locksSeen:0,landed:[],passesDone:new Map,hitEnemy:!1};return l.resolver=new il({...o,zap:s?.zap,steer:(e,t,n)=>this.steerTurn(l.stick,t,n),segment:(e,t,n,r,i)=>this.tearAlong(l,c,e,t,n,r,i)},i,this.livePowerUps()),this.steeringState=l,this.state.phase=`steering`,[{type:`SteerStarted`,side:a,unitIndex:e.unitIndex,cannonId:e.cannonId,aim:e.aim,power:e.power,misfire:e.misfire,balls:i.length}]}steerTurn(e,t,n){let r=t.velocity,i=Math.hypot(r.x,r.z);if(i<1e-6||e.x===0&&e.y===0)return null;let{turn:a,climb:o}=this.config.cards.wings,s=e.x*M(Math.max(0,a))*n,c=r.x/i*Math.cos(s)-r.z/i*Math.sin(s),l=r.z/i*Math.cos(s)+r.x/i*Math.sin(s),u=Math.atan2(r.y,i),d=u+e.y*M(Math.max(0,o))*n,f=M(Dl),p=-M(Ol),m=d>u?Math.min(d,Math.max(u,f)):Math.max(d,Math.min(u,p)),h=Math.hypot(i,r.y);return N(c*Math.cos(m)*h,Math.sin(m)*h,l*Math.cos(m)*h)}tearAlong(e,t,n,r,i,a,o){if(!(this.config.destruction?.enabled&&this.config.destruction.sails))return;let s={points:[r,i],dt:Math.max(1e-9,o-a),duration:Math.max(1e-9,o-a),hit:null},c=e.torn.get(n);c||e.torn.set(n,c=new Set);for(let r of Ls(s,t.frame,t.masts,e.resolver.now(n).start.chain?.reach??0)){let i=`${r.mast}:${r.sail}`;if(c.has(i))continue;c.add(i);let o=this.state.ships[t.side];o.sailHoles.push({mast:r.mast,sail:r.sail,x:r.local.x,y:r.local.y}),e.pending.push({type:`SailTorn`,time:a+r.time,projectile:n,side:t.side,mast:r.mast,sail:r.sail,point:r.point,sailing:Fs(this.config,o)})}}collectSteered(e){let t=e.resolver,n=e.meta.side,r=[...e.pending.splice(0)];for(;e.pickupsSeen<t.pickups.length;e.pickupsSeen++){let n=t.pickups[e.pickupsSeen];r.push({type:`PowerUpCollected`,time:n.time,projectile:n.ball,id:n.id,kind:n.kind,point:n.point,usesLeft:n.usesLeft})}for(;e.locksSeen<t.locks.length;e.locksSeen++){let i=t.locks[e.locksSeen];r.push({type:`BallLocked`,time:i.time,projectile:i.ball,side:h(n),unitIndex:i.unitIndex,point:i.point})}e.landed.push(...t.takeFinished());let i=[];for(let n=0;n<t.count;n++){let r=t.passesOf(n);for(let a=e.passesDone.get(n)??0;a<r.length&&(t.done||r[a].time<e.elapsed);a++)i.push({time:r[a].time,i:n,pass:r[a]})}for(let n of e.landed){let r=t.resolvedBall(n),a=r.delay+r.flight.duration;(t.done||a<e.elapsed)&&i.push({time:a,i:n,pass:null})}i.sort(Ml);for(let{i:n,pass:a}of i){if(a){e.passesDone.set(n,(e.passesDone.get(n)??0)+1),this.resolvePass(n,jl(t,n),a,e.meta,e.cannon,e.world,r)&&(e.hitEnemy=!0);continue}e.landed.splice(e.landed.indexOf(n),1),this.resolveImpact(n,Al(t.resolvedBall(n),n),e.meta,e.cannon,e.world,r)&&(e.hitEnemy=!0)}let a=Nl(r);return t.done&&e.landed.length===0&&a.push(...this.finishSteering(e)),a}finishSteering(e){let t=e.meta.side,n=this.state.stats[t],r=e.resolver.result().balls.map((e,t)=>Al(e,t)),i={...e.meta,projectiles:r,duration:Math.max(...r.map(e=>e.impactTime))};return n.shots++,e.hitEnemy&&n.hits++,this.dropUsedPowerUps(),this.afterShotAt(h(t),e.zapper?.used??!1,e.base.shield?.used??!1),this.steeringState=null,this.state.phase=`resolving`,[{type:`ShotFired`,shot:i}]}simulate(e,t,n,r,i,a,o=this.config.physics.maxFlightTime){return Qo(t,n,this.config.physics,(t,n)=>hs(e,t,n,r,i),a,o)}beginTurn(e,t=!0){this.state.phase=`turn`,this.state.turnSide=e,this.state.turn++,this.state.selected=null,this.state.ships[e].fuel=Is(this.config,this.state.ships[e]);let{wind:n}=this.state;n.angle=this.rng.range(0,2*Math.PI),n.speed=this.rng.range(this.config.wind.minKnots,this.config.wind.maxKnots);let r=[{type:`TurnStarted`,side:e,turn:this.state.turn,wind:{...n}}],i=this.burn(e);if(i&&(r.push(i),this.state.ships[e].hp<=0)){let t=h(e);return this.state.phase=`ended`,this.state.winner=t,this.state.endReason=`sunk`,r.push({type:`MatchEnded`,winner:t,reason:`sunk`}),r}let a=this.config.powerUps;if(a?.enabled&&this.state.turn>1&&!this.state.powerUp&&this.powerRng.chance(a.spawnChance)){let e=Ic(this.config,this.powerRng,this.state.powerUpCount+1,this.state.clock,e=>this.powerUpSpot(e));e&&(this.state.powerUpCount++,this.state.powerUp=e,r.push({type:`PowerUpSpawned`,powerUp:{...e}}))}return this.cardsOn&&r.push(...this.startOfTurnCards(e,t)),r}burn(e){let t=this.state.ships[e],n=t.fire;if(!this.cardsOn||!n)return null;let{config:r}=this,i=Math.min(Math.max(0,r.cards.hotShot.damage),t.hp);t.hp=t.hp-i<=1e-9?0:t.hp-i,this.state.stats[h(e)].shipDamage+=i;let a=[];r.destruction?.enabled&&r.destruction.sails&&r.ship.masts.forEach((e,n)=>e.sails.forEach((e,i)=>Ns(r,t,n,i)&&a.push({mast:n,sail:i})));let o=null;if(a.length>0){let{mast:e,sail:n}=a[this.cardRng.int(a.length)],i=r.ship.masts[e].sails[n].corners;o={mast:e,sail:n,x:i.reduce((e,t)=>e+t.x,0)/i.length,y:i.reduce((e,t)=>e+t.y,0)/i.length},t.sailHoles.push(o),t.fuel=Is(r,t)}return n.turns--,n.turns<=0&&(t.fire=null),{type:`FireBurned`,side:e,amount:i,hp:t.hp,hole:o&&{...o},sailing:Fs(r,t),turns:Math.max(0,n.turns)}}startOfTurnCards(e,t){let n=this.state.ships[e],r=[];n.mist===`up`&&(n.mist=null,r.push({type:`MistCleared`,side:e}));let i=n.depressed;if(i!==null&&!n.crew.some(e=>e.hp>0&&e.unitIndex!==i)?(n.depressed=null,r.push({type:`DepressionLifted`,side:e,unitIndex:i})):i!==null&&!this.isAlive(e,i)&&(n.depressed=null),n.machines.healer){let t=yc(this.config,n,this.cardRng);t&&r.push({type:`UnitHealed`,side:e,unitIndex:t.unitIndex,amount:t.amount,hp:n.crew[t.unitIndex].hp})}n.charged=null,n.machines.charger&&r.push(...this.charge(e));let a=t?pc(this.config,n,this.cardRng,this.state.ships[h(e)]):[];return a.length>0&&(this.state.offer={side:e,cards:a},r.push({type:`CardsOffered`,side:e,cards:a.map(e=>({...e}))})),r}canReach(e,t){let{aim:n,powerUps:r}=this.config,i=Math.min(r.maxPitchDeg,n.pitchMaxDeg),a=M(n.yawLimitDeg),o=N();return m.every(r=>this.livingGunners(r).some(s=>{let c=this.cannonOf(r,s);for(let l=n.pitchMinDeg;l<=i+1e-9;l+=cl){let n=Ts(this,r,s,e,M(l),o);if(!n||Math.abs(n.aim.yaw)>a)continue;let i=this.muzzle(r,s,n.aim),u=ko(c,n.power)*Math.cos(n.aim.pitch),d=Math.hypot(e.x-i.origin.x,e.z-i.origin.z)/Math.max(1e-6,u)+.25,{points:f}=this.predict(r,s,n.aim,n.power,o,d);for(let n=1;n<f.length;n++)if(ge(ke(e,f[n-1],f[n]),e)<t/2)return!0}return!1}))}expectPhase(e){if(this.state.phase!==e)throw Error(`Expected phase '${e}', but the match is in '${this.state.phase}'`)}expectNoOffer(){if(this.state.offer)throw Error(`Pick a card first`)}requireSelected(){let e=this.state.selected;if(e===null)throw Error(`No gunner selected`);return e}};function vl(e,t){let n=Math.max(0,t.extraBalls);if(n===0&&!t.accuracy)return e;let r=e.balls>1&&e.coneDeg>0;return{...e,balls:e.balls+n,coneDeg:t.accuracy?0:e.coneDeg,interval:e.interval>0||r?e.interval:ll}}var yl=e=>N(e.x,e.y+kl,e.z),bl=.2,xl=3,Sl=1;function Cl(e){let{hull:t,masts:n}=e.ship,r=Math.min(...t.map(e=>e.center.x-e.halfSize.x)),i=Math.max(...t.map(e=>e.center.x+e.halfSize.x)),a=Math.max(...t.map(e=>Math.abs(e.center.z)+e.halfSize.z)),o=Math.max(...t.map(e=>e.center.y+e.halfSize.y),...n.map(e=>e.top)),s=N((r+i)/2,0,0),c=N((i-r)/2+xl,o+xl,a+xl),l=[...t.flatMap(e=>[-1,1].flatMap(t=>[-1,1].map(n=>N(e.center.x+t*e.halfSize.x,e.center.y+e.halfSize.y,e.center.z+n*e.halfSize.z)))),...n.flatMap(e=>[N(e.x,e.top,0),...e.sails.flatMap(e=>e.corners.map(e=>N(e.x,e.y,e.z)))])],u=1;for(let e of l){let t=Math.abs(e.x-s.x),n=Math.max(0,e.y),r=Math.abs(e.z-s.z),i=t/c.x**2,a=n/c.y**2,o=r/c.z**2,l=Math.hypot(i,a,o)||1,d=t+Sl*i/l,f=n+Sl*a/l,p=r+Sl*o/l,m=(d/c.x)**2+(p/c.z)**2;u=Math.max(u,m/Math.max(1e-6,1-(f/c.y)**2))}let d=Math.sqrt(u);return{center:s,radii:N(c.x*d,c.y,c.z*d)}}var wl=1,Tl=e=>e.chain?Math.max(0,e.chain.reach??0):0;function El(e){let t=e.skip;return{...e.cluster?{cluster:{bomblets:e.cluster.bomblets,ring:e.cluster.ring}}:{},...e.chain?{chain:{reach:Math.max(0,e.chain.reach??0)}}:{},...e.drill?{drill:Math.max(0,e.drill.reach)}:{},...t?{skip:{skips:Math.max(0,Math.round(t.skips)),keep:Math.max(0,t.keep),bounce:Math.max(0,t.bounce)}}:{}}}var Dl=20,Ol=80,kl=.25;function Al(e,t){return{launch:{index:t,delay:e.delay,origin:e.origin,velocity:e.velocity},flight:e.flight,impactTime:e.delay+e.flight.duration,kind:e.kind,parent:e.parent,split:e.split,damageScale:e.damageScale,blastScale:e.blastScale,intercepted:e.intercepted,...e.blocked?{blocked:!0}:{},magnetic:(e.magnet??0)>0,locked:e.locked,winged:e.wings!==void 0,...e.wingsOff===void 0?{}:{wingsOff:e.wingsOff},passes:e.passes,...e.burst?{burst:!0}:{},...e.bomblet?{bomblet:!0}:{}}}function jl(e,t){let n=e.now(t);return n.done?Al(e.resolvedBall(t),t):{launch:{index:t,delay:n.start.delay,origin:n.start.origin,velocity:n.start.velocity},flight:e.flightSoFar(t),impactTime:1/0,kind:n.start.kind,parent:n.start.parent,split:!1,damageScale:1,blastScale:n.blastScale,intercepted:!1,magnetic:(n.start.magnet??0)>0,locked:n.lock?.unitIndex??null,winged:n.start.wings!==void 0,...n.wingsOff===null?{}:{wingsOff:n.wingsOff},passes:e.passesOf(t),...n.start.bomblet?{bomblet:!0}:{}}}var Ml=(e,t)=>e.time-t.time||e.i-t.i||+!e.pass-!t.pass;function Nl(e){return e.map((e,t)=>({event:e,order:t})).sort((e,t)=>e.event.time-t.event.time||e.order-t.order).map(({event:e})=>e)}function Pl(e,t){let n=n=>({side:n,angle:On(n,e.arena).home,hp:e.ship.hp,fuel:e.ship.fuelPerTurn,crew:t[n].map((t,n)=>({unitIndex:n,unit:t,hp:In(e,t)})),masts:Gs(e),sailHoles:[],holes:0,upgrades:e.gunners.map(()=>sc()),laser:!1,machines:{antiMissile:null,healer:null,charger:null,shield:null},charged:null,depressed:null,rocked:!1,mist:null,fire:null,extraTurn:!1}),r=()=>({shots:0,hits:0,misfires:0,shipDamage:0,crewDamage:0,kills:0}),i=()=>e.gunners.map(()=>Eo(e.aim));return{phase:`ready`,turnSide:`player`,turn:0,wind:{angle:0,speed:0},ships:{player:n(`player`),enemy:n(`enemy`)},selected:null,aims:{player:i(),enemy:i()},lastPower:{player:null,enemy:null},clock:0,powerUp:null,powerUpCount:0,offer:null,gifts:[],island:{craters:[],...Vs(e)},winner:null,endReason:null,stats:{player:r(),enemy:r()}}}var Fl={sniper:5,revive:9,extraBall:5,magnet:5,repair:2,gifts:5.5,laser:8,antiMissile:6.5,healer:4,accuracy:4.5,wings:4.5,charger:5.5,hotShot:5,mist:5,hiredHand:5,shield:6.5,rogueWave:4.5,depression:4.5,sacrifice:6,pickpocket:7},Il=2.5,Ll=1.4,Rl=1.8,zl=.35,Bl=.75,Vl=4,Hl=6,Ul=.7,Wl=.45,Gl=class{side;rng;memory={powerBias:0,yawBias:0,shots:0,targetAngle:null,preferredPitch:null,lastGunner:null,threatened:!1};constructor(e,t){this.side=e,this.rng=new sl(t)}observe(e,t){if(e.side===this.side)return;let n=t.frameOf(this.side).position;this.memory.threatened=e.projectiles.some(e=>e.flight.hit!==null&&(vs(e.flight.hit)||ge(e.flight.hit.point,n)<16))}chooseCard(e,t=e.state.offer?.cards??[]){let{config:n}=e,r=e.state.ships[this.side],i=1-r.hp/Math.max(1e-6,n.ship.hp),a=r.crew.some(e=>e.hp>0&&e.hp<In(n,e.unit)),o=0,s=-1/0;return t.forEach((t,c)=>{let l=Fl[t.kind];t.kind===`repair`&&(l+=10*i+.5*(n.ship.masts.length-r.masts.filter((e,t)=>e.top>=n.ship.masts[t].top).length)+(r.fire?3:0)),t.kind===`healer`&&a&&(l+=3),t.kind===`extraBall`&&t.unit!==null&&e.cannonIdOf(this.side,t.unit)===`heavy`&&(l+=1),(Zs(t.kind)||t.kind===`pickpocket`)&&r.hp<n.ship.hp*.3&&(l-=2),t.kind===`sacrifice`&&r.crew.some(e=>e.hp<=0)&&(l-=4),l+=this.rng.range(0,Il),l>s&&(s=l,o=c)}),o}chooseSacrifice(e){let t=e.state.ships[this.side],n=e.readyGunners(this.side),r=t=>e.isDepressed(this.side,t),i=e.livingGunners(this.side).filter(e=>n.length!==1||n[0]!==e),a=i.filter(e=>!cc(t.upgrades[e])&&(t.charged!==e||r(e))),o=a.length>0?a:i,s=o.filter(r),c=s.length>0?s:o;return c.reduce((e,n)=>t.crew[n].hp<t.crew[e].hp?n:e,c[0])}cardChoice(e){let t=this.chooseCard(e);return e.state.offer?.cards[t]?.kind===`sacrifice`?{index:t,unit:this.chooseSacrifice(e)}:{index:t}}steer(e,t){return Kl(e,t)}planTurn(e,t=e.state.clock){let{config:n}=e,r=n.bot,i=this.memory,a=this.rng,o=Ee(r.difficulty,0,1),s=T(1.7,.45,o),c=h(this.side),l=e.state.ships[c].angle,u=r.startPowerError*s,d=M(r.startYawErrorDeg)*s;i.shots===0?(i.powerBias=this.signed()*u*a.range(.6,1),i.yawBias=this.signed()*d*a.range(.4,1)):i.targetAngle!==null&&Math.abs(l-i.targetAngle)*n.arena.orbitRadius>r.targetMovedDistance&&this.growError(u*r.targetMovedError,d*r.targetMovedError,u,d);let f=this.aimFactor(e),p=M(r.windAngleErrorDeg)*s*f*a.gaussian(),m=r.windStrengthError*s*f*a.gaussian(),g=e.windAcceleration({angle:e.state.wind.angle+p,speed:Math.max(0,e.state.wind.speed*(1+m))}),_=e.state.ships[this.side];if(e.cardsOn&&_.laser)return this.planLaser(e,s*f);let v=this.chooseGunner(e);if(e.cardsOn&&_.upgrades[v]?.rifle){let t=this.planRifle(e,v,s*f);if(t)return t;let n=e.readyGunners(this.side).filter(e=>!_.upgrades[e].rifle);if(n.length===0)return this.planRifle(e,v,s*f,!0);v=this.chooseGunner(e,n)}let y=this.chooseTarget(e,v),b=this.chooseSpot(e,v,y,g);Math.abs(b-e.state.ships[this.side].angle)*n.arena.orbitRadius>3&&this.growError(u*r.selfMovedError,d*r.selfMovedError,u,d);let x=Jl(e,this.side,b,()=>ks(e,this.side,v,y(),2,g)),S,C,w=this.choosePitch(x),E=e.cardsOn?e.state.gifts:[];E.length>0&&a.chance(Ee(Bl*T(.7,1.3,o),0,1))&&(w=Jl(e,this.side,b,()=>this.throughGifts(e,v,E,g))??w),w?(S=w.aim,C=w.power,i.preferredPitch=w.aim.pitch):(S={yaw:0,pitch:M(n.aim.pitchMaxDeg-3)},C=.7);let D=(i.yawBias+M(r.jitterYawDeg)*a.gaussian())*f,O=(i.powerBias+r.jitterPower*a.gaussian())*f,k=e=>({aim:To({yaw:e.aim.yaw+D,pitch:e.aim.pitch},n.aim),power:Ee(e.power+O,n.power.cancelBelow+.05,1)});({aim:S,power:C}=k({aim:S,power:C}));let ee=T(.72,.38,o);i.powerBias*=ee*(a.chance(r.overcorrectChance)?-1:1),i.yawBias*=ee*(a.chance(r.overcorrectChance)?-1:1),i.shots++,i.targetAngle=l,i.lastGunner=v,i.threatened=!1;let A={thinkTime:a.range(r.thinkTime.min,r.thinkTime.max),sailTo:b,unitIndex:v,aim:S,power:C,aimTime:a.range(r.aimTime.min,r.aimTime.max),misfire:a.chance(r.misfireChance*(1-o)*2),wait:0,fireClock:null,weapon:`cannon`,laser:null,steerTo:e.cardsOn&&_.upgrades[v]?.wings?this.offTarget(y(),Rl*s*f):null},te=n.powerUps?.enabled?e.state.powerUp:null;if(te&&!A.misfire&&x.length>0&&a.chance(Ee(r.powerUpChance*T(.6,1.4,o),0,1))){let n=[{unitIndex:v,solutions:x}];Jl(e,this.side,b,()=>{for(let t of e.readyGunners(this.side)){if(e.cardsOn&&_.upgrades[t]?.rifle)continue;let r=this.targetThrough(e,t,te.anchor);r&&n.push({unitIndex:t,solutions:ks(e,this.side,t,r,2,g)})}});let r=this.timeThroughPowerUp(e,n,A,t);if(r)return{...A,unitIndex:r.unitIndex,...k(r.solution),wait:r.wait,fireClock:r.fireClock}}return A}timeThroughPowerUp(e,t,n,r){let{config:i}=e,a=e.state.powerUp,{anchor:o}=a,s=Kc(i,a.kind),c=Math.abs(n.sailTo-e.state.ships[this.side].angle)*i.arena.orbitRadius/i.ship.sailSpeed,l=r+n.thinkTime+c+Wl+n.aimTime,u=null;for(let{unitIndex:e,solution:n}of t.flatMap(e=>e.solutions.map(t=>({unitIndex:e.unitIndex,solution:t})))){let{points:t,dt:r}=n.flight,c=-1,d=1/0;if(t.forEach((e,t)=>{let n=Math.hypot(e.x-o.x,e.z-o.z);n<d&&(d=n,c=t)}),c<0||d>s*.5)continue;let f=t[c].y,p=n.power*i.power.fillTime+.1;for(let t=0;t<=i.bot.powerUpMaxWait&&(!u||t<u.wait);t+=.05){let o=l+t+p,d=Gc(i,a,o+c*r).y;if(Math.abs(d-f)<s*.35){u={unitIndex:e,solution:n,wait:t,fireClock:o};break}}}return u}targetThrough(e,t,n){let{config:r}=e,i=G(e.frameOf(this.side),wo(Hn(r,t),r.ship,r.cannonMount)),a=e.frameOf(h(this.side)),o=a.forward,s=n.x-i.x,c=n.z-i.z,l=a.position.x-i.x,u=a.position.z-i.z,d=o.x*c-s*o.z;if(Math.abs(d)<1e-6)return null;let f=(o.x*u-l*o.z)/d,p=(s*u-c*l)/d,m=r.ship.hull,g=Math.min(...m.map(e=>e.center.x-e.halfSize.x))+1,_=Math.max(...m.map(e=>e.center.x+e.halfSize.x))-1;return f<=1||p<g||p>_?null:G(a,N(p,r.ship.deckHeight+.5,0))}planLaser(e,t){let{config:n}=e,r=this.rng,i=h(this.side),a=e.state.ships[this.side],o=e.readyGunners(this.side),s=o.find(e=>!cc(a.upgrades[e]))??o[0],c=Xs.filter(t=>e.state.ships[i].machines[t]),l=c.length>0&&r.chance(.35)?e.machinePosition(i,r.pick(c)):this.chooseTarget(e,s)(),u=this.offTarget(l,Ll*t);return this.memory.threatened=!1,{thinkTime:r.range(n.bot.thinkTime.min,n.bot.thinkTime.max),sailTo:a.angle,unitIndex:s,aim:e.aimOf(this.side,s),power:1,aimTime:r.range(n.bot.aimTime.min,n.bot.aimTime.max),misfire:!1,wait:0,fireClock:null,weapon:`laser`,laser:{x:u.x,z:u.z},steerTo:null}}planRifle(e,t,n,r=!1){let{config:i}=e,a=this.rng,o=h(this.side),s=e.state.ships[this.side],c=On(this.side,i.arena),l=s.angle,u=s.fuel/i.arena.orbitRadius,d=[l,...[-1,-.66,-.33,.33,.66,1].map(e=>kn(l+e*u,c))].filter((e,t,n)=>n.indexOf(e)===t).sort((e,t)=>Math.abs(e-l)-Math.abs(t-l)),f=e.state.ships[o],p=e.frameOf(o),m=[...f.crew.filter(e=>e.hp>0).sort((e,t)=>e.hp-t.hp||e.unitIndex-t.unitIndex).map(e=>({point:yl(So(p,Hn(i,e.unitIndex),i.ship,i.crew).top),unit:e.unitIndex,machine:null})),...Xs.filter(e=>f.machines[e]).map(t=>({point:e.machinePosition(o,t),unit:null,machine:t}))],g=null;for(let n of d){for(let r of m){let i=Jl(e,this.side,n,()=>{let n=e.rifleAimAt(this.side,t,r.point),i=e.predictRifle(this.side,t,n).hit;return i?.side===o&&(r.unit!==null&&i.unitIndex===r.unit||r.machine!==null&&i.machine===r.machine)?n:null});if(i){g={spot:n,aim:i};break}}if(g)break}if(!g&&!r)return null;let _=g?.aim??e.rifleAimAt(this.side,t,G(p,N(0,i.ship.deckHeight+.5,0))),v=M(zl)*n,y=To({yaw:_.yaw+a.gaussian()*v,pitch:_.pitch+a.gaussian()*v},i.aim);return this.memory.threatened=!1,this.memory.lastGunner=t,{thinkTime:a.range(i.bot.thinkTime.min,i.bot.thinkTime.max),sailTo:g?.spot??l,unitIndex:t,aim:y,power:1,aimTime:a.range(i.bot.aimTime.min,i.bot.aimTime.max),misfire:!1,wait:0,fireClock:null,weapon:`rifle`,laser:null,steerTo:null}}throughGifts(e,t,n,r){let i=e.config.powerUps.radius,a=null,o=0;for(let s of n){let c=this.targetThrough(e,t,s.anchor);if(c)for(let s of ks(e,this.side,t,c,Vl,r)){let e=n.filter(e=>ql(s.flight,e.anchor,i*.6)).length;e>o&&(o=e,a=s)}}return a}aimFactor(e){if(!e.cardsOn)return 1;let{cards:t}=e.config,n=e.state.ships[this.side],r=e.state.ships[h(this.side)];return(n.rocked?Math.max(1,t.rogueWave.botError):1)*(r.mist===`up`?Math.max(1,t.mist.botError):1)}offTarget(e,t){let n=this.rng.gaussian()*t,r=this.rng.gaussian()*t;return N(e.x+n,e.y,e.z+r)}chooseGunner(e,t){let{config:n}=e,r=h(this.side),i=ge(e.frameOf(this.side).position,e.frameOf(r).position),a=e.state.ships[r].crew.some(e=>e.hp>0&&e.hp<=n.cannons.heavy.damage),o=t?[...t]:e.readyGunners(this.side),s=e.state.ships[this.side],c=o.map(t=>{let n=e.cannonIdOf(this.side,t),r=1;return n===`heavy`&&a&&(r+=.8),n===`scatter`&&(r=i<125?.9:.35),t===this.memory.lastGunner&&(r*=1.6),e.cardsOn&&s.upgrades[t]&&cc(s.upgrades[t])&&(r*=2.5),e.cardsOn&&s.charged===t&&(r*=1.8),r}),l=this.rng.range(0,c.reduce((e,t)=>e+t,0));for(let e=0;e<o.length;e++)if(l-=c[e],l<=0)return o[e];return o[o.length-1]}chooseTarget(e,t){let{config:n}=e,r=h(this.side);if(e.cannonOf(this.side,t).chain){let t=n.ship.masts.map((t,n)=>({m:t,top:e.state.ships[r].masts[n]?.top??t.top})).filter(e=>e.top>e.m.sailFrom+2);if(t.length>0&&this.rng.chance(Ul)){let{m:n,top:i}=this.rng.pick(t),a=N(n.x,(n.sailFrom+i)/2,0);return()=>G(e.frameOf(r),a)}}let i=e.state.ships[r].crew.filter(e=>e.hp>0),a=e.cannonOf(this.side,t),o=i.filter(e=>e.hp<=a.damage),s=o.length>0&&this.rng.chance(.7)?this.rng.pick(o):this.rng.chance(.5)?this.rng.pick(i):null,c=s?N(Hn(n,s.unitIndex).x,n.ship.deckHeight+.8,n.crew.standZ):N(0,n.ship.deckHeight+.5,0);return()=>G(e.frameOf(r),c)}chooseSpot(e,t,n,r){let{config:i}=e,a=e.state.ships[this.side],o=On(this.side,i.arena),s=a.fuel/i.arena.orbitRadius,c=a.angle,l=i=>Jl(e,this.side,i,()=>ks(e,this.side,t,n(),4,r).length>0),u=[-1,-.66,-.33,.33,.66,1].map(e=>kn(c+e*s,o)).filter((e,t,n)=>Math.abs(e-c)>.001&&n.indexOf(e)===t);if(!l(c))return[...u].sort((e,t)=>Math.abs(e-c)-Math.abs(t-c)).find(l)??c;let d=this.memory.threatened&&this.rng.chance(e.config.bot.dodgeChance);if(d||this.rng.chance(e.config.bot.repositionChance)){let e=(d?[...u].sort((e,t)=>Math.abs(t-c)-Math.abs(e-c)):this.shuffled(u)).slice(0,3).find(l);if(e!==void 0)return e}return c}choosePitch(e){if(e.length===0)return null;let t=this.memory.preferredPitch;if(t!==null)return e.reduce((e,n)=>Math.abs(n.aim.pitch-t)<Math.abs(e.aim.pitch-t)?n:e);let n=Math.floor(e.length*.2),r=Math.max(n+1,Math.ceil(e.length*.75));return e[n+this.rng.int(r-n)]}growError(e,t,n,r){let i=this.memory;i.powerBias=Ee(i.powerBias+this.signed()*e,-n*1.4,n*1.4),i.yawBias=Ee(i.yawBias+this.signed()*t,-r*1.4,r*1.4)}signed(){return this.rng.chance(.5)?1:-1}shuffled(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=this.rng.int(e+1);[t[e],t[n]]=[t[n],t[e]]}return t}};function Kl(e,t){let n=e.steering,r=e.steeringLanding(),i=n?.balls.find(e=>e.wings&&!e.done);if(!r||!i)return{x:0,y:0};let a=Math.hypot(i.velocity.x,i.velocity.z);if(a<1e-6)return{x:0,y:0};let o=i.velocity.x/a,s=i.velocity.z/a,c=t.x-r.point.x,l=t.z-r.point.z;return{x:Ee((c*-s+l*o)/Hl,-1,1),y:Ee((c*o+l*s)/Hl,-1,1)}}function ql(e,t,n){let{points:r}=e;for(let e=1;e<r.length;e++)if(ge(ke(t,r[e-1],r[e]),t)<=n)return!0;return!1}function Jl(e,t,n,r){let i=e.state.ships[t],a=i.angle;i.angle=n;try{return r()}finally{i.angle=a}}function Yl(e,t){return e<t.fillTime?{power:Math.max(0,e)/t.fillTime,phase:`filling`}:e<t.fillTime+t.graceTime?{power:1,phase:`grace`}:{power:1,phase:`overcharged`}}function Xl(e,t){let{power:n,phase:r}=Yl(e,t);return r===`overcharged`?{kind:`misfire`}:n<t.cancelBelow?{kind:`cancel`}:{kind:`fire`,power:n}}var Zl=.35;function Ql(e,t){let n=Math.PI/180;return Math.asin(Ee(-Math.cos(e*n)*Math.cos(t*n),-1,1))/n}var $l=class{elevation=null;listening=!1;asking=!1;start(){this.listening||(this.listening=!0,window.addEventListener(`deviceorientation`,this.onOrientation),this.mustAsk()&&(window.addEventListener(`touchend`,this.askOnTap),window.addEventListener(`click`,this.askOnTap)))}stop(){this.listening&&(this.listening=!1,this.elevation=null,window.removeEventListener(`deviceorientation`,this.onOrientation),window.removeEventListener(`touchend`,this.askOnTap),window.removeEventListener(`click`,this.askOnTap))}request(){let e=this.api();e?.requestPermission&&!this.asking&&(this.asking=!0,e.requestPermission().catch(()=>`denied`).finally(()=>this.asking=!1))}api(){return typeof DeviceOrientationEvent>`u`?void 0:DeviceOrientationEvent}mustAsk(){return typeof this.api()?.requestPermission==`function`}askOnTap=()=>{window.removeEventListener(`touchend`,this.askOnTap),window.removeEventListener(`click`,this.askOnTap),this.request()};onOrientation=e=>{if(e.beta===null||e.gamma===null)return;let t=Ql(e.beta,e.gamma);this.elevation=this.elevation===null?t:this.elevation+(t-this.elevation)*Zl}},eu=12,tu=350,nu=()=>performance.now()/1e3,ru={ArrowLeft:`left`,KeyA:`left`,ArrowRight:`right`,KeyD:`right`,ArrowUp:`up`,KeyW:`up`,ArrowDown:`down`,KeyS:`down`},iu=class{aimMode=!1;tilt=new $l;coarsePointer;surface;held=new Map;fireSources=new Set;pointers=new Map;events=[];aimDx=0;aimDy=0;on=!0;sling=null;puller=null;constructor(e){this.surface=e,this.coarsePointer=window.matchMedia(`(pointer: coarse)`).matches,e.addEventListener(`pointerdown`,this.onPointerDown),e.addEventListener(`pointermove`,this.onPointerMove),e.addEventListener(`pointerup`,this.onPointerUp),e.addEventListener(`pointercancel`,this.onPointerCancel),e.addEventListener(`contextmenu`,e=>e.preventDefault()),document.addEventListener(`mousemove`,this.onMouseMove),window.addEventListener(`keydown`,this.onKeyDown),window.addEventListener(`keyup`,this.onKeyUp),window.addEventListener(`blur`,()=>this.releaseAll()),document.addEventListener(`pointerlockchange`,()=>{this.pointerLocked||this.cancelFire(`mouse`)})}press(e,t){this.sources(e).add(t)}release(e,t){this.sources(e).delete(t)}fireDown(e){this.fireSources.size===0&&this.events.push({type:`fireDown`,time:nu()}),this.fireSources.add(e)}fireUp(e){this.fireSources.delete(e)&&this.fireSources.size===0&&this.events.push({type:`fireUp`,time:nu()})}cancelFire(e){this.fireSources.delete(e)&&this.fireSources.size===0&&this.events.push({type:`fireCancel`})}emit(e){this.events.push(e)}isHeld(e){return this.sources(e).size>0}moveAxis(){return+!!this.isHeld(`left`)-!!this.isHeld(`right`)}get fireHeld(){return this.fireSources.size>0}get drag(){for(let e of this.pointers.values())return e;return null}get pull(){return this.puller?.started?this.pointers.get(this.puller.id)??null:null}nudgeAim(e,t){this.on&&this.aimMode&&(this.aimDx+=e,this.aimDy+=t)}consumeAimDelta(){let e={dx:this.aimDx,dy:this.aimDy};return this.aimDx=0,this.aimDy=0,e}consumeEvents(){let e=this.events;return this.events=[],e}releaseAll(){for(let e of this.held.values())e.clear();this.fireSources.size>0&&(this.fireSources.clear(),this.events.push({type:`fireCancel`})),this.cancelPull()}setAimMode(e,t=null){this.aimMode=e;let n=e?t:null;n!==this.sling&&this.cancelPull(),this.sling=n,this.aimDx=0,this.aimDy=0,(!e||n)&&document.pointerLockElement===this.surface&&document.exitPointerLock()}get slingMode(){return this.sling!==null}get pointerLocked(){return document.pointerLockElement===this.surface}get enabled(){return this.on}set enabled(e){e||(this.releaseAll(),this.pointers.clear()),this.on=e}cancelPull(){let e=this.puller?.started;this.puller=null,e&&this.events.push({type:`pullCancel`})}sources(e){let t=this.held.get(e);return t||(t=new Set,this.held.set(e,t)),t}onPointerDown=e=>{if(this.on){if(e.pointerType===`mouse`){if(this.pointerLocked){e.button===0&&this.fireDown(`mouse`);return}if(this.aimMode&&!this.slingMode&&e.button===0&&`requestPointerLock`in this.surface)try{this.surface.requestPointerLock()?.catch?.(()=>void 0)}catch{}}this.surface.setPointerCapture?.(e.pointerId),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,startTime:performance.now(),moved:0}),this.sling&&this.puller===null&&(e.pointerType!==`mouse`||e.button===0)&&this.onPouch(e.clientX,e.clientY)&&(this.puller={id:e.pointerId,started:!1})}};onPouch(e,t){if(!this.sling?.pouch)return!0;let n=this.sling.pouch();return n!==null&&Math.hypot(e-n.x,t-n.y)<=n.r}onPointerMove=e=>{let t=this.pointers.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,r=e.clientY-t.y;t.x=e.clientX,t.y=e.clientY,t.moved=Math.max(t.moved,Math.hypot(e.clientX-t.startX,e.clientY-t.startY)),this.puller?.id===e.pointerId&&!this.puller.started&&t.moved>=eu&&this.fireSources.size===0&&(this.puller.started=!0,this.events.push({type:`pullStart`})),this.aimMode&&(!this.sling||this.sling.pouch&&this.puller?.id!==e.pointerId)&&(this.aimDx+=n,this.aimDy+=r)};onPointerUp=e=>{let t=this.pointers.get(e.pointerId);if(this.pointers.delete(e.pointerId),this.puller?.id===e.pointerId){let n=this.puller.started;if(this.puller=null,t&&n){this.events.push({type:`pullEnd`,dx:e.clientX-t.startX,dy:e.clientY-t.startY});return}}if(e.pointerType===`mouse`&&this.pointerLocked){e.button===0&&this.fireUp(`mouse`);return}t&&t.moved<eu&&performance.now()-t.startTime<tu&&this.events.push({type:`tap`})};onPointerCancel=e=>{this.pointers.delete(e.pointerId),this.puller?.id===e.pointerId&&this.cancelPull()};onMouseMove=e=>{this.on&&this.pointerLocked&&this.aimMode&&(this.aimDx+=e.movementX,this.aimDy+=e.movementY)};onKeyDown=e=>{if(!this.on||au(e.target))return;let t=ru[e.code];if(t){this.press(t,`key:${e.code}`),e.preventDefault();return}e.repeat||(e.code===`Space`||e.code===`Enter`?(this.fireDown(`key:${e.code}`),e.preventDefault()):e.code===`Escape`||e.code===`Backspace`||e.code===`KeyQ`?this.events.push({type:`back`}):/^Digit[1-9]$/.test(e.code)&&this.events.push({type:`select`,index:Number(e.code.slice(5))-1}))};onKeyUp=e=>{let t=ru[e.code];t&&this.release(t,`key:${e.code}`),(e.code===`Space`||e.code===`Enter`)&&this.fireUp(`key:${e.code}`)}};function au(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLElement&&e.isContentEditable}var ou={damage:`#ff4d4d`,blast:`#ff9a2e`,split:`#4dff88`,meteor:`#b980ff`},su=new V(0,0,1),cu=class{object=new H;model=null;kind=null;crate=null;balloon=null;gate=null;disc=null;glow=null;time=0;pulse=0;leaving=null;departing=!1;balloonDrift=new V;pieces=[];gateRadius=4;crateRadius=3;facing=new V(0,0,1);show(e,t,n,r){this.clear(),this.kind=e,this.crateRadius=t,this.gateRadius=n,this.facing.copy(r).setY(0),this.facing.lengthSq()<1e-9&&this.facing.set(0,0,1),this.facing.normalize(),this.leaving=null,this.model=new H;let i=ou[e];e===`split`?this.buildGate(i):this.buildCrate(e,i),this.glow=new ye(new at({map:du(),color:i,transparent:!0,depthWrite:!1,blending:2,opacity:.7})),this.glow.scale.setScalar((e===`split`?n:t)*3.2),this.glow.renderOrder=5,this.model.add(this.glow),this.object.add(this.model)}get visible(){return this.model!==null}collect(e){if(this.pulse=1,!(e>0||!this.model||this.leaving!==null)&&(this.leaving=0,this.crate)){this.crate.visible=!1;let e=this.crate.material;for(let t=0;t<4;t++){let n=this.crateRadius*.45,r=new B(new Ve(n,n*.4,n),e);r.position.copy(this.crate.position).add(new V(t%2-.5,0,Math.floor(t/2)-.5).multiplyScalar(n));let i=r.position.clone().sub(this.crate.position).setY(.6).normalize();this.model.add(r),this.pieces.push({mesh:r,velocity:i.multiplyScalar(6+Math.random()*5).add(new V(0,3,0)),spin:new V(Math.random()*8-4,Math.random()*8-4,Math.random()*8-4)})}this.balloonDrift.set(Math.random()-.5,8,Math.random()-.5)}}depart(){this.model&&this.leaving===null&&(this.leaving=0,this.departing=!0)}clear(){this.model&&(this.object.remove(this.model),this.model.traverse(e=>{if(e.isSprite){e.material.dispose();return}let t=e;t.geometry?.dispose();for(let e of t.material?Array.isArray(t.material)?t.material:[t.material]:[])e.map?.dispose(),e.dispose()})),this.model=null,this.kind=null,this.crate=null,this.balloon=null,this.gate=null,this.disc=null,this.glow=null,this.pieces=[],this.leaving=null,this.departing=!1}update(e,t){this.time+=e;let n=this.model;if(!n||(n.visible=t!==null,!t))return;this.leaving===null&&n.position.copy(t),this.pulse=Math.max(0,this.pulse-e*4);let r=1+.18*Math.sin(Math.min(1,1-this.pulse)*Math.PI)*(this.pulse>0);if(this.gate){this.gate.quaternion.setFromUnitVectors(su,this.facing),this.gate.rotateZ(this.time*.6);let e=this.leaving===null?1:Math.max(0,1-this.leaving/.45);this.gate.scale.setScalar(r*e),this.disc&&(this.disc.uniforms.uTime.value=this.time)}if(this.crate&&this.balloon){let t=.12*Math.sin(this.time*1.3);this.crate.rotation.set(t*.4,this.time*.4,t),this.crate.scale.setScalar(r),this.leaving!==null&&this.balloon.position.addScaledVector(this.balloonDrift,e)}if(this.glow){let e=this.glow.material;e.opacity=(.55+.2*Math.sin(this.time*3))*(this.leaving===null?1:Math.max(0,1-this.leaving*2)),this.glow.scale.setScalar((this.kind===`split`?this.gateRadius:this.crateRadius)*3.2*r)}for(let t of this.pieces)t.velocity.y-=18*e,t.mesh.position.addScaledVector(t.velocity,e),t.mesh.rotation.x+=t.spin.x*e,t.mesh.rotation.y+=t.spin.y*e,t.mesh.rotation.z+=t.spin.z*e;this.departing&&this.leaving!==null&&(n.position.y+=e*(4+this.leaving*10),n.scale.setScalar(Math.max(.01,1-this.leaving/1.6))),this.leaving!==null&&(this.leaving+=e,this.leaving>(this.departing?1.6:3)&&this.clear())}buildCrate(e,t){let n=this.model,r=this.crateRadius*.95,i=new S({map:fu(e,t),roughness:.7,emissive:t,emissiveIntensity:.18}),a=new B(new Ve(r,r,r),i);a.castShadow=!0,this.crate=a;let o=new H,s=new B(new $t(r*.75,18,14).scale(1,1.18,1),new S({color:t,roughness:.35,emissive:t,emissiveIntensity:.12}));s.position.y=r*2.2,s.castShadow=!0;let c=new B(new Oe(r*.12,r*.18,8),s.material);c.position.y=r*2.2-r*.9,c.rotation.x=Math.PI;let l=new B(new P(.03,.03,r*1.1,4),new ae({color:`#2b2622`}));l.position.y=r*.5+r*.55,o.add(s,c,l),this.balloon=o,n.add(a,o)}buildGate(e){let t=this.model,n=this.gateRadius,r=new H,i=new B(new Le(n*.95,n*.08,10,48),new S({color:e,emissive:e,emissiveIntensity:1.1,roughness:.4})),a=new B(new Le(n*.95,n*.12,4,8),new S({color:`#e8fff0`,emissive:e,emissiveIntensity:.4,roughness:.5,flatShading:!0}));a.scale.setScalar(1.001),this.disc=new Ge({transparent:!0,depthWrite:!1,side:2,blending:2,uniforms:{uTime:{value:0},uColor:{value:new y(e)}},vertexShader:`
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
      `});let o=new B(new je(n*.92,48),this.disc);o.renderOrder=6,r.add(i,a,o),this.gate=r,t.add(r)}},lu=class{object=new H;views=new Map;show(e,t){for(let n of e){let e=new cu;e.show(n.kind,t,t,new V(0,0,1)),this.views.set(n.id,e),this.object.add(e.object)}}has(e){return this.views.has(e)}get ids(){return[...this.views.keys()]}collect(e){this.views.get(e)?.collect(0)}departAll(){for(let e of this.views.values())e.depart()}clear(){for(let e of this.views.values())e.clear(),this.object.remove(e.object);this.views.clear()}update(e,t){for(let[n,r]of this.views)r.update(e,t(n)),r.visible||(this.object.remove(r.object),this.views.delete(n))}},uu=null;function du(){if(uu)return uu;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.35)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),uu=new re(e),uu}function fu(e,t){let n=document.createElement(`canvas`);n.width=n.height=128;let r=n.getContext(`2d`);r.fillStyle=`#9a6a3c`,r.fillRect(0,0,128,128),r.fillStyle=`#7b5130`;for(let e=0;e<4;e++)r.fillRect(0,e*32+30,128,3);if(r.strokeStyle=`#5a3a20`,r.lineWidth=10,r.strokeRect(5,5,118,118),r.fillStyle=t,r.beginPath(),r.arc(64,64,38,0,Math.PI*2),r.fill(),r.lineWidth=5,r.strokeStyle=`#ffffff`,r.stroke(),r.fillStyle=`#ffffff`,e===`damage`)r.font=`bold 40px system-ui, sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(`×2`,64,67);else if(e===`blast`){r.beginPath();for(let e=0;e<16;e++){let t=e/16*Math.PI*2,n=e%2?13:28;r.lineTo(64+Math.cos(t)*n,64+Math.sin(t)*n)}r.closePath(),r.fill()}else r.beginPath(),r.moveTo(44,44),r.lineTo(80,70),r.lineTo(70,80),r.closePath(),r.fill(),r.beginPath(),r.arc(76,76,14,0,Math.PI*2),r.fill();let i=new re(n);return i.colorSpace=w,i}function pu(e){return e?.chain?`chain`:e?.drill?`drill`:e?.skip?`skip`:e?.cluster?`cluster`:e?.pirate?`pirate`:null}function mu(e,t=!0){let n=new H,r=new B(new $t(e,16,12),new S({color:`#23252a`,roughness:.5,metalness:.4}));r.castShadow=!0;let i=new B(new Le(e*.99,e*.07,5,20).rotateX(Math.PI/2),yu()),a=new B(new P(e*.28,e*.32,e*.3,10),yu());a.position.y=e*.98;let o=new B(new P(e*.05,e*.05,e*.45,5),new S({color:`#c9b083`,roughness:.9}));if(o.position.set(e*.06,e*1.3,0),o.rotation.z=-.35,n.add(r,i,a,o),t){let t=new B(new $t(e*.13,8,6),new ae({color:`#ffd36a`}));t.position.set(e*.16,e*1.52,0),n.add(t)}return n}function hu(e){let t=new H,n=new B(new $t(e,18,10),yu());n.scale.y=.42,n.castShadow=!0;let r=new B(new Le(e*.97,e*.09,6,22).rotateX(Math.PI/2),new S({color:`#c99a3b`,roughness:.35,metalness:.8})),i=new B(new Ve(e*.22,e*.3,e*.22),new S({color:`#f1e3b0`,roughness:.5}));return i.position.x=e,t.add(n,r,i),t}var gu=()=>new S({color:`#c9ccd1`,roughness:.28,metalness:.9,flatShading:!0});function _u(e,t){let n=new Oe(e,t,6,6).rotateX(Math.PI/2).translate(0,0,t/2),r=n.getAttribute(`position`);for(let e=0;e<r.count;e++){let n=r.getZ(e)/t*Math.PI*1.6,i=r.getX(e),a=r.getY(e);r.setXY(e,i*Math.cos(n)-a*Math.sin(n),i*Math.sin(n)+a*Math.cos(n))}n.computeVertexNormals();let i=new B(n,gu());return i.castShadow=!0,i}function vu(e){let t=new H,n=new B(new $t(e,14,10),yu());n.castShadow=!0;let r=_u(e*.85,e*2.1);r.position.z=e*.55;let i=new B(new Le(e*.8,e*.14,6,16),new S({color:`#c99a3b`,roughness:.35,metalness:.8}));return i.position.z=e*.6,t.add(n,r,i),t}var yu=()=>new S({color:`#3b3a39`,roughness:.45,metalness:.7});function bu(e,t){let n=new B(new $t(e,14,8,0,Math.PI*2,0,Math.PI/2).rotateZ(-Math.PI/2),t),r=new B(new je(e,14).rotateY(-Math.PI/2),t);return n.add(r),n.castShadow=!0,n}function xu(e,t,n,r,i){let a=new H,o=new Le(r*.38,r*.09,5,10);o.scale(1.45,1,1);let s=t.clone().sub(e),c=new et().setFromUnitVectors(new V(1,0,0),s.clone().normalize());for(let t=0;t<n;t++){let r=new B(o,i);r.position.copy(e).addScaledVector(s,(t+.5)/n),r.quaternion.copy(c),t%2&&r.rotateX(Math.PI/2),r.castShadow=!0,a.add(r)}return a}function Su(e,t){let n=e/3;return{r:n,span:Math.max(2*n,2*Math.max(t,e)-2*n)}}function Cu(e,t){return Math.min(5,Math.max(.3,Su(e,t).span*.9/e/1.5))}function wu(e,t){let n=yu(),r=new H,i=bu(e,n);i.position.x=t/2;let a=bu(e,n);return a.position.x=-t/2,a.rotation.y=Math.PI,r.add(i,a,xu(new V(-t/2,0,0),new V(t/2,0,0),Math.max(3,Math.round(t/(e*.9))),e*.9,n)),r}function Tu(e,t,n=1){if(e===`chain`){let e=t.barrelLength,r=yu(),i=n,a=new H,o=new H;o.position.z=e,a.add(o);let s=.6*i,c=[new V(.05,.02,-.05),new V(.12,-.24,.13),new V(.11,-.24-(s-.24)*.5,.11),new V(.08,-s,.08)];for(let e=0;e+1<c.length;e++)o.add(xu(c[e],c[e+1],Math.max(2,Math.round(c[e].distanceTo(c[e+1])/.12)),.16,r));let l=wu(.17,.75*i);return l.position.set(.77+.375*i,-t.pivotHeight+.17,-.7),l.rotation.y=.12,{barrel:a,deck:l,hang:o}}if(e===`pirate`){let e=new H,n=new S({color:`#3a281c`,roughness:.8}),r=new S({color:`#1d1510`,roughness:.9});for(let i of[-.09,.09]){let a=new B(new P(.075,.085,.36,10).rotateX(Math.PI/2),n);a.position.set(i,.02,t.barrelLength+.06);let o=new B(new Ve(.13,.22,.08),r);o.position.set(i,.07,t.barrelLength+.26),a.castShadow=o.castShadow=!0,e.add(a,o)}let i=new H,a=new B(new $t(.42,16,10),new S({color:`#b3262e`,roughness:.75}));a.scale.set(1,.32,.85),a.position.y=.14,a.castShadow=!0;let o=new B(new Le(.4,.035,6,20).rotateX(Math.PI/2),new S({color:`#e0b04a`,roughness:.4,metalness:.6}));return o.scale.set(1,1,.85),o.position.y=.14,i.add(a,o),i.position.set(1.05,-t.pivotHeight,-.6),{barrel:e,deck:i}}if(e===`cluster`){let e=new H,n=mu(.26);n.position.set(0,.08,t.barrelLength-.06),e.add(n);let r=new H;for(let[e,t,n]of[[-.2,.17,-.15],[.2,.17,-.15],[0,.17,.2],[0,.45,0]]){let i=mu(.17,!1);i.position.set(e,t,n),i.rotation.y=e*4,r.add(i)}return r.position.set(.98,-t.pivotHeight,-.6),{barrel:e,deck:r}}if(e===`skip`){let e=new H,n=hu(.19);n.rotation.x=Math.PI/2,n.position.z=t.barrelLength-.05,e.add(n);let r=new H;for(let e=0;e<3;e++){let t=hu(.2);t.position.y=.09+e*.17,t.rotation.y=e*.9,r.add(t)}return r.position.set(.98,-t.pivotHeight,-.6),{barrel:e,deck:r}}if(e===`drill`){let e=new H,n=_u(.17,.5);n.position.z=t.barrelLength-.12,e.add(n);let r=new H,i=new B(new Ve(.62,.34,.5),new S({color:`#7a5233`,roughness:.85}));i.position.y=.17,i.castShadow=!0,r.add(i);for(let e of[-.14,.15]){let t=vu(.13);t.position.set(e,.38,0),t.rotation.x=-1.1,r.add(t)}return r.position.set(.98,-t.pivotHeight,-.6),r.rotation.y=.35,{barrel:e,deck:r}}return null}var Eu=.5,Du=new V,Ou=new V;function ku(e,t,n,r,i){Du.copy(n).sub(e).normalize(),i.copy(t);let a=i.dot(Du);Ou.copy(Du).addScaledVector(i,-a);let o=Ou.length();if(o<=1e-6)return 0;let s=z.clamp(Math.atan2(o,a)-Math.acos(Eu),0,Math.PI/2);return i.multiplyScalar(Math.cos(s)).addScaledVector(Ou.divideScalar(o),Math.sin(s)),r*Math.sin(s)}function Au(e,t,n,r,i){i.normal.set(e.x-n,0,e.z),i.normal.lengthSq()<1e-8&&i.normal.set(-t.x,0,-t.z),i.normal.lengthSq()<1e-8&&i.normal.set(0,0,1),i.normal.normalize(),i.point.set(n,e.y,0).addScaledVector(i.normal,r)}var ju={heavy:{outfit:0,style:0},volley:{outfit:1,style:1},scatter:{outfit:2,style:2},chain:{outfit:3,style:3},driller:{outfit:1,style:2},skipper:{outfit:2,style:3},bomber:{outfit:0,style:1},daredevil:{outfit:3,style:0},hiredHand:{outfit:2,style:0}},Mu={outfit:1,style:0},Nu=e=>ju[e]??{outfit:3,style:3},Pu=.85,Fu=`#b26bff`,Iu=new V(0,0,1),Lu=new V(0,1,0),Ru=new V(1,0,0),zu=1.8,Bu=14,Vu=40,Hu=22,Uu=13;function Wu(){let e=new Qe;e.moveTo(0,.2),e.bezierCurveTo(.3,.46,.72,.42,1,.12);for(let t=0;t<6;t++){let n=(t+.5)/6,r=(t+1)/6,i=.34*(1-.45*n),a=e=>new yt(1-e,.12-.34*e),o=a(n).add(new yt(.1*(1-n),-i)),s=a(r);e.quadraticCurveTo(o.x+.06,o.y+.08,o.x,o.y),e.quadraticCurveTo(o.x-.02,o.y+.12,s.x,s.y)}return e.lineTo(0,.2),e}function Gu(){let e=new le(Wu(),6).rotateX(Math.PI/2),t=new S({color:`#fffaf0`,emissive:`#3a4655`,emissiveIntensity:.35,roughness:.75,side:2}),n=new S({color:`#d9e6f2`,emissive:`#3a4655`,emissiveIntensity:.25,roughness:.8,side:2}),r=new H;for(let i of[1,-1]){let a=new H,o=new B(e,t);o.scale.x=i;let s=new B(e,n);s.scale.set(i*.55,1,.7),s.position.set(0,.012,.04),a.add(o,s),r.add(a)}return r}var Ku=class{object=new H;balls=[];geometry=new $t(1,14,10);material=new S({color:`#1d1f22`,roughness:.45,metalness:.5});meteorMaterial=new S({color:`#4a2a1a`,emissive:`#ff7a2a`,emissiveIntensity:1.4,roughness:.8,flatShading:!0});glowMaterials=new Map;shot=null;bob=new V;small=!1;ballRadius=.35;boosts=[];looks=[];outlines=[];wings=[];special=null;chainReach=0;specials=[];specialKinds=[];pirates=new Map;side=`player`;outlineMaterial=new ae({color:Fu,side:1,transparent:!0,opacity:.85,blending:2,depthWrite:!1});time=0;bank=0;heading=new V;lastPuff=[];show(e,t,n,r=[],i=[],a=null,o=0){this.shot=e,this.special=a,this.chainReach=o,this.side=e.side,this.bob.copy(n),this.small=t<.25,this.ballRadius=t,this.boosts=r,this.looks=i,this.addBalls(e.projectiles.length),this.balls.forEach((n,r)=>{n.visible=!1,this.outlines[r].visible=!1,this.wings[r].visible=!1;let i=e.projectiles[r]?.kind===`meteor`;n.material=i?this.meteorMaterial:this.material,n.scale.setScalar(i?Dc*1.3:t),n.quaternion.identity()}),this.lastPuff=e.projectiles.map(()=>null)}extend(e,t,n){if(!this.shot)return;let r=this.shot.projectiles.length;this.shot=e,this.boosts=t,this.looks=n,this.addBalls(e.projectiles.length);for(let t=r;t<e.projectiles.length;t++){let n=e.projectiles[t].kind===`meteor`;this.balls[t].material=n?this.meteorMaterial:this.material,this.balls[t].scale.setScalar(n?Dc*1.3:this.ballRadius),this.balls[t].quaternion.identity(),this.lastPuff[t]=null}}hide(){this.shot=null;for(let e of this.specials)e.visible=!1;for(let e of this.balls)e.visible=!1;for(let e of this.outlines)e.visible=!1;for(let e of this.wings)e.visible=!1}addBalls(e){for(;this.balls.length<e;){let e=new B(this.geometry,this.material);e.castShadow=!0,e.visible=!1,this.balls.push(e),this.object.add(e);let t=new B(this.geometry,this.outlineMaterial);t.visible=!1,t.renderOrder=4,this.outlines.push(t),this.object.add(t);let n=Gu();n.visible=!1,this.wings.push(n),this.object.add(n)}}specialModel(e,t){let n=t===`chain`?Su(this.ballRadius,this.chainReach):null,r=t===`pirate`?`${t}:${this.side}`:n?`${t}:${n.r}:${n.span}`:t;if(this.specials[e]&&this.specialKinds[e]===r)return this.specials[e];this.specials[e]?.removeFromParent(),this.pirates.delete(e);let i;if(t===`pirate`){let t=xt(this.side,Mu.outfit,zu,Mu.style);this.pirates.set(e,t),i=t.root}else i=n?wu(n.r,n.span):t===`drill`?vu(1):t===`skip`?hu(1):mu(1);return i.visible=!1,this.specials[e]=i,this.specialKinds[e]=r,this.object.add(i),i}update(e,t){let n=this.shot;if(!n)return;let r=this.time;this.time=e,n.projectiles.forEach((n,i)=>{let a=this.balls[i],o=this.outlines[i],s=e-n.launch.delay;this.specials[i]&&(this.specials[i].visible=!1),a.visible=s>=0&&s<n.flight.duration&&n.kind!==`laser`;let c=this.looks[i];if(o.visible=a.visible&&!!c?.magnetic,this.wings[i].visible=!1,!a.visible)return;let l=$o(n.flight,s);a.position.set(l.x,l.y,l.z);let u=n.kind===`meteor`,d=n.kind===`ball`&&this.special&&!n.bomblet?this.specialModel(i,this.special):null;if(!u&&n.parent===null){let e=Math.hypot(l.x-n.launch.origin.x,l.y-n.launch.origin.y,l.z-n.launch.origin.z);a.position.addScaledVector(this.bob,Math.max(0,1-e/25))}if(c?.spread&&a.position.addScaledVector(c.spread,Math.max(0,1-s/Math.max(1e-6,n.flight.duration))),d){let r=es(n.flight,s),o=this.special===`chain`;if(this.special===`skip`)d.quaternion.setFromAxisAngle(Lu,e*Hu+i);else if(this.special===`pirate`)r.x*r.x+r.y*r.y+r.z*r.z>1e-6&&d.quaternion.setFromUnitVectors(Lu,this.heading.set(r.x,r.y,r.z).normalize()),d.rotateOnAxis(Lu,e*3+i),d.rotateOnAxis(Ru,Math.sin(e*5)*.4);else if(this.special===`cluster`){d.quaternion.setFromAxisAngle(Iu,Math.sin(e*2.4+i)*.6);let n=d.children[d.children.length-1];n.scale.setScalar(.7+.5*Math.random()),Math.random()<.7&&t.magicTrail(d.localToWorld(this.heading.copy(n.position)),`#ffb347`,.5)}else r.x*r.x+r.y*r.y+r.z*r.z>1e-6&&d.quaternion.setFromUnitVectors(Iu,this.heading.set(r.x,r.y,r.z).normalize()),d.rotateOnAxis(o?Lu:Iu,e*(o?Bu:Vu)+i);d.position.copy(a.position),this.special===`pirate`?(d.position.addScaledVector(this.heading.set(0,1,0).applyQuaternion(d.quaternion),-1.8/2),d.updateMatrixWorld(!0),Yt(this.pirates.get(i),{time:e,grips:null,brace:0,flinch:0,flail:1,limp:0,lookPitch:0})):d.scale.setScalar(o?1:this.ballRadius),d.visible=!0,a.visible=!1}let f=this.boosts[i];if(n.kind===`bullet`)a.material=this.glow(`#fff1c2`),a.quaternion.setFromUnitVectors(Iu,this.heading.set(n.launch.velocity.x,n.launch.velocity.y,n.launch.velocity.z).normalize()),a.scale.set(.07,.07,1.1),t.magicTrail(a.position,`#ffd98a`,.3);else if(!u){let r=f&&e>=f.from;a.material=r?this.glow(f.color):this.material;let i=n.bomblet?qc:this.ballRadius;a.scale.setScalar(i*(r?f.scale*(1+.08*Math.sin(this.time*18)):1)),n.bomblet&&Math.random()<.5&&t.magicTrail(a.position,`#ffb347`,.35)}o.visible&&(o.position.copy(a.position),o.scale.copy(a.scale).multiplyScalar(1.55+.12*Math.sin(this.time*14+i)));let p=this.wings[i],m=c?.wingsOff!==void 0&&e>=c.wingsOff;if(m&&r<c.wingsOff&&t.sparkle(a.position,`#ffffff`,.7),p.visible=!!c?.winged&&!m,p.visible){let e=es(n.flight,s);e.x*e.x+e.y*e.y+e.z*e.z>1e-6&&p.quaternion.setFromUnitVectors(Iu,this.heading.set(e.x,e.y,e.z).normalize()),p.rotateZ(-this.bank*.7),p.position.copy(a.position),p.scale.setScalar(Math.max(1.1,this.ballRadius*4));let t=.2+.55*Math.sin(this.time*Uu+i);p.children[0].rotation.z=t,p.children[1].rotation.z=-t}c?.sparks&&!(c.winged&&m)&&Math.random()<.8&&t.magicTrail(a.position,c.sparks,this.small?.6:1);let h=this.lastPuff[i];if(!h){this.lastPuff[i]=h=a.position.clone();return}let g=h.distanceTo(a.position),_=Math.min(12,Math.floor(g/Pu));for(let e=1;e<=_;e++){let n=h.clone().lerp(a.position,e/_);u?t.meteorTrail(n):t.trail(n,this.small)}_>0&&h.copy(a.position)})}glow(e){let t=new y(e).getHexString(),n=this.glowMaterials.get(t);return n||(n=new S({color:`#2a1d14`,emissive:e,emissiveIntensity:1.6,roughness:.4}),this.glowMaterials.set(t,n)),n}},qu=320,Ju=.2,Yu=9,Xu=2.4,Zu=.06,Qu=2.4,$u={short:1.5,path:2.4,full:2.4},ed=new y(`#fff4c9`),td=new y(`#ff7a3c`),nd=new y(`#ffffff`),rd={water:new y(`#ffffff`),island:new y(`#ffd27a`),ship:new y(`#ff5a3c`)},id=.6*Ju,ad=new y(`#ff8f2e`),od=new y(`#e5321c`),sd=1/360,cd=.6,ld=20,ud=.04,dd=.08,fd=new y(`#ff4a1c`),pd=.03,md=.05,hd=new V(0,0,1),gd=class{surface;object=new H;positions=new Float32Array(qu*3);alphas=new Float32Array(qu);sizes=new Float32Array(qu).fill(1);dots;ghostDots;dotMaterial;ghostMaterial;balls;ballMaterial;shadows;shade=new Float32Array(qu);crosshair;crosshairMaterial;crosshairRimMaterial;target=new H;targetMaterial;targetRimMaterial;targetGhost;ring;ringMaterial;pin;lastImpact;color=new y;ballColor=new y;matrix=new _n;at=new V;facing=new V;hasLastImpact=!1;time=0;constructor(e){this.surface=e;let t=new hn;t.setAttribute(`position`,new D(this.positions,3).setUsage(ce)),t.setAttribute(`alpha`,new D(this.alphas,1).setUsage(ce)),t.setAttribute(`size`,new D(this.sizes,1).setUsage(ce)),this.dotMaterial=new Ge({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:ed.clone()},uScale:{value:300},uMinSize:{value:3},uSize:{value:Ju},uOpacity:{value:1}},vertexShader:`
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
      `}),this.dots=new me(t,this.dotMaterial),this.dots.frustumCulled=!1,this.dots.renderOrder=10,this.ghostMaterial=this.dotMaterial.clone(),this.ghostMaterial.depthTest=!1,this.ghostMaterial.uniforms.uOpacity.value=.3,this.ghostDots=new me(t,this.ghostMaterial),this.ghostDots.frustumCulled=!1,this.ghostDots.renderOrder=9,this.ballMaterial=new S({color:`#ffffff`,emissive:`#ff4a14`,emissiveIntensity:.4,roughness:.45}),this.balls=new _t(new At(1,2),this.ballMaterial,qu),this.balls.instanceMatrix.setUsage(ce),this.balls.instanceColor=new Jt(new Float32Array(qu*3),3).setUsage(ce),this.balls.frustumCulled=!1,this.balls.renderOrder=10;let n=new je(1,20).rotateX(-Math.PI/2);n.setAttribute(`shade`,new Jt(this.shade,1).setUsage(ce));let r=new Ge({transparent:!0,depthWrite:!1,vertexShader:`
        attribute float shade;
        varying float vShade;
        varying vec2 vUv;
        void main() {
          vShade = shade;
          vUv = uv * 2.0 - 1.0;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying float vShade;
        varying vec2 vUv;
        void main() {
          gl_FragColor = vec4(0.02, 0.06, 0.09, vShade * smoothstep(1.0, 0.3, length(vUv)));
        }
      `});this.shadows=new _t(n,r,qu),this.shadows.instanceMatrix.setUsage(ce),this.shadows.frustumCulled=!1,this.shadows.renderOrder=8,this.crosshairMaterial=new ae({fog:!1,color:ed,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1,side:2});let i=[0,1,2,3].map(e=>new E(.42,.1).translate(1.02,0,0).rotateZ(e*Math.PI/2)),a=Vt([new j(.62,.78,40),...i.map(_d),new je(.11,12)].map(_d));this.crosshair=new B(a,this.crosshairMaterial),this.crosshair.renderOrder=12,this.crosshairRimMaterial=new ae({fog:!1,color:`#13202c`,transparent:!0,opacity:.45,depthTest:!1,depthWrite:!1});let o=new B(Vt([new j(.55,.85,40),...[0,1,2,3].map(e=>new E(.56,.24).translate(1.02,0,0).rotateZ(e*Math.PI/2)),new je(.18,12)].map(_d)),this.crosshairRimMaterial);o.renderOrder=11,o.position.z=-.01,this.crosshair.add(o);let s=Vt([new j(.8,1,48),new j(.38,.52,40),new je(.14,16)].map(_d)),c=Vt([new j(.74,1.06,48),new j(.32,.58,40),new je(.2,16)].map(_d));this.targetMaterial=new ae({fog:!1,color:ed,transparent:!0,opacity:.95,depthWrite:!1,side:2}),this.targetRimMaterial=new ae({fog:!1,color:`#13202c`,transparent:!0,opacity:.45,depthWrite:!1,side:2});let l=new B(s,this.targetMaterial);l.renderOrder=12;let u=new B(c,this.targetRimMaterial);u.renderOrder=11,u.position.z=-.01,this.targetGhost=new B(s,new ae({fog:!1,color:fd,transparent:!0,opacity:.3,depthTest:!1,depthWrite:!1,side:2})),this.targetGhost.renderOrder=9,this.target.add(this.targetGhost,u,l),this.ringMaterial=new ae({fog:!1,color:`#ffffff`,transparent:!0,opacity:.9,depthTest:!1,depthWrite:!1,side:2});let d=Vt([new j(.78,1,48),new je(.16,16)]);this.ring=new B(d,this.ringMaterial),this.ring.renderOrder=11,this.pin=new B(new P(.06,.06,1,6).translate(0,.5,0),this.ringMaterial),this.pin.renderOrder=11,this.lastImpact=vd(),this.lastImpact.visible=!1,this.object.add(this.shadows,this.balls,this.ghostDots,this.dots,this.crosshair,this.target,this.ring,this.pin,this.lastImpact),this.hide()}hide(){this.dots.visible=!1,this.ghostDots.visible=!1,this.balls.visible=!1,this.shadows.visible=!1,this.crosshair.visible=!1,this.target.visible=!1,this.ring.visible=!1,this.pin.visible=!1}setLastImpact(e){this.hasLastImpact=e!==null,e&&this.lastImpact.position.set(e.x,Math.max(e.y,0),e.z),e||(this.lastImpact.visible=!1)}settleLastImpact(e){let t=this.lastImpact.position;this.hasLastImpact&&t.y>0&&(t.y=Math.max(0,e(t.x,t.z)))}setLastImpactVisible(e){this.lastImpact.visible=e&&this.hasLastImpact}update(e,t,n){this.time+=e;let{flight:r,style:i,camera:a}=t;if(i===`off`){this.hide();return}let o=Math.tan(z.degToRad(a.fov)/2);for(let e of[this.dotMaterial,this.ghostMaterial])e.uniforms.uScale.value=n/(2*o),e.uniforms.uMinSize.value=Math.max(3,n/105);let s=t.charge===null?0:t.charge*t.charge,c=i!==`dots`&&t.charge!==null&&t.charge>=1?.5+.5*Math.sin(this.time*40):0;this.color.copy(ed).lerp(td,s).lerp(nd,c),this.dotMaterial.uniforms.uColor.value.copy(this.color),this.ghostMaterial.uniforms.uColor.value.copy(this.color),t.world?this.crosshairMaterial.color.copy(fd).lerp(nd,c):this.crosshairMaterial.color.copy(this.color),this.crosshairMaterial.depthTest=t.world,this.crosshairRimMaterial.depthTest=t.world;let l=i===`dots`,u=i===`short`?t.guideLength:l?t.dotsLength:1/0,d=l?u/Yu:$u[i],f=0,p=0,m=l?d:Qu,h=r.points,g=new V,_=!1;for(let e=1;e<h.length&&f<qu&&m<=u+1e-6;e++){let n=h[e-1],r=h[e],a=Math.hypot(r.x-n.x,r.y-n.y,r.z-n.z);for(;m<=p+a&&m<=u+1e-6&&f<qu;){let e=a>0?(m-p)/a:0,o=l?1:Math.max(0,1-m/25);this.positions[f*3]=n.x+(r.x-n.x)*e+t.bob.x*o,this.positions[f*3+1]=n.y+(r.y-n.y)*e+t.bob.y*o,this.positions[f*3+2]=n.z+(r.z-n.z)*e+t.bob.z*o,l?(this.alphas[f]=.95,this.sizes[f]=Xu*(1-Zu*f)):(this.alphas[f]=i===`short`?.55+m/u*.4:.9,this.sizes[f]=1),f++,m+=d}if(p+=a,p>=u&&!_){let e=a>0?1-(p-u)/a:1,i=l?1:Math.max(0,1-u/25);g.set(n.x+(r.x-n.x)*e,n.y+(r.y-n.y)*e,n.z+(r.z-n.z)*e).addScaledVector(t.bob,i),_=!0}}let v=this.dots.geometry;if(v.setDrawRange(0,f),v.attributes.position.needsUpdate=!0,v.attributes.alpha.needsUpdate=!0,v.attributes.size.needsUpdate=!0,this.dots.visible=f>0&&!t.world,this.ghostDots.visible=this.dots.visible,t.world?this.placeBalls(f,a,o,n,s,c):(this.balls.visible=!1,this.shadows.visible=!1),this.crosshair.visible=i===`short`&&_,this.crosshair.visible){let e=g.distanceTo(a.position)*o*.034,n=t.charge===null?1+.06*Math.sin(this.time*4):1-.25*s;this.crosshair.position.copy(g),this.crosshair.quaternion.copy(a.quaternion),this.crosshair.scale.setScalar(e*n)}this.placeTarget(t,o);let y=r.hit;if(this.ring.visible=i===`full`&&y!==null,this.pin.visible=this.ring.visible,y&&this.ring.visible){let e=vs(y),n=t.coneDeg>0?this.landingSpread(r,t.coneDeg):0,i=1+.08*Math.sin(this.time*6),s=Math.max(y.point.y,0),c=Math.hypot(y.point.x-a.position.x,s-a.position.y,y.point.z-a.position.z)*o*.05,l=Math.max(1.4,n,c),u=e?0:l*1.6;this.ring.position.set(y.point.x,s+u,y.point.z),this.ring.scale.setScalar(l*i),this.ring.quaternion.copy(a.quaternion),this.pin.visible=u>0,this.pin.position.set(y.point.x,s,y.point.z),this.pin.scale.set(l*.6,Math.max(.01,u-l),l*.6),this.ringMaterial.color.copy(e?rd.ship:y.surface===`island`?rd.island:rd.water)}}placeBalls(e,t,n,r,i,a){let o=2*n*Math.max(sd,1.5/r),s=0;for(let n=0;n<e;n++){let r=this.positions[n*3],i=this.positions[n*3+1],c=this.positions[n*3+2],l=this.at.set(r,i,c).distanceTo(t.position)*o,u=Math.max(id*this.sizes[n],l);this.balls.setMatrixAt(n,this.matrix.makeScale(u,u,u).setPosition(r,i,c)),this.balls.setColorAt(n,this.ballColor.copy(ad).lerp(od,e>1?n/(e-1):0).lerp(nd,a));let d=this.surface(r,c),f=i-d;if(f<=u)continue;let p=Math.max(u*2+f*ud,l*2);this.shadows.setMatrixAt(s,this.matrix.makeScale(p,1,p).setPosition(r,d+dd,c)),this.shade[s]=cd/(1+f/ld),s++}this.balls.count=e,this.balls.visible=e>0,this.balls.instanceMatrix.needsUpdate=!0,this.balls.instanceColor.needsUpdate=!0,this.ballMaterial.emissiveIntensity=.4+.6*i,this.shadows.count=s,this.shadows.visible=s>0,this.shadows.instanceMatrix.needsUpdate=!0,this.shadows.geometry.attributes.shade.needsUpdate=!0}placeTarget(e,t){let{target:n}=e;if(this.target.visible=n!==null,!n)return;let{camera:r}=e,i=r.position.distanceTo(n.point),a=Math.max(e.targetRadius,i*t*pd)*(1+.05*Math.sin(this.time*4)),o=ku(n.point,n.normal,r.position,a,this.facing);this.target.position.copy(n.point).addScaledVector(n.normal,o+md),this.target.quaternion.setFromUnitVectors(hd,this.facing),this.target.scale.setScalar(a),this.targetMaterial.color.copy(e.world?fd:ed),this.targetMaterial.depthTest=e.world,this.targetRimMaterial.depthTest=e.world,this.targetGhost.visible=e.world}landingSpread(e,t){let n=e.points[0],r=e.points[e.points.length-1];return Math.hypot(r.x-n.x,r.y-n.y,r.z-n.z)*Math.tan(z.degToRad(t/2))}};function _d(e){return e.index&&(e=e.toNonIndexed()),e.hasAttribute(`uv`)&&e.deleteAttribute(`uv`),e}function vd(){let e=new H,t=new ae({fog:!1,color:`#ffcf40`,transparent:!0,opacity:.85,depthWrite:!1}),n=new B(new P(.08,.08,3.2,6),t);n.position.y=1.6;let r=new B(new E(1.3,.8),t);r.material=t.clone(),r.material.side=2,r.position.set(.65,2.8,0);let i=new B(new j(.9,1.15,32).rotateX(-Math.PI/2),t);return i.position.y=.25,e.add(n,r,i),e}var yd=256,bd=7,xd=null;function Sd(){return xd??=Cd()}function Cd(){let e=11,t=()=>(e=e*16807%2147483647,e/2147483647),n=new Uint8Array(yd*yd*4),r=Array.from({length:18},()=>{let e=t()*Math.PI*2,n=3+t()*9,r=Math.round(Math.cos(e)*n),i=Math.round(Math.sin(e)*n);return{kx:r,ky:i,phase:t()*Math.PI*2,amplitude:1/Math.max(2,Math.hypot(r,i))}}).filter(e=>e.kx!==0||e.ky!==0),i=new Float32Array(yd*yd*2),a=0;for(let e=0;e<yd;e++)for(let t=0;t<yd;t++){let n=0,o=0;for(let i of r){let r=Math.cos((i.kx*t+i.ky*e)/yd*Math.PI*2+i.phase)*i.amplitude;n+=i.kx*r,o+=i.ky*r}let s=(e*yd+t)*2;i[s]=n,i[s+1]=o,a=Math.max(a,Math.abs(n),Math.abs(o))}let o=Array.from({length:49},(e,n)=>[n%bd+.15+t()*.7,Math.floor(n/bd)+.15+t()*.7]),s=(e,t)=>{let n=Math.floor(e),r=Math.floor(t),i=1/0;for(let a=-1;a<=1;a++)for(let s=-1;s<=1;s++){let c=(n+s+bd)%bd,l=(r+a+bd)%bd,[u,d]=o[l*bd+c];i=Math.min(i,Math.hypot(u+(n+s-c)-e,d+(r+a-l)-t))}return i},c=[4,8,16,32].map(e=>({n:e,values:Float32Array.from({length:e*e},t)})),l=(e,t)=>{let n=0,r=.5,i=0;for(let{n:a,values:o}of c){let s=e*a,c=t*a,l=Math.floor(s),u=Math.floor(c),d=s-l,f=c-u,p=d*d*(3-2*d),m=f*f*(3-2*f),h=(e,t)=>o[(t%a+a)%a*a+(e%a+a)%a],g=h(l,u)+(h(l+1,u)-h(l,u))*p,_=h(l,u+1)+(h(l+1,u+1)-h(l,u+1))*p;n+=(g+(_-g)*m)*r,i+=r,r*=.5}return n/i};for(let e=0;e<yd;e++)for(let t=0;t<yd;t++){let r=e*yd+t,o=(t+.5)/yd,c=(e+.5)/yd;n[r*4]=Math.round(i[r*2]/a*127.5+127.5),n[r*4+1]=Math.round(i[r*2+1]/a*127.5+127.5),n[r*4+2]=Math.round(Math.min(1,s(o*bd,c*bd)/.75)*255),n[r*4+3]=Math.round(Math.min(1,Math.max(0,(l(o,c)-.2)/.6))*255)}let u=new C(n,yd,yd,rt,nn);return u.wrapS=F,u.wrapT=F,u.magFilter=ut,u.minFilter=mn,u.generateMipmaps=!0,u.needsUpdate=!0,u}var wd=new y(`#2a6fcf`),Td=new y(`#5aa8ec`),Ed=new y(`#cde9f5`),Dd=new y(`#fff1d9`),Od=e=>`vec3(${e.r.toFixed(4)}, ${e.g.toFixed(4)}, ${e.b.toFixed(4)})`,kd=`
  vec3 skyColor(vec3 dir, vec3 sunDir) {
    float up = max(dir.y, 0.0);
    // Pale haze for the first few degrees, a clear blue soon above, deep blue overhead.
    vec3 color = mix(${Od(Ed)}, ${Od(Td)}, 1.0 - exp(-up * 7.0));
    color = mix(color, ${Od(wd)}, smoothstep(0.15, 1.0, up));
    // The horizon is warmer under the sun and a touch deeper opposite it.
    vec2 level = normalize(dir.xz + vec2(1e-5));
    float sunSide = dot(level, normalize(sunDir.xz));
    float low = exp(-up * 9.0);
    color = mix(color, ${Od(Dd)}, max(sunSide, 0.0) * low * 0.35);
    color *= 1.0 - max(-sunSide, 0.0) * low * 0.06;
    // A broad glow round the sun.
    float sun = max(dot(dir, sunDir), 0.0);
    color += ${Od(Dd)} * (pow(sun, 6.0) * 0.18 + pow(sun, 48.0) * 0.3);
    return color;
  }
`;function Ad(e){let t=new Ge({side:1,depthWrite:!1,defines:{CIRRUS:``},uniforms:{uSunDir:{value:e},uTime:{value:0},uNoise:{value:Sd()}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uSunDir;
      uniform float uTime;
      uniform sampler2D uNoise;
      varying vec3 vDir;
      ${kd}

      void main() {
        vec3 dir = normalize(vDir);
        vec3 color = skyColor(dir, uSunDir);
        #ifdef CIRRUS
          // Wisps on a high flat layer, stretched along one direction and drifting slowly.
          if (dir.y > 0.02) {
            vec2 p = dir.xz / (dir.y + 0.08) * 1.6 + vec2(uTime * 0.004, uTime * 0.0015);
            p = mat2(0.8, -0.6, 0.6, 0.8) * p;
            vec2 s = vec2(p.x * 0.6, p.y * 1.9);
            float wisp = texture2D(uNoise, s / 5.0).a * 0.65 + texture2D(uNoise, s / 2.2 + 0.37).a * 0.35;
            float patches = smoothstep(0.4, 0.8, texture2D(uNoise, p / 22.0 + 0.61).a);
            float amount = smoothstep(0.45, 0.8, wisp) * patches;
            amount *= smoothstep(0.03, 0.25, dir.y) * 0.24;
            color = mix(color, vec3(1.0, 0.99, 0.97), amount);
          }
        #endif
        // The sun: a crisp disk in a tight halo.
        float sun = max(dot(dir, uSunDir), 0.0);
        color += vec3(1.0, 0.93, 0.78) * (smoothstep(0.99955, 0.99975, sun) * 3.0 + pow(sun, 600.0) * 0.9);
        gl_FragColor = vec4(color, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),n=new B(new $t(1e3,32,16),t);return n.frustumCulled=!1,n.renderOrder=-1,{mesh:n,update(e){t.uniforms.uTime.value=e},setQuality(e){e?t.defines.CIRRUS=``:delete t.defines.CIRRUS,t.needsUpdate=!0}}}function jd(e,t){let n=new Ge({side:1,depthWrite:!1,uniforms:{uZenith:{value:new y(`#2f86d6`)},uHorizon:{value:new y(`#c4ecf8`)},uSea:{value:new y(`#1b93ad`)},uDeep:{value:new y(`#0a4f66`)},uSunDir:{value:t}},vertexShader:`
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
    `}),r=new fe;r.add(new B(new $t(10,48,24),n));let i=new mr(e),a=i.fromScene(r,0).texture;return i.dispose(),n.dispose(),a}var Md=1180,Nd=140,Pd=`
  /** x: height in the cluster, y: base cut, z: opacity, w: seed. */
  attribute vec4 aPuff;
  /** Which way the puff faces out of its cluster (world). */
  attribute vec3 aOut;
  varying vec2 vUv;
  varying vec4 vPuff;
  varying vec3 vOut;
  varying vec3 vEye;
  varying float vHaze;
  void main() {
    vec3 centre = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
    float radius = length(instanceMatrix[0].xyz);
    // A billboard facing the camera.
    vec4 eye = viewMatrix * vec4(centre, 1.0);
    eye.xy += position.xy * radius;
    vEye = eye.xyz;
    vUv = position.xy;
    vPuff = aPuff;
    // Every puff in sight faces the camera at least a little, or it would be lit from behind its billboard.
    vec3 outward = (viewMatrix * vec4(aOut, 0.0)).xyz;
    vOut = normalize(vec3(outward.xy, abs(outward.z) + 0.6));
    // Far and low clouds sink into the horizon's haze.
    vec3 toPuff = centre - cameraPosition;
    float elevation = toPuff.y / length(toPuff);
    vHaze = (1.0 - smoothstep(0.03, 0.32, elevation)) * 0.55;
    gl_Position = projectionMatrix * eye;
  }
`,Fd=`
  uniform vec3 uSunView;
  uniform vec3 uLit;
  uniform vec3 uShade;
  uniform vec3 uHaze;
  uniform vec3 uGlow;
  varying vec2 vUv;
  varying vec4 vPuff;
  varying vec3 vOut;
  varying vec3 vEye;
  varying float vHaze;
  void main() {
    float r = length(vUv);
    // A wobbly rim, so the puffs read as billows rather than discs.
    float angle = atan(vUv.y, vUv.x);
    float seed = vPuff.w * 6.2832;
    float rim = r + sin(angle * 5.0 + seed) * 0.028 + sin(angle * 11.0 + seed * 3.0) * 0.016;
    float alpha = 1.0 - smoothstep(0.9, 0.99, rim);
    // The cluster's flat base.
    alpha *= smoothstep(vPuff.y, vPuff.y + 0.06, vUv.y);
    alpha *= vPuff.z;
    if (alpha < 0.01) discard;
    // Lit on the sun's side with a soft edge to the shade: half as a ball, half as part of the whole cloud, so the
    // cluster reads as one heap rather than a bunch of balloons.
    vec3 n = normalize(mix(vec3(vUv, sqrt(max(1.0 - r * r, 0.0))), vOut, 0.6));
    float light = smoothstep(-0.3, 0.5, dot(n, uSunView));
    // Blue-grey underneath whatever the light: the cloud's own shade.
    float high = smoothstep(0.0, 0.75, vPuff.x + (vUv.y - vPuff.y) * 0.12);
    vec3 color = mix(uShade, uLit, min(light, mix(0.25, 1.0, high)));
    // Looking toward the sun, the cloud glows with the light coming through it, brightest at its silver lining.
    // The lining runs along the tops of the billows; the cloud's belly stays in its shade.
    float forward = pow(max(dot(normalize(vEye), uSunView), 0.0), 3.0);
    color = mix(color, uLit, forward * 0.35 * high);
    float lining = smoothstep(0.72, 0.97, r) * smoothstep(-0.1, 0.7, vUv.y / max(r, 0.01));
    color += uGlow * lining * forward * 0.7;
    color = mix(color, uHaze, vHaze);
    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function Id(e,t=20){let n=7,r=()=>(n=n*16807%2147483647,n/2147483647),i=[],a=[];for(let e=0;e<t;e++){let n=e/t*Math.PI*2+r()*.3,o=650+r()*470,s={position:new V(Math.cos(n)*o,100+r()*150,Math.sin(n)*o),speed:2.2+r()*1.4,opacity:1};i.push(s);let c=r()<.35?150+r()*80:80+r()*70,l=.3+r()*.4,u=10+Math.floor(r()*7),d=[];for(let e=0;e<u;e++){let e=(r()*2-1)*c*.95,t=1-Math.abs(e)/c,n=c*(.26+r()*.22)*(.5+.5*t),i=n*.55+t*c*l*r();d.push({offset:new V(e,i,(r()-.5)*c*.5),radius:n})}let f=Math.max(...d.map(e=>e.offset.y+e.radius)),p=new V(0,f*.35,0);for(let e of d)a.push({cluster:s,offset:e.offset,out:e.offset.clone().sub(p).multiply(new V(1/c,1/f,1/c)).normalize(),radius:e.radius,height:(e.offset.y+e.radius*.3)/f,base:-e.offset.y/e.radius,seed:r(),distance:0})}let o=new E(2,2),s=new Float32Array(a.length*4),c=new Jt(s,4);c.setUsage(ce),o.setAttribute(`aPuff`,c);let l=new Float32Array(a.length*3),u=new Jt(l,3);u.setUsage(ce),o.setAttribute(`aOut`,u);let d=new V,f=new Ge({uniforms:{uSunView:{value:d},uLit:{value:new y(`#fffaf2`)},uShade:{value:new y(`#9db4d3`)},uHaze:{value:Ed},uGlow:{value:new y(`#fff0d4`)}},vertexShader:Pd,fragmentShader:Fd,transparent:!0,depthWrite:!1}),p=new _t(o,f,a.length);p.instanceMatrix.setUsage(ce),p.frustumCulled=!1;let m=p.instanceMatrix.array,h=a.slice();return{object:p,update(t,n,r){for(let e of i){let r=e.position;r.x+=n.x*e.speed*t,r.z+=n.z*e.speed*t;let i=Math.hypot(r.x,r.z);i>Md&&(r.x*=-1178/i,r.z*=-1178/i),e.opacity=Math.max(0,Math.min(1,(Md-Math.hypot(r.x,r.z))/Nd))}let o=r.position;for(let e of a){let t=e.cluster.position;e.distance=(t.x+e.offset.x-o.x)**2+(t.y+e.offset.y-o.y)**2+(t.z+e.offset.z-o.z)**2}h.sort((e,t)=>t.distance-e.distance),h.forEach((e,t)=>{let n=e.cluster.position,r=t*16;m.fill(0,r,r+16),m[r]=m[r+5]=m[r+10]=e.radius,m[r+12]=n.x+e.offset.x,m[r+13]=n.y+e.offset.y,m[r+14]=n.z+e.offset.z,m[r+15]=1,s[t*4]=e.height,s[t*4+1]=e.base,s[t*4+2]=e.cluster.opacity,s[t*4+3]=e.seed,e.out.toArray(l,t*3)}),p.instanceMatrix.needsUpdate=!0,c.needsUpdate=!0,u.needsUpdate=!0,r.updateMatrixWorld(),d.copy(e).transformDirection(r.matrixWorldInverse)}}}var Ld=`
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
`,Rd=`
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
`,zd=class{mesh;particles;offsets;tints;sizeRotations;geometry;next=0;constructor(e,t=!1,n=Vd()){let r=new E(1,1);this.geometry=new sn,this.geometry.index=r.index,this.geometry.setAttribute(`position`,r.attributes.position),this.geometry.setAttribute(`uv`,r.attributes.uv),this.offsets=new Float32Array(e*3),this.tints=new Float32Array(e*4),this.sizeRotations=new Float32Array(e*2),this.geometry.setAttribute(`offset`,new Jt(this.offsets,3).setUsage(ce)),this.geometry.setAttribute(`tint`,new Jt(this.tints,4).setUsage(ce)),this.geometry.setAttribute(`sizeRotation`,new Jt(this.sizeRotations,2).setUsage(ce)),this.geometry.instanceCount=0;let i=new Ge({uniforms:{uMap:{value:n}},vertexShader:Ld,fragmentShader:Rd,transparent:!0,depthWrite:!1,blending:t?2:1});this.mesh=new B(this.geometry,i),this.mesh.frustumCulled=!1,this.mesh.renderOrder=t?6:5,this.particles=Array.from({length:e},()=>({alive:!1,position:new V,velocity:new V,size:1,endSize:1,age:0,life:1,alpha:1,gravity:0,drag:0,rotation:0,spin:0,fadeIn:0,windDrift:0,color:new y}))}spawn(e){let t=this.particles[this.next];this.next=(this.next+1)%this.particles.length,t.alive=!0,t.position.copy(e.position),t.velocity.copy(e.velocity),t.size=e.size,t.endSize=e.endSize,t.age=0,t.life=e.life,t.alpha=e.alpha??1,t.gravity=e.gravity??0,t.drag=e.drag??0,t.rotation=Math.random()*Math.PI*2,t.spin=e.spin??(Math.random()-.5)*.8,t.fadeIn=e.fadeIn??.08,t.windDrift=e.windDrift??0,t.color.set(e.color)}clear(){for(let e of this.particles)e.alive=!1}update(e,t){let n=0;for(let r of this.particles){if(!r.alive)continue;if(r.age+=e,r.age>=r.life){r.alive=!1;continue}r.velocity.y-=r.gravity*e,r.velocity.multiplyScalar(Math.max(0,1-r.drag*e)),r.position.addScaledVector(r.velocity,e),t&&r.windDrift>0&&r.position.addScaledVector(t,r.windDrift*e),r.rotation+=r.spin*e;let i=r.age/r.life,a=i<r.fadeIn?i/r.fadeIn:1-(i-r.fadeIn)/(1-r.fadeIn),o=r.size+(r.endSize-r.size)*(1-(1-i)*(1-i));this.offsets[n*3]=r.position.x,this.offsets[n*3+1]=r.position.y,this.offsets[n*3+2]=r.position.z,this.tints[n*4]=r.color.r,this.tints[n*4+1]=r.color.g,this.tints[n*4+2]=r.color.b,this.tints[n*4+3]=r.alpha*Math.max(0,a),this.sizeRotations[n*2]=o,this.sizeRotations[n*2+1]=r.rotation,n++}this.geometry.instanceCount=n,this.geometry.attributes.offset.needsUpdate=!0,this.geometry.attributes.tint.needsUpdate=!0,this.geometry.attributes.sizeRotation.needsUpdate=!0}},Bd=null;function Vd(){return Bd??=un(),Bd}function Hd(){let e=document.createElement(`canvas`);e.width=32,e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,2,16,16,15);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.6,`rgba(255,255,255,0.9)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,32,32);let r=new re(e);return r.colorSpace=w,r}var Ud=new V,K=(e,t)=>e+Math.random()*(t-e),q=e=>{let t,n,r;do t=Math.random()*2-1,n=Math.random()*2-1,r=Math.random()*2-1;while(t*t+n*n+r*r>1);return new V(t*e,n*e,r*e)},Wd=140,Gd=class{object=new H;smoke=new zd(1100);spray=new zd(700);glow=new zd(260,!0);chips=new zd(200,!1,Hd());rings=[];bolts=[];ringGeometry=new j(.75,1,40).rotateX(-Math.PI/2);shockGeometry=new j(.55,1,40);wind=new V;fuseClock=0;splinterMesh;splinters=[];nextSplinter=0;flashLight=new Xe(`#ffb35a`,0,40,1.6);damageSources=[];damageClock=0;matrix=new _n;quaternion=new et;constructor(){this.splinterMesh=new _t(new Ve(1,1,1),new S({color:`#8a5a33`,roughness:.9}),Wd),this.splinterMesh.count=0,this.splinterMesh.frustumCulled=!1;for(let e=0;e<Wd;e++)this.splinters.push({alive:!1,position:new V,velocity:new V,rotation:new be,spin:new V,scale:new V,age:0,life:1});this.object.add(this.smoke.mesh,this.spray.mesh,this.chips.mesh,this.glow.mesh,this.splinterMesh,this.flashLight)}setWind(e,t){let n=t*.32;this.wind.set(Math.cos(e)*n,0,Math.sin(e)*n)}fuse(e,t,n){for(this.fuseClock+=n*(18+60*t);this.fuseClock>=1;)--this.fuseClock,this.glow.spawn({position:e.clone().add(q(.03)),velocity:q(1.6+2.5*t).add(new V(0,1.5+2.5*t,0)),size:K(.035,.07)*(1+t),endSize:.01,life:K(.18,.4),color:Math.random()>.5?`#ffd27a`:`#ff8a3c`,gravity:6,fadeIn:.01}),Math.random()>.75&&this.smoke.spawn({position:e.clone(),velocity:new V(K(-.2,.2),K(.4,.9),K(-.2,.2)),size:.08,endSize:.45,life:K(.6,1),color:`#d9dcdf`,alpha:.45,windDrift:.6})}muzzleBlast(e,t,n=1){for(let r=0;r<4;r++)this.glow.spawn({position:e.clone().addScaledVector(t,r*.7*n),velocity:t.clone().multiplyScalar(6),size:(2.6-r*.4)*n,endSize:(3.6-r*.5)*n,life:.13,color:r===0?`#fff2c4`:`#ff9b3d`,fadeIn:.01});for(let r=0;r<18*n;r++){let r=K(4,15)*n;this.smoke.spawn({position:e.clone().add(q(.4)),velocity:t.clone().multiplyScalar(r).add(q(2.2)).add(new V(0,.6,0)),size:K(1,1.6)*n,endSize:K(3.8,5.2)*n,life:K(1.8,2.8),color:`#e6e9ec`,alpha:.9,drag:2.4,gravity:-.5,windDrift:1})}for(let r=0;r<10*n;r++)this.glow.spawn({position:e.clone(),velocity:t.clone().multiplyScalar(K(10,22)).add(q(4)),size:K(.08,.16),endSize:.02,life:K(.25,.55),color:`#ffb347`,gravity:9,fadeIn:.01});this.ring(e.clone().addScaledVector(t,1.2),.4*n,.22,9*n,t,.3),this.ring(new V(e.x+t.x*3,.25,e.z+t.z*3),1.5*n,1.1,7*n),this.flashLight.position.copy(e).addScaledVector(t,1.5),this.flashLight.intensity=140*n}trail(e,t){this.smoke.spawn({position:e.clone().add(q(t?.08:.15)),velocity:q(.4).add(new V(0,.25,0)),size:t?.4:.95,endSize:t?1.3:3.3,life:t?K(.9,1.3):K(1.6,2.2),color:`#f6f7f9`,alpha:t?.7:.85,drag:.8,fadeIn:.05,windDrift:.8})}splash(e,t=1){let n=new V(e.x,.2,e.z);for(let e=0;e<22*t+4;e++)this.spray.spawn({position:n.clone().add(q(.6*t).setY(0)),velocity:q(1.6*t).setY(K(9,19)*Math.sqrt(t)),size:K(.6,1.1)*t,endSize:K(1.3,2)*t,life:K(.9,1.3),color:`#ffffff`,gravity:24,drag:.6,windDrift:.3});for(let e=0;e<14*t+2;e++){let r=e/14*Math.PI*2;this.spray.spawn({position:n.clone(),velocity:new V(Math.cos(r)*K(3,6),K(5,9),Math.sin(r)*K(3,6)).multiplyScalar(Math.sqrt(t)),size:.45*t,endSize:.9*t,life:K(.8,1.1),color:`#f2fbff`,gravity:20})}for(let e=0;e<6*t+1;e++)this.smoke.spawn({position:n.clone().add(q(1.2*t).setY(.3)),velocity:q(1.5).setY(K(.4,1.4)),size:2*t,endSize:5*t,life:K(1.2,1.7),color:`#ffffff`,alpha:.65,drag:1.5,windDrift:1});this.ring(n,1.2*t,1.4,4.2),this.ring(n,.6*t,.9,9*t)}dust(e){let t=new V(e.x,e.y,e.z);for(let e=0;e<12;e++)this.smoke.spawn({position:t.clone().add(q(.8)),velocity:q(4).add(new V(0,K(1.5,4),0)),size:K(1.2,2),endSize:K(3.5,5),life:K(1.4,2.2),color:e%3?`#d6c094`:`#9c968a`,alpha:.85,drag:2,windDrift:1});for(let e=0;e<14;e++)this.chips.spawn({position:t.clone(),velocity:q(7).add(new V(0,K(4,9),0)),size:K(.2,.42),endSize:.2,life:K(.8,1.4),color:e%2?`#8d8a80`:`#bba77c`,gravity:20,spin:K(-8,8)})}shipHit(e,t=1){let n=new V(e.x,e.y,e.z);this.glow.spawn({position:n,velocity:new V,size:4.4*t,endSize:.5,life:.22,color:`#ffe2a0`,fadeIn:.01});for(let e=0;e<7*t+2;e++)this.glow.spawn({position:n.clone().add(q(.6*t)),velocity:q(3).add(new V(0,K(1,3),0)),size:K(1.1,2)*t,endSize:K(.2,.5),life:K(.3,.55),color:e%2?`#ff7a2a`:`#ffb347`,fadeIn:.02,windDrift:.5});for(let e=0;e<12*t+3;e++)this.glow.spawn({position:n.clone(),velocity:q(13).add(new V(0,5,0)),size:K(.18,.32),endSize:.05,life:K(.35,.6),color:`#ffb347`,gravity:16,fadeIn:.01});for(let e=0;e<22*t+4;e++)this.splinter(n,t,e%6==0);for(let e=0;e<6*t+2;e++)this.smoke.spawn({position:n.clone().add(q(.5)),velocity:q(2.2).add(new V(0,K(1,2.5),0)),size:K(1.4,2)*t,endSize:K(4,5.5)*t,life:K(1.8,2.6),color:`#5f5a55`,alpha:.8,drag:1.4,gravity:-.6,windDrift:1});this.flashLight.position.copy(n),this.flashLight.intensity=Math.max(this.flashLight.intensity,110*t)}dig(e,t,n,r){let i=new V(e.x,e.y,e.z),a={sand:[`#cdb27a`,`#a88a5a`],grass:[`#5b3d24`,`#7a5634`],rock:[`#7d7a72`,`#5e5b55`]}[n],o=Math.min(1.6,Math.max(.5,t/2.2));for(let e=0;e<18*o+4;e++)this.chips.spawn({position:i.clone().add(q(.5*o)),velocity:q(6*o).add(new V(0,K(5,11)*Math.sqrt(o),0)),size:K(.22,.5)*o,endSize:.18,life:K(.9,1.5),color:a[e%2],gravity:20,spin:K(-8,8)});for(let e=0;e<6*o+2;e++)this.smoke.spawn({position:i.clone().add(q(t*.4)),velocity:q(2.5).add(new V(0,K(1,3),0)),size:K(1.4,2.2)*o,endSize:K(4,6)*o,life:K(1.6,2.4),color:n===`sand`?`#e2cf9e`:n===`grass`?`#a58a64`:`#a19c90`,alpha:.8,drag:1.8,windDrift:1});for(let e of r){let t=e.kind===`rock`?[`#9a978c`,`#7c7970`]:[`#46a83c`,`#3f8f33`];for(let n=0;n<12;n++)this.chips.spawn({position:e.position.clone().add(q(e.kind===`palm`?1.5:.8)).add(new V(0,e.kind===`palm`?K(0,6):0,0)),velocity:q(7).add(new V(0,K(3,8),0)),size:K(.25,.55),endSize:.15,life:K(1,1.8),color:t[n%2],gravity:e.kind===`rock`?20:9,spin:K(-6,6)});if(e.kind===`palm`)for(let t=0;t<6;t++)this.splinter(e.position,.7,t%2==0)}}crack(e,t){let n=new V(e.x,e.y,e.z),r=t?[`#f3efe6`,`#c8372d`,`#b9b2a6`]:[`#b3ad9f`,`#7b786f`,`#d8d2c4`];for(let e=0;e<16;e++)this.chips.spawn({position:n.clone().add(q(.3)),velocity:q(8).add(new V(0,K(2,6),0)),size:K(.18,.4),endSize:.15,life:K(.9,1.5),color:r[e%r.length],gravity:20,spin:K(-9,9)});for(let e=0;e<4;e++)this.smoke.spawn({position:n.clone().add(q(.4)),velocity:q(1.5).add(new V(0,K(.5,1.5),0)),size:K(.9,1.4),endSize:K(2.6,3.6),life:K(1.2,1.8),color:t?`#e6e0d4`:`#b9b4a8`,alpha:.75,drag:1.8,windDrift:1})}treeHit(e,t){let n=new V(e.x,e.y,e.z);for(let e=0;e<(t?20:10);e++)this.chips.spawn({position:n.clone().add(q(.8)),velocity:q(5).add(new V(0,K(1,4),0)),size:K(.25,.5),endSize:.15,life:K(1.2,2),color:e%3?`#46a83c`:`#3f8f33`,gravity:6,spin:K(-6,6),windDrift:1});for(let e=0;e<(t?12:4);e++)this.splinter(n,.6,e%4==0)}sailTear(e,t,n){let r=new V(e.x,e.y,e.z),i=new y(t),a=Math.round(6+8*Math.min(1.5,n));for(let e=0;e<a;e++)this.chips.spawn({position:r.clone().add(q(n*.6)),velocity:q(3.5).add(new V(0,K(.5,2),0)),size:K(.18,.42)*Math.max(.7,n),endSize:.12,life:K(1.6,2.6),color:i.clone().multiplyScalar(e%3?1:.55),gravity:2.2,drag:.8,spin:K(-7,7),windDrift:1.4});for(let e=0;e<3;e++)this.smoke.spawn({position:r.clone().add(q(.3)),velocity:q(1.2),size:K(.6,1)*Math.max(.7,n),endSize:K(1.6,2.4),life:K(.5,.8),color:`#e8ddc8`,alpha:.35,windDrift:1})}treeLand(e,t,n){if(n)this.splash(e,Math.min(1.4,.6+t/14));else for(let n=0;n<6;n++)this.smoke.spawn({position:e.clone().add(q(t*.25).setY(.3)),velocity:q(2).add(new V(0,K(.5,1.5),0)),size:K(1,1.6),endSize:K(3,4),life:K(1.2,1.8),color:`#d6c094`,alpha:.7,drag:2,windDrift:1});this.treeHit(e.clone().setY(e.y+1),!1)}rockBreak(e){this.dust(e),this.dust({x:e.x,y:e.y+1,z:e.z})}rockLand(e,t,n){if(n){this.splash(e,Math.min(2.2,Math.max(.9,t/7)));return}for(let n=0;n<Math.min(5,1+t/4);n++)this.dust(e.clone().add(q(t*.3).setY(.5)))}mastBreak(e){for(let t=0;t<18;t++)this.splinter(e,.8,t%5==0);for(let t=0;t<6;t++)this.smoke.spawn({position:e.clone().add(q(.4)),velocity:q(1.6).add(new V(0,.5,0)),size:K(.6,1),endSize:K(2.2,3.2),life:K(1,1.6),color:`#cdb38c`,alpha:.75,drag:1.6,windDrift:1})}powerBurst(e,t,n=1){let r=new V(e.x,e.y,e.z),i=new y(t),a=i.clone().lerp(new y(`#ffffff`),.5);this.glow.spawn({position:r,velocity:new V,size:6*n,endSize:1,life:.3,color:a,fadeIn:.01});for(let e=0;e<26*n;e++)this.glow.spawn({position:r.clone().add(q(.8)),velocity:q(14*n),size:K(.25,.55)*n,endSize:.05,life:K(.45,.9),color:e%3?i:a,gravity:4,drag:1.5,fadeIn:.01});this.ring(r,1.5*n,.45,9*n,new V(0,0,1),.7),this.ring(r,1.5*n,.45,9*n,new V(1,0,0),.7)}sparkle(e,t,n=1){let r=new V(e.x,e.y,e.z),i=new y(t),a=i.clone().lerp(new y(`#ffffff`),.6);this.glow.spawn({position:r,velocity:new V,size:2.6*n,endSize:.4,life:.35,color:a,fadeIn:.02});for(let e=0;e<22*n;e++)this.glow.spawn({position:r.clone().add(q(.5*n)),velocity:q(5*n).add(new V(0,K(1,3),0)),size:K(.12,.3)*n,endSize:.02,life:K(.6,1.2),color:e%3?i:a,gravity:-1.5,drag:2.2,fadeIn:.05});this.ring(r,.4*n,.5,3.5*n,new V(0,1,0),.6)}magicTrail(e,t,n=1){this.glow.spawn({position:e.clone().add(q(.12*n)),velocity:q(.6),size:K(.35,.6)*n,endSize:.05,life:K(.35,.6),color:t,drag:1,fadeIn:.02})}streak(e,t,n,r=.35,i=.35){let a=e.distanceTo(t),o=Math.min(60,Math.max(4,Math.round(a/.45)));for(let a=0;a<=o;a++)this.glow.spawn({position:e.clone().lerp(t,a/o).add(q(.06)),velocity:q(.4),size:r*K(.8,1.2),endSize:r*.2,life:i*K(.8,1.2),color:n,fadeIn:.01})}bolt(e,t,n,r=.35,i=.6){let a=Math.max(4,Math.min(24,Math.round(e.distanceTo(t)/.8))),o=new Float32Array((a+1)*3),s=new hn;s.setAttribute(`position`,new D(o,3));let c=new Ut(s,new Ot({color:n,transparent:!0,blending:2,depthWrite:!1}));c.frustumCulled=!1,this.object.add(c),this.bolts.push({line:c,from:e.clone(),to:t.clone(),age:0,life:r,jag:i,segments:a});for(let e=0;e<10;e++)this.glow.spawn({position:t.clone(),velocity:q(5),size:K(.15,.3),endSize:.02,life:K(.2,.45),color:n,gravity:5,fadeIn:.01});this.glow.spawn({position:e.clone(),velocity:new V,size:1.4,endSize:.3,life:.25,color:n,fadeIn:.01})}meteorTrail(e){this.glow.spawn({position:e.clone().add(q(.4)),velocity:q(1.5).add(new V(0,4,0)),size:K(1.1,1.8),endSize:.2,life:K(.25,.45),color:Math.random()>.5?`#ff8a3c`:`#ffd27a`,fadeIn:.01}),this.smoke.spawn({position:e.clone().add(q(.5)),velocity:q(1).add(new V(0,2,0)),size:K(1,1.6),endSize:K(3,4),life:K(1,1.6),color:`#4b4744`,alpha:.6,drag:1.2,windDrift:1})}bigBlast(e,t){let n=new V(e.x,Math.max(e.y,.3),e.z);this.glow.spawn({position:n,velocity:new V,size:t*2.2,endSize:t*.6,life:.45,color:`#ffe2a0`,fadeIn:.01});for(let e=0;e<20;e++)this.glow.spawn({position:n.clone().add(q(t*.5)),velocity:q(t*1.2).add(new V(0,K(2,6),0)),size:K(1.6,3.2),endSize:K(.4,.9),life:K(.4,.8),color:e%2?`#ff6a1a`:`#ffb347`,fadeIn:.02,windDrift:.5});for(let e=0;e<10;e++)this.smoke.spawn({position:n.clone().add(q(t*.5)),velocity:q(3).add(new V(0,K(2,4),0)),size:K(2.5,3.5),endSize:K(7,9),life:K(2.2,3),color:`#55504b`,alpha:.75,drag:1.4,gravity:-.6,windDrift:1});this.ring(n.clone().setY(.25),t*.3,.6,t*1.2),this.flashLight.position.copy(n),this.flashLight.intensity=Math.max(this.flashLight.intensity,140)}sinkBurst(e){for(let t=0;t<4;t++)this.splash(e.clone().add(q(9).setY(0)),1.6)}setDamageSources(e){this.damageSources=e}clear(){this.smoke.clear(),this.spray.clear(),this.glow.clear(),this.chips.clear();for(let e of this.splinters)e.alive=!1;for(let e of this.rings)this.object.remove(e.mesh),e.mesh.material.dispose();this.rings.length=0;for(let e of this.bolts)this.object.remove(e.line);this.bolts.length=0}update(e){this.emitDamage(e),this.smoke.update(e,this.wind),this.spray.update(e,this.wind),this.glow.update(e,this.wind),this.chips.update(e),this.updateSplinters(e);for(let t=this.rings.length-1;t>=0;t--){let n=this.rings[t];n.age+=e;let r=n.age/n.life;if(r>=1){this.object.remove(n.mesh),n.mesh.material.dispose(),this.rings.splice(t,1);continue}n.mesh.scale.setScalar(n.mesh.scale.x+n.grow*e*(1-r)),n.mesh.material.opacity=n.opacity*(1-r)}this.flashLight.intensity*=Math.exp(-e*18),this.flashLight.intensity<.05&&(this.flashLight.intensity=0),this.updateBolts(e)}updateBolts(e){for(let t=this.bolts.length-1;t>=0;t--){let n=this.bolts[t];n.age+=e;let r=n.line.material;if(n.age>=n.life){this.object.remove(n.line),n.line.geometry.dispose(),r.dispose(),this.bolts.splice(t,1);continue}let i=n.line.geometry.getAttribute(`position`).array;for(let e=0;e<=n.segments;e++){let t=e/n.segments,r=e===0||e===n.segments?0:n.jag*Math.sin(Math.PI*t);i[e*3]=n.from.x+(n.to.x-n.from.x)*t+(Math.random()-.5)*r,i[e*3+1]=n.from.y+(n.to.y-n.from.y)*t+(Math.random()-.5)*r,i[e*3+2]=n.from.z+(n.to.z-n.from.z)*t+(Math.random()-.5)*r}n.line.geometry.getAttribute(`position`).needsUpdate=!0,r.opacity=(1-n.age/n.life)*(Math.random()<.25?.35:1)}}emitDamage(e){if(this.damageClock+=e,this.damageClock<.09)return;let t=this.damageClock;this.damageClock=0;for(let e of this.damageSources){if(e.fire){this.flames(e.position,t);continue}if(e.damage<.5)continue;let n=e.damage>=.75,r=n?2:1;for(let i=0;i<r;i++)this.smoke.spawn({position:e.position.clone().add(q(2.2).setY(K(0,1))),velocity:new V(K(-.4,.4),K(2.5,4),K(-.4,.4)),size:K(1.4,2),endSize:K(5,7),life:K(3,4.2)*Math.min(1,t/.09),color:n?`#3e3a37`:`#6d6863`,alpha:.75,drag:.3,windDrift:1});if(n)for(let t=0;t<2;t++)this.glow.spawn({position:e.position.clone().add(q(1.8).setY(K(0,.6))),velocity:new V(K(-.3,.3),K(1.5,3),K(-.3,.3)),size:K(.8,1.4),endSize:.2,life:K(.5,.8),color:t?`#ff7a2a`:`#ffc14a`,fadeIn:.15,windDrift:.4})}}flames(e,t){for(let t=0;t<3;t++)this.glow.spawn({position:e.clone().add(q(.9).setY(K(0,.4))),velocity:new V(K(-.3,.3),K(1.8,3.4),K(-.3,.3)),size:K(.6,1.1),endSize:.15,life:K(.35,.65),color:t===0?`#ffd36a`:t===1?`#ff8a2a`:`#ff5a1f`,fadeIn:.08,windDrift:.5});Math.random()<.5&&this.glow.spawn({position:e.clone().add(q(.6)),velocity:q(1.2).add(new V(0,3,0)),size:.08,endSize:.02,life:K(.8,1.4),color:`#ffb347`,gravity:-.5,windDrift:.8}),this.smoke.spawn({position:e.clone().add(q(.6).setY(K(.6,1.2))),velocity:new V(K(-.3,.3),K(2,3.2),K(-.3,.3)),size:K(.8,1.2),endSize:K(3.5,5),life:K(2.4,3.4)*Math.min(1,t/.09),color:`#2f2b28`,alpha:.7,drag:.3,windDrift:1})}ring(e,t,n,r,i,a=.85){let o=new ae({color:`#ffffff`,transparent:!0,opacity:a,depthWrite:!1,side:2}),s=new B(i?this.shockGeometry:this.ringGeometry,o);s.position.copy(e),i&&s.quaternion.setFromUnitVectors(new V(0,0,1),i.clone().normalize()),s.scale.setScalar(t),this.object.add(s),this.rings.push({mesh:s,age:0,life:n,grow:r,opacity:a})}splinter(e,t,n=!1){let r=this.splinters[this.nextSplinter];this.nextSplinter=(this.nextSplinter+1)%Wd,r.alive=!0,r.position.copy(e),r.velocity.copy(q((n?7:12)*t)).add(Ud.set(0,K(5,11),0)),r.rotation.set(K(0,6),K(0,6),K(0,6)),r.spin.set(K(-14,14),K(-14,14),K(-14,14)),n?r.scale.set(K(.28,.4),K(.07,.1),K(1.3,2.1)):r.scale.set(K(.08,.16),K(.08,.14),K(.5,1.1)),r.age=0,r.life=K(1.6,2.4)}updateSplinters(e){let t=0;for(let n of this.splinters){if(!n.alive)continue;if(n.age+=e,n.age>=n.life){n.alive=!1;continue}n.velocity.y-=18*e,n.position.addScaledVector(n.velocity,e),n.position.y<0&&(n.position.y=0,n.velocity.multiplyScalar(.9).setY(0),n.spin.multiplyScalar(.9)),n.rotation.x+=n.spin.x*e,n.rotation.y+=n.spin.y*e,n.rotation.z+=n.spin.z*e;let r=Math.min(1,(n.life-n.age)/.4);this.matrix.compose(n.position,this.quaternion.setFromEuler(n.rotation),Ud.copy(n.scale).multiplyScalar(r)),this.splinterMesh.setMatrixAt(t++,this.matrix)}this.splinterMesh.count=t,this.splinterMesh.instanceMatrix.needsUpdate=!0}},Kd=[[1,.35,.15,42],[.55,1,.12,24],[-.45,.8,.1,14],[.9,-.6,.07,8]],qd=9.8,Jd=22,Yd=150,Xd=200,Zd=210,Qd=300,$d=1100,ef=.12,tf=e=>e.toFixed(2),nf=64,rf=256;function af(e){let t=Lt(e),n=rf,r=t.landRadius+nf+4,i=2*r/n,a=new Float32Array(n*n);for(let e=0;e<n;e++)for(let o=0;o<n;o++){let s=-r+(o+.5)*i,c=-r+(e+.5)*i,l=t.height(s,c)>0||x(s,.5,c,t.solids)<0;a[e*n+o]=l?0:1/0}let o=i*Math.SQRT2,s=(e,t,n)=>{a[t]+n<a[e]&&(a[e]=a[t]+n)};for(let e=0;e<n;e++)for(let t=0;t<n;t++){let r=e*n+t;t>0&&s(r,r-1,i),e>0&&(s(r,r-n,i),t>0&&s(r,r-n-1,o),t<255&&s(r,r-n+1,o))}for(let e=255;e>=0;e--)for(let t=255;t>=0;t--){let r=e*n+t;t<255&&s(r,r+1,i),e<255&&(s(r,r+n,i),t<255&&s(r,r+n+1,o),t>0&&s(r,r+n-1,o))}let c=new Uint8Array(n*n);for(let e=0;e<n*n;e++)c[e]=Math.min(255,Math.round(a[e]/nf*255));return{data:c,extent:r}}function of(e,t,n){let r=rf,i=(t+e.extent)/(2*e.extent)*r-.5,a=(n+e.extent)/(2*e.extent)*r-.5;if(i<0||a<0||i>255||a>255)return nf;let o=Math.floor(i),s=Math.floor(a),c=i-o,l=a-s,u=(t,n)=>e.data[Math.min(255,n)*r+Math.min(255,t)],d=u(o,s)*(1-c)+u(o+1,s)*c,f=u(o,s+1)*(1-c)+u(o+1,s+1)*c;return(d*(1-l)+f*l)/255*nf}var sf=`
  uniform float uTime;
  uniform sampler2D uShoreMap;
  uniform float uShoreExtent;
  uniform vec4 uWaves[${Kd.length}];
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
    for (int i = 0; i < ${Kd.length}; i++) {
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
`,cf=`
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uMid;
  uniform vec3 uShallow;
  uniform vec3 uLagoon;
  uniform vec3 uGlow;
  uniform vec3 uFoam;
  uniform vec3 uSunDir;
  /** seaTexture.ts: ripple slopes (rg), foam cells (b), cloudy noise (a); every channel tiles. */
  uniform sampler2D uDetail;
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
    ${kt}
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

  ${kd}

  /**
   * Lacy foam for an amount from 0 (none) to 1 (solid): it gathers where drifting cells meet and spreads inward as
   * the amount grows, leaving round holes that shrink. Two layers make the holes irregular.
   */
  float foamLace(vec2 q, float amount) {
    float cells = texture2D(uDetail, q / 4.6 + vec2(0.021, 0.013) * uTime).b;
    #ifdef RICH
      cells = max(cells, texture2D(uDetail, mat2(0.8, 0.6, -0.6, 0.8) * q / 7.9 - vec2(0.012, 0.019) * uTime).b * 0.97);
    #endif
    float threshold = 1.06 - amount * 1.12;
    float soft = fwidth(cells) + 0.025;
    // Softened against shimmer, but none at all where none is wanted.
    return smoothstep(threshold - soft, threshold + soft, cells) * smoothstep(0.0, 0.1, amount);
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

    // Small ripples on top of the big waves, from the tiling detail map; faded with distance against shimmer.
    float detail = 1.0 - smoothstep(20.0, 190.0, dist);
    vec4 d1 = texture2D(uDetail, q / 7.3 + vec2(0.031, 0.017) * uTime);
    vec2 slope = (d1.rg - 0.5) * 0.44;
    #ifdef RICH
      vec4 d2 = texture2D(uDetail, mat2(0.6, -0.8, 0.8, 0.6) * q / 3.1 + vec2(-0.023, 0.041) * uTime);
      slope += (d2.rg - 0.5) * 0.3;
    #endif
    vec3 n = normalize(vNormal + vec3(-slope.x, 0.0, -slope.y) * detail);
    // The body colour follows the big waves and only a little of the ripples, so it doesn't get noisy.
    vec3 nBody = normalize(vNormal + vec3(-slope.x, 0.0, -slope.y) * detail * 0.3);
    float facing = max(dot(nBody, view), 0.0);
    float breakup = texture2D(uDetail, q / 41.0 + vec2(0.0043, 0.0027) * uTime).a;

    // Body: deep blue-teal at sea, lifted to teal in the crests, turquoise toward the island and pale over the sand.
    float shallow = 1.0 - smoothstep(0.0, 30.0, vShore + (breakup - 0.5) * 8.0);
    float lagoon = 1.0 - smoothstep(0.0, 9.0, vShore);
    float crest = smoothstep(-0.7, 1.5, vHeight);
    vec3 color = mix(uDeep, uMid, crest * 0.7 + (breakup - 0.5) * 0.25);
    color = mix(color, uShallow, shallow * 0.92);
    color = mix(color, uLagoon, lagoon * 0.75);
    // Faces turned to the sun are a little lighter.
    color *= 0.86 + 0.22 * max(dot(nBody, uSunDir), 0.0);

    #ifdef RICH
      // Caustics: bright lines of two drifting cell layers, rippling on the sand under the shallows.
      if (shallow > 0.01) {
        vec2 cq = q + slope * 2.0;
        float c1 = texture2D(uDetail, cq / 3.4 + vec2(0.05, 0.03) * uTime).b;
        float c2 = texture2D(uDetail, mat2(0.8, -0.6, 0.6, 0.8) * cq / 4.1 - vec2(0.04, 0.035) * uTime).b;
        float caustic = smoothstep(0.66, 0.95, max(c1, c2));
        color += vec3(0.85, 1.0, 0.95) * caustic * shallow * shallow * 0.3 * detail;
      }
    #endif

    // Subsurface glow: thin crests seen against the light turn bright turquoise.
    vec3 sunFlat = normalize(vec3(uSunDir.x, 0.0, uSunDir.z));
    float toward = max(dot(-view, sunFlat), 0.0);
    float thin = smoothstep(0.0, 1.6, vHeight) * (0.3 + 0.7 * toward * toward);
    color = mix(color, uGlow, clamp(thin * (0.35 + (1.0 - facing)) * 0.75, 0.0, 0.7));

    // The sky reflected in the waves; the same sky as the dome, so the horizon matches in every direction.
    vec3 reflected = reflect(-view, n);
    reflected.y = abs(reflected.y);
    float fresnel = 0.02 + 0.98 * pow(1.0 - max(dot(n, view), 0.0), 5.0);
    // Up close the sea keeps some of its colour even at a glance; far out it's all sky, meeting the horizon.
    float mirror = mix(0.8, 1.0, smoothstep(80.0, 400.0, dist));
    color = mix(color, skyColor(reflected, uSunDir), min(fresnel * mirror, mirror));

    // Sun glints: crisp sparkles on the nearby ripples (farther off they'd only flicker) inside a soft sheen.
    vec3 halfVector = normalize(uSunDir + view);
    float nh = max(dot(n, halfVector), 0.0);
    float sparkle = smoothstep(0.4, 0.7, pow(nh, 800.0)) * (1.0 - smoothstep(25.0, 110.0, dist));
    color += vec3(1.0, 0.96, 0.86) * (sparkle * 2.0 + pow(nh, 90.0) * 0.25);

    // Foam: how much is wanted here, then drawn as lace.
    float crestFoam = smoothstep(1.05, 1.85, vHeight + (breakup - 0.5) * 0.9) * 0.75;
    float shoreFoam = 0.0;
    float surf = 0.0;
    if (vShore < 14.0) {
      shoreFoam = 1.0 - smoothstep(0.6, 5.5, vShore + (breakup - 0.5) * 5.0);
      // Broken lines of surf rolling in to the beach.
      float surfBreak = texture2D(uDetail, q / 17.0 + vec2(0.37, 0.61)).a;
      surf = smoothstep(0.78, 1.0, sin(vShore * 0.8 + uTime * 1.5 + breakup * 4.0));
      surf *= (1.0 - smoothstep(2.5, 13.0, vShore)) * smoothstep(0.5, 2.5, vShore) * smoothstep(0.3, 0.65, surfBreak) * 0.7;
    }
    // A churning band hugging each hull at the waterline, trailing off in lace.
    float hullFoam = 0.0;
    for (int i = 0; i < 2; i++) {
      float h = hullDistance(q, uHulls[i]);
      float band = 1.0 - smoothstep(0.0, 0.5 + breakup * 0.8, h);
      float wide = 1.0 - smoothstep(0.0, 2.6 + breakup * 1.6, h);
      hullFoam = max(hullFoam, max(band, wide * 0.4));
    }
    float amount = max(max(crestFoam, shoreFoam), max(surf, hullFoam));
    #ifdef RICH
      // Faint patches of old foam drifting on the open sea.
      amount = max(amount, smoothstep(0.62, 0.95, breakup) * 0.32 * detail);
    #endif
    // The lace wobbles with the ripples.
    float foam = foamLace(q + slope * 1.6, amount);
    vec3 foamColor = uFoam * (0.84 + 0.16 * max(dot(nBody, uSunDir), 0.0));
    // A milky turquoise under the lace, then the lace itself.
    color = mix(color, uGlow, amount * 0.18);
    color = mix(color, foamColor, foam * 0.95);
    color = mix(color, uDeep * 0.2, dry);

    // Into the haze at the horizon: the sky's own horizon colour in this direction.
    float haze = smoothstep(HORIZON_FADE_START, HORIZON_FADE_END, dist);
    if (haze > 0.0) color = mix(color, skyColor(normalize(vec3(-view.x, 1e-4, -view.z)), uSunDir), haze);
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function lf(e,t){let n=af(e),r=new C(n.data,rf,rf,Mt,nn);r.magFilter=ut,r.minFilter=ut,r.needsUpdate=!0;let i={uTime:{value:0},uShoreMap:{value:r},uShoreExtent:{value:n.extent},uWaves:{value:Kd.map(([e,t,n,r])=>new Xt(e,t,n,r))},uDetail:{value:Sd()},uDeep:{value:new y(`#0b5a8c`)},uMid:{value:new y(`#138ea8`)},uShallow:{value:new y(`#2fd3c9`)},uLagoon:{value:new y(`#8ff0dc`)},uGlow:{value:new y(`#45ead6`)},uFoam:{value:new y(`#f4fcff`)},uSunDir:{value:t},uHulls:{value:[new Xt(0,1e3,1,0),new Xt(0,-1e3,1,0)]},uHullShape:{value:new V(.7,13,3.75)},uHullInverse:{value:[new _n,new _n]},uHullDry:{value:[0,0]},uHullLines:{value:Array.from({length:33},()=>new V)},uHullSpan:{value:new yt(-1,1)}},a={GRAVITY:tf(qd),SHALLOWS_WIDTH:tf(Jd),SHORE_MAX:tf(nf),FADE_START:tf(Yd),FADE_END:tf(Xd),INNER_RADIUS:tf(Zd),HORIZON_FADE_START:tf(Qd),HORIZON_FADE_END:tf($d),HULL_STATIONS:`33`,HULL_MARGIN:tf(ef),RICH:``},o=e=>new E(420,420,e,e).rotateX(-Math.PI/2),s=new B(o(210),new Ge({uniforms:i,defines:{...a,CLIP_OUTSIDE:``,HULL_MASK:``},vertexShader:sf,fragmentShader:cf})),c=new j(Xd,3e3,96,4);c.rotateX(-Math.PI/2),c.translate(0,-.05,0);let l=new B(c,new Ge({uniforms:i,defines:{...a},vertexShader:sf,fragmentShader:cf})),u=[s.material,l.material],d=new H;d.add(s,l);let f=0;return{object:d,update(e){f=e,i.uTime.value=e},setArena(e){n=af(e),r.image.data=n.data,r.needsUpdate=!0,i.uShoreExtent.value=n.extent},setQuality(e){s.geometry.dispose(),s.geometry=o(e?210:120);for(let t of u)e?t.defines.RICH=``:delete t.defines.RICH,t.needsUpdate=!0},setHullShape(e,t,n){i.uHullShape.value.set(e,t,n)},setHull(e,t,n,r,a){i.uHulls.value[e].set(t,n,r,a)},setHullLines(e){i.uHullSpan.value.set(e.stern,e.bow),e.stations.forEach(([e,t,n],r)=>i.uHullLines.value[r]?.set(e,t,n))},setHullFrame(e,t,n){i.uHullInverse.value[e].copy(t).invert(),i.uHullDry.value[e]=+!!n},sample(e,t,r){let i=Math.hypot(e,t),a=uf(0,Jd,of(n,e,t))*(1-uf(Yd,Xd,i)),o=0,s=1,c=0,l=0,u=0,d=0,p=1;for(let[n,r,i,m]of Kd){let h=2*Math.PI/m,g=Math.sqrt(qd/h),_=Math.hypot(n,r),v=n/_,y=r/_,b=i*a,x=h*(v*e+y*t-g*f),S=Math.sin(x),C=Math.cos(x);o+=b/h*S,s+=-v*v*b*S,c+=v*b*C,l+=-v*y*b*S,u+=-v*y*b*S,d+=y*b*C,p+=-y*y*b*S}return r.set(d*l-p*c,p*s-u*l,u*c-d*s).normalize(),o}}}function uf(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}var df=class{uniforms={uMaskInverse:{value:[new _n,new _n]},uMaskLines:{value:Array.from({length:33},()=>new V)},uMaskSpan:{value:new yt(-1,1)}};setLines(e){this.uniforms.uMaskSpan.value.set(e.stern,e.bow),e.stations.forEach(([e,t,n],r)=>this.uniforms.uMaskLines.value[r]?.set(e,t,n))}setFrame(e,t){this.uniforms.uMaskInverse.value[e].copy(t).invert()}apply(e){e.traverse(e=>{let t=e.material;if(t)for(let e of Array.isArray(t)?t:[t])this.patch(e)})}patch(e){let t=e.customProgramCacheKey();e.customProgramCacheKey=()=>`${t}|hull-mask`,e.onBeforeCompile=e=>{Object.assign(e.uniforms,this.uniforms),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vMaskWorld;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vMaskWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform mat4 uMaskInverse[2];
uniform vec3 uMaskLines[33];
uniform vec2 uMaskSpan;
varying vec3 vMaskWorld;
${kt}
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
  if (maskInside(0) > 0.0 || maskInside(1) > 0.0) discard;`)}}},ff=.55,pf=class{object=new H;core;glow;rings=[];target=new V;top=80;strikeAt=1.2;active=!1;constructor(){let e=(e,t)=>new ae({fog:!1,color:e,transparent:!0,opacity:t,blending:2,depthWrite:!1,side:2}),t=new P(1,1,1,16,1,!0).translate(0,.5,0);this.core=new B(t,e(`#fff4f0`,1)),this.glow=new B(t,e(`#ff3b3b`,.5)),this.core.renderOrder=this.glow.renderOrder=6;for(let t=0;t<3;t++){let t=new B(new j(.88,1,48).rotateX(-Math.PI/2),e(`#ff4d4d`,.9));t.renderOrder=6,this.rings.push(t)}this.object.add(this.core,this.glow,...this.rings),this.object.visible=!1}show(e,t,n){this.target.copy(e),this.top=t,this.strikeAt=n,this.active=!0,this.object.visible=!0,this.update(0)}hide(){this.active=!1,this.object.visible=!1}update(e){if(!this.active)return;let{target:t}=this,n=Math.max(1,this.top-t.y),r=(e,r)=>{e.position.copy(t),e.scale.set(r,n,r)},i=.7+.3*Math.sin(e*70);if(e<this.strikeAt){let n=e/this.strikeAt;r(this.core,.04+.04*n),r(this.glow,.25+.35*n),this.core.material.opacity=.5*i,this.glow.material.opacity=.25*i,this.rings.forEach((e,r)=>{let i=(n*2+r/3)%1;e.visible=!0,e.position.copy(t).setY(t.y+.15),e.scale.setScalar(.6+4.5*(1-i)),e.material.opacity=.9*i});return}let a=(e-this.strikeAt)/ff;if(a>=1){this.hide();return}let o=a<.15?a/.15:1-(a-.15)/.85;r(this.core,.5+.9*o),r(this.glow,1.4+2.6*o),this.core.material.opacity=Math.min(1,1.2*o)*i,this.glow.material.opacity=.7*o;for(let e of this.rings)e.visible=!1}},mf=14,hf=new y(`#5dff8a`),gf=new y(`#ffffff`),_f=class{object=new H;ring;dot;pillar;materials;color=new y;onTarget=!1;time=0;shown=!1;constructor(){let e=e=>new ae({fog:!1,color:`#ffffff`,transparent:!0,opacity:e,blending:2,depthWrite:!1,depthTest:!1,side:2});this.materials=[e(.95),e(.8),e(.28)],this.ring=new B(new j(.8,1,48).rotateX(-Math.PI/2),this.materials[0]),this.dot=new B(new je(.22,24).rotateX(-Math.PI/2),this.materials[1]);let t=new P(.35,.35,mf,16,1,!0).translate(0,mf/2,0),n=new Float32Array(t.attributes.position.count*3);for(let e=0;e<t.attributes.position.count;e++){let r=1-t.attributes.position.getY(e)/mf;n.set([r,r,r],e*3)}t.setAttribute(`color`,new D(n,3)),this.materials[2].vertexColors=!0,this.pillar=new B(t,this.materials[2]);for(let e of[this.ring,this.dot,this.pillar])e.renderOrder=7;this.object.add(this.ring,this.dot,this.pillar),this.object.visible=!1}show(e,t){this.shown||this.color.copy(t?hf:gf),this.shown=!0,this.onTarget=t,this.object.visible=!0,this.object.position.distanceTo(e)>25||this.time===0?this.object.position.copy(e):this.object.position.lerp(e,.5),this.object.position.y+=.08}hide(){this.shown=!1,this.time=0,this.object.visible=!1}update(e){if(!this.shown)return;this.time+=e,this.color.lerp(this.onTarget?hf:gf,1-Math.exp(-e*10));for(let e of this.materials)e.color.copy(this.color);let t=(this.onTarget?2.4:1.8)*(1+.12*Math.sin(this.time*9));this.ring.scale.setScalar(t),this.ring.rotation.y+=e*1.5,this.pillar.scale.set(this.onTarget?1.3:1,1,this.onTarget?1.3:1)}},vf=.3,yf=new V(.05,.09,.14),bf=new V(.9,.1,.06),xf=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Sf=`
uniform float uOpacity;
uniform float uReach;
uniform float uSoftness;
uniform float uRed;
uniform vec3 uDark;
uniform vec3 uHot;
varying vec2 vUv;
void main() {
  float d = length(vUv * 2.0 - 1.0) / max(uReach, 0.001);
  // Eased in twice over, so the middle stays clear and it gathers at the edge.
  float s = smoothstep(1.0 - max(uSoftness, 0.001), 1.0, d);
  float a = s * s * uOpacity;
  // A touch of noise, so the dark gradient doesn't band.
  a = clamp(a + (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0, 0.0, 1.0);
  gl_FragColor = vec4(mix(vec3(1.0), mix(uDark, uHot, uRed), a), 1.0);
}`,Cf=class{mesh;uniforms={uOpacity:{value:0},uReach:{value:1},uSoftness:{value:.5},uRed:{value:0},uDark:{value:yf},uHot:{value:bf}};opacity=0;asked=!1;fade=0;constructor(){let e=new Ge({uniforms:this.uniforms,vertexShader:xf,fragmentShader:Sf,transparent:!0,blending:5,blendEquation:100,blendSrc:208,blendDst:200,blendSrcAlpha:200,blendDstAlpha:201,depthTest:!1,depthWrite:!1,toneMapped:!1});this.mesh=new B(new E(2,2),e),this.mesh.name=`vignette`,this.mesh.frustumCulled=!1,this.mesh.renderOrder=1e6,this.mesh.visible=!1}show(e){this.opacity=e.opacity,this.uniforms.uReach.value=e.reach,this.uniforms.uSoftness.value=e.softness,this.uniforms.uRed.value=e.red,this.asked=!0,this.fade=1}update(e){this.asked||(this.fade=Math.max(0,this.fade-e/vf)),this.asked=!1,this.uniforms.uOpacity.value=this.opacity*this.fade,this.mesh.visible=this.uniforms.uOpacity.value>.002}},wf=16,Tf=160,Ef=new V(0,1,0),Df=new V,Of=new et,kf=class{groundAt;speed;object=new H;onLand=null;fallers=[];chunks=[];chunkMesh;matrix=new _n;rock=new y(`#9a958a`);white=new y(`#ece6da`);red=new y(`#b8372d`);gravity=wf;constructor(e,t=()=>1){this.groundAt=e,this.speed=t;let n=new At(1,0);this.chunkMesh=new _t(n,new S({roughness:1,flatShading:!0}),Tf);for(let e=0;e<Tf;e++)this.chunkMesh.setColorAt(e,this.rock);this.chunkMesh.count=0,this.chunkMesh.frustumCulled=!1,this.chunkMesh.castShadow=!0,this.object.add(this.chunkMesh)}drop(e,t){this.object.add(e.object);let n=new V(t.x,0,t.z);n.lengthSq()<1e-6&&n.set(1,0,0),n.normalize();let r=e.length<=0;this.fallers.push({piece:e,axis:new V().crossVectors(Ef,n).normalize(),angle:.04,spin:r?(Math.random()-.5)*2:.35,velocity:r?n.clone().multiplyScalar(Math.random()*2).setY(-1):new V,free:r,age:0,rest:null,water:!1})}clear(){for(let e of this.fallers)this.remove(e.piece.object);this.fallers.length=0,this.chunks.length=0,this.chunkMesh.count=0}update(e){this.gravity=wf*this.speed()**2;for(let t=this.fallers.length-1;t>=0;t--){let n=this.fallers[t];if(n.age+=e,!(n.rest===null&&this.move(n,e))){if(n.piece.kind===`palm`){if(n.rest===null&&this.lieDown(n),this.settle(n,e))continue}else this.shatter(n);this.remove(n.piece.object),this.fallers.splice(t,1)}}this.updateChunks(e)}move(e,t){let n=e.piece.object;if(e.free){e.velocity.y-=this.gravity*t,n.position.addScaledVector(e.velocity,t),n.quaternion.premultiply(Of.setFromAxisAngle(e.axis,e.spin*t));let r=Math.max(0,this.groundAt(n.position.x,n.position.z));return n.position.y>r+.5&&e.age<8}let r=Math.max(1,e.piece.length);e.spin+=1.5*this.gravity/r*Math.sin(e.angle)*t,e.angle+=e.spin*t,n.quaternion.setFromAxisAngle(e.axis,e.angle);for(let e of[r,r/2]){let t=n.localToWorld(Df.set(0,e,0));if(t.y<=Math.max(0,this.groundAt(t.x,t.z))+.3)return!1}return e.angle<1.9&&e.age<8}lieDown(e){let t=e.piece.object;t.updateMatrixWorld(!0);let n=t.localToWorld(new V(0,e.piece.length/2,0)),r=this.groundAt(n.x,n.z);e.rest=0,e.water=r<.2,this.onLand?.({point:n.setY(Math.max(0,r)),size:e.piece.length,water:e.water,kind:`palm`})}settle(e,t){let n=e.rest=(e.rest??0)+t,r=e.piece.object;if(e.water)return r.position.y-=t*1.2,n<3;let i=Math.max(0,this.groundAt(r.position.x,r.position.z))+.25,a=Math.sqrt(this.gravity/wf);r.position.y>i&&(r.position.y=Math.max(i,r.position.y-t*9*a));let o=r.localToWorld(Df.set(0,Math.max(1,e.piece.length),0));return e.angle<1.9&&o.y>Math.max(0,this.groundAt(o.x,o.z))+.4&&(e.angle+=t*2.5*a,r.quaternion.setFromAxisAngle(e.axis,e.angle)),n>6&&(r.position.y-=t*.5),n<9}shatter(e){let t=e.piece.object;t.updateMatrixWorld(!0);let n=Math.max(2,e.piece.length||4),r=Math.min(14,4+Math.round(n*.7));for(let i=0;i<r;i++){let a=e.piece.length>0?n*(i+Math.random())/r:(Math.random()-.5)*3,o=t.localToWorld(new V((Math.random()-.5)*1.5,a,(Math.random()-.5)*1.5));this.spawnChunk(o,e.piece.kind,Math.min(1.6,.5+n*.06)*(.6+Math.random()*.6))}let i=t.localToWorld(new V(0,e.piece.length>0?n/2:0,0)),a=this.groundAt(i.x,i.z);this.onLand?.({point:i.setY(Math.max(0,a)),size:n,water:a<.2,kind:e.piece.kind})}spawnChunk(e,t,n){this.chunks.length>=Tf&&this.chunks.shift();let r={position:e,velocity:new V((Math.random()-.5)*9,3+Math.random()*6,(Math.random()-.5)*9),rotation:new be(Math.random()*6,Math.random()*6,Math.random()*6),spin:new V((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8),scale:n,color:t===`rock`?this.rock:Math.random()<.6?this.white:this.red,bounced:!1,age:0};this.chunks.push(r)}updateChunks(e){let t=0;for(let n=0;n<this.chunks.length;n++){let r=this.chunks[n];r.age+=e;let i=Math.max(0,this.groundAt(r.position.x,r.position.z));(!r.bounced||r.position.y>i-.1)&&(r.velocity.y-=this.gravity*e,r.position.addScaledVector(r.velocity,e),r.rotation.x+=r.spin.x*e,r.rotation.y+=r.spin.y*e,r.rotation.z+=r.spin.z*e,r.position.y<i&&!r.bounced&&(r.bounced=!0,r.position.y=i,r.velocity.multiplyScalar(.3).setY(Math.abs(r.velocity.y)*.25),r.spin.multiplyScalar(.3))),r.bounced&&r.age>2.2&&(r.position.y-=e*.6),!(r.age>4.5||r.bounced&&r.position.y<i-r.scale*1.2)&&(this.matrix.compose(r.position,Of.setFromEuler(r.rotation),Df.setScalar(r.scale)),this.chunkMesh.setMatrixAt(t,this.matrix),this.chunkMesh.setColorAt(t,r.color),this.chunks[t]=r,t++)}this.chunks.length=t,this.chunkMesh.count=t,this.chunkMesh.instanceMatrix.needsUpdate=!0,this.chunkMesh.instanceColor&&(this.chunkMesh.instanceColor.needsUpdate=!0)}remove(e){e.removeFromParent(),e.traverse(e=>{let t=e;t.geometry?.dispose();for(let e of t.material?Array.isArray(t.material)?t.material:[t.material]:[])e.dispose()})}},Af=()=>new S({color:`#c9922e`,roughness:.32,metalness:.85}),jf=()=>new S({color:`#b8693a`,roughness:.38,metalness:.8}),Mf=()=>new S({color:`#3a3f46`,roughness:.5,metalness:.6}),Nf=null;function Pf(e,t){if(!Nf){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.3,`rgba(255,255,255,0.45)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),Nf=new re(e)}let n=new ye(new at({map:Nf,color:e,transparent:!0,depthWrite:!1,blending:2}));return n.scale.setScalar(t),n.renderOrder=5,n}function Ff(e,t,n,r){let i=new H,a=new B(new P(e,e,t,24),r);i.add(a);let o=new Ve(e*.22,t,e*.24);for(let t=0;t<n;t++){let a=new B(o,r),s=t/n*Math.PI*2;a.position.set(Math.cos(s)*e,0,Math.sin(s)*e),a.rotation.y=-s,i.add(a)}let s=new B(new P(e*.25,e*.25,t*1.6,12),r);return i.add(s),i}var If=class{segments;line;positions;constructor(e,t){this.segments=e,this.positions=new Float32Array((e+1)*3);let n=new hn;n.setAttribute(`position`,new D(this.positions,3)),this.line=new Ut(n,new Ot({color:t,transparent:!0,opacity:.95,blending:2,depthWrite:!1})),this.line.frustumCulled=!1}set(e,t,n){for(let r=0;r<=this.segments;r++){let i=r/this.segments,a=r===0||r===this.segments?0:n;this.positions[r*3]=e.x+(t.x-e.x)*i+(Math.random()-.5)*a,this.positions[r*3+1]=e.y+(t.y-e.y)*i+(Math.random()-.5)*a,this.positions[r*3+2]=e.z+(t.z-e.z)*i+(Math.random()-.5)*a}this.line.geometry.getAttribute(`position`).needsUpdate=!0}};function Lf(e,t){switch(e){case`antiMissile`:return zf(t);case`healer`:return Bf(t);case`charger`:return Vf(t);case`shield`:return Rf(t)}}function Rf(e){let t=e/2.6,n=new H,r=new H;n.add(r);let i=Af(),a=jf(),o=Mf(),s=new B(new P(.62,.7,.34,8),i);s.position.y=.17;let c=new B(new P(.42,.5,.5,16),o);c.position.y=.58,r.add(s,c);for(let e=0;e<6;e++){let t=new B(new Le(.24-e*.012,.035,6,18),a);t.rotation.x=Math.PI/2,t.position.y=.95+e*.12,r.add(t)}let l=new B(new P(.07,.09,.9,10),i);l.position.y=1.25;let u=new B(new P(.28,.12,.16,12,1,!0),i);u.position.y=1.72,r.add(l,u);let d=[];for(let e=0;e<3;e++){let t=new B(new $t(.075,10,8),new S({color:`#12283a`,emissive:`#000000`,roughness:.3})),n=-.5+e*.5;t.position.set(Math.sin(n)*.66,.2,Math.cos(n)*.66),d.push(t),r.add(t)}let f=new V(0,2.1,0),p=new B(new _e(.26,0),new S({color:`#7fd6ff`,emissive:`#3fb8ff`,emissiveIntensity:1.4,roughness:.15,metalness:.1,flatShading:!0}));p.scale.y=1.5,p.position.copy(f);let m=Pf(`#6fc8ff`,1.5);m.position.copy(f),r.add(p,m);let h=Array.from({length:3},()=>new If(5,`#bfe9ff`));for(let e of h)r.add(e.line);r.scale.setScalar(t);let g=0,_=0,v=3;return{kind:`shield`,root:n,update(e,t){g=Math.max(0,g-t*2),_=Math.max(0,_-t*3);let n=v>=3;p.rotation.y+=t*(n?1.4:.4)*(1+3*g),p.position.y=f.y+Math.sin(e*2.2)*.06;let i=p.material;i.emissiveIntensity=(n?1.4:.4)+2.5*g+.2*Math.sin(e*9),m.material.opacity=Math.min(1,(n?.7:.25)+g),m.scale.setScalar(1.5+2*g),h.forEach((t,r)=>{if(Math.random()<.4){let n=e*4+r*2.1;t.set(new V(Math.cos(n)*.2,1.72,Math.sin(n)*.2),p.position,.07)}t.line.visible=n&&Math.random()<.6}),d.forEach((t,r)=>{let i=r<v;t.material.emissive.set(i?n?`#6fc8ff`:`#ffb33d`:`#000000`),t.material.emissiveIntensity=i?1.6+.6*Math.sin(e*6+r):0}),r.position.x=_*.08*Math.sin(e*70)},flare(){g=1},setCharge(e){v=Math.max(0,Math.min(3,e))},aimAt(){},emitter(e){return p.getWorldPosition(e)},shake(){_=1},dispose:()=>Hf(n)}}function zf(e){let t=e/2.4,n=new H,r=new H;n.add(r);let i=Af(),a=jf(),o=Mf(),s=new B(new Ve(1.25,.32,1),i);s.position.y=.16;let c=new B(new Ve(.95,.24,.8),a);c.position.y=.44,r.add(s,c);let l=Ff(.3,.1,10,i);l.rotation.x=Math.PI/2,l.position.set(-.32,.5,.45);let u=Ff(.2,.1,8,a);u.rotation.x=Math.PI/2,u.position.set(.08,.42,.45),r.add(l,u);let d=[];for(let e=0;e<3;e++){let t=new B(new $t(.075,10,8),new S({color:`#3a2a12`,emissive:`#000000`,roughness:.3}));t.position.set(.25+e*.16,.2,.51),d.push(t),r.add(t)}let f=new H;f.position.y=.56,r.add(f);let p=new B(new P(.16,.24,.5,12),o);p.position.y=.25;let m=new B(new Le(.36,.07,8,24),i);m.rotation.x=Math.PI/2,m.position.y=.62,f.add(p,m);let h=new V(0,1.08,0),g=new B(new $t(.46,24,18),new Rt({color:`#cfeeff`,transparent:!0,opacity:.32,roughness:.05,metalness:0,transmission:0,depthWrite:!1}));g.position.copy(h),g.renderOrder=3;let _=new B(new $t(.09,12,10),new ae({color:`#ffe8ff`}));_.position.copy(h);let v=Pf(`#d29bff`,1.6);v.position.copy(h),f.add(g,_,v);let y=Array.from({length:5},()=>new If(6,`#ff9be8`));for(let e of y)f.add(e.line);let b=new H;b.position.copy(h).add(new V(0,.45,0));let x=new B(new P(.05,.08,.55,10),a);x.rotation.x=Math.PI/2,x.position.z=.3;let C=new B(new Oe(.1,.18,10),i);C.rotation.x=Math.PI/2,C.position.z=.62;let w=new B(new $t(.12,10,8),i);b.add(x,C,w),f.add(b),r.scale.setScalar(t);let T=0,E=0,D=3,O=new V,k=!1,ee=new V;return{kind:`antiMissile`,root:n,update(e,t){T=Math.max(0,T-t*2.5),E=Math.max(0,E-t*3);let n=D>=3?1:.35+.15*D;if(y.forEach((t,r)=>{if(Math.random()<.35){let n=e*3+r*1.3+Math.random(),i=new V(Math.cos(n),Math.sin(n*1.7)*.8,Math.sin(n)).normalize().multiplyScalar(.44);t.set(h,h.clone().add(i),.08)}t.line.visible=Math.random()<.55+.4*n}),v.material.opacity=Math.min(1,(.35+.35*n+.9*T)*(.85+.15*Math.sin(e*20))),v.scale.setScalar(1.6+2.5*T),_.scale.setScalar(1+.3*Math.sin(e*13)+2*T),d.forEach((t,n)=>{let r=n<D;t.material.emissive.set(r?D>=3?`#7dff7a`:`#ffb33d`:`#000000`),t.material.emissiveIntensity=r?1.6+.6*Math.sin(e*6+n):0}),l.rotation.y+=t*(.6+4*T),u.rotation.y-=t*(.9+6*T),k){f.updateWorldMatrix(!0,!1);let e=f.worldToLocal(ee.copy(O)),n=Math.atan2(e.x,e.z);f.rotation.y+=(n-f.rotation.y)*Math.min(1,t*12),b.rotation.x=-Math.atan2(e.y-b.position.y,Math.hypot(e.x,e.z))*.8}else f.rotation.y+=t*.25;r.position.x=E*.08*Math.sin(e*70)},flare(){T=1},setCharge(e){D=Math.max(0,Math.min(3,e))},aimAt(e){O.copy(e),k=!0},emitter(e){return C.getWorldPosition(e)},shake(){E=1},dispose:()=>Hf(n)}}function Bf(e){let t=e/2.6,n=new H,r=new H;n.add(r);let i=Af(),a=jf();for(let e=0;e<4;e++){let t=e/4*Math.PI*2+Math.PI/4,n=new B(new P(.05,.07,.62,8),a);n.position.set(Math.cos(t)*.36,.3,Math.sin(t)*.36),n.rotation.set(Math.sin(t)*.4,0,-Math.cos(t)*.4);let o=new B(new Oe(.08,.16,6),i);o.position.set(Math.cos(t)*.5,.06,Math.sin(t)*.5),o.rotation.set(Math.sin(t)*1.4,0,-Math.cos(t)*1.4),r.add(n,o)}let o=new B(new P(.4,.44,.2,18),i);o.position.y=.66;let s=new B(new P(.36,.38,.2,18,1,!0),new S({color:`#2a2016`,roughness:.8,side:2}));s.position.y=.84,r.add(o,s);let c=new S({color:`#2fd06e`,emissive:`#29d36a`,emissiveIntensity:1.1,roughness:.15,metalness:.1,transparent:!0,opacity:.88}),l=new B(new P(.3,.3,1.1,20),c);l.position.y=1.5,r.add(l);for(let e of[.95,1.5,2.05]){let t=new B(new Le(.32,.045,8,24),i);t.rotation.x=Math.PI/2,t.position.y=e,r.add(t)}for(let e=0;e<4;e++){let t=e/4*Math.PI*2,n=new B(new Ve(.05,1.12,.05),i);n.position.set(Math.cos(t)*.31,1.5,Math.sin(t)*.31),r.add(n)}let u=new B(new $t(.34,18,10,0,Math.PI*2,0,Math.PI/2),i);u.position.y=2.06;let d=new B(new $t(.08,10,8),a);d.position.y=2.44,r.add(u,d);let f=new B(new v(new ee([new V(.1,2.3,0),new V(.45,2.45,.1),new V(.55,2.1,.25),new V(.42,1.8,.3)]),16,.025,6),new S({color:`#2b2622`,roughness:.7}));r.add(f);let p=Pf(`#4dff8f`,2);p.position.y=1.5,r.add(p);let m=new B(new $t(.12,12,10),new ae({color:`#d9ffe6`}));m.position.y=1.5,r.add(m),r.scale.setScalar(t);let h=0,g=0;return{kind:`healer`,root:n,update(e,t){h=Math.max(0,h-t*1.6),g=Math.max(0,g-t*3);let n=.5+.5*Math.sin(e*2.2);c.emissiveIntensity=.8+.6*n+3*h,p.material.opacity=Math.min(1,.35+.3*n+.8*h),p.scale.setScalar(2+.4*n+3*h),m.scale.setScalar(1+.35*n+1.5*h),r.position.x=g*.08*Math.sin(e*70)},flare(){h=1},setCharge(){},aimAt(){},emitter(e){return m.getWorldPosition(e)},shake(){g=1},dispose:()=>Hf(n)}}function Vf(e){let t=e/2.4,n=new H,r=new H;n.add(r);let i=Af(),a=jf(),o=Mf(),s=new B(new P(.55,.6,.42,24),i);s.position.y=.21;let c=new B(new P(.61,.61,.1,24),a);c.position.y=.3,r.add(s,c);for(let e=0;e<10;e++){let t=e/10*Math.PI*2,n=new B(new $t(.035,6,5),o);n.position.set(Math.cos(t)*.61,.3,Math.sin(t)*.61),r.add(n)}let l=new H,u=new B(new Ve(.06,.06,.32),o);u.position.z=.16;let d=new B(new P(.035,.035,.18,8),a);d.position.set(0,.09,.32),l.add(u,d),l.position.set(.62,.3,0),l.rotation.y=Math.PI/2,r.add(l);let f=new B(new P(.1,.16,.9,12),o);f.position.y=.87,r.add(f);let p=[],m=new V(0,1.75,0);[.62,.5,.4].forEach((e,t)=>{let n=new B(new Le(e,.035,8,40),t===1?a:i);n.position.copy(m),n.rotation.set(Math.PI/2+t*.6,t*.9,0),p.push(n),r.add(n)});let h=new B(new $t(.3,24,18),new S({color:`#4a4f57`,roughness:.18,metalness:.95,emissive:`#ff2a2a`,emissiveIntensity:.15}));h.position.copy(m),r.add(h);let g=Pf(`#ff3b3b`,1.4);g.position.copy(m),r.add(g);let _=Array.from({length:4},()=>new If(7,`#ff4d4d`));for(let e of _)r.add(e.line);r.scale.setScalar(t);let v=0,y=0;return{kind:`charger`,root:n,update(e,t){v=Math.max(0,v-t*1.8),y=Math.max(0,y-t*3),p.forEach((e,n)=>{e.rotation.z+=t*(.6+n*.35)*(n%2?-1:1)*(1+4*v),e.rotation.x+=t*.2*(n+1)}),l.rotation.x+=t*1.5,_.forEach((e,t)=>{if(Math.random()<.4){let t=Math.random()*Math.PI*2,n=.4+Math.random()*.22;e.set(m,m.clone().add(new V(Math.cos(t)*n,(Math.random()-.5)*.5,Math.sin(t)*n)),.1)}e.line.visible=Math.random()<.45+.5*v||t===0}),h.material.emissiveIntensity=.15+.15*Math.sin(e*9)+1.5*v,g.material.opacity=Math.min(1,(.4+.8*v)*(.8+.2*Math.random())),g.scale.setScalar(1.4+2.5*v),r.position.x=y*.08*Math.sin(e*70)},flare(){v=1},setCharge(){},aimAt(){},emitter(e){return h.getWorldPosition(e)},shake(){y=1},dispose:()=>Hf(n)}}function Hf(e){e.traverse(e=>{let t=e;t.geometry?.dispose();let n=t.material?Array.isArray(t.material)?t.material:[t.material]:[];for(let e of n)e.dispose()})}var Uf={muzzle:new V(0,0,1.22),lens:new V(0,.09,.445),butt:new V(0,-.085,-.385),trigger:new V(0,-.13,-.095),fore:new V(0,-.085,.17),carry:new V(0,-.01,.62),port:new V(-.026,.012,.03),middle:new V(0,-.03,.42)},Wf=new V(-.08,-.034,-.02),Gf=.09,Kf=-.055;function qf(){let e=new S({color:`#7a4422`,map:vt(),roughness:.55}),t=new S({color:`#3a3f47`,map:zt(),roughness:.38,metalness:.75}),n=new S({color:`#1f2226`,roughness:.5,metalness:.45}),r=new S({color:`#d9a441`,roughness:.3,metalness:.85,emissive:`#5a3a08`,emissiveIntensity:.3}),i=new S({color:`#b9bec4`,roughness:.22,metalness:.9}),a=new S({color:`#2a1f19`,roughness:.9}),o=new S({color:`#5a3820`,roughness:.8}),s=new S({color:`#070809`,roughness:1}),c=new S({color:`#2a6a86`,emissive:`#58c8ff`,emissiveIntensity:.35,roughness:.05,metalness:.9}),l=new H;l.name=`sniperRifle`;let u=(e,t,n=l)=>{let r=new B(Vt(e.map(Qf)),t);return r.castShadow=!0,n.add(r),r};u([Yf()],e);let d=new Ve(.014,.05,.17);d.translate(.034,-.002,-.22),u([d,Xf(.07,.19,.03,.012).translate(0,-.088,-.372)],a);let f=new St([[.001,-.125],[.02,-.125],[.025,-.115],[.025,.17],[.022,.18],[.02,.26],[.0175,.5],[.015,1.1],[.022,1.1],[.023,1.11],[.023,1.21],[.02,1.22],[.008,1.22]].map(([e,t])=>new yt(e,t)),16).rotateX(Math.PI/2),p=new Ve(.024,.01,.36).translate(0,.027,.08),m=Xf(.04,.06,.08,.008).translate(0,-.1,.045),h=[new Ve(.014,.008,.075).translate(0,-.13,-.035),new Ve(.014,.05,.008).translate(0,-.107,0)],g=[-1,1].flatMap(e=>[1.14,1.17].map(t=>new Ve(.006,.012,.018).translate(e*.021,0,t)));u([f,p,m,...h],t),u([...g,new je(.008,10).translate(0,0,1.221)],s);let _=new Ve(.007,.032,.01).rotateX(-.25).translate(0,-.1,-.02),y=new H;y.position.z=Kf,l.add(y);let b=new H;b.name=`bolt`,y.add(b),u([new P(.016,.016,.2,10).rotateX(Math.PI/2).translate(0,0,.05),new P(.019,.017,.05,10).rotateX(Math.PI/2).translate(0,0,-.085),Zf(new V(-.015,0,0),new V(Wf.x+.012,Wf.y+.006,Wf.z+.003),.008,.007,6)],i,b),u([new $t(.018,10,8).translate(Wf.x,Wf.y,Wf.z)],n,b);let x=new St([[.001,-.052],[.026,-.052],[.03,-.045],[.031,-.015],[.024,.01],[.019,.035],[.019,.27],[.023,.29],[.033,.33],[.037,.35],[.037,.445],[.034,.447],[.03,.447]].map(([e,t])=>new yt(e,t)),18).rotateX(Math.PI/2).translate(0,Gf,0),C=(e,t)=>{let n=new P(t,t,.032,12).translate(0,.035,0);return n.applyQuaternion(new et().setFromUnitVectors(new V(0,1,0),e)),n.translate(0,Gf,.15)};u([x,C(new V(0,1,0),.014),C(new V(-1,0,0),.014),C(new V(1,0,0),.017)],n);let w=[_];for(let e of[.06,.23])w.push(new Le(.022,.006,6,16).translate(0,Gf,e)),w.push(new Ve(.026,.057999999999999996,.02).translate(0,.122/2-.004,e));for(let e of[new V(0,1,0),new V(-1,0,0),new V(1,0,0)]){let t=new P(.016,.016,.01,12).translate(0,.019+.035,0);t.applyQuaternion(new et().setFromUnitVectors(new V(0,1,0),e)),w.push(t.translate(0,Gf,.15))}w.push(new Le(.037,.004,5,20).translate(0,Gf,.4)),u(w,r),u([new je(.031,18).translate(0,Gf,.44),new je(.024,14).rotateY(Math.PI).translate(0,Gf,-.053)],c);let T=new v(new ee([new V(0,-.15,-.3),new V(0,-.22,-.16),new V(0,-.25,.06),new V(0,-.2,.3),new V(0,-.085,.46)]),24,.009,5,!1).scale(.6,1,1),E=[new V(0,-.15,-.3),new V(0,-.085,.46)].map(e=>new Le(.012,.003,4,10).rotateY(Math.PI/2).translate(e.x,e.y,e.z));return u([T],o),u(E,i),{root:l,bolt:b}}function Jf(){let e=new St([[.001,0],[.011,0],[.011,.045],[.007,.054],[.007,.066],[.001,.066]].map(([e,t])=>new yt(e,t)),10).rotateX(Math.PI/2),t=new B(e,new S({color:`#e0ad48`,roughness:.25,metalness:.9,emissive:`#6a4408`,emissiveIntensity:.5}));return t.castShadow=!0,t}function Yf(){let e=new Qe;e.moveTo(-.36,-.005),e.lineTo(-.3,.02),e.lineTo(-.13,.025),e.quadraticCurveTo(-.1,.024,-.095,-.005),e.lineTo(-.085,-.024),e.lineTo(.5,-.024),e.quadraticCurveTo(.53,-.03,.525,-.05),e.lineTo(.51,-.07),e.lineTo(.09,-.074),e.lineTo(0,-.078),e.lineTo(-.04,-.08),e.quadraticCurveTo(-.055,-.1,-.065,-.17),e.lineTo(-.07,-.185),e.lineTo(-.118,-.185),e.lineTo(-.122,-.165),e.quadraticCurveTo(-.125,-.12,-.15,-.108),e.quadraticCurveTo(-.26,-.13,-.355,-.18),e.lineTo(-.362,-.17),e.closePath();let t=.038,n=new it(e,{depth:t,bevelEnabled:!0,bevelThickness:.012,bevelSize:.01,bevelSegments:2,curveSegments:6});n.applyMatrix4(new _n().set(0,0,-1,0,0,1,0,0,1,0,0,0,0,0,0,1)),n.translate(t/2,0,0);let r=n.getAttribute(`position`),i=n.getAttribute(`uv`);for(let e=0;e<r.count;e++)i.setXY(e,r.getZ(e)*2.2+r.getX(e),r.getY(e)*2.2);return n}function Xf(e,t,n,r){let i=new Qe,a=e/2-r,o=t/2-r;return i.moveTo(-a,-t/2),i.lineTo(a,-t/2),i.quadraticCurveTo(e/2,-t/2,e/2,-o),i.lineTo(e/2,o),i.quadraticCurveTo(e/2,t/2,a,t/2),i.lineTo(-a,t/2),i.quadraticCurveTo(-e/2,t/2,-e/2,o),i.lineTo(-e/2,-o),i.quadraticCurveTo(-e/2,-t/2,-a,-t/2),new it(i,{depth:n-2*r,bevelEnabled:!0,bevelThickness:r,bevelSize:0,bevelSegments:2,curveSegments:3}).translate(0,0,-(n-2*r)/2)}function Zf(e,t,n,r,i){let a=t.clone().sub(e),o=new P(r,n,a.length(),i);return o.translate(0,a.length()/2,0),o.applyQuaternion(new et().setFromUnitVectors(new V(0,1,0),a.normalize())),o.translate(e.x,e.y,e.z),o}function Qf(e){return e.index&&(e=e.toNonIndexed()),e.hasAttribute(`uv`)||e.setAttribute(`uv`,new tt(new Float32Array(e.getAttribute(`position`).count*2),2)),e}var $f=.07,ep=.45,tp=new y(`#77736d`),np=z.degToRad(4),rp=6,ip=.7,ap=.5,op=.03,sp=z.degToRad(1),cp=.1,lp=.5,up=14,dp=16,fp={hole:.9,tear:.8,mast:1.4},pp=1.1,mp=1.5,hp=new V(0,11,-9.5),gp=1.1,_p=1,vp=new V(-.155,1.33,.01),yp=new V(0,.08,-.29),bp=Hm(new V(-.5,.866,0),new V(0,0,-1),new et),xp=new V(-.08,1.12,.36),Sp=Hm(new V(.5,.75,.42),new V(0,0,1),new et),Cp=new V(.12,1.02,.3),wp=[new V(-.75,-.35,-.55),new V(.75,-.35,-.55)],Tp=[new V(-.6,.8,.1),new V(.75,-.35,-.55)],Ep=[new V(-.9,.05,-.3),new V(.25,-1,.15)],Dp={kick:.035,settle:.45,reach:[.5,.64],lift:[.64,.72],pull:[.72,.84],eject:.8,push:[.92,1.02],drop:[1.02,1.1],release:[1.12,1.28],lower:1.7},Op=.2,kp=3.5,Ap=.25,jp=.5,Mp=.85,Np=5.5,Pp=.22,Fp={up:5.5,out:4.2},Ip=3.6,Lp=-2.6,Rp=4.5,zp=3.2,Bp=.55,Vp=.95,Hp=.36,Up=2,Wp=.25,Gp=.45,Kp=5,qp=.35,Jp=2.6,Yp=.32,Xp=.3,Zp=.45,Qp=.95,$p=.4,em=-.55,tm=.3,nm=new V(0,1,0),rm=new V(1,1,1),im=18,am=3.5,om=9,sm=.7,cm=new V(1,0,0),lm=new V(0,0,1),um=new V,dm=new et,fm=new et,pm=new V,mm=new V,hm=new et,gm=new _n,_m=new _n,vm=[new V,new V],ym=[new V,new V],bm=new V,xm=new V,Sm=new et,Cm=new be,wm=new b,Tm=class{side;root=new H;topHeight;onCrewSplash=null;onDebrisSplash=null;onCrewAboard=null;onPirateHome=null;onReloaded=null;onMended=null;config;water=[];mending=[];props=new Map;units=[];machines=new Map;onMachineLanded=null;galleon;cannons=[];levels=[];decor=[];crew=[];falling=[];boarders=[];away=new Map;unloaded=new Set;reloading=new Map;climbers=[];barrel={up:new V(0,0,1),out:new V(0,1,0),spread:.6,at:(e,t)=>t.set(0,Am(e,this.config.cannonMount.barrelLength),e)};gunXs;dome=null;domeUp=0;domeWanted=!1;domeFlash=0;casings=[];elbows=[new V,new V];beam;hullMaterials=[];angle=0;showcase=null;yaw=0;flash=0;time=0;flooding={side:0,end:0,total:0};list=new V;listTarget=new V;listQuaternion=new et;levelQuaternion=new et;swell=0;swelling=!1;rock=0;rockVelocity=0;windAngle=0;windStrength=0;sinking=null;rockQuaternion=new et;sinkQuaternion=new et;normal=new V;markHull=null;markFrame=new _n;tilt=new et;heading=new et;constructor(e,t){this.side=e,this.config=t;let n=Et[e],r=Em(t);this.gunXs=[...t.gunners.map(e=>e.x),...r].sort((e,t)=>e-t),this.galleon=dt(n,t.ship.deckHeight,t.gunners,r,t.ship.model),this.topHeight=ht(an(t.ship.model),t.ship.deckHeight),this.beam=an(t.ship.model).beam,this.galleon.root.traverse(e=>{if(e instanceof B){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e instanceof S&&!this.hullMaterials.includes(e)&&(e.userData.baseEmissive=e.emissive.clone(),this.hullMaterials.push(e))}}),this.root.add(this.galleon.root),t.gunners.forEach((e,t)=>this.addGun(t,e.unit));for(let e of r){let n=cn(t.cannonMount);n.yaw.position.copy(Um(wo({x:e},t.ship,t.cannonMount))),n.pitch.rotation.x=-np,n.yaw.traverse(e=>e.castShadow=!1),this.root.add(n.yaw),this.decor.push({x:e,gun:n.yaw})}}addGun(e,t){let{config:n}=this,r=cn(n.cannonMount);n.units[t]?.hired&&Wt(r);let i=new H;i.position.copy(Um(wo(Hn(n,e),n.ship,n.cannonMount))),i.add(r.yaw),this.root.add(i),this.levels.push(i),this.cannons.push({...r,colors:r.materials.map(e=>e.color.clone()),recoil:1,tremble:0,drawBack:0,drawn:0,spring:null,springFrom:0,gear:null}),this.crew.push(this.createCrew(e,t))}hire(e,t){let n=this.config.gunners.length;if(this.cannons.length!==n)return;let r=Hn(this.config,n).x;for(let e of this.decor)Math.abs(e.x-r)<.5&&(e.gun.visible=!1);this.addGun(n,e),t&&(this.crew[n].rising=0)}dismiss(){let e=this.config.gunners.length;if(this.cannons.length<=e)return;let t=this.crew.pop();t.root.removeFromParent(),t.mesh.geometry.dispose(),t.mesh.material.dispose();let n=this.levels.pop();n.removeFromParent(),Rm(n),this.cannons.pop(),this.units.length=e,this.props.delete(e);for(let e of this.decor)e.gun.visible=!0}setCrew(e){e.forEach((e,t)=>{if(t>=this.crew.length||this.units[t]===e)return;let n=this.crew[t];n.root.removeFromParent(),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.crew[t]=this.createCrew(t,e),this.setCrewVisible(t,n.wantVisible)})}createCrew(e,t){let{config:n}=this,r=Nu(t),i=xt(this.side,r.outfit,n.crew.height,r.style);i.root.rotation.order=`YXZ`,this.root.add(i.root);let a=this.levels[e].position.clone(),o={...i,alive:!0,fall:0,flying:null,gone:!1,wantVisible:!0,home:new V(a.x,n.ship.deckHeight,n.crew.standZ),pivot:a,reach:n.cannonMount.pivotZ-n.crew.standZ,yaw:0,pitch:0,grips:[new V,new V],rising:null,rifle:null,tablet:null,cloud:null,saluting:null,diving:null};return this.units[e]=t,this.dressCannon(e,t),this.placeCrew(o,0),o}dressCannon(e,t){let n=this.cannons[e];if(n.gear)for(let e of[n.gear.barrel,n.gear.deck])e.removeFromParent(),Rm(e);let r=this.config.cannons[this.config.units[t]?.cannon??``];n.gear=Tu(pu(r),this.config.cannonMount,r?.chain?Cu(r.ballRadius,r.chain.reach):1),n.gear?.hang&&(n.gear.hang.rotation.x=-n.pitch.rotation.x),n.gear&&(n.pitch.add(n.gear.barrel),n.yaw.add(n.gear.deck))}get ringAngle(){return this.angle}setShowcase(e){this.showcase=e}get headingYaw(){return this.showcase?.yaw??this.yaw}get isSinking(){return this.sinking!==null}setAngle(e){this.angle=e;let t=vo(e,this.config.arena.orbitRadius).forward;this.yaw=Math.atan2(-t.z,t.x)}setWind(e,t){this.windAngle=e,this.windStrength=t}setAim(e,t){let n=this.cannons[e];n.yaw.rotation.y=t.yaw,n.pitch.rotation.x=-t.pitch,n.gear?.hang&&(n.gear.hang.rotation.x=t.pitch);let r=this.crew[e];r.alive&&!r.flying&&(r.yaw=t.yaw,r.pitch=t.pitch)}setTremble(e,t){this.cannons[e].tremble=t}setDrawBack(e,t){this.cannons[e].drawBack=t}setCrewAlive(e,t,n=!0,r){let i=this.crew[e],a=this.cannons[e];if(i.alive=t,t||this.putAwayRifle(i),i.fall=t?0:n?Math.min(i.fall,.999):1,i.flying=null,i.rising=null,i.saluting=null,i.diving=null,i.gone=!1,this.placeCrew(i,0),i.root.visible=i.wantVisible,i.setDead(!t),a.materials.forEach((e,t)=>e.color.copy(a.colors[t])),t||a.materials.forEach(e=>e.color.lerp(tp,.6)),!t&&!n&&(i.gone=!0,i.root.visible=!1),!t&&n&&r){this.root.updateMatrixWorld(!0);let e=this.root.worldToLocal(r.clone()),t=i.root.position.clone().sub(e).setY(0);t.lengthSq()<1e-4&&t.set(0,0,-1),t.normalize(),t.z>-.4&&(t.z=-.4),t.normalize(),i.flying=t.multiplyScalar(6.4).setY(7.5)}}sacrificeCrew(e){let t=this.crew[e];t&&!t.gone&&(this.putAwayRifle(t),t.alive=!1,t.fall=0,t.flying=null,t.rising=null,t.saluting=0,t.diving=null,t.setDead(!1))}setCrewVisible(e,t){t||this.dropClimbers(e,!0);let n=this.crew[e];n.wantVisible=t,n.root.visible=t&&!n.gone}setDome(e){this.domeWanted=e,e&&!this.dome&&(this.dome=this.createDome())}domeHit(){this.domeFlash=1,this.domeWanted=!1}createDome(){let{center:e,radii:t}=Cl(this.config),n=new Ge({uniforms:{uOpacity:{value:0},uFlash:{value:0},uTime:{value:0},uColor:{value:new y(`#5fbfff`)}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vView;
        varying vec2 vUv;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vView = -mv.xyz;
          vNormal = normalMatrix * normal;
          vUv = uv;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform float uOpacity;
        uniform float uFlash;
        uniform float uTime;
        uniform vec3 uColor;
        varying vec3 vNormal;
        varying vec3 vView;
        varying vec2 vUv;
        void main() {
          float rim = pow(1.0 - abs(dot(normalize(vNormal), normalize(vView))), 2.2);
          // A net of hexagons over it, shimmering upward.
          vec2 p = vec2(vUv.x * 42.0, vUv.y * 14.0 - uTime * 0.6);
          vec2 h = vec2(1.0, 1.732);
          vec2 a = mod(p, h) - h * 0.5;
          vec2 b = mod(p - h * 0.5, h) - h * 0.5;
          vec2 g = dot(a, a) < dot(b, b) ? a : b;
          float d = max(abs(g.x) * 0.866 + abs(g.y) * 0.5, abs(g.y));
          float net = smoothstep(0.38, 0.47, d);
          float alpha = uOpacity * (0.06 + 0.5 * rim + 0.22 * net) + uFlash * (0.35 + 0.5 * net);
          gl_FragColor = vec4(uColor * (1.0 + 1.5 * uFlash) + vec3(uFlash * 0.6), alpha);
        }`,transparent:!0,depthWrite:!1,side:2,blending:2}),r=new B(new $t(1,48,20,0,Math.PI*2,0,Math.PI/2),n);return r.scale.set(t.x,t.y,t.z),r.position.set(e.x,e.y,e.z),r.renderOrder=6,r.visible=!1,this.root.add(r),r}updateDome(e){let t=this.dome;if(!t)return;this.domeUp=z.clamp(this.domeUp+(this.domeWanted?e/.6:-e/.35),0,1),this.domeFlash=Math.max(0,this.domeFlash-e*1.6),t.visible=this.domeUp>.001||this.domeFlash>.001,t.material.uniforms.uOpacity.value=this.domeUp*(.85+.15*Math.sin(this.time*3)),t.material.uniforms.uFlash.value=this.domeFlash,t.material.uniforms.uTime.value=this.time,t.scale.setScalar(1);let{radii:n}=Cl(this.config),r=(1+.04*this.domeFlash)*(.92+.08*this.domeUp);t.scale.set(n.x*r,n.y*r,n.z*r)}setRolling(e){this.swelling=e}setRiggingVisible(e){this.galleon.rigging.visible=e}flashHit(e=1){this.flash=1,this.rockVelocity-=.26*e}recoil(e){let t=this.cannons[e];t.recoil=0,t.tremble=0,t.drawn>.02?(t.spring=0,t.springFrom=t.drawn):t.spring!==0&&(t.spring=null),t.drawBack=0,t.drawn=0,this.rockVelocity+=.06}breakMast(e,t,n){let r=this.galleon.breakMast(e,t);if(!r)return null;let i=new V(n.x,0,n.z);return i.lengthSq()>1e-6&&i.normalize().multiplyScalar(.6),--i.z,i.normalize(),this.falling.push({piece:r,origin:r.object.position.clone(),toward:i,axis:new V().crossVectors(nm,i).normalize(),slide:Math.max(r.length/2,this.beam+.8),angle:.05,spin:.45,velocity:null,worldAxis:new V,splashed:!1,age:0}),this.root.updateMatrixWorld(!0),r.object.getWorldPosition(new V)}addHole(e,t,n){this.root.updateMatrixWorld(!0);let r=this.hullSpot(e,t);return this.galleon.addHole(r.point,r.normal,n,this.config.presentation.maxHoleSize)}hullSpot(e,t){let n=this.findHull(e,this.inward(e),6);if(n&&n.point.distanceTo(e)<=ap)return n;let r=t.clone().normalize(),i=this.findHull(e.clone().addScaledVector(r,-3),r,8);return n&&(!i||n.point.distanceToSquared(e)<=i.point.distanceToSquared(e))?n:i??this.galleon.nearestHull(e)}inward(e){return new V(0,e.y>this.config.ship.deckHeight+.5?-1:0,-Math.sign(e.z)||-1).normalize()}markSpot(e,t,n,r,i){let a=r===void 0?void 0:this.config.ship.masts[r];if(e===`hull`){let e=this.markHull,r=e?e.point.distanceTo(t):1/0;(!e||r>op||e.direction.angleTo(n)>sp)&&(!e||r>lp||this.time-e.at>=cp)&&(this.markHull={point:t.clone(),direction:n.clone(),at:this.time,spot:this.hullSpot(t,n)});let a=this.markHull;i.normal.copy(a.spot.normal),i.point.copy(t).sub(a.point),i.point.addScaledVector(i.normal,-i.point.dot(i.normal)).add(a.spot.point)}else e===`mast`&&a?Au(t,n,a.x,a.radius,i):(i.point.copy(t),i.normal.copy(n).negate().normalize());this.markFrame.compose(this.root.position,this.root.quaternion,this.root.scale),i.point.applyMatrix4(this.markFrame),i.normal.transformDirection(this.markFrame)}takeOnWater(e,t){let{ship:n}=this.config,r=t*(1-.5*z.smoothstep(e.y,n.deckHeight-.5,n.deckHeight+1.5));this.water.push({point:e.clone(),weight:r}),this.refreshList()}drainNear(e){if(this.water.length===0)return;let t=this.water.reduce((t,n)=>t.point.distanceTo(e)<n.point.distanceTo(e)?t:n);t.point.distanceTo(e)>3||(this.water.splice(this.water.indexOf(t),1),this.refreshList())}refreshList(){let{ship:e,presentation:t}=this.config,n=an(e.model),r=(n.bow-n.stern)/2;this.flooding.side=this.flooding.end=this.flooding.total=0;for(let{point:e,weight:t}of this.water)this.flooding.side+=t*z.clamp(e.z/n.beam,-1,1),this.flooding.end+=t*z.clamp((e.x-(n.bow+n.stern)/2)/r,-1,1),this.flooding.total+=t;let i=Math.max(1e-6,e.hp);this.listTarget.set(z.degToRad(t.listMaxDeg)*z.clamp(this.flooding.side/(.5*i),-1,1),-z.degToRad(t.trimMaxDeg)*z.clamp(this.flooding.end/(.5*i),-1,1),t.listSink*z.clamp(this.flooding.total/i,0,1))}tearSail(e,t,n,r,i){let a=this.galleon.sails.findIndex(n=>n.mast===e&&n.sail===t);if(a<0)return null;let o=this.galleon.sails[a].mesh;this.root.updateMatrixWorld(!0);let s=r.clone().normalize();wm.set(n.clone().addScaledVector(s,-4),s),wm.far=8;let[c]=wm.intersectObject(o,!1),l,u;if(c?.face)l=o.worldToLocal(c.point.clone()),u=c.face.normal.clone();else{let e=o.geometry.getAttribute(`position`),t=o.geometry.getAttribute(`normal`),r=o.worldToLocal(n.clone()),i=0,a=1/0;for(let t=0;t<e.count;t++){let n=um.fromBufferAttribute(e,t).distanceToSquared(r);n<a&&(a=n,i=t)}l=new V().fromBufferAttribute(e,i),u=new V().fromBufferAttribute(t,i)}return this.galleon.tearSail(a,l,u,i),o.localToWorld(l.clone())}settleList(){this.list.copy(this.listTarget)}reviveCrew(e){this.setCrewAlive(e,!0,!1);let t=this.crew[e];return t.rising=0,t.root.visible=t.wantVisible,t.root.position.copy(this.riseFrom(t)),this.root.updateMatrixWorld(!0),this.root.localToWorld(this.riseFrom(t)).setY(0)}riseFrom(e){return new V(e.home.x,-.8,-(this.beam+1.6))}repair(e,t,n){this.root.updateMatrixWorld(!0);let r=[],i=[],a=this.galleon.holes.filter(e=>!this.mending.some(t=>t.kind===`hole`&&t.center===e.center));for(let t=0;t<e&&a.length>0;t++){let e=a.splice(Math.floor(Math.random()*a.length),1)[0];this.mending.push({kind:`hole`,center:e.center,radius:e.radius,t:0,delay:r.length*.25}),r.push(this.root.localToWorld(e.center.clone())),i.push(e.center)}for(let e of t){let t=this.galleon.sails.findIndex(t=>t.mast===e.mast&&t.sail===e.sail);t<0||(this.mending.push({kind:`tear`,sail:t,x:e.x,y:e.y,t:0,delay:r.length*.25}),r.push(this.root.localToWorld(new V(e.x,e.y,0))))}for(let e of n){let t=this.galleon.mastHeight(e);t&&(this.galleon.sails.forEach((t,n)=>{t.mast===e&&!Lm(t.mesh,this.galleon.root)&&this.galleon.clearTears(n)}),this.mending.push({kind:`mast`,index:e,from:t.standing,to:t.top,t:0,delay:r.length*.25}),r.push(this.root.localToWorld(new V(this.config.ship.masts[e]?.x??0,t.standing,0))))}return{spots:r,closed:i}}nearestHole(e){let t=null;for(let n of this.galleon.holes)(!t||n.center.distanceToSquared(e)<t.distanceToSquared(e))&&(t=n.center);return t}board(e,t,n,r,i){let a=xt(t,Mu.outfit,this.config.crew.height,Mu.style);a.root.rotation.order=`YXZ`,this.root.updateMatrixWorld(!0);let o=this.root.worldToLocal(e.clone());o.y=this.config.ship.deckHeight,a.root.position.copy(o),this.root.add(a.root);let s=this.root.worldToLocal(i.clone()).z>=0?1:-1;this.boarders.push({model:a,from:o,target:n,punch:Math.max(Ap,r),homeSide:s,t:0,rail:null,stride:0,flying:null})}get boarding(){return this.boarders.length>0}updateBoarders(e){let t=this.config.ship.deckHeight;for(let n=this.boarders.length-1;n>=0;n--){let r=this.boarders[n];r.t+=e;let i=r.model.root,a={time:this.time,grips:null,brace:0,flinch:0,flail:0,limp:0,lookPitch:0};if(r.flying){if(r.flying.y-=18*e,i.position.addScaledVector(r.flying,e),i.position.y<-.3){this.onCrewSplash?.(i.getWorldPosition(um).setY(0)),Im(r.model),this.boarders.splice(n,1);continue}i.rotation.set(Math.atan2(Math.hypot(r.flying.x,r.flying.z),r.flying.y),r.homeSide>0?0:Math.PI,0),i.updateMatrixWorld(!0),Yt(r.model,{...a,upright:!0,...Pm(i)});continue}if(r.rail){this.overTheRail(r,r.rail,e);continue}let o=r.target===null?null:this.crew[r.target],s=o?o.root.position:r.from,c=z.clamp((r.t-Ap)/Math.max(.05,r.punch-Ap),0,1),l=um.copy(s).sub(r.from).setY(0),u=l.length(),d=u>Mp?(u-Mp)/u:0;if(i.position.copy(r.from).addScaledVector(l,d*Dm(c)),i.position.y=t+(c>0&&c<1?Math.abs(Math.sin(r.t*14))*.12:0),u>.001&&i.rotation.set(r.t<Ap?-.5*(1-r.t/Ap):0,Math.atan2(l.x,l.z),0),i.updateMatrixWorld(!0),r.t>=r.punch&&o){let e=o.chest.getWorldPosition(pm),t=Math.sin((r.t-r.punch)*22)>0,n=r.model.chest.getWorldPosition(mm).lerp(e,.35);Yt(r.model,{...a,upright:!0,grips:t?[e,n]:[n,e]})}else c>0&&c<1&&d>0?this.strideAt(r.model,r.t*16,.32):Yt(r.model,{...a,brace:r.t<Ap?1:.3,upright:r.t>=Ap});if(r.t>=r.punch+jp){let e=r.homeSide>0?this.gapNear(i.position.x):i.position.x,{top:n,edge:a}=this.railAt(e,r.homeSide);r.rail={spot:new V(e,t,r.homeSide*(a-.55)),top:n,edge:a,from:new V,hop:null}}}}overTheRail(e,t,n){let r=e.model.root,i=this.config.ship.deckHeight;if(t.hop===null){let a=um.copy(t.spot).sub(r.position).setY(0),o=a.length(),s=Math.min(o,Np*n);o>1e-4&&(r.position.addScaledVector(a,s/o),r.rotation.set(0,Math.atan2(a.x,a.z),0)),e.stride+=s*Ip,r.position.y=i+Math.abs(Math.sin(e.stride))*.08,this.strideAt(e.model,e.stride,.4),o-s<.02&&(t.hop=0,t.from.copy(r.position).setY(i));return}t.hop+=n;let a=Math.min(1,t.hop/Pp);r.position.lerpVectors(t.from,um.set(t.spot.x,t.top,e.homeSide*(t.edge-.12)),a),r.position.y+=Math.sin(Math.PI*a)*.45,r.rotation.set(0,e.homeSide>0?0:Math.PI,0),r.updateMatrixWorld(!0),r.localToWorld(ym[0].set(-.13,.3*Math.sin(Math.PI*a)+.09,.1)),r.localToWorld(ym[1].set(.13,.3*Math.sin(Math.PI*a)+.09,.1)),Yt(e.model,{time:this.time,grips:null,brace:0,flinch:0,flail:0,limp:0,lookPitch:-.3,feet:ym}),a>=1&&(e.flying=new V(0,Fp.up,e.homeSide*Fp.out))}strideAt(e,t,n){let r=e.root;r.updateMatrixWorld(!0);for(let e of[0,1]){let i=e===0?-1:1,a=Math.sin(t+e*Math.PI),o=Math.max(0,Math.cos(t+e*Math.PI));r.localToWorld(ym[e].set(i*.13,.09+.2*o,n*a)),r.localToWorld(vm[e].set(i*.27,.9,-.8*n*a))}Yt(e,{time:this.time,grips:vm,feet:ym,brace:0,flinch:0,flail:0,limp:0,lookPitch:0,upright:!0})}gapNear(e){let t=this.gunXs;return[t[0]-2.2,...t.slice(1).map((e,n)=>(e+t[n])/2),t[t.length-1]+2.2].reduce((t,n)=>Math.abs(n-e)<Math.abs(t-e)?n:t)}hullFace(e,t){let n=[];for(let r=Lp;r<16;r+=Wp){let i=this.findHull(um.set(e,r,t*40),xm.set(0,0,-t),40);if(i)n.push(Math.abs(i.point.z));else if(n.length>0)break;else n.push(NaN)}let r=n.findIndex(e=>!Number.isNaN(e));if(r<0)return{face:[this.beam],top:this.config.ship.deckHeight+1};n.fill(n[r],0,r);let i=Lp+(n.length-1)*Wp,a=this.findHull(um.set(e,i+1,t*(n[n.length-1]-.06)),xm.set(0,-1,0),2);return{face:n,top:a?a.point.y:i}}railAt(e,t){let{face:n,top:r}=this.hullFace(e,t);return{top:r,edge:jm(n,r)}}roundFired(e){let t=this.cannons[e]?.gear;t&&(t.barrel.visible=!1,this.unloaded.add(e),this.reloading.delete(e))}reloadGuns(){let e=0;for(let t of[...this.unloaded].sort((e,t)=>e-t)){let n=this.cannons[t]?.gear;n&&this.crew[t]?.alive&&(this.unloaded.delete(t),this.reloading.set(t,-.18*e++),n.barrel.visible=!1)}}updateReloads(e){for(let[t,n]of this.reloading){let r=this.cannons[t]?.gear;if(!r){this.reloading.delete(t);continue}let i=n+e;if(this.reloading.set(t,i),i<0)continue;let a=Math.min(1,i/Zp),o=Math.max(.01,Om(a));if(r.barrel.visible=!0,r.barrel.scale.setScalar(o),r.barrel.position.z=this.config.cannonMount.barrelLength*(1-o)+.35*(1-Dm(a)),a<1)continue;r.barrel.position.z=0,r.barrel.scale.setScalar(1),this.reloading.delete(t);let s=new V;this.muzzleWorld(t,s,new V),this.onReloaded?.(s)}}pirateFired(e){this.dropClimbers(e),this.away.set(e,(this.away.get(e)??0)+1);let t=this.cannons[e]?.gear;t&&(t.barrel.visible=!1)}piratesReturn(e){if(this.away.size===0)return;this.root.updateMatrixWorld(!0);let t=this.root.worldToLocal(e.clone()).z>=0?1:-1,n=0;for(let[e,r]of this.away)for(let i=0;i<r;i++)this.climbers.push(this.newClimber(e,t,i,-.7*n++));this.away.clear()}newClimber(e,t,n,r){let i=xt(this.side,Mu.outfit,this.config.crew.height,Mu.style);i.root.visible=!1,this.root.add(i.root);let a=this.climbX(e,t)+(t>0?0:n*.9),{face:o,top:s}=this.hullFace(a,t);return{model:i,unitIndex:e,x:a,sign:t,hull:{up:nm,out:new V(0,0,t),spread:1,at:(e,n)=>n.set(a,e,t*jm(o,e))},top:s,edge:jm(o,s),stage:`climb`,t:r,h:Lp,surfaced:!1,from:new V,fromQ:new et,stride:0}}climbX(e,t){let n=this.levels[e].position.x;if(t>0){let e=this.gunXs.filter(e=>e<n-.1);return e.length>0?(e[e.length-1]+n)/2:n-2.2}let r=n-Qp,i=e=>this.config.ship.masts.every(t=>{let n=this.config.cannonMount.pivotZ-$p,i=z.clamp(this.beam/(this.beam+n),0,1);return Math.abs(z.lerp(e,r,i)-t.x)>t.radius+.6});for(let e of[0,-.9,.9,-1.8,1.8,-2.7,2.7])if(i(r+e))return r+e;return r}dropClimbers(e,t=!1){for(let n=this.climbers.length-1;n>=0;n--){if(this.climbers[n].unitIndex!==e)continue;Im(this.climbers[n].model),this.climbers.splice(n,1);let r=this.cannons[e]?.gear;t&&r&&(r.barrel.visible=!0)}}updateClimbers(e){for(let t=this.climbers.length-1;t>=0;t--){let n=this.climbers[t];if(n.t+=e,n.t<0||(n.model.root.visible=!0,!this.updateClimber(n,e)))continue;let r=this.cannons[n.unitIndex].gear;r&&(r.barrel.visible=!0),this.onPirateHome?.(n.model.root.getWorldPosition(um),`in`),Im(n.model),this.climbers.splice(t,1)}}updateClimber(e,t){let n=e.model.root,r=this.config.ship.deckHeight,i=this.cannons[e.unitIndex],a=this.config.cannonMount.barrelLength,o={time:this.time,grips:null,brace:0,flinch:0,flail:0,limp:0,lookPitch:0,upright:!0};switch(e.stage){case`climb`:{e.h+=t*(e.h<-1.6?Rp:zp);let r=e.top-Up;return!e.surfaced&&e.h+1.5>0&&(e.surfaced=!0,this.root.updateMatrixWorld(!0),this.onPirateHome?.(this.root.localToWorld(um.set(e.x,0,e.sign*(e.edge+.6))),`surface`)),e.h=Math.min(e.h,r),Nm(e.model,e.hull,e.h,this.time),e.h>=r&&Fm(e,`vault`,n),!1}case`vault`:{let t=Math.min(1,e.t/Gp),i=um.set(e.x,e.top+1.8,e.sign*e.edge),a=mm.set(e.x,r,e.sign*(e.edge-.9)),s=1-t;n.position.set(0,0,0).addScaledVector(e.from,s*s).addScaledVector(i,2*s*t).addScaledVector(a,t*t),n.updateMatrixWorld(!0);for(let r of[0,1]){let i=r===0?-1:1;this.root.localToWorld(vm[r].set(e.x+i*.25,e.top,e.sign*(e.edge-.05))),n.localToWorld(ym[r].set(i*.13,.09+.45*Math.sin(Math.PI*Math.min(1,t*1.25)),.15))}return Yt(e.model,{...o,grips:t<.55?vm:null,feet:ym}),t>=1&&(n.position.copy(a),this.onPirateHome?.(n.getWorldPosition(um),`aboard`),Fm(e,`walk`,n)),!1}case`walk`:{this.root.updateMatrixWorld(!0);let a=this.root.worldToLocal(i.yaw.localToWorld(um.set(-.95,-this.config.cannonMount.pivotHeight,-.4))).setY(r).sub(n.position).setY(0),o=a.length(),s=Math.min(o,Kp*t);return o>1e-4&&(n.position.addScaledVector(a,s/o),n.quaternion.setFromAxisAngle(nm,Math.atan2(a.x,a.z))),e.stride+=s*Ip,n.position.y=r+Math.abs(Math.sin(e.stride))*.06,this.strideAt(e.model,e.stride,.36),o-s<.02&&(i.pitch.attach(n),Fm(e,`hop`,n)),!1}case`hop`:{let t=Math.min(1,e.t/qp),r=t*t*(3-2*t);return Mm(this.barrel,em,um,dm),n.position.lerpVectors(e.from,um,r),n.position.y+=Math.sin(Math.PI*t)*.6,n.quaternion.slerpQuaternions(e.fromQ,dm,r),n.updateMatrixWorld(!0),n.localToWorld(ym[0].set(-.13,.4,.2)),n.localToWorld(ym[1].set(.13,.4,.2)),Yt(e.model,{...o,feet:ym}),t>=1&&(e.h=em,Fm(e,`crawl`,n)),!1}case`crawl`:{let r=a-this.config.crew.height;return e.h=Math.min(r,e.h+Jp*t),Nm(e.model,this.barrel,e.h,this.time),e.h>=r&&Fm(e,`flip`,n),!1}case`flip`:{let t=Math.min(1,e.t/Yp),r=pm.set(0,km,a);return Sm.setFromAxisAngle(cm,Math.PI*t*t*(3-2*t)),n.position.copy(e.from).sub(r).applyQuaternion(Sm).add(r),n.quaternion.copy(Sm).multiply(e.fromQ),n.updateMatrixWorld(!0),i.pitch.localToWorld(vm[0].set(-.15,km-.02,a-.03)),i.pitch.localToWorld(vm[1].set(.15,km-.02,a-.03)),Yt(e.model,{...o,grips:vm}),t>=1&&Fm(e,`slide`,n),!1}case`slide`:{let t=Math.min(1,e.t/Xp);n.scale.setScalar(1),n.position.lerpVectors(e.from,um.set(0,0,a+tm),t*t),n.updateMatrixWorld(!0),Yt(e.model,{...o,...Pm(n)});let r=z.lerp(1,.35,z.smoothstep(t,0,.35));return n.scale.set(r,1,r),n.updateMatrixWorld(!0),t>=1}}}setMachine(e,t,n=!1){let r=this.machines.get(e);if(t===!!r)return;if(r){this.root.remove(r.model.root),r.model.dispose(),this.machines.delete(e);return}let i=this.config.ship.machines?.[e];if(!i)return;let a=Lf(e,i.height);a.root.position.set(i.x,this.config.ship.deckHeight,i.z),a.root.traverse(e=>e.castShadow=e instanceof B),this.root.add(a.root),this.machines.set(e,{model:a,drop:n?0:null}),n&&(a.root.position.y+=14)}setRifle(e,t){let n=this.crew[e];if(!n)return;if(t===`none`){n.rifle?.shot==null?this.putAwayRifle(n):n.rifle.spent=!0;return}if(!n.rifle){let e=qf();n.root.add(e.root),n.rifle={model:e,raised:!1,up:0,shot:null,spent:!1}}let r=n.rifle;r.model.root.visible=!0,r.spent=!1,r.raised=t===`aiming`}fireRifle(e){let t=this.crew[e]?.rifle;t?.model.root.visible&&(t.raised=!0,t.up=1,t.shot=0,t.spent=!0)}putAwayRifle(e){let t=e.rifle;t&&(t.model.root.visible=!1,t.raised=!1,t.up=0,t.shot=null,t.spent=!1)}setSulking(e,t){let n=this.crew[e];n&&(!n.cloud&&t&&(n.cloud=zm(),n.cloud.position.y=this.config.crew.height+.75,n.root.add(n.cloud)),n.cloud&&(n.cloud.visible=t))}setTablet(e,t){let n=this.crew[e];n&&(!n.tablet&&t&&(n.tablet=Vm(),n.root.add(n.tablet)),n.tablet&&(n.tablet.visible=t))}rifleMuzzle(e,t){let n=this.crew[e]?.rifle;return n?.model.root.visible?n.model.root.localToWorld(t.copy(Uf.muzzle)):null}crewSpot(e,t){return this.root.localToWorld(t.copy(this.crew[e].home))}rifleLens(e,t){let n=this.crew[e];return!n?.rifle?.model.root.visible||!n.root.visible?null:n.rifle.model.root.localToWorld(t.copy(Uf.lens))}machine(e){return this.machines.get(e)?.model??null}setGunLook(e,t){let n=this.props.get(e),r=t.magnet||t.accuracy||t.extraBalls>0||t.wings||t.charged||t.hotShot;(n||r)&&(n||(n=this.buildGunProps(e),this.props.set(e,n)),n.look=t,n.magnet.visible=t.magnet,n.accuracy.visible=t.accuracy,n.wings.visible=t.wings,n.charge.visible=t.charged,n.hot.visible=t.hotShot,n.extra.children.forEach((e,n)=>e.visible=n<t.extraBalls))}buildGunProps(e){let t=this.cannons[e],n=this.config.cannonMount.barrelLength,r=(e,t)=>new S({color:e,emissive:e,emissiveIntensity:t,roughness:.35,metalness:.2}),i=new H;for(let e=0;e<3;e++){let t=new B(new Le(.42+e*.06,.035,6,28),r(`#b26bff`,1.6));t.position.z=n-.2-e*.32,i.add(t)}let a=new H,o=new B(new Le(.13,.03,6,18),r(`#ffd36e`,.9));o.position.set(0,.52,n-.55);let s=new B(new P(.025,.025,.22,6),r(`#d9a441`,.4));s.position.set(0,.38,n-.55),a.add(o,s);let c=new H,l=new S({color:`#2b3036`,roughness:.4,metalness:.6,emissive:`#ffcf5a`,emissiveIntensity:.35});for(let e=0;e<4;e++){let t=new B(new $t(.2,12,9),l);t.position.set(.85+e%2*.42,-this.config.cannonMount.pivotHeight+.2+Math.floor(e/2)*.33,-.6+e%2*.2),t.castShadow=!0,c.add(t)}let u=new H,d=new Qe;d.moveTo(0,0),d.bezierCurveTo(.35,.15,.85,.5,1.05,.75),d.bezierCurveTo(.8,.55,.6,.5,.45,.42),d.bezierCurveTo(.55,.5,.6,.62,.62,.7),d.bezierCurveTo(.35,.45,.2,.3,0,.18);let f=new le(d),p=new S({color:`#ffffff`,emissive:`#bfe7ff`,emissiveIntensity:.35,side:2,roughness:.6});for(let e of[1,-1]){let t=new B(f,p);t.position.set(e*.38,.2,n*.45),t.rotation.set(0,e>0?Math.PI/2:-Math.PI/2,0),t.scale.set(e,1,1),u.add(t)}let m=new H;for(let e=0;e<2;e++){let t=new B(new Le(.55+e*.12,.03,5,24),r(`#ff3b3b`,2.2));t.rotation.x=Math.PI/2,t.position.z=-.1+e*.25,m.add(t)}let h=new H,g=new B(new P(.37,.39,n*.62,20,1,!0).rotateX(Math.PI/2),new S({color:`#ff5a1f`,emissive:`#ff4a12`,emissiveIntensity:1.3,transparent:!0,opacity:.55,side:2,depthWrite:!1}));return g.position.z=n*.55,h.add(g),t.pitch.add(i,a,u,m,h),t.yaw.add(c),{magnet:i,accuracy:a,extra:c,wings:u,charge:m,hot:h,look:{magnet:!1,accuracy:!1,extraBalls:0,wings:!1,charged:!1,hotShot:!1}}}findHull(e,t,n){wm.set(this.root.localToWorld(e.clone()),t.clone().transformDirection(this.root.matrixWorld)),wm.far=n;let[r]=wm.intersectObjects([...this.galleon.hullMeshes],!1);if(!r)return null;let i=r.face?r.face.normal.clone().transformDirection(r.object.matrixWorld):t.clone().negate(),a=new _n().copy(this.root.matrixWorld).invert();return{point:this.root.worldToLocal(r.point.clone()),normal:i.transformDirection(a)}}sink(){this.sinking===null&&(this.sinking=0)}reset(){this.dismiss(),this.sinking=null,this.rock=0,this.rockVelocity=0,this.swell=0,this.swelling=!1,this.domeWanted=!1,this.domeUp=0,this.domeFlash=0,this.flash=0;for(let e of this.falling)e.piece.object.removeFromParent(),e.piece.dispose();this.falling.length=0,this.galleon.restoreMasts(),this.galleon.clearHoles(),this.galleon.clearTears(),this.water.length=0,this.mending.length=0,this.flooding.side=this.flooding.end=this.flooding.total=0,this.list.set(0,0,0),this.listTarget.set(0,0,0);for(let e of this.props.keys())this.setGunLook(e,{magnet:!1,accuracy:!1,extraBalls:0,wings:!1,charged:!1,hotShot:!1});for(let e of[...this.machines.keys()])this.setMachine(e,!1);for(let e of this.crew)this.putAwayRifle(e),e.cloud&&(e.cloud.visible=!1);for(let e of this.casings)e.mesh.removeFromParent();this.casings.length=0;for(let e of this.boarders)e.model.root.removeFromParent();this.boarders.length=0;for(let e of this.climbers)Im(e.model);this.climbers.length=0,this.away.clear(),this.unloaded.clear(),this.reloading.clear();for(let e of this.cannons)e.gear&&(e.gear.barrel.visible=!0,e.gear.barrel.position.z=0,e.gear.barrel.scale.setScalar(1));for(let e of this.hullMaterials)e.emissive.copy(e.userData.baseEmissive);for(let e of this.cannons)e.tremble=0,e.recoil=1,e.drawBack=0,e.drawn=0,e.spring=null;this.crew.forEach((e,t)=>this.setCrewVisible(t,!0)),this.setRiggingVisible(!0)}muzzleWorld(e,t,n){let{pitch:r,drawn:i}=this.cannons[e];r.updateWorldMatrix(!0,!1),t.set(0,0,this.config.cannonMount.barrelLength+i).applyMatrix4(r.matrixWorld),n.set(0,0,1).transformDirection(r.matrixWorld)}fuseWorld(e,t){return this.cannons[e].fuse.getWorldPosition(t)}pivotWorld(e,t){return this.cannons[e].yaw.getWorldPosition(t)}visualOffset(e,t){let n=Hn(this.config,e),r=Um(G(vo(this.angle,this.config.arena.orbitRadius),wo(n,this.config.ship,this.config.cannonMount)));return this.pivotWorld(e,t).sub(r)}update(e,t){this.time+=e;let n=this.showcase??vo(this.angle,this.config.arena.orbitRadius).position,r=t.sample(n.x,n.z,this.normal);this.list.lerp(this.listTarget,1-Math.exp(-e/ip)),this.root.position.set(n.x,r*ep-this.list.z,n.z),this.normal.lerp(nm,.65).normalize(),this.tilt.setFromUnitVectors(nm,this.normal),this.heading.setFromAxisAngle(nm,this.headingYaw),this.rockVelocity+=(-this.rock*30-this.rockVelocity*4)*e,this.rock+=this.rockVelocity*e,this.swell=z.clamp(this.swell+(this.swelling?e:-e)/.8,0,1);let i=this.swell*$f*Math.sin(this.time*2*Math.PI/this.config.cards.rogueWave.swayTime);this.rockQuaternion.setFromAxisAngle(cm,this.rock+i),this.listQuaternion.setFromAxisAngle(cm,this.list.x).multiply(dm.setFromAxisAngle(lm,this.list.y)),this.root.quaternion.multiplyQuaternions(this.tilt,this.heading).multiply(this.rockQuaternion).multiply(this.listQuaternion),this.levelQuaternion.copy(this.listQuaternion).invert();for(let e of this.levels)e.quaternion.copy(this.levelQuaternion);if(this.sinking!==null){this.sinking+=e;let t=Math.min(1,this.sinking/rp),n=t**1.6;this.sinkQuaternion.setFromAxisAngle(cm,-.35*Math.min(1,t*3)),this.root.quaternion.multiply(this.sinkQuaternion),this.sinkQuaternion.setFromAxisAngle(lm,.42*n),this.root.quaternion.multiply(this.sinkQuaternion),this.root.position.y-=26*n+.6*Math.sin(this.time*2)*(1-t)}this.root.updateMatrixWorld(!0),this.galleon.updateHoles();for(let t=this.falling.length-1;t>=0;t--){let n=this.falling[t];this.updateFalling(n,e)||(n.piece.object.removeFromParent(),n.piece.dispose(),this.falling.splice(t,1))}let a=this.headingYaw,o=Math.atan2(Math.cos(this.windAngle)*Math.sin(a)+Math.sin(this.windAngle)*Math.cos(a),Math.cos(this.windAngle)*Math.cos(a)-Math.sin(this.windAngle)*Math.sin(a));if(this.galleon.update(this.time,o,this.windStrength),this.flash>0){this.flash=Math.max(0,this.flash-e*2.5);let t=this.flash;for(let e of this.hullMaterials)e.emissive.copy(e.userData.baseEmissive),e.emissive.r+=.9*t,e.emissive.g+=.15*t,e.emissive.b+=.05*t}for(let t of this.cannons){let n=0;if(t.recoil<1){t.recoil=Math.min(1,t.recoil+e/.75);let r=t.recoil;n=-.6*(r<.1?r/.1:1-Dm((r-.1)/.9))}if(t.drawn+=(t.drawBack-t.drawn)*(1-Math.exp(-e*im)),t.spring!==null){t.spring+=e;let r=t.spring;n=-t.springFrom*Math.exp(-r*om)*Math.cos(2*Math.PI*am*r),r>sm&&(t.spring=null)}else n-=t.drawn;let r=t.tremble*t.tremble*.012;t.pitch.position.set(r*Math.sin(this.time*91),r*Math.sin(this.time*77+1),n+r*Math.sin(this.time*63+2))}this.updateMending(e),this.updateProps();for(let t of this.machines.values()){if(t.drop!==null){t.drop+=e;let n=Math.min(1,t.drop/.55),r=t.model.root.position,i=this.config.ship.deckHeight;r.y=i+14*(1-n*n),n>=1&&(r.y=i,t.drop=null,t.model.root.scale.set(1.15,.8,1.15),this.onMachineLanded?.(t.model.root.getWorldPosition(um)))}else t.model.root.scale.lerp(rm,1-Math.exp(-e*10));t.model.update(this.time,e)}this.crew.forEach((t,n)=>this.updateCrew(t,this.cannons[n],e));for(let e of this.crew)e.cloud?.visible&&Bm(e.cloud,this.time);this.updateDome(e),this.updateBoarders(e),this.updateClimbers(e),this.updateReloads(e),this.updateCasings(e)}standSpot(e,t,n,r=0){let i=e.reach+.22*t;return n.set(e.pivot.x-i*Math.sin(e.yaw),this.config.ship.deckHeight,e.pivot.z-i*Math.cos(e.yaw)),r>0?n.lerp(e.home,r):n}placeCrew(e,t){this.standSpot(e,t,e.root.position),e.root.rotation.set(0,e.yaw,0)}updateCrew(e,t,n){if(e.gone)return;let r={time:this.time,grips:null,brace:0,flinch:0,flail:0,limp:0,lookPitch:e.pitch};if(e.saluting!==null&&this.updateSalute(e,t,n))return;if(e.diving!==null&&e.flying){let t=e.flying;if(e.diving+=n,t.y-=18*n,e.root.position.addScaledVector(t,n),e.root.rotation.set(-Math.min(2.4,e.diving*2),Math.PI,0),e.root.position.y<-.4){e.flying=null,e.diving=null,e.gone=!0,e.root.visible=!1,this.onCrewSplash?.(e.root.getWorldPosition(um).setY(0));return}e.root.updateMatrixWorld(!0);let i=pm.set(0,1,0).transformDirection(e.root.matrixWorld).multiplyScalar(.5*e.scale),a=e.head.getWorldPosition(mm).add(i),o=um.set(1,0,0).transformDirection(e.root.matrixWorld).multiplyScalar(.1*e.scale);e.grips[0].copy(a).sub(o),e.grips[1].copy(a).add(o),Yt(e,{...r,grips:e.grips,upright:!0,lookPitch:.4});return}if(e.rising!==null){e.rising+=n;let t=Math.min(1,e.rising/pp),i=this.standSpot(e,0,um);if(e.root.position.lerpVectors(this.riseFrom(e),i,Dm(t)),e.root.position.y+=Math.sin(Math.PI*t)*3.2,e.root.rotation.set(-Math.PI*2*Dm(t),e.yaw,0),t>=1)e.rising=null,this.placeCrew(e,0),this.onCrewAboard?.(e.root.getWorldPosition(um));else{e.root.updateMatrixWorld(!0),Yt(e,{...r,flail:1});return}}if(e.flying){let t=e.flying;if(t.y-=18*n,e.root.position.addScaledVector(t,n),e.root.rotation.x+=n*9,e.root.rotation.z+=n*5,e.root.position.y<-.4){e.flying=null,e.gone=!0,e.root.visible=!1,this.onCrewSplash?.(e.root.getWorldPosition(um).setY(0));return}e.root.updateMatrixWorld(!0),Yt(e,{...r,flail:1});return}if(!e.alive){e.fall<1&&(e.fall=Math.min(1,e.fall+n*2));let t=e.fall;if(e.root.rotation.set(-(Math.PI/2)*t*t,e.yaw,0),e.root.position.y=this.config.ship.deckHeight+.14*t,!e.root.visible)return;e.root.updateMatrixWorld(!0),Yt(e,{...r,limp:Math.max(.01,t)});return}let i=t.recoil,a=i>=1?0:i<.08?i/.08:1-z.smoothstep(i,.08,.85);if(!(e.rifle?.model.root.visible&&this.updateRifle(e,e.rifle,t,a,n))&&(this.placeCrew(e,a),e.root.visible)){if(e.root.updateMatrixWorld(!0),e.tablet?.visible){e.tablet.localToWorld(e.grips[0].set(-.21,-.02,.02)),e.tablet.localToWorld(e.grips[1].set(.21,-.02,.02)),Yt(e,{...r,grips:e.grips,upright:!0,lookPitch:-.55});return}e.grips[0].copy(t.grips[0]),e.grips[1].copy(t.grips[1]),t.yaw.localToWorld(e.grips[0]),t.yaw.localToWorld(e.grips[1]),Yt(e,{...r,grips:e.grips,brace:t.tremble,flinch:a})}}updateSalute(e,t,n){let r=e.saluting+=n;if(r>=1.5)return e.saluting=null,e.diving=0,e.flying=hp.clone(),t.materials.forEach((e,n)=>e.color.copy(t.colors[n]).lerp(tp,.6)),!1;let i=z.smoothstep,a=i(r,0,.3),o=i(r,.1,.45)-i(r,1.05,1.3),s=i(r,1.05,mp);if(this.standSpot(e,0,e.root.position),e.root.position.y+=.25*i(r,1.25,mp)*Math.sin(Math.PI*i(r,1.25,mp)),e.root.rotation.set(0,z.lerp(e.yaw,Math.PI,s),0),!e.root.visible)return!0;e.root.updateMatrixWorld(!0);let c=[t.grips[0].clone(),t.grips[1].clone()].map(e=>t.yaw.localToWorld(e)),l=e.head.getWorldPosition(pm).add(mm.set(-.09,.06,.13).multiplyScalar(e.scale).applyQuaternion(e.root.getWorldQuaternion(hm))),u=e.hips.getWorldPosition(um).add(mm.set(.22,-.28,.02).multiplyScalar(e.scale).applyQuaternion(e.root.getWorldQuaternion(hm)));return e.grips[0].copy(c[0]).lerp(l,o),e.grips[1].copy(c[1]).lerp(u,a),Yt(e,{time:this.time,grips:e.grips,brace:0,flinch:0,flail:0,limp:0,lookPitch:0,upright:a,elbows:[mm.set(-.85,.25*o,.2),um.set(.75,-.35,-.55)]}),!0}updateRifle(e,t,n,r,i){t.up=z.clamp(t.up+(t.raised?i:-i)/gp,0,1);let a=Dp,o=z.smoothstep,s=0,c=0,l=0,u=0,d=!1;if(t.shot!==null){let e=t.shot,n=t.shot+=i;s=n<a.kick?n/a.kick:1-o(n,a.kick,a.settle),c=o(n,a.reach[0],a.reach[1])-o(n,a.release[0],a.release[1]),l=o(n,a.lift[0],a.lift[1])-o(n,a.drop[0],a.drop[1]),u=o(n,a.pull[0],a.pull[1])-o(n,a.push[0],a.push[1]),d=e<a.eject&&n>=a.eject,n>=a.lower&&(t.raised=!1),n>=a.lower&&t.up===0&&(t.shot=null)}if(t.spent&&t.shot===null&&t.up===0)return this.putAwayRifle(e),!1;let f=t.up,p=o(f,0,.3),m=o(f,.3,.65),h=o(f,.65,1),g=o(f,.3,1),_=_p*g;this.standSpot(e,r*(1-p),e.root.position,g),e.root.rotation.set(0,e.yaw-_,0),e.root.updateMatrixWorld(!0);let v=t.model.root;if(f<.3?this.slungPose(e,v.position,v.quaternion):f<.65?(this.slungPose(e,v.position,v.quaternion),v.position.lerp(xp,m),v.quaternion.slerp(Sp,m),v.position.add(pm.set(-.18,.22,.05).multiplyScalar(Math.sin(Math.PI*m)))):(this.aimPose(e.pitch,_,s,c,pm,fm),v.position.lerpVectors(xp,pm,h),v.quaternion.slerpQuaternions(Sp,fm,h)),t.model.bolt.rotation.z=-1.15*l,t.model.bolt.position.z=-.1*u,v.updateMatrixWorld(!0),d&&this.ejectCase(t),!e.root.visible)return!0;let[y,b]=e.grips;n.yaw.localToWorld(y.copy(n.grips[0])),n.yaw.localToWorld(b.copy(n.grips[1]));let x=v.localToWorld(pm.copy(Uf.carry)),S=v.localToWorld(mm.copy(Uf.trigger));f<.3?y.lerp(x,p):y.lerpVectors(x,S,o(f,.48,.65)),c>0&&y.lerp(t.model.bolt.localToWorld(pm.copy(Wf)),c),b.lerp(e.root.localToWorld(pm.copy(Cp)),p).lerp(v.localToWorld(mm.copy(Uf.fore)),o(f,.42,.62));for(let e of[0,1])this.elbows[e].copy(wp[e]).lerp(Tp[e],p*(1-h)).lerp(Ep[e],h);return Yt(e,{time:this.time,grips:e.grips,brace:n.tremble*(1-p),flinch:r*(1-p),flail:0,limp:0,lookPitch:e.pitch,upright:g,headTurn:_,sight:o(f,.8,1),kick:s,elbows:this.elbows}),!0}slungPose(e,t,n){gm.copy(e.root.matrixWorld).invert().multiply(e.chest.matrixWorld);let r=pm.copy(Uf.middle).applyQuaternion(bp).divideScalar(e.scale).negate().add(yp);_m.compose(r,bp,mm.setScalar(1/e.scale)),gm.multiply(_m).decompose(t,n,mm)}aimPose(e,t,n,r,i,a){a.setFromEuler(Cm.set(-e-Op*n,0,.18*r,`YXZ`)),i.copy(Uf.butt).applyQuaternion(a).negate().add(vp),i.add(mm.set(0,0,-.07*n).applyQuaternion(a)),dm.setFromAxisAngle(nm,t),i.applyQuaternion(dm),a.premultiply(dm)}ejectCase(e){let t=Jf(),n=e.model.root;this.root.updateMatrixWorld(!0),t.position.copy(this.root.worldToLocal(n.localToWorld(pm.copy(Uf.port))));let r=dm.copy(this.root.quaternion).invert().multiply(n.getWorldQuaternion(fm));t.quaternion.copy(r).multiply(fm.setFromAxisAngle(nm,-Math.PI/2));let i=new V(-1.7-Math.random()*.4,1.6+Math.random()*.4,-.3).applyQuaternion(r);this.root.add(t),this.casings.push({mesh:t,velocity:i,spin:new V(14,3,9),age:0})}updateCasings(e){let t=this.config.ship.deckHeight+.012;for(let n=this.casings.length-1;n>=0;n--){let r=this.casings[n];r.age+=e,r.velocity.y-=9.8*e,r.mesh.position.addScaledVector(r.velocity,e),r.mesh.rotateX(r.spin.x*e).rotateY(r.spin.y*e).rotateZ(r.spin.z*e),r.mesh.position.y<t&&(r.mesh.position.y=t,r.velocity.y=Math.abs(r.velocity.y)>.6?-r.velocity.y*.35:0,r.velocity.x*=.6,r.velocity.z*=.6,r.spin.multiplyScalar(.5)),r.age>kp&&(r.mesh.removeFromParent(),r.mesh.geometry.dispose(),r.mesh.material.dispose(),this.casings.splice(n,1))}}updateMending(e){for(let t=this.mending.length-1;t>=0;t--){let n=this.mending[t];n.t+=e;let r=Math.min(1,Math.max(0,(n.t-n.delay)/fp[n.kind]));if(r<=0)continue;let i=r>=1;if(n.kind===`hole`){let e=this.galleon.holes.findIndex(e=>e.center===n.center);e>=0&&(i?this.galleon.removeHole(e):this.galleon.setHoleRadius(e,n.radius*(1-r*r))),i&&(this.drainNear(n.center),this.onMended?.(this.root.localToWorld(n.center.clone()),`hole`))}else if(n.kind===`tear`){let t=this.galleon.sails[n.sail];if(t){this.root.updateMatrixWorld(!0);let r=t.mesh.worldToLocal(this.root.localToWorld(new V(n.x,n.y,0)));this.galleon.mendTear(n.sail,r,i?1:Math.min(.5,e*2.5)),i&&this.onMended?.(this.root.localToWorld(new V(n.x,n.y,0)),`tear`)}}else this.galleon.growMast(n.index,n.from+(n.to-n.from)*Dm(r)),i&&this.onMended?.(this.root.localToWorld(new V(this.config.ship.masts[n.index]?.x??0,n.to,0)),`mast`);i&&this.mending.splice(t,1)}}updateProps(){for(let e of this.props.values()){let t=.5+.5*Math.sin(this.time*6);e.look.magnet&&e.magnet.children.forEach((e,t)=>{let n=1+.12*Math.sin(this.time*5-t*1.2);e.scale.set(n,n,1)}),e.look.charged&&(e.charge.rotation.z=this.time*3,e.charge.children.forEach((e,t)=>e.visible=Math.sin(this.time*23+t*2)>-.6)),e.look.wings&&e.wings.children.forEach((e,t)=>e.rotation.z=(t?-1:1)*.25*Math.sin(this.time*9)),e.look.accuracy&&e.accuracy.scale.setScalar(1+.08*t),e.look.hotShot&&(e.hot.children[0].material.emissiveIntensity=1+.6*t)}}updateFalling(e,t){e.age+=t;let n=e.piece.object,r=Math.max(1,e.piece.length),i=this.config.presentation.fallSpeed**2;if(!e.velocity)return e.spin+=1.5*up*i/r*Math.sin(e.angle)*t,e.angle+=e.spin*t,n.quaternion.setFromAxisAngle(e.axis,e.angle),n.position.copy(e.origin).addScaledVector(e.toward,e.slide*(1-Math.cos(Math.min(e.angle,Math.PI/2)))),e.angle<1.5||(e.velocity=e.toward.clone().multiplyScalar(2).addScaledVector(nm,-e.spin*r*.4).applyQuaternion(this.root.quaternion),e.worldAxis.copy(e.axis).applyQuaternion(this.root.quaternion),e.spin*=.5,this.root.parent?.attach(n),!0);e.velocity.y-=(e.splashed?2:dp*i)*t,e.splashed&&(e.velocity.multiplyScalar(Math.exp(-t*3)),e.velocity.y=Math.max(e.velocity.y,-1.6)),n.position.addScaledVector(e.velocity,t),e.spin*=Math.exp(-t*(e.splashed?3:.5)),n.quaternion.premultiply(dm.setFromAxisAngle(e.worldAxis,e.spin*t));let a=n.localToWorld(um.set(0,r/2,0));return!e.splashed&&a.y<.4&&(e.splashed=!0,this.onDebrisSplash?.(a.clone().setY(0),Math.min(1.6,.55+r/12)),e.velocity.multiplyScalar(.2)),a.y>-(r/2+2)&&e.age<14}};function Em(e){let t=e.gunners.map(e=>e.x).sort((e,t)=>e-t),n=[];for(let e=1;e<t.length;e++)t[e]-t[e-1]>4&&n.push((t[e]+t[e-1])/2);return n}var Dm=e=>1-(1-e)*(1-e),Om=e=>1+2.70158*(e-1)**3+1.70158*(e-1)**2,km=.4;function Am(e,t){return e>t-.12?km:z.lerp(.43,.32,z.clamp((e-.2)/(t-.6),0,1))}function jm(e,t){let n=z.clamp((t-Lp)/Wp,0,e.length-1),r=Math.floor(n);return z.lerp(e[r],e[Math.min(e.length-1,r+1)],n-r)}function Mm(e,t,n,r){xm.copy(e.out).negate(),bm.crossVectors(e.up,xm),r.setFromRotationMatrix(gm.makeBasis(bm,e.up,xm)),e.at(t+Vp,n).addScaledVector(e.out,Hp).addScaledVector(e.up,-.95)}function Nm(e,t,n,r){let i=e.root;Mm(t,n,i.position,i.quaternion),i.updateMatrixWorld(!0);let a=i.parent;bm.crossVectors(t.up,xm.copy(t.out).negate());for(let e of[0,1]){let r=e===0?-1:1;for(let i of[!1,!0]){let o=n/Bp+(e===0===i?.5:0),s=o-Math.floor(o),c=z.smoothstep(s,.6,1),l=i?ym[e]:vm[e];t.at(n+(c-s)*Bp+(i?.32:Up),l).addScaledVector(t.out,(i?.1:.05)+.12*Math.sin(Math.PI*c)).addScaledVector(bm,r*t.spread*(i?.13:.22)),a.localToWorld(l)}}Yt(e,{time:r,grips:vm,feet:ym,brace:0,flinch:0,flail:0,limp:0,lookPitch:.5,upright:!0})}function Pm(e){return e.localToWorld(vm[0].set(-.12,2.3,.05)),e.localToWorld(vm[1].set(.12,2.3,.05)),e.localToWorld(ym[0].set(-.07,.06,-.04)),e.localToWorld(ym[1].set(.07,.06,-.04)),{grips:vm,feet:ym}}function Fm(e,t,n){e.stage=t,e.t=0,e.from.copy(n.position),e.fromQ.copy(n.quaternion)}function Im(e){e.root.removeFromParent(),e.mesh.geometry.dispose(),e.mesh.material.dispose()}function Lm(e,t){for(let n=e;n&&n!==t;n=n.parent)if(!n.visible)return!1;return!0}function Rm(e){e.traverse(e=>{if(e instanceof B){e.geometry.dispose();for(let t of Array.isArray(e.material)?e.material:[e.material])t.dispose()}})}function zm(){let e=new H,t=new S({color:`#8a96a3`,roughness:1});for(let[n,r,i]of[[-.22,0,.2],[.05,.06,.26],[.3,0,.18],[.1,-.05,.2]]){let a=new B(new $t(i,10,8),t);a.position.set(n,r,0),e.add(a)}let n=new ae({color:`#7cc4ff`});for(let t=0;t<6;t++){let r=new B(new P(.012,.012,.14,4),n);r.position.set(-.25+t*.1,-.2,t%2*.08-.04),r.userData.rain=t,e.add(r)}return e}function Bm(e,t){for(let n of e.children){let e=n.userData.rain;if(e===void 0)continue;let r=(t*1.6+e*.37)%1;n.position.y=-.18-r*.6}e.position.x=Math.sin(t*.9)*.03}function Vm(){let e=new H;e.name=`tablet`;let t=new B(new Ve(.46,.32,.04),new S({color:`#1b2128`,roughness:.6})),n=new B(new E(.38,.25),new S({color:`#48e0ff`,emissive:`#48e0ff`,emissiveIntensity:1.4,roughness:.2}));return n.position.z=-.021,n.rotation.y=Math.PI,e.add(t,n),e.position.set(0,1.12,.4),e.rotation.x=-.55,e.traverse(e=>e.castShadow=e instanceof B),e}function Hm(e,t,n){let r=e.clone().normalize(),i=new V().crossVectors(t,r).normalize(),a=new V().crossVectors(r,i);return n.setFromRotationMatrix(new _n().makeBasis(i,a,r))}var Um=e=>new V(e.x,e.y,e.z),Wm=70,Gm=`
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
`,Km=`
  varying vec2 vUv;
  varying float vAlpha;
  void main() {
    float across = 1.0 - abs(vUv.y * 2.0 - 1.0);
    float along = sin(3.14159 * vUv.x);
    gl_FragColor = vec4(1.0, 1.0, 1.0, vAlpha * across * along * along);
    #include <colorspace_fragment>
  }
`,qm=class{mesh;streaks=[];offsets=new Float32Array(210);params=new Float32Array(140);geometry=new sn;direction=new V(1,0,0);speed=0;strength=0;spawnClock=0;forward=new V;constructor(){let e=new E(1,1);this.geometry.index=e.index,this.geometry.setAttribute(`position`,e.attributes.position),this.geometry.setAttribute(`uv`,e.attributes.uv),this.geometry.setAttribute(`offset`,new Jt(this.offsets,3).setUsage(ce)),this.geometry.setAttribute(`params`,new Jt(this.params,2).setUsage(ce)),this.geometry.instanceCount=0;let t=new Ge({uniforms:{uDir:{value:this.direction}},vertexShader:Gm,fragmentShader:Km,transparent:!0,depthWrite:!1,side:2});this.mesh=new B(this.geometry,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=4;for(let e=0;e<Wm;e++)this.streaks.push({alive:!1,position:new V,age:0,life:1,length:1})}setWind(e,t,n){this.direction.set(Math.cos(e),0,Math.sin(e)),this.strength=n>0?Math.min(1,t/n):0,this.speed=4+t*1.1}clear(){for(let e of this.streaks)e.alive=!1}update(e,t){let n=this.strength<.08?0:3+26*this.strength*this.strength;for(this.spawnClock+=e*n,t.getWorldDirection(this.forward),this.forward.y=0,this.forward.lengthSq()<1e-6&&this.forward.set(0,0,-1),this.forward.normalize();this.spawnClock>=1;){--this.spawnClock;let e=this.streaks.find(e=>!e.alive);if(!e)break;let n=8+Math.random()*40,r=(Math.random()-.5)*1.6*n;e.position.copy(t.position).addScaledVector(this.forward,n).add(new V(-this.forward.z*r,0,this.forward.x*r)).addScaledVector(this.direction,-this.speed*.6),e.position.y=.6+Math.random()*Math.max(2,t.position.y*.9),e.alive=!0,e.age=0,e.life=1.1+Math.random()*1.1,e.length=(2+Math.random()*3)*(.6+this.strength)}let r=0;for(let t of this.streaks){if(!t.alive)continue;if(t.age+=e,t.age>=t.life){t.alive=!1;continue}t.position.addScaledVector(this.direction,this.speed*e);let n=t.age/t.life;this.offsets[r*3]=t.position.x,this.offsets[r*3+1]=t.position.y,this.offsets[r*3+2]=t.position.z,this.params[r*2]=t.length,this.params[r*2+1]=.55*Math.sin(Math.PI*n)*(.5+.5*this.strength),r++}this.geometry.instanceCount=r,this.geometry.attributes.offset.needsUpdate=!0,this.geometry.attributes.params.needsUpdate=!0}};function Jm(e,t,n){let r=new H,i=[];for(let n=0;n<=64;n++){let r=An(e.min+(e.max-e.min)*n/64,t);i.push(new V(r.x,2.2,r.z))}let a=new Ut(new hn().setFromPoints(i),new Tt({color:n,dashSize:3,gapSize:2.5,transparent:!0,opacity:.85}));a.computeLineDistances(),r.add(a);let o=new S({color:n,roughness:.6}),s=new S({color:`#ffffff`,roughness:.6}),c=new S({color:`#ffe48a`,emissive:`#ffcf40`,emissiveIntensity:.8});return{object:r,buoys:[e.min,e.max].map(e=>{let n=new H,i=new B(new P(.7,1,2,12),o);i.position.y=.6;let a=new B(new P(.74,.86,.5,12),s);a.position.y=.9;let l=new B(new $t(.35,12,8),c);l.position.y=1.9,n.add(i,a,l);let u=An(e,t);return n.position.set(u.x,0,u.z),r.add(n),n})}}var Ym=new V(.62,.72,.3).normalize(),Xm=24,Zm=class{renderer;scene=new fe;camera=new Be(55,1,.3,4e3);water;ships;projectiles=new Ku;indicator=new gd((e,t)=>this.surfaceHeight(e,t));effects=new Gd;windStreaks=new qm;powerUps=new cu;gifts=new lu;laser=new pf;steerMarker=new _f;vignette=new Cf;rubble=new kf((e,t)=>this.island.heightAt(e,t),()=>this.config.presentation.fallSpeed);config;cloudWind=new V;sky;clouds;sun;floaters=[];island;zoneMarkers=[];hullMask=new df;normal=new V;surfaceNormal=new V;width=1;height=1;quality=`high`;constructor(e,t){this.config=e,this.renderer=new so({antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=7,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,t.appendChild(this.renderer.domElement),this.scene.environment=jd(this.renderer,Ym),this.scene.environmentIntensity=.7,this.scene.add(new rn(`#cfe8f7`,`#647c72`,.58)),this.sun=new Ze(`#fff0d0`,2.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);let n=this.sun.shadow.camera;n.left=-24,n.right=Xm,n.top=Xm,n.bottom=-24,n.near=1,n.far=160,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.04,this.scene.add(this.sun,this.sun.target);let r=new Ze(`#cfdcea`,.85);r.position.set(-Ym.x,.35,-Ym.z).multiplyScalar(100),this.scene.add(r),this.sky=Ad(Ym),this.clouds=Id(Ym),this.water=lf(e.arena,Ym),this.scene.add(this.sky.mesh,this.clouds.object,this.water.object),this.scene.fog=new Ie(Ed,.0026),this.ships={player:new Tm(`player`,e),enemy:new Tm(`enemy`,e)},this.buildArena(),this.scene.add(this.projectiles.object,this.indicator.object,this.effects.object,this.windStreaks.mesh,this.powerUps.object,this.gifts.object,this.laser.object,this.steerMarker.object,this.rubble.object,this.vignette.mesh)}buildArena(){let{arena:e}=this.config;this.island=tn(e),this.scene.add(this.island.object),this.water.setArena(e),this.floaters=[],this.hullMask.setLines(qt(this.config.ship.model,33)),this.zoneMarkers=m.map(t=>{let n=Jm(On(t,e),e.orbitRadius,Et[t].sail);return this.floaters.push(...n.buoys),this.hullMask.apply(n.object),n.object}),this.scene.add(...this.zoneMarkers);for(let e of m)this.scene.add(this.ships[e].root);let t=this.config.ship.hull,n=Math.min(...t.map(e=>e.center.x-e.halfSize.x)),r=Math.max(...t.map(e=>e.center.x+e.halfSize.x)),i=Math.max(...t.map(e=>e.halfSize.z));this.water.setHullShape((n+r)/2+.2,(r-n)/2+.3,i+.15),this.water.setHullLines(qt(this.config.ship.model,33))}rebuildArena(){this.rubble.clear();for(let e of m)this.ships[e].reset();for(let e of[this.island.object,...this.zoneMarkers,...m.map(e=>this.ships[e].root)])this.scene.remove(e),Qm(e);for(let e of m)this.ships[e]=new Tm(e,this.config);this.buildArena()}setZoneMarkersVisible(e){for(let t of this.zoneMarkers)t.visible=e}setWind(e,t){let n=this.config.wind.maxKnots>0?Math.min(1,t/this.config.wind.maxKnots):0;this.effects.setWind(e,t),this.windStreaks.setWind(e,t,this.config.wind.maxKnots);for(let t of m)this.ships[t].setWind(e,n);this.cloudWind.set(Math.cos(e),0,Math.sin(e)).multiplyScalar(t*.4)}get viewportWidth(){return this.width}get viewportHeight(){return this.height}get canvas(){return this.renderer.domElement}get currentQuality(){return this.quality}setQuality(e){if(e===this.quality)return;this.quality=e;let t=e===`low`;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,t?1.5:2)),this.sun.castShadow=!t,this.water.setQuality(!t),this.sky.setQuality(!t),this.resize()}resize(){let e=window.visualViewport;this.width=Math.round(e?.width??window.innerWidth),this.height=Math.round(e?.height??window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.quality===`low`?1.5:2)),this.renderer.setSize(this.width,this.height,!1),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}surfaceHeight(e,t){let n=this.water.sample(e,t,this.surfaceNormal);return Math.hypot(e,t)>Lt(this.config.arena).boundingRadius?n:Math.max(n,this.island.heightAt(e,t))}get bufferHeight(){return this.renderer.domElement.height}update(e,t){this.water.update(t),this.sky.update(t),this.steerMarker.update(e),m.forEach((t,n)=>{let r=this.ships[t];r.update(e,this.water);let i=r.root.visible,a=r.headingYaw;i?this.water.setHull(n,r.root.position.x,r.root.position.z,Math.cos(a),-Math.sin(a)):this.water.setHull(n,1e6,1e6,1,0),this.water.setHullFrame(n,r.root.matrixWorld,i&&!r.isSinking),this.hullMask.setFrame(n,r.root.matrixWorld)});for(let e of this.floaters)e.position.y=this.water.sample(e.position.x,e.position.z,this.normal),e.quaternion.setFromUnitVectors(se.DEFAULT_UP,this.normal);this.clouds.update(e,this.cloudWind,this.camera),this.effects.update(e),this.rubble.update(e),this.windStreaks.update(e,this.camera),this.followShadows()}render(){this.sky.mesh.position.copy(this.camera.position),this.renderer.render(this.scene,this.camera)}reset(){this.projectiles.hide(),this.laser.hide(),this.steerMarker.hide(),this.indicator.hide(),this.indicator.setLastImpact(null),this.windStreaks.clear();for(let e of m)this.ships[e].reset();this.rubble.clear(),this.island.reset()}followShadows(){let e=this.ships.player.root.position,t=this.ships.enemy.root.position,n=this.camera.position.distanceToSquared(e)<this.camera.position.distanceToSquared(t)?e:t;this.sun.target.position.copy(n),this.sun.position.copy(n).addScaledVector(Ym,80)}};function Qm(e){let t=new Set;e.traverse(e=>{let n=e;e.isInstancedMesh&&e.dispose(),n.geometry?.dispose();let r=n.material?Array.isArray(n.material)?n.material:[n.material]:[];for(let e of r){for(let n of Object.values(e))n instanceof nt&&t.add(n);e.dispose()}});for(let e of t)e.dispose()}function J(e,t={},...n){let r=document.createElement(e);if(t.class&&(r.className=t.class),t.text!==void 0&&(r.textContent=t.text),t.attrs)for(let[e,n]of Object.entries(t.attrs))r.setAttribute(e,n);for(let e of n)e&&r.append(e);return r}function Y(e,t=`icon`){let n=document.createElement(`template`);n.innerHTML=e.trim();let r=n.content.firstElementChild;return r.classList.add(t),r}function $m(e,t,n,r=n){let i=!1;e.addEventListener(`pointerdown`,n=>{n.preventDefault(),e.setPointerCapture?.(n.pointerId),i||(i=!0,e.classList.add(`pressed`),t())});let a=t=>()=>{i&&(i=!1,e.classList.remove(`pressed`),t())};e.addEventListener(`pointerup`,a(n)),e.addEventListener(`pointercancel`,a(r)),e.addEventListener(`lostpointercapture`,a(n)),e.addEventListener(`contextmenu`,e=>e.preventDefault())}function X(e,t){e.addEventListener(`click`,e=>{e.preventDefault(),t()})}function eh(e,t){e.classList.remove(t),e.offsetWidth,e.classList.add(t)}var th=9,nh=79,rh=56,ih=63,ah=68,oh=72,sh=-10,ch=`
<svg>
  <path class="dial-sweep"/>
  <path class="dial-track"/>
  <path class="dial-band"/>
  <g class="dial-ticks"></g>
  <line class="dial-needle-shadow" x1="${th}" y1="${nh}" y2="${nh}"/>
  <line class="dial-needle" x1="${th}" y1="${nh}" y2="${nh}"/>
  <circle class="dial-hub" cx="${th}" cy="${nh}" r="4.5"/>
</svg>`,lh=`http://www.w3.org/2000/svg`;function uh(e,t){let n=e*Math.PI/180;return[th+t*Math.cos(n),nh-t*Math.sin(n)]}function dh(e,t,n){let[r,i]=uh(e,n),[a,o]=uh(t,n);return`M${r.toFixed(2)} ${i.toFixed(2)}A${n} ${n} 0 0 0 ${a.toFixed(2)} ${o.toFixed(2)}`}var fh=class{element;dial;track;value;band;ticks;sweep;needles;minDeg=NaN;maxDeg=NaN;low=sh;shownDeg=NaN;onDrag=null;constructor(){let e=Y(ch,`angle-dial`);this.dial=e,this.track=e.querySelector(`.dial-track`),this.band=e.querySelector(`.dial-band`),this.ticks=e.querySelector(`.dial-ticks`),this.sweep=e.querySelector(`.dial-sweep`),this.needles=[...e.querySelectorAll(`.dial-needle-shadow, .dial-needle`)],this.value=J(`div`,{class:`angle-value`});let t=J(`div`,{class:`angle-grip`},J(`span`,{text:`▲`}),J(`span`,{text:`▼`})),n=J(`div`,{class:`angle-card`},J(`div`,{class:`angle-head`},J(`div`,{class:`angle-label`,text:`Angle`}),this.value),e,t);this.dragToTilt(n),this.element=J(`div`,{class:`angle-slot`},n),this.setLimits(-5,40),this.setAngle(0)}dragToTilt(e){let t=null;e.addEventListener(`pointerdown`,n=>{t||n.pointerType===`mouse`&&n.button!==0||(t={id:n.pointerId,y:n.clientY},e.setPointerCapture?.(n.pointerId),e.classList.add(`dragging`))}),e.addEventListener(`pointermove`,e=>{t?.id===e.pointerId&&(this.onDrag?.(e.clientY-t.y),t.y=e.clientY)});let n=n=>{t?.id===n.pointerId&&(t=null,e.classList.remove(`dragging`))};e.addEventListener(`pointerup`,n),e.addEventListener(`pointercancel`,n),e.addEventListener(`lostpointercapture`,n)}setLimits(e,t){if(e===this.minDeg&&t===this.maxDeg)return;this.minDeg=e,this.maxDeg=t,this.low=Math.min(sh,Math.floor(e/5)*5-5),this.track.setAttribute(`d`,dh(this.low,90,rh));let n=Math.max(this.low,Math.min(90,e)),r=Math.max(n,Math.min(90,t));this.band.setAttribute(`d`,dh(n,r,rh));let i=Math.max(5.5,rh*Math.sin(-this.low*Math.PI/180)+4,oh*Math.sin(-(this.low+5)*Math.PI/180)+1);this.dial.setAttribute(`viewBox`,`0 3 86 ${(nh+i-3).toFixed(1)}`),this.ticks.replaceChildren();for(let n=this.low+5;n<=90;n+=5){let r=n%10==0,i=n<e-1e-6||n>t+1e-6;if(i&&!r)continue;let[a,o]=uh(n,ih),[s,c]=uh(n,r?oh:ah),l=document.createElementNS(lh,`line`);l.setAttribute(`x1`,a.toFixed(2)),l.setAttribute(`y1`,o.toFixed(2)),l.setAttribute(`x2`,s.toFixed(2)),l.setAttribute(`y2`,c.toFixed(2)),r&&l.classList.add(`major`),i&&l.classList.add(`off`),this.ticks.append(l)}let a=this.shownDeg;this.shownDeg=NaN,Number.isNaN(a)||this.setAngle(a)}setAngle(e){if(e===this.shownDeg)return;this.shownDeg=e;let t=Math.round(e),n=`${t<0?`−`:``}${Math.abs(t)}°`;this.value.textContent!==n&&(this.value.textContent=n,this.value.classList.toggle(`long`,n.length>3));let r=Math.max(this.low,Math.min(90,e)),[i,a]=uh(r,59);for(let e of this.needles)e.setAttribute(`x2`,i.toFixed(2)),e.setAttribute(`y2`,a.toFixed(2));let[o,s]=uh(0,52),[c,l]=uh(r,52),u=r>=0?0:1;this.sweep.setAttribute(`d`,`M${th} ${nh}L${o.toFixed(2)} ${s.toFixed(2)}A52 52 0 0 ${u} ${c.toFixed(2)} ${l.toFixed(2)}Z`)}},ph=class{element;onSet=null;track;knob;minDeg=-5;maxDeg=40;constructor(){this.knob=J(`div`,{class:`lever-knob`},J(`span`,{text:`▲`}),J(`span`,{text:`▼`})),this.track=J(`div`,{class:`lever-track`},this.knob),this.element=J(`div`,{class:`angle-lever`},J(`div`,{class:`lever-label`,text:`Angle`}),this.track),this.dragToSet(),this.setAngle(0)}setLimits(e,t){this.minDeg=e,this.maxDeg=t}setAngle(e){let t=(e-this.minDeg)/Math.max(1e-6,this.maxDeg-this.minDeg);this.knob.style.setProperty(`--share`,Math.min(1,Math.max(0,t)).toFixed(4))}dragToSet(){let e=null,t=e=>{let t=this.track.getBoundingClientRect();this.onSet?.(Math.min(1,Math.max(0,(t.bottom-e)/Math.max(1,t.height))))};this.element.addEventListener(`pointerdown`,n=>{e!==null||n.pointerType===`mouse`&&n.button!==0||(e=n.pointerId,this.element.setPointerCapture?.(n.pointerId),this.element.classList.add(`held`),t(n.clientY))}),this.element.addEventListener(`pointermove`,n=>{n.pointerId===e&&t(n.clientY)});let n=t=>{t.pointerId===e&&(e=null,this.element.classList.remove(`held`))};this.element.addEventListener(`pointerup`,n),this.element.addEventListener(`pointercancel`,n),this.element.addEventListener(`lostpointercapture`,n)}},mh=`#1d2733`,Z=`stroke="${mh}" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round"`,hh=(e,t=44)=>`<radialGradient id="g-${e.slice(1)}" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="${e}" stop-opacity="0.85"/><stop offset="1" stop-color="${e}" stop-opacity="0"/></radialGradient><circle cx="50" cy="52" r="${t}" fill="url(#g-${e.slice(1)})"/>`,gh=(e,t,n,r=``)=>`<circle cx="${e}" cy="${t}" r="${n}" fill="#2b3036" ${Z} ${r}/><circle cx="${e-n*.35}" cy="${t-n*.38}" r="${n*.3}" fill="#fff" opacity="0.55"/>`,_h=(e,t,n,r=`#fff6c8`)=>`<path d="M${e} ${t-n} Q${e+n*.18} ${t-n*.18} ${e+n} ${t} Q${e+n*.18} ${t+n*.18} ${e} ${t+n} Q${e-n*.18} ${t+n*.18} ${e-n} ${t} Q${e-n*.18} ${t-n*.18} ${e} ${t-n}Z" fill="${r}"/>`,vh=(e,t,n,r)=>`
  <line x1="${e}" y1="${t-n*.5}" x2="${e}" y2="${t-n*1.35}" stroke="${mh}" stroke-width="1.6"/>
  <ellipse cx="${e}" cy="${t-n*1.75}" rx="${n*.5}" ry="${n*.58}" fill="${r}" ${Z}/>
  <ellipse cx="${e-n*.17}" cy="${t-n*1.95}" rx="${n*.12}" ry="${n*.18}" fill="#fff" opacity="0.6"/>
  <rect x="${e-n*.5}" y="${t-n*.5}" width="${n}" height="${n}" rx="${n*.1}" fill="#b07a45" ${Z}/>
  <path d="M${e-n*.5} ${t} H${e+n*.5} M${e} ${t-n*.5} V${t+n*.5}" stroke="#7b5130" stroke-width="2.4"/>
  <circle cx="${e}" cy="${t}" r="${n*.2}" fill="${r}" stroke="#fff" stroke-width="1.5"/>`,yh={sniper:`
    ${hh(`#ffd36e`)}
    <circle cx="50" cy="50" r="30" fill="none" stroke="#e8483a" stroke-width="4" opacity="0.9"/>
    <path d="M50 14 V30 M50 70 V86 M14 50 H30 M70 50 H86" stroke="#e8483a" stroke-width="4" stroke-linecap="round" opacity="0.9"/>
    <g transform="rotate(-32 50 52)">
      <path d="M8 50 L24 46 L40 47 L40 57 L26 58 L14 64 Z" fill="#9a5f2e" ${Z}/>
      <path d="M17 54 L30 52" stroke="#6f3f1c" stroke-width="2"/>
      <rect x="38" y="47.5" width="54" height="5" rx="1.5" fill="#3d434b" ${Z}/>
      <rect x="44" y="38" width="30" height="8" rx="4" fill="#d9a441" ${Z}/>
      <rect x="40" y="39.5" width="6" height="5" rx="1" fill="#b8862d" ${Z}/>
      <rect x="72" y="39" width="6" height="6" rx="1.5" fill="#b8862d" ${Z}/>
      <path d="M52 46 V48 M64 46 V48" stroke="${mh}" stroke-width="2.4"/>
      <ellipse cx="78" cy="42" rx="1.4" ry="2.4" fill="#bfe8ff"/>
    </g>`,revive:`
    ${hh(`#7dffa6`)}
    <circle cx="50" cy="52" r="31" fill="#f4f1ea" ${Z}/>
    <circle cx="50" cy="52" r="17" fill="#2a6fd6" ${Z}/>
    <path d="M28 30 L36 38 M72 30 L64 38 M28 74 L36 66 M72 74 L64 66" stroke="#e8483a" stroke-width="9" stroke-linecap="butt"/>
    <path d="M37 52 C37 44 46 41 50 47 C54 41 63 44 63 52 C63 60 50 67 50 67 C50 67 37 60 37 52Z" fill="#5fe08a" ${Z}/>
    <path d="M50 49 V59 M45 54 H55" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    ${_h(80,22,7)}${_h(18,80,5)}`,extraBall:`
    ${hh(`#ffd36e`)}
    ${gh(38,58,17)}
    ${gh(60,66,12)}
    <text x="72" y="40" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="30" fill="#ffd33d" stroke="${mh}" stroke-width="3.5" paint-order="stroke">+1</text>
    ${_h(24,28,6)}`,magnet:`
    ${hh(`#b77bff`)}
    <path d="M26 30 V56 A24 24 0 0 0 74 56 V30 H58 V56 A8 8 0 0 1 42 56 V30 Z" fill="#e8483a" ${Z}/>
    <rect x="26" y="22" width="16" height="11" fill="#d7dde4" ${Z}/>
    <rect x="58" y="22" width="16" height="11" fill="#d7dde4" ${Z}/>
    <path d="M30 60 A20 20 0 0 0 46 74" stroke="#fff" stroke-width="3" fill="none" opacity="0.5" stroke-linecap="round"/>
    <path d="M50 92 Q36 84 44 78 Q52 72 40 66" stroke="#c48cff" stroke-width="3" fill="none" stroke-dasharray="4 4"/>
    ${gh(78,82,9,`stroke="#a45cff"`)}
    <circle cx="78" cy="82" r="12" fill="none" stroke="#c48cff" stroke-width="2.5"/>
    ${_h(14,74,6,`#e3c8ff`)}`,repair:`
    ${hh(`#8fe07a`)}
    <rect x="14" y="58" width="72" height="16" rx="3" fill="#c9905a" ${Z}/>
    <path d="M20 66 H44 M52 66 H80" stroke="#9a6638" stroke-width="2"/>
    <circle cx="26" cy="66" r="2.4" fill="#59606a"/><circle cx="74" cy="66" r="2.4" fill="#59606a"/>
    <g transform="rotate(-38 50 40)">
      <rect x="46" y="20" width="8" height="40" rx="3" fill="#a8743f" ${Z}/>
      <rect x="34" y="12" width="32" height="13" rx="3" fill="#7d8792" ${Z}/>
    </g>
    <g transform="rotate(38 50 40)">
      <rect x="46.5" y="24" width="7" height="36" rx="3" fill="#aeb7c1" ${Z}/>
      <path d="M41 12 A10 10 0 1 0 59 12 L55 20 H45 Z" fill="#aeb7c1" ${Z}/>
    </g>
    <text x="78" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="22" fill="#7fd36b" stroke="${mh}" stroke-width="3.2" paint-order="stroke">+</text>`,gifts:`
    ${hh(`#ffb35a`)}
    ${vh(28,70,20,`#ff4d4d`)}
    ${vh(56,56,18,`#ff9a2e`)}
    ${vh(80,76,16,`#b980ff`)}
    <circle cx="16" cy="30" r="2.5" fill="#ffd33d"/><circle cx="44" cy="14" r="2.5" fill="#4dff88"/>
    <circle cx="88" cy="40" r="2.5" fill="#4aa3ff"/><circle cx="70" cy="22" r="2" fill="#ff6fa8"/>`,laser:`
    ${hh(`#ff6b6b`)}
    <path d="M44 22 L56 22 L64 88 L36 88 Z" fill="#ff3b3b" opacity="0.35"/>
    <path d="M47 22 L53 22 L56 88 L44 88 Z" fill="#fff2f0"/>
    <path d="M20 26 Q20 12 34 14 Q38 4 52 8 Q64 2 70 14 Q86 12 84 26 Z" fill="#f4f6fb" ${Z}/>
    <path d="M14 82 Q50 98 86 82 L80 74 H20 Z" fill="#9a5f2e" ${Z}/>
    <circle cx="50" cy="80" r="12" fill="none" stroke="#ff3b3b" stroke-width="3"/>
    <path d="M50 64 V70 M50 90 V96 M34 80 H40 M60 80 H66" stroke="#ff3b3b" stroke-width="3" stroke-linecap="round"/>
    ${_h(50,86,7)}`,antiMissile:`
    ${hh(`#8fd0ff`)}
    <rect x="22" y="72" width="56" height="14" rx="3" fill="#b8862d" ${Z}/>
    <circle cx="34" cy="72" r="9" fill="#d9a441" ${Z}/><circle cx="34" cy="72" r="3" fill="${mh}"/>
    <circle cx="64" cy="72" r="7" fill="#c47a3c" ${Z}/>
    <rect x="42" y="56" width="16" height="18" fill="#9a6a2e" ${Z}/>
    <circle cx="50" cy="40" r="20" fill="#bfe7ff" fill-opacity="0.55" ${Z}/>
    <path d="M50 40 L42 30 M50 40 L58 28 M50 40 L40 46 M50 40 L60 48" stroke="#ff8fdf" stroke-width="2" stroke-linecap="round"/>
    <circle cx="50" cy="40" r="4" fill="#fff"/>
    <path d="M66 30 L74 24 L72 30 L82 22" stroke="#fff36b" stroke-width="3.5" fill="none" stroke-linejoin="round"/>
    ${gh(86,16,7)}
    ${_h(86,16,10,`#fff36b`)}`,healer:`
    ${hh(`#5fe08a`)}
    <path d="M30 86 L36 74 M70 86 L64 74 M44 88 L46 76 M56 88 L54 76" stroke="#8a5a2b" stroke-width="4" stroke-linecap="round"/>
    <rect x="30" y="70" width="40" height="8" rx="2" fill="#b8862d" ${Z}/>
    <rect x="32" y="26" width="36" height="46" rx="5" fill="#3fd17a" ${Z}/>
    <path d="M44 26 V72 M56 26 V72 M32 40 H68 M32 57 H68" stroke="#b8862d" stroke-width="3"/>
    <rect x="36" y="30" width="6" height="22" rx="3" fill="#c6ffd8" opacity="0.7"/>
    <path d="M30 26 Q50 8 70 26 Z" fill="#d9a441" ${Z}/>
    <circle cx="50" cy="12" r="4" fill="#d9a441" ${Z}/>
    <path d="M50 46 V56 M45 51 H55" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>`,accuracy:`
    ${hh(`#ffd36e`)}
    <circle cx="50" cy="52" r="34" fill="#f4f1ea" ${Z}/>
    <circle cx="50" cy="52" r="25" fill="#e8483a" ${Z}/>
    <circle cx="50" cy="52" r="16" fill="#f4f1ea" ${Z}/>
    <circle cx="50" cy="52" r="8" fill="#e8483a" ${Z}/>
    ${gh(47,49,4)}${gh(54,50,4)}${gh(50,56,4)}
    ${_h(84,18,7)}`,wings:`
    ${hh(`#bfe7ff`)}
    <path d="M14 70 H30 M10 60 H26 M16 80 H34" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
    <path d="M50 52 C34 30 18 30 8 22 C14 38 22 46 30 50 C20 50 14 52 10 56 C24 60 38 60 50 58 Z" fill="#fff" ${Z}/>
    <path d="M50 52 C66 30 82 30 92 22 C86 38 78 46 70 50 C80 50 86 52 90 56 C76 60 62 60 50 58 Z" fill="#fff" ${Z}/>
    <path d="M24 38 C32 44 38 48 44 52 M76 38 C68 44 62 48 56 52" stroke="#c9d6e2" stroke-width="2" fill="none"/>
    ${gh(50,58,14)}`,charger:`
    ${hh(`#ff5a5a`)}
    <rect x="24" y="76" width="52" height="12" rx="4" fill="#b8862d" ${Z}/>
    <ellipse cx="50" cy="68" rx="30" ry="8" fill="none" stroke="#c47a3c" stroke-width="5"/>
    <ellipse cx="50" cy="68" rx="30" ry="8" fill="none" ${Z} stroke-width="1.6"/>
    <rect x="46" y="54" width="8" height="18" fill="#9a6a2e" ${Z}/>
    <ellipse cx="50" cy="40" rx="27" ry="8" fill="none" stroke="#d9a441" stroke-width="4" transform="rotate(-20 50 40)"/>
    <circle cx="50" cy="40" r="15" fill="#4a4f57" ${Z}/>
    <circle cx="45" cy="35" r="4" fill="#fff" opacity="0.45"/>
    <path d="M30 22 L38 30 L34 32 L42 40" stroke="#ff4d4d" stroke-width="3" fill="none" stroke-linejoin="round"/>
    <path d="M72 18 L64 28 L69 30 L60 38" stroke="#ff4d4d" stroke-width="3" fill="none" stroke-linejoin="round"/>
    <path d="M78 52 L68 48 L70 54 L62 50" stroke="#ff8a8a" stroke-width="2.4" fill="none" stroke-linejoin="round"/>`,hotShot:`
    ${hh(`#ff8a3c`)}
    <path d="M50 12 C62 26 74 34 70 54 C80 50 82 40 80 34 C90 46 88 70 70 80 C76 66 66 60 62 52 C60 64 54 68 50 70 C52 60 46 52 40 48 C42 58 36 66 30 70 C22 62 22 48 30 38 C30 46 34 50 38 50 C34 36 40 22 50 12Z" fill="#ff7a2a" ${Z}/>
    <path d="M50 34 C56 42 60 48 58 58 C54 52 50 52 48 58 C44 52 44 44 50 34Z" fill="#ffd33d"/>
    ${gh(50,76,13,`fill="#ff4d2a"`)}
    ${_h(20,24,6,`#ffd36a`)}${_h(82,18,5,`#ffd36a`)}`,mist:`
    ${hh(`#d6ecff`)}
    <path d="M26 62 L30 50 L70 50 L74 62 Z" fill="#9a5f2e" ${Z} opacity="0.55"/>
    <path d="M48 50 V24 M48 26 L64 34 L48 40 Z" fill="#f4f1ea" stroke="${mh}" stroke-width="2.4" opacity="0.5"/>
    <path d="M8 58 Q20 46 34 54 Q44 42 58 52 Q72 42 84 54 Q96 54 94 66 Q92 78 76 74 Q64 84 50 76 Q36 86 24 76 Q6 80 8 66Z" fill="#f2f7ff" ${Z}/>
    <path d="M14 40 Q26 32 38 38 Q48 30 60 36" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M24 88 H76 M34 94 H66" stroke="#dfe9f5" stroke-width="3" stroke-linecap="round"/>`,hiredHand:`
    ${hh(`#ffd36e`)}
    <circle cx="50" cy="38" r="17" fill="#e6b691" ${Z}/>
    <path d="M32 34 Q34 16 50 16 Q66 16 68 34 Z" fill="#2a56a5" ${Z}/>
    <circle cx="44" cy="38" r="2.4" fill="${mh}"/><circle cx="56" cy="38" r="2.4" fill="${mh}"/>
    <path d="M44 46 Q50 51 56 46" stroke="${mh}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <path d="M24 92 Q24 62 50 60 Q76 62 76 92 Z" fill="#2a56a5" ${Z}/>
    <path d="M44 62 L50 74 L56 62" fill="#efe5cf" ${Z}/>
    <text x="80" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="26" fill="#ffd33d" stroke="${mh}" stroke-width="3.5" paint-order="stroke">+1</text>`,shield:`
    ${hh(`#6fc8ff`)}
    <path d="M14 76 A36 44 0 0 1 86 76 Z" fill="#7fd6ff" fill-opacity="0.45" ${Z}/>
    <path d="M26 62 L38 56 L50 62 L62 56 L74 62 M38 56 L38 42 L50 36 L62 42 L62 56 M50 36 V24" stroke="#d6f3ff" stroke-width="2.4" fill="none" opacity="0.9"/>
    <path d="M22 76 H78 L72 88 H28 Z" fill="#9a5f2e" ${Z}/>
    ${gh(84,24,7)}
    <path d="M72 34 L78 28 M70 40 L64 36" stroke="#fff36b" stroke-width="3" stroke-linecap="round"/>
    ${_h(76,32,9,`#fff36b`)}`,rogueWave:`
    ${hh(`#5fb8ff`)}
    <path d="M6 86 C10 54 34 30 62 26 C82 24 94 36 92 48 C88 40 76 38 70 46 C80 46 84 56 78 62 C70 52 54 56 50 70 C46 80 44 86 46 90 Z" fill="#2a8fd6" ${Z}/>
    <path d="M62 26 C82 24 94 36 92 48 C88 40 76 38 70 46" fill="#e8f6ff" ${Z}/>
    <path d="M18 70 C26 56 38 46 52 40" stroke="#9fd8ff" stroke-width="3" fill="none" stroke-linecap="round"/>
    <g transform="rotate(-24 34 70)"><path d="M18 70 L50 70 L46 78 L22 78 Z" fill="#9a5f2e" ${Z}/><path d="M33 70 V54 L44 62 Z" fill="#f4f1ea" stroke="${mh}" stroke-width="2"/></g>`,depression:`
    ${hh(`#9fb3c9`)}
    <path d="M18 34 Q18 18 36 20 Q42 8 58 12 Q76 8 80 24 Q94 26 90 40 Q86 50 72 46 H30 Q16 46 18 34Z" fill="#7d8996" ${Z}/>
    <path d="M30 54 L26 64 M44 54 L40 66 M58 54 L54 64 M72 54 L68 66" stroke="#5fb8ff" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="50" cy="80" r="15" fill="#e6b691" ${Z}/>
    <circle cx="44" cy="78" r="2.2" fill="${mh}"/><circle cx="56" cy="78" r="2.2" fill="${mh}"/>
    <path d="M43 88 Q50 83 57 88" stroke="${mh}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <path d="M41 82 Q40 87 42 89" stroke="#5fb8ff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,sacrifice:`
    ${hh(`#ffe08a`)}
    <path d="M10 82 Q30 76 50 82 Q70 88 90 82 V96 H10 Z" fill="#2a8fd6" ${Z}/>
    <path d="M50 14 L54 24 L64 24 L56 30 L59 40 L50 34 L41 40 L44 30 L36 24 L46 24 Z" fill="#ffd33d" ${Z}/>
    <circle cx="50" cy="56" r="9" fill="#e6b691" ${Z}/>
    <path d="M40 76 Q42 64 50 64 Q58 64 60 76" fill="#2a56a5" ${Z}/>
    <path d="M58 66 L66 54" stroke="${mh}" stroke-width="5" stroke-linecap="round"/>
    <path d="M58 66 L66 54" stroke="#e6b691" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M30 72 Q24 80 30 86 M70 72 Q76 80 70 86" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.8"/>
    ${_h(24,20,6)}${_h(78,22,5)}`,pickpocket:`
    ${hh(`#b77bff`)}
    <path d="M22 70 Q22 50 40 46 Q46 30 56 38 Q64 30 68 42 Q80 46 78 70 Q74 88 50 88 Q26 88 22 70Z" fill="#7d4a2a" ${Z}/>
    <path d="M40 46 Q50 54 60 46" stroke="#5a3218" stroke-width="3" fill="none"/>
    <text x="50" y="76" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="22" fill="#ffd33d" stroke="${mh}" stroke-width="3" paint-order="stroke">?</text>
    <path d="M66 22 L84 14 L80 26 Z" fill="#e6b691" ${Z}/>
    <path d="M70 30 Q78 34 84 30" stroke="${mh}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    ${_h(20,26,6,`#e3c8ff`)}${_h(84,54,5,`#e3c8ff`)}`};function bh(e){return`<svg viewBox="0 0 100 100" class="card-art-svg" aria-hidden="true">${yh[e]}</svg>`}var xh={rifle:`<svg viewBox="0 0 24 24"><path d="M2 15 L8 13 L13 13 L13 16 L8 16 L4 18 Z" fill="#9a5f2e" stroke="${mh}" stroke-width="1.4" stroke-linejoin="round"/><rect x="12" y="13" width="11" height="2" fill="#3d434b"/><rect x="13" y="9.5" width="7" height="3" rx="1.5" fill="#d9a441" stroke="${mh}" stroke-width="1"/></svg>`,extraBalls:`<svg viewBox="0 0 24 24"><circle cx="9" cy="14" r="6" fill="#2b3036" stroke="#fff4dc" stroke-width="1.4"/><text x="18" y="10" text-anchor="middle" font-family="system-ui" font-weight="900" font-size="10" fill="#ffd33d" stroke="${mh}" stroke-width="2" paint-order="stroke">+1</text></svg>`,magnet:`<svg viewBox="0 0 24 24"><path d="M5 5 V12 A7 7 0 0 0 19 12 V5 H14.5 V12 A2.5 2.5 0 0 1 9.5 12 V5 Z" fill="#e8483a" stroke="${mh}" stroke-width="1.4" stroke-linejoin="round"/><rect x="5" y="3" width="4.5" height="3" fill="#d7dde4"/><rect x="14.5" y="3" width="4.5" height="3" fill="#d7dde4"/></svg>`,accuracy:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#f4f1ea" stroke="${mh}" stroke-width="1.4"/><circle cx="12" cy="12" r="6" fill="#e8483a"/><circle cx="12" cy="12" r="3" fill="#f4f1ea"/><circle cx="12" cy="12" r="1.4" fill="#e8483a"/></svg>`,wings:`<svg viewBox="0 0 24 24"><path d="M12 12 C8 7 4 7 1 5 C3 9 5 11 7 12 C5 12 3 13 2 14 C6 15 9 15 12 14 Z M12 12 C16 7 20 7 23 5 C21 9 19 11 17 12 C19 12 21 13 22 14 C18 15 15 15 12 14 Z" fill="#fff" stroke="${mh}" stroke-width="1.2" stroke-linejoin="round"/><circle cx="12" cy="15" r="3.6" fill="#2b3036"/></svg>`,charged:`<svg viewBox="0 0 24 24"><path d="M14 2 L5 14 H11 L9 22 L19 9 H13 Z" fill="#ff4d4d" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></svg>`,laser:`<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2.5" fill="#2d3540" stroke="${mh}" stroke-width="1.4"/><rect x="7" y="5" width="10" height="12" rx="1" fill="#48e0ff"/><circle cx="12" cy="11" r="3" fill="none" stroke="#ff3b3b" stroke-width="1.4"/></svg>`,hotShot:`<svg viewBox="0 0 24 24"><path d="M12 2 C16 7 19 10 18 15 C20 14 20 11 20 10 C23 14 22 20 17 22 H7 C2 20 2 14 6 11 C6 13 7 14 8 14 C7 9 9 5 12 2Z" fill="#ff7a2a" stroke="${mh}" stroke-width="1.3" stroke-linejoin="round"/><circle cx="12" cy="17" r="3.4" fill="#2b3036"/></svg>`,sulking:`<svg viewBox="0 0 24 24"><path d="M4 9 Q4 5 8 5 Q10 2 14 3 Q18 2 19 6 Q22 7 21 10 Q20 12 17 12 H7 Q4 12 4 9Z" fill="#7d8996" stroke="${mh}" stroke-width="1.2"/><path d="M8 14 L7 17 M12 14 L11 18 M16 14 L15 17" stroke="#5fb8ff" stroke-width="1.8" stroke-linecap="round"/></svg>`},Sh=120,Ch=122,wh=104,Th=`M16 ${Ch}A${wh} ${wh} 0 0 1 224 ${Ch}`,Eh=54,Dh=`
<svg viewBox="-8 -8 256 140">
  <defs>
    <linearGradient id="charge-gauge-hot" gradientUnits="userSpaceOnUse" x1="16" y1="0" x2="224" y2="0">
      <stop offset="0" stop-color="#ffe9a3"/>
      <stop offset="0.5" stop-color="#ffb43d"/>
      <stop offset="0.8" stop-color="#ff7a2c"/>
      <stop offset="1" stop-color="#ff3d2a"/>
    </linearGradient>
  </defs>
  <path class="gauge-face" d="${Th}Z"/>
  <path class="gauge-rim" d="${Th}"/>
  <path class="gauge-track" d="${Th}"/>
  <path class="gauge-cancel" d="${Th}" pathLength="100"/>
  <g class="gauge-ticks"></g>
  <path class="gauge-fill" d="${Th}" pathLength="100" stroke-dasharray="0 101"/>
  <g class="gauge-last"><line class="gauge-last-shadow"/><line class="gauge-last-line"/></g>
</svg>`,Oh=`
<svg viewBox="0 0 120 120">
  <circle class="ring-track" cx="60" cy="60" r="${Eh}"/>
  <circle class="ring-fill" cx="60" cy="60" r="${Eh}" pathLength="100" stroke-dasharray="0 101" transform="rotate(-90 60 60)"/>
  <line class="ring-last" x1="60" y1="-1" x2="60" y2="13"/>
</svg>`,kh=`http://www.w3.org/2000/svg`;function Ah(e,t){let n=Math.PI*(1-e);return[Sh+t*Math.cos(n),Ch-t*Math.sin(n)]}var jh=class{element;ring;fill;cancel;last;lastLines;ringFill;ringLast;label;value;fireLabel;charging=!1;quarter=0;cancelBelow=-1;constructor(e){this.fireLabel=e;let t=Y(Dh,`gauge-arc`);this.fill=t.querySelector(`.gauge-fill`),this.cancel=t.querySelector(`.gauge-cancel`),this.last=t.querySelector(`.gauge-last`),this.lastLines=[...this.last.querySelectorAll(`line`)];let n=t.querySelector(`.gauge-ticks`);for(let e=0;e<=10;e++){let t=e%5==0,[r,i]=Ah(e/10,115),[a,o]=Ah(e/10,wh+(t?19:15)),s=document.createElementNS(kh,`line`);s.setAttribute(`x1`,r.toFixed(1)),s.setAttribute(`y1`,i.toFixed(1)),s.setAttribute(`x2`,a.toFixed(1)),s.setAttribute(`y2`,o.toFixed(1)),t&&s.classList.add(`major`),n.append(s)}this.label=J(`div`,{class:`gauge-label`}),this.value=J(`div`,{class:`gauge-value`}),this.element=J(`div`,{class:`charge-gauge`},t,J(`div`,{class:`gauge-text`},this.label,this.value)),this.ring=Y(Oh,`fire-ring`),this.ringFill=this.ring.querySelector(`.ring-fill`),this.ringLast=this.ring.querySelector(`.ring-last`),this.setCharge(null),this.setReadout(null,null)}setCancelZone(e){e!==this.cancelBelow&&(this.cancelBelow=e,this.cancel.setAttribute(`stroke-dasharray`,`${(Math.max(0,e)*100).toFixed(1)} 101`))}setCharge(e){let t=e?.power??0,n=e?.phase??``,r=e!==null&&!this.charging;this.charging=e!==null;for(let e of[this.element,this.ring])e.classList.toggle(`charging`,this.charging),e.dataset.phase=n,e.style.setProperty(`--power`,t.toFixed(3));let i=`${(t*100).toFixed(2)} 101`;this.fill.setAttribute(`stroke-dasharray`,i),this.ringFill.setAttribute(`stroke-dasharray`,i),this.fireLabel.textContent=this.charging?n===`filling`?`${Math.round(t*100)}%`:`MAX`:`FIRE`,this.fireLabel.classList.toggle(`power`,this.charging);let a=this.charging?Math.min(4,Math.floor(t*4+1e-6)):0;(r||a>this.quarter)&&(eh(this.value,`bump`),navigator.vibrate?.(a>=4?28:10)),this.quarter=this.charging?Math.max(this.quarter,a):0}setReadout(e,t){let n=this.element.dataset.phase===`grace`||this.element.dataset.phase===`overcharged`,r=e===null?t===null?`Power`:`Last shot`:n?`Release!`:`Power`;this.label.textContent!==r&&(this.label.textContent=r);let i=e??t,a=i===null?`–`:`${Math.round(i*100)}%`;if(this.value.textContent!==a&&(this.value.textContent=a),this.value.style.color=e===null?``:`hsl(${(46-40*e).toFixed(0)} 100% ${(72-12*e).toFixed(0)}%)`,this.last.style.display=t===null?`none`:``,this.ringLast.style.display=t===null?`none`:``,t===null)return;let[o,s]=Ah(t,92),[c,l]=Ah(t,116);for(let e of this.lastLines)e.setAttribute(`x1`,o.toFixed(1)),e.setAttribute(`y1`,s.toFixed(1)),e.setAttribute(`x2`,c.toFixed(1)),e.setAttribute(`y2`,l.toFixed(1));this.ringLast.setAttribute(`transform`,`rotate(${(t*360).toFixed(1)} 60 60)`)}},Mh=`
<svg>
  <line class="sling-strap"/>
  <line class="sling-strap"/>
  <circle class="sling-prong"/>
  <circle class="sling-prong"/>
  <circle class="sling-pouch"/>
  <text class="sling-power"/>
</svg>`,Nh=20,Ph=13,Fh=5.5,Ih=7,Lh=class{element;bands;prongs;pouch;label;scale=1;constructor(){this.element=Y(Mh,`sling-band`),this.bands=[...this.element.querySelectorAll(`.sling-strap`)],this.prongs=[...this.element.querySelectorAll(`.sling-prong`)],this.pouch=this.element.querySelector(`.sling-pouch`),this.label=this.element.querySelector(`.sling-power`)}show(e){this.element.classList.contains(`open`)||(this.scale=parseFloat(getComputedStyle(this.element).getPropertyValue(`--ui-scale`))||1,this.element.classList.add(`open`));let t=this.scale,{startX:n,startY:r,x:i,y:a,power:o,label:s,cancel:c}=e;this.element.classList.toggle(`cancel`,c),this.element.style.setProperty(`--power`,o.toFixed(3));let l=(Ih+-3.5*o)*t;this.bands.forEach((e,o)=>{e.setAttribute(`x1`,(n+(o===0?-20:Nh)*t).toFixed(1)),e.setAttribute(`y1`,r.toFixed(1)),e.setAttribute(`x2`,i.toFixed(1)),e.setAttribute(`y2`,a.toFixed(1)),e.setAttribute(`stroke-width`,l.toFixed(2))}),this.prongs.forEach((e,i)=>{e.setAttribute(`cx`,(n+(i===0?-20:Nh)*t).toFixed(1)),e.setAttribute(`cy`,r.toFixed(1)),e.setAttribute(`r`,(Fh*t).toFixed(1))}),this.pouch.setAttribute(`cx`,i.toFixed(1)),this.pouch.setAttribute(`cy`,a.toFixed(1)),this.pouch.setAttribute(`r`,(Ph*t).toFixed(1));let u=i>=n?1:-1;this.label.setAttribute(`x`,(i+u*23*t).toFixed(1)),this.label.setAttribute(`y`,(a+8*t).toFixed(1)),this.label.setAttribute(`text-anchor`,u>0?`start`:`end`),this.label.style.fontSize=`${(26*t).toFixed(1)}px`,this.label.textContent=c?`CANCEL`:s}hide(){this.element.classList.remove(`open`)}},Rh=.88,zh=`.fire-btn`,Bh=null,Vh=null,Hh=matchMedia(`(prefers-reduced-motion: reduce)`),Uh=matchMedia(`(pointer: coarse)`);function Wh(){return Bh}function Gh(e){Uh.matches&&navigator.vibrate?.(e)}function Kh(e){Bh=e;let t=new Map;window.addEventListener(`pointerdown`,e=>{let n=e.target?.closest?.(`button`);if(!(n instanceof HTMLButtonElement)||n.disabled)return;t.get(e.pointerId)?.squash?.cancel();let r=qh(n,[{scale:1},{scale:Rh}],{duration:70,easing:`ease-out`,fill:`forwards`});t.set(e.pointerId,{el:n,squash:r}),n.matches(zh)||Bh?.press(),Gh(8)},!0);let n=e=>{let n=t.get(e.pointerId);n&&(t.delete(e.pointerId),n.squash?.cancel(),qh(n.el,[{scale:Rh,easing:`ease-out`},{scale:1.09,offset:.35,easing:`ease-in-out`},{scale:.97,offset:.68,easing:`ease-in-out`},{scale:1}],{duration:380}))};window.addEventListener(`pointerup`,n,!0),window.addEventListener(`pointercancel`,n,!0)}function qh(e,t,n){return Hh.matches||!e.isConnected?null:e.animate(t,n)}function Jh(e){return e?e.finished.then(()=>void 0,()=>void 0):Promise.resolve()}var Yh={top:[`0 -140%`,`0 6%`],bottom:[`0 140%`,`0 -6%`],left:[`-140% 0`,`6% 0`],right:[`140% 0`,`-6% 0`]};function Xh(e,t,n=0,r=420){let[i,a]=Yh[t];return qh(e,[{translate:i,opacity:0,easing:`cubic-bezier(0.2, 0.8, 0.3, 1)`},{translate:a,opacity:1,offset:.62,easing:`ease-in-out`},{translate:`0 0`,opacity:1}],{duration:r,delay:n,fill:`backwards`})}function Zh(e,t,n=0,r=220){let[i]=Yh[t];return qh(e,[{translate:`0 0`,opacity:1},{translate:i,opacity:0}],{duration:r,delay:n,easing:`cubic-bezier(0.5, 0, 0.9, 0.5)`,fill:`forwards`})}function Qh(e,t=0,n=420){return qh(e,[{scale:.2,opacity:0,easing:`cubic-bezier(0.2, 0.9, 0.3, 1)`},{scale:1.14,opacity:1,offset:.55,easing:`ease-in-out`},{scale:.96,offset:.8,easing:`ease-in-out`},{scale:1,opacity:1}],{duration:n,delay:t,fill:`backwards`})}function $h(e,t=160){return qh(e,[{scale:1,opacity:1},{scale:.75,opacity:0}],{duration:t,easing:`ease-in`,fill:`forwards`})}function eg(e,t=0,n=!0){return n&&window.setTimeout(()=>Bh?.slam(),t+170),qh(e,[{scale:3,opacity:0,easing:`cubic-bezier(0.6, 0, 1, 0.6)`},{scale:.9,opacity:1,offset:.5,easing:`ease-out`},{scale:1.06,offset:.75,easing:`ease-in-out`},{scale:1,opacity:1}],{duration:380,delay:t,fill:`backwards`})}function tg(e,t=8,n=0){let r=[];for(let e=0;e<=8;e++){let n=t*(1-e/8)*(e%2?-1:1);r.push({translate:`${e===8?0:n}px ${e===8?0:-n*.3}px`})}return qh(e,r,{duration:360,delay:n,composite:`add`})}function ng(e,t=1.25){return qh(e,[{scale:1},{scale:t,offset:.3},{scale:1}],{duration:240,easing:`ease-out`,composite:`add`})}function rg(e,t,n,r=900){let i=n<t,a=t,o=0,s=0;return e.textContent=String(t),new Promise(c=>{if(t===n)return c();let l=performance.now(),u=d=>{let f=Math.min(1,(d-l)/r),p=Math.round(t+(n-t)*(1-(1-f)**2));p!==a&&(a=p,e.textContent=String(p),d-o>45&&(o=d,Bh?.tick(s++,i))),f<1&&e.isConnected?requestAnimationFrame(u):(e.textContent=String(n),c())};requestAnimationFrame(u)})}function ig(){return Vh||(Vh=document.createElement(`div`),Vh.className=`feel-layer`,document.body.append(Vh)),Vh}function ag(e){let t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}function og(e,t,n,r){let i=document.createElement(`div`);return i.className=e?`feel-particle`:`feel-spark`,i.style.left=`${t}px`,i.style.top=`${n}px`,i.style.width=i.style.height=`${r}px`,e&&i.append(Y(e,`feel-particle-icon`)),ig().append(i),i}function sg(e,t,n,r=!1){if(Hh.matches)return;let{x:i,y:a}=ag(e);for(let e=0;e<n+6;e++){let o=e>=n,s=r?Math.PI/2+(Math.random()-.5)*1.6:-Math.PI/2+(Math.random()-.5)*2.6,c=(o?40:55)+Math.random()*(o?50:70),l=Math.cos(s)*c,u=Math.sin(s)*c,d=og(o?null:t,i,a,o?10:22),f=(Math.random()-.5)*540;Jh(d.animate([{translate:`-50% -50%`,scale:.3,rotate:`0deg`,opacity:1},{translate:`calc(-50% + ${l}px) calc(-50% + ${u}px)`,scale:o?1.2:1,rotate:`${f*.6}deg`,opacity:1,offset:.4},{translate:`calc(-50% + ${l*1.3}px) calc(-50% + ${u+70}px)`,scale:.6,rotate:`${f}deg`,opacity:0}],{duration:700+Math.random()*300,easing:`cubic-bezier(0.2, 0.7, 0.4, 1)`})).then(()=>d.remove())}}function cg(e,t,n,r,i){let a=ag(t),o=[];for(let t=0;t<r;t++){let r=120+t*70;if(Hh.matches){o.push(new Promise(e=>window.setTimeout(()=>(i(t),e()),r)));continue}let s=og(n,e.x,e.y,30),c=Math.random()*Math.PI*2,l=Math.cos(c)*(30+Math.random()*50),u=Math.sin(c)*(30+Math.random()*40),d=a.x-e.x,f=a.y-e.y,p=s.animate([{translate:`-50% -50%`,scale:.2,opacity:0,easing:`cubic-bezier(0.2, 0.9, 0.3, 1)`},{translate:`calc(-50% + ${l}px) calc(-50% + ${u}px)`,scale:1.15,opacity:1,offset:.3,easing:`ease-in-out`},{translate:`calc(-50% + ${l}px) calc(-50% + ${u-6}px)`,scale:1,opacity:1,offset:.42,easing:`cubic-bezier(0.55, 0, 0.9, 0.6)`},{translate:`calc(-50% + ${d}px) calc(-50% + ${f}px)`,scale:.55,opacity:1}],{duration:820,delay:r,fill:`backwards`});o.push(Jh(p).then(()=>{s.remove(),i(t)}))}return Promise.all(o).then(()=>void 0)}function lg(e,t,n,r=420){let i=t??{x:innerWidth/2,y:innerHeight/2},a=Math.hypot(Math.max(i.x,innerWidth-i.x),Math.max(i.y,innerHeight-i.y)),o=`circle(0px at ${i.x}px ${i.y}px)`,s=`circle(${a}px at ${i.x}px ${i.y}px)`;return qh(e,[{clipPath:n?o:s},{clipPath:n?s:o}],{duration:r,easing:n?`cubic-bezier(0.5, 0, 0.2, 1)`:`cubic-bezier(0.6, 0, 0.9, 0.4)`,fill:n?`backwards`:`forwards`})}function ug(e){return ag(e)}var dg={antiMissile:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6.6" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M12 1.8v5M12 17.2v5M1.8 12h5M17.2 12h5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="12" r="2.2" fill="currentColor"/></svg>`,healer:`<svg viewBox="0 0 24 24"><path d="M9.2 3h5.6v6.2H21v5.6h-6.2V21H9.2v-6.2H3V9.2h6.2Z" fill="currentColor"/></svg>`,charger:`<svg viewBox="0 0 24 24"><path d="M13.8 1.8 4.6 13.6h5.9L9.2 22.2l10.2-12.6h-6Z" fill="currentColor"/></svg>`,shield:`<svg viewBox="0 0 24 24"><path d="M3.2 18.2a8.8 8.8 0 0 1 17.6 0Z" fill="currentColor" opacity=".3"/><path d="M3.2 18.2a8.8 8.8 0 0 1 17.6 0" fill="none" stroke="currentColor" stroke-width="2.3"/><path d="M8.4 12.6 12 10.5l3.6 2.1M12 10.5V6.6M8.4 12.6v4.4M15.6 12.6v4.4" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M1.6 19.8h20.8" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"/></svg>`},fg={antiMissile:`#c58bff`,healer:`#5fe08a`,charger:`#ff6a5a`,shield:`#6fc8ff`};function pg(e,t){let n=t===`enemy`?`your`:`their`;return e===`antiMissile`?`Zaps ${n} next hit`:e===`shield`?`Blocks ${n} next ball`:null}var mg=e=>e===`antiMissile`||e===`shield`,hg=e=>mg(e.kind)?e.recharge<=0:!e.idle;function gg(e,t,n){let r=t=>{let n=t*Math.PI/180;return`${(20+e*Math.sin(n)).toFixed(2)} ${(20-e*Math.cos(n)).toFixed(2)}`};return`M${r(t)}A${e} ${e} 0 ${+(n-t>180)} 1 ${r(n)}`}function _g(e){let t=Math.max(1,Math.round(e));if(t===1)return`<svg class="mc-ring" viewBox="0 0 40 40"><circle class="mc-seg" cx="20" cy="20" r="17.4"/></svg>`;let n=360/t;return`<svg class="mc-ring" viewBox="0 0 40 40">${Array.from({length:t},(e,t)=>`<path class="mc-seg" d="${gg(17.4,t*n+8,(t+1)*n-8)}"/>`).join(``)}</svg>`}var vg=class{side;onTip;onChange;element;row;tags;chips=new Map;tagEls=new Map;target=!1;constructor(e,t,n){this.side=e,this.onTip=t,this.onChange=n,this.row=J(`div`,{class:`mc-row`}),this.tags=J(`div`,{class:`mc-tags`}),this.element=J(`div`,{class:`machine-tray ${e}`},this.row,this.tags)}get count(){return this.chips.size}info(e){return this.chips.get(e)?.info??null}chipElement(e){return this.chips.get(e)?.el??null}set(e,t,n=()=>!1){let r=new Set(e.map(e=>e.kind));for(let e of[...this.chips.keys()])!r.has(e)&&!n(e)&&this.remove(e,t?`gone`:`quiet`);for(let r of e)n(r.kind)||(this.chips.has(r.kind)?this.update(r,t):this.add(r,t?`pop`:`quiet`))}setTarget(e){this.target!==e&&(this.target=e,this.refreshTags(!0))}add(e,t){let n=this.chips.get(e.kind);if(n)return this.update(e,!1),n.el;let r=J(`button`,{class:`mc mc-${e.kind}`,attrs:{"aria-label":e.name,type:`button`}});r.style.setProperty(`--c`,fg[e.kind]),r.append(Y(_g(e.every),`mc-ring`),J(`span`,{class:`mc-core`},Y(dg[e.kind],`mc-glyph`)),J(`span`,{class:`mc-count`}),J(`span`,{class:`mc-hp`},J(`i`)));let i={el:r,segs:[...r.querySelectorAll(`.mc-seg`)],count:r.querySelector(`.mc-count`),hpFill:r.querySelector(`.mc-hp i`),info:e,coming:t===`hidden`};return X(r,()=>this.onTip(this,e.kind)),this.flip(()=>{this.chips.set(e.kind,i);let t=[`antiMissile`,`healer`,`charger`,`shield`],n=[...this.chips.keys()].filter(n=>t.indexOf(n)>t.indexOf(e.kind)).map(e=>this.chips.get(e).el).find(e=>e.parentElement===this.row);n?this.row.insertBefore(r,n):this.row.append(r)}),this.paint(i,!1),t===`hidden`&&r.classList.add(`coming`),t===`pop`&&this.reveal(e.kind),this.onChange(),r}reveal(e){let t=this.chips.get(e);t&&(t.coming=!1,t.el.classList.remove(`coming`),Qh(t.el,0,460),yg(t.el),sg(t.el,dg[e],4),this.refreshTags(!0))}remove(e,t){let n=this.chips.get(e);if(!n)return;this.chips.delete(e),this.dropTag(e,t!==`quiet`);let r=n.el,i=()=>this.flip(()=>{r.remove()});if(t===`quiet`)i();else{let n=t===`gone`?[{scale:1,rotate:`0deg`,opacity:1,filter:`brightness(1)`},{scale:1.45,rotate:`-12deg`,opacity:1,filter:`brightness(2.4)`,offset:.25},{scale:.2,rotate:`35deg`,opacity:0,filter:`brightness(1)`}]:[{translate:`0 0`,scale:1,opacity:1},{translate:`0 -60%`,scale:1.2,opacity:1,offset:.35},{translate:`0 -160%`,scale:.4,opacity:0}];t===`gone`&&sg(r,dg[e],5,!0),Jh(qh(r,n,{duration:t===`gone`?520:420,easing:`cubic-bezier(0.3, 0.7, 0.4, 1)`,fill:`forwards`})).then(i)}this.onChange()}update(e,t){let n=this.chips.get(e.kind);if(!n)return;let r=n.info;n.info=e,this.paint(n,t&&!n.coming?r:!1)}fired(e,t){let n=this.chips.get(e.kind);n&&(n.info=e,this.paint(n,!1),qh(n.el,[{filter:`brightness(3) saturate(0.6)`,scale:1.35},{filter:`brightness(1) saturate(1)`,scale:1}],{duration:520,easing:`cubic-bezier(0.2, 0.8, 0.3, 1)`,composite:`add`}),yg(n.el),bg(n.el,t,this.side))}hit(e){let t=this.chips.get(e.kind);if(!t)return;t.info=e,this.paint(t,!1),tg(t.el,7);let n=J(`span`,{class:`mc-flash`});t.el.querySelector(`.mc-core`).append(n),Jh(qh(n,[{opacity:1},{opacity:0}],{duration:450,easing:`ease-out`})).then(()=>n.remove())}pulse(e){let t=this.chips.get(e);t&&(ng(t.el,1.4),yg(t.el))}clear(){for(let e of[...this.chips.keys()])this.remove(e,`quiet`)}paint(e,t){let n=e.info,r=e.segs.length,i=Math.max(1,Math.round(n.every)),a=n.every>0?Math.round(r*(i-Math.min(i,n.recharge))/i):n.idle?0:r,o=t?t.every>0?Math.round(r*(i-Math.min(i,t.recharge))/i):t.idle?0:r:a;e.segs.forEach((e,n)=>{e.classList.toggle(`on`,n<a),t&&n>=o&&n<a&&qh(e,[{strokeWidth:`7`,opacity:.2},{strokeWidth:`3.4`,opacity:1}],{duration:480,delay:120*(n-o),easing:`cubic-bezier(0.2, 0.9, 0.3, 1)`})}),e.count.textContent=n.every>0&&n.recharge>0?String(n.recharge):``,e.el.classList.toggle(`charging`,n.every>0&&n.recharge>0),e.el.classList.toggle(`idle`,n.idle),e.el.classList.toggle(`armed`,hg(n));let s=Math.max(0,Math.min(1,n.hp/Math.max(1e-6,n.maxHp)));e.el.classList.toggle(`hurt`,s<.999),e.hpFill.style.width=`${(s*100).toFixed(1)}%`,e.el.setAttribute(`aria-label`,`${n.name}: ${n.tip.state}`),t&&hg(n)&&!hg(t)&&window.setTimeout(()=>{e.el.isConnected&&(ng(e.el,1.45),yg(e.el),mg(n.kind)&&bg(e.el,n.kind===`shield`?`UP!`:`ARMED!`,this.side))},200+120*Math.max(0,a-o-1)),this.refreshTags(!!t)}refreshTags(e){for(let[t,n]of this.chips){let r=this.target&&!n.coming&&hg(n.info)?pg(t,this.side):null,i=this.tagEls.get(t);if(r&&!i){let n=J(`div`,{class:`mc-tag mc-tag-${t} ${this.side===`enemy`?`danger`:`friendly`}`},Y(dg[t],`mc-tag-glyph`),J(`span`,{text:r}));n.style.setProperty(`--c`,fg[t]),this.tagEls.set(t,n),this.tags.append(n),e&&qh(n,[{translate:`0 -8px`,scale:.6,opacity:0},{translate:`0 2px`,scale:1.08,opacity:1,offset:.6},{translate:`0 0`,scale:1,opacity:1}],{duration:420,delay:120,easing:`cubic-bezier(0.2, 0.9, 0.3, 1)`,fill:`backwards`})}else!r&&i&&this.dropTag(t,e)}for(let t of[...this.tagEls.keys()])this.chips.has(t)||this.dropTag(t,e)}dropTag(e,t){let n=this.tagEls.get(e);if(n){if(this.tagEls.delete(e),!t)return n.remove();Jh(qh(n,[{scale:1,opacity:1},{scale:.7,opacity:0}],{duration:200,easing:`ease-in`,fill:`forwards`})).then(()=>n.remove())}}flip(e){let t=new Map([...this.row.children].map(e=>[e,e.getBoundingClientRect().left]));e();for(let e of this.row.children){let n=t.get(e);if(n===void 0)continue;let r=n-e.getBoundingClientRect().left;Math.abs(r)>.5&&qh(e,[{translate:`${r}px 0`},{translate:`0 0`}],{duration:300,easing:`cubic-bezier(0.2, 0.8, 0.3, 1)`,composite:`add`})}}};function yg(e){let t=J(`span`,{class:`mc-ripple`});e.append(t),Jh(qh(t,[{scale:.8,opacity:.9},{scale:2.1,opacity:0}],{duration:620,easing:`cubic-bezier(0.2, 0.7, 0.3, 1)`})).then(()=>t.remove())}function bg(e,t,n){let r=e.closest(`.machine-tray`);if(!r)return;let i=J(`span`,{class:`mc-pop ${n}`,text:t});i.style.setProperty(`--c`,getComputedStyle(e).getPropertyValue(`--c`)),i.style.left=`${e.offsetLeft+e.offsetWidth/2}px`,i.style.top=`${e.offsetTop+e.offsetHeight*.6}px`,r.append(i),Jh(qh(i,[{translate:`-50% 0`,scale:.4,opacity:0},{translate:`-50% 120%`,scale:1.15,opacity:1,offset:.3},{translate:`-50% 150%`,scale:1,opacity:1,offset:.75},{translate:`-50% 170%`,scale:.9,opacity:0}],{duration:1100,easing:`cubic-bezier(0.2, 0.8, 0.3, 1)`})).then(()=>i.remove())}var xg=class{onCount;trays;flying=new Map;tip=null;tipTimer=0;constructor(e){this.onCount=e;let t=()=>this.onCount({player:this.trays.player.count,enemy:this.trays.enemy.count});this.trays={player:new vg(`player`,(e,t)=>this.openTip(e,t),t),enemy:new vg(`enemy`,(e,t)=>this.openTip(e,t),t)},window.addEventListener(`pointerdown`,e=>{this.tip&&!(e.target instanceof Node&&(this.tip.contains(e.target)||e.target.closest?.(`.mc`)))&&this.closeTip()})}setTarget(e){this.trays.player.setTarget(e===`player`),this.trays.enemy.setTarget(e===`enemy`)}built(e,t,n){let r=this.trays[e];if(n)return void r.add(t,`quiet`);let i=r.add(t,`hidden`);this.fly({x:innerWidth/2,y:innerHeight*.55},i,t.kind,650,80).then(()=>r.reveal(t.kind))}steal(e,t,n,r){let i=this.trays[e].chipElement(n.kind),a=i?ug(i):{x:e===`player`?80:innerWidth-80,y:70};this.trays[e].remove(n.kind,`stolen`);let o=this.trays[t].add(n,`hidden`);this.flying.get(`${t}:${n.kind}`)?.remove();let s=this.flyer(a,o,n.kind,Math.max(300,r*1e3),-40,140,!0);this.flying.set(`${t}:${n.kind}`,s)}landed(e,t){let n=`${e}:${t}`;this.flying.get(n)?.remove(),this.flying.delete(n),this.trays[e].reveal(t)}fly(e,t,n,r,i,a=0){let o=this.flyer(e,t,n,r,i,a,!1);return Jh(o.getAnimations()[0]??null).then(()=>o.remove())}flyer(e,t,n,r,i,a,o){let s=ug(t),c=J(`div`,{class:`mc-flyer`},Y(dg[n],`mc-glyph`));c.style.setProperty(`--c`,fg[n]),c.style.left=`${e.x}px`,c.style.top=`${e.y}px`,document.body.append(c);let l=s.x-e.x,u=s.y-e.y,d=`calc(-50% + ${l}px) calc(-50% + ${u}px)`;return qh(c,[{translate:`-50% -50%`,scale:.4,rotate:`0deg`,opacity:0},{translate:`calc(-50% + ${l*.15}px) calc(-50% + ${u*.15-i*.6}px)`,scale:1.5,rotate:`-20deg`,opacity:1,offset:.2},{translate:`calc(-50% + ${l*.55}px) calc(-50% + ${u*.55-i}px)`,scale:1.3,rotate:`200deg`,opacity:1,offset:.6},{translate:d,scale:.9,rotate:`360deg`,opacity:1}],{duration:r,delay:a,easing:`cubic-bezier(0.45, 0, 0.55, 1)`,fill:o?`both`:`backwards`})||(c.style.translate=d),c}clear(){this.closeTip();for(let e of this.flying.values())e.remove();this.flying.clear(),this.trays.player.clear(),this.trays.enemy.clear()}openTip(e,t){let n=e.info(t),r=e.chipElement(t);if(!n||!r)return;let i=this.tip?.dataset.kind===`${e.side}:${t}`;if(this.closeTip(),i)return;let a=e.side===`player`?`Yours`:`Theirs`,o=J(`div`,{class:`mc-tip ${e.side}`,attrs:{"data-kind":`${e.side}:${t}`}},J(`div`,{class:`mc-tip-head`},Y(dg[t],`mc-tip-glyph`),J(`div`,{class:`mc-tip-name`,text:n.name}),J(`div`,{class:`mc-tip-whose`,text:a})),J(`div`,{class:`mc-tip-state${hg(n)?` on`:``}`,text:n.tip.state}),J(`div`,{class:`mc-tip-body`,text:n.tip.body}),J(`div`,{class:`mc-tip-foot`,text:n.tip.foot}));o.style.setProperty(`--c`,fg[t]),e.element.append(o),o.style.setProperty(`--arrow`,`${ug(r).x-o.getBoundingClientRect().left}px`),this.tip=o,qh(o,[{translate:`0 -6px`,scale:.92,opacity:0},{translate:`0 0`,scale:1,opacity:1}],{duration:200,easing:`cubic-bezier(0.2, 0.9, 0.3, 1)`}),this.tipTimer=window.setTimeout(()=>this.closeTip(),5e3)}closeTip(){window.clearTimeout(this.tipTimer);let e=this.tip;this.tip=null,e&&Jh(qh(e,[{opacity:1},{opacity:0}],{duration:140,fill:`forwards`})).then(()=>e.remove())}},Sg=`<svg viewBox="0 0 64 64"><path d="M26 6c3 0 5 2 5 5v17l2-1c3-1 6 0 7 3l1-1c3-1 6 1 6 4l1-.5c3-1 6 1 6 4v12c0 9-7 15-16 15h-4c-6 0-10-3-13-8L10 39c-2-3-1-6 2-7 2-1 5 0 6 2l3 4V11c0-3 2-5 5-5z" fill="#fff" stroke="#1d2733" stroke-width="3.5" stroke-linejoin="round"/></svg>`,Cg=class{element;head;row;hand;opponent;cards=[];onPick=null;pickHandler=null;question=null;picked=!1;timers=[];handShown=!1;constructor(e){this.head=J(`div`,{class:`draft-head`}),this.row=J(`div`,{class:`draft-row`}),this.hand=J(`div`,{class:`draft-hand`},Y(Sg,`draft-hand-svg`)),this.opponent=J(`div`,{class:`draft-opponent`}),this.element=J(`div`,{class:`draft`},J(`div`,{class:`draft-shade`}),this.head,this.row,this.hand,this.opponent),e.append(this.element)}get waiting(){return this.onPick!==null&&!this.picked}show(e,t,n,r,i=0){this.clear(),this.onPick=r,this.pickHandler=r,this.picked=!1,this.element.classList.add(`open`,`mine`),this.head.replaceChildren(J(`div`,{class:`draft-title`,text:t}),J(`div`,{class:`draft-sub`,text:n})),this.head.style.animationDelay=`${i}s`,this.cards=e.map((t,n)=>{let r=this.card(t,n,e.length);return r.style.setProperty(`--deal-delay`,`${i+.12+n*.09}s`),X(r,()=>this.choose(n)),r}),this.row.replaceChildren(...this.cards),wg(this.row),!this.handShown&&e.length>0&&(this.handShown=!0,this.hand.style.animationDelay=`${i+.9}s`,this.hand.classList.add(`on`))}choose(e){if(this.question)return this.answer(e);if(!this.onPick||this.picked||!this.cards[e])return;this.picked=!0,this.hand.classList.remove(`on`);let t=this.onPick;this.onPick=null,t(e)}ask(e,t,n,r){this.hand.classList.remove(`on`);let i=n.map((e,t)=>{let n=J(`div`,{class:`draft-ask-bar`},J(`div`,{class:`draft-ask-fill`}));n.firstElementChild.style.width=`${Math.round(100*Math.max(0,Math.min(1,e.health)))}%`;let r=J(`button`,{class:`draft-ask-option`,attrs:{"aria-label":e.name}},J(`div`,{class:`draft-ask-key`,text:String(t+1)}),J(`div`,{class:`draft-ask-icon`},Y(e.icon,`draft-ask-svg`)),J(`div`,{class:`draft-ask-name`,text:e.name}),n,e.note?J(`div`,{class:`draft-ask-note`,text:e.note}):null);return r.style.setProperty(`--pop-delay`,`${.08+t*.07}s`),X(r,()=>this.answer(t)),r}),a=J(`button`,{class:`draft-ask-back`,text:`Back`});X(a,()=>this.back());let o=J(`div`,{class:`draft-ask`},J(`div`,{class:`draft-ask-title`,text:e}),J(`div`,{class:`draft-ask-sub`,text:t}),J(`div`,{class:`draft-ask-row`},...i),a);this.question?.panel.remove(),this.question={panel:o,onChoose:r,count:n.length},this.element.append(o),this.element.classList.add(`asking`)}get asking(){return this.question!==null}answer(e){let t=this.question;!t||e<0||e>=t.count||(this.closeQuestion(),t.onChoose(e))}back(){this.question&&(this.closeQuestion(),this.picked=!1,this.onPick=this.pickHandler)}closeQuestion(){this.question?.panel.remove(),this.question=null,this.element.classList.remove(`asking`)}fly(e,t,n){this.cards.forEach((t,n)=>{t.disabled=!0,t.classList.add(n===e?`chosen`:`drop`)});let r=this.cards[e];this.element.classList.add(`closing`),this.later(.42,()=>{if(r&&t){let e=r.getBoundingClientRect();r.style.setProperty(`--fly-x`,`${t.x-(e.left+e.width/2)}px`),r.style.setProperty(`--fly-y`,`${t.y-(e.top+e.height/2)}px`)}r?.classList.add(t?`fly`:`fade`)}),this.later(.9,()=>{this.hide(),n?.()})}showOpponent(e,t,n,r,i){this.clear(),this.element.classList.add(`open`,`theirs`);let a=t.map((e,n)=>{let r=this.card(e,n,t.length);return r.disabled=!0,r.style.setProperty(`--deal-delay`,`${.05+n*.1}s`),r}),o=J(`div`,{class:`draft-opp-caption`,text:`${e} is picking…`});this.opponent.replaceChildren(o,J(`div`,{class:`draft-opp-row`},...a)),wg(this.opponent),this.later(1,()=>{o.textContent=`${e} took ${t[n]?.title??`a card`}!`,a.forEach((e,t)=>e.classList.add(t===n?`chosen`:`drop`))}),this.later(1.65,()=>{let e=a[n],t=r();if(e&&t){let n=e.getBoundingClientRect();e.style.setProperty(`--fly-x`,`${t.x-(n.left+n.width/2)}px`),e.style.setProperty(`--fly-y`,`${t.y-(n.top+n.height/2)}px`)}e?.classList.add(t?`fly`:`fade`)}),this.later(2.2,()=>{this.hide(),i()})}hide(){this.clear(),this.element.classList.remove(`open`,`mine`,`theirs`,`closing`),this.row.replaceChildren(),this.opponent.replaceChildren(),this.head.replaceChildren()}clear(){for(let e of this.timers)window.clearTimeout(e);this.timers=[],this.closeQuestion(),this.hand.classList.remove(`on`),this.element.classList.remove(`closing`),this.onPick=null}later(e,t){this.timers.push(window.setTimeout(t,e*1e3))}card(e,t,n){let r=J(`div`,{class:`draft-art`},Y(bh(e.kind),`draft-art-svg`)),i=e.unit?J(`div`,{class:`draft-unit`},J(`div`,{class:`draft-unit-icon`},Y(e.unit.icon,`draft-unit-svg`)),J(`div`,{class:`draft-unit-name`,text:e.unit.name})):null,a=e.rare?J(`div`,{class:`draft-tag rare`,text:`RARE`}):e.machine?J(`div`,{class:`draft-tag machine`,text:`MACHINE`}):null,o=J(`div`,{class:`draft-ribbon`},J(`span`,{text:e.ribbon})),s=J(`div`,{class:`draft-text`},J(`div`,{class:`draft-desc`,text:e.description})),c=J(`button`,{class:`draft-card ${e.rare?`rare`:`common`} kind-${e.kind}`,attrs:{"aria-label":`${e.title}: ${e.description}`}},J(`div`,{class:`draft-card-face`},r,i,a,o,s));return c.style.setProperty(`--tilt`,`${(t-(n-1)/2)*3}deg`),c.style.setProperty(`--float-delay`,`${t*-.7}s`),c}};function wg(e){for(let t of e.querySelectorAll(`.draft-text`))for(let e=1;t.scrollHeight>t.clientHeight+1&&e>.6;)e-=.08,t.style.setProperty(`--fit`,String(e))}var Tg=`<svg viewBox="-100 -100 200 200" class="scope-reticle-svg">
  <path d="M-100 0 H-14 M14 0 H100" stroke="#000" stroke-width="1.6"/>
  <path d="M0 -100 V-6" stroke="#000" stroke-width="1.2"/>
  <path d="M-100 -2.6 H-30 L-14 -1 V1 L-30 2.6 H-100 Z M100 -2.6 H30 L14 -1 V1 L30 2.6 H100 Z M-2.6 100 V30 L-1 10 H1 L2.6 30 V100 Z" fill="#000"/>
  <circle cx="0" cy="0" r="1.3" fill="#c0262c"/>
</svg>`,Eg=class{element;hint;name;constructor(e){this.hint=J(`div`,{class:`scope-hint`}),this.name=J(`div`,{class:`scope-name`});let t=J(`div`,{class:`scope-reticle`});t.innerHTML=Tg,this.element=J(`div`,{class:`scope`},J(`div`,{class:`scope-lens`},J(`div`,{class:`scope-glint`})),t,this.name,this.hint),e.append(this.element)}show(e,t){this.name.textContent=`${e}'s rifle`,this.hint.textContent=t,this.element.classList.remove(`fired`),this.element.classList.add(`open`)}fired(){this.element.classList.remove(`fired`),this.element.offsetWidth,this.element.classList.add(`fired`)}hide(){this.element.classList.remove(`open`,`fired`)}},Dg=24,Og=(e,t,n)=>t>n?(t+n)/2:Math.min(n,Math.max(t,e)),kg=class{element;stick;knob;status;hint;constructor(e){this.knob=J(`div`,{class:`steer-knob`}),this.stick=J(`div`,{class:`steer-stick`},J(`div`,{class:`steer-dir up`,text:`▲ farther`}),J(`div`,{class:`steer-dir down`,text:`▼ shorter`}),J(`div`,{class:`steer-dir left`,text:`◀`}),J(`div`,{class:`steer-dir right`,text:`▶`}),this.knob),this.status=J(`div`,{class:`steer-status`}),this.hint=J(`div`,{class:`steer-hint`}),this.element=J(`div`,{class:`steer`},J(`div`,{class:`steer-top`},this.status),this.stick,this.hint),e.append(this.element)}get radius(){return Math.max(30,this.stick.getBoundingClientRect().width*.4)}show(e){this.element.classList.toggle(`touch`,e),this.hint.textContent=e?`Drag anywhere to steer`:`Steer with W A S D or the arrow keys (or drag)`,this.set(0,0,null),this.element.classList.add(`open`)}hide(){this.element.classList.remove(`open`,`dragging`)}set(e,t,n){let r=this.radius;if(this.knob.style.transform=`translate(calc(-50% + ${e*r}px), calc(-50% + ${-t*r}px))`,this.element.classList.toggle(`dragging`,n!==null),n){let e=this.element.getBoundingClientRect(),t=this.stick.offsetWidth/2+Dg;this.stick.style.left=`${Og(n.x-e.left,t,e.width-t)}px`,this.stick.style.top=`${Og(n.y-e.top,t,e.height-t)}px`}else this.stick.style.left=``,this.stick.style.top=``;let i=this.stick.querySelectorAll(`.steer-dir`);i[0].classList.toggle(`on`,t>.3),i[1].classList.toggle(`on`,t<-.3),i[2].classList.toggle(`on`,e<-.3),i[3].classList.toggle(`on`,e>.3)}setStatus(e,t){this.status.textContent!==e&&(this.status.textContent=e),this.status.classList.toggle(`good`,t)}},Ag=class{element;screen;reticle;readout;status;onPick=null;onMove=null;constructor(e){this.reticle=J(`div`,{class:`tablet-reticle`}),this.readout=J(`div`,{class:`tablet-readout`}),this.status=J(`div`,{class:`tablet-status`,text:`SAT-LINK · LIVE`}),this.screen=J(`div`,{class:`tablet-screen`},J(`div`,{class:`tablet-scan`}),J(`div`,{class:`tablet-title`,text:`SKY LASER`}),this.status,this.reticle,this.readout,J(`div`,{class:`tablet-hint`,text:`Tap where to strike`}));let t=J(`button`,{class:`tablet-back`,text:`◀ Back`});X(t,()=>this.onCancel?.()),this.element=J(`div`,{class:`tablet`},J(`div`,{class:`tablet-bezel`},this.screen,J(`div`,{class:`tablet-button`})),t),e.append(this.element),this.screen.addEventListener(`pointermove`,e=>this.move(e.clientX,e.clientY)),this.screen.addEventListener(`pointerdown`,e=>this.move(e.clientX,e.clientY)),this.screen.addEventListener(`click`,e=>{if(e.preventDefault(),!this.onPick||this.element.classList.contains(`locked`))return;this.move(e.clientX,e.clientY),this.element.classList.add(`locked`),this.status.textContent=`TARGET LOCKED`;let t=this.onPick;this.onPick=null,t(e.clientX,e.clientY)})}onCancel=null;get screenRect(){return this.screen.getBoundingClientRect()}show(e,t){this.onMove=e,this.onPick=t,this.status.textContent=`SAT-LINK · LIVE`,this.element.classList.remove(`locked`),this.element.classList.add(`open`);let n=this.screenRect;this.move(n.left+n.width/2,n.top+n.height/2)}hide(){this.onPick=null,this.onMove=null,this.element.classList.remove(`open`,`locked`)}move(e,t){if(!this.onMove||this.element.classList.contains(`locked`))return;let n=this.screenRect,r=Math.max(n.left,Math.min(n.right,e)),i=Math.max(n.top,Math.min(n.bottom,t));this.reticle.style.transform=`translate(${r-n.left}px, ${i-n.top}px) translate(-50%, -50%)`,this.readout.style.transform=`translate(${r-n.left}px, ${i-n.top}px)`,this.readout.textContent=this.onMove(r,i)}},jg=`#2a1600`,Mg=`<svg viewBox="0 0 32 32"><g stroke="${jg}" stroke-width="2" stroke-linejoin="round">
  <path d="M9.5 8H5.5v2.2a5 5 0 0 0 5 5M22.5 8h4v2.2a5 5 0 0 1-5 5" fill="none" stroke-width="2.6"/>
  <path d="M9 4.5h14V12a7 7 0 0 1-14 0z" fill="#ffc62a"/>
  <path d="M14 18.5h4v4h-4z" fill="#e9a000"/>
  <path d="M10 22.5h12v5H10z" fill="#ffc62a"/></g>
  <path d="M12.2 7.5v4.6a4.2 4.2 0 0 0 1.9 3.5" stroke="#fff3b0" stroke-width="1.7" fill="none" stroke-linecap="round"/></svg>`,Ng=`<svg viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="13.6" fill="#ffc62a" stroke="${jg}" stroke-width="2"/>
  <circle cx="16" cy="16" r="9.6" fill="#f0a600" stroke="#c27a00" stroke-width="1.4"/>
  <circle cx="16" cy="14.6" r="4.3" fill="#ffe27a"/><rect x="13.3" y="16.6" width="5.4" height="3.4" rx="1" fill="#ffe27a"/>
  <circle cx="14.4" cy="14.4" r="1.15" fill="#b26a00"/><circle cx="17.6" cy="14.4" r="1.15" fill="#b26a00"/>
  <path d="M7.4 12.6a9.2 9.2 0 0 1 5.4-5.6" stroke="#fff3b0" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>`,Pg=`<svg viewBox="0 0 24 24"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm8.4 5.3-1.9-.3a6.8 6.8 0 0 1-.6 1.5l1.1 1.6-1.6 1.6-1.6-1.1c-.5.3-1 .5-1.5.6l-.3 1.9h-2.3l-.3-1.9a6.8 6.8 0 0 1-1.5-.6l-1.6 1.1-1.6-1.6 1.1-1.6a6.8 6.8 0 0 1-.6-1.5l-1.9-.3v-2.3l1.9-.3c.1-.5.3-1 .6-1.5L4.6 7.6l1.6-1.6 1.6 1.1c.5-.3 1-.5 1.5-.6l.3-1.9h2.3l.3 1.9c.5.1 1 .3 1.5.6l1.6-1.1 1.6 1.6-1.1 1.6c.3.5.5 1 .6 1.5l1.9.3v2.3Z"/></svg>`,Fg=`<svg viewBox="0 0 64 64"><g stroke="${jg}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">
  <path d="M25 7v35M41 11v31" fill="none" stroke-width="3"/>
  <path d="M41 11l9 3-9 3z" fill="#e8453c"/>
  <path d="M14 13h22c-2.4 6-2.4 12 0 18H14c2.4-6 2.4-12 0-18z" fill="#fff4dc"/>
  <path d="M32 17h18c-2 5-2 10 0 15H32c2-5 2-10 0-15z" fill="#fff4dc"/>
  <path d="M5 37h54l-7.5 15h-38z" fill="#9a5426"/></g>
  <path d="M8 41h48" stroke="#f2c14e" stroke-width="2.4"/>
  <circle cx="22" cy="46" r="2" fill="${jg}"/><circle cx="32" cy="46" r="2" fill="${jg}"/><circle cx="42" cy="46" r="2" fill="${jg}"/>
  <path d="M2 56c5-3 9-3 14 0s9 3 14 0 9-3 14 0 9 3 14 0" stroke="#4fb3ff" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,Ig=(()=>{let e=Array.from({length:8},(e,t)=>{let n=t*Math.PI/4,r=e=>(32+Math.cos(n)*e).toFixed(1),i=e=>(32+Math.sin(n)*e).toFixed(1);return{line:`M${r(6)} ${i(6)}L${r(28)} ${i(28)}`,knob:[r(28),i(28)]}}),t=e.map(e=>e.line).join(``);return`<svg viewBox="0 0 64 64">
    <path d="${t}" stroke="${jg}" stroke-width="7" stroke-linecap="round"/>
    <path d="${t}" stroke="#d9a04a" stroke-width="3.6" stroke-linecap="round"/>
    ${e.map(e=>`<circle cx="${e.knob[0]}" cy="${e.knob[1]}" r="3.6" fill="#d9a04a" stroke="${jg}" stroke-width="2"/>`).join(``)}
    <circle cx="32" cy="32" r="18" fill="none" stroke="${jg}" stroke-width="9"/>
    <circle cx="32" cy="32" r="18" fill="none" stroke="#c98f1e" stroke-width="5"/>
    <circle cx="32" cy="32" r="7" fill="#f2c14e" stroke="${jg}" stroke-width="2.4"/></svg>`})(),Lg=`<svg viewBox="0 0 36 32"><path d="M17 4 4 16l13 12v-7h14V11H17z" fill="#fff" stroke="${jg}" stroke-width="2.6" stroke-linejoin="round"/></svg>`,Rg=`<svg viewBox="0 0 32 32"><path d="M9 9l14 14M23 9 9 23" stroke="${jg}" stroke-width="8" stroke-linecap="round"/>
  <path d="M9 9l14 14M23 9 9 23" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`,zg=`<svg viewBox="0 0 32 32"><path d="M6 26l1.5-6L21 6.5l4.5 4.5L12 24.5z" fill="#ffc62a" stroke="${jg}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M18.5 9l4.5 4.5" stroke="${jg}" stroke-width="2.2"/></svg>`,Bg=1e-6,Vg=180,Hg=112,Ug=.8,Wg=.6,Gg={hull:`<svg viewBox="0 0 16 16"><path d="M1 7.5h14l-2.6 5.5H3.6Z"/><path d="M4 7.5V5h8v2.5" opacity=".55"/></svg>`,sail:`<svg viewBox="0 0 16 16"><path d="M7.2 1h1.6v14H7.2Z"/><path d="M9.4 2.4c3.6 1.4 5 4.6 4.6 8.6H9.4Z"/><path d="M6.6 3.6C4 4.8 2.6 7.2 2.8 10.4h3.8Z" opacity=".7"/></svg>`,gun:`<svg viewBox="0 0 16 16"><path d="M2 6.2 12.6 4.4l.5 3.4L2.6 9.4Z"/><circle cx="6" cy="10.6" r="2.6"/><circle cx="13.6" cy="6" r="1.3"/></svg>`,crack:`<svg viewBox="0 0 16 16"><path d="M7 1h2v4.2l1.6 1.6-2 2.2 1.4 1.6L9 12v3H7v-3.6l1.2-1.2L6.8 8.6l1.8-2L7 5.4Z"/></svg>`,ok:`<svg viewBox="0 0 16 16"><path d="m2.4 8.4 1.8-1.8 2.6 2.6 5-5 1.8 1.8L6.8 12.8Z"/></svg>`},Kg=class{element;art;effects;seen=null;isOpen=!1;constructor(){this.art=J(`div`,{class:`ss-art`}),this.effects=J(`div`,{class:`ss-effects`}),this.element=J(`div`,{class:`ship-status`},J(`div`,{class:`ss-title`,text:`Your ship`}),this.art,this.effects)}show(e,t){if(!t&&this.isOpen)return;let n=t?this.seen??qg(e):e;t&&(this.seen=e),this.art.innerHTML=n_(e,n),this.effects.replaceChildren(...s_(e,n)),this.element.classList.toggle(`intro`,t),this.element.classList.toggle(`critical`,e.hp>0&&e.hp<=e.maxHp*.25),this.isOpen=!0,eh(this.element,`open`)}hide(){this.isOpen=!1,this.element.classList.remove(`open`)}reset(){this.seen=null,this.hide()}};function qg(e){return{...e,hp:e.maxHp,sailing:1,sailHoles:0,masts:e.masts.map(e=>({...e,top:e.fullTop,hp:e.maxHp})),guns:e.guns.map(e=>({...e,hp:e.maxHp})),holes:[]}}var Jg=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function Yg(e,t){return e.keel+e.keelRise*Jg(e.keelRiseX,e.bow,t)**1.5+e.sternRise*Jg(e.sternRiseX,e.stern,t)}function Xg(e,t){let n=e.rail+e.bowSheer*Jg(e.sheerX,e.bow,t)**2;return t<=e.castleFront&&(n=Math.max(n,e.castleTop)),e.forecastle&&t>=e.forecastle.back&&(n=Math.max(n,e.forecastle.top)),n}var Zg=(e,t)=>`${(-e).toFixed(2)},${(-t).toFixed(2)}`;function Qg(e,t){let n=[];if(e.masts.forEach((r,i)=>{for(let[a,o,s]of r.sails){let c=t+a,l=t+o;if(e.sail===`junk`){let e=r.x+s*.22,t=r.x-s*.62,a=[.25,.5,.75].map(e=>c+(l-c)*e);n.push({mast:i,points:[[e,l],[t+.6,l+.3],[t,c],[e-.4,c]],hangs:l,battens:a})}else{let e=s*Wg/2;n.push({mast:i,points:[[r.x+e,l],[r.x-e,l],[r.x-e*.9,c],[r.x+e*.9,c]],hangs:l,battens:[]})}}}),e.mizzen){let{x:t,height:r}=e.mizzen,i=e.castleTop;n.push({mast:e.masts.length,points:[[t+.32*r,i+.16*r],[t-.24*r,i+.92*r],[t-.3*r,i+.14*r]],hangs:i+.55*r,battens:[]})}return n}function $g(e,t,n){let r=e.points.map(([e,t])=>[e,n(t)]);if(!t||r.length!==4)return`M${r.map(([e,t])=>Zg(e,t)).join(`L`)}Z`;let[i,a,o,s]=r,c=.18*(i[0]-a[0]),l=(e,t)=>Zg((e[0]+t[0])/2+c,(e[1]+t[1])/2);return`M${Zg(...i)}L${Zg(...a)}Q${l(a,o)} ${Zg(...o)}L${Zg(...s)}Q${l(s,i)} ${Zg(...i)}Z`}function e_(e,t,n,r){let i=[];for(let a=0;a<10;a++){let o=a/10*Math.PI*2+r,s=a%2==0?1:.5+.15*Math.sin(r*7+a);i.push(Zg(e+Math.cos(o)*n*s,t+Math.sin(o)*n*s))}return`M${i.join(`L`)}Z`}function t_(e,t,n,r,i){let a=`M${e.toFixed(2)},${i.toFixed(2)}L${e.toFixed(2)},0`;for(let i=e;i<t;i+=n){let e=n/4;a+=`Q${(i+e).toFixed(2)},${(-r).toFixed(2)} ${(i+2*e).toFixed(2)},0Q${(i+3*e).toFixed(2)},${r.toFixed(2)} ${(i+n).toFixed(2)},0`}return`${a}L${t.toFixed(2)},${i.toFixed(2)}Z`}function n_(e,t){let n=an(e.model),r=e.deckHeight,i=`vector-effect="non-scaling-stroke"`,a=new Set;for(let e=0;e<=48;e++)a.add(n.stern+(n.bow-n.stern)*e/48);for(let e of[n.castleFront,n.forecastle?.back])e!==void 0&&a.add(e-.01).add(e+.01);let o=[...a].sort((e,t)=>e-t),s=`M${o.map(e=>Zg(e,Xg(n,e))).join(`L`)}L${[...o].reverse().map(e=>Zg(e,Yg(n,e))).join(`L`)}Z`,c=t=>{let n=e.masts[t]?.bottom??r;return e=>e<=n?e:n+(e-n)*Ug},l=e=>e<=r?e:r+(e-r)*Ug,u=Math.max(...e.masts.map((e,t)=>c(t)(e.fullTop)),n.castleTop),d=-Math.max(n.bow,n.bowsprit?.to[0]??n.bow)-1.2,f=-n.stern+3.4,p=-u-1.6,m=-n.keel+1.4,h=f-d,g=1.5/Math.min(Vg/h,Hg/(m-p)),_=t=>-(n.keel+(r-n.keel)*(1-Math.max(0,t)/e.maxHp)),v=_(t.hp),y=_(e.hp),b=[],x=t_(d-6,f+6,6,.4,m+2);b.push(`<svg viewBox="${d.toFixed(2)} ${p.toFixed(2)} ${h.toFixed(2)} ${(m-p).toFixed(2)}" preserveAspectRatio="xMidYMax meet">`,`<defs><clipPath id="ss-hull-clip"><path d="${s}"/></clipPath></defs>`,`<g class="ss-sea"><path d="${x}"/></g>`,`<g class="ss-ship">`);let S=n.bowsprit;S&&b.push(`<path class="ss-spar" ${i} d="M${Zg(S.from[0],l(S.from[1]))}L${Zg(S.to[0],l(S.to[1]))}"/>`);let C=n.sail===`square`;for(let a of Qg(n,r)){let r=e.masts[a.mast];if(!r)continue;let o=a.hangs>r.top+Bg,s=o&&a.hangs<=(t.masts[a.mast]?.top??r.fullTop)+Bg,l=`ss-sail${o?` lost`:``}${s?` fresh`:``}${a.mast===n.masts.length?` lateen`:``}`,u=c(a.mast);if(b.push(`<path class="${l}" ${i} d="${$g(a,C&&a.mast<n.masts.length,u)}"/>`),!o)for(let e of a.battens)b.push(`<path class="ss-batten" ${i} d="M${Zg(a.points[0][0],u(e))}L${Zg(a.points[2][0],u(e))}"/>`)}return e.masts.forEach((e,n)=>{let r=t.masts[n]??e,a=e.top<e.fullTop-Bg,o=e.hp<e.maxHp-Bg,s=c(n),l=s(e.top);if(e.top>e.bottom+Bg&&b.push(`<path class="ss-mast${o?` cracked`:``}" ${i} d="M${Zg(e.x,e.bottom)}L${Zg(e.x,l)}"/>`),a){let t=e.top<r.top-Bg;b.push(`<path class="ss-mast-lost${t?` fresh`:``}" ${i} d="M${Zg(e.x,l)}L${Zg(e.x,s(e.fullTop))}"/>`),e.top>e.bottom+Bg&&b.push(`<path class="ss-break" ${i} d="M${Zg(e.x-.55,l-.3)}L${Zg(e.x-.2,l+.45)}L${Zg(e.x+.1,l-.05)}L${Zg(e.x+.5,l+.35)}"/>`)}else b.push(`<g class="ss-pennant" style="animation-delay:${(-n*.37).toFixed(2)}s"><path d="M${Zg(e.x,l)}L${Zg(e.x-2.4,l-.35)}L${Zg(e.x,l-.75)}Z"/></g>`)}),b.push(`<path class="ss-hull" d="${s}"/>`),b.push(`<g clip-path="url(#ss-hull-clip)">`,`<rect class="ss-trim" x="${d}" y="${(-n.paint.trim[1]).toFixed(2)}" width="${h}" height="${(n.paint.trim[1]-n.paint.trim[0]).toFixed(2)}"/>`,`<g class="ss-flood" style="--from:${v.toFixed(2)}px;--to:${y.toFixed(2)}px"><g class="ss-slosh"><path d="${t_(d-4,f+4,4,.35,m-p+8)}"/></g></g>`,`</g>`),b.push(`<path class="ss-hull-edge" pathLength="1" stroke-width="${g.toFixed(3)}" d="${s}"/>`),e.holes.forEach((e,n)=>{let r=Math.max(1.1,e.radius*2),a=n>=t.holes.length;b.push(`<path class="ss-hole${a?` fresh`:``}" ${i} style="animation-delay:${a?(.85+.12*(n-t.holes.length)).toFixed(2):0}s" d="${e_(e.x,e.y,r,n*2.39)}"/>`)}),e.guns.forEach((e,n)=>{let a=t.guns[n]??e,o=e.hp<=0?`lost`:e.hp<e.maxHp-Bg?`hurt`:`ok`,s=e.hp<=0?a.hp>0:e.hp<a.hp-Bg,c=r-.75;b.push(`<g class="ss-gun ${o}${s?` fresh`:``}"><circle ${i} cx="${(-e.x).toFixed(2)}" cy="${(-c).toFixed(2)}" r="0.8"/>`),o===`lost`&&b.push(`<path ${i} d="M${Zg(e.x-.6,c-.6)}L${Zg(e.x+.6,c+.6)}M${Zg(e.x-.6,c+.6)}L${Zg(e.x+.6,c-.6)}"/>`),b.push(`</g>`)}),b.push(`</g>`),b.push(`<g class="ss-sea ss-waterline"><path ${i} d="${x}"/></g>`),b.push(`</svg>`),b.join(``)}function r_(e,t,n,r,i=``,a=!1){let o=J(`div`,{class:`ss-row ${t}${a?` fresh`:``}`},J(`span`,{class:`ss-icon`}),J(`span`,{class:`ss-text`},J(`span`,{class:`ss-what`,text:n}),r?J(`span`,{class:`ss-sub`,text:r}):null),i?J(`span`,{class:`ss-delta`,text:i}):null);return o.firstElementChild.innerHTML=Gg[e],o}var i_=e=>e.length<=1?e[0]??``:`${e.slice(0,-1).join(`, `)} & ${e[e.length-1]}`,a_=e=>e.charAt(0).toUpperCase()+e.slice(1),o_=e=>String(Math.round(e*100)/100);function s_(e,t){let n=[],r=e.hp/e.maxHp,i=t.hp-e.hp,a=e.masts.filter(e=>e.top<e.fullTop-Bg),o=e.masts.filter(e=>e.hp<e.maxHp-Bg&&e.top>e.bottom+Bg),s=e.guns.filter(e=>e.hp<=0);if(i<=Bg&&r>=.999999&&e.sailing>=.999999&&a.length===0&&o.length===0&&s.length===0)return[r_(`ok`,`ok`,`Shipshape`,`Full sail · every gun manned`)];if(n.push(r_(`hull`,r<=.25?`bad`:r<.6?`warn`:`ok`,`Hull ${o_(e.hp)}/${o_(e.maxHp)}`,r<=.25?`Taking water: she sinks at 0`:`She sinks at 0`,i>Bg?`−${o_(i)}`:``,i>Bg)),e.sailing<.999999){let r=Math.round((t.sailing-e.sailing)*100),i=[e.masts.every(e=>e.top<e.fullTop-Bg)?`Dismasted`:a.length>0?`${a_(i_(a.map(e=>e.name)))} down`:``,e.sailHoles>0?`${e.sailHoles} hole${e.sailHoles===1?``:`s`} in the sails`:``].filter(Boolean);n.push(r_(`sail`,e.sailing<.35?`bad`:`warn`,`Sailing ${Math.round(e.sailing*100)}%`,i.join(` · `),r>0?`−${r}%`:``,r>0))}if(s.length>0){let r=s.some(n=>(t.guns[e.guns.indexOf(n)]?.hp??0)>0),i=s.length===1?`${s[0].cannon} silent`:`${s.length} guns silent`,a=s.length===1?`Its gunner went overboard`:`${i_(s.map(e=>e.cannon))}: no gunners`;n.push(r_(`gun`,`bad`,i,a,r?`−${s.filter(n=>(t.guns[e.guns.indexOf(n)]?.hp??0)>0).length}`:``,r))}if(o.length>0){let r=o.some(n=>n.hp<(t.masts[e.masts.indexOf(n)]?.hp??n.maxHp)-Bg);n.push(r_(`crack`,`warn`,`${a_(i_(o.map(e=>e.name)))} cracked`,`The next hit may bring it down`,``,r))}return n}var c_=`JanEpiCoro`,l_=`ship-combat-prototype`,u_=`${c_}/${l_}`,d_=`main`,f_=`src/config/game.json`,p_=`ship-combat.github-token`,m_=`https://github.com/settings/personal-access-tokens/new`,h_=u_;function g_(){try{return localStorage.getItem(p_)}catch{return null}}function __(e){try{e?localStorage.setItem(p_,e):localStorage.removeItem(p_)}catch{}}var v_=class extends Error{badToken;constructor(e,t=!1){super(e),this.badToken=t}};async function y_(e,t,n){let r=`https://api.github.com/repos/${u_}/contents/${f_}`,i={Accept:`application/vnd.github+json`,Authorization:`Bearer ${t}`,"X-GitHub-Api-Version":`2022-11-28`};for(let t=0;t<2;t++){let a=await fetch(`${r}?ref=${d_}`,{headers:i,cache:`no-store`});if(!a.ok)throw await b_(a,`read the config`);let o=await a.json(),s=JSON.parse(S_(o.content));d(s,e);let c=await fetch(r,{method:`PUT`,headers:i,body:JSON.stringify({message:`Tuning: new defaults from the in-game settings\n\n${n}`,content:x_(p(s)),sha:o.sha,branch:d_})});if(c.status!==409||t!==0){if(!c.ok)throw await b_(c,`save the config`);return(await c.json()).commit?.html_url??``}}throw new v_(`GitHub kept reporting a conflict. Try again in a moment.`)}async function b_(e,t){let n=e.status,r=await e.json().then(e=>typeof e.message==`string`?` (GitHub: ${n} ${e.message})`:` (GitHub: ${n})`).catch(()=>` (GitHub: ${n})`);return n===401?new v_(`GitHub refused the token (wrong or expired).${r}`,!0):n===429||n===403&&(e.headers.get(`x-ratelimit-remaining`)===`0`||e.headers.has(`retry-after`))?new v_(`GitHub is limiting requests right now. Try again in a few minutes.`):n===404?new v_(`The token can't see ${u_}. On GitHub, set its Repository access to Only select repositories with ${l_} picked, and Resource owner to ${c_}.${r}`,!0):n===403?new v_(`The token can see ${u_} but can't ${t}. On GitHub, set its Contents permission to Read and write.${r}`,!0):new v_(`GitHub said ${n} while trying to ${t}. Try again in a moment.${r}`)}function x_(e){let t=``;for(let n of new TextEncoder().encode(e))t+=String.fromCharCode(n);return btoa(t)}function S_(e){let t=atob(e.replace(/\s/g,``));return new TextDecoder().decode(Uint8Array.from(t,e=>e.charCodeAt(0)))}var C_=`ship-combat.settings.v2`,w_=`ship-combat.settings.v1`,T_={indicator:`dots`,sound:!0,graphics:`auto`,lastShotFlag:!0,aimCamera:`shoulder`,firing:`charge`,slingStyle:`pull`,aimPath:!1,aim3d:!1},E_=[`auto`,`high`,`low`],D_=[{value:`charge`,label:`Hold FIRE`,hint:`Hold FIRE to charge, let go to shoot. Hold on too long and it misfires`},{value:`sling`,label:`Slingshot`,hint:`Pull back and let go to shoot, like Angry Birds. Pick how it aims below`},{value:`tap`,label:`Tap to fire`,hint:`Drag to aim, press FIRE to shoot. Every shot has the same power, so the angle sets how far`}],O_=[{value:`pull`,label:`Pull & card`,hint:`Pull down for power, sideways to swivel. Drag the ANGLE card to tilt`},{value:`aimPull`,label:`Aim, then pull`,hint:`Drag anywhere to aim, then pull the pouch back for power`},{value:`lever`,label:`Pull + lever`,hint:`As Pull & card, with a big angle lever for your left thumb, even while you pull`},{value:`fullPower`,label:`Full power`,hint:`Pull down to raise the barrel, sideways to swivel. Every shot is full power`},{value:`tilt`,label:`Tilt`,hint:`Tilt the phone to raise or lower the barrel. The pull sets swivel and power`},{value:`target`,label:`Landing point`,hint:`Pull to pick where it lands in calm air; the wind still pushes it. ANGLE sets the arc`}],k_=[{value:`dots`,label:`Aim dots`,hint:`Show where the barrel points, like Castle Busters`},{value:`short`,label:`Worms guide`,hint:`The first metres of the flight at your power, with a crosshair`},{value:`off`,label:`Off`,hint:`Just the barrel. For old sea dogs`}],A_=[{value:`shoulder`,label:`Over the shoulder`,hint:`Beside the barrel, so it never hides what you aim at`},{value:`raised`,label:`Raised`,hint:`Centred and high enough to see over the muzzle`},{value:`centred`,label:`Behind the breech`,hint:`Low and centred, like Sea of Thieves. On high lobs the barrel hides the target`}];function j_(e,t){return{indicator:k_.find(t=>t.value===e.indicator)?.value??t.indicator,sound:typeof e.sound==`boolean`?e.sound:t.sound,graphics:E_.find(t=>t===e.graphics)??t.graphics,lastShotFlag:typeof e.lastShotFlag==`boolean`?e.lastShotFlag:t.lastShotFlag,aimCamera:A_.find(t=>t.value===e.aimCamera)?.value??t.aimCamera,firing:D_.find(t=>t.value===e.firing)?.value??t.firing,slingStyle:O_.find(t=>t.value===e.slingStyle)?.value??t.slingStyle,aimPath:typeof e.aimPath==`boolean`?e.aimPath:t.aimPath,aim3d:typeof e.aim3d==`boolean`?e.aim3d:t.aim3d}}var M_=j_(t.settings,T_);function N_(e){let t=Object.keys(M_);return Object.fromEntries(t.filter(t=>e[t]!==M_[t]).map(t=>[t,e[t]]))}function P_(){let e;try{let t=JSON.parse(localStorage.getItem(w_)??`{}`);e=j_({sound:t.sound,graphics:t.graphics,...JSON.parse(localStorage.getItem(C_)??`{}`)},M_)}catch{return{...M_}}return F_(e),e}function F_(e){try{let t=N_(e);Object.keys(t).length>0?localStorage.setItem(C_,JSON.stringify(t)):localStorage.removeItem(C_),localStorage.removeItem(w_)}catch{}}var I_=e=>String(Math.round(e*100)/100),L_={sniper:`Sniper Rifle`,revive:`Revive`,extraBall:`+1 Projectile`,magnet:`Magnetic Shot`,repair:`Ship Repairs`,gifts:`It's Raining Gifts`,laser:`Sky Laser`,antiMissile:`Anti-Missile System`,healer:`Healing Invention`,accuracy:`Extra Accuracy`,wings:`Winged Cannonball`,charger:`Power-Up Machine`,hotShot:`Hot Shot`,mist:`Protective Mist`,hiredHand:`Hired Hand`,shield:`Shield Dome`,rogueWave:`Rogue Wave`,depression:`Enemy Depression`,sacrifice:`Noble Sacrifice`,pickpocket:`Pickpocket`},R_={sniper:`SNIPER`,revive:`REVIVE`,extraBall:`+1 BALL`,magnet:`MAGNET`,repair:`REPAIR`,gifts:`GIFTS!`,laser:`SKY LASER`,antiMissile:`ANTI-MISSILE`,healer:`HEALER`,accuracy:`ACCURACY`,wings:`WINGS`,charger:`POWER-UP`,hotShot:`HOT SHOT`,mist:`MIST`,hiredHand:`HIRED!`,shield:`SHIELD`,rogueWave:`BIG WAVE`,depression:`SULK`,sacrifice:`SACRIFICE`,pickpocket:`PICKPOCKET`},z_=e=>`${Math.round(e*100)}%`;function B_(e,t){let n=t.cards;switch(e){case`sniper`:return`One scoped shot: ${I_(n.sniper.unitDamage)} damage to a gunner`;case`revive`:return`Back aboard with ${z_(n.revive.hp)} health`;case`extraBall`:return n.extraBall.balls===1?`One more ball next shot`:`${n.extraBall.balls} more balls next shot`;case`magnet`:return`Next shot homes in on gunners within ${I_(n.magnet.radius)} m`;case`repair`:return`+${z_(n.repair.hp)} hull, and patches up ${z_(n.repair.parts)} of the damage`;case`gifts`:{let{min:e,max:t}=n.gifts.crates;return`${e===t?e:`${e}–${t}`} power-up crates for this shot`}case`laser`:return`Strike anywhere from the sky: ${I_(n.laser.damage)} damage`;case`antiMissile`:return n.antiMissile.every<=1?`Zaps an incoming ball every enemy shot`:`Zaps an incoming ball every ${n.antiMissile.every} enemy shots`;case`healer`:return`Heals a gunner ${z_(n.healer.heal)} every turn`;case`accuracy`:return`Every ball lands on the same spot`;case`wings`:return`Steer the ball while it flies!`;case`charger`:return`A gunner gets +${z_(n.charger.bonus)} damage each turn`;case`hotShot`:return`Sets their ship on fire: −${I_(n.hotShot.damage)} hull for ${n.hotShot.turns} turns`;case`mist`:return`Hides your ship in mist through their next turn`;case`hiredHand`:return`A deckhand joins with a light swivel gun`;case`shield`:return n.shield.every<=1?`A dome round your ship that stops their every shot`:`A dome round your ship that stops one in every ${n.shield.every} of their shots`;case`rogueWave`:return`Their ship rolls: their next shot is way off`;case`depression`:return`One of their gunners won't fire next turn`;case`sacrifice`:return`Lose a gunner, go again straight after (no card)`;case`pickpocket`:return`Steal one of their machines`}}var Q=e=>({kind:`number`,...e}),V_=e=>Q({...e,unit:`%`,min:e.min??0,get:t=>H_(e.get(t)*100,6),set:(t,n)=>e.set(t,H_(n/100,9))}),H_=(e,t)=>Math.round(e*10**t)/10**t,U_=(e,t,n,r,i)=>({kind:`choice`,label:e,options:[{value:`on`,label:`On`,hint:t},{value:`off`,label:`Off`,hint:`Not at all`}],get:e=>n(e)?`on`:`off`,set:(e,t)=>r(e,t===`on`),restart:i});function W_(e,t){return[{...e,set:(n,r)=>{e.set(n,r),t.get(n)<r&&t.set(n,r)}},{...t,set:(n,r)=>{t.set(n,r),e.get(n)>r&&e.set(n,r)}}]}var G_=(e,t,n)=>W_(Q({...n,label:t[0],get:t=>e(t).min,set:(t,n)=>e(t).min=n}),Q({...n,label:t[1],get:t=>e(t).max,set:(t,n)=>e(t).max=n})),K_=[{value:`classic`,label:`Classic`,hint:`A round hill with a rock spire: lob over it, or sail out to the flanks`},{value:`twinPeaks`,label:`Twin Peaks`,hint:`A narrow canyon between two peaks: line up with it for a straight shot`},{value:`atoll`,label:`Atoll`,hint:`Low dunes round a lagoon: skim them with low arcs, or line up the two channels`},{value:`seaStacks`,label:`Sea Stacks`,hint:`Tall rock pillars: thread a shot between them or lob over`},{value:`stoneArch`,label:`Stone Arch`,hint:`Fire through the arch, or hide behind the ridges either side`},{value:`strait`,label:`The Strait`,hint:`Two islands and an open channel: sail behind one for cover`},{value:`lighthouse`,label:`Lighthouse Key`,hint:`A low sandy key and a tall lighthouse: long, flat duels`}],q_=[[`heavy`,`Heavy`],[`volley`,`Volley`],[`scatter`,`Scatter`],[`chain`,`Chain`],[`drill`,`Driller`],[`skip`,`Skipper`],[`cluster`,`Bomber`],[`human`,`Daredevil`],[`swivel`,`Hired Hand`]],J_=(e,t,n)=>Q({...n,get:n=>n.cannons[e][t],set:(n,r)=>n.cannons[e][t]=r}),Y_=(e,t)=>Object.entries(e.cannons).forEach(([n,r])=>!Object.values(e.units).some(e=>e.hired&&e.cannon===n)&&t(r));function X_(e){let[t,n]=W_(J_(e,`minSpeed`,{label:`Ball speed at lowest power`,unit:`m/s`,min:0,max:100,step:1}),J_(e,`maxSpeed`,{label:`Ball speed at full power`,unit:`m/s`,min:40,max:180,step:1}));return[n,t]}var Z_=(e,t)=>Q({label:t,hint:`How often it comes up, relative to the others · 0 = never`,min:0,max:4,step:.5,get:t=>t.powerUps.weights[e],set:(t,n)=>t.powerUps.weights[e]=n}),Q_=e=>Q({label:L_[e],hint:`How often it’s dealt, relative to the others · 0 = never`,min:0,max:4,step:.05,get:t=>t.cards.weights[e],set:(t,n)=>t.cards.weights[e]=n}),$_={shooting:[{title:`Flight`,note:`Range at full power and 45° is speed² ÷ gravity, so lower gravity or more speed means longer shots.`,items:[Q({label:`Gravity`,hint:`Lower = flatter, longer, floatier shots`,unit:`m/s²`,min:4,max:50,step:.5,get:e=>e.physics.gravity,set:(e,t)=>e.physics.gravity=t}),Q({label:`Ball speed at full power`,hint:`Sets every cannon but the hired hand’s swivel gun (each one is in the Cannons tab)`,unit:`m/s`,min:40,max:180,step:1,get:e=>e.cannons.heavy.maxSpeed,set:(e,t)=>Y_(e,e=>{e.maxSpeed=t,e.minSpeed=Math.min(e.minSpeed,t)}),mirrors:!0}),Q({label:`Ball speed at lowest power`,hint:`Sets every cannon but the hired hand’s swivel gun (each one is in the Cannons tab)`,unit:`m/s`,min:0,max:100,step:1,get:e=>e.cannons.heavy.minSpeed,set:(e,t)=>Y_(e,e=>{e.minSpeed=t,e.maxSpeed=Math.max(e.maxSpeed,t)}),mirrors:!0}),Q({label:`Air drag`,hint:`0 = perfect parabolas. More drag shortens long, fast shots most`,min:0,max:.008,step:2e-4,get:e=>e.physics.drag,set:(e,t)=>e.physics.drag=t}),Q({label:`Longest flight`,hint:`A ball still flying after this long is dropped`,unit:`s`,min:4,max:30,step:1,get:e=>e.physics.maxFlightTime,set:(e,t)=>e.physics.maxFlightTime=t})]},{title:`Power meter`,items:[Q({label:`Charge time`,hint:`Holding FIRE from 0 to 100%`,unit:`s`,min:.4,max:3,step:.05,get:e=>e.power.fillTime,set:(e,t)=>e.power.fillTime=t}),Q({label:`Full-power window`,hint:`How long you can hold at 100% before the cannon misfires`,unit:`s`,min:.1,max:2,step:.05,get:e=>e.power.graceTime,set:(e,t)=>e.power.graceTime=t}),V_({label:`Too quick to fire`,hint:`Letting go of FIRE below this power cancels the shot`,max:50,step:1,get:e=>e.power.cancelBelow,set:(e,t)=>e.power.cancelBelow=t}),V_({label:`Tap to fire power`,hint:`For players who pick Settings → Firing → Tap to fire: every shot has this power`,min:10,max:100,step:5,get:e=>e.power.tapPower,set:(e,t)=>e.power.tapPower=t})]},{title:`Misfire`,note:`Holding FIRE too long at full power misfires: a weak shot, knocked off your aim.`,items:[...W_(V_({label:`Misfire power, weakest`,max:100,step:1,get:e=>e.power.misfirePowerMin,set:(e,t)=>e.power.misfirePowerMin=t}),V_({label:`Misfire power, strongest`,max:100,step:1,get:e=>e.power.misfirePowerMax,set:(e,t)=>e.power.misfirePowerMax=t})),Q({label:`Misfire aim error`,hint:`Up to this far off, up or down and left or right`,unit:`°`,min:0,max:30,step:.5,get:e=>e.power.misfireDeviationDeg,set:(e,t)=>e.power.misfireDeviationDeg=t})]},{title:`Cannon swivel`,items:[Q({label:`Highest elevation`,unit:`°`,min:20,max:80,step:1,get:e=>e.aim.pitchMaxDeg,set:(e,t)=>e.aim.pitchMaxDeg=t}),Q({label:`Lowest elevation`,unit:`°`,min:-20,max:10,step:1,get:e=>e.aim.pitchMinDeg,set:(e,t)=>e.aim.pitchMinDeg=t}),Q({label:`Starting elevation`,hint:`Where the barrels point at the start of a match`,unit:`°`,min:-5,max:60,step:1,get:e=>e.aim.defaultPitchDeg,set:(e,t)=>e.aim.defaultPitchDeg=t,restart:`match`}),Q({label:`Swivel left / right`,hint:`How far the cannon turns either side of straight out`,unit:`°`,min:15,max:85,step:1,get:e=>e.aim.yawLimitDeg,set:(e,t)=>e.aim.yawLimitDeg=t}),Q({label:`Aim sensitivity`,hint:`Degrees the cannon turns per pixel you drag`,unit:`°/px`,min:.03,max:.4,step:.01,get:e=>e.presentation.aimDegPerPixel,set:(e,t)=>e.presentation.aimDegPerPixel=t}),Q({label:`Keyboard aim speed`,hint:`W/A/S/D and the arrow keys`,unit:`°/s`,min:5,max:120,step:1,get:e=>e.presentation.keyboardAimDegPerSecond,set:(e,t)=>e.presentation.keyboardAimDegPerSecond=t})]},{title:`Slingshot`,note:`For players who pick Settings → Firing → Slingshot: touch the view and pull back, and let go to fire. Settings → Slingshot style picks how the pull aims.`,items:[V_({label:`Pull for full power`,hint:`How far down, as a share of the screen’s short side`,min:10,max:60,step:1,get:e=>e.presentation.sling.pull,set:(e,t)=>e.presentation.sling.pull=t}),Q({label:`Swivel sensitivity`,hint:`Degrees the cannon turns per pixel you pull sideways`,unit:`°/px`,min:.02,max:.4,step:.01,get:e=>e.presentation.sling.swivelDegPerPixel,set:(e,t)=>e.presentation.sling.swivelDegPerPixel=t}),Q({label:`Barrel draw-back`,hint:`How far the barrel slides back at full pull · 0 = it stays put`,unit:`m`,min:0,max:1.2,step:.05,get:e=>e.presentation.sling.drawBack,set:(e,t)=>e.presentation.sling.drawBack=t}),Q({label:`Full power: raise sensitivity`,hint:`Degrees the barrel rises per pixel you pull down`,unit:`°/px`,min:.05,max:.6,step:.01,get:e=>e.presentation.sling.raiseDegPerPixel,set:(e,t)=>e.presentation.sling.raiseDegPerPixel=t}),Q({label:`Tilt: barrel per phone tilt`,hint:`Degrees the barrel turns per degree you tilt the phone · below 0 turns it the other way`,unit:`×`,min:-4,max:4,step:.1,get:e=>e.presentation.sling.tiltGain,set:(e,t)=>e.presentation.sling.tiltGain=t})]},{title:`Aim guide`,note:`Pick the guide style in Settings → Aim guide, or switch on Full path or the 3D guide there.`,items:[Q({label:`Aim dots length`,hint:`They stay this long and never move while you charge`,unit:`m`,min:4,max:120,step:1,get:e=>e.presentation.aimDotsLength,set:(e,t)=>e.presentation.aimDotsLength=t}),Q({label:`Worms guide length`,unit:`m`,min:4,max:80,step:1,get:e=>e.presentation.aimGuideLength,set:(e,t)=>e.presentation.aimGuideLength=t}),Q({label:`Full path target`,hint:`Radius of the target where the full path lands (Settings → Full path). Far off it never looks smaller than a set size`,unit:`m`,min:.3,max:4,step:.1,get:e=>e.presentation.aimTarget,set:(e,t)=>e.presentation.aimTarget=t}),V_({label:`Worms guide before your first shot`,hint:`The power it assumes until you have fired once (then it uses your last shot’s)`,min:10,max:100,step:5,get:e=>e.aim.firstShotPower,set:(e,t)=>e.aim.firstShotPower=t})]},{title:`Wind`,note:`A new wind is drawn at the start of every turn, between the calmest and the strongest.`,items:[...W_(Q({label:`Calmest wind`,unit:`kn`,min:0,max:40,step:1,get:e=>e.wind.minKnots,set:(e,t)=>e.wind.minKnots=t}),Q({label:`Strongest wind`,unit:`kn`,min:0,max:40,step:1,get:e=>e.wind.maxKnots,set:(e,t)=>e.wind.maxKnots=t})),Q({label:`Wind push`,hint:`Sideways push on a ball per knot`,unit:`m/s² per kn`,min:0,max:.6,step:.01,get:e=>e.wind.accelPerKnot,set:(e,t)=>e.wind.accelPerKnot=t})]}],cannons:q_.map(([e,t])=>({title:t,note:e===`heavy`?`How each unit’s cannon fires. Its damage is in the HP & damage tab.`:void 0,items:[...e===`chain`?[Q({label:`Mast damage`,hint:`It flies on through every mast it hits, which takes this many times its damage`,unit:`×`,min:0,max:10,step:.25,get:e=>e.cannons.chain?.chain?.mastFactor??0,set:(e,t)=>{let n=e.cannons.chain;n?.chain&&(n.chain.mastFactor=t)}}),Q({label:`Chain reach`,hint:`How far its chain reaches from its middle to a mast or a sail (the hull, gunners and machines need the ball). It’s drawn this long too`,unit:`m`,min:0,max:5,step:.1,get:e=>e.cannons.chain?.chain?.reach??0,set:(e,t)=>{let n=e.cannons.chain;n?.chain&&(n.chain.reach=t)}})]:[],...e===`human`?[[`brawl`,`Brawl damage`,`Landing on their deck, he fights their nearest gunner for this much`,``,0,4,.25],[`delay`,`Fight after`,`He picks the fight this long after he lands`,`s`,0,3,.1]].map(([e,t,n,r,i,a,o])=>Q({label:t,hint:n,...r?{unit:r}:{},min:i,max:a,step:o,get:t=>t.cannons.human?.pirate?.[e]??0,set:(t,n)=>{let r=t.cannons.human?.pirate;r&&(r[e]=n)}})):[],...e===`cluster`?[[`bomblets`,`Bomblets`,`At the top of its arc it bursts into this many`,``,0,12,1],[`damage`,`Bomblet damage`,`Each, to the hull and to gunners in its splash`,``,0,3,.05],[`splash`,`Bomblet splash`,`Gunners this close to where one goes off take its damage`,`m`,0,6,.25],[`ring`,`Spread`,`How wide the ring they come down in is`,`m`,0,20,.5]].map(([e,t,n,r,i,a,o])=>Q({label:t,hint:n,...r?{unit:r}:{},min:i,max:a,step:o,get:t=>t.cannons.cluster?.cluster?.[e]??0,set:(t,n)=>{let r=t.cannons.cluster?.cluster;r&&(r[e]=n)}})):[],...e===`skip`?[[`skips`,`Skips`,`It skips off the sea at most this many times`,``,0,6,1],[`keep`,`Speed it keeps`,`Each skip keeps this share of its speed across the water`,`×`,.2,1,.05],[`bounce`,`Bounce`,`Each skip turns its fall back up at this share of its strength`,`×`,.1,1,.05],[`bonus`,`Damage per skip`,`Each skip adds this to its damage (0.25 = +25%)`,`×`,0,1,.05]].map(([e,t,n,r,i,a,o])=>Q({label:t,hint:n,...r?{unit:r}:{},min:i,max:a,step:o,get:t=>t.cannons.skip?.skip?.[e]??0,set:(t,n)=>{let r=t.cannons.skip?.skip;r&&(r[e]=n)}})):[],...e===`swivel`?[Q({label:`Hired hand’s HP`,hint:`The deckhand the Hired Hand card brings aboard (a gunner has the Gunner HP in HP & damage)`,min:.25,max:10,step:.25,get:e=>e.units.hiredHand?.hp??e.crew.hp,set:(e,t)=>{let n=e.units.hiredHand;n&&(n.hp=t)}})]:[],...e===`drill`?[Q({label:`Bores this far`,hint:`It flies on through the first bit of island it hits, as if it weren’t there, for up to this far`,unit:`m`,min:5,max:150,step:5,get:e=>e.cannons.drill?.drill?.reach??0,set:(e,t)=>{let n=e.cannons.drill;n?.drill&&(n.drill.reach=t)}})]:[],J_(e,`balls`,{label:`Balls per shot`,min:1,max:12,step:1}),J_(e,`interval`,{label:`Delay between balls`,hint:`0 fires them all at once`,unit:`s`,min:0,max:1,step:.05}),J_(e,`coneDeg`,{label:`Spread`,hint:`Width of the cone the balls fly in · 0 = dead accurate`,unit:`°`,min:0,max:30,step:.5}),...X_(e),J_(e,`ballRadius`,{label:`Ball size`,hint:`Radius: bigger balls are easier to land`,unit:`m`,min:.1,max:1.2,step:.01})]})),damage:[{title:`Health`,note:`Changes here start a new match when you close Settings.`,items:[Q({label:`Ship hull HP`,hint:`The ship sinks at 0`,min:1,max:50,step:1,get:e=>e.ship.hp,set:(e,t)=>e.ship.hp=t,restart:`match`}),Q({label:`Gunner HP`,hint:`Each gunner; lose all three and the match is lost`,min:.25,max:20,step:.25,get:e=>e.crew.hp,set:(e,t)=>e.crew.hp=t,restart:`match`})]},{title:`Damage per ball`,note:`A ball that hits a ship takes this off its hull, and the same off every gunner within its crew splash. The Damage crate and the meteors are in the Power-ups tab.`,items:[...q_.map(([e,t])=>J_(e,`damage`,{label:t,hint:`Per ball`,min:0,max:10,step:.25})),Q({label:`Mast hit`,hint:`Hull damage of a ball that hits a mast, × its damage · 1 = same as the hull, 0 = none`,unit:`×`,min:0,max:3,step:.25,get:e=>e.ship.mastDamage,set:(e,t)=>e.ship.mastDamage=t})]},{title:`Crew splash`,note:`Gunners this close to where a ball hits their ship take its damage. Balls in the sea or on the island hurt nobody.`,items:q_.map(([e,t])=>J_(e,`splashRadius`,{label:t,unit:`m`,min:0,max:12,step:.25}))},{title:`Gunner hit box`,note:`A ball that hits a gunner directly also damages the ship. The drawn gunners don’t change size.`,items:[Q({label:`Gunner width`,hint:`Radius of the hit box`,unit:`m`,min:.2,max:2,step:.05,get:e=>e.crew.radius,set:(e,t)=>{e.crew.radius=t,e.crew.height=Math.max(e.crew.height,t*2)}}),Q({label:`Gunner height`,unit:`m`,min:1,max:4,step:.1,get:e=>e.crew.height,set:(e,t)=>e.crew.height=Math.max(t,e.crew.radius*2)})]}],ships:[{title:`Design`,note:`Both ships use it. Changes in this group start a new match when you close Settings.`,items:[{kind:`choice`,label:`Design`,options:a.map(e=>({value:e.id,label:e.name,hint:e.hint})),get:e=>e.ship.model,set:(t,n)=>e(t,n),restart:`rebuild`}]},{title:`Sailing`,items:[Q({label:`Sailing per turn`,unit:`m`,min:0,max:150,step:2,get:e=>e.ship.fuelPerTurn,set:(e,t)=>e.ship.fuelPerTurn=t}),Q({label:`Sailing speed`,unit:`m/s`,min:2,max:30,step:1,get:e=>e.ship.sailSpeed,set:(e,t)=>e.ship.sailSpeed=t})]}],arena:[{title:`Island`,note:`Changes in this tab start a new match when you close Settings.`,items:[{kind:`choice`,label:`Island`,options:K_,get:e=>e.arena.island,set:(e,t)=>e.arena.island=t,restart:`rebuild`}]},{title:`Layout`,items:[Q({label:`Distance between ships`,hint:`Measured across the island at the start positions`,unit:`m`,min:90,max:280,step:2,get:e=>e.arena.orbitRadius*2,set:(e,t)=>e.arena.orbitRadius=t/2,restart:`rebuild`}),Q({label:`Island size`,hint:`Radius at the waterline`,unit:`m`,min:12,max:50,step:1,get:e=>e.arena.islandRadius,set:(e,t)=>e.arena.islandRadius=t,restart:`rebuild`}),Q({label:`Island height`,unit:`m`,min:6,max:50,step:1,get:e=>e.arena.islandPeakHeight,set:(e,t)=>e.arena.islandPeakHeight=t,restart:`rebuild`}),Q({label:`Sailing zone`,hint:`How far each ship may sail either side of its start`,unit:`°`,min:10,max:85,step:1,get:e=>e.arena.zoneHalfAngleDeg,set:(e,t)=>e.arena.zoneHalfAngleDeg=t,restart:`rebuild`})]}],destruction:[{title:`Destruction`,note:`What cannonballs break (docs/DESTRUCTION.md). Each kind below has its own switch too. Changes to the rules (masts, craters, rocks) start a new match when you close Settings; the looks (holes, listing, palms) change at once.`,items:[{kind:`choice`,label:`Destruction`,options:[{value:`on`,label:`On`,hint:`Masts and rocks break, lost sail costs sailing, and balls dig craters`},{value:`off`,label:`Off`,hint:`Nothing breaks`}],get:e=>e.destruction.enabled?`on`:`off`,set:(e,t)=>e.destruction.enabled=t===`on`,restart:`match`},Q({label:`Smallest piece`,hint:`A break takes at least this much off the top of a mast, a rock or the spire, so a ball on the very top still takes it off`,unit:`m`,min:0,max:5,step:.25,get:e=>e.destruction.minPiece,set:(e,t)=>e.destruction.minPiece=t,restart:`match`}),Q({label:`Fall speed`,hint:`How fast broken masts, rocks and palms come down · 1 = as built, 2 = twice as fast`,unit:`×`,min:.5,max:3,step:.1,get:e=>e.presentation.fallSpeed,set:(e,t)=>e.presentation.fallSpeed=t})]},{title:`Masts`,note:`A mast breaks where the ball that uses up its strength hits it, and the stump starts again at full strength. Mast hit damage (to the hull) is in HP & damage.`,items:[U_(`Masts break`,`Masts break where they’re hit, and lost sail costs sailing`,e=>e.destruction.masts,(e,t)=>e.destruction.masts=t,`match`),Q({label:`Mast strength`,hint:`Damage a mast takes before it breaks · 1 = one heavy ball, two volley balls or four pellets · 0 = every hit breaks it`,min:0,max:5,step:.25,get:e=>e.ship.mastHp,set:(e,t)=>e.ship.mastHp=t,restart:`match`}),V_({label:`Sailing with no masts`,hint:`How far a ship with all its sail gone still sails per turn · in between, lost sail costs its share`,max:100,step:5,get:e=>e.ship.minSailMove,set:(e,t)=>e.ship.minSailMove=t})]},{title:`Sails`,note:`Balls fly through the sails but tear them. A hole doesn’t hurt the hull: it costs sailing, for as long as that sail is up (one that comes down with its mast is already lost sail).`,items:[U_(`Sails tear`,`Balls tear the sails they fly through, and each hole costs sailing`,e=>e.destruction.sails,(e,t)=>e.destruction.sails=t,`match`),V_({label:`Sailing lost per hole`,hint:`Of a full turn’s sailing, for each hole in a sail that’s still up · never below Sailing with no masts`,max:10,step:.5,get:e=>e.ship.sailHoleCost,set:(e,t)=>e.ship.sailHoleCost=t}),Q({label:`Tear size`,hint:`How wide a ball’s tear looks, in ball widths (the rips run on from it) · a look only`,unit:`×`,min:.5,max:5,step:.1,get:e=>e.presentation.sailTearSize,set:(e,t)=>e.presentation.sailTearSize=t})]},{title:`Craters`,note:`A ball that hits the ground digs a crater, and craters add up: keep shooting one spot and you dig a pit. Sizes are for a heavy ball (damage 1); volley balls and pellets dig smaller ones.`,items:[U_(`Craters`,`Balls dig into the island’s ground`,e=>e.destruction.craters,(e,t)=>e.destruction.craters=t,`match`),Q({label:`Crater size`,hint:`Radius of a heavy ball’s crater`,unit:`m`,min:0,max:8,step:.1,get:e=>e.destruction.craterRadius,set:(e,t)=>e.destruction.craterRadius=t}),Q({label:`Crater depth`,hint:`How deep a heavy ball digs at the centre`,unit:`m`,min:0,max:5,step:.1,get:e=>e.destruction.craterDepth,set:(e,t)=>e.destruction.craterDepth=t}),Q({label:`Deepest dig`,hint:`How far below the original ground a pit can go`,unit:`m`,min:0,max:30,step:.5,get:e=>e.destruction.maxDigDepth,set:(e,t)=>e.destruction.maxDigDepth=t}),Q({label:`Lowest ground`,hint:`Digging stops this far above the sea, so the coast stays where it is`,unit:`m`,min:0,max:5,step:.1,get:e=>e.destruction.groundFloor,set:(e,t)=>e.destruction.groundFloor=t}),Q({label:`Clear of rocks`,hint:`No digging at the foot of a rock or the lighthouse, easing in over this far`,unit:`m`,min:0,max:10,step:.5,get:e=>e.destruction.rockFootClearance,set:(e,t)=>e.destruction.rockFootClearance=t})]},{title:`Rocks`,note:`Sea stacks and the lighthouse break where the ball that uses up their strength hits them, and the top falls; the stone arch comes down whole and leaves its legs; the tip of the Classic island’s spire can be shot off. A ball that doesn’t bring one down cracks it (a pit in rock, a hole in the lighthouse), and the callout says how much strength it has left.`,items:[U_(`Rocks break`,`Sea stacks, the arch, the lighthouse and the spire’s tip crack and fall`,e=>e.destruction.rocks,(e,t)=>e.destruction.rocks=t,`match`),Q({label:`Rock strength`,hint:`Damage a sea stack, the arch or the spire’s tip takes before it breaks · 0 = every hit`,min:0,max:12,step:.25,get:e=>e.destruction.rockHp,set:(e,t)=>e.destruction.rockHp=t,restart:`match`}),Q({label:`Lighthouse strength`,hint:`Damage the lighthouse takes before it breaks · 1 = one heavy ball, two volley balls or four pellets · 0 = every hit`,min:0,max:12,step:.25,get:e=>e.destruction.towerHp,set:(e,t)=>e.destruction.towerHp=t,restart:`match`}),Q({label:`Spire tip`,hint:`The spire’s tip can be shot off above where it is this wide (radius) · 0 = never`,unit:`m`,min:0,max:12,step:.5,get:e=>e.destruction.tipRadius,set:(e,t)=>e.destruction.tipRadius=t}),Q({label:`Lowest break`,hint:`A rock always keeps at least this much stump above the ground`,unit:`m`,min:0,max:10,step:.5,get:e=>e.destruction.minStump,set:(e,t)=>e.destruction.minStump=t})]},{title:`Palms`,note:`Balls fly through the palms, but a palm a ball passes through snaps there and its top falls, like a mast; a crater uproots one and it falls over. Only a look: palms never stop a ball.`,items:[U_(`Palms break`,`A ball through a palm snaps it, and a crater uproots one`,e=>e.presentation.trees,(e,t)=>e.presentation.trees=t),Q({label:`Palm strength`,hint:`Damage a palm takes before it snaps · 0.5 = one heavy or volley ball, or two pellets · 0 = every ball`,min:0,max:3,step:.25,get:e=>e.presentation.treeHp,set:(e,t)=>e.presentation.treeHp=t})]},{title:`Holed ships`,note:`Every ball that hits a ship punches a hole where it goes in (through a gunner, into the deck behind them), and a ship takes on water where it’s holed: it leans toward the holed side, dips toward a holed end and settles lower. Only a look: it doesn’t change the aim.`,items:[U_(`Holes`,`Every ball that hits a ship punches a hole in it`,e=>e.presentation.holes,(e,t)=>e.presentation.holes=t),Q({label:`Hole size`,hint:`How wide a ball’s hole is, in ball widths · half as wide again with a blast power-up`,unit:`×`,min:.5,max:4,step:.1,get:e=>e.presentation.holeSize,set:(e,t)=>e.presentation.holeSize=t}),Q({label:`Smallest hole`,hint:`No hole is smaller than this (radius), so a pellet’s shows from afar`,unit:`m`,min:0,max:1.5,step:.05,get:e=>e.presentation.minHoleSize,set:(e,t)=>e.presentation.minHoleSize=t}),Q({label:`Biggest hole`,hint:`Balls landing right on a hole make it bigger, up to this (radius)`,unit:`m`,min:.2,max:4,step:.1,get:e=>e.presentation.maxHoleSize,set:(e,t)=>e.presentation.maxHoleSize=t}),U_(`Takes on water`,`A holed ship leans toward its holes, dips toward a holed end and settles lower`,e=>e.presentation.listing,(e,t)=>e.presentation.listing=t),Q({label:`Leans toward its holes`,hint:`With half its hull HP lost in holes along one side`,unit:`°`,min:0,max:15,step:.5,get:e=>e.presentation.listMaxDeg,set:(e,t)=>e.presentation.listMaxDeg=t}),Q({label:`Dips toward a holed end`,hint:`With half its hull HP lost in holes at the bow or the stern`,unit:`°`,min:0,max:10,step:.5,get:e=>e.presentation.trimMaxDeg,set:(e,t)=>e.presentation.trimMaxDeg=t}),Q({label:`Settles in the water`,hint:`How much lower it sits as its hull HP runs out`,unit:`m`,min:0,max:3,step:.1,get:e=>e.presentation.listSink,set:(e,t)=>e.presentation.listSink=t})]}],powerUps:[{title:`Power-ups`,note:`Like Castle Busters: one at a time appears halfway between the ships and stays on that spot, bobbing up and down. Fly a ball through it to use it.`,items:[{kind:`choice`,label:`Power-ups`,options:[{value:`on`,label:`On`,hint:`A power-up may appear at the start of a turn`},{value:`off`,label:`Off`,hint:`Plain cannon duels`}],get:e=>e.powerUps.enabled?`on`:`off`,set:(e,t)=>e.powerUps.enabled=t===`on`,restart:`match`},V_({label:`Chance each turn`,hint:`That one appears at the start of a turn while none is up`,max:100,step:5,get:e=>e.powerUps.spawnChance,set:(e,t)=>e.powerUps.spawnChance=t})]},{title:`Kinds`,items:[Z_(`damage`,`Damage crate`),Z_(`blast`,`Blast crate`),Z_(`split`,`Split gate`),Z_(`meteor`,`Meteor crate`)]},{title:`Effects`,items:[Q({label:`Damage multiplier`,hint:`Every ball of the shot still in the air does this many times its damage`,unit:`×`,min:1,max:4,step:.25,get:e=>e.powerUps.damageMultiplier,set:(e,t)=>e.powerUps.damageMultiplier=t}),Q({label:`Blast multiplier`,hint:`Explosion radius of that ball; near misses inside it still hit the hull`,unit:`×`,min:1,max:6,step:.25,get:e=>e.powerUps.blastMultiplier,set:(e,t)=>e.powerUps.blastMultiplier=t}),Q({label:`Split gate uses`,hint:`Splits before the gate is gone`,min:1,max:12,step:1,get:e=>e.powerUps.splitUses,set:(e,t)=>e.powerUps.splitUses=t}),Q({label:`Split angle`,hint:`Each half turns this far off the ball’s path`,unit:`°`,min:.5,max:15,step:.5,get:e=>e.powerUps.splitAngleDeg,set:(e,t)=>e.powerUps.splitAngleDeg=t}),...G_(e=>e.powerUps.meteors,[`Fewest meteors`,`Most meteors`],{min:0,max:15,step:1}),Q({label:`Meteor damage`,hint:`Each meteor, to the hull and to gunners within its splash`,min:0,max:5,step:.25,get:e=>e.powerUps.meteorDamage,set:(e,t)=>e.powerUps.meteorDamage=t}),Q({label:`Meteor crew splash`,unit:`m`,min:0,max:12,step:.25,get:e=>e.powerUps.meteorSplash,set:(e,t)=>e.powerUps.meteorSplash=t})]},{title:`Size and movement`,items:[Q({label:`Crate pick-up radius`,hint:`How close a ball has to pass`,unit:`m`,min:1,max:10,step:.2,get:e=>e.powerUps.radius,set:(e,t)=>e.powerUps.radius=t,restart:`match`}),Q({label:`Gate radius`,unit:`m`,min:1,max:12,step:.2,get:e=>e.powerUps.gateRadius,set:(e,t)=>e.powerUps.gateRadius=t,restart:`match`}),Q({label:`Spread to the sides`,hint:`It appears at a random spot over the island, up to this far either side of the line between the ships`,unit:`m`,min:0,max:40,step:1,get:e=>e.powerUps.spread,set:(e,t)=>e.powerUps.spread=t}),Q({label:`Lowest point above the island`,hint:`Above the ground as it is now: craters and fallen rock let it come lower`,unit:`m`,min:0,max:40,step:1,get:e=>e.powerUps.clearance,set:(e,t)=>e.powerUps.clearance=t}),Q({label:`Highest lob it allows`,hint:`Never higher than a ball fired this steeply from one ship to the other passes over its spot, so it is always in reach`,unit:`°`,min:5,max:45,step:1,get:e=>e.powerUps.maxPitchDeg,set:(e,t)=>e.powerUps.maxPitchDeg=t}),Q({label:`Bob height`,hint:`How far it moves up and down`,unit:`m`,min:0,max:50,step:1,get:e=>e.powerUps.travel,set:(e,t)=>e.powerUps.travel=t}),Q({label:`Time per sweep`,hint:`Up or down; shorter = faster`,unit:`s`,min:1,max:15,step:.5,get:e=>e.powerUps.sweepTime,set:(e,t)=>e.powerUps.sweepTime=t}),Q({label:`Holds still after appearing`,unit:`s`,min:0,max:10,step:.5,get:e=>e.powerUps.holdTime,set:(e,t)=>e.powerUps.holdTime=t})]}],cards:[{title:`Upgrade cards`,note:`Like Draft Showdown: at the start of every turn each side is dealt cards and picks one. Only cards that can do something then are dealt.`,items:[{kind:`choice`,label:`Upgrade cards`,options:[{value:`on`,label:`On`,hint:`Pick a card at the start of every turn`},{value:`off`,label:`Off`,hint:`Plain cannon duels`}],get:e=>e.cards.enabled?`on`:`off`,set:(e,t)=>e.cards.enabled=t===`on`,restart:`match`},Q({label:`Cards dealt`,hint:`To pick one from, each turn`,min:1,max:4,step:1,get:e=>e.cards.choices,set:(e,t)=>e.cards.choices=t})]},{title:`How often each comes up`,items:[`sniper`,`revive`,`extraBall`,`magnet`,`repair`,`gifts`,`laser`,`antiMissile`,`healer`,`accuracy`,`wings`,`charger`,`hotShot`,`mist`,`hiredHand`,`shield`,`rogueWave`,`depression`,`sacrifice`,`pickpocket`].map(Q_)},{title:`Sniper Rifle`,items:[Q({label:`Damage to a gunner`,hint:`Or a machine the bullet hits (a heavy ball does 1)`,min:0,max:5,step:.25,get:e=>e.cards.sniper.unitDamage,set:(e,t)=>e.cards.sniper.unitDamage=t}),Q({label:`Damage to the ship`,hint:`For any hit on it: hull, mast, gunner or machine`,min:0,max:3,step:.25,get:e=>e.cards.sniper.shipDamage,set:(e,t)=>e.cards.sniper.shipDamage=t}),Q({label:`Bullet speed`,hint:`It flies straight: no drop, no wind`,unit:`m/s`,min:100,max:1e3,step:50,get:e=>e.cards.sniper.speed,set:(e,t)=>e.cards.sniper.speed=t}),Q({label:`Scope sway`,hint:`How far across the scope wanders`,unit:`°`,min:0,max:5,step:.1,get:e=>e.cards.sniper.swayDeg,set:(e,t)=>e.cards.sniper.swayDeg=t}),Q({label:`Sway speed`,hint:`Seconds per figure of eight`,unit:`s`,min:.5,max:8,step:.1,get:e=>e.cards.sniper.swayTime,set:(e,t)=>e.cards.sniper.swayTime=t})]},{title:`Gunner cards`,items:[V_({label:`Revive health`,hint:`A revived gunner comes back with this much of a full gunner’s HP`,min:5,max:100,step:5,get:e=>e.cards.revive.hp,set:(e,t)=>e.cards.revive.hp=t}),Q({label:`+1 Projectile: balls`,hint:`Added to that gunner’s next shot`,min:1,max:5,step:1,get:e=>e.cards.extraBall.balls,set:(e,t)=>e.cards.extraBall.balls=t}),Q({label:`Magnet reach`,hint:`A magnetic ball this close to an enemy gunner it can see locks on and curves onto them`,unit:`m`,min:1,max:15,step:.5,get:e=>e.cards.magnet.radius,set:(e,t)=>e.cards.magnet.radius=t}),V_({label:`Winged ball pace`,hint:`It flies the arc you aimed this fast, while you steer it`,min:10,max:100,step:5,get:e=>e.cards.wings.pace,set:(e,t)=>e.cards.wings.pace=t}),Q({label:`Winged ball turning`,hint:`How fast full stick left or right turns it`,unit:`°/s`,min:0,max:240,step:5,get:e=>e.cards.wings.turn,set:(e,t)=>e.cards.wings.turn=t}),Q({label:`Winged ball climb and dive`,hint:`How fast full stick up or down tips its nose (up flies farther, down shorter)`,unit:`°/s`,min:0,max:180,step:5,get:e=>e.cards.wings.climb,set:(e,t)=>e.cards.wings.climb=t})]},{title:`Ship Repairs`,items:[V_({label:`Hull given back`,hint:`Of a full ship’s HP`,max:50,step:1,get:e=>e.cards.repair.hp,set:(e,t)=>e.cards.repair.hp=t}),V_({label:`Parts put right`,hint:`Of the hull holes, sail tears and broken masts (at least one)`,max:100,step:5,get:e=>e.cards.repair.parts,set:(e,t)=>e.cards.repair.parts=t})]},{title:`It’s Raining Gifts`,items:[...G_(e=>e.cards.gifts.crates,[`Fewest crates`,`Most crates`],{min:0,max:15,step:1})]},{title:`Sky Laser`,items:[Q({label:`Damage`,hint:`To the hull, and to gunners and machines nearby`,min:0,max:8,step:.25,get:e=>e.cards.laser.damage,set:(e,t)=>e.cards.laser.damage=t}),Q({label:`Blast reach`,hint:`Gunners and machines this close to where it strikes are hit`,unit:`m`,min:0,max:8,step:.25,get:e=>e.cards.laser.radius,set:(e,t)=>e.cards.laser.radius=t})]},{title:`Machines`,items:[V_({label:`Machine health`,hint:`Of a full gunner’s HP`,min:5,max:200,step:5,get:e=>e.cards.machines.hp,set:(e,t)=>e.cards.machines.hp=t}),Q({label:`Blast when destroyed`,hint:`Extra damage to the hull when a machine blows up`,min:0,max:4,step:.25,get:e=>e.cards.machines.blast,set:(e,t)=>e.cards.machines.blast=t}),Q({label:`Anti-missile: once every`,hint:`Enemy shots: it zaps one ball, then recharges through the rest`,min:1,max:6,step:1,get:e=>e.cards.antiMissile.every,set:(e,t)=>e.cards.antiMissile.every=t}),Q({label:`Anti-missile reach`,hint:`It zaps a ball this close to it`,unit:`m`,min:5,max:80,step:1,get:e=>e.cards.antiMissile.range,set:(e,t)=>e.cards.antiMissile.range=t}),V_({label:`Healing per turn`,hint:`Of a full gunner’s HP, to one hurt gunner`,max:100,step:1,get:e=>e.cards.healer.heal,set:(e,t)=>e.cards.healer.heal=t}),V_({label:`Red energy bonus`,hint:`Extra damage for the gunner the Power-Up Machine charges`,max:200,step:5,get:e=>e.cards.charger.bonus,set:(e,t)=>e.cards.charger.bonus=t})]},{title:`Hot Shot`,note:`A ball of that gunner’s next shot that hits their ship sets it on fire.`,items:[Q({label:`Fire damage`,hint:`Off the hull at the start of each of the burning ship’s turns`,min:0,max:2,step:.05,get:e=>e.cards.hotShot.damage,set:(e,t)=>e.cards.hotShot.damage=t}),Q({label:`Burns for`,hint:`Turns of the burning ship (Ship Repairs puts it out)`,min:1,max:8,step:1,get:e=>e.cards.hotShot.turns,set:(e,t)=>e.cards.hotShot.turns=t})]},{title:`Protective Mist and Rogue Wave`,items:[Q({label:`Mist size`,hint:`How far round your ship the mist bank reaches`,unit:`m`,min:10,max:80,step:1,get:e=>e.cards.mist.radius,set:(e,t)=>e.cards.mist.radius=t}),Q({label:`Bot’s aim in the mist`,hint:`How many times as far off it is, shooting into your mist`,unit:`×`,min:1,max:4,step:.1,get:e=>e.cards.mist.botError,set:(e,t)=>e.cards.mist.botError=t}),Q({label:`Wave sway`,hint:`How far across your barrel sways while your ship rolls`,unit:`°`,min:0,max:10,step:.25,get:e=>e.cards.rogueWave.swayDeg,set:(e,t)=>e.cards.rogueWave.swayDeg=t}),Q({label:`Wave sway speed`,hint:`Seconds per figure of eight`,unit:`s`,min:1,max:10,step:.25,get:e=>e.cards.rogueWave.swayTime,set:(e,t)=>e.cards.rogueWave.swayTime=t}),Q({label:`Bot’s aim on a wave`,hint:`How many times as far off it is while its ship rolls`,unit:`×`,min:1,max:4,step:.1,get:e=>e.cards.rogueWave.botError,set:(e,t)=>e.cards.rogueWave.botError=t})]},{title:`Shield Dome`,note:`A machine on deck: its dome stops the first projectile of theirs to come into it (the sky laser too).`,items:[Q({label:`Up again for every`,hint:`Enemy shots: it stops one, then is down for the next ones until this many have come`,min:1,max:6,step:1,get:e=>e.cards.shield.every,set:(e,t)=>e.cards.shield.every=t})]}],bot:[{title:`Skill`,note:`The errors below are for medium skill: an easier bot makes bigger ones, a harder one smaller.`,items:[Q({label:`Bot skill`,hint:`0 = easy, 1 = hard`,min:0,max:1,step:.05,get:e=>e.bot.difficulty,set:(e,t)=>e.bot.difficulty=t})]},{title:`Timing`,items:[...G_(e=>e.bot.thinkTime,[`Thinking time, shortest`,`Thinking time, longest`],{unit:`s`,min:0,max:6,step:.1}),...G_(e=>e.bot.aimTime,[`Aiming time, shortest`,`Aiming time, longest`],{unit:`s`,min:.2,max:5,step:.1})]},{title:`Accuracy`,note:`Its first shot is off by about this much; each shot after that corrects toward the target.`,items:[V_({label:`First shot: power error`,hint:`Of full power`,max:50,step:.5,get:e=>e.bot.startPowerError,set:(e,t)=>e.bot.startPowerError=t}),Q({label:`First shot: aim error`,hint:`Left or right`,unit:`°`,min:0,max:15,step:.25,get:e=>e.bot.startYawErrorDeg,set:(e,t)=>e.bot.startYawErrorDeg=t}),V_({label:`Overcorrects`,hint:`Chance a correction overshoots to the other side`,max:100,step:1,get:e=>e.bot.overcorrectChance,set:(e,t)=>e.bot.overcorrectChance=t}),V_({label:`Shaky hand: power`,hint:`Shot-to-shot wobble (standard deviation)`,max:5,step:.1,get:e=>e.bot.jitterPower,set:(e,t)=>e.bot.jitterPower=t}),Q({label:`Shaky hand: aim`,hint:`Shot-to-shot wobble (standard deviation)`,unit:`°`,min:0,max:3,step:.05,get:e=>e.bot.jitterYawDeg,set:(e,t)=>e.bot.jitterYawDeg=t}),V_({label:`Misreads the wind: strength`,hint:`Standard deviation`,max:100,step:1,get:e=>e.bot.windStrengthError,set:(e,t)=>e.bot.windStrengthError=t}),Q({label:`Misreads the wind: direction`,hint:`Standard deviation`,unit:`°`,min:0,max:60,step:1,get:e=>e.bot.windAngleErrorDeg,set:(e,t)=>e.bot.windAngleErrorDeg=t})]},{title:`When ships move`,items:[Q({label:`You count as moved after`,hint:`Sailing this far since its last shot`,unit:`m`,min:0,max:40,step:1,get:e=>e.bot.targetMovedDistance,set:(e,t)=>e.bot.targetMovedDistance=t}),V_({label:`Error back when you move`,hint:`Of its first-shot error`,max:100,step:5,get:e=>e.bot.targetMovedError,set:(e,t)=>e.bot.targetMovedError=t}),V_({label:`Error back when it moves`,hint:`Of its first-shot error`,max:100,step:5,get:e=>e.bot.selfMovedError,set:(e,t)=>e.bot.selfMovedError=t})]},{title:`Habits`,items:[V_({label:`Dodges`,hint:`Chance it sails away after you hit it or splash close`,max:100,step:1,get:e=>e.bot.dodgeChance,set:(e,t)=>e.bot.dodgeChance=t}),V_({label:`Tries another spot`,hint:`Chance it sails somewhere new on an ordinary turn`,max:100,step:1,get:e=>e.bot.repositionChance,set:(e,t)=>e.bot.repositionChance=t}),V_({label:`Misfires`,hint:`Chance it holds FIRE too long`,max:30,step:.5,get:e=>e.bot.misfireChance,set:(e,t)=>e.bot.misfireChance=t}),V_({label:`Goes for power-ups`,hint:`Chance it times a shot through one (more when skilled)`,max:100,step:5,get:e=>e.bot.powerUpChance,set:(e,t)=>e.bot.powerUpChance=t}),Q({label:`Waits for a power-up`,hint:`At most this long for it to bob into its shot`,unit:`s`,min:0,max:15,step:.5,get:e=>e.bot.powerUpMaxWait,set:(e,t)=>e.bot.powerUpMaxWait=t})]}],rewards:[{title:`Trophies`,note:`Added to the trophies on your profile at the end of each match. Leaving a match counts as a defeat. Trophies never go below 0.`,items:[Q({label:`For a victory`,min:0,max:100,step:1,get:e=>e.rewards.trophiesPerWin,set:(e,t)=>e.rewards.trophiesPerWin=t}),Q({label:`Lost in a defeat`,min:0,max:100,step:1,get:e=>e.rewards.trophiesPerLoss,set:(e,t)=>e.rewards.trophiesPerLoss=t})]},{title:`Coins`,items:[Q({label:`For a victory`,min:0,max:200,step:1,get:e=>e.rewards.coinsPerWin,set:(e,t)=>e.rewards.coinsPerWin=t}),Q({label:`For a defeat`,min:0,max:200,step:1,get:e=>e.rewards.coinsPerLoss,set:(e,t)=>e.rewards.coinsPerLoss=t})]}],feel:[{title:`Pacing`,items:[Q({label:`Turn banner`,hint:`How long “Your turn” shows`,unit:`s`,min:.3,max:4,step:.1,get:e=>e.presentation.bannerTime,set:(e,t)=>e.presentation.bannerTime=t}),Q({label:`Pause after a shot`,hint:`Before the turn passes (tap to skip)`,unit:`s`,min:0,max:5,step:.1,get:e=>e.presentation.resolveHoldTime,set:(e,t)=>e.presentation.resolveHoldTime=t}),Q({label:`Pause after something falls`,hint:`Added to the pause when a shot brings down a mast, so you see it fall`,unit:`s`,min:0,max:4,step:.1,get:e=>e.presentation.collapseHoldTime,set:(e,t)=>e.presentation.collapseHoldTime=t}),Q({label:`Camera moves`,hint:`Time to glide between views`,unit:`s`,min:.1,max:3,step:.05,get:e=>e.presentation.cameraBlendTime,set:(e,t)=>e.presentation.cameraBlendTime=t}),...G_(e=>e.presentation.searchTime,[`Opponent search, shortest`,`Opponent search, longest`],{unit:`s`,min:0,max:15,step:.5})]},{title:`Views`,items:[Q({label:`First-person field of view`,hint:`Narrowed further on very wide screens`,unit:`°`,min:30,max:90,step:1,get:e=>e.presentation.firstPersonFovDeg,set:(e,t)=>e.presentation.firstPersonFovDeg=t}),V_({label:`First-person tilt with the barrel`,hint:`0 = the view stays level, 100 = it looks along the barrel`,max:100,step:5,get:e=>e.presentation.firstPersonPitchFollow,set:(e,t)=>e.presentation.firstPersonPitchFollow=t}),Q({label:`Sailing view field of view`,unit:`°`,min:30,max:90,step:1,get:e=>e.presentation.thirdPersonFovDeg,set:(e,t)=>e.presentation.thirdPersonFovDeg=t}),Q({label:`Portrait view, widest`,hint:`Held upright, every view opens up to fit more across, to at most this tall`,unit:`°`,min:40,max:100,step:1,get:e=>e.presentation.portraitFovDeg,set:(e,t)=>e.presentation.portraitFovDeg=t})]},{title:`Impacts`,items:[Q({label:`Hit-stop`,hint:`A ball hitting a ship freezes the action this long`,unit:`s`,min:0,max:.5,step:.01,get:e=>e.presentation.hitStopTime,set:(e,t)=>e.presentation.hitStopTime=t}),V_({label:`Winning-blow slow motion`,hint:`Game speed just before the match-winning hit · 100 = none`,min:5,max:100,step:5,get:e=>e.presentation.finisherSlowMo,set:(e,t)=>e.presentation.finisherSlowMo=t}),Q({label:`Slow motion starts`,hint:`This long before the winning ball lands`,unit:`s`,min:0,max:3,step:.1,get:e=>e.presentation.finisherSlowMoTime,set:(e,t)=>e.presentation.finisherSlowMoTime=t})]},{title:`Charging: screen shake`,note:`While FIRE is held the view shakes, barely at first, harder as the power builds. Only the view: the shot still goes where the barrel points.`,items:[Q({label:`Strength at full power`,hint:`How far the view turns at 100% · 0 = no shake`,unit:`°`,min:0,max:2,step:.05,get:e=>e.presentation.chargeShake.maxDeg,set:(e,t)=>e.presentation.chargeShake.maxDeg=t}),Q({label:`Build-up curve`,hint:`1 = grows evenly with the power · higher = stays subtle longer, then ramps up`,min:1,max:5,step:.1,get:e=>e.presentation.chargeShake.curve,set:(e,t)=>e.presentation.chargeShake.curve=t}),Q({label:`Speed as it starts`,hint:`Changes of direction per second: low sways, high rattles`,unit:`/s`,min:1,max:40,step:1,get:e=>e.presentation.chargeShake.startHz,set:(e,t)=>e.presentation.chargeShake.startHz=t}),Q({label:`Speed at full power`,unit:`/s`,min:1,max:40,step:1,get:e=>e.presentation.chargeShake.fullHz,set:(e,t)=>e.presentation.chargeShake.fullHz=t}),V_({label:`Horizon tilt`,hint:`How much it also rolls the view, as a share of the strength`,max:100,step:5,get:e=>e.presentation.chargeShake.roll,set:(e,t)=>e.presentation.chargeShake.roll=t}),Q({label:`Jolt at 100%`,hint:`A kick as the power tops out`,unit:`°`,min:0,max:3,step:.05,get:e=>e.presentation.chargeShake.joltDeg,set:(e,t)=>e.presentation.chargeShake.joltDeg=t}),Q({label:`Rattle at 100%`,hint:`Times as hard while you hold on at full power, until you let go or it misfires`,unit:`×`,min:1,max:4,step:.1,get:e=>e.presentation.chargeShake.rattle,set:(e,t)=>e.presentation.chargeShake.rattle=t})]},{title:`Charging: vignette`,note:`While FIRE is held the screen’s edges darken and close in, warming to red, and flare red at full power.`,items:[V_({label:`Darkness at full power`,hint:`At its darkest edge · 0 = no vignette`,max:100,step:5,get:e=>e.presentation.chargeVignette.darkness,set:(e,t)=>e.presentation.chargeVignette.darkness=t}),Q({label:`Build-up curve`,hint:`1 = grows evenly with the power · higher = stays subtle longer, then ramps up`,min:1,max:5,step:.1,get:e=>e.presentation.chargeVignette.curve,set:(e,t)=>e.presentation.chargeVignette.curve=t}),V_({label:`Closes in to`,hint:`Fully dark from here out at 100%: 100 = the screen’s sides, lower = further in`,min:20,max:140,step:5,get:e=>e.presentation.chargeVignette.reach,set:(e,t)=>e.presentation.chargeVignette.reach=t}),V_({label:`Softness`,hint:`How far in it fades to clear, as a share of that`,min:5,max:100,step:5,get:e=>e.presentation.chargeVignette.softness,set:(e,t)=>e.presentation.chargeVignette.softness=t}),V_({label:`Red at full power`,hint:`0 = stays dark · 100 = all red`,max:100,step:5,get:e=>e.presentation.chargeVignette.red,set:(e,t)=>e.presentation.chargeVignette.red=t}),V_({label:`Red flare at 100%`,hint:`How much redder it pulses while you hold on at full power`,max:100,step:5,get:e=>e.presentation.chargeVignette.pulse,set:(e,t)=>e.presentation.chargeVignette.pulse=t}),Q({label:`Flare speed`,hint:`Pulses per second`,unit:`/s`,min:.5,max:10,step:.5,get:e=>e.presentation.chargeVignette.pulseHz,set:(e,t)=>e.presentation.chargeVignette.pulseHz=t})]}]},ev=()=>Object.values($_).flatMap(e=>e.flatMap(e=>e.items)).filter(e=>e.kind===`number`&&!e.mirrors);function tv(e){return ev().filter(t=>{let n=t.get(e);return!(n>=t.min-1e-9&&n<=t.max+1e-9)})}function nv(e){let t=Object.values($_).flat().find(t=>t.items.includes(e));return t?`${t.title} › ${e.label}`:e.label}function rv(e){let t=tv(e);for(let n of t)n.set(e,Math.min(n.max,Math.max(n.min,n.get(e)||0)));return t.length}var iv=`6262`,av=[[`shooting`,`Shooting`],[`cannons`,`Cannons`],[`damage`,`HP & damage`],[`ships`,`Ships`],[`arena`,`Arena`],[`destruction`,`Destruction`],[`powerUps`,`Power-ups`],[`cards`,`Cards`],[`bot`,`Bot`],[`rewards`,`Rewards`],[`feel`,`Feel`],[`save`,`Save & publish`]],ov=`ship-combat.settings-tab`,sv=`ship-combat.settings-groups`,cv=3,lv=class{element;options;settings;playerBoard;playerBody;design;rail;railItems=new Map;content;search;tunedChip;pendingNote;tab;groupsOpen;playerRefreshers=[];designRefreshers=[];pending=null;leaving=!1;qualityText=``;constructor(e){this.options=e,this.settings={...e.settings},this.tab=hv(),this.groupsOpen=gv();let t=J(`button`,{class:`chunky-icon-btn chunky-close`,attrs:{"aria-label":`Close`}},Y(Rg));X(t,()=>this.close()),this.playerBody=J(`div`,{class:`st-player-body`});let n=J(`button`,{class:`chunky-btn blue st-design-btn`},J(`span`,{text:`Game design`}),J(`span`,{class:`st-arrow`,text:`▸`}));X(n,()=>this.openDesign()),this.playerBoard=J(`div`,{class:`chunky-dialog st-player`,attrs:{role:`dialog`,"aria-label":`Settings`}},J(`div`,{class:`chunky-dialog-title chunky`,text:`Settings`}),t,this.playerBody,J(`div`,{class:`st-player-foot`},J(`div`,{class:`st-foot-note`,text:`Every value of the game, for balancing it`}),n));let r=J(`button`,{class:`chunky-icon-btn st-back`,attrs:{"aria-label":`Back to Settings`}},Y(Lg));X(r,()=>this.closeDesign());let i=J(`button`,{class:`chunky-btn yellow st-done`,text:`Done`});X(i,()=>this.close()),this.search=J(`input`,{class:`st-search`,attrs:{type:`search`,placeholder:`Search every setting`,autocomplete:`off`,spellcheck:`false`,"aria-label":`Search settings`}}),this.search.addEventListener(`input`,()=>this.showDesign()),this.tunedChip=J(`button`,{class:`st-tuned chunky`,attrs:{"aria-label":`Save & publish`}}),X(this.tunedChip,()=>{this.search.value=``,this.showTab(`save`)}),this.pendingNote=J(`div`,{class:`st-pending`}),this.rail=J(`nav`,{class:`st-rail`,attrs:{"aria-label":`Game design`}});for(let[e,t]of av){let n=J(`span`,{class:`st-rail-badge`}),r=J(`button`,{class:`st-rail-item${e===`save`?` save`:``}`},J(`span`,{class:`st-rail-label`,text:t}),n);X(r,()=>{this.search.value=``,this.showTab(e)}),this.railItems.set(e,{button:r,badge:n}),this.rail.append(r)}this.content=J(`div`,{class:`st-content`}),this.design=J(`div`,{class:`st-design`,attrs:{role:`dialog`,"aria-label":`Game design`}},J(`div`,{class:`st-head`},r,J(`div`,{class:`st-title chunky`,text:`Game design`}),this.tunedChip,this.search,i),this.pendingNote,J(`div`,{class:`st-main`},this.rail,this.content)),this.element=J(`div`,{class:`st-root`},J(`div`,{class:`st-veil`}),this.playerBoard,this.design),this.element.addEventListener(`pointerdown`,e=>{e.target.classList.contains(`st-veil`)&&this.close()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.isOpen&&(this.search.value&&document.activeElement===this.search||(e.preventDefault(),this.designOpen?this.closeDesign():this.close()))})}get isOpen(){return this.element.classList.contains(`open`)}get designOpen(){return this.element.classList.contains(`design`)}open(){this.buildPlayer(),this.element.classList.remove(`design`),this.element.classList.add(`open`);for(let e of this.playerBoard.getAnimations())e.cancel();Wh()?.whoosh(!0),Qh(this.playerBoard,0,360)}close(){if(!this.isOpen)return;this.element.classList.remove(`open`,`design`),document.activeElement?.blur?.(),c();let e=this.pending;this.pending=null;let t=this.leaving;this.leaving=!1,this.search.value=``,e&&!t&&this.options.onRestart(e),this.options.onClose?.(),t&&this.options.onLeave()}setQualityNote(e){this.qualityText=e;for(let t of this.element.querySelectorAll(`.st-quality-note`))t.textContent=e}openDesign(){this.element.classList.add(`design`);for(let e of this.design.getAnimations())e.cancel();Wh()?.whoosh(!0),Xh(this.design,`right`,0,440),$h(this.playerBoard,140),this.showTab(this.tab)}closeDesign(){Wh()?.whoosh(!1),this.search.value=``;for(let e of this.playerBoard.getAnimations())e.cancel();this.buildPlayer(),Qh(this.playerBoard,60,340),Jh(Zh(this.design,`right`,0,220)).then(()=>{for(let e of this.design.getAnimations())e.cancel();this.isOpen&&this.element.classList.remove(`design`)})}markChanged(e){(e===`rebuild`||e===`match`&&this.pending!==`rebuild`)&&(this.pending=e)}refresh(){for(let e of this.playerRefreshers)e();for(let e of this.designRefreshers)e();this.refreshDesignChrome()}buildPlayer(){this.playerRefreshers=[];let{inMatch:e}=this.options.matchInfo(),t=this.toggle(()=>this.settings.lastShotFlag,e=>this.changeSettings({lastShotFlag:e})),n=this.toggle(()=>this.settings.sound,e=>this.changeSettings({sound:e})),r=this.toggle(()=>this.settings.aimPath,e=>this.changeSettings({aimPath:e})),i=this.toggle(()=>this.settings.aim3d,e=>this.changeSettings({aim3d:e})),a=this.playerRow(`Aim guide`,this.segmented(k_,()=>this.settings.indicator,e=>this.changeSettings({indicator:e})),void 0,J(`div`,{class:`st-hint st-guide-off`,text:`Off while Full path is on`}));this.playerRefreshers.push(()=>uv(a,this.settings.aimPath));let o=this.playerRow(`Slingshot style`,this.segmented(O_,()=>this.settings.slingStyle,e=>this.changeSettings({slingStyle:e}),3));this.playerRefreshers.push(()=>uv(o,this.settings.firing!==`sling`)),this.playerBody.replaceChildren(...e?[dv(`Match`),J(`div`,{class:`st-match`},this.buildRestart(),this.buildLeave())]:[],dv(`Aiming`),this.playerRow(`Firing`,this.segmented(D_,()=>this.settings.firing,e=>this.changeSettings({firing:e}))),o,a,this.playerRow(`Full path`,r,`The whole flight in calm air, to a target where it lands. The wind still blows the ball off it`),this.playerRow(`3D guide`,i,`The guide out in the world: red-orange balls, hidden behind things, with shadows on the sea`),this.playerRow(`Aim camera`,this.segmented(A_,()=>this.settings.aimCamera,e=>this.changeSettings({aimCamera:e}))),this.playerRow(`Last shot flag`,t,`While you aim, a gold flag marks where your last shot came down`),dv(`Sound & graphics`),this.playerRow(`Sound`,n),this.playerRow(`Graphics`,this.segmented([{value:`auto`,label:`Auto`,hint:`High, dropping to Low if the frame rate can’t keep up`},{value:`high`,label:`High`,hint:`Soft shadows and the finest sea`},{value:`low`,label:`Low`,hint:`For older phones: no shadows, a coarser sea`}],()=>this.settings.graphics,e=>this.changeSettings({graphics:e})),void 0,J(`div`,{class:`st-hint st-quality-note`,text:this.qualityText})));for(let e of this.playerRefreshers)e()}playerRow(e,t,n,r){return J(`div`,{class:`st-row`},J(`div`,{class:`st-row-label chunky`,text:e}),J(`div`,{class:`st-row-control`},t,n?J(`div`,{class:`st-hint`,text:n}):null,r))}segmented(e,t,n,r){let i=J(`div`,{class:r?`st-seg st-seg-grid`:`st-seg`,attrs:{role:`radiogroup`}});r&&i.style.setProperty(`--columns`,String(r));let a=J(`div`,{class:`st-hint`}),o=e.map(e=>{let t=J(`button`,{class:`st-seg-btn`,text:e.label,attrs:{role:`radio`}});return X(t,()=>n(e.value)),i.append(t),[e,t]});return this.playerRefreshers.push(()=>{let e=t();for(let[t,n]of o)n.classList.toggle(`selected`,t.value===e),n.setAttribute(`aria-checked`,String(t.value===e)),t.value===e&&(a.textContent=t.hint)}),J(`div`,{class:`st-seg-wrap`},i,a)}toggle(e,t){let n=J(`span`,{class:`st-switch-knob`}),r=J(`button`,{class:`st-switch`,attrs:{role:`switch`}},J(`span`,{class:`st-switch-text on`,text:`On`}),J(`span`,{class:`st-switch-text off`,text:`Off`}),n);return X(r,()=>t(!e())),this.playerRefreshers.push(()=>{r.classList.toggle(`on`,e()),r.setAttribute(`aria-checked`,String(e()))}),r}confirmButton(e,t,n,r){let i=J(`button`,{class:`chunky-btn ${n}`,text:e}),a=0,o=()=>{window.clearTimeout(a),a=0,i.textContent=e,i.classList.remove(`armed`)};return X(i,()=>{if(!a){i.textContent=t,i.classList.add(`armed`),a=window.setTimeout(o,3e3);return}o(),r()}),i}buildRestart(){return J(`div`,{class:`st-match-item`},this.confirmButton(`Restart match`,`Tap again to restart`,`blue`,()=>{this.markChanged(`match`),this.close()}),J(`div`,{class:`st-hint`,text:`Starts this match over against the same opponent.`}))}buildLeave(){let e=this.options.matchInfo().leaveCost;return J(`div`,{class:`st-match-item`},this.confirmButton(`Leave match`,`Tap again to leave`,`red`,()=>{this.leaving=!0,this.close()}),J(`div`,{class:`st-hint`,text:e>0?`Back to the menu. It counts as a defeat: −${e} trophies.`:`Back to the menu.`}))}changeSettings(e){this.settings={...this.settings,...e},this.options.onSettingsChange(this.settings),this.refresh()}showTab(e){this.tab=e;try{localStorage.setItem(ov,e)}catch{}this.showDesign(),this.railItems.get(e)?.button.scrollIntoView({block:`nearest`})}showDesign(){this.designRefreshers=[];let e=this.search.value.trim().toLowerCase(),t;if(e.length>=2)t=this.buildSearch(e);else if(this.tab===`save`)t=this.buildSaveTab();else{let e=$_[this.tab];t=e.map((t,n)=>this.buildGroup(this.tab,t,n===0||e.length<=cv))}this.element.classList.toggle(`searching`,e.length>=2),this.content.replaceChildren(...t),this.content.scrollTop=0,this.refresh()}refreshDesignChrome(){let e=this.search.value.trim().length>=2,t=0;for(let[n,{button:r,badge:i}]of this.railItems){if(r.classList.toggle(`selected`,n===this.tab&&!e),n===`save`)continue;let a=$_[n].reduce((e,t)=>e+pv(t.items),0);t+=a,i.textContent=a>0?String(a):``}this.tunedChip.textContent=t>0?`${t} tuned`:`All defaults`,this.tunedChip.classList.toggle(`some`,t>0),this.pendingNote.textContent=this.pending===`rebuild`?`The arena is rebuilt and a new match starts when you close Settings.`:this.pending===`match`?`A new match starts when you close Settings.`:``}buildSearch(e){let t=[];for(let[n,r]of av)if(n!==`save`)for(let i of $_[n]){let a=`${r} ${i.title}`.toLowerCase().includes(e),o=i.items.filter(t=>a||mv(t).includes(e));o.length!==0&&t.push(this.buildGroup(n,{title:`${r} › ${i.title}`,items:o},!0,!1))}return t.length===0&&t.push(J(`div`,{class:`st-empty`,text:`No setting matches “${this.search.value.trim()}”.`})),t}buildGroup(e,n,r,i=!0){let a=`${e}/${n.title}`,o=i?this.groupsOpen[a]??r:!0,s=J(`span`,{class:`st-badge`}),l=J(`button`,{class:`st-group-head`,attrs:{"aria-expanded":String(o)}},J(`span`,{class:`st-chevron`,text:`▸`}),J(`span`,{class:`st-group-title chunky`,text:n.title}),s),u=J(`button`,{class:`st-group-reset`,text:`Reset`,attrs:{"aria-label":`Reset ${n.title}`}}),d=J(`div`,{class:`st-group-body`});n.note&&d.append(J(`div`,{class:`st-note`,text:n.note}));for(let e of n.items)d.append(e.kind===`number`?this.numberRow(e):this.choiceRow(e,n.title));let f=J(`section`,{class:`st-group${o?` open`:``}${i?``:` fixed`}`},J(`div`,{class:`st-group-bar`},l,u),d);return i&&X(l,()=>{let e=!f.classList.contains(`open`);if(f.classList.toggle(`open`,e),l.setAttribute(`aria-expanded`,String(e)),this.groupsOpen[a]=e,_v(this.groupsOpen),e)for(let e of d.children)Qh(e,0,260)}),X(u,()=>{let e=!1;for(let r of n.items)fv(r)&&(r.kind,r.set(g,r.get(t)),this.markChanged(r.restart),e=!0);e&&(c(),this.refresh())}),this.designRefreshers.push(()=>{let e=pv(n.items);s.textContent=e>0?`${e} tuned`:``,f.classList.toggle(`tuned`,e>0)}),f}numberRow(e){let n=vv(e.step),r=e.get(t),i=J(`input`,{class:`st-slider`,attrs:{type:`range`,min:String(e.min),max:String(e.max),step:String(e.step),"aria-label":e.label}}),a=J(`span`,{class:`st-value chunky`}),o=J(`button`,{class:`st-reset`,text:`↺`,attrs:{"aria-label":`Reset ${e.label}`}}),s=J(`button`,{class:`st-step`,text:`−`,attrs:{"aria-label":`Less ${e.label}`}}),l=J(`button`,{class:`st-step`,text:`+`,attrs:{"aria-label":`More ${e.label}`}}),u=e.hint?`${e.hint} · default ${bv(r,n,e.unit)}`:`Default ${bv(r,n,e.unit)}`,d=J(`div`,{class:`st-tune`},J(`div`,{class:`st-tune-text`},J(`div`,{class:`st-tune-label`,text:e.label}),J(`div`,{class:`st-hint`,text:u})),J(`div`,{class:`st-tune-control`},s,i,l),a,o),f=(t,r)=>{let i=Math.min(e.max,Math.max(e.min,yv(t,n)));Math.abs(i-e.get(g))<1e-9||(e.set(g,i),this.markChanged(e.restart),r&&c(),this.refresh())};return i.addEventListener(`input`,()=>f(i.valueAsNumber,!1)),i.addEventListener(`change`,()=>c()),X(s,()=>f(e.get(g)-e.step,!0)),X(l,()=>f(e.get(g)+e.step,!0)),X(o,()=>f(r,!0)),this.designRefreshers.push(()=>{let t=e.get(g);i.value=String(t),i.style.setProperty(`--fill`,`${100*(t-e.min)/(e.max-e.min||1)}%`),a.textContent=bv(t,n,e.unit),d.classList.toggle(`changed`,Math.abs(t-r)>1e-9)}),d}choiceRow(e,n){let r=e.get(t),i=J(`div`,{class:`st-choices`}),a=e.options.map(t=>{let n=J(`button`,{class:`st-choice`},J(`div`,{class:`st-choice-label`,text:t.label}),t.hint?J(`div`,{class:`st-hint`,text:t.hint}):null);return X(n,()=>{t.value!==e.get(g)&&(e.set(g,t.value),this.markChanged(e.restart),c(),this.refresh())}),i.append(n),[t.value,n]}),o=e.label.toLowerCase()!==n.toLowerCase(),s=J(`div`,{class:`st-tune choice`},o||e.hint?J(`div`,{class:`st-tune-text`},o?J(`div`,{class:`st-tune-label`,text:e.label}):null,e.hint?J(`div`,{class:`st-hint`,text:e.hint}):null):null,i);return this.designRefreshers.push(()=>{let t=e.get(g);for(let[e,n]of a)n.classList.toggle(`selected`,e===t);s.classList.toggle(`changed`,t!==r)}),s}buildSaveTab(){let e=J(`div`,{class:`st-save-summary`}),t=J(`pre`,{class:`st-save-list`});this.designRefreshers.push(()=>{let r=o(),i=n(r);e.textContent=i===0?`Everything is at the shipped defaults.`:`${i} value${i===1?``:`s`} changed from the defaults:`,t.textContent=xv(r).join(`
`),t.hidden=i===0});let i=J(`textarea`,{class:`st-text`,attrs:{readonly:``,rows:`5`,"aria-label":`Tuned values`}});i.hidden=!0;let a=J(`button`,{class:`chunky-btn blue`,text:`Copy values`});X(a,()=>{let e=s(this.options.build);i.value=e,i.hidden=!1;let t=()=>this.options.toast(`Copied. Paste it to Claude to make these the defaults`,2.6,`info`),n=()=>{i.focus(),i.select(),this.options.toast(`Select the text below and copy it`,2.4,`info`)};navigator.clipboard?.writeText?navigator.clipboard.writeText(e).then(t,n):n()});let l=J(`textarea`,{class:`st-text`,attrs:{rows:`5`,placeholder:`Paste the copied values (or a whole game.json) here`,"aria-label":`Values to apply`}}),d=J(`button`,{class:`chunky-btn yellow`,text:`Apply pasted values`}),f=J(`div`,{class:`st-paste`},l,d);f.hidden=!0;let p=J(`button`,{class:`chunky-btn blue`,text:`Paste values`});X(p,()=>{f.hidden=!f.hidden,f.hidden||l.focus()}),X(d,()=>{let e;try{e=r(l.value)}catch{this.options.toast(`That isn't valid JSON`);return}if(e===0){this.options.toast(`Nothing in there fits the settings of this version`,2.4);return}let t=rv(g);t>0&&c(),this.pending=`rebuild`,l.value=``,f.hidden=!0;let n=t>0?` · ${t} moved into ${t===1?`its slider`:`their sliders`}`:``;this.options.toast(`Applied ${e} value${e===1?``:`s`}${n}`,2.4,`info`),this.refresh()});let m=J(`button`,{class:`chunky-btn red`,text:`Reset everything`});return X(m,()=>{n(o())!==0&&confirm(`Put every tuned value back to the shipped default?`)&&(u(),this.pending=`rebuild`,this.refresh())}),[J(`section`,{class:`st-card`},J(`div`,{class:`st-card-title chunky`,text:`Tuned values`}),e,t,J(`div`,{class:`st-actions`},a,p,m),i,f),J(`section`,{class:`st-card`},J(`div`,{class:`st-card-title chunky`,text:`Make default for everyone`}),this.buildPublish())]}publishChanges(){let e=N_(this.settings);return Object.keys(e).length>0?{...o(),settings:e}:o()}buildPublish(){let e=J(`div`,{class:`st-publish`}),t=J(`div`,{class:`st-note st-publish-status`}),r=J(`input`,{class:`st-input st-pin`,attrs:{type:`password`,inputmode:`numeric`,maxlength:`4`,autocomplete:`off`,placeholder:`PIN`,"aria-label":`PIN`}}),i=J(`input`,{class:`st-input`,attrs:{type:`password`,autocomplete:`off`,placeholder:`github_pat_…`,"aria-label":`GitHub token`}}),a=J(`button`,{class:`chunky-btn yellow`,text:`Make default…`}),o=J(`button`,{class:`chunky-btn yellow`,text:`Confirm`}),s=J(`button`,{class:`chunky-btn yellow`,text:`Save token and publish`}),c=J(`button`,{class:`st-link`,text:`Forget the GitHub token on this device`}),l=J(`div`,{class:`st-publish-step`},r,o),u=J(`div`,{class:`st-publish-step st-token-step`},J(`div`,{class:`st-note`,text:`This device needs a GitHub token once. Create a fine-grained token for the ${h_} repository with Contents: Read and write, then paste it here. It stays on this device.`}),J(`a`,{class:`st-link`,text:`Create a token on GitHub ↗`,attrs:{href:m_,target:`_blank`,rel:`noopener`}}),i,s),d=e=>{a.hidden=e!==`start`,l.hidden=e!==`pin`,u.hidden=e!==`token`,c.hidden=e===`busy`||!g_()},f=async e=>{let n=this.publishChanges();d(`busy`),t.textContent=`Publishing…`;try{await y_(n,e,xv(n).join(`
`)),t.textContent=`Published. The new build with these defaults is live in about 2 minutes: reload the game then.`,this.options.toast(`Published as the new defaults`,2.4,`info`),d(`start`)}catch(e){let n=e instanceof v_?e:new v_(`Could not reach GitHub. Check the connection and try again.`);t.textContent=n.message,this.options.toast(n.message,3),n.badToken?(__(null),d(`token`)):d(`start`)}};X(a,()=>{if(n(this.publishChanges())===0){t.textContent=`Nothing to publish: everything is at the defaults.`;return}let e=tv(g);if(e.length>0){let n=e.map(nv).join(`, `);t.textContent=`Can't publish: ${n} ${e.length===1?`is`:`are`} outside the slider's range. Move ${e.length===1?`it`:`them`} into range first.`;return}t.textContent=`Enter the PIN to confirm.`,r.value=``,d(`pin`),r.focus()}),X(o,()=>{if(r.value!==iv){t.textContent=`Wrong PIN.`,r.value=``,wv(l);return}let e=g_();e?f(e):(t.textContent=``,d(`token`),i.focus())}),r.addEventListener(`keydown`,e=>{e.key===`Enter`&&o.click()}),X(s,()=>{let e=i.value.trim();e&&(__(e),i.value=``,f(e))}),X(c,()=>{__(null),t.textContent=`Token removed from this device.`,d(`start`)});let p=J(`div`,{class:`st-save-summary`}),m=J(`pre`,{class:`st-save-list`});return this.designRefreshers.push(()=>{let e=xv({settings:N_(this.settings)});p.textContent=e.length===0?`Your player settings are the defaults.`:`Your player settings that differ from the defaults:`,m.textContent=e.join(`
`),m.hidden=e.length===0}),e.append(J(`div`,{class:`st-note`,text:`Commits the tuned values and your player settings (aim guide, aim camera, last-shot flag, sound, graphics) as the new game.json. Every player gets them from the next build; a player who changed one of those settings keeps their own.`}),p,m,a,l,u,t,c),d(`start`),e}};function uv(e,t){e.classList.toggle(`st-row-off`,t);for(let n of e.querySelectorAll(`.st-seg-btn`))n.disabled=t}function dv(e){return J(`div`,{class:`st-heading chunky`,text:e})}function fv(e){return e.kind===`number`?Math.abs(e.get(g)-e.get(t))>1e-9:e.get(g)!==e.get(t)}function pv(e){return e.reduce((e,t)=>e+ +!!fv(t),0)}function mv(e){let t=e.kind===`choice`?e.options.map(e=>`${e.label} ${e.hint}`).join(` `):``;return`${e.label} ${e.hint??``} ${t}`.toLowerCase()}function hv(){try{let e=localStorage.getItem(ov);if(e&&av.some(([t])=>t===e))return e}catch{}return`shooting`}function gv(){try{let e=JSON.parse(localStorage.getItem(sv)??`{}`);if(e&&typeof e==`object`&&!Array.isArray(e))return Object.fromEntries(Object.entries(e).filter(([,e])=>typeof e==`boolean`))}catch{}return{}}function _v(e){try{localStorage.setItem(sv,JSON.stringify(e))}catch{}}function vv(e){let t=String(e);return t.includes(`.`)?t.length-t.indexOf(`.`)-1:0}function yv(e,t){let n=10**t;return Math.round(e*n)/n}function bv(e,t,n=``){return`${e.toFixed(t)}${n?` ${n}`:``}`}function xv(e,n=``){let r=[];for(let[i,a]of Object.entries(e)){let e=n?`${n}.${i}`:i;if(typeof a==`object`&&a&&!Array.isArray(a))r.push(...xv(a,e));else{let n=Sv(t,e);r.push(`${e}: ${Cv(a)} (default ${Cv(n)})`)}}return r}function Sv(e,t){let n=e;for(let e of t.split(`.`)){if(typeof n!=`object`||!n||Array.isArray(n))return;n=n[e]}return n}function Cv(e){let t=JSON.stringify(e)??`—`;return t.length>60?`${t.slice(0,57)}…`:t}function wv(e){e.classList.remove(`st-shake`),e.offsetWidth,e.classList.add(`st-shake`)}var Tv=[[4,`calm`],[10,`breeze`],[15,`strong`],[1/0,`gale`]],Ev={heavy:`<svg viewBox="0 0 32 32"><circle cx="16" cy="17" r="10" class="ball"/><circle cx="12.5" cy="13.5" r="2.6" class="shine"/></svg>`,volley:`<svg viewBox="0 0 32 32"><circle cx="7" cy="17" r="5" class="ball"/><circle cx="16" cy="17" r="5" class="ball"/><circle cx="25" cy="17" r="5" class="ball"/></svg>`,scatter:`<svg viewBox="0 0 32 32"><circle cx="10" cy="11" r="3.4" class="ball"/><circle cx="20" cy="9" r="3.4" class="ball"/><circle cx="25" cy="18" r="3.4" class="ball"/><circle cx="15" cy="18" r="3.4" class="ball"/><circle cx="8" cy="23" r="3.4" class="ball"/><circle cx="19" cy="26" r="3.4" class="ball"/></svg>`,human:`<svg viewBox="0 0 32 32"><circle cx="17" cy="18" r="9" class="ball"/><path d="M8.5 15.5C10 8 24 8 25.5 15.5Z" class="shine"/><path d="M25 13l5-3-1.5 5.5" class="ball" style="stroke-linejoin:round"/><circle cx="13.5" cy="19" r="1.4" class="shine"/><circle cx="20.5" cy="19" r="1.4" class="shine"/><path d="M3 22h4M2 17h4" class="ball" style="fill:none;stroke-width:2;stroke-linecap:round"/></svg>`,cluster:`<svg viewBox="0 0 32 32"><circle cx="13" cy="18" r="8" class="ball"/><path d="M17 11.5 21 7" class="ball" style="fill:none;stroke-width:2.2"/><circle cx="22.5" cy="5.5" r="2.2" class="shine"/><circle cx="25" cy="16" r="2.6" class="ball"/><circle cx="26" cy="24" r="2.6" class="ball"/><circle cx="19.5" cy="28" r="2.4" class="ball"/></svg>`,skip:`<svg viewBox="0 0 32 32"><ellipse cx="17" cy="12" rx="9" ry="4.5" class="ball"/><path d="M3 22c3-2.4 6-2.4 9 0M12 25c3-2.4 6-2.4 9 0M21 22c2.4-1.9 4.8-1.9 7.2 0" class="ball" style="fill:none;stroke-width:2;stroke-linecap:round"/></svg>`,drill:`<svg viewBox="0 0 32 32"><circle cx="11" cy="18" r="8" class="ball"/><path d="M16.5 11.5 28 4.5 21 16Z" class="ball" style="stroke-linejoin:round"/><circle cx="8.5" cy="15.5" r="2.2" class="shine"/></svg>`,swivel:`<svg viewBox="0 0 32 32"><circle cx="21" cy="16" r="6" class="ball"/><circle cx="19" cy="14" r="1.8" class="shine"/><path d="M3 11.5h9M1.5 16h9.5M3 20.5h9" class="ball" style="fill:none;stroke-width:2.2;stroke-linecap:round"/></svg>`,chain:`<svg viewBox="0 0 32 32"><path d="M8 9a7 7 0 0 0 0 14Z" class="ball"/><path d="M24 9a7 7 0 0 1 0 14Z" class="ball"/><ellipse cx="11.6" cy="16" rx="2.3" ry="1.5" class="ball" style="fill:none;stroke-width:1.8"/><ellipse cx="16" cy="16" rx="1.5" ry="2.3" class="ball" style="fill:none;stroke-width:1.8"/><ellipse cx="20.4" cy="16" rx="2.3" ry="1.5" class="ball" style="fill:none;stroke-width:1.8"/></svg>`},Dv=`<svg viewBox="0 0 40 40"><path d="M20 3 30 19.5 23.2 18.2 23.2 36 16.8 36 16.8 18.2 10 19.5Z"/></svg>`,Ov=class{root;labels;options;shipBars;turnPill;wind;windArrow;windSpeed;calloutEl;flashEl;calloutTimer=0;movePad;fuelFill;fuelLost;fuelLabel;cardsRow;cards=[];backButton;firePad;gauge;angleCard=new fh;slingBand=new Lh;pouch=J(`div`,{class:`sling-rest`},J(`div`,{class:`sling-rest-ball`}),J(`div`,{class:`sling-rest-label`,text:`Pull`}));angleLever=new ph;machines;shipStatus=new Kg;banner;toastEl;settingsPanel;draft;scope;tablet;steer;buildTag;resultModal;hint;bannerTimer=0;toastTimer=0;constructor(e){this.options=e;let{input:t}=e;this.root=J(`div`,{class:`hud`,attrs:{"data-mode":`hidden`}}),this.labels=J(`div`,{class:`labels`}),this.machines=new xg(e=>this.root.classList.toggle(`player-machines`,e.player>0));let n=e=>{let t=J(`div`,{class:`hp-fill`}),n=J(`div`,{class:`hp-ghost`}),r=J(`span`,{class:`hp-text`}),i=J(`div`,{class:`ship-name`,text:e===`player`?`You`:`Enemy`}),a=J(`div`,{class:`crew-pips`}),o=J(`div`,{class:`avatar`,text:e===`player`?`★`:`☠`}),s=J(`span`,{class:`sail-left`});return{fill:t,ghost:n,text:r,card:J(`div`,{class:`ship-card ${e}`},o,J(`div`,{class:`ship-info`},J(`div`,{class:`ship-head`},i,s),J(`div`,{class:`hp`},n,t,r),a)),name:i,crew:a,avatar:o,sail:s}};this.shipBars={player:n(`player`),enemy:n(`enemy`)},this.turnPill=J(`div`,{class:`turn-pill`});let r=J(`button`,{class:`icon-btn settings-btn`,attrs:{"aria-label":`Settings`}},Y(Pg));X(r,()=>this.openSettings()),this.windArrow=J(`div`,{class:`wind-arrow`},Y(Dv)),this.windSpeed=J(`span`,{class:`wind-speed`,text:`0`}),this.wind=J(`div`,{class:`wind`,attrs:{"data-level":`calm`}},J(`div`,{class:`wind-dial`},this.windArrow),J(`div`,{class:`wind-text`},J(`div`,{class:`wind-label`,text:`Wind`}),J(`div`,{},this.windSpeed,J(`span`,{class:`wind-unit`,text:` kn`}))));let i=J(`div`,{class:`hud-top`},J(`div`,{class:`ship-col player`},this.shipBars.player.card,this.machines.trays.player.element),J(`div`,{class:`top-center`},this.turnPill,this.wind),J(`div`,{class:`ship-col enemy`},this.shipBars.enemy.card,this.machines.trays.enemy.element),r),a=new ResizeObserver(()=>{let e=document.documentElement.style;e.setProperty(`--top-h`,`${i.offsetHeight}px`),e.setProperty(`--status-h`,`${this.shipStatus.element.offsetHeight}px`)});a.observe(i),a.observe(this.shipStatus.element);let o=J(`button`,{class:`move-btn`,attrs:{"aria-label":`Sail left`},text:`◀`}),s=J(`button`,{class:`move-btn`,attrs:{"aria-label":`Sail right`},text:`▶`});$m(o,()=>t.press(`left`,`hud`),()=>t.release(`left`,`hud`)),$m(s,()=>t.press(`right`,`hud`),()=>t.release(`right`,`hud`)),this.fuelFill=J(`div`,{class:`fuel-fill`}),this.fuelLost=J(`div`,{class:`fuel-lost`}),this.fuelLabel=J(`div`,{class:`fuel-label`,text:`Sail`}),this.movePad=J(`div`,{class:`move-pad`},o,J(`div`,{class:`fuel`},this.fuelLabel,J(`div`,{class:`fuel-bar`},this.fuelFill,this.fuelLost)),s),this.cardsRow=J(`div`,{class:`gunner-cards`}),this.backButton=J(`button`,{class:`back-btn`,text:`◀ Sail`}),X(this.backButton,()=>t.emit({type:`back`}));let c=J(`span`,{class:`fire-label`,text:`FIRE`}),l=J(`button`,{class:`fire-btn`},c);$m(l,()=>t.fireDown(`hud`),()=>t.fireUp(`hud`),()=>t.cancelFire(`hud`)),this.gauge=new jh(c),this.firePad=J(`div`,{class:`fire-pad`},this.gauge.ring,l),this.angleCard.onDrag=e=>t.nudgeAim(0,e),this.angleLever.onSet=e=>t.emit({type:`angle`,share:e}),this.hint=J(`div`,{class:`hint`}),this.banner=J(`div`,{class:`banner`}),this.calloutEl=J(`div`,{class:`callout`}),this.flashEl=J(`div`,{class:`screen-flash`}),this.toastEl=J(`div`,{class:`toast`}),this.settingsPanel=new lv({settings:e.settings,onSettingsChange:e.onSettingsChange,onRestart:e.onRestart,matchInfo:e.matchInfo,onLeave:e.onLeaveMatch,build:e.buildLabel,toast:(e,t,n)=>this.toast(e,t,n),onClose:()=>{this.options.onPause?.(!1),this.refreshBuildTag()}}),this.resultModal=J(`div`,{class:`modal result-modal`}),this.draft=new Cg(this.root),this.scope=new Eg(this.root),this.tablet=new Ag(this.root),this.steer=new kg(this.root),this.buildTag=J(`div`,{class:`build-tag`}),this.refreshBuildTag(),this.root.append(J(`div`,{class:`vignette`}),this.scope.element,this.flashEl,this.labels,i,this.movePad,this.cardsRow,this.backButton,this.firePad,this.gauge.element,this.angleCard.element,this.angleLever.element,this.pouch,this.shipStatus.element,this.draft.element,this.tablet.element,this.steer.element,this.hint,this.slingBand.element,this.banner,this.calloutEl,this.toastEl,this.buildTag,this.settingsPanel.element,this.resultModal),document.body.appendChild(this.root)}openSettings(){this.options.onPause?.(!0),this.settingsPanel.open()}refreshBuildTag(){let e=n(o())>0;this.buildTag.textContent=`${this.options.buildLabel}${e?` · tuned`:``}`}setMode(e){let t=this.root.dataset.mode;this.root.dataset.mode=e,(e===`aim`||e===`hidden`||e===`menu`||e===`scope`||e===`tablet`)&&this.shipStatus.hide(),t!==e&&this.sweepIn(t,e)}sweepIn(e,t){let n=e=>e!==void 0&&e!==`hidden`&&e!==`menu`,r=this.root.querySelector(`.hud-top`);r&&!n(e)&&n(t)&&Xh(r,`top`,0,460),t===`move`?(Xh(this.movePad,`left`,0,380),e!==`aim`&&[...this.cardsRow.children].forEach((e,t)=>Qh(e,60+t*60,380))):t===`aim`&&(Qh(this.firePad,40,420),Qh(this.angleCard.element,100,420),Xh(this.backButton,`left`,0,360))}showShipStatus(e,t){this.shipStatus.show(e,t)}hideShipStatus(){this.shipStatus.hide()}resetShipStatus(){this.shipStatus.reset()}resize(e,t){let n=Math.min(1.25,Math.max(.82,Math.min(e,t)/420));document.documentElement.style.setProperty(`--ui-scale`,n.toFixed(3))}setNames(e,t){this.shipBars.player.name.textContent=e,this.shipBars.enemy.name.textContent=t}setShipHp(e,t,n){let r=this.shipBars[e],i=`${100*Math.max(0,t)/n}%`;r.fill.style.width=i,r.ghost.style.width=i,r.fill.style.setProperty(`--segments`,String(n)),r.text.textContent=Av(t),r.card.classList.toggle(`low`,t<=n*.25)}setCrew(e,t,n){let r=this.shipBars[e].crew;for(;r.children.length<t.length;)r.append(J(`div`,{class:`crew-pip`},J(`div`,{class:`crew-pip-fill`})));for(;r.children.length>t.length;)r.lastElementChild.remove();t.forEach((e,t)=>{let i=r.children[t];i.classList.toggle(`dead`,e<=0);let a=typeof n==`number`?n:n[t]??1;i.firstElementChild.style.width=`${100*Math.max(0,e)/a}%`})}setAvatar(e,t){this.shipBars[e].avatar.replaceChildren(t)}bumpShip(e){let t=this.shipBars[e].card;t.classList.remove(`bump`),t.offsetWidth,t.classList.add(`bump`)}setTurn(e,t=``){this.turnPill.textContent=t,this.turnPill.dataset.side=e??``,this.shipBars.player.card.classList.toggle(`active`,e===`player`),this.shipBars.enemy.card.classList.toggle(`active`,e===`enemy`)}setWind(e,t,n=!1){this.windArrow.style.transform=`rotate(${e.toFixed(3)}rad)`;let r=String(Math.round(t));this.windSpeed.textContent!==r&&(this.windSpeed.textContent=r),this.wind.dataset.level=Tv.find(([e])=>t<e)[1],n&&eh(this.wind,`changed`)}callout(e,t,n=1.4,r=``){this.calloutEl.replaceChildren(J(`div`,{class:`callout-title`,text:e})),r&&this.calloutEl.append(J(`div`,{class:`callout-sub`,text:r})),this.calloutEl.dataset.tone=t,eh(this.calloutEl,`visible`),window.clearTimeout(this.calloutTimer),this.calloutTimer=window.setTimeout(()=>this.calloutEl.classList.remove(`visible`),n*1e3)}flash(e,t=1){this.flashEl.dataset.kind=e,this.flashEl.style.setProperty(`--strength`,t.toFixed(2)),eh(this.flashEl,`on`)}setFuel(e){this.fuelFill.style.width=`${Math.max(0,Math.min(1,e))*100}%`,this.movePad.classList.toggle(`empty`,e<=.001)}setSail(e,t){let n=Math.max(0,Math.min(1,t)),r=n>=.995,i=this.shipBars[e].sail;i.textContent=r?``:`⛵ ${Math.round(n*100)}%`,i.classList.toggle(`low`,n<.35),e===`player`&&(this.fuelLost.style.width=`${(1-n)*100}%`,this.fuelLabel.textContent=r?`Sail`:`Sail ${Math.round(n*100)}%`)}setGunners(e,t){let n=e.map(e=>`${e.name}:${e.cannonId}`).join(` `);(this.cards.length!==e.length||this.cardsRow.dataset.crew!==n)&&(this.cardsRow.dataset.crew=n,this.cardsRow.replaceChildren(),this.cards=e.map((e,t)=>{let n=J(`button`,{class:`gunner-card`},Y(Ev[e.cannonId]??Ev.heavy),J(`div`,{class:`gunner-name`,text:e.name}),J(`div`,{class:`gunner-cannon`,text:e.cannonName}),J(`div`,{class:`crew-hp`},J(`div`,{class:`crew-hp-fill`})),J(`div`,{class:`gunner-key`,text:String(t+1)}));return X(n,()=>this.options.input.emit({type:`select`,index:t})),this.cardsRow.append(n),n})),e.forEach((e,n)=>{let r=this.cards[n],i=e.hp<=0;r.classList.toggle(`selected`,t===n),r.classList.toggle(`dead`,i),r.classList.toggle(`charged`,!!e.charged&&!i),r.classList.toggle(`sulking`,!!e.sulking&&!i),this.setBadges(r,e.upgrades??[]),r.disabled=i||!!e.sulking;let a=r.querySelector(`.crew-hp-fill`);a.style.width=`${100*Math.max(0,e.hp)/e.maxHp}%`,a.style.setProperty(`--segments`,String(e.maxHp))})}setBadges(e,t){let n=t.join(` `);if(e.dataset.badges===n)return;let r=new Set((e.dataset.badges??``).split(` `));e.dataset.badges=n,e.querySelector(`.gunner-badges`)?.remove(),t.length!==0&&e.append(J(`div`,{class:`gunner-badges`},...t.map(e=>J(`div`,{class:`gunner-badge badge-${e}${r.has(e)?``:` new`}`},Y(xh[e],`gunner-badge-svg`)))))}setPower(e,t){this.firePad.classList.toggle(`charging`,e!==null),this.firePad.style.setProperty(`--power`,(e?.power??0).toFixed(3)),t!==void 0&&this.gauge.setCancelZone(t),this.gauge.setCharge(e)}setAimReadout(e,t,n){this.angleCard.setAngle(e),this.angleLever.setAngle(e),this.gauge.setReadout(t,n)}setFiring(e,t){this.root.dataset.firing=e,this.root.classList.toggle(`sling`,t!==null),t?this.root.dataset.sling=t:delete this.root.dataset.sling}setPull(e){e?this.slingBand.show(e):this.slingBand.hide(),this.root.classList.toggle(`pulling`,e!==null)}pouchZone(){let e=this.pouch.getBoundingClientRect();return e.width===0?null:{x:e.left+e.width/2,y:e.top+e.height/2,r:Math.max(e.width,e.height)/2+14}}setAimLimits(e,t){this.angleCard.setLimits(e,t),this.angleLever.setLimits(e,t)}setHint(e){this.hint.textContent=e,this.hint.classList.toggle(`visible`,e.length>0)}showBanner(e,t=``,n=1.3){this.banner.replaceChildren(J(`div`,{class:`banner-title`,text:e})),t&&this.banner.append(J(`div`,{class:`banner-sub`,text:t})),eh(this.banner,`visible`),window.clearTimeout(this.bannerTimer),this.bannerTimer=window.setTimeout(()=>this.banner.classList.remove(`visible`),n*1e3)}hideBanner(){window.clearTimeout(this.bannerTimer),this.banner.classList.remove(`visible`)}get toastText(){return this.toastEl.classList.contains(`visible`)?this.toastEl.textContent:null}toast(e,t=1.6,n=`alert`){this.toastEl.textContent=e,this.toastEl.classList.toggle(`info`,n===`info`),this.toastEl.classList.add(`visible`),window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove(`visible`),t*1e3)}showResult(e){let t=J(`button`,{class:`chunky-btn yellow`,text:`Play again`});X(t,()=>{this.hideResult(),this.options.onPlayAgain()});let n=J(`button`,{class:`chunky-btn blue`,text:`Exit`});X(n,()=>{this.hideResult(),this.options.onExit()});let r=e.reward,i=r?J(`div`,{class:`result-rewards`},kv(`trophies`,Mg,r.trophies,r.totalTrophies),kv(`coins`,Ng,r.coins,r.totalCoins)):null,a=J(`div`,{class:`result-title chunky`,text:e.won?`Victory!`:`Defeat`}),o=J(`table`,{class:`stats`},...e.stats.map(([e,t])=>J(`tr`,{},J(`th`,{text:e}),J(`td`,{text:t})))),s=J(`div`,{class:`panel result ${e.won?`won`:`lost`}`},J(`div`,{class:`result-main`},a,J(`div`,{class:`result-reason`,text:e.reason}),e.opponentLine?J(`div`,{class:`result-line`,text:e.opponentLine}):null,i,J(`div`,{class:`result-actions`},n,t)),o);this.resultModal.replaceChildren(s),this.resultModal.classList.add(`open`),Wh()?.whoosh(!0),Xh(s,`top`,0,480),eg(a,260),e.won||tg(s,10,430),Xh(o,`right`,420,420);let c=i?[...i.children]:[];c.forEach((e,t)=>Qh(e,640+t*160,420)),window.setTimeout(()=>this.celebrateRewards(c),760),Qh(n,1350,380),Qh(t,1450,380)}celebrateRewards(e){let t=0,n=!1;e.forEach((e,r)=>{window.setTimeout(()=>{if(!e.isConnected||!this.resultModal.classList.contains(`open`))return;let r=e.querySelector(`.reward-icon`),i=e.querySelector(`.reward-total`),a=Number(i?.dataset.from),o=Number(i?.dataset.to);if(!i||!r||a===o)return;let s=o<a;n||=s,sg(r,e.classList.contains(`coins`)?Ng:Mg,s?5:9,s),s&&tg(e,9),Gh(s?[20,40,20]:15),t++,rg(i,a,o,800).then(()=>{ng(i,1.45),--t===0&&Wh()?.rewardDone(!n)})},r*160)})}hideResult(){this.resultModal.classList.remove(`open`)}};function kv(e,t,n,r){let i=n>0?`+`:n<0?`−`:``;return J(`div`,{class:`reward-chip ${e}${n<0?` down`:``}`},Y(t,`reward-icon`),J(`div`,{class:`reward-delta chunky`,text:`${i}${Math.abs(n)}`}),J(`div`,{class:`reward-total chunky`,text:String(r-n),attrs:{"data-from":String(r-n),"data-to":String(r)}}))}function Av(e){let t=Math.round(e*100)/100;return Number.isInteger(t)?String(t):t.toFixed(2).replace(/0$/,``)}var jv=[`Salty`,`Dread`,`Rusty`,`Stormy`,`Black`,`Iron`,`Scurvy`,`Mad`,`Lucky`,`Grim`,`Sly`,`Briny`,`Crimson`,`Golden`,`Jolly`,`Sneaky`,`Cursed`,`Wild`,`Foggy`,`Rum`],Mv=[`Bones`,`Beard`,`Kraken`,`Cutlass`,`Parrot`,`Anchor`,`Flint`,`Hook`,`Grog`,`Plank`,`Gull`,`Squid`,`Doubloon`,`Galleon`,`Cannon`,`Reef`,`Tide`,`Shanty`,`Barnacle`,`Pegleg`],Nv=[`Pete`,`Mary`,`Jack`,`Morgan`,`Nell`,`Bart`,`Anne`,`Kidd`,`Rosa`,`Finn`,`Ike`,`Greta`],Pv=[`#7a2e8f`,`#1f6f8b`,`#2f7d4a`,`#9c3d2a`,`#3b4a9c`,`#8a6a1f`,`#2a2f3a`,`#a33a64`],Fv=[`#f2c14e`,`#d9dee5`,`#e08a3c`],Iv=[`skull`,`anchor`,`swords`,`wheel`,`compass`],Lv=40;function Rv(e,t){return{name:zv(e),trophies:Math.max(0,t-Lv+e.int(81)),badge:{background:e.pick(Pv),ring:e.pick(Fv),emblem:e.pick(Iv),emblemColor:e.chance(.75)?`#fff4dc`:`#ffd56b`}}}function zv(e){let t=e.pick(jv),n=e.pick(Mv),r=e.pick(Nv),i=String(e.chance(.5)?e.int(100):1960+e.int(60));switch(e.int(7)){case 0:return`${t}${n}${i}`;case 1:return`${n}_${r}`;case 2:return`xX${t}${n}Xx`;case 3:return`Capn${n}`;case 4:return`${r}The${t}`;case 5:return`${t.toLowerCase()}${r.toLowerCase()}_${e.int(10)}`;default:return`${t}${r}`}}function Bv(e){return`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="${e.background}" stroke="${e.ring}" stroke-width="4"/>
    <circle cx="32" cy="32" r="24" fill="none" stroke="${e.ring}" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="3 3"/>
    <g fill="${e.emblemColor}" stroke="${e.emblemColor}">${Vv[e.emblem]}</g>
  </svg>`}var Vv={skull:`
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
    <circle cx="32" cy="32" r="3" fill="#1b1b1b" stroke="none"/>`},Hv=[`compass`,`anchor`,`skull`,`swords`,`wheel`].flatMap(e=>[`#2c5fae`,`#1f6f8b`,`#2f7d4a`,`#8a6a1f`,`#9c3d2a`,`#7a2e8f`].map(t=>({background:t,ring:`#f2c14e`,emblem:e,emblemColor:`#fff4dc`}))),Uv=[`gg`,`gg wp`,`nice try!`,`close one`,`gg, rematch?`],Wv=[`gg`,`gg wp`,`argh! rematch?`,`nice shots`,`lucky shot!`];function Gv(e,t){return e.pick(t?Uv:Wv)}var Kv={coin:900,result:2300,leave:3600,done:4e3},qv=class{root;timers=[];onDone=null;constructor(e){this.root=J(`div`,{class:`vs-intro`}),X(this.root,()=>this.skip()),e.append(this.root)}get playing(){return this.onDone!==null}play(e){this.clearTimers(),this.onDone=e.onDone;let{player:t,opponent:n,firstSide:r}=e,i=(e,t)=>J(`div`,{class:`vs-card ${e}`},J(`div`,{class:`vs-badge`},Y(Bv(t.badge),`badge`)),J(`div`,{class:`vs-name`,text:t.name}),J(`div`,{class:`vs-trophies`},Y(Mg,`vs-trophy`),J(`span`,{text:String(t.trophies)}))),a=J(`div`,{class:`vs-coin ${r===`player`?`lands-player`:`lands-enemy`}`},J(`div`,{class:`coin-face front`},Y(Bv(t.badge),`badge`)),J(`div`,{class:`coin-face back`},Y(Bv(n.badge),`badge`))),o=J(`div`,{class:`vs-result`,text:r===`player`?`You go first!`:`${n.name} goes first`}),s=J(`div`,{class:`vs-stage`},i(`player`,t),J(`div`,{class:`vs-mid`,text:`VS`}),i(`enemy`,n));this.root.replaceChildren(s,J(`div`,{class:`vs-coin-wrap`},a),o),this.root.className=`vs-intro open`,this.at(0,()=>{this.root.classList.add(`cards`),e.onBeat?.(`found`)}),this.at(Kv.coin,()=>{this.root.classList.add(`coin`),e.onBeat?.(`coin`)}),this.at(Kv.result,()=>{this.root.classList.add(`result`),e.onBeat?.(`result`)}),this.at(Kv.leave,()=>this.root.classList.add(`leaving`)),this.at(Kv.done,()=>this.finish())}skip(){this.playing&&this.finish()}cancel(){this.clearTimers(),this.root.className=`vs-intro`,this.onDone=null}finish(){this.clearTimers(),this.root.className=`vs-intro`;let e=this.onDone;this.onDone=null,e?.()}at(e,t){this.timers.push(window.setTimeout(t,e))}clearTimers(){for(let e of this.timers)window.clearTimeout(e);this.timers=[]}},Jv=.09,Yv=7,Xv=1.4;function Zv(e,t){let{power:n}=Yl(e,t.power),r=e-t.power.fillTime;return $v(n,r<0?null:r,t)}function Qv(e,t){return $v(Ee(e,0,1),null,t)}function $v(e,t,n){let r=n.presentation.chargeShake,i=n.presentation.chargeVignette,a=t===null?r.maxDeg*e**r.curve:r.maxDeg*r.rattle,o=t===null?0:r.joltDeg*Math.exp(-t/Jv)*Math.cos(2*Math.PI*Yv*t),s=e**i.curve,c=t===null?0:i.pulse*(.5-.5*Math.cos(2*Math.PI*i.pulseHz*t));return{rumble:{deg:a,rollDeg:a*r.roll,hz:r.startHz+(r.fullHz-r.startHz)*e,kickDeg:o},vignette:{opacity:i.darkness*s,reach:Xv+(i.reach-Xv)*s,softness:i.softness,red:Math.min(1,i.red*s+c)}}}function ey(e,t,n,r){let{position:i,forward:a,starboard:o}=t,s=Math.hypot(i.x-e.x,i.z-e.z)||1,c=(i.x-e.x)/s,l=(i.z-e.z)/s,u=n.x-i.x,d=n.z-i.z,f=u*c+d*l,p=d*c-u*l,m=(Math.max(...r.map(e=>e.center.x+e.halfSize.x))-Math.min(...r.map(e=>e.center.x-e.halfSize.x)))/2,h=Math.max(...r.map(e=>Math.abs(e.center.z)+e.halfSize.z)),g=(e,t)=>Math.abs(e*a.x+t*a.z)*m+Math.abs(e*o.x+t*o.z)*h;return Math.abs(p)/g(-l,c)>Math.abs(f)/g(c,l)?`WIDE`:f<0?`SHORT`:`LONG`}var ty=`ship-combat.profile.v1`;function ny(e){return e.replace(/[\p{Cc}\p{Cf}]/gu,``).replace(/\s+/g,` `).trim()}function ry(e){let t=[...e].length;return t<3?`At least 3 characters`:t>15?`At most 15 characters`:null}function iy(e){return Hv[e.icon]??Hv[0]}function ay(e,t,n){let r=t?n.trophiesPerWin:0-Math.min(e.trophies,n.trophiesPerLoss),i=t?n.coinsPerWin:n.coinsPerLoss;return{won:t,trophies:r,coins:i,totalTrophies:e.trophies+r,totalCoins:e.coins+i}}function oy(e,t){return{...e,trophies:t.totalTrophies,coins:t.totalCoins}}function sy(e,t,n){let r=[];if(Array.isArray(e))for(let i of e)typeof i==`string`&&t.includes(i)&&!r.includes(i)&&r.length<n&&r.push(i);for(let e of t)r.length<n&&!r.includes(e)&&r.push(e);return r}function cy(e,t,n){let r=zv(e);for(let t=0;t<20&&ry(r);t++)r=zv(e);return ry(r)&&(r=`Captain`),{name:r,icon:0,trophies:0,coins:0,lineup:sy(null,t,n)}}function ly(e,t,n,r){let i=(e,t)=>typeof e==`number`&&Number.isFinite(e)&&e>=0?Math.floor(e):t,a=typeof e.name==`string`?ny(e.name):``;return{name:a&&!ry(a)?a:t.name,icon:typeof e.icon==`number`&&Number.isInteger(e.icon)&&e.icon>=0&&e.icon<Hv.length?e.icon:t.icon,trophies:i(e.trophies,t.trophies),coins:i(e.coins,t.coins),lineup:sy(e.lineup??t.lineup,n,r)}}function uy(e,t){let n=()=>cy(new sl(Math.random()*2**32>>>0),e,t),r;try{let i=localStorage.getItem(ty);r=i?ly(JSON.parse(i),n(),e,t):n()}catch{r=n()}return dy(r),r}function dy(e){try{localStorage.setItem(ty,JSON.stringify(e))}catch{}}var fy=72,py=1.6,my=null;function hy(){if(my)return my;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.45,`rgba(255,255,255,0.65)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),my=new re(e),my.colorSpace=w,my}var gy=class{object=new H;puffs=[];material;shown=0;wanted=!1;radius=40;constructor(){this.material=new at({map:hy(),color:`#eef3f8`,transparent:!0,depthWrite:!1,opacity:0});for(let e=0;e<fy;e++){let t=new ye(this.material);t.renderOrder=3,this.object.add(t);let n=e*2.39996;this.puffs.push({sprite:t,angle:n,out:Math.sqrt((e+.5)/fy),up:e*.618%1,size:.55+e*.37%1*.45,phase:e*1.7})}this.object.visible=!1}set(e,t,n){this.wanted=e,this.radius=n,this.object.position.set(t.x,0,t.z)}clear(){this.wanted=!1,this.shown=0,this.object.visible=!1}update(e,t){if(this.shown=z.clamp(this.shown+(this.wanted?e:-e)/py,0,1),this.object.visible=this.shown>.001,!this.object.visible)return;let n=this.radius,r=this.wanted?0:(1-this.shown)*6;this.material.opacity=.86*this.shown;for(let e of this.puffs){let i=e.angle+t*.035,a=n*(.1+.9*e.out)*(1.25-.25*this.shown);e.sprite.position.set(Math.cos(i)*a,1+e.up*e.up*n*.45+Math.sin(t*.4+e.phase)*1.2+r,Math.sin(i)*a);let o=n*.7*e.size;e.sprite.scale.set(o,o*.62,1)}}},_y={sniper:`SNIPER RIFLE!`,extraBall:`+1 BALL!`,magnet:`MAGNETIC!`,accuracy:`DEAD AIM!`,wings:`WINGED!`,hotShot:`HOT SHOT!`},vy={sniper:`#ffd36e`,revive:`#5fe08a`,extraBall:`#ffd36e`,magnet:Fu,repair:`#8fe07a`,gifts:`#ffb35a`,laser:`#ff5a5a`,antiMissile:`#8fd0ff`,healer:`#5fe08a`,accuracy:`#ffd36e`,wings:`#dff3ff`,charger:`#ff4d4d`,hotShot:`#ff8a3c`,mist:`#e8f3ff`,hiredHand:`#ffd36e`,shield:`#6fc8ff`,rogueWave:`#5fb8ff`,depression:`#9fb3c9`,sacrifice:`#ffe08a`,pickpocket:`#b77bff`},yy={antiMissile:e=>`Zaps an incoming ball every ${e.cards.antiMissile.every} enemy shots`,healer:e=>`Heals a hurt gunner ${Math.round(e.cards.healer.heal*100)}% every turn`,charger:e=>`A gunner gets +${Math.round(e.cards.charger.bonus*100)}% damage every turn`,shield:e=>`Its dome stops their first shot, then is up again for their ${by(Math.round(e.cards.shield.every))} after`},by=e=>`${e}${e%10==1&&e%100!=11?`st`:e%10==2&&e%100!=12?`nd`:e%10==3&&e%100!=13?`rd`:`th`}`,xy={damage:e=>`×${Av(e.powerUps.damageMultiplier)}`,blast:()=>`BLAST`,meteor:()=>`METEOR`,split:e=>`+${e.powerUps.splitUses}`},Sy=e=>new V(e.x,e.y,e.z),Cy=.8,wy=1.8,Ty=2.4,Ey=class{stage;gifts=new Map;taken=new Set;beats=[];time=0;mists={player:new gy,enemy:new gy};domesHeld={player:!1,enemy:!1};thefts=[];holdDomes(e){for(let t of e)t.type===`ShieldBlocked`&&(this.domesHeld[t.side]=!0);this.refreshLooks()}shieldBlocked(e){let{world:t,hud:n,sfx:r}=this.stage;this.domesHeld[e.side]=!1;let i=t.ships[e.side];i.domeHit(),i.machine(`shield`)?.flare();let a=Sy(e.point);t.effects.powerBurst(e.point,`#6fc8ff`,1.4),t.effects.sparkle(a,`#bfe9ff`,1.3),r.shieldBlock(this.stage.soundAt(a)),this.stage.director.addShake(.35),this.machineFired(e.side,`shield`,`BLOCKED!`),e.side===`player`?n.callout(`SHIELDED!`,`hit`,1.5,`Your dome stopped their shot: it’s down while it recharges`):n.callout(`BLOCKED!`,`bad`,1.5,`${this.stage.opponentName()}'s shield dome stopped your shot`),this.refreshLooks()}fires={player:null,enemy:null};fireAt(e){let t=this.fires[e];return t?(this.stage.world.ships[e].root.updateMatrixWorld(!0),this.stage.world.ships[e].root.localToWorld(new V(t.x,Math.max(t.y,this.stage.config.ship.deckHeight),t.z))):null}onFire(e,t){let{world:n,hud:r,sfx:i,config:a}=this.stage;this.fires[e]=xo(this.stage.match().frameOf(e),t),n.effects.bigBlast(t,1.6),n.effects.sparkle(t,`#ff8a3c`,1.2),i.fire(this.stage.soundAt(t));let o=Math.round(a.cards.hotShot.turns);e===`enemy`?r.callout(`THEIR SHIP’S ON FIRE!`,`kill`,1.6,`−${Av(a.cards.hotShot.damage)} hull at the start of each of their next ${o} turns`):r.callout(`FIRE ON BOARD!`,`bad`,1.6,`It burns −${Av(a.cards.hotShot.damage)} hull for ${o} turns: Ship Repairs puts it out`)}constructor(e){this.stage=e;for(let e of m)this.hookShip(e);for(let t of m)e.world.scene.add(this.mists[t].object)}mistRose(e){let{world:t,hud:n,sfx:r}=this.stage,i=Sy(this.stage.match().frameOf(e).position);r.mist(this.stage.soundAt(i)),e===`player`?n.toast(`The mist rolls in round your ship`):n.callout(`THEY’RE IN THE MIST`,`bad`,1.6,`You can only just make out their ship this turn`),t.effects.sparkle(i.clone().setY(8),`#eef3f8`,1.2)}hookShip(e){let{world:t,sfx:n}=this.stage,r=t.ships[e];r.onCrewAboard=e=>{t.effects.sparkle(e.clone().setY(e.y+1),`#5fe08a`,1.1),n.upgrade(this.stage.soundAt(e))},r.onMachineLanded=e=>{t.effects.dust(e),t.effects.sparkle(e.clone().setY(e.y+1.2),`#ffd36e`,1),n.machineBuilt(this.stage.soundAt(e)),this.stage.director.addShake(.2)},r.onMended=(e,n)=>{t.effects.sparkle(e,n===`mast`?`#ffd36e`:`#8fe07a`,n===`mast`?1.4:.8),t.effects.shipHit(e,.25)}}draftCards(e,t){let{config:n}=this.stage,r=this.stage.match();return t.map(t=>{let i=t.kind===`depression`?h(e):e,a=t.unit===null?null:r.unitOf(i,t.unit),o=t.kind===`pickpocket`&&t.machine?t.machine:null,s=t.kind===`hiredHand`&&t.recruit?t.recruit:null,c=s?n.units[s]:null,l=o?`Steal their ${L_[o]}`:B_(t.kind,n);return{kind:t.kind,title:L_[t.kind],ribbon:R_[t.kind],description:l,rare:this.rare(t.kind),machine:Zs(t.kind),unit:a?{icon:Ev[a.cannon]??Ev.heavy,name:a.name}:o?{icon:bh(o),name:R_[o]}:c?{icon:Ev[c.cannon]??Ev.heavy,name:c.name}:null}})}rare(e){return this.stage.config.cards.weights[e]<.5}cardTarget(e,t){let{config:n}=this.stage,r=this.stage.match(),i;if(t.kind===`depression`&&t.unit!==null)i=this.stage.crewHead(h(e),t.unit);else if(t.unit!==null)i=this.stage.crewHead(e,t.unit);else if(Zs(t.kind))i=Sy(r.machinePosition(e,t.kind));else if(t.kind===`pickpocket`&&t.machine)i=Sy(r.machinePosition(h(e),t.machine));else if(t.kind===`hiredHand`){let t=Hn(n,n.gunners.length);i=Sy(G(r.frameOf(e),N(t.x,n.ship.deckHeight+1.5,n.crew.standZ)))}else if(t.kind===`gifts`){let e=r.frameOf(`player`).position,t=r.frameOf(`enemy`).position;i=new V((e.x+t.x)/2,18,(e.z+t.z)/2)}else i=Sy(G(r.frameOf(e),N(0,n.ship.deckHeight+2,0)));return this.project(i)}project(e){let{world:t}=this.stage,n=e.clone().project(t.camera);return n.z>=1?null:{x:(n.x+1)/2*t.viewportWidth,y:(1-n.y)/2*t.viewportHeight}}playPick(e,t,n=!1){let{world:r,hud:i,labels:a,sfx:o,config:s}=this.stage,c=e===`player`,l=.7,u=1.1;for(let d of t)switch(d.type){case`CardPicked`:{let t=d.card.kind;o.cardPick(this.rare(t));let n=_y[t];if(n&&d.card.unit!==null){let i=this.stage.crewHead(e,d.card.unit);r.effects.sparkle(i,vy[t],1),a.addFloating(i,n,`card-pop${t===`magnet`?` magnet`:``}`,1.6,2.5),o.upgrade(this.stage.soundAt(i)),l=Math.max(l,1.1)}break}case`UnitRevived`:{this.stage.shown.crew[d.side][d.unitIndex]=d.hp,this.stage.refreshHud();let e=this.stage.match().unitOf(d.side,d.unitIndex).name,t=r.ships[d.side];if(n)t.setCrewAlive(d.unitIndex,!0,!1);else{let e=t.reviveCrew(d.unitIndex);r.effects.splash(e,.8),o.revive(this.stage.soundAt(e))}let s=this.stage.crewHead(d.side,d.unitIndex);a.addFloating(s,`+${Av(d.hp)}`,`heal-number`,1.8,3),c?i.callout(`BACK ABOARD!`,`hit`,1.6,`Your ${e} gunner is back with ${Math.round(100*d.hp/this.stage.match().fullHpOf(d.side,d.unitIndex))}% health`):i.callout(`REVIVED!`,`bad`,1.6,`${this.stage.opponentName()}'s ${e} gunner is back aboard`),l=Math.max(l,n?.3:1.8);break}case`ShipRepaired`:{let e=this.stage.shown;e.ship[d.side]=d.hp,e.sail[d.side]=d.sailing,i.setShipHp(d.side,d.hp,s.ship.hp),i.setSail(d.side,d.sailing),i.bumpShip(d.side);let t=r.ships[d.side],{spots:u,closed:f}=t.repair(d.holes,d.tears,d.masts),p=this.stage.holes[d.side];for(let e=p.length-1;e>=0;e--){let n=t.nearestHole(new V(p[e].x,p[e].y,p[e].z));n&&f.includes(n)&&p.splice(e,1)}let m=Sy(G(this.stage.match().frameOf(d.side),N(0,s.ship.deckHeight+1.5,0)));o.repair(this.stage.soundAt(m)),r.effects.sparkle(m,`#8fe07a`,1.4),a.addFloating(m,`+${Av(d.amount)} hull`,`heal-number`,2,4);let h=[d.holes>0?`${d.holes} ${d.holes===1?`hole`:`holes`} patched`:``,d.tears.length>0?`${d.tears.length} ${d.tears.length===1?`tear`:`tears`} stitched`:``,d.masts.length>0?`${d.masts.length===1?`a mast`:`${d.masts.length} masts`} back up`:``].filter(Boolean);d.extinguished&&(h.push(`the fire is out`),this.fires[d.side]=null,r.effects.splash(m,.6));let g=[`+${Av(d.amount)} hull`,...h].join(` · `);c?i.callout(`SHIP REPAIRED!`,`hit`,1.8,g):i.callout(`ENEMY REPAIRS`,`bad`,1.6,g),l=Math.max(l,n?.3:1.2+.25*u.length+(d.masts.length>0?1.4:.6));break}case`GiftsDropped`:this.showGifts(d.crates),o.gifts(),c?i.callout(`IT'S RAINING GIFTS!`,`hit`,1.8,`${d.crates.length} crates for this shot: line up several`):i.callout(`GIFTS FOR THEM!`,`bad`,1.6,`${d.crates.length} crates for ${this.stage.opponentName()}'s shot`),!n&&d.crates.length>0&&(this.stage.director.use(this.giftShot(e,d.crates),{seconds:.9,arc:.2}),l=Math.max(l,2.3));break;case`MachineBuilt`:{r.ships[d.side].setMachine(d.machine,!0,!n),i.machines.built(d.side,this.machineInfo(d.side,d.machine,{hp:d.hp,recharge:0}),n);let e=L_[d.machine].toUpperCase();c?i.callout(`${e}!`,`hit`,1.8,yy[d.machine](s)):i.callout(`ENEMY ${e}`,`bad`,1.8,`${this.stage.opponentName()} built one: ${yy[d.machine](s).toLowerCase()}`),n||(this.stage.director.use(this.machineShot(d.side,d.machine),{seconds:.8,arc:.15}),l=Math.max(l,2.4));break}case`UnitCharged`:this.later(n?0:u,()=>this.chargeBeat(d.side,d.unitIndex));break;case`UnitHired`:{let e=this.stage.config.cannons[this.stage.config.units[d.unit]?.cannon??``]?.name.toLowerCase()??`spare gun`;this.stage.shown.crew[d.side][d.unitIndex]=d.hp,r.ships[d.side].hire(d.unit,!n),this.stage.refreshHud(),c?i.callout(`HIRED HAND!`,`hit`,1.8,`A deckhand joins your crew on the ${e}: they can fire this turn`):i.callout(`THEY HIRED A HAND`,`bad`,1.8,`${this.stage.opponentName()}'s deckhand mans their ${e}`),n||(o.coin(),this.stage.director.use(this.gunnerShot(d.side,d.unitIndex,!0),{seconds:.7,arc:.15}),l=Math.max(l,2.3));break}case`UnitSacrificed`:{let e=this.stage.match().unitOf(d.side,d.unitIndex).name;this.stage.shown.crew[d.side][d.unitIndex]=0,this.stage.refreshHud();let t=r.ships[d.side];if(c?i.callout(`NOBLE SACRIFICE!`,`hit`,1.8,`Your ${e} goes overboard: you go again after this turn`):i.callout(`NOBLE SACRIFICE`,`bad`,1.8,`${this.stage.opponentName()}'s ${e} went overboard: they go twice`),n)t.setCrewAlive(d.unitIndex,!1,!1);else{t.sacrificeCrew(d.unitIndex);let e=this.stage.crewHead(d.side,d.unitIndex);o.salute(this.stage.soundAt(e)),this.later(mp,()=>o.overboard(this.stage.soundAt(e))),this.stage.director.use(this.gunnerShot(d.side,d.unitIndex,!0),{seconds:.7,arc:.15}),l=Math.max(l,mp+1.9)}break}case`MachineStolen`:{let e=L_[d.machine];c?i.callout(`PICKPOCKETED!`,`hit`,1.8,`You stole ${this.stage.opponentName()}'s ${e}: it works for you now`):i.callout(`ROBBED!`,`bad`,1.8,`${this.stage.opponentName()} stole your ${e}`),n?(r.ships[d.from].setMachine(d.machine,!1),r.ships[d.side].setMachine(d.machine,!0),i.machines.trays[d.from].remove(d.machine,`quiet`),i.machines.trays[d.side].add(this.machineInfo(d.side,d.machine,d),`quiet`)):(this.steal(d.side,d.from,d.machine),u=3.45,l=Math.max(l,u+.6));break}case`MistCalled`:{let e=Sy(G(this.stage.match().frameOf(d.side),N(0,s.ship.deckHeight+3,0)));r.effects.sparkle(e,`#eef3f8`,1.2),o.mist(this.stage.soundAt(e)),c?i.callout(`PROTECTIVE MIST!`,`hit`,1.8,`As your turn ends, mist rolls in round your ship: their next shot is in the dark`):i.callout(`THEY CALLED THE MIST`,`bad`,1.8,`Mist will hide ${this.stage.opponentName()}'s ship on your turn`);break}case`ShipRocked`:{let e=this.stage.match().frameOf(d.side),t=Sy(G(e,N(0,0,10)));r.effects.splash(t,2.4),r.effects.splash(Sy(G(e,N(-8,0,9))),1.8),r.effects.splash(Sy(G(e,N(8,0,9))),1.8),o.wave(this.stage.soundAt(t)),c?i.callout(`ROGUE WAVE!`,`hit`,1.8,`${this.stage.opponentName()}'s ship rolls: their next shot will be way off`):i.callout(`ROGUE WAVE!`,`bad`,1.8,`Your ship rolls: your aim sways this turn, so time your shot`),n||(this.stage.director.use(this.shipShot(d.side),{seconds:.8,arc:.15}),l=Math.max(l,2));break}case`UnitDepressed`:{let e=this.stage.crewHead(d.side,d.unitIndex),t=this.stage.match().unitOf(d.side,d.unitIndex).name;r.effects.sparkle(e,`#9fb3c9`,.9),a.addFloating(e,`SULKING…`,`card-pop sulk`,1.8,2.5),o.sulk(this.stage.soundAt(e)),c?i.callout(`THEY’RE SULKING!`,`hit`,1.8,`${this.stage.opponentName()}'s ${t} won't fire next turn`):i.callout(`YOUR GUNNER IS SULKING`,`bad`,1.8,`Your ${t} won't fire this coming turn`),n||(this.stage.director.use(this.gunnerShot(d.side,d.unitIndex),{seconds:.8,arc:.15}),l=Math.max(l,2));break}case`TurnSkipped`:{let e=n?0:l;this.later(e,()=>this.skipBeat(d.side,d.unitIndex,n)),n||(l=e+Ty);break}}return this.refreshLooks(),l}skipBeat(e,t,n){let{hud:r,labels:i,sfx:a}=this.stage,o=this.stage.crewHead(e,t),s=this.stage.match().unitOf(e,t).name;i.addFloating(o,`WON’T FIRE…`,`card-pop sulk`,1.8,2.5),a.sulk(this.stage.soundAt(o)),e===`player`?r.callout(`TURN SKIPPED`,`bad`,2,`Your ${s} is the only gunner left, and they're sulking`):r.callout(`THEY SKIP A TURN`,`hit`,2,`${this.stage.opponentName()}'s ${s} is the only gunner left, and they're sulking`),n||this.stage.director.use(this.sulkShot(e,t),{seconds:.9,arc:.15})}playTurnStart(e){let t=.6;for(let n of e){if(n.type===`FireBurned`&&this.later(t,()=>this.burnBeat(n)),n.type===`FireBurned`&&(t+=.9),n.type===`MistCleared`&&this.stage.labels.addFloating(Sy(this.stage.match().frameOf(n.side).position).setY(12),`The mist lifts`,`miss-label`,1.6,2),n.type===`DepressionLifted`){let e=this.stage.crewHead(n.side,n.unitIndex);this.stage.labels.addFloating(e,`CHEERED UP!`,`card-pop`,1.6,2.5),this.refreshLooks()}n.type===`UnitHealed`?(this.later(t,()=>this.healBeat(n.side,n.unitIndex,n.amount,n.hp)),t+=.7):n.type===`UnitCharged`&&(this.later(t,()=>this.chargeBeat(n.side,n.unitIndex)),t+=.7)}return t>.6?t:0}healBeat(e,t,n,r){let{world:i,labels:a,sfx:o}=this.stage,s=this.stage.crewHead(e,t),c=i.ships[e].machine(`healer`);c?.flare();let l=c?c.emitter(new V):s.clone().setY(s.y+3);i.effects.bolt(l,s,`#5fe08a`,.6,.25),i.effects.streak(l,s,`#9dffbf`,.4,.6),i.effects.sparkle(s,`#5fe08a`,1),a.addFloating(s,`+${Av(n)}`,`heal-number`,1.8,3),o.heal(this.stage.soundAt(s)),this.stage.hud.machines.trays[e].pulse(`healer`),this.stage.shown.crew[e][t]=r,this.stage.refreshHud()}burnBeat(e){let{world:t,labels:n,sfx:r,hud:i,config:a}=this.stage,o=this.stage.shown;o.ship[e.side]=e.hp,o.sail[e.side]=e.sailing,i.setShipHp(e.side,e.hp,a.ship.hp),i.setSail(e.side,e.sailing),i.bumpShip(e.side);let s=t.ships[e.side],c=this.fireAt(e.side)??Sy(G(this.stage.match().frameOf(e.side),N(0,a.ship.deckHeight+1,0)));if(t.effects.bigBlast(c,1.2),r.fire(this.stage.soundAt(c)),n.addFloating(c,`−${Av(e.amount)}`,`damage-number ${e.side}`,1.6,3),e.hole){s.root.updateMatrixWorld(!0);let n=s.root.localToWorld(new V(e.hole.x,e.hole.y,0)),r=s.tearSail(e.hole.mast,e.hole.sail,n,new V(0,0,1).applyQuaternion(s.root.quaternion),.9)??n;t.effects.sailTear(r,`#3a2a1e`,.9),t.effects.sparkle(r,`#ff8a3c`,.8)}let l=e.turns>0?`${e.turns} more ${e.turns===1?`turn`:`turns`} to burn`:`and the fire is out`;e.side===`player`?i.callout(`THE FIRE BURNS`,`bad`,1.4,`−${Av(e.amount)} hull${e.hole?`, a sail scorched`:``} · ${l}`):n.addFloating(c.clone().setY(c.y+2),e.turns>0?`BURNING!`:`The fire is out`,`card-pop bad`,1.4,3),e.turns<=0&&(this.fires[e.side]=null),this.stage.refreshHud()}chargeBeat(e,t){let{world:n,labels:r,sfx:i,config:a}=this.stage,o=this.stage.crewHead(e,t),s=n.ships[e].machine(`charger`);s?.flare();let c=s?s.emitter(new V):o.clone().setY(o.y+3);n.effects.bolt(c,o,`#ff4d4d`,.55,.8),n.effects.bolt(c,o,`#ffb0a8`,.3,.4),n.effects.sparkle(o,`#ff4d4d`,.9),r.addFloating(o,`+${Math.round(a.cards.charger.bonus*100)}% DAMAGE`,`card-pop bad`,1.6,2.5),i.redEnergy(this.stage.soundAt(o)),this.stage.hud.machines.trays[e].pulse(`charger`),this.refreshLooks(),this.stage.refreshHud()}shipShot(e){let{config:t}=this.stage,n=this.stage.match().frameOf(e),r=t.ship.deckHeight,i=this.stage.shipScale(),a=Sy(G(n,N(0,r+2,0)));return new qo(Sy(G(n,N(8*i,r+9*i,34*i))),a,48)}gunnerShot(e,t,n=!1){let{config:r}=this.stage,i=this.stage.match().frameOf(e),a=Hn(r,t).x,o=r.ship.deckHeight,s=Sy(G(i,N(a,o+(n?1.2:1.6),r.crew.standZ-+!!n)));return new qo(Sy(G(i,N(a+3,o+(n?7:4.5),r.crew.standZ+(n?10:11)))),s,46)}sulkShot(e,t){let{config:n}=this.stage,r=this.stage.match().frameOf(e),i=Hn(n,t).x,a=n.ship.deckHeight,o=Sy(G(r,N(i,a+1.8,n.crew.standZ)));return new qo(Sy(G(r,N(i+2,a+8,n.crew.standZ+7))),o,46)}machineShot(e,t){let{eye:n,look:r}=this.machineView(e,t);return new qo(n,r,48)}machineView(e,t){let{config:n}=this.stage,r=this.stage.match().frameOf(e),i=n.ship.machines[t],a=n.ship.deckHeight,o=Sy(G(r,N(i.x,a+1.2,i.z))),s=Math.min(a+6,...n.ship.masts.flatMap(e=>e.sails.flatMap(e=>e.corners.map(e=>e.y))));return{eye:Sy(G(r,N(i.x+4,Math.max(a+1.8,Math.min(a+5.5,s-.5)),i.z+10))),look:o}}intercept(e){let{world:t,hud:n,sfx:r}=this.stage,i=Sy(e.point),a=t.ships[e.side].machine(`antiMissile`);a&&(a.aimAt(i),a.flare(),a.setCharge(0));let o=a?a.emitter(new V):i.clone().setY(i.y-10);t.effects.bolt(o,i,`#e7b3ff`,.45,1.2),t.effects.bolt(o,i,`#ffffff`,.25,.6),t.effects.powerBurst(e.point,`#d29bff`,1.1),t.effects.bigBlast(e.point,2.2),r.zap(this.stage.soundAt(i)),this.stage.director.addShake(.4),this.machineFired(e.side,`antiMissile`,`ZAP!`),e.side===`player`?n.callout(`INTERCEPTED!`,`hit`,1.5,`Your anti-missile shot it out of the sky`):n.callout(`ZAPPED!`,`bad`,1.5,`${this.stage.opponentName()}'s anti-missile shot your ball down`)}machineHit(e){let{world:t,labels:n}=this.stage;t.ships[e.side].machine(e.machine)?.shake();let r=Sy(this.stage.match().machinePosition(e.side,e.machine));t.effects.bolt(r,r.clone().add(new V(0,1.5,0)),`#ffd36e`,.25,.8),e.hp>0&&n.addFloating(r,`−${Av(e.amount)}`,`damage-number ${e.side}`,1.3,3);let i=this.stage.hud.machines.trays[e.side],a=i.info(e.machine);a&&e.hp>0&&i.hit(this.machineInfo(e.side,e.machine,{hp:e.hp,recharge:a.recharge}))}machineDestroyed(e){let{world:t,hud:n,sfx:r}=this.stage;t.ships[e.side].setMachine(e.machine,!1),n.machines.trays[e.side].remove(e.machine,`gone`),t.effects.bigBlast(e.point,3.2),t.effects.shipHit(e.point,1.2),t.effects.sparkle(e.point,`#ffb347`,1.3),r.machineDown(this.stage.soundAt(e.point)),this.stage.director.addShake(.7);let i=L_[e.machine].toUpperCase();e.side===`enemy`?n.callout(`${i} DESTROYED!`,`kill`,1.7,`It blew up: −${Av(this.stage.config.cards.machines.blast)} to their hull`):n.callout(`${i} LOST!`,`bad`,1.7,`It blew up: −${Av(this.stage.config.cards.machines.blast)} to your hull`)}steal(e,t,n){let{world:r,sfx:i,director:a,config:o}=this.stage,s={side:e,from:t,kind:n,model:null,start:new V,end:new V,peak:0,t:0,sparkle:0};this.thefts.push(s),a.use(this.machineShot(t,n),{seconds:.7,arc:.15}),this.later(Cy,()=>{if(!this.thefts.includes(s))return;let a=r.ships[t].machine(n)?.root.getWorldPosition(new V)??Sy(this.stage.match().machinePosition(t,n));r.ships[t].setMachine(n,!1);let c=o.ship.machines[n],l=Lf(n,c.height);l.root.position.copy(a),r.scene.add(l.root),s.model=l,s.start.copy(a),s.end.copy(Sy(G(this.stage.match().frameOf(e),N(c.x,o.ship.deckHeight+14,c.z)))),s.peak=Math.max(18,.3*s.start.distanceTo(s.end)),r.effects.powerBurst(a,`#b77bff`,1.2),r.effects.sparkle(a.clone().setY(a.y+1),`#e3c8ff`,1.4),i.pickpocket(this.stage.soundAt(a)),i.whoosh(!0);let u=this.stage.match().state.ships[e].machines[n];u&&this.stage.hud.machines.steal(t,e,this.machineInfo(e,n,u),wy)}),this.later(1.1,()=>{if(!this.thefts.includes(s))return;let{eye:t}=this.machineView(e,n),r=s.start.clone().lerp(s.end,.6);r.y+=4*s.peak*.6*.4*.7,a.use(new qo(t,r,42),{seconds:.5,arc:.05})}),this.later(2.2,()=>{this.thefts.includes(s)&&a.use(this.machineShot(e,n),{seconds:.45,arc:.05})})}updateThefts(e){for(let t of[...this.thefts]){let n=t.model;if(!n)continue;t.t+=e;let r=Math.min(1,t.t/wy),i=r*r*(3-2*r);n.root.position.lerpVectors(t.start,t.end,i),n.root.position.y+=4*t.peak*i*(1-i),n.root.rotation.set(Math.sin(t.t*5)*.35*(1-r),t.t*7*(1-.6*r),Math.cos(t.t*4)*.25*(1-r)),n.root.scale.setScalar(1+1.4*Math.sin(Math.PI*r)),n.update(this.time,e),t.sparkle-=e,t.sparkle<=0&&r<1&&(t.sparkle=.07,this.stage.world.effects.sparkle(n.root.position,`#d4a8ff`,1.1)),r>=1&&this.land(t)}}land(e){this.thefts=this.thefts.filter(t=>t!==e),e.model&&(this.stage.world.scene.remove(e.model.root),e.model.dispose()),this.stage.world.ships[e.side].setMachine(e.kind,!0,!0),this.stage.hud.machines.landed(e.side,e.kind),this.refreshLooks()}arriving(e,t){return this.thefts.some(n=>n.side===e&&n.kind===t)}syncMachines(e){let t=this.stage.match(),n=this.stage.hud.machines;n.setTarget(t.state.phase===`ended`?null:h(t.state.turnSide));for(let r of m){let i=t.state.ships[r],a=Xs.filter(e=>i.machines[e]).map(e=>this.machineInfo(r,e,i.machines[e]));n.trays[r].set(a,e,e=>this.thefts.some(t=>t.kind===e&&(t.side===r||t.from===r)))}}machineFired(e,t,n){let r=this.stage.hud.machines.trays[e],i=r.info(t),a=t===`shield`?this.stage.config.cards.shield.every:this.stage.config.cards.antiMissile.every;r.fired(this.machineInfo(e,t,{hp:i?.hp??1,recharge:Math.max(0,Math.round(a)-1)}),n)}machineInfo(e,t,n){let{config:r}=this.stage,i=this.stage.match(),a=e===`player`,o=a?`your`:`their`,s=a?`their`:`your`,c=a?`they fire`:`you fire`,l=t===`antiMissile`?Math.max(1,Math.round(r.cards.antiMissile.every)):t===`shield`?Math.max(1,Math.round(r.cards.shield.every)):0,u=l>0?Math.min(l,Math.max(0,Math.round(n.recharge))):0,d=e=>`after ${e} more of ${s} shot${e===1?``:`s`}`,f=i.state.ships[e],p=t===`healer`&&!f.crew.some(t=>t.hp>0&&t.hp<i.fullHpOf(e,t.unitIndex)-1e-9),m=Math.max(1e-6,r.cards.machines.hp*r.crew.hp),h=e=>`${Math.round(e*100)}%`,g=`Health ${Av(n.hp)} of ${Av(m)}`,_=`if it's destroyed it blows up for ${Av(r.cards.machines.blast)} hull`,v=`Then it recharges for ${l} shot${l===1?``:`s`}.`,y={antiMissile:{state:u===0?`Armed: it zaps ${s} next hit`:`Recharging: armed ${d(u)}`,body:`Shoots down the first of ${s} balls that would hit ${o} ship, within ${Math.round(r.cards.antiMissile.range)} m of it. ${v}`,foot:`${g} · ${_}`},shield:{state:u===0?`Up: it blocks ${s} next ball`:`Down: up again ${d(u)}`,body:`A dome round ${o} ship that stops the first ball ${c} into it, hit or miss (bullets, meteors and the sky laser too). ${v}`,foot:`${g} · it can only be hit while the dome is down · ${_}`},healer:{state:p?`Waiting: none of ${o} gunners is hurt`:`Heals as ${o} next turn starts`,body:`As ${o} turn starts, it heals one of ${o} hurt gunners by ${h(r.cards.healer.heal)} of their health.`,foot:`${g} · ${_}`},charger:{state:`Charges a gunner as ${o} next turn starts`,body:`As ${o} turn starts, one of ${o} gunners gets red energy: +${h(r.cards.charger.bonus)} damage that turn.`,foot:`${g} · ${_}`}};return{kind:t,name:L_[t],hp:n.hp,maxHp:m,recharge:u,every:l,idle:p,tip:y[t]}}later(e,t){e<=0?t():this.beats.push({at:this.time+e,run:t})}upgradeIcons(e,t){let n=this.stage.match(),r=n.state.ships[e];if(!n.cardsOn||(r.crew[t]?.hp??0)<=0)return[];let i=r.upgrades[t],a=[];return r.laser&&a.push(`laser`),i.rifle&&a.push(`rifle`),i.extraBalls>0&&a.push(`extraBalls`),i.magnet&&a.push(`magnet`),i.accuracy&&a.push(`accuracy`),i.wings&&a.push(`wings`),i.hotShot&&a.push(`hotShot`),r.charged===t&&a.push(`charged`),r.depressed===t&&a.push(`sulking`),a}refreshLooks(){let e=this.stage.match();for(let t of m){let n=e.state.ships[t],r=this.stage.world.ships[t];for(let e of Xs)n.machines[e]&&!this.arriving(t,e)&&r.setMachine(e,!0);let i=n.machines.antiMissile,a=Math.max(1,Math.round(this.stage.config.cards.antiMissile.every));i&&r.machine(`antiMissile`)?.setCharge(Math.round(3*(a-i.recharge)/a));let o=n.machines.shield,s=Math.max(1,Math.round(this.stage.config.cards.shield.every));o&&r.machine(`shield`)?.setCharge(Math.round(3*(s-o.recharge)/s)),r.setDome(this.domesHeld[t]||this.stage.match().shieldUp(t)&&!this.arriving(t,`shield`)),n.upgrades.forEach((e,t)=>{let i=n.crew[t].hp>0;r.setSulking(t,i&&n.depressed===t),r.setRifle(t,i&&e.rifle?`slung`:`none`),r.setGunLook(t,{magnet:i&&e.magnet,accuracy:i&&e.accuracy,extraBalls:i?e.extraBalls:0,wings:i&&e.wings,charged:i&&n.charged===t,hotShot:i&&e.hotShot})})}}aimNote(e){let t=this.stage.match().state.ships.player,n=t.upgrades[e],r=[];return n.extraBalls>0&&r.push(`+${n.extraBalls} ball${n.extraBalls>1?`s`:``}`),n.magnet&&r.push(`magnetic: balls home in on their gunners`),n.accuracy&&r.push(`dead aim: every ball on one spot`),n.wings&&r.push(`winged: you'll steer this ball as it flies`),t.charged===e&&r.push(`red energy: +${Math.round(this.stage.config.cards.charger.bonus*100)}% damage`),n.hotShot&&r.push(`hot shot: it sets their ship on fire`),t.rocked&&r.push(`your ship is rolling: the barrel sways, so time your shot`),r.join(` · `)}ballLooks(e){let{config:t}=this.stage,n=t.cannons[e.cannonId]?.balls??1,r=e.projectiles.filter(e=>e.kind===`ball`&&e.parent===null),i=e.upgrades.accuracy&&r.length>1&&r.every(e=>e.launch.delay===r[0].launch.delay),a=0;return e.projectiles.map((t,o)=>{if(t.kind!==`ball`)return null;let s={};if(t.winged&&(s.winged=!0,s.sparks=`#dff3ff`,t.wingsOff!==void 0&&(s.wingsOff=t.wingsOff)),t.magnetic&&(s.magnetic=!0,s.sparks=Fu),i&&t.parent===null){let[e,n]=Ke(pe(t.launch.velocity)),i=a++/r.length*Math.PI*2;s.spread=new V(e.x*Math.cos(i)+n.x*Math.sin(i),e.y*Math.cos(i)+n.y*Math.sin(i),e.z*Math.cos(i)+n.z*Math.sin(i)).multiplyScalar(.34),s.sparks??=`#ffd36e`}return t.parent===null&&o>=n&&!t.magnetic&&(s.sparks??=`#ffd36e`),e.charge>1&&(s.sparks??=`#ff4d4d`),e.upgrades.hotShot&&(s.sparks??=`#ff7a2a`),Object.keys(s).length>0?s:null})}lockOn(e){let{world:t,labels:n,sfx:r}=this.stage,i=this.stage.crewHead(e.side,e.unitIndex);t.effects.streak(Sy(e.point),i,Fu,.32,.5),t.effects.sparkle(i,Fu,.6),r.magnetLock(this.stage.soundAt(i)),n.addFloating(i,`LOCKED ON!`,`card-pop magnet`,1.2,2)}showGifts(e){for(let t of e)this.gifts.set(t.id,{...t});this.stage.world.gifts.show(e,this.stage.config.powerUps.radius)}isGift(e){return this.gifts.has(e)}takeGift(e){this.taken.add(e),this.stage.world.gifts.collect(e)}giftsLeave(){for(let e of this.gifts.keys())this.taken.add(e);this.stage.world.gifts.departAll()}giftShot(e,t){let{director:n,config:r}=this.stage,i=t.map(e=>Sy(e.anchor)),a=new V;for(let e of i)a.add(e);a.divideScalar(Math.max(1,i.length));let o=Sy(this.stage.match().frameOf(e).position).clone().sub(a).setY(0).normalize().clone().negate().multiplyScalar(.94).setY(-.34).normalize(),s=n.lens(52),c=Wo(i,a,o,s.fov,s.aspect),l=a.clone().addScaledVector(o,-Math.max(40,c*1.05));return l.y=Math.max(l.y,I(l.x,l.z,r.arena)+8),new qo(l,a,52)}update(e,t,n){let{world:r,labels:i,config:a}=this.stage;this.time+=e;for(let t of m){let n=this.stage.match().state.ships[t];this.mists[t].set(n.mist===`up`,Sy(this.stage.match().frameOf(t).position),a.cards.mist.radius),this.mists[t].update(e,this.time)}this.updateThefts(e);let o=this.beats.filter(e=>e.at<=this.time);if(o.length>0){this.beats=this.beats.filter(e=>e.at>this.time);for(let e of o)e.run()}r.gifts.update(e,e=>{let n=this.gifts.get(e);return n?Sy(Gc(a,n,t)):null});let s=new Set(r.gifts.ids);for(let[e,r]of this.gifts){let o=s.has(e)&&!this.taken.has(e)&&n,c=o?Sy(Gc(a,r,t)).setY(r.anchor.y+a.powerUps.radius*2.6+1.2):null;i.setMarker(`gift-${e}`,c,o?xy[r.kind](a):``,`powerup-marker kind-${r.kind}`,!1),s.has(e)||this.gifts.delete(e)}let c=this.stage.match(),l=h(`player`);c.state.ships[l].crew.forEach((e,t)=>{let r=n?this.upgradeIcons(l,t):[],a=r.length>0?this.stage.crewHead(l,t).add(new V(0,1.4,0)):null;i.setIconMarker(`enemy-up-${t}`,a,r.map(e=>xh[e]),`upgrade-marker`)})}reset(){for(let e of this.gifts.keys())this.stage.labels.setMarker(`gift-${e}`,null);this.gifts.clear(),this.taken.clear(),this.beats=[];for(let e of this.thefts)e.model&&(this.stage.world.scene.remove(e.model.root),e.model.dispose());this.thefts=[];for(let e of m)this.mists[e].clear();this.fires.player=this.fires.enemy=null,this.domesHeld.player=this.domesHeld.enemy=!1;for(let e of m)for(let t of Xs)this.stage.world.ships[e].setMachine(t,!1);this.stage.hud.machines.clear(),this.stage.world.gifts.clear();for(let e of m)this.hookShip(e);this.refreshLooks()}anyUpgrades(e){let t=this.stage.match().state.ships[e];return t.laser||t.upgrades.some(cc)}},Dy=1.2,Oy=class{shot;time=0;events;next=0;group={position:new V,velocity:new V,points:[]};roots=[];chain=[];constructor(e,t){this.shot=e,this.events=t,this.lineUp()}extend(e,t){this.shot=e,t.length>0&&(this.events=[...this.events,...t]),this.lineUp()}lineUp(){this.roots=this.shot.projectiles.flatMap((e,t)=>e.parent===null&&Ay(e.kind)?[t]:[]),this.chain=this.chainFrom(this.leadRoot())}advance(e){this.time+=e;let t=[];for(;this.next<this.events.length&&this.events[this.next].time<=this.time;)t.push(this.events[this.next++]);return t}skipToEnd(){this.time=Math.max(this.time,this.shot.duration);let e=this.events.slice(this.next);return this.next=this.events.length,e}get finished(){return this.time>=this.shot.duration&&this.next>=this.events.length}get isCluster(){return this.roots.length>1&&this.roots.every(e=>this.shot.projectiles[e].launch.delay===0)}get hasMeteors(){return this.shot.projectiles.some(e=>e.kind===`meteor`)}get leadIndex(){return this.chain[this.chain.length-1]}get lastIndex(){let e=this.shot.projectiles,t=this.leadIndex;return e.forEach((n,r)=>{Ay(n.kind)&&!n.split&&n.impactTime>e[t].impactTime&&(t=r)}),t}landings(){return this.shot.projectiles.flatMap(e=>Ay(e.kind)&&!e.split&&e.flight.hit?[ky(e.flight.hit.point)]:[])}followTarget(){let{position:e,velocity:t,points:n}=this.group;n.length=0,t.set(0,0,0);let r=0;for(let e of this.shot.projectiles)if(!(!Ay(e.kind)||this.time<e.launch.delay)){if(this.time<e.impactTime){let i=this.time-e.launch.delay;n.push(ky($o(e.flight,i)));let a=es(e.flight,i);t.x+=a.x,t.y+=a.y,t.z+=a.z,r++}else!e.split&&e.flight.hit&&this.time<e.impactTime+Dy&&n.push(ky(e.flight.hit.point))}return r===0?null:(t.divideScalar(r),e.copy(jy(n)),this.group)}passedBy(e){let t=0,n=[];for(let r of this.shot.projectiles){if(!Ay(r.kind))continue;if(r.flight.hit&&r.flight.hit.surface!==`water`)return null;let i=0,a=1/0;r.flight.points.forEach((t,n)=>{let r=Math.hypot(t.x-e.x,t.z-e.z);r<a&&(a=r,i=n)}),t=Math.max(t,r.launch.delay+Math.min(i*r.flight.dt,r.flight.duration)),n.push(ky(r.flight.points[i]))}for(let e of this.events)(e.type!==`ProjectileImpact`||!Ay(this.shot.projectiles[e.projectile].kind)||e.hit&&e.hit.surface!==`water`)&&(t=Math.max(t,e.time));return n.length>0?{time:t,points:n}:null}leadRoot(){if(!this.isCluster)return this.roots[0]??0;let e=this.roots[0],t=1/0;for(let n of this.roots){let r=this.chainFrom(n),i=this.shot.projectiles[r[r.length-1]].impactTime;i<t&&(t=i,e=n)}return e}chainFrom(e){let t=[e];for(;;){let e=t[t.length-1],n=this.shot.projectiles.findIndex(t=>t.parent===e);if(n<0)return t;t.push(n)}}},ky=e=>new V(e.x,e.y,e.z),Ay=e=>e===`ball`||e===`bullet`;function jy(e){let t=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0);for(let r of e)t.min(r),n.max(r);return t.add(n).multiplyScalar(.5)}function My(e,t,n,r,i){let{pull:a,swivelDegPerPixel:o,raiseDegPerPixel:s}=i.presentation.sling,c=Ee((e===`aimPull`||e===`fullPower`?Math.hypot(t,n):n)/Math.max(1,a*r),0,1);return{share:c,yaw:e===`aimPull`?0:M(o)*t,raise:e===`fullPower`?M(s)*n:0,cancel:c<i.power.cancelBelow}}var Ny=N(0,0,0);function Py(e,t,n,r,i,a){let o=e.cannonOf(t,n),{origin:s,direction:c}=e.muzzle(t,n,{yaw:r,pitch:i}),l=e.config.physics.gravity,u=T(Fy(o.minSpeed,i,s.y,l),Fy(o.maxSpeed,i,s.y,l),Ee(a,0,1)),d=Math.hypot(c.x,c.z)||1,f=N(s.x+c.x/d*u,0,s.z+c.z/d*u),p=Ts(e,t,n,f,i,Ny);return p?{point:f,aim:p.aim,power:Ee(p.power,0,1),range:u}:{point:f,aim:{yaw:r,pitch:i},power:a,range:u}}function Fy(e,t,n,r){let i=e*Math.sin(t),a=(i+Math.sqrt(i*i+2*r*Math.max(0,n)))/r;return e*Math.cos(t)*a}var Iy={finisherAt:null,hits:0,damage:0,collapses:!1,trees:[]},Ly=.42,Ry=.36,zy=5,By=[`DIRECT HIT!`,`DOUBLE HIT!`,`TRIPLE HIT!`],Vy=.5,Hy=4,Uy=.9,Wy=4,Gy=.35,Ky=.6,qy=7,Jy=4,Yy=.3,Xy=.2,Zy=.6,Qy=.9,$y=.3,eb=.08,tb=40,nb=.55,rb=.6,ib=.25,ab=70,ob=-.35,sb=class{settings;config;world;input;hud;labels;sfx;build;director;intro;flavour=new sl(Math.random()*2**32>>>0);match;brain;opponent;phase={kind:`menu`};reward=null;profile;recordMatch;onMatchStart;shown;holes={player:[],enemy:[]};matchStartTime=0;clock=0;turnStart=0;gameTime=0;hitStop=0;lastWindTurn=-1;aimRig=null;pendingIndicator=null;steerCentre=null;debugFullArc=!1;matchClock=0;shotClock=0;shownPowerUp=null;extraTurn=null;tmp=new V;pathMark={point:new V,normal:new V};cards;turnEvents=[];paused=!1;crunchedAt=-1;constructor(e){this.config=e.config,this.world=e.world,this.input=e.input,this.hud=e.hud,this.labels=e.labels,this.settings=e.settings,this.sfx=e.sfx,this.build=e.build,this.profile=e.profile,this.recordMatch=e.recordMatch,this.onMatchStart=e.onMatchStart??(()=>{}),this.director=new uo(e.world.camera,()=>this.config.presentation.portraitFovDeg),this.intro=new qv(document.body);let t=this;this.cards=new Ey({config:this.config,world:this.world,hud:this.hud,labels:this.labels,sfx:this.sfx,director:this.director,match:()=>this.match,opponentName:()=>this.opponent.name,soundAt:e=>this.soundAt(e),crewHead:(e,t)=>this.crewHead(e,t),get shown(){return t.shown},holes:this.holes,refreshHud:()=>this.refreshHud(),shipScale:()=>this.shipScale})}get currentMatch(){return this.match}get currentOpponent(){return this.opponent}get inMenu(){return this.phase.kind===`menu`}get matchDecided(){return this.phase.kind===`menu`||this.reward!==null}showMenu(){this.intro.cancel(),this.resetScene(Math.random()*2**32>>>0),this.reward=null,this.hud.setMode(`menu`),this.hud.setTurn(null),this.hud.hideBanner(),this.hud.setHint(``),this.world.setWind(Math.PI*.8,6),this.sfx.setWind(.2);let{orbitRadius:e}=this.config.arena,t=Math.atan2(Ym.z,Ym.x)+ob,n=e+ab*this.shipScale,r={x:Math.cos(t)*n,z:Math.sin(t)*n,yaw:Math.atan2(Math.cos(t),Math.sin(t))};this.world.ships.player.setShowcase(r),this.world.ships.enemy.root.visible=!1,this.world.setZoneMarkersVisible(!1);let i=this.config.ship.hull.flatMap(e=>[e.center.x-e.halfSize.x,e.center.x+e.halfSize.x]),a={centerX:(Math.min(...i)+Math.max(...i))/2,length:Math.max(...i)-Math.min(...i)};this.director.use(new Yo(r,this.config.ship.deckHeight,a,e=>this.director.lens(e)),{seconds:0}),this.phase={kind:`menu`}}showLineup(){if(this.phase.kind!==`menu`)return;let e=this.world.ships.player;e.setCrew(Rn(this.config,this.profile().lineup)),this.match.state.ships.player.crew.forEach((t,n)=>e.setCrewAlive(n,!0,!1))}leaveMatch(){if(this.phase.kind===`menu`)return null;let e=this.reward===null?this.recordMatch(!1):null;return this.showMenu(),e}newMatch(e={}){let t=e.seed??Math.random()*2**32>>>0,n=e.newOpponent||!this.opponent,r=this.profile();n&&(this.opponent=Rv(new sl(t^1374496523),r.trophies),this.hud.setAvatar(`enemy`,Y(Bv(this.opponent.badge),`badge`))),this.hud.setNames(r.name,this.opponent.name),this.hud.setAvatar(`player`,Y(Bv(iy(r)),`badge`)),this.resetScene(t),this.reward=null,this.matchStartTime=performance.now()/1e3,this.match.start(),this.applyWind(),this.hud.setMode(`hidden`),this.hud.setTurn(null),this.hud.hideBanner(),this.director.use(new Jo(230,75,Math.PI*.3,.06,45)),this.phase={kind:`intro`},this.onMatchStart(),this.intro.play({player:{name:r.name,badge:iy(r),trophies:r.trophies},opponent:this.opponent,firstSide:this.match.state.turnSide,onDone:()=>this.beginTurn(this.match.state.turnSide),onBeat:e=>{e===`found`?this.sfx.matchFound():e===`coin`?this.sfx.coin():this.sfx.turn(this.match.state.turnSide===`player`)}})}resetScene(e){this.extraTurn=null;for(let e of m)this.world.ships[e].setShowcase(null),this.world.ships[e].root.visible=!0;this.world.setZoneMarkersVisible(!0),this.sfx.chargeStop(),this.sfx.stopWhistle(),this.input.releaseAll(),this.input.setAimMode(!1),this.aimRig=null,this.pendingIndicator=null,this.world.indicator.hide(),this.hud.setPower(null),this.hud.setPull(null),this.hud.scope.hide(),this.hud.tablet.hide(),this.hud.steer.hide(),this.setNear(Yy);for(let e of m)this.world.ships[e].onCrewSplash=e=>{this.world.effects.splash(e,.55),this.sfx.splash(.5,this.soundAt(e))},this.world.ships[e].onPirateHome=(e,t)=>{let n=this.soundAt(e);t===`surface`?(this.world.effects.splash(e,.3),this.sfx.splash(.2,n)):t===`aboard`?this.sfx.thump({...n,volume:n.volume*.35}):this.sfx.pirateHome(n)},this.world.ships[e].onReloaded=e=>this.sfx.reload(this.soundAt(e)),this.world.rubble.onLand=e=>{e.kind===`palm`?this.world.effects.treeLand(e.point,e.size,e.water):this.world.effects.rockLand(e.point,e.size,e.water),e.water?this.sfx.splash(Math.min(2,e.size/6),this.soundAt(e.point)):e.kind===`palm`?this.sfx.woodHit(this.soundAt(e.point)):this.sfx.rockHit(this.soundAt(e.point)),this.phase.kind!==`aim`&&this.director.addShake(Math.min(.5,e.size/(e.kind===`palm`?60:30)))},this.world.ships[e].onDebrisSplash=(e,t)=>{this.world.effects.splash(e,t),this.sfx.splash(t,this.soundAt(e))};this.match=new _l(this.config,e,{player:Rn(this.config,this.profile().lineup),enemy:zn(this.config,new sl((e^2135587861)>>>0))});for(let e of m)this.world.ships[e].setCrew(this.match.state.ships[e].crew.map(e=>e.unit));this.brain=new Gl(`enemy`,e^2654435769),this.world.reset(),this.world.effects.clear(),this.world.powerUps.clear(),this.cards.reset(),this.shownPowerUp=null,this.matchClock=0,this.hitStop=0,this.lastWindTurn=-1,this.labels.clearFloating(),this.hud.hideResult(),this.hud.draft.hide();for(let e of m)this.match.state.ships[e].crew.forEach((t,n)=>{this.world.ships[e].setCrewAlive(n,!0,!1),this.world.ships[e].setTremble(n,0)});this.showAllCrew(),this.shown={ship:{player:this.config.ship.hp,enemy:this.config.ship.hp},crew:{player:this.match.state.ships.player.crew.map((e,t)=>this.match.fullHpOf(`player`,t)),enemy:this.match.state.ships.enemy.crew.map((e,t)=>this.match.fullHpOf(`enemy`,t))},sail:{player:1,enemy:1}};for(let e of m)this.holes[e].length=0;this.hud.resetShipStatus(),this.syncShips(),this.refreshHud()}setPaused(e){e!==this.paused&&(this.paused=e,this.input.enabled=!e,e&&this.sfx.stopWhistle())}update(e,t){this.paused&&(e=0);let n=t-this.clock,r=this.clock>0&&n>0&&n<.5?n:e;this.clock=t;let i=this.input.consumeEvents(),a=this.gameStep(e),o=this.phase.kind===`flight`&&this.phase.released?Hy:1,s=e>0?a/e*r*o:0;switch(this.matchClock+=this.phase.kind===`flight`?s:a,this.phase.kind){case`menu`:break;case`intro`:i.some(e=>e.type===`tap`||e.type===`fireDown`)&&this.intro.skip();break;case`powerUpEntrance`:this.updatePowerUpEntrance(this.phase,e);break;case`draft`:this.updateDraft(i);break;case`botDraft`:this.updateBotDraft(this.phase,e,i);break;case`cardEffect`:this.updateCardEffect(this.phase,e,i);break;case`move`:this.updateMove(e,i);break;case`aim`:this.updateAim(this.phase,e,i);break;case`scope`:this.updateScope(this.phase,e,i);break;case`tablet`:this.updateTablet(this.phase,e);break;case`bot`:i.some(e=>e.type===`tap`||e.type===`fireDown`)&&this.clock-this.turnStart>=Ky?this.skipBotTurn(this.phase):this.updateBot(this.phase,e);break;case`flight`:this.updateFlight(this.phase,s,i);break;case`resolve`:this.updateResolve(this.phase,a,i);break;case`finale`:this.updateFinale(this.phase,e,i)}if(this.syncShips(),this.updatePowerUp(e),this.cards.update(e,this.matchClock,![`menu`,`intro`,`result`,`finale`,`scope`].includes(this.phase.kind)),this.phase.kind!==`menu`&&(this.updateMarkers(),this.updateWindDial()),this.world.effects.setDamageSources([...m.map(e=>({position:this.world.ships[e].root.position.clone().setY(this.config.ship.deckHeight+1),damage:1-this.shown.ship[e]/this.config.ship.hp})),...m.flatMap(e=>{let t=this.cards.fireAt(e);return t?[{position:t,damage:0,fire:!0}]:[]})]),this.world.update(a,this.gameTime),this.director.update(e),this.world.vignette.update(e),this.pendingIndicator){let{unit:e,power:t,charge:n,dt:r,landing:i}=this.pendingIndicator;this.pendingIndicator=null,this.phase.kind===`aim`&&this.updateIndicator(e,t,n,r,i)}this.labels.update(e,this.world.viewportWidth,this.world.viewportHeight),this.world.render()}gameStep(e){let t=1;if(this.hitStop>0)this.hitStop-=e,t=0;else if(this.phase.kind===`flight`&&this.phase.playback.shot.weapon===`rifle`&&!this.phase.skip&&!this.phase.released&&this.phase.playback.time<Math.min(this.phase.playback.shot.duration,Zy)+.12)t=Xy;else if(this.phase.kind===`flight`&&this.phase.outcome.finisherAt!==null&&!this.phase.skip){let e=this.config.presentation,n=this.phase.playback.time,r=this.phase.outcome.finisherAt;n>=r-e.finisherSlowMoTime&&n<r+ib&&(t=e.finisherSlowMo)}let n=e*t;return this.gameTime+=n,n}beginTurn(e){this.showAllCrew(),this.input.releaseAll(),this.input.setAimMode(!1),this.cards.giftsLeave(),this.cards.refreshLooks(),this.cards.syncMachines(!0);for(let e of m)this.shown.sail[e]=Fs(this.config,this.match.state.ships[e]);this.refreshHud(),this.hud.setMode(`watch`),this.hud.hideShipStatus();let t=this.extraTurn===e;this.extraTurn=null;let n=t?e===`player`?`Extra turn!`:`${this.opponent.name} goes again`:e===`player`?`Your turn`:`${this.opponent.name}'s turn`;this.hud.setTurn(e,n),t?this.sfx.extraTurn():this.match.state.turn>1&&this.sfx.turn(e===`player`),this.applyWind();let r=this.match.state.powerUp&&this.match.state.powerUp.id!==this.shownPowerUp?.id?this.match.state.powerUp:null;if(r){this.shownPowerUp={...r},this.showPowerUp(r),this.sfx.powerUpSpawn(),this.hud.showBanner(`Power-up!`,pb[r.kind](this.config,r.uses),db),this.director.use(this.powerUpShot(e,r),{seconds:1,arc:.2}),this.phase={kind:`powerUpEntrance`,side:e,label:n,time:0};return}this.startTurn(e,n)}updatePowerUpEntrance(e,t){e.time+=t,!(e.time<db)&&this.startTurn(e.side,e.label)}startTurn(e,t){this.turnStart=this.clock,this.cards.playTurnStart(this.turnEvents),this.turnEvents=[];let n=this.match.state.offer;if(n&&n.side===e)return e===`player`?this.enterDraft(t):(this.hud.showBanner(t,cb(this.match.state.wind.speed),this.config.presentation.bannerTime),this.director.use(this.establishingShot(),{seconds:1.4,arc:.3}),this.piratesHome(`enemy`),this.enterBotDraft());this.hud.showBanner(t,cb(this.match.state.wind.speed),this.config.presentation.bannerTime),e===`player`?(this.director.use(this.shipRig(`player`),{seconds:1.3,arc:.3}),this.hud.showShipStatus(this.shipStatus(`player`),!0),this.enterMove(!1)):(this.director.use(this.establishingShot(),{seconds:1.4,arc:.3}),this.piratesHome(`enemy`),this.enterBot())}piratesHome(e){let t=co();this.director.currentRig?.update(0,t),this.world.ships[e].piratesReturn(t.position),this.world.ships[e].reloadGuns()}enterDraft(e=`Your turn`){let t=this.match.state.offer;this.input.releaseAll(),this.input.setAimMode(!1),this.hud.setMode(`draft`),this.hud.hideBanner(),this.hud.setHint(``),this.director.use(this.shipRig(`player`),{seconds:1.3,arc:.3}),this.hud.showShipStatus(this.shipStatus(`player`),!0);let n=`${cb(this.match.state.wind.speed)} · pick an upgrade`;this.hud.draft.show(this.cards.draftCards(t.side,t.cards),e,n,e=>this.pickCard(e),.1),this.sfx.cardDeal(t.cards.length,.1),this.phase={kind:`draft`}}updateDraft(e){for(let t of e)t.type===`select`&&this.hud.draft.choose(t.index)}pickCard(e,t){if(this.phase.kind!==`draft`)return;let n=this.match.state.offer?.cards[e];if(!n)return;if(n.kind===`sacrifice`&&t===void 0)return this.askSacrifice(e);let r=this.cards.cardTarget(`player`,t===void 0?n:{...n,unit:t}),i=this.match.pickCard(e,this.matchClock,t===void 0?void 0:{unit:t});this.hud.draft.fly(e,r);let a=this.cards.playPick(`player`,i);this.refreshCrew(),this.hud.showShipStatus(this.shipStatus(`player`),n.kind===`repair`||n.kind===`sacrifice`),this.phase={kind:`cardEffect`,side:`player`,time:0,hold:a}}askSacrifice(e){let t=this.match.livingGunners(`player`),n=t.map(e=>({icon:Ev[this.match.cannonIdOf(`player`,e)]??Ev.heavy,name:this.match.unitOf(`player`,e).name,health:this.shown.crew.player[e]/this.match.fullHpOf(`player`,e),note:this.cards.upgradeIcons(`player`,e).length>0?`Upgrades go with them`:``}));this.hud.draft.ask(`Who goes?`,`They go overboard, and you take another whole turn`,n,n=>this.pickCard(e,t[n])),this.sfx.click()}enterBotDraft(){let e=this.match.state.offer,{index:t,unit:n}=this.brain.cardChoice(this.match),r=n===void 0?e.cards[t]:{...e.cards[t],unit:n};this.hud.setMode(`watch`),this.hud.setHint(this.input.coarsePointer?`Tap to skip`:`Click to skip`),this.hud.setTurn(`enemy`,`${this.opponent.name} is picking…`);let i=this.cards.draftCards(e.side,e.cards);this.hud.draft.showOpponent(this.opponent.name,i,t,()=>this.cards.cardTarget(`enemy`,r),()=>this.botPicked(!1)),this.sfx.cardDeal(e.cards.length),this.phase={kind:`botDraft`,time:0,chosen:t,unit:n}}updateBotDraft(e,t,n){e.time+=t,n.some(e=>e.type===`tap`)&&this.clock-this.turnStart>=Ky&&this.botPicked(!0)}botPicked(e){if(this.phase.kind!==`botDraft`)return;let{chosen:t,unit:n}=this.phase;e&&this.hud.draft.hide();let r=this.match.pickCard(t,this.matchClock,n===void 0?void 0:{unit:n});this.hud.setTurn(`enemy`,`${this.opponent.name}'s turn`);let i=this.cards.playPick(`enemy`,r,e);if(e)return this.skipToBotShot();this.phase={kind:`cardEffect`,side:`enemy`,time:0,hold:i}}skipToBotShot(){if(this.match.state.phase===`resolving`)return this.handle(this.match.endTurn(this.matchClock));this.enterBot(),this.phase.kind===`bot`&&this.skipBotTurn(this.phase)}updateCardEffect(e,t,n){if(e.time+=t,e.side===`enemy`&&n.some(e=>e.type===`tap`)&&this.clock-this.turnStart>=Ky)return this.director.use(this.establishingShot(),{seconds:.6}),this.skipToBotShot();if(!(e.time<e.hold)){if(this.match.state.phase===`resolving`)return this.handle(this.match.endTurn(this.matchClock));if(e.side===`player`)return this.enterMove(!0);this.director.use(this.establishingShot(),{seconds:1,arc:.2}),this.enterBot()}}enterMove(e=!0){this.hud.scope.hide(),this.setNear(Yy),this.cards.refreshLooks(),this.showAllCrew(),this.input.releaseAll(),this.input.setAimMode(!1),this.world.indicator.hide(),this.world.indicator.setLastImpactVisible(!1),this.hud.setMode(`move`),this.hud.setPower(null),this.hud.showShipStatus(this.shipStatus(`player`),!1);let t=this.match.state.ships.player.crew.length;this.hud.setHint(this.input.coarsePointer?`Hold ◀ ▶ to sail · tap a gunner to aim`:`A/D or ◀ ▶ to sail · 1–${t} to pick a gunner`),e&&this.director.use(this.shipRig(`player`),{seconds:this.config.presentation.cameraBlendTime*.7}),this.piratesHome(`player`),this.phase={kind:`move`},this.refreshHud()}updateMove(e,t){let n=this.input.moveAxis();n!==0&&this.handle(this.match.sail(n,e)),this.hud.setFuel(this.match.state.ships.player.fuel/this.config.ship.fuelPerTurn);for(let e of t)e.type===`select`&&this.clock-this.turnStart>=Gy&&this.trySelect(e.index)}trySelect(e){if(!this.match.isAlive(`player`,e))return;if(this.match.isDepressed(`player`,e)){this.hud.toast(`Your ${this.match.unitOf(`player`,e).name} is sulking: they won't fire this turn`),this.sfx.cancel();return}this.sfx.select(),this.handle(this.match.selectGunner(e));let t=this.match.weaponOf(`player`,e);t===`laser`?this.enterTablet():t===`rifle`?this.enterScope():this.enterAim()}enterAim(){this.hud.scope.hide(),this.setNear(Yy),this.cards.refreshLooks(),this.input.releaseAll();let{firing:e}=this.settings,t=this.slingStyle();this.applyFiring(e,t),this.hud.setMode(`aim`),this.hud.hideBanner(),this.hud.setPower(null,this.config.power.cancelBelow),this.hud.setPull(null),this.hud.setAimLimits(this.config.aim.pitchMinDeg,this.config.aim.pitchMaxDeg),this.world.indicator.setLastImpactVisible(this.settings.lastShotFlag);let n=this.match.state.selected;this.world.ships.player.settleList(),this.match.state.ships.player.crew.forEach((e,t)=>this.world.ships.player.setCrewVisible(t,t!==n)),this.world.ships.player.setRiggingVisible(!1),this.aimRig=new Ho(this.config,this.world.ships.player,()=>this.match.state.ships.player.angle,n,()=>this.waveAim(n),()=>this.world.camera.aspect,()=>this.settings.aimCamera),this.director.use(this.aimRig,{seconds:this.config.presentation.cameraBlendTime*.7}),this.director.stopShake(),this.phase={kind:`aim`,charging:!1,chargeStart:0,firing:e,sling:t,pull:null,tilt:null},this.refreshHud()}slingStyle(){return this.settings.firing===`sling`?this.settings.slingStyle:null}applyFiring(e,t){this.input.setAimMode(!0,t?{pouch:t===`aimPull`?()=>this.hud.pouchZone():null}:null),this.hud.setFiring(e,t),this.hud.setHint(this.aimHint()),t===`tilt`?this.input.tilt.start():this.input.tilt.stop()}aimHint(){let e=this.slingStyle(),[t,n,r]=this.settings.firing===`tap`?[`press FIRE to shoot`,`click or Space to shoot`,`Space to shoot`]:[`hold FIRE to charge`,`hold click or Space to charge`,`hold Space to charge`],i=e?fb[e][+!this.input.coarsePointer]:this.input.coarsePointer?`Drag to aim · ${t}`:this.input.pointerLocked?`Mouse to aim · ${n}`:`Click the view, then move the mouse to aim · ${r}`,a=this.cards.aimNote(this.match.state.selected);return a?`${a[0].toUpperCase()}${a.slice(1)} · ${i}`:i}updateAim(e,t,n){let r=this.match.state.selected,i=this.config.presentation,{dx:a,dy:o}=this.input.consumeAimDelta(),s=e.pull?0:+!!this.input.isHeld(`left`)-!!this.input.isHeld(`right`),c=e.pull&&e.sling===`fullPower`?0:+!!this.input.isHeld(`up`)-!!this.input.isHeld(`down`);if(a!==0||o!==0||s!==0||c!==0){let e=this.match.aimOf(`player`,r),n=M(i.aimDegPerPixel),l=M(i.keyboardAimDegPerSecond)*t;this.match.setAim({yaw:e.yaw-a*n+s*l,pitch:e.pitch-o*n+c*l})}if(e.sling===`tilt`){let t=this.input.tilt.elevation;if(t!==null&&e.tilt!==null){let n=this.match.aimOf(`player`,r);this.match.setAim({yaw:n.yaw,pitch:n.pitch+M((t-e.tilt)*i.sling.tiltGain)})}e.tilt=t}for(let t of n){let n=e.charging||e.pull!==null;if(t.type===`back`&&!n)return this.enterMove();if(t.type===`select`&&!n&&t.index!==r&&this.match.isAlive(`player`,t.index))return this.trySelect(t.index);if(t.type===`angle`){let{pitchMinDeg:e,pitchMaxDeg:n}=this.config.aim;this.match.setAim({yaw:this.match.aimOf(`player`,r).yaw,pitch:M(T(e,n,t.share))})}if(t.type===`pullStart`&&e.sling&&!n&&(e.pull={...this.match.aimOf(`player`,r)},this.sfx.chargeStart()),t.type===`pullCancel`&&e.pull&&this.dropPull(e,r),t.type===`pullEnd`&&e.pull){let n=this.aimPull(e,r,t.dx,t.dy);if(!n.cancel)return this.fire({power:n.power});this.dropPull(e,r)}if(t.type===`fireDown`&&!n){if(e.firing===`tap`)return this.fire({power:this.config.power.tapPower});e.charging=!0,e.chargeStart=t.time,this.sfx.chargeStart()}if(t.type===`fireCancel`&&e.charging&&(e.charging=!1,this.sfx.chargeStop(),this.hud.setPower(null)),t.type===`fireUp`&&e.charging){e.charging=!1,this.sfx.chargeStop();let n=Xl(t.time-e.chargeStart,this.config.power);if(n.kind===`cancel`)this.hud.toast(`Too quick: shot cancelled`),this.sfx.cancel(),this.hud.setPower(null);else if(n.kind===`fire`)return this.fire({power:n.power});else return this.misfire()}}let{firing:l}=this.settings,u=this.slingStyle();(l!==e.firing||u!==e.sling)&&!e.charging&&!e.pull&&(e.firing=l,e.sling=u,e.tilt=null,this.applyFiring(l,u));let d=e.sling===`fullPower`?1:e.firing===`tap`?this.config.power.tapPower:this.match.indicatorPower(`player`),f=null,p=!1;if(e.pull){let t=this.input.pull;if(t){let n=this.aimPull(e,r,t.x-t.startX,t.y-t.startY);this.hud.setPull({...t,power:n.tension,label:n.label,cancel:n.cancel}),this.hud.setPower({power:n.power,phase:`filling`}),this.sfx.chargeUpdate(n.tension,!1);let i=Qv(n.tension,this.config);this.director.rumble(i.rumble),this.world.vignette.show(i.vignette),this.world.ships.player.setDrawBack(r,n.tension*this.config.presentation.sling.drawBack),d=n.power,f=n.tension,p=e.sling===`target`&&!n.cancel}}else if(e.charging){let t=nu()-e.chargeStart,n=Yl(t,this.config.power);if(this.hud.setPower(n),this.sfx.chargeUpdate(n.power,n.phase!==`filling`),n.phase===`overcharged`)return this.misfire();let r=Zv(t,this.config);this.director.rumble(r.rumble),this.world.vignette.show(r.vignette),d=n.power,f=n.phase===`filling`?n.power:1}this.world.ships.player.setTremble(r,f??0),f!==null&&this.world.effects.fuse(this.world.ships.player.fuseWorld(r,this.tmp),f,t),this.pendingIndicator={unit:r,power:d,charge:f,dt:t,landing:p}}aimPull(e,t,n,r){let i=e.pull,a=e.sling,o=My(a,n,r,Math.min(this.world.viewportWidth,this.world.viewportHeight),this.config),s=a===`fullPower`?i.pitch+o.raise:this.match.aimOf(`player`,t).pitch,c=this.match.setAim({yaw:i.yaw+o.yaw,pitch:s});if(a===`target`){let e=Py(this.match,`player`,t,c.yaw,c.pitch,o.share);return this.match.setAim(e.aim),{power:e.power,tension:o.share,cancel:o.cancel,label:`${Math.round(e.range)} m`}}return a===`fullPower`?{power:1,tension:o.share,cancel:o.cancel,label:`${Math.round($e(c.pitch))}°`}:{power:o.share,tension:o.share,cancel:o.cancel,label:`${Math.round(o.share*100)}%`}}dropPull(e,t){e.pull=null,this.sfx.chargeStop(),this.hud.setPull(null),this.hud.setPower(null),this.world.ships.player.setDrawBack(t,0)}enterScope(){let e=this.match.state.selected;this.input.releaseAll(),this.input.setAimMode(!0),this.hud.setMode(`scope`),this.hud.hideBanner(),this.hud.setPower(null),this.hud.setHint(``),this.world.indicator.hide(),this.world.indicator.setLastImpactVisible(!1),this.world.ships.player.setRifle(e,`aiming`),this.match.state.ships.player.crew.forEach((t,n)=>this.world.ships.player.setCrewVisible(n,n!==e)),this.world.ships.player.setRiggingVisible(!1);let t=G(this.match.frameOf(`enemy`),N(0,this.config.ship.deckHeight+1.6,0)),n=this.match.rifleAimAt(`player`,e,t),r=()=>this.swayed(n,this.phase.kind===`scope`?this.phase:null),i=new Ko(()=>$(this.match.rifleMuzzle(`player`,e,r()).origin),()=>$(this.match.rifleMuzzle(`player`,e,r()).direction),this.config.presentation.firstPersonFovDeg/qy);this.director.use(i,{seconds:.35}),this.setNear(Jy);let a=this.input.coarsePointer?`Drag to aim · tap FIRE to shoot`:`Mouse to aim · click or Space to shoot`;this.hud.scope.show(this.match.unitOf(`player`,e).name,`${a} · it sways: shoot as the crosshair crosses them`),this.sfx.scope(),this.phase={kind:`scope`,unit:e,aim:n,time:0,rig:i}}setNear(e){let t=this.world.camera;t.near!==e&&(t.near=e,t.updateProjectionMatrix())}swayed(e,t){let n=t?.aim??e,r=t?.time??0,{swayDeg:i,swayTime:a}=this.config.cards.sniper,o=2*Math.PI/Math.max(.3,a),s=M(i)/2,c=M(.04)*(Math.sin(r*37)+Math.sin(r*53+1))*.5,l=this.waveSway();return{yaw:n.yaw+s*Math.sin(o*r)+c+l.yaw,pitch:n.pitch+s*.5*Math.sin(2*o*r)+c*.7+l.pitch}}rolling(e){return this.match.cardsOn&&this.match.state.ships[e].rocked&&this.match.state.turnSide===e}waveSway(){if(!this.rolling(`player`))return{yaw:0,pitch:0};let{swayDeg:e,swayTime:t}=this.config.cards.rogueWave,n=2*Math.PI/Math.max(.5,t),r=M(e)/2,i=this.matchClock;return{yaw:r*Math.sin(n*i),pitch:r*.5*Math.sin(2*n*i)}}waveAim(e){let t=this.match.aimOf(`player`,e),n=this.waveSway();return{yaw:t.yaw+n.yaw,pitch:t.pitch+n.pitch}}updateScope(e,t,n){e.time+=t;let r=this.config.presentation,i=1/qy,{dx:a,dy:o}=this.input.consumeAimDelta(),s=+!!this.input.isHeld(`left`)-!!this.input.isHeld(`right`),c=+!!this.input.isHeld(`up`)-!!this.input.isHeld(`down`),l=M(r.aimDegPerPixel)*i,u=M(r.keyboardAimDegPerSecond)*i*t;e.aim={yaw:Math.max(-M(this.config.aim.yawLimitDeg),Math.min(M(this.config.aim.yawLimitDeg),e.aim.yaw-a*l+s*u)),pitch:Math.max(M(this.config.aim.pitchMinDeg),Math.min(M(this.config.aim.pitchMaxDeg),e.aim.pitch-o*l+c*u))};for(let t of n){if(t.type===`back`)return this.enterMove();if(t.type===`select`&&t.index!==e.unit&&this.match.isAlive(`player`,t.index))return this.trySelect(t.index);if(t.type===`fireDown`)return this.shootRifle(e)}}shootRifle(e){let t=this.swayed(e.aim,e);e.rig.fired(),this.hud.scope.fired(),this.input.releaseAll(),this.input.setAimMode(!1),this.hud.setMode(`watch`),this.hud.hideShipStatus(),this.shotClock=this.matchClock;let n=this.match.fire({rifle:t,clock:this.matchClock});window.setTimeout(()=>{this.hud.scope.hide(),this.setNear(Yy)},160),this.handle(n)}enterTablet(){let e=this.match.state.selected;this.input.releaseAll(),this.input.setAimMode(!1),this.hud.setMode(`tablet`),this.hud.hideBanner(),this.hud.setHint(``),this.hud.scope.hide(),this.world.indicator.hide(),this.world.indicator.setLastImpactVisible(!1),this.world.ships.player.setTablet(e,!0);let t=this.match.frameOf(`enemy`),n=$(t.position).setY(this.config.ship.deckHeight),r=46*this.shipScale,i=this.world.camera.aspect<1?t.forward:t.starboard,a=n.clone().add($(i).multiplyScalar(r*.18)).setY(r);this.director.use(new qo(a,n,tb),{seconds:.6,arc:.1}),this.hud.tablet.onCancel=()=>{this.hud.tablet.hide(),this.world.ships.player.setTablet(e,!1),this.enterMove()},this.hud.tablet.show((e,t)=>this.tabletReadout(e,t),(e,t)=>this.lockLaser(e,t)),this.sfx.beep(),this.phase={kind:`tablet`,unit:e,lockAt:null,time:0,eye:a,look:n}}tabletPoint(e,t){if(this.phase.kind!==`tablet`)return null;let n=this.director.lens(tb),r=new Be(n.fov,n.aspect,1,1e3);r.position.copy(this.phase.eye),r.lookAt(this.phase.look),r.updateMatrixWorld();let i=new yt(e/this.world.viewportWidth*2-1,-(t/this.world.viewportHeight)*2+1),a=new b;a.setFromCamera(i,r);let o=new En(new V(0,1,0),-(this.config.ship.deckHeight+1));return a.ray.intersectPlane(o,new V)}tabletReadout(e,t){let n=this.tabletPoint(e,t);if(!n)return``;let r=this.match.laserPoint(`player`,n.x,n.z),i=xo(this.match.frameOf(`enemy`),N(r.x,0,r.z)),{crew:a,ship:o}=this.config,s=this.match.livingGunners(`enemy`).find(e=>Math.hypot(i.x-Hn(this.config,e).x,i.z-a.standZ)<this.config.cards.laser.radius),c=o.hull.some(e=>Math.abs(i.x-e.center.x)<=e.halfSize.x&&Math.abs(i.z-e.center.z)<=e.halfSize.z);return`${s===void 0?c?`DECK`:`OPEN SEA`:`GUNNER: ${this.match.unitOf(`enemy`,s).name.toUpperCase()}`} · ${i.x.toFixed(1)}, ${i.z.toFixed(1)}`}lockLaser(e,t){if(this.phase.kind!==`tablet`)return;let n=this.tabletPoint(e,t);n&&(this.phase.lockAt=n,this.phase.time=0,this.sfx.beep(!0))}updateTablet(e,t){e.time+=t,!(!e.lockAt||e.time<nb)&&(this.hud.tablet.hide(),this.hud.setMode(`watch`),this.hud.hideShipStatus(),this.shotClock=this.matchClock,this.handle(this.match.fire({laser:{x:e.lockAt.x,z:e.lockAt.z},clock:this.matchClock})))}misfire(){this.sfx.chargeStop(),this.hud.toast(`Misfire! Held too long`),this.fire({misfire:!0})}updateIndicator(e,t,n,r,i){let a=this.waveAim(e),o=this.match.cannonOf(`player`,e),s=this.config.presentation,c=this.debugFullArc?`full`:this.settings.aimPath?`path`:this.settings.indicator,l=Math.max(t,this.config.power.cancelBelow),u=this.phase.kind===`aim`&&(this.phase.sling||this.phase.firing===`tap`)?l:1,d=Math.max(1,ko(o,u)),f=s.aimDotsLength*d/Math.max(1,o.maxSpeed),p=this.intoTheMist(c===`dots`?this.match.predict(`player`,e,a,u,void 0,(f+5)/d+.1):c===`path`?this.match.intoTheDome(`player`,this.match.predict(`player`,e,a,l,Xo)):this.match.predict(`player`,e,a,l));this.world.indicator.update(r,{flight:p,style:c,world:this.settings.aim3d,guideLength:s.aimGuideLength,dotsLength:f,target:c===`path`?this.pathTarget(p):i?this.pathTarget(this.intoTheMist(this.match.intoTheDome(`player`,this.match.predict(`player`,e,a,t,Xo)))):null,targetRadius:s.aimTarget,coneDeg:this.match.state.ships.player.upgrades[e]?.accuracy?0:o.coneDeg,charge:n,bob:this.world.ships.player.visualOffset(e,this.tmp),camera:this.world.camera},this.world.bufferHeight),this.hud.setAimReadout($e(a.pitch),n===null?null:t,this.match.state.lastPower.player)}pathTarget(e){let{hit:t}=e;if(!t)return null;let n=ts(e),r=this.pathMark;if(t.side){let e=this.match.frameOf(t.side);this.world.ships[t.side].markSpot(t.surface,$(xo(e,t.point)),$(bo(e,n)),t.mast,r)}else if(t.surface===`island`){let e=ms(t.point,this.config.arena,this.match.ground());r.point.set(t.point.x,t.point.y,t.point.z),r.normal.set(e.x,e.y,e.z)}else r.point.set(t.point.x,this.world.water.sample(t.point.x,t.point.z,r.normal),t.point.z);return r}intoTheMist(e){let t=this.match.state.ships.enemy;if(!this.match.cardsOn||t.mist!==`up`)return e;let n=this.match.frameOf(`enemy`).position,r=this.config.cards.mist.radius,i=e.points.findIndex(e=>Math.hypot(e.x-n.x,e.z-n.z)<r);if(i<0)return e;let a=e.points.slice(0,Math.max(2,i));return{points:a,dt:e.dt,duration:(a.length-1)*e.dt,hit:null}}fire(e){this.sfx.chargeStop(),this.input.releaseAll(),this.input.setAimMode(!1),this.world.indicator.hide(),this.world.indicator.setLastImpactVisible(!1),this.hud.setPower(null),this.hud.setPull(null),this.hud.setHint(``),this.hud.setMode(`watch`),this.hud.hideShipStatus(),this.shotClock=this.matchClock;let t=this.match.state.selected,n=this.match.weaponOf(`player`,t)===`cannon`&&this.rolling(`player`)?{aim:this.waveAim(t)}:{},r=this.match.fire({...this.fireInput(`player`,t,e),...n,clock:this.matchClock});this.match.state.phase===`steering`?this.startSteering(null):this.handle(r)}fireInput(e,t,n,r){let i=this.match.weaponOf(e,t);if(i===`laser`){let t=r?.laser??this.match.frameOf(h(e)).position;return{laser:{x:t.x,z:t.z}}}return i===`rifle`?{rifle:r?.weapon===`rifle`?r.aim:this.match.aimOf(e,t)}:n}startSteering(e){let t=this.match.steeringShot();if(this.startShot(t,[]),this.phase.kind===`flight`){if(this.phase.steer={to:e,flap:0,onTarget:!1},t.side===`player`){let e=this.input.coarsePointer;this.hud.steer.show(e),this.hud.callout(`STEER IT!`,`hit`,1.3,e?`Drag to fly it onto their ship`:`W A S D or the arrow keys fly it onto their ship`)}else this.hud.callout(`WINGED BALL!`,`bad`,1.3,`${this.opponent.name} is steering it at you`)}}steerFlight(e,t){let n=e.steer,r=e.playback.shot.side===`player`,i=()=>this.brain.steer(this.match,n.to??this.match.frameOf(`player`).position),a=r?this.playerStick():{...i(),anchor:null},o=e.skip?this.flyOut([],i):this.match.steer(a.x,a.y,t),s=this.match.state.phase===`steering`,c=s?this.match.steeringLanding():null,l=s&&!c;l&&(o=this.flyOut(o,()=>({x:0,y:0})));let u=o.find(e=>e.type===`ShotFired`),d=u?.type===`ShotFired`?u.shot:this.match.steeringShot();for(e.playback.extend(d,o.filter(e=>`time`in e));e.launched.length<d.projectiles.length;)e.launched.push(!1);this.world.projectiles.extend(d,gb(d,e.playback.events),this.cards.ballLooks(d));let f=this.world.projectiles.bank;if(this.world.projectiles.bank=f+((e.skip?0:a.x)-f)*(1-Math.exp(-t*6)),u){e.steer=null,e.outcome=this.shotOutcome(d,e.playback.events);let n=e.outcome.hits===0&&e.outcome.damage===0;if(e.miss&&n&&this.announceMiss(e.miss.point,e.miss.surface),this.world.steerMarker.hide(),this.hud.steer.hide(),this.world.projectiles.bank=0,d.side===`player`&&this.brain.observe(d,this.match),l){let i=d.projectiles.some(e=>e.wingsOff!==void 0);r&&n&&i&&this.hud.callout(`MISSED!`,`miss`,1,`Its wings are gone: no more steering`),e.release=this.releaseOf(e.playback,e.outcome,e.playback.time+t)}return}if(c){let e=vs(c.hit)&&c.hit.side!==d.side;this.world.steerMarker.show($(c.point),e),e&&!n.onTarget&&r&&(this.sfx.onTarget(),this.input.coarsePointer&&navigator.vibrate?.(20)),n.onTarget=e,r&&this.hud.steer.setStatus(e?`On target!`:hb(c.hit),e)}r&&this.hud.steer.set(a.x,a.y,a.anchor),n.flap-=t;let p=this.match.steering?.balls.find(e=>e.wings&&!e.done);n.flap<=0&&p&&(n.flap=Ly,this.sfx.flap(this.soundAt(p.position)))}playerStick(){let e=+!!this.input.isHeld(`right`)-!!this.input.isHeld(`left`),t=+!!this.input.isHeld(`up`)-!!this.input.isHeld(`down`),n=this.input.drag;if(!n)this.steerCentre=null;else{let r=this.hud.steer.radius;this.steerCentre?.start!==n.startTime&&(this.steerCentre={x:n.startX,y:n.startY,start:n.startTime});let i=this.steerCentre,a=Math.hypot(n.x-i.x,n.y-i.y);a>r&&(i.x=n.x+(i.x-n.x)*r/a,i.y=n.y+(i.y-n.y)*r/a),e+=(n.x-i.x)/r,t-=(n.y-i.y)/r}let r=Math.hypot(e,t);return r>1&&(e/=r,t/=r),{x:e,y:t,anchor:this.steerCentre&&{x:this.steerCentre.x,y:this.steerCentre.y}}}flyOut(e,t){let n=[...e];for(let e=0;e<2e4&&this.match.state.phase===`steering`;e++){let e=t();n.push(...this.match.steer(e.x,e.y,1/60))}return n}startShot(e,t,n=!1){let r=e.duration===1/0;e.side===`player`&&(r||this.brain.observe(e,this.match),this.world.indicator.setLastImpact(null));let i=new Oy(e,t),a=this.config.cannons[e.cannonId];this.world.projectiles.show(e,a.ballRadius,this.world.ships[e.side].visualOffset(e.unitIndex,this.tmp),gb(e,t),this.cards.ballLooks(e),e.weapon===`cannon`?pu(a):null,a.chain?.reach??0),e.weapon===`rifle`&&this.world.ships[e.side].fireRifle(e.unitIndex),this.cards.holdDomes(t),this.refreshCrew();let o=r?Iy:this.shotOutcome(e,t),s=r||n?null:this.releaseOf(i,o);if(this.phase={kind:`flight`,playback:i,landed:!1,skip:n,launched:e.projectiles.map(()=>!1),followAt:n?null:e.weapon===`rifle`?e.side===`enemy`?eb:.01:Ry,steer:null,outcome:o,meteorsHeard:!1,announced:!1,miss:null,release:s,released:!1,cracked:!1,treesDone:0},e.weapon===`laser`){let t=e.projectiles[0],r=$(t.flight.points[t.flight.points.length-1]);this.world.laser.show(r,t.launch.origin.y,t.impactTime),this.sfx.laserCharge(t.impactTime,this.soundAt(r)),this.phase.kind===`flight`&&(this.phase.followAt=null),n||this.director.use(this.meteorShot(h(e.side)),{seconds:.5,arc:.15}),window.setTimeout(()=>this.world.ships[e.side].setTablet(e.unitIndex,!1),900),e.side===`enemy`&&this.hud.callout(`SKY LASER INCOMING!`,`bad`,1.2,`${this.opponent.name} is striking from the sky`)}if(e.side===`enemy`&&!n&&e.weapon===`cannon`&&!r){let t=e.projectiles[i.leadIndex];this.sfx.whistle(this.realTimeTo(t.impactTime,o.finisherAt,s?.at??null),this.soundAt(this.world.ships.player.root.position))}}releaseOf(e,t,n=0){let r=e.shot;if(t.hits>0||t.damage>0||t.finisherAt!==null)return null;let i=e.passedBy(this.match.frameOf(h(r.side)).position);if(!i)return null;let a=Math.max(i.time,n,...t.trees.map(e=>e.time))+Vy*(r.weapon===`rifle`?Xy:1);return a<r.projectiles[e.lastIndex].impactTime?{at:a,by:i.points}:null}shotOutcome(e,t){let n=this.match.state.ships[h(e.side)],r=n.hp<=0||n.crew.every(e=>e.hp<=0),i=t.filter(e=>e.type===`ShipDamaged`||e.type===`UnitKilled`);return{finisherAt:r&&i.length>0?i[i.length-1].time:null,hits:e.projectiles.filter(t=>vs(t.flight.hit)&&t.flight.hit.side!==e.side).length,damage:t.reduce((e,t)=>e+(t.type===`ShipDamaged`?t.amount:0),0),collapses:t.some(e=>e.type===`MastBroken`||e.type===`RockFell`),trees:this.config.presentation.trees?this.treeHits(e):[]}}outcomeSoFar(e){if(!e.steer)return e.outcome;let{shot:t,time:n,events:r}=e.playback;return{...Iy,hits:t.projectiles.filter(e=>e.impactTime<=n&&vs(e.flight.hit)&&e.flight.hit.side!==t.side).length,damage:r.reduce((e,t)=>e+(t.type===`ShipDamaged`&&t.time<=n?t.amount:0),0)}}realTimeTo(e,t,n=null){if(n!==null&&e>n)return n+(e-n)/Hy;if(t===null)return e;let r=this.config.presentation;return e+Math.max(0,Math.min(e,t+ib)-Math.max(0,t-r.finisherSlowMoTime))*(1/Math.max(.05,r.finisherSlowMo)-1)}onLaunch(e,t,n){let r=e.shot,i=r.projectiles[t];if(i.kind===`meteor`){if(!n.meteorsHeard){n.meteorsHeard=!0;let t=Math.max(...r.projectiles.filter(e=>e.kind===`meteor`).map(e=>e.impactTime));this.sfx.meteors(t-e.time,this.soundAt(this.world.ships[h(r.side)].root.position))}return}if(i.parent!==null)return;if(i.kind===`bullet`)return this.onRifleShot(r);if(i.kind===`laser`||e.isCluster&&t>0)return;let a=this.world.ships[r.side],o=new V,s=new V;a.muzzleWorld(r.unitIndex,o,s);let c=r.cannonId===`swivel`,l=r.cannonId===`scatter`?`scatter`:r.cannonId===`volley`||c?`volley`:`heavy`,u=c?.5:l===`heavy`?1:l===`volley`?.7:.85;this.world.effects.muzzleBlast(o,s,r.misfire?u*.6:u),a.recoil(r.unitIndex),this.sfx.cannon(l,this.soundAt(o));let d=pu(this.config.cannons[r.cannonId]);d===`chain`&&this.sfx.chainShot(this.soundAt(o)),d===`pirate`?(this.sfx.pirateLaunch(this.soundAt(o)),a.pirateFired(r.unitIndex)):d&&a.roundFired(r.unitIndex),r.misfire&&this.sfx.misfire(this.soundAt(o)),this.director.addShake(r.side===`player`?.26*u:.08),r.side===`player`&&t===0&&(this.aimRig?.fired(),this.hud.flash(`fire`,r.misfire?.3:.55*u),navigator.vibrate?.(r.misfire?[20,40,20]:40))}onRifleShot(e){let t=this.world.ships[e.side],n=e.projectiles[0],r=$(n.launch.velocity).normalize(),i=t.rifleMuzzle(e.unitIndex,new V)??$(n.launch.origin);this.world.effects.muzzleBlast(i,r,.22),this.sfx.rifle(this.soundAt(i)),this.director.addShake(e.side===`player`?.15:.05),e.side===`player`&&navigator.vibrate?.(30)}soundAt(e){let t=new V(e.x,e.y,e.z),n=t.distanceTo(this.world.camera.position),r=t.clone().project(this.world.camera),i=r.z<1&&Number.isFinite(r.x)?Math.max(-1,Math.min(1,r.x))*.7:0;return{volume:Number.isFinite(n)?Math.min(1,Math.max(.15,1.15-n/260)):1,pan:i}}updateFlight(e,t,n){let{playback:r}=e;r.shot.side===`enemy`&&n.some(e=>e.type===`tap`||e.type===`fireDown`)&&!e.skip&&(e.skip=!0,this.sfx.stopWhistle()),e.steer&&this.steerFlight(e,t);let i=e.skip?r.skipToEnd():r.advance(t);if(e.skip&&(this.matchClock=Math.max(this.matchClock,this.shotClock+r.time)),r.shot.projectiles.forEach((t,n)=>{!e.launched[n]&&r.time>=t.launch.delay&&(e.launched[n]=!0,this.onLaunch(r,n,e))}),e.followAt!==null&&r.time>=e.followAt&&!e.landed){e.followAt=null,this.showAllCrew();let t=(e,t)=>Math.max(0,I(e,t,this.config.arena)),n=e=>this.director.lens(e),i=r.shot.weapon===`rifle`,a=i?new Go(()=>r.followTarget(),t,n,40,3.5,.8):e.steer?new Go(()=>r.followTarget(),t,n,62,8,3):new Go(()=>r.followTarget(),t,n,62);this.director.use(a,{seconds:i?.25:.5})}e.release&&!e.released&&!e.skip&&r.time>=e.release.at&&this.release(e,e.release.by);for(let t of i)this.onTimedEvent(t,r,e);let{trees:a}=e.outcome;for(;e.treesDone<a.length&&a[e.treesDone].time<=r.time+1e-9;)this.snapTree(a[e.treesDone++]);if(this.world.projectiles.update(r.time,this.world.effects),this.world.laser.update(r.time),r.finished){this.world.projectiles.hide(),e.skip&&this.director.use(this.impactShot(this.match.state.turnSide),{seconds:.5});let t=this.config.presentation,n=e.outcome.collapses?t.collapseHoldTime:0,i=e.outcome.finisherAt===null?(e.skip?Uy:t.resolveHoldTime)+n:.5,a=e.outcome.finisherAt===null&&!e.skip;this.phase={kind:`resolve`,playback:r,time:0,hold:i,boarders:a}}}release(e,t){e.released=!0,e.followAt=null;let n=e.playback.shot,r=n.weapon===`rifle`,i=e.playback.landings();this.director.use(this.missShot(n,r||i.length===0?t:i),{seconds:.8}),r&&n.side===`player`&&this.hud.callout(`MISSED!`,`miss`,1)}onTimedEvent(e,t,n){let r=t.shot;switch(e.type){case`ProjectileImpact`:{let i=e.hit;if(!i)return;let a=$(i.point),o=r.projectiles[e.projectile],s=o.kind===`meteor`,c=o.kind===`bullet`,l=o.kind===`laser`,u=c?.3:l?1.6:s?.9:t.isCluster?.5:r.cannonId===`volley`?.8:1;l&&(this.world.effects.bigBlast(i.point,Math.max(1.5,this.config.cards.laser.radius)),this.world.effects.sparkle(i.point,`#ff6b6b`,1.4),this.sfx.laserStrike(this.soundAt(i.point)),this.director.addShake(1.1),this.hud.flash(r.side===`player`?`fire`:`hurt`,.8));let d=e.projectile===t.leadIndex,f=this.soundAt(i.point);if(o.blastScale>1&&(this.world.effects.bigBlast(i.point,this.config.cannons[r.cannonId].splashRadius*o.blastScale),this.sfx.bigBlast(f),this.director.addShake(.8)),i.surface===`water`)this.world.effects.splash(i.point,u),(d||!t.isCluster)&&this.sfx.splash(u,f);else if(i.surface===`island`)this.world.effects.dust(i.point),(d||!t.isCluster)&&this.sfx.rockHit(f);else{this.world.effects.shipHit(i.point,u),c?this.sfx.bulletHit(f):this.crunchedAt!==this.clock&&(this.crunchedAt=this.clock,this.sfx.woodHit(f));let e=o.kind===`ball`&&pu(this.config.cannons[r.cannonId])===`pirate`;if((i.surface===`hull`||i.surface===`crew`)&&i.side&&!c&&!e){let e=this.match.frameOf(i.side),t=bo(e,es(o.flight,o.flight.duration)),n=l?rb:s?Dc:o.bomblet?qc:Math.min(.4,this.config.cannons[r.cannonId].ballRadius),{minHoleSize:a,holeSize:c}=this.config.presentation,u=Math.max(a,n*c)*(o.blastScale>1?1.5:1),d=i.surface===`hull`?l?this.config.cards.laser.damage:s?this.config.powerUps.meteorDamage:this.config.cannons[r.cannonId].damage*o.damageScale:0,f=xo(e,i.point),p=this.world.ships[i.side];this.config.presentation.listing&&d>0&&p.takeOnWater($(f),d),this.config.presentation.holes&&(p.addHole($(f),$(t),u),this.holes[i.side].push({x:f.x,y:f.y,z:f.z,radius:u}))}if(this.director.addShake((r.side===`enemy`?.9:.4)*(c?.3:1)),i.side&&this.world.ships[i.side].flashHit(u),n.skip||(this.hitStop=Math.max(this.hitStop,this.config.presentation.hitStopTime*(t.isCluster?1.4:1)),this.sfx.thump(f)),r.side===`player`){if(this.labels.addFloating(a,``,`hit-marker`,.45,0),!n.announced){n.announced=!0;let{hits:e,damage:t}=this.outcomeSoFar(n),r=l?`SKY LASER!`:c?i.surface===`crew`?`SNIPED!`:`HIT!`:e===1&&i.surface===`mast`?`MAST HIT!`:o.passes.some(e=>e.kind===`skip`)?`SKIPPED IN!`:By[e-1]??`${e} HITS!`;this.hud.callout(r,c&&i.surface===`crew`?`kill`:`hit`,1.4,t>0?`−${Av(t)} hull`:``)}}else n.announced||(n.announced=!0,c&&i.surface===`crew`&&i.unitIndex!==void 0&&this.hud.callout(`SNIPED!`,`bad`,1.5,`${this.opponent.name}'s sniper hit your ${this.match.unitOf(`player`,i.unitIndex).name} gunner`),this.hud.flash(`hurt`,t.isCluster?.7:1),navigator.vibrate?.([30,30,60]))}let p=t.events.some(t=>(t.type===`RockDamaged`||t.type===`RockFell`)&&t.projectile===e.projectile),m=this.outcomeSoFar(n),g=c&&n.released;if(d&&r.side===`player`&&m.hits===0&&m.damage===0&&!vs(i)&&!p&&!g&&(n.steer?n.miss={point:i.point,surface:i.surface}:this.announceMiss(i.point,i.surface)),r.side===`player`&&e.projectile===t.leadIndex){let e=i.surface===`water`||i.surface===`island`&&i.rock===void 0;this.world.indicator.setLastImpact(e?i.point:null)}if(e.projectile===t.lastIndex&&!n.landed&&!n.skip&&!n.released){if(n.landed=!0,t.hasMeteors){this.director.use(this.meteorShot(h(r.side)),{seconds:.8});break}let e=t.landings();if(e.length>0&&this.allInTheSea(r)){this.director.use(this.missShot(r,e),{seconds:.8});break}let i=jy(e.length>0?e:[a]);i.y+=2;let o=this.world.camera.position.clone(),s=o.clone().sub(i).setY(0);s.lengthSq()<1e-6&&s.set(1,0,0);let c=Math.max(22,s.length());s.normalize();let l=this.director.fov,u=this.director.lens(l),d=Wo(e,i,s.clone().negate().multiplyScalar(.954).setY(-.3),u.fov,u.aspect)*.954;o.copy(i).addScaledVector(s,Math.max(c,d)),o.y=Math.max(o.y,i.y+Math.max(5,d*.3),I(o.x,o.z,this.config.arena)+5),this.director.use(new qo(o,i,l),{seconds:.6})}break}case`ShipDamaged`:this.shown.ship[e.side]=e.hp,this.hud.setShipHp(e.side,e.hp,this.config.ship.hp),this.hud.bumpShip(e.side),this.labels.addFloating($(e.point),`−${Av(e.amount)}`,`damage-number ${e.side}`),n.announced||(n.announced=!0,e.side===`enemy`?this.hud.callout(`BLAST HIT!`,`hit`,1.4,`−${Av(this.outcomeSoFar(n).damage)} hull`):this.hud.flash(`hurt`,1));break;case`PowerUpCollected`:{let t=ou[e.kind];this.world.effects.powerBurst(e.point,t,e.kind===`split`?1.2:1),this.cards.isGift(e.id)?this.cards.takeGift(e.id):(this.world.powerUps.collect(e.usesLeft),this.shownPowerUp&&(this.shownPowerUp.uses=e.usesLeft)),this.sfx.powerUpPickup(e.kind,this.soundAt(e.point)),this.labels.addFloating($(e.point),mb[e.kind](this.config),`powerup-pop kind-${e.kind}`,1.6,6),this.director.addShake(.25),n.skip||(this.hitStop=Math.max(this.hitStop,.05)),r.side===`player`&&navigator.vibrate?.(25);break}case`ProjectilePassed`:{let t=$(e.point);if(e.through===`skip`){let n=r.projectiles[e.projectile].passes.filter(t=>t.kind===`skip`&&t.time<=e.time+1e-9).length,i=this.config.cannons[r.cannonId]?.skip?.bonus??0;this.world.effects.splash(e.point,.55),this.sfx.skip(n,this.soundAt(e.point)),this.labels.addFloating(t,`SKIP ×${Av(1+i*n)}`,`powerup-pop kind-damage`,1.1,3),this.director.addShake(.12);break}if(e.through!==`mast`){this.world.effects.dust(e.point),e.through===`drillIn`?this.sfx.drillIn(this.soundAt(e.point)):(this.world.effects.rockBreak(e.point),this.sfx.drillOut(this.soundAt(e.point)),r.side===`player`&&!n.skip&&this.hud.callout(`DRILLED THROUGH!`,`hit`,1.1,``)),this.director.addShake(e.through===`drillIn`?.25:.4);break}this.world.effects.shipHit(e.point,.8),this.sfx.chainRip(this.soundAt(e.point)),this.director.addShake(e.side===`player`?.5:.25),n.skip||(this.hitStop=Math.max(this.hitStop,this.config.presentation.hitStopTime*.6)),e.side&&this.world.ships[e.side].flashHit(.6),r.side===`player`?(this.labels.addFloating(t,``,`hit-marker`,.45,0),n.announced||(n.announced=!0,this.hud.callout(`CHAIN SHOT!`,`hit`,1.2,`Through the ${ub[e.mast??-1]??`mast`}`))):n.announced||(n.announced=!0,this.hud.flash(`hurt`,.6));break}case`PirateLanded`:{let n=$(e.point);if(e.onDeck&&e.side){let i=t.events.find(t=>t.type===`PirateBrawl`&&t.projectile===e.projectile),a=i?.type===`PirateBrawl`?i.unitIndex:null,o=i?i.time-e.time:.6;this.world.ships[e.side].board(n,r.side,a,o,this.world.ships[r.side].root.position),this.labels.addFloating(n,`BOARDED!`,`powerup-pop kind-blast`,1.1,3)}else this.labels.addFloating(n,e.point.y>.5?`He walks home`:`He swims home`,`miss-label`,1.6,2);break}case`PirateBrawl`:{let t=this.crewHead(e.side,e.unitIndex);this.sfx.punch(this.soundAt(t)),this.world.effects.shipHit(t,.5),this.labels.addFloating(t,`POW!`,`powerup-pop kind-damage`,1,2),this.director.addShake(e.side===`player`?.45:.2),e.side===`player`&&this.hud.flash(`hurt`,.5);break}case`ShipOnFire`:this.cards.onFire(e.side,$(e.point));break;case`ShieldBlocked`:this.cards.shieldBlocked(e);break;case`BombBurst`:this.world.effects.bigBlast(e.point,1.4),this.world.effects.sparkle(e.point,`#ffb347`,1),this.sfx.bombBurst(this.soundAt(e.point)),this.director.addShake(.2),r.side===`player`&&!n.skip&&this.labels.addFloating($(e.point),`BOMBS AWAY!`,`powerup-pop kind-meteor`,1.2,4);break;case`BallLocked`:this.cards.lockOn(e);break;case`ProjectileIntercepted`:this.cards.intercept(e);break;case`MachineDamaged`:this.cards.machineHit(e);break;case`MachineDestroyed`:this.cards.machineDestroyed(e);break;case`UnitDamaged`:{this.shown.crew[e.side][e.unitIndex]=e.hp,this.refreshCrew();let t=this.crewHead(e.side,e.unitIndex);this.labels.addFloating(t,`−${Av(e.amount)}`,`damage-number crew ${e.side}`,1.3,3);break}case`MastBroken`:{let n=r.projectiles[e.projectile],i=bo(this.match.frameOf(e.side),es(n.flight,n.flight.duration)),a=this.world.ships[e.side].breakMast(e.mast,e.top,$(i)),o=this.shown.sail[e.side];if(this.shown.sail[e.side]=e.sailing,this.hud.setSail(e.side,this.shown.sail[e.side]),!a||(this.world.effects.mastBreak(a),this.sfx.mastBreak(this.soundAt(a)),this.director.addShake(e.side===`player`?.5:.25),t.events.some(t=>t.type===`UnitKilled`&&t.time===e.time)))break;let s=ub[e.mast]??`mast`,c=Math.round((o-this.shown.sail[e.side])*100),l=c>0?` · −${c}% sailing`:``;e.side===`enemy`?this.hud.callout(`MAST DOWN!`,`kill`,1.6,`${this.opponent.name}'s ${s} is down${l}`):this.hud.callout(`MAST LOST!`,`bad`,1.6,`Your ${s} is down${l}`);break}case`SailTorn`:{let t=r.projectiles[e.projectile],n=es(t.flight,e.time-t.launch.delay),i=t.kind===`meteor`?Dc:this.config.cannons[r.cannonId].ballRadius,a=Math.max(this.config.presentation.minHoleSize,i*this.config.presentation.sailTearSize),o=this.world.ships[e.side].tearSail(e.mast,e.sail,$(e.point),$(n),a)??$(e.point);this.world.effects.sailTear(o,Et[e.side].sail,a),this.sfx.sailTear(this.soundAt(o));let s=(this.shown.sail[e.side]-e.sailing)*100;this.shown.sail[e.side]=e.sailing,this.hud.setSail(e.side,e.sailing),s>.05&&this.labels.addFloating(o,`Sail torn · −${Math.round(s*10)/10}% sailing`,`miss-label`,1.8,2);break}case`CraterDug`:{let n=e.crater,i=this.world.island.dig(n,this.config.destruction,this.config.presentation.trees),a=N(n.x,this.world.island.heightAt(n.x,n.z),n.z);this.world.effects.dig(a,n.radius,i.material,i.blown);for(let{piece:e,away:t}of i.uprooted)this.world.rubble.drop(e,t);r.side===`player`&&e.projectile===t.leadIndex?this.world.indicator.setLastImpact(a):this.world.indicator.settleLastImpact((e,t)=>this.world.island.heightAt(e,t));break}case`RockFell`:{let n=r.projectiles[e.projectile],i=es(n.flight,n.flight.duration),a=this.world.island,o=e.peak===null?a.breakRock(e.rock??-1,e.top,e.legs):a.breakPeak(e.peak,e.top??0,this.config.destruction);for(let e of o)this.world.rubble.drop(e,$(i));let s=n.flight.hit?.point??N();this.world.effects.rockBreak(s),this.sfx.rockFall(this.soundAt(s)),this.director.addShake(.35),r.side===`player`&&e.projectile===t.leadIndex?this.world.indicator.setLastImpact(null):this.world.indicator.settleLastImpact((e,t)=>this.world.island.heightAt(e,t));let c=e.peak===null?e.top===null?`THE ARCH FALLS!`:this.config.arena.island===`lighthouse`?`LIGHTHOUSE DOWN!`:`ROCKFALL!`:`THE SPIRE CRUMBLES!`;this.hud.callout(c,`hit`,1.6,e.top===null?`The way through is open`:``);break}case`RockDamaged`:{let i=r.projectiles[e.projectile],a=i.flight.hit?.point??N(),o=Lt(this.config.arena),s=o.id===`lighthouse`&&e.rock===0,c=i.kind===`meteor`?Dc:this.config.cannons[r.cannonId].ballRadius,{minHoleSize:l,holeSize:u}=this.config.presentation,d=Math.max(l,c*u)*(i.blastScale>1?1.5:1);if(this.world.island.crack(e.rock,e.peak,a,s?d:d*1.6),this.world.effects.crack(a,s),this.director.addShake(.15),n.cracked)break;n.cracked=!0;let f=t.events.filter(t=>t.type===`RockDamaged`&&t.rock===e.rock&&t.peak===e.peak).at(-1),p=f?.type===`RockDamaged`?f.hp:e.hp,m=s?this.config.destruction.towerHp:this.config.destruction.rockHp,h=e.peak===null?s?`LIGHTHOUSE`:o.solids[e.rock??-1]?.kind===`arch`?`ARCH`:`ROCK`:`SPIRE`;this.hud.callout(`${h} CRACKED!`,`hit`,1.4,m>0?`${Math.round(100*Math.min(1,Math.max(0,p/m)))}% of its strength left`:``);break}case`UnitKilled`:{let n=this.lastImpactOn(t,e.side);this.world.ships[e.side].setCrewAlive(e.unitIndex,!1,!0,n??void 0);let r=this.match.unitOf(e.side,e.unitIndex).name;this.sfx.overboard(this.soundAt(this.crewHead(e.side,e.unitIndex))),e.side===`enemy`?(this.sfx.kill(),this.hud.callout(`GUNNER DOWN!`,`kill`,1.6,`${this.opponent.name}'s ${r} gunner went overboard`)):this.hud.callout(`MAN OVERBOARD!`,`bad`,1.6,`Your ${r} gunner is out`);break}}}updateResolve(e,t,n){e.time+=t,this.world.laser.update(e.playback.shot.duration+e.time);let r=n.some(e=>e.type===`tap`||e.type===`fireDown`),i=e.boarders&&e.time<Wy&&m.some(e=>this.world.ships[e].boarding);(e.time<e.hold||i)&&!r||this.handle(this.match.endTurn(this.matchClock))}lastImpactOn(e,t){let n=null;for(let r of e.shot.projectiles){let i=r.flight.hit;!vs(i)||i.side!==t||r.impactTime>e.time+1e-6||(!n||r.impactTime>=n.time)&&(n={time:r.impactTime,point:i.point})}return n?$(n.point):null}treeHits(e){let t=this.config.cannons[e.cannonId];return e.projectiles.flatMap(e=>{let n=e.kind===`meteor`,r=n?Dc:t.ballRadius,i=n?this.config.powerUps.meteorDamage:t.damage*e.damageScale;return this.world.island.treeCrossings(e.flight.points,e.flight.dt,r).map(t=>({time:e.launch.delay+t.time,tree:t.tree,segment:t.segment,point:t.point,along:$(es(e.flight,t.time)),damage:i}))}).sort((e,t)=>e.time-t.time)}snapTree(e){if(!this.world.island.treeStandsAt(e.tree,e.segment))return;let t=this.world.island.hitTree(e.tree,e.segment,e.damage,this.config.presentation.treeHp);this.world.effects.treeHit(e.point,t!==null);let n=this.soundAt(e.point);if(!t){this.sfx.woodHit(n);return}this.world.rubble.drop(t,e.along),this.sfx.mastBreak(n)}announceMiss(e,t){let n=this.match.frameOf(`enemy`),r=xo(n,e),i=N(0,0,0),a=1/0;for(let e of this.config.ship.hull){let t=Math.max(e.center.x-e.halfSize.x,Math.min(e.center.x+e.halfSize.x,r.x)),o=Math.max(e.center.z-e.halfSize.z,Math.min(e.center.z+e.halfSize.z,r.z)),s=Math.hypot(r.x-t,r.z-o);s<a&&(a=s,i=G(n,N(t,0,o)))}let o=this.match.frameOf(`player`).position,s=new V(n.position.x-o.x,0,n.position.z-o.z).normalize(),c=e.x-i.x,l=e.z-i.z,u=c*s.x+l*s.z,d=-c*s.z+l*s.x,f=[];Math.abs(u)>=1&&f.push(`${Math.round(Math.abs(u))} m ${u>0?`long`:`short`}`),Math.abs(d)>=1&&f.push(`${Math.round(Math.abs(d))} m ${d>0?`right`:`left`}`);let p=t===`island`?`Blocked by the island`:f.length?f.join(` · `):`Just missed`,m=$(e).setY(Math.max(e.y,0)+3);this.labels.addFloating(m,p,`miss-label`,2.2,3),t===`water`&&a<zy&&this.hud.callout(`SO CLOSE!`,`miss`,1.3)}enterFinale(e,t){let n=h(e),r=e===`player`;this.reward??=this.recordMatch(r);let i=this.world.ships[n];this.input.setAimMode(!1),this.hud.setMode(`watch`),this.hud.setHint(``),this.world.indicator.hide(),t===`sunk`&&(i.sink(),this.world.effects.sinkBurst(i.root.position),this.sfx.sinking(this.soundAt(i.root.position)));let a={sunk:[`SHE SINKS!`,`ABANDON SHIP!`],crew:[`CREW WIPED OUT!`,`NO HANDS LEFT!`]},o=r?`kill`:`bad`;this.hud.callout(a[t][+!r],o,2.6),this.hud.flash(`finisher`,.6),this.director.use(new No(this.config,()=>this.match.state.ships[n].angle,N(-34*this.shipScale,9*this.shipScale,38*this.shipScale),N(-24*this.shipScale,13*this.shipScale,34*this.shipScale),N(0,3*this.shipScale,0),6,50),{seconds:1.4,arc:.25}),this.phase={kind:`finale`,time:0,hold:t===`sunk`?4.6:2.8,winner:e,reason:t}}updateFinale(e,t,n){e.time+=t;let r=e.time>1&&n.some(e=>e.type===`tap`||e.type===`fireDown`);(e.time>=e.hold||r)&&this.showResult(e.winner,e.reason)}enterBot(){this.hud.setMode(`watch`),this.hud.setHint(this.input.coarsePointer?`Tap to skip`:`Click to skip`),this.hud.setTurn(`enemy`,`${this.opponent.name} is thinking…`);let e=this.brain.planTurn(this.match,this.matchClock),t=e.unitIndex;this.phase={kind:`bot`,step:`think`,time:0,plan:e,fromAim:this.match.aimOf(`enemy`,t)}}updateBot(e,t){e.time+=t;let{plan:n}=e;switch(e.step){case`think`:if(e.time<n.thinkTime)return;this.hud.hideBanner(),this.botStillToSail(n)&&(this.hud.setTurn(`enemy`,`${this.opponent.name} is sailing…`),this.director.use(this.shipRig(`enemy`),{seconds:1})),this.advanceBot(e,`sail`);return;case`sail`:if(this.botStillToSail(n)){let e=this.match.state.ships.enemy,r=(n.sailTo-e.angle)*this.config.arena.orbitRadius;this.handle(this.match.sail(Math.sign(r),Math.min(t,Math.abs(r)/this.config.ship.sailSpeed)));return}this.advanceBot(e,`pause`);return;case`pause`:{if(e.time<.45)return;this.handle(this.match.selectGunner(n.unitIndex)),e.fromAim=this.match.aimOf(`enemy`,n.unitIndex),this.hud.setTurn(`enemy`,`${this.opponent.name} is aiming…`),n.weapon===`laser`&&(this.world.ships.enemy.setTablet(n.unitIndex,!0),this.hud.setTurn(`enemy`,`${this.opponent.name} is targeting you from the sky…`),this.sfx.beep());let t=()=>this.match.aimOf(`enemy`,n.unitIndex),r=()=>this.match.state.ships.enemy.angle;if(n.weapon===`rifle`)this.hud.setTurn(`enemy`,`${this.opponent.name}'s sniper takes aim…`),this.director.use(new Fo(this.config,this.world.ships.enemy,r,n.unitIndex,t),{seconds:.6});else{let e=this.flavour.chance(.55)?`shoulder`:`front`;this.director.use(new Po(this.config,this.world.ships.enemy,r,n.unitIndex,t,e),{seconds:.8})}this.advanceBot(e,`aim`);return}case`aim`:{n.weapon===`rifle`&&e.time>=$y&&this.world.ships.enemy.setRifle(n.unitIndex,`aiming`);let t=Math.min(1,e.time/n.aimTime),r=t*t*(3-2*t);this.match.setAim({yaw:T(e.fromAim.yaw,n.aim.yaw,r),pitch:T(e.fromAim.pitch,n.aim.pitch,r)}),t>=1&&this.advanceBot(e,n.wait>0?`wait`:`charge`);return}case`wait`:e.time>=n.wait&&this.advanceBot(e,`charge`);return;case`charge`:{if(n.weapon===`laser`){if(e.time<.8)return;this.sfx.beep(!0),this.fireBot(n,!1);return}if(n.weapon===`rifle`){this.world.ships.enemy.setRifle(n.unitIndex,`aiming`);let r=this.world.ships.enemy.rifleLens(n.unitIndex,this.tmp);if(r&&Math.floor(e.time/.3)!==Math.floor((e.time-t)/.3)&&this.world.effects.sparkle(r,`#ffffff`,.3),e.time<Qy)return;this.fireBot(n,!1);return}let r=this.config.power,i=n.misfire?r.fillTime+r.graceTime+.05:n.power*r.fillTime+.1,a=Math.min(1,e.time/r.fillTime),o=this.world.ships.enemy;if(o.setTremble(n.unitIndex,a),this.world.effects.fuse(o.fuseWorld(n.unitIndex,this.tmp),a,t),n.fireClock===null?e.time<i:this.matchClock<n.fireClock)return;this.fireBot(n,!1);return}}}advanceBot(e,t){e.step=t,e.time=0}botStillToSail(e){let t=this.match.state.ships.enemy;return Math.abs(e.sailTo-t.angle)*this.config.arena.orbitRadius>.05&&t.fuel>0}skipBotTurn(e){let{plan:t}=e;for(let e=0;e<1e3&&this.botStillToSail(t);e++){let e=(t.sailTo-this.match.state.ships.enemy.angle)*this.config.arena.orbitRadius;this.match.sail(Math.sign(e),Math.min(.1,Math.abs(e)/this.config.ship.sailSpeed))}this.match.state.selected!==t.unitIndex&&this.match.selectGunner(t.unitIndex),this.match.setAim(t.aim),this.fireBot(t,!0)}fireBot(e,t){this.hud.setHint(``),this.hud.setTurn(`enemy`,`${this.opponent.name}'s turn`),e.misfire&&this.hud.toast(`${this.opponent.name} misfired!`),t&&e.fireClock!==null&&(this.matchClock=Math.max(this.matchClock,e.fireClock)),this.shotClock=this.matchClock;let n=this.matchClock,r=this.fireInput(`enemy`,e.unitIndex,e.misfire?{misfire:!0}:{power:e.power},e),i=e.steerTo??G(this.match.frameOf(`player`),N(0,this.config.ship.deckHeight+.5,0)),a=this.match.fire({...r,clock:n});if(this.match.state.phase===`steering`&&!t)return this.startSteering(i);let o=this.flyOut(a,()=>this.brain.steer(this.match,i)),s=o.find(e=>e.type===`ShotFired`);s?.type===`ShotFired`&&this.startShot(s.shot,o.filter(e=>`time`in e),t)}handle(e){for(let t of e)switch(t.type){case`ShotFired`:this.startShot(t.shot,e.filter(e=>`time`in e));break;case`TurnStarted`:if(this.turnEvents=e.slice(e.indexOf(t)+1),e.some(e=>e.type===`MatchEnded`)){this.cards.playTurnStart(this.turnEvents);break}this.beginTurn(t.side);break;case`MatchEnded`:this.enterFinale(t.winner,t.reason);break;case`MistRose`:this.cards.mistRose(t.side);break;case`ExtraTurn`:this.extraTurn=t.side}}showResult(e,t){this.input.setAimMode(!1),this.hud.setMode(`hidden`),this.hud.setTurn(null),this.hud.setHint(``),this.world.indicator.hide();let n=e===`player`;n?this.sfx.victory():this.sfx.defeat();let r=this.opponent.name,i=this.match.state.stats.player,a=this.match.state.stats.enemy,o=Math.round(this.clock-this.matchStartTime);l({date:new Date().toISOString(),build:this.build,seed:this.match.seed,opponent:r,difficulty:this.config.bot.difficulty,indicator:this.settings.aimPath?`path`:this.settings.indicator,aim3d:this.settings.aim3d,firing:this.settings.firing,winner:e,reason:t,turns:this.match.state.turn,seconds:o,you:{...i},them:{...a}});let s=e=>`${e.shots?Math.round(100*e.hits/e.shots):0}%`;this.reward??=this.recordMatch(n),this.hud.showResult({won:n,reward:this.reward,reason:t===`sunk`?n?`You sank ${r}'s ship.`:`${r} sank your ship.`:n?`You took out ${r}'s whole crew.`:`${r} took out your whole crew.`,opponentLine:`${r}: “${Gv(this.flavour,!n)}”`,stats:[[`Your shots`,`${i.shots} · ${i.hits} hits (${s(i)})`],[`${r}'s shots`,`${a.shots} · ${a.hits} hits (${s(a)})`],[`Damage dealt`,`${Av(i.shipDamage)} ship · ${Av(i.crewDamage)} crew`],[`Damage taken`,`${Av(a.shipDamage)} ship · ${Av(a.crewDamage)} crew`],[`Misfires`,`${i.misfires} you · ${a.misfires} ${r}`],[`Turns`,String(this.match.state.turn)],[`Duration`,`${Math.floor(o/60)}:${String(o%60).padStart(2,`0`)}`]]});let c=Math.atan2(this.world.camera.position.z,this.world.camera.position.x);this.director.use(new Jo(200,60,c,.05,45),{seconds:1.5}),this.phase={kind:`result`}}debugAutoShot(){if(this.phase.kind!==`aim`)return!1;let e=this.match.state.selected,t=G(this.match.frameOf(`enemy`),N(0,this.config.ship.deckHeight+.5,0)),[n]=ks(this.match,`player`,e,t);return n?(this.match.setAim(n.aim),this.fire({power:n.power}),!0):!1}debugSpawnPowerUp(e){let t=e===`split`?Math.max(1,Math.round(this.config.powerUps.splitUses)):1,n=this.match.state.powerUpCount+1;this.match.state.powerUpCount=n;let{anchor:r,travel:i}=this.match.powerUpSpot(e,new sl(Math.random()*2**32>>>0))??Uc(this.config,this.shipAngles(),e);this.match.state.powerUp={id:n,kind:e,spawnClock:this.matchClock,anchor:r,travel:i,motion:`ease`,phase:0,uses:t},this.shownPowerUp={...this.match.state.powerUp},this.showPowerUp(this.shownPowerUp),this.sfx.powerUpSpawn()}debugBreakMast(e){let t=this.match.state.ships[e].masts,n=this.config.ship.masts,r=e=>t[e].top-n[e].bottom,i=-1;if(t.forEach((e,t)=>{r(t)>2&&(i<0||r(t)>r(i))&&(i=t)}),i<0)return;let a=t[i];a.top=n[i].bottom+r(i)/2,a.hp=this.config.ship.mastHp,this.shown.sail[e]=Fs(this.config,this.match.state.ships[e]),this.hud.setSail(e,this.shown.sail[e]);let o=this.world.ships[e].breakMast(i,a.top,new V(0,0,-1));o&&(this.world.effects.mastBreak(o),this.sfx.mastBreak(this.soundAt(o)))}debugSetShipHp(e,t){this.match.state.ships[e].hp=t,this.shown.ship[e]=t,this.refreshHud()}get shipScale(){let e=this.config.ship.hull.flatMap(e=>[e.center.x-e.halfSize.x,e.center.x+e.halfSize.x]);return Math.max(1,(Math.max(...e)-Math.min(...e))/25)}shipRig(e){let t=this.shipScale,n={back:44*t,height:30*t**.8,lookAhead:80,lookHeight:0,side:-16*t};return new Bo(this.config,()=>this.match.state.ships[e].angle,n)}establishingShot(){let e=this.flavour.chance(.5)?1:-1,t=this.shipScale;return new No(this.config,()=>this.match.state.ships.enemy.angle,N(26*e*t,5*t,16*t),N(18*e*t,7*t,20*t),N(0,6*t,0),5,48)}powerUpShot(e,t){let n=$(t.anchor),r=$(this.match.frameOf(e).position).clone().sub(n).setY(0).normalize(),i=n.clone().setY(n.y+t.travel*.4),a=i.clone().addScaledVector(r,34).setY(i.y+6);return a.y=Math.max(a.y,I(a.x,a.z,this.config.arena)+6),new qo(a,i,50)}meteorShot(e){let t=this.shipScale;return new No(this.config,()=>this.match.state.ships[e].angle,N(-20*t,16*t,52*t),N(-14*t,14*t,48*t),N(0,8*t,0),3,55)}allInTheSea(e){return e.projectiles.every(e=>e.kind!==`ball`||e.split||!e.flight.hit||e.flight.hit.surface===`water`)}missShot(e,t){let n=this.match.frameOf(h(e.side)),{hull:r,deckHeight:i}=this.config.ship,a=$(n.position).setY(i),o=jy(t),s=o.clone().lerp(a,.5);s.y=Math.max(s.y,2.5);let c=e.projectiles[0].launch.origin,l=new V(c.x-s.x,0,c.z-s.z).normalize(),u=ey(c,n,o,r)===`LONG`,d=z.degToRad(u?70:15),f=new V(-l.z,0,l.x),p=Math.sign(f.dot(this.tmp.copy(this.world.camera.position).sub(s)))||1,m=l.multiplyScalar(Math.cos(d)).addScaledVector(f,p*Math.sin(d)),g=r.flatMap(e=>[e.center.x-e.halfSize.x,e.center.x+e.halfSize.x]),_=[Math.min(...g),Math.max(...g)].map(e=>$(G(n,N(e,i,0)))),v=this.director.fov,y=this.director.lens(v),b=m.clone().negate().multiplyScalar(.954).setY(-.3),x=Wo([...t,..._],s,b,y.fov,y.aspect)*.954,S=Math.hypot(o.x-a.x,o.z-a.z),C=Math.max(x,z.clamp(S*1.1+26,30,50)),w=s.clone().addScaledVector(m,C);return w.y=Math.max(s.y+C*.35+3,I(w.x,w.z,this.config.arena)+15),new qo(w,s,v)}impactShot(e){let t=h(e),n=this.shipScale;return new No(this.config,()=>this.match.state.ships[t].angle,N(-14*n,9*n,30*n),N(-10*n,10*n,28*n),N(0,4*n,0),3,50)}showAllCrew(){this.match.state.ships.player.crew.forEach((e,t)=>this.world.ships.player.setCrewVisible(t,!0)),this.world.ships.player.setRiggingVisible(!0)}syncShips(){for(let e of m){let t=this.world.ships[e];t.setAngle(this.match.state.ships[e].angle),t.setRolling(this.rolling(e)),this.match.state.ships[e].crew.forEach((n,r)=>t.setAim(r,e===`player`&&this.match.state.selected===r?this.waveAim(r):this.match.aimOf(e,r)))}}refreshHud(){for(let e of m)this.hud.setShipHp(e,this.shown.ship[e],this.config.ship.hp),this.hud.setSail(e,this.shown.sail[e]);this.hud.setFuel(this.match.state.ships.player.fuel/this.config.ship.fuelPerTurn),this.refreshCrew()}refreshCrew(){for(let e of m)this.hud.setCrew(e,this.shown.crew[e],this.match.state.ships[e].crew.map((t,n)=>this.match.fullHpOf(e,n)));this.hud.setGunners(this.match.state.ships.player.crew.map((e,t)=>({name:this.match.unitOf(`player`,t).name,cannonName:this.match.cannonOf(`player`,t).name,cannonId:this.match.cannonIdOf(`player`,t),hp:this.shown.crew.player[t],maxHp:this.match.fullHpOf(`player`,t),upgrades:this.shown.crew.player[t]>0?this.cards.upgradeIcons(`player`,t):[],charged:this.match.state.ships.player.charged===t,sulking:this.match.isDepressed(`player`,t)})),this.phase.kind===`aim`||this.phase.kind===`move`?this.match.state.selected:null)}shipStatus(e){let t=this.match.state.ships[e],{ship:n}=this.config;return{model:n.model,deckHeight:n.deckHeight,hp:this.shown.ship[e],maxHp:n.hp,masts:n.masts.map((e,r)=>({name:ub[r]??`mast`,x:e.x,bottom:e.bottom,top:t.masts[r]?.top??e.top,fullTop:e.top,hp:t.masts[r]?.hp??n.mastHp,maxHp:n.mastHp})),sailing:this.shown.sail[e],sailHoles:Ps(this.config,t),guns:t.crew.map((t,n)=>({x:Hn(this.config,n).x,gunner:this.match.unitOf(e,n).name,cannon:this.match.cannonOf(e,n).name,hp:this.shown.crew[e][n],maxHp:this.match.fullHpOf(e,n)})),holes:[...this.holes[e]]}}applyWind(){let e=this.match.state.wind;this.world.setWind(e.angle,e.speed),this.sfx.setWind(this.config.wind.maxKnots>0?e.speed/this.config.wind.maxKnots:0)}updateWindDial(){let e=this.match.state.wind,t=this.world.camera.getWorldDirection(this.tmp),n=Math.hypot(t.x,t.z)||1,r=t.x/n,i=t.z/n,a=Math.cos(e.angle),o=Math.sin(e.angle),s=this.lastWindTurn!==this.match.state.turn;this.lastWindTurn=this.match.state.turn,this.hud.setWind(Math.atan2(-a*i+o*r,a*r+o*i),e.speed,s&&this.match.state.turn>0)}shipAngles(){return{player:this.match.state.ships.player.angle,enemy:this.match.state.ships.enemy.angle}}showPowerUp(e){let t=$(this.match.frameOf(`enemy`).position).sub($(this.match.frameOf(`player`).position));this.world.powerUps.show(e.kind,Kc(this.config,`damage`),Kc(this.config,`split`),t)}updatePowerUp(e){let t=this.shownPowerUp,n=this.world.powerUps;if(!t||!n.visible){t&&!n.visible&&(this.shownPowerUp=null),n.update(e,null);for(let e of lb)this.labels.setMarker(`powerup-${e}`,null,``,`powerup-marker kind-${e}`,!1);return}let r=$(Gc(this.config,t,this.matchClock));n.update(e,r);let i=t.uses>0&&this.phase.kind!==`intro`&&this.phase.kind!==`result`&&this.phase.kind!==`finale`,a=Kc(this.config,t.kind);for(let e of lb){let n=i&&e===t.kind,o=r.clone().setY(r.y+a*(e===`split`?1.3:2.6)+1.5);this.labels.setMarker(`powerup-${e}`,n?o:null,n?pb[e](this.config,t.uses):``,`powerup-marker kind-${e}`,!1)}}updateMarkers(){let e=this.phase.kind===`move`||this.phase.kind===`aim`,t=G(this.match.frameOf(`enemy`),N(0,this.world.ships.enemy.topHeight+3.5,0));this.labels.setMarker(`enemy`,e?$(t):null,this.opponent.name)}crewHead(e,t){let{ship:n,crew:r}=this.config;return $(G(this.match.frameOf(e),N(Hn(this.config,t).x,n.deckHeight+r.height+.6,r.standZ)))}},$=e=>new V(e.x,e.y,e.z);function cb(e){return`Wind ${Math.round(e)} kn · ${e<4?`calm`:e<10?`a breeze`:e<15?`strong`:`a gale!`}`}var lb=[`damage`,`blast`,`split`,`meteor`],ub=[`foremast`,`mainmast`,`mizzen`],db=2,fb={pull:[`Pull back to fire: down for power, sideways to swivel · drag ANGLE to tilt`,`Click and pull back to fire: down for power, sideways to swivel · W/S or drag ANGLE to tilt`],aimPull:[`Drag to aim · pull the pouch back to fire`,`Drag the view to aim · pull the pouch back to fire`],lever:[`Pull back to fire: down for power, sideways to swivel · slide the lever to tilt`,`Click and pull back to fire: down for power, sideways to swivel · W/S or slide the lever to tilt`],fullPower:[`Pull back to fire at full power: down to raise, sideways to swivel`,`Click and pull back to fire at full power: down to raise, sideways to swivel`],tilt:[`Tilt the phone to raise or lower · pull back to fire: down for power, sideways to swivel`,`No tilt sensor here: W/S or drag ANGLE to tilt · click and pull back to fire`],target:[`Pull back to pick where it lands: down for farther, sideways to swivel · ANGLE sets the arc`,`Click and pull back to pick where it lands: down for farther, sideways to swivel · W/S or ANGLE for the arc`]},pb={damage:e=>`Damage ×${Av(e.powerUps.damageMultiplier)}`,blast:e=>`Blast ×${Av(e.powerUps.blastMultiplier)}`,split:(e,t)=>`Split +${t}`,meteor:()=>`Meteor strike`},mb={damage:e=>`DAMAGE ×${Av(e.powerUps.damageMultiplier)}!`,blast:e=>`BLAST ×${Av(e.powerUps.blastMultiplier)}!`,split:()=>`SPLIT!`,meteor:()=>`METEOR STRIKE!`};function hb(e){return e?e.surface===`water`?`Landing in the sea`:e.surface===`island`?e.rock===void 0?`Landing on the island`:`Landing on a rock`:`Landing on your own ship!`:`Flying off…`}function gb(e,t){let n=t.filter(e=>e.type===`PowerUpCollected`),r=Math.min(...n.filter(e=>e.kind===`damage`).map(e=>e.time),1/0);return e.projectiles.map((e,t)=>{if(e.kind===`meteor`)return null;if(e.blastScale>1){let r=n.find(e=>e.kind===`blast`&&e.projectile===t);return{from:r?r.time:e.launch.delay,color:ou.blast,scale:1.6}}return e.damageScale>1?{from:Math.max(e.launch.delay,r),color:ou.damage,scale:1.25}:e.parent===null?null:{from:e.launch.delay,color:ou.split,scale:1}})}var _b=3,vb=1/42,yb=class{fps=60;slow=!1;frames=[];total=0;elapsed=0;update(e){for(this.elapsed+=e,this.frames.push(e),this.total+=e;this.total>_b&&this.frames.length>1;)this.total-=this.frames.shift();this.fps=this.frames.length/Math.max(1e-6,this.total),!this.slow&&this.elapsed>=9&&this.total/this.frames.length>vb&&(this.slow=!0)}},bb=256,xb={time:.8,grips:null,brace:0,flinch:0,flail:0,limp:0,lookPitch:-.05,upright:1};function Sb(e,t,n){let{renderer:r}=e,i=r.domElement,a=r.getPixelRatio();if(i.width<bb||i.height<bb)return[];let o=document.createElement(`canvas`);o.width=o.height=bb;let s=o.getContext(`2d`,{willReadFrequently:!0});if(!s)return[];let c=new fe;c.environment=e.scene.environment,c.add(new rn(`#fff4e2`,`#56657a`,1.6));let l=new Ze(`#fff0d8`,2.4);l.position.set(2,3,4);let u=new Ze(`#cfe3ff`,1.4);u.position.set(-3,2,-2),c.add(l,u);let d=new Be(26,1,.1,30);d.position.set(.6,t*.92,3.3),d.lookAt(0,t*.8,0);let f=new y(`#000000`),p=new y(`#ffffff`),m=bb/a;r.setScissorTest(!0),r.setViewport(0,0,m,m),r.setScissor(0,0,m,m);let h=()=>(r.render(c,d),s.clearRect(0,0,bb,bb),s.drawImage(i,0,i.height-bb,bb,bb,0,0,bb,bb),s.getImageData(0,0,bb,bb).data),g=[];try{for(let e of n){let n=xt(`player`,e.outfit,t,e.style);c.add(n.root),n.root.updateMatrixWorld(!0),Yt(n,xb),n.root.updateMatrixWorld(!0),c.background=f;let r=h().slice();c.background=p;let i=h(),a=s.createImageData(bb,bb);for(let e=0;e<r.length;e+=4){let t=1-(i[e+1]-r[e+1])/255;t<=.01||(a.data[e]=Math.min(255,r[e]/t),a.data[e+1]=Math.min(255,r[e+1]/t),a.data[e+2]=Math.min(255,r[e+2]/t),a.data[e+3]=Math.round(t*255))}s.putImageData(a,0,0),g.push(o.toDataURL(`image/png`)),c.remove(n.root)}}finally{r.setScissorTest(!1),r.setViewport(0,0,e.viewportWidth,e.viewportHeight),e.render()}return g}var Cb=`ship-combat.install-tip.v1`,wb=2,Tb=`Tip: Share → Add to Home Screen to play fullscreen`,Eb=6.5,Db=5,Ob=2;function kb(e){let t=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1,n=navigator.standalone===!0||matchMedia(`(display-mode: standalone)`).matches;if(!t||n)return;let r=0;try{if(r=Number(localStorage.getItem(Cb)??0),r>=wb)return}catch{}let i=()=>{if(document.hidden||e.toastText!==null){window.setTimeout(i,1e3);return}e.toast(Tb,Db,`info`),window.setTimeout(()=>{if(e.toastText===Tb)try{localStorage.setItem(Cb,String(r+1))}catch{}},Ob*1e3)};window.setTimeout(i,Eb*1e3)}var Ab=new V,jb=class{floating=[];markers=new Map;layer;camera;constructor(e,t){this.layer=e,this.camera=t}addFloating(e,t,n,r=1.3,i=5){let a=J(`div`,{class:`world-label ${n}`,text:t});this.layer.append(a),this.floating.push({el:a,position:e.clone(),age:0,life:r,rise:i})}setMarker(e,t,n=``,r=`enemy-marker`,i=!0){let a=this.marker(e,r,i);a.visible=t!==null,t&&a.position.copy(t),a.el.textContent!==n&&(a.el.textContent=n),a.el.style.display=a.visible?``:`none`}setIconMarker(e,t,n,r){let i=this.marker(e,r,!1);i.visible=t!==null&&n.length>0,t&&i.position.copy(t);let a=n.join(`|`);i.el.dataset.icons!==a&&(i.el.dataset.icons=a,i.el.innerHTML=n.map(e=>`<span class="marker-icon">${e}</span>`).join(``)),i.el.style.display=i.visible?``:`none`}marker(e,t,n){let r=this.markers.get(e);if(!r){let i=J(`div`,{class:`world-label ${t}`});this.layer.append(i),r={el:i,position:new V,visible:!1,clamp:n},this.markers.set(e,r)}return r}clearFloating(){for(let e of this.floating)e.el.remove();this.floating.length=0}update(e,t,n){for(let r=this.floating.length-1;r>=0;r--){let i=this.floating[r];i.age+=e;let a=i.age/i.life;if(a>=1){i.el.remove(),this.floating.splice(r,1);continue}Ab.copy(i.position),Ab.y+=i.rise*(1-(1-a)*(1-a));let o=this.project(Ab,t,n);if(i.el.style.display=o?``:`none`,!o)continue;let s=a<.15?.6+a/.15*.6:1.2-Math.min(.2,(a-.15)*.6);i.el.style.transform=`translate(${Ab.x}px, ${Ab.y}px) translate(-50%, -50%) scale(${s})`,i.el.style.opacity=String(a>.7?1-(a-.7)/.3:1)}for(let e of this.markers.values()){if(!e.visible)continue;Ab.copy(e.position);let r=this.project(Ab,t,n),{x:i,y:a}=Ab;if(!r){if(!e.clamp){e.el.style.display=`none`;continue}i=t-i,a=n-24}e.el.style.display=``,e.clamp&&(i=Math.min(t-30,Math.max(30,i)),a=Math.min(n-30,Math.max(70,a))),e.el.style.transform=`translate(${i}px, ${a}px) translate(-50%, -50%)`}}project(e,t,n){e.project(this.camera);let r=e.z<1;return e.set((e.x+1)/2*t,(1-e.y)/2*n,e.z),r}},Mb=class{veil;board;body;titleEl;onClose=null;constructor(e,t,n=``){let r=J(`button`,{class:`chunky-icon-btn chunky-close`,attrs:{"aria-label":`Close`}},Y(Rg));X(r,()=>this.close()),this.titleEl=J(`div`,{class:`chunky-dialog-title chunky`,text:t}),this.body=J(`div`,{class:`chunky-dialog-body`}),this.board=J(`div`,{class:`chunky-dialog ${n}`.trim(),attrs:{role:`dialog`}},this.titleEl,r,this.body),this.veil=J(`div`,{class:`chunky-veil`},this.board),this.veil.addEventListener(`pointerdown`,e=>{e.target===this.veil&&this.close()}),e.append(this.veil)}get isOpen(){return this.veil.classList.contains(`open`)}set title(e){this.titleEl.textContent=e}open(){for(let e of this.board.getAnimations())e.cancel();this.veil.classList.add(`open`),Wh()?.whoosh(!0),Qh(this.board,0,360)}close(){this.isOpen&&($h(this.board),this.veil.classList.remove(`open`),document.activeElement?.blur?.(),this.onClose?.())}},Nb=class{options;dialog;preview;input;problem;grid;totals;save;icon=0;constructor(e,t){this.options=t,this.dialog=new Mb(e,`Profile`,`profile-dialog`),this.preview=J(`div`,{class:`profile-preview`}),this.input=J(`input`,{class:`profile-name chunky`,attrs:{type:`text`,maxlength:`30`,autocomplete:`off`,autocapitalize:`words`,spellcheck:`false`,"aria-label":`Name`}}),this.input.addEventListener(`input`,()=>this.check()),this.input.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.commit()}),this.problem=J(`div`,{class:`profile-problem`}),this.totals=J(`div`,{class:`profile-totals`}),this.grid=J(`div`,{class:`profile-icons`}),Hv.forEach((e,n)=>{let r=J(`button`,{class:`profile-icon`,attrs:{"aria-label":`Icon ${n+1}`}},Y(Bv(e),`badge`));X(r,()=>{t.sound.click(),this.icon=n,this.refreshIcon()}),this.grid.append(r)}),this.save=J(`button`,{class:`chunky-btn yellow profile-save`,text:`Save`}),X(this.save,()=>this.commit()),this.dialog.body.append(J(`div`,{class:`profile-editor`},J(`div`,{class:`profile-left`},this.preview,J(`label`,{class:`profile-label`,text:`Name`}),this.input,this.problem,this.totals,this.save),J(`div`,{class:`profile-right`},J(`div`,{class:`profile-label`,text:`Icon`}),this.grid)))}open(){let e=this.options.profile();this.icon=e.icon,this.input.value=e.name,this.totals.replaceChildren(J(`span`,{class:`profile-total`},Y(Mg,`profile-total-icon`),J(`span`,{class:`chunky`,text:String(e.trophies)})),J(`span`,{class:`profile-total`},Y(Ng,`profile-total-icon`),J(`span`,{class:`chunky`,text:String(e.coins)}))),this.refreshIcon(),this.check(),this.dialog.open()}refreshIcon(){this.preview.replaceChildren(Y(Bv(Hv[this.icon]),`badge`)),[...this.grid.children].forEach((e,t)=>e.classList.toggle(`selected`,t===this.icon))}check(){let e=ry(ny(this.input.value));return this.problem.textContent=e??``,this.save.disabled=e!==null,e}commit(){if(this.check()!==null){this.options.sound.cancel();return}this.options.sound.select(),this.options.onSave({...this.options.profile(),name:ny(this.input.value),icon:this.icon}),this.dialog.close()}},Pb={heavy:`#e8673c`,volley:`#3d8ef0`,scatter:`#3fae4a`,chain:`#c99a1e`,drill:`#8a95a3`,skip:`#1fa8a0`,cluster:`#c2417a`,human:`#e08a2e`},Fb=`#8d63d6`;function Ib(e){let t=e.map((e,t)=>({x:e,i:t})).sort((e,t)=>t.x-e.x),n=e.length===3?[`Bow`,`Midships`,`Stern`]:e.length===2?[`Bow`,`Stern`]:null,r=e.map((e,t)=>`Gun ${t+1}`);return n&&t.forEach(({i:e},t)=>r[e]=n[t]),r}function Lb(e){return e.special===`chain`?`Two balls on a chain: it rips through masts and flies on, tearing sails as it goes.`:e.special===`drill`?`A drill-tipped ball: it bores through the island in its way and comes out the other side.`:e.special===`pirate`?`Fires a pirate! He hits like a heavy ball, and landing on their deck he picks a fight with the nearest gunner.`:e.special===`cluster`?`A bomb that bursts at the top of its arc into five bomblets, raining down round the target.`:e.special===`skip`?`A flat ball that skips off the sea up to 3 times, harder with every skip: aim short and bounce it in.`:e.balls<=1?`One heavy ball that hits hard and digs deep.`:e.interval>0?`${e.balls} balls, one after another: walk them onto the target.`:`${e.balls} pellets at once in a ${e.spreadDeg}° cone: deadly up close.`}var Rb=class{element;options;deckRow;roster;count;placingBar;detail;placing=null;constructor(e,t){this.options=t;let n=J(`button`,{class:`chunky-icon-btn units-back`,attrs:{"aria-label":`Back`}},Y(Lg));X(n,()=>{t.sound.cancel(),this.close()}),this.count=J(`div`,{class:`units-count chunky`}),this.deckRow=J(`div`,{class:`units-deck`}),this.roster=J(`div`,{class:`units-roster`});let r=J(`button`,{class:`chunky-btn red units-cancel`,text:`Cancel`});X(r,()=>{t.sound.cancel(),this.setPlacing(null)}),this.placingBar=J(`div`,{class:`units-placing`},J(`span`,{class:`units-placing-text chunky`}),r),this.element=J(`div`,{class:`units-screen`},J(`div`,{class:`units-head`},n,J(`div`,{class:`units-title chunky`,text:`Units`}),this.count),J(`div`,{class:`units-body`},J(`div`,{class:`units-col`},J(`div`,{class:`units-section chunky`,text:`On deck`}),this.deckRow,this.placingBar),J(`div`,{class:`units-col`},J(`div`,{class:`units-section chunky`,text:`All units`}),this.roster))),e.append(this.element),this.detail=new Mb(e,``,`unit-dialog`)}get isOpen(){return this.element.classList.contains(`open`)}open(){this.placing=null,this.render(),this.element.classList.remove(`leaving`),this.element.classList.add(`open`);for(let e of this.element.getAnimations())e.cancel();Wh()?.whoosh(!0),Xh(this.element,`right`,0,460),[...this.deckRow.children,...this.roster.children].forEach((e,t)=>Qh(e,160+t*55,380))}close(){this.detail.close(),this.isOpen&&!this.element.classList.contains(`leaving`)&&(this.element.classList.add(`leaving`),Wh()?.whoosh(!1),Jh(Zh(this.element,`right`,0,240)).then(()=>{this.element.classList.contains(`leaving`)&&this.element.classList.remove(`open`,`leaving`)}))}setPlacing(e){this.placing=e,this.render()}render(){let e=this.options.units(),t=this.options.lineup(),n=new Map(e.map(e=>[e.id,e]));this.count.textContent=`${e.length} unit${e.length===1?``:`s`}`,this.element.classList.toggle(`placing`,this.placing!==null);let r=this.placing?n.get(this.placing):void 0;this.placingBar.querySelector(`.units-placing-text`).textContent=r?`Tap a spot for ${r.name}`:``,this.deckRow.replaceChildren(...this.options.spots.map((e,r)=>{let i=n.get(t[r]??``),a=J(`button`,{class:`deck-slot`},J(`div`,{class:`deck-spot chunky`,text:e}),i?Bb(i):J(`div`,{class:`unit-card empty`}));return X(a,()=>{if(this.placing){let e=[...t],n=e.indexOf(this.placing);n>=0&&(e[n]=e[r]),e[r]=this.placing,this.options.sound.select(),this.options.onLineupChange(e),this.setPlacing(null)}else i&&(this.options.sound.click(),this.showDetail(i,r))}),a})),this.roster.replaceChildren(...e.map(e=>{let n=t.indexOf(e.id),r=Bb(e);n>=0&&r.append(J(`div`,{class:`unit-tag chunky`,text:`On deck`}));let i=J(`button`,{class:`roster-slot`},r);return X(i,()=>{this.options.sound.click(),this.showDetail(e,n)}),i}))}showDetail(e,t){let n=Pb[e.cannonId]??Fb,r=(e,t)=>J(`tr`,{},J(`th`,{text:e}),J(`td`,{class:`chunky`,text:t})),i;t>=0?i=J(`div`,{class:`unit-status chunky`,text:`On deck · ${this.options.spots[t]}`}):(i=J(`button`,{class:`chunky-btn yellow`,text:`Put on deck`}),X(i,()=>{this.options.sound.select(),this.detail.close(),this.setPlacing(e.id)})),this.detail.title=e.name,this.detail.body.replaceChildren(J(`div`,{class:`unit-detail`},J(`div`,{class:`unit-detail-art`,attrs:{style:`--unit: ${n}`}},zb(e)),J(`div`,{class:`unit-detail-info`},J(`div`,{class:`unit-detail-cannon`},Y(Ev[e.cannonId]??Ev.heavy,`unit-detail-icon`),J(`span`,{text:e.cannonName})),J(`div`,{class:`unit-detail-blurb`,text:Lb(e)}),J(`table`,{class:`unit-stats`},r(`Health`,`${Av(e.hp)} HP`),r(`Balls per shot`,String(e.balls)),r(`Damage per ball`,Av(e.damage)),r(`Crew splash`,`${Av(e.splash)} m`),r(`Spread`,e.spreadDeg>0?`${Av(e.spreadDeg)}°`:`None`)),i))),this.detail.open()}};function zb(e){return e.portrait?J(`img`,{class:`unit-portrait`,attrs:{src:e.portrait,alt:e.name,draggable:`false`}}):J(`div`,{class:`unit-portrait fallback`},Y(Ev[e.cannonId]??Ev.heavy))}function Bb(e){return J(`div`,{class:`unit-card`,attrs:{style:`--unit: ${Pb[e.cannonId]??Fb}`}},zb(e),J(`div`,{class:`unit-cannon`},Y(Ev[e.cannonId]??Ev.heavy)),J(`div`,{class:`unit-name chunky`,text:e.name}))}var Vb=class{element;options;icon;name;trophies;coins;trophyBox;coinBox;topLeft;topRight;tiles;play;celebration=null;unitArt;units;profileEditor;shipDialog;constructor(e,t){this.options=t;let{sound:n}=t;this.icon=J(`div`,{class:`lobby-icon`}),this.name=J(`div`,{class:`lobby-name chunky`});let r=J(`button`,{class:`lobby-profile`,attrs:{"aria-label":`Edit profile`}},J(`div`,{class:`lobby-icon-frame`},this.icon,J(`div`,{class:`lobby-edit`},Y(zg))),this.name);X(r,()=>{n.click(),this.profileEditor.open()}),this.trophies=J(`span`,{class:`lobby-count gold chunky`});let i=J(`div`,{class:`lobby-trophies`},Y(Mg,`lobby-trophy`),this.trophies);this.trophyBox=i,this.coins=J(`span`,{class:`lobby-count chunky`});let a=J(`div`,{class:`lobby-coins`},Y(Ng,`lobby-coin`),this.coins);this.coinBox=a;let o=J(`button`,{class:`chunky-icon-btn lobby-settings`,attrs:{"aria-label":`Settings`}},Y(Pg));X(o,()=>{n.click(),t.onSettings()}),this.unitArt=J(`div`,{class:`lobby-tile-art units`});let s=J(`button`,{class:`lobby-tile`},this.unitArt,J(`div`,{class:`lobby-tile-label chunky`,text:`Units`}));X(s,()=>{n.click(),this.units.open()});let c=J(`button`,{class:`lobby-tile`},J(`div`,{class:`lobby-tile-art ship`},Y(Fg)),J(`div`,{class:`lobby-tile-label chunky`,text:`Ship`}));X(c,()=>{n.click(),this.shipDialog.open()});let l=J(`button`,{class:`chunky-btn yellow lobby-play`},J(`span`,{class:`lobby-play-text`,text:`Play`}));X(l,()=>{n.select(),t.onPlay(ug(l))}),this.play=l,this.tiles=[s,c],this.topLeft=J(`div`,{class:`lobby-top-left`},r,i),this.topRight=J(`div`,{class:`lobby-top-right`},a,o),this.element=J(`div`,{class:`lobby`},J(`div`,{class:`lobby-shade top`}),J(`div`,{class:`lobby-shade bottom`}),this.topLeft,this.topRight,J(`div`,{class:`lobby-side`},s,c),l),e.append(this.element),this.units=new Rb(e,{units:t.units,spots:t.spots,lineup:()=>t.profile().lineup,onLineupChange:e=>t.onProfileChange({...t.profile(),lineup:e}),sound:n}),this.profileEditor=new Nb(e,{profile:t.profile,onSave:e=>{t.onProfileChange(e),this.refresh()},sound:n}),this.shipDialog=new Mb(e,`Ship`,`ship-dialog`);let u=J(`button`,{class:`chunky-btn yellow`,text:`OK`});X(u,()=>{n.click(),this.shipDialog.close()}),this.shipDialog.body.append(J(`div`,{class:`ship-soon`},Y(Fg,`ship-soon-art`),J(`div`,{class:`ship-soon-title chunky`,text:`Coming soon!`})),J(`div`,{class:`ship-soon-text`,text:`Upgrade your hull, sails and guns.`}),u)}get isOpen(){return this.element.classList.contains(`open`)}show(){if(this.isOpen&&!this.element.classList.contains(`leaving`))return;this.element.classList.remove(`leaving`),this.refresh(),this.element.classList.add(`open`);for(let e of[this.topLeft,this.topRight,...this.tiles,this.play])for(let t of e.getAnimations())t.cancel();Wh()?.whoosh(!0),Xh(this.topLeft,`top`),Xh(this.topRight,`top`,60),this.tiles.forEach((e,t)=>Xh(e,`left`,90+t*70)),Xh(this.play,`right`,140,480);let e=this.celebration;this.celebration=null,e&&window.setTimeout(()=>this.celebrate(e),520)}hide(){this.units.close(),this.isOpen&&!this.element.classList.contains(`leaving`)&&(this.element.classList.add(`leaving`),Wh()?.whoosh(!1),Zh(this.topLeft,`top`),Zh(this.topRight,`top`),this.tiles.forEach(e=>Zh(e,`left`)),Jh(Zh(this.play,`right`)).then(()=>{this.element.classList.contains(`leaving`)&&this.element.classList.remove(`open`,`leaving`)}))}queueCelebration(e,t){let n=this.celebration??={trophies:0,coins:0};n.trophies+=e,n.coins+=t}celebrate({trophies:e,coins:t}){if(!this.isOpen)return;let n=this.options.profile(),r={x:innerWidth/2,y:innerHeight*.55},i=(e,t,n,i,a,o,s)=>{if(n===0)return;if(t.textContent=String(i-n),n<0){window.setTimeout(()=>{e.classList.add(`drain`),tg(e,9),Gh([20,40,20]),rg(t,i-n,i,700).then(()=>{e.classList.remove(`drain`),Wh()?.rewardDone(!1)})},s);return}let c=Math.min(10,Math.max(3,Math.round(n/4))),l=i-n;window.setTimeout(()=>{cg(r,e.querySelector(`svg`)??e,a,c,r=>{l=r===c-1?i:Math.round(i-n+n*(r+1)/c),t.textContent=String(l),ng(e,1.12),Wh()?.clink(r,o),Gh(6)}).then(()=>{Wh()?.rewardDone(!0),ng(t,1.4)})},s)};i(this.trophyBox,this.trophies,e,n.trophies,Mg,!0,0),i(this.coinBox,this.coins,t,n.coins,Ng,!1,e>0?450:0)}refresh(){let e=this.options.profile();this.icon.replaceChildren(Y(Bv(iy(e)),`badge`)),this.name.textContent=e.name,this.trophies.textContent=String(e.trophies),this.coins.textContent=String(e.coins);let t=new Map(this.options.units().map(e=>[e.id,e])),n=e.lineup.map(e=>t.get(e)).filter(e=>e?.portrait);this.unitArt.replaceChildren(...n.map((e,t)=>J(`img`,{class:`lobby-face face-${t}`,attrs:{src:e.portrait,alt:``,draggable:`false`}})))}},Hb=700,Ub=class{element;clock;status;statusText;trophies;cancelButton;timers=[];tick=0;onCancel=null;origin=null;wheel;constructor(e,t){this.clock=J(`div`,{class:`search-clock chunky`}),this.statusText=J(`span`),this.status=J(`div`,{class:`search-status chunky`},this.statusText,J(`span`,{class:`search-dots`},J(`i`,{text:`.`}),J(`i`,{text:`.`}),J(`i`,{text:`.`}))),this.trophies=J(`div`,{class:`search-trophies`}),this.cancelButton=J(`button`,{class:`chunky-btn red search-cancel`,text:`Cancel`}),X(this.cancelButton,()=>{t.cancel();let e=this.onCancel;this.onCancel=null,this.clearTimers(),Wh()?.whoosh(!1),this.element.classList.add(`closing`),Jh(lg(this.element,this.origin,!1,320)).then(()=>{this.stop(),e?.()})}),this.wheel=J(`div`,{class:`search-wheel`},Y(Ig)),this.element=J(`div`,{class:`search-screen`},this.wheel,this.status,this.clock,this.trophies,this.cancelButton),e.append(this.element)}get searching(){return this.element.classList.contains(`open`)}start(e,t,n,r,i=null){this.stop(),this.onCancel=r,this.origin=i,this.statusText.textContent=`Searching for an opponent`,this.trophies.replaceChildren(Y(Mg,`search-trophy`),J(`span`,{class:`chunky`,text:String(t)})),this.cancelButton.disabled=!1,this.element.className=`search-screen open`,Wh()?.whoosh(!0),lg(this.element,i,!0,460),Qh(this.wheel,200,460),eg(this.status,330,!1),Qh(this.cancelButton,450,380);let a=performance.now(),o=()=>{let e=Math.floor((performance.now()-a)/1e3);this.clock.textContent=`${Math.floor(e/60)}:${String(e%60).padStart(2,`0`)}`};o(),this.tick=window.setInterval(o,250),this.timers.push(window.setTimeout(()=>{window.clearInterval(this.tick),this.onCancel=null,this.cancelButton.disabled=!0,this.statusText.textContent=`Opponent found!`,this.element.classList.add(`found`),eg(this.status),tg(this.element,12,170),Gh([30,30,60]),this.timers.push(window.setTimeout(n,Hb))},Math.max(0,e)*1e3))}stop(){this.clearTimers(),this.onCancel=null;for(let e of this.element.getAnimations())e.cancel();this.element.className=`search-screen`}clearTimers(){for(let e of this.timers)window.clearTimeout(e);this.timers=[],window.clearInterval(this.tick)}},Wb=`M13 · 6084d06`,Gb=new URLSearchParams(location.search).has(`debug`),Kb=Gb?await f(()=>import(`./tuningPanel-fVFkHRCk.js`),__vite__mapDeps([0,1]),import.meta.url):null;i(),dx();var qb=new Zm(g,document.getElementById(`app`)),Jb=new iu(qb.canvas),Yb=P_(),Xb=new Dn(Yb.sound);Kh(Xb);var Zb=new yb,Qb=!1,$b=uy(Pn(g),g.gunners.length);function ex(e){$b=e,dy(e)}var tx=null,nx=new Ov({input:Jb,settings:Yb,buildLabel:Wb,onSettingsChange:e=>{Yb=e,F_(e),Xb.setEnabled(e.sound),fx(e),e.firing===`sling`&&e.slingStyle===`tilt`&&Jb.tilt.request(),tx&&(tx.settings=e)},onRestart:e=>{e===`rebuild`&&(dx()&&nx.toast(`Ships moved out to ${Math.round(g.arena.orbitRadius*2)} m apart to clear the island`,2.6,`info`),qb.rebuildArena()),tx?.inMenu?tx.showMenu():tx?.newMatch({newOpponent:!1})},onPlayAgain:()=>ux(),onExit:()=>lx(),matchInfo:()=>({inMatch:!(!tx||tx.inMenu),leaveCost:tx&&!tx.matchDecided?Math.min($b.trophies,g.rewards.trophiesPerLoss):0}),onLeaveMatch:()=>{let e=tx?.leaveMatch();lx(),e&&e.trophies<0&&nx.toast(`You left the match: −${-e.trophies} trophies`,2.6,`info`)},onPause:e=>tx?.setPaused(e)}),rx=new jb(nx.labels,qb.camera);tx=new sb({config:g,world:qb,input:Jb,hud:nx,labels:rx,settings:Yb,sfx:Xb,build:Wb,profile:()=>$b,recordMatch:e=>{let t=ay($b,e,g.rewards);return ex(oy($b,t)),sx.queueCelebration(t.trophies,t.coins),t},onMatchStart:()=>{sx.hide(),cx.stop()}});var ix=null;function ax(){let e=Pn(g);return ix??=Sb(qb,g.crew.height,e.map(Nu)),e.map((e,t)=>{let n=g.units[e],r=g.cannons[n.cannon];return{id:e,name:n.name,cannonId:n.cannon,cannonName:r.name,balls:r.balls,interval:r.interval,damage:r.damage,splash:r.splashRadius,spreadDeg:r.coneDeg,special:pu(r),hp:g.crew.hp,portrait:ix[t]??``}})}var ox={click:()=>Xb.click(),select:()=>Xb.select(),cancel:()=>Xb.cancel()},sx=new Vb(document.body,{profile:()=>$b,onProfileChange:e=>{ex(e),sx.refresh(),tx?.showLineup()},units:ax,spots:Ib(g.gunners.map(e=>e.x)),onPlay:e=>ux(e),onSettings:()=>nx.openSettings(),sound:ox}),cx=new Ub(document.body,ox);function lx(){cx.stop(),tx.inMenu||tx.showMenu(),sx.show()}function ux(e=null){tx.inMenu||tx.showMenu(),sx.hide();let{min:t,max:n}=g.presentation.searchTime,r=Math.min(t,n)+Math.random()*Math.abs(n-t);cx.start(r,$b.trophies,()=>tx.newMatch({newOpponent:!0}),()=>sx.show(),e)}function dx(){let e=Nn(g.arena);return g.arena.orbitRadius>=e?!1:(g.arena.orbitRadius=Math.ceil(e),c(),!0)}function fx(e){let t=e.graphics===`auto`?Qb?`low`:`high`:e.graphics;qb.setQuality(t),nx.settingsPanel.setQualityNote(e.graphics===`auto`?`Auto is using ${t===`high`?`High`:`Low`} on this device.`:``)}fx(Yb);var px=()=>{qb.resize(),nx.resize(qb.viewportWidth,qb.viewportHeight)};window.addEventListener(`resize`,px),window.visualViewport?.addEventListener(`resize`,px),px(),tx.showMenu(),sx.show(),kb(nx);var mx=Gb?gx():null,hx=performance.now();qb.renderer.setAnimationLoop(e=>{let t=Math.max(0,(e-hx)/1e3);hx=e,!document.hidden&&t<.5&&Zb.update(t),Zb.slow&&Yb.graphics===`auto`&&!Qb&&(Qb=!0,fx(Yb),nx.toast(`Switched to Low graphics for a smoother game`,2.5,`info`)),tx.update(Math.min(.05,t),e/1e3),mx?.(Zb.fps)}),Kb?.mountTuningPanel(g,tx,()=>qb.rebuildArena()),Object.assign(window,{game:tx,menu:sx,search:cx});function gx(){let e=document.createElement(`div`);e.style.cssText=`position:fixed;left:max(8px,env(safe-area-inset-left));bottom:4px;z-index:60;font:600 10px system-ui;color:#fff;background:rgb(0 0 0/45%);padding:2px 6px;border-radius:6px;pointer-events:none`,document.body.appendChild(e);let t=0;return n=>{if(performance.now()-t<500)return;t=performance.now();let r=qb.renderer.info.render;e.textContent=`${n.toFixed(0)} fps · ${r.calls} calls · ${(r.triangles/1e3).toFixed(0)}k tris · ${qb.currentQuality}`}}