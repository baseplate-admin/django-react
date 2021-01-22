import os
import subprocess

current_dir = os.getcwd()

theproc = subprocess.Popen(["python", f"{current_dir}\components\start_react.py"])
theproc = subprocess.Popen(["python", f"{current_dir}\components\start_django.py"])
