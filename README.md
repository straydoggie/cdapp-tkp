# CDAPP TK+



## 关于这个项目

成都终端题库+，用于简化学习题出题过程，并方便的生成考试卷。



## 题目数据格式

### 后端数据

```json
{
    "identifier": "",
    "type": "",
    "data":{
        "content": [],
        "options": [],
        "answers":[],
        "author": "",
        "created": "",
        "updated": "",
        "keywords": []
    },
    "misc":{

    }
    "status":0
}
```

### 前端数据

```json
{
    "identifier": "",
    "type": "",
    "content": [],
    "options": [],
    "answers":[],
    "author": "",
    "created": "",
    "updated": "",
    "keywords": []
}
```



## 试卷数据格式

### 后端数据

```json
{
    "identifier": "",
    "number": 0,
    "status": 0,
    "data": {
        "title": "",
        "content": {
            "fb": [
                {
                    "identifier": "",
                    "config": {
                        "value": 1
                    }
                }
            ],
            "sc": [],
            "mc": [],
            "pt": [],
            "st": [],
            "sa": [],
            "eq": []
        },
        "config": {
            "values": {
                "fb": 1,
                "sc": 1,
                "mc": 2,
                "pt": 2,
                "st": 4,
                "sa": 8,
                "eq": 10
            },
            "threshold": {
                "proportion": 0.8,
                "value": 85
            },
            "scope": {
                "groups": [],
                "users": []
            },
            "misc": {

            }
        },
        "updated": "",
        "author": ""
    },
    "misc": {

    }
}
```

### 前端数据

```json
{
    "identifier": "",
    "number": 0,
    "status": 0,
    "title": "",
    "content": {
        "fb": [
            {
                "identifier": "",
                "config": {
                    "value": 1
                }
            }
        ],
        "sc": [],
        "mc": [],
        "pt": [],
        "st": [],
        "sa": [],
        "eq": []
    },
    "config": {
        "values": {
            "fb": 1,
            "sc": 1,
            "mc": 2,
            "pt": 2,
            "st": 4,
            "sa": 8,
            "eq": 10
        },
        "threshold": {
            "proportion": 0.8,
            "value": 85
        },
        "scope": {
            "groups": [],
            "users": []
        },
        "misc": {

        }
    },
    "updated": "",
    "author": "",
    "misc": {

    }
}
```



>目前正在开发中……
>@2019/03/22