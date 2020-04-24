import sys
from os import path
sys.path.append(path.dirname(path.dirname(path.abspath('base.py'))))
from base import Store
import selenium as se
from selenium import webdriver


class Target:
    def __init_(self,search_term):
        self.options = se.webdriver.ChromeOptions()
        self.options.add_argument('headless')
        self.driver = se.webdriver.Chrome(chrome_options=options)
        self.store = Store()
        self.url = 'https://www.target.com/s?searchTerm='+search_term
        self.driver.get(self.url)

    def get_product_info(self,search_term):
        ul_elements = driver.find_element_by_xpath('//*[@data-test="productGridContainer"]/div[1]/ul')
        all_li = ul_elements.find_elements_by_tag_name("li")
        for li in all_li:
            self.store.product_url = li.find_elements_by_xpath('//*[@data-test="product-card-default"]/div[1]/h3/a')[0].get_attribute("href")
            self.title = li.find_elements_by_xpath('//*[@data-test="product-card-default"]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a')[0].text
            





        pass

#     elem = driver.find_element_by_xpath('//*[@data-test="productGridContainer"]/div[1]/ul')
#     all_li = elem.find_elements_by_tag_name("li")
#     p = all_li[0].find_elements_by_xpath('//*[@data-test="product-card-default"]/div[1]/h3/a')[0].get_attribute("href")
#     w = all_li[0].find_elements_by_xpath('//*[@data-test="product-card-default"]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a')[0].text

      
# all_li[0].find_elements_by_xpath('//*[@data-test="product-image"]/picture/source[1]')
# 