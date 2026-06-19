export function nivel1Page() {

    return `

        <div class="container-fluid">

            <div class="escape-card">

                <div class="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h3>
                            El Guardián de la Ubicación
                        </h3>

                        <p class="text-secondary mb-0">
                            Recupere las coordenadas perdidas de la ciudad inteligente.
                        </p>

                    </div>

                    <span class="badge bg-primary">
                        NIVEL 1
                    </span>

                </div>

                <hr>

                <div class="row g-4">

                    <div class="col-md-6">

                        <div class="escape-card">

                            <h5>
                                Estado del Satélite
                            </h5>

                            <p id="gpsStatus">
                                Esperando conexión...
                            </p>

                        </div>

                    </div>

                    <div class="col-md-6">

                        <div class="escape-card">

                            <h5>
                                Coordenadas
                            </h5>

                            <p>
                                Latitud:
                                <strong id="latitud">
                                    --
                                </strong>
                            </p>

                            <p>
                                Longitud:
                                <strong id="longitud">
                                    --
                                </strong>
                            </p>

                        </div>

                    </div>

                </div>

                <div class="mt-4 d-flex gap-3">

                    <button
                        id="btnUbicacion"
                        class="btn btn-neon"
                    >
                        <i class="bi bi-geo-alt-fill"></i>
                        Obtener Ubicación
                    </button>

                    <button
                        id="btnNivel2"
                        class="btn btn-success"
                        disabled
                    >
                        Desbloquear Nivel 2
                    </button>

                </div>

            </div>

        </div>

    `;
}