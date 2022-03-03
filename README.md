<h1 align="center">Blockchain</h1>

<div align="center">

[![OS - Linux](https://img.shields.io/badge/OS-Linux-blue?logo=linux&logoColor=white&style=plastic)](https://www.linux.org/ "Go to Linux homepage")
[![Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/Naereen/badges)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/v/npm?color=red&label=npm&logo=npm&logoColor=red&style=social)
![npm](https://img.shields.io/npm/v/node?color=green&label=node&logo=node.js&logoColor=node)
![npm](https://img.shields.io/npm/v/npm?color=yellow&label=javascript&logo=javascript&logoColor=yellow&style=social)
![npm](https://img.shields.io/npm/v/mysql?color=blue&label=mysql&logo=mysql&logoColor=blue&style=social)

</div>


----------------------------------------


# Pre-requisites

> Node version 16.6.0 & Npm version 7.19.1 **at minimum**


# Install blockchain with komodo (OS: Linux)

### Install dependecies :
```bash
# Dependencies
sudo apt-get install build-essential pkg-config libc6-dev m4 g++-multilib autoconf libtool libncurses-dev unzip git python-is-python2 zlib1g-dev wget libcurl4-gnutls-dev bsdmainutils automake curl libsodium-dev
```

### Clone repo to build komodo blockchain :
```bash
# Git clone
git clone https://github.com/komodoplatform/komodo --branch master --single-branch
```

### Build komodo blockchain :
```bash
cd komodo
#This can take some time.
./zcutil/fetch-params.sh
# Do not skip this step 
./zcutil/build.sh -j$(expr $(nproc) - 1)
```
# Other OS
Go on [Komodo Platform install](https://github.com/KomodoPlatform/komodo)

### Create komodo configuration file:
```bash
mkdir ~/.komodo
cd ~/.komodo
sudo nano komodo.conf || touch komodo.conf

#Add the following lines to the komodo.conf file:
rpcuser=your_rpc_username
rpcpassword=your_secure_rpc_password
rpcbind=127.0.0.1
txindex=1
addnode=77.75.121.138
addnode=95.213.238.100
addnode=94.130.148.142
addnode=103.6.12.105
addnode=139.99.209.214
addnode=185.130.212.13
addnode=5.9.142.219
addnode=200.25.4.38
addnode=139.99.136.148
```

### Create your chain:
>Go in folder komodo/src

```bash
./komodod -ac_name=name_of_your_chain -ac_supply=100000 -bind=ip_of_server &
```

# Get information to replace in .env
> Rename .env-sample to .env

# Discord
### Create a discord bot [here](https://discord.com/developers/applications/)

### Click on " New application"
<img src="https://media.discordapp.net/attachments/909830681826295878/948962352802435092/01.png?width=1440&height=466">

### Enter the name of your bot
<img src="https://cdn.discordapp.com/attachments/909830681826295878/948962349950328832/02.png">

### Copy client id (CLIENT_ID)
### Go on tab "bot"
<img src="https://cdn.discordapp.com/attachments/909830681826295878/948962349270827048/03.png">

### Clic on "add bot"
<img src="https://cdn.discordapp.com/attachments/909830681826295878/948962348650090607/04.png">

### Confirm
<img src="https://cdn.discordapp.com/attachments/909830681826295878/948962348310339694/05.png">

# Get your GUILD_ID
### Activate developper mode
#### Go in discord setting -> advanced and active developper mode
<img src="https://media.discordapp.net/attachments/909830681826295878/948962352265560094/001.png?width=682&height=660">

### Rigth clic on your server and copy id
<img src="https://cdn.discordapp.com/attachments/909830681826295878/948962348935307354/003.png">

# Get your BOT_TOKEN
### Copy the token here
<img src="https://media.discordapp.net/attachments/909830681826295878/948962348088045608/06.png?width=1440&height=591">

# Invite your discord bot
> replace client_id by your
https://discord.com/oauth2/authorize?&client_id=client_id&scope=applications.commands&permissions=8&scope=bot
#### Select your server and confirm captcha

# Run app
```bash
npm run start || npm run dev
```
## 👤 Authors 

**Axel Etoile - @Ax3l72**

## License 
[Komodo](https://github.com/KomodoPlatform/komodo/blob/master/COPYING)