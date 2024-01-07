# TP-Link Archer T3U Plus

Instrucciones para crear el driver del adaptador WiFi e intregrarlo en el kernel

---

## Debian / Ubuntu / Mint

#### Install

Clonar el repositorio desde GitHub

```bash
git clone https://github.com/cilynx/rtl88x2bu && cd rtl*
```

Generar una variable de entorno con la versión del paquete actual

```bash
VER=$(sed -n 's/\PACKAGE_VERSION="\(.*\)"/\1/p' dkms.conf)
```

Copiar los archivos en el Sistema Operativo

```bash
sudo rsync -rvhP ./ /usr/src/rtl88x2bu-${VER}
```

Añadir el módulo

```bash
sudo dkms add -m rtl88x2bu -v ${VER}
```

Contruir el módulo

```bash
sudo dkms build -m rtl88x2bu -v ${VER}
```

Instalar el módulo en el Kernel

```bash
sudo dkms install -m rtl88x2bu -v ${VER}
```

Activar el módulo en el Kernel

```bash
sudo modprobe 88x2bu
```

#### Uninstall

Para eliminar el driver del kernel es necesario borrar el módulo del Kernel

```bash
sudo dkms remove rtl88x2bu/5.8.7.1 --all
```

#### Original source

```
https://github.com/cilynx/rtl88x2bu
```
