---

title: "How to set up reminder for Subject line in Microsoft Outlook"
date: 2010-11-20T00:52:00+05:30
categories:
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
6. Now whenever you try to send a mail without subject, a pop-up is raised to remind you of the blank subject.

Please suggest better methods if you know. Please notify if it is not working for you.
<iframe align="left" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://rcm.amazon.com/e/cm?t=thelaccur-20&amp;o=1&amp;p=8&amp;l=bpl&amp;asins=B004EBT5CU&amp;fc1=000000&amp;IS2=1&amp;lt1=_blank&amp;m=amazon&amp;lc1=0000FF&amp;bc1=000000&amp;bg1=FFFFFF&amp;f=ifr" style="align: left; height: 245px; padding-right: 10px; padding-top: 5px; width: 131px;"></iframe>
&nbsp;<iframe align="left" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://rcm.amazon.com/e/cm?t=thelaccur-20&amp;o=1&amp;p=8&amp;l=bpl&amp;asins=B002YKOXB6&amp;fc1=000000&amp;IS2=1&amp;lt1=_blank&amp;m=amazon&amp;lc1=0000FF&amp;bc1=000000&amp;bg1=FFFFFF&amp;f=ifr" style="align: left; height: 245px; padding-right: 10px; padding-top: 5px; width: 131px;"></iframe>&nbsp;<iframe align="left" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://rcm.amazon.com/e/cm?t=thelaccur-20&amp;o=1&amp;p=8&amp;l=bpl&amp;asins=B004HZYA6E&amp;fc1=000000&amp;IS2=1&amp;lt1=_blank&amp;m=amazon&amp;lc1=0000FF&amp;bc1=000000&amp;bg1=FFFFFF&amp;f=ifr" style="align: left; height: 245px; padding-right: 10px; padding-top: 5px; width: 131px;"></iframe>&nbsp;<iframe align="left" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://rcm.amazon.com/e/cm?t=thelaccur-20&amp;o=1&amp;p=8&amp;l=bpl&amp;asins=B003L77GRO&amp;fc1=000000&amp;IS2=1&amp;lt1=_blank&amp;m=amazon&amp;lc1=0000FF&amp;bc1=000000&amp;bg1=FFFFFF&amp;f=ifr" style="align: left; height: 245px; padding-right: 10px; padding-top: 5px; width: 131px;"></iframe>
