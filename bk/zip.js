(function(){
var P='https://cdn.shopify.com/s/files/1/0764/1658/1975/files/';
var T=new Uint32Array(256);for(var n=0;n<256;n++){var c=n;for(var k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;T[n]=c>>>0;}
function crc(u){var c=0xFFFFFFFF;for(var i=0;i<u.length;i++)c=T[(c^u[i])&0xFF]^(c>>>8);return (c^0xFFFFFFFF)>>>0;}
var enc=new TextEncoder();
window.__bk={done:0,total:0,fail:[],ready:false};
async function run(){
  var list=await (await fetch('https://ussess-eyewear.github.io/bk/imglist.json?'+Date.now())).json();
  var jobs=[];Object.keys(list).forEach(function(h){list[h].forEach(function(f,i){var base=f.split('/').pop();jobs.push({url:/^https?:/.test(f)?f:P+f,name:'immagini/'+h+'/'+String(i+1).padStart(2,'0')+'-'+base});});});
  __bk.total=jobs.length;var files=[];var q=jobs.slice();
  async function worker(){while(q.length){var j=q.shift();try{var r=await fetch(j.url);if(!r.ok)throw r.status;var u=new Uint8Array(await r.arrayBuffer());files.push({name:j.name,data:u,crc:crc(u)});}catch(e){__bk.fail.push(j.url);}__bk.done++;}}
  await Promise.all([worker(),worker(),worker(),worker(),worker(),worker()]);
  var parts=[],cd=[],off=0;
  files.forEach(function(f){var nm=enc.encode(f.name);var h=new DataView(new ArrayBuffer(30));
    h.setUint32(0,0x04034b50,true);h.setUint16(4,20,true);h.setUint16(6,0x0800,true);h.setUint16(8,0,true);h.setUint32(14,f.crc,true);h.setUint32(18,f.data.length,true);h.setUint32(22,f.data.length,true);h.setUint16(26,nm.length,true);
    parts.push(h.buffer,nm,f.data);
    var c=new DataView(new ArrayBuffer(46));c.setUint32(0,0x02014b50,true);c.setUint16(4,20,true);c.setUint16(6,20,true);c.setUint16(8,0x0800,true);c.setUint32(16,f.crc,true);c.setUint32(20,f.data.length,true);c.setUint32(24,f.data.length,true);c.setUint16(28,nm.length,true);c.setUint32(42,off,true);
    cd.push(c.buffer,nm);off+=30+nm.length+f.data.length;});
  var cdsize=cd.reduce(function(s,b){return s+(b.byteLength||b.length);},0);
  var e=new DataView(new ArrayBuffer(22));e.setUint32(0,0x06054b50,true);e.setUint16(8,files.length,true);e.setUint16(10,files.length,true);e.setUint32(12,cdsize,true);e.setUint32(16,off,true);
  var blob=new Blob(parts.concat(cd,[e.buffer]),{type:'application/zip'});
  __bk.size=blob.size;__bk.count=files.length;
  var b=document.createElement('button');b.id='bkbtn';b.textContent='SCARICA ZIP ('+files.length+' immagini, '+Math.round(blob.size/1048576)+' MB)';
  b.style.cssText='position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:99999;font:700 28px sans-serif;background:#111;color:#fff;border:0;cursor:pointer';
  b.onclick=function(){var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='USSESS-shopify-immagini-prodotti.zip';document.body.appendChild(a);a.click();};
  document.body.appendChild(b);__bk.ready=true;
}
run();
})();
