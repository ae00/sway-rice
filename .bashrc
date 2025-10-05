#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

export LANG=en_US.UTF-8

# Import colorscheme from 'wal' asynchronously
# &   # Run the process in the background.
# ( ) # Hide shell job control messages.
# Not supported in the "fish" shell.
(cat ~/.cache/wal/sequences &)

# Alternative (blocks terminal for 0-3ms)
cat ~/.cache/wal/sequences

# To add support for TTYs this line can be optionally added.
source ~/.cache/wal/colors-tty.sh

alias ls='ls --color=auto'
alias grep='grep --color=auto'

alias c='clear'
alias e='exit'
alias feh='feh --scale-down --image-bg black'
alias dl='cd ~/Downloads'
alias doc='cd ~/Documents'

alias ls='exa'
alias ll='exa -alh'
alias lg='exa -alh | grep --ignore-case'
alias lsd='ls -D -l'
alias lsf='ls -f -l'

alias ..='cd ..'

alias lock="swaylock -i /home/master/.config/wallpaper/archlinux-red.png"

#PS1='[\u@\h \W]\$ '
PS1='\[\e[38;5;244m\]>\[\e[0m\] \[\e[38;5;196m\]\u\[\e[0m\] \w \[\e[38;5;244m\]:\[\e[0m\] '
