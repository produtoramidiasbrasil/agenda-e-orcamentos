// Informações dos modelos
const modelosInfo = {
    '2d': {
        title: 'Comercial 2D',
        inclusos: 'Roteiro, Locução, Edição After Effects, Adobe PSD, Audacity',
        tempo: 'De 3 à 24h variando locutor escolhido'
    },
    '3d': {
        title: 'Comercial 3D',
        inclusos: 'Roteiro, Locução, Edição After Effects, Cinema 4D, Blender, Adobe PSD, Pro Tools',
        tempo: 'De 12 à 48h variando edição, tempo de produção e locutor escolhido'
    },
    'ia': {
        title: 'Atores IA',
        inclusos: 'Roteiro, Locução, Edição After Effects, Wan 2.2, Adobe PSD, Audacity',
        tempo: 'De 12 à 24h variando edição, tempo de produção e locutor escolhido'
    }
};

// Array para armazenar cores selecionadas
let coresSelecionadas = [];

// Número de telefone do WhatsApp
const WHATSAPP_NUMBER = '5562991620784';

// Inicializar quando o documento carregar
document.addEventListener('DOMContentLoaded', function() {
    inicializarEventos();
});

function inicializarEventos() {
    // Eventos para duração - auto-selecionam modelo
    const durationInputs = document.querySelectorAll('.duration-input');
    durationInputs.forEach(input => {
        input.addEventListener('change', function() {
            const modelValue = this.getAttribute('data-model');
            if (modelValue) {
                const modeloRadio = document.querySelector(`input[name="modelo"][value="${modelValue}"]`);
                if (modeloRadio) {
                    modeloRadio.checked = true;
                }
            }
        });
    });

    // Eventos para cores
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', selecionarCor);
    });

    // Eventos para áudio
    const playBtns = document.querySelectorAll('.play-btn');
    const stopBtns = document.querySelectorAll('.stop-btn');
    
    playBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            reproduzirAudio(this.getAttribute('data-file'));
        });
    });

    stopBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            pararAudio();
        });
    });

    // Evento do formulário
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', enviarFormulario);
}

function selecionarCor(e) {
    const colorElement = e.target;
    const colorName = colorElement.getAttribute('data-color');

    // Alternar seleção
    if (colorElement.classList.contains('selected')) {
        colorElement.classList.remove('selected');
        coresSelecionadas = coresSelecionadas.filter(cor => cor !== colorName);
    } else if (coresSelecionadas.length < 2) {
        colorElement.classList.add('selected');
        coresSelecionadas.push(colorName);
    } else {
        alert('Você pode selecionar apenas 2 cores!');
        return;
    }

    // Atualizar display de cores
    atualizarDisplayCores();
    
    // Atualizar input hidden
    document.getElementById('cores-selecionadas').value = coresSelecionadas.join(', ');
}

function atualizarDisplayCores() {
    const display = document.getElementById('cores-display');
    if (coresSelecionadas.length > 0) {
        display.textContent = `Cores selecionadas: ${coresSelecionadas.join(' - ')}`;
    } else {
        display.textContent = '';
    }
}

function reproduzirAudio(arquivo) {
    const audio = document.getElementById('audio-player');
    audio.src = arquivo;
    audio.play();
}

function pararAudio() {
    const audio = document.getElementById('audio-player');
    audio.pause();
    audio.currentTime = 0;
}

function enviarFormulario(e) {
    e.preventDefault();

    // Validar campos obrigatórios
    const modelo = document.querySelector('input[name="modelo"]:checked');
    const duracao = document.querySelector('input[name="duracao"]:checked');
    const tema = document.getElementById('tema').value.trim();
    const empresa = document.getElementById('empresa').value.trim();
    const locutor = document.querySelector('input[name="locutor"]:checked');
    const ofertas = document.getElementById('ofertas').value.trim();
    const vtType = document.querySelector('input[name="vt_type"]:checked');

    if (!modelo) {
        alert('Por favor, selecione um modelo!');
        return;
    }

    if (!duracao) {
        alert('Por favor, selecione a duração!');
        return;
    }

    if (coresSelecionadas.length !== 2) {
        alert('Por favor, selecione exatamente 2 cores!');
        return;
    }

    if (!tema) {
        alert('Por favor, digite o tema do VT!');
        return;
    }

    if (!empresa) {
        alert('Por favor, digite o nome da empresa!');
        return;
    }

    if (!locutor) {
        alert('Por favor, selecione um locutor!');
        return;
    }

    if (!vtType) {
        alert('Por favor, selecione o tipo de VT (Ofertas ou Divulgação)!');
        return;
    }

    if (!ofertas) {
        alert('Por favor, envie o texto!');
        return;
    }

    // Montar mensagem
    const mensagem = montarMensagem(modelo, duracao, tema, empresa, locutor, vtType, ofertas);

    // Enviar para WhatsApp
    enviarWhatsApp(mensagem);
}

function montarMensagem(modelo, duracao, tema, empresa, locutor, vtType, ofertas) {
    const modeloNome = {
        '2d': '2D',
        '3d': '3D',
        'ia': 'Atores IA'
    };

    let mensagem = `*Modelo:* ${modeloNome[modelo.value]}\n`;
    mensagem += `*Duração:* ${duracao.value} segundos\n`;
    mensagem += `*Cores:* ${coresSelecionadas.join(' | ')}\n`;
    mensagem += `*Tema:* ${tema}\n`;
    mensagem += `*Empresa:* ${empresa}\n`;
    mensagem += `*Locutor:* ${locutor.value}\n`;
    mensagem += `*Tipo de VT:* ${vtType.value === 'ofertas' ? 'VT Ofertas' : 'VT Divulgação'}\n`;
    mensagem += `*Texto:*\n${ofertas}`;

    return mensagem;
}

function enviarWhatsApp(mensagem) {
    // Codificar mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Criar URL do WhatsApp
    const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagemCodificada}`;
    
    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');
}

// Função para resetar o formulário após envio
function resetarFormulario() {
    document.getElementById('formulario').reset();
    coresSelecionadas = [];
    
    // Remover seleção visual das cores
    document.querySelectorAll('.color-option.selected').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Limpar display de cores
    document.getElementById('cores-display').textContent = '';
    document.getElementById('cores-selecionadas').value = '';
    
    // Limpar info do modelo
    document.getElementById('modelo-info').innerHTML = '';
}

// Função para validação de cores
function validarCores() {
    if (coresSelecionadas.length !== 2) {
        console.warn(`Apenas ${coresSelecionadas.length} cor(es) selecionada(s). É necessário selecionar 2 cores.`);
    }
}
