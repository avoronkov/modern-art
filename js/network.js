var PAINTERS = [
	{
		genre: 'preimp',
		name: 'Теодор Жерико',
		years: '1820-1870',
		paintings: [
			{
				title: 'Плот "Медузы"',
				year: '1818-1819',
				image:  'jerico-plot-meduzy.jpg',
			},
		]
	},
	{
		name: 'Эжен Делакруа',
		years: '1798-1863',
		paintings: [
			{
				title: 'Свобода ведушая народ',
				year: '1830',
				image:  'delakrua-svoboda.jpg',
			},
		]
	},
	{
		name: 'Джон Констебл',
		years: '1776-1837',
		paintings: [
			{
				title: 'Воз сена',
				year: '1821',
				image:  'konstebl-voz-sena.jpg',
			},
		]
	},
	{
		name: 'Гюстав Курбе',
		years: '1819-1877',
		paintings: [
			{
				title: 'Происхождение мира',
				year: '1866',
			},
			{
				title: 'Похороны в Орнане',
				year: '1850',
				image: 'courbet-burial-at-ornans-1849.jpg',
			},
			{
				title: 'Мастерская художника',
				year: '1855',
				image: 'courbet-the-painter-s-studio-a-real-allegory-1855-361x598-m-artfond.jpg',
			},
		]
	},
	{
		name: 'Джеймс Макнил Уистлер',
		years: '1834-1903',
		paintings: [
			{
				title: 'Симфония в белом №1: девушка в белом',
				year: '1862',
				image: 'whistler-simfoniya-v-belom-n1-devushka-v-belom.jpg',
			},
		]
	},
	{
		name: 'Джозеф Мэллорд Уильям Тернер',
		years: '1775-1851',
		paintings: [
			{
				title: 'Дождь, пар и скорость',
				year: '1844',
				image: 'terner-rain-steam-and-speed.jpg',
			},
		]
	},

	{
		name: 'Эдуард Мане',
		years: '1832-1883',
		paintings: [
			{
				title: 'Любитель абсента',
				year: '1858-1859',
				image: 'mane-lubitel-absenta.jpg',
			},
			{
				title: 'Завтрак на траве',
				year: '1863',
				image: 'mane-zavtrak-na-trave.jpg',
			},
			{
				title: 'Олимпия',
				year: '1863',
				image: 'mane-olimpiya.jpg',
			},
		]
	},
	{
		genre: 'imp',
		name: 'Клод Моне',
		years: '1840-1926',
		paintings: [
			{
				title: 'Впечатление.Восход солнца',
				year: '1872',
				image: 'Claude-Monet-Impression-Sunrise.jpg',
			},
			{
				title: 'Лягушатник',
				year: '1869',
				image: 'Claude-Monet-Lyagushatnik.jpg',
			},
			{
				title: 'Темза ниже Вестминстера',
				year: '1871',
				image: 'Claude-Monet-The-Thames-below-Westminster.jpg',
			},
		]
	},
	{
		name: 'Поль Сезанн',
		years: '1839-1906',
		paintings: [
			{
				title: 'Современная Олимпия',
				year: '1873-1874',
				image: 'sezann-sovremennaya-olimpiya.jpg',
			},
		]
	},
	{
		name: 'Камиль Писсарро',
		years: '1830-1903',
		paintings: [
			{
				title: 'Иней на старой Эннерийской дороге',
				year: '1873',
				image: 'Pissarro-iney.jpg',
			},
		]
	},
	{
		name: 'Эдгар Дега',
		years: '1834-1917',
		paintings: [
			{
				title: 'Танцевальный класс',
				year: '1874',
				image: 'dega-the-dancing-class-1874.jpg',
			},
			{
				title: 'Коляска на скачках',
				year: 'ок. 1869-1872',
				image: 'dega-kolyaska-na-skachkah.jpg',
			},
		]
	},
	{
		genre: 'ukiyo-e',
		name: 'Кацусика Хокусай',
		years: '1760-1849',
		paintings: [
			{
				title: 'Большая волна в Канагава',
				year: 'ок. 1830-1832',
				image: 'katsushika-hokusai-waves.jpg',
			},
		]
	},
	{
		name: 'Утагава Хиросигэ',
		years: '1797-1858',
		paintings: [
			{
				title: 'Большая волна в Канагава',
				year: 'ок. 1830-1832',
				image: 'hirosige-stanciya-ocu.jpg',
			},
		]
	},
	{
		genre: 'expr',
		name: "Винсент Ван Гог",
		years: '1853-1890',
		paintings: [
			{
				title: 'Едоки картофеля',
				year: '1885',
				image: 'van-gog-edoki-kartofelya.jpg',
			},
			{
				title: 'Желтый дом',
				year: '1888',
				image: 'VanGogh_zheltyi-dom.jpg',
			},
			{
				title: 'Ночная терраса кафе',
				year: '1888',
				image: 'van-gog-nochnaya-terassa-kafe.jpg',
			},
			{
				title: 'Звездная ночь',
				year: '1889',
				image: 'van-gog-zvezdnaya-noch.jpg',
			},
			{
				title: 'Натюрморт с тарелкой лука',
				year: '1889',
				image: 'van-gog-natjurmort-s-tarelkoy-luka.jpg',
			},
		],
	},
	{
		name: 'Эдвард Мунк',
		years: '1863-1944',
		paintings: [
			{
				title: 'Крик',
				year: '1893',
				image: 'munk-krik.jpg',
			},
		]
	},
	{
		name: 'Фрэнсис Бэкон',
		years: '1909-1992',
		paintings: [
			{
				title: 'Портрет папы Иннокентия X',
				year: '1953',
				image: 'bekon-shtihi-k-portretu.jpg',
			},
		]
	},
];

var GENRES = [
	{
		id: 'preimp',
		title: 'Преимпрессионизм',
		years: '1820-1870',
		to: 'imp',
	},
	{
		id: 'imp',
		title: 'Импрессионизм',
		years: '1870-1890',
		color: 'lime',
		to: 'postimp',
	},
	{
		id: 'ukiyo-e',
		title: 'Японская ксилография укиё-э',
		to: 'imp',
		color: 'grey',
	},
	{
		id: 'postimp',
		title: 'Постимпрессионизм',
		years: '1880-1906',
		to: 'expr',
		color: 'yellow',
	},
	{
		id: 'expr',
		title: 'Экспрессионизм',
		color: 'yellow',
	},
];

var DIR = 'images/';

var EDGE_LENGTH_MAIN = 500;
var EDGE_LENGTH_MID = 150;
var EDGE_LENGTH_SUB = 100;

var nodes = [];
var edges = [];
// draw genres
GENRES.forEach(function(item, i, arr) {
	var title = item['title'];
	if (item['years']) {
		title += " (" + item['years'] + ")";
	}
	var node = {id: i, label: title};
	if (item['color']) {
		node['color'] = item['color'];
	}
	nodes.push(node);
	if (item['to']) {
		arr.forEach(function(elem, j, arr2) {
			if (elem['id'] == item['to']) {
				edges.push({from: i, to: j, length: EDGE_LENGTH_MAIN, arrows: 'to', dashes: true});
			}
		});
	}
});

// draw painters
var l = GENRES.length;
var genre_id, genre_color;
for (var i=0; i<PAINTERS.length; i++) {
	var p = PAINTERS[i];
	if (p['genre']) {
		for(var k=0; k<GENRES.length; k++) {
			if (GENRES[k]['id'] == p['genre']) {
				genre_id = k;
				genre_color = GENRES[k]['color'];
			}
		}
		genre = p['genre'];
	}
	nodes.push({id: l, label: p['name'] + " (" + p['years'] + ")", color: genre_color});
	edges.push({from: genre_id, to: l, length: EDGE_LENGTH_MID, arrows: 'to'});

	var lp = l;
	l++;
	for (var j=0; j < p['paintings'].length; j++) {
		var img = p['paintings'][j];
		var node = {id: l, label: img['title'] + " (" + img['year'] + ")"}
		if (img['image']) {
			node['image'] = DIR + img['image'];
			node['shape'] = 'image';
		}
		nodes.push(node);
		edges.push({from: lp, to: l, length: EDGE_LENGTH_SUB, arrows: 'to'});
		l++;
	}
}

// create a network
var container = document.getElementById('mynetwork');
var data = {
	nodes: nodes,
	edges: edges
};
var options = {};
var network = new vis.Network(container, data, options);

