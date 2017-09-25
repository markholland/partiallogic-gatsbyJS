webpackJsonp([0x61fbbcd3ea6e],{"./node_modules/json-loader/index.js!./.cache/json/telegram-html.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>So with the recent news of <strong>Facebook</strong> acquiring the Chat service <strong>Whatsapp</strong>, many felt they had to find an alternative. I don’t blame them, if a company thinks buying another company is worth x money then they expect to make a lot more than x money from owning it.</p>\n<p>But when people blindly make the switch they might easily be moving to a service with the same intentions or worse than what <strong>Facebook</strong> could turn <strong>Whatsapp</strong> into.</p>\n<p>One of these alternative chat services is <strong>Telegram</strong> that quite surprisingly was already making some impressive traction months before the <strong>Whatsapp</strong> acquisition came about.</p>\n<p>They follow a similar plan as <strong>Whatsapp</strong>, make a great experience and worry about making money once you have an impressive userbase. The difference with <strong>Telegram</strong> is that they are selling themselves as the <strong>“secure”</strong> alternative and because of this claim I’m here today.</p>\n<p>Obviously, why wouldn’t they sell themselves as the secure alternative, it makes great sense with all the <strong>NSA</strong>, <strong>GCHQ</strong> spying being a hot topic these days. Then they throw in that they are open source by making their <a href="%22https://github.com/DrKLO/Telegram%22">clients</a> available on github and detailing their <a href="%22https://core.telegram.org/mtproto%22">crypto technique</a>.</p>\n<p>All is well and good making your clients open source and I applaud any company that does but particularly when we’re talking about a chat service whose selling point is security, what use is open source clients when the server remains proprietary. All we can be sure of is that our messages are secure when they’re on the client, as soon as they’re sent to a black box server we have no certainty of what next happens to our messages. More worrying is that <a href="%22http://community.kde.org/GSoC/2014/Ideas#Project:_Telegram_Network_Support%22">multiple</a> <a href="%22http://wiki.apertium.org/wiki/Ideas_for_Google_Summer_of_Code%22">organizations</a> that have been accepted into this years Google Summer of Code have ideas on their project page to incorporate telegram into their project, this seems crazy to me and incredibly shortsighted.</p>\n<p>Next, detailing your crypto that super Ph.Ds in Maths created is all well and good until people start debunking its security within <a href="%22http://unhandledexpression.com/2013/12/17/telegram-stand-back-we-know-maths/%22">days</a>. Also, making a <a href="%22http://thoughtcrime.org/blog/telegram-crypto-challenge/%22">competition with flawed rules</a>  is a surefire way to turn the community against you even more.</p>\n<p>But let’s step back for a second and imagine that <strong>Telegram</strong> was identical to <strong>Whatsapp</strong>, no claims of security and people use it fully understanding that they have no control over anything once it has been sent, who exactly is <strong>Telegram</strong>? A small startup out to disrupt? Nop, not even close, <strong>Telegram</strong> was founded by the same cofounders of <strong><a href="%22http://en.wikipedia.org/wiki/VK_(social_network)%22">VK</a></strong>, the second largest social network in Europe. That fact alone should keep people far away from <strong>Telegram</strong>, you don’t trust <strong>Facebook</strong>? A site you use everyday? But you do trust someone in the exact same business of profiting from it’s users information that you don’t even use?</p>\n<p>So what chat service should you use if you want everything to be secure? Well, there probably isn’t and there never will be. There are options like <a href="%22https://crypto.cat%22">Cryptocat</a> but how sure can you really be?</p>\n<p>And this is where I’ve ended up, it all comes down to how much you <strong>Trust</strong> the companies whose products you use, my messenger of choice is currently <strong>Google Hangouts</strong>, it’s probably not secure, <strong>Google</strong> can read everything, the clients suck, but I’ve been using <strong>Google</strong> services for a long time and until now nothing bad has happened so a level of trust has been built up. And that’s it, it’s as safe to use as my trust in the company.</p>\n<p>Nothing more.</p>',frontmatter:{date:"March 09, 2014",path:"/telegram.html",tags:["tag"],title:"FOSS isn't enough STOP Trust is everything STOP",image:{childImageSharp:{resize:{src:"/markholland.github.io/static/4e9a95cf7025f7dc1da351e45e9f97b3-57c0c.jpg"}}}}}},pathContext:{prev:{excerpt:"During the summer of 2014 I have been making the most of not working by trying out lots of different technologies, Node.js, Verilog, Apple’s new hotness Swift and improving on my still novice status as an Android developer. This post is regarding my...",html:'<p>During the summer of 2014 I have been making the most of not working by trying out lots of different technologies, Node.js, Verilog, Apple’s new hotness Swift and improving on my still novice status as an Android developer.</p>\n<p>This post is regarding my recent efforts with Android. After finally grasping most of the Android staples that had always baffled me before, Content Providers, Cursor Loaders, Custom Adapaters, I quickly realised that I could now build the app I had worked on previously in Google Summer of Code 2013, ocw-android but with all these great tools provided by Android.</p>\n<p>So in the space of a little under 3 weeks I completely re wrote the app from scratch and have ended up with something that runs really well and is also fun to use.</p>\n<p>On first opening the app, all data is downloaded as json, parsed and then stored in an sqlite database, any subsequent openings of the app will not require internet and will just load the local data until the user chooses to “Pull To Refresh”.</p>\n<p></p>\n<p>All the views are bound to cursors pulled from the content provider so that should the data in the database change while the service that downloads the json data is running, the views will update automatically.</p>\n<p>On the usability side there are some cool features like a two pane tablet interface.</p>\n<p></p>\n<p>And a navigation drawer for filtering the event list by date.</p>\n<p></p>\n<p>Seeing as my Summer is now rapidly drawing to a close I have decided to wrap up my work on the app for now but you can download the current snapshot of ocw-android-2014 from the Play Store right now!</p>\n<html><head></head><body><center><a href="https://play.google.com/store/apps/details?id=com.partiallogic.ocw_android_2014">\n  \n</a></center></body></html>\n<p>You can also find all the source code on Github as an Android Studio project.</p>\n<html><head></head><body><center><a href="https://github.com/markholland/ocw-android">\n  \n</a></center></body></html>',id:"/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/posts/2014-08-29-ocw/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-08-29T12:00:00+00:00",path:"/ocw-2014.html",tags:["tag"],title:"Android revisited"}},next:{excerpt:"Best Movies: 2013  was a tricky year for movies, I was starting to wonder if I could even make up a list as I couldn’t think of any blockbusters I’d want to watch again(Apart from White House Down but I’d lose all credibility if I put that on a “Best...",html:'<h3 id="best-movies"><a href="#best-movies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><strong>Best Movies:</strong></h3>\n<p><strong>2013</strong> was a tricky year for movies, I was starting to wonder if I could even make up a list as I couldn’t think of any blockbusters I’d want to watch again(Apart from White House Down but I’d lose all credibility if I put that on a “Best of” list), thankfully good old <strong>indies</strong> came to the rescue.</p>\n<ul>\n<li>\n<p><strong>The Place Beyond The Pines</strong> </p>\n</li>\n<li>\n<p><strong>The Way Way Back</strong> </p>\n</li>\n<li>\n<p><strong>The Kings of Summer</strong> </p>\n</li>\n<li>\n<p><strong>Sound City</strong> </p>\n</li>\n</ul>\n<p>  <strong>Footnote:</strong><br>\nI feel like this list could easily change over the next couple of months as there are a lot of movies I’ve yet to see from 2013 such as “Dallas Buyers Club”, “The Counselor” and “The Wolf of Wall Street” all of which could easily end up topping my list. A similar thing happened for <strong>2012</strong> with “Django Unchained”.</p>\n<h3 id="best-music"><a href="#best-music" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><strong>Best Music:</strong></h3>\n<ul>\n<li>\n<p><strong>Chunk! No, Captain Chunk! - Pardon My French</strong></p>\n</li>\n<li>\n<p><strong>Paramore - Paramore</strong></p>\n</li>\n<li>\n<p><strong>A Day to Remember - Common Courtesy</strong></p>\n</li>\n<li>\n<p><strong><a href="%22http://blacknumbers.bandcamp.com/album/born-to-make-believe-part-1%22">The Here and Now - Born to Make Believe</a></strong>  </p>\n</li>\n</ul>\n<h3 id="video-games"><a href="#video-games" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><strong>Video Games:</strong></h3>\n<ul>\n<li>\n<p><strong>Outlast (pc)</strong><br>\nAs one redditor put it perfectly “Nope simulator 2013”. Never has a game put me so on edge, I found I had to play this game in 10 minute intervals as any more would start to seriously affect me with the unbearable tension it creates.</p>\n</li>\n<li>\n<p><strong>Grand theft Auto V (ps3)</strong><br>\nIf this had been a pc release it would have been at the top of my list but after finishing the main story I couldn’t bring myself to 100% it with the lacklustre graphics and loading times that entails a game of such scale being forced onto a console. Still an amazing game that doesn’t dissapoint, <strong>Rockstar</strong> definitely delivered with this next installment in the franchise.</p>\n</li>\n<li>\n<p><strong>Bioshock: Infinite (pc)</strong><br>\nIt isn’t often that as soon as I finish a game I proceed to start again from the beginnning almost immediately, great mechanics, great story, great graphics. <strong>10/10</strong>.</p>\n</li>\n<li>\n<p><strong>The Stanley Parable (pc)</strong><br>\nIt’s hard to put this in the main list when it’s such a short “game”\nbut it has come such a long way since the original <strong>Half Life</strong> mod that it should definitely be mentioned, also, the demo was genius and took meta to a whole new level.</p>\n</li>\n</ul>\n<h3 id="best-gadget"><a href="#best-gadget" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><strong>Best Gadget:</strong></h3>\n<ul>\n<li>There have been lots of shiny new devices(<strong>Macbooks, iPhones</strong>..), innovations(<strong>Pebble, Oculus Rift</strong>) but I feel like nothing has really delivered or wowed me yet so there’s nothing for me to write about here really.</li>\n</ul>\n<h3 id="fail-of-the-year"><a href="#fail-of-the-year" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><strong>Fail of the year:</strong></h3>\n<ul>\n<li>Apple from a software standpoint, for the first time I’m encountering buggy programs and unsolvable problems which is very disheartening and I hope they <strong>refocus</strong> and stop worrying about yearly OS releases and dedicate more time refining their great software offerings.</li>\n</ul>',id:"/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/posts/2014-01-01-best-of-2013/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2014-01-01T12:00:00+00:00",path:"/best-of-2013.html",tags:["tag"],title:"Best of 2013"}}}}}});
//# sourceMappingURL=path---telegram-html-6e0484eec91874371d95.js.map