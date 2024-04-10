import{_ as t,r as o,o as l,c as r,a,d as e,b as i,e as n}from"./app-ig00oMQU.js";const d={},c=n('<h1 id="grub" tabindex="-1"><a class="header-anchor" href="#grub"><span>Grub</span></a></h1><p>Archivos de configuración GRUB para añadir nuevos sistemas operativos al fichero GRUB de la distrubución instalada</p><h2 id="batocera" tabindex="-1"><a class="header-anchor" href="#batocera"><span>Batocera</span></a></h2><p>Es necesario crear 2 particiones consecutivas</p><ul><li>Partición 1 de tipo <code>FAT32</code> y etiqueta <code>BATOCERA</code> (2GB valdría)</li><li>Partición 2 de tipo <code>EXT4</code></li></ul>',5),p={href:"http://batocera.org/upgrades/x86_64/stable/last/boot.tar.xz",target:"_blank",rel:"noopener noreferrer"},u=n(`<p>Es necesario crear un archivo llamado <code>15_batocera</code> dentro de la ruta <code>/etc/grub.d/</code>. <em>Nota si fuese necesario se añade el permiso de ejecución</em></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> a+x /​etc/​grub.d/​15_batocera
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="archivo-de-configuracion-15-batocera" tabindex="-1"><a class="header-anchor" href="#archivo-de-configuracion-15-batocera"><span>Archivo de configuración <code>15_batocera</code></span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/sh</span>

<span class="token assign-left variable">BATOCERA_UUID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>lsblk <span class="token parameter variable">--fs</span> <span class="token parameter variable">--noheadings</span> <span class="token parameter variable">--pairs</span> <span class="token parameter variable">-o</span> TYPE,LABEL,UUID <span class="token operator">|</span>
		       <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;^TYPE=&quot;part&quot; LABEL=&quot;BATOCERA&quot; UUID=&quot;[^&quot;]*&quot;$&#39;</span> <span class="token operator">|</span>
		       <span class="token function">sed</span> <span class="token parameter variable">-e</span> s+<span class="token string">&#39;^TYPE=&quot;part&quot; LABEL=&quot;BATOCERA&quot; UUID=&quot;\\([^&quot;]*\\)&quot;$&#39;</span>+<span class="token string">&#39;\\1&#39;</span>+ <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-1</span><span class="token variable">)</span></span>

<span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">\${BATOCERA_UUID}</span>&quot;</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Batocera v32 x86_64 Bits&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>

    <span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
menuentry &quot;batocera.linux&quot; {
	insmod fat
        search --no-floppy --fs-uuid --set=root <span class="token variable">\${BATOCERA_UUID}</span>
	linux /boot/linux label=BATOCERA console=tty3 quiet loglevel=0 vt.global_cursor_default=0
	initrd /boot/initrd.gz
}
EOF</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="libreelec" tabindex="-1"><a class="header-anchor" href="#libreelec"><span>LibreElec</span></a></h2><p>Es necesario crear 2 particiones consecutivas</p><ul><li>Partición 1 de tipo <code>EXT4</code> y etiqueta <code>LE_SYSTEM</code> (1GB valdría)</li><li>Partición 2 de tipo <code>EXT4</code> y etiqueta <code>LE_DATA</code> (2GB valdría)</li></ul>`,7),v={href:"https://libreelec.tv/",target:"_blank",rel:"noopener noreferrer"},b=n(`<p>Es necesario crear un archivo llamado <code>40_custom</code> dentro de la ruta <code>/etc/grub.d/</code>. <em>Nota si fuese necesario se añade el permiso de ejecución</em></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> a+x /​etc/​grub.d/​40_custom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="archivo-de-configuracion-40-custom" tabindex="-1"><a class="header-anchor" href="#archivo-de-configuracion-40-custom"><span>Archivo de configuración <code>40_custom</code></span></a></h5><p><code>boot = LE_SYSTEM</code><code>disk = LE_DATA</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token builtin class-name">exec</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> +3 <span class="token variable">$0</span>
<span class="token comment"># This file provides an easy way to add custom menu entries.  Simply type the</span>
<span class="token comment"># menu entries you want to add after this comment.  Be careful not to change</span>
<span class="token comment"># the &#39;exec tail&#39; line above.</span>

menuentry <span class="token string">&quot;LibreElec&quot;</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">set</span> <span class="token assign-left variable">root</span><span class="token operator">=</span><span class="token punctuation">(</span>hd0,6<span class="token punctuation">)</span>
	linux /KERNEL KERNEL <span class="token assign-left variable">boot</span><span class="token operator">=</span>/dev/sda6 <span class="token assign-left variable">disk</span><span class="token operator">=</span>/dev/sda7 quiet nosplash
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="android-blissos" tabindex="-1"><a class="header-anchor" href="#android-blissos"><span>Android (BlissOS)</span></a></h2><p>Es necesario crear 1 particion</p><ul><li>Partición 1 de tipo <code>EXT4</code> y etiqueta <code>ANDROID</code> (8GB valdría)</li></ul><h5 id="archivo-de-configuracion-40-custom-1" tabindex="-1"><a class="header-anchor" href="#archivo-de-configuracion-40-custom-1"><span>Archivo de configuración <code>40_custom</code></span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>menuentry <span class="token string">&#39;Android - BlissOS AG10 2020-10-27&#39;</span> —class android <span class="token punctuation">{</span>
    <span class="token comment">#search —file —no-floppy —fs-uuid —set=root &quot;c222b1cc-44d3-45bd-8a92-4b20b8b31778&quot;</span>
    <span class="token builtin class-name">set</span> <span class="token assign-left variable">root</span><span class="token operator">=</span><span class="token punctuation">(</span>hd0,9<span class="token punctuation">)</span>
    linux /android-2020-10-27/kernel <span class="token assign-left variable">root</span><span class="token operator">=</span>/dev/ram0 <span class="token assign-left variable">SRC</span><span class="token operator">=</span>/android-2020-10-27 <span class="token assign-left variable">androidboot.selinux</span><span class="token operator">=</span>permissive <span class="token assign-left variable">androidboot.hardware</span><span class="token operator">=</span>android_x86_64 <span class="token assign-left variable">video</span><span class="token operator">=</span>1920x1080
<span class="token comment">#DATA=UUID=d2d40333-a15f-44cb-b628-84f053ee9a39</span>
    initrd /android-2020-10-27/initrd.img
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>Original Info</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://thematrix.dev/install-android-on-surface-pro-6/

Install GParted.
Prepare an empty partition for Android.
Prepare an empty partition for Android user-data, if you prefer,
so your accounts, settings, installed applications, would be kept
when you update Android in the future.

Select &quot;install&quot; on the menu.
Choose the partition prepared, choose &quot;ext4&quot; as its format.
Do not install grub. We will handle it manually later.
Install Android as R/W.
Afterall, reboot.

Find out the partition UUID of Android and user-data.
sudo blkid

menuentry &#39;Android&#39; —class android {
search —file —no-floppy —fs-uuid —set=root $ANDROID_UUID
    linux /android-8.1-r1/kernel root=/dev/ram0 SRC=/android-8.1-r1 androidboot.selinux=permissive androidboot.hardware=android_x86_64 video=1920x1080 DATA=UUID=$USERDATA_UUID
initrd /android-8.1-r1/initrd.img
}

https://forum.xda-developers.com/t/guide-triple-boot-full-rooted-android-x86-with-ubuntu-and-windows-without-usb.3092913/

set root=&#39;(hd0,1)&#39;

https://sourceforge.net/projects/blissos-dev/files/Android-Generic/PC/bliss/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,11);function m(h,k){const s=o("ExternalLinkIcon");return l(),r("div",null,[c,a("p",null,[e("En la partición 1 es necesario volcar el contenido del archivo "),a("a",p,[e("boot.tar.xz"),i(s)])]),u,a("p",null,[e("En la partición 1 es necesario volcar el contenido del archivo "),a("a",v,[e("LibreELEC-Generic.x86_64-x.x.x.tar"),i(s)])]),b])}const g=t(d,[["render",m],["__file","GRUB.html.vue"]]),x=JSON.parse('{"path":"/FILES/GRUB.html","title":"Grub","lang":"es-ES","frontmatter":{},"headers":[{"level":2,"title":"Batocera","slug":"batocera","link":"#batocera","children":[]},{"level":2,"title":"LibreElec","slug":"libreelec","link":"#libreelec","children":[]},{"level":2,"title":"Android (BlissOS)","slug":"android-blissos","link":"#android-blissos","children":[]}],"git":{"updatedTime":1704626663000,"contributors":[{"name":"Manuel Muñoz","email":"manmunlop@gmail.com","commits":2}]},"filePathRelative":"FILES/GRUB.md"}');export{g as comp,x as data};
