---
title: "Function to change the extension of current file in Emacs lisp"
date: 2017-06-25 22:59:59
categories: emacs
tags:
- emacs
- elisp
---

Today, I was going through my draft files on this blog and many of them where
**.html** files exported from Blogger (where I previously hosted this blog). And
I wanted to change them to `markdown` files with **.md** extension. I could
obviously use my [script to change extension of multiple
files](/how-to-change-extension-of-multiple/), but I thought, there should be a
way to do this within emacs.

So I took a deep dive into Emacs documentation and the end result was this function:

## Change file extension in Elisp

```lisp
  (defun my/change-file-extension ()
      (interactive)
      (let* ((new-extension (read-from-minibuffer "Type the new extension including the dot (.): "))
             (new-file-name (concat (file-name-sans-extension buffer-file-name) new-extension))
             (filename (buffer-file-name)))
        (rename-file filename new-file-name t)
        (rename-buffer (concat (file-name-sans-extension (buffer-name)) new-extension))
        (set-visited-file-name new-file-name)
        (set-buffer-modified-p nil)
        (message (concat "File renamed to " new-file-name))))
```

The above function will ask the user for the new extension, and then rename the
file, buffer and also set the visited file name to the filename with new
extension.

And on my [Spacemacs](http://spacemacs.org), I added this key-binding to that
function. "o" is reserved for user defined functions in Spacemacs.

```
  (spacemacs/set-leader-keys "ofrx" 'my/change-file-extension)
```

If you know a better way of doing this, please feel free to add a comment. Any other suggestions welcome as well.

## References
* https://www.gnu.org/software/emacs/manual/html_node/elisp/Text-from-Minibuffer.html
* https://www.gnu.org/software/emacs/manual/html_node/elisp/File-Name-Components.html
