import app from "./app";
import http from "http";
import sequelzie from "./models";
const httpServer = http.createServer(app.app);

const Myserver = httpServer.listen(process.env.EXPRES_PORT,async() => {
    console.log(`자 포폴 서버 켜졌습니다. !! http://localhost:${process.env.EXPRES_PORT}`);
    await sequelzie.authenticate()
     .then(async () => {
         console.log("연결 되었습니다.");
     })
     .catch((e) => {
         console.log('TT : ', e);
     })

})
