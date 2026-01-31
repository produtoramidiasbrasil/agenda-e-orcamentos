# Produtora Mídias Brasil - Site de Pedidos de VT

## 📋 Descrição
Site interativo para clientes solicitarem produção de Vídeos Comerciais (VTs) com a Produtora Mídias Brasil.

## 🎯 Funcionalidades

### 1. **Escolha do Modelo**
- Comercial 2D
- Comercial 3D
- Atores IA

Cada modelo exibe informações sobre o que está incluído e tempo de entrega.

### 2. **Seleção de Duração**
- 20 segundos
- 30 segundos
- +40 segundos (customizável)

### 3. **Escolha de Cores**
- Seleção de 2 cores principais
- Paleta completa de cores disponíveis
- Visualização em tempo real das cores selecionadas

### 4. **Informações do VT**
- Tema/Campanha (ex: Promoção, Liquidação)
- Nome da Empresa
- Tipo de VT:
  - VT Ofertas (com preços)
  - VT Divulgação (campanha)

### 5. **Envio de Ofertas**
- Campo para inserir produtos, preços e validade
- Suporta múltiplos produtos

### 6. **Seleção de Locutor**
- 8 Locutores disponíveis:
  - Carlos Goiano
  - André Ventura
  - Luciano Vaz
  - Cristiano Soares
  - Camargo
  - Flávio
  - Genildo
  - Gonzaga

- Reprodutor de áudio integrado para cada locutor

### 7. **Envio via WhatsApp**
- Resumo completo do pedido
- Formatação profissional
- Link direto para WhatsApp: +55 62 99162-0784

## 📁 Arquivos

### Estrutura de Diretórios
```
PROJETOS/
├── index.html              # Página principal
├── style.css               # Estilos CSS
├── script.js               # Funcionalidades JavaScript
├── Logo.png                # Logo da empresa
├── COMERCIAL 2D.png        # Imagem do modelo 2D
├── COMERCIAL 3D.png        # Imagem do modelo 3D
├── ATORES IA.png          # Imagem dos Atores IA
├── Carlos Goiano.wav       # Áudio locutor
├── André Ventura.wav       # Áudio locutor
├── Luciano Vaz.mp3         # Áudio locutor
├── Cristiano Soares.wav    # Áudio locutor
├── Camargo.mpeg            # Áudio locutor
├── Flávio.mp3              # Áudio locutor
├── Genildo.mp3             # Áudio locutor
├── Gonzaga.mp3             # Áudio locutor
└── Modelo Site VS code.jpg # Referência do design
```

## 🚀 Como Usar

### 1. Abrir o Site
- Salve todos os arquivos na mesma pasta
- Abra `index.html` em um navegador web

### 2. Preencher o Formulário
- Selecione o modelo de VT desejado
- Escolha a duração
- Selecione exatamente 2 cores
- Digite o tema da campanha
- Digite o nome da empresa
- Selecione o tipo de VT (Ofertas ou Divulgação)
- Se Ofertas, descreva os produtos e preços
- Escolha o locutor (pode testar a voz antes)
- Clique em "Enviar"

### 3. Confirmação
- O formulário será automaticamente enviado para WhatsApp
- Uma janela nova abrirá com a mensagem formatada

## 🎨 Personalização

### Alterar Número de WhatsApp
Edite `script.js` linha ~17:
```javascript
const WHATSAPP_NUMBER = '5562991620784'; // Seu número aqui
```

### Adicionar Novos Locutores
1. Adicione o arquivo de áudio na pasta
2. Edite `index.html` e adicione novo `<label class="locutor-option">` na seção "Locutores"

### Modificar Informações dos Modelos
Edite `script.js` linhas ~4-16:
```javascript
const modelosInfo = {
    '2d': {
        title: 'Seu Título',
        inclusos: 'Seus inclusos',
        tempo: 'Seu tempo'
    },
    // ...
};
```

## 💻 Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado
- Conexão com internet (para WhatsApp)

## 🔒 Segurança
- O site não armazena dados
- Todos os dados são enviados diretamente para WhatsApp
- Nenhuma informação é salva em servidor

## 📱 Responsividade
- Design totalmente responsivo
- Funciona em desktop, tablet e mobile
- Otimizado para telas pequenas

## 🎯 Fluxo do Usuário
1. Selecionar modelo (com preview e info)
2. Definir tempo/duração
3. Escolher cores
4. Digitar informações do VT
5. Escolher locutor (com preview de áudio)
6. Enviar para WhatsApp
7. Gerenciador recebe pedido formatado

## 📞 Suporte
Para problemas ou sugestões, entre em contato via WhatsApp.

---

**Produtora Mídias Brasil** | Desde 2012 ✨
