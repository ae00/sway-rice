config.load_autoconfig()
config.bind(',I', 'hint images download')
config.bind(',i', 'hint images spawn feh {hint-url}')

config.bind('<Ctrl+Shift+d>', 'hint links spawn --detach mpv {hint-url}')
config.bind('<Ctrl+Shift+s>', 'hint links spawn streamlink -p mpv {hint-url} best')

config.set("fileselect.handler", "external")
config.set("fileselect.single_file.command", ["alacritty", "-e", "ranger", "--choosefile={}"])
config.set("fileselect.multiple_files.command", ["alacritty", "-e", "ranger", "--choosefile={}"])

c.url.searchengines = {
    'DEFAULT': 'https://duckduckgo.com/?q={}',
    'o': 'https://chat.openai.com/?q={}',
    'r': 'https://old.reddit.com/r/{}',
    'yt': 'https://www.youtube.com/results?search_query={}',
    'git': 'https://github.com/search?q={}'
}

c.colors.tabs.even.bg = black
c.colors.tabs.even.fg = white
c.colors.tabs.odd.bg = black
c.colors.tabs.odd.fg = white

c.colors.tabs.selected.even.bg = black
c.colors.tabs.selected.even.fg = red
c.colors.tabs.selected.odd.bg = black
c.colors.tabs.selected.odd.fg = red
