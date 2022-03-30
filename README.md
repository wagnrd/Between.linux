<img src="img/banner.png" alt="Between.linux banner" width="400" />

# What is it?

Between.linux is a kind-of open source version of the proprietary relationship chatting app [Between](https://between.us).

The primary target is **Linux**, since there is no official app for Linux.  
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

## Pre-built binary 

Comming soon!

## From source

### Preparation

```bash
git clone https://github.com/wagnrd/Between.linux.git
cd Between.linux
npm install
```
### Run without packaging
```bash
npm start
```

### Make executable (deb/rpm/snap/...)
```bash
npm make
```