// Footer last updated
(function(){
  const n=new Date();
  const days=['রবি','সোম','মঙ্গল','বুধ','বৃহস্পতি','শুক্র','শনি'];
  const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  document.getElementById('last-updated').textContent=
    `Last Updated: ${days[n.getDay()]}, ${n.getDate()} ${months[n.getMonth()]} ${n.getFullYear()} · ${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}`;
})();
