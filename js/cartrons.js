window.onload = function () {




	var vue = new Vue({
		el: "#content",

		data: {
	  		preguntaGeneracioCartrons: true,
	  		numeroCartrons: 30,
	  		seleccionarTriarCartrons: false,
	  		numeroCartronsUtilitzats: 0,
	  		mostrarCartronsGenerats: false,
	  		cartrons: [],
	  		mostrarCartronsSeleccionats: false,
		},

		methods: {
			generarCartrons: function(numeroCartrons){
				var selfCartrons = this.cartrons;

				for ( cart = 0 ; cart < numeroCartrons; cart++){
					this.generarNumeros(function(arrayNumeros){
						//console.log("-----------------");
						var objCartro = {};
						objCartro.seleccionat = false;
						objCartro.numCartro = cart + 1;
						objCartro.numeros = arrayNumeros;
						console.log("objCartro.numeros:" + JSON.stringify(objCartro.numeros) + "\n----------------------------");

						selfCartrons.push(objCartro);
					});
				}
				this.preguntaGeneracioCartrons = false;
				this.mostrarCartronsGenerats   = true;
				// this.seleccionarTriarCartrons = true
			},


			generarNumeros: function(callback){
				var numFiles = 3;
				var numColumnes = 9;
				var numero;

           		
           		var files = [];
	           	

	           	var arrayUnitats = generarNumero2({min: 1, max: 9, numeroElementsArray: 3});
	           	var arrayDec10 = generarNumero2({min: 10, max: 19, numeroElementsArray: 3});
	           	var arrayDec20 = generarNumero2({min: 20, max: 29, numeroElementsArray: 3});
	           	var arrayDec30 = generarNumero2({min: 30, max: 39, numeroElementsArray: 3});
	           	var arrayDec40 = generarNumero2({min: 40, max: 49, numeroElementsArray: 3});
	           	var arrayDec50 = generarNumero2({min: 50, max: 59, numeroElementsArray: 3});
	           	var arrayDec60 = generarNumero2({min: 60, max: 69, numeroElementsArray: 3});
	           	var arrayDec70 = generarNumero2({min: 70, max: 79, numeroElementsArray: 3});
	           	var arrayDec80 = generarNumero2({min: 80, max: 90, numeroElementsArray: 3});



	           	for ( f = 0 ; f < numFiles; f++ ){

	           		var objFila = {};
	           		for ( c = 0 ; c < numColumnes; c++ ){
	           			
	           			switch (c){
	           				case 0:
	           				 	//min = 1; max = 9; 
	           				 	//generarNumero2(min,max, files, "unitats", function(numeroAleatori){
	           				 		objFila.unitats = {numero: arrayUnitats.array()[f], seleccionat: false};
	           				 	//});
	           				 	break;
	           				case 1: 	
	           					// min = 10; max = 19; 
	           					// this.generarNumero(min,max, files, "Dec10", function(numeroAleatori){
	           						objFila.Dec10 = {numero: arrayDec10.array()[f], seleccionat: false};
	           					// });
	           					break;
	           				case 2:
	           				 	// min = 20; max = 29; 
	           					// this.generarNumero(min,max, files, "Dec20", function(numeroAleatori){
	           						objFila.Dec20 = {numero: arrayDec20.array()[f], seleccionat: false};
	           					// });
	           				 	break;
	           				case 3:
	           				 	// min = 30; max = 39; 
	           					// this.generarNumero(min,max, files, "Dec30", function(numeroAleatori){
	           						objFila.Dec30 = {numero: arrayDec30.array()[f], seleccionat: false};
	           					// });
	           				 	break;
	           				case 4:
	           				 	// min = 40; max = 49; 
	           					// this.generarNumero(min,max, files, "Dec40", function(numeroAleatori){
	           						objFila.Dec40 = {numero: arrayDec40.array()[f], seleccionat: false};
	           					// });
	           				 	break;
	           				case 5:
	           				 	// min = 50; max = 59; 
	           					// this.generarNumero(min,max, files, "Dec50", function(numeroAleatori){
	           						objFila.Dec50 = {numero: arrayDec50.array()[f], seleccionat: false};
	           					// });
	           				 	break;
	           				case 6:
	           				 	// min = 60; max = 69; 
	           					// this.generarNumero(min,max, files, "Dec60", function(numeroAleatori){
	           						objFila.Dec60 = {numero: arrayDec60.array()[f], seleccionat: false};
	           					// });
	           				 	break;
	           				case 7:
	           				 	// min = 70; max = 79; 
	           					// this.generarNumero(min,max, files, "Dec70", function(numeroAleatori){
	           						objFila.Dec70 = {numero: arrayDec70.array()[f], seleccionat: false};
	           					// });
	           				 	break;
	          				case 8:
	          				 	// min = 80; max = 90; 
	           					// this.generarNumero(min,max, files, "Dec80", function(numeroAleatori){
	           						objFila.Dec80 = {numero: arrayDec80.array()[f], seleccionat: false};
	           					// });
	          				 	
	          				 	break;
		           			
		           		}
		           		

					}


	           		this.casellesBuides(function(arrayPosicionsBuides){
	           			console.log("arrayPosicionsBuides.length: " + arrayPosicionsBuides.length)
	           			arrayKeys = Object.keys(objFila);

	           			for(a = 0; a < arrayPosicionsBuides.length; a++){
	           				objFila[arrayKeys[arrayPosicionsBuides[a]]].numero = null;
	           				delete objFila[arrayKeys[arrayPosicionsBuides[a]]].seleccionat;  //eliminacio de la propietat "seleccionat"
	           			}
	           			files.push(objFila);
	           		});

				}

				callback(files);
			},

			
			casellesBuides: function(callback){
				var min = 0; var max = 8;
				numeroCasellesBuides = 4;
				var arrayPosicions = [];
				var numeroTrobat;
				
				for ( j=0; j < numeroCasellesBuides; j++){
					do{
						numeroTrobat = false
						posicio = Math.round(Math.random() * (max - min) + min);
						
						for ( i=0; i<arrayPosicions.length; i++){
							if (arrayPosicions[i] == posicio) numeroTrobat = true;
							
						}
					} while (numeroTrobat)
					arrayPosicions.push(posicio);
				}
				callback(arrayPosicions);

			},

			cartronsManuals: function(){
				this.seleccionarTriarCartrons = false;
				this.mostrarCartronsGenerats  = true;
			},

			mes:   function() { this.numeroCartronsUtilitzats++ },
			menys: function() { this.numeroCartronsUtilitzats-- },

			jugarAmbCartronsSeleccionats: function(){
				this.mostrarCartronsGenerats     = false;
				this.mostrarCartronsSeleccionats = true;
			},

			marcar: function(obj){
				if (typeof obj.seleccionat != undefined){
					obj.seleccionat = !obj.seleccionat;
				}
			},

			seleccionarAltresCartrons: function(){
				this.mostrarCartronsSeleccionats = false;
				for ( u=0; u < this.cartrons.length; u++){
					if (this.cartrons[u].seleccionat) this.cartrons[u].seleccionat = false;
				}
				this.mostrarCartronsGenerats = true;
			}

		},

		computed: {
		}
	


	});


}



generarNumero2 = function(obj){
	var _min = obj.min;
	var _max = obj.max;
	var _numeroElementsArray = obj.numeroElementsArray;
	var _array = [];

	generar: (function(){
		var numero;
		var numExistent;
		for( h=0; h<_numeroElementsArray; h++){
			do{
				numExistent = false;
				numero = Math.round(Math.random() * (_max - _min) + _min);

				if (_array == []) {
					_array.push(numero);
				} else {
					for ( j=0; j<_array.length; j++){
						//console.log("files[" + j + "]." + prop + " = " + files[j][prop] + "\t\tnumero = " + numero);
						if (_array[j] == numero) numExistent = true;
					}
				}
			} while (numExistent == true)
			_array.push(numero);
		}
		
	})();


	return {
		array: function(){ return _array; }
	}

	 
}