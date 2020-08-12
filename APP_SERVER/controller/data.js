var mobArray = [{name:"Iphone",type:"Premium",latest:"11 Pro Max",img:"../images/mob1.jpg"},
{name:"OnePlus",type:"Mid Range",latest:"OnePlus8",img:"../images/mob2.jpg"},
{name:"BlackBerry",type:"Mid Range",latest:"KEY2 LE",img:"../images/mob3.jpg"},
{name:"Pixel",type:"Mid Range",latest:"pixel4a",img:"../images/mob4.jpg"},
{name:"Nokia",type:"Low Range",latest:"Nokia C5",img:"../images/mob5.jpg"}];

function ListMob(req, res,next){
  res.render('list-display', { mob: mobArray});
}

module.exports = {ListMob}
