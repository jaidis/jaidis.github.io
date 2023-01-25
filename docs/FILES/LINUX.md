# Linux

Instrucciones para configurar Linux (Mint)

## Programas

##### Actualizar la lista de paquetes y actualizar todos los paquetes

```bash
sudo apt update && sudo apt upgrade -y
```

##### Instalar programas esenciales

```bash
sudo apt install apt-transport-https ca-certificates ciso curl dkms git git-lfs gparted gnupg gnupg-agent htop lsb-release neofetch python3-pip software-properties-common squashfs-tools zsh -y
```

##### Instalar programas más utilizados

```bash
sudo apt install bleachbit brasero ddccontrol ddccontrol-db gddccontrol gimp i2c-tools picard solaar soundconverter synaptic vlc  -y
```

##### Añadir repo de qBittorrent e instalarlo

```bash
sudo add-apt-repository ppa:qbittorrent-team/qbittorrent-stable
sudo apt update && sudo apt install qbittorrent -y
```

##### Instalar NODE en su version LTS

```bash
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt update && sudo apt install nodejs -y
```

##### Añadir repo de MKVToolNix e instalarlo

```bash
sudo wget -O /usr/share/keyrings/gpg-pub-moritzbunkus.gpg https://mkvtoolnix.download/gpg-pub-moritzbunkus.gpg
sudo touch /etc/apt/sources.list.d/mkvtoolnix.download.list
sudo nano /etc/apt/sources.list.d/mkvtoolnix.download.list
```

_Pegar el contenido al fichero creado anteriormente (Ubuntu 20.04 LTS)_

```bash
deb [arch=amd64 signed-by=/usr/share/keyrings/gpg-pub-moritzbunkus.gpg] https://mkvtoolnix.download/ubuntu/ focal main
deb-src [arch=amd64 signed-by=/usr/share/keyrings/gpg-pub-moritzbunkus.gpg] https://mkvtoolnix.download/ubuntu/ focal main
```

_Por último actualizar la lista de paquetes e instalar el programa_

```bash
sudo apt update && sudo apt install mkvtoolnix mkvtoolnix-gui -y
```

[Web oficial MKVToolNix](https://mkvtoolnix.download/downloads.html#ubuntu)

## Alias

Los alias nos permiten agrupar un comando (y sus parámetros) y asignarle un nombre, de esta forma ejecutando el nombre del alias, ejecutamos el comando completo

##### Si utilizamos `bash`, es recomendable utilizar el fichero `.bash_aliases` para guardar nuestros alias, sino esta creado lo podemos crear con el comando `touch`

```bash
touch .bash_aliases
```

_Si utilizamos `zsh`, podemos añadir los alias al fichero `.zshrc`_

##### Listado de alias personalizados

```bash
alias actualiza-instala="sudo apt update && sudo apt upgrade -y" # Actualiza los repos e instala los paquetes nuevos
alias android-clean="./gradlew clean" # Borra todos los archivos innecesarios del proyecto de Android
alias android-refresh-dependencies="./gradlew --refresh-dependencies" # Refresca las dependecias de gradle del proyecto de Android
alias android-release="cd android && ./gradlew assembleRelease --full-stacktrace && cd .." # Genera la versión Release del proyecto de Android
alias apaga="sudo shutdown -h now" # Envía la petición para apagar la raspberry
alias clonar="scrcpy -b5M -m1024 -S -t" # Clona la pantalla de un dispositivo Android
alias clonar-note3="scrcpy -b5M -m1024 -S -t -s 86f076" # Clona la pantalla del Xiaomi Note 3 Pro
alias clonar-xperia="scrcpy -b5M -m1024 -S -t -s BX903JEKYE" # Clona la pantalla del Sony Xperia Z
alias dockers="docker ps --format 'table {{.Names}}\t{{.Ports}}' |  sed 's|NAMES||g' |  sed 's|PORTS||g' | sort" # Filtrar contenedores de docker mostrando nombre y puertos activos
alias espacio="df -h" # Muestra el espacio libre
alias flutter-ba="flutter build apk --verbose"
alias flutter-bb="flutter build appbundle --verbose"
alias flutter-cba="flutter-clean && flutter pub get && flutter build apk --verbose"
alias flutter-cbb="flutter-clean && flutter pub get && flutter build appbundle --verbose"
alias flutter-clean="flutter clean && rm -rf .dart_tool/ pubspec.lock android/app/build android/.gradle ios/Pods/ ios/Podfile.lock"
alias flutter-ci="flutter-clean && flutter-install"
alias flutter-install="flutter pub get && cd ios/ && pod install && cd .."
alias flutter-r="flutter run --verbose" # Arranca el proyecto de Flutter mostrando información en consola
alias http-server="python -m http.server 3000 -b localhost -d"
alias limpia-actualiza-instala="sudo apt autoremove && sudo apt clean && sudo apt update && sudo apt upgrade -y" # Limpia la cache, actualiza los repos e instala los paquetes nuevos
alias mvn-install="mvn clean install -DskipTests -Pdev -e"
alias mvn-release="mvn clean install -DskipTests -Prelease -e"
alias musica="sudo chmod 777 -R docker-data/music/" # Cambiar los permisos a 777 de la carpeta Music en raspberry
alias nexus="emulator @Nexus5X" # Lanzar emulador android
alias npml="npm i --legacy-peer-deps"
alias npmrs="npm run start"
alias pi="ssh pi@192.168.100.2" # Conectar a raspberry mediante ssh
alias portainer="docker container stop portainer && docker container rm -f portainer && docker image rm -f portainer/portainer-ce:latest && docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest" # Actualiza el container de portainer a la última versión disponible
alias reinicia="sudo shutdown -r now" # Envía la petición para reiniciar la raspberry
alias unzip-bundle='_unzip-bundle() { java -jar ~/.android/bundletool.jar build-apks --bundle="$1" --output="$2".apks --mode=universal; mv "$2".apks "$2".zip; echo "Done"}; _unzip-bundle'
```

## Comandos

##### Cambiar el espacio reservado para root en sistema de ficheros ext4 al 1%

```bash
sudo tune2fs -m 1 <partition>
sudo tune2fs -m 1 /dev/sda5
```

##### Comprimir/Descomprimir archivos

<details>
  <summary>CheatSheet</summary>

>

|             | Compress | Uncompress |
| ----------- | -------- | ---------- |
| 7z          | 7z a     | 7z x       |
| bz          |          | bzip2 -d   |
| bz2         | bzip2 -z | bzip2 -d   |
| gzip        | gzip     | gzip -d    |
| lha         | lha -a   | lha -e     |
| rar         | rar      | rar e      |
| rar (unrar) |          | unrar x    |
| tar         | tar cvf  | tar xvf    |
| tar.bz      |          | tar jxvf   |
| tar.bz2     | tar jcvf | tar jxvf   |
| tar.gz      | tar zcvf | tar zxvf   |
| tar.tgz     | tar zcvf | tar zxvf   |
| tar.xz      | tar Jcvf | tar Jxvf   |
| tar.z       | tar Zcvf | tar Zxvf   |
| tgz         | tar zcvf | tar zxvf   |
| xz          | xz -z    | xz -d      |

</details>

##### Descomprimir un archivo en formato 7z

```bash
7z x <file.7z>
```

<details>
  <summary>7z Cheat Sheet</summary>

>

**Adds files to archive `a`**

```bash
7z a -t7z Files.7z *.txt -r
```

**Specifies the type of archive. Default: 7z**

```bash
-t7z
-tzip
```

**Sets encrypted headers**

```bash
-mhe=on
```

**Sets multithreading mode. Default: on**

```bash
-mmt=on
-mmt=off
-mmt=4
```

**Sets level of compression. [0 = copy mode, 1, 3, 5, 7 = maximum, 9 = ultra]**

```bash
-mx=0
-mx=7
-mx=9
```

**Overwrite All existing files without prompt**

```bash
-aoa
```

**Specifies volume sizes**

```bash
-v=100m
-v=1g
```

</details>

##### Generar una clave md5 de un archivo

```bash
md5sum <file>
md5sum my_custom_image.iso
```

_Podemos generar un archivo `md5` al comprobar la clave md5 y guardandolo a un archivo_

```bash
md5sum <file> > <file>
md5sum my_custom_image.iso > check_md5_file.md5
```

_Si tenemos un archivo `md5` podemos verificarlo añadiendole el parmetro `-c` y el nombre del fichero_

```bash
md5sum -c <file>
md5sum -c check_md5_file.md5
```

##### Mostrar todos los archivos y carpetas (incluidos ocultos) del directorio actual

```bash
ls -la
```

<details>
  <summary>Mostrar</summary>

```bash
drwxrwxr-x  3 jaidis jaidis  4096 jul 22 18:08 .
drwxr-xr-x 33 jaidis jaidis  4096 jul 22 18:28 ..
-rwxrwxr-x  1 jaidis jaidis 10843 jul 21 21:36 FLUTTER-LINKS.md
-rwxrwxr-x  1 jaidis jaidis   834 jul 21 21:37 FLUTTER.md
-rwxrwxrwx  1 jaidis jaidis  1821 jul 21 20:19 FSTAB.md
drwxrwxr-x  8 jaidis jaidis  4096 jul 20 15:21 .git
...
```

</details>

##### Modificar los permisos de un archivo o carpeta (incluida de forma recursiva)

```bash
sudo chmod 777 -R <folder> or <file>
```

<details>
  <summary>Mostrar</summary>

```bash
sudo chmod 777 JD2Setup_x64.sh
sudo chmod 777 -R docker-data/music/
```

</details>

##### Modificar el dueño de un archivo o carpeta (incluida de forma recursiva)

```bash
sudo chown -R $USER:$USER <folder>
```

<details>
  <summary>Mostrar</summary>

```bash
sudo chown -R root:root /usr/share/icons/Numix*
```

</details>

##### Eliminar todos los elementos de la carpeta (y subcarpetas) de la ruta facilitada

```bash
rm -rf <folder> <file>
```

<details>
  <summary>Mostrar</summary>

```bash
rm -rf node_modules/ package-lock.json ios/Podfile.lock ios/Pods/
```

</details>

##### Instalar un paquete DEB manualmente

```bash
sudo dpkg -i my_package.deb
```

<details>
  <summary>Mostrar</summary>

```bash
sudo dpkg -i bleachbit_4.2.0-0_all_ubuntu2004.deb
```

</details>

_Si por algún motivo fallase la instalación, se puede forzar a que se termine la instalación, bien añadiendo la dependecias faltantes o en caso de no encontrarlas eliminar dicho paquete instalado_

```bash
sudo dpkg --configure -a
```

##### Generar un enlace de un ejecutable y que se puede ejecutar desde el terminal

```bash
sudo ln -fs <origen_ejecutable> /usr/bin/<nombre_del_ejecutable>
```

<details>
  <summary>Mostrar</summary>

```bash
sudo ln -fs /opt/etcher/balenaEtcher-1.5.100-x64.AppImage /usr/bin/etcher
```

</details>

##### Regenerar fichero de GRUB

```bash
sudo update-grub
```

##### Montar un servidor de HTML rápidamente en local con Python 3

```bash
python3 -m http.server <opcional_port>
python3 -m http.server 8080
```

_En caso de tener Python 2 instalado utilizar el siguiente comando_

```bash
python -m SimpleHTTPServer <opcional_port>
python -m SimpleHTTPServer 8008
```

> Tip: tanto **http.server** como **SimpleHTTPServer** utilizan por defecto el puerto **8000**

##### Mostrar el UUID de todas las particiones

```bash
sudo blkid
```

<details>
  <summary>Mostrar</summary>

```bash
/dev/nvme0n1p1: LABEL_FATBOOT="EFI" LABEL="EFI" UUID="67E3-17ED" TYPE="vfat" PARTLABEL="EFI System Partition" PARTUUID="c20ed787-2bac-473a-bbb1-303860fabeea"
/dev/nvme0n1p2: UUID="79d2fbcc-aa34-4630-8ead-4538db37ae18" TYPE="apfs" PARTUUID="8786ea39-7bda-4826-96d3-91dd48080110"
/dev/sda1: LABEL="W10" UUID="0451E24F42694B4B" TYPE="ntfs" PARTUUID="3bb611dc-01"
/dev/sda5: UUID="04b1be3c-ab9f-489b-bee9-e46997867c1d" TYPE="ext4" PARTUUID="3bb611dc-05"
/dev/sda6: LABEL="LE_SYSTEM" UUID="88035ab2-9fa0-4653-8e49-5a12c2276885" TYPE="ext4" PARTUUID="3bb611dc-06"
/dev/sda7: LABEL="LE_DATA" UUID="243540b5-e61d-4ea2-a5f3-004861d2fae8" TYPE="ext4" PARTUUID="3bb611dc-07"
```

</details>

##### Información sobre la distribución

```bash
lsb_release -a
```

<details>
  <summary>Mostrar</summary>

```bash
Distributor ID:	Linuxmint
Description:	Linux Mint 20.2
Release:	20.2
Codename:	uma
```

</details>

##### Información sobre el Kernel

```bash
uname -a
```

<details>
  <summary>Mostrar</summary>

```bash
Linux nuc 5.4.0-80-generic #90-Ubuntu SMP Fri Jul 9 22:49:44 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux
```

</details>

##### Información general sobre el dispositivo

```bash
inxi -Fc0
```

<details>
  <summary>Mostrar</summary>

```bash
System:    Host: nuc Kernel: 5.4.0-80-generic x86_64 bits: 64 Desktop: Cinnamon 5.0.5 Distro: Linux Mint 20.2 Uma
Machine:   Type: Mini-pc System: Intel Client Systems product: NUC8i5BEH v: J72747-308 serial: <superuser/root required>
           Mobo: Intel model: NUC8BEB v: J72692-310 serial: <superuser/root required> UEFI [Legacy]: Intel
           v: BECFL357.86A.0081.2020.0504.1834 date: 05/04/2020
CPU:       Topology: Quad Core model: Intel Core i5-8259U bits: 64 type: MT MCP L2 cache: 6144 KiB
           Speed: 500 MHz min/max: 400/3800 MHz Core speeds (MHz): 1: 500 2: 500 3: 500 4: 500 5: 500 6: 500 7: 501 8: 544
Graphics:  Device-1: Intel Iris Plus Graphics 655 driver: i915 v: kernel
           Display: x11 server: X.Org 1.20.9 driver: modesetting unloaded: fbdev,vesa resolution: 2560x1080~60Hz
           OpenGL: renderer: Mesa Intel Iris Plus Graphics 655 (CFL GT3) v: 4.6 Mesa 20.2.6
Audio:     Device-1: Intel Cannon Point-LP High Definition Audio driver: snd_hda_intel
           Device-2: Logitech Webcam C270 type: USB driver: snd-usb-audio,uvcvideo
           Sound Server: ALSA v: k5.4.0-80-generic
Network:   Device-1: Intel Ethernet I219-V driver: e1000e
           IF: eno1 state: down mac:
           Device-2: TP-Link 802.11ac WLAN Adapter type: USB driver: rtl88XXau
           IF: wlx984827470d4f state: up mac:
Drives:    Local Storage: total: 456.46 GiB used: 69.86 GiB (15.3%)
           ID-1: /dev/nvme0n1 vendor: Western Digital model: WDS250G1B0C-00S6U0 size: 232.89 GiB
           ID-2: /dev/sda vendor: Crucial model: CT240BX300SSD1 size: 223.57 GiB
Partition: ID-1: / size: 118.18 GiB used: 69.86 GiB (59.1%) fs: ext4 dev: /dev/sda5
Sensors:   System Temperatures: cpu: 53.0 C mobo: 27.8 C
           Fan Speeds (RPM): N/A
Info:      Processes: 284 Uptime: 4h 03m Memory: 15.51 GiB used: 2.23 GiB (14.4%) Shell: zsh inxi: 3.0.38
```

</details>

##### Muestra el tamaño, espacio usado, espacio libre, porcentaje de uso y directorio de montaje de todos los dispositivos de almacenamiento

```bash
df -h
```

<details>
  <summary>Mostrar</summary>

```bash
S.ficheros     Tamaño Usados  Disp Uso% Montado en
udev             7,8G      0  7,8G   0% /dev
tmpfs            1,6G   1,8M  1,6G   1% /run
/dev/sda5        119G    70G   43G  63% /
tmpfs            7,8G    72M  7,7G   1% /dev/shm
tmpfs            5,0M   4,0K  5,0M   1% /run/lock
tmpfs            7,8G      0  7,8G   0% /sys/fs/cgroup
tmpfs            7,8G   201M  7,6G   3% /home/jaidis/.cache/google-chrome
tmpfs            7,8G    11M  7,8G   1% /home/jaidis/.local/share/TelegramDesktop/tdata/user_data
tmpfs            7,8G   4,2M  7,8G   1% /tmp
tmpfs            7,8G      0  7,8G   0% /var/tmp
tmpfs            1,6G    20K  1,6G   1% /run/user/1000
```

</details>

##### Información general sobre los dispositivos de almacenamiento

```bash
lsblk -a
```

<details>
  <summary>Mostrar</summary>

```bash
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
loop0         7:0    0         0 loop
loop1         7:1    0         0 loop
loop2         7:2    0         0 loop
loop3         7:3    0         0 loop
loop4         7:4    0         0 loop
loop5         7:5    0         0 loop
loop6         7:6    0         0 loop
loop7         7:7    0         0 loop
sda           8:0    0 223,6G  0 disk
├─sda1        8:1    0   100G  0 part
├─sda2        8:2    0     1K  0 part
├─sda5        8:5    0 120,6G  0 part /
├─sda6        8:6    0  1023M  0 part
└─sda7        8:7    0     2G  0 part
nvme0n1     259:0    0 232,9G  0 disk
├─nvme0n1p1 259:1    0   200M  0 part
└─nvme0n1p2 259:2    0 232,7G  0 part
```

</details>

##### Información general sobre la RAM utilizada

```bash
free -mh
```

<details>
  <summary>Mostrar</summary>

```bash
              total       usado       libre  compartido búfer/caché  disponible
Memoria:        15Gi       1,9Gi       9,3Gi       762Mi       4,3Gi        12Gi
Swap:         2,0Gi          0B       2,0Gi
```

</details>

##### Información general sobre la CPU

```bash
sudo lshw -C cpu
```

<details>
  <summary>Mostrar</summary>

```bash
  *-cpu
       descripción: CPU
       producto: Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz
       fabricante: Intel Corp.
       id físico: 47
       información del bus: cpu@0
       versión: Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz
       serie: To Be Filled By O.E.M.
       ranura: U3E1
       tamaño: 3602MHz
       capacidad: 3800MHz
       anchura: 64 bits
       reloj: 100MHz
       capacidades: lm fpu fpu_exception wp vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp x86-64 constant_tsc art arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf pni pclmulqdq dtes64 monitor ds_cpl vmx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch cpuid_fault epb invpcid_single pti ssbd ibrs ibpb stibp tpr_shadow vnmi flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid mpx rdseed adx smap clflushopt intel_pt xsaveopt xsavec xgetbv1 xsaves dtherm ida arat pln pts hwp hwp_notify hwp_act_window hwp_epp md_clear flush_l1d cpufreq
       configuración: cores=4 enabledcores=4 threads=8
```

</details>

##### Información general sobre la RAM y cache CPU

```bash
sudo lshw -C memory
```

<details>
  <summary>Mostrar</summary>

```bash
  *-firmware
       descripción: BIOS
       fabricante: Intel Corp.
       id físico: 0
       versión: BECFL357.86A.0081.2020.0504.1834
       date: 05/04/2020
       tamaño: 64KiB
       capacidad: 16MiB
       capacidades: pci upgrade shadowing cdboot bootselect socketedrom edd int13floppy1200 int13floppy720 int13floppy2880 int5printscreen int14serial int17printer acpi usb biosbootspecification uefi
  *-memory
       descripción: Memoria de sistema
       id físico: 3b
       ranura: Placa de sistema o placa base
       tamaño: 16GiB
     *-bank:0
          descripción: SODIMM DDR4 Síncrono 2400 MHz (0,4 ns)
          producto: BLS8G4S240FSD.16FBD
          fabricante: 859B
          id físico: 0
          serie: A9151024
          ranura: SODIMM1
          tamaño: 8GiB
          anchura: 64 bits
          reloj: 2400MHz (0.4ns)
     *-bank:1
          descripción: SODIMM DDR4 Síncrono 2400 MHz (0,4 ns)
          producto: BLS8G4S240FSD.16FBD
          fabricante: 859B
          id físico: 1
          serie: A9151020
          ranura: SODIMM2
          tamaño: 8GiB
          anchura: 64 bits
          reloj: 2400MHz (0.4ns)
  *-cache:0
       descripción: L1 caché
       id físico: 44
       ranura: L1 Cache
       tamaño: 256KiB
       capacidad: 256KiB
       capacidades: synchronous internal write-back unified
       configuración: level=1
  *-cache:1
       descripción: L2 caché
       id físico: 45
       ranura: L2 Cache
       tamaño: 1MiB
       capacidad: 1MiB
       capacidades: synchronous internal write-back unified
       configuración: level=2
  *-cache:2
       descripción: L3 caché
       id físico: 46
       ranura: L3 Cache
       tamaño: 6MiB
       capacidad: 6MiB
       capacidades: synchronous internal write-back unified
       configuración: level=3
  *-memory NO RECLAMADO
       descripción: RAM memory
       producto: Cannon Point-LP Shared SRAM
       fabricante: Intel Corporation
       id físico: 14.2
       información del bus: pci@0000:00:14.2
       versión: 30
       anchura: 64 bits
       reloj: 33MHz (30.3ns)
       capacidades: pm bus_master cap_list
       configuración: latency=0
       recursos: iomemory:400-3ff iomemory:400-3ff memoria:4022c10000-4022c11fff memoria:4022c14000-4022c14fff
```

</details>

##### Información general sobre la conexión de red

```bash
sudo lshw -C network
```

<details>
  <summary>Mostrar</summary>

```bash
  *-network
       descripción: Ethernet interface
       producto: Ethernet Connection (6) I219-V
       fabricante: Intel Corporation
       id físico: 1f.6
       información del bus: pci@0000:00:1f.6
       nombre lógico: eno1
       versión: 30
       serie:
       capacidad: 1Gbit/s
       anchura: 32 bits
       reloj: 33MHz
       capacidades: pm msi bus_master cap_list ethernet physical tp 10bt 10bt-fd 100bt 100bt-fd 1000bt-fd autonegotiation
       configuración: autonegotiation=on broadcast=yes driver=e1000e driverversion=3.2.6-k firmware=0.4-4 latency=0 link=no multicast=yes port=twisted pair
       recursos: irq:133 memoria:b8b00000-b8b1ffff
  *-network
       descripción: Interfaz inalámbrica
       id físico: 2
       información del bus: usb@1:2
       nombre lógico: wlx984827470d4f
       serie:
       capacidades: ethernet physical wireless
       configuración: broadcast=yes driver=rtl88XXau ip=192.168.100.11 multicast=yes wireless=IEEE 802.11bgn
```

</details>

##### Información general sobre la tarjeta gráfica

```bash
sudo lshw -C display
```

<details>
  <summary>Mostrar</summary>

```bash
  *-display
       descripción: VGA compatible controller
       producto: Iris Plus Graphics 655
       fabricante: Intel Corporation
       id físico: 2
       información del bus: pci@0000:00:02.0
       versión: 01
       anchura: 64 bits
       reloj: 33MHz
       capacidades: pciexpress msi pm vga_controller bus_master cap_list rom
       configuración: driver=i915 latency=0
       recursos: irq:135 memoria:b7000000-b7ffffff memoria:80000000-9fffffff ioport:4000(size=64) memoria:c0000-dffff
```

</details>

##### Información sobre los dispositivos pci

```bash
lspci -nn
```

<details>
  <summary>Mostrar</summary>

```bash
00:00.0 Host bridge [0600]: Intel Corporation 8th Gen Core Processor Host Bridge/DRAM Registers [8086:3ed0] (rev 08)
00:02.0 VGA compatible controller [0300]: Intel Corporation Iris Plus Graphics 655 [8086:3ea5] (rev 01)
00:08.0 System peripheral [0880]: Intel Corporation Xeon E3-1200 v5/v6 / E3-1500 v5 / 6th/7th/8th Gen Core Processor Gaussian Mixture Model [8086:1911]
00:12.0 Signal processing controller [1180]: Intel Corporation Cannon Point-LP Thermal Controller [8086:9df9] (rev 30)
00:14.0 USB controller [0c03]: Intel Corporation Cannon Point-LP USB 3.1 xHCI Controller [8086:9ded] (rev 30)
00:14.2 RAM memory [0500]: Intel Corporation Cannon Point-LP Shared SRAM [8086:9def] (rev 30)
00:16.0 Communication controller [0780]: Intel Corporation Cannon Point-LP MEI Controller #1 [8086:9de0] (rev 30)
00:17.0 SATA controller [0106]: Intel Corporation Cannon Point-LP SATA Controller [AHCI Mode] [8086:9dd3] (rev 30)
00:1c.0 PCI bridge [0604]: Intel Corporation Cannon Point-LP PCI Express Root Port #1 [8086:9db8] (rev f0)
00:1c.4 PCI bridge [0604]: Intel Corporation Cannon Point-LP PCI Express Root Port #5 [8086:9dbc] (rev f0)
00:1d.0 PCI bridge [0604]: Intel Corporation Cannon Point-LP PCI Express Root Port #9 [8086:9db0] (rev f0)
00:1d.6 PCI bridge [0604]: Intel Corporation Cannon Point-LP PCI Express Root Port #15 [8086:9db6] (rev f0)
00:1f.0 ISA bridge [0601]: Intel Corporation Cannon Point-LP LPC Controller [8086:9d84] (rev 30)
00:1f.3 Audio device [0403]: Intel Corporation Cannon Point-LP High Definition Audio Controller [8086:9dc8] (rev 30)
00:1f.4 SMBus [0c05]: Intel Corporation Cannon Point-LP SMBus Controller [8086:9da3] (rev 30)
00:1f.5 Serial bus controller [0c80]: Intel Corporation Cannon Point-LP SPI Controller [8086:9da4] (rev 30)
00:1f.6 Ethernet controller [0200]: Intel Corporation Ethernet Connection (6) I219-V [8086:15be] (rev 30)
02:00.0 PCI bridge [0604]: Intel Corporation JHL6340 Thunderbolt 3 Bridge (C step) [Alpine Ridge 2C 2016] [8086:15da] (rev 02)
03:00.0 PCI bridge [0604]: Intel Corporation JHL6340 Thunderbolt 3 Bridge (C step) [Alpine Ridge 2C 2016] [8086:15da] (rev 02)
03:01.0 PCI bridge [0604]: Intel Corporation JHL6340 Thunderbolt 3 Bridge (C step) [Alpine Ridge 2C 2016] [8086:15da] (rev 02)
03:02.0 PCI bridge [0604]: Intel Corporation JHL6340 Thunderbolt 3 Bridge (C step) [Alpine Ridge 2C 2016] [8086:15da] (rev 02)
3a:00.0 USB controller [0c03]: Intel Corporation JHL6340 Thunderbolt 3 USB 3.1 Controller (C step) [Alpine Ridge 2C 2016] [8086:15db] (rev 02)
3b:00.0 Non-Volatile memory controller [0108]: Sandisk Corp WD Black 2018/PC SN520 NVMe SSD [15b7:5003] (rev 01)
3c:00.0 Unassigned class [ff00]: Realtek Semiconductor Co., Ltd. RTS522A PCI Express Card Reader [10ec:522a] (rev 01)
```

</details>
