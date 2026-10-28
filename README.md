# Simulado de Programação — 8º ano

20 questões, 10 gerais e 10 de Scratch; nome e turma obrigatórios; bloqueio local em clique direito / troca de aba; relatório automático por Google Planilhas **após configurar o coletor**.

## Publicar no GitHub Escolar
1. Entre no GitHub usando o login institucional. O e-mail institucional pode ser diferente do nome de usuário do GitHub.
2. Crie um repositório **novo**, por exemplo `simulado-programacao-8ano-2026`.
3. Faça upload de `index.html`, `style.css`, `questoes.js`, `config.js` e `app.js`.
4. Em **Settings > Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`. A página ficará em `https://USUARIO.github.io/simulado-programacao-8ano-2026/`.

## Relatório de notas
1. Crie uma planilha no Google Drive institucional e renomeie a primeira aba para `Resultados` (pode ficar vazia).
2. Abra **Extensões > Apps Script** e cole `google-apps-script.gs`.
3. Em **Implantar > Nova implantação > Aplicativo da Web**, execute como você e permita acesso de quem realizar a prova. A política do Google Workspace escolar pode restringir a opção.
4. Copie a URL `/exec` para `window.RESULTADOS_URL` em `config.js`; publique essa alteração no GitHub.
5. TESTE com um aluno fictício e verifique que a planilha recebeu nome, turma, acertos, nota e ocorrência.

**Limites importantes:** o GitHub Pages é público e não esconde o banco de questões nem as respostas no navegador. O bloqueio de aba e botão direito funciona como desestímulo, mas não impede outros dispositivos, outros navegadores, uso do modo desenvolvedor ou fraude. O relatório depende de conexão e permissões do Apps Script; `sendBeacon()` não garante entrega, por isso confira a planilha. Não publique gabarito em README. Proteja o acesso à planilha e evite compartilhar dados de estudantes publicamente. Os resultados são calculados no Apps Script com gabarito mantido no ambiente da professora, mas o gabarito também aparece em `questoes.js` na versão simples deste pacote; para prova de alto risco, migre questões e correção integralmente para um backend autenticado.
