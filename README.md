学习MongoDB的一些笔记
===================

查询相关
-------------------

**find与findOne**

find方法返回一个光标（对象），而findOne方法返回一个文件

让findOne返回光标可以：
        db.products.find({'slug':'wheel-barrow-9092'}).limit(1)
即加上limit方法
返回单个文档使用findOne，返回多个文档使用find


**忽略，限制，排序与分页**

        db.reviews.find({'product_it': product['_id']}).skip(0).limit(12)
skip方法用于跳过，limit方法限制返回个数
结合sort排序方法即可用于分页（假设页数为page变量，每页12个）
        db.reviews.find({'product_it': product['_id']})
            .sort({'rank': -1})
            .skip((page - 1) * 12)
            .limit(12)
sort方法中1表示正序，-1表示倒序


