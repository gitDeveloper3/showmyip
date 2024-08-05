@echo off
REM Build script to package the Firefox extension

REM Remove existing zip file
del showmyip.zip

REM Create a new zip file
powershell Compress-Archive -Path showmyip -DestinationPath showmyip.zip

echo Build complete. The extension is packaged as showmyip.zip.
pause
