---
layout: post
title: "How to set up reminder for Subject line in Microsoft Outlook"
date: 2010-11-20T00:52:00+05:30
categories: Windows
tags:
 - Outlook
 - Windows XP
---

Forgot to mention subject in mail??? You always keep the subject line of email to the last, and sent a very important detailed mail without the subject line. A mail without a subject line brings a bad impression on us. There is some precaution you can take against this if you are using “Microsoft Outlook”. The following vbscript will add a simple reminder that checks whether subject blank and prompts reminder text.

Follow the simple steps mentioned below.
1. Open your Outlook,
2. Opens the Visual Basic Editor (Alt+F11) and open Project-Project 1 (left side). If this doesn’t open Project-Project 1, then Press Ctrl+R.
3. On the Left Pane, you can see “Microsoft Outlook Objects” or “Project1”, expand this. Now one can see the ThisOutLookSession
4. Double click on ThisOutLookSession. It will open up a Code Pane on the right hand side.
5. Copy and Paste the following code in the right pane (Code Pane) and save it

```
Private Sub Application_ItemSend(ByVal Item As Object, Cancel As Boolean)
Dim strSubject As String
strSubject = Item.Subject
If Len(Trim(strSubject)) = 0 Then
Prompt$ = "Subject is Empty. Are you sure you want to send the Mail?"
If MsgBox(Prompt$, vbYesNo + vbQuestion + vbMsgBoxSetForeground, "Check for Subject") = vbNo
Then
Cancel = True
End If
End If
End Sub
```

Now whenever you try to send a mail without subject, a pop-up is raised to remind you of the blank subject.

Please suggest better methods if you know. Please notify if it is not working for you.
