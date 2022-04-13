
(function(){
	//chamar incialização
	startGame();
	
	//função de inicialização do jogo
	function startGame(){
		//posicionamento das cartas e adição do evento click
		for(var i = 0; i < 16; i++){
			//posiciona as cartas no tabuleiro
			var card = document.querySelector("#card" + i);
			card.style.left = i % 8 === 0 ? 5 + "px" : i % 8 * 165 + 5 + "px";
			card.style.top = i < 8 ? 5 + "px" : 250 + "px";
			
			//adiciona às cartas o evento click chamando a função que vira as cartas
			card.addEventListener("click",flipCard,false);
		}
	}
	
	//função que vira as cartas
	function flipCard(){
		//pega as faces da carta clicada
		var faces = this.getElementsByClassName("face");
		
		//adiciona a classe fliped às faces da carta para que sejam viradas
		faces[0].classList.toggle("flipped");//verso [back] - que está por cima
		faces[1].classList.toggle("flipped");//verso [back] - que está por cima
	}
}());

(function(){
	//array que armazenará os objetos com src e id de 1 a 8
	var images = [];
	
	//estrutura de atribiução das imagens aos card
	for(var i = 0; i < 16; i++){
		//cria um objeto img com um src e um id
		var img = {
			src: "img/" + i + ".jpg",
			id: i%8
		};
		
		//inserer o objeto criado no array
		images.push(img);
	}
	
	startGame();
	
	function startGame(){
		//lista de elementos div com as classes front
		var frontFaces = document.getElementsByClassName("front");
	
		for(var i = 0; i < 16; i++){
			var card = document.querySelector("#card" + i);
			card.style.left = i % 8 === 0 ? 5 + "px" : i % 8 * 165 + 5 + "px";
			card.style.top = i < 8 ? 5 + "px" : 250 + "px";
			
			card.addEventListener("click",flipCard,false);
			
			//adiciona as imagense IDs às cartas
			frontFaces[i].style.background = "url('"+images[i].src+"')";
			frontFaces[i].setAttribute("id",images[i].id);
		}
	}
	
	function flipCard(){
		var faces = this.getElementsByClassName("face");

		faces[0].classList.toggle("flipped");
		faces[1].classList.toggle("flipped");
	}
}());
