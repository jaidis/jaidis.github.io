# PSP

## 7z

### Compress

<details>
  <summary>Show</summary>

```bash
#!/bin/bash
version="0.1"

function error() {
        echo -n "$SCRIPTNAME: ERROR occured in line $1: "
        shift
        echo "$@"
}

function 7zCompress(){
    for command in 7z; do
            command -v $command >/dev/null 2>&1
            if (( $? != 0 )); then
                    error $LINENO "$command is not installed."
                    exit -4
            fi
    done
    7z a -mx=9 -mmt=on -aoa "${1%.*}.7z" "$1"
}


for f in *.iso; do
    7zCompress "$f";
done
```

</details>

### Descompress

<details>
  <summary>Show</summary>

```bash
#!/bin/bash
version="0.1"

function error() {
        echo -n "$SCRIPTNAME: ERROR occured in line $1: "
        shift
        echo "$@"
}

function 7zDescompress(){
    for command in 7z; do
            command -v $command >/dev/null 2>&1
            if (( $? != 0 )); then
                    error $LINENO "$command is not installed."
                    exit -4
            fi
    done
    7z x "$1"
}


for f in *.7z; do
    7zDescompress "$f";
done
```

</details>

# CISO

### Compress

<details>
  <summary>Show</summary>

```bash

```

</details>

### Descompress

<details>
  <summary>Show</summary>

```bash

```

</details>

>

[Original Source ](https://www.reddit.com/r/RetroPie/comments/k90c4x/comment/gf21rr9/?utm_source=share&utm_medium=web2x&context=3)

<details>
  <summary>Show</summary>

>

On Ubuntu:

```bash
sudo apt install ciso -y
```

then paste this into a shell script:

```bash
#!/bin/bash

version="0.2"

if [ "$#" -ne 1 ]; then
echo "Usage: $(basename $0) [iso file]"
exit 0
fi

function error() {
echo -n "$SCRIPTNAME: ERROR occured in line $1: "
        shift
        echo "$@"
}

echo ${0##.\*} $version

#Usage Checks
for command in ciso; do
command -v $command >/dev/null 2>&1
        if (( $? != 0 )); then
                error $LINENO "$command is not installed."
exit -4
fi
done

ciso 9 "$1" "${1%.\*}.cso"
```

then

```bash
chmod +x whateveryourscriptnameis.sh
```

then finally, to batch process a bunch of isos in a directory run

```bash
for f in \*.iso; do whateveryourscriptnameis.sh "$f"; done
```

Sit back, get a cup of coffee and let bash do all the work.

</details>
