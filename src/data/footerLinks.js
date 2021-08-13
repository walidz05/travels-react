const [state] = useState({
	pages: [
		{ id: 1, name: 'home', route: '/' },
		{ id: 2, name: 'about', route: '/about' },
		{ id: 3, name: 'contact', route: '/contact' },
	],
	partners: [
		{ id: 1, name: 'booking', route: '/https://www.booking.com/' },
		{ id: 2, name: 'trivago', route: '/https://www.trivago.com/' },
		{ id: 3, name: 'hostel world', route: 'https://www.hostelworld.com/' },
		{ id: 4, name: 'trip advisor', route: 'https://www.tripadvisor.com/' },
	],
	headings: {
		pages: 'pages',
		partners: 'partners',
		destinations: 'destinations',
	},
});
