---

title: "Youtube embed video html code without branding and controls (seekbar, play/pause and volume)"
date: 2013-12-31T15:12:00+05:30
categories:
 - Youtube
---


 
Youtube embedded player can be adjusted a lot using the parameters available here <a href="https://developers.google.com/youtube/player_parameters">https://developers.google.com/youtube/player_parameters</a>. Some parameters are available on both HTML5 and flash players and some are not.
 
Check out <a href="https://developers.google.com/youtube/youtube_player_demo">https://developers.google.com/youtube/youtube_player_demo</a>, for all availabel configuration and play with it.
 
For example you can hide the controllers in embedded video, <a name='more'></a> by setting parameter <code>controls</code> to 0
 
```html
<iframe 
    src="http://www.youtube.com/embed/p09QlQQazo0?controls=0" 
    width="640" height="360">
</iframe>
```
 <div class="container"><iframe src="http://www.youtube.com/embed/p09QlQQazo0?controls=0" width="640" height="360" ></iframe> 
Default video quality can be set using <code>vq</code>.
 ```html

<iframe src="http://www.youtube.com/embed/p09QlQQazo0?vq=hd720" style="border: 5px solid #cccccc; overflow: hidden;" width="640" height="360" frameborder="0"
allowfullscreen></iframe>
```
 <div class="container"><iframe src="http://www.youtube.com/embed/p09QlQQazo0?vq=hd720" style="border: 5px solid #cccccc; overflow: hidden;" width="640" height="360" frameborder="0" allowfullscreen></iframe> 
Youtube allows you to have its logo to be modest, by setting <code>modestbranding</code> to 1.
 ```html

<iframe src="http://www.youtube.com/embed/p09QlQQazo0?modestbranding=1" width="640" height="360" frameborder="0" allowfullscreen></iframe>
```
 <div class="container"><iframe src="http://www.youtube.com/embed/p09QlQQazo0?modestbranding=1" width="640" height="360" frameborder="0" allowfullscreen></iframe> 
We can also set all of these values together
 ```html

<iframe src="http://www.youtube.com/embed/p09QlQQazo0?rel=0&amp;autoplay=0&amp;showinfo=0&amp;modestbranding=1&amp;controls=0&amp;vq=hd720" 
style="border: 5px solid #cccccc; overflow: hidden;" width="640" height="360" 
frameborder="0" allowfullscreen></iframe>
```
 <div class="container"><iframe src="http://www.youtube.com/embed/p09QlQQazo0?rel=0&amp;autoplay=0&amp;showinfo=0&amp;modestbranding=1&amp;controls=0&amp;vq=hd720"  style="border: 5px solid #cccccc; overflow: hidden;" width="640" height="360"  frameborder="0" allowfullscreen></iframe>  <h3>References</h3><ol><li><a href="https://developers.google.com/youtube/player_parameters/">https://developers.google.com/youtube/player_parameters/</a></li><li><a href="http://www.labnol.org/internet/embed-youtube-videos-logoless/19532/">http://www.labnol.org/internet/embed-youtube-videos-logoless/19532/</a></li><li><a href="https://developers.google.com/youtube/youtube_player_demo/">https://developers.google.com/youtube/youtube_player_demo/</a></li></ol> 
