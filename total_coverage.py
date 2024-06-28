# zero coverage
def zero_coverage(mat):
    rows = len(mat)
    cols = len(mat[0])
    total_coverage = 0
    for i in range(rows):
        for j in range(cols):
            if (mat[i][j]==0):
                coverage = 0
                
                #moving up
                if(i>0 and mat[i-1][j]==1):
                    coverage += 1
                #moving down
                if (i<rows-1 and mat[i+1][j]==1):
                    coverage += 1
                #moving left
                if (j>0 and mat[i][j-1]==1):
                    coverage += 1
                #moving right
                if (j<cols-1 and mat[i][j+1]==1):
                    coverage += 1
                    
                total+coverage += coverage
    return total_coverage
