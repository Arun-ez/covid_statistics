

const SetData = (data) => {

    data.forEach(({ Country, TotalConfirmed, TotalDeaths }, idx) => {

        const td1 = `<td> ${idx + 1} </td>`
        const td2 = `<td> ${Country} </td>`
        const td3 = `<td> ${TotalConfirmed} </td>`
        const td4 = `<td> ${TotalConfirmed - TotalDeaths} </td>`
        const td5 = `<td> ${TotalDeaths} </td>`

        const tr = `<tr> ${td1} ${td2} ${td3} ${td4} ${td5} </tr>`

        $('#data_container').append(tr);
    });

    $('.table').DataTable();
}

$.ajax({
    type: "GET",
    url: "https://api.covid19api.com/summary",
    success: (data) => {
        SetData(data.Countries)
    },
    error: (error) => {
        console.log(error);
    }
})
