from os import popen, system
from random import choice

PATH = "~/disk/sabare/stable/"
WALLPAPERS = popen(f"ls {PATH}").read().split()
WALLPAPER_TO_PUT = choice(WALLPAPERS)

if __name__ == "__main__":
    system(f"feh --bg-fill {PATH}{WALLPAPER_TO_PUT}")
    print(f"La imagen que se ha puesto es {WALLPAPER_TO_PUT}.")
    # gsettings set org.gnome.desktop.background picture-uri 'file://{path}'
    # gsettings set org.mat.background picture-filename 'file://{path}'
