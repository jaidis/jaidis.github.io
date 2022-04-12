# Raspberry Pi

Configuración utilizada en mi Rasperry Pi 4

## Configuración básica

##### Actualizar la lista de paquetes y actualizar todos los paquetes

```bash
sudo apt update && sudo apt upgrade -y
```

##### Instalar programas más utilizados

```bash
sudo apt install apt-transport-https ca-certificates curl git gnupg htop lsb-release neofetch -y
```

##### Eliminar partición de SWAP

```bash
sudo dphys-swapfile swapoff && sudo dphys-swapfile uninstall && sudo update-rc.d dphys-swapfile remove && sudo apt purge dphys-swapfile
```

##### Establecer IP estática para eth0, para ello necesitamos modificar el fichero `dhcpcd.conf`

```bash
sudo nano /etc/dhcpcd.conf
```

_Y a continuación, indicamos la interfaz, ip, puerta de enlace y DNS_

```
interface eth0
static ip_address=192.168.18.100/24
static routers=192.168.18.1
static domain_name_servers=1.1.1.1 8.8.8.8
```

##### Desbloquear el puerto 53 (si lo vamos a utilizar por ejemplo junto con Pi-hole), para ello tenemos que modificar el fichero `resolved.conf`. El primer paso es para el servicio de `resolved`, verificar que está parado y modificar el fichero de configuración

```bash
sudo systemctl stop systemd-resolved
systemctl --version
sudo nano /etc/systemd/resolved.conf
```

```
[Resolve]
DNS=127.0.0.1
DNSStubListener=no
```

_Por último, hacemos un backup del fichero `resolv.conf`, realizamos un acceso directo del fichero `resolved.conf` y reiniciamos el servicio_

```bash
sudo mv /etc/resolv.conf /etc/resolv.conf.backup
sudo ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
sudo systemctl reload-or-restart systemd-resolved
```

##### Si deseamos reiniciar diariamente la Raspberry (y evitar que se cuelgue por inactividad), podemos añadir una tarea de `cron`

```bash
sudo crontab -e
```

```conf
# **** RESTART EVERY DAY AT 04:00 AM *****
0 4 * * * /sbin/shutdown -r now
```

##### Para actualizar el firmware de la Raspberry utilizaremos el comando `rpi-eeprom-update` (ejecutar como root)

```bash
sudo rpi-eeprom-update
```

_En caso de que exista una actualización ejecutaremos de nuevo el comando `rpi-eeprom-update` añadiendo el parámetro `-a` para aplicar la actualización, una vez aplicada la actualización es necesario reiniciar la raspberry_

```bash
sudo rpi-eeprom-update -a
```

<details>
  <summary>Mostrar</summary>

```bash
BOOTLOADER: up to date
   CURRENT: jue abr 29 16:11:25 UTC 2021 (1619712685)
    LATEST: jue abr 29 16:11:25 UTC 2021 (1619712685)
   RELEASE: default (/lib/firmware/raspberrypi/bootloader/default)
            Use raspi-config to change the release.

VL805_FW: Dedicated VL805 EEPROM
VL805: up to date
CURRENT: 000138a1
LATEST: 000138a1
```

</details>

## Instalar Samba

##### El primer paso es comprobar si tenemos los paquetes de samba instalados, sino tenemos que añadirlos

```bash
sudo apt install samba samba-common-bin -y
```

##### Editamos el archivo `smb.conf` y añadimos la siguiente configuración

```bash
sudo nano /etc/samba/smb.conf
```

```
[global]
netbios name = Pi
server string = The Pi File Center
workgroup = WORKGROUP

[HOMEPI]
path = /home/pi
comment = No comment
writeable=Yes
create mask=0777
directory mask=0777
public=no
```

##### Establecemos la contraseña para el usuario `pi`, puede ser la misma del usuario u otra diferente

```bash
sudo smbpasswd -a pi
```

##### Por último, reiniciamos el servicio y ya podemos acceder desde cualquier dispositivo

```bash
sudo service smbd restart
```

## Instalar Docker

##### El primer paso es comprobar que no tenemos ningún paquete instalado desde los repos oficiales de debian

```bash
 sudo apt-get remove docker docker-engine docker.io containerd runc -y
```

##### Descargamos el script proporcionado por la propia Docker y lo ejecutamos para instalarlo

```bash
sudo curl -fsSL get.docker.com -o get-docker.sh && sh get-docker.sh
```

##### Activamos el servicio de Docker

```bash
sudo systemctl enable docker && sudo systemctl start docker
```

##### Añadimos al usuario `pi` al grupo autorizado para ejecutar Docker

```bash
sudo usermod -aG docker pi
```

##### Si deseamos lo servicios de machine(opcional) y compose, es necesario descargar la [ultima versión disponible](https://github.com/docker/machine/releases/), en el caso de Raspberry, no hay release oficial de compose, pero [linuxsever](https://github.com/linuxserver/docker-docker-compose/releases) si proporciona versiones de 32 bits para Raspberry. Una vez descargados, los copiamos en la carpeta de ejecutables y cambiamos sus permisos para poder ejectutarlos

```bash
sudo cp docker-machine /usr/local/bin/docker-machine && sudo chmod +x /usr/local/bin/docker-machine && sudo ln -s /usr/local/bin/docker-machine /usr/bin/docker-machine
```

```bash
sudo cp docker-compose /usr/local/bin/docker-compose && sudo chmod +x /usr/local/bin/docker-compose && sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

### Compilar Compose

##### Si deseamos compilar la versión de compose para Raspberry Pi,el primer paso es clonar el repo oficial y establecer la ultima rama estable

```bash
git clone https://github.com/docker/compose.git
cd compose
git checkout 1.29.2
```

##### Ejecutamos el script para compilar la verión de linux

```bash
./script/build/linux
```

##### Comprobamos en la carpeta `dist` que tenemos la build y comprobamos la versión compilada

```bash
cd dist
./docker-compose-Linux-armv7l version
```

Por ultimo, comprobamos las dependecias que incluye dicho ejecutable

```bash
ldd docker-compose-Linux-armv7l
```

## Utilidades

##### Para realizar un test de rendimiento, necesitamos el paquete `stress` y ejecutar dicho paquete indicando que se van a utilizar todas las CPUs de la Raspberry

```bash
sudo apt install stress
sudo stress --cpu 4
```

##### Para observar la temperatura de la CPU cada segundo, utilizamos el siguiente comando

```bash
watch -n 1 /opt/vc/bin/vcgencmd measure_temp
```

##### Shell in a box es una herramienta que nos permite ejecutar un terminal desde el navegador web, instalamos el paquete `shellinabox` y accedemos desde `local_ip:4200`

```bash
sudo apt install shellinabox -y
```

_Por defecto, utiliza conexión `ssl` pero en el fichero de configuración `/etc/default/shellinabox` podemos indicar que no se utilice. Por último reiniciar el servicio para que los cambios tengan efecto_

```bash
sudo nano /etc/default/shellinabox
```

```
SHELLINABOX_ARGS="--no-beep --disable-ssl"
```

```bash
sudo /etc/init.d/shellinabox restart
```

## Archivo de configuración

##### Configuración actual de la Raspberry Pi 4 del archivo `config.txt`

- Desactivado wifi
- Desactivado bluetooth
- Overclock a 1.75 GHz (CPU)
- Eliminado rayo amarillo

<details>
  <summary>Mostrar</summary>

```conf
[pi4]
# Enable DRM VC4 V3D driver on top of the dispmanx display stack
dtoverlay=vc4-fkms-v3d,disable-wifi,disable-bt
max_framebuffers=2
# Overcloking to 1.75 GHz
over_voltage=2
arm_freq=1750

# Removes the warning overlay and additionally allows turbo when low-voltage is present.
avoid_warnings=2
```

</details>

##### Configuración para Raspberry Pi 3B del archivo `config.txt`

- Overclock a 1.35 GHz (CPU)
- Overclock de la tarjeta SD (mayor velocidad lectura/escritura)
- Eliminado rayo amarillo

<details>
  <summary>Mostrar</summary>

```conf
[all]
# OVERCLOCKING 1.35 GHz Pi 3B
core_freq=500 # GPU Frequency
arm_freq=1350 # CPU Frequency
over_voltage=4 #Electric power sent to CPU / GPU (4 = 1.3V)
gpu_mem=192

# Overclock the microSD reader to 100 MHz
dtoverlay=sdhost,overclock_50=100

# Removes the warning overlay and additionally allows turbo when low-voltage is present.
avoid_warnings=2
```

</details>

## Comprimir Imagen

##### Si realizamos una imagen de la Raspberry pero no queremos que el espacio libre esté incluido, es necesario montar la imagen, encoger la partición con gparted y realizar un truncado de la imagen

```bash
sudo modprobe loop && sudo losetup -f && sudo losetup /dev/loop0 myimage.img && sudo partprobe /dev/loop0 && sudo gparted /dev/loop0 && sudo losetup -d /dev/loop0 && fdisk -l myimage.img
truncate --size=$[(16875519+1)*512] myimage.img
```

## Enlaces (artículos, info, webs, blogs,...)

- [How to Boot Raspberry Pi 4 / 400 From a USB SSD or Flash Drive ](https://www.tomshardware.com/how-to/boot-raspberry-pi-4-usb)
- [How to Install Gogs on the Raspberry Pi ](https://pimylifeup.com/raspberry-pi-gogs/)
- [How to overclock the microSD card reader on a Raspberry Pi 3 ](https://www.jeffgeerling.com/blog/2016/how-overclock-microsd-card-reader-on-raspberry-pi-3)
- [Install pyenv on Raspberry Pi and version control Python 🇯🇵 ](https://qiita.com/hoshi621/items/c8b82ab42564256df884)
- [Install TensorFlow 1.15.0 on Raspberry Pi 🇯🇵 ](https://qiita.com/hoshi621/items/f1800a66982d844dd4c1)
- [microSD Card Benchmarks ](http://www.pidramble.com/wiki/benchmarks/microsd-cards)
- [Pi-Hole on Docker using OMV Raspberry Pi 4 “Network Wide Ad-Blocker” ](https://pcmac.biz/pi-hole-on-docker-using-omv-raspberry-pi-4-network-wide-ad-blocker/)
- [Raspberry para torpes ](https://raspberryparatorpes.net/category/proyectos/)
- [Raspberry Pi Documentation ](https://www.raspberrypi.org/documentation/)

## Sistemas operativos, Imágenes configuradas,...

- [Batocera.linux ](https://batocera.org/)
- [libreelec - Just enough OS for KODI ](https://libreelec.tv/downloads/)
- [LineageOS ](https://konstakang.com/devices/rpi4/)
- [PINN - An enhanced Operating System installer for the Raspberry Pi ](https://github.com/procount/pinn)
- [Pi-hole® - Network-wide Ad Blocking ](https://pi-hole.net/)
- [PINN System Resize ](https://pinn.mjh.nz/)
- [recalbox ](https://www.recalbox.com/)
- [recalbox source code ](https://gitlab.com/recalbox/recalbox)
