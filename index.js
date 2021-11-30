const express = require('express')
const app = express();
const {Article} = require('./models');

app.use(express.json())

app.use(
    express.urlencoded({
        extended:false
    })
)

app.set('view engine', 'ejs')

//GET all articles
app.get('/articles', (req,res)=>{
    Article.findAll()
    .then(berita=>{
        res.render('articles/index', {berita})
        // res.status(200).json(articles)
    })
})

//GET article by ID
app.get('/article/:id', (req , res)=>{
    Article.findOne({
        where:{id:req.params.id}
    })
    .then(article=>{
        console.log('params', req.params)
        console.log('article', article)
        res.render('articles/show', {article})
        // res.status(200).json(article)
    })
})

//POST an article
app.post('/articles', (req,res)=>{
    Article.create({
        title:req.body.title,
        body:req.body.body,
        approved:req.body.approved
    })
    .then(article=>{
        res.status(201).json(article)
    }).catch(err=>{
        res.status.apply(422).json(`Can't create article`)
    })
})

app.get('/articles/create', (req, res)=>{
    res.render('articles/create');
})

//PUT an article
app.put('/articles/:id', (req,res)=>{
    Article.update({
        title:req.body.title,
        body:req.body.body,
        approved:req.body.approved
    },{
        where:{id:req.params.id}
    })
    .then(article=>{
        res.status(201).json(article)
    }).catch(err=>{
        res.status.apply(422).json(`Can't create article`)
    })
})

//DETELE an article
app.delete('/articles/delete/:id', (req,res)=>{
    Article.destroy({
        where:{id: req.params.id},
    })
    .then(article=>{
        if(article!=0){
            res.status(200).json(article)
        }else{
            res.status(404).json(article)
        }
    })
})

app.listen(3000, ()=>{console.log('OK')});