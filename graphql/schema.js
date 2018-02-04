import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    isOutputType
} from 'graphql';

import mongoose from 'mongoose'
const Info = mongoose.model('Info') // 引入Info模块

const objType = new GraphQLObjectType({
    name: 'mete',
    fields: {
        createdAt: {
            type: GraphQLString
        },
        updatedAt: {
            type: GraphQLString
        }
    }
});

let InfoType = new GraphQLObjectType({
    name: 'Info',
    fields: {
        _id: {
            type: GraphQLID
        },
        height: {
            type: GraphQLString
        },
        weight: {
            type: GraphQLString
        },
        hobby: {
            type: new GraphQLList(GraphQLString)
        },
        meta: {
            type: objType
        }
    }
});

const infos = {
    type: new GraphQLList(InfoType),
    args: {},
    resolve (root, params, options) {
        return Info.find({}).exec() // 数据库查询
    }
}

const info = {
    type: InfoType,
    // 传进来的参数
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID) // 参数不为空
        }
    },
    resolve (root, params, options) {
        return Info.findOne({_id: params.id}).exec() // 查询单条数据
    }
}

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Queries',
        fields: {
            infos,
            info
        }
    })
})