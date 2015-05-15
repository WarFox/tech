---
layout: post
title: "Spring Roo :: Adjust text box size/width"
date: 2013-03-07T12:05:00+05:30
categories:
 - Spring Roo
---
Spring Roo uses Dojo's <code>dijit.form.ValidationTextbox</code> widget by default. This means only way to adjust textbox size is to adjust the width of widget. And this has to be done with widget attributes using Spring.addDecoration(); available in <code>spring-js</code>.
``` javascript
Spring.addDecoration(new Spring.ElementDecoration({
    elementId : '_${sec_field}_id',
    widgetType : 'dijit.form.ValidationTextBox',
    widgetAttrs : {
        promptMessage: '${sec_field_validation}',
        invalidMessage: '${sec_field_invalid}',
        required : ${required},
        <c:if test="${not empty width}">style: 'width: ${width}',</c:if>
        ${sec_validation_regex} missingMessage : '${sec_field_required}'
    }
}));
```
Here I have used a new attribute <code>width</code>, which is added to <code>input.tagx</code>.
###Usage:
``` jsp
<field:input field="${field}" id="${id}" width="4em" z="u2Ah8NwmZxxKGJHNnTmYs2AL79o=" />
```
###Spring Roo input.tagx with adjustable width attribute
<script src="https://gist.github.com/WarFox/5105967.js"></script>
You may use the above gist as is or with modification, just don't forget to attribute.
