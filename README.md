<img src="img/banner.png" alt="Between.linux banner" width="400" />
<br />
<br />
<br />

# What is it?

Between.linux is a kind-of open source version of the proprietary relationship chatting app [Between](https://between.us).

The primary target is **Linux**, since there is no official app for Linux.  
But it should also build and run on any other platform which is supported by [Electron](https://www.electronjs.org).

# Features missing

Virtually everything works, except some things that I couldn't get to work on Linux:

 - **No Read confirmation**
    - All messages read in this app won't trigger the read confirmation on other devices
    - The little hearts next to the "unread" message remain even when new messages have been sent from this app
    - So your partner won't be able to tell whether you read their message or not
 - **No Banner notification** / **Only audio notification**
    - No banners will be displayed when messages come in while the app is in background/minimized
    - Only a audio notifications will be triggered

# Installation

## Pre-build binary 

W.I.P

## From source

```bash
git clone https://github.com/wagnrd/Between.linux.git
```
### Run without compilation
```bash
npm start
```