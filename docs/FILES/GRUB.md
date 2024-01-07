# Grub

Archivos de configuración GRUB para añadir nuevos sistemas operativos al fichero GRUB de la distrubución instalada

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

BATOCERA_UUID=$(lsblk --fs --noheadings --pairs -o TYPE,LABEL,UUID |
		       grep -E '^TYPE="part" LABEL="BATOCERA" UUID="[^"]*"$' |
		       sed -e s+'^TYPE="part" LABEL="BATOCERA" UUID="\([^"]*\)"$'+'\1'+ | head -1)

if test -n "${BATOCERA_UUID}"
then
    echo "Batocera v32 x86_64 Bits" >&2

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

## Android (BlissOS)

Es necesario crear 1 particion

- Partición 1 de tipo `EXT4` y etiqueta `ANDROID` (8GB valdría)

##### Archivo de configuración `40_custom`

```bash
menuentry 'Android - BlissOS AG10 2020-10-27' —class android {
    #search —file —no-floppy —fs-uuid —set=root "c222b1cc-44d3-45bd-8a92-4b20b8b31778"
    set root=(hd0,9)
    linux /android-2020-10-27/kernel root=/dev/ram0 SRC=/android-2020-10-27 androidboot.selinux=permissive androidboot.hardware=android_x86_64 video=1920x1080
#DATA=UUID=d2d40333-a15f-44cb-b628-84f053ee9a39
    initrd /android-2020-10-27/initrd.img
}
```

<details>
  <summary>Original Info</summary>

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

menuentry 'Android' —class android {
search —file —no-floppy —fs-uuid —set=root $ANDROID_UUID
    linux /android-8.1-r1/kernel root=/dev/ram0 SRC=/android-8.1-r1 androidboot.selinux=permissive androidboot.hardware=android_x86_64 video=1920x1080 DATA=UUID=$USERDATA_UUID
initrd /android-8.1-r1/initrd.img
}

https://forum.xda-developers.com/t/guide-triple-boot-full-rooted-android-x86-with-ubuntu-and-windows-without-usb.3092913/

set root='(hd0,1)'

https://sourceforge.net/projects/blissos-dev/files/Android-Generic/PC/bliss/

```

</details>
