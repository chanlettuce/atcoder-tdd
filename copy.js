// AtCoderの問題ページから入力値と出力値のJSONを取得するスクリプト
(function() {
  var selector = 'span.lang-en div.div-btn-copy + pre';
  var i = document.createElement('input');
  i.value = JSON.stringify(
    Array.from(document.querySelectorAll(selector))
      .map(e => e.innerText)
      .reduce((acc, v, i) => {
        let j = Math.floor(i / 2);
        if (!acc[j]) acc[j] = [];
        acc[j].push(v.trim().replace(/\n/g, '\\n'));
        return acc;
      }, [])
  );
  document.body.append(i);
  document.querySelector('body > input:last-child').select();
  if (document.execCommand('copy')) {
    document.querySelector('body > input:last-child').remove();
    alert('copied to clipboard.\n' + i.value);
  }
})();
