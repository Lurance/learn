// 编写一个async/await函数

const fetch = require('node-fetch');

async function getZhihuColumn(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
    const response = await fetch(url);
    const column = await response.json();
    console.log(column.name + 1);
}

getZhihuColumn('feweekly');

// await必须和async搭配使用

// 非async/await写法示例

function getZhihuColumn2(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
    fetch(url)
        .then(response => response.json())
        .then(column => console.log(column.name + 2))
}

getZhihuColumn2('feweekly');


// 将async函数用在promisechain中
// 所有的async函数都会返回一个Promise

async function getZhihuColumn3(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
    const response = await fetch(url);
    return await response.json();
}

getZhihuColumn3('feweekly')
    .then(column => console.log(column.name + 3));


// 将任意类型的函数转化成async风格

// 函数表达式

const getZhihuColumn4 = async (id) => {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
    const response = await fetch(url);
    return await response.json();
};

getZhihuColumn4('feweekly')
    .then(column => console.log(column.name + 4));

// 简化扁平结构
(async () => {
    const url = `https://zhuanlan.zhihu.com/api/columns/feweekly`;
    const response = await fetch(url);
    const column = await response.json();
    console.log(column.name + 5);
})();

// 类方法

class ApiClient {
    async getZhihuColumn6(id) {
        const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
        const response = await fetch(url);
        return await response.json();
    }
}

const client = new ApiClient();
client.getZhihuColumn6('feweekly')
    .then(column => console.log(column.name + 6));


// 处理async中的错误

async function getZhihuColumn7(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
    const response = await fetch(url);
    if (response.status !== 200) {
        throw new Error('Error!');
    }
    return await response.json();
}

// 通过try-cache捕获异常

const showColumnInfo = async (id) => {
    try {
        const column = await getZhihuColumn7(id);
        console.log(column.name + 7)
    } catch (err) {
        console.log('Error1!');
    }
};

showColumnInfo('1212');


// async/await串行并行

//串行

const sleep = (timeout = 2000) => new Promise(resolve => {
    setTimeout(resolve, timeout);
});

async function getZhihuColumn8(id) {
    await sleep(2000);
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
    const response = await fetch(url);
    return await response.json();
}

const showColumnInfo2 = async () => {
    const feweekly = await getZhihuColumn8('feweekly');
    const toolingtips = await getZhihuColumn8('toolingtips');

    console.log(feweekly.name + 'X');
    console.log(toolingtips.name + 'X');
};

showColumnInfo2();

// 并行

const showColumnInfo3 = async () => {
    const feweeklyPromise = getZhihuColumn8('feweekly');
    const toolingtipsPromise = getZhihuColumn8('toolingtips');

    const feweekly = await feweeklyPromise;
    const toolingtips = await toolingtipsPromise;

    console.log(feweekly.name + 'XX');
    console.log(toolingtips.name + 'XX');
};

// Promise.all()并行

const showColumnInfo4 = async () => {
    const [feweekly, toolingtips] = await Promise.all([
        getZhihuColumn8('feweekly'),
        getZhihuColumn8('toolingtips')
    ]);

    console.log(feweekly.name + 'XXX');
    console.log(toolingtips.name + 'XXX');
};

