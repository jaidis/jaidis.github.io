import{_ as a,o as s,c as n,f as e}from"./app-ZOF6ibMC.js";const i={},t=e(`<h1 id="desktop-files-linux" tabindex="-1"><a class="header-anchor" href="#desktop-files-linux" aria-hidden="true">#</a> Desktop files (linux)</h1><h3 id="android-studio" tabindex="-1"><a class="header-anchor" href="#android-studio" aria-hidden="true">#</a> Android Studio</h3><p><strong>Archivo de configuración para que aparecezca en el submenú de programación/desarrollo</strong></p><p>Ruta del archivo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> xed /usr/share/applications/android-studio.desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>Mostrar</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Desktop Entry<span class="token punctuation">]</span>
<span class="token assign-left variable">Version</span><span class="token operator">=</span><span class="token number">1.0</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>Application
<span class="token assign-left variable">Name</span><span class="token operator">=</span>Android Studio
<span class="token assign-left variable">Icon</span><span class="token operator">=</span>/opt/AndroidStudio/bin/studio.png
<span class="token assign-left variable">Exec</span><span class="token operator">=</span><span class="token string">&quot;/opt/AndroidStudio/bin/studio.sh&quot;</span> %f
<span class="token assign-left variable">Categories</span><span class="token operator">=</span>Development<span class="token punctuation">;</span>IDE<span class="token punctuation">;</span>
<span class="token assign-left variable">Terminal</span><span class="token operator">=</span>false
<span class="token assign-left variable">StartupWMClass</span><span class="token operator">=</span>jetbrains-android-studio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="deemix" tabindex="-1"><a class="header-anchor" href="#deemix" aria-hidden="true">#</a> Deemix</h3><p><strong>Archivo de configuración para que aparecezca en el submenú de &quot;Sonido y video&quot;.</strong></p><p>Ruta del archivo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> xed /usr/share/applications/deemix-gui.desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>Mostrar</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Desktop Entry<span class="token punctuation">]</span>
<span class="token assign-left variable">Name</span><span class="token operator">=</span>deemix-gui
<span class="token assign-left variable">Exec</span><span class="token operator">=</span>/opt/deemix-gui/deemix-gui %U
<span class="token assign-left variable">Terminal</span><span class="token operator">=</span>false
<span class="token assign-left variable">Type</span><span class="token operator">=</span>Application
<span class="token assign-left variable">Icon</span><span class="token operator">=</span>deemix-gui
<span class="token assign-left variable">StartupWMClass</span><span class="token operator">=</span>deemix-gui
<span class="token assign-left variable">Categories</span><span class="token operator">=</span>AudioVideo<span class="token punctuation">;</span>Audio<span class="token punctuation">;</span>Player<span class="token punctuation">;</span>
<span class="token assign-left variable">MimeType</span><span class="token operator">=</span>application/x-flac<span class="token punctuation">;</span>audio/flac<span class="token punctuation">;</span>audio/x-flac<span class="token punctuation">;</span>audio/mp3<span class="token punctuation">;</span>
<span class="token assign-left variable">Keywords</span><span class="token operator">=</span>Player<span class="token punctuation">;</span>Audio<span class="token punctuation">;</span>Server<span class="token punctuation">;</span>Broadcast<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="google-chrome" tabindex="-1"><a class="header-anchor" href="#google-chrome" aria-hidden="true">#</a> Google Chrome</h3><p><strong>Archivo de configuración para evitar escribir en la cache del pc.</strong></p><p>Ruta del archivo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> xed /usr/share/applications/google-chrome.desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>Mostrar</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Desktop Entry<span class="token punctuation">]</span>
<span class="token assign-left variable">Version</span><span class="token operator">=</span><span class="token number">1.0</span>
<span class="token assign-left variable">Name</span><span class="token operator">=</span>Google Chrome
<span class="token comment"># Only KDE 4 seems to use GenericName, so we reuse the KDE strings.</span>
<span class="token comment"># From Ubuntu&#39;s language-pack-kde-XX-base packages, version 9.04-20090413.</span>
<span class="token assign-left variable">GenericName</span><span class="token operator">=</span>Web Browser
GenericName<span class="token punctuation">[</span>en_GB<span class="token punctuation">]</span><span class="token operator">=</span>Web Browser
GenericName<span class="token punctuation">[</span>es<span class="token punctuation">]</span><span class="token operator">=</span>Navegador web
<span class="token comment"># Gnome and KDE 3 uses Comment.</span>
Comment<span class="token punctuation">[</span>en_GB<span class="token punctuation">]</span><span class="token operator">=</span>Access the Internet
Comment<span class="token punctuation">[</span>es<span class="token punctuation">]</span><span class="token operator">=</span>Accede a Internet.
<span class="token assign-left variable">Exec</span><span class="token operator">=</span>/usr/bin/google-chrome-stable %U --disk-cache-dir<span class="token operator">=</span>/dev/null
<span class="token assign-left variable">StartupNotify</span><span class="token operator">=</span>true
<span class="token assign-left variable">Terminal</span><span class="token operator">=</span>false
<span class="token assign-left variable">Icon</span><span class="token operator">=</span>google-chrome
<span class="token assign-left variable">Type</span><span class="token operator">=</span>Application
<span class="token assign-left variable">Categories</span><span class="token operator">=</span>Network<span class="token punctuation">;</span>WebBrowser<span class="token punctuation">;</span>
<span class="token assign-left variable">MimeType</span><span class="token operator">=</span>application/pdf<span class="token punctuation">;</span>application/rdf+xml<span class="token punctuation">;</span>application/rss+xml<span class="token punctuation">;</span>application/xhtml+xml<span class="token punctuation">;</span>application/xhtml_xml<span class="token punctuation">;</span>application/xml<span class="token punctuation">;</span>image/gif<span class="token punctuation">;</span>image/jpeg<span class="token punctuation">;</span>image/png<span class="token punctuation">;</span>image/webp<span class="token punctuation">;</span>text/html<span class="token punctuation">;</span>text/xml<span class="token punctuation">;</span>x-scheme-handler/ftp<span class="token punctuation">;</span>x-scheme-handler/http<span class="token punctuation">;</span>x-scheme-handler/https<span class="token punctuation">;</span>
<span class="token assign-left variable">Actions</span><span class="token operator">=</span>new-window<span class="token punctuation">;</span>new-private-window<span class="token punctuation">;</span>

<span class="token punctuation">[</span>Desktop Action new-window<span class="token punctuation">]</span>
<span class="token assign-left variable">Name</span><span class="token operator">=</span>New Window
Name<span class="token punctuation">[</span>en_GB<span class="token punctuation">]</span><span class="token operator">=</span>New Window
Name<span class="token punctuation">[</span>es<span class="token punctuation">]</span><span class="token operator">=</span>Nueva ventana
<span class="token assign-left variable">Exec</span><span class="token operator">=</span>/usr/bin/google-chrome-stable  %U --disk-cache-dir<span class="token operator">=</span>/dev/null

<span class="token punctuation">[</span>Desktop Action new-private-window<span class="token punctuation">]</span>
<span class="token assign-left variable">Name</span><span class="token operator">=</span>New Incognito Window
Name<span class="token punctuation">[</span>en_GB<span class="token punctuation">]</span><span class="token operator">=</span>New Incognito window
Name<span class="token punctuation">[</span>es<span class="token punctuation">]</span><span class="token operator">=</span>Nueva ventana de incógnito
<span class="token assign-left variable">Exec</span><span class="token operator">=</span>/usr/bin/google-chrome-stable <span class="token parameter variable">--incognito</span> --disk-cache-dir<span class="token operator">=</span>/dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="postman" tabindex="-1"><a class="header-anchor" href="#postman" aria-hidden="true">#</a> Postman</h3><p><strong>Archivo de configuración para que aparecezca en el submenú de programación/desarrollo</strong></p><p>Ruta del archivo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> xed /usr/share/applications/postman.desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>Mostrar</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Desktop Entry<span class="token punctuation">]</span>
<span class="token assign-left variable">Encoding</span><span class="token operator">=</span>UTF-8
<span class="token assign-left variable">Name</span><span class="token operator">=</span>Postman
<span class="token assign-left variable">Comment</span><span class="token operator">=</span>Postman
<span class="token assign-left variable">Exec</span><span class="token operator">=</span>/opt/Postman/Postman
<span class="token assign-left variable">Icon</span><span class="token operator">=</span>/opt/Postman/app/resources/app/assets/icon.png
<span class="token assign-left variable">Categories</span><span class="token operator">=</span>Development
<span class="token assign-left variable">Type</span><span class="token operator">=</span>Application
<span class="token assign-left variable">Terminal</span><span class="token operator">=</span>false
Name<span class="token punctuation">[</span>es_ES<span class="token punctuation">]</span><span class="token operator">=</span>Postman
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="react-native-debugger" tabindex="-1"><a class="header-anchor" href="#react-native-debugger" aria-hidden="true">#</a> React Native Debugger</h3><p><strong>Archivo de configuración para que aparecezca en el submenú de programación/desarrollo</strong></p><p>Ruta del archivo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> xed /usr/share/applications/react-native-debugger.desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>Mostrar</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Desktop Entry<span class="token punctuation">]</span>
<span class="token assign-left variable">Version</span><span class="token operator">=</span><span class="token number">1.0</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>Application
<span class="token assign-left variable">Name</span><span class="token operator">=</span>React Native Debugger
<span class="token assign-left variable">Icon</span><span class="token operator">=</span>/opt/rndebugger/logo.png
<span class="token assign-left variable">Exec</span><span class="token operator">=</span><span class="token string">&quot;/opt/rndebugger/react-native-debugger&quot;</span> %f
<span class="token assign-left variable">Categories</span><span class="token operator">=</span>Development<span class="token punctuation">;</span>IDE<span class="token punctuation">;</span>
<span class="token assign-left variable">Terminal</span><span class="token operator">=</span>false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="typora" tabindex="-1"><a class="header-anchor" href="#typora" aria-hidden="true">#</a> Typora</h3><p><strong>Archivo de configuración para que aparecezca en el menú</strong></p><p>Ruta del archivo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> xed /usr/share/applications/typora.desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>Mostrar</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Desktop Entry<span class="token punctuation">]</span>
<span class="token assign-left variable">Name</span><span class="token operator">=</span>Typora Markdown Editor
Name<span class="token punctuation">[</span>es<span class="token punctuation">]</span><span class="token operator">=</span>Typora editor de Markdown
<span class="token assign-left variable">Comment</span><span class="token operator">=</span>Edit markdown files
Comment<span class="token punctuation">[</span>es<span class="token punctuation">]</span><span class="token operator">=</span>Editar archivos de mardkdown
<span class="token assign-left variable">Exec</span><span class="token operator">=</span>typora %U
<span class="token assign-left variable">Terminal</span><span class="token operator">=</span>false
<span class="token assign-left variable">Type</span><span class="token operator">=</span>Application
<span class="token assign-left variable">StartupNotify</span><span class="token operator">=</span>true
<span class="token assign-left variable">MimeType</span><span class="token operator">=</span>text/plain<span class="token punctuation">;</span>
<span class="token assign-left variable">Icon</span><span class="token operator">=</span>/opt/Typora/resources/assets/installer.ico
<span class="token assign-left variable">Categories</span><span class="token operator">=</span>GTK<span class="token punctuation">;</span>Utility<span class="token punctuation">;</span>TextEditor<span class="token punctuation">;</span>
<span class="token assign-left variable">Keywords</span><span class="token operator">=</span>text<span class="token punctuation">;</span>editor<span class="token punctuation">;</span>tabs<span class="token punctuation">;</span>highlighting<span class="token punctuation">;</span>code<span class="token punctuation">;</span>multiple<span class="token punctuation">;</span>files<span class="token punctuation">;</span>pluggable<span class="token punctuation">;</span>notepad<span class="token punctuation">;</span>
<span class="token comment">#X-MATE-DocPath=xed/xed.xml</span>
<span class="token comment">#Actions=new-window;</span>

<span class="token comment">#[Desktop Action new-window]</span>
<span class="token comment">#Name=New Window</span>
<span class="token comment">#Exec=xed --new-window %U</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="ventoy" tabindex="-1"><a class="header-anchor" href="#ventoy" aria-hidden="true">#</a> Ventoy</h3><p><strong>Archivo de configuración para que aparecezca en el menú</strong></p><p>Ruta del archivo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> xed /usr/share/applications/Ventoy.desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>Mostrar</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Desktop Entry<span class="token punctuation">]</span>
<span class="token assign-left variable">Encoding</span><span class="token operator">=</span>UTF-8
<span class="token assign-left variable">Name</span><span class="token operator">=</span>Ventoy Gui
<span class="token assign-left variable">Comment</span><span class="token operator">=</span>Ventoy Gui
<span class="token assign-left variable">Exec</span><span class="token operator">=</span>/opt/ventoy/VentoyGUI.x86_64
<span class="token assign-left variable">Icon</span><span class="token operator">=</span>/opt/ventoy/WebUI/favicon.ico
<span class="token assign-left variable">Categories</span><span class="token operator">=</span>Utility
<span class="token assign-left variable">Type</span><span class="token operator">=</span>Application
<span class="token assign-left variable">Terminal</span><span class="token operator">=</span>false
Name<span class="token punctuation">[</span>es_ES<span class="token punctuation">]</span><span class="token operator">=</span>Ventoy Gui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> VSCode</h3><p><strong>Archivo de configuración para que aparecezca en el submenú de programación/desarrollo</strong></p><p>Ruta del archivo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> xed /usr/share/applications/vscode.desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>Mostrar</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Desktop Entry<span class="token punctuation">]</span>
<span class="token assign-left variable">Version</span><span class="token operator">=</span><span class="token number">1.0</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>Application
<span class="token assign-left variable">Name</span><span class="token operator">=</span>VSCode
<span class="token assign-left variable">Icon</span><span class="token operator">=</span>/opt/VSCode/resources/app/resources/linux/code.png
<span class="token assign-left variable">Exec</span><span class="token operator">=</span><span class="token string">&quot;/opt/VSCode/code&quot;</span> %f
<span class="token assign-left variable">Categories</span><span class="token operator">=</span>Development<span class="token punctuation">;</span>IDE<span class="token punctuation">;</span>
<span class="token assign-left variable">Terminal</span><span class="token operator">=</span>false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><blockquote></blockquote><p><strong>Versión oficial</strong></p><details><summary>Mostrar</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Desktop Entry<span class="token punctuation">]</span>
<span class="token assign-left variable">Name</span><span class="token operator">=</span>Visual Studio Code
<span class="token assign-left variable">Comment</span><span class="token operator">=</span>Code Editing. Redefined.
<span class="token assign-left variable">GenericName</span><span class="token operator">=</span>Text Editor
<span class="token assign-left variable">Exec</span><span class="token operator">=</span>/usr/share/code/code --unity-launch %F
<span class="token assign-left variable">Icon</span><span class="token operator">=</span>com.visualstudio.code
<span class="token assign-left variable">Type</span><span class="token operator">=</span>Application
<span class="token assign-left variable">StartupNotify</span><span class="token operator">=</span>false
<span class="token assign-left variable">StartupWMClass</span><span class="token operator">=</span>Code
<span class="token assign-left variable">Categories</span><span class="token operator">=</span>TextEditor<span class="token punctuation">;</span>Development<span class="token punctuation">;</span>IDE<span class="token punctuation">;</span>
<span class="token assign-left variable">MimeType</span><span class="token operator">=</span>text/plain<span class="token punctuation">;</span>inode/directory<span class="token punctuation">;</span>application/x-code-workspace<span class="token punctuation">;</span>
<span class="token assign-left variable">Actions</span><span class="token operator">=</span>new-empty-window<span class="token punctuation">;</span>
<span class="token assign-left variable">Keywords</span><span class="token operator">=</span>vscode<span class="token punctuation">;</span>

<span class="token punctuation">[</span>Desktop Action new-empty-window<span class="token punctuation">]</span>
<span class="token assign-left variable">Name</span><span class="token operator">=</span>New Empty Window
<span class="token assign-left variable">Exec</span><span class="token operator">=</span>/usr/share/code/code --new-window %F
<span class="token assign-left variable">Icon</span><span class="token operator">=</span>com.visualstudio.code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,44),p=[t];function o(l,c){return s(),n("div",null,p)}const d=a(i,[["render",o],["__file","DESKTOP-FILES.html.vue"]]);export{d as default};
