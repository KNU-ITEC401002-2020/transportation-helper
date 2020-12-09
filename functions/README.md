# API Documentaion

대중교통 헬퍼 백엔드 API

## Base URL

`https://asia-northeast2-transportation-helper.cloudfunctions.net/api`


## /stop (POST)

하차벨 변경 요청

### Headers

### Path Parameter

### Query Parameter
| Query | Required | Type | Description |
|:------:|:--------:|:----:|:-----------:|
| bus | required | string | 버스 id |
| action | required | number | 1: 벨 울림, 2: 벨 꺼짐 |

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


## /stop (GET)

하차벨 상태 받아오기

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
  "bell": boolean
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
