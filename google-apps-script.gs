// Cole este script na Planilha Google da professora (Extensões > Apps Script).
// IMPORTANTE: em GitHub Pages público, o conteúdo do JavaScript e as respostas podem ser inspecionados.
// Para segurança forte do gabarito, use um servidor privado para corrigir; este modelo é para uso supervisionado.
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var sh=ss.getSheetByName('Resultados')||ss.insertSheet('Resultados');
  var heads=['Data/hora','Nome do aluno','Turma','Acertos / 20','Nota / 10','Situação','Ocorrência','Tempo (segundos)','ID da tentativa','Respostas (A–D)'];
  var lock=LockService.getScriptLock();lock.waitLock(10000);
  try{
    if(sh.getLastRow()===0)sh.appendRow(heads);
    var a=String(data.respostas||'').split(',');
    var key=[1,0,2,1,3,2,0,3,1,2,1,2,0,3,0,1,2,0,3,2];
    var hits=key.reduce(function(n,k,i){return n+(a[i]===['A','B','C','D'][k]?1:0)},0);
    var id=String(data.id||'');
    var ids=sh.getLastRow()>1?sh.getRange(2,9,sh.getLastRow()-1,1).getValues().flat():[];
    if(ids.indexOf(id)<0){
      // Proteja esta planilha: nunca aceite pontuação enviada pelo navegador.
      sh.appendRow([new Date(),String(data.nome||'').slice(0,100),String(data.turma||'').slice(0,30),hits,Number((hits/2).toFixed(1)),String(data.status||''),String(data.ocorrencia||''),Number(data.duracao_segundos||0),id,String(data.respostas||'')]);
    }
    return ContentService.createTextOutput('OK');
  } finally {lock.releaseLock()}
}
