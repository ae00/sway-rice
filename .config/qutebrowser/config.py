config.load_autoconfig()
config.bind(',I', 'hint images download')
config.bind(',i', 'hint images spawn feh {hint-url}')

config.bind('<Ctrl+Shift+d>', 'hint links spawn --detach mpv {hint-url}')

config.set("fileselect.handler", "external")
config.set("fileselect.single_file.command", ["alacritty", "-e", "ranger", "--choosefile={}"])
config.set("fileselect.multiple_files.command", ["alacritty", "-e", "ranger", "--choosefile={}"])
