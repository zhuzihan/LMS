import {
    cell_1_1, cell_1_2, cell_1_3, cell_2_1, cell_3_1, cell_3_2, cell_3_3, cell_4_1, cell_4_2, cell_5_1, cell_5_2, cell_6_1, cell_6_2, cell_7_1, cell_8_1, cell_8_2, cell_8_3
} from './data-model'
// 数据来源
export const source = ['录入', '日期', '参数表', '公式', '数组'];

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
    // constructor(id: number, name: string, s_name: string, has_t: number, has_a: number,cells: DataCell[]) {
    //     this.model_id = id;
    //     this.model_name = name;
    //     this.model_standard_name = s_name;
    //     this.has_table = has_t;
    //     this.has_array = has_a;
    //     this.cells = cells;
    // }
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
    sn = '';
    name = '';
    source_type = '';
    source_name = '';
    source_sn = '';
    source_data = '';
    value = '';
    row = 0;
    col = 0;
    rowspan = 0;
    colspan = 0;
    // constructor(){
    //     this.sn = '';
    //     this.name = '';
    //     this.source_type = '';
    //     this.source_name = '';
    //     this.source_sn = '';
    //     this.source_data = '';
    //     this.value = '';
    //     this.row = 0;
    //     this.col = 0;
    //     this.rowspan = 0;
    //     this.colspan = 0;
    // }
}

export const form_model_test: Model[] = [
    {
        model_id: 1,
        model_name: 'model1',
        model_standard_name: "",
        has_table: 1,
        has_array: 1,
        cells: [
            {
                sn: "",
                name: "",
                source_type: "1",
                source_name: "name",
                source_sn: "1234",
                source_data: "data",
                value: "value",
                row: 1,
                col: 1,
                rowspan: 1,
                colspan: 10,
            },
            // cell_1_2,
            // cell_1_3,
            // cell_2_1,
            // cell_3_1,
            // cell_3_2,
            // cell_3_3,
            // cell_4_1,
            // cell_4_2,
            // cell_5_1,
            // cell_5_2,
            // cell_6_1,
            // cell_6_2,
            // cell_7_1,
            // cell_8_1,
            // cell_8_2,
            // cell_8_3,
        ],
    },
];