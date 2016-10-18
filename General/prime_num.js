//Generate the first x prime numbers with Dynamic Programming.
//Helper function: checkPrime
var primes = [2,3];

function checkPrime(num) {
    if (num < 2)
  {
    return false;
  }
  for (var j = 0; j < primes.length && primes[j]*primes[j] <= num; j++)
  {
    if (num % primes[j] === 0)
    {
        return false;
    }
  }
  return true;
}

function genPrime(x)
{
    if (x == 1)
  {
    primes = [2];
    }

    for (let k = 2, i = 6; k < x; i += 6, k++) {
    if (checkPrime(i-1) && primes.length < x) {
        primes.push(i-1);
    }
    if (k < x - 1 && checkPrime(i+1) && primes.length < x)
    {
        primes.push(i+1);
    }
  }
  console.log(primes);
  primes = [2,3];
}

//genPrime(150);