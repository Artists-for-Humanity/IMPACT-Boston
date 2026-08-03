'use client';

interface ScriptEmbedProps {
  scriptSrc: string;
}

export default function ScriptEmbed({ scriptSrc }: ScriptEmbedProps) {
  const trimmed = scriptSrc.trim();

  // If a raw <iframe> tag is pasted, render it directly
  if (trimmed.startsWith('<iframe')) {
    return (
      <div
        className="w-full h-full"
        dangerouslySetInnerHTML={{ __html: trimmed }}
      />
    );
  }

  // Extract src from a pasted <script> tag, or use the value as-is if it's a plain URL
  const rawSrc = trimmed.startsWith('<script')
    ? (trimmed.match(/src=["']([^"']+)["']/)?.[1] ?? '')
    : trimmed;

  if (!rawSrc) return null;

  // Strip autoplay param without re-encoding the URL (URL constructor would encode
  // characters like colons in query values, breaking some player URLs)
  const embedSrc = rawSrc
    .replace(/&autoplay=[^&#]*/i, '')       // mid or trailing param
    .replace(/\?autoplay=[^&#]*&/i, '?')   // first param, more follow
    .replace(/\?autoplay=[^&#]*/i, '');    // sole param

  // The portable player script (e.g. NBC Boston) uses document.write() to inject a
  // cross-origin <iframe> into this srcdoc. We cannot style its internal DOM, but we
  // CAN transform the <iframe> element itself. We scale it up so its 16:9 content
  // always fills the full container height (object-fit:cover-like behaviour).
  const srcdoc = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>*{margin:0;padding:0}html{width:100%;height:100%;overflow:hidden}body{position:relative;width:100%;height:100%;overflow:hidden;background:#000}.afs_ads{display:none!important}.player,.player--no-touch{position:relative!important}.video-playlist__placeholder--title-container{position:absolute!important;inset:0!important;display:flex!important;align-items:center!important;justify-content:center!important;flex-direction:column!important}.player__play-button--large{position:static!important;display:block!important;margin:0 auto!important;transform:none!important}.video-playlist__placeholder--title,.video-playlist__placeholder--duration{display:none!important}</style></head><body><script type="text/javascript" charset="UTF-8" src="${embedSrc}"><\/script><script>(function(){var vh=window.innerHeight;function fit(el){if(!el||el.tagName!=='IFRAME')return;el.removeAttribute('width');el.removeAttribute('height');el.style.setProperty('display','block','important');el.style.setProperty('border','none','important');el.style.setProperty('position','absolute','important');el.style.setProperty('top','0','important');el.style.setProperty('left','0','important');el.style.setProperty('width','100%','important');el.style.setProperty('max-width','none','important');requestAnimationFrame(function(){var vw=window.innerWidth;var w=el.offsetWidth||vw;var naturalH=w*9/16;if(naturalH<=0)return;el.style.setProperty('height',naturalH+'px','important');if(naturalH<vh){var s=vh/naturalH;el.style.setProperty('left','0','important');el.style.setProperty('top','0','important');el.style.setProperty('transform-origin','top left','important');el.style.setProperty('transform','scale('+s+')','important');}else{el.style.setProperty('left','0','important');el.style.setProperty('top',((vh-naturalH)/2)+'px','important');el.style.removeProperty('transform');}});}function fixAll(){document.querySelectorAll('iframe').forEach(fit);}new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType!==1)return;if(n.tagName==='IFRAME')fit(n);else if(n.querySelectorAll)n.querySelectorAll('iframe').forEach(fit);});});}).observe(document.documentElement,{childList:true,subtree:true});window.addEventListener('resize',fixAll);function hideInDoc(doc){try{doc.querySelectorAll('.video-playlist__placeholder--title,.video-playlist__placeholder--duration').forEach(function(el){el.style.setProperty('display','none','important');});}catch(e){}}function hideAll(){hideInDoc(document);document.querySelectorAll('iframe').forEach(function(f){try{if(f.contentDocument)hideInDoc(f.contentDocument);}catch(e){}});}new MutationObserver(function(){hideAll();}).observe(document.documentElement,{childList:true,subtree:true});var c=0,t=setInterval(function(){fixAll();hideAll();if(++c>30)clearInterval(t);},200);fixAll();hideAll();})()</script></body></html>`;

  return (
    <iframe
      srcDoc={srcdoc}
      className="absolute inset-0 w-full h-full"
      style={{ border: 'none' }}
      scrolling="no"
      allowFullScreen
    />
  );
}
