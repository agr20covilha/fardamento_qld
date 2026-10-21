/* Gerado por ferramentas/site.js (repositório Fardamento). Não editar aqui. */
(function () {
  var EXEC = "https://script.google.com/macros/s/AKfycbxlMMTV64YjGc5MglaR1yO3_YnRtDjOdG45mjRVprcuTr8otPqpEp5TwKoXRs-aiG3C/exec", n = 0;
  function perguntar(cb) {
    if (!EXEC) return cb(null);
    var nome = 'fardamentoEstado_' + (++n) + '_' + Date.now(), s = document.createElement('script'), feito = false;
    var t = setTimeout(function () { fim(null); }, 10000);
    function fim(v) { if (feito) return; feito = true; clearTimeout(t); try { delete window[nome]; } catch (e) { window[nome] = undefined; }
      if (s.parentNode) s.parentNode.removeChild(s); cb(v); }
    window[nome] = function (r) { fim(r && typeof r.aberta === 'boolean' ? r : null); };
    s.onerror = function () { fim(null); };
    s.src = EXEC + '?estado=1&cb=' + nome;
    (document.head || document.documentElement).appendChild(s);
  }
  window.FardamentoEstado = { perguntar: perguntar };
})();
