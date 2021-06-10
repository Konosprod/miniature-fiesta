# miniature-fiesta
Greasemonkey extension to get a random vndb without screenshots.


## How to use

You just have to clink the link in the main side main menu.

## Custom

Actually, the script is configured to get random VN without screenshots, published after 2017 and already released. You can change the settings by changing urls in the script. You have to change 2 urls :

* `https://vndb.org/v?q=&ch=&f=0372_0bXb4741Ne11&s=31g` in the `getRandomPage()` function
* `https://vndb.org/v?f=0372_0bXb4741Ne11&p=PAGE&s=31g` in the `getRandomVn(page)` function

When you change your search settings on the site, the url changes. You just have to replace thoses urls by the one you get with your settings. Be careful of the `p=PAGE` in the second url, you have to put this in your url to support pages. Example, if I want the same settings, but only with english VN, the url that I get is 

* https://vndb.org/v?q=&ch=&f=0472_0bXb4741Ne112gen&s=31g

I replace the first url, by this one. On vndb, I go to the next page, and get the new url which becomes

* https://vndb.org/v?f=0472_0bXb4741Ne112gen&p=2&s=31g

Then in this url, I replace ethe `p=2` by `p=PAGE` to get 

* https://vndb.org/v?f=0472_0bXb4741Ne112gen&p=PAGE&s=31g

And replace the url in `getRandomVn(page)` by this one.

Save, refresh the page, and there you go.
