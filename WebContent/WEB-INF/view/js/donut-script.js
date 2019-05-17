$(window).on("load", function () {
    Morris.Donut({
        element: "donut-chart",
        data: [{
            label: "Custard",
            value: 25
        }, {
            label: "Frosted",
            value: 30
        }, {
            label: "am",
            value: 25
        }, {
            label: "ugar",
            value: 50
        }],
        resize: !0,
        colors: ["#00A5A8", "#FF7D4D", "#FF4558", "#626E82"]
    })
});