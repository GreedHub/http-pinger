require('dotenv').config({ path: './.env' });
import * as express from 'express';

let axios = require('axios')

let app = express();
const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("ok");
})

app.listen(port,()=>{
  console.log(port);

  var t = setInterval(pingServers,1000*60*5);

});

function pingServers():void{
    
    let servers = process.env.SERVERS.split(',');

    servers.forEach(server=>{
        pingServer(server);
    })

}

function pingServer(url:string){
    console.log(url)
    const options={
        method:'get',
        url
    };

    axios(options)
        .then(response=>{
            console.log(response.data);
        })
        .catch(err=>{
            console.log(err);
        })

}