/* ===================================== */
/* WORKER NIVEL 5 */
/* ===================================== */

self.onmessage = function (event) {

    const data =
        event.data;

    const total =
        data.length;

    let validCount = 0;

    let temperatureSum = 0;
    let humiditySum = 0;
    let pressureSum = 0;

    const temperatures = [];
    const pressures = [];

    for (
        let i = 0;
        i < total;
        i++
    ) {

        const item =
            data[i];

        /* FILTRAR NEGATIVOS */

        if (
            item.temperature < 0 ||
            item.humidity < 0 ||
            item.pressure < 0
        ) {

            continue;
        }

        validCount++;

        temperatureSum +=
            item.temperature;

        humiditySum +=
            item.humidity;

        pressureSum +=
            item.pressure;

        temperatures.push({

            id:
                item.id,

            value:
                item.temperature

        });

        pressures.push({

            id:
                item.id,

            value:
                item.pressure

        });

        if (
            i % 2500 === 0
        ) {

            self.postMessage({

                type:
                    "progress",

                progress:
                    Math.floor(
                        (i / total) * 100
                    )

            });

        }

    }

    temperatures.sort(

        (a, b) =>
            b.value - a.value

    );

    pressures.sort(

        (a, b) =>
            b.value - a.value

    );

    const topTemperatures =
        temperatures.slice(
            0,
            10
        );

    const topPressures =
        pressures.slice(
            0,
            10
        );

    self.postMessage({

        type:
            "result",

        results: {

            validRecords:
                validCount,

            averageTemperature:
                (
                    temperatureSum /
                    validCount
                ).toFixed(2),

            averageHumidity:
                (
                    humiditySum /
                    validCount
                ).toFixed(2),

            averagePressure:
                (
                    pressureSum /
                    validCount
                ).toFixed(2),

            topTemperatures,

            topPressures

        }

    });

};