
import warnings
from spiders.walmart import Walmart
import sys
import os

with warnings.catch_warnings():
    warnings.filterwarnings("ignore", category=UserWarning)

def search(item):
    walmart = Walmart()
    return walmart.search(item)

if __name__ == '__main__':
    print(search(sys.argv[1]))