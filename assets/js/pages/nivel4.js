export function nivel4Page() {

    return `

        <div class="container-fluid">

            <div class="escape-card">

                <div class="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h3>
                            El Núcleo de Procesamiento
                        </h3>

                        <p class="text-secondary mb-0">
                            Procese los datos de los sensores sin bloquear el sistema.
                        </p>

                    </div>

                    <span class="badge bg-info">
                        NIVEL 4
                    </span>

                </div>

                <hr>

                <div class="row">

                    <div class="col-lg-4">

                        <div class="escape-card">

                            <h5>
                                Estado del Sistema
                            </h5>

                            <p id="workerStatus">
                                Esperando procesamiento...
                            </p>

                            <div class="d-grid gap-2 mt-4">

                                <button
                                    id="btnProcesar"
                                    class="btn btn-neon"
                                >
                                    <i class="bi bi-cpu-fill"></i>
                                    Procesar 20,000 Datos
                                </button>

                            </div>

                        </div>

                    </div>

                    <div class="col-lg-8">

                        <div class="escape-card">

                            <h5>
                                Progreso
                            </h5>

                            <div
                                class="progress"
                                style="height: 30px;"
                            >

                                <div
                                    id="progressBar"
                                    class="progress-bar progress-bar-striped progress-bar-animated"
                                    role="progressbar"
                                    style="width: 0%;"
                                >
                                    0%
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="mt-4">

                    <div
                        id="statsContainer"
                        style="display:none;"
                    >

                        <div class="escape-card">

                            <h4 class="mb-4">
                                Resultados del Procesamiento
                            </h4>

                            <div class="row">

                                <div class="col-md-6">

                                    <div class="stat-card">

                                        <h6>
                                            Temperatura
                                        </h6>

                                        <p>
                                            Promedio:
                                            <strong id="tempAvg">
                                                --
                                            </strong>
                                        </p>

                                        <p>
                                            Máximo:
                                            <strong id="tempMax">
                                                --
                                            </strong>
                                        </p>

                                        <p>
                                            Mínimo:
                                            <strong id="tempMin">
                                                --
                                            </strong>
                                        </p>

                                    </div>

                                </div>

                                <div class="col-md-6">

                                    <div class="stat-card">

                                        <h6>
                                            Humedad
                                        </h6>

                                        <p>
                                            Promedio:
                                            <strong id="humAvg">
                                                --
                                            </strong>
                                        </p>

                                        <p>
                                            Máximo:
                                            <strong id="humMax">
                                                --
                                            </strong>
                                        </p>

                                        <p>
                                            Mínimo:
                                            <strong id="humMin">
                                                --
                                            </strong>
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="mt-4">

                    <button
                        id="btnNivel5"
                        class="btn btn-success"
                        disabled
                    >
                        Desbloquear Nivel 5
                    </button>

                </div>

            </div>

        </div>

    `;
}