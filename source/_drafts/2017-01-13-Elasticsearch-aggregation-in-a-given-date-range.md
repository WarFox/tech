---
title: Elasticsearch aggregation in a given date range
date: 2017-01-13 10:51:11
tags:
---


```
{
  "size": 1,
    "query": {
        "range": {
	      "trans_date": {
	              "gte": "01/03/2016",
		              "lte": "01/06/2016",
			              "format": "dd/MM/yyyy||yyyy"
				            }
					        }
						  },  
						    "aggs": {
						        "max_trans_date": {
							      "max": {
							              "field": "trans_date"
								            }
									        },
										    "min_date": {
										          "min": {
											          "field": "trans_date"
												        }
													    }
													      }
													      }
```
