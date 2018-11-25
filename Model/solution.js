var express = require('express');
module.exports = {
  "807":"<pre>class Solution {\n"+
    "public:\n"+
    "int maxIncreaseKeepingSkyline(vector<vector<int>>& grid) {\n"+
       "  int  m = grid.size();</br>"+
       "  int  n = grid[0].size();</br>"+
       "  int res =0;</br>"+
       "vector<int> row( m, 0), col(n, 0);</br>"+
        "for(int i =0; i < m; i++){</br>"+
            " for(int j =0; j<n; j++){</br>"+
                "   row[i] = max(row[i], grid[i][j]);</br>"+
                "   col[j] = max(col[j], grid[i][j]) ;</br>"+
            "}</br>"+
        "}</br>"+
        "for(int i =0; i < m; i++){</br>"+
            " for(int j =0; j < n; j++){</br>"+
                "   res += min(row[i], col[j])-grid[i][j];</br>"+
             "}</br>"+
        "}</br>"+
        "return res;</br>"+
    "}</br>"+
"};</br></pre>",
"01":""

}
