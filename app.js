import express from 'express';

const app = express();

app.get('/', (req,res)=>{
    res.send('Welcome to the suscription tracker')
})

app.listen(3000,()=> {
    console.log("Suscription tracker is running on http://localhost:3000");
});

export default app;