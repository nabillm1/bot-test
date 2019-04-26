var VERIFY_TOKEN = "EAAEhuoHO6PABAOjxblOvoTpOOj8gC5Ncqpv4kZAX7sMsZCkDEBqJrPqZBDbZAGfEZAuLhY2WLk24ic42ucysYeLzgnzIWUVHzsVvXuNPWotZAt4J3YUWZADiAj5eCeRpPiuOalAO6IxkOLHYrwZBDfZB3Rd6ceBZBoxQFBW64EHmUMsAZDZD";
var PAGES = [
	// Add your pages here, change key for each one, I use numberical values starting at 0
	{
		id: "rise-Up-Animals-813997535637514>",
		name: "Bot test",
		key: "0",
		title: "Don't forget your daily free coins",
		subtitle: "We miss you, come back and play",
		cta: "Play Now",
		imageurl: "<URL of image to show in message>",
		payload: null,
		pat: "EAAEhuoHO6PABAOjxblOvoTpOOj8gC5Ncqpv4kZAX7sMsZCkDEBqJrPqZBDbZAGfEZAuLhY2WLk24ic42ucysYeLzgnzIWUVHzsVvXuNPWotZAt4J3YUWZADiAj5eCeRpPiuOalAO6IxkOLHYrwZBDfZB3Rd6ceBZBoxQFBW64EHmUMsAZDZD",
	},
];

function GetGame(page_id)
{
	for (var t = 0; t < PAGES.length; t++)
	{
		if (page_id === PAGES[t].id)
			return PAGES[t];
	}
}

function GetPage(which)
{
	return PAGES[which];
}

function GetVertifyToken()
{
	return VERIFY_TOKEN;
}

module.exports = 
{
	GetGame,
	GetPage,
	GetVertifyToken,
};
