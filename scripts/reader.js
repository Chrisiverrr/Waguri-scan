const id = new URLSearchParams(location.search).get('id');
const ch = +new URLSearchParams(location.search).get('c') || 1;
const totalPages = 12; // stub value

let page = 1;
const img = document.getElementById('pageImg');
const info = document.getElementById('pageInfo');
const prev = document.getElementById('prevZone');
const next = document.getElementById('nextZone');

function loadPage(){
  img.src = `images/chapters/${id}/${ch}/${page}.jpg`;
  info.textContent = `${page} / ${totalPages}`;
  document.title = `Ch ${ch} P ${page} – Waguri Scan`;
}
loadPage();

prev.onclick = ()=>{ if(page>1){page--;loadPage()} };
next.onclick = ()=>{ if(page<totalPages){page++;loadPage()} };
