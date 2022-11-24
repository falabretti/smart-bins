import os
from dotenv import load_dotenv

load_dotenv()

BUCKET = os.getenv('bucket')
ORG = os.getenv('org')
TOKEN = os.getenv('token')
URL = os.getenv('url')
