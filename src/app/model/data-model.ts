//模块
// export class Block {
//     id = 0;
//     name = ''; //模块名称
//     description = '';//模块说明
//     fields: Field[];//记录
// }
// //记录
// export class Field {
//     //id = 0;
//     name = '';//标题名
//     source = '';//数据来源
//     // position = 0;//所在行
//     //是否隐藏
//     //是否属于不确定度
//     //宽度
// }
// export const block_test: Block[] = [
//     {
//         id: 1,
//         name: '模块一',
//         description : 'note1',
//         fields: [
//             {name: '记录1', source: '录入'},
//             {name: '记录2', source: '参数表'},
//         ]
//     },
//     {
//         id: 2,
//         name: '模块二',
//         description : 'note2',
//         fields: [
//             {name: '记录1', source: '日期'},
//         ]
//     },
//     {
//         id: 3,
//         name: '模块三',
//         description : 'note3',
//         fields: [ ]
//     },
// ];
//数据来源
export const source = ['录入', '日期', '参数表', '公式', '数组'];

export class Model {
    model_id = 0;
    model_name = '';    //模块名称
    has_table = -1;     //该模块是否拥有列表,"1"是，"-1"否
    has_array = -1;     //该模块是否拥有数组,"1"是,且代表有一张数据表，"-1"否
    tables: Table[];     //列表内容
    // array_list = [];    //数组索引
    arrays: _Array[];   //数组内容
    // a = new Object();
    // a : _Array ;
    // a['array1'] = _Array[];
}
//模块中的列表
export class Table {
    // cell_list: cell[];
    //rows: row[]; //行内容
    row = '';
    col = '';
    name = '';
    sn = '';
    source_type = 1;
    source= '';
    value = '';
    constructor(row,col){
        this.row = row;
        this.col = col;
    }
}
//数组
export class _Array {
    col = '';
    row = '';
    name = '';
    sn = '';
    source_type = 1;
    source=  '';
    value = '';
    // col_list : cell[];
    // rows: row[];
    constructor(row,col){
        this.row = row;
        this.col = col;
    }
}
// {name: '无水碳酸钠', weight: 1.0079, symbol: 'H'},
// {name: '邻苯二甲酸氢钾', weight: 4.0026, symbol: 'He'},
// {name: '氢氧化钠', weight: 6.941, symbol: 'Li'},
// {name: '重铬酸钾', weight: 9.0122, symbol: 'Be'},
// {name: '硫代硫酸钠', weight: 10.811, symbol: 'B'},
// {name: '无水硫代硫酸钠', weight: 12.0107, symbol: 'C'},
// {name: '硫酸亚铁', weight: 14.0067, symbol: 'N'},
// {name: '硼砂', weight: 15.9994, symbol: 'O'},
// {name: '磷酸二氢钾', weight: 18.9984, symbol: 'F'},
// {name: '氯化钾', weight: 20.1797, symbol: 'Ne'},
// {name: '氯化钾', weight: 22.9897, symbol: 'Na'},
//记录
// export class cell {
//     row = '';
//     col = '';
//     name = '';
//     sn = '';
// }

//行内容
//行,在索引中指明了行列名称，能够快速定位单元格
// export class row {
//     row = 0;
//     cols: col[];
// }
//列,在索引中指明了行列名称，能够快速定位单元格
// export class col {
//     sn = '';
//     name = '';
//     source_type = 1;
//     source: source;
//     value = '';
//     row = '';
//     col = '';
// }

// export class source {
//     source_name = '';
//     source_sn = '';
//     sourcedate = {};
// }

// export const _source = [
//     ['录入','1',""],
//     ['日期','2',""],
//     ['参数表','3',""],
//     ['公式','4',""],
//     ['数组','5',""]
// ];
export const model_test: Model[] = [
    {
        model_id : 1,
        model_name : "model1",
        has_table : 1,
        has_array : 1,
        tables: [
            {row: "1", col: "A", name: "A1", sn: "001", source_type: 1,source: "录入",value: "录入的值"},
            {row: "1", col: "B", name: "B1", sn: "002", source_type: 1,source: "日期",value: "18-2-15"},
            {row: "2", col: "A", name: "A2", sn: "003", source_type: 1,source: "参数表",value: "参数1"},
            {row: "2", col: "B", name: "B2", sn: "004", source_type: 1,source: "公式",value: "公式1"},
            // {
            //     cell_list : [
            //         {
            //             row : "row1",
            //             col : "col1",
            //             name : "cell_name1",
            //             sn :'1',
            //         }
            //     ],
            //     rows : [
            //         {
            //             row : 1,
            //             cols : [
            //                 {
            //                     sn : '1',
            //                     name : "name",
            //                     source_type : 1,
            //                     source : {
            //                         source_name : "sname",
            //                         source_sn : '1',
            //                         sourcedate : {},
            //                     },
            //                     value: "111",
            //                     row: '1',
            //                     col: '1',
            //                 },
            //                 {
            //                     sn : '2',
            //                     name : "name2",
            //                     source_type : 1,
            //                     source : {
            //                         source_name : "sname2",
            //                         source_sn : '2',
            //                         sourcedate : {},
            //                     },
            //                     value: "222",
            //                     row: '1',
            //                     col: '2',
            //                 },
            //             ]
            //         }
            //     ]
            // },
        ],
        // array_list : [
        //     "array1",
        // ],
        arrays : [
            {row: "1", col: "A", name: "A1", sn: "001", source_type: 1,source: "引用",value: "无水碳酸钠"},
            {row: "1", col: "B", name: "B1", sn: "002", source_type: 1,source: "引用",value: "H"},
            {row: "2", col: "A", name: "A2", sn: "003", source_type: 1,source: "引用",value: "邻苯二甲酸氢钾"},
            {row: "2", col: "B", name: "B2", sn: "004", source_type: 1,source: "引用",value: "He"},
            {row : "3",col : "A",name : 'A3',sn : '005',source_type : 1,source :  '引用',value : '氢氧化钠',},
            {row : "3",col : "B",name : 'B3',sn : '006',source_type : 1,source :  '引用',value : 'Li',},
            {row : "4",col : "A",name : 'A4',sn : '007',source_type : 1,source :  '引用',value : '重铬酸钾',},
        ]
        // {name: '无水碳酸钠', weight: 1.0079, symbol: 'H'},
        // {name: '邻苯二甲酸氢钾', weight: 4.0026, symbol: 'He'},
        // {name: '氢氧化钠', weight: 6.941, symbol: 'Li'},
        // {name: '重铬酸钾', weight: 9.0122, symbol: 'Be'},
        // {name: '硫代硫酸钠', weight: 10.811, symbol: 'B'},
        // {name: '无水硫代硫酸钠', weight: 12.0107, symbol: 'C'},
        // {name: '硫酸亚铁', weight: 14.0067, symbol: 'N'},
        // {name: '硼砂', weight: 15.9994, symbol: 'O'},
        // {name: '磷酸二氢钾', weight: 18.9984, symbol: 'F'},
        // {name: '氯化钾', weight: 20.1797, symbol: 'Ne'},
        // {name: '氯化钾', weight: 22.9897, symbol: 'Na'},
        //     {
        //         array_col : 2,
        //         array_row : 2,
        //         col_list : [
        //             {
        //                 row : '1',
        //                 col : 'A',
        //                 name : "name",
        //                 sn : "A1",
        //             },
        //             {
        //                 row : '1',
        //                 col : 'B',
        //                 name : "name",
        //                 sn : "B1",
        //             },
        //             {
        //                 row : '2',
        //                 col : 'A',
        //                 name : "name",
        //                 sn : "A2",
        //             },
        //             {
        //                 row : '2',
        //                 col : 'B',
        //                 name : "name",
        //                 sn : "B2",
        //             },
        //         ],
        //         rows : [
        //             {
        //                 row : 1,
        //                 cols : [
        //                     {
        //                         sn : '1',
        //                         name : "name",
        //                         source_type : 1,
        //                         source : {
        //                             source_name : "sname",
        //                             source_sn : '1',
        //                             sourcedate : {},
        //                         },
        //                         value: "111",
        //                         row: '1',
        //                         col: '1',
        //                     },
        //                     {
        //                         sn : '2',
        //                         name : "name2",
        //                         source_type : 1,
        //                         source : {
        //                             source_name : "sname2",
        //                             source_sn : '2',
        //                             sourcedate : {},
        //                         },
        //                         value: "222",
        //                         row: '1',
        //                         col: '2',
        //                     },
        //                     {
        //                         sn : '3',
        //                         name : "name3",
        //                         source_type : 1,
        //                         source : {
        //                             source_name : "sname2",
        //                             source_sn : '2',
        //                             sourcedate : {},
        //                         },
        //                         value: "222",
        //                         row: '1',
        //                         col: '2',
        //                     },
        //                     {
        //                         sn : '4',
        //                         name : "name4",
        //                         source_type : 1,
        //                         source : {
        //                             source_name : "sname2",
        //                             source_sn : '2',
        //                             sourcedate : {},
        //                         },
        //                         value: "222",
        //                         row: '1',
        //                         col: '2',
        //                     },
        //                 ]
        //             }
        //         ]
        //     }
        
    },
    {
        model_id : 2,
        model_name : "model2",
        has_table : 1,
        has_array : 1,
        tables: [
            {row: "1", col: "A", name: "A1", sn: "001", source_type: 1,source: "录入",value: "录入的值2"},
            {row: "1", col: "B", name: "B1", sn: "002", source_type: 1,source: "日期",value: "18-2-15"},
            {row: "2", col: "A", name: "A2", sn: "003", source_type: 1,source: "参数表",value: "参数2"},
            {row: "2", col: "B", name: "B2", sn: "004", source_type: 1,source: "公式",value: "公式2"},
        ],
        arrays : [{
            col : "",
            row : "",
            name : '',
            sn : '',
            source_type : 1,
            source :  '',
            value : '',
        }],
    },
    {
        model_id : 3,
        model_name : "model3",
        has_table : 0,
        has_array : 0,
        tables: [
        ],
        arrays : [{
            col : "",
            row : "",
            name : '',
            sn : '',
            source_type : 1,
            source :  '',
            value : '',
        }],
    },
]
