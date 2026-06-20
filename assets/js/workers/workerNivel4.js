/* ===================================== */
/* WORKER NIVEL 4 */
/* ===================================== */

self.onmessage = function (event) {

    const data =
        event.data;

    const total =
        data.length;

    let tempSum = 0;
    let humSum = 0;

    let tempMax = -Infinity;
    let tempMin = Infinity;

    let humMax = -Infinity;
    let humMin = Infinity;

    for (
        let i = 0;
        i < total;
        i++
    ) {

        const item =
            data[i];

        /* TEMPERATURA */

        tempSum +=
            item.temperature;

        if (
            item.temperature > tempMax
        ) {
            tempMax =
                item.temperature;
        }

        if (
            item.temperature < tempMin
        ) {
            tempMin =
                item.temperature;
        }

        /* HUMEDAD */

        humSum +=
            item.humidity;

        if (
            item.humidity > humMax
        ) {
            humMax =
                item.humidity;
        }

        if (
            item.humidity < humMin
        ) {
            humMin =
                item.humidity;
        }

        /* PROGRESO */

        if (
            i % 200 === 0
        ) {

            self.postMessage({

                type: "progress",

                progress:
                    Math.floor(
                        (i / total) * 100
                    )

            });

        }

    }

    /* RESULTADOS */

    self.postMessage({

        type: "result",

        results: {

            temperature: {

                average:
                    tempSum / total,

                max:
                    tempMax,

                min:
                    tempMin

            },

            humidity: {

                average:
                    humSum / total,

                max:
                    humMax,

                min:
                    humMin

            }

        }

    });

};