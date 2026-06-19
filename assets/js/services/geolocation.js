export function getLocation() {

    return new Promise((resolve, reject) => {

        if (!navigator.geolocation) {

            reject(
                new Error(
                    "La geolocalización no es compatible con este navegador."
                )
            );

            return;
        }

        navigator.geolocation.getCurrentPosition(

            position => {

                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });

            },

            error => {

                switch (error.code) {

                    case error.PERMISSION_DENIED:

                        reject(
                            new Error(
                                "Permiso de ubicación denegado."
                            )
                        );

                        break;

                    case error.POSITION_UNAVAILABLE:

                        reject(
                            new Error(
                                "Ubicación no disponible."
                            )
                        );

                        break;

                    case error.TIMEOUT:

                        reject(
                            new Error(
                                "Tiempo de espera agotado."
                            )
                        );

                        break;

                    default:

                        reject(
                            new Error(
                                "Error desconocido al obtener ubicación."
                            )
                        );
                }
            },

            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    });
}