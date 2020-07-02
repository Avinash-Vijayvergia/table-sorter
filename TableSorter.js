function sortTable(tableArray, sortKey, order) {
    let newArray = tableArray;
    newArray.sort((a, b) => {
        let value1 = typeof a[sortKey] === 'string' ? a[sortKey].toUpperCase() : a[sortKey];
        let value2 = typeof b[sortKey] === 'string' ? b[sortKey].toUpperCase() : b[sortKey];
        let comparison = 0;
        if (value1 > value2) {
            comparison = 1;
        } else if (value1 < value2) {
            comparison = -1;
        }
        return order === 'dec' ? comparison * -1 : comparison;
    });
    return newArray;
}

export default sortTable;