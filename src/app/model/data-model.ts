// 数据来源
export const source = [
    { source_name: '录入', source_type: 1 },
    { source_name: '引用', source_type: 2 },
    { source_name: '日期', source_type: 3 },
    { source_name: '参数表', source_type: 4 },
    { source_name: '公式', source_type: 5 },
    { source_name: '数组', source_type: 6 },
];

// 模板
export class Template {
    whole_name = '';
    model_list = [];
    models: { [key: string]: Model; } = {};
}

// 模块
export class Model {
    model_id = 0;
    model_name = '';    // 模块名称
    model_standard_name = ''; // 模块标准名称
    has_table = -1;     // 该模块是否拥有列表,'1'是，'-1'否
    has_array = -1;     // 该模块是否拥有数组,'1'是,且代表有一张数据表，'-1'否
    table: DataTable;     // 列表内容
    array_list: Array<String> = [];
    arrays: { [key: string]: DataArray; } = {};   // 数组内容
}

// 数据表
export class DataTable {
    cell_list: { [key: string]: String; } = {};
    cells: { [key: string]: DataCell; } = {};
}

// 表的每一个单元格
export class DataCell {
    sn = '';
    name = '';
    source_type = '';
    source_name = '';
    source_sn = '';
    source_data: any = null;
    value = '';
    row = 0;
    col = 0;
    rowspan = 0;
    colspan = 0;
}

export class ArrayCell {
    sn = '';
    name = '';
    source_type = '';
    source_name = '';
    source_sn = '';
    source_data: any = null;
    row = '';
    col = '';
    colspan = 0;
    rowspan = 0;
}

// 数组
export class DataArray {
    array_name = '';
    col_count = 0;
    row_count = 0;
    rowspan = 0;
    colspan = 0;
    source_sn = '';
    cell_list: Array<ArrayCell>;
    constructor(row, col) {
        this.row_count = row;
        this.col_count = col;
        this.rowspan = 1;
        this.colspan = 10 / this.col_count;
        this.cell_list = new Array();
    }
    pushWithSpan(cell: ArrayCell) {
        cell.colspan = this.colspan;
        cell.rowspan = this.rowspan;
        this.cell_list.push(cell);
    }
}


// 创建测试单元格
export const cell_1_1 = new DataCell();
cell_1_1.sn = 'c.1.1';
cell_1_1.row = 1;
cell_1_1.col = 1;
cell_1_1.name = '标准溶液名称';
cell_1_1.value = '1000mg/L钾（K）标准溶液';
cell_1_1.source_type = '1';
cell_1_1.source_name = '录入';
cell_1_1.source_data = '';
cell_1_1.source_sn = '';
cell_1_1.rowspan = 1;
cell_1_1.colspan = 4;

export const cell_1_2 = new DataCell();
cell_1_2.sn = 'c.1.2';
cell_1_2.row = 1;
cell_1_2.col = 2;
cell_1_2.name = '浓度';
cell_1_2.value = '0';
cell_1_2.source_type = '2';
cell_1_2.source_name = '引用';
cell_1_2.source_data = '';
cell_1_2.source_sn = '{model.1#c.7.1}';
cell_1_2.rowspan = 1;
cell_1_2.colspan = 3;

export const cell_1_3 = new DataCell();
cell_1_3.sn = 'c.1.3';
cell_1_3.row = 1;
cell_1_3.col = 3;
cell_1_3.name = '单位';
cell_1_3.value = 'mg/L';
cell_1_3.source_type = '1';
cell_1_3.source_name = '录入';
cell_1_3.source_data = '';
cell_1_3.source_sn = '';
cell_1_3.rowspan = 1;
cell_1_3.colspan = 3;

export const cell_2_1 = new DataCell();
cell_2_1.sn = 'c.2.1';
cell_2_1.row = 2;
cell_2_1.col = 1;
cell_2_1.name = '配置方法';
cell_2_1.value = '1.907g氯化钾（KCl，高纯，105℃烘2h）溶于水，加5mL浓盐酸，稀释定容至1L，得1000mg/L钾（K）标准溶液。';
cell_2_1.source_type = '1';
cell_2_1.source_name = '录入';
cell_2_1.source_data = '';
cell_2_1.source_sn = '';
cell_2_1.rowspan = 2;
cell_2_1.colspan = 10;

export const cell_3_1 = new DataCell();
cell_3_1.sn = 'c.3.1';
cell_3_1.row = 3;
cell_3_1.col = 1;
cell_3_1.name = '温度(℃)';
cell_3_1.value = '24';
cell_3_1.source_type = '1';
cell_3_1.source_name = '录入';
cell_3_1.source_data = '';
cell_3_1.source_sn = '';
cell_3_1.rowspan = 1;
cell_3_1.colspan = 4;

export const cell_3_2 = new DataCell();
cell_3_2.sn = 'c.3.2';
cell_3_2.row = 3;
cell_3_2.col = 2;
cell_3_2.name = '天平';
cell_3_2.value = 'BS210S';
cell_3_2.source_type = '3';
cell_3_2.source_name = '参数表';
cell_3_2.source_data = ['PL2002', 'JA5003', 'BS210S', 'AL204'];
cell_3_2.source_sn = '{expParameter#电子天平#型号}';
cell_3_2.rowspan = 1;
cell_3_2.colspan = 3;

export const cell_3_3 = new DataCell();
cell_3_3.sn = 'c.3.3';
cell_3_3.row = 3;
cell_3_3.col = 3;
cell_3_3.name = '称量模式';
cell_3_3.value = '二次称重';
cell_3_3.source_type = '1';
cell_3_3.source_name = '录入';
cell_3_3.source_data = '';
cell_3_3.source_sn = '';
cell_3_3.rowspan = 1;
cell_3_3.colspan = 3;

export const cell_4_1 = new DataCell();
cell_4_1.sn = 'c.4.1';
cell_4_1.row = 4;
cell_4_1.col = 1;
cell_4_1.name = '溶质';
cell_4_1.value = '氯化钾';
cell_4_1.source_type = '3';
cell_4_1.source_name = '参数表';
cell_4_1.source_data = ['无水碳酸钠', '邻苯二甲酸氢钾', '氢氧化钠', '重铬酸钾', '氯化钾'];
cell_4_1.source_sn = '{expParameter#标准化学物质#名称}';
cell_4_1.rowspan = 1;
cell_4_1.colspan = 5;

export const cell_4_2 = new DataCell();
cell_4_2.sn = 'c.4.2';
cell_4_2.row = 4;
cell_4_2.col = 2;
cell_4_2.name = '分子式';
cell_4_2.value = 'KCl';
cell_4_2.source_type = '3';
cell_4_2.source_name = '参数表';
cell_4_2.source_data = ['KCl'];
cell_4_2.source_sn = '{expParameter#标准化学物质#名称.氯化钾#分子式}';
cell_4_2.rowspan = 1;
cell_4_2.colspan = 5;

export const cell_5_1 = new DataCell();
cell_5_1.sn = 'c.5.1';
cell_5_1.row = 5;
cell_5_1.col = 1;
cell_5_1.name = '浓度';
cell_5_1.value = '二次称重';
cell_5_1.source_type = '3';
cell_5_1.source_name = '参数表';
cell_5_1.source_data = ['≥99.95%'];
cell_5_1.source_sn = '{expParameter#标准化学物质#名称.氯化钾#纯度}';
cell_5_1.rowspan = 1;
cell_5_1.colspan = 5;

export const cell_5_2 = new DataCell();
cell_5_2.sn = 'c.5.2';
cell_5_2.row = 5;
cell_5_2.col = 2;
cell_5_2.name = '称量(g)';
cell_5_2.value = '1.907';
cell_5_2.source_type = '1';
cell_5_2.source_name = '录入';
cell_5_2.source_data = '';
cell_5_2.source_sn = '';
cell_5_2.rowspan = 1;
cell_5_2.colspan = 5;

export const cell_6_1 = new DataCell();
cell_6_1.sn = 'c.6.1';
cell_6_1.row = 6;
cell_6_1.col = 1;
cell_6_1.name = '定容容器(ml)';
cell_6_1.value = '1000';
cell_6_1.source_type = '3';
cell_6_1.source_name = '参数表';
cell_6_1.source_data = ['1', '2', '5', '10', '25', '50', '100', '250', '1000'];
cell_6_1.source_sn = '{expParameter#容量瓶#标称容量}';
cell_6_1.rowspan = 1;
cell_6_1.colspan = 5;

export const cell_6_2 = new DataCell();
cell_6_2.sn = 'c.6.2';
cell_6_2.row = 6;
cell_6_2.col = 2;
cell_6_2.name = '标准物质';
cell_6_2.value = 'K';
cell_6_2.source_type = '3';
cell_6_2.source_name = '参数表';
cell_6_2.source_data = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'Fe'];
cell_6_2.source_sn = '{expParameter#Book1#符号}';
cell_6_2.rowspan = 1;
cell_6_2.colspan = 5;

export const cell_7_1 = new DataCell();
cell_7_1.sn = 'c.7.1';
cell_7_1.row = 7;
cell_7_1.col = 1;
cell_7_1.name = '浓度(mg/L)';
cell_7_1.value = '1000';
cell_7_1.source_type = '4';
cell_7_1.source_name = '公式';
cell_7_1.source_data = '';
cell_7_1.source_sn = '';
cell_7_1.rowspan = 1;
cell_7_1.colspan = 10;

export const cell_8_1 = new DataCell();
cell_8_1.sn = 'c.8.1';
cell_8_1.row = 8;
cell_8_1.col = 1;
cell_8_1.name = '配置日期';
cell_8_1.value = '2015-10-10';
cell_8_1.source_type = '1';
cell_8_1.source_name = '录入';
cell_8_1.source_data = '';
cell_8_1.source_sn = '';
cell_8_1.rowspan = 1;
cell_8_1.colspan = 4;

export const cell_8_2 = new DataCell();
cell_8_2.sn = 'c.8.2';
cell_8_2.row = 8;
cell_8_2.col = 2;
cell_8_2.name = '有效期限';
cell_8_2.value = '2016-1-10';
cell_8_2.source_type = '1';
cell_8_2.source_name = '录入';
cell_8_2.source_data = '';
cell_8_2.source_sn = '';
cell_8_2.rowspan = 1;
cell_8_2.colspan = 3;

export const cell_8_3 = new DataCell();
cell_8_3.sn = 'c.8.3';
cell_8_3.row = 8;
cell_8_3.col = 3;
cell_8_3.name = '配置人';
cell_8_3.value = 'xxx';
cell_8_3.source_type = '1';
cell_8_3.source_name = '录入';
cell_8_3.source_data = '';
cell_8_3.source_sn = '';
cell_8_3.rowspan = 1;
cell_8_3.colspan = 3;


export const table_1 = new DataTable();
table_1.cell_list = { 'c.1.1': '标准溶液名称' };
// tslint:disable-next-line:max-line-length
table_1.cells = {
    'c.1.1': cell_1_1,
    'c.1.2': cell_1_2, 'c.1.3': cell_1_3,
    'c.2.1': cell_2_1, 'c.3.1': cell_3_1, 'c.3.2': cell_3_2,
    'c.3.3': cell_3_3,
    'c.4.1': cell_4_1, 'c.4.2': cell_4_2,
    'c.5.1': cell_5_1, 'c.5.2': cell_5_2,
    'c.6.1': cell_6_1, 'c.6.2': cell_6_2,
    'c.7.1': cell_7_1,
    'c.8.1': cell_8_1, 'c.8.2': cell_8_2, 'c.8.3': cell_8_3
};

export const array_cell_1_1 = new ArrayCell();
array_cell_1_1.sn = 'A1';
array_cell_1_1.name = '录入';
array_cell_1_1.source_type = '1';
array_cell_1_1.source_name = '录入';
array_cell_1_1.source_data = '';
array_cell_1_1.source_sn = '';
array_cell_1_1.row = '1';
array_cell_1_1.col = 'A';

export const array_cell_2_1 = new ArrayCell();
array_cell_2_1.sn = 'B1';
array_cell_2_1.name = '化学式';
array_cell_2_1.source_type = '1';
array_cell_2_1.source_name = '录入';
array_cell_2_1.source_data = '';
array_cell_2_1.source_sn = '';
array_cell_2_1.row = '2';
array_cell_2_1.col = 'A';

export const array_cell_1_2 = new ArrayCell();
array_cell_1_2.sn = 'A2';
array_cell_1_2.name = '引用';
array_cell_1_2.source_type = '1';
array_cell_1_2.source_name = '引用';
array_cell_1_2.source_data = '';
array_cell_1_2.source_sn = '';
array_cell_1_2.row = '1';
array_cell_1_2.col = 'B';

export const array_cell_2_2 = new ArrayCell();
array_cell_2_2.sn = 'B2';
array_cell_2_2.name = 'KCl';
array_cell_2_2.source_type = '2';
array_cell_2_2.source_name = '引用';
array_cell_2_2.source_data = '';
array_cell_2_2.source_sn = '';
array_cell_2_2.row = '2';
array_cell_2_2.col = 'B';

export const array_cell_1_3 = new ArrayCell();
array_cell_1_3.sn = 'C1';
array_cell_1_3.name = '日期';
array_cell_1_3.source_type = '1';
array_cell_1_3.source_name = '日期';
array_cell_1_3.source_data = '';
array_cell_1_3.source_sn = '';
array_cell_1_3.row = '1';
array_cell_1_3.col = 'C';

export const array_cell_2_3 = new ArrayCell();
array_cell_2_3.sn = 'C2';
array_cell_2_3.name = 'KCl';
array_cell_2_3.source_type = '3';
array_cell_2_3.source_name = '日期';
array_cell_2_3.source_data = '';
array_cell_2_3.source_sn = '';
array_cell_2_3.row = '2';
array_cell_2_3.col = 'C';

export const array_cell_1_4 = new ArrayCell();
array_cell_1_4.sn = 'D1';
array_cell_1_4.name = '参数表';
array_cell_1_4.source_type = '1';
array_cell_1_4.source_name = '参数表';
array_cell_1_4.source_data = '';
array_cell_1_4.source_sn = '';
array_cell_1_4.row = '1';
array_cell_1_4.col = 'D';

export const array_cell_2_4 = new ArrayCell();
array_cell_2_4.sn = 'D2';
array_cell_2_4.name = 'KCl';
array_cell_2_4.source_type = '4';
array_cell_2_4.source_name = '参数表';
array_cell_2_4.source_data = '';
array_cell_2_4.source_sn = '';
array_cell_2_4.row = '2';
array_cell_2_4.col = 'D';

export const array_cell_1_5 = new ArrayCell();
array_cell_1_5.sn = 'E1';
array_cell_1_5.name = '公式';
array_cell_1_5.source_type = '1';
array_cell_1_5.source_name = '公式';
array_cell_1_5.source_data = '';
array_cell_1_5.source_sn = '';
array_cell_1_5.row = '1';
array_cell_1_5.col = 'E';

export const array_cell_2_5 = new ArrayCell();
array_cell_2_5.sn = 'E2';
array_cell_2_5.name = 'KCl';
array_cell_2_5.source_type = '5';
array_cell_2_5.source_name = '公式';
array_cell_2_5.source_data = '';
array_cell_2_5.source_sn = '';
array_cell_2_5.row = '2';
array_cell_2_5.col = 'E';

export const data_array = new DataArray(2, 5);
data_array.array_name = 'test_array';
data_array.pushWithSpan(array_cell_1_1);
data_array.pushWithSpan(array_cell_1_2);
data_array.pushWithSpan(array_cell_1_3);
data_array.pushWithSpan(array_cell_1_4);
data_array.pushWithSpan(array_cell_1_5);
data_array.pushWithSpan(array_cell_2_1);
data_array.pushWithSpan(array_cell_2_2);
data_array.pushWithSpan(array_cell_2_3);
data_array.pushWithSpan(array_cell_2_4);
data_array.pushWithSpan(array_cell_2_5);

data_array.source_sn = 'model.1#A1:A3#A1:A3';

// 模块中的列表
export const model_test = new Model();
model_test.model_standard_name = 'test_name';
model_test.model_id = 1;
model_test.model_name = 'model.1';
model_test.has_array = 1;
model_test.has_table = 1;
model_test.table = table_1;
model_test.array_list = ['test_array'];
model_test.arrays = { 'test_array': data_array };

export const model_test_2 = new Model();
model_test_2.model_standard_name = 'test_name';
model_test_2.model_id = 1;
model_test_2.model_name = 'model.2';
model_test_2.has_array = 1;
model_test_2.has_table = 1;
model_test_2.table = table_1;
model_test_2.array_list = ['test_array'];
model_test_2.arrays = { 'test_array': data_array };

export const models_test: Model[] = [
    model_test,
];

// export const model_test: Model[] = [
//     {
//         model_id: 1,
//         model_name: 'model1',
//         has_table: 1,
//         has_array: 1,
//         tables: [
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '一、试剂准备', value: '', source_type: 1, source: '录入' },
// tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '硫酸：', value: '（H2SO4，密度1.84g/ml，分析纯）。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '高氯酸：', value: '（HClO4,70%,分析纯）。', source_type: 1, source: '录入' },
// tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '6mol/L盐酸：', value: '浓盐酸（HCl,分析纯）与水按1：1体积混合。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },

//         ],
//         // array_list : [
//         //     'array1',
//         // ],
//         arrays: [
//             { row: '1', col: 'A', name: 'A1', sn: '001', source_type: 1, source: '引用', value: '无水碳酸钠' },
//             { row: '1', col: 'B', name: 'B1', sn: '002', source_type: 1, source: '引用', value: 'H' },
//             { row: '2', col: 'A', name: 'A2', sn: '003', source_type: 1, source: '引用', value: '邻苯二甲酸氢钾' },
//             { row: '2', col: 'B', name: 'B2', sn: '004', source_type: 1, source: '引用', value: 'He' },
//             { row: '3', col: 'A', name: 'A3', sn: '005', source_type: 1, source: '引用', value: '氢氧化钠', },
//             { row: '3', col: 'B', name: 'B3', sn: '006', source_type: 1, source: '引用', value: 'Li', },
//             { row: '4', col: 'A', name: 'A4', sn: '007', source_type: 1, source: '引用', value: '重铬酸钾', },
//         ]

//     },
//     {
//         model_id: 2,
//         model_name: 'model2',
//         has_table: 1,
//         has_array: 1,
//         tables: [
// tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '2,4-二硝基酚或（2,6-二硝基酚）指示剂：', value: '溶解0.20g2,4-二硝基酚于100mL水中。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },
//         ],
//         arrays: [{
//             col: '',
//             row: '',
//             name: '',
//             sn: '',
//             source_type: 1,
//             source: '',
//             value: '',
//         }],
//     },
//     {
//         model_id: 3,
//         model_name: 'model3',
//         has_table: 0,
//         has_array: 0,
//         tables: [
// tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 3, name: '钼锑储存液：', value: '153ml浓硫酸（H2SO4，密度1.84g/ml，分析纯），缓缓的倒入400ml水中，搅拌，冷却另取10g钼酸铵溶液[(NH4)6Mo7O24•4H2O,分析纯]，溶解于约60℃的300ml水中，冷却。然后将硫酸溶液缓缓倒入钼酸铵溶液中，再加入100ml 0.5%酒石酸锑钾（KSbOC4H4O6•1/2H2O,分析纯）溶液，最后用水稀释至1L,避光储存。此储存液含10mg/L钼酸铵与2.75mol/L硫酸。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },
//         ],
//         arrays: [{
//             col: '',
//             row: '',
//             name: '',
//             sn: '',
//             source_type: 1,
//             source: '',
//             value: '',
//         }],
//     },
//     {
//         model_id: 4,
//         model_name: 'model4',
//         has_table: 0,
//         has_array: 0,
//         tables: [
// tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '钼锑抗显色剂：', value: '1.50g抗坏血酸( C6H8O6，左旋， 旋光度+210 - +220，分析纯)溶于100ml钼锑储存液中。此液需现用现配。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },
//         ],
//         arrays: [{
//             col: '',
//             row: '',
//             name: '',
//             sn: '',
//             source_type: 1,
//             source: '',
//             value: '',
//         }],
//     },
// ];



export const template_test: Template = new Template();
template_test.whole_name = '测试模板';
template_test.model_list = ['model.1'];
template_test.models = { 'model.1': model_test };
template_test.model_list.push('model.2');
template_test.models['model.2'] = model_test_2;


const space_cell: DataCell = new DataCell();
space_cell.sn = 'c_1_1';
const space_table: DataTable = new DataTable();
space_table.cells['c.1.1'] = space_cell;
export const space_array_cell: ArrayCell = new ArrayCell();
space_array_cell.row = '1';
space_array_cell.col = 'A';
space_array_cell.sn = 'A1';
export const space_array: DataArray = new DataArray(2, 2);
space_array.array_name = 'space_array';
space_array.pushWithSpan(space_array_cell);
export const space_template: Template = new Template();
export const space_model: Model = new Model();
space_model.model_id = 1;
space_model.model_name = 'model_1';
space_model.table = space_table;
space_model.arrays['space_array'] = space_array;
space_template.models['model_1'] = space_model;

export const templates_test: Template[] = [
    template_test,
];

