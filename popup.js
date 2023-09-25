function save_options() {
    var arxiudepas = document.getElementById('arxiudepas').value;
   
    chrome.storage.sync.set({ arxiudepas: arxiudepas }, function() {
        console.log('Dades sincronitzades.');
        window.close();
    });
  }

  function restore_options() {
    chrome.storage.sync.get(['arxiudepas'], function(result) {

        if(result.arxiudepas &&  result.arxiudepas != '')
            document.getElementById('arxiudepas').value = result.arxiudepas;
        
        console.log('Valor: ' + result.arxiudepas);
    });
  }
  
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);