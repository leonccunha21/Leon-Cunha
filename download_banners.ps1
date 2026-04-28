$headers = @{
  'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  'Accept' = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
  'Accept-Language' = 'pt-BR,pt;q=0.9'
  'Referer' = 'https://play.google.com/'
}

$apps = @(
  @{ id = 'com.zm.zmprojectgaleria';           name = 'playstore_hotdeck' },
  @{ id = 'com.galactic.empire';               name = 'playstore_galactic' },
  @{ id = 'com.zmstore.projectr';              name = 'playstore_guiaremedio' },
  @{ id = 'com.quantogastei.rolejava';         name = 'playstore_rolepay' },
  @{ id = 'lc.leonc.frasesmalucas';            name = 'playstore_frases' },
  @{ id = 'com.sorteador.leonc.sorteadordenumeros'; name = 'playstore_sorteador' },
  @{ id = 'com.zmstore.guiadotecnico';         name = 'playstore_guiatecnico' },
  @{ id = 'com.zmstore.projectb';              name = 'playstore_meipro' },
  @{ id = 'com.sorteador.leonc.nds02';         name = 'playstore_placar' }
)

foreach ($app in $apps) {
  $url = 'https://play.google.com/store/apps/details?id=' + $app.id + '&hl=pt_BR'
  Write-Host "Processing: $($app.name) - $($app.id)"
  
  try {
    $response = Invoke-WebRequest -Uri $url -Headers $headers -UseBasicParsing -TimeoutSec 20
    $content = $response.Content
    
    # Find feature graphic (wide banner, 1052x592)
    $imgPattern = 'https://play-lh\.googleusercontent\.com/[A-Za-z0-9_\-]+=w1052-h592'
    $imgMatches = [regex]::Matches($content, $imgPattern)
    
    if ($imgMatches.Count -gt 0) {
      $imgUrl = $imgMatches[0].Value
      Write-Host "  Found feature graphic: $imgUrl"
      $outPath = "public\screenshots\$($app.name).png"
      Invoke-WebRequest -Uri $imgUrl -Headers $headers -OutFile $outPath -TimeoutSec 20
      Write-Host "  Saved: $outPath"
    } else {
      # Try alternative pattern
      $imgPattern2 = 'https://play-lh\.googleusercontent\.com/[A-Za-z0-9_\-]+=w[0-9]+-h[0-9]+'
      $imgMatches2 = [regex]::Matches($content, $imgPattern2)
      Write-Host "  No w1052 pattern, found $($imgMatches2.Count) other image URLs"
      if ($imgMatches2.Count -gt 0) {
        $imgMatches2 | Select-Object -First 5 | ForEach-Object { Write-Host "    $($_.Value)" }
      }
    }
  } catch {
    Write-Host "  ERROR: $($_.Exception.Message)"
  }
  
  Start-Sleep -Milliseconds 500
}

Write-Host "Done!"
