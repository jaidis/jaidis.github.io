import{_ as a,o as e,c as s,f as n}from"./app-ZOF6ibMC.js";const l={},i=n(`<h1 id="tp-link-archer-t3u-plus" tabindex="-1"><a class="header-anchor" href="#tp-link-archer-t3u-plus" aria-hidden="true">#</a> TP-Link Archer T3U Plus</h1><p>Instrucciones para crear el driver del adaptador WiFi e intregrarlo en el kernel</p><hr><h2 id="debian-ubuntu-mint" tabindex="-1"><a class="header-anchor" href="#debian-ubuntu-mint" aria-hidden="true">#</a> Debian / Ubuntu / Mint</h2><h4 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h4><p>Clonar el repositorio desde GitHub</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/cilynx/rtl88x2bu <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> rtl*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Generar una variable de entorno con la versión del paquete actual</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">VER</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;s/\\PACKAGE_VERSION=&quot;\\(.*\\)&quot;/\\1/p&#39;</span> dkms.conf<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Copiar los archivos en el Sistema Operativo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rsync</span> <span class="token parameter variable">-rvhP</span> ./ /usr/src/rtl88x2bu-<span class="token variable">\${VER}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Añadir el módulo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dkms <span class="token function">add</span> <span class="token parameter variable">-m</span> rtl88x2bu <span class="token parameter variable">-v</span> <span class="token variable">\${VER}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Contruir el módulo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dkms build <span class="token parameter variable">-m</span> rtl88x2bu <span class="token parameter variable">-v</span> <span class="token variable">\${VER}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Instalar el módulo en el Kernel</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dkms <span class="token function">install</span> <span class="token parameter variable">-m</span> rtl88x2bu <span class="token parameter variable">-v</span> <span class="token variable">\${VER}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Activar el módulo en el Kernel</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> modprobe 88x2bu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="uninstall" tabindex="-1"><a class="header-anchor" href="#uninstall" aria-hidden="true">#</a> Uninstall</h4><p>Para eliminar el driver del kernel es necesario borrar el módulo del Kernel</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dkms remove rtl88x2bu/5.8.7.1 <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="original-source" tabindex="-1"><a class="header-anchor" href="#original-source" aria-hidden="true">#</a> Original source</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/cilynx/rtl88x2bu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24),r=[i];function d(t,c){return e(),s("div",null,r)}const p=a(l,[["render",d],["__file","RTL8812BU.html.vue"]]);export{p as default};