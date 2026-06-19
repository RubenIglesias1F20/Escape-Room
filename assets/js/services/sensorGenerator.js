export function generateSensorData(
    amount = 20000
) {

    const data = [];

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        data.push({

            temperature:
                randomNumber(
                    15,
                    45
                ),

            humidity:
                randomNumber(
                    20,
                    100
                )

        });

    }

    return data;
}

export function generateAdvancedSensorData(
    amount = 250000
) {

    const data = [];

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        let temperature =
            randomNumber(
                -20,
                120
            );

        let humidity =
            randomNumber(
                -10,
                100
            );

        let pressure =
            randomNumber(
                700,
                2500
            );

        /* 15% DE VALORES NEGATIVOS */

        if (
            Math.random() < 0.15
        ) {

            temperature =
                -Math.abs(
                    temperature
                );
        }

        if (
            Math.random() < 0.15
        ) {

            humidity =
                -Math.abs(
                    humidity
                );
        }

        if (
            Math.random() < 0.15
        ) {

            pressure =
                -Math.abs(
                    pressure
                );
        }

        data.push({

            id: i + 1,

            temperature,

            humidity,

            pressure

        });

    }

    return data;
}

function randomNumber(
    min,
    max
) {

    return Number(

        (
            Math.random() *
            (max - min) +
            min

        ).toFixed(2)

    );
}