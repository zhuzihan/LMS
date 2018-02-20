//数据来源
export const source = ['录入', '日期', '参数表', '公式', '数组'];

export class Template {
    whole_name = ""
    model_list = [];
    models : Model[];
}
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
    rowspan = 1;
    colspan = 10;
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

export const model_test: Model[] = [
    {
        model_id : 1,
        model_name : "model1",
        has_table : 1,
        has_array : 1,
        tables: [
            {sn: "001", row: "1", col: "A", colspan: 10, rowspan: 1, name: "配置日期：", value: '硫酸：（H2SO4，密度1.84g/ml，分析纯）。', source_type: 1,source: "录入"},
            {sn: "001", row: "1", col: "A", colspan: 10, rowspan: 1, name: "配置日期：", value: '高氯酸：（HClO4,70%,分析纯）。', source_type: 1,source: "录入"},
            {sn: "001", row: "1", col: "A", colspan: 10, rowspan: 1, name: "配置日期：", value: '6mol/L盐酸：浓盐酸（HCl,分析纯）与水按1：1体积混合。', source_type: 1,source: "录入"},
            {sn: "001", row: "1", col: "A", colspan: 4, rowspan: 1, name: "配置日期：", value: '配置日期：', source_type: 1,source: "录入"},
            {sn: "001", row: "1", col: "A", colspan: 3, rowspan: 1, name: "配置日期：", value: '配置日期：', source_type: 1,source: "录入"},
            {sn: "001", row: "1", col: "A", colspan: 3, rowspan: 1, name: "配置日期：", value: '配置人：', source_type: 1,source: "录入"},

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
        
    },
    {
        model_id : 2,
        model_name : "model2",
        has_table : 1,
        has_array : 1,
        tables: [
            {sn: "001", row: "1", col: "A", colspan: 10, rowspan: 1, name: "配置日期：", value: '硫酸：（H2SO4，密度1.84g/ml，分析纯）。', source_type: 1,source: "录入"},
            {sn: "001", row: "1", col: "A", colspan: 10, rowspan: 1, name: "配置日期：", value: '高氯酸：（HClO4,70%,分析纯）。', source_type: 1,source: "录入"},
            {sn: "001", row: "1", col: "A", colspan: 10, rowspan: 1, name: "配置日期：", value: '6mol/L盐酸：浓盐酸（HCl,分析纯）与水按1：1体积混合。', source_type: 1,source: "录入"},
            {sn: "001", row: "1", col: "A", colspan: 4, rowspan: 1, name: "配置日期：", value: '配置日期：', source_type: 1,source: "录入"},
            {sn: "001", row: "1", col: "A", colspan: 3, rowspan: 1, name: "配置日期：", value: '配置日期：', source_type: 1,source: "录入"},
            {sn: "001", row: "1", col: "A", colspan: 3, rowspan: 1, name: "配置日期：", value: '配置人：', source_type: 1,source: "录入"},
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
export const template_test: Template[] =[
    {
        whole_name: "模板1",
        model_list : ["","",""],
        models : model_test,
    },
    {
        whole_name: "模版2",
        model_list : ["","",""],
        models : [],
    },
    {
        whole_name: "模板3",
        model_list : ["","",""],
        models : [],
    }
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
