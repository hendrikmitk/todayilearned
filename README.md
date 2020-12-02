# todayilearned

A simple web app that displays the latest post from the [r/todayilearned](https://www.reddit.com/r/todayilearned/new/) subreddit.

## Description

The app fetches the latest post from the r/todayilearned subreddit, which can easily be retrieved directly from Reddit website just by adding `.json` to the URL.

### ToDo

-   [x] show activity indicator while loading latest TIL
-   [ ] save latest TIL to localStorage after fetching
-   [ ] only update when current TIL not in localStorage
-   [ ] add functionality to show second to last TILs

## Inspirations

-   **[How to Build an Automated Twitter Bot with Node.JS](https://youtu.be/Z2TXrO3Eipw)** - I saw this video when I learned how to create a Twitter bot with Node.js and discovered the trick with the Reddit URL, which I wanted to do something with.

## Changelog

### 2020-12-02

-   setup project, initialize git repository
-   show activity indicator while loading TIL
