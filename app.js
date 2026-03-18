import express from 'express';
import {PORT} from './config/env.js'

const app = express();

app.get('/', (req,res)=>{
    res.send('Welcome to the suscription tracker')
})

app.listen(3000,()=> {
    console.log(`Suscription tracker is running on http://localhost:${PORT}`);
});

export default app;