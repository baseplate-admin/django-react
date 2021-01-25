from waitress import serve
from rest.wsgi import application

serve(application, port="8000")

