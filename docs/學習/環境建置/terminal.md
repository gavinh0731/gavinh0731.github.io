---
author: Gavin
source: ""
rating: 1
description: ""
type: ""
title: Ternimal 設定
created: 2024-04-02T03:06:22
updated: 2024-04-02T03:06:22
tags: ["環境建置"]
---

## 安裝ZSH

```bash
# README
# 安裝 zsh: 
$ sudo apt install zsh
# 更換 shell: 
$ chsh -s $(which zsh)
# 安裝 zplug: 
$ curl -sL --proto-redir -all,https https://raw.githubusercontent.com/zplug/installer/master/installer.zsh | zsh
# 安裝 tmux: sudo apt install tmux
# curl https://gist.githubusercontent.com/simba-fs/e06a1763c1967ce3f4b5ef643db5e0b3/raw/2f28c62d01f419a390bfc0e66a974985bacdefa5/.tmux.conf > ~/.tmux.conf
# git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
```

### 安裝 zsh
```bash
#### 安裝ZSH
# 1. For Linux: 
$ sudo apt install zsh

# 2. For Mac: 
$ brew install zsh
```

#### 查詢ZSH版本
```bash
$ zsh --version
```

#### 更換Shell
如果你之前的 shell **不是 zsh** 那就要更換預設 shell，用以下指令可以**更換**

```bash
chsh -s $(which zsh)
或是 
chsh -s $(where zsh)
```

> **現在用的是什麼 shell？**
>
> 你可以使用 `echo $SHELL` 來看你現在使用的 shell 是那一個 |

### 安裝zplug

裝好 zsh 後，你會發現他和 bash 或是你原本的 shell 沒什麼差別，甚至更難用，那是因為我們**還沒設定**。zplug 是一個 zsh 的**套件管理器**，所有的設定都寫在 `.zshrc` 裡，因此如果以後要換電腦，只需要**搬走 `.zshrc` 一個檔案**，zplug 就會幫你把所有外掛裝起來。

#### 安裝zplug
官方建議的安裝方式是使用 installer，執行以下指令

```bash
$ curl -sL --proto-redir -all,https https://raw.githubusercontent.com/zplug/installer/master/installer.zsh | zsh
```

如果出現 `Enjoy zplug!` 就是安裝完成了，如果沒有的話可能是**版本不對**，他會告訴你有什麼沒裝


> [!info] 資訊
> 如果是 macOS 可以直接透過 [HomeBrew](https://www.jkg.tw/?p=677) 安裝
> bash
$ brew install zplug gawk git

#### 我後來採用下面指令安裝
```bash
$ git clone https://github.com/zplug/zplug ~/.zplug
```

### 安裝 tmux
```bash
$ sudo apt install tmux;
$ git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm;
```

### 複製我的.zshrc設定檔
```bash
$ git clone https://github.com/gavinh0731/linux_config.git

執行

cd linux_config;
./install.sh
```

接着重新登入，會詢問要不要安裝：
```
Install? [y/N]:
```
回答 yes

> [!tip] 技巧
> macOS要對.zshrc做修改
> ```
> # alias ls='ls -hlF --color=auto' 改為下面這行
> alias ls='ls -hlF -G'
> ```

## 安裝Neovim
### 安裝Neovim
參考
https://github.com/neovim/neovim/wiki/Installing-Neovim#ubuntu

激進的我選擇了安裝最新的 unstable 版本

```bash
$ sudo add-apt-repository ppa:neovim-ppa/unstable
$ sudo apt-get update
$ sudo apt-get install neovim
```

保守的做法可以使用官方的 stable:

```bash
sudo add-apt-repository ppa:neovim-ppa/stable
```

### Neovim 一樣有 plguin manager

```bash
# Neovim:

sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
```

挑選你的 vim 版本，執行完就安裝好了！

### 安裝VIM套件

現在在 vim 裡面下以下命令

```bash
nvim ~/.vimrc

:so %
:PlugInstall
```

### 複製我的.vimrc設定檔
```
git clone https://github.com/gavinh0731/linux_config.git
```


## 錯誤排除

> [!question] 問題
> zsh compinit: insecure directories, run compaudit for list.
> Ignore insecure directories and continue [y] or abort compinit [n]?
> 
> 出現這個原因就是提示又不安全的目錄，是否忽略。原因可能不較多，解決方法都一樣，

> [!info] 資訊
> 
> 1、執行
> ```bash
> compaudit
> ```
> 
> 查看一下列出的目錄不安全的目錄
> 
> 我這裡列出的目錄是：
> 
> ```bash
> There are insecure directories:
> /usr/local/share/zsh/site-functions
> /usr/local/share/zsh
> ```
> 
> 然後執行以下語句給對應的目錄賦權限即可
> 
> ```bash
> cd /usr/local/share/zsh
> sudo chmod -R 755 ./site-functions
> cd ../
> sudo chmod -R 755 zsh
> ```
> 
> 後邊再啟動iTerm就不會提示了。
