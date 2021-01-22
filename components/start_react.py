class React:
    def react(self):
        import os

        current_dir = os.getcwd()
        changed_dir = f"{current_dir}/urlshortener"

        os.chdir(changed_dir)

        os.system("npm start")
        
React().react()