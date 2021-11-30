const {Article} = require('./models');

Article.findOne({where:{id:3}}).then(res=>{console.log("res", res)})