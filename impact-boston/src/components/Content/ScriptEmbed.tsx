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
  const embedSrc = trimmed.startsWith('<script')
    ? (trimmed.match(/src=["']([^"']+)["']/)?.[1] ?? '')
    : trimmed;

  if (!embedSrc) return null;

  // The portable player script (e.g. NBC Boston) uses document.write() to inject a
  // cross-origin <iframe> into this srcdoc. We cannot style its internal DOM, but we
  // CAN transform the <iframe> element itself. We scale it up so its 16:9 content
  // always fills the full container height (object-fit:cover-like behaviour).
  const srcdoc = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>*{margin:0;padding:0}html{width:100%;height:100%;overflow:hidden}body{position:relative;width:100%;height:100%;overflow:hidden;background:#000}.afs_ads{display:none!important}</style></head><body><script type="text/javascript" charset="UTF-8" src="${embedSrc}"><\/script><script>(function(){var vh=window.innerHeight;function fit(el){if(!el||el.tagName!=='IFRAME')return;el.removeAttribute('width');el.removeAttribute('height');el.style.setProperty('display','block','important');el.style.setProperty('border','none','important');el.style.setProperty('position','absolute','important');el.style.setProperty('top','0','important');el.style.setProperty('left','0','important');el.style.setProperty('width','100%','important');el.style.setProperty('max-width','none','important');requestAnimationFrame(function(){var w=el.offsetWidth||window.innerWidth;var naturalH=w*9/16;if(naturalH<=0)return;el.style.setProperty('height',naturalH+'px','important');if(naturalH<vh){var s=vh/naturalH;el.style.setProperty('transform-origin','top center','important');el.style.setProperty('transform','scale('+s+')','important');}else{el.style.removeProperty('transform');}});}function fixAll(){document.querySelectorAll('iframe').forEach(fit);}new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType!==1)return;if(n.tagName==='IFRAME')fit(n);else if(n.querySelectorAll)n.querySelectorAll('iframe').forEach(fit);});});}).observe(document.documentElement,{childList:true,subtree:true});window.addEventListener('resize',fixAll);var c=0,t=setInterval(function(){fixAll();if(++c>30)clearInterval(t);},200);fixAll();})()</script></body></html>`;

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
