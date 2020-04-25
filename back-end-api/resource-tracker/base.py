import csv
import json
import os


class Store:
    items=[]
    def __init__(self):
        self.store_name = ''
        self.title = ''
        self.image_url = ''
        self.product_url = ''
        self.price = ''
    
    def add_item(self,store):
        Store.items.append(vars(store))

    def generate_json(self):
        return json.dumps(Store.items)
