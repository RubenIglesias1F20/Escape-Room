export function nivel3Page() {

    return `

        <div class="container-fluid">

            <div class="escape-card">

                <div class="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h3>
                            La Evidencia del Explorador
                        </h3>

                        <p class="text-secondary mb-0">
                            Capture evidencia visual para restaurar el acceso al sistema.
                        </p>

                    </div>

                    <span class="badge bg-warning text-dark">
                        NIVEL 3
                    </span>

                </div>

                <hr>

                <div class="row">

                    <div class="col-lg-7">

                        <div class="camera-container">

                            <video
                                id="cameraVideo"
                                autoplay
                                playsinline
                                muted
                                class="w-100 rounded"
                            ></video>

                        </div>

                    </div>

                    <div class="col-lg-5">

                        <div class="escape-card h-100">

                            <h5>
                                Estado de la Cámara
                            </h5>

                            <p id="cameraStatus">
                                Esperando inicialización...
                            </p>

                            <hr>

                            <div class="d-grid gap-2">

                                <button
                                    id="btnStartCamera"
                                    class="btn btn-neon"
                                >
                                    <i class="bi bi-camera-video-fill"></i>
                                    Activar Cámara
                                </button>

                                <button
                                    id="btnCapture"
                                    class="btn btn-success"
                                    disabled
                                >
                                    <i class="bi bi-camera-fill"></i>
                                    Capturar Evidencia
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="mt-4">

                    <h5>
                        Evidencia Capturada
                    </h5>

                    <div class="row">

                        <div class="col-md-6">

                            <canvas
                                id="photoCanvas"
                                width="640"
                                height="480"
                                class="w-100 rounded"
                            ></canvas>

                        </div>

                        <div class="col-md-6">

                            <div class="escape-card h-100 d-flex flex-column justify-content-center align-items-center">

                                <img
                                    id="savedPhoto"
                                    class="img-fluid rounded"
                                    style="display:none;"
                                >

                                <p
                                    id="photoMessage"
                                    class="text-center"
                                >
                                    No hay evidencia almacenada.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="mt-4">

                    <button
                        id="btnNivel4"
                        class="btn btn-success"
                        disabled
                    >
                        Desbloquear Nivel 4
                    </button>

                </div>

            </div>

        </div>

    `;
}