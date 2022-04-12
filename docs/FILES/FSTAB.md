# FSTAB

Archivo de ejemplo de FSTAB

- Deshabilitar escrituras innecesarias en SSD
- Deshabilitar/habilitar particion de swap
- Volcar los archivos temporales a la RAM
- Volcar carpetas de cache (google, telegram, ...) a la RAM

```
# /etc/fstab: static file system information.
#
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# <file system> <mount point>   <type>  <options>       <dump>  <pass>
# / was on /dev/sda5 during installation
UUID=04b1be3c-ab9f-489b-bee9-e46997867c1d /               ext4    errors=remount-ro 0       1

# AVOID WRITES AT SSD
#UUID=04b1be3c-ab9f-489b-bee9-e46997867c1d /               ext4    noatime,nodelalloc,barrier=0,i_version,commit=30,inode_readahead_blks=64,errors=remount-ro 0       1

# NTFS PARTITION
UUID=45C8EF3A2F438307 /media/jaidis/Datos ntfs rw,auto,users,exec,nls=utf8,umask=003,gid=46,uid=1000    0   0

# DISABLE SWAP
/swapfile                                 none            swap    sw              0       0

# ENABLE SWAP
UUID=728b122d-d650-4c7a-a298-9190657ef14d none            swap    sw              0       0

# TEMPS TO RAM
tmpfs    /tmp    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0
tmpfs    /var/tmp    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0

# APPS CACHES TO RAM
tmpfs    /home/jaidis/.cache/google-chrome    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0
tmpfs    /home/jaidis/.local/share/TelegramDesktop/tdata/user_data    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0
tmpfs    /home/jaidis/.cache/Google    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0
tmpfs    /home/jaidis/.cache/Jellyfin\040Media\040Player/QtWebEngine/Default/Cache    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0
tmpfs    /home/jaidis/.config/Code/Cache    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0
tmpfs    /home/jaidis/.config/deemix-gui/Cache    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0
tmpfs    /home/jaidis/.config/google-chrome/Default/Service\040Worker/CacheStorage    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0
tmpfs    /home/jaidis/.config/Microsoft/Microsoft\040Teams/Cache    tmpfs    noatime,nodiratime,nodev,nosuid,mode=1777,defaults    0    0

# JELLYFIN CACHE TO RAM (raspberry)
tmpfs /home/pi/docker-config/jellyfin/cache tmpfs noatime,nodiratime,nodev,nosuid,mode=1777,defaults 0 0
tmpfs /home/pi/docker-config/jellyfin/log tmpfs noatime,nodiratime,nodev,nosuid,mode=1777,defaults 0 0
```
