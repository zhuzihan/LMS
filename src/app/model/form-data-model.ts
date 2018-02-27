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
        model_standard_name: "",
        has_table: 1,
        has_array: 1,
        cells: [],
    },
];