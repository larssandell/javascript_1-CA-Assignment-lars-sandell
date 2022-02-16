# javascript_1-CA-Assignment-lars-sandell


https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=JLBr5npPhV




dota:
fetch("https://community-dota-2.p.rapidapi.com/IDOTA2Match_570/GetMatchDetails/V001/?key=undefined&match_id=27110133&matches_requested=%3CREQUIRED%3E", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-dota-2.p.rapidapi.com",
		"x-rapidapi-key": "9c741f73e3mshb51b0664c9dfdb6p121973jsn78fc7224bfc7"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});


dota heroes
fetch("https://dota-2-heroes1.p.rapidapi.com/Dota/Heroes", {
	"method": "GET",
	"headers": {
		"authorization": "undefined",
		"x-rapidapi-host": "dota-2-heroes1.p.rapidapi.com",
		"x-rapidapi-key": "9c741f73e3mshb51b0664c9dfdb6p121973jsn78fc7224bfc7"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

cpu api
fetch("https://cpu-data.p.rapidapi.com/cpus/1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "cpu-data.p.rapidapi.com",
		"x-rapidapi-key": "9c741f73e3mshb51b0664c9dfdb6p121973jsn78fc7224bfc7"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});