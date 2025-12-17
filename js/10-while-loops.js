// while loops

let n = 20;
 n = parseInt(n);

let i = 0;
while(i < n){
    console.log(i);
    i++;
}

async function fetchData(){
    const response = await fetch('https://wordpress-1398297-5215507.cloudwaysapps.com/wp-json/imblogs/v1/single/blog/?link=/lifestyle/how-to-check-etisalat-data-balance/');
    const data = await response.json();
    console.log(data);
}
fetchData();