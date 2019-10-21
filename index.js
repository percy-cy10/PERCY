var ad1, dm, sw;
	function iniciar(){
		sw=false;
		dm = document.getElementById("m");
		ad1 = setInterval(cambiar,1500);//dispara la repeticion de cambiar cada 1500milisegundos
		}
	function cambiar(){
		if (sw) {
			dm.src= "dos.png";
		}else{
			dm.src= "uno.png";		}
		sw=!sw;
	}
	function cerrar(){
		clearInterval(ad1);
		document.getElementById("propaganda").style.display="none";
	}