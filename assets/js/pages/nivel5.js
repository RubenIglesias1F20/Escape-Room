export function nivel5Page() {

    return `

        <div class="container-fluid">

            <div class="escape-card">

                <div class="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h3>
                            El Portal Cuántico
                        </h3>

                        <p class="text-secondary mb-0">
                            Procese 250,000 registros y recupere el acceso total al sistema.
                        </p>

                    </div>

                    <span class="badge bg-danger">
                        NIVEL 5
                    </span>

                </div>

                <hr>

                <div class="row">

                    <div class="col-lg-4">

                        <div class="escape-card">

                            <h5>
                                Estado del Portal
                            </h5>

                            <p id="portalStatus">
                                Esperando procesamiento...
                            </p>

                            <div class="d-grid mt-4">

                                <button
                                    id="btnPortal"
                                    class="btn btn-neon"
                                >
                                    <i class="bi bi-cpu-fill"></i>
                                    Procesar 250,000 Registros
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
                                    id="portalProgress"
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

                <div
                    id="portalResults"
                    class="mt-4"
                    style="display:none;"
                >

                    <div class="escape-card">

                        <h4 class="mb-4">
                            Estadísticas Recuperadas
                        </h4>

                        <div class="row">

                            <div class="col-md-4">

                                <div class="stat-card">

                                    <h6>
                                        Registros Válidos
                                    </h6>

                                    <h3 id="validRecords">
                                        --
                                    </h3>

                                </div>

                            </div>

                            <div class="col-md-4">

                                <div class="stat-card">

                                    <h6>
                                        Promedio Temperatura
                                    </h6>

                                    <h3 id="avgTemp">
                                        --
                                    </h3>

                                </div>

                            </div>

                            <div class="col-md-4">

                                <div class="stat-card">

                                    <h6>
                                        Promedio Presión
                                    </h6>

                                    <h3 id="avgPressure">
                                        --
                                    </h3>

                                </div>

                            </div>

                        </div>

                        <hr>

                        <div class="row mt-4">

                            <div class="col-lg-6">

                                <h5>
                                    Top 10 Temperaturas
                                </h5>

                                <ul
                                    id="topTemps"
                                    class="list-group"
                                ></ul>

                            </div>

                            <div class="col-lg-6">

                                <h5>
                                    Top 10 Presiones
                                </h5>

                                <ul
                                    id="topPressures"
                                    class="list-group"
                                ></ul>

                            </div>

                        </div>

                        <div class="mt-4 d-flex gap-3">

                            <button
                                id="btnExportJson"
                                class="btn btn-primary"
                            >
                                <i class="bi bi-download"></i>
                                Exportar JSON
                            </button>

                            <button
                                id="btnFinalizar"
                                class="btn btn-success"
                            >
                                Recuperar Sistema
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    `;
}