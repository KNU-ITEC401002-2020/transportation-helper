# API Documentaion

대중교통 헬퍼 백엔드 API

## Base URL

`https://asia-northeast2-transportation-helper.cloudfunctions.net/api`


## /location (GET)

목적지까지의 위치정보 반환

### Headers

### Path Parameter

### Query Parameter
| Query | Required | Type | Description |
|:------:|:--------:|:----:|:-----------:|
| bus | required | string | 버스 id |
| destination | required | string | 정류장 id |

### Body

### Response

* 200 : OK
```
{
  "results": {
    "time_left": [
      {
        "bus": string, // 버스 번호
        "time_left": number, // 도착까지 남은 시간(분)
    	},
    ],
  },
}
```

* 400 : Bad Request
```
{}
```

* 500 : Internal Server Error
```
{}
```


## /traffic (GET)

해당 버스의 혼잡도 정보 반환

### Headers

### Path Parameter

### Query Parameter
| Query | Required | Type | Description |
|:------:|:--------:|:----:|:-----------:|
| bus | required | string | 버스 id |

### Body

### Response

* 200 : OK
```
{
  "results": {
    "traffic": 'full' | 'middle' | 'fresh',
  },
}
```

* 400 : Bad Request
```
{}
```

* 500 : Internal Server Error
```
{}
```


## /traffic (POST)

혼잡도 업데이트

### Headers

### Path Parameter

### Query Parameter
| Query | Required | Type | Description |
|:------:|:--------:|:----:|:-----------:|
| bus | required | string | 버스 id |
| traffic | required | number | 혼잡도 `middle`, `full`, `fresh` |

### Body

### Response

* 200 : OK
```
{}
```

* 400 : Bad Request
```
{}
```

* 500 : Internal Server Error
```
{}
```


## /stop (POST)

하차벨 작동 요청

### Headers

### Path Parameter

### Query Parameter
| Query | Required | Type | Description |
|:------:|:--------:|:----:|:-----------:|
| bus | required | string | 버스 id |
| destination | required | string | 목적지 id |

### Body

### Response

* 200 : OK
```    
{}
```

* 400 : Bad Request
```
{}
```

* 500 : Internal Server Error
```
{}
```
