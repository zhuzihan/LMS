import {MatPaginator, MatPaginatorIntl} from '@angular/material';

export class MatPaginatorIntlCro extends MatPaginatorIntl {
    itemsPerPageLabel = '每页个数';
    nextPageLabel = '下一页';
    previousPageLabel = '上一页';
    getRangeLabel = function (page, pageSize, length) {
      if (length === 0 || pageSize === 0) {
        return '0 od ' + length;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
      return '第' + (startIndex + 1) + ' - ' + endIndex + ' 条，总共：' + length + '条';
    };
}
  
  