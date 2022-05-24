# Git

Instrucciones para configurar Git y a su vez GitHub

## Configuración global

Para forzar a que se guarde de forma local la configuración

```bash
git config credential.helper store
```

Asignar email y nombre para los commits

```bash
git config --global user.name "Manuel Muñoz"
git config --global user.email "my_email@gmail.com"
```

[More info about store](https://stackoverflow.com/a/51327559)

Asignar firma GPG y firmar los commits por defecto con dicha firma (Nota: primero es necesario generar la firma GPG para poder asociarlo de forma global)

```bash
git config --global user.signingKey UUID_DE_LA_FIRMA
git config --global commit.gpgsign true
```

Si se desea eliminar la firma de la configuración global, se utiliza el parametro --unset

```bash
git config --global --unset commit.gpgsign
```

Si tenemos establecido un correo de forma global, pero dentro de una carpeta que contiene otros repositorios, podemos establecerlo dentro de ese directorio. Primero es necesario modificar el fichero `~/.gitconfig` y añadirle

```
[user]
    name = Manuel Muñoz
    email = my_custom_email@gmail.com

[includeIf "gitdir:~/GitHubPersonal/"]
    path = ~/GitHubPersonal/.gitconfig
```

Y a continuación creamos el fichero `.gitconfig` dentro de ese directorio con la configuración especifica

```
[user]
    email = my_other_email@gmail.com
```

[More info about GPG sign](https://stackoverflow.com/a/42942312)

## Git Cheat Sheet

Para clonar un repo

```bash
git clone <URL-REPOSITORIO>
```

Para iniciar uno nuevo (en local)

```bash
git init
```

Para visualizar la configuración global de git

```bash
git config --global --list
```

Para visualizar la configuración asociada a un repo

```bash
git config --list
```

Para crear una rama a partir del commit actual

```bash
git checkout -b <newbranch>
git checkout -b feature-M001
```

Para crear una rama vacía

```bash
git checkout --orphan <branch>
git checkout --orphan new-docs
```

Para borrar una rama en local

```bash
git branch -d <branch>
git branch -d test01
```

Para borrar una rama en remoto

```bash
git push origin -d <branch>
git push origin -d test01
```

Para crear un commit, añadir todos los ficheros modificados o borrados, firmarlos y añadirle un mensaje.

```bash
git commit -a -S -m "My message"
```

Si por algún motivo nos hemos olvidado de añadir un archivo al último commit podemos añadirlo con el parámetro `--amend`. Nota: no hacerlo bajo ningún concepto

```bash
git commit <file> --amend
```

Para el ejemplo anterior, la opción recomendada es resetear `HEAD` a un commit anterior, de esta forma eliminamos el último commit con el comando `reset`. Además, podemos especificar los niveles a retrasar indicando el número de commits a resetear para `HEAD`

```bash
git reset HEAD~<integer_value>
git reset HEAD~1
```

Para borrar todos los archivos de una rama

```bash
git rm -rf .
```

Para descargar los cambios de remoto en local

```bash
git pull origin
```

Para sincronizar los cambios de remoto en local (no descarga nada)

```bash
git fetch
```

Para sincronizar los cambios en remoto en local pero previamente eliminar cualquier referencia de ramas que no existen en remoto

```bash
git fetch -p
```

Para subir los cambios de local a remoto

```bash
git push origin
```

Si una rama local no se encuentra en remoto, utilizamos el parámetro `-u` o `--set-upstream` para añadirla en el remoto

```bash
git push -u origin <branch-name>
```

Si queremos subir todas las ramas de local a remoto

```bash
git push --all -u
```

Para forzar a subir una rama en local, podemos utilizar el parametro `--force`, pero solo si utiliza una sola persona el repo

```bash
git push --force origin master
```

Si tenemos una rama en remoto y forzamos a que se actualice con el `--force`, es posible que los cambios que realice otra persona en la misma rama se pierdan, para ello utilizamos el parametro `--force-with-lease`, de esta forma comprueba que los cambios que subamos no se ven afectados por los cambios realizados por otra persona en la misma rama.

```bash
git push --force-with-lease origin master
```

> --force-with-lease alone, without specifying the details, will protect all remote refs that are going to be updated by requiring their current value to be the same as the remote-tracking branch we have for them.

Para mostrar los mensajes de los commits confirmados

```bash
git log -n5
```

Para crear un tag, añadirle una versión y un mensaje

```bash
git tag -a v1.1.1 -m "My message"
```

Comprobar los Tags del proyecto

```bash
git tag -n5
```

Eliminar un tag en local y en remoto

```bash
git tag -d <tagname>
git push origin :refs/tags/<tagname>

git tag -d v1.1.8
git push origin :refs/tags/v1.1.8
```

Para enviar un tag a remoto, se especifica el tag a origen, también podemos enviar todos los tags de una sola vez a origen

```bash
git push origin --tags
git push origin v1.1.1
git push origin <branch> --tags
```

Si deseamos cambiar de rama pero actualmente tenemos cambios, tenemos que guardar dichos cambios, pero sino queremos guardarlos en ese momento podemos descartarlos

```bash
git stash
```

Si deseamos recuperar los cambios de los archivos modificados en la rama

```bash
git stash pop
```

Para añadir ramas de forma local a un repo

```bash
git checkout <branch> && git push origin <branch>
git checkout mmunoz && git push origin mmunoz
```

Cuando tenemos 2 ramas que parten del mismo punto, la segunda rama añade nuevos cambios y deseamos guardar dichos cambios en la primera rama, es necesario cambiar a la primera rama y después hacer un merge de la segunda rama

```bash
git checkout <primera-rama> && git merge <segunda-rama>
git checkout mmunoz && git merge mmunoz-tests
```

Cuando tenemos una rama con un archivo más actualizado en origen y en local se ha modificado el mismo archivo, pero no queremos conservar los cambios del archivo en local

```bash
git checkout <filename>
git checkout FLUTTER.md
```

Para comparar un commint con un Tag con otra rama, se especifica el TAG con la rama a comparar

```bash
git diff --stat <tag> <branch>
git diff --stat v1.1.8 mmunoz
```

Para visualizar la configuración del origin

```bash
git remote -v
```

```bash
origin  https://git-codecommit.eu-west-2.amazonaws.com/v1/repos/sobwayFlutter (fetch)
origin  https://git-codecommit.eu-west-2.amazonaws.com/v1/repos/sobwayFlutter (push)
```

Para añadir un nuevo origin a un proyecto

```bash
git remote add origin <url-repo>
git remote add origin https://github.com/DaswareTech/DEBOS.App.Sobway.git
```

Para renombrar un origin

```bash
git remote rename <origin> <new_origin>
git remote rename origin origin-aws
```

Para eliminar un origin

```bash
git remote remove <origin>
git remote remove origin-aws
```

## Git LFS

La extensión LFS permite gestionar mejor los archivos grandes de un repositorio, guardando punteros a dichos archivos. Esta extensión esta soportada en sitios como `Github`

El primer paso es instalar dicha extensión, disponible en la web [https://git-lfs.github.com/](https://git-lfs.github.com/), en ubuntu se puede instalar mediante apt

```bash
apt install git-lfs -y
```

Es necesario activar por cada repositorio dicha extensión

```bash
git lfs install
```

Acto seguido indicamos las extensiones de archivos que deseamos que se gestione con LFS

```bash
git lfs track "*.psd"
```

Acto seguido nos creará un archivo `.gitattributes` en caso de no estar disponible previamente

> \*.psd filter=lfs diff=lfs merge=lfs -text

Nota: El servicio de Github limitada los archivos que superen los `100 MB` y se recibe una advertencia cuando los archivos superen los `50 MB` sino está añadido al listado de LFS

> GitHub blocks pushes that exceed 100 MB

## Enlaces

- [Git and Git Flow Cheat Sheet ](https://github.com/arslanbilal/git-cheat-sheet)
- [GitHub - Actions virtual environments ](https://github.com/actions/virtual-environments)
- [GitHub - Beautify GitHub Profile ](https://github.com/rzashakeri/beautify-github-profile)
- [GitHub - custom domain for your GitHub Pages site ](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub - supported grammars ](https://github.com/github/linguist/tree/master/vendor)
- [GitHub - supported grammars - list ](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)

## GUI

- [Guitar - Git GUI Client ](https://github.com/soramimi/Guitar)

### Servicios en la nube 🌩

- [Bitbucket ](https://bitbucket.org)
- [GitHub ](https://github.com)
- [GitLab ](https://gitlab.com)

### Servicios self-hosted

- [Gitea ](https://gitea.io/)
- [Gogs ](https://gogs.io/)
- [OneDev - Self-hosted Git Server with Built-in CI/CD ](https://github.com/theonedev/onedev)
