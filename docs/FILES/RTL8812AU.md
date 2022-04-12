# TP-Link Archer T2U Plus

Instrucciones para crear el driver del adaptador WiFi e intregrarlo en el kernel

---

## Debian / Ubuntu / Mint

#### Install

Clonar el repositorio desde GitHub

```bash
git clone -b v5.6.4.2 https://github.com/aircrack-ng/rtl8812au.git && cd rtl*
```

Generar el archivo `dkms-install.sh`

```bash
sudo make dkms_install
```

Cambiar los permisos de ejecución del script creado

```bash
sudo chmod 777 dkms-install.sh
```

Ejecutar el script para integrarlo en el Kernel

```bash
sudo ./dkms-install.sh
```

#### Uninstall

Para eliminar el driver del kernel es necesario generar el script `dkms_remove`

```bash
sudo make dkms_remove
```

#### Original source

```
https://github.com/aircrack-ng/rtl8812au
```

---

## Manjaro

#### Install

Ensure your Manjaro installation is fully up to date with this terminal command

```bash
sudo pacman-mirrors -f 5 && sudo pacman -Syyu
```

Installing the required linux headers

```bash
sudo pacman -S $(pacman -Qsq "^linux" | grep "^linux[0-9]*[-rt]*$" | awk '{print $1"-headers"}' ORS=' ')
```

Install pamac-cli along with the required driver dependencies

```bash
sudo pacman -S bc dkms git base-devel pamac-cli --needed
```

To install the driver for the rtl8812au adapter from the AUR issue this command

```bash
pamac build rtl88xxau-aircrack-dkms-git
```

Enter the following command in the terminal

```bash
sudo rfkill unblock all
```

Then, restart the computer.

#### Uninstall

First, uninstall all unneeded linux headers packages from your system,(substute your kernel number)

```bash
sudo pacman -Rns linux***-headers
```

If you would rather use one command to uninstall all the linux-headers packages automatically

```bash
sudo pacman -R $(ls /boot | awk -F "-" '/^linux/ { print $1"-headers" }')
```

Unload the module of the driver you want to uninstall

```bash
sudo rmmod 88xxau
```

Uninstall the non-functioning driver package

```bash
sudo pacman -Rns rtl88xxau-aircrack-dkms-git
```

Uninstall the dkms package if it is still installed

```bash
sudo pacman -Rns dkms
```

Then, restart the computer.

#### Original source

```
https://archived.forum.manjaro.org/t/install-rtl8812au-dkms-git-driver/52343/3
```
