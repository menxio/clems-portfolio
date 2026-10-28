# Optional Windows helper: regenerate the social preview without image dependencies.
Add-Type -AssemblyName System.Drawing
$outputPath = Join-Path $PSScriptRoot '../public/social-card.png'
$bitmap = New-Object System.Drawing.Bitmap 1200,630
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$background = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#f4f1e9'))
$sage = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#e0e9ce'))
$ink = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#244f40'))
$muted = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#526457'))
$small = New-Object System.Drawing.Font 'Arial',16
$heading = New-Object System.Drawing.Font 'Arial',66,([System.Drawing.FontStyle]::Bold)
$serif = New-Object System.Drawing.Font 'Georgia',67,([System.Drawing.FontStyle]::Italic)
$caption = New-Object System.Drawing.Font 'Arial',20
try {
  $graphics.FillRectangle($background,0,0,1200,630)
  $graphics.FillEllipse($sage,800,-270,650,650)
  $graphics.DrawString('JOHN CLEMENT RUBIATO',$small,$ink,84,88)
  $graphics.DrawString('A little curiosity.',$heading,$ink,77,193)
  $graphics.DrawString('A lot of building.',$serif,$ink,77,304)
  $graphics.DrawString('Software Engineer | Web applications & automation',$caption,$muted,84,510)
  $bitmap.Save($outputPath,[System.Drawing.Imaging.ImageFormat]::Png)
} finally {
  $small.Dispose(); $heading.Dispose(); $serif.Dispose(); $caption.Dispose()
  $background.Dispose(); $sage.Dispose(); $ink.Dispose(); $muted.Dispose()
  $graphics.Dispose(); $bitmap.Dispose()
}
