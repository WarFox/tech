---

title: "How to export Oracle database using windows batch file with auto file name"
date: 2010-07-17T23:05:00+05:30
categories:
 - Batch Script
 - Oracle
---
Hi folks, this tip is for the DBA’s and developers who do the tedious task - Daily back up of database!!! Every day run a script to export oracle database.Each day you would have to modify your export batch file with the current date and to do it. I thought of creating a batch file that accepts the user name and password and then exports the database and creates a dump file with auto filename. You will get a new dump file each day,with the date appended in the file name. No need of manually giving the date.
Copy paste the below code to create a batch file (*.bat)
cls
@echo off
REM Export Full database with auto filename for dump and log
REM This batch file will create the dump and log files in the same directory as of batch
REM File name syntax --> <SCHEMANAME>_<DD>_<MM>_<YYYY>
REM Auther: Deepu Mohan P, www.deepumohan.com
REM Created:  07-Sep-2009
REM Modified: 30-Sep-2009, 01-Oct-2009
REM Get user credentials
set /p schema=Enter username: 
set /p pwd=Enter password: 
set /p sid=SID: 
REM Following block is for getting the year, month and day
REM ======================================================
   FOR /f "tokens=2-4 skip=1 delims=(-)" %%G IN ('echo.^|date') DO (
      FOR /f "tokens=2 delims= " %%A IN ('date /t') DO (
         SET v_first=%%G
         SET v_second=%%H
         SET v_third=%%I
         SET v_all=%%A
      )
   )
      SET %v_first%=%v_all:~0,2%
      SET %v_second%=%v_all:~3,2%
      SET %v_third%=%v_all:~6,4%
REM =====================================================
exp %schema%/%pwd%@%sid% FILE=%user%_%dd%_%mm%_%yy%.dmp log=%user%_%dd%_%mm%_%yy%.log
compress=N rows=Y grants=Y buffer=500000 FULL=Y statistics=NONE
pause
If there is any issue, suggestion or feedback please put it in comments. Share it if you liked!