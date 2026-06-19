/* ===================================== */
/* MAPA CIUDAD INTELIGENTE */
/* ===================================== */

export function renderMap(canvasId, location) {

    const canvas =
        document.getElementById(canvasId);

    if (!canvas) return false;

    const ctx =
        canvas.getContext("2d");

    /* ===================================== */
    /* LIMPIAR */
    /* ===================================== */

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    /* ===================================== */
    /* FONDO DEGRADADO */
    /* ===================================== */

    const gradient =
        ctx.createLinearGradient(
            0,
            0,
            canvas.width,
            canvas.height
        );

    gradient.addColorStop(
        0,
        "#06121f"
    );

    gradient.addColorStop(
        1,
        "#0d1b2a"
    );

    ctx.fillStyle =
        gradient;

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    /* ===================================== */
    /* CUADRÍCULA */
    /* ===================================== */

    ctx.strokeStyle =
        "rgba(0,229,255,0.12)";

    ctx.lineWidth = 1;

    for (
        let x = 0;
        x < canvas.width;
        x += 40
    ) {

        ctx.beginPath();

        ctx.moveTo(x, 0);

        ctx.lineTo(
            x,
            canvas.height
        );

        ctx.stroke();
    }

    for (
        let y = 0;
        y < canvas.height;
        y += 40
    ) {

        ctx.beginPath();

        ctx.moveTo(0, y);

        ctx.lineTo(
            canvas.width,
            y
        );

        ctx.stroke();
    }

    /* ===================================== */
    /* ÁREA PRINCIPAL DEL MAPA */
    /* ===================================== */

    ctx.fillStyle =
        "rgba(0,229,255,0.05)";

    ctx.fillRect(
        60,
        80,
        760,
        330
    );

    ctx.strokeStyle =
        "#00e5ff";

    ctx.lineWidth = 2;

    ctx.strokeRect(
        60,
        80,
        760,
        330
    );

    /* ===================================== */
    /* SECTORES */
    /* ===================================== */

    ctx.strokeStyle =
        "rgba(0,229,255,0.25)";

    ctx.strokeRect(
        60,
        80,
        380,
        165
    );

    ctx.strokeRect(
        440,
        80,
        380,
        165
    );

    ctx.strokeRect(
        60,
        245,
        380,
        165
    );

    ctx.strokeRect(
        440,
        245,
        380,
        165
    );

    ctx.fillStyle =
        "#00e5ff";

    ctx.font =
        "bold 18px Arial";

    ctx.fillText(
        "SECTOR A",
        200,
        120
    );

    ctx.fillText(
        "SECTOR B",
        580,
        120
    );

    ctx.fillText(
        "SECTOR C",
        200,
        285
    );

    ctx.fillText(
        "SECTOR D",
        580,
        285
    );

    /* ===================================== */
    /* CALLES*/
    /* ===================================== */

    ctx.strokeStyle =
        "#8b5cf6";

    ctx.lineWidth = 4;

    const roads = [

        [120, 150, 760, 150],
        [120, 250, 760, 250],
        [120, 350, 760, 350],

        [200, 100, 200, 390],
        [450, 100, 450, 390],
        [700, 100, 700, 390]

    ];

    roads.forEach(road => {

        ctx.beginPath();

        ctx.moveTo(
            road[0],
            road[1]
        );

        ctx.lineTo(
            road[2],
            road[3]
        );

        ctx.stroke();

    });

    /* ===================================== */
    /* EDIFICIOS*/
    /* ===================================== */

    const buildings = [

        [130, 100],
        [300, 100],
        [520, 100],
        [130, 280],
        [520, 280]

    ];

    buildings.forEach(building => {

        ctx.fillStyle =
            "rgba(0,255,157,0.25)";

        ctx.fillRect(
            building[0],
            building[1],
            90,
            60
        );

        ctx.strokeStyle =
            "#00ff9d";

        ctx.strokeRect(
            building[0],
            building[1],
            90,
            60
        );

    });


    /* ===================================== */
    /* ESTACIÓN CENTRAL */
    /* ===================================== */

    ctx.beginPath();

    ctx.arc(
        650,
        250,
        40,
        0,
        Math.PI * 2
    );

    ctx.fillStyle =
        "rgba(255,193,7,0.25)";

    ctx.fill();

    ctx.strokeStyle =
        "#ffc107";

    ctx.lineWidth = 3;

    ctx.stroke();

    ctx.fillStyle =
        "#ffffff";

    ctx.font =
        "bold 14px Arial";

    ctx.fillText(
        "ESTACIÓN CENTRAL",
        625,
        255
    );

    /* ===================================== */
    /* UBICACIÓN REAL DEL USUARIO */
    /* ===================================== */

    if (location) {

        const normalizedLat =
            (location.latitude + 90) / 180;

        const normalizedLng =
            (location.longitude + 180) / 360;

        const x =
            80 + normalizedLng * 700;

        const y =
            90 + (1 - normalizedLat) * 300;

        /* ANILLO */

        ctx.beginPath();

        ctx.arc(
            x,
            y,
            22,
            0,
            Math.PI * 2
        );

        ctx.strokeStyle =
            "#ff4444";

        ctx.lineWidth = 3;

        ctx.stroke();

        /* CENTRO */

        ctx.beginPath();

        ctx.arc(
            x,
            y,
            8,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "#ff4444";

        ctx.fill();

        /* ETIQUETA */

        ctx.fillStyle =
            "#ffffff";

        ctx.font =
            "bold 14px Arial";

        ctx.fillText(
            "TU UBICACIÓN",
            x + 25,
            y
        );
    }

    /* ===================================== */
    /* TÍTULO */
    /* ===================================== */

    ctx.fillStyle =
        "#ffffff";

    ctx.font =
        "bold 24px Arial";

    ctx.fillText(
        "MAPA RECUPERADO DE LA CIUDAD INTELIGENTE",
        150,
        40
    );

    /* ===================================== */
    /* LEYENDA */
    /* ===================================== */

    ctx.font =
        "14px Arial";

    ctx.fillText(
        "■ Edificios",
        50,
        470
    );

    ctx.fillText(
        "📍 Ubicación",
        470,
        470
    );

    return true;
}