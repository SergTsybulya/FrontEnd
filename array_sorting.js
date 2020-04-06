var m = [1,2,3,4,10,6,7,8,9,5];

for (var i = 0; i < m.length; i++){
    var m_min = m[i];

    for (var j = i+1; j<m.length; j++){
        if (m[j]>m_min){
            var mm = m[i];
            m_min = m[j];
            m[i]= m_min;
            m[j] = mm;
        }
    }
}

console.log(m);
