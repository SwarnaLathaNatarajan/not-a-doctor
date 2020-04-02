import csv
import json
import os

"""
Stores the following product information into json file
"""

class Store:
    def __init__(self):
        self.store_data = dict()
        self.store_name = ''
        self.title = ''
        self.image_url = ''
        self.product_url = ''
        self.description = ''
        self.price = ''
        self.stock = None
    
    def add_item(self):
        self.store_data['store-name'] = self.store_name
        self.store_data['product-title'] = self.title
        self.store_data['image-url'] = self.image_url
        self.store_data['product-url'] = self.product_url
        self.store_data['product-description'] = self.description
        self.store_data['price'] = self.price
        self.store_data['stock'] = self.stock
        #write into json
        self.write_into_json()

    def write_into_json(self):
        # Check if file-path available
        file_path = '../data/'
        if not os.path.exists(file_path):
            os.makedirs(file_path)
        file_name = os.path.join(file_path ,'store-data.json')
        with open(file_name, 'a') as outfile:
            if outfile.tell() == 0:
                outfile.write('[')
                json.dump(self.store_data, outfile)
                outfile.write(']')

            else:
                outfile.seek(0, os.SEEK_END)
                outfile.seek(outfile.tell() - 1, os.SEEK_SET)
                outfile.truncate()
                outfile.write(',')
                json.dump(self.store_data, outfile)
                outfile.write(']')

