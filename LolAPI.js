const req = require('request');

module.exports = class LolAPI {
    constructor(){
        //속성
        this.key = "RGAPI-561f5c19-cf22-4bec-8926-686b20c386c6";
    }

    //기능
    loadSummoner(name){
        return new Promise( (resolve, reject) =>{
            let url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
            // name = encodeURI(name);

            const key = this.key;
            req.get(`${url}${name}?api_key=${this.key}`, (err, res, body) =>{
            let json = JSON.parse(body);
            let accountId = json.accountId;
            let matchUrl = `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${key}`;
        
            req.get(matchUrl, (err, res, body) => {
                let matchJson = JSON.parse(body).matches;
                resolve({summoner:json, match:matchJson});
            });
        
        });
        })
        
    }
}