let Kettle = function() {

	this.getParameters = function() {
		this.capacity = +prompt('Введите объем воды (0.1 - 2 л)');
		this.temperature = +prompt('Введите начальную температуру воды');
		this.power = +prompt('Введите мощность водонагревателя (600 - 3000 Вт)');

		this.checkParameters();
	};

	this.checkParameters = function() {
		if (this.capacity < 0.1) {
			alert('Добавь немножко водички, не жадничай')
			this.getParameters()
		} else if (this.capacity > 2) {
			alert('Воу-воу, у тебя не такой вместительный чайник');
			this.getParameters()
		} 
		if (this.temperature < 0) {
			alert('Пытаешься растопить сердце бывшей?:)')
			this.getParameters()
		} else if (this.temperature > 100) {
			alert('Ты зачем в чайник кипяток наливаешь?');
			this.getParameters()
		} 
		if (this.power < 600) {
			alert('Эй, подкинь немного мощности. На газу и то быстрее закипит')
			this.getParameters()
		} else if (this.power > 3000) {
			alert('У тебя чайник, а не ракета, убавь мощности');
			this.getParameters()
		} else this.calculation();
	};

	this.calculation = function() {
		this.time = (0.00117 * this.capacity * (100 - this.temperature)) / (0.85 * this.power) * 1000;

		this.result();
	};

	this.result = function() {
		alert('П**да, Ярик, бочок потик. Но вода закипела за: ' + Math.floor(this.time * 60) + ' Мин');
		// alert('П**да, Ярик, бочок потик. Но вода закипела за: ' + Math.floor(this.time * 60) + ' Мин' + Math.round(this.time % 60) + ' Сек.');
		// alert('Время закипания воды: ' + Math.floor(this.time / 60) + ' Мин');
		// alert('Время закипания воды: ' + this.time);
	};
};

let kettle = new Kettle();
kettle.getParameters();