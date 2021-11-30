const {Article} = require('./models');

Article.destroy({
    where:{
        id:2
    }
})
.then(res=>{console.log('res', res)})