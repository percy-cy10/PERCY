var titulo=document.querySelector('.nombre-titulo');
var video=document.querySelector('.video-src');
var vistas=document.querySelector('.vistas');
var like=document.querySelector('.meGusta');
var dislike=document.querySelector('.noMeGusta');
var canal=document.querySelector('.nombre-canal');
var subs=document.querySelector('.num-subs');
var logoCanal=document.querySelector('.logo-canal');
var createVideo;
var tituloR=["Dota 2 moments 345","Melodia sad","VNV nation illusion"];
var canalR=["Dota 2 WTF moments","Sad Songs","VNV nation"];
var videoR=["files/videos/videoplayback.mp4","files/videos/melodia.mp4","files/videos/illusion.mp4"];
var vistasR=["1k vistas","2k vistas","5k vistas"];
var vistasR2=["1k vistas • 03 ene 2018","2k vistas • 15 mar 2019","5k vistas • 28 sep 2016"];
var duracionR=["10.11","03.33","04.44"];
var likeR=["12","13","14"];
var dislikeR=["2","3","4"];
var suscriptores=["1K","5M","234"];
var img=["files/dota.png","files/sad.jpg","files/vnv.jpg"];
var imgCanal=["files/dotalogo.jpg","files/sadlogo.jpg","files/vnvlogo.jpg"];
var inicio=true;

var newDiv=document.createElement('div');
var newImg=document.createElement('img');
newDiv.setAttribute('class','anuncio flex j-c-c a-i-c');
document.querySelector('.content-2').appendChild(newDiv);
document.querySelector('.anuncio').appendChild(newImg);
var imgAnuncio=["oreo.jpg","power.jpg","bembos.jpg"];
var anuncio=document.querySelector('.anuncio');
var v1=0;
var v2;
v2=setInterval(anuncioA,1000);
function anuncioA(){
	if(v1==8){
		document.querySelector('.anuncio img').style.display="block";
		document.querySelector('.anuncio img').src="files/anuncios/"+imgAnuncio[0];
	}
	else if(v1==11){
		document.querySelector('.anuncio img').src="files/anuncios/"+imgAnuncio[1];
	}
	else if(v1==14){
		document.querySelector('.anuncio img').src="files/anuncios/"+imgAnuncio[2];
	}
	else if(v1==17){
		document.querySelector('.anuncio img').style.display="none";
		v1=0;
	}
	v1++;
}
for(var i=0;i<3;i++){
		createVideo="<div class='videos flex'>";
		createVideo+="<div class='img-video flex a-i-c j-c-c'>";
		createVideo+="<img src='"+img[i]+"'>";
		createVideo+="<p class='duracion'>"+duracionR[i]+"</p>";
		createVideo+="</div>";
		createVideo+="<div class='datos-video'>";
		createVideo+="<p class='titulo'>"+tituloR[i]+"</p>";
		createVideo+="<p class='canal'>"+canalR[i]+"</p>";
		createVideo+="<p class='vistas2'>"+vistasR[i]+"</p>";
		createVideo+="<span class='none'>";
		createVideo+="<p class='ubicacion'>"+videoR[i]+"</p>";
		createVideo+="<p class='vistas3'>"+vistasR2[i]+"</p>";
		createVideo+="<p class='like'>"+likeR[i]+"</p>";
		createVideo+="<p class='dislike'>"+dislikeR[i]+"</p>";
		createVideo+="<p class='suscriptores'>"+suscriptores[i]+"</p>";
		createVideo+="<p class='canal-logo'>"+imgCanal[i]+"</p>";
		createVideo+="</span>";
		createVideo+="</div>";
		document.querySelector('.content-2').innerHTML+=createVideo;
}
var videos =document.querySelectorAll('.videos');
for(var i=0;i<videos.length;i++){
	videos[i].addEventListener('click',function(){
		titulo.innerHTML=this.querySelector('.titulo').innerHTML;
		video.src=this.querySelector('.ubicacion').innerHTML;
		vistas.innerHTML=this.querySelector('.vistas3').innerHTML;
		like.innerHTML=this.querySelector('.like').innerHTML;
		dislike.innerHTML=this.querySelector('.dislike').innerHTML;
		canal.innerHTML=this.querySelector('.canal').innerHTML;
		subs.innerHTML=this.querySelector('.suscriptores').innerHTML+" suscriptores";
		logoCanal.src=this.querySelector('.canal-logo').innerHTML;
		video.play();
	})
}
var mostrar=document.querySelector('.mostrar');
var ocultar=document.querySelector('.canal-sub-2');
var y=0;
mostrar.addEventListener('click',function(){
	if(y==0){
		ocultar.style.height="auto";
		mostrar.innerHTML="Mostrar menos";
		y++;
	}
	else{
		ocultar.style.height="70px";
		mostrar.innerHTML="Mostrar más";
		y=0;
	}
})
var cmg=document.querySelector('.clickMG');
var cnmg=document.querySelector('.clickNMG');
cmg.addEventListener('click',function(){
	if(like.innerHTML>=0){
		like.innerHTML=parseInt(like.innerHTML)+1;
	}
})
cnmg.addEventListener('click',function(){
	if(dislike.innerHTML>=0){
		dislike.innerHTML=parseInt(dislike.innerHTML)+1;
	}
})
var capa=document.querySelector('.capa');
var modal=document.querySelector('.modal');
document.querySelector('.abrir-modal').addEventListener('click',function(){
	capa.classList.add('block');
	modal.style.left="0";
})
document.querySelector('.cerrar-modal').addEventListener('click',function(){
	capa.classList.remove('block');
	modal.style.left="-100%";
})
document.querySelector('.up').style.display="none";
document.querySelector('.down').addEventListener('click',function(){
	document.querySelector('.ver-resp').innerHTML="Ocultar respuestas";
	this.style.display="none";
	document.querySelector('.up').style.display="inline";
})
document.querySelector('.up').addEventListener('click',function(){
	document.querySelector('.ver-resp').innerHTML="Ver respuestas";
	this.style.display="none";
	document.querySelector('.down').style.display="inline";
})