function minCoins(coins, m, V)
{
     
    // Base case
    if (V == 0)
        return 0;
     
    // Initialize result
    let res = Number.MAX_VALUE;
     
    // Try every coin that has smaller
    // value than V
    for(let i = 0; i < m; i++)
    {
        if (coins[i] <= V)
        {
            let sub_res = minCoins(coins, m,
                               V - coins[i]);
             
            // Check for INT_MAX to avoid overflow and
            // see if result can minimized
            if (sub_res != Number.MAX_VALUE &&
                sub_res + 1 < res)
                res = sub_res + 1;
        }
    }
    return res;
}
 
// Driver code
let coins = [ 9, 6, 5, 1 ];
let m = coins.length;
let V = 11;
 
console.log("Minimum coins required is " +
               minCoins(coins, m, V) );