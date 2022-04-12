# Oh My ZSH!

## Instalación

Debemos comprobar que tenemos una versión de ZSH igual o superior a la 5.0.8

```bash
zsh --version
```

Para instalar se utiliza el siguiente script

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Por último, es necesario establecer ZSH como el BASH por defecto para el usuario

```bash
sudo chsh -s /usr/bin/zsh $USER && echo $SHELL
```

[More info](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)

## Configuración utilizada

Archivo de ejemplo `.zshrc`, para que el tema AGNOSTER se visualice correctamente, es necesario utilizar una tipografía distinta, como Fira Code y establecerla por defecto en el terminal

[Enlace para descargar la fuente Fira Code ](https://github.com/tonsky/FiraCode/releases)

```bash
export ZSH="/Users/jaidis/.oh-my-zsh"

ZSH_THEME="agnoster"

plugins=(flutter git)

source $ZSH/oh-my-zsh.sh

# ANDROID PATH
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
# FLUTTER PATH
export FLUTTER_HOME=$HOME/Library/FlutterSDK
export PATH=$PATH:$FLUTTER_HOME/bin
```

## Plugins

### awesome-zsh-plugins

[Repo que contiene ZSH frameworks, plugins, tutoriales y temas. El repo está integrado dentro de las listas 'Awesome' 😎 ](https://github.com/unixorn/awesome-zsh-plugins)

### zsh-syntax-highlighting

Este plugin permite resaltar la sintaxis (como `echo`) en el terminal

Para instarlar dicho plugin es necesario clonar su repo y habilitarlo en el fichero `.zshrc`. **Nota: este plugin tiene que ser SIEMPRE el último plugin**

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

```bash
plugins=( ... zsh-syntax-highlighting)
```

## Temas

- [powerlevel10k](https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k)
