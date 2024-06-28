#code to find transponse
def transpose_matrx(mat):
    rows = len(mat)
    cols = len(mat[0])
    
    #creaet new matrix and of dimension CxR and initialzie to zero
    TM = [[0]*rows for _ in range(cols)]
    
    for i in range(rows):
        for j in range(cols):
            TM[j][i] = mat[i][j]
            
    return TM


#with using inbuilt function

def transpose_matrx(mat):
    rows = len(mat)
    cols = len(mat[0])
    
    TM = list(zip(*mat))
    return [list(rows)[::-1] for row in TM]
