function getMinSquares(n)
{
     
    // base cases
    if (n <= 3)
        return n;
 
    // getMinSquares rest of the
    // table using recursive
    // formula
 
    // Maximum squares required is
    // n (1*1 + 1*1 + ..)
    let res = n;
 
    // Go through all smaller numbers
    // to recursively find minimum
    for(let x = 1; x <= n; x++)
    {
        let temp = x * x;
         
        if (temp > n)
            break;
        else
            res = Math.min(res,
            1 + getMinSquares(n - temp));
    }
    return res;
}
 
// Driver code
document.write(getMinSquares(6));