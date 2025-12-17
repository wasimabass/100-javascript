const getResponse = async () => {
    const response = await fetch('https://wordpress-1398297-5215507.cloudwaysapps.com/wp-json/imblogs/v1/single/blog/?link=/lifestyle/how-to-check-etisalat-data-balance/');
    const data = await response.json()
    return data;
}  

const getAllData = async () => {
    const returnData = await getResponse();
    myData = returnData;

    singleBlogData(myData);
}

getAllData();

function singleBlogData(myData){
    if(myData){
        console.log("Title:", myData[0].title);
    } else {
        console.log("No data found");
    }
}