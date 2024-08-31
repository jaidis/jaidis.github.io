import{_ as n,c as s,o as a,e}from"./app-WTCSfxTo.js";const p={},l=e(`<h1 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose"><span>Docker Compose</span></a></h1><h2 id="container-templates-almost-all-raspberry-compatible" tabindex="-1"><a class="header-anchor" href="#container-templates-almost-all-raspberry-compatible"><span>Container templates (almost all raspberry compatible)</span></a></h2><h5 id="adguard" tabindex="-1"><a class="header-anchor" href="#adguard"><span>Adguard</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">adguardhome</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> adguard/adguardhome<span class="token punctuation">:</span>armhf<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> adguardhome</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 53<span class="token punctuation">:</span>53/tcp</span>
<span class="line">      <span class="token punctuation">-</span> 53<span class="token punctuation">:</span>53/udp</span>
<span class="line">      <span class="token punctuation">-</span> 67<span class="token punctuation">:</span>67/tcp</span>
<span class="line">      <span class="token punctuation">-</span> 67<span class="token punctuation">:</span>67/udp</span>
<span class="line">      <span class="token punctuation">-</span> 853<span class="token punctuation">:</span>853/tcp</span>
<span class="line">      <span class="token punctuation">-</span> 3000<span class="token punctuation">:</span>3000/tcp</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/adguardhome<span class="token punctuation">:</span>/opt/adguardhome/conf</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/adguardhome<span class="token punctuation">:</span>/opt/adguardhome/work</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="dashmachine" tabindex="-1"><a class="header-anchor" href="#dashmachine"><span>dashmachine</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">adguardhome</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> adguard/adguardhome<span class="token punctuation">:</span>armhf<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> adguardhome</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 53<span class="token punctuation">:</span>53/tcp</span>
<span class="line">      <span class="token punctuation">-</span> 53<span class="token punctuation">:</span>53/udp</span>
<span class="line">      <span class="token punctuation">-</span> 67<span class="token punctuation">:</span>67/tcp</span>
<span class="line">      <span class="token punctuation">-</span> 67<span class="token punctuation">:</span>67/udp</span>
<span class="line">      <span class="token punctuation">-</span> 853<span class="token punctuation">:</span>853/tcp</span>
<span class="line">      <span class="token punctuation">-</span> 3000<span class="token punctuation">:</span>3000/tcp</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/adguardhome<span class="token punctuation">:</span>/opt/adguardhome/conf</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/adguardhome<span class="token punctuation">:</span>/opt/adguardhome/work</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="deemix" tabindex="-1"><a class="header-anchor" href="#deemix"><span>deemix</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">adguardhome</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.gitlab.com/bockiii/deemix<span class="token punctuation">-</span>docker</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> deemix</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 6595<span class="token punctuation">:</span>6595/tcp</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/deemix<span class="token punctuation">:</span>/config</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/deemix<span class="token punctuation">:</span>/downloads</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">      <span class="token punctuation">-</span> UMASK_SET=022</span>
<span class="line">      <span class="token punctuation">-</span> ARL=29c8ccd9c159a446d3715261fec17fd2c5cb63946342a678aa788023940ff9d2fc7e82ec55f176e60a5545bc997b712663e7e19a8f410d2e7fa282e67ced66ffb669d3bdc66bcae9cd457d3071a47aca9a79f35075808c9416669cc9ff71132e <span class="token comment">#Put your ARL cookie code here</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="dillinger" tabindex="-1"><a class="header-anchor" href="#dillinger"><span>dillinger</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">dillinger</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> linuxserver/dillinger<span class="token punctuation">:</span>arm32v7<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> dillinger</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/dillinger<span class="token punctuation">:</span>/config</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">8080</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="filebrowser" tabindex="-1"><a class="header-anchor" href="#filebrowser"><span>FileBrowser</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">filebrowser</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># image: filebrowser/filebrowser:v2.21.1-armv7</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> filebrowser/filebrowser<span class="token punctuation">:</span>v2.21.1<span class="token punctuation">-</span>arm64</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> filebrowser</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/filebrowser/database.db<span class="token punctuation">:</span>/database.db</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi<span class="token punctuation">:</span>/srv</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 8888<span class="token punctuation">:</span><span class="token number">80</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="gitea" tabindex="-1"><a class="header-anchor" href="#gitea"><span>gitea</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">codimd</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> kunde21/gitea<span class="token punctuation">-</span>arm<span class="token punctuation">:</span>v1.14.2<span class="token punctuation">-</span>armv7</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> gitea</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/gitea<span class="token punctuation">:</span>/data</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 3333<span class="token punctuation">:</span><span class="token number">3000</span></span>
<span class="line">      <span class="token punctuation">-</span> 3334<span class="token punctuation">:</span><span class="token number">22</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="heimdall" tabindex="-1"><a class="header-anchor" href="#heimdall"><span>heimdall</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">heimdall</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> linuxserver/heimdall</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> heimdall</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/heimdall<span class="token punctuation">:</span>/config</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 5005<span class="token punctuation">:</span><span class="token number">80</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="jellyfin" tabindex="-1"><a class="header-anchor" href="#jellyfin"><span>Jellyfin</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">jellyfin</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># image: linuxserver/jellyfin:arm32v7-bionic-10.6.4-1-ls3</span></span>
<span class="line">    <span class="token comment"># image: linuxserver/jellyfin:arm32v7-bionic</span></span>
<span class="line">    <span class="token comment"># image: ghcr.io/linuxserver/jellyfin:arm32v7-latest</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/linuxserver/jellyfin<span class="token punctuation">:</span>arm64v8<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> jellyfin</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">      <span class="token comment">#- UMASK_SET=022 #optional</span></span>
<span class="line">      <span class="token punctuation">-</span> UMASK=022 <span class="token comment">#optional</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/jellyfin<span class="token punctuation">:</span>/config</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Classical<span class="token punctuation">:</span>/data/classical</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Chillout<span class="token punctuation">:</span>/data/chillout</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Electronic<span class="token punctuation">:</span>/data/electronic</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Funk<span class="token punctuation">:</span>/data/funk</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/HipHop<span class="token punctuation">:</span>/data/hiphop</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Jazz<span class="token punctuation">:</span>/data/jazz</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Others<span class="token punctuation">:</span>/data/others</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Pop<span class="token punctuation">:</span>/data/pop</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Reggae<span class="token punctuation">:</span>/data/reggae</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Rock<span class="token punctuation">:</span>/data/rock</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Soul<span class="token punctuation">:</span>/data/soul</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Spanish<span class="token punctuation">:</span>/data/spanish</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Swing<span class="token punctuation">:</span>/data/swing</span>
<span class="line">      <span class="token comment"># - /home/pi/docker-data/music/Playlists:/data/playlists</span></span>
<span class="line">      <span class="token punctuation">-</span> /opt/vc/lib<span class="token punctuation">:</span>/opt/vc/lib</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 8096<span class="token punctuation">:</span><span class="token number">8096</span></span>
<span class="line">      <span class="token punctuation">-</span> 8920<span class="token punctuation">:</span><span class="token number">8920</span></span>
<span class="line">    <span class="token comment">#devices:</span></span>
<span class="line">    <span class="token comment">#  - /dev/vcsm:/dev/vcsm</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="jsondiff" tabindex="-1"><a class="header-anchor" href="#jsondiff"><span>jsondiff</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">adguardhome</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> jaidis/jsondiff<span class="token punctuation">-</span>arm</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> jsondiff</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 8890<span class="token punctuation">:</span>80/tcp</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="lidarr" tabindex="-1"><a class="header-anchor" href="#lidarr"><span>lidarr</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">lidarr</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/linuxserver/lidarr<span class="token punctuation">:</span>arm32v7<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> lidarr</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 8686<span class="token punctuation">:</span><span class="token number">8686</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/lidarr<span class="token punctuation">:</span>/config</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/lidarr<span class="token punctuation">:</span>/music <span class="token comment">#optional</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/lidarr<span class="token punctuation">:</span>/downloads <span class="token comment">#optional</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">      <span class="token punctuation">-</span> UMASK=000 <span class="token comment">#optional</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="mariadb" tabindex="-1"><a class="header-anchor" href="#mariadb"><span>mariadb</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">mariadb</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> linuxserver/mariadb</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mariadb</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=$PASSWORD$</span>
<span class="line">      <span class="token punctuation">-</span> MYSQL_USER=pi</span>
<span class="line">      <span class="token punctuation">-</span> MYSQL_PASSWORD=$PASSWORD$</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/mariadb<span class="token punctuation">:</span>/config</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 3306<span class="token punctuation">:</span><span class="token number">3306</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="netdata" tabindex="-1"><a class="header-anchor" href="#netdata"><span>netdata</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">netdata</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> netdata/netdata</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> netdata</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 9001<span class="token punctuation">:</span><span class="token number">19999</span></span>
<span class="line">    <span class="token key atrule">cap_add</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> SYS_PTRACE</span>
<span class="line">    <span class="token key atrule">security_opt</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> apparmor<span class="token punctuation">:</span>unconfined</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /proc<span class="token punctuation">:</span>/host/proc<span class="token punctuation">:</span>ro</span>
<span class="line">      <span class="token punctuation">-</span> /sys<span class="token punctuation">:</span>/host/sys<span class="token punctuation">:</span>ro</span>
<span class="line">      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock<span class="token punctuation">:</span>ro</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="phpmyadmin" tabindex="-1"><a class="header-anchor" href="#phpmyadmin"><span>phpmyadmin</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">phpmyadmin</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> biarms/phpmyadmin</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> phpmyadmin</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">      <span class="token punctuation">-</span> PMA_ARBITRARY=1</span>
<span class="line">      <span class="token punctuation">-</span> PMA_HOST=mariadb</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/phpmyadmin<span class="token punctuation">:</span>/sessions</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 8081<span class="token punctuation">:</span><span class="token number">80</span></span>
<span class="line">    <span class="token comment">#restart: always</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line">    <span class="token key atrule">external_links</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> mariadb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="qbittorrent" tabindex="-1"><a class="header-anchor" href="#qbittorrent"><span>qbittorrent</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">qbittorrent</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># image: linuxserver/qbittorrent:arm32v7-latest</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/linuxserver/qbittorrent<span class="token punctuation">:</span>arm32v7<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> qbittorrent</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">      <span class="token comment">#- UMASK_SET=022</span></span>
<span class="line">      <span class="token punctuation">-</span> WEBUI_PORT=8112</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/qbittorrent<span class="token punctuation">:</span>/config</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/qbittorrent<span class="token punctuation">:</span>/downloads</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 6881<span class="token punctuation">:</span><span class="token number">6881</span></span>
<span class="line">      <span class="token punctuation">-</span> 6881<span class="token punctuation">:</span>6881/udp</span>
<span class="line">      <span class="token punctuation">-</span> 8112<span class="token punctuation">:</span><span class="token number">8112</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="stackedit" tabindex="-1"><a class="header-anchor" href="#stackedit"><span>stackedit</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">stackedit</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> jaidis/stackedit<span class="token punctuation">-</span>arm</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> stackedit</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> LISTENING_PORT=8008</span>
<span class="line">      <span class="token punctuation">-</span> ROOT_URL=/</span>
<span class="line">      <span class="token punctuation">-</span> NODE_ENV=production</span>
<span class="line">      <span class="token punctuation">-</span> USER_BUCKET_NAME=stackedit<span class="token punctuation">-</span>users</span>
<span class="line">      <span class="token punctuation">-</span> PAYPAL_RECEIVER_EMAIL=</span>
<span class="line">      <span class="token punctuation">-</span> DROPBOX_APP_KEY=</span>
<span class="line">      <span class="token punctuation">-</span> DROPBOX_APP_KEY_FULL=</span>
<span class="line">      <span class="token punctuation">-</span> GITHUB_CLIENT_ID=</span>
<span class="line">      <span class="token punctuation">-</span> GITHUB_CLIENT_SECRET=</span>
<span class="line">      <span class="token punctuation">-</span> GOOGLE_CLIENT_ID=</span>
<span class="line">      <span class="token punctuation">-</span> GOOGLE_API_KEY=</span>
<span class="line">      <span class="token punctuation">-</span> WORDPRESS_CLIENT_ID=</span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 8008<span class="token punctuation">:</span>8008/tcp</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="taisun" tabindex="-1"><a class="header-anchor" href="#taisun"><span>taisun</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">taisun</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> linuxserver/taisun</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> taisun</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 4000<span class="token punctuation">:</span><span class="token number">3000</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode"><span>vscode</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">code-server</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> lscr.io/linuxserver/code<span class="token punctuation">-</span>server<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> code<span class="token punctuation">-</span>server</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 8448<span class="token punctuation">:</span><span class="token number">8443</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/vscode<span class="token punctuation">:</span>/config</span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/home/pi/docker</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">      <span class="token punctuation">-</span> PASSWORD=$PASSWORD$</span>
<span class="line">      <span class="token punctuation">-</span> SUDO_PASSWORD=$PASSWORD$</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="wordpress" tabindex="-1"><a class="header-anchor" href="#wordpress"><span>wordpress</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">wordpress</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> wordpress<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> wordpress</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">WORDPRESS_DB_HOST</span><span class="token punctuation">:</span> mariadb</span>
<span class="line">      <span class="token key atrule">WORDPRESS_DB_USER</span><span class="token punctuation">:</span> root</span>
<span class="line">      <span class="token key atrule">WORDPRESS_DB_PASSWORD</span><span class="token punctuation">:</span> $PASSWORD$</span>
<span class="line">      <span class="token key atrule">WORDPRESS_DB_NAME</span><span class="token punctuation">:</span> wp</span>
<span class="line">      <span class="token key atrule">PUID</span><span class="token punctuation">:</span> <span class="token number">1000</span></span>
<span class="line">      <span class="token key atrule">PGID</span><span class="token punctuation">:</span> <span class="token number">1000</span></span>
<span class="line">      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Europe/Madrid</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/wordpress<span class="token punctuation">:</span>/var/www/html</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 8899<span class="token punctuation">:</span><span class="token number">80</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line">    <span class="token key atrule">external_links</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> mariadb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="yayserver" tabindex="-1"><a class="header-anchor" href="#yayserver"><span>yayserver</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">yayserver</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> jaidis/php<span class="token punctuation">-</span>7.4.29<span class="token punctuation">-</span>apache2<span class="token punctuation">-</span>pdo<span class="token punctuation">-</span>mysqli<span class="token punctuation">:</span>bullseye<span class="token punctuation">-</span>arm64v8</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> yayserver</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/yayserver<span class="token punctuation">:</span>/var/www/html</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Europe/Madrid</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 8900<span class="token punctuation">:</span><span class="token number">80</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line">    <span class="token key atrule">external_links</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> mariadb</span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> linked</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">linked</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),i=[l];function t(c,u){return a(),s("div",null,i)}const d=n(p,[["render",t],["__file","DOCKER-COMPOSE.html.vue"]]),r=JSON.parse('{"path":"/FILES/DOCKER-COMPOSE.html","title":"Docker Compose","lang":"es-ES","frontmatter":{},"headers":[{"level":2,"title":"Container templates (almost all raspberry compatible)","slug":"container-templates-almost-all-raspberry-compatible","link":"#container-templates-almost-all-raspberry-compatible","children":[]}],"git":{"updatedTime":1674656164000,"contributors":[{"name":"Manuel Muñoz","email":"manmunlop@gmail.com","commits":4}]},"filePathRelative":"FILES/DOCKER-COMPOSE.md"}');export{d as comp,r as data};
