# Grub

Archivos de configuración GRUB para añadir nuevos sistemas operativos al fichero GRUB de la distrubución instalada

## Mostrar menu

A veces, al realizar una instalación del grub, no detecta que hay mas SO instalados y no se ve el menu de grub, para ello editamos `/etc/default/grub` y modificamos las siguientes líneas:

```bash
GRUB_TIMEOUT_STYLE=menu
GRUB_TIMEOUT=5
```

Hacemos un `sudo update-grub` y ya se muestra de nuevo el menú

## UEFI

En caso de instalar una distro linux en modo UEFI, podemos añadir entradas adicionales para reiniciar o apagar el equipo, para ello es necesario modificar el fichero `30_uefi-firmware`

```bash
menuentry "Reboot" --class reboot { reboot }
menuentry "Poweroff" --class shutdown { halt }
menuentry '$LABEL' \$menuentry_id_option 'uefi-firmware' {
	fwsetup
}
```

## Arranque básico

A continuación se muestra la configuración mínima para hacer funcionar Grub, ya sólo queda ir añadiendo las entradas que queramos

```bash
set default="0"
set timeout=10
terminal_input console
terminal_output gfxterm
set menu_color_normal=white/black
set menu_color_highlight=black/light-gray
```

## Batocera

Es necesario crear 2 particiones consecutivas

- Partición 1 de tipo `FAT32` y etiqueta `BATOCERA` (2GB valdría)
- Partición 2 de tipo `EXT4`

En la partición 1 es necesario volcar el contenido del archivo [boot.tar.xz](http://batocera.org/upgrades/x86_64/stable/last/boot.tar.xz)

Es necesario crear un archivo llamado `15_batocera` dentro de la ruta `/etc/grub.d/`. _Nota si fuese necesario se añade el permiso de ejecución_

```bash
sudo chmod a+x /​etc/​grub.d/​15_batocera
```

##### Archivo de configuración `15_batocera`

```bash
#! /bin/sh

BATOCERA_UUID=$(lsblk --fs --noheadings --pairs -o TYPE,LABEL,UUID | grep -E '^TYPE="part" LABEL="BATOCERA" UUID="[^"]*"$' | sed -e s+'^TYPE="part" LABEL="BATOCERA" UUID="\([^"]*\)"$'+'\1'+ | head -1)

if test -n "${BATOCERA_UUID}"
then
    echo "Batocera v40 x86_64 Bits" >&2

    cat <<EOF
menuentry "batocera.linux" {
	insmod fat
        search --no-floppy --fs-uuid --set=root ${BATOCERA_UUID}
	linux /boot/linux label=BATOCERA console=tty3 quiet loglevel=0 vt.global_cursor_default=0
	initrd /boot/initrd.gz
}
EOF
fi
```

## LibreElec

Es necesario crear 2 particiones consecutivas

- Partición 1 de tipo `EXT4` y etiqueta `LE_SYSTEM` (1GB valdría)
- Partición 2 de tipo `EXT4` y etiqueta `LE_DATA` (2GB valdría)

En la partición 1 es necesario volcar el contenido del archivo [LibreELEC-Generic.x86_64-x.x.x.tar](https://libreelec.tv/)

Es necesario crear un archivo llamado `40_custom` dentro de la ruta `/etc/grub.d/`. _Nota si fuese necesario se añade el permiso de ejecución_

```bash
sudo chmod a+x /​etc/​grub.d/​40_custom
```

##### Archivo de configuración `40_custom`

`boot = LE_SYSTEM`
`disk = LE_DATA`

```bash
#!/bin/sh
exec tail -n +3 $0
# This file provides an easy way to add custom menu entries.  Simply type the
# menu entries you want to add after this comment.  Be careful not to change
# the 'exec tail' line above.

menuentry "LibreElec" {
	set root=(hd0,6)
	linux /KERNEL KERNEL boot=/dev/sda6 disk=/dev/sda7 quiet nosplash
}
```

Si usamos un sistema de partición basado en GPT + NVMe, tenemos que utilizar la siguiente configuración

```bash
menuentry "LibreElec" {
	set root=(hd0,gpt4)
	linux /KERNEL KERNEL boot=/dev/nvme0n1p4 disk=/dev/nvme0n1p5 quiet nosplash
}
```

## Windows

Para cualquier Windows que tengamos instalado podemos usar el siguiente archivo de configuración

```bash
menuentry "Windows 10" --class windows --class os {
    insmod ntfs
    search --no-floppy --set=root --fs-uuid <YOUR UUID>
    ntldr /bootmgr
```

## Android (BlissOS)

Es necesario crear 1 particion

- Partición 1 de tipo `EXT4` y etiqueta `ANDROID` (8GB valdría), creamos una carpeta `DATA` para que se genere el árbol de directorios para el SO

##### Archivo de configuración `40_custom`

```bash
menuentry "BlissOS v16 AG13 2024-02-20" {
    #search —file —no-floppy —fs-uuid —set=root "c222b1cc-44d3-45bd-8a92-4b20b8b31778"
    set SOURCE_NAME="2024-02-20"
    search --set=root --file /$SOURCE_NAME/kernel
    linux /$SOURCE_NAME/kernel FFMPEG_CODEC=1 FFMPEG_PREFER_C2=1 quiet root=/dev/ram0 SRC=/$SOURCE_NAME
    initrd /$SOURCE_NAME/initrd.img
}
```

<details>

<summary>Original info from BlissOs</summary>

# Manual Install on Linux

## Installation

Create a directory at / as /blissos

1. Extract `initrd.img`, `ramdisk.img`, `kernel` and system.\* from your desired blissOS ISO into the /blissos directory. `ramdisk.img` can be ignored for Android 10 and newer as it is already merged into the system (system-as-root).
2. Make a directory called `/blissos/data`. This will only work for ext4 filesystems, for NTFS and other filesystems or if you are having bootloop you need data.img, can be created with make_ext4fs.
3. Create a new grub entry with this the following code:&#x20;

```
menuentry "BlissOS (Default) w/ FFMPEG" {
    set SOURCE_NAME="blissos"
    search --set=root --file /$SOURCE_NAME/kernel
    linux /$SOURCE_NAME/kernel FFMPEG_CODEC=1 FFMPEG_PREFER_C2=1 quiet root=/dev/ram0 SRC=/$SOURCE_NAME
    initrd /$SOURCE_NAME/initrd.img
}

menuentry "BlissOS (Intel) w/ FFMPEG" {
    set SOURCE_NAME="blissos"
    search --set=root --file /$SOURCE_NAME/kernel
    linux /$SOURCE_NAME/kernel HWC=drm_minigbm_celadon GRALLOC=minigbm FFMPEG_CODEC=1 FFMPEG_PREFER_C2=1 quiet root=/dev/ram0 SRC=/$SOURCE_NAME
    initrd /$SOURCE_NAME/initrd.img
}

menuentry "BlissOS PC-Mode (Default) w/ FFMPEG" {
    set SOURCE_NAME="blissos"
    search --set=root --file /$SOURCE_NAME/kernel
    linux /$SOURCE_NAME/kernel  quiet root=/dev/ram0 SRC=/$SOURCE_NAME
    initrd /$SOURCE_NAME/initrd.img
}

menuentry "BlissOS PC-Mode (Intel) w/ FFMPEG" {
    set SOURCE_NAME="blissos"
    search --set=root --file /$SOURCE_NAME/kernel
    linux /$SOURCE_NAME/kernel PC_MODE=1 HWC=drm_minigbm_celadon GRALLOC=minigbm FFMPEG_CODEC=1 FFMPEG_PREFER_C2=1 quiet root=/dev/ram0 SRC=/$SOURCE_NAME
    initrd /$SOURCE_NAME/initrd.img
}
```

### **Example for making a 8gb image:**&#x20;

```
dd if=/dev/zero of=data.img bs=1 count=0 seek=8G
sudo mkfs.ext4 -F data.img
```

Alternatively, one can use `truncate`

```
truncate -s 8G data.img
mkfs.ext4 -F -b 4096 -L "/data" data.img
```

Here are some additional tips for installing BlissOS on Linux:

- Do not try to install Bliss OS on exotic linux filesystems such ZFS, XFS, BtrFS, currently not every filesystem has built-in support in the Bliss OS kernel, ext4 is supported. If you install it on an unsupported filesystem, it will be stuck at `Detecting Android-x86...`. You will probably have to compile your own kernel and use a modified initrd.img to boot from other filesystems.
- If you want read-write /system or being able to make changes to the system, simply extract system.img from system.img using a tool that support Zstandard compressed squashFS images. It can also be mounted.
- For `data.img`, it would be good to repair/check filesystem regularly using command `e2fsck -f data.img`.

**!!ATTENTION!!** Bliss OS 14.3 and below versions also support Jaxparrow's Android-x86 Installer for Linux. Source can be found here: [https://github.com/jaxparrow07/Androidx86-Installer-Linux](https://github.com/jaxparrow07/Androidx86-Installer-Linux)&#x20;

</details>

<details>
  <summary>Old way</summary>

```
https://thematrix.dev/install-android-on-surface-pro-6/

Install GParted.
Prepare an empty partition for Android.
Prepare an empty partition for Android user-data, if you prefer,
so your accounts, settings, installed applications, would be kept
when you update Android in the future.

Select "install" on the menu.
Choose the partition prepared, choose "ext4" as its format.
Do not install grub. We will handle it manually later.
Install Android as R/W.
Afterall, reboot.

Find out the partition UUID of Android and user-data.
sudo blkid

menuentry 'Android - BlissOS AG10 2020-10-27' —class android {
    #search —file —no-floppy —fs-uuid —set=root $ANDROID_UUID
    set root=(hd0,9)
    linux /android-2020-10-27/kernel root=/dev/ram0 SRC=/android-2020-10-27 androidboot.selinux=permissive androidboot.hardware=android_x86_64 video=1920x1080
#DATA=UUID=$USERDATA_UUID
    initrd /android-2020-10-27/initrd.img
}

https://forum.xda-developers.com/t/guide-triple-boot-full-rooted-android-x86-with-ubuntu-and-windows-without-usb.3092913/

set root='(hd0,1)'

https://sourceforge.net/projects/blissos-dev/files/Android-Generic/PC/bliss/

```

</details>
