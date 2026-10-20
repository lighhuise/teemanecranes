@echo off
setlocal enabledelayedexpansion
echo Converting images to WebP...

for %%f in (*.jpg *.jpeg *.png *.bmp *.tiff) do (
    echo Converting %%f
    set "width=0"
    for /f %%w in ('magick identify -ping -format "%%w" "%%f" 2^>nul') do set "width=%%w"
    set "resize="
    if !width! GTR 1600 set "resize=-resize 1600 0"
    cwebp -q 80 !resize! "%%f" -o "%%~nf.webp"
)

echo.
echo Conversion complete!
pause


