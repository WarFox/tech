---
layout: post
title: "Spring Roo :: Adjusting Textarea rows and cols (width and height)"
date: 2013-02-20T22:18:00+05:30
categories:
 - Spring Roo
---
If you have been using Spring Roo for rapid application development, you know how messy things can get when you need UI customization. You could try to override the default standard.css  for most cases. But things like adjusting the rows and columns in Textarea is not that easy.
Spring Roo uses Apache Tiles, jspx, tagx and Dojo extensively for UI manipulation. So customization can be a a bit hard, when you are a beginner. I had to set rows and columns for textarea in the form as it always defaulted to <code>rows="3"</code> and <code>cols="20"</code>.
<code>textarea.tagx</code> can be found at the following location.
``` html
src/main/webapp/WEB-INF/tags/form/fields/textarea.tagx
```
I tried editing the textarea.tagx file to add cols and rows attributes to the <code>form:textarea</code> tag.
``` jsp
<form:textarea cols="${cols}" id="_${sec_field}_id" path="${sec_field}" disabled="${disabled}" rows="${rows}"/>
```
But this gets overridden when viewed in the browser. This behaviour is because <code>dijit.form.SimpleTextarea</code> widget is applied to the textarea after the DOM is loaded. So we have to set <code>cols</code> and <code>rows</code> as the <code>dijit.form.SimpleTextarea</code> widget's attributes.
``` javascript
Spring.addDecoration(new Spring.ElementDecoration({
    elementId : '_${sec_field}_id',
    widgetType : 'dijit.form.SimpleTextarea',
    widgetAttrs : {
        cols: ${cols},
        disabled : ${disabled},
        rows: ${rows}
    }
}));
```
I have done modification in <code>textarea.tagx</code> to include <code>cols</code> and <code>rows</code> as attributes. The full <code>textarea.tagx</code> can be found in the following gist.
<script src="https://gist.github.com/WarFox/4996682.js"></script> 
<em>Please note: The file is given .jsp extension to enable formatting in the gist. You just need textarea.tagx.</em>
Copy and paste this code to your existing textarea.tagx to enjoy the benefits of <code>cols</code> and <code>rows</code> attributes.
##Usage</h2>
Use this tagx as you would use the shipped <code>textarea.tagx</code>, with the new attributes.
``` jsp
<field:textarea cols="10" field="field" id="c_id" required="true" rows="40" z="/vGKcV8LFnbjXO2Rf9V1g3MB35o="/>
```
