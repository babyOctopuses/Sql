const {Article} = require('./models');

const query ={
    where: {id:1}
}

Article.update({
    approved:'true'
}, query )
.then(res=>{console.log("res", res)})
.catch(err=>console.log("err", err))