// Editor HTML Pro - JavaScript
class HTMLEditor {
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
        
        this.initializeEditor();
        this.bindEvents();
    }

    initializeEditor() {
        // Código inicial
        const initialCode = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site Incrível</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            color: white;
            min-height: 100vh;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }
        h1 {
            font-size: 3em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            animation: fadeInUp 1s ease;
        }
        .card {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 30px;
            margin: 20px 0;
            border: 1px solid rgba(255,255,255,0.2);
            animation: slideInUp 0.8s ease;
        }
        button {
            background: linear-gradient(135deg, #ff6b6b, #ff5252);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 25px;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(255,107,107,0.3);
        }
        button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(255,107,107,0.4);
        }
        .feature-list {
            text-align: left;
            max-width: 400px;
            margin: 0 auto;
        }
        .feature-list li {
            margin: 10px 0;
            padding: 8px 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Bem-vindo ao Futuro!</h1>
        <div class="card">
            <h2>Editor HTML Profissional</h2>
            <p>Este é um exemplo de código HTML moderno com CSS avançado e animações.</p>
            <button onclick="alert('🎉 Funciona perfeitamente! Este editor é incrível!')">
                Clique Aqui!
            </button>
        </div>
        <div class="card">
            <h3>🌟 Recursos Incríveis:</h3>
            <ul class="feature-list">
                <li>✨ Design responsivo e moderno</li>
                <li>🎨 Gradientes e efeitos visuais</li>
                <li>💫 Animações suaves e elegantes</li>
                <li>🔥 Interatividade avançada</li>
                <li>🚀 Performance otimizada</li>
                <li>📱 Compatível com mobile</li>
            </ul>
        </div>
        <div class="card">
            <h3>💡 Dica:</h3>
            <p>Edite este código no editor acima e veja as mudanças em tempo real!</p>
        </div>
    </div>
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
                        this.showNotification('💾 Use Ctrl+S do navegador para salvar');
                        break;
                }
            }
        });
    }

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
            /(&lt;!--[\s\S]*?--&gt;)/g,
            '<span class="comment">$1</span>'
        );

        // Tags HTML
        highlighted = highlighted.replace(
            /(&lt;\/?)([\w-]+)([^&gt;]*?)(&gt;)/g,
            (match, open, tagName, attrs, close) => {
                let result = `<span class="tag">${open}${tagName}</span>`;
                
                if (attrs) {
                    // Atributos
                    attrs = attrs.replace(
                        /([\w-]+)(=)(&quot;[^&quot;]*&quot;|&#x27;[^&#x27;]*&#x27;|[^\s&gt;]+)/g,
                        '<span class="attribute">$1</span>$2<span class="string">$3</span>'
                    );
                    result += attrs;
                }
                
                result += `<span class="tag">${close}</span>`;
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
        const lines = this.codeInput.value.split('\n');
        const lineNumbersText = lines.map((_, index) => index + 1).join('\n');
        this.lineNumbers.textContent = lineNumbersText;
        this.lineCount.textContent = `${lines.length} linhas`;
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
        
        // Atualizar estado do botão recortar
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
        const lines = code.split('\n');
        
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
            let resultsHtml = `<div style="margin-bottom: 15px; color: rgba(255,255,255,0.8); font-size: 14px; font-weight: 600;">
                ${matches.length} resultado(s) encontrado(s)
            </div>`;
            
            matches.forEach((match, index) => {
                resultsHtml += `
                    <div class="search-result" onclick="editor.goToLine(${match.line})">
                        <div class="search-result-header">
                            <span class="search-result-line">Linha ${match.line}</span>
                        </div>
                        <div class="search-result-content">${this.escapeHtml(match.content)}</div>
                    </div>
                `;
            });
            
            this.searchResults.innerHTML = resultsHtml;
        }
    }

    goToLine(lineNumber) {
        const lines = this.codeInput.value.split('\n');
        let position = 0;
        
        for (let i = 0; i < lineNumber - 1; i++) {
            position += lines[i].length + 1;
        }
        
        this.codeInput.focus();
        this.codeInput.setSelectionRange(position, position);
        
        // Scroll para a linha
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
        
        // Limpar URL anterior
        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 1000);
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

// Inicializar o editor
let editor;
document.addEventListener('DOMContentLoaded', () => {
    editor = new HTMLEditor();
    
    // Adicionar efeito de carregamento
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

