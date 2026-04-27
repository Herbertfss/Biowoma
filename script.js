// Biowoma - Guia Inteligente de Botânica
// Script básico de inicialização

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌿 Biowoma - Guia Inteligente de Botânica');
    console.log('Sistema inicializado com sucesso!');
    
    // Animação simples para os cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        // Adiciona um delay para cada card aparecer
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            // Adiciona classe para animação de entrada (mantém compatibilidade)
            card.classList.add('animate-in');
        }, 200 + (index * 100));
    });
    
    // Adiciona interação aos cards
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Verifica se o navegador suporta recursos modernos
    if ('querySelector' in document && 'addEventListener' in window) {
        console.log('✅ Navegador compatível com recursos modernos');
    }
});

// Função simples para simular upload de imagem
function simulateImageUpload() {
    alert('Funcionalidade de upload de imagem em desenvolvimento... 🌱');
}

// Função para simular diagnóstico
function simulateDiagnosis() {
    alert('Diagnóstico inteligente em desenvolvimento... 🔍');
}