# RedditScraper
Since I am an avid user of Reddit myself, I wanted to create a tool that could scrape some of Reddit's data rather quickly.
I decided to create a CLI that could take in N number of arguments and output a the scores and titles of each post that would
appear in the first page.

## Getting Started
To get started using my app locally, just pull the repository and run 'npm init' in a terminal to install.
Then to use the CLI, run using 'reddit-scrape' or 'reddit-scrape *argument *argument *argument'.

### Prerequisites
Please have Node.js installed in order to install this CLI.

### Using the CLI Tool
Type 'reddit-scrape' into the terminal and running will scrape the front page of reddit for scores and titles.
You can scrape subreddits and multiple subreddits at once along with additional sorting arguments via this notation: 
'$reddit-scrape *argument *subreddit *argument'. Arguments and subreddits can be typed in any order and the tool will
interpret it for you to work. The list of arguments that can be used are ['new','rising','controversial','top']. These
four arguments will sort posts depending on reddit's algorithm. Both 'controversial' and 'top' have an additional argument
that you can add which is a time element that consists of ['hour','day','week','month','year','all']. 

## Built With
* ['scrape'] (https://www.npmjs.com/package/scrape)
