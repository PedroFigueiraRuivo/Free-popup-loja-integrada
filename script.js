function pfr__popups(){

	const popups = {
		'on-off': '', // Define se o plugin irá funcionar. Aceita "on" ou "off"
		'general-style': '', // define um estilo para todos os blocos de popup. Apenas regras css
		'popups': [ // Contém um lista de popups
			{ // New Popup / Title: COLOQUE O NOME DO POPUP AQUI
				'position': '', // Posição em que o popup aparecerá na tela
				'content': '', // Conteúdo que irá dentro do popup (apenas html)
				'specific-style': '', // Estilo personalizado para o popup. Apenas regras css
				'page': [''], // Lista de URLs que o popup aparecerá ( "all" para todas )
				'single': '', // coloque "on" caso queria que o popup só seja mostrado uma vez
			},
		],
	}
	
	/***************************************** 
	 * Isto é tudo, pode parar de editar! :) *
	 * ***************************************
	 */
	 
	 
	 if( typeof popups !== 'undefined' ){
		const compare = [
			typeof popups['on-off'] !== 'undefined',
			popups['on-off'] !== '',
			popups['on-off'] !== 'off',
			popups['on-off'] === 'on'
		];
		
		if( compare.every( el => el ) ){
			typeof popups['general-style'] !== 'undefined' ? pfr__popups_addGeneralStyles( popups['general-style'] ) : null;
			typeof popups['popups'] !== 'undefined' ? pfr__popups_addPopups( popups['popups'] ) : null;
			typeof popups['general-style'] !== 'undefined' && typeof popups['popups'] !== 'undefined' ? pfr__popups_closePopup( popups['popups'] ) : null;
		}
	 }else{
	 	console.warn( 'PFR: Há algo errado com o seu script de popups' );
	 }

}pfr__popups();


function pfr__popups_addGeneralStyles( generalStyle ){

	const style = `
		<style pfr-style="popups" type="text/css">
			.pfr-popups{ 
				position: fixed;
				z-index: 1000;
				width: 100%;
			}
			
			.pfr-popups__box{
				position: relative;
				background-color: #fff;
				border: 5px solid #000;
				margin: 20px;
				padding: 20px;
				min-width: 280px;
				${generalStyle}
			}
			
			.pfr-popups__box:not(.pfr-popup-full){
				max-width: 60%;
			}
			
			.pfr-popups.pfr-collapse{
				display: none !important;
			}
			
			.pfr-popups__box-close{
				position: absolute;
				right: -10px;
				top: -10px;
				border-radius: 50%;
				background-color: #fff;
				color: #000;
				border: 3px solid #000;
				text-align: center;
				width: 30px;
				height: 30px;
				margin: 0px;
				padding: 0px;
			}
		</style>
	`; 
	( document.head ).insertAdjacentHTML( 'beforeend', style );

}


function pfr__popups_addPopups( arrPopups ){

	arrPopups.forEach( ( popup, index ) => {
		let conditionPage = popup['page'].some( url => url == window.location.href || url == window.location.href.substring(0, window.location.href.length - 1) || url == 'all' );
		
        if( !localStorage[`popupCache_${index}`] ){
		
			if( conditionPage ){

				if( typeof popup['position'] !== 'undefined' ){

					let popupFull = popup['position'] === 'center-top' || popup['position'] === 'center-bottom' ? 'pfr-popup-full' : '';
					let positionPopup = pfr__popups_position( popup['position'] );
					let contentPopup = `
						<div class="pfr-popups" pfr-select="popup" style="${positionPopup}">
							<div class="pfr-popups__box ${popupFull}" style="${popup['specific-style']}">
								${popup['content']}
								<button class="pfr-popups__box-close">X</button>
							</div>
						</div>
					`;

					( document.body ).insertAdjacentHTML( 'beforeend', contentPopup );
				}

			}
		}
	} );

}


function pfr__popups_position( paramer ){

	if( paramer === 'top' ){ return 'display: flex; justify-content: center; top: 0;' }
	if( paramer === 'top-right' ){ return 'display: flex; justify-content: end; top: 0;' }
	if( paramer === 'top-left' ){ return 'display: flex; justify-content: start; top: 0;' }
	if( paramer === 'bottom' ){ return 'display: flex; justify-content: center; bottom: 0;' }
	if( paramer === 'bottom-right' ){ return 'display: flex; justify-content: end; bottom: 0;' }
	if( paramer === 'bottom-left' ){ return 'display: flex; justify-content: start; bottom: 0;' }
	if( paramer === 'center' ){ return 'display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; top: 0;' }
	if( paramer === 'center-right' ){ return 'display: flex; justify-content: end; align-items: center; width: 100%; height: 100vh; top: 0;' }
	if( paramer === 'center-left' ){ return 'display: flex; justify-content: start; align-items: center; width: 100%; height: 100vh; top: 0;' }
	if( paramer === 'center-top' ){ return 'display: flex; justify-content: center; width: 100%; height: 200px; top: 0;' }
	if( paramer === 'center-bottom' ){ return 'display: flex; justify-content: center; width: 100%; height: 200px; bottom: 0;' }

    return '';

}


function pfr__popups_closePopup( arrPopups ){

	const popups = document.querySelectorAll( '[pfr-select="popup"]' );
	
	function closePopup( index ){

		if( arrPopups[ index ][ 'single' ] === 'on' ){
			localStorage.setItem(`popupCache_${index}`, true);
		}
		popups[index].classList.add( 'pfr-collapse' );

	}
	
	popups.forEach( ( popup, index ) => {
		popup.querySelector( '.pfr-popups__box-close' ).addEventListener( 'click', () => closePopup( index ) );
	} );

}