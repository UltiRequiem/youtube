from os import popen


def get_layout() -> str:
    return popen("setxkbmap -query").read().split()[5].capitalize()


if __name__ == "__main__":
    print(f"La distribución actual del teclado es {get_layout()}.")
