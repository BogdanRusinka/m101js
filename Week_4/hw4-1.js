answers:

-> db.products.find({'brand':"GE"}).sort({price:1})

-> db.products.find({$and:[{price:{$gt:30}},{price:{$lt:50}}]}).sort({brand:1}