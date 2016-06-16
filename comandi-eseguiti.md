# Configurazione base strumenti Sviluppo Web

* Il simbolo di dollaro "$" indica che il comando dev'essere eseguito nella shell.

* Le parentesi [quadre] indicano l'inserimento di una di un pacchetto, ma non devono essere riportate

* Esempio: 
	$ bower search [nomepachetto] diventerà 
	$ bower search pure

## Installazione di Bower attraverso npm
'''shell
$ sudo npm install -g bower
'''

## Inizializzazione di npm nella directory del progetto, creazione del json ile
'''shell
$ npm init
'''

## Inizializzazione di Bower, creazione json file
'''shell
$ bower init
'''

## Ricerca dei pacchetti
'''shell
$ bower search [nomepachetto]
'''

## Installazione di PureCSS

'''shell
--save - salva il nome e la versione del pacchetto in "bower.json"
'''
$ bower install --save pure

## Aggiornare un pacchetto

'''shell
--save - aggiorna la versione del pacchetto nel file "bower.json"
'''
$ bower update --save [nomepachetto]