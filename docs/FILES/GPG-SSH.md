# GPG

### Instrucciones para configurar GPG

##### Comprobamos si tenemos firmas GPG generadas previamente

```bash
gpg --list-secret-keys --keyid-format=long
```

##### Generamos la firma GPG

```bash
gpg --full-generate-key
```

##### Modificamos la firma para añadirle un UUID para github

```bash
gpg --edit-key UUID_DE_LA_FIRMA
gpg> adduid
gpg> save
gpg> quit
```

##### Al modificar una firma, también podemos eliminar un UUID creado previamente

```bash
gpg --edit-key UUID_DE_LA_FIRMA
gpg> deluid
gpg> save
gpg> quit
```

##### Si deseamos eliminar la firma GPG

```bash
gpg --delete-keys && gpg --delete-secret-keys UUID_DE_LA_FIRMA
```

##### Exportamos la firma para añadirla a Github

```bash
gpg --armor --export UUID_DE_LA_FIRMA
```

##### Exportamos la firma privada para poder añadirla en otro dispositivo

```bash
gpg --export-secret-keys UUID_DE_LA_FIRMA > private.key
```

##### Importamos la firma privada en otro dispositivo

```bash
gpg --import private.key
```

# SSH

### Instrucciones para configurar SSH

##### Primero vamos a crear un certificado SSH, este paso no es necesario si dentro de la carpeta .ssh ya tenemos los archivos id-rsa y id-rsa.pub

```bash
ssh-keygen
```

##### Si necesitamos crear un certificado pero asociandolo a una dirección de correo

```bash
ssh-keygen -t rsa -C "my_custom_email@gmail.com"
```

##### Copiar el certificado a otro dispositivo, como una raspberry y evitar pedir la contraseña cada vez que se inicia sesión

```bash
ssh-copy-id pi@192.168.100.2
```

##### Asociamos el certificado a la herramienta SSH y añadimos el certificado SSH a Github (manualmente desde la web)

```bash
ssh-add ~/.ssh/id-rsa
```

##### Para asociar un certificado con un servicio de Git (como GitHub), es necesario crear un fichero `config` dentro de la carpeta `~/.ssh`

```
Host github-doe-company
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_doe_company
```
