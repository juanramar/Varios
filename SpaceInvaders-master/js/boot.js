// Variable estado usada para iniciar las físicas del juego
var bootState = {
	/**
	 * Método estándar llamado automáticamente por Phaser para crear y cargar los recursos usados
	 * @method create
	 */
	create: function() {
		//Usamos Scale Manager para definir el modo de escalado mostrando todo el Canvas en pantalla
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//Para centrar el Canvas en la pantalla horizontal y verticalmente
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.scale.refresh();
		// Iniciamos el sistema de físicas del motor
		game.physics.startSystem(Phaser.Physics.ARCADE);
		// Cargamos librería usada para controlar elementos de la interfaz
		game.slickUI = game.plugins.add(Phaser.Plugin.SlickUI);
		// Creamos booleano para controlar si hemos visto el logo inicial
		game.logoIntro = false;
		// Comprobamos si estamos sobre un entorno de escritorio y llamamos al estado load
		game.escritorio = this.game.device.desktop;
		game.state.start('load');
	}
};
