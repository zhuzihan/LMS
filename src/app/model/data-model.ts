//模块
export class Block {
    id = 0;
    name = ''; //模块名称
    description = '';//模块说明
    field: Field[];//记录
}

//记录
export class Field {
    //id = 0;
    name = '';//标题名
    source = '';//数据来源
    // position = 0;//所在行
    //是否隐藏
    //是否属于不确定度
    //宽度
}
  
export const block_test: Block[] = [
    {
        id: 1,
        name: '模块一',
        description : 'note1',
        field: [
            {name: '记录1', source: '录入'},
            {name: '记录2', source: '参数表'},
        ]
    },
    {
        id: 2,
        name: '模块二',
        description : 'note2',
        field: [
            {name: '记录1', source: '日期'},
        ]
    },
    {
        id: 3,
        name: '模块三',
        description : 'note3',
        field: [ ]
    },
];
//数据来源
export const source = ['录入', '日期', '参数表', '公式', '数组'];//数据来源