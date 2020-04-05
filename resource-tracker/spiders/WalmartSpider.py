from urllib.request import urlopen  #Web client to scrape data
from bs4 import BeautifulSoup as soup #helps parsing HTML in Python
from base import Store

url="https://www.walmart.com/"
my_url=url+"search/?query=hand%20sanitizer"
urlClient = urlopen(my_url) #Opens connection, grabs the webpage and downloads it
page_html=urlClient.read()
urlClient.close()

#Parsing html
page_soup=soup(page_html,"html.parser")

#grabs each product

containers = page_soup.find_all("div",{"class":"search-result-gridview-item-wrapper"})
# print(len(containers))
for container in containers:
    store = Store()
    store.store_name = 'Walmart'
    store.title = container.img["alt"]
    store.image_url = container.img["data-image-src"]
    store.product_url =url+container.a["href"]
    store.price =container.find_all("span", {"class": "visuallyhidden"})[-1].text
    store.add_item()
