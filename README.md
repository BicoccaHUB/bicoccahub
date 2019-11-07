<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://github.com/BicoccaHUB/bicoccahub/raw/master/src/favicon.png" width="60" />
    <h1 align="center">
  BicoccaHUB
</h1>
  </a>
</p>

La più grande collezione di appunti del corso di informatica degli studenti della Bicocca

## 🚀 Quick start

1.  **Clona i sorgenti.**

    Usa il comando `git clone` per clonare i sorgenti del sito

    ```shell
    # Clona la repository mediante Git
    git clone https://github.com/BicoccaHUB/bicoccahub.git
    ```

1.  **Intalla le dipendenze.**

    Naviga nel sito e installa le dipendenze necessarie mediante NPM

    ```shell
    cd bicoccahub/
    npm install
    ```

1.  **Inizia a sviluppare.**

    Avvia il server di sviluppo con il comando `gatsby develop`

    ```shell
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 Come modifico il sito?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    │
    └┬─ src
     └┬─ data
      ├── staff.yml
      └── subjects.yml

1.  **`staff.yml`**: Questo file contiene i dati relativi alle persone che hanno contribuito, diviso in varie sezioni (coders, autori e ringraziamenti speciali)

2.  **`subjects.yml`**: Questo file contiene i dati relativi agli indirizzi degi repository contenenti gli appunti. Il file è diviso per anno e per materie. Ogni materia successivamente contiene i vari repositori (indirizzo, autore e se sono in corso di sviluppo)

## 🎓 Aggiunta di una repository

Come specificato nella sezione precedente, il file da modificare per aggiungere nuove repository è il file `subjects.yml`, che è scritto mediante la sintassi di [YAML](https://yaml.org/)

```yaml
- year: <Anno del corso>
  subjects:
    - name: <Nome del corso>
      repositories:
        - owner: <Nome utente>
          url: <L'indirizzo della repository>
```

Per aggiungere un nuovo repository sarà quindi sufficiente seguire lo schema sopra citato seguendo le corrette regole di spaziatura, aggiungendo un record di questo tipo:

```yaml
- owner: <Il tuo nome utente>
  url: <L'indirizzo della tua nuova repository>
```

ottenendo quindi il seguente risultato

```yaml
- year: <Anno del corso>
  subjects:
    - name: <Nome del corso>
      repositories:
        - owner: <Nome utente>
          url: <L'indirizzo della repository>
        - owner: <Il tuo nome utente>
          url: <L'indirizzo della tua nuova repository>
```

Prima di inviare una [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) è necessario accertarsi che il sito compili senza nessun `error` e possibilmente senza nessun `warning`.

Ulteriori guide sono disponibili all'indirizzo [https://bicoccahub.netlify.com/contribuisci](https://bicoccahub.netlify.com/contribuisci)
