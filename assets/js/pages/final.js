export function finalPage() {

    return `

        <div class="container-fluid">

            <div class="escape-card text-center">

                <div class="mb-4">

                    <h2 class="mb-3">
                        Sistema Recuperado
                    </h2>

                    <p class="lead text-secondary">

                        Ha superado los cinco desafíos de la Cámara de los Cinco Desafíos.

                    </p>

                </div>

                <hr>

                <div class="row mt-4">

                    <div class="col-md-4">

                        <div class="stat-card">

                            <h5>
                                Ubicación
                            </h5>

                            <p>
                                Recuperada
                            </p>

                        </div>

                    </div>

                    <div class="col-md-4">

                        <div class="stat-card">

                            <h5>
                                Evidencia
                            </h5>

                            <p>
                                Verificada
                            </p>

                        </div>

                    </div>

                    <div class="col-md-4">

                        <div class="stat-card">

                            <h5>
                                Procesamiento
                            </h5>

                            <p>
                                Completado
                            </p>

                        </div>

                    </div>

                </div>

                <div class="mt-5">

                    <div
                        class="alert alert-success"
                        role="alert"
                    >

                        <h4 class="alert-heading">
                            Acceso Restablecido
                        </h4>

                        <p>

                            La base de datos de la ciudad inteligente ha sido restaurada exitosamente.

                        </p>

                    </div>

                </div>

                <div class="mt-4 d-flex justify-content-center gap-3">

                    <button
                        id="btnRestartGame"
                        class="btn btn-neon"
                    >
                        <i class="bi bi-arrow-repeat"></i>
                        Reiniciar Desafío
                    </button>

                </div>

            </div>

        </div>

    `;
}