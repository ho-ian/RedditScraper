#!/usr/bin/env node

var scraper = require('./scraperClass');

// reddit + /r/ + subredditname + new/rising/(contr/top) + (hour/day/week/month/year/all)
const reddit = 'http://www.reddit.com';
const newrising = ['new','rising'];
const contrtop = ['controversial', 'top'];
const time = ['hour','day','week','month','year','all'];
const keywords = newrising.concat(contrtop).concat(time);
var args = process.argv.slice(2);

function formLink(args) {
    var link = reddit;
    var iter = 0;
    var endingparam = "";
    var subreddits = [];
    var neworrising = [];
    var contrortop = [];
    var times = [];
    while (iter < args.length) {
        if (keywords.indexOf(args[iter]) == -1) { // not one of the keywords, so we process this argument as a subreddit
            subreddits.push(args[iter]);
        }
        else {  //process this as a keyword, so we need further determiners
            if (newrising.indexOf(args[iter]) > -1) {
                neworrising.push(args[iter]);
            }
            else if (contrtop.indexOf(args[iter]) > -1) {
                contrortop.push(args[iter]);
            }
            else {
                times.push(args[iter]);
            }
        }
        iter++;
    }
    if (neworrising.length > 1) {   // cant have new new, new rising, or rising rising
        console.error("Invalid link. Too many arguments passed. Too many new/risings.");
        process.exit(1);
    }
    if (contrortop.length > 1) {    // cant have contro contro, contro top, "" "" 
        console.error("Invalid link. Too many arguments passed. Too many controversials/tops.");
        process.exit(1);
    }
    if (times.length > 1) {    // cant have too many time arguments
        console.error("Invalid link. Too many arguments passed. Too many times.");
        process.exit(1);
    }
    if (neworrising.length > 0 && times.length > 0) {    // new or rising cant have time argument
        console.error("Invalid link. Too many arguments passed. New or rising can't have time argument.");
        process.exit(1);
    }
    if (neworrising.length > 0 && contrortop.length > 0) {   // new or rising cant have controversial or top argument
        console.error("Invalid link. Too many arguments passed. New or rising can't have controversial or top argument.");
        process.exit(1);
    }
    if (subreddits.length > 0) {
        endingparam = '/r/' + subreddits.join('+');
    }
    if (neworrising.length == 1) {
        endingparam += '/' + neworrising[0] + '/';
    }
    if (contrortop.length == 1) {
        endingparam += '/' + contrortop[0] + '/';
    }
    if (times.length == 1) {
        endingparam += '?&t=' + times[0];
    }
    return link + endingparam;
}

if (typeof exports != 'undefined') {
    exports.formLink = formLink;
}

function main() {
    scraper.scrapeSubreddit(formLink(args));
}

main();