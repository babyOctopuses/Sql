const {Article} = require('./models')
Article.create({
    title:'hello world',
    body:'ini adalah body',
    approved:true
}).then(res=>{
    console.log("res", res);
})


