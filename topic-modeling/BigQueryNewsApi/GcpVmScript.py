import requests
import json
from newsapi import NewsApiClient
from google.cloud import bigquery
import pandas as pd
import os
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "<credentials>"
newsapi = NewsApiClient(api_key='<key>')
print('xxxxxxxxxxxxxxxxxxxxxx------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
sources = ['cnn','bbc-news','cnbc','abc-news','the-verge','bloomberg','the-hill','polygon','ars-technica','associated-press',
                  'breitbart-news','business-insider','buzzfeed','entertainment-weekly','espn','fortune','google-news','hacker-news',
                            'mashable','mtv-news','national-geographic','new-scientist','newsweek','new-york-magazine','reuters',
                                      'the-huffington-post','the-next-web','the-wall-street-journal','the-washington-post','time','usa-today',
                                                'the-times-of-india','the-hindu','reddit-r-all','independent','financial-times','abc-news-au']
keywords = ['Corona Virus','COVID-19','COVID']
tempdf = pd.DataFrame(columns=['author','content','description','publishedAt','source','title','url','urlToImage'])
for s in sources:
    for k in keywords:
        top_headlines = newsapi.get_top_headlines(q=k,sources=s)
        articles=top_headlines['articles']
        df=pd.DataFrame(articles)
        tempdf = tempdf.append(df,ignore_index=True)
print("Before Temp na:",tempdf.isna().sum())
tempdf = tempdf.fillna('RAND')
print("After Temp na:",tempdf.isna().sum())
tempdf = tempdf.drop_duplicates(keep='first')
tempdf.to_csv('newsdata.csv',encoding='utf-8')
finaldf = pd.read_csv('newsdata.csv',usecols=['author','content','description','publishedAt','source','title','url','urlToImage'],encoding='utf-8')
print("Fill na:",finaldf.isna().sum())
finaldf = finaldf.fillna('RAND')
print("After final NA:",finaldf.isna().sum())
bigquery_client = bigquery.Client()
dataset_ref = bigquery_client.dataset('<datasetname>')
table_ref = dataset_ref.table('<tablename>')
table = bigquery_client.get_table(table_ref)
print(type(finaldf))
errors = bigquery_client.insert_rows_from_dataframe(table,finaldf)
print('--------------------------------------*************************************-------------------------------')
print(errors)


