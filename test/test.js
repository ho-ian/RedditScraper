var assert = require('assert');
var sinon = require('sinon');
var appcode = require('../app/app');

describe('formLink', function() {
    // PASSING ARGUMENTS //
    it('should return normal reddit link when no arguments are passed', function() {
        assert.equal(appcode.formLink([]), 'http://www.reddit.com');
    });
    it('should return reddit with subreddit link when one subreddit argument is passed', function() {
        assert.equal(appcode.formLink(['news']), 'http://www.reddit.com/r/news');
    });
    it('should return reddit with multiple subreddits link when one or more subreddit arguments are passed', function() {
        assert.equal(appcode.formLink(['news','science']), 'http://www.reddit.com/r/news+science');
    });
    it('should return reddit with new as the sort mechanism', function() {
        assert.equal(appcode.formLink(['new']), 'http://www.reddit.com/new/');
    });
    it('should return reddit with rising as the sort mechanism', function() {
        assert.equal(appcode.formLink(['rising']), 'http://www.reddit.com/rising/');
    });
    it('should return reddit with controversial as the sort mechanism', function() {
        assert.equal(appcode.formLink(['controversial']), 'http://www.reddit.com/controversial/');
    });
    it('should return reddit with top as the sort mechanism', function() {
        assert.equal(appcode.formLink(['top']), 'http://www.reddit.com/top/');
    });
    it('should return reddit with subreddit and new sort mechanism', function() {
        assert.equal(appcode.formLink(['new','news']), 'http://www.reddit.com/r/news/new/');
    });
    it('should return reddit with subreddit and new sort mechanism (arguments in reverse)', function() {
        assert.equal(appcode.formLink(['news','new']), 'http://www.reddit.com/r/news/new/');
    });
    it('should return reddit with subreddit and rising sort mechanism', function() {
        assert.equal(appcode.formLink(['rising','news']), 'http://www.reddit.com/r/news/rising/');
    });
    it('should return reddit with subreddit and rising sort mechanism (arguments in reverse)', function() {
        assert.equal(appcode.formLink(['news','rising']), 'http://www.reddit.com/r/news/rising/');
    });
    it('should return reddit with subreddit and new sort mechanism', function() {
        assert.equal(appcode.formLink(['new','news']), 'http://www.reddit.com/r/news/new/');
    });
    it('should return reddit with multiple subreddits and new sort mechanism', function() {
        assert.equal(appcode.formLink(['science','new','news']), 'http://www.reddit.com/r/science+news/new/');
    });
    it('should return reddit with subreddit and new sort mechanism (arguments in reverse)', function() {
        assert.equal(appcode.formLink(['news','new']), 'http://www.reddit.com/r/news/new/');
    });
    it('should return reddit with subreddit and new sort mechanism', function() {
        assert.equal(appcode.formLink(['new','news']), 'http://www.reddit.com/r/news/new/');
    });
    it('should return reddit with multiple subreddits and new sort mechanism', function() {
        assert.equal(appcode.formLink(['news','new','science']), 'http://www.reddit.com/r/news+science/new/');
    });
    it('should return reddit with subreddit and controversial sort mechanism', function() {
        assert.equal(appcode.formLink(['controversial','news']), 'http://www.reddit.com/r/news/controversial/');
    });
    it('should return reddit with subreddit and controversial sort mechanism (arguments in reverse)', function() {
        assert.equal(appcode.formLink(['news','controversial']), 'http://www.reddit.com/r/news/controversial/');
    });
    it('should return reddit with multiple subreddits and controversial sort mechanism', function() {
        assert.equal(appcode.formLink(['science','controversial','news']), 'http://www.reddit.com/r/science+news/controversial/');
    });
    it('should return reddit with subreddit and top sort mechanism', function() {
        assert.equal(appcode.formLink(['top','news']), 'http://www.reddit.com/r/news/top/');
    });
    it('should return reddit with subreddit and top sort mechanism (arguments in reverse)', function() {
        assert.equal(appcode.formLink(['news','top']), 'http://www.reddit.com/r/news/top/');
    });
    it('should return reddit with multiple subreddits and top sort mechanism', function() {
        assert.equal(appcode.formLink(['news','top','science']), 'http://www.reddit.com/r/news+science/top/');
    });
    it('should return reddit with subreddit and controversial with time sort mechanism (hour)', function() {
        assert.equal(appcode.formLink(['controversial','news','hour']), 'http://www.reddit.com/r/news/controversial/?&t=hour');
    });
    it('should return reddit with subreddit and controversial with time sort mechanism (day)', function() {
        assert.equal(appcode.formLink(['controversial','news','day']), 'http://www.reddit.com/r/news/controversial/?&t=day');
    });
    it('should return reddit with subreddit and controversial with time sort mechanism (week)', function() {
        assert.equal(appcode.formLink(['controversial','news','week']), 'http://www.reddit.com/r/news/controversial/?&t=week');
    });
    it('should return reddit with subreddit and controversial with time sort mechanism (month)', function() {
        assert.equal(appcode.formLink(['controversial','news','month']), 'http://www.reddit.com/r/news/controversial/?&t=month');
    });
    it('should return reddit with subreddit and controversial with time sort mechanism (year)', function() {
        assert.equal(appcode.formLink(['controversial','news','year']), 'http://www.reddit.com/r/news/controversial/?&t=year');
    });
    it('should return reddit with subreddit and controversial with time sort mechanism (all)', function() {
        assert.equal(appcode.formLink(['controversial','news','all']), 'http://www.reddit.com/r/news/controversial/?&t=all');
    });
    it('should return reddit with multiple subreddits and controversial with time sort mechanism (all)', function() {
        assert.equal(appcode.formLink(['news','controversial','science','all']), 'http://www.reddit.com/r/news+science/controversial/?&t=all');
    });
    it('should return reddit with subreddit and top with time sort mechanism (hour)', function() {
        assert.equal(appcode.formLink(['top','news','hour']), 'http://www.reddit.com/r/news/top/?&t=hour');
    });
    it('should return reddit with subreddit and top with time sort mechanism (day)', function() {
        assert.equal(appcode.formLink(['top','news','day']), 'http://www.reddit.com/r/news/top/?&t=day');
    });
    it('should return reddit with subreddit and top with time sort mechanism (week)', function() {
        assert.equal(appcode.formLink(['top','news','week']), 'http://www.reddit.com/r/news/top/?&t=week');
    });
    it('should return reddit with subreddit and top with time sort mechanism (month)', function() {
        assert.equal(appcode.formLink(['top','news','month']), 'http://www.reddit.com/r/news/top/?&t=month');
    });
    it('should return reddit with subreddit and top with time sort mechanism (year)', function() {
        assert.equal(appcode.formLink(['top','news','year']), 'http://www.reddit.com/r/news/top/?&t=year');
    });
    it('should return reddit with subreddit and top with time sort mechanism (all)', function() {
        assert.equal(appcode.formLink(['top','news','all']), 'http://www.reddit.com/r/news/top/?&t=all');
    });
    it('should return reddit with multiple subreddits and top with time sort mechanism (all)', function() {
        assert.equal(appcode.formLink(['science','top','news','all']), 'http://www.reddit.com/r/science+news/top/?&t=all');
    });

    // FAILING ARGUMENTS //
    it('should console error invalid link, too many new/risings and exit process with status 1 (new/rising)', function() {
        var consolespy = sinon.spy(console, "error");
        sinon.stub(process, 'exit');
        appcode.formLink(['new','rising']);
        assert(consolespy.calledWith("Invalid link. Too many arguments passed. Too many new/risings."));
        assert(process.exit.calledWith(1));
        sinon.restore();
    });

    it('should console error invalid link, too many new/risings and exit process with status 1 (new/new)', function() {
        var consolespy = sinon.spy(console, "error");
        sinon.stub(process, 'exit');
        appcode.formLink(['new','new']);
        assert(consolespy.calledWith("Invalid link. Too many arguments passed. Too many new/risings."));
        assert(process.exit.calledWith(1));
        sinon.restore();
    });

    it('should console error invalid link, too many controversial/top and exit process with status 1 (contr/top)', function() {
        var consolespy = sinon.spy(console, "error");
        sinon.stub(process, 'exit');
        appcode.formLink(['controversial','top']);
        assert(consolespy.calledWith("Invalid link. Too many arguments passed. Too many controversials/tops."));
        assert(process.exit.calledWith(1));
        sinon.restore();
    });

    it('should console error invalid link, too many controversial/top and exit process with status 1 (top/top)', function() {
        var consolespy = sinon.spy(console, "error");
        sinon.stub(process, 'exit');
        appcode.formLink(['top','top']);
        assert(consolespy.calledWith("Invalid link. Too many arguments passed. Too many controversials/tops."));
        assert(process.exit.calledWith(1));
        sinon.restore();
    });

    it('should console error invalid link, too many times argument. (w/contr)', function() {
        var consolespy = sinon.spy(console, "error");
        sinon.stub(process, 'exit');
        appcode.formLink(['day','month','controversial', 'year']);
        assert(consolespy.calledWith("Invalid link. Too many arguments passed. Too many times."));
        assert(process.exit.calledWith(1));
        sinon.restore();
    });

    it('should console error invalid link, too many times argument. (w/top)', function() {
        var consolespy = sinon.spy(console, "error");
        sinon.stub(process, 'exit');
        appcode.formLink(['day','month','top']);
        assert(consolespy.calledWith("Invalid link. Too many arguments passed. Too many times."));
        assert(process.exit.calledWith(1));
        sinon.restore();
    });

    it('should console error invalid link, new or rising with time argument. (new/time)', function() {
        var consolespy = sinon.spy(console, "error");
        sinon.stub(process, 'exit');
        appcode.formLink(['new','week']);
        assert(consolespy.calledWith("Invalid link. Too many arguments passed. New or rising can't have time argument."));
        assert(process.exit.calledWith(1));
        sinon.restore();
    });

    it('should console error invalid link, new or rising with time argument. (rising/time)', function() {
        var consolespy = sinon.spy(console, "error");
        sinon.stub(process, 'exit');
        appcode.formLink(['all','rising']);
        assert(consolespy.calledWith("Invalid link. Too many arguments passed. New or rising can't have time argument."));
        assert(process.exit.calledWith(1));
        sinon.restore();
    });

    it('should console error invalid link, new or rising with contr or top argument (new/contr)', function() {
        var consolespy = sinon.spy(console, "error");
        sinon.stub(process, 'exit');
        appcode.formLink(['new','controversial','science']);
        assert(consolespy.calledWith("Invalid link. Too many arguments passed. New or rising can't have controversial or top argument."));
        assert(process.exit.calledWith(1));
        sinon.restore();
    });

    it('should console error invalid link, new or rising with contr or top argument (rising/top)', function() {
        var consolespy = sinon.spy(console, "error");
        sinon.stub(process, 'exit');
        appcode.formLink(['top','rising','news']);
        assert(consolespy.calledWith("Invalid link. Too many arguments passed. New or rising can't have controversial or top argument."));
        assert(process.exit.calledWith(1));
        sinon.restore();
    });

});