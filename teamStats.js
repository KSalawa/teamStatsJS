const team = {
    _players: [
        {firstName: 'Kamil', lastName: 'Salawa', age: 31},
        {firstName: 'Alex', lastName: 'Bonifaz', age: 27},
        {firstName: 'Kate', lastName: 'Kolorus', age: 32}
    ],
    _games: [
        {opponent: 'Glasgow', teamPoints: 69, opponentPoints: 22},
        {opponent: 'New Castle', teamPoints: 59, opponentPoints: 52},
        {opponent: 'London', teamPoints: 21, opponentPoints: 20}
    ],

    get players(){
        return this._players;
    },

    get  games(){
        return this._games;
    },
    addPlayer(firstName, lastName, age){
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints){
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this.games.push(game);
    }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Edinburgh', 54, 56);
team.addGame('Livingstone', 4, 62);
team.addGame('Blackburn', 32, 44);

console.log(team.players);
console.log(team.games);

