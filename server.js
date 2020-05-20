const express=require('express')
const app=express()
const product=[
    {
        name:'bolt',
        descreption:"it is used to join to thing",
        price:100
     },
     {
        name:'nut',
        descreption:"it is used for bolt",
        price:100
     },
     {
        name:'brush',
        descreption:"it is used to clean",
        price:30
     },
]
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello')
})
app.get('/api/product',(req,res)=>{
    res.send(product)
})
app.get('/api/product/:id',(req,res)=>{
   
    res.send(product[req.params.id])
})
app.post('/api/prodect/new',(req,res)=>{

})
app.delete('/api/prodect/:id',(req,res)=>{
    
})  

const port =process.env.PORT||3001
app.listen(port,()=>console.log(`listen in ${port}`))