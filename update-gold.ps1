# update-gold.ps1
# Updates the --gold-300 / --gold-400 / --gold-600 CSS variables in index.css
# so --gold-400 matches the exact brand color #f6a800, with a derived
# lighter tint and darker shade for the other two.

# Adjust this if your index.css lives somewhere else inside the project
# (e.g. "src\index.css" or "src\styles\index.css").
$cssPath = Join-Path $PSScriptRoot "src\index.css"

if (-not (Test-Path $cssPath)) {
    Write-Error "index.css not found at: $cssPath  (edit `$cssPath at the top of this script to point at the right location)"
    exit 1
}

$backupPath = "$cssPath.bak"
Copy-Item $cssPath $backupPath -Force
Write-Host "Backup saved to $backupPath"

$content = Get-Content $cssPath -Raw

$replacements = @{
    '--gold-300:\s*#[0-9a-fA-F]{6};' = '--gold-300: #f9c659;'
    '--gold-400:\s*#[0-9a-fA-F]{6};' = '--gold-400: #f6a800;'
    '--gold-600:\s*#[0-9a-fA-F]{6};' = '--gold-600: #b97e00;'
}

foreach ($pattern in $replacements.Keys) {
    $content = [regex]::Replace($content, $pattern, $replacements[$pattern])
}

Set-Content -Path $cssPath -Value $content -NoNewline

Write-Host "Updated gold variables in $cssPath"
Write-Host "  --gold-300: #f9c659"
Write-Host "  --gold-400: #f6a800  (exact brand color)"
Write-Host "  --gold-600: #b97e00"
