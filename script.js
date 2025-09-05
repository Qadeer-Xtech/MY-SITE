document.addEventListener('DOMContentLoaded', () => {

    // Logic for the SEPARATE editor page
    if (document.getElementById('html-code')) {
        const htmlCode = document.getElementById('html-code');
        const cssCode = document.getElementById('css-code');
        const jsCode = document.getElementById('js-code');
        const outputFrame = document.getElementById('output-frame');

        function updateOutput() {
            // iframe ke document ko access karna
            const iframeDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;

            // Pura HTML document banana
            const fullHtml = `
                <html>
                <head>
                    <style>${cssCode.value}</style>
                </head>
                <body>
                    ${htmlCode.value}
                    <script>${jsCode.value}<\/script> 
                </body>
                </html>
            `;
            // Note: </script> ko <\/script> likha hai taake string break na ho.

            iframeDoc.open();
            iframeDoc.write(fullHtml);
            iframeDoc.close();
        }

        // Jab bhi kisi box mein type ho, output update karo
        htmlCode.addEventListener('input', updateOutput);
        cssCode.addEventListener('input', updateOutput);
        jsCode.addEventListener('input', updateOutput);

        // Page load pe aik bar chala do
        updateOutput();
    }

    // Logic for the SINGLE editor page
    if (document.getElementById('full-code')) {
        const fullCode = document.getElementById('full-code');
        const outputFrame = document.getElementById('output-frame');

        function updateSingleOutput() {
            const iframeDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write(fullCode.value);
            iframeDoc.close();
        }
        
        fullCode.addEventListener('input', updateSingleOutput);
        
        updateSingleOutput();
    }
});
