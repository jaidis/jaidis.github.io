import{_ as s,c as e,o as n,e as a}from"./app-WTCSfxTo.js";const i={},l=a(`<h1 id="fstab" tabindex="-1"><a class="header-anchor" href="#fstab"><span>FSTAB</span></a></h1><p>Archivo de ejemplo de FSTAB</p><ul><li>Deshabilitar escrituras innecesarias en SSD</li><li>Deshabilitar/habilitar particion de swap</li><li>Volcar los archivos temporales a la RAM</li><li>Volcar carpetas de cache (google, telegram, ...) a la RAM</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># /etc/fstab: static file system information.</span>
<span class="line">#</span>
<span class="line"># Use &#39;blkid&#39; to print the universally unique identifier for a</span>
<span class="line"># device; this may be used with UUID= as a more robust way to name devices</span>
<span class="line"># that works even if disks are added and removed. See fstab(5).</span>
<span class="line">#</span>
<span class="line"># &lt;file system&gt; &lt;mount point&gt;   &lt;type&gt;  &lt;options&gt;       &lt;dump&gt;  &lt;pass&gt;</span>
<span class="line"># / was on /dev/sda5 during installation</span>
<span class="line">UUID=04b1be3c-ab9f-489b-bee9-e46997867c1d /               ext4    errors=remount-ro 0       1</span>
<span class="line"></span>
<span class="line"># AVOID WRITES AT SSD</span>
<span class="line">#UUID=04b1be3c-ab9f-489b-bee9-e46997867c1d /               ext4    noatime,nodelalloc,barrier=0,i_version,commit=30,inode_readahead_blks=64,errors=remount-ro 0       1</span>
<span class="line"></span>
<span class="line"># NTFS PARTITION</span>
<span class="line">UUID=45C8EF3A2F438307 /media/jaidis/Datos ntfs rw,auto,users,exec,nls=utf8,umask=003,gid=46,uid=1000    0   0</span>
<span class="line"></span>
<span class="line"># DISABLE SWAP</span>
<span class="line">/swapfile                                 none            swap    sw              0       0</span>
<span class="line"></span>
<span class="line"># ENABLE SWAP</span>
<span class="line">UUID=728b122d-d650-4c7a-a298-9190657ef14d none            swap    sw              0       0</span>
<span class="line"></span>
<span class="line"># TEMPS TO RAM</span>
<span class="line">tmpfs    /tmp    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0</span>
<span class="line">tmpfs    /var/tmp    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0</span>
<span class="line"></span>
<span class="line"># APPS CACHES TO RAM</span>
<span class="line">tmpfs    /home/jaidis/.cache/google-chrome    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0</span>
<span class="line">tmpfs    /home/jaidis/.local/share/TelegramDesktop/tdata/user_data    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0</span>
<span class="line">tmpfs    /home/jaidis/.cache/Google    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0</span>
<span class="line">tmpfs    /home/jaidis/.cache/Jellyfin\\040Media\\040Player/QtWebEngine/Default/Cache    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0</span>
<span class="line">tmpfs    /home/jaidis/.config/Code/Cache    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0</span>
<span class="line">tmpfs    /home/jaidis/.config/deemix-gui/Cache    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0</span>
<span class="line">tmpfs    /home/jaidis/.config/google-chrome/Default/Service\\040Worker/CacheStorage    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0</span>
<span class="line">tmpfs    /home/jaidis/.config/Microsoft/Microsoft\\040Teams/Cache    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0</span>
<span class="line"></span>
<span class="line"># JELLYFIN CACHE TO RAM (raspberry)</span>
<span class="line">tmpfs /home/pi/docker-config/jellyfin/cache tmpfs noatime,nodiratime,nodev,nosuid,mode=1777,defaults 0 0</span>
<span class="line">tmpfs /home/pi/docker-config/jellyfin/log tmpfs noatime,nodiratime,nodev,nosuid,mode=1777,defaults 0 0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[l];function t(o,m){return n(),e("div",null,d)}const r=s(i,[["render",t],["__file","FSTAB.html.vue"]]),p=JSON.parse('{"path":"/FILES/FSTAB.html","title":"FSTAB","lang":"es-ES","frontmatter":{},"headers":[],"git":{"updatedTime":1649755148000,"contributors":[{"name":"Manuel Muñoz","email":"manmunlop@gmail.com","commits":1}]},"filePathRelative":"FILES/FSTAB.md"}');export{r as comp,p as data};
