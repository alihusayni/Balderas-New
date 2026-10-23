/**
 * "This website and domain are for sale" popup (server component, NO client JS bundle).
 * Emits one tiny inline script that, ~3s after load, appends a compact card — centered on desktop, a full-width bottom bar on phones (<=640px) — non-modal,
 * no backdrop, position:fixed, so zero layout shift and the page behind stays usable). Dismissible; remembered for 7 days in localStorage.
 * Usage: <ForSalePopup phone="(404) 620-4774" tel="+14046204774" />  — drop it once in the root layout.
 */
export default function ForSalePopup({ phone, tel }: { phone: string; tel: string }) {
  const cfg = JSON.stringify({ phone, tel }).replace(/</g, "\\u003c");
  const code = `(function(){var c=${cfg},K="tol-for-sale-dismissed";
try{var a=+localStorage.getItem(K)||0;if(a&&Date.now()-a<6048e5)return}catch(e){}
setTimeout(function(){
if(document.getElementById("tol-for-sale"))return;
var d=document.createElement("div");d.id="tol-for-sale";d.setAttribute("role","dialog");d.setAttribute("aria-label","This website is for sale");
d.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:min(92vw,380px);box-sizing:border-box;text-align:center;z-index:2147483000;background:#0E1526;color:#fff;border:1px solid #334155;border-radius:14px;padding:26px 22px 22px;font:16px/1.45 Arial,Helvetica,sans-serif";
var x=document.createElement("button");x.type="button";x.setAttribute("aria-label","Close");x.textContent="\\u00d7";
x.style.cssText="position:absolute;top:2px;right:4px;width:44px;height:44px;background:transparent;border:0;color:#cbd5e1;font-size:24px;cursor:pointer";
function close(){try{localStorage.setItem(K,String(Date.now()))}catch(e){}d.remove();document.removeEventListener("keydown",esc)}
function esc(e){if(e.key==="Escape")close()}
x.onclick=close;document.addEventListener("keydown",esc);
var t=document.createElement("p");t.textContent="This website and domain are for sale.";t.style.cssText="margin:0;font-weight:700;font-size:20px";
var s=document.createElement("p");s.textContent="Interested? Call or text:";s.style.cssText="margin:8px 0 0;color:#cbd5e1";
var l=document.createElement("a");l.href="tel:"+c.tel;l.textContent=c.phone;
l.style.cssText="display:inline-block;margin-top:10px;background:#10B981;color:#052e1f;font-weight:800;font-size:18px;padding:10px 16px;border-radius:8px;text-decoration:none";
var st=document.createElement("style");st.textContent="@media(max-width:640px){#tol-for-sale{top:auto!important;bottom:0!important;left:0!important;right:0!important;transform:none!important;width:100%!important;max-width:none!important;border-width:1px 0 0 0!important;border-radius:14px 14px 0 0!important;padding:12px 52px calc(12px + env(safe-area-inset-bottom)) 16px!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:12px!important;text-align:left!important}#tol-for-sale p{margin:0!important;font-size:15px!important}#tol-for-sale p+p{display:none!important}#tol-for-sale a{margin:0!important;flex:none!important;font-size:16px!important;padding:10px 14px!important}#tol-for-sale button{top:50%!important;right:2px!important;margin-top:-22px!important}}";
d.appendChild(st);d.appendChild(x);d.appendChild(t);d.appendChild(s);d.appendChild(l);document.body.appendChild(d);
var mq=matchMedia("(max-width:640px)");
function adj(){var off=0;if(mq.matches){var els=document.body.querySelectorAll("div,aside,section,footer");for(var i=0;i<els.length;i++){var e=els[i];if(e===d||d.contains(e))continue;var cs=getComputedStyle(e);if(cs.position!=="fixed"||cs.display==="none"||cs.visibility==="hidden")continue;var r=e.getBoundingClientRect();if(r.height>0&&r.width>=innerWidth*0.9&&Math.abs(r.bottom-innerHeight)<3&&r.top>innerHeight*0.4)off=Math.max(off,r.height)}}
if(mq.matches)d.style.setProperty("bottom",off+"px","important");else d.style.removeProperty("bottom")}
adj();var iv=setInterval(function(){if(!document.body.contains(d))return clearInterval(iv);adj()},700)},3000)})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
