var scrape = require('scrape');

module.exports = {
    scrapeSubreddit : function(link) {
        scrape.request(link, function(err,$) {
            if (err) return console.error(err);
    
            $('div.link').each(function (div) {
                var score = div.find('div.score.unvoted').first();
                var link = div.find('a.title').first();
                console.log('[%s] %s', score.text, link.text);
            });
        });
    }
};
