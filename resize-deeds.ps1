# resize-deeds.ps1
# Resizes title-deed-2.jpg, title-deed-3.jpg, title-deed-4.jpg to a shared
# max dimension of 900px and re-compresses them into public/img/brand/
# Uses .NET System.Drawing, which ships with Windows - no installs needed.

Add-Type -AssemblyName System.Drawing

$maxDimension = 900
$jpegQuality  = 82

$sourceDir = Join-Path $env:USERPROFILE "Downloads"

$sourceFiles = @(
    "title-deed-2.jpg",
    "title-deed-3.jpg",
    "title-deed-4.jpg"
)

$outputDir = Join-Path $PSScriptRoot "public\img\brand"
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq "image/jpeg" }

$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality, $jpegQuality
)

foreach ($file in $sourceFiles) {
    $srcPath = Join-Path $sourceDir $file

    if (-not (Test-Path $srcPath)) {
        Write-Warning "Not found, skipping: $srcPath"
        continue
    }

    $img = [System.Drawing.Image]::FromFile($srcPath)

    $ratio = [Math]::Min($maxDimension / $img.Width, $maxDimension / $img.Height)
    if ($ratio -gt 1) { $ratio = 1 }  # never upscale

    $newWidth  = [int]($img.Width  * $ratio)
    $newHeight = [int]($img.Height * $ratio)

    $resized = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($resized)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)

    $outPath = Join-Path $outputDir $file
    $resized.Save($outPath, $jpegCodec, $encoderParams)

    $graphics.Dispose()
    $resized.Dispose()
    $img.Dispose()

    $origKB = [Math]::Round((Get-Item $srcPath).Length / 1KB, 1)
    $newKB  = [Math]::Round((Get-Item $outPath).Length / 1KB, 1)
    Write-Host "$file : ${newWidth}x${newHeight}, ${origKB}KB -> ${newKB}KB -> $outPath"
}

Write-Host "`nDone."
