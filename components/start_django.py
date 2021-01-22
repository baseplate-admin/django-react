class Django:
    def django(self):
        import os

        os.system(
            f"{os.getcwd()}/django/venv/Scripts/python.exe {os.getcwd()}/django/server.py"
        )


Django().django()
