---
layout: post
title: "Javascript :: Ace Editor Positioning with Bootstrap3"
date: 2013-09-02T21:54:00+05:30
categories:
 - Javascript
---

[Ace editor](https://ace.c9.io/) is a fantastic option for live source code
editor on the web. One problem you come across when using Ace Editor is with the
default <tt>absolute</tt> positioning. Also [it doesn't fit inside a container
div](https://github.com/ajaxorg/ace/issues/75) by default. Here is how I
overcame these issues.

The [example](https://ace.c9.io/#nav=embedding) from ace website uses absolute
positioning by default, as show below. But luckily, ace can work perfectly with
<tt>relative</tt> positioning

``` html
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

In order to put ace-editor inside a container div, we can give relative
positioning to the `editor` and remove the positioning attribs, like
top, right, bottom and left.

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

That said, when using Twitter Bootstrap, you can absolutely forget about
relative positioning of ace. But we still need to set height, as ace does not
fill. In the following jsfiddle, I have used Bootstrap's panel component for
showing the editor.

<script src="https://gist.github.com/WarFox/6473534.js"></script>

Full Screen Result is available [here](https://jsfiddle.net/deepumohanp/U5JtP/embedded/result/). https://jsfiddle.net/deepumohanp/U5JtP/embedded/result/

Fiddle here: https://jsfiddle.net/deepumohanp/U5JtP/

 <iframe width="100%" height="300" src="https://jsfiddle.net/deepumohanp/U5JtP/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### References

- [How do I make a textarea an ace editor?](https://stackoverflow.com/questions/6440439/how-do-i-make-a-textarea-an-ace-editor/)
- [Ace doesn't fit inside a container div](https://github.com/ajaxorg/ace/issues/75/)
