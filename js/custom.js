document.addEventListener("DOMContentLoaded",(()=>{const e=e=>{const t=()=>btf.snackbarShow(GLOBAL_CONFIG.copy.success),n=()=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const n=document.createElement("p");navigator.userAgent.includes("Firefox")?n.textContent=e:n.innerText=e,document.body.appendChild(n);const o=getSelection();o.removeAllRanges();const c=document.createRange();c.selectNodeContents(n),o.addRange(c),document.execCommand("copy"),document.body.removeChild(n),o.removeAllRanges(),t()}else btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport)},o=navigator.clipboard;o?o.writeText(e).then(t).catch(n):n()};document.getElementById("rightside").addEventListener("click",(t=>{const n=t.target.id?t.target:t.target.parentNode;"share-link"===n?.id&&e((()=>{const e=location.protocol+"//"+location.host+location.pathname;return`${document.title}：\r\n${e}`})())}))}));