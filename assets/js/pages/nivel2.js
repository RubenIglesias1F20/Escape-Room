export function nivel2Page() {

    return `

        <div class="container-fluid">

            <div class="escape-card">

                <div class="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h3>
                            El Cartógrafo Perdido
                        </h3>

                        <p class="text-secondary mb-0">
                            Reconstruya el mapa de navegación de la ciudad inteligente.
                        </p>

                    </div>

                    <span class="badge bg-success">
                        NIVEL 2
                    </span>

                </div>

                <hr>

                <div class="row">

                    <div class="col-lg-8">

                        <canvas
                            id="mapCanvas"
                            width="900"
                            height="500"
                        ></canvas>

                    </div>

                    <div class="col-lg-4">

                        <div class="escape-card">

                            <h5>
                                Estado del Mapa
                            </h5>

                            <p id="mapStatus">
                                Esperando generación...
                            </p>

                            <hr>

                            <p>
                                Latitud:
                                <strong id="mapLat">
                                    --
                                </strong>
                            </p>

                            <p>
                                Longitud:
                                <strong id="mapLng">
                                    --
                                </strong>
                            </p>

                        </div>

                    </div>

                </div>

                <div class="mt-4 d-flex gap-3">

                    <button
                        id="btnGenerarMapa"
                        class="btn btn-neon"
                    >
                        <i class="bi bi-map-fill"></i>
                        Generar Mapa
                    </button>

                    <button
                        id="btnNivel3"
                        class="btn btn-success"
                        disabled
                    >
                        Desbloquear Nivel 3
                    </button>

                </div>

            </div>

        </div>

    `;
}