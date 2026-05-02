// ================================================
//   UNICIVE EAD — main.js
//   Para adicionar vídeos: edite o objeto tutoriais
//   Como achar o ID: youtube.com/watch?v=ID_AQUI
// ================================================

const tutoriais = {
    1: { numero: "01", titulo: "Como usar a plataforma EAD",              videoId: "COLE_O_ID_VIDEO_1" },
    2: { numero: "02", titulo: "Como conferir a área financeira",          videoId: "COLE_O_ID_VIDEO_2" },
    3: { numero: "03", titulo: "Como conferir o reconhecimento pelo MEC",  videoId: "COLE_O_ID_VIDEO_3" },
    4: { numero: "04", titulo: "Como preencher o formulário de matrícula", videoId: "COLE_O_ID_VIDEO_4" }
};

function abrirModal(n) {
    const t = tutoriais[n];
    if (!t) return;
    document.getElementById('modalNumero').textContent = t.numero;
    document.getElementById('modalTitulo').textContent  = t.titulo;
    document.getElementById('modalFrame').src = `https://www.youtube.com/embed/${t.videoId}?autoplay=1&rel=0`;
    document.getElementById('videoModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    document.getElementById('videoModal').classList.remove('open');
    document.getElementById('modalFrame').src = '';
    document.body.style.overflow = '';
}

function fecharModalOverlay(e) {
    if (e.target === document.getElementById('videoModal')) fecharModal();
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fecharModal();
});

// Acessibilidade: abrir cards com Enter ou Espaço
document.querySelectorAll('.tut-card').forEach((card, i) => {
    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            abrirModal(i + 1);
        }
    });
});
