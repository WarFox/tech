---
layout: post
title: "Javascript :: Ace Editor Positioning with Bootstrap3"
date: 2013-09-02T21:54:00+05:30
categories:
 - Javascript
---

[Ace editor](http://ace.c9.io/) is a fantastic option for live source code editor on the web. One problem you come across when using Ace Editor is with the default <tt>absolute</tt> positioning. Also <a href="https://github.com/ajaxorg/ace/issues/75">it doesn't fit inside a container div</a> by default. Here is how I overcame these issues.

The <a href="http://ace.c9.io/#nav=embedding">example</a> from ace website uses absolute positioning by default, as show below. But luckily, ace can work perfectly with <tt>relative</tt> positioning

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>ACE in Action</title>
    <style type="text/css" media="screen">
        #editor {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
    </style>
</head>
<body>
    <div id="editor">function foo(items) {
        var x = "All this is syntax highlighted";
        return x;
    }
    </div>
    <script src="/ace-builds/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
    <script>
        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/javascript");
    </script>
    </body>
</html>
```

In order to put ace-editor inside a container div, we can give relative positioning to the <code>editor</code> and remove the positioning attribs, like top, right, bottom and left.

```css
#editor {
    position: relative;
}
```

We also need to give height, otherwise editor won't show up.

```css
#editor {
    position: relative;
    height: 300px;
}
```

That said, when using Twitter Bootstrap, you can absolutely forget about relative positioning of ace. But we still need to set height, as ace does not fill. In the following jsfiddle, I have used Bootstrap's panel component for showing the editor.

<script src="https://gist.github.com/WarFox/6473534.js"></script>

Full Screen Result is available <a href="http://jsfiddle.net/deepumohanp/U5JtP/embedded/result/">here</a>. <a href="http://jsfiddle.net/deepumohanp/U5JtP/embedded/result/">http://jsfiddle.net/deepumohanp/U5JtP/embedded/result/</a>

Fiddle here: <a href="http://jsfiddle.net/deepumohanp/U5JtP/">http://jsfiddle.net/deepumohanp/U5JtP/</a>
 <iframe width="100%" height="300" src="http://jsfiddle.net/deepumohanp/U5JtP/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe> <h3>References</h3><ol><li><a href="http://stackoverflow.com/questions/6440439/how-do-i-make-a-textarea-an-ace-editor/">How do I make a textarea an ace editor?</a></li><li><a href="https://github.com/ajaxorg/ace/issues/75/">Ace doesn't fit inside a container div</a></li></ol>
