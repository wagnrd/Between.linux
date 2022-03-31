<img src="img/banner.png" alt="Between.linux banner" width="400" />

# What is it?

Between.linux is a kind-of open source version of the proprietary relationship chatting app [Between](https://between.us).
It uses the official source code, which has been extracted from the original windows application.

The primary target is **Linux**, since there is no official app for that.  
But it should also build and run on any other platform which is supported by [Electron](https://www.electronjs.org).

# Broken features

It is very usable and almost everything works, except some minor things:

 - **No read confirmation**
    - All messages read in this app won't trigger the read confirmation on other devices
    - The little hearts next to the "unread" message remain even when new messages have been sent from this app
    - So your partner won't be able to tell whether you read their message or not
 - **No banner notification** / **Only audio notification**
    - No banners will be displayed when messages come in while the app is in background/minimized
    - Only a audio notifications will be triggered
 - **Smiley picker doesn't show everything**
    - The smiley picker doesn't show all the smileys there are
    - Though they are correclty shown in the chat
    - **Only** affects the small built-in stickers on the first page
    - **Not** the larger stickers

# Installation

Pre-built installer packages comming soon!

# Building from source

## Preparation

```bash
git clone https://github.com/wagnrd/Between.linux.git
cd Between.linux
npm install
```

## Run without packaging

For testing or development purposes you can run the electron app without installing or building it with the following command:

```bash
npm start
```

## Build all targets

This step will build all targets. If you don't want to build everything please refer to the *Troubleshooting* section below.

### Dependencies

This step also includes building an rpm and snap package. For this you need the **rpm package manager** installed on your local machine:  

```bash
sudo apt install rpm
```

### Building

After that you should be able to build all targets with the following:

```bash
npm run make
```

### Troubleshooting

This has only be tested on Ubuntu. If you have trouble building everything, remove unwanted targets from the 
electron-forge config inside of package.json.  

The targets are configured in the **makers** property. The string behind the "@electron-forge/maker-*\<package-type\>*" 
in the **name** property states the built package. Just delete everything you don't want to build.