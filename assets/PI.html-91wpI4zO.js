import{_ as i,r,o,c as l,a as e,d as a,b as s,f as t}from"./app-ZOF6ibMC.js";const d={},c=t(`<h1 id="raspberry-pi" tabindex="-1"><a class="header-anchor" href="#raspberry-pi" aria-hidden="true">#</a> Raspberry Pi</h1><p>Configuración utilizada en mi Rasperry Pi 4</p><h2 id="configuracion-basica" tabindex="-1"><a class="header-anchor" href="#configuracion-basica" aria-hidden="true">#</a> Configuración básica</h2><h5 id="actualizar-la-lista-de-paquetes-y-actualizar-todos-los-paquetes" tabindex="-1"><a class="header-anchor" href="#actualizar-la-lista-de-paquetes-y-actualizar-todos-los-paquetes" aria-hidden="true">#</a> Actualizar la lista de paquetes y actualizar todos los paquetes</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt</span> upgrade <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="instalar-programas-mas-utilizados" tabindex="-1"><a class="header-anchor" href="#instalar-programas-mas-utilizados" aria-hidden="true">#</a> Instalar programas más utilizados</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> apt-transport-https ca-certificates <span class="token function">curl</span> <span class="token function">git</span> gnupg <span class="token function">htop</span> lsb-release neofetch <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="eliminar-particion-de-swap" tabindex="-1"><a class="header-anchor" href="#eliminar-particion-de-swap" aria-hidden="true">#</a> Eliminar partición de SWAP</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dphys-swapfile swapoff <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> dphys-swapfile uninstall <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> update-rc.d dphys-swapfile remove <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt</span> purge dphys-swapfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="establecer-ip-estatica-para-eth0-para-ello-necesitamos-modificar-el-fichero-dhcpcd-conf" tabindex="-1"><a class="header-anchor" href="#establecer-ip-estatica-para-eth0-para-ello-necesitamos-modificar-el-fichero-dhcpcd-conf" aria-hidden="true">#</a> Establecer IP estática para eth0, para ello necesitamos modificar el fichero <code>dhcpcd.conf</code></h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/dhcpcd.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Y a continuación, indicamos la interfaz, ip, puerta de enlace y DNS</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface eth0
static ip_address=192.168.100.2/24
static routers=192.168.100.1
static domain_name_servers=1.1.1.1 8.8.8.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="desbloquear-el-puerto-53-si-lo-vamos-a-utilizar-por-ejemplo-junto-con-pi-hole-para-ello-tenemos-que-modificar-el-fichero-resolved-conf-el-primer-paso-es-para-el-servicio-de-resolved-verificar-que-esta-parado-y-modificar-el-fichero-de-configuracion" tabindex="-1"><a class="header-anchor" href="#desbloquear-el-puerto-53-si-lo-vamos-a-utilizar-por-ejemplo-junto-con-pi-hole-para-ello-tenemos-que-modificar-el-fichero-resolved-conf-el-primer-paso-es-para-el-servicio-de-resolved-verificar-que-esta-parado-y-modificar-el-fichero-de-configuracion" aria-hidden="true">#</a> Desbloquear el puerto 53 (si lo vamos a utilizar por ejemplo junto con Pi-hole), para ello tenemos que modificar el fichero <code>resolved.conf</code>. El primer paso es para el servicio de <code>resolved</code>, verificar que está parado y modificar el fichero de configuración</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl stop systemd-resolved
systemctl <span class="token parameter variable">--version</span>
<span class="token function">sudo</span> <span class="token function">nano</span> /etc/systemd/resolved.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Resolve]
DNS=127.0.0.1
DNSStubListener=no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Por último, hacemos un backup del fichero <code>resolv.conf</code>, realizamos un acceso directo del fichero <code>resolved.conf</code> y reiniciamos el servicio</em></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mv</span> /etc/resolv.conf /etc/resolv.conf.backup
<span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /run/systemd/resolve/resolv.conf /etc/resolv.conf
<span class="token function">sudo</span> systemctl reload-or-restart systemd-resolved
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="si-deseamos-reiniciar-diariamente-la-raspberry-y-evitar-que-se-cuelgue-por-inactividad-podemos-anadir-una-tarea-de-cron" tabindex="-1"><a class="header-anchor" href="#si-deseamos-reiniciar-diariamente-la-raspberry-y-evitar-que-se-cuelgue-por-inactividad-podemos-anadir-una-tarea-de-cron" aria-hidden="true">#</a> Si deseamos reiniciar diariamente la Raspberry (y evitar que se cuelgue por inactividad), podemos añadir una tarea de <code>cron</code></h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">crontab</span> <span class="token parameter variable">-e</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># **** RESTART EVERY DAY AT 04:00 AM *****
0 4 * * * /sbin/shutdown -r now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="para-actualizar-el-firmware-de-la-raspberry-utilizaremos-el-comando-rpi-eeprom-update-ejecutar-como-root" tabindex="-1"><a class="header-anchor" href="#para-actualizar-el-firmware-de-la-raspberry-utilizaremos-el-comando-rpi-eeprom-update-ejecutar-como-root" aria-hidden="true">#</a> Para actualizar el firmware de la Raspberry utilizaremos el comando <code>rpi-eeprom-update</code> (ejecutar como root)</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> rpi-eeprom-update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>Mostrar</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>*** UPDATE AVAILABLE ***
BOOTLOADER: update available
   CURRENT: jue abr <span class="token number">29</span> <span class="token number">16</span>:11:25 UTC <span class="token number">2021</span> <span class="token punctuation">(</span><span class="token number">1619712685</span><span class="token punctuation">)</span>
    LATEST: mar ene <span class="token number">25</span> <span class="token number">14</span>:30:41 UTC <span class="token number">2022</span> <span class="token punctuation">(</span><span class="token number">1643121041</span><span class="token punctuation">)</span>
   RELEASE: default <span class="token punctuation">(</span>/lib/firmware/raspberrypi/bootloader/default<span class="token punctuation">)</span>
            Use raspi-config to change the release.

  VL805_FW: Dedicated VL805 EEPROM
     VL805: up to <span class="token function">date</span>
   CURRENT: 000138a1
    LATEST: 000138a1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><em>En caso de que exista una actualización ejecutaremos de nuevo el comando <code>rpi-eeprom-update</code> añadiendo el parámetro <code>-a</code> para aplicar la actualización, una vez aplicada la actualización es necesario reiniciar la raspberry</em></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> rpi-eeprom-update <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>Mostrar</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>*** INSTALLING EEPROM UPDATES ***

BOOTLOADER: update available
   CURRENT: jue abr <span class="token number">29</span> <span class="token number">16</span>:11:25 UTC <span class="token number">2021</span> <span class="token punctuation">(</span><span class="token number">1619712685</span><span class="token punctuation">)</span>
    LATEST: mar ene <span class="token number">25</span> <span class="token number">14</span>:30:41 UTC <span class="token number">2022</span> <span class="token punctuation">(</span><span class="token number">1643121041</span><span class="token punctuation">)</span>
   RELEASE: default <span class="token punctuation">(</span>/lib/firmware/raspberrypi/bootloader/default<span class="token punctuation">)</span>
            Use raspi-config to change the release.

  VL805_FW: Dedicated VL805 EEPROM
     VL805: up to <span class="token function">date</span>
   CURRENT: 000138a1
    LATEST: 000138a1
   CURRENT: jue abr <span class="token number">29</span> <span class="token number">16</span>:11:25 UTC <span class="token number">2021</span> <span class="token punctuation">(</span><span class="token number">1619712685</span><span class="token punctuation">)</span>
    UPDATE: mar ene <span class="token number">25</span> <span class="token number">14</span>:30:41 UTC <span class="token number">2022</span> <span class="token punctuation">(</span><span class="token number">1643121041</span><span class="token punctuation">)</span>
    BOOTFS: /boot

EEPROM updates pending. Please <span class="token function">reboot</span> to apply the update.
To cancel a pending update run <span class="token string">&quot;sudo rpi-eeprom-update -r&quot;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="instalar-samba" tabindex="-1"><a class="header-anchor" href="#instalar-samba" aria-hidden="true">#</a> Instalar Samba</h2><h5 id="el-primer-paso-es-comprobar-si-tenemos-los-paquetes-de-samba-instalados-sino-tenemos-que-anadirlos" tabindex="-1"><a class="header-anchor" href="#el-primer-paso-es-comprobar-si-tenemos-los-paquetes-de-samba-instalados-sino-tenemos-que-anadirlos" aria-hidden="true">#</a> El primer paso es comprobar si tenemos los paquetes de samba instalados, sino tenemos que añadirlos</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> samba samba-common-bin <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="editamos-el-archivo-smb-conf-y-anadimos-la-siguiente-configuracion" tabindex="-1"><a class="header-anchor" href="#editamos-el-archivo-smb-conf-y-anadimos-la-siguiente-configuracion" aria-hidden="true">#</a> Editamos el archivo <code>smb.conf</code> y añadimos la siguiente configuración</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/samba/smb.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[global]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="establecemos-la-contrasena-para-el-usuario-pi-puede-ser-la-misma-del-usuario-u-otra-diferente" tabindex="-1"><a class="header-anchor" href="#establecemos-la-contrasena-para-el-usuario-pi-puede-ser-la-misma-del-usuario-u-otra-diferente" aria-hidden="true">#</a> Establecemos la contraseña para el usuario <code>pi</code>, puede ser la misma del usuario u otra diferente</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> smbpasswd <span class="token parameter variable">-a</span> pi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="por-ultimo-reiniciamos-el-servicio-y-ya-podemos-acceder-desde-cualquier-dispositivo" tabindex="-1"><a class="header-anchor" href="#por-ultimo-reiniciamos-el-servicio-y-ya-podemos-acceder-desde-cualquier-dispositivo" aria-hidden="true">#</a> Por último, reiniciamos el servicio y ya podemos acceder desde cualquier dispositivo</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> smbd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="utilidades" tabindex="-1"><a class="header-anchor" href="#utilidades" aria-hidden="true">#</a> Utilidades</h2><h5 id="para-realizar-un-test-de-rendimiento-necesitamos-el-paquete-stress-y-ejecutar-dicho-paquete-indicando-que-se-van-a-utilizar-todas-las-cpus-de-la-raspberry" tabindex="-1"><a class="header-anchor" href="#para-realizar-un-test-de-rendimiento-necesitamos-el-paquete-stress-y-ejecutar-dicho-paquete-indicando-que-se-van-a-utilizar-todas-las-cpus-de-la-raspberry" aria-hidden="true">#</a> Para realizar un test de rendimiento, necesitamos el paquete <code>stress</code> y ejecutar dicho paquete indicando que se van a utilizar todas las CPUs de la Raspberry</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> stress
<span class="token function">sudo</span> stress <span class="token parameter variable">--cpu</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="para-observar-la-temperatura-de-la-cpu-cada-segundo-utilizamos-el-siguiente-comando" tabindex="-1"><a class="header-anchor" href="#para-observar-la-temperatura-de-la-cpu-cada-segundo-utilizamos-el-siguiente-comando" aria-hidden="true">#</a> Para observar la temperatura de la CPU cada segundo, utilizamos el siguiente comando</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">watch</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> /opt/vc/bin/vcgencmd measure_temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="shell-in-a-box-es-una-herramienta-que-nos-permite-ejecutar-un-terminal-desde-el-navegador-web-instalamos-el-paquete-shellinabox-y-accedemos-desde-local-ip-4200" tabindex="-1"><a class="header-anchor" href="#shell-in-a-box-es-una-herramienta-que-nos-permite-ejecutar-un-terminal-desde-el-navegador-web-instalamos-el-paquete-shellinabox-y-accedemos-desde-local-ip-4200" aria-hidden="true">#</a> Shell in a box es una herramienta que nos permite ejecutar un terminal desde el navegador web, instalamos el paquete <code>shellinabox</code> y accedemos desde <code>local_ip:4200</code></h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> shellinabox <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Por defecto, utiliza conexión <code>ssl</code> pero en el fichero de configuración <code>/etc/default/shellinabox</code> podemos indicar que no se utilice. Por último reiniciar el servicio para que los cambios tengan efecto</em></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/default/shellinabox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHELLINABOX_ARGS=&quot;--no-beep --disable-ssl&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> /etc/init.d/shellinabox restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="archivo-de-configuracion" tabindex="-1"><a class="header-anchor" href="#archivo-de-configuracion" aria-hidden="true">#</a> Archivo de configuración</h2><h5 id="configuracion-actual-de-la-raspberry-pi-4-del-archivo-config-txt" tabindex="-1"><a class="header-anchor" href="#configuracion-actual-de-la-raspberry-pi-4-del-archivo-config-txt" aria-hidden="true">#</a> Configuración actual de la Raspberry Pi 4 del archivo <code>config.txt</code></h5><ul><li>Desactivado wifi</li><li>Desactivado bluetooth</li><li>Overclock a 1.75 GHz (CPU)</li><li>Eliminado rayo amarillo</li></ul><details><summary>Mostrar</summary><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[pi4]
# Enable DRM VC4 V3D driver on top of the dispmanx display stack
dtoverlay=vc4-fkms-v3d,disable-wifi,disable-bt
max_framebuffers=2
# Overcloking to 1.75 GHz
over_voltage=2
arm_freq=1750

# Removes the warning overlay and additionally allows turbo when low-voltage is present.
avoid_warnings=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h5 id="configuracion-para-raspberry-pi-3b-del-archivo-config-txt" tabindex="-1"><a class="header-anchor" href="#configuracion-para-raspberry-pi-3b-del-archivo-config-txt" aria-hidden="true">#</a> Configuración para Raspberry Pi 3B del archivo <code>config.txt</code></h5><ul><li>Overclock a 1.35 GHz (CPU)</li><li>Overclock de la tarjeta SD (mayor velocidad lectura/escritura)</li><li>Eliminado rayo amarillo</li></ul><details><summary>Mostrar</summary><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[all]
# OVERCLOCKING 1.35 GHz Pi 3B
core_freq=500 # GPU Frequency
arm_freq=1350 # CPU Frequency
over_voltage=4 #Electric power sent to CPU / GPU (4 = 1.3V)
gpu_mem=192

# Overclock the microSD reader to 100 MHz
dtoverlay=sdhost,overclock_50=100

# Removes the warning overlay and additionally allows turbo when low-voltage is present.
avoid_warnings=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h5 id="configuracion-del-archivo-fstab-pi-4" tabindex="-1"><a class="header-anchor" href="#configuracion-del-archivo-fstab-pi-4" aria-hidden="true">#</a> Configuración del archivo FSTAB (Pi 4)</h5><details><summary>Mostrar</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>proc            /proc           proc    defaults          <span class="token number">0</span>       <span class="token number">0</span>
<span class="token assign-left variable">PARTUUID</span><span class="token operator">=</span>7d225014-01  /boot           vfat    defaults,flush    <span class="token number">0</span>       <span class="token number">2</span>
<span class="token assign-left variable">PARTUUID</span><span class="token operator">=</span>7d225014-02  /               ext4    defaults,noatime  <span class="token number">0</span>       <span class="token number">1</span>
tmpfs    /tmp    tmpfs    noatime,nodiratime,nodev,nosuid,mode<span class="token operator">=</span><span class="token number">1777</span>,defaults    <span class="token number">0</span>    <span class="token number">0</span>
tmpfs    /var/tmp    tmpfs    noatime,nodiratime,nodev,nosuid,mode<span class="token operator">=</span><span class="token number">1777</span>,defaults    <span class="token number">0</span>    <span class="token number">0</span>
tmpfs    /home/pi/docker-config/jellyfin/cache    tmpfs    noatime,nodiratime,nodev,nosuid,mode<span class="token operator">=</span><span class="token number">1777</span>,defaults    <span class="token number">0</span>    <span class="token number">0</span>
tmpfs    /home/pi/docker-config/jellyfin/log    tmpfs    noatime,nodiratime,nodev,nosuid,mode<span class="token operator">=</span><span class="token number">1777</span>,defaults    <span class="token number">0</span>    <span class="token number">0</span>
tmpfs    /home/pi/docker-config/lidarr/logs    tmpfs    noatime,nodiratime,nodev,nosuid,mode<span class="token operator">=</span><span class="token number">1777</span>,defaults    <span class="token number">0</span>    <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="comprimir-imagen" tabindex="-1"><a class="header-anchor" href="#comprimir-imagen" aria-hidden="true">#</a> Comprimir Imagen</h2><h5 id="si-realizamos-una-imagen-de-la-raspberry-pero-no-queremos-que-el-espacio-libre-este-incluido-es-necesario-montar-la-imagen-encoger-la-particion-con-gparted-y-realizar-un-truncado-de-la-imagen" tabindex="-1"><a class="header-anchor" href="#si-realizamos-una-imagen-de-la-raspberry-pero-no-queremos-que-el-espacio-libre-este-incluido-es-necesario-montar-la-imagen-encoger-la-particion-con-gparted-y-realizar-un-truncado-de-la-imagen" aria-hidden="true">#</a> Si realizamos una imagen de la Raspberry pero no queremos que el espacio libre esté incluido, es necesario montar la imagen, encoger la partición con gparted y realizar un truncado de la imagen</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> modprobe loop <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> losetup <span class="token parameter variable">-f</span> <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> losetup /dev/loop0 myimage.img <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> partprobe /dev/loop0 <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">gparted</span> /dev/loop0 <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> losetup <span class="token parameter variable">-d</span> /dev/loop0 <span class="token operator">&amp;&amp;</span> <span class="token function">fdisk</span> <span class="token parameter variable">-l</span> myimage.img
truncate <span class="token parameter variable">--size</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">16875519</span>+1<span class="token punctuation">)</span>*512<span class="token punctuation">]</span> myimage.img
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enlaces-articulos-info-webs-blogs" tabindex="-1"><a class="header-anchor" href="#enlaces-articulos-info-webs-blogs" aria-hidden="true">#</a> Enlaces (artículos, info, webs, blogs,...)</h2>`,61),p={href:"https://github.com/juj/fbcp-ili9341",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.tomshardware.com/how-to/boot-raspberry-pi-4-usb",target:"_blank",rel:"noopener noreferrer"},m={href:"https://pimylifeup.com/raspberry-pi-gogs/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.jeffgeerling.com/blog/2016/how-overclock-microsd-card-reader-on-raspberry-pi-3",target:"_blank",rel:"noopener noreferrer"},v={href:"https://qiita.com/hoshi621/items/c8b82ab42564256df884",target:"_blank",rel:"noopener noreferrer"},h={href:"https://qiita.com/hoshi621/items/f1800a66982d844dd4c1",target:"_blank",rel:"noopener noreferrer"},f={href:"http://www.pidramble.com/wiki/benchmarks/microsd-cards",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.thingiverse.com/thing:5365275",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/llegoff/Pi400RGB",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.thingiverse.com/thing:5277051",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/FeralAI/PicoFightingBoard",target:"_blank",rel:"noopener noreferrer"},x={href:"https://pcmac.biz/pi-hole-on-docker-using-omv-raspberry-pi-4-network-wide-ad-blocker/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://raspberryparatorpes.net/category/proyectos/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.raspberrypi.org/documentation/",target:"_blank",rel:"noopener noreferrer"},R=e("h2",{id:"sistemas-operativos-imagenes-configuradas",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sistemas-operativos-imagenes-configuradas","aria-hidden":"true"},"#"),a(" Sistemas operativos, Imágenes configuradas,...")],-1),q={href:"https://batocera.org/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://libreelec.tv/downloads/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://konstakang.com/devices/rpi4/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/procount/pinn",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/pucherot/Pi.Alert",target:"_blank",rel:"noopener noreferrer"},T={href:"https://pi-hole.net/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://pinn.mjh.nz/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://www.recalbox.com/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://gitlab.com/recalbox/recalbox",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/wimpysworld/retro-home",target:"_blank",rel:"noopener noreferrer"},j={href:"https://core-electronics.com.au/projects/wifi-garage-door-controller-with-raspberry-pi-pico-w-smart-home-project/",target:"_blank",rel:"noopener noreferrer"};function I(L,B){const n=r("ExternalLinkIcon");return o(),l("div",null,[c,e("ul",null,[e("li",null,[e("a",p,[a("fbcp-ili9341 - A blazing fast display driver for SPI-based LCD displays for Raspberry Pi A, B, 2, 3, 4 and Zero "),s(n)])]),e("li",null,[e("a",u,[a("How to Boot Raspberry Pi 4 / 400 From a USB SSD or Flash Drive "),s(n)])]),e("li",null,[e("a",m,[a("How to Install Gogs on the Raspberry Pi "),s(n)])]),e("li",null,[e("a",b,[a("How to overclock the microSD card reader on a Raspberry Pi 3 "),s(n)])]),e("li",null,[e("a",v,[a("Install pyenv on Raspberry Pi and version control Python 🇯🇵 "),s(n)])]),e("li",null,[e("a",h,[a("Install TensorFlow 1.15.0 on Raspberry Pi 🇯🇵 "),s(n)])]),e("li",null,[e("a",f,[a("microSD Card Benchmarks "),s(n)])]),e("li",null,[e("a",g,[a("Official Recalbox RGB Dual CASE (RPi4 and RPi3) "),s(n)])]),e("li",null,[e("a",k,[a("Pi400RGB - Scart/VGA interface for Raspberry Pi 400 "),s(n)])]),e("li",null,[e("a",y,[a("Pi400RGB case (SCART and VGA) "),s(n)])]),e("li",null,[e("a",_,[a("Pico Fighting Board - Open source PCB for arcade sticks using Raspberry Pi Pico "),s(n)])]),e("li",null,[e("a",x,[a("Pi-Hole on Docker using OMV Raspberry Pi 4 “Network Wide Ad-Blocker” "),s(n)])]),e("li",null,[e("a",w,[a("Raspberry para torpes "),s(n)])]),e("li",null,[e("a",P,[a("Raspberry Pi Documentation "),s(n)])])]),R,e("ul",null,[e("li",null,[e("a",q,[a("Batocera.linux "),s(n)])]),e("li",null,[e("a",z,[a("libreelec - Just enough OS for KODI "),s(n)])]),e("li",null,[e("a",E,[a("LineageOS "),s(n)])]),e("li",null,[e("a",A,[a("PINN - An enhanced Operating System installer for the Raspberry Pi "),s(n)])]),e("li",null,[e("a",S,[a('Pi.Alert - WIFI / LAN intruder detector. Check the devices connected and alert you with unknown devices. It also warns of the disconnection of "always connected" devices '),s(n)])]),e("li",null,[e("a",T,[a("Pi-hole® - Network-wide Ad Blocking "),s(n)])]),e("li",null,[e("a",C,[a("PINN System Resize "),s(n)])]),e("li",null,[e("a",U,[a("recalbox "),s(n)])]),e("li",null,[e("a",D,[a("recalbox source code "),s(n)])]),e("li",null,[e("a",O,[a("RetroHome - Your Home for Retro Gaming 🕹️ "),s(n)])]),e("li",null,[e("a",j,[a("WiFi Garage Door Controller with Raspberry Pi Pico W "),s(n)])])])])}const G=i(d,[["render",I],["__file","PI.html.vue"]]);export{G as default};