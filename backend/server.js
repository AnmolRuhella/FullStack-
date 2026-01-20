import express from 'express'

const app = express();
app.use(express.static('dist'))

app.get('/', (req , res)=>{
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res)=>
{
const jokes = [{
 id : 1,
 title : 'A joke',
 des : 'another jokes '
},
{
 id : 2,
 title : 'A joke',
 des : 'another jokes '
    

},
{
 id : 3,
 title : 'A joke',
 des : 'another jokes '
    

},
{
 id : 4,
 title : 'A joke',
 des : 'another jokes '
    

}]

res.send(jokes)
})


const port = process.env.PORT || 4000 ;

app.listen(port, () =>{
    console.log(`Running on port :${port} `)
})