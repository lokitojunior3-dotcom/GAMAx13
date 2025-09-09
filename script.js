// Editor HTML Pro - Customizável
class CustomizableHTMLEditor {
    constructor() {
        this.codeInput = document.getElementById('codeInput');
        this.codeHighlight = document.getElementById('codeHighlight');
        this.lineNumbers = document.getElementById('lineNumbers');
        this.searchInput = document.getElementById('searchInput');
        this.searchResults = document.getElementById('searchResults');
        this.preview = document.getElementById('preview');
        this.lineCount = document.getElementById('lineCount');
        this.notification = document.getElementById('notification');
        
        this.selectedText = '';
        this.searchResultsData = [];
        this.draggedPanel = null;
        this.resizedPanel = null;
        this.panelStates = {};
        
        this.initializeEditor();
        this.bindEvents();
        this.setupDragAndResize();
        this.loadLayout();
    }

    initializeEditor() {
        // Código inicial mais avançado
        const initialCode = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🚀 Editor Customizável</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        
        .container {
            text-align: center;
            max-width: 800px;
            padding: 40px;
        }
        
        h1 {
            font-size: 4em;
            margin-bottom: 20px;
            text-shadow: 3px 3px 6px rgba(0,0,0,0.4);
            animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
            from { text-shadow: 3px 3px 6px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.2); }
            to { text-shadow: 3px 3px 6px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.4); }
        }
        
        .card {
            background: rgba(255,255,255,0.15);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 30px;
            margin: 20px 0;
            border: 2px solid rgba(255,255,255,0.2);
            transform: translateY(0);
            transition: all 0.4s ease;
        }
        
        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            border-color: rgba(255,255,255,0.4);
        }
        
        .btn {
            background: linear-gradient(45deg, #ff6b6b, #ff8e53);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 50px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 20px rgba(255,107,107,0.4);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .btn:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 12px 30px rgba(255,107,107,0.6);
        }
        
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        
        .feature {
            background: rgba(255,255,255,0.1);
            padding: 20px;
            border-radius: 15px;
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.3s ease;
        }
        
        .feature:hover {
            background: rgba(255,255,255,0.2);
            transform: scale(1.05);
        }
        
        .emoji {
            font-size: 2em;
            margin-bottom: 10px;
            display: block;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 Editor Customizável</h1>
        
        <div class="card">
            <h2>Painéis Flutuantes Incríveis!</h2>
            <p>Arraste, redimensione e personalize sua interface como quiser!</p>
            <button class="btn" onclick="showAlert()">Testar Interação</button>
        </div>
        
        <div class="features">
            <div class="feature">
                <span class="emoji">🪟</span>
                <h3>Painéis Móveis</h3>
                <p>Arraste e posicione onde quiser</p>
            </div>
            
            <div class="feature">
                <span class="emoji">🔒</span>
                <h3>Sistema de Trava</h3>
                <p>Trave painéis com um clique</p>
            </div>
            
            <div class="feature">
                <span class="emoji">🎨</span>
                <h3>Temas Personalizados</h3>
                <p>Múltiplos temas disponíveis</p>
            </div>
            
            <div class="feature">
                <span class="emoji">⚡</span>
                <h3>Super Rápido</h3>
                <p>Preview em tempo real</p>
            </div>
        </div>
    </div>
    
    <script>
        function showAlert() {
            alert('🎉 Parabéns! Você está usando o editor mais customizável do mundo!\\n\\n✨ Recursos:\\n• Painéis flutuantes\\n• Sistema de trava\\n• Redimensionamento\\n• Temas personalizados\\n• E muito mais!');
        }
        
        // Efeito de partículas
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.cssText = \`
                position: fixed;
                width: 4px;
                height: 4px;
                background: rgba(255,255,255,0.6);
                border-radius: 50%;
                pointer-events: none;
                z-index: -1;
                left: \${Math.random() * 100}vw;
                top: 100vh;
                animation: float \${3 + Math.random() * 4}s linear forwards;
            \`;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 7000);
        }
        
        // Criar partículas periodicamente
        setInterval(createParticle, 300);
        
        // CSS para animação das partículas
        const style = document.createElement('style');
        style.textContent = \`
            @keyframes float {
                to {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        \`;
        document.head.appendChild(style);
    </script>
</body>
</html>`;

        this.codeInput.value = initialCode;
        this.applySyntaxHighlighting();
        this.updateLineNumbers();
        this.updatePreview();
    }

    bindEvents() {
        // Eventos do editor
        this.codeInput.addEventListener('input', () => {
            this.applySyntaxHighlighting();
            this.updateLineNumbers();
            this.updatePreview();
        });

        this.codeInput.addEventListener('scroll', () => {
            this.syncScroll();
        });

        this.codeInput.addEventListener('select', () => {
            this.updateSelectedText();
        });

        this.codeInput.addEventListener('mouseup', () => {
            this.updateSelectedText();
        });

        // Eventos de busca
        this.searchInput.addEventListener('input', () => {
            this.performSearch();
        });

        // Eventos dos botões
        document.getElementById('searchBtn').addEventListener('click', () => {
            this.performSearch();
        });

        document.getElementById('copyBtn').addEventListener('click', () => {
            this.copyCode();
        });

        document.getElementById('cutBtn').addEventListener('click', () => {
            this.cutCode();
        });

        document.getElementById('pasteBtn').addEventListener('click', () => {
            this.pasteCode();
        });

        // Eventos de configurações
        document.getElementById('themeSelect').addEventListener('change', (e) => {
            this.changeTheme(e.target.value);
        });

        document.getElementById('fontSizeRange').addEventListener('input', (e) => {
            this.changeFontSize(e.target.value);
        });

        document.getElementById('resetLayoutBtn').addEventListener('click', () => {
            this.resetLayout();
        });

        document.getElementById('saveLayoutBtn').addEventListener('click', () => {
            this.saveLayout();
        });

        // Atalhos de teclado
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch (e.key) {
                    case 'f':
                        e.preventDefault();
                        this.searchInput.focus();
                        break;
                    case 's':
                        e.preventDefault();
                        this.showNotification('💾 Layout salvo automaticamente!');
                        this.saveLayout();
                        break;
                }
            }
        });
    }

    // Sistema de Drag & Drop e Resize
    setupDragAndResize() {
        const panels = document.querySelectorAll('.floating-panel');
        
        panels.forEach(panel => {
            const header = panel.querySelector('.panel-header');
            const resizeHandle = panel.querySelector('.resize-handle');
            
            // Drag functionality
            header.addEventListener('mousedown', (e) => {
                if (panel.classList.contains('locked')) return;
                
                this.draggedPanel = panel;
                const rect = panel.getBoundingClientRect();
                this.dragOffset = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                };
                
                panel.style.zIndex = '1000';
                document.addEventListener('mousemove', this.handleDrag);
                document.addEventListener('mouseup', this.handleDragEnd);
                e.preventDefault();
            });
            
            // Resize functionality
            resizeHandle.addEventListener('mousedown', (e) => {
                if (panel.classList.contains('locked')) return;
                
                this.resizedPanel = panel;
                const rect = panel.getBoundingClientRect();
                this.resizeStart = {
                    x: e.clientX,
                    y: e.clientY,
                    width: rect.width,
                    height: rect.height
                };
                
                document.addEventListener('mousemove', this.handleResize);
                document.addEventListener('mouseup', this.handleResizeEnd);
                e.preventDefault();
            });
        });
    }

    handleDrag = (e) => {
        if (!this.draggedPanel) return;
        
        const x = e.clientX - this.dragOffset.x;
        const y = e.clientY - this.dragOffset.y;
        
        // Limitar dentro da tela
        const maxX = window.innerWidth - this.draggedPanel.offsetWidth;
        const maxY = window.innerHeight - this.draggedPanel.offsetHeight;
        
        this.draggedPanel.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
        this.draggedPanel.style.top = Math.max(0, Math.min(y, maxY)) + 'px';
    };

    handleDragEnd = () => {
        if (this.draggedPanel) {
            this.draggedPanel.style.zIndex = '100';
            this.draggedPanel = null;
        }
        document.removeEventListener('mousemove', this.handleDrag);
        document.removeEventListener('mouseup', this.handleDragEnd);
    };

    handleResize = (e) => {
        if (!this.resizedPanel) return;
        
        const deltaX = e.clientX - this.resizeStart.x;
        const deltaY = e.clientY - this.resizeStart.y;
        
        const newWidth = Math.max(300, this.resizeStart.width + deltaX);
        const newHeight = Math.max(200, this.resizeStart.height + deltaY);
        
        this.resizedPanel.style.width = newWidth + 'px';
        this.resizedPanel.style.height = newHeight + 'px';
    };

    handleResizeEnd = () => {
        this.resizedPanel = null;
        document.removeEventListener('mousemove', this.handleResize);
        document.removeEventListener('mouseup', this.handleResizeEnd);
    };

    // Syntax Highlighting
    applySyntaxHighlighting() {
        const code = this.codeInput.value;
        let highlighted = this.escapeHtml(code);

        // DOCTYPE
        highlighted = highlighted.replace(
            /(&lt;!DOCTYPE[^&gt;]*&gt;)/gi,
            '<span class="doctype">$1</span>'
        );

        // Comentários
        highlighted = highlighted.replace(
            /(&lt;!--[\\s\\S]*?--&gt;)/g,
            '<span class="comment">$1</span>'
        );

        // Tags HTML
        highlighted = highlighted.replace(
            /(&lt;\\/?)([\\w-]+)([^&gt;]*?)(&gt;)/g,
            (match, open, tagName, attrs, close) => {
                let result = \`<span class="tag">\${open}\${tagName}</span>\`;
                
                if (attrs) {
                    // Atributos
                    attrs = attrs.replace(
                        /([\\w-]+)(=)(&quot;[^&quot;]*&quot;|&#x27;[^&#x27;]*&#x27;|[^\\s&gt;]+)/g,
                        '<span class="attribute">$1</span>$2<span class="string">$3</span>'
                    );
                    result += attrs;
                }
                
                result += \`<span class="tag">\${close}</span>\`;
                return result;
            }
        );

        this.codeHighlight.innerHTML = highlighted;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    updateLineNumbers() {
        const lines = this.codeInput.value.split('\\n');
        const lineNumbersText = lines.map((_, index) => index + 1).join('\\n');
        this.lineNumbers.textContent = lineNumbersText;
        this.lineCount.textContent = \`\${lines.length} linhas\`;
    }

    syncScroll() {
        this.codeHighlight.scrollTop = this.codeInput.scrollTop;
        this.codeHighlight.scrollLeft = this.codeInput.scrollLeft;
        this.lineNumbers.scrollTop = this.codeInput.scrollTop;
    }

    updateSelectedText() {
        const start = this.codeInput.selectionStart;
        const end = this.codeInput.selectionEnd;
        this.selectedText = this.codeInput.value.substring(start, end);
        
        const cutBtn = document.getElementById('cutBtn');
        cutBtn.disabled = !this.selectedText;
    }

    // Funcionalidade de busca
    performSearch() {
        const searchTerm = this.searchInput.value.trim();
        const code = this.codeInput.value;

        if (!searchTerm) {
            this.searchResults.innerHTML = '<p class="search-placeholder">Digite algo para buscar no código</p>';
            this.searchResultsData = [];
            return;
        }

        const matches = [];
        const lines = code.split('\\n');
        
        lines.forEach((line, lineIndex) => {
            const regex = new RegExp(searchTerm, 'gi');
            let match;
            
            while ((match = regex.exec(line)) !== null) {
                matches.push({
                    line: lineIndex + 1,
                    content: line.trim(),
                    position: match.index,
                    match: match[0]
                });
            }
        });

        this.searchResultsData = matches;

        if (matches.length === 0) {
            this.searchResults.innerHTML = '<p class="search-placeholder">Nenhum resultado encontrado</p>';
        } else {
            let resultsHtml = \`<div style="margin-bottom: 15px; color: rgba(255,255,255,0.8); font-size: 14px; font-weight: 600;">
                \${matches.length} resultado(s) encontrado(s)
            </div>\`;
            
            matches.forEach((match, index) => {
                resultsHtml += \`
                    <div class="search-result" onclick="editor.goToLine(\${match.line})">
                        <div class="search-result-line">Linha \${match.line}</div>
                        <div class="search-result-content">\${this.escapeHtml(match.content)}</div>
                    </div>
                \`;
            });
            
            this.searchResults.innerHTML = resultsHtml;
        }
    }

    goToLine(lineNumber) {
        const lines = this.codeInput.value.split('\\n');
        let position = 0;
        
        for (let i = 0; i < lineNumber - 1; i++) {
            position += lines[i].length + 1;
        }
        
        this.codeInput.focus();
        this.codeInput.setSelectionRange(position, position);
        
        const lineHeight = 21;
        const scrollTop = Math.max(0, (lineNumber - 5) * lineHeight);
        this.codeInput.scrollTop = scrollTop;
        this.syncScroll();
    }

    // Funcionalidades de edição
    async copyCode() {
        try {
            const textToCopy = this.selectedText || this.codeInput.value;
            await navigator.clipboard.writeText(textToCopy);
            
            if (this.selectedText) {
                this.showNotification('📋 Texto selecionado copiado!');
            } else {
                this.showNotification('📋 Todo o código copiado!');
            }
        } catch (err) {
            this.showNotification('❌ Erro ao copiar');
        }
    }

    async cutCode() {
        if (!this.selectedText) return;
        
        try {
            await navigator.clipboard.writeText(this.selectedText);
            this.replaceSelectedText('');
            this.showNotification('✂️ Texto recortado!');
        } catch (err) {
            this.showNotification('❌ Erro ao recortar');
        }
    }

    async pasteCode() {
        try {
            const text = await navigator.clipboard.readText();
            this.replaceSelectedText(text);
            this.showNotification('📄 Texto colado!');
        } catch (err) {
            this.showNotification('❌ Erro ao colar');
        }
    }

    replaceSelectedText(newText) {
        const start = this.codeInput.selectionStart;
        const end = this.codeInput.selectionEnd;
        const value = this.codeInput.value;
        
        this.codeInput.value = value.substring(0, start) + newText + value.substring(end);
        this.codeInput.setSelectionRange(start + newText.length, start + newText.length);
        
        this.applySyntaxHighlighting();
        this.updateLineNumbers();
        this.updatePreview();
        this.updateSelectedText();
    }

    // Preview em tempo real
    updatePreview() {
        const code = this.codeInput.value;
        const blob = new Blob([code], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        
        this.preview.src = url;
        
        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 1000);
    }

    // Configurações
    changeTheme(theme) {
        document.body.className = \`theme-\${theme}\`;
        this.showNotification(\`🎨 Tema alterado para \${theme}!\`);
    }

    changeFontSize(size) {
        document.documentElement.style.setProperty('--font-size', size + 'px');
        document.getElementById('fontSizeValue').textContent = size + 'px';
        this.showNotification(\`📏 Tamanho da fonte: \${size}px\`);
    }

    resetLayout() {
        const panels = document.querySelectorAll('.floating-panel');
        const defaultPositions = {
            codePanel: { top: '20px', left: '20px', width: '600px', height: '500px' },
            searchPanel: { top: '20px', right: '20px', width: '350px', height: '400px' },
            actionsPanel: { bottom: '200px', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '120px' },
            previewPanel: { bottom: '20px', left: '20px', width: '700px', height: '400px' },
            settingsPanel: { top: '50%', right: '20px', transform: 'translateY(-50%)', width: '300px', height: '350px' }
        };

        panels.forEach(panel => {
            const id = panel.id;
            const pos = defaultPositions[id];
            if (pos) {
                Object.assign(panel.style, pos);
            }
            panel.classList.remove('locked', 'minimized');
            panel.querySelector('.lock-btn').textContent = '🙄';
        });

        this.showNotification('🔄 Layout resetado!');
    }

    saveLayout() {
        const layout = {};
        const panels = document.querySelectorAll('.floating-panel');
        
        panels.forEach(panel => {
            const rect = panel.getBoundingClientRect();
            layout[panel.id] = {
                top: panel.style.top,
                left: panel.style.left,
                right: panel.style.right,
                bottom: panel.style.bottom,
                width: panel.style.width,
                height: panel.style.height,
                transform: panel.style.transform,
                locked: panel.classList.contains('locked'),
                minimized: panel.classList.contains('minimized')
            };
        });

        localStorage.setItem('editorLayout', JSON.stringify(layout));
        this.showNotification('💾 Layout salvo!');
    }

    loadLayout() {
        const saved = localStorage.getItem('editorLayout');
        if (!saved) return;

        try {
            const layout = JSON.parse(saved);
            const panels = document.querySelectorAll('.floating-panel');
            
            panels.forEach(panel => {
                const config = layout[panel.id];
                if (config) {
                    Object.assign(panel.style, config);
                    
                    if (config.locked) {
                        panel.classList.add('locked');
                        panel.querySelector('.lock-btn').textContent = '🧐';
                    }
                    
                    if (config.minimized) {
                        panel.classList.add('minimized');
                    }
                }
            });
        } catch (err) {
            console.error('Erro ao carregar layout:', err);
        }
    }

    // Notificações
    showNotification(message) {
        this.notification.textContent = message;
        this.notification.classList.remove('hidden');
        this.notification.classList.add('show');
        
        setTimeout(() => {
            this.notification.classList.remove('show');
            setTimeout(() => {
                this.notification.classList.add('hidden');
            }, 300);
        }, 3000);
    }
}

// Funções globais para os botões
function toggleLock(panelId) {
    const panel = document.getElementById(panelId);
    const lockBtn = panel.querySelector('.lock-btn');
    
    if (panel.classList.contains('locked')) {
        panel.classList.remove('locked');
        lockBtn.textContent = '🙄';
        editor.showNotification('🔓 Painel destravado!');
    } else {
        panel.classList.add('locked');
        lockBtn.textContent = '🧐';
        editor.showNotification('🔒 Painel travado!');
    }
}

function minimizePanel(panelId) {
    const panel = document.getElementById(panelId);
    
    if (panel.classList.contains('minimized')) {
        panel.classList.remove('minimized');
        editor.showNotification('📖 Painel expandido!');
    } else {
        panel.classList.add('minimized');
        editor.showNotification('📕 Painel minimizado!');
    }
}

function showPanel(panelId) {
    const panel = document.getElementById(panelId);
    panel.style.display = 'block';
    panel.classList.remove('minimized');
    editor.showNotification('👁️ Painel exibido!');
}

// Inicializar o editor
let editor;
document.addEventListener('DOMContentLoaded', () => {
    editor = new CustomizableHTMLEditor();
    
    // Efeito de carregamento
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Salvar layout automaticamente a cada 30 segundos
    setInterval(() => {
        editor.saveLayout();
    }, 30000);
});

