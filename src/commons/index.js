const news = require('../../db/news')

function getAllNews(){
    return news
}

module.exports = getAllNews