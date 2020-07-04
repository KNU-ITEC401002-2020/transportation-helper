# API Documentaion

대중교통 헬퍼 백엔드 API

## Base URL

`https://HOST_URL`


## /bus/location (GET)

현재 버스의 위치정보 반환

### Headers
| Header | Required | Type | Description |
|:------:|:--------:|:----:|:-----------:|
| access-key | required | string | 커스텀 키 |

### Path Parameter

### Query Parameter
| Query | Required | Type | Description |
|:------:|:--------:|:----:|:-----------:|
| station | required | string | 정류장 id |

### Body

### Response

* 200 : OK
    
	    {
            "results": {
                "time_left": [
                    {
                        "bus": string, // 버스 번호
                        "time_left": number // 도착까지 남은 시간
                    }
                ]
            }
        }

* 400 : Bad Request
    
	    {
		    "message": "bad request"
		}

* 401 : Unauthorized

	    {
		    "message": "unauthorized access"
		}

* 500 : Internal Server Error

	    {
		    "message": "internal server error"
		}


## /bus/traffic (GET)

해당 버스의 혼잡도 정보 반환

### Headers
| Header | Required | Type | Description |
|:------:|:--------:|:----:|:-----------:|
| access-key | required | string | 커스텀 키 |

### Path Parameter

### Query Parameter
| Query | Required | Type | Description |
|:------:|:--------:|:----:|:-----------:|
| bus | required | string | 버스 id |

### Body

### Response

* 200 : OK
    
	    {
            "results": {
                "traffic": 'full' | 'middle' | 'fresh'
            }
        }

* 400 : Bad Request
    
	    {
		    "message": "bad request"
		}

* 401 : Unauthorized

	    {
		    "message": "unauthorized access"
		}

* 500 : Internal Server Error

	    {
		    "message": "internal server error"
		}


## /bus/stop (POST)

하차벨 작동 요청

### Headers
| Header | Required | Type | Description |
|:------:|:--------:|:----:|:-----------:|
| access-key | required | string | 커스텀 키 |

### Path Parameter

### Query Parameter
| Query | Required | Type | Description |
|:------:|:--------:|:----:|:-----------:|
| bus | required | string | 버스 id |

### Body

### Response

* 200 : OK
    
	    {}

* 400 : Bad Request
    
	    {
		    "message": "bad request"
		}

* 401 : Unauthorized

	    {
		    "message": "unauthorized access"
		}

* 500 : Internal Server Error

	    {
		    "message": "internal server error"
		}
