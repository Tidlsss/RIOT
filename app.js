const req = require('request');


let url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
let name = "ss샤인ss";
name = encodeURI(name);

let key = "RGAPI-90ee2f57-e5f4-4213-b864-e10f6f28aebf";
req.get(`${url}${name}?api_key=${key}`, (err, res, body) =>{
    let json = JSON.parse(body);
    console.log(json);
    let accountId = json.accountId;
    let matchUrl = `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${key}`;

    req.get(matchUrl, (err, res, body) => {
        let matchJson = JSON.parse(body);
        console.log(matchJson);
    });

});