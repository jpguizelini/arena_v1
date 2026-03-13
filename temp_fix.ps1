# Script para aplicar correções do Bloco 4 em todos os arquivos Mapeamento.tsx

# Arquivos a serem corrigidos:
$files = @(
    "src\app\mega-light\components\Mapeamento.tsx",
    "src\app\rodovia\components\Mapeamento.tsx", 
    "src\app\mobiliario-urbano\components\Mapeamento.tsx",
    "src\app\painel-digital\components\Mapeamento.tsx",
    "src\app\duo-mub\components\Mapeamento.tsx"
)

foreach ($file in $files) {
    Write-Host "Processando $file..."
    
    # Ler conteúdo do arquivo
    $content = Get-Content $file -Raw
    
    # Adicionar import do GradientBorderCard
    $content = $content -replace "import Card3D from `"@/components/ui/Card3D`";", "import Card3D from `"@/components/ui/Card3D`";`nimport GradientBorderCard from `"@/components/shared/GradientBorderCard`";"
    
    # Substituir div + SVG por GradientBorderCard
    $oldPattern = '<div className="relative px-4 sm:px-6 md:px-8 pt-8 pb-10 text-center bg-black rounded-xl transition-shadow duration-200 group-hover:shadow\[0_0_28px_rgba\(195,211,63,0.28\),0_0_28px_rgba\(7,156,158,0.22\)\]">.*?</svg>'
    $newPattern = '<GradientBorderCard`n                        className="bg-black rounded-xl transition-shadow duration-200 group-hover:shadow-[0_0_28px_rgba(195,211,63,0.28),0_0_28px_rgba(7,156,158,0.22)]"`n                        innerClassName="px-4 sm:px-6 md:px-8 pt-8 pb-10 text-center"`n                    >'
    
    # Usar regex para substituição multilinha
    $content = $content -replace '(?s)<div className="relative px-4 sm:px-6 md:px-8 pt-8 pb-10 text-center bg-black rounded-xl transition-shadow duration-200 group-hover:shadow\[0_0_28px_rgba\(195,211,63,0.28\),0_0_28px_rgba\(7,156,158,0.22\)\]">.*?</svg>', $newPattern
    
    # Substituir </div> por </GradientBorderCard>
    $content = $content -replace '</div>', '</GradientBorderCard>'
    
    # Salvar arquivo modificado
    $content | Out-File $file -Encoding UTF8
    Write-Host "Concluído: $file"
}

Write-Host "Todos os arquivos foram processados!"
