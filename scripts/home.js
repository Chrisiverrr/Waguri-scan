const manhwas = [
  {id:1,title:"Solo Leveling",cover:"https://avt.mkklcdnv6temp.com/4/e/16-1583499848.jpg",latest:179},
  {id:2,title:"Return of the Disaster-Class Hero",cover:"https://avt.mkklcdnv6temp.com/18/b/15-1583499616.jpg",latest:67},
  {id:3,title:"Tomb Raider King",cover:"https://avt.mkklcdnv6temp.com/22/b/15-1583499617.jpg",latest:328},
  {id:4,title:"The Legend of the Northern Blade",cover:"https://avt.mkklcdnv6temp.com/33/c/15-1583499627.jpg",latest:136},
  {id:5,title:"Eleceed",cover:"https://avt.mkklcdnv6temp.com/39/f/16-1583499849.jpg",latest:278},
  {id:6,title:"Return of the Blossoming Blade",cover:"https://avt.mkklcdnv6temp.com/26/c/15-1583499620.jpg",latest:110},
  {id:7,title:"A Returner’s Magic Should Be Special",cover:"https://avt.mkklcdnv6temp.com/25/c/15-1583499619.jpg",latest:247},
  {id:8,title:"The Breaker",cover:"https://avt.mkklcdnv6temp.com/1/b/15-1583499601.jpg",latest:10},
  {id:9,title:"The Breaker: New Waves",cover:"https://avt.mkklcdnv6temp.com/2/b/15-1583499602.jpg",latest:20},
  {id:10,title:"Tower of God",cover:"https://avt.mkklcdnv6temp.com/3/b/15-1583499603.jpg",latest:613},
  {id:11,title:"Who Made Me a Princess",cover:"https://avt.mkklcdnv6temp.com/19/f/15-1583499617.jpg",latest:125},
  {id:12,title:"Villains Are Destined to Die",cover:"https://avt.mkklcdnv6temp.com/37/f/16-1583499848.jpg",latest:93},
  {id:13,title:"See You in My 19th Life",cover:"https://avt.mkklcdnv6temp.com/31/c/15-1583499625.jpg",latest:104},
  {id:14,title:"A Stepmother’s Märchen",cover:"https://avt.mkklcdnv6temp.com/27/c/15-1583499621.jpg",latest:132},
  {id:15,title:"Marry My Husband",cover:"https://avt.mkklcdnv6temp.com/20/f/15-1583499618.jpg",latest:90},
  {id:16,title:"What Does the Fox Say?",cover:"https://avt.mkklcdnv6temp.com/32/f/15-1583499625.jpg",latest:132},
  {id:17,title:"Spirit Fingers",cover:"https://avt.mkklcdnv6temp.com/30/f/15-1583499624.jpg",latest:163},
  {id:18,title:"Her Tale of Shim Chong",cover:"https://avt.mkklcdnv6temp.com/17/f/15-1583499615.jpg",latest:78},
  {id:19,title:"Romance 101",cover:"https://avt.mkklcdnv6temp.com/29/f/15-1583499623.jpg",latest:101},
  {id:20,title:"Daytime Star",cover:"https://avt.mkklcdnv6temp.com/7/f/15-1583499607.jpg",latest:70},
  {id:21,title:"Sweet Home",cover:"https://avt.mkklcdnv6temp.com/35/f/16-1583499848.jpg",latest:140},
  {id:22,title:"Shotgun Boy",cover:"https://avt.mkklcdnv6temp.com/34/f/16-1583499848.jpg",latest:68},
  {id:23,title:"Bastard",cover:"https://avt.mkklcdnv6temp.com/2/c/15-1583499602.jpg",latest:93},
  {id:24,title:"Terror Man",cover:"https://avt.mkklcdnv6temp.com/36/f/16-1583499848.jpg",latest:90},
  {id:25,title:"Lost in the Cloud",cover:"https://avt.mkklcdnv6temp.com/23/c/15-1583499622.jpg",latest:89},
  {id:26,title:"I Shall Master This Family",cover:"https://avt.mkklcdnv6temp.com/24/c/15-1583499619.jpg",latest:132},
  {id:27,title:"The Extra's Academy Survival Guide",cover:"https://avt.mkklcdnv6temp.com/28/c/15-1583499622.jpg",latest:60},
  {id:28,title:"How to Win My Husband Over",cover:"https://avt.mkklcdnv6temp.com/21/f/15-1583499618.jpg",latest:97},
  {id:29,title:"Light and Shadow",cover:"https://avt.mkklcdnv6temp.com/16/f/15-1583499614.jpg",latest:103},
  {id:30,title:"Gosu",cover:"https://avt.mkklcdnv6temp.com/15/f/15-1583499613.jpg",latest:233},
  {id:31,title:"Cheese in the Trap",cover:"https://avt.mkklcdnv6temp.com/5/c/15-1583499605.jpg",latest:300},
  {id:32,title:"Orange Marmalade",cover:"https://avt.mkklcdnv6temp.com/6/c/15-1583499606.jpg",latest:119},
  {id:33,title:"Noblesse",cover:"https://avt.mkklcdnv6temp.com/7/c/15-1583499607.jpg",latest:544},
  {id:34,title:"Girls of the Wild’s",cover:"https://avt.mkklcdnv6temp.com/8/c/15-1583499608.jpg",latest:260},
  {id:35,title:"Unordinary",cover:"https://avt.mkklcdnv6temp.com/9/c/15-1583499609.jpg",latest:292},
  {id:36,title:"True Beauty",cover:"https://avt.mkklcdnv6temp.com/10/c/15-1583499610.jpg",latest:203},
  {id:37,title:"The Beginning After the End",cover:"https://avt.mkklcdnv6temp.com/11/c/15-1583499611.jpg",latest:178},
  {id:38,title:"Weak Hero",cover:"https://avt.mkklcdnv6temp.com/12/c/15-1583499612.jpg",latest:258},
  {id:39,title:"Lookism",cover:"https://avt.mkklcdnv6temp.com/13/c/15-1583499613.jpg",latest:466},
  {id:40,title:"Dice",cover:"https://avt.mkklcdnv6temp.com/14/c/15-1583499614.jpg",latest:402},
  {id:41,title:"Hellper",cover:"https://avt.mkklcdnv6temp.com/15/c/15-1583499615.jpg",latest:187},
  {id:42,title:"The God of High School",cover:"https://avt.mkklcdnv6temp.com/16/c/15-1583499616.jpg",latest:569},
  {id:43,title:"I Love Amy",cover:"https://avt.mkklcdnv6temp.com/17/c/15-1583499617.jpg",latest:50},
  {id:44,title:"Semantic Error",cover:"https://avt.mkklcdnv6temp.com/18/c/15-1583499618.jpg",latest:92},
  {id:45,title:"My Bias Gets on the Last Train",cover:"https://avt.mkklcdnv6temp.com/19/c/15-1583499619.jpg",latest:25},
  {id:46,title:"Webtoon Character Na Kang Lim",cover:"https://avt.mkklcdnv6temp.com/20/c/15-1583499620.jpg",latest:35},
  {id:47,title:"Virtual Strangers",cover:"https://avt.mkklcdnv6temp.com/21/c/15-1583499621.jpg",latest:42},
  {id:48,title:"Murderous Lewellyn's Candlelit Dinner",cover:"https://avt.mkklcdnv6temp.com/22/c/15-1583499622.jpg",latest:55},
  {id:49,title:"King's Maker",cover:"https://avt.mkklcdnv6temp.com/23/c/15-1583499623.jpg",latest:60},
  {id:50,title:"After School Lessons for Unripe Apples",cover:"https://avt.mkklcdnv6temp.com/24/c/15-1583499624.jpg",latest:83},
  {id:51,title:"The Knight Only Lives Today",cover:"https://avt.mkklcdnv6temp.com/25/c/15-1583499625.jpg",latest:45},
  {id:52,title:"Greatest Estate Developer",cover:"https://avt.mkklcdnv6temp.com/26/c/15-1583499626.jpg",latest:150},
  {id:53,title:"Trapped",cover:"https://avt.mkklcdnv6temp.com/27/c/15-1583499627.jpg",latest:89},
  {id:54,title:"Semantic Error",cover:"https://avt.mkklcdnv6temp.com/28/c/15-1583499628.jpg",latest:92},
  {id:55,title:"My Bias Gets on the Last Train",cover:"https://avt.mkklcdnv6temp.com/29/c/15-1583499629.jpg",latest:25},
  {id:56,title:"Virtual Strangers",cover:"https://avt.mkklcdnv6temp.com/30/c/15-1583499630.jpg",latest:42},
  {id:57,title:"Greatest Estate Developer",cover:"https://avt.mkklcdnv6temp.com/31/c/15-1583499631.jpg",latest:150},
  {id:58,title:"Trapped",cover:"https://avt.mkklcdnv6temp.com/32/c/15-1583499632.jpg",latest:89},
  {id:59,title:"Terror Man",cover:"https://avt.mkklcdnv6temp.com/33/c/15-1583499633.jpg",latest:90},
  {id:60,title:"Lost in the Cloud",cover:"https://avt.mkklcdnv6temp.com/34/c/15-1583499634.jpg",latest:89}
];

const catalog = document.getElementById('catalog');
const search  = document.getElementById('search');

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
render(manhwas);

search.addEventListener('input', e=>{
  const q=e.target.value.toLowerCase();
  render(manhwas.filter(m=>m.title.toLowerCase().includes(q)));
});
