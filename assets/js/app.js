/* ===================================== */
/* IMPORTS */
/* ===================================== */

import { nivel1Page } from "./pages/nivel1.js";
import { nivel2Page } from "./pages/nivel2.js";
import { nivel3Page } from "./pages/nivel3.js";
import { nivel4Page } from "./pages/nivel4.js";
import { nivel5Page } from "./pages/nivel5.js";
import { finalPage } from "./pages/final.js";
import { getLocation } from "./services/geolocation.js";
import { renderMap } from "./canvas/mapRenderer.js";
import {
    startCamera,
    capturePhoto,
    savePhoto,
    getSavedPhoto,
    stopCamera
}
    from "./services/camera.js";
import {
    generateSensorData,
    generateAdvancedSensorData
}
from "./services/sensorGenerator.js";

/* ===================================== */
/* VARIABLES GLOBALES */
/* ===================================== */

let cameraStream = null;

/* ===================================== */
/* ELEMENTOS */
/* ===================================== */

const content =
    document.getElementById("content");

const pageTitle =
    document.getElementById("pageTitle");

const globalProgress =
    document.getElementById("globalProgress");

const globalPercent =
    document.getElementById("globalPercent");

/* ===================================== */
/* ESTADO */
/* ===================================== */

let currentLevel =
    Number(
        localStorage.getItem("escapeLevel")
    ) || 1;

/* ===================================== */
/* INIT */
/* ===================================== */

updateSidebar();
updateProgress();
loadPage(currentLevel);
startClock();
initSidebar();
initRestoreButton();

/* ===================================== */
/* ACTIVE MENU */
/* ===================================== */

function updateActiveMenu(level) {

    document
        .querySelectorAll(".menu-link")
        .forEach(link => {

            link.classList.remove(
                "active"
            );

            const linkLevel =
                Number(
                    link.dataset.page.replace(
                        "nivel",
                        ""
                    )
                );

            if (
                linkLevel === level
            ) {

                link.classList.add(
                    "active"
                );
            }

        });
}

/* ===================================== */
/* SIDEBAR */
/* ===================================== */

function initSidebar() {

    const toggleBtn =
        document.getElementById(
            "toggleSidebar"
        );

    const sidebar =
        document.getElementById(
            "sidebar"
        );

    const mainContent =
        document.getElementById(
            "mainContent"
        );

    toggleBtn.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle(
                "collapsed"
            );

            mainContent.classList.toggle(
                "expanded"
            );
        }
    );

    document
        .querySelectorAll(".menu-link")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    const page =
                        Number(
                            link.dataset.page.replace(
                                "nivel",
                                ""
                            )
                        );

                    if (
                        page <= currentLevel
                    ) {

                        loadPage(page);
                    }
                }
            );
        });
}

/* ===================================== */
/* CARGAR PÁGINAS */
/* ===================================== */

function loadPage(level) {

    updateActiveMenu(level);

    console.log("Cargando nivel:", level);

    switch (level) {

        case 1:

            pageTitle.textContent =
                "Nivel 1 - El Guardián de la Ubicación";

            content.innerHTML =
                nivel1Page();

            initNivel1();

            break;

        case 2:

            pageTitle.textContent =
                "Nivel 2 - El Cartógrafo Perdido";

            content.innerHTML =
                nivel2Page();

            initNivel2();

            break;

        case 3:

            pageTitle.textContent =
                "Nivel 3 - La Evidencia del Explorador";

            content.innerHTML =
                nivel3Page();

            initNivel3();

            break;

        case 4:

            pageTitle.textContent =
                "Nivel 4 - El Núcleo de Procesamiento";

            content.innerHTML =
                nivel4Page();

            initNivel4();

            break;

        case 5:

            pageTitle.textContent =
                "Nivel 5 - El Portal Cuántico";

            content.innerHTML =
                nivel5Page();

            initNivel5();

            break;

        case 6:

            pageTitle.textContent =
                "Sistema Recuperado";

            content.innerHTML =
                finalPage();

            initFinal();

            break;
    }
}

/* ===================================== */
/* DESBLOQUEAR NIVEL */
/* ===================================== */

window.unlockLevel =
    function (level) {

        level = Number(level);


        if (level > currentLevel) {

            currentLevel = level;

            localStorage.setItem(
                "escapeLevel",
                currentLevel
            );

            updateSidebar();
            updateProgress();
            loadPage(level);
        }
    };

/* ===================================== */
/* RESET */
/* ===================================== */

window.resetMission =
    function () {

        localStorage.clear();

        location.reload();
    };

/* ===================================== */
/* PROGRESO */
/* ===================================== */

function updateProgress() {

    let percent = 0;

    switch (currentLevel) {

        case 1:
            percent = 0;
            break;

        case 2:
            percent = 20;
            break;

        case 3:
            percent = 40;
            break;

        case 4:
            percent = 60;
            break;

        case 5:
            percent = 80;
            break;

        case 6:
            percent = 100;
            break;
    }

    globalProgress.style.width =
        `${percent}%`;

    globalPercent.textContent =
        `${percent}%`;
}

/* ===================================== */
/* ACTUALIZAR SIDEBAR */
/* ===================================== */

function updateSidebar() {

    document
        .querySelectorAll(".menu-link")
        .forEach(link => {

            const level =
                Number(
                    link.dataset.page.replace(
                        "nivel",
                        ""
                    )
                );

            link.classList.remove(
                "locked"
            );

            if (
                level > currentLevel
            ) {

                link.classList.add(
                    "locked"
                );
            }
        });
}

/* ===================================== */
/* RELOJ */
/* ===================================== */

function startClock() {

    const clock =
        document.getElementById(
            "clock"
        );

    setInterval(() => {

        if (clock) {

            clock.textContent =
                new Date()
                    .toLocaleTimeString();
        }

    }, 1000);

}

/* ===================================== */
/* RESTAURAR PROGRESO */
/* ===================================== */

function initRestoreButton() {

    localStorage.removeItem(
        "escapePhoto"
    );

    const btn =
        document.getElementById(
            "btnRestore"
        );

    if (!btn) return;

    btn.addEventListener(
        "click",
        () => {

            Swal.fire({

                title: "Restaurar progreso",

                text:
                    "Seleccione una opción",

                icon: "question",

                showDenyButton: true,

                showCancelButton: true,

                confirmButtonText:
                    "Reiniciar todo",

                denyButtonText:
                    "Nivel anterior",

                cancelButtonText:
                    "Cancelar"

            }).then(result => {

                /* REINICIO TOTAL */

                if (
                    result.isConfirmed
                ) {

                    Swal.fire({

                        title:
                            "¿Eliminar todo el progreso?",

                        icon:
                            "warning",

                        showCancelButton:
                            true,

                        confirmButtonText:
                            "Sí",

                        cancelButtonText:
                            "No"

                    }).then(r => {

                        if (
                            r.isConfirmed
                        ) {

                            localStorage.clear();

                            location.reload();
                        }
                    });
                }

                /* RETROCEDER 1 NIVEL */

                else if (
                    result.isDenied
                ) {

                    if (
                        currentLevel <= 1
                    ) {

                        Swal.fire({

                            icon:
                                "info",

                            title:
                                "Ya está en el Nivel 1"

                        });

                        return;
                    }

                    currentLevel--;

                    localStorage.setItem(
                        "escapeLevel",
                        currentLevel
                    );

                    updateSidebar();

                    updateProgress();

                    loadPage(
                        currentLevel
                    );

                    Swal.fire({

                        icon:
                            "success",

                        title:
                            `Regresó al Nivel ${currentLevel}`

                    });
                }
            });
        }
    );
}

/* ===================================== */
/* NIVEL 1 */
/* ===================================== */

function initNivel1() {

    const btnUbicacion =
        document.getElementById(
            "btnUbicacion"
        );

    const btnNivel2 =
        document.getElementById(
            "btnNivel2"
        );

    const gpsStatus =
        document.getElementById(
            "gpsStatus"
        );

    const latitud =
        document.getElementById(
            "latitud"
        );

    const longitud =
        document.getElementById(
            "longitud"
        );

    if (!btnUbicacion) return;

    btnUbicacion.addEventListener(
        "click",
        async () => {

            gpsStatus.textContent =
                "Conectando con satélite...";

            try {

                const location =
                    await getLocation();

                latitud.textContent =
                    location.latitude.toFixed(6);

                longitud.textContent =
                    location.longitude.toFixed(6);

                gpsStatus.textContent =
                    "Coordenadas recuperadas";

                localStorage.setItem(
                    "escapeLocation",
                    JSON.stringify(location)
                );

                btnNivel2.disabled = false;

            } catch (error) {

                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error.message
                });

                gpsStatus.textContent =
                    error.message;
            }
        }
    );

    btnNivel2.addEventListener(
        "click",
        () => {

            unlockLevel(2);

            Swal.fire({
                icon: "success",
                title: "Nivel completado",
                text: "Nivel 2 desbloqueado."
            });
        }
    );
}

/* ===================================== */
/* NIVEL 2 */
/* ===================================== */

function initNivel2() {

    const btnGenerarMapa =
        document.getElementById(
            "btnGenerarMapa"
        );

    const btnNivel3 =
        document.getElementById(
            "btnNivel3"
        );

    const mapStatus =
        document.getElementById(
            "mapStatus"
        );

    const mapLat =
        document.getElementById(
            "mapLat"
        );

    const mapLng =
        document.getElementById(
            "mapLng"
        );

    const location =
        JSON.parse(
            localStorage.getItem(
                "escapeLocation"
            )
        );

    if (!location) {

        mapStatus.textContent =
            "No existe una ubicación válida.";

        return;
    }

    mapLat.textContent =
        location.latitude.toFixed(6);

    mapLng.textContent =
        location.longitude.toFixed(6);

    btnGenerarMapa.addEventListener(
        "click",
        () => {

            const success =
                renderMap(
                    "mapCanvas",
                    location
                );

            if (!success) {

                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "No se pudo generar el mapa."
                });

                return;
            }

            mapStatus.textContent =
                "Mapa generado correctamente";

            localStorage.setItem(
                "mapCompleted",
                "true"
            );

            btnNivel3.disabled =
                false;

            Swal.fire({
                icon: "success",
                title: "Mapa recuperado",
                text: "La posición ha sido marcada."
            });
        }
    );

    btnNivel3.addEventListener(
        "click",
        () => {

            unlockLevel(3);

            Swal.fire({
                icon: "success",
                title: "Nivel completado",
                text: "Nivel 3 desbloqueado."
            });

        }
    );
}

/* ===================================== */
/* NIVEL 3 */
/* ===================================== */

function initNivel3() {

    const video =
        document.getElementById(
            "cameraVideo"
        );

    const canvas =
        document.getElementById(
            "photoCanvas"
        );

    const btnStartCamera =
        document.getElementById(
            "btnStartCamera"
        );

    const btnCapture =
        document.getElementById(
            "btnCapture"
        );

    const btnNivel4 =
        document.getElementById(
            "btnNivel4"
        );

    const cameraStatus =
        document.getElementById(
            "cameraStatus"
        );

    const savedPhoto =
        document.getElementById(
            "savedPhoto"
        );

    const photoMessage =
        document.getElementById(
            "photoMessage"
        );

    /* FOTO GUARDADA */

    const existingPhoto =
        getSavedPhoto();

    if (existingPhoto) {

        savedPhoto.src =
            existingPhoto;

        savedPhoto.style.display =
            "block";

        photoMessage.style.display =
            "none";

        btnNivel4.disabled =
            false;
    }

    /* ACTIVAR CÁMARA */

    btnStartCamera.addEventListener(
        "click",
        async () => {

            try {

                cameraStatus.textContent =
                    "Iniciando cámara...";

                cameraStream =
                    await startCamera(
                        video
                    );

                cameraStatus.textContent =
                    "Cámara activa";

                btnCapture.disabled =
                    false;

            } catch (error) {

                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error.message
                });

                cameraStatus.textContent =
                    error.message;
            }
        }
    );

    /* CAPTURAR FOTO */

    btnCapture.addEventListener(
        "click",
        () => {

            const photoData =
                capturePhoto(
                    video,
                    canvas
                );

            savePhoto(
                photoData
            );

            savedPhoto.src =
                photoData;

            savedPhoto.style.display =
                "block";

            photoMessage.style.display =
                "none";

            btnNivel4.disabled =
                false;

            Swal.fire({
                icon: "success",
                title: "Evidencia capturada"
            });
        }
    );

    /* DESBLOQUEAR NIVEL 4 */

    btnNivel4.addEventListener(
        "click",
        () => {

            if (cameraStream) {

                stopCamera(
                    cameraStream
                );
            }

            unlockLevel(4);

            Swal.fire({
                icon: "success",
                title: "Nivel completado",
                text: "Nivel 4 desbloqueado."
            });
        }
    );
}

/* ===================================== */
/* NIVEL 4 */
/* ===================================== */

function initNivel4() {

    const btnProcesar =
        document.getElementById(
            "btnProcesar"
        );

    const btnNivel5 =
        document.getElementById(
            "btnNivel5"
        );

    const progressBar =
        document.getElementById(
            "progressBar"
        );

    const workerStatus =
        document.getElementById(
            "workerStatus"
        );

    const statsContainer =
        document.getElementById(
            "statsContainer"
        );

    btnProcesar.addEventListener(
        "click",
        () => {

            workerStatus.textContent =
                "Generando sensores...";

            const data =
                generateSensorData(
                    20000
                );

            const worker =
                new Worker(
                    "./assets/js/workers/workerNivel4.js",
                    {
                        type: "module"
                    }
                );

            worker.postMessage(
                data
            );

            worker.onmessage =
                function (event) {

                    const message =
                        event.data;

                    if (
                        message.type ===
                        "progress"
                    ) {

                        progressBar.style.width =
                            `${message.progress}%`;

                        progressBar.textContent =
                            `${message.progress}%`;
                    }

                    if (
                        message.type ===
                        "result"
                    ) {

                        progressBar.style.width =
                            "100%";

                        progressBar.textContent =
                            "100%";

                        workerStatus.textContent =
                            "Procesamiento completado";

                        statsContainer.style.display =
                            "block";

                        document.getElementById(
                            "tempAvg"
                        ).textContent =
                            message.results.temperature.average.toFixed(2);

                        document.getElementById(
                            "tempMax"
                        ).textContent =
                            message.results.temperature.max;

                        document.getElementById(
                            "tempMin"
                        ).textContent =
                            message.results.temperature.min;

                        document.getElementById(
                            "humAvg"
                        ).textContent =
                            message.results.humidity.average.toFixed(2);

                        document.getElementById(
                            "humMax"
                        ).textContent =
                            message.results.humidity.max;

                        document.getElementById(
                            "humMin"
                        ).textContent =
                            message.results.humidity.min;

                        btnNivel5.disabled =
                            false;

                        worker.terminate();
                    }
                };
        }
    );

    btnNivel5.addEventListener(
        "click",
        () => {

            unlockLevel(5);

            Swal.fire({
                icon: "success",
                title: "Nivel completado"
            });

        }
    );
}

/* ===================================== */
/* NIVEL 5 */
/* ===================================== */

function initNivel5() {

    const btnPortal =
        document.getElementById(
            "btnPortal"
        );

    const portalProgress =
        document.getElementById(
            "portalProgress"
        );

    const portalResults =
        document.getElementById(
            "portalResults"
        );

    const portalStatus =
        document.getElementById(
            "portalStatus"
        );

    let lastResults = null;

    btnPortal.addEventListener(
        "click",
        () => {

            portalStatus.textContent =
                "Generando registros...";

            const data =
                generateAdvancedSensorData(
                    250000
                );

            const worker =
                new Worker(
                    "./assets/js/workers/workerNivel5.js",
                    {
                        type: "module"
                    }
                );

            worker.postMessage(
                data
            );

            worker.onmessage =
                function (event) {

                    const message =
                        event.data;

                    if (
                        message.type ===
                        "progress"
                    ) {

                        portalProgress.style.width =
                            `${message.progress}%`;

                        portalProgress.textContent =
                            `${message.progress}%`;
                    }

                    if (
                        message.type ===
                        "result"
                    ) {

                        lastResults =
                            message.results;

                        portalProgress.style.width =
                            "100%";

                        portalProgress.textContent =
                            "100%";

                        portalStatus.textContent =
                            "Portal estabilizado";

                        portalResults.style.display =
                            "block";

                        document.getElementById(
                            "validRecords"
                        ).textContent =
                            lastResults.validRecords;

                        document.getElementById(
                            "avgTemp"
                        ).textContent =
                            lastResults.averageTemperature;

                        document.getElementById(
                            "avgPressure"
                        ).textContent =
                            lastResults.averagePressure;

                        const topTemps =
                            document.getElementById(
                                "topTemps"
                            );

                        const topPressures =
                            document.getElementById(
                                "topPressures"
                            );

                        topTemps.innerHTML = "";
                        topPressures.innerHTML = "";

                        lastResults.topTemperatures
                            .forEach(item => {

                                topTemps.innerHTML += `

                                    <li class="list-group-item">

                                        Registro #${item.id}

                                        <span class="float-end">

                                            ${item.value.toFixed(2)} °C

                                        </span>

                                    </li>

                                `;

                            });

                            lastResults.topPressures
                                .forEach(item => {

                                    topPressures.innerHTML += `

                                        <li class="list-group-item">

                                            Registro #${item.id}

                                            <span class="float-end">

                                                ${item.value.toFixed(2)} hPa

                                            </span>

                                        </li>

                                    `;

                                });

                        worker.terminate();
                    }
                };
        }
    );

    document.addEventListener(
        "click",
        (event) => {

            if (
                event.target.id ===
                "btnExportJson"
            ) {

                const blob =
                    new Blob(

                        [
                            JSON.stringify(
                                lastResults,
                                null,
                                2
                            )
                        ],

                        {
                            type:
                                "application/json"
                        }

                    );

                const url =
                    URL.createObjectURL(
                        blob
                    );

                const a =
                    document.createElement(
                        "a"
                    );

                a.href = url;

                a.download =
                    "resultados.json";

                a.click();

                URL.revokeObjectURL(
                    url
                );
            }

            if (
                event.target.id ===
                "btnFinalizar"
            ) {

                unlockLevel(6);
            }

        }
    );
}

/* ===================================== */
/* NIVEL FINAL */
/* ===================================== */

function initFinal() {

    const btn =
        document.getElementById(
            "btnRestartGame"
        );

    if (!btn) return;

    btn.addEventListener(
        "click",
        () => {

            localStorage.clear();

            currentLevel = 1;

            loadPage(1);

            updateSidebar();

            updateProgress();

            Swal.fire({
                icon: "success",
                title: "Desafío reiniciado"
            });

        }
    );
}