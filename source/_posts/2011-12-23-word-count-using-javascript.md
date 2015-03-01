---

title: "JS: Word Count using Javascript"
date: 2011-12-23T21:07:00+05:30
---

I just made a <a href="http://www.deepumohan.com/projects/word-count/">word counter using Javascript</a>. Started it of as a <a href="http://jsfiddle.net/deepumohanp/jZeKu/">jsfiddle</a> attempt out of boredom. Thought it will help me count the words in assignments. blah.&nbsp;I have also made the source code available in <a href="https://github.com/WarFox/word-count">github</a>.

The counter is a simple javascript function, but have used jQuery selectors for simplicity and easiness. Initially my aim was to just get the count of words in the textarea by splitting the spaces and adding 1. But that approach is not accurate, when there are multiple spaces between words. So I used regular expression for replacing multiple spaces with a single space:&nbsp;<span style="background-color: white; font-family: 'Bitstream Vera Sans Mono','Courier New',monospace; font-size: 12px; line-height: 16px; white-space: pre;"><b><span style="color: #009926;">/\s+/gi</span>. </b></span>

``` javascript
counter = function() {
    var value = $('#text').val();
    if (value.length == 0) {
        $('#wordCount').html(0);
        $('#totalChars').html(0);
        $('#charCount').html(0);
        $('#charCountNoSpace').html(0);
        return;
    }
    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    var totalChars = value.length;
    var charCount = value.trim().length;
    var charCountNoSpace = value.replace(regex, '').length;
    $('#wordCount').html(wordCount);
    $('#totalChars').html(totalChars);
    $('#charCount').html(charCount);
    $('#charCountNoSpace').html(charCountNoSpace);
};
```

The results are set in &lt;span&gt; elements as follows:

``` html
<span id="wordCount">0</span>
<span id="totalChars">0</span>
<span id="charCount">0</span>
<span id="charCountNoSpace">0</span>
```

Now attach the counter function to change, keydown, keypress, keyup, blur and focus events of the textarea, to make sure the function called on every change. 

``` javascript
$(document).ready(function() {    
    $('#text').change(counter);
    $('#text').keydown(counter);
    $('#text').keypress(counter);
    $('#text').keyup(counter);
    $('#text').blur(counter);
    $('#text').focus(counter);
});
```

This can be accessed in the following links
<h3>    1. <a href="http://www.deepumohan.com/projects/word-count/">Word Counter using javascript</a></h3>
<h3>    2. <a href="https://github.com/WarFox/word-count">Source code for word counter using javascript</a></h3>
<h3>    3. <a href="http://jsfiddle.net/deepumohanp/jZeKu/">jsFiddle for word counter using javascript</a></h3>
Please report any bugs, issues or suggestions in github or just comment here.
<i>Share it if you liked!</i>
