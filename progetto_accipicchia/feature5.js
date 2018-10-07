/* variabili definite in PHP:
    n_giocatori
    nomi_giocatori 
    punteggio_giocatori
    nome_giocatore_corrente
    carte_in_mano
    
    servURL (costante)
*/    

<script type="text/javascript"

    function phpArrayToJS(item, index)
    {
        item = "<?php echo $nomi_giocatori[index]"      //CONTINUA DA QUI
    }

	function invia_dati(servURL, params, method) 
	{
    method = method || "post"; // il metodo POST è usato di default
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", servURL);
    for(var key in params) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);
        form.appendChild(hiddenField);
    }
    document.body.appendChild(form);
    form.submit();
	}
	
	function avvia_prossimo_round(var cartaCliccata)   /**questa funzione verrà richiamata scrivendo onclick="avvia_prossimo_round(this)"
                                                            ATTENZIONE: l'attributo name degli oggetti html che rappresentano le carte deve corrispondere al numero della carta 
                                                        **/
	{
        /*copio i valori delle variabili ricevute tramite PHP in un vettore da inviare dinuovo al server per richiedere la prossima pagina*/
		var params = new Array();
		params['n_giocatori'] = "<?php echo $n_giocatori; ?>";
        params['nomi_giocatori'] = new array();
        params['nomi_giocatori'].forEach(phpArrayToJS(item, index));
        params['punteggio_giocatori'] = "<?php echo $punteggio_giocatori; ?>";
        params['nome_giocatore_corrente'] = "<?php echo $nome_giocatore_corrente; ?>";
        
        
        /* ricavo il numero della carta selezionata*/
        params['carta_cliccata'] = cartaCliccata.name;
        
        params['carte_in_mano'] = "<?echo $carte_in_mano; ?>";
        
        var servURL = "<?php echo servURL?>"
        
        invia_dati(servURL, params, post); 
	}
	
</script>	
	