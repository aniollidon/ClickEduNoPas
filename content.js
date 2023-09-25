
// Llegeix la clau guardada
chrome.storage.sync.get(['arxiudepas'], function(result) {
    console.log('Arxiu de pas: ' + result.arxiudepas);
    
    if(result.arxiudepas &&  result.arxiudepas != '')
    {
        // Obté el formulari per l'ID
        var form = document.getElementById('frmArxiuPas');

        // Crea un objecte d'input de tipus fitxer
        var fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.name = 'userfile'; // Assegura't que aquest nom coincideixi amb el camp del formulari

        var container = new DataTransfer();

        // Crea un fitxer d'exemple
        var blob = new Blob([result.arxiudepas], { type: 'text/plain' });
        var file = new File([blob], 'auto_arxiudepas.txt');
        container.items.add(file);

        // Assigna el fitxer al camp d'entrada de tipus fitxer
        fileInput.files = container.files;

        // Adjunta l'input de fitxer al formulari
        form.appendChild(fileInput);

        // Opcionalment, pots enviar automàticament el formulari després d'adjuntar el fitxer
        form.submit();
    }
    else
    {
        alert('Cal configurar l\'arxiu de pas a la configuració de l\'extensió');
    }
  });


