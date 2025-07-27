const mockManga = [
  {id:1, title:"Waguri Zero", cover:"images/covers/wg-zero.jpg", latest:12},
  {id:2, title:"Phil Blade", cover:"images/covers/phil.jpg", latest:8},
  {id:3, title:"Krystal Quest", cover:"images/covers/krystal.jpg", latest:15}
];

const catalog = document.getElementById('catalog');
const search = document.getElementById('search');

function render(list){
  catalog.innerHTML='';
  list.forEach(m=>{
    catalog.insertAdjacentHTML('beforeend',`
      <div class="card" onclick="location.href='chapter.html?id=${m.id}&c=${m.latest}'">
        <img src="${m.cover}" alt="${m.title}">
        <h3>${m.title}</h3>
      </div>
    `);
  });
}
render(mockManga);

search.addEventListener('input', e=>{
  const q=e.target.value.toLowerCase();
  render(mockManga.filter(m=>m.title.toLowerCase().includes(q)));
});
