# Configurazione base strumenti Sviluppo Web

* Il simbolo di dollaro "$" indica che il comando dev'essere eseguito nella shell.

* Le parentesi [quadre] indicano l'inserimento di una di un pacchetto, ma non devono essere riportate

* Esempio:

```shell
	$ bower search [nomepachetto] diventerà
	$ bower search pure
```

## Scorciatoie Tastiera
* Accento grave: *ALTGR + '*

## Indice
1. [Installazione di Bower](#installazione-di-Bower-attraverso-npm)
2. [Aggiornare un pacchetto](#aggiornare-un-pacchetto)

### Installazione di Bower attraverso npm

```shell
$ sudo npm install -g bower
```

### Inizializzazione di npm nella directory del progetto e creazione del file JSON

```shell
$ npm init
```

### Inizializzazione di Bower, creazione JSON file
```shell
$ bower init
```

### Ricerca dei pacchetti
```shell
$ bower search [nomepachetto]
```

### Installazione di PureCSS

> --save - salva il nome e la versione del pacchetto in "bower.json"

```shell
$ bower install --save pure
```
### Aggiornare un pacchetto

> --save - aggiorna la versione del pacchetto nel file "bower.json"

```shell
$ bower update --save [nomepachetto]
```