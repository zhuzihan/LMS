// 模板
export class Template {
    whole_name = '';
    model_list = [];
    models: { [key: string]: Model; };
}

// 模块
export class Model {
    model_id = 0;
    model_name = '';    // 模块名称
    model_standard_name = ''; // 模块标准名称
    has_table = -1;     // 该模块是否拥有列表,'1'是，'-1'否
    has_array = -1;     // 该模块是否拥有数组,'1'是,且代表有一张数据表，'-1'否
    // tables: DataTable[];     // 列表内容
    // arrays: DataArray[];   // 数组内容
    cells: DataCell[];
}

// 数据表
// export class DataTable {
//     cell_list: { [key: string]: String; };
//     rows: { [key: string]: DataRow; };
// }

// 表的每一行
// export class DataRow {
//     cells: { [key: string]: DataCell; };
// }

// 表的每一个单元格
export class DataCell {
    sn: String;
    name: String;
    source_type: String;
    source_name: String;
    source_sn: String;
    source_data: any;
    value: String;
    row: number;
    col: number;
    rowspan: number;
    colspan: number;
}

export const model_test: Model[] = [
    {
        model_id: 1,
        model_name: 'model1',
        has_table: 1,
        has_array: 1,
        // array_list : [
        //     'array1',
        // ],
        arrays: [
            { row: '1', col: 'A', name: 'A1', sn: '001', source_type: 1, source: '引用', value: '无水碳酸钠' },
            { row: '1', col: 'B', name: 'B1', sn: '002', source_type: 1, source: '引用', value: 'H' },
            { row: '2', col: 'A', name: 'A2', sn: '003', source_type: 1, source: '引用', value: '邻苯二甲酸氢钾' },
            { row: '2', col: 'B', name: 'B2', sn: '004', source_type: 1, source: '引用', value: 'He' },
            { row: '3', col: 'A', name: 'A3', sn: '005', source_type: 1, source: '引用', value: '氢氧化钠', },
            { row: '3', col: 'B', name: 'B3', sn: '006', source_type: 1, source: '引用', value: 'Li', },
            { row: '4', col: 'A', name: 'A4', sn: '007', source_type: 1, source: '引用', value: '重铬酸钾', },
        ]

    },
    {
        model_id: 2,
        model_name: 'model2',
        has_table: 1,
        has_array: 1,
        tables: [
            { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '2,4-二硝基酚或（2,6-二硝基酚）指示剂：', value: '溶解0.20g2,4-二硝基酚于100mL水中。', source_type: 1, source: '录入' },
            { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
            { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
            { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },
        ],
        arrays: [{
            col: '',
            row: '',
            name: '',
            sn: '',
            source_type: 1,
            source: '',
            value: '',
        }],
    },
    {
        model_id: 3,
        model_name: 'model3',
        has_table: 0,
        has_array: 0,
        tables: [
            { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 3, name: '钼锑储存液：', value: '153ml浓硫酸（H2SO4，密度1.84g/ml，分析纯），缓缓的倒入400ml水中，搅拌，冷却另取10g钼酸铵溶液[(NH4)6Mo7O24•4H2O,分析纯]，溶解于约60℃的300ml水中，冷却。然后将硫酸溶液缓缓倒入钼酸铵溶液中，再加入100ml 0.5%酒石酸锑钾（KSbOC4H4O6•1/2H2O,分析纯）溶液，最后用水稀释至1L,避光储存。此储存液含10mg/L钼酸铵与2.75mol/L硫酸。', source_type: 1, source: '录入' },
            { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
            { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
            { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },
        ],
        arrays: [{
            col: '',
            row: '',
            name: '',
            sn: '',
            source_type: 1,
            source: '',
            value: '',
        }],
    },
];