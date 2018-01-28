学习MongoDB的一些笔记
===================

查询相关
-------------------

### find与findOne

find方法返回一个光标（对象），而findOne方法返回一个文件

让findOne返回光标可以：

        db.products.find({'slug':'wheel-barrow-9092'}).limit(1)
即加上limit方法
返回单个文档使用findOne，返回多个文档使用find


### 忽略，限制，排序与分页

        db.reviews.find({'product_it': product['_id']}).skip(0).limit(12)
skip方法用于跳过，limit方法限制返回个数
结合sort排序方法即可用于分页（假设页数为page变量，每页12个）

        db.reviews.find({'product_it': product['_id']})
                    .sort({'rank': -1})
                    .skip((page - 1) * 12)
                    .limit(12)
sort方法中1表示正序，-1表示倒序


### 利用投影返回限制（部分）字段

        db.users.findOne({'username':'kbanker'},{'_id':1})
这样只返回_id字段


### 使用正则表达式查询

例如查询以Ba开头的用户：

        db.users.find({'username': /^Ba/})


### 范围运算符

*$lt 小于
*$gt 大于
*$lte 小于等于
*$gte 大于等于

例如出生月份大于等于1985小于等于2015：

        db.users.find({'birth_year': {'$gte': 1985, '$lte': 2015}})


### 设置（集合）运算符

*in 如果任意参数在引用集合里面，则匹配
*all 如果所有参数在引用集合里且被使用在包含数组的文档中，则匹配
*nin 如果没有参数在引用的集合里面，则匹配

        db.products.find({'color':{'$in': ["black", "blue"]}})


### 布尔运算符

*ne 不匹配参数条件

例如查找所有Acme的不是gardening标签的商品：

        db.products.find({'manufacturer':'Acme', tags:{$ne:"gardening"}})

*not 不匹配运算符或者正则表达式的查询结果
*or 有一个条件匹配就成立：

        db.products.find({
                '$or': [
                        {'color': 'blue'},
                        {'manufacturer': 'Acme'}
                ]
        })






