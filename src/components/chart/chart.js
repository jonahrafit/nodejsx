import { Line } from "react-chartjs-2";

function ChartData({ name, dataMission }) {
    let color = "#6366F1";

    function diffBetweenDay(date2) {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();
        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;
        let formattedToday = dd + "/" + mm + "/" + yyyy;
        formattedToday = new Date(
            formattedToday.split("/")[2],
            formattedToday.split("/")[1] - 1,
            formattedToday.split("/")[0]
        );

        date2 = new Date(
            date2.split("/")[2],
            date2.split("/")[1] - 1,
            date2.split("/")[0]
        );
        var timeDiff = Math.abs(date2.getTime() - today.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
        return diffDays;
    }

    var oups = [];
    if (name == "Gains validé") {
        oups = dataMission?.accepted;
        color = "#6366F1";
    }
    if (name == "Gains en attente") {
        oups = dataMission?.pending;
        color = "#22C55E";
    }
    if (name == "Mes commandes") {
        oups = dataMission?.commande;
        color = "#F6B81D";
    }
    var btDate = new Array(32).fill(0);
    console.log('OUPS ', oups);
    oups?.forEach((e) => {
        if (diffBetweenDay(e.date) <= 31) {
            var lengthDate = 31;
            if (e.date) {
                lengthDate = diffBetweenDay(e.date);
            }
            btDate[lengthDate] = e.remuneration;
        }
    });

    const data = {
        labels: [
            "0",
            "24h",
            "1j",
            "2j",
            "3j",
            "4j",
            "5j",
            "6j",
            "7j",
            "8j",
            "9j",
            "10j",
            "11j",
            "12j",
            "13j",
            "14j",
            "15j",
            "16j",
            "17j",
            "18j",
            "19j",
            "20j",
            "21j",
            "22j",
            "23j",
            "24j",
            "25j",
            "26j",
            "27j",
            "28j",
            "29j",
            "30j",
        ],
        datasets: [
            {
                label: name,
                data: btDate,
                borderColor: "#fff",
                borderWidth: "0",
                backgroundColor: color,
                pointColor: color,
                pointBorderColor: "#fff",
                pointBackgroundColor: color,
                pointBorderWidth: 3,
                pointRadius: 8,
                pointHoverBackgroundColor: color,
                pointHoverBorderColor: "#fff",
                pointHoverRadius: 3,
                lineTension: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Chart.js Line Chart",
            },
        },
    };

    return (
        <>
            <Line options={options} data={data} />
        </>
    );
}

export default ChartData;
