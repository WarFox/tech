---
title: Elasticsearch delete by query version conflict
tags:
- elasticsearch
draft: true
---

```
     "cause": {
        "type": "version_conflict_engine_exception",
        "reason": "[trans][AVmUDdtoUL7HVzfaKjci]: version conflict, current version [2] is different than the one provided [1]",
        "index_uuid": "XK5nvrNdTAG62qVFvT-1tA",
        "shard": "0",
        "index": "my_index"
      },
```

If you’d like to count version conflicts rather than cause them to abort then set conflicts=proceed on the url or "conflicts": "proceed" in the request body.

Back to the API format, you can limit _delete_by_query to a single type. This will only delete tweet documents from the twitter index:

POST twitter/tweet/_delete_by_query?conflicts=proceed
{
  "query": {
    "match_all": {}
  }
}


https://www.elastic.co/guide/en/elasticsearch/reference/master/docs-delete-by-query.html
