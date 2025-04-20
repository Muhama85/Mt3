// وظائف التحميل الأولي
document.addEventListener('DOMContentLoaded', () => {
    initializeLineNumbers();
    setupEditorHighlighting();
});

// إنشاء أرقام الأسطر
function initializeLineNumbers() {
    const codeLines = document.getElementById('code-display').textContent.split('\n');
    const lineNumbers = document.querySelector('.line-numbers');
    
    lineNumbers.innerHTML = '';
    for (let i = 1; i <= codeLines.length; i++) {
        const lineNumber = document.createElement('div');
        lineNumber.textContent = i;
        lineNumbers.appendChild(lineNumber);
    }
}

// إعداد تسليط الضوء على الشفرة
function setupEditorHighlighting() {
    const codeDisplay = document.getElementById('code-display');
    const rawCode = codeDisplay.textContent;
    
    // تنسيق بسيط للكود HTML - في الإصدار الكامل يمكن استخدام مكتبة تسليط ضوء مثل Prism.js
    const highlightedCode = rawCode
        .replace(/(&lt;[\/]?[a-zA-Z0-9\-]+)/g, '<span class="tag">$1</span>')
        .replace(/([a-zA-Z\-]+)=/g, '<span class="attr">$1=</span>')
        .replace(/"([^"]*)"/g, '"<span class="value">$1</span>"')
        .replace(/(&lt;!--.*?--&gt;)/g, '<span class="comment">$1</span>');
    
    // تطبيق التنسيق (في الإصدار الحقيقي، نحتاج إلى معالجة أكثر تعقيدًا)
    // codeDisplay.innerHTML = highlightedCode; 
    // ملاحظة: هذا الكود التوضيحي بسيط، وقد يحتاج إلى محلل HTML أكثر تعقيدًا للتطبيق الفعلي
}

// معالجة زر الإنشاء الجديد
document.querySelector('.new-btn').addEventListener('click', () => {
    alert('إنشاء مشروع جديد!');
    // في التطبيق الحقيقي، يمكن أن يفتح هذا نافذة منبثقة أو ينتقل إلى صفحة إنشاء مشروع جديد
});

// معالجة زر محادثة الذكاء الاصطناعي
document.querySelector('.chat-toggle').addEventListener('click', () => {
    alert('فتح محادثة الذكاء الاصطناعي!');
    // في التطبيق الحقيقي، يمكن أن يفتح هذا واجهة محادثة
});
